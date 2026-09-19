import test from "node:test";
import assert from "node:assert/strict";
import { publicProjects } from "./prepare-public-data.mjs";
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
