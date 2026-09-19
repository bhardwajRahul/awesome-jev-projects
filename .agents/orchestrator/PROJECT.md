# Project: awesome-jev-projects

## Architecture
- **Catalog Core**: `src/data/projects.json` storing structured project metadata (id, name, repoUrl, commitSha, criticalFilePath, category, tags, plainSummaryZh/En, jevDecisionPointZh/En, highlightBenefitZh/En, claimStatusZh/En, pinned: false).
- **Public Export**: `scripts/prepare-public-data.mjs` exports 25 sanitized public fields to `public/projects.json`.
- **i18n Pipeline**: `scripts/readme-i18n.mjs` maps English keys to authentic Japanese (`DECISIONS_JA`, `BENEFITS_JA`) and Korean (`DECISIONS_KO`, `BENEFITS_KO`), generating `README.md` (EN), `README.zh-CN.md` (ZH), `README.ja.md` (JA), `README.ko.md` (KO).
- **Discovery & Discovery Hub**: `index.html` (maintains Schema.org `numberOfItems`) and `public/llms.txt` (maintains catalog count and documentation).
- **Validation Engine**: `scripts/*.test.mjs` (8 test suites, 90+ tests) verifying schema correctness, deduplication, URL accessibility, 0 Chinese characters in EN/KO files, and seed project counts.
- **Build & Audit**: `npm run build` triggering `tsc -b`, `vite build`, `finalize-pages.mjs`, and `audit-build.mjs` (security and artifact audit).

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| F1 | Multi-channel OSINT Mining | Search X/Twitter (via Grok MCP / influencers), GitHub, Reddit, HN, V2EX, Linux.do, blogs for TypeSafe/Jev repos | M1 | ORIGINAL_REQUEST §R1 |
| F2 | Source-level Verification & Deduplication | Verify immutable Commit SHA, source file path, AST/API calls to Choice, Score, Noul, systemOne, filter duplicates & exclusions | M2 | ORIGINAL_REQUEST §R2 |
| F3 | Deep Reverse-Engineering & Metadata Crafting | Extract Decision Role & Highlight Benefit with concrete metrics; author non-AI ZH/EN metadata and JA/KO dictionaries | M3 | ORIGINAL_REQUEST §R3 |
| F4 | Full Site Integration & i18n README Build | Safely append to projects.json, sync index.html count, update public/llms.txt, build 4-language READMEs | M4 | ORIGINAL_REQUEST §R4 |
| F5 | Automated Validation & Git Checkpoint | Pass all 90+ npm tests, pass npm run build (audit-build.mjs), create atomic git commit checkpoint | M5 | ORIGINAL_REQUEST §R4 |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| M1 | OSINT Mining Track | Scan X, GitHub, Reddit, HN, V2EX, Linux.do for candidate Jev projects | None | IN_PROGRESS |
| M2 | Code Audit & Deduplication | Clone/inspect source code, verify AST/API primitives, filter duplicates, lock commit SHAs | M1 | PLANNED |
| M3 | Metadata & i18n Dictionaries | Author natural ZH/EN descriptions, extract concrete benefits, update scripts/readme-i18n.mjs JA/KO | M2 | PLANNED |
| M4 | Site Integration & README Build | Update projects.json, index.html, public/llms.txt, run npm run build:readme | M3 | PLANNED |
| M5 | Test Suite, Build Audit & Git Checkpoint | Run npm test (90+ tests), run npm run build, verify 0 errors, commit git checkpoint | M4 | PLANNED |

## Interface Contracts
### M1 (Mining) ↔ M2 (Audit)
- Output format: Candidate list containing `{ repoUrl, sourcePlatform, candidateDescription, claimedPrimitive, contextUrl }`.

### M2 (Audit) ↔ M3 (Metadata)
- Output format: Verified candidate dossier containing `{ repoUrl, commitSha, criticalFilePath, verifiedPrimitive, codeSnippet, verifiedArchitecture }`.

### M3 (Metadata) ↔ M4 (Integration)
- Output format: Full project object schema conforming to `src/data/projects.json` plus matching dictionary entries for `scripts/readme-i18n.mjs`.

### M4 (Integration) ↔ M5 (Verification)
- Output format: Updated workspace files ready for testing: `src/data/projects.json`, `index.html`, `public/llms.txt`, `scripts/readme-i18n.mjs`, and generated READMEs.

## Code Layout
- `src/data/projects.json`: Core catalog JSON data.
- `scripts/readme-i18n.mjs`: Multi-language dictionary and README generator.
- `index.html`: Web application template containing Schema.org JSON-LD structured data.
- `public/llms.txt`: Machine-readable catalog summary for LLMs.
- `scripts/*.test.mjs`: Automated test suites.
- `scripts/audit-build.mjs`: Production build security and asset auditor.
- `radar/exclusions.json`: Blacklisted/excluded repositories.
