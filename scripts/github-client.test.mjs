import test from "node:test";
import assert from "node:assert/strict";
import { createGitHubClient } from "./github-client.mjs";

function fixture(responses, options = {}) {
  let time = 0;
  let active = 0;
  let maxActive = 0;
  const calls = [];
  const sleeps = [];
  const api = createGitHubClient({
    token: "test-token",
    now: () => time,
    sleep: async (ms) => {
      sleeps.push(ms);
      time += ms;
    },
    fetchImpl: async (url, init) => {
      active++;
      maxActive = Math.max(active, maxActive);
      calls.push({ url, at: time, init });
      await Promise.resolve();
      active--;
      const response = responses.shift();
      assert.ok(response, "unexpected extra GitHub request");
      if (response instanceof Error) throw response;
      return new Response(JSON.stringify(response.body ?? {}), {
        status: response.status ?? 200,
        headers: response.headers,
      });
    },
    ...options,
  });
  return { api, calls, sleeps, maxActive: () => maxActive };
}

test("concurrent callers are serialized with at least 1.5 seconds between requests", async () => {
  const f = fixture([
    { body: { id: 1 } },
    { body: { id: 2 } },
    { body: { id: 3 } },
  ]);
  const result = await Promise.all([
    f.api("/repos/a/1"),
    f.api("/repos/a/2"),
    f.api("/repos/a/3"),
  ]);
  assert.deepEqual(
    result.map((r) => r.id),
    [1, 2, 3],
  );
  assert.deepEqual(
    f.calls.map((c) => c.at),
    [0, 1500, 3000],
  );
  assert.equal(f.maxActive(), 1);
});

test("code-search retries retain the stricter 6.5-second request spacing", async () => {
  const f = fixture([{ status: 503 }, {}, {}, {}]);
  await f.api("/search/code?q=jev", { search: true, code: true });
  await f.api("/repos/a/b");
  await f.api("/search/code?q=typesafe", { search: true, code: true });
  assert.deepEqual(
    f.calls.map((c) => c.at),
    [0, 6500, 8000, 13000],
  );
});

test("repository searches preserve authenticated and anonymous search intervals", async () => {
  for (const [token, interval] of [
    ["test-token", 2200],
    [undefined, 6200],
  ]) {
    const f = fixture([{}, {}], { token });
    await f.api("/search/repositories?q=jev", { search: true });
    await f.api("/search/repositories?q=typesafe", { search: true });
    assert.deepEqual(
      f.calls.map((c) => c.at),
      [0, interval],
    );
  }
});

test("secondary 403 limits without headers back off at least 60 then 120 seconds", async () => {
  const limited = {
    status: 403,
    body: { message: "You have exceeded a secondary rate limit." },
  };
  const f = fixture([limited, limited, {}]);
  await f.api("/repos/a/b");
  assert.deepEqual(f.sleeps, [60500, 120500]);
  assert.deepEqual(
    f.calls.map((c) => c.at),
    [0, 60500, 181000],
  );
});

test("429 respects Retry-After seconds and HTTP dates", async () => {
  for (const retryAfter of ["90", new Date(90000).toUTCString()]) {
    const f = fixture([
      { status: 429, headers: { "retry-after": retryAfter } },
      {},
    ]);
    await f.api("/repos/a/b");
    assert.equal(f.calls[1].at, 90500);
  }
});

test("primary rate limits wait until the reset even when the error message is generic", async () => {
  const f = fixture([
    {
      status: 403,
      body: { message: "Forbidden" },
      headers: { "x-ratelimit-remaining": "0", "x-ratelimit-reset": "180" },
    },
    {},
  ]);
  await f.api("/repos/a/b");
  assert.equal(f.calls[1].at, 180500);
});

test("a non-rate-limit 403 is not retried and does not poison the request queue", async () => {
  const f = fixture([
    {
      status: 403,
      body: { message: "Resource not accessible by integration" },
    },
    {},
  ]);
  await assert.rejects(f.api("/search/code?q=jev"), {
    status: 403,
    message: "GitHub 403: Resource not accessible by integration",
  });
  await f.api("/repos/a/b");
  assert.equal(f.calls.length, 2);
  assert.equal(f.calls[1].at, 1500);
});

test("network and server retries also observe the global interval", async () => {
  const f = fixture([
    new Error("network interrupted"),
    { status: 502 },
    {},
    {},
  ]);
  await f.api("/repos/a/b");
  await f.api("/repos/a/c");
  assert.deepEqual(
    f.calls.map((c) => c.at),
    [0, 1500, 4500, 6000],
  );
});

test("exhausted rate limits stop later queued requests instead of hammering repositories", async () => {
  const limited = { status: 403, body: { message: "secondary rate limit" } };
  const f = fixture([limited, limited, limited]);
  const results = await Promise.allSettled([
    f.api("/repos/a/b"),
    f.api("/repos/a/c"),
  ]);
  assert.deepEqual(
    results.map((r) => r.status),
    ["rejected", "rejected"],
  );
  assert.ok(results.every((r) => r.reason.rateLimited));
  assert.equal(f.calls.length, 3);
});

test("rate-limit waits have a run-wide budget and never retry before a distant reset", async () => {
  const f = fixture([
    {
      status: 403,
      headers: { "x-ratelimit-remaining": "0", "x-ratelimit-reset": "3600" },
    },
  ]);
  await assert.rejects(f.api("/repos/a/b"), { status: 403, rateLimited: true });
  await assert.rejects(f.api("/repos/a/c"), { status: 403, rateLimited: true });
  assert.equal(f.calls.length, 1);
  assert.deepEqual(f.sleeps, []);
});

test("API credentials remain in request headers and are redacted from errors", async () => {
  const f = fixture([{ status: 401, body: { message: "invalid test-token" } }]);
  await assert.rejects(f.api("/repos/a/b"), {
    message: "GitHub 401: invalid [redacted]",
  });
  assert.equal(f.calls[0].init.headers.Authorization, "Bearer test-token");
  assert.equal(f.calls[0].url.includes("test-token"), false);
  assert.equal(f.calls[0].init.redirect, "manual");
});

test("same-origin GitHub redirects support renamed repositories, preserve pacing and stop after three hops", async () => {
  for (const status of [301, 302, 307, 308]) {
    const f = fixture([
      {
        status,
        headers: { location: "https://api.github.com/repos/new/name" },
      },
      { status, headers: { location: "/repositories/1234" } },
      { status, headers: { location: "/repos/final/name" } },
      { body: { id: 1234 } },
    ]);
    assert.deepEqual(await f.api("/repos/old/name"), { id: 1234 });
    assert.deepEqual(
      f.calls.map((c) => c.at),
      [0, 1500, 3000, 4500],
    );
    assert.equal(f.calls[3].url, "https://api.github.com/repos/final/name");
    assert.ok(
      f.calls.every(
        (c) => c.init.headers.Authorization === "Bearer test-token",
      ),
    );
  }
  const redirect = {
    status: 301,
    headers: { location: "/repos/redirect/loop" },
  };
  const f = fixture([redirect, redirect, redirect, redirect]);
  await assert.rejects(f.api("/repos/old/name"), /redirect rejected/);
  assert.equal(
    f.calls.length,
    4,
    "only the initial request and three follow-ups are sent",
  );
});

test("cross-origin and HTTP redirects are rejected without sending credentials to the destination", async () => {
  for (const location of [
    "https://evil.example/repos/a/b",
    "http://api.github.com/repos/a/b",
    "https://api.github.com.evil.example/repos/a/b",
    "//evil.example/repos/a/b",
    "https://user:password@api.github.com/repos/a/b",
  ]) {
    const f = fixture([{ status: 302, headers: { location } }]);
    await assert.rejects(f.api("/repos/old/name"), { status: 302 });
    assert.equal(f.calls.length, 1);
    assert.equal(f.calls[0].url, "https://api.github.com/repos/old/name");
    assert.equal(f.calls[0].init.redirect, "manual");
    assert.deepEqual(
      f.sleeps,
      [],
      "unsafe redirects are not retried as network errors",
    );
  }
});

test("POST is not automatically retried after an unknown write outcome", async () => {
  let requests = 0;
  const api = createGitHubClient({
    token: "test-token",
    writeRepository: "logicrw/test",
    fetchImpl: async () => {
      requests++;
      throw new TypeError("lost connection");
    },
    sleep: async () => {},
  });
  await assert.rejects(
    api("/repos/logicrw/test/issues/1/comments", {
      method: "POST",
      body: { body: "hello" },
    }),
  );
  assert.equal(requests, 1);
});
test("JSON mutations use request bodies and support an empty 204 response", async () => {
  const api = createGitHubClient({
    writeRepository: "logicrw/test",
    fetchImpl: async (url, options) => {
      assert.equal(options.method, "PATCH");
      assert.equal(options.headers["Content-Type"], "application/json");
      assert.deepEqual(JSON.parse(options.body), { state: "closed" });
      return new Response(null, { status: 204 });
    },
  });
  assert.equal(
    await api("/repos/logicrw/test/issues/1", {
      method: "PATCH",
      body: { state: "closed" },
    }),
    null,
  );
});

test("issue comments and labels POST mutations are permitted under write scope", async () => {
  let calledUrl = "";
  let calledMethod = "";
  let calledBody = null;
  const api = createGitHubClient({
    writeRepository: "logicrw/test",
    fetchImpl: async (url, options) => {
      calledUrl = url;
      calledMethod = options.method;
      calledBody = JSON.parse(options.body);
      return new Response(JSON.stringify([{ name: "needs-evidence" }]), { status: 200 });
    },
  });
  const res = await api("/repos/logicrw/test/issues/42/labels", {
    method: "POST",
    body: { labels: ["needs-evidence"] },
  });
  assert.equal(calledUrl, "https://api.github.com/repos/logicrw/test/issues/42/labels");
  assert.equal(calledMethod, "POST");
  assert.deepEqual(calledBody, { labels: ["needs-evidence"] });
  assert.deepEqual(res, [{ name: "needs-evidence" }]);
});



test("read clients reject every mutation before sending a token", async () => {
  const f = fixture([]);
  for (const method of ["POST", "PUT", "PATCH", "DELETE", "post"])
    await assert.rejects(f.api("/repos/logicrw/test/issues/1", { method }), /write scope/);
  assert.equal(f.calls.length, 0);
});

test("write scope cannot mutate another repository, account settings, arbitrary files or redirect", async () => {
  for (const path of ["/user/keys", "/repos/other/test/issues/1", "/repos/logicrw/test/contents/.github/workflows/evil.yml", "/repos/logicrw/test/issues/1?anything=1"])
    await assert.rejects(fixture([], { writeRepository: "logicrw/test" }).api(path, { method: "PUT" }), /write scope/);
  const f = fixture([{ status: 307, headers: { location: "/user/keys" } }], { writeRepository: "logicrw/test" });
  await assert.rejects(f.api("/repos/logicrw/test/issues/1/comments", { method: "POST", body: { body: "ok" } }), /redirect rejected/);
  assert.equal(f.calls.length, 1);
});

test("non-canonical and control-character API paths never reach fetch", async () => {
  const f = fixture([]);
  for (const path of ["/repos/a/../../user", "/repos/a/%2e%2e/", "/repos/a/\\b", "/repos/a/b#fragment", "/repos/a/b\n"])
    await assert.rejects(f.api(path));
  assert.equal(f.calls.length, 0);
});

test("transport failures redact a token from thrown messages", async () => {
  const f = fixture([new Error("network test-token")], { maxAttempts: 1 });
  await assert.rejects(f.api("/repos/a/b"), { message: "network [redacted]" });
});


test("Git object writes allow only one fixed JSON file and non-force main updates", async () => {
  const sha = "a".repeat(40);
  const validTree = { base_tree: sha, tree: [{ path: "src/data/projects.json", mode: "100644", type: "blob", content: "[]" }] };
  for (const [path, method, body] of [
    ["git/trees", "POST", { ...validTree, tree: [{ ...validTree.tree[0], path: ".github/workflows/evil.yml" }] }],
    ["git/trees", "POST", { ...validTree, tree: [validTree.tree[0], validTree.tree[0]] }],
    ["git/trees", "POST", { ...validTree, tree: [{ ...validTree.tree[0], mode: "120000" }] }],
    ["git/commits", "POST", { tree: sha, parents: [] }],
    ["git/refs/heads/main", "PATCH", { sha, force: true }],
    ["git/refs/heads/other", "PATCH", { sha, force: false }],
    ["contents/src/data/projects.json", "PUT", { content: "[]" }],
  ]) {
    const f = fixture([], { writeRepository: "logicrw/test" });
    await assert.rejects(f.api(`/repos/logicrw/test/${path}`, { method, body }), /write scope/);
    assert.equal(f.calls.length, 0);
  }
  const f = fixture([{}, {}, {}], { writeRepository: "logicrw/test" });
  await f.api("/repos/logicrw/test/git/trees", { method: "POST", body: validTree });
  await f.api("/repos/logicrw/test/git/commits", { method: "POST", body: { tree: sha, parents: [sha] } });
  await f.api("/repos/logicrw/test/git/refs/heads/main", { method: "PATCH", body: { sha, force: false } });
  assert.equal(f.calls.length, 3);
});

test("Git object writes allow bounded asset blobs and multi-asset tree entries", async () => {
  const sha = "b".repeat(40);
  const blobSha = "c".repeat(40);
  const f = fixture([{}, {}], { writeRepository: "logicrw/test" });
  await f.api("/repos/logicrw/test/git/blobs", {
    method: "POST",
    body: { encoding: "base64", content: Buffer.from("valid avatar content").toString("base64") },
  });
  await f.api("/repos/logicrw/test/git/trees", {
    method: "POST",
    body: {
      base_tree: sha,
      tree: [
        { path: "src/data/projects.json", mode: "100644", type: "blob", content: "[]" },
        { path: "README.md", mode: "100644", type: "blob", sha: blobSha },
        { path: "public/avatars/kubet.png", mode: "100644", type: "blob", sha: blobSha },
      ],
    },
  });
  assert.equal(f.calls.length, 2);

  // Rejects arbitrary unsafe path in tree
  const unsafeTree = fixture([], { writeRepository: "logicrw/test" });
  await assert.rejects(
    unsafeTree.api("/repos/logicrw/test/git/trees", {
      method: "POST",
      body: {
        base_tree: sha,
        tree: [
          { path: "src/data/projects.json", mode: "100644", type: "blob", content: "[]" },
          { path: "scripts/evil.js", mode: "100644", type: "blob", sha: blobSha },
        ],
      },
    }),
    /write scope/,
  );
});

