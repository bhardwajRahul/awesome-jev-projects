import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

test("tag selection keeps the current search query while still clearing conflicting filters", async () => {
  const { createServer } = await import("vite");
  const server = await createServer({ server: { middlewareMode: true, hmr: false, ws: false }, appType: "custom" });
  try {
    const { tagSelectionState } = await server.ssrLoadModule("/src/App.tsx");
    const rows = [
      { id: "logicrw:example", category: "Browser & OS Action", stars: 1200, tags: ["browser-automation"] },
      { id: "logicrw:other", category: "MCP & Integrations", stars: 5, tags: ["mcp-integrations"] },
    ];
    const state = { q: "specific project", category: "Browser & OS Action", tag: "all", quickFilter: "popular", sort: "updated", onlySaved: true };
    assert.equal(tagSelectionState(state, "browser-automation", rows, ["logicrw:example"]).q, "specific project");
    assert.deepEqual(tagSelectionState(state, "browser-automation", rows, ["logicrw:example"]), { ...state, tag: "browser-automation" });
    assert.deepEqual(tagSelectionState(state, "MCP", rows, ["logicrw:example"]), {
      ...state,
      tag: "mcp-integrations",
      category: "all",
      quickFilter: "all",
      onlySaved: false,
    });
    assert.deepEqual(tagSelectionState(state, "all", rows), { ...state, tag: "all" });
  } finally {
    await server.close();
  }
});

test("explorer search params round-trip without dropping unrelated keys", async () => {
  const { createServer } = await import("vite");
  const server = await createServer({ server: { middlewareMode: true, hmr: false, ws: false }, appType: "custom" });
  try {
    const { readExplorerState, writeExplorerSearchParams, localeNavigationUrl } = await server.ssrLoadModule("/src/App.tsx");
    const projects = [{ category: "Browser & OS Action", tags: ["MCP"] }];
    const state = {
      q: "浏览器",
      category: "Browser & OS Action",
      tag: "mcp-integrations",
      quickFilter: "popular",
      sort: "updated",
      onlySaved: true,
    };
    const params = new URLSearchParams("v=build&lang=zh&sponsor=1");
    writeExplorerSearchParams(params, state);
    assert.equal(params.get("v"), "build");
    assert.equal(params.get("lang"), "zh");
    assert.equal(params.get("sponsor"), "1");
    assert.deepEqual(readExplorerState(`?${params}`, projects), state);
    writeExplorerSearchParams(params, { q: "", category: "all", tag: "all", quickFilter: "all", sort: "stars", onlySaved: false });
    assert.deepEqual([...params.keys()].sort(), ["lang", "sponsor", "v"]);
    const japanese = localeNavigationUrl("https://logicrw.github.io/awesome-jev-projects/?v=build#project=semdecide", "ja", state);
    assert.deepEqual(readExplorerState(japanese.search, projects), state);
  } finally {
    await server.close();
  }
});

test("catalog snapshot parse, fingerprint and added-count detect new project ids", async () => {
  const { createServer } = await import("vite");
  const server = await createServer({ server: { middlewareMode: true, hmr: false, ws: false }, appType: "custom" });
  try {
    const {
      parseProjectSnapshot, catalogAddedCount, catalogFingerprint, shouldRevalidateCatalog, CATALOG_REVALIDATE_MS,
    } = await server.ssrLoadModule("/src/App.tsx");
    const row = {
      id: "logicrw:example",
      name: "example",
      author: "logicrw",
      url: "https://github.com/logicrw/example",
      category: "Browser & OS Action",
      plainSummary: "摘要",
      jevDecisionPoint: "判断",
      highlightBenefit: "收益",
      tags: ["browser-automation"],
      stars: 10,
      forks: 0,
      openIssues: 0,
      license: null,
      lastCommitAt: null,
      createdAt: null,
      summarySource: "author",
      claimStatus: "尚未独立复测",
      metadataFetchedAt: "2026-09-20T00:00:00.000Z",
    };
    assert.equal(parseProjectSnapshot(null), null);
    assert.equal(parseProjectSnapshot([]), null);
    assert.equal(parseProjectSnapshot([{ id: "x" }]), null);
    const parsed = parseProjectSnapshot([row]);
    assert.deepEqual(parsed?.map((project) => project.id), ["logicrw:example"]);
    const next = { ...row, id: "logicrw:new", stars: 2 };
    assert.equal(catalogAddedCount([row], [row, next]), 1);
    assert.equal(catalogAddedCount([row], [{ ...row, stars: 99 }]), 0);
    assert.notEqual(catalogFingerprint([row]), catalogFingerprint([{ ...row, stars: 99 }]));
    assert.equal(catalogFingerprint([row]), catalogFingerprint([row]));
    assert.equal(shouldRevalidateCatalog(1000, 1000 + CATALOG_REVALIDATE_MS - 1), false);
    assert.equal(shouldRevalidateCatalog(1000, 1000 + CATALOG_REVALIDATE_MS), true);
  } finally {
    await server.close();
  }
});

test("client source uses SWR revalidation and explorer URL sync instead of blocking on the HTML snapshot", async () => {
  const appSource = await readFile(new URL("../src/App.tsx", import.meta.url), "utf8");
  const catalogSource = await readFile(new URL("../src/hooks/useCatalogSWR.ts", import.meta.url), "utf8");
  const explorerSource = await readFile(new URL("../src/hooks/useExplorerState.ts", import.meta.url), "utf8");
  const source = `${appSource}\n${catalogSource}\n${explorerSource}`;
  assert.equal(source.includes("if (initialProjects && loadAttempt === 0) return;"), false);
  assert.match(source, /cache:\s*"no-cache"/);
  assert.match(source, /If-None-Match/);
  assert.match(source, /visibilitychange/);
  assert.match(source, /pageshow/);
  assert.match(source, /popstate/);
  assert.match(source, /history\.replaceState/);
  assert.match(source, /EXPLORER_URL_DEBOUNCE_MS/);
  assert.doesNotMatch(source, /q:\s*""/);
  assert.match(catalogSource, /cache:\s*"no-cache"/);
  assert.match(catalogSource, /If-None-Match/);
  assert.match(catalogSource, /visibilitychange/);
  assert.match(catalogSource, /pageshow/);
  assert.match(explorerSource, /popstate/);
  assert.match(explorerSource, /history\.replaceState/);
  assert.match(explorerSource, /EXPLORER_URL_DEBOUNCE_MS/);
});
