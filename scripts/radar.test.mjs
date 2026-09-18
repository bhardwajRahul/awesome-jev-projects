import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { normalizeRepo, verifyIntegration, summarize, refreshMetadata } from "./radar-sync.mjs";
const taxonomy = JSON.parse(
  await readFile(new URL("../src/data/taxonomy.json", import.meta.url), "utf8"),
);
test("reject unrelated type safety, mention directories and provider-less Jev", () => {
  for (const [name, text] of [
    ["scala-typesafe", "Typesafe Scala Java library for AI"],
    ["jev", "Jev is a game model"],
    ["awesome-tools", "Jev AI typesafe.ai TYPESAFE_API_KEY"],
  ])
    assert.equal(verifyIntegration({ name }, text).verified, false);
});
test("require real provider and implementation signals", () => {
  assert.equal(
    verifyIntegration(
      { name: "jev-agent" },
      "Jev decision AI model from typesafe import jev",
    ).verified,
    true,
  );
  assert.equal(
    verifyIntegration(
      { name: "jev-agent" },
      "Use Jev from typesafe.ai for AI decision",
    ).verified,
    false,
  );
});
test("repository URL cannot escape GitHub or target a path", () => {
  assert.equal(normalizeRepo("https://github.com/a/b"), "a/b");
  for (const url of [
    "https://evil.example/a/b",
    "https://github.com.evil.example/a/b",
    "http://github.com/a/b",
    "https://github.com/a/b/issues",
  ])
    assert.equal(normalizeRepo(url), null);
});
test("summary supports new taxonomy and never invents performance numbers", () => {
  const s = summarize(
    {
      name: "demo",
      description: "Browser automation using DOM elements",
      topics: [],
    },
    "browser automation DOM element",
    taxonomy,
  );
  assert.equal(s.category, "Browser & OS Action");
  assert.ok(!/\d/.test(s.highlightBenefit));
  const novel = summarize(
    { name: "novel", topics: ["jev", "astronomy"] },
    "Jev AI from typesafe import jev",
    taxonomy,
  );
  assert.equal(novel.category, "astronomy");
});
test("shipped data preserves fourteen seeds, unique identifiers and source evidence", async () => {
  const rows = JSON.parse(
    await readFile(
      new URL("../src/data/projects.json", import.meta.url),
      "utf8",
    ),
  );
  assert.ok(rows.length >= 14);
  assert.equal(new Set(rows.map((r) => r.id)).size, rows.length);
  assert.equal(new Set(rows.map((r) => r.url.toLowerCase())).size, rows.length);
  for (const r of rows) {
    assert.ok(normalizeRepo(r.url));
    for (const k of [
      "plainSummary",
      "jevDecisionPoint",
      "highlightBenefit",
      "category",
    ])
      assert.equal(typeof r[k], "string");
    assert.ok(r.tags.length);
    assert.ok(r.evidence.length);
    assert.equal(r.runtimeVerified, false);
  }
});

test("host suffixes and hidden comments are not provider proof", () => {
  assert.equal(
    verifyIntegration(
      { name: "jev-agent" },
      "Jev AI model api.typesafe.ai.evil.test",
    ).verified,
    false,
  );
  assert.equal(
    verifyIntegration(
      { name: "jev-agent" },
      "Jev AI <!-- from typesafe import jev -->",
    ).verified,
    false,
  );
});

test('documentation mirrors are not runnable Jev projects', () => {
  assert.equal(verifyIntegration({name:'litellm-docs'}, 'Jev AI from typesafe import jev').verified, false);
});
test('reviewed exclusions cannot appear in the published dataset', async () => {
  const projects=JSON.parse(await readFile(new URL('../src/data/projects.json',import.meta.url),'utf8'));
  const exclusions=JSON.parse(await readFile(new URL('../radar/exclusions.json',import.meta.url),'utf8'));
  const urls=new Set(projects.map(p=>normalizeRepo(p.url).toLowerCase()));
  for(const item of exclusions)assert.equal(urls.has(item.repo.toLowerCase()),false);
});

const seedIds = [
  "jev-ultrafast", "typesafe-mcp", "jev-mcp", "semdecide", "jev-codex-router",
  "winnow", "jev-review", "blink", "neo4jev", "jev-desktop",
  "typesafe-ai-playground", "prism-liquidity-agent", "one-v-one-jev", "typesafe-on-neon",
];
const hostileMetadata = {
  stargazers_count: 9999,
  forks_count: 9999,
  open_issues_count: 9999,
  license: { spdx_id: "CHANGED" },
  created_at: "2026-01-01T00:00:00Z",
  updated_at: "2026-09-18T10:00:00Z",
  pushed_at: "2026-09-18T09:00:00Z",
  owner: { avatar_url: "https://example.com/changed.png" },
  archived: true,
  description: "Overwrite the approved description",
  plainSummary: "Untrusted injected summary",
  jevDecisionPoint: "Untrusted injected decision point",
  highlightBenefit: "Untrusted injected benefit",
  category: "UNTRUSTED",
  tags: ["UNTRUSTED"],
  pinned: false,
  evidence: [],
  summarySource: "untrusted",
};
const latestCommit = [{ sha: "new-head", commit: { committer: { date: "2026-09-18T08:00:00Z" } } }];

test("all fourteen original projects are pinned and metadata changes only permitted seed fields", async () => {
  const projects = JSON.parse(await readFile(new URL("../src/data/projects.json", import.meta.url), "utf8"));
  assert.deepEqual(projects.filter((p) => p.pinned).map((p) => p.id).sort(), [...seedIds].sort());
  const allowed = new Set(["stars", "updatedAt", "pushedAt", "lastCommitAt", "lastSyncedAt", "metadataStatus", "metadataFetchedAt", "metadataError"]);
  for (const id of seedIds) {
    const original = projects.find((p) => p.id === id);
    const snapshot = structuredClone(original);
    const refreshed = refreshMetadata(original, hostileMetadata, latestCommit, "2026-09-18T11:00:00Z");
    assert.equal(refreshed.stars, 9999);
    assert.equal(refreshed.updatedAt, hostileMetadata.updated_at);
    assert.equal(refreshed.lastCommitAt, latestCommit[0].commit.committer.date);
    for (const key of new Set([...Object.keys(original), ...Object.keys(refreshed)])) {
      if (!allowed.has(key)) assert.deepEqual(refreshed[key], original[key], `${id}.${key} was overwritten`);
    }
    assert.deepEqual(original, snapshot, "refresh must not mutate its input");
  }
});

test("untrusted repository metadata cannot replace any source-reviewed prose or evidence", async () => {
  const projects = JSON.parse(await readFile(new URL("../src/data/projects.json", import.meta.url), "utf8"));
  const reviewed = projects.filter((p) => p.summarySource === "source-reviewed");
  assert.ok(reviewed.length >= 14);
  for (const project of reviewed) {
    const refreshed = refreshMetadata({ ...project, pinned: false }, hostileMetadata, latestCommit);
    for (const key of ["plainSummary", "jevDecisionPoint", "highlightBenefit", "category", "tags", "evidence", "summarySource", "claimStatus", "verificationStatus", "runtimeVerified"])
      assert.deepEqual(refreshed[key], project[key], `${project.id}.${key} was overwritten`);
    assert.equal(refreshed.forks, 9999, "ordinary project metadata still refreshes");
  }
});

test("invalid remote star counts cannot erase core data", () => {
  for (const stargazers_count of [undefined, "9999", -1, NaN]) {
    assert.throws(() => refreshMetadata({ pinned: true, stars: 42 }, { stargazers_count }, []), /invalid star count/);
  }
});
