#!/usr/bin/env node
/** Public GitHub radar. No repository code is executed; all remote text is untrusted data. */
import { readFile, writeFile, rename, mkdir } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, resolve } from "node:path";
import { createHash } from "node:crypto";
const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const pause = (ms) => new Promise((r) => setTimeout(r, ms));
export const normalizeRepo = (value) => {
  try {
    const u = new URL(value);
    if (u.protocol !== "https:" || u.hostname !== "github.com") return null;
    const p = u.pathname.replace(/^\/+|\/+$/g, "").split("/");
    return p.length === 2 && p.every((x) => /^[\w.-]+$/.test(x))
      ? p.join("/")
      : null;
  } catch {
    return null;
  }
};
export function verifyIntegration(repo, text) {
  text = text.replace(/<!--[\s\S]*?-->/g, "");
  const exact =
    /(?<![\w.-])(?:api\.)?typesafe\.ai(?![\w.-])|@typesafe\/(?:jev|sdk)|from\s+typesafe\s+import|typesafe(?:_ai|-ai)|\bjev\.(?:choice|score|noul|decision|query|client|ask)|\bJevClient\b/i.test(
      text,
    );
  const context =
    /\bjev\b/i.test(text) &&
    /\b(ai|llm|agent|decision|inference|classification|model|choice|score|noul)\b/i.test(
      text,
    );
  const implementation =
    /(?<![\w.-])api\.typesafe\.ai(?![\w.-])|from\s+typesafe\s+import|(?:import|require|npm\s+(?:i|install)|pip\s+install|uv\s+add).{0,100}(?:typesafe|jev)|\bjev\.(?:choice|score|noul|decision|query|client|ask)|TypeSafeClient|JevClient|TYPESAFE_API_KEY|JEV_API_KEY|typesafe\.Client|typesafe\.AsyncClient/i.test(
      text,
    );
  const listOnly =
    /^(?:awesome-|awesome$)|(?:curated (?:list|collection)|awesome list|collection of (?:ai|llm|tools))/i.test(
      repo.name + " " + (repo.description ?? ""),
    );
  return {
    verified: exact && context && implementation && !listOnly,
    reason: listOnly
      ? "mention-only directory"
      : !exact
        ? "no exact provider evidence"
        : !context
          ? "no Jev decision context"
          : !implementation
            ? "mention without integration evidence"
            : "provider + Jev + implementation",
    evidence: text
      .split("\n")
      .filter((l) =>
        /(?<![\w.-])api\.typesafe\.ai(?![\w.-])|@typesafe|from\s+typesafe|\bjev\b|TYPESAFE_API_KEY|TypeSafeClient/i.test(
          l,
        ),
      )
      .slice(0, 8)
      .map((l) => l.slice(0, 220)),
  };
}
export function summarize(repo, readme, taxonomy) {
  const focused = `${repo.name} ${repo.description ?? ""} ${(repo.topics ?? []).join(" ")} ${readme.slice(0, 7000)}`;
  const matches = taxonomy
    .map((rule) => ({
      ...rule,
      score: rule.patterns.reduce(
        (s, p) => s + (new RegExp(p, "i").test(focused) ? 1 : 0),
        0,
      ),
    }))
    .sort((a, b) => b.score - a.score);
  const rule = matches[0]?.score ? matches[0] : null;
  const subject = repo.description
    ?.replace(/https?:\/\/\S+/g, "")
    .trim()
    .slice(0, 150);
  const category =
    rule?.category ??
    ((repo.topics ?? []).find(
      (t) =>
        !["ai", "jev", "typesafe", "typesafe-ai", "llm", "agent"].includes(t),
    ) ||
      "Decision Tools");
  const tags = [
    ...new Set(
      [
        ...(rule?.tags ?? []),
        ...(repo.topics ?? []).filter(
          (t) => !["jev", "typesafe", "typesafe-ai"].includes(t),
        ),
        repo.language,
      ].filter(Boolean),
    ),
  ].slice(0, 6);
  return {
    category,
    plainSummary: subject
      ? `${repo.name}：${subject}`
      : `${repo.name} ${rule?.summary ?? "把 Jev 接入软件，让程序拿到可直接使用的判断。"}`,
    jevDecisionPoint:
      rule?.decision ??
      "把任务状态交给 Jev，返回供本地程序使用的结构化判断；具体策略请查看来源。",
    highlightBenefit:
      rule?.benefit ?? "把选择和打分接进现有程序；暂无可核验的性能对照。",
    tags,
    summarySource: "readme-extractive",
    claimStatus:
      "根据仓库简介与 README 自动提炼；决策机制为规则归类，待人工复核，未独立测试性能。",
  };
}
export async function atomicJSON(path, value) {
  await mkdir(dirname(path), { recursive: true });
  const tmp = path + `.${process.pid}.tmp`;
  await writeFile(tmp, JSON.stringify(value, null, 2) + "\n");
  await rename(tmp, path);
}
export async function main() {
  const started = new Date().toISOString();
  const args = new Set(process.argv.slice(2));
  const metadataOnly = args.has("--metadata-only");
  const token = process.env.GITHUB_TOKEN ?? process.env.GH_TOKEN;
  const maxPages = Math.min(
    10,
    Math.max(1, Number(process.env.RADAR_MAX_PAGES ?? 2)),
  );
  const maxCandidates = Math.min(
    250,
    Math.max(1, Number(process.env.RADAR_MAX_CANDIDATES ?? 60)),
  );
  const dataPath = resolve(root, "src/data/projects.json");
  const statusPath = resolve(root, "src/data/radar.json");
  const known = JSON.parse(await readFile(dataPath, "utf8"));
  let old = {};
  try {
    old = JSON.parse(await readFile(statusPath, "utf8"));
  } catch {}
  const taxonomy = JSON.parse(
    await readFile(resolve(root, "src/data/taxonomy.json"), "utf8"),
  );
  const report = {
    lastAttemptAt: started,
    lastSuccessfulAt: old.lastSuccessfulAt ?? null,
    status: "partial",
    sources: [],
    newProjects: 0,
    schedule: "0 */12 * * *",
    schedulerStatus:
      process.env.GITHUB_ACTIONS === "true"
        ? "active"
        : (old.schedulerStatus ?? "not-configured"),
    submissionRepository:
      process.env.GITHUB_REPOSITORY ??
      old.submissionRepository ??
      "logicrw/awesome-jev-projects",
    metadata: { ok: 0, failed: 0 },
    discovery: { candidates: 0, checked: 0, rejected: 0, deferred: 0 },
    runUrl: process.env.GITHUB_RUN_ID
      ? `https://github.com/${process.env.GITHUB_REPOSITORY}/actions/runs/${process.env.GITHUB_RUN_ID}`
      : null,
  };
  let reviewState = {};
  try {
    reviewState = JSON.parse(
      await readFile(resolve(root, "radar/state.json"), "utf8"),
    );
  } catch {}
  const receipts = [];
  let nextSearch = 0;
  let codeUnavailable = false;
  async function api(path, { search = false, code = false, raw = false } = {}) {
    if (search) {
      await pause(Math.max(0, nextSearch - Date.now()));
      nextSearch = Date.now() + (code ? 6500 : token ? 2200 : 6200);
    }
    for (let attempt = 0; attempt < 3; attempt++) {
      const response = await fetch("https://api.github.com" + path, {
        headers: {
          Accept: raw
            ? "application/vnd.github.raw+json"
            : "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
          "User-Agent": "awesome-jev-radar",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        signal: AbortSignal.timeout(20000),
      });
      if (response.ok) return raw ? response.text() : response.json();
      let detail;
      try {
        detail = (await response.json()).message;
      } catch {
        detail = response.statusText;
      }
      const error = new Error(
        `GitHub ${response.status}: ${String(detail).slice(0, 220)}`,
      );
      error.status = response.status;
      if (
        [429, 403].includes(response.status) &&
        (/rate limit/i.test(String(detail)) ||
          response.headers.get("retry-after"))
      ) {
        const reset = Number(response.headers.get("x-ratelimit-reset")) * 1000;
        const wait =
          Number(response.headers.get("retry-after")) * 1000 ||
          Math.max(1000, reset - Date.now());
        if (attempt < 2 && wait <= 65000) {
          console.log(`[rate-limit] backing off ${Math.ceil(wait / 1000)}s`);
          await pause(wait + 500);
          continue;
        }
      }
      if (response.status >= 500 && attempt < 2) {
        await pause(1500 * (attempt + 1));
        continue;
      }
      throw error;
    }
  }
  async function search(kind, q) {
    const source = {
      name: `${kind}: ${q}`,
      query: q,
      status: "ok",
      count: 0,
      total: 0,
      pages: 0,
    };
    report.sources.push(source);
    if (kind === "code" && (!token || codeUnavailable)) {
      source.status = "skipped-auth";
      source.error = "Code search requires a compatible GitHub token";
      return [];
    }
    const found = [];
    const cursorKey = `${kind}:${q}`;
    const firstPage = reviewState._searchCursors?.[cursorKey] ?? 1;
    source.firstPage = firstPage;
    try {
      for (
        let page = firstPage;
        page < firstPage + maxPages && page <= 10;
        page++
      ) {
        const result = await api(
          `/search/${kind}?q=${encodeURIComponent(q + " is:public")}&per_page=100&page=${page}&sort=${kind === "code" ? "indexed" : kind === "commits" ? "committer-date" : "updated"}&order=desc`,
          { search: true, code: kind === "code" },
        );
        source.pages++;
        source.total = result.total_count;
        source.count += result.items.length;
        found.push(...result.items);
        if (result.incomplete_results) source.status = "partial";
        const lastPage = Math.min(10, Math.ceil(result.total_count / 100));
        reviewState._searchCursors ??= {};
        reviewState._searchCursors[cursorKey] = page >= lastPage ? 1 : page + 1;
        if (result.total_count > 1000) source.status = "search-cap";
        if (firstPage > 1 || page < lastPage) source.status = "bounded";
        if (result.items.length < 100 || page >= lastPage) break;
      }
      console.log(
        `[search] ${source.name}: ${source.count}/${source.total} (${source.status})`,
      );
    } catch (e) {
      source.status =
        e.status === 401 || e.status === 403 ? "unavailable" : "error";
      source.error = e.message;
      if (kind === "code" && [401, 403].includes(e.status))
        codeUnavailable = true;
      console.log(`[search] ${source.name}: ${source.error}`);
    }
    return found;
  }
  const byRepo = new Map(
    known.map((p) => [normalizeRepo(p.url)?.toLowerCase(), p]),
  );
  const candidates = new Map();
  const add = (repo, path) => {
    const full = repo?.full_name;
    if (
      !full ||
      repo.private ||
      repo.fork ||
      byRepo.has(full.toLowerCase()) ||
      full.toLowerCase() === report.submissionRepository.toLowerCase()
    )
      return;
    const value = candidates.get(full.toLowerCase()) ?? {
      repo,
      paths: new Set(),
    };
    if (path) value.paths.add(path);
    candidates.set(full.toLowerCase(), value);
  };
  if (!metadataOnly) {
    for (const q of [
      "topic:jev fork:false",
      "topic:typesafe-ai fork:false",
      "topic:typesafe ai fork:false",
      '"api.typesafe.ai" in:readme fork:false',
      '"typesafe.ai" "jev" in:readme fork:false',
      '"from typesafe import jev" in:readme fork:false',
      '"@typesafe/jev" in:readme fork:false',
    ])
      for (const repo of await search("repositories", q)) add(repo);
    for (const q of [
      '"api.typesafe.ai" in:file',
      '"typesafe.ai" "jev" in:file',
      '"from typesafe import jev" in:file',
      '"@typesafe/jev" in:file',
    ])
      for (const item of await search("code", q))
        add(item.repository, item.path);
    for (const q of ['"typesafe.ai"', '"Jev" "AI"'])
      for (const item of await search("commits", q)) add(item.repository);
    for (const q of [
      '"typesafe.ai" is:pr in:title,body',
      '"Jev" "TypeSafe" is:pr in:title,body',
    ])
      for (const item of await search("issues", q)) {
        const full = item.repository_url?.replace(
          "https://api.github.com/repos/",
          "",
        );
        if (full) add({ full_name: full, name: full.split("/")[1] });
      }
  }
  for (const project of known) {
    const repo = normalizeRepo(project.url);
    if (!repo) {
      report.metadata.failed++;
      project.metadataStatus = "invalid-url";
      continue;
    }
    try {
      const meta = await api(`/repos/${repo}`);
      const commits = await api(`/repos/${repo}/commits?per_page=1`);
      Object.assign(project, {
        stars: meta.stargazers_count,
        forks: meta.forks_count,
        openIssues: meta.open_issues_count,
        license:
          meta.license?.spdx_id === "NOASSERTION"
            ? null
            : (meta.license?.spdx_id ?? null),
        lastCommitAt: commits[0]?.commit.committer.date ?? null,
        headSha: commits[0]?.sha ?? null,
        createdAt: meta.created_at,
        pushedAt: meta.pushed_at,
        avatarUrl: meta.owner.avatar_url,
        archived: meta.archived,
        metadataStatus: "ok",
        metadataFetchedAt: new Date().toISOString(),
      });
      report.metadata.ok++;
    } catch (e) {
      project.metadataStatus = e.status === 404 ? "unavailable" : "stale";
      project.metadataError = e.message;
      report.metadata.failed++;
      console.log(`[metadata] ${repo}: ${e.message}`);
    }
  }
  report.sources.push({
    name: "Known repository metadata + latest commit",
    status: report.metadata.failed ? "partial" : "ok",
    count: report.metadata.ok,
  });
  const list = [...candidates.values()].sort(
    (a, b) =>
      (reviewState[a.repo.full_name]?.checkedAt ?? "").localeCompare(
        reviewState[b.repo.full_name]?.checkedAt ?? "",
      ) ||
      Number(/jev/i.test(b.repo.name ?? "")) -
        Number(/jev/i.test(a.repo.name ?? "")) ||
      (b.repo.stargazers_count ?? 0) - (a.repo.stargazers_count ?? 0),
  );
  report.discovery.candidates = list.length;
  report.discovery.deferred = Math.max(0, list.length - maxCandidates);
  for (const candidate of list.slice(0, maxCandidates)) {
    const full = candidate.repo.full_name;
    report.discovery.checked++;
    reviewState[full] = { checkedAt: started };
    try {
      const repo = await api(`/repos/${full}`);
      if (repo.private || repo.fork) {
        receipts.push({
          repo: full,
          status: "rejected",
          reason: "private or fork",
        });
        report.discovery.rejected++;
        continue;
      }
      const commits = await api(`/repos/${full}/commits?per_page=1`);
      const sha = commits[0]?.sha;
      if (!sha) throw new Error('No immutable commit available');
      let readme = "";
      let readmePath = "README.md";
      let readmeSha = null;
      try {
        const r = await api(`/repos/${full}/readme?ref=${sha}`);
        readme = Buffer.from(r.content ?? "", "base64")
          .toString("utf8")
          .slice(0, 90000);
        readmePath = r.path;
        readmeSha = r.sha;
      } catch (e) {
        if (e.status !== 404) throw e;
      }
      let evidence = verifyIntegration(repo, readme),
        sourcePath = readmePath,
        sourceContent = readme;
      if (!evidence.verified) {
        for (const path of [...candidate.paths].slice(0, 3)) {
          try {
            const f = await api(
              `/repos/${full}/contents/${encodeURIComponent(path).replaceAll("%2F", "/")}?ref=${sha}`,
            );
            const code = Buffer.from(f.content ?? "", "base64")
              .toString("utf8")
              .slice(0, 90000);
            const found = verifyIntegration(repo, readme + "\n" + code);
            if (found.verified) {
              evidence = found;
              sourcePath = path;
              sourceContent = code;
              break;
            }
          } catch (e) {
            receipts.push({
              repo: full,
              path,
              status: "evidence-error",
              error: e.message,
            });
          }
        }
      }
      if (!evidence.verified) {
        receipts.push({
          repo: full,
          status: "rejected",
          reason: evidence.reason,
        });
        report.discovery.rejected++;
        continue;
      }
      const summary = summarize(repo, readme, taxonomy);
      const sourceUrl = `${repo.html_url}/blob/${sha}/${sourcePath}`;
      const project = {
        id: `${repo.owner.login}:${repo.name}`.toLowerCase(),
        name: repo.name,
        author: repo.owner.login,
        url: repo.html_url,
        ...summary,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        openIssues: repo.open_issues_count,
        license:
          repo.license?.spdx_id === "NOASSERTION"
            ? null
            : (repo.license?.spdx_id ?? null),
        createdAt: repo.created_at,
        lastCommitAt: commits[0]?.commit.committer.date ?? null,
        headSha: sha,
        metadataFetchedAt: new Date().toISOString(),
        metadataStatus: "ok",
        avatarUrl: repo.owner.avatar_url,
        verificationStatus: "integration-detected",
        runtimeVerified: false,
        discoveredAt: started,
        evidence: [{ url: sourceUrl, note: "自动发现的 Jev 集成证据" }],
        readmeSha,
        sourceHash: createHash("sha256").update(sourceContent).digest("hex"),
      };
      known.push(project);
      byRepo.set(full.toLowerCase(), project);
      report.newProjects++;
      receipts.push({
        repo: full,
        status: "accepted",
        sourceUrl,
        sourceHash: project.sourceHash,
        evidence: evidence.evidence,
      });
      console.log(`[new] ${full} → ${project.category}`);
    } catch (e) {
      receipts.push({ repo: full, status: "error", error: e.message });
      console.log(`[candidate] ${full}: ${e.message}`);
    }
  }
  const failures =
    report.sources.some((s) => !["ok"].includes(s.status)) ||
    report.metadata.failed ||
    receipts.some(
      (r) => r.status === "error" || r.status === "evidence-error",
    ) ||
    report.discovery.deferred;
  report.status = metadataOnly
    ? "metadata-only"
    : failures
      ? "partial"
      : "complete";
  if (report.status === "complete")
    report.lastSuccessfulAt = new Date().toISOString();
  report.finishedAt = new Date().toISOString();
  report.totalProjects = known.length;
  await atomicJSON(resolve(root, "radar/state.json"), reviewState);
  report.projectsSha256 = createHash("sha256").update(JSON.stringify(known, null, 2)+"\n").digest("hex");
  await atomicJSON(dataPath, known);
  await atomicJSON(statusPath, report);
  await atomicJSON(
    resolve(root, `radar/receipts/${started.replaceAll(":", "-")}.json`),
    { ...report, receipts },
  );
  console.log(
    JSON.stringify({
      status: report.status,
      total: known.length,
      new: report.newProjects,
      metadata: report.metadata,
      discovery: report.discovery,
    }),
  );
  if (report.metadata.ok === 0) process.exitCode = 1;
}
if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(resolve(process.argv[1])).href
)
  main().catch((e) => {
    console.error(e.message);
    process.exitCode = 1;
  });
