import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { publicProjects, syncOgCard } from "./prepare-public-data.mjs";
test("public projection excludes diagnostics, API errors, discovery queries, and credentials", () => {
  const [project] = publicProjects([
    {
      id: "demo",
      name: "demo",
      plainSummary: "Human reviewed",
      pinned: true,
      metadataError: "internal diagnostic",
      apiToken: "do-not-publish",
      GITHUB_TOKEN: "do-not-publish",
      discovery: { query: "internal" },
      sourceHash: "internal",
    },
  ]);
  assert.deepEqual(project, {
    id: "demo",
    name: "demo",
    plainSummary: "Human reviewed",
    pinned: true,
  });
});

test("public projection preserves optional English copy without inventing missing translations", () => {
  const translated = {
    id: "translated",
    plainSummary: "原简介",
    plainSummaryEn: "Original summary",
    jevDecisionPointEn: "Choose one candidate",
    highlightBenefitEn: "Keep the result typed",
    claimStatusEn: "Not independently tested",
  };
  const originalOnly = { id: "original-only", plainSummary: "只有原简介" };
  assert.deepEqual(publicProjects([translated, originalOnly]), [
    translated,
    originalOnly,
  ]);
});

test("public projection includes only explicit public search metadata without mutating its source", () => {
  const original = {
    id: "metadata",
    topics: ["  browser-automation ", "rust", "rust"],
    description: " A repository for browser automation. ",
    evidenceLines: [" Uses a browser to inspect page elements. ", "Returns typed decisions."],
    evidenceNote: "Internal source review scratch",
    sourcePath: "/private/reviewer/source.py",
  };
  const snapshot = structuredClone(original);
  assert.deepEqual(publicProjects([original]), [{
    id: "metadata",
    topics: ["browser-automation", "rust"],
    description: "A repository for browser automation.",
    evidenceLines: ["Uses a browser to inspect page elements.", "Returns typed decisions."],
  }]);
  assert.deepEqual(original, snapshot);
});

test("public search metadata drops malformed fields, internal objects, and legacy line references", () => {
  const [mixed, numeric, range, text] = publicProjects([
    {
      id: "mixed",
      topics: [false, 123, null, { name: "internal" }, "", "valid-topic", "/private/source", "a".repeat(51), "sk-" + "x".repeat(30)],
      description: { text: "Internal diagnostic" },
      evidenceLines: [7, 18, false, null, {}, { text: "Internal note", sourcePath: "/private/source" }, { snippet: "Raw source" }, "L35-L95", "12", "lines 15-45", "Uses a typed result schema."],
    },
    { id: "numeric", topics: "not-an-array", evidenceLines: [7, 18] },
    { id: "range", evidenceLines: "L15-L45" },
    { id: "text", evidenceLines: "Explicit public evidence prose." },
  ]);
  assert.deepEqual(mixed, { id: "mixed", topics: ["valid-topic"], evidenceLines: ["Uses a typed result schema."] });
  assert.deepEqual(numeric, { id: "numeric" });
  assert.deepEqual(range, { id: "range" });
  assert.deepEqual(text, { id: "text", evidenceLines: ["Explicit public evidence prose."] });
});

test("new public prose fields reject recognizable credentials, private paths, and source code", () => {
  const unsafe = [
    "/Users/reviewer/Projects/private/source.py",
    "Read ~/private/notes for evidence.",
    "C:\\Users\\reviewer\\private.txt",
    "API_KEY=do-not-publish-this-value",
    "Bearer private-credential-value",
    "github_pat_" + "x".repeat(30),
    "```python\nprint('source')\n```",
    "const result = client.choose(input);",
    "from private_client import token",
    "<script>internalSource()</script>",
  ];
  for (const value of unsafe) {
    assert.deepEqual(publicProjects([{ id: "unsafe", description: value, evidenceLines: [value] }]), [{ id: "unsafe" }]);
  }
});

test("public search metadata has bounded size and omits overlong prose instead of truncating claims", () => {
  const [bounded, oversized] = publicProjects([
    {
      id: "bounded",
      topics: Array.from({ length: 25 }, (_, i) => `topic-${i}`),
      description: "d".repeat(1000),
      evidenceLines: Array.from({ length: 15 }, (_, i) => `Public evidence statement ${i}.`),
    },
    { id: "oversized", description: "d".repeat(1001), evidenceLines: ["e".repeat(401)] },
  ]);
  assert.equal(bounded.topics.length, 20);
  assert.equal(bounded.description.length, 1000);
  assert.equal(bounded.evidenceLines.length, 12);
  assert.deepEqual(oversized, { id: "oversized" });
});

test("pending entries exclude every new search metadata field", () => {
  const [published] = publicProjects([{
    id: "pending-metadata",
    catalogStatus: "review-pending",
    topics: ["unverified-integration"],
    description: "Unsupported description.",
    evidenceLines: ["Unsupported evidence claim."],
    reviewSources: [],
  }]);
  for (const field of ["topics", "description", "evidenceLines"]) {
    assert.ok(!Object.hasOwn(published, field), `Pending entry must omit ${field}`);
  }
});

test("pending entries retain identity but do not republish unverified source claims", () => {
  const original = {id:"pending",url:"https://github.com/logicrw/pending",catalogStatus:"review-pending",plainSummary:"Unsupported claim",plainSummaryEn:"Guaranteed results",reviewReasonEn:"Source is unavailable.",reviewSources:[],tags:["typed-decisions","sdk-clients"]};
  const snapshot=structuredClone(original);
  const [published]=publicProjects([original]);
  assert.equal(published.id,original.id);
  assert.equal(published.url,original.url);
  assert.equal(published.license,null);
  assert.equal(published.licenseStatus,"unconfirmed");
  assert.equal(published.plainSummaryEn,"Source is unavailable.");
  assert.ok(!JSON.stringify(published).includes("Guaranteed results"));
  assert.ok(!JSON.stringify(published).includes("Unsupported claim"));
  assert.deepEqual(original,snapshot);
  assert.ok(published.plainSummaryJa && published.plainSummaryKo);
});

test("syncOgCard synchronizes og-card.svg metrics dynamically to match catalog count", async () => {
  await syncOgCard(389);
  const svg = await readFile(new URL("../public/og-card.svg", import.meta.url), "utf8");
  assert.ok(svg.includes(">389+</text>"), "og-card.svg metric must contain 389+");
  assert.ok(svg.includes("JEV-SYS1-CORE · #389"), "og-card.svg core ID must contain #389");
});

