[![Live Website](https://img.shields.io/badge/Website-Awesome%20Jev%20Radar-black?style=flat-square&logo=safari)](https://logicrw.github.io/awesome-jev-projects/)

# Awesome Jev

**[打开在线版 →](https://logicrw.github.io/awesome-jev-projects/)** 搜索和筛选 Jev 开源项目，查看具体决策点与来源证据。支持中文 / English 切换。

**[Explore the live website →](https://logicrw.github.io/awesome-jev-projects/)** Find open-source Jev projects, see what Jev decides, and inspect the source evidence. Switch between Chinese and English in the header.

A source-backed, plain-language radar for tools built with TypeSafe AI's Jev. 项目名与技术标签保留原文；尚无英文摘要的项目显示原简介。

- **Website:** https://logicrw.github.io/awesome-jev-projects/
- **Submit a project:** https://github.com/logicrw/awesome-jev-projects/issues/new?template=project.yml
- **Run the radar:** [Actions](https://github.com/logicrw/awesome-jev-projects/actions/workflows/radar.yml)

## Run locally

Requires Node.js 22 or newer.

```sh
npm ci
npm run dev
npm test
npm run build
```

Vite + React + TypeScript + Tailwind CSS. Fonts are self-hosted. The site has fuzzy search, dynamic category and tag filtering, star ranges, sorting, device-local bookmarks, keyboard search (`/`, `⌘K`, `Ctrl+K`), shareable project detail links, and pre-filled GitHub Issues. Bookmarks and language preferences stay in your browser. Optional English project fields (`plainSummaryEn`, `jevDecisionPointEn`, `highlightBenefitEn`, `claimStatusEn`) are included in the public data; missing translations fall back to the original text.

## Data and autonomous updates

`src/data/projects.json` is the canonical project dataset. `prepare-public-data.mjs` builds a strict public projection as `public/projects.json`; Vite publishes it as `/awesome-jev-projects/projects.json`. The browser loads only this same-origin static file. It never calls GitHub's API, reads crawler logs, or receives a token. Diagnostics and discovery receipts stay in the source repository and Actions artifacts, outside the static website.

GitHub Pages serves the static assets. Source pushes deploy automatically. A successful **Ecosystem radar** run triggers the Pages workflow through `workflow_run`, including when a data commit made with `GITHUB_TOKEN` does not emit another `push` workflow. Updates become visible on the next page load after Pages finishes publishing.

`.github/workflows/radar.yml` runs at `0 */12 * * *` (00:00 and 12:00 UTC), or manually. GitHub may delay cron execution and disable inactive public-repository schedules after 60 days. Each run:

1. Searches repository topics, README references, code, commits, and PRs.
2. Fetches README/code evidence. Requires an exact provider signal, Jev/AI context, and implementation signal. Excludes forks, private repositories, and obvious mention-only directories. This is a conservative heuristic, not proof of runtime adoption.
3. Refreshes stars, forks, license, creation date, and the **latest default-branch commit date** of known projects. `openIssues` uses GitHub's counter and includes pull requests.
4. Uses source-first bilingual enrichment for **new** repositories. Clear author/maintainer Issue summaries, repository descriptions and dedicated Chinese README text are retained verbatim (apart from trimming). Only a missing/vague language invokes `gpt-4o-mini` with the Actions-only `GH_MODELS_TOKEN`; response fields cannot replace the other language or repository identity. Jev, Agent, Token, Context GC and other technical terms stay in English in generated copy. The deterministic quality gate checks concise functional prose, language content, placeholders and unsafe content; it is not a semantic fact-checker. Model failures, rate limits and missing credentials use explicit rule-based bilingual fallbacks without blocking metadata sync. Reviewed and pinned existing copy is never regenerated.
5. Validates the dataset, runs the production build, and commits the updated JSON and audit receipts together. This runs in the same workflow because a `GITHUB_TOKEN` commit does not trigger another push workflow.

### Coverage, not omniscience

Search APIs expose at most 1,000 results. Default discovery is bounded to 2 pages per query and 60 candidate verifications per run. `radar/state.json` rotates search pages within GitHub’s 1,000-result ceiling and prioritizes unchecked candidates. `src/data/radar.json` records bounded, partial, unauthenticated, and failed sources; it never calls a partial run complete. Known metadata is preserved on errors. The legacy REST code search does not accept `is:public`; the radar filters returned repositories explicitly and never reads private repository content. Public code search may reject GitHub Actions' built-in token: set the optional `RADAR_GITHUB_TOKEN` repository secret to a compatible GitHub token for that source. No credential is ever bundled into the site. The first 14 projects are `pinned: true`; their curated descriptions, categories, tags, forks, license and evidence are protected. Automatic refresh changes only their stars, timestamps and synchronization status. Other source-reviewed prose is also preserved. The other search sources continue and the missing coverage stays visible.

```sh
# GITHUB_TOKEN may be supplied by your shell or CI; never put it in source.
npm run radar
node scripts/radar-sync.mjs --metadata-only
```

`RADAR_MAX_PAGES` (1–10), `RADAR_MAX_CANDIDATES` (1–250) control the run budget. `RADAR_SOURCES=code` performs a code-only supplement and retains previously fetched metadata. All API requests, including retries and same-host redirects, are serialized at least 1.5 seconds apart; search-specific limits remain stricter. Rate-limit retries honor Retry-After and primary reset times, and secondary limits without headers wait at least 60 seconds with exponential backoff. Exhausted retries or the run-wide waiting budget stop further network requests. Full search history and API results are not equivalent to whole-web coverage. The pipeline is GitHub-focused.

## Autonomous project submissions

`.github/workflows/auto-ingest-issue.yml` runs on `issues.opened`. It recognizes `[Project]` submissions and the site's repository field. Normal bug reports, ambiguous links, inaccessible/private repositories, duplicates and editorial exclusions are left open for human handling; no false success comment is sent.

The workflow uses only this repository's trusted `main` code. It reads the submitted repository through GitHub's API, captures a commit SHA, and checks its README plus bounded Jev/TypeSafe source candidates. Auto-ingestion requires an implementation-file provider endpoint or SDK usage; README installation commands alone do not qualify. Chinese README links/root variants are checked before requesting translation. Issue prose is retained only when submitted by the target repository owner or a maintainer of this directory (`OWNER`, `MEMBER`, `COLLABORATOR`). For third-party submissions, repository metadata/README supply the copy and the Issue prose is excluded from model input. Issue claims alone are not integration evidence; target code, workflows and packages are never checked out or executed.

After `npm test && npm run build`, the Contents API atomically appends the project to `main` using the current file SHA. On a conflict or uncertain write result, it re-reads the latest data and retries without discarding concurrent submissions or manual edits. This API operation creates the main-branch commit directly; no persistent Git credential or force-push is used.

The successful ingestion workflow triggers Pages. A publication gate skips rejected/probe/dry-run submissions. **Only after deployment succeeds**, the exact deployed checkout is reconciled against the live `projects.json`: matching, unchanged, still-open Issues receive the requested thank-you comment and are closed as `completed`. A hidden bot-comment marker makes retries idempotent. Every successful Pages deployment also reconciles pending accepted submissions, so a coalesced/canceled publication does not lose acknowledgements. Edited/withdrawn Issues remain untouched.

Maintainers can re-run an existing Issue through `workflow_dispatch`; `dry_run` defaults to true. A separate `models_probe` option checks the requested endpoint without appending data, posting comments or closing Issues. Rejected/duplicate submissions exit before installing dependencies or building. Each accepted submission makes at most one bounded Models request; writes use file-SHA conflict protection, and per-Issue concurrency avoids canceling unrelated pending submissions. Per-run receipts are retained as Actions artifacts. Failed or rate-limited service status stays explicit in `enrichment.ai`, which is excluded from the public website.

### GitHub Models availability

The adapter intentionally retains the requested `https://models.inference.ai.azure.com/chat/completions` endpoint and `gpt-4o-mini` model. GitHub announced that [GitHub Models was fully retired on July 30, 2026](https://github.blog/changelog/2026-07-01-github-models-is-being-fully-retired-on-july-30-2026/); the Azure endpoint was deprecated earlier. Configuration of `GH_MODELS_TOKEN` does **not** establish service availability. A live Actions probe records the actual result. The pipeline remains usable through native text and rule fallbacks and never silently switches providers or claims a failed inference succeeded.

## Source quality

The initial 14 repositories were checked against GitHub API, README, and implementation files. Source links point to fixed commit revisions. Headlines have been corrected where the seed brief overstated what the code demonstrates:

- Browser Flights 7.1s is the author's narrow example, not a general benchmark.
- Router ~60% is an author replay cost estimate.
- Prism uses Jev for shadow/advisory signals, not ENTER/EXIT decisions.
- TypeSafe on Neon is now **Safer with Jev**, a content gateway.
- A 9Hz game tick is an implementation claim; no independent throughput test is implied.

All projects have `runtimeVerified: false`. Source verification does not establish production readiness, safety, investment performance, or endorsement. The project is independent of TypeSafe AI.

## Deployment and security

GitHub Pages is configured through the API with `build_type: workflow`, HTTPS enabled, and repository Actions default permissions set to write. All workflows explicitly declare `contents: write`, `pages: write`, and `id-token: write` as requested. Build and deployment checkouts do not persist authentication; the radar push uses an isolated step environment.

`deploy-pages.yml` validates, builds, uploads only `dist/`, and publishes through the official Pages actions. `base` is `/awesome-jev-projects/`. The production build copies `index.html` to `404.html`; an unknown nested URL can render the app even though GitHub Pages still returns HTTP 404 for that unknown path. Canonical shared project URLs use `#project=...` on the site root, which returns HTTP 200. Query-parameter project links also open the matching detail.

The final build audits path prefixes, credentials/private-path patterns, public fields, 14 pinned seeds, the identical 404 fallback, OG/Twitter metadata and the 1200×630 PNG card. A production Content Security Policy limits network data reads to the same origin; external avatar images are restricted to GitHub's avatar host. Twitter/X's own crawler cache and card display policy are outside this repository's control.

No long-lived deployment key is needed for Pages: Actions uses the built-in token and OIDC. Crawler secrets exist only in its Actions step environment. The original `.openai/hosting.json` is retained for the earlier Codex Site and is not published with Pages; Pages workflows do not change that earlier deployment.

## Contributing

Edit `src/data/taxonomy.json` for classification rules, and review automatically generated summaries before strengthening their claims. Keep translations faithful to the source, including uncertainty and verification limits.

MIT licensed site code. Project names, avatars, and metadata remain their owners' content.

## 提交项目 / Submit a project

**中文：** 在[在线版](https://logicrw.github.io/awesome-jev-projects/)点击「提交项目」，填入仓库地址、至少 5 个字的简介和 Jev 的具体决策点，并附上可核验的来源。支持 `owner/repo`、完整仓库地址，以及带 `/blob/...`、`/tree/...` 的 GitHub 链接；表单会提取仓库根地址。点击提交按钮时才校验，缺失或过短的内容会在输入框下方提示。校验通过后，新标签页打开预填的 GitHub Issue；**最后仍需在 GitHub 确认发布**。也可以[直接创建项目 Issue](https://github.com/logicrw/awesome-jev-projects/issues/new?template=project.yml)。

**English:** Select **Submit project** on the [website](https://logicrw.github.io/awesome-jev-projects/). Add the repository, a plain-language summary of at least 5 characters, Jev's specific decision point, and verifiable source evidence. The form accepts `owner/repo`, full repository URLs, and GitHub links with `/blob/...` or `/tree/...` paths; it extracts the repository root. Validation runs when you submit and explains missing or short entries below each field. Valid submissions open a pre-filled GitHub Issue in a new tab; **you still confirm publication on GitHub**. You can also [create a project Issue directly](https://github.com/logicrw/awesome-jev-projects/issues/new?template=project.yml).
