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
    sleep: async (ms) => { sleeps.push(ms); time += ms; },
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
  const f = fixture([{ body: { id: 1 } }, { body: { id: 2 } }, { body: { id: 3 } }]);
  const result = await Promise.all([f.api("/repos/a/1"), f.api("/repos/a/2"), f.api("/repos/a/3")]);
  assert.deepEqual(result.map((r) => r.id), [1, 2, 3]);
  assert.deepEqual(f.calls.map((c) => c.at), [0, 1500, 3000]);
  assert.equal(f.maxActive(), 1);
});

test("code-search retries retain the stricter 6.5-second request spacing", async () => {
  const f = fixture([{ status: 503 }, {}, {}, {}]);
  await f.api("/search/code?q=jev", { search: true, code: true });
  await f.api("/repos/a/b");
  await f.api("/search/code?q=typesafe", { search: true, code: true });
  assert.deepEqual(f.calls.map((c) => c.at), [0, 6500, 8000, 13000]);
});

test("repository searches preserve authenticated and anonymous search intervals", async () => {
  for (const [token, interval] of [["test-token", 2200], [undefined, 6200]]) {
    const f = fixture([{}, {}], { token });
    await f.api("/search/repositories?q=jev", { search: true });
    await f.api("/search/repositories?q=typesafe", { search: true });
    assert.deepEqual(f.calls.map((c) => c.at), [0, interval]);
  }
});

test("secondary 403 limits without headers back off at least 60 then 120 seconds", async () => {
  const limited = { status: 403, body: { message: "You have exceeded a secondary rate limit." } };
  const f = fixture([limited, limited, {}]);
  await f.api("/repos/a/b");
  assert.deepEqual(f.sleeps, [60500, 120500]);
  assert.deepEqual(f.calls.map((c) => c.at), [0, 60500, 181000]);
});

test("429 respects Retry-After seconds and HTTP dates", async () => {
  for (const retryAfter of ["90", new Date(90000).toUTCString()]) {
    const f = fixture([{ status: 429, headers: { "retry-after": retryAfter } }, {}]);
    await f.api("/repos/a/b");
    assert.equal(f.calls[1].at, 90500);
  }
});

test("primary rate limits wait until the reset even when the error message is generic", async () => {
  const f = fixture([{
    status: 403,
    body: { message: "Forbidden" },
    headers: { "x-ratelimit-remaining": "0", "x-ratelimit-reset": "180" },
  }, {}]);
  await f.api("/repos/a/b");
  assert.equal(f.calls[1].at, 180500);
});

test("a non-rate-limit 403 is not retried and does not poison the request queue", async () => {
  const f = fixture([{ status: 403, body: { message: "Resource not accessible by integration" } }, {}]);
  await assert.rejects(f.api("/search/code?q=jev"), { status: 403, message: "GitHub 403: Resource not accessible by integration" });
  await f.api("/repos/a/b");
  assert.equal(f.calls.length, 2);
  assert.equal(f.calls[1].at, 1500);
});

test("network and server retries also observe the global interval", async () => {
  const f = fixture([new Error("network interrupted"), { status: 502 }, {}, {}]);
  await f.api("/repos/a/b");
  await f.api("/repos/a/c");
  assert.deepEqual(f.calls.map((c) => c.at), [0, 1500, 4500, 6000]);
});

test("exhausted rate limits stop later queued requests instead of hammering repositories", async () => {
  const limited = { status: 403, body: { message: "secondary rate limit" } };
  const f = fixture([limited, limited, limited]);
  const results = await Promise.allSettled([f.api("/repos/a/b"), f.api("/repos/a/c")]);
  assert.deepEqual(results.map((r) => r.status), ["rejected", "rejected"]);
  assert.ok(results.every((r) => r.reason.rateLimited));
  assert.equal(f.calls.length, 3);
});

test("rate-limit waits have a run-wide budget and never retry before a distant reset", async () => {
  const f = fixture([{
    status: 403,
    headers: { "x-ratelimit-remaining": "0", "x-ratelimit-reset": "3600" },
  }]);
  await assert.rejects(f.api("/repos/a/b"), { status: 403, rateLimited: true });
  await assert.rejects(f.api("/repos/a/c"), { status: 403, rateLimited: true });
  assert.equal(f.calls.length, 1);
  assert.deepEqual(f.sleeps, []);
});

test("API credentials remain in request headers and are redacted from errors", async () => {
  const f = fixture([{ status: 401, body: { message: "invalid test-token" } }]);
  await assert.rejects(f.api("/repos/a/b"), { message: "GitHub 401: invalid [redacted]" });
  assert.equal(f.calls[0].init.headers.Authorization, "Bearer test-token");
  assert.equal(f.calls[0].url.includes("test-token"), false);
  assert.equal(f.calls[0].init.redirect, "manual");
});

test("same-origin GitHub redirects support renamed repositories, preserve pacing and stop after three hops", async () => {
  for (const status of [301, 302, 307, 308]) {
    const f = fixture([
      { status, headers: { location: "https://api.github.com/repos/new/name" } },
      { status, headers: { location: "/repositories/1234" } },
      { status, headers: { location: "/repos/final/name" } },
      { body: { id: 1234 } },
    ]);
    assert.deepEqual(await f.api("/repos/old/name"), { id: 1234 });
    assert.deepEqual(f.calls.map((c) => c.at), [0, 1500, 3000, 4500]);
    assert.equal(f.calls[3].url, "https://api.github.com/repos/final/name");
    assert.ok(f.calls.every((c) => c.init.headers.Authorization === "Bearer test-token"));
  }
  const redirect = { status: 301, headers: { location: "/repos/redirect/loop" } };
  const f = fixture([redirect, redirect, redirect, redirect]);
  await assert.rejects(f.api("/repos/old/name"), /redirect rejected/);
  assert.equal(f.calls.length, 4, "only the initial request and three follow-ups are sent");
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
    assert.deepEqual(f.sleeps, [], "unsafe redirects are not retried as network errors");
  }
});
