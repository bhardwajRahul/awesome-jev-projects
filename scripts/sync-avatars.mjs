import { readFile, mkdir, lstat, open } from "node:fs/promises";
import { constants } from "node:fs";
import { fileURLToPath } from "node:url";
import { resolve, join } from "node:path";
import { isSafeAuthorName, isSafeAvatarUrl } from "../src/lib/avatar.mjs";

const root = resolve(fileURLToPath(import.meta.url), "../..");
const MAX_AVATAR_BYTES = 1024 * 1024;

function isAvatarImage(buffer) {
  if (buffer.length <= 200 || buffer.length > MAX_AVATAR_BYTES) return false;
  return buffer.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))
    || (buffer[0] === 0xff && buffer[1] === 0xd8 && buffer[2] === 0xff && buffer.subarray(-2).equals(Buffer.from([0xff, 0xd9])))
    || ["GIF87a", "GIF89a"].includes(buffer.subarray(0, 6).toString("ascii"))
    || (buffer.subarray(0, 4).toString("ascii") === "RIFF" && buffer.subarray(8, 12).toString("ascii") === "WEBP");
}

export async function syncAvatars({ quiet = false, timeoutMs = 8000, concurrency = 10, rootDir = root, fetchImpl = fetch } = {}) {
  if (!Number.isFinite(timeoutMs) || timeoutMs <= 0 || !Number.isInteger(concurrency) || concurrency < 1) {
    throw new Error("Avatar sync requires a positive timeout and concurrency");
  }
  const raw = await readFile(resolve(rootDir, "src/data/projects.json"), "utf8");
  const projects = JSON.parse(raw);

  const publicDir = resolve(rootDir, "public");
  const publicAvatarsDir = join(publicDir, "avatars");
  for (const directory of [publicDir, publicAvatarsDir]) {
    await mkdir(directory, { recursive: true });
    if (!(await lstat(directory)).isDirectory()) throw new Error("Avatar directories must not be symlinks or non-directories");
  }

  const authorsMap = new Map();
  for (const p of projects) {
    if (isSafeAuthorName(p.author) && isSafeAvatarUrl(p.avatarUrl)) {
      const url = new URL(p.avatarUrl);
      const key = p.author.trim().toLowerCase();
      if (!authorsMap.has(key)) authorsMap.set(key, { author: key, url });
    }
  }

  const list = Array.from(authorsMap.entries());
  let downloaded = 0;
  let skipped = 0;
  let failed = 0;
  let index = 0;

  async function worker() {
    while (index < list.length) {
      const i = index++;
      const [key, { author, url }] = list[i];
      const dest = join(publicAvatarsDir, `${key}.png`);

      try {
        const fileStat = await lstat(dest);
        if (!fileStat.isFile()) throw new Error(`Avatar for ${author} must be a regular file, not a symlink`);
        if (fileStat.size > 200 && fileStat.size <= MAX_AVATAR_BYTES && isAvatarImage(await readFile(dest))) {
          skipped++;
          continue;
        }
      } catch (error) {
        if (error.code !== "ENOENT") throw error;
      }

      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), timeoutMs);
      try {
        url.searchParams.set("s", "80");
        const res = await fetchImpl(url.href, {
          headers: { "User-Agent": "Awesome-Jev-Avatar-Sync/1.0" },
          signal: controller.signal,
          redirect: "error",
        });

        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        if (Number(res.headers.get("content-length")) > MAX_AVATAR_BYTES) throw new Error("Avatar exceeds the byte limit");
        if (!res.body) throw new Error("Missing avatar response body");
        const chunks = [];
        let size = 0;
        for await (const chunk of res.body) {
          size += chunk.byteLength;
          if (size > MAX_AVATAR_BYTES) throw new Error("Avatar exceeds the byte limit");
          chunks.push(chunk);
        }
        const buffer = Buffer.concat(chunks, size);
        if (!isAvatarImage(buffer)) throw new Error("Avatar must be a PNG, JPEG, GIF or WebP image greater than 200 bytes");
        controller.signal.throwIfAborted();

        // Download and validate everything before touching the cache; never follow a destination symlink.
        const file = await open(dest, constants.O_WRONLY | constants.O_CREAT | constants.O_NOFOLLOW | constants.O_NONBLOCK, 0o644);
        try {
          if (!(await file.stat()).isFile()) throw new Error("Avatar destination must be a regular file");
          await file.truncate(0);
          await file.writeFile(buffer);
        } finally {
          await file.close();
        }
        downloaded++;
      } catch (err) {
        failed++;
        if (!quiet) {
          console.warn(`[avatar-sync] Warning: Could not download avatar for ${author}: ${err.message}`);
        }
      } finally {
        clearTimeout(timer);
        controller.abort();
      }
    }
  }

  const workers = Array.from({ length: Math.min(concurrency, list.length) }, () => worker());
  await Promise.all(workers);

  if (!quiet) {
    console.log(`[avatar-sync] Finished. Total authors: ${list.length}, downloaded: ${downloaded}, cached: ${skipped}, failed: ${failed}`);
  }

  return { total: list.length, downloaded, skipped, failed };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const result = await syncAvatars();
  if (result.failed > 0) process.exitCode = 1;
}
