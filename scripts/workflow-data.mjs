/** Fixed-path JSON handoff. Artifact contents are data, never commands or source code. */
import { readdir, lstat, readFile, writeFile, mkdir } from "node:fs/promises";
import { resolve, dirname, relative } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const radarFile = /^(?:src\/data\/(?:projects|radar)\.json|radar\/state\.json|radar\/receipts\/\d{4}-\d{2}-\d{2}T[\d.-]+Z\.json)$/;

export async function applyDataArtifact({ mode, artifactRoot, destinationRoot = root }) {
  const source = resolve(artifactRoot);
  const pending = [];
  let bytes = 0;
  async function inspect(directory) {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      const path = resolve(directory, entry.name);
      const name = relative(source, path).split("\\").join("/");
      const stat = await lstat(path);
      if (stat.isSymbolicLink()) throw new Error("Artifact symlinks are forbidden");
      if (stat.isDirectory()) { await inspect(path); continue; }
      if (!stat.isFile()) throw new Error("Artifact entries must be regular files");
      if (mode === "ingestion" && name === "ingestion-result.json") continue;
      const target = mode === "ingestion" && name === "candidate-projects.json"
        ? "src/data/projects.json" : mode === "radar" && radarFile.test(name) ? name : null;
      if (!target) throw new Error("Artifact contains an unexpected file");
      if (stat.size > 10_000_000 || (bytes += stat.size) > 50_000_000 || pending.length >= 500)
        throw new Error("Artifact exceeds the bounded data budget");
      const content = await readFile(path, "utf8");
      const data = JSON.parse(content);
      if (target === "src/data/projects.json" && !Array.isArray(data))
        throw new Error("Projects artifact must be an array");
      pending.push({ target, content });
    }
  }
  await inspect(source);
  if (!pending.some(({ target }) => target === "src/data/projects.json"))
    throw new Error("Artifact is missing the canonical project snapshot");
  if (mode === "radar" && !["src/data/radar.json", "radar/state.json"].every((name) => pending.some(({ target }) => target === name)))
    throw new Error("Radar artifact is incomplete");
  // Validate the entire bundle before any output. No artifact controls a target path.
  for (const { target, content } of pending) {
    const destination = resolve(destinationRoot, target);
    await mkdir(dirname(destination), { recursive: true });
    await writeFile(destination, content);
  }
  return pending.map(({ target }) => target);
}
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href)
  applyDataArtifact({ mode: process.argv[2], artifactRoot: process.argv[3] }).then((files) => {
    console.log(`Applied ${files.length} allowlisted JSON data files.`);
  }).catch((error) => { console.error(error.message); process.exitCode = 1; });
