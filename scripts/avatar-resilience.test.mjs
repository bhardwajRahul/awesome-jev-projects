import test from "node:test";
import assert from "node:assert/strict";
import { readFile, lstat } from "node:fs/promises";
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
  assert.equal(isSafeAvatarUrl("https://user:secret@avatars.githubusercontent.com/u/1"), false);
  assert.equal(isSafeAvatarUrl("https://avatars.githubusercontent.com:444/u/1"), false);
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

async function checkAvatarCache(author, avatarUrls, readStat = lstat) {
  const filePath = join(root, "public/avatars", `${author}.png`);
  let fileStat;
  try {
    fileStat = await readStat(filePath);
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
    assert.ok(
      avatarUrls.length > 0 && avatarUrls.every(isSafeAvatarUrl),
      `Uncached author ${author} must have a trusted remote fallback for every project`
    );
    return false;
  }

  assert.ok(fileStat.isFile(), `Avatar for ${author} must be a regular file`);
  assert.ok(
    fileStat.size > 200,
    `Avatar for ${author} must be greater than 200 bytes, got ${fileStat.size}`
  );
  return true;
}

test("avatar static integrity: only missing files with trusted remote fallback are tolerated", async () => {
  const trusted = "https://avatars.githubusercontent.com/u/1";
  const missing = Object.assign(new Error("missing avatar"), { code: "ENOENT" });
  const missingStat = async () => { throw missing; };
  assert.equal(await checkAvatarCache("new-author", [trusted], missingStat), false);
  await assert.rejects(checkAvatarCache("new-author", [trusted, undefined], missingStat), /trusted remote fallback/);
  await assert.rejects(checkAvatarCache("new-author", ["https://example.com/avatar.png"], missingStat), /trusted remote fallback/);

  const denied = Object.assign(new Error("avatar access denied"), { code: "EACCES" });
  await assert.rejects(checkAvatarCache("existing-author", [trusted], async () => { throw denied; }), (error) => error === denied);
  await assert.rejects(checkAvatarCache("existing-author", [trusted], async () => ({ isFile: () => true, size: 200 })), /greater than 200 bytes/);
  await assert.rejects(checkAvatarCache("existing-author", [trusted], async () => ({ isFile: () => false, size: 4096 })), /regular file/);
  assert.equal(await checkAvatarCache("existing-author", [], async () => ({ isFile: () => true, size: 201 })), true);
});

test("avatar static integrity: public/avatars contains cached image files for catalog projects", async () => {
  const raw = await readFile(resolve(root, "src/data/projects.json"), "utf8");
  const projects = JSON.parse(raw);
  const authors = new Map();
  for (const project of projects) {
    if (!isSafeAuthorName(project.author)) continue;
    const author = project.author.trim().toLowerCase();
    if (!authors.has(author)) authors.set(author, []);
    authors.get(author).push(project.avatarUrl);
  }

  let verifiedCount = 0;
  let missingCount = 0;
  for (const [author, avatarUrls] of authors) {
    if (await checkAvatarCache(author, avatarUrls)) {
      verifiedCount++;
    } else {
      missingCount++;
    }
  }

  // Must retain our robust baseline cache (at least 280+ cached avatars)
  assert.ok(
    verifiedCount >= 280,
    `Expected at least 280 verified avatars in public/avatars, found ${verifiedCount}`
  );

  // Local cache ratio must be at least 85% to ensure resilient offline browsing
  const totalAuthors = verifiedCount + missingCount;
  assert.ok(
    totalAuthors > 0 && verifiedCount / totalAuthors >= 0.85,
    `Cache ratio must be >= 85%, got ${((verifiedCount / totalAuthors) * 100).toFixed(1)}% (${verifiedCount}/${totalAuthors})`
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
