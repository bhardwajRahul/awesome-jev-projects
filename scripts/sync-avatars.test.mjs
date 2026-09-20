import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, mkdir, readFile, writeFile, symlink, stat } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { syncAvatars } from "./sync-avatars.mjs";

const avatarUrl = "https://avatars.githubusercontent.com/u/1?v=4";
const project = { author: "Example", avatarUrl };

async function fixture(projects = [project]) {
  const rootDir = await mkdtemp(join(tmpdir(), "jev-avatar-sync-"));
  await mkdir(join(rootDir, "src/data"), { recursive: true });
  await mkdir(join(rootDir, "public/avatars"), { recursive: true });
  await writeFile(join(rootDir, "src/data/projects.json"), JSON.stringify(projects));
  return { rootDir, dest: join(rootDir, "public/avatars/example.png") };
}

function imageBytes(type = "png", size = 256) {
  const buffer = Buffer.alloc(size);
  if (type === "png") Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]).copy(buffer);
  if (type === "jpeg") { Buffer.from([255, 216, 255]).copy(buffer); buffer.set([255, 217], size - 2); }
  if (type === "gif") buffer.write("GIF89a");
  if (type === "webp") { buffer.write("RIFF"); buffer.write("WEBP", 8); }
  return buffer;
}

test("avatar sync bounds the source and disables redirects while accepting supported image signatures", async () => {
  for (const type of ["png", "jpeg", "gif", "webp"]) {
    const { rootDir, dest } = await fixture();
    const bytes = imageBytes(type);
    let requestSignal;
    const result = await syncAvatars({ rootDir, quiet: true, fetchImpl: async (url, options) => {
      assert.equal(new URL(url).origin, "https://avatars.githubusercontent.com");
      assert.equal(new URL(url).searchParams.get("s"), "80");
      assert.equal(options.redirect, "error");
      requestSignal = options.signal;
      return new Response(bytes);
    } });
    assert.deepEqual(result, { total: 1, downloaded: 1, skipped: 0, failed: 0 });
    assert.equal(requestSignal.aborted, true);
    assert.deepEqual(await readFile(dest), bytes);
    const cached = await syncAvatars({ rootDir, quiet: true, fetchImpl: () => { throw new Error("Cache must avoid the network"); } });
    assert.equal(cached.skipped, 1);
  }
});

test("avatar sync ignores hostile hosts, URL credentials, ports and unsafe authors", async () => {
  const { rootDir } = await fixture([
    { ...project, avatarUrl: "https://avatars.githubusercontent.com.evil.invalid/a" },
    { ...project, avatarUrl: "https://user:secret@avatars.githubusercontent.com/a" },
    { ...project, avatarUrl: "https://avatars.githubusercontent.com:444/a" },
    { ...project, avatarUrl: "http://avatars.githubusercontent.com/a" },
    { ...project, author: "../escape" },
  ]);
  const result = await syncAvatars({ rootDir, quiet: true, fetchImpl: () => { assert.fail("Untrusted sources must never be fetched"); } });
  assert.equal(result.total, 0);
});

test("avatar sync rejects HTML, short images and oversized bodies without replacing an existing file", async () => {
  for (const response of [
    () => new Response("<html>".repeat(100)),
    () => new Response(imageBytes("png", 200)),
    () => new Response(imageBytes(), { headers: { "content-length": "1048577" } }),
    () => new Response(imageBytes("png", 1048577)),
    () => new Response(null, { status: 302, headers: { location: "https://evil.invalid" } }),
  ]) {
    const { rootDir, dest } = await fixture();
    const prior = Buffer.from("partial cache");
    await writeFile(dest, prior);
    const result = await syncAvatars({ rootDir, quiet: true, fetchImpl: async () => response() });
    assert.equal(result.failed, 1);
    assert.deepEqual(await readFile(dest), prior);
  }
});

test("avatar sync timeout covers stalled response bodies and leaves no partial file", async () => {
  const { rootDir, dest } = await fixture();
  let aborted = false;
  const result = await syncAvatars({ rootDir, quiet: true, timeoutMs: 20, fetchImpl: async (_url, { signal }) => {
    return new Response(new ReadableStream({
      start(controller) {
        controller.enqueue(imageBytes());
        signal.addEventListener("abort", () => { aborted = true; controller.error(signal.reason); }, { once: true });
      },
    }));
  } });
  assert.equal(aborted, true);
  assert.equal(result.failed, 1);
  await assert.rejects(stat(dest), { code: "ENOENT" });
});

test("avatar sync rejects symlinks and non-file cache entries before fetching", async () => {
  for (const type of ["symlink", "directory"]) {
    const { rootDir, dest } = await fixture();
    if (type === "directory") await mkdir(dest);
    else {
      const target = join(rootDir, "protected.txt");
      await writeFile(target, "do not overwrite");
      await symlink(target, dest);
    }
    await assert.rejects(syncAvatars({ rootDir, quiet: true, fetchImpl: () => { assert.fail("Invalid destinations must fail before fetch"); } }), /regular file/);
  }
});

test("avatar sync rejects a destination replaced by a symlink during download", async () => {
  const { rootDir, dest } = await fixture();
  const target = join(rootDir, "protected.txt");
  await writeFile(target, "do not overwrite");
  const result = await syncAvatars({ rootDir, quiet: true, fetchImpl: async () => {
    await symlink(target, dest);
    return new Response(imageBytes());
  } });
  assert.equal(result.failed, 1);
  assert.equal(await readFile(target, "utf8"), "do not overwrite");
});

test("avatar sync rejects invalid timing and worker counts", async () => {
  for (const options of [{ concurrency: 0 }, { concurrency: 1.5 }, { timeoutMs: 0 }, { timeoutMs: Infinity }]) {
    await assert.rejects(syncAvatars(options), /positive timeout and concurrency/);
  }
});
