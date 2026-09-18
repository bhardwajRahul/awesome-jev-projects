import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { normalizeRepo, verifyIntegration, summarize } from "./radar-sync.mjs";
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
