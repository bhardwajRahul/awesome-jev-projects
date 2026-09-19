import assert from "node:assert/strict";
import { readdir } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import { resolve, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const dist = fileURLToPath(new URL("../dist/", import.meta.url));
assert.ok(process.argv[2], "Pass the exact Pages artifact.tar path");
const archive = resolve(process.argv[2]);
async function files(directory) {
  const result = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    assert.ok(!entry.isSymbolicLink(), `Pages cannot publish symbolic links: ${path}`);
    if (entry.isDirectory()) result.push(...await files(path));
    else {
      assert.ok(entry.isFile(), `Unexpected build entry: ${path}`);
      result.push(relative(dist, path).replaceAll("\\", "/"));
    }
  }
  return result;
}
const expected = (await files(dist)).sort();
const actual = execFileSync("tar", ["-tf", archive], { encoding: "utf8", maxBuffer: 4 * 1024 * 1024 })
  .split("\n").filter((path) => path && !path.endsWith("/"))
  .map((path) => path.replace(/^\.\//, "")).sort();
assert.deepEqual(actual, expected, "Pages archive must contain every audited file exactly once");
for (const path of [".nojekyll", ".well-known/skills/index.json", ".well-known/agent-skills/index.json"])
  assert.ok(actual.includes(path), `Missing Pages discovery resource: ${path}`);
console.log(`Pages archive audit passed: ${actual.length} files, including hidden discovery resources.`);
