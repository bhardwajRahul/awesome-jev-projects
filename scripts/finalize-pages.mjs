import { loadAnalytics, analyticsSources } from "./analytics-policy.mjs";
import { cp, copyFile, readFile, writeFile, readdir } from "node:fs/promises";
import { createHash } from "node:crypto";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { activeSponsors } from "../src/lib/sponsors.mjs";
import { paidPlacementMarkdown } from "./site-content.mjs";
export function contentSecurityPolicy(html, analytics = { enabled: false }) {
  const allowed = analyticsSources(html, analytics);
  const hashes = [...html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)]
    .filter((match) => !/\bsrc\s*=/.test(match[0].split(">")[0]))
    .map((match) => `'sha256-${createHash("sha256").update(match[1]).digest("base64")}'`);
  return `default-src 'self'; script-src 'self' ${[...new Set(hashes)].join(" ")} ${allowed.script}; style-src 'self' 'unsafe-inline'; img-src 'self' https://avatars.githubusercontent.com; font-src 'self'; connect-src 'self' ${allowed.connect}; base-uri 'self'; form-action https://github.com; object-src 'none'; upgrade-insecure-requests`;
}
export function secureHTML(html, analytics = { enabled: false }) {
  if (/<script\b(?![^>]*\bsrc=)(?![^>]*\btype="application\/(?:ld\+)?json")[^>]*>/i.test(html)) throw new Error("Executable inline scripts are not allowed");
  return html.replace(/(<meta\s+charset=[^>]+>)/i, `$1\n<meta http-equiv="Content-Security-Policy" content="${contentSecurityPolicy(html, analytics)}" />`);
}
async function walk(directory) {
  const output = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) output.push(...await walk(path));
    else if (entry.name.endsWith(".html")) output.push(path);
  }
  return output;
}
export async function finalizePages() {
  const dist = fileURLToPath(new URL("../dist/", import.meta.url));
  // Vite's public-copy behavior must not determine discovery support.
  await cp(new URL("../public/.well-known/", import.meta.url), join(dist, ".well-known"), { recursive: true });
  const partners = activeSponsors(JSON.parse(await readFile(new URL("../src/data/sponsors.json", import.meta.url), "utf8")).partners);
  const sourceSkill = await readFile(join(dist, "skill.md"), "utf8");
  const skill = Buffer.from(sourceSkill.replace(/<!-- paid-placement:start -->[\s\S]*?<!-- paid-placement:end -->/, `<!-- paid-placement:start -->\n${paidPlacementMarkdown(partners)}<!-- paid-placement:end -->`));
  await writeFile(join(dist, "skill.md"), skill);
  for (const path of [".well-known/skills/default/skill.md", ".well-known/skills/awesome-jev/SKILL.md", ".well-known/agent-skills/awesome-jev/SKILL.md"]) await writeFile(join(dist,path),skill);
  const digest = `sha256:${createHash("sha256").update(skill).digest("hex")}`;
  const discoveryPath = join(dist, ".well-known/agent-skills/index.json");
  const discovery = JSON.parse(await readFile(discoveryPath, "utf8"));
  for (const entry of discovery.skills ?? []) if (entry.name === "awesome-jev") entry.digest = digest;
  await writeFile(discoveryPath, JSON.stringify(discovery, null, 2) + "\n");
  for (const path of [".well-known/skills/default/skill.md", ".well-known/skills/awesome-jev/SKILL.md", ".well-known/agent-skills/awesome-jev/SKILL.md"]) {
    if (!(await readFile(join(dist, path))).equals(skill)) throw new Error(`Agent Skill copy mismatch: ${path}`);
  }
  const analytics = await loadAnalytics();
  const files = await walk(dist);
  for (const file of files) await writeFile(file, secureHTML(await readFile(file, "utf8"), analytics));
  await copyFile(join(dist, "index.html"), join(dist, "404.html"));
  await writeFile(join(dist, ".nojekyll"), "");
  console.log(`Generated SPA 404 fallback and restrictive CSP for ${files.length} static pages.`);
}
if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) await finalizePages();
