import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { normalizeRepo, verifyIntegration, summarize, refreshMetadata, isProtectedSummarySource, PROTECTED_SUMMARY_SOURCES } from "./radar-sync.mjs";
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
  assert.equal(novel.category, "Decision Tools");
  const spam = summarize(
    { name: "spam", topics: ["jev", "free-airdrop", "ai"] },
    "no taxonomy phrases here",
    taxonomy,
  );
  assert.equal(spam.category, "Decision Tools");
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
test('reviewed exclusions can only remain as explicitly pending records', async () => {
  const projects=JSON.parse(await readFile(new URL('../src/data/projects.json',import.meta.url),'utf8'));
  const exclusions=JSON.parse(await readFile(new URL('../radar/exclusions.json',import.meta.url),'utf8'));
  const byRepo=new Map(projects.map(p=>[normalizeRepo(p.url).toLowerCase(),p]));
  for(const item of exclusions) {
    const project = byRepo.get(item.repo.toLowerCase());
    if (project) assert.equal(project.catalogStatus, 'review-pending', item.repo);
  }
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
  assert.deepEqual([...PROTECTED_SUMMARY_SOURCES], ["source-reviewed", "human-reviewed", "curated"]);
  const reviewed = projects.filter((p) => isProtectedSummarySource(p.summarySource));
  assert.ok(reviewed.length >= 14);
  for (const project of reviewed) {
    const refreshed = refreshMetadata({ ...project, pinned: false }, hostileMetadata, latestCommit);
    for (const key of ["plainSummary", "plainSummaryEn", "plainSummaryJa", "plainSummaryKo", "jevDecisionPoint", "jevDecisionPointEn", "jevDecisionPointJa", "jevDecisionPointKo", "highlightBenefit", "highlightBenefitEn", "highlightBenefitJa", "highlightBenefitKo", "category", "tags", "evidence", "summarySource", "claimStatus", "claimStatusEn", "claimStatusJa", "claimStatusKo", "sourceVerification", "sourceReviewedAt", "verificationStatus", "runtimeVerified"])
      assert.deepEqual(refreshed[key], project[key], `${project.id}.${key} was overwritten`);
    assert.equal(refreshed.forks, 9999, "ordinary project metadata still refreshes");
  }
});

test("curated copy is protected like human-reviewed and source-reviewed statuses", () => {
  const curated = {
    pinned: false,
    summarySource: "curated",
    plainSummary: "人工精炼的中文说明，不得被同步覆盖。",
    plainSummaryEn: "Curated English prose must survive metadata sync.",
    jevDecisionPoint: "保留原决策点。",
    highlightBenefit: "保留原用途说明。",
    category: "Context GC & Filter",
    tags: ["typed-decisions"],
    evidence: [{ url: "https://github.com/example/curated/blob/sha/src/main.ts" }],
    claimStatus: "人工审校。",
    verificationStatus: "integration-detected",
    runtimeVerified: false,
    stars: 3,
  };
  const refreshed = refreshMetadata(curated, hostileMetadata, latestCommit);
  assert.equal(refreshed.summarySource, "curated");
  assert.equal(refreshed.plainSummary, curated.plainSummary);
  assert.equal(refreshed.plainSummaryEn, curated.plainSummaryEn);
  assert.equal(refreshed.jevDecisionPoint, curated.jevDecisionPoint);
  assert.equal(refreshed.highlightBenefit, curated.highlightBenefit);
  assert.equal(refreshed.category, curated.category);
  assert.deepEqual(refreshed.tags, curated.tags);
  assert.deepEqual(refreshed.evidence, curated.evidence);
  assert.equal(refreshed.stars, 9999);
  assert.equal(refreshed.forks, 9999);
  assert.equal(isProtectedSummarySource("curated"), true);
  assert.equal(isProtectedSummarySource("human-reviewed"), true);
  assert.equal(isProtectedSummarySource("source-reviewed"), true);
  assert.equal(isProtectedSummarySource("readme-extractive"), false);
});

test("invalid remote star counts cannot erase core data", () => {
  for (const stargazers_count of [undefined, "9999", -1, NaN]) {
    assert.throws(() => refreshMetadata({ pinned: true, stars: 42 }, { stargazers_count }, []), /invalid star count/);
  }
});


test("OpenRouter Jev requires an exact model and provider request marker", () => {
  const code = `const input = {model: '~typesafe/jev-latest'};
    fetch('https://openrouter.ai/api/alpha/decisions', {method:'POST', body:JSON.stringify(input)});`;
  assert.equal(verifyIntegration({name:'jev-gomoku'}, code, {codeSources:[{path:'src/online.js',text:code}]}).verified, true);
  assert.equal(verifyIntegration({name:'jev-gomoku'}, "const model = '~typesafe/jev-latest';").verified, false);
  assert.equal(verifyIntegration({name:'jev-gomoku'}, code.replace('~typesafe/jev-latest', 'unrelated/jev-copy')).verified, false);
});


test("OpenRouter evidence cannot pair README/model text with a different implementation file", () => {
  const model = "const input={model:'~typesafe/jev-latest'};";
  const request = "fetch('https://openrouter.ai/api/alpha/decisions',{method:'POST',body:JSON.stringify(input)});";
  const repo={name:'jev-game'};
  assert.equal(verifyIntegration(repo, model+request).verified, false);
  assert.equal(verifyIntegration(repo, model+request, {codeSources:[{path:'src/request.js',text:request}]}).verified, false);
  assert.equal(verifyIntegration(repo, model+request, {codeSources:[{path:'src/model.js',text:model},{path:'src/request.js',text:request}]}).verified, false);
  assert.equal(verifyIntegration(repo, model+request, {codeSources:[{path:'README.md',text:model+request}]}).verified, false);
  assert.equal(verifyIntegration(repo, model+request, {codeSources:[{path:'src/request.js',text:'// '+model+request}]}).verified, false);
});
