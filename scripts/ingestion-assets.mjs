/** Bounded, data-only handoff from the read-only validator to the publication job. */
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { lstat, readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
export const DERIVED_DOCUMENTS = Object.freeze([
  "README.md", "README.zh-CN.md", "README.ja.md", "README.ko.md",
  "public/banner.svg", "public/banner-zh.svg", "public/banner-ja.svg", "public/banner-ko.svg",
  "public/llms.txt", "public/llms-full.txt", "public/sitemap.xml",
]);
const documents = new Set(DERIVED_DOCUMENTS);
const MAX_FILE_BYTES = 2_000_000;
const MAX_BUNDLE_BYTES = 20_000_000;
export const assetDigest = (content) => createHash("sha256").update(content).digest("hex");
const gitBlobDigest = (content) => createHash("sha1").update(`blob ${content.length}\0`).update(content).digest("hex");
const avatarPath = (author) => typeof author === "string" && /^[a-z\d](?:[a-z\d-]{0,37}[a-z\d])?$/i.test(author)
  ? `public/avatars/${author.toLowerCase()}.png` : null;

async function readRegular(file, maxBytes = MAX_FILE_BYTES) {
  const info = await lstat(file);
  if (!info.isFile() || info.isSymbolicLink() || info.size > maxBytes)
    throw new Error("Ingestion asset must be a bounded regular file");
  return readFile(file);
}

async function readSourceFile(sourceRoot, path, maxBytes) {
  const parts = path.split("/");
  for (let index = 1; index < parts.length; index++) {
    const parent = await lstat(resolve(sourceRoot, ...parts.slice(0, index)));
    if (!parent.isDirectory() || parent.isSymbolicLink()) throw new Error("Ingestion asset directory symlinks are forbidden");
  }
  return readRegular(resolve(sourceRoot, path), maxBytes);
}

function validateContent(path, bytes) {
  if (!bytes.length || bytes.length > MAX_FILE_BYTES) throw new Error("Ingestion asset exceeds file budget");
  if (path.startsWith("public/avatars/")) {
    // Avatar downloads can be PNG, JPEG, GIF or WebP; SVG/HTML must never be published as images.
    const raster = bytes.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])) ||
      (bytes[0] === 255 && bytes[1] === 216 && bytes[2] === 255) ||
      /^GIF8[79]a$/.test(bytes.subarray(0, 6).toString("ascii")) ||
      (bytes.subarray(0, 4).toString("ascii") === "RIFF" && bytes.subarray(8, 12).toString("ascii") === "WEBP");
    if (!raster || bytes.length <= 200) throw new Error("Ingestion avatars must be raster images larger than 200 bytes");
    return;
  }
  const text = bytes.toString("utf8");
  if (!Buffer.from(text).equals(bytes) || text.includes("\0")) throw new Error("Ingestion document must be UTF-8 text");
  if (/<\s*(?:script|foreignObject|iframe|object|embed)\b|\bon[a-z]+\s*=|(?:javascript|vbscript)\s*:|<!ENTITY/i.test(text))
    throw new Error("Active document content is forbidden in ingestion assets");
  if (path.endsWith(".svg")) {
    const tags = new Set(["svg", "defs", "linearGradient", "radialGradient", "stop", "pattern", "path", "circle", "rect", "g", "text", "line"]);
    const attributes = new Set(["xmlns", "width", "height", "viewBox", "role", "aria-label", "id", "x", "y", "x1", "x2", "y1", "y2", "cx", "cy", "r", "rx", "gradientUnits", "offset", "stop-color", "stop-opacity", "patternUnits", "d", "fill", "fill-opacity", "stroke", "stroke-width", "stroke-opacity", "stroke-dasharray", "transform", "font-family", "font-size", "font-weight", "letter-spacing", "text-anchor", "opacity", "stroke-linecap"]);
    if (!/^\s*<svg\b/.test(text) || /<!|<\?/.test(text)) throw new Error("Ingestion banners must be passive SVG");
    for (const match of text.matchAll(/<([^>]*)>/g)) {
      const tag = /^\/?([A-Za-z]+)\b([^]*)$/.exec(match[1]);
      if (!tag || !tags.has(tag[1])) throw new Error("Unexpected ingestion SVG element");
      let rest = tag[2].replace(/\/$/, "").trim();
      while (rest) {
        const attribute = /^([A-Za-z][A-Za-z0-9-]*)="([^"<&]*)"(?:\s+|$)/.exec(rest);
        if (!attribute || !attributes.has(attribute[1]) ||
            (attribute[1] === "xmlns" && attribute[2] !== "http://www.w3.org/2000/svg") ||
            /url\(\s*(?!#[\w-]+\s*\))/i.test(attribute[2]))
          throw new Error("Unexpected ingestion SVG attribute");
        rest = rest.slice(attribute[0].length);
      }
    }
  }
}

/** Validate all entries before any blob creation. Paths cannot come from the model. */
export function validateAssetBundle(bundle, { reviewedSourceSha, candidateContent }) {
  if (!/^[a-f\d]{40}$/.test(reviewedSourceSha ?? "") || bundle?.version !== 1 ||
      bundle.reviewedSourceSha !== reviewedSourceSha || bundle.candidateSha256 !== assetDigest(candidateContent))
    throw new Error("Validated assets do not match the reviewed candidate and source SHA");
  const projects = JSON.parse(candidateContent);
  if (!Array.isArray(projects)) throw new Error("Candidate snapshot must be an array");
  const avatars = new Set(projects.map((project) => avatarPath(project.author)).filter(Boolean));
  if (!Array.isArray(bundle.files) || bundle.files.length > DERIVED_DOCUMENTS.length + avatars.size)
    throw new Error("Invalid ingestion asset manifest");
  const seen = new Set();
  let total = 0;
  const files = bundle.files.map((file) => {
    if (!file || typeof file.path !== "string" || (!documents.has(file.path) && !avatars.has(file.path)) || seen.has(file.path))
      throw new Error("Unexpected or duplicate ingestion asset path");
    if (typeof file.content !== "string" || file.content.length > Math.ceil(MAX_FILE_BYTES / 3) * 4)
      throw new Error("Invalid ingestion asset encoding or size");
    const bytes = Buffer.from(file.content, "base64");
    if (bytes.toString("base64") !== file.content) throw new Error("Ingestion asset must use canonical base64");
    if ((total += bytes.length) > MAX_BUNDLE_BYTES) throw new Error("Ingestion assets exceed total budget");
    validateContent(file.path, bytes);
    seen.add(file.path);
    return { path: file.path, bytes };
  });
  if (!DERIVED_DOCUMENTS.every((path) => seen.has(path))) throw new Error("Ingestion derived documents are incomplete");
  return files;
}

export async function readAssetBundle(path, options) {
  const bundle = JSON.parse((await readRegular(path, 30_000_000)).toString("utf8"));
  validateAssetBundle(bundle, options);
  return bundle;
}

export async function prepareAssetBundle({ reviewedSourceSha, candidatePath, destination, sourceRoot = root }) {
  if (!/^[a-f\d]{40}$/.test(reviewedSourceSha ?? "")) throw new Error("Exact reviewed source SHA is required");
  const candidateContent = (await readRegular(candidatePath, 10_000_000)).toString("utf8");
  const current = (await readSourceFile(sourceRoot, "src/data/projects.json", 10_000_000)).toString("utf8");
  if (current !== candidateContent) throw new Error("Validation changed the immutable reviewed candidate");
  const projects = JSON.parse(candidateContent);
  const files = [];
  for (const path of DERIVED_DOCUMENTS) {
    const bytes = await readSourceFile(sourceRoot, path);
    files.push({ path, content: bytes.toString("base64") });
  }
  // Only changed/new caches need transfer. Git reads the pinned source, never runs dependencies.
  const baseline = new Map(execFileSync("git", ["ls-tree", "-r", reviewedSourceSha, "--", "public/avatars"], {
    cwd: sourceRoot, encoding: "utf8", maxBuffer: 2_000_000,
  }).trim().split("\n").filter(Boolean).map((line) => {
    const [metadata, path] = line.split("\t");
    return [path, metadata.split(" ")[2]];
  }));
  for (const path of new Set(projects.map((project) => avatarPath(project.author)).filter(Boolean))) {
    let bytes;
    try { bytes = await readSourceFile(sourceRoot, path); }
    catch (error) { if (error.code === "ENOENT") continue; throw error; }
    if (baseline.get(path) !== gitBlobDigest(bytes)) files.push({ path, content: bytes.toString("base64") });
  }
  const bundle = { version: 1, reviewedSourceSha, candidateSha256: assetDigest(candidateContent), files };
  validateAssetBundle(bundle, { reviewedSourceSha, candidateContent });
  await mkdir(dirname(destination), { recursive: true });
  await writeFile(destination, JSON.stringify(bundle) + "\n");
  return files.map(({ path }) => path);
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href)
  prepareAssetBundle({
    reviewedSourceSha: process.env.INGEST_REVIEWED_SHA,
    candidatePath: process.argv[2], destination: process.argv[3],
  }).then((files) => console.log(`Prepared ${files.length} bounded ingestion assets.`))
    .catch((error) => { console.error(error.message); process.exitCode = 1; });
