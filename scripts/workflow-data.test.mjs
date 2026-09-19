import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, mkdir, writeFile, readFile, symlink } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { applyDataArtifact } from "./workflow-data.mjs";
async function fixture(files) {
  const root = await mkdtemp(join(tmpdir(), "jev-handoff-"));
  const artifactRoot = join(root, "input"), destinationRoot = join(root, "output");
  await mkdir(artifactRoot); await mkdir(destinationRoot);
  for (const [name, content] of Object.entries(files)) {
    const file = join(artifactRoot, name); await mkdir(dirname(file), { recursive: true });
    await writeFile(file, content);
  }
  return { artifactRoot, destinationRoot };
}
test("ingestion artifact only installs a valid JSON snapshot", async () => {
  const f = await fixture({ "candidate-projects.json": '[{"id":"a:b"}]', "ingestion-result.json": '{}' });
  assert.deepEqual(await applyDataArtifact({ mode: "ingestion", ...f }), ["src/data/projects.json"]);
  assert.equal(await readFile(join(f.destinationRoot, "src/data/projects.json"), "utf8"), '[{"id":"a:b"}]');
});
test("unexpected workflow/code paths and malformed JSON fail before any copy", async () => {
  for (const extra of [{ "scripts/evil.mjs": "process.exit()" }, { ".github/workflows/evil.yml": "evil" }, { "radar/state.json": "bad" }]) {
    const f = await fixture({ "src/data/projects.json": "[]", "src/data/radar.json": "{}", "radar/state.json": "{}", ...extra });
    await assert.rejects(applyDataArtifact({ mode: "radar", ...f }));
    await assert.rejects(readFile(join(f.destinationRoot, "src/data/projects.json")));
  }
});
test("artifact symlinks and incomplete snapshots cannot reach the writer", async () => {
  const f = await fixture({ "candidate-projects.json": "[]" });
  await symlink("candidate-projects.json", join(f.artifactRoot, "unexpected.json"));
  await assert.rejects(applyDataArtifact({ mode: "ingestion", ...f }), /symlinks/);
  const missing = await fixture({ "src/data/projects.json": "[]" });
  await assert.rejects(applyDataArtifact({ mode: "radar", ...missing }), /incomplete/);
});
test("complete radar handoff admits only the fixed paths and ISO-dated receipts", async () => {
  const f = await fixture({ "src/data/projects.json": "[]", "src/data/radar.json": "{}", "radar/state.json": "{}", "radar/receipts/2026-09-19T12-34-56.789Z.json": "{}" });
  assert.equal((await applyDataArtifact({ mode: "radar", ...f })).length, 4);
});
