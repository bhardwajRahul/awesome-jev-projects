# Awesome Jev

A source-backed, plain-language radar for tools built with TypeSafe AI's Jev. 中文优先，保留英文项目名与技术标签。

- **Website:** https://awesome-jev.quirky-reed-8948.chatgpt.site
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

Vite + React + TypeScript + Tailwind CSS. Fonts are self-hosted. The site has fuzzy search, dynamic category and tag filtering, star ranges, sorting, device-local bookmarks, keyboard search (`/`, `⌘K`, `Ctrl+K`), shareable project detail links, and pre-filled GitHub Issues. Bookmarks stay in your browser.

## Data and autonomous updates

`src/data/projects.json` is the only project dataset. The shipped bundle has a usable snapshot; on load and every five minutes the browser reads the same file from this public repository's `main` branch. If the request fails or data fails validation, it retains the last usable snapshot. GitHub raw caching can add several minutes of delay. The Sites deployment therefore receives **data updates without a redeploy**; source/UI changes still require publishing a new Sites version.

`.github/workflows/radar.yml` runs at `0 */12 * * *` (00:00 and 12:00 UTC), or manually. GitHub may delay cron execution and disable inactive public-repository schedules after 60 days. Each run:

1. Searches repository topics, README references, code, commits, and PRs.
2. Fetches README/code evidence. Requires an exact provider signal, Jev/AI context, and implementation signal. Excludes forks, private repositories, and obvious mention-only directories. This is a conservative heuristic, not proof of runtime adoption.
3. Refreshes stars, forks, license, creation date, and the **latest default-branch commit date** of known projects. `openIssues` uses GitHub's counter and includes pull requests.
4. Builds a three-part extractive explanation with configurable taxonomy rules. The description preserves the author's overview; decision and benefit text are category-based inferences, explicitly marked for review. No paid LLM or external inference key is required. Remote text is never executed or treated as instructions. New categories may derive from repository topics, so UI categories are not a fixed enum.
5. Validates the dataset, runs the production build, and commits the updated JSON and audit receipts together. This runs in the same workflow because a `GITHUB_TOKEN` commit does not trigger another push workflow.

### Coverage, not omniscience

Search APIs expose at most 1,000 results. Default discovery is bounded to 2 pages per query and 60 candidate verifications per run. `radar/state.json` rotates search pages within GitHub’s 1,000-result ceiling and prioritizes unchecked candidates. `src/data/radar.json` records bounded, partial, unauthenticated, and failed sources; it never calls a partial run complete. Known metadata is preserved on errors. Public code search may reject GitHub Actions' built-in token: set the optional `RADAR_GITHUB_TOKEN` repository secret to a compatible GitHub token for that source. No credential is ever bundled into the site. The other search sources continue and the missing coverage stays visible.

```sh
# GITHUB_TOKEN may be supplied by your shell or CI; never put it in source.
npm run radar
node scripts/radar-sync.mjs --metadata-only
```

`RADAR_MAX_PAGES` (1–10), `RADAR_MAX_CANDIDATES` (1–250) control the run budget. Rate-limit waits are bounded; larger waits become explicit failures. Full search history and API results are not equivalent to whole-web coverage. The pipeline is GitHub-focused.

## Source quality

The initial 14 repositories were checked against GitHub API, README, and implementation files. Source links point to fixed commit revisions. Headlines have been corrected where the seed brief overstated what the code demonstrates:

- Browser Flights 7.1s is the author's narrow example, not a general benchmark.
- Router ~60% is an author replay cost estimate.
- Prism uses Jev for shadow/advisory signals, not ENTER/EXIT decisions.
- TypeSafe on Neon is now **Safer with Jev**, a content gateway.
- A 9Hz game tick is an implementation claim; no independent throughput test is implied.

All projects have `runtimeVerified: false`. Source verification does not establish production readiness, safety, investment performance, or endorsement. The project is independent of TypeSafe AI.

## Deployment

`.openai/hosting.json` identifies the existing Codex Site and its static Vite output. Run the Sites build/save/deploy workflow for source changes. The hosting manifest contains only the non-secret Site ID and static directory; credentials are not persisted. The public repository and the Site have separate access policies.

## Contributing

Open a project Issue with the repository URL, a plain-language explanation, Jev's specific decision point, and source evidence. The form opens a pre-filled issue; you confirm publication on GitHub. Edit `src/data/taxonomy.json` for classification rules, and review automatically generated summaries before strengthening their claims.

MIT licensed site code. Project names, avatars, and metadata remain their owners' content.
