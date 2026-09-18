# Verification — 2026-09-18

- 130 projects retained: original 14 plus 116 source-reviewed additions. Five false positives excluded permanently pending review.
- Live scans: initial GitHub Actions run succeeded and committed data; expanded local repository/README/commit/PR scan checked 130 candidates; corrected code-search supplement checked 60 more.
- Code-search correction verified live: the same domain query returned 1,348 matches without unsupported `is:public`, and zero with it. The radar now filters repository visibility explicitly.
- Fixed-version source evidence reviewed for all current entries; no project runtime or performance verification is claimed.
- Browser checks passed: fuzzy typo search, category/tag/star filters, all three sort modes, empty state, bookmark reload persistence, keyboard search, copy-share URL, project evidence dialog, and submission form validation. No issue was submitted during testing.
- Desktop and phone layout checked: no document horizontal overflow; phone cards form one column. Native modal focus and Escape behavior checked.
- Search benchmark at 134 pre-review candidates: 500 queries, p95 2.56 ms of search computation, with a 90 ms input debounce. This is not a network or end-to-end latency benchmark.
- WebMCP search tested with valid input; invalid input intentionally rejected.
- Privacy review excludes local paths and common credential patterns from publication. Source credentials remain ephemeral.
- Source caps, remaining candidate queues and failures are visible in radar receipts; a successful workflow is not presented as exhaustive web coverage.

## GitHub Pages hardening

- Pages enabled through REST API as a workflow-based public HTTPS site; Actions default permissions read back as write, without PR-approval capability.
- All workflows explicitly declare contents/pages/id-token write permissions. Pages deployment accepts main only, with no manual reviewer gate.
- 25 focused tests passed for source verification, pinned fields, serial pacing, retries, redirect credential isolation, and public projection.
- Public build audit passed: no credential patterns, private paths, source maps, radar configuration or crawler logs; only the allowlisted project fields are shipped.
- 14 original projects are pinned; all 130 curated descriptions, decisions, benefits, tags, categories and evidence match the pre-change baseline.
- Production local preview rendered 130 projects, the removed radar interface was absent, repository links opened in a new tab, and a nested query-parameter project URL rendered its detail without a blank screen.
- Twitter/OpenGraph fields and the actual 1200×630 PNG share image were inspected. X cache refresh behavior and unmeasured traffic capacity are not guaranteed.
