import assert from "node:assert/strict";
import test from "node:test";
import { createHash } from "node:crypto";
import {
  extractSubmittedRepository,
  inspectRepository,
  readLocalizedReadmes,
} from "./project-source.mjs";

const sha = "a".repeat(40);
const repository = "owner/tool";
const readme =
  "# Jev Agent\nThis Agent chooses the next action through api.typesafe.ai.";
const repo = {
  id: 123,
  name: "tool",
  full_name: repository,
  private: false,
  visibility: "public",
  description: "A Jev Agent",
  html_url: `https://github.com/${repository}`,
};
const encoded = (text, path = "README.md") => ({
  type: "file",
  path,
  size: Buffer.byteLength(text),
  encoding: "base64",
  content: Buffer.from(text).toString("base64"),
});
const missing = () => Object.assign(new Error("Not Found"), { status: 404 });
function fixture(overrides = {}) {
  const requests = [];
  const values = {
    [`/repos/${repository}`]: repo,
    [`/repos/${repository}/commits?per_page=1`]: [
      { sha, commit: { committer: { date: "2026-09-18T00:00:00Z" } } },
    ],
    [`/repos/${repository}/readme?ref=${sha}`]: encoded(readme),
    [`/repos/${repository}/contents?ref=${sha}`]: [],
    [`/repos/${repository}/git/trees/${sha}?recursive=1`]: { tree: [] },
    ...overrides,
  };
  const api = async (path) => {
    requests.push(path);
    if (!(path in values)) throw missing();
    if (values[path] instanceof Error) throw values[path];
    return values[path];
  };
  return { api, requests };
}
const verifyIntegration = (metadata, text) => ({
  verified:
    metadata.name !== "docs" &&
    /Jev/i.test(text) &&
    /api\.typesafe\.ai/.test(text),
  reason:
    metadata.name === "docs"
      ? "mention-only directory"
      : "no provider integration",
  evidence: text.split("\n").filter((line) => line.includes("api.typesafe.ai")),
});
const inspect = (f, extra = {}) =>
  inspectRepository({ api: f.api, repository, verifyIntegration, ...extra });

test("explicit submission field wins over unrelated evidence and example repositories", () => {
  for (const title of [
    "GitHub repository",
    "Project repository",
    "项目仓库",
    "Repository",
  ]) {
    const body = `An example is https://github.com/example/sample\n### ${title}\nhttps://github.com/owner/tool/tree/main/src\n### Evidence\nhttps://github.com/provider/sdk/blob/main/README.md`;
    assert.equal(extractSubmittedRepository(body), repository);
  }
  assert.equal(
    extractSubmittedRepository(
      "## 项目仓库\nowner/tool\n## 说明\nRun Agent choices",
    ),
    repository,
  );
  assert.equal(
    extractSubmittedRepository(
      "## Repository\n\n## Example\nhttps://github.com/example/sample",
    ),
    null,
  );
});

test("fallback accepts repeated deep links for one repository, rejects ambiguous targets", () => {
  assert.equal(
    extractSubmittedRepository(
      "https://github.com/owner/tool/blob/main/a.py\nhttps://github.com/OWNER/TOOL/tree/main",
    ),
    "OWNER/TOOL",
  );
  assert.equal(
    extractSubmittedRepository(
      "https://github.com/owner/tool https://github.com/another/tool",
    ),
    null,
  );
  assert.equal(
    extractSubmittedRepository(
      "### Repository\nowner/tool\n### Repository\nother/tool",
    ),
    null,
  );
  assert.equal(
    extractSubmittedRepository(
      "### Repository\nowner/tool\nExample: https://github.com/example/sample",
    ),
    null,
  );
  assert.equal(
    extractSubmittedRepository(
      "owner/tool\nExample: https://github.com/example/sample",
    ),
    null,
  );
});

test("submission extraction ignores quoted-code fields and rejects URL authority tricks", () => {
  assert.equal(
    extractSubmittedRepository(
      "```md\n## Repository\nhttps://github.com/evil/example\n```\n## Repository\nowner/tool",
    ),
    repository,
  );
  for (const body of [
    "https://evil.test/?next=https://github.com/owner/tool",
    "https://github.com@evil.test/owner/tool",
    "javascript:https://github.com/owner/tool",
    "https://github.com.evil.test/owner/tool",
    "<!-- https://github.com/owner/tool -->",
    "## Repository\n$(touch /tmp/pwned)",
  ])
    assert.equal(extractSubmittedRepository(body), null, body);
});

test("public metadata and immutable source bytes produce fixed-SHA provenance", async () => {
  const f = fixture();
  const result = await inspect(f);
  assert.equal(result.status, "accepted");
  assert.equal(result.sha, sha);
  assert.equal(result.readme, readme);
  assert.equal(
    result.evidence.files[0].url,
    `https://github.com/${repository}/blob/${sha}/README.md`,
  );
  assert.equal(
    result.evidence.files[0].hash,
    createHash("sha256").update(readme).digest("hex"),
  );
  assert.ok(
    f.requests
      .filter((path) => /readme|contents|trees/.test(path))
      .every((path) => path.includes(sha)),
  );
});

test("private, inaccessible and invalid repository metadata fail before source requests", async () => {
  for (const [metadata, reason] of [
    [{ ...repo, private: true }, "repository is not public"],
    [{ ...repo, visibility: "internal" }, "repository is not public"],
    [{ ...repo, id: "123" }, "invalid repository metadata"],
    [missing(), "repository not found or inaccessible"],
  ]) {
    const f = fixture({ [`/repos/${repository}`]: metadata });
    assert.deepEqual(await inspect(f), { status: "rejected", reason });
    assert.equal(f.requests.length, 1);
  }
});

test("duplicate and exclusion checks respect canonical names, case and numeric repository identity", async () => {
  for (const existing of [
    { url: "https://github.com/OWNER/TOOL" },
    { repo: "OWNER/TOOL" },
    { repositoryId: 123, repo: "former/old-name" },
  ])
    assert.equal(
      (await inspect(fixture(), { existingProjects: [existing] })).status,
      "duplicate",
    );
  assert.equal(
    (await inspect(fixture(), { exclusions: [{ repo: "OWNER/TOOL" }] })).status,
    "rejected",
  );
  const renamed = fixture({
    [`/repos/${repository}`]: { ...repo, full_name: "owner/new-name" },
  });
  assert.equal(
    (
      await inspect(renamed, {
        existingProjects: [{ url: "https://github.com/OWNER/NEW-NAME" }],
      })
    ).status,
    "duplicate",
  );
  assert.equal(renamed.requests.length, 1);
});

test("empty repositories reject and transient API errors remain distinguishable", async () => {
  const empty = fixture({
    [`/repos/${repository}/commits?per_page=1`]: Object.assign(
      new Error("Git Repository is empty."),
      { status: 409 },
    ),
  });
  assert.equal(
    (await inspect(empty)).reason,
    "repository has no accessible commit",
  );
  const timeout = Object.assign(new Error("request timed out"), {
    name: "TimeoutError",
  });
  await assert.rejects(
    inspect(fixture({ [`/repos/${repository}`]: timeout })),
    (error) => error === timeout,
  );
  const limited = Object.assign(new Error("secondary rate limit"), {
    status: 403,
    rateLimited: true,
  });
  await assert.rejects(
    inspect(fixture({ [`/repos/${repository}/readme?ref=${sha}`]: limited })),
    (error) => error === limited,
  );
});

test("issue claims and metadata alone cannot become integration evidence", async () => {
  const unrelated = fixture({
    [`/repos/${repository}/readme?ref=${sha}`]: encoded(
      "# Traditional Scala Typesafe library",
    ),
  });
  const result = await inspect(unrelated, { issueBody: readme });
  assert.equal(result.status, "rejected");
  assert.equal(result.readme.includes("api.typesafe.ai"), false);
});

test("documentation directories remain rejected even if README contains a code sample", async () => {
  const f = fixture({ [`/repos/${repository}`]: { ...repo, name: "docs" } });
  const result = await inspect(f);
  assert.equal(result.status, "rejected");
  assert.equal(result.reason, "mention-only directory");
  assert.equal(
    f.requests.some((path) => path.includes("/git/trees/")),
    false,
  );
});

test("Chinese README discovery reads local paths at the captured SHA, never remote links", async () => {
  const native = "这个 Agent 让 Jev 从页面状态中选择下一步动作。";
  const primary = `${readme}\n[中文](docs/README.zh-CN.md)\n[evil](https://evil.test/README.zh.md)\n[other](https://github.com/other/tool/blob/main/README.zh.md)`;
  const f = fixture({
    [`/repos/${repository}/readme?ref=${sha}`]: encoded(primary),
    [`/repos/${repository}/contents/docs/README.zh-CN.md?ref=${sha}`]: encoded(
      native,
      "docs/README.zh-CN.md",
    ),
    [`/repos/${repository}/contents?ref=${sha}`]: [
      { type: "file", path: "README_zh.md" },
    ],
    [`/repos/${repository}/contents/README_zh.md?ref=${sha}`]: encoded(
      native,
      "README_zh.md",
    ),
  });
  const result = await inspect(f);
  assert.equal(result.readmeFiles.length, 3);
  assert.ok(result.readme.includes(native));
  assert.ok(
    f.requests.every(
      (path) =>
        path.startsWith(`/repos/${repository}/`) ||
        path === `/repos/${repository}`,
    ),
  );
  assert.ok(
    result.readmeFiles.every((file) => file.url.includes(`/blob/${sha}/`)),
  );
});

test("localized README requests and bytes are bounded, symlinks are not source text", async () => {
  const primary =
    `${readme}\n` +
    Array.from({ length: 10 }, (_, i) => `[中文](docs${i}/README.zh.md)`).join(
      "\n",
    );
  const f = fixture({
    [`/repos/${repository}/contents/docs0/README.zh.md?ref=${sha}`]: {
      ...encoded("字".repeat(30_001)),
      size: 90_003,
    },
    [`/repos/${repository}/contents/docs1/README.zh.md?ref=${sha}`]: {
      ...encoded(readme),
      type: "symlink",
    },
  });
  const files = await readLocalizedReadmes({
    api: f.api,
    repository,
    sha,
    readme: primary,
    readmePath: "README.md",
  });
  assert.equal(files.length, 1);
  assert.equal(
    f.requests.filter((path) => path.includes("/contents/docs")).length,
    2,
  );
});

test("implementation inspection excludes dependency files, secrets, docs, vendored/generated code and symlinks", async () => {
  const ignored = [
    "docs/jev.py",
    "vendor/jev.py",
    "node_modules/jev.js",
    ".env/jev.py",
    "dist/jev.js",
    "tests/jev.py",
    "src/jev.generated.ts",
    "src/jev.min.js",
    "package-lock.json",
  ];
  const tree = ignored.map((path) => ({
    type: "blob",
    path,
    size: 100,
    mode: "100644",
  }));
  tree.push({
    type: "blob",
    path: "src/jev-link.py",
    size: 100,
    mode: "120000",
  });
  tree.push({ type: "blob", path: "src/jev.py", size: 100, mode: "100644" });
  const f = fixture({
    [`/repos/${repository}/readme?ref=${sha}`]: encoded("# Jev decision Agent"),
    [`/repos/${repository}/git/trees/${sha}?recursive=1`]: { tree },
    [`/repos/${repository}/contents/src/jev.py?ref=${sha}`]: encoded(
      'endpoint = "https://api.typesafe.ai"',
      "src/jev.py",
    ),
  });
  const result = await inspect(f);
  assert.equal(result.status, "accepted");
  assert.deepEqual(
    f.requests
      .filter((path) => path.includes("/contents/"))
      .map((path) => path.split("/contents/")[1].split("?")[0]),
    ["src/jev.py"],
  );
  assert.equal(result.evidence.files.at(-1).path, "src/jev.py");
});

test("large or unrelated source candidates cannot cause unbounded API scans", async () => {
  const tree = Array.from({ length: 25 }, (_, i) => ({
    type: "blob",
    path: `src/jev-${i}.py`,
    size: 20,
    mode: "100644",
  }));
  tree.unshift({
    type: "blob",
    path: "src/jev-big.py",
    size: 90_001,
    mode: "100644",
  });
  const f = fixture({
    [`/repos/${repository}/readme?ref=${sha}`]: encoded("# Jev Agent"),
    [`/repos/${repository}/git/trees/${sha}?recursive=1`]: { tree },
  });
  assert.equal((await inspect(f)).status, "rejected");
  const codeRequests = f.requests.filter((path) =>
    path.includes("/contents/src/"),
  );
  assert.equal(codeRequests.length, 8);
  assert.ok(
    codeRequests.every(
      (path) => path.includes(sha) && !path.includes("jev-big"),
    ),
  );
});

test("strict ingestion rejects README-only integration while radar compatibility remains unchanged", async () => {
  const installOnly = "# Jev decision Agent\nInstall the SDK: npm install @typesafe/jev";
  const reviewer = () => ({ verified: true, reason: "provider + Jev + implementation", evidence: [installOnly] });
  const f = fixture({ [`/repos/${repository}/readme?ref=${sha}`]: encoded(installOnly) });
  const result = await inspect(f, { verifyIntegration: reviewer, requireCodeEvidence: true });
  assert.equal(result.status, "rejected");
  assert.equal(result.reason, "no implementation source evidence");
  assert.ok(f.requests.some((path) => path.includes(`/git/trees/${sha}`)));
  assert.equal((await inspect(fixture(), { verifyIntegration: reviewer })).status, "accepted");
});

test("strict ingestion requires source usage beyond SDK installs, metadata, comments or traditional Typesafe", async () => {
  const cases = [
    ["src/main.py", 'from typesafe import Config\nconfig = Config()'],
    ["src/Main.java", 'import com.typesafe.config.Config;\nConfig c = ConfigFactory.load();'],
    ["src/main.py", '# endpoint = "https://api.typesafe.ai"\nprint("hello")'],
    ["src/main.js", 'const x = 1; // Jev endpoint api.typesafe.ai\nconsole.log(x)'],
    ["src/main.py", '"""Jev endpoint https://api.typesafe.ai"""\nprint("hello")'],
    ["src/main.js", '/* Jev https://api.typesafe.ai */\nconsole.log("hello")'],
    ["scripts/install.sh", 'npm install @typesafe/jev'],
    ["src/main.ts", 'import { TypeSafeClient } from "@typesafe/sdk";\nconsole.log("not implemented");'],
  ];
  for (const [path, text] of cases) {
    const f = fixture({
      [`/repos/${repository}/git/trees/${sha}?recursive=1`]: { tree: [{ type: "blob", path, mode: "100644", size: text.length }] },
      [`/repos/${repository}/contents/${path}?ref=${sha}`]: encoded(text, path),
    });
    const result = await inspect(f, { requireCodeEvidence: true });
    assert.equal(result.status, "rejected", path + ": " + text);
    assert.equal(result.reason, "no implementation source evidence");
  }
});

test("strict ingestion accepts immutable provider endpoint or TypeSafe SDK decision calls", async () => {
  const cases = [
    ["src/main.py", 'response = requests.post("https://api.typesafe.ai/v1/choice", json=payload)'],
    ["src/main.py", 'from typesafe import Client\nclient = Client()\nresult = client.choice(options)'],
    ["src/main.ts", 'import { TypeSafeClient } from "@typesafe/sdk";\nconst client = new TypeSafeClient();\nconst result = await client.choice(options);'],
    ["core/decision/TypeSafeBackend.kt", 'import me.ethanxu.typesafe.sdk.TypeSafeClient\nval client = TypeSafeClient()\nval decision = client.systemOne(input)'],
  ];
  for (const [path, text] of cases) {
    const f = fixture({
      [`/repos/${repository}/git/trees/${sha}?recursive=1`]: { tree: [{ type: "blob", path, mode: "100644", size: text.length }] },
      [`/repos/${repository}/contents/${path}?ref=${sha}`]: encoded(text, path),
    });
    const result = await inspect(f, { requireCodeEvidence: true });
    assert.equal(result.status, "accepted", path + ": " + text);
    assert.equal(result.evidence.implementationFiles.length, 1);
    assert.equal(result.evidence.implementationFiles[0].url, `https://github.com/${repository}/blob/${sha}/${path}`);
    assert.equal(result.evidence.implementationFiles[0].hash, createHash("sha256").update(text).digest("hex"));
  }
});

test("strict ingestion recognizes precise Jev models only with an OpenRouter request in source", async () => {
  const cases = [
    {
      text: "const input={model:'~typesafe/jev-latest',state,questions};\nconst response=await fetcher('https://openrouter.ai/api/alpha/decisions',{method:'POST',body:JSON.stringify(input)});",
      accepted: true,
    },
    {
      text: "const input={model:'typesafe/jev-1.13-20260917',state,questions};\nconst response=await fetch('https://openrouter.ai/api/alpha/decisions',{method:'POST',body:JSON.stringify(input)});",
      accepted: true,
    },
    {
      text: "const {OpenRouter}=await import('@openrouter/sdk');\nconst client=new OpenRouter({apiKey});\nconst result=await client.alpha.decisions.create({decisionsRequest:{model:'~typesafe/jev-latest',state,questions}});",
      accepted: true,
    },
    {
      text: "const models=['typesafe/jev-1.13-20260917']; console.log(models);",
      accepted: false,
    },
    {
      text: "fetch('https://openrouter.ai/api/alpha/decisions',{body:JSON.stringify({model:'another/llm',state,questions})});",
      accepted: false,
    },
    {
      text: "fetch('https://openrouter.ai.evil.test/api/alpha/decisions',{body:JSON.stringify({model:'~typesafe/jev-latest'})});",
      accepted: false,
    },
    {
      text: "fetch('https://openrouter.ai/api/alpha/decisions',{body:JSON.stringify({model:'not-typesafe/jev-latest'})});",
      accepted: false,
    },
    {
      text: "fetch('https://openrouter.ai/api/alpha/decisions',{body:JSON.stringify({model:'typesafe/jev-unrelated'})});",
      accepted: false,
    },
    {
      text: "// fetch('https://openrouter.ai/api/alpha/decisions',{model:'~typesafe/jev-latest'});\nconsole.log('not implemented');",
      accepted: false,
    },
  ];
  const path = "src/online.js";
  for (const { text, accepted } of cases) {
    const f = fixture({
      [`/repos/${repository}/git/trees/${sha}?recursive=1`]: { tree: [{ type: "blob", path, mode: "100644", size: text.length }] },
      [`/repos/${repository}/contents/${path}?ref=${sha}`]: encoded(text, path),
    });
    const result = await inspect(f, { requireCodeEvidence: true });
    assert.equal(result.status, accepted ? "accepted" : "rejected", text);
    assert.equal(result.evidence.implementationFiles.length, Number(accepted));
  }
});
