import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, mkdir, readFile, writeFile, symlink, rename } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { assetDigest, DERIVED_DOCUMENTS, validateAssetBundle, prepareAssetBundle, readAssetBundle } from "./ingestion-assets.mjs";

const sha = "a".repeat(40);
const candidateContent = JSON.stringify([{ id: "example:tool", author: "Example" }], null, 2) + "\n";
const svg = '<svg xmlns="http://www.w3.org/2000/svg"><rect fill="url(#gradient)"/></svg>\n';
const raster = Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), Buffer.alloc(240)]);
const encode = (value) => Buffer.from(value).toString("base64");
function bundle() {
  return {
    version: 1, reviewedSourceSha: sha, candidateSha256: assetDigest(candidateContent),
    files: DERIVED_DOCUMENTS.map((path) => ({ path, content: encode(path.endsWith(".svg") ? svg : "generated document\n") })),
  };
}
const validate = (value) => validateAssetBundle(value, { reviewedSourceSha: sha, candidateContent });

test("validated assets bind exact canonical bytes and reviewed source, retaining binary avatar bytes", () => {
  const input = bundle();
  input.files.push({ path: "public/avatars/example.png", content: encode(raster) });
  const files = validate(input);
  assert.equal(files.length, DERIVED_DOCUMENTS.length + 1);
  assert.deepEqual(files.at(-1).bytes, raster);
  for (const change of [{ reviewedSourceSha: "b".repeat(40) }, { candidateSha256: assetDigest(candidateContent.trim()) }, { version: 2 }])
    assert.throws(() => validate({ ...bundle(), ...change }), /do not match/);
});

test("asset manifests fail closed for executable, traversal, unknown-avatar, duplicate or incomplete paths", () => {
  for (const path of ["scripts/evil.mjs", ".github/workflows/evil.yml", "SKILL.md", "public/index.html", "../README.md", "public/avatars/outsider.png", "public/avatars/example/../../evil.png", "README.md"]) {
    const input = bundle();
    input.files.push({ path, content: encode(raster) });
    assert.throws(() => validate(input), /path/);
  }
  const input = bundle();
  input.files.pop();
  assert.throws(() => validate(input), /incomplete/);
});

test("publication rejects active SVG, remote resources, disguised HTML and malformed asset encodings", () => {
  for (const content of [
    '<svg><script>alert(1)</script></svg>', '<svg onload="alert(1)"></svg>',
    '<svg><foreignObject/></svg>', '<svg><image href="https://attacker.invalid"/></svg>',
    '<svg><rect fill="url(https://attacker.invalid)"/></svg>', '<svg><rect fill="url(&#104;ttps://attacker.invalid)"/></svg>',
    '<svg><style>@import "https://attacker.invalid";</style></svg>', '<svg><animate attributeName="href"/></svg>',
    '<svg xmlns="https://attacker.invalid"></svg>', '<svg><rect style="background:red"/></svg>',
    '<!DOCTYPE svg [<!ENTITY e "bad">]><svg/>',
  ]) {
    const input = bundle();
    input.files.find((file) => file.path === "public/banner.svg").content = encode(content);
    assert.throws(() => validate(input));
  }
  for (const content of [encode("<svg onload=alert(1)>" + " ".repeat(300)), "!!!", encode(raster) + "\n", encode(Buffer.alloc(2_000_001))]) {
    const input = bundle();
    input.files.push({ path: "public/avatars/example.png", content });
    assert.throws(() => validate(input));
  }
});

test("current generated documents and localized banners satisfy the publication data boundary", async () => {
  const input = bundle();
  for (const file of input.files) file.content = (await readFile(new URL(`../${file.path}`, import.meta.url))).toString("base64");
  assert.equal(validate(input).length, DERIVED_DOCUMENTS.length);
});

test("asset export reads pinned caches, rejects candidate mutation and transfers only changed avatars", async () => {
  const sourceRoot = await mkdtemp(join(tmpdir(), "jev-assets-"));
  const write = async (path, content) => { await mkdir(dirname(join(sourceRoot, path)), { recursive: true }); await writeFile(join(sourceRoot, path), content); };
  await write("src/data/projects.json", candidateContent);
  for (const path of DERIVED_DOCUMENTS) await write(path, path.endsWith(".svg") ? svg : "generated document\n");
  await write("public/avatars/example.png", raster);
  // An isolated bare object database supplies the exact tree; no commits or hooks are executed.
  execFileSync("git", ["init", "--quiet", sourceRoot]);
  execFileSync("git", ["add", "."], { cwd: sourceRoot });
  const tree = execFileSync("git", ["write-tree"], { cwd: sourceRoot, encoding: "utf8" }).trim();
  const commit = execFileSync("git", ["-c", "user.name=Test", "-c", "user.email=test@example.invalid", "commit-tree", tree, "-m", "fixture"], { cwd: sourceRoot, encoding: "utf8" }).trim();
  const candidatePath = join(sourceRoot, "candidate.json"), destination = join(sourceRoot, "bundle.json");
  await writeFile(candidatePath, candidateContent);
  const options = { reviewedSourceSha: commit, candidatePath, destination, sourceRoot };
  assert.deepEqual(await prepareAssetBundle(options), DERIVED_DOCUMENTS);
  await write("public/avatars/example.png", Buffer.concat([raster, Buffer.from("updated")]));
  assert.deepEqual(await prepareAssetBundle(options), [...DERIVED_DOCUMENTS, "public/avatars/example.png"]);
  const receipt = await readAssetBundle(destination, { reviewedSourceSha: commit, candidateContent });
  assert.deepEqual(Buffer.from(receipt.files.at(-1).content, "base64"), Buffer.concat([raster, Buffer.from("updated")]));
  await write("src/data/projects.json", candidateContent.trim());
  await assert.rejects(prepareAssetBundle(options), /changed the immutable/);
  const link = join(sourceRoot, "linked-bundle.json");
  await symlink(destination, link);
  await assert.rejects(readAssetBundle(link, { reviewedSourceSha: commit, candidateContent }), /regular file/);
  await write("src/data/projects.json", candidateContent);
  await rename(join(sourceRoot, "public/avatars"), join(sourceRoot, "public/real-avatars"));
  await symlink("real-avatars", join(sourceRoot, "public/avatars"));
  await assert.rejects(prepareAssetBundle(options), /directory symlinks/);
});

test("workflow validates before exporting assets and publication has no dependency execution or model key", async () => {
  const workflow = await readFile(new URL("../.github/workflows/auto-ingest-issue.yml", import.meta.url), "utf8");
  const validation = workflow.split("  validate:\n")[1].split("  publish:\n")[0];
  const publication = workflow.split("  publish:\n")[1].split("  record-retry:\n")[0];
  assert.match(validation, /contents: read/);
  assert.doesNotMatch(validation, /GITHUB_TOKEN|RADAR_GITHUB_TOKEN/);
  assert.ok(validation.indexOf("mos-self-heal.mjs validate") < validation.indexOf("ingestion-assets.mjs"));
  assert.match(validation, /steps.assets.outputs.artifact-id/);
  assert.match(publication, /needs.review.outputs.artifact_id/);
  assert.match(publication, /needs.validate.outputs.artifact_id/);
  assert.match(publication, /INGEST_ASSET_FILE:/);
  assert.doesNotMatch(publication, /npm |npx |mos-self-heal|MUSE_API_KEY|generate-readme|sync-avatars/);
  for (const ref of workflow.matchAll(/uses: ([^\s]+)/g)) assert.match(ref[1], /^actions\/.+@[a-f\d]{40}$/);
});
