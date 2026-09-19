import { cp, copyFile, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { createHash } from "node:crypto";

const index = new URL("../dist/index.html", import.meta.url);
let html = await readFile(index, "utf8");
const policy =
  "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' https://avatars.githubusercontent.com data:; font-src 'self'; connect-src 'self'; base-uri 'self'; form-action https://github.com; frame-ancestors 'none'; object-src 'none'; upgrade-insecure-requests";
html = html.replace(
  /(<meta\s+charset=[^>]+>)/,
  `$1\n<meta http-equiv="Content-Security-Policy" content="${policy}" />`,
);
await writeFile(index, html);
await copyFile(index, new URL("../dist/404.html", import.meta.url));
await writeFile(new URL("../dist/.nojekyll", import.meta.url), "");

const wellKnownSrc = new URL("../public/.well-known", import.meta.url);
const wellKnownDist = new URL("../dist/.well-known", import.meta.url);
if (existsSync(wellKnownSrc)) {
  await cp(wellKnownSrc, wellKnownDist, { recursive: true });
}

// Ensure RFC v0.2.0 SHA-256 digest in agent-skills index matches compiled skill.md
const distSkillUrl = new URL("../dist/skill.md", import.meta.url);
const distAgentSkillsIndexUrl = new URL(
  "../dist/.well-known/agent-skills/index.json",
  import.meta.url,
);
if (existsSync(distSkillUrl) && existsSync(distAgentSkillsIndexUrl)) {
  const skillBytes = await readFile(distSkillUrl);
  const hash = `sha256:${createHash("sha256").update(skillBytes).digest("hex")}`;
  const indexObj = JSON.parse(await readFile(distAgentSkillsIndexUrl, "utf8"));
  let changed = false;
  for (const s of indexObj.skills ?? []) {
    if (s.name === "awesome-jev" && s.digest !== hash) {
      s.digest = hash;
      changed = true;
    }
  }
  if (changed) {
    await writeFile(
      distAgentSkillsIndexUrl,
      JSON.stringify(indexObj, null, 2) + "\n",
    );
  }
}

console.log("Generated SPA 404 fallback, production CSP, and copied .well-known directory.");
