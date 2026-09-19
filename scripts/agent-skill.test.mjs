import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { createHash } from "node:crypto";
import { categoryEnglish } from "../src/lib/i18n.ts";

test("public/skill.md and root SKILL.md exist, follow agentskills.io format with valid frontmatter", async () => {
  const content = await readFile(
    new URL("../public/skill.md", import.meta.url),
    "utf8",
  );
  assert.ok(content.startsWith("---\n"), "Must begin with YAML frontmatter");
  assert.ok(
    content.includes("name: awesome-jev"),
    "Must have name: awesome-jev in frontmatter",
  );
  assert.ok(
    /description:\s+.+/i.test(content),
    "Must specify a description in frontmatter",
  );
  assert.ok(
    content.includes("license: MIT"),
    "Must specify license in frontmatter",
  );
  assert.ok(
    content.includes("https://logicrw.github.io/awesome-jev-projects/projects.json"),
    "Must reference canonical projects.json",
  );
  assert.ok(
    content.includes("https://logicrw.github.io/awesome-jev-projects/llms.txt"),
    "Must reference canonical llms.txt",
  );

  // All 18 categories must be documented
  for (const cat of Object.keys(categoryEnglish)) {
    assert.ok(
      content.includes(`\`${cat}\``),
      `Must document category ${cat} in skill.md`,
    );
  }

  // Zero-Han invariant on English skill markdown
  assert.ok(
    !/\p{Script=Han}/u.test(content),
    "public/skill.md must contain zero Chinese characters",
  );

  // Root SKILL.md and skills/awesome-jev/SKILL.md must match exactly
  const rootSkill = await readFile(
    new URL("../SKILL.md", import.meta.url),
    "utf8",
  );
  assert.equal(rootSkill, content, "root SKILL.md must match public/skill.md");

  const repoSkill = await readFile(
    new URL("../skills/awesome-jev/SKILL.md", import.meta.url),
    "utf8",
  );
  assert.equal(
    repoSkill,
    content,
    "skills/awesome-jev/SKILL.md must match public/skill.md",
  );
});

test("well-known discovery skills and RFC v0.2.0 catalogs exist and match canonical skill", async () => {
  const skill = await readFile(
    new URL("../public/skill.md", import.meta.url),
    "utf8",
  );
  const expectedHash = `sha256:${createHash("sha256").update(skill).digest("hex")}`;

  const defaultSkill = await readFile(
    new URL("../public/.well-known/skills/default/skill.md", import.meta.url),
    "utf8",
  );
  assert.equal(
    defaultSkill,
    skill,
    "default/skill.md must match root skill.md exactly",
  );

  const namedSkill = await readFile(
    new URL(
      "../public/.well-known/skills/awesome-jev/SKILL.md",
      import.meta.url,
    ),
    "utf8",
  );
  assert.equal(
    namedSkill,
    skill,
    "skills/awesome-jev/SKILL.md must match root skill.md exactly",
  );

  const agentNamedSkill = await readFile(
    new URL(
      "../public/.well-known/agent-skills/awesome-jev/SKILL.md",
      import.meta.url,
    ),
    "utf8",
  );
  assert.equal(
    agentNamedSkill,
    skill,
    "agent-skills/awesome-jev/SKILL.md must match root skill.md exactly",
  );

  // v0.1.0 backwards compatibility catalog
  const skillsIndexRaw = await readFile(
    new URL("../public/.well-known/skills/index.json", import.meta.url),
    "utf8",
  );
  const skillsIndex = JSON.parse(skillsIndexRaw);
  assert.ok(Array.isArray(skillsIndex.skills), "skills index must have skills array");
  assert.ok(
    skillsIndex.skills.some((s) => s.name === "awesome-jev"),
    "skills index must include awesome-jev",
  );
  assert.ok(
    skillsIndex.skills.some((s) => s.name === "default"),
    "skills index must include default",
  );

  // RFC v0.2.0 agent-skills catalog
  const agentSkillsIndexRaw = await readFile(
    new URL("../public/.well-known/agent-skills/index.json", import.meta.url),
    "utf8",
  );
  const agentSkillsIndex = JSON.parse(agentSkillsIndexRaw);
  assert.equal(
    agentSkillsIndex.$schema,
    "https://schemas.agentskills.io/discovery/0.2.0/schema.json",
    "agent-skills index must reference RFC v0.2.0 schema",
  );
  assert.ok(
    Array.isArray(agentSkillsIndex.skills),
    "agent-skills index must have skills array",
  );
  const entry = agentSkillsIndex.skills.find((s) => s.name === "awesome-jev");
  assert.ok(entry, "agent-skills index must contain awesome-jev");
  assert.equal(entry.type, "skill-md", "entry type must be skill-md");
  assert.equal(entry.digest, expectedHash, "digest must match sha256 of skill.md");
  assert.ok(
    entry.url.endsWith(".well-known/agent-skills/awesome-jev/SKILL.md"),
    "entry url must point to agent-skills path",
  );
});

test("sitemap.xml and llms.txt register the skill", async () => {
  const sitemap = await readFile(
    new URL("../public/sitemap.xml", import.meta.url),
    "utf8",
  );
  assert.ok(
    sitemap.includes("https://logicrw.github.io/awesome-jev-projects/skill.md"),
    "sitemap.xml must register skill.md",
  );

  const llms = await readFile(
    new URL("../public/llms.txt", import.meta.url),
    "utf8",
  );
  assert.ok(
    llms.includes("https://logicrw.github.io/awesome-jev-projects/skill.md"),
    "llms.txt must link to skill.md",
  );
  assert.ok(
    llms.includes("npx skills add logicrw/awesome-jev-projects"),
    "llms.txt must provide npx skills add GitHub repo command",
  );
  assert.ok(
    llms.includes("npx skills add https://logicrw.github.io/awesome-jev-projects/"),
    "llms.txt must provide npx skills add URL command",
  );
});

test("index.html declares skill discovery links and schema structured data", async () => {
  const html = await readFile(
    new URL("../index.html", import.meta.url),
    "utf8",
  );
  assert.ok(
    html.includes('rel="alternate" type="text/markdown" title="Agent Skill"'),
    "HTML head must contain alternate link for Agent Skill",
  );
  assert.ok(
    html.includes('rel="agent-skill"'),
    "HTML head must contain agent-skill link",
  );
  assert.ok(
    html.includes('"@type": "DataFeed"'),
    "JSON-LD must contain DataFeed entry",
  );
  assert.ok(
    html.includes("https://logicrw.github.io/awesome-jev-projects/skill.md"),
    "JSON-LD DataFeed must point to skill.md",
  );
});
