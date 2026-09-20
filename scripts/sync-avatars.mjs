import { readFile, writeFile, mkdir, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { resolve, join } from "node:path";

const root = resolve(fileURLToPath(import.meta.url), "../..");
const publicAvatarsDir = resolve(root, "public/avatars");

export async function syncAvatars({ quiet = false, timeoutMs = 8000, concurrency = 10 } = {}) {
  const raw = await readFile(resolve(root, "src/data/projects.json"), "utf8");
  const projects = JSON.parse(raw);

  await mkdir(publicAvatarsDir, { recursive: true });

  const authorsMap = new Map();
  for (const p of projects) {
    if (p.author && p.avatarUrl && typeof p.avatarUrl === "string" && p.avatarUrl.startsWith("https://avatars.githubusercontent.com/")) {
      const key = p.author.toLowerCase();
      if (/^[a-zA-Z0-9_\-\.]+$/.test(key) && !authorsMap.has(key)) {
        authorsMap.set(key, { author: p.author, url: p.avatarUrl });
      }
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
        const fileStat = await stat(dest);
        if (fileStat.size > 200) {
          skipped++;
          continue;
        }
      } catch {
        // File does not exist, proceed to download
      }

      try {
        const fetchUrl = url + (url.includes("?") ? "&s=80" : "?s=80");
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), timeoutMs);
        const res = await fetch(fetchUrl, {
          headers: { "User-Agent": "Awesome-Jev-Avatar-Sync/1.0" },
          signal: controller.signal,
        });
        clearTimeout(timer);

        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const buffer = Buffer.from(await res.arrayBuffer());
        if (buffer.length < 100) throw new Error("File too small");

        await writeFile(dest, buffer);
        downloaded++;
      } catch (err) {
        failed++;
        if (!quiet) {
          console.warn(`[avatar-sync] Warning: Could not download avatar for ${author}: ${err.message}`);
        }
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
  await syncAvatars();
}
