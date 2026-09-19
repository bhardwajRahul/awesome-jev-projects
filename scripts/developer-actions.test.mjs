import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  githubCloneCommand, copyDeveloperText, helloJevPreview, helloJevSnippet,
  helloJevSource, developerActionCopy,
} from "../src/lib/developer-actions.mjs";

test("clone commands only contain a reconstructed, ASCII GitHub repository root", () => {
  assert.equal(githubCloneCommand("https://github.com/logicrw/awesome-jev-projects"), "git clone https://github.com/logicrw/awesome-jev-projects.git");
  assert.equal(githubCloneCommand("https://github.com/Example/repo.js/"), "git clone https://github.com/Example/repo.js.git");
  assert.equal(githubCloneCommand("https://github.com/Example/repo.git"), "git clone https://github.com/Example/repo.git");
  assert.equal(githubCloneCommand("https://github.com/omni-/ask-jev"), "git clone https://github.com/omni-/ask-jev.git");
  const rejected = [
    "https://github.com/owner/repo;touch /tmp/x", "https://github.com/owner/repo\n",
    "https://github.com/owner/repo$(whoami)", "https://github.com/owner/repo`id`",
    "https://github.com/owner/repo&x", "https://github.com/owner/repo|sh",
    "https://github.com/owner/repo\"", "https://github.com/owner/repo'",
    "https://github.com/owner/repo%0a", "https://github.com/owner/repo%2f..",
    "https://github.com/owner/repo/blob/main/file.js", "https://github.com/owner/repo?tab=readme",
    "https://github.com/owner/repo#readme", "https://github.com/owner/../repo",
    "https://github.com/owner/.", "https://github.com/owner/..", "https://github.com/owner/.git",
    "https://github.com/owner/repo\\x", "https://github.com/owner/repo\u0000",
    "https://github.com@evil.test/owner/repo", "https://user@github.com/owner/repo",
    "https://github.com:443/owner/repo", "https://github.com.evil.test/owner/repo",
    "https://ｇithub.com/owner/repo", "https://github.com/ownér/repo",
    "http://github.com/owner/repo", "git@github.com:owner/repo", "owner/repo",
    null, 42, {},
  ];
  for (const value of rejected) assert.equal(githubCloneCommand(value), null, String(value));
});

test("all current catalog repository links produce shell-safe commands without altering their identity", async () => {
  const projects = JSON.parse(await readFile(new URL("../src/data/projects.json", import.meta.url), "utf8"));
  for (const project of projects) {
    const command = githubCloneCommand(project.url);
    assert.ok(command, project.id);
    assert.match(command, /^git clone https:\/\/github\.com\/[A-Za-z0-9-]+\/[A-Za-z0-9_.-]+\.git$/);
    assert.equal(command.slice("git clone ".length, -4), project.url.replace(/\/$/, "").replace(/\.git$/i, ""));
  }
});

test("clipboard success waits for the browser and failures leave a recoverable result", async () => {
  let finish;
  let written;
  const result = copyDeveloperText("git clone https://github.com/logicrw/tool.git", {
    writeText(text) { written = text; return new Promise((resolve) => { finish = resolve; }); },
  });
  let settled = false;
  result.then(() => { settled = true; });
  await Promise.resolve();
  assert.equal(settled, false);
  assert.equal(written, "git clone https://github.com/logicrw/tool.git");
  finish();
  assert.equal(await result, true);
  assert.equal(await copyDeveloperText("example", undefined), false);
  assert.equal(await copyDeveloperText("example", { writeText: async () => { throw new Error("permission denied"); } }), false);
  assert.equal(await copyDeveloperText("", { writeText: async () => { throw new Error("must not run"); } }), false);
});

test("the complete example supplies real SDK setup and the preview is its three-line call", async () => {
  assert.equal(helloJevPreview.split("\n").length, 3);
  assert.ok(helloJevSnippet.endsWith(helloJevPreview));
  assert.match(helloJevSnippet, /npm install @typesafe-ai\/sdk@0\.6\.0/);
  assert.match(helloJevSnippet, /TYPESAFE_API_KEY in your server environment/);
  assert.match(helloJevSnippet, /Never put the key or this API call in browser code/);
  assert.doesNotMatch(helloJevSnippet, /from ["']jev["']|await choice\(|dangerouslyAllowBrowser/);

  // Execute only our example with an in-memory SDK contract double. No network or downloaded code.
  const calls = [];
  const logs = [];
  const choice = (instructions, criteria) => ({ type: "choice", instructions, criteria });
  class TypeSafeClient {
    async systemOne(request) {
      calls.push(request);
      return { answers: { nextStep: { type: "choice", choice: "login", confidence: 0.9 } } };
    }
  }
  const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
  const code = helloJevSnippet.replace(/^import .*;$/m, "");
  await new AsyncFunction("choice", "TypeSafeClient", "console", code)(choice, TypeSafeClient, { log: (value) => logs.push(value) });
  assert.equal(calls.length, 1);
  assert.deepEqual(calls[0], {
    state: "Login form is ready",
    questions: { nextStep: { type: "choice", instructions: "What next?", criteria: { login: null, askUser: null, retry: null } } },
  });
  assert.deepEqual(logs, ["login"]);
});

test("the example retains immutable primary-source provenance and no fixed latency claims", () => {
  assert.equal(helloJevSource.package, "@typesafe-ai/sdk");
  assert.match(helloJevSource.commit, /^[a-f\d]{40}$/);
  for (const field of ["readme", "client", "questions"]) {
    assert.ok(helloJevSource[field].startsWith(`https://github.com/typesafe-ai/typesafe-sdk-js/blob/${helloJevSource.commit}/`));
  }
  assert.doesNotMatch(helloJevSnippet, /\b\d+\s?ms\b|sub-?100|milliseconds/i);
});

test("developer actions have complete four-language copy and zero Han in English or Korean", () => {
  const keys = Object.keys(developerActionCopy.en).sort();
  for (const locale of ["zh", "en", "ja", "ko"]) {
    assert.deepEqual(Object.keys(developerActionCopy[locale]).sort(), keys);
    assert.ok(Object.values(developerActionCopy[locale]).every((value) => typeof value === "string" && value.length > 0));
  }
  for (const locale of ["en", "ko"]) assert.doesNotMatch(JSON.stringify(developerActionCopy[locale]), /\p{Script=Han}/u);
});

test("developer components render on the server in all locales without browser globals", async () => {
  const { createServer } = await import("vite");
  const { createElement } = await import("react");
  const { renderToStaticMarkup } = await import("react-dom/server");
  const server = await createServer({ server: { middlewareMode: true, hmr: false }, optimizeDeps: { noDiscovery: true, include: [] }, appType: "custom", logLevel: "error" });
  try {
    const { HelloJev } = await server.ssrLoadModule("/src/components/HelloJev.tsx");
    const { CopyCloneButton } = await server.ssrLoadModule("/src/components/CopyCloneButton.tsx");
    for (const locale of ["zh", "en", "ja", "ko"]) {
      const html = renderToStaticMarkup(createElement(HelloJev, { locale }));
      assert.match(html, /Hello Jev/);
      assert.match(html, /aria-expanded="false"/);
      assert.match(html, /target="_blank" rel="noopener noreferrer"/);
      assert.match(html, /aria-live="polite"/);
      if (["en", "ko"].includes(locale)) assert.doesNotMatch(html, /\p{Script=Han}/u);
      const clone = renderToStaticMarkup(createElement(CopyCloneButton, { locale, url: "https://github.com/logicrw/tool" }));
      assert.match(clone, /type="button"/);
      assert.equal(renderToStaticMarkup(createElement(CopyCloneButton, { locale, url: "javascript:alert(1)" })), "");
    }
  } finally { await server.close(); }
});
