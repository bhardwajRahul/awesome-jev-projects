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
