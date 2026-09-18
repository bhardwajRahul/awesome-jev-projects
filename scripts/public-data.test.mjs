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
