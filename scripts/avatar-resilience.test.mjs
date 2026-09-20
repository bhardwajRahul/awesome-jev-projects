import test from "node:test";
import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import { resolve, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { createServer } from "vite";
import {
  isSafeAuthorName,
  isSafeAvatarUrl,
  getLocalAvatarPath,
  getAvatarSources,
  isAvatarCached,
  markAvatarCached,
  prefetchAvatars,
} from "../src/lib/avatar.mjs";

const root = resolve(fileURLToPath(import.meta.url), "../..");

test("avatar validator: isSafeAuthorName validates author usernames correctly", () => {
  assert.equal(isSafeAuthorName("langchain-ai"), true);
  assert.equal(isSafeAuthorName("browser-use"), true);
  assert.equal(isSafeAuthorName("0xNatoshi"), true);
  assert.equal(isSafeAuthorName("can1357"), true);
  assert.equal(isSafeAuthorName("foo.bar_baz"), true);

  // Rejects path traversal and suspicious characters
  assert.equal(isSafeAuthorName("../evil"), false);
  assert.equal(isSafeAuthorName("foo/bar"), false);
  assert.equal(isSafeAuthorName("foo\\bar"), false);
  assert.equal(isSafeAuthorName("author with spaces"), false);
  assert.equal(isSafeAuthorName("<script>"), false);
  assert.equal(isSafeAuthorName(""), false);
  assert.equal(isSafeAuthorName(null), false);
  assert.equal(isSafeAuthorName(undefined), false);
});

test("avatar validator: isSafeAvatarUrl only accepts https avatars.githubusercontent.com", () => {
  assert.equal(
    isSafeAvatarUrl("https://avatars.githubusercontent.com/u/126733545?v=4"),
    true
  );
  assert.equal(
    isSafeAvatarUrl("https://avatars.githubusercontent.com/u/192012301?v=4&s=80"),
    true
  );

  // Rejects other hosts and insecure protocols
  assert.equal(isSafeAvatarUrl("http://avatars.githubusercontent.com/u/1"), false);
  assert.equal(isSafeAvatarUrl("https://example.com/avatar.png"), false);
  assert.equal(isSafeAvatarUrl("https://evil.com/?target=avatars.githubusercontent.com"), false);
  assert.equal(isSafeAvatarUrl("javascript:alert(1)"), false);
  assert.equal(isSafeAvatarUrl(""), false);
  assert.equal(isSafeAvatarUrl(null), false);
});

test("avatar resolver: getLocalAvatarPath produces lowercase sanitized relative paths", () => {
  assert.equal(
    getLocalAvatarPath("LangChain-AI"),
    "/awesome-jev-projects/avatars/langchain-ai.png"
  );
  assert.equal(
    getLocalAvatarPath("Browser-Use", "/"),
    "/avatars/browser-use.png"
  );
  assert.equal(getLocalAvatarPath(""), null);
  assert.equal(getLocalAvatarPath("../../bad"), null);
});

test("avatar resolver: getAvatarSources orders local same-origin first and remote second", () => {
  const sources = getAvatarSources(
    "LangChain-AI",
    "https://avatars.githubusercontent.com/u/126733545?v=4"
  );
  assert.deepEqual(sources, [
    "/awesome-jev-projects/avatars/langchain-ai.png",
    "https://avatars.githubusercontent.com/u/126733545?v=4",
  ]);

  // If remote is untrusted, only local source is returned
  const untrusted = getAvatarSources("foo", "https://untrusted.com/a.png");
  assert.deepEqual(untrusted, ["/awesome-jev-projects/avatars/foo.png"]);

  // If author is invalid, only valid remote source is returned
  const invalidAuthor = getAvatarSources(
    "../invalid",
    "https://avatars.githubusercontent.com/u/1"
  );
  assert.deepEqual(invalidAuthor, ["https://avatars.githubusercontent.com/u/1"]);
});

test("avatar static integrity: public/avatars contains cached image files for catalog projects", async () => {
  const raw = await readFile(resolve(root, "src/data/projects.json"), "utf8");
  const projects = JSON.parse(raw);
  const authors = [...new Set(projects.map((p) => p.author))].filter(Boolean);

  let verifiedCount = 0;
  for (const author of authors) {
    if (!isSafeAuthorName(author)) continue;
    const filePath = join(root, "public/avatars", `${author.toLowerCase()}.png`);
    const fileStat = await stat(filePath);
    assert.ok(
      fileStat.size > 200,
      `Avatar for ${author} must be at least 200 bytes, got ${fileStat.size}`
    );
    verifiedCount++;
  }

  assert.ok(
    verifiedCount >= 280,
    `Expected at least 280 verified avatars in public/avatars, found ${verifiedCount}`
  );
});

test("avatar memory cache: tracks loaded avatars and supports prefetch guard in non-browser env", () => {
  assert.equal(isAvatarCached("/sample-test-avatar.png"), false);
  markAvatarCached("/sample-test-avatar.png");
  assert.equal(isAvatarCached("/sample-test-avatar.png"), true);

  // In Node environment, prefetchAvatars safely no-ops without throwing
  assert.doesNotThrow(() => {
    prefetchAvatars([{ author: "foo" }, null, undefined]);
  });
});
