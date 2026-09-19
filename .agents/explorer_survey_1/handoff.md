# Survey Phase Handoff Report: awesome-jev-projects

**Agent**: Explorer Survey 1 (Codebase & Schema Explorer)  
**Date**: 2026-09-19T04:26:00Z  
**Target Repository**: `/Users/chenrongwei/.gemini/antigravity/scratch/awesome-jev-projects`  
**Reference Document**: `/Users/chenrongwei/.gemini/antigravity/scratch/awesome-jev-projects/.agents/ORIGINAL_REQUEST.md`  

---

## 1. Observation

### 1.1 Repository Architecture & Build Pipeline
- **Core Technology Stack**: Vite 7.1.5 + React 19.1.1 + TypeScript 5.9.2 + Tailwind CSS 4.1.13.
- **Runtime & Environment**: Requires Node.js 22+. On macOS with unaccepted Xcode GUI license, all toolchain and git executions must specify `DEVELOPER_DIR=/Library/Developer/CommandLineTools`.
- **Top-Level Directories & Key Files**:
  - `src/App.tsx` (1,394 lines): Interactive radar web UI supporting dual-locale (ZH/EN), Fuse.js fuzzy typo-tolerant search, 17 taxonomy categories, star filtering, bookmarking, project detail modals, and client-side submission issue generation.
  - `src/data/projects.json` (488 KB): Canonical data store containing all curated open-source projects (currently **182 projects**).
  - `src/data/taxonomy.json` (204 lines): Defines 17 canonical categories with discovery patterns and default copy templates.
  - `src/data/radar.json`: Internal scanner cache and discovery queue (strictly forbidden from distribution).
  - `src/lib/i18n.ts`: UI static localization dictionaries for Chinese and English.
  - `src/lib/submission.mjs`: GitHub repository URL parsing, SSH/shorthand normalization, character limits, and issue body builder.
  - `scripts/project-source.mjs`: Source-level verification engine, AST/source filtering, API tree fetching, and Jev provider evidence extraction.
  - `scripts/issue-ingestion.mjs`: Ingestion pipeline for GitHub submission issues with deduplication, provenance verification, and editorial enrichment.
  - `scripts/readme-i18n.mjs` (314 lines, 65 KB): Translation dictionaries (`DECISIONS_JA`, `DECISIONS_KO`, `BENEFITS_JA`, `BENEFITS_KO`) mapping English decisions and benefits to Japanese and Korean.
  - `scripts/generate-readme.mjs` (634 lines, 29 KB): Multi-lingual README generator compiling `README.md`, `README.zh-CN.md`, `README.ja.md`, and `README.ko.md`.
  - `scripts/prepare-public-data.mjs`: Sanitizer projecting internal `projects.json` into `public/projects.json` by allowlisting public fields.
  - `scripts/audit-build.mjs`: Production audit verifying CSP placement, 404 fallback, exactly 14 pinned seeds, zero credential leaks, and zero radar leakages.
  - `index.html` (103 lines): Contains Schema.org `CollectionPage` structured JSON-LD with item count metadata.
  - `public/llms.txt` (1,468 lines, 107 KB): Static LLM-readable catalog enumerating all projects with structured metadata.
  - `radar/exclusions.json` (33 lines): Curated blacklist of 5 excluded repositories that must never be added.

---

### 1.2 Existing Catalog Analysis (`src/data/projects.json`)
- **Total Project Count**: **182 projects**.
- **Pinned Seeds**: Exactly **14 projects** have `pinned: true`. (13 have `pinned: false`, remainder omit `pinned`). These 14 original seeds are:
  1. `jev-ultrafast` (`browser-use/jev-ultrafast`)
  2. `typesafe-mcp` (`itsmostafa/typesafe-mcp`)
  3. `jev-mcp` (`jkudish/jev-mcp`)
  4. `semdecide` (`sharziki/semdecide`)
  5. `jev-codex-router` (`0xNatoshi/jev-codex-router`)
  6. `winnow` (`GhalebDweikat/winnow`)
  7. `jev-review` (`devagrawal09/jev-review`)
  8. `blink` (`ellipsis-dev/blink`)
  9. `neo4jev` (`jexp/neo4jev`)
  10. `jev-desktop` (`lahfir/agent-desktop`)
  11. `typesafe-ai-playground` (`markjaquith/typesafe-ai-playground`)
  12. `prism-liquidity-agent` (`irfndi/prism-liquidity-agent`)
  13. `one-v-one-jev` (`emrickgarrett/OneVOneJev`)
  14. `typesafe-on-neon` (`andrelandgraf/typesafe-on-neon`)
- **Numeric `repoId` Distribution**:
  - **37 projects** contain a numeric GitHub repository ID (`repoId`), ranging from `1343957927` to `1376095310`.
  - **145 projects** do not have a `repoId` (`repoId` is `undefined`).
  - Across all 37 entries with `repoId`, there are **0 duplicates**.
- **URL & ID Uniqueness**:
  - Exactly 182 unique repository URLs (case-insensitive normalized): **0 duplicate URLs**.
  - Exactly 182 unique string `id`s: **0 duplicate IDs**.
- **Category Distribution Across 182 Projects**:
  - `MCP & Integrations`: 29
  - `CLI & Pipelines`: 26
  - `High-Frequency & Simulation`: 17
  - `Browser & OS Action`: 16
  - `Domain & Vertical Tools`: 15
  - `SDK & Decision Frameworks`: 12
  - `Security & Guardrails`: 11
  - `Decision Tools`: 11
  - `Routing & Cost Optimization`: 10
  - `Codebase & Graph Pathfinding`: 9
  - `SDK & Integrations`: 8
  - `Context GC & Filter`: 7
  - `Data & Search`: 4
  - `Creative Tools`: 3
  - `Classification & Taxonomy`: 2
  - `Evaluation & Observability`: 1
  - `Voice & Conversation`: 1

#### Complete Catalog Enumeration (All 182 Existing Projects)

| # | Name | ID | Repository URL | Numeric Repo ID | Commit SHA | Category | Pinned |
|---|------|----|----------------|-----------------|------------|----------|--------|
| 1 | [jev-ultrafast](https://github.com/browser-use/jev-ultrafast) | `jev-ultrafast` | `https://github.com/browser-use/jev-ultrafast` | N/A | `452c1ad2dd` | Browser & OS Action | ✅ True |
| 2 | [typesafe-mcp](https://github.com/itsmostafa/typesafe-mcp) | `typesafe-mcp` | `https://github.com/itsmostafa/typesafe-mcp` | N/A | `2137d0268b` | MCP & Integrations | ✅ True |
| 3 | [jev-mcp](https://github.com/jkudish/jev-mcp) | `jev-mcp` | `https://github.com/jkudish/jev-mcp` | N/A | `223f95e66a` | MCP & Integrations | ✅ True |
| 4 | [SemDecide](https://github.com/sharziki/semdecide) | `semdecide` | `https://github.com/sharziki/semdecide` | N/A | `33cf5c03c5` | CLI & Pipelines | ✅ True |
| 5 | [Jev Codex Router](https://github.com/0xNatoshi/jev-codex-router) | `jev-codex-router` | `https://github.com/0xNatoshi/jev-codex-router` | N/A | `8292b51965` | Routing & Cost Optimization | ✅ True |
| 6 | [Winnow](https://github.com/GhalebDweikat/winnow) | `winnow` | `https://github.com/GhalebDweikat/winnow` | N/A | `637668d60a` | Context GC & Filter | ✅ True |
| 7 | [Jev Review](https://github.com/devagrawal09/jev-review) | `jev-review` | `https://github.com/devagrawal09/jev-review` | N/A | `31f8960279` | Codebase & Graph Pathfinding | ✅ True |
| 8 | [Blink](https://github.com/ellipsis-dev/blink) | `blink` | `https://github.com/ellipsis-dev/blink` | N/A | `a621ede756` | Codebase & Graph Pathfinding | ✅ True |
| 9 | [neo4jev](https://github.com/jexp/neo4jev) | `neo4jev` | `https://github.com/jexp/neo4jev` | N/A | `7dca13df20` | Codebase & Graph Pathfinding | ✅ True |
| 10 | [jev-desktop](https://github.com/lahfir/agent-desktop) | `jev-desktop` | `https://github.com/lahfir/agent-desktop` | N/A | `7a8e4a1028` | Browser & OS Action | ✅ True |
| 11 | [TypeSafe AI Playground](https://github.com/markjaquith/typesafe-ai-playground) | `typesafe-ai-playground` | `https://github.com/markjaquith/typesafe-ai-playground` | N/A | `0602513a18` | CLI & Pipelines | ✅ True |
| 12 | [Prism](https://github.com/irfndi/prism-liquidity-agent) | `prism-liquidity-agent` | `https://github.com/irfndi/prism-liquidity-agent` | N/A | `22c67bdbe3` | Domain & Vertical Tools | ✅ True |
| 13 | [1v1 Jev](https://github.com/emrickgarrett/OneVOneJev) | `one-v-one-jev` | `https://github.com/emrickgarrett/OneVOneJev` | N/A | `365b339d04` | High-Frequency & Simulation | ✅ True |
| 14 | [Safer with Jev](https://github.com/andrelandgraf/typesafe-on-neon) | `typesafe-on-neon` | `https://github.com/andrelandgraf/typesafe-on-neon` | N/A | `c4e08476a5` | Security & Guardrails | ✅ True |
| 15 | [fast-jev-compaction](https://github.com/tamaratran/fast-jev-compaction) | `tamaratran:fast-jev-compaction` | `https://github.com/tamaratran/fast-jev-compaction` | N/A | `e3f262a7f4` | Context GC & Filter | N/A |
| 16 | [jev-review](https://github.com/NiazMorshed2007/jev-review) | `niazmorshed2007:jev-review` | `https://github.com/NiazMorshed2007/jev-review` | N/A | `57690af54e` | Codebase & Graph Pathfinding | N/A |
| 17 | [pg-jev](https://github.com/realZachi/pg-jev) | `realzachi:pg-jev` | `https://github.com/realZachi/pg-jev` | N/A | `23682752cc` | Data & Search | N/A |
| 18 | [jevpilot](https://github.com/standardagents/jevpilot) | `standardagents:jevpilot` | `https://github.com/standardagents/jevpilot` | N/A | `e1beeb13b9` | High-Frequency & Simulation | N/A |
| 19 | [jev-browser](https://github.com/jkudish/jev-browser) | `jkudish:jev-browser` | `https://github.com/jkudish/jev-browser` | N/A | `257edfc19d` | Browser & OS Action | N/A |
| 20 | [pi-jev](https://github.com/y0usaf/pi-jev) | `y0usaf:pi-jev` | `https://github.com/y0usaf/pi-jev` | N/A | `b3478fd4ca` | Security & Guardrails | N/A |
| 21 | [pi-jev-auto-mode](https://github.com/jomatsu/pi-jev-auto-mode) | `jomatsu:pi-jev-auto-mode` | `https://github.com/jomatsu/pi-jev-auto-mode` | N/A | `06a5604308` | Security & Guardrails | N/A |
| 22 | [Jev-Trades](https://github.com/zadescoxp/Jev-Trades) | `zadescoxp:jev-trades` | `https://github.com/zadescoxp/Jev-Trades` | N/A | `01fb18e448` | Domain & Vertical Tools | N/A |
| 23 | [jev](https://github.com/dannote/jev) | `dannote:jev` | `https://github.com/dannote/jev` | N/A | `09fbb6cbaf` | MCP & Integrations | N/A |
| 24 | [jev-mcp](https://github.com/blakestone-x/jev-mcp) | `blakestone-x:jev-mcp` | `https://github.com/blakestone-x/jev-mcp` | N/A | `59289a0b47` | MCP & Integrations | N/A |
| 25 | [HA-Jev](https://github.com/AboveColin/HA-Jev) | `abovecolin:ha-jev` | `https://github.com/AboveColin/HA-Jev` | N/A | `6b541dbb84` | Domain & Vertical Tools | N/A |
| 26 | [jev-benchmarks](https://github.com/AbdelStark/jev-benchmarks) | `abdelstark:jev-benchmarks` | `https://github.com/AbdelStark/jev-benchmarks` | N/A | `0d610cc53e` | Decision Tools | N/A |
| 27 | [Jevbridge](https://github.com/gamesonrblx/Jevbridge) | `gamesonrblx:jevbridge` | `https://github.com/gamesonrblx/Jevbridge` | N/A | `54c5587565` | MCP & Integrations | N/A |
| 28 | [jev-playground](https://github.com/mizchi/jev-playground) | `mizchi:jev-playground` | `https://github.com/mizchi/jev-playground` | N/A | `92701bb053` | CLI & Pipelines | N/A |
| 29 | [zod-jev](https://github.com/jomatsu/zod-jev) | `jomatsu:zod-jev` | `https://github.com/jomatsu/zod-jev` | N/A | `700bd256fe` | MCP & Integrations | N/A |
| 30 | [jev-lm](https://github.com/y0usaf/jev-lm) | `y0usaf:jev-lm` | `https://github.com/y0usaf/jev-lm` | N/A | `05e7f03bf4` | CLI & Pipelines | N/A |
| 31 | [jev-search](https://github.com/superagents-lab/jev-search) | `superagents-lab:jev-search` | `https://github.com/superagents-lab/jev-search` | N/A | `369b282489` | Data & Search | N/A |
| 32 | [live-jev](https://github.com/vinilana/live-jev) | `vinilana:live-jev` | `https://github.com/vinilana/live-jev` | N/A | `cd13ab0a7b` | High-Frequency & Simulation | N/A |
| 33 | [jev-code](https://github.com/devagrawal09/jev-code) | `devagrawal09:jev-code` | `https://github.com/devagrawal09/jev-code` | N/A | `fd092558eb` | Codebase & Graph Pathfinding | N/A |
| 34 | [daf-jev](https://github.com/docxology/daf-jev) | `docxology:daf-jev` | `https://github.com/docxology/daf-jev` | N/A | `c14efc01b1` | MCP & Integrations | N/A |
| 35 | [jev-chat](https://github.com/adhyaay-karnwal/jev-chat) | `adhyaay-karnwal:jev-chat` | `https://github.com/adhyaay-karnwal/jev-chat` | N/A | `fb92fd33dd` | CLI & Pipelines | N/A |
| 36 | [jev-cli](https://github.com/tumf/jev-cli) | `tumf:jev-cli` | `https://github.com/tumf/jev-cli` | N/A | `60441de4f9` | CLI & Pipelines | N/A |
| 37 | [AskJev](https://github.com/ranjan2829/AskJev) | `ranjan2829:askjev` | `https://github.com/ranjan2829/AskJev` | N/A | `20943bc2ce` | Browser & OS Action | N/A |
| 38 | [jev-for-engineers](https://github.com/Foadsf/jev-for-engineers) | `foadsf:jev-for-engineers` | `https://github.com/Foadsf/jev-for-engineers` | N/A | `181e75208a` | Domain & Vertical Tools | N/A |
| 39 | [jev-system-one](https://github.com/haseeb-heaven/jev-system-one) | `haseeb-heaven:jev-system-one` | `https://github.com/haseeb-heaven/jev-system-one` | N/A | `66bbfb6655` | CLI & Pipelines | N/A |
| 40 | [JevBird](https://github.com/leftspace89/JevBird) | `leftspace89:jevbird` | `https://github.com/leftspace89/JevBird` | N/A | `1e5fd13973` | High-Frequency & Simulation | N/A |
| 41 | [jev-judgment](https://github.com/HyunjunJeon/jev-judgment) | `hyunjunjeon:jev-judgment` | `https://github.com/HyunjunJeon/jev-judgment` | N/A | `f6056e7cd3` | Security & Guardrails | N/A |
| 42 | [jev-cli](https://github.com/jtsang4/jev-cli) | `jtsang4:jev-cli` | `https://github.com/jtsang4/jev-cli` | N/A | `6ea8abdf70` | CLI & Pipelines | N/A |
| 43 | [claude-jev](https://github.com/buchmark/claude-jev) | `buchmark:claude-jev` | `https://github.com/buchmark/claude-jev` | N/A | `06fe407f28` | Codebase & Graph Pathfinding | N/A |
| 44 | [jev-browser](https://github.com/tontoko/jev-browser) | `tontoko:jev-browser` | `https://github.com/tontoko/jev-browser` | N/A | `05b8257db8` | Browser & OS Action | N/A |
| 45 | [pi-jev](https://github.com/TheoOliveira/pi-jev) | `theooliveira:pi-jev` | `https://github.com/TheoOliveira/pi-jev` | N/A | `8bd8dcf1b2` | MCP & Integrations | N/A |
| 46 | [jev-tree](https://github.com/reachjalil/jev-tree) | `reachjalil:jev-tree` | `https://github.com/reachjalil/jev-tree` | N/A | `95bff63bd6` | Classification & Taxonomy | N/A |
| 47 | [jev-starter](https://github.com/hamakyo/jev-starter) | `hamakyo:jev-starter` | `https://github.com/hamakyo/jev-starter` | N/A | `fb0fae07d1` | SDK & Decision Frameworks | N/A |
| 48 | [aside-jev](https://github.com/himomohi/aside-jev) | `himomohi:aside-jev` | `https://github.com/himomohi/aside-jev` | N/A | `d2923f7949` | Browser & OS Action | N/A |
| 49 | [jev-skill-gate](https://github.com/ShivamPansuriya/jev-skill-gate) | `shivampansuriya:jev-skill-gate` | `https://github.com/ShivamPansuriya/jev-skill-gate` | N/A | `1ab4c9a7cd` | Context GC & Filter | N/A |
| 50 | [jev-guard](https://github.com/leepokai/jev-guard) | `leepokai:jev-guard` | `https://github.com/leepokai/jev-guard` | N/A | `94996ea80b` | Security & Guardrails | N/A |
| 51 | [jev-mcp](https://github.com/rashedInt32/jev-mcp) | `rashedint32:jev-mcp` | `https://github.com/rashedInt32/jev-mcp` | N/A | `27603c12d0` | MCP & Integrations | N/A |
| 52 | [jevclient](https://github.com/AboveColin/jevclient) | `abovecolin:jevclient` | `https://github.com/AboveColin/jevclient` | N/A | `d568f25717` | SDK & Decision Frameworks | N/A |
| 53 | [jev-workbench](https://github.com/molis-ai/jev-workbench) | `molis-ai:jev-workbench` | `https://github.com/molis-ai/jev-workbench` | N/A | `3d7d6f673d` | MCP & Integrations | N/A |
| 54 | [got-jev](https://github.com/phureewat29/got-jev) | `phureewat29:got-jev` | `https://github.com/phureewat29/got-jev` | N/A | `5e61ae52d2` | Domain & Vertical Tools | N/A |
| 55 | [pi-fast-jev-compaction](https://github.com/joelhooks/pi-fast-jev-compaction) | `joelhooks:pi-fast-jev-compaction` | `https://github.com/joelhooks/pi-fast-jev-compaction` | N/A | `eb83f533f4` | CLI & Pipelines | N/A |
| 56 | [hermes-jev-approvals](https://github.com/anpicasso/hermes-jev-approvals) | `anpicasso:hermes-jev-approvals` | `https://github.com/anpicasso/hermes-jev-approvals` | N/A | `c41d81de23` | MCP & Integrations | N/A |
| 57 | [jev-research](https://github.com/sherajdev/jev-research) | `sherajdev:jev-research` | `https://github.com/sherajdev/jev-research` | N/A | `23da0defee` | Decision Tools | N/A |
| 58 | [jev-resilience](https://github.com/Vicente-MD/jev-resilience) | `vicente-md:jev-resilience` | `https://github.com/Vicente-MD/jev-resilience` | N/A | `c490e0dc78` | MCP & Integrations | N/A |
| 59 | [jev-go](https://github.com/Stumble/jev-go) | `stumble:jev-go` | `https://github.com/Stumble/jev-go` | N/A | `a475dc925b` | MCP & Integrations | N/A |
| 60 | [jev-agent-failure-benchmark](https://github.com/TokenTrim/jev-agent-failure-benchmark) | `tokentrim:jev-agent-failure-benchmark` | `https://github.com/TokenTrim/jev-agent-failure-benchmark` | N/A | `4d46af795a` | Decision Tools | N/A |
| 61 | [computer-use-jev](https://github.com/paulsmith/computer-use-jev) | `paulsmith:computer-use-jev` | `https://github.com/paulsmith/computer-use-jev` | N/A | `ff0ad8ba8e` | Browser & OS Action | N/A |
| 62 | [jev-broadcast-lab](https://github.com/4anti/jev-broadcast-lab) | `4anti:jev-broadcast-lab` | `https://github.com/4anti/jev-broadcast-lab` | N/A | `90ebea4446` | Domain & Vertical Tools | N/A |
| 63 | [jevgo](https://github.com/fgn/jevgo) | `fgn:jevgo` | `https://github.com/fgn/jevgo` | N/A | `ff7a543dda` | MCP & Integrations | N/A |
| 64 | [jev-little-airways](https://github.com/lbotinelly/jev-little-airways) | `lbotinelly:jev-little-airways` | `https://github.com/lbotinelly/jev-little-airways` | N/A | `d6ec286c78` | High-Frequency & Simulation | N/A |
| 65 | [jev-playground](https://github.com/Little-Planet-Labs/jev-playground) | `little-planet-labs:jev-playground` | `https://github.com/Little-Planet-Labs/jev-playground` | N/A | `418b723779` | Decision Tools | N/A |
| 66 | [laravel-typesafe-jev](https://github.com/Butochnikov/laravel-typesafe-jev) | `butochnikov:laravel-typesafe-jev` | `https://github.com/Butochnikov/laravel-typesafe-jev` | N/A | `4d70f5e1b0` | MCP & Integrations | N/A |
| 67 | [jev-go](https://github.com/guillemus/jev-go) | `guillemus:jev-go` | `https://github.com/guillemus/jev-go` | N/A | `06df95fe08` | MCP & Integrations | N/A |
| 68 | [ask-jev](https://github.com/omni-/ask-jev) | `omni-:ask-jev` | `https://github.com/omni-/ask-jev` | N/A | `74199ef940` | CLI & Pipelines | N/A |
| 69 | [jev-code](https://github.com/rhighs/jev-code) | `rhighs:jev-code` | `https://github.com/rhighs/jev-code` | N/A | `1493edfa30` | CLI & Pipelines | N/A |
| 70 | [jev-doom-agent](https://github.com/lukaske/jev-doom-agent) | `lukaske:jev-doom-agent` | `https://github.com/lukaske/jev-doom-agent` | N/A | `318c32a248` | High-Frequency & Simulation | N/A |
| 71 | [jev-rerank-bench](https://github.com/anessbelbati/jev-rerank-bench) | `anessbelbati:jev-rerank-bench` | `https://github.com/anessbelbati/jev-rerank-bench` | N/A | `cd9a35b22a` | Decision Tools | N/A |
| 72 | [jev-predict-skill](https://github.com/DanielKillenberger/jev-predict-skill) | `danielkillenberger:jev-predict-skill` | `https://github.com/DanielKillenberger/jev-predict-skill` | N/A | `c80051db82` | Decision Tools | N/A |
| 73 | [jev-trade](https://github.com/aowang-ai/jev-trade) | `aowang-ai:jev-trade` | `https://github.com/aowang-ai/jev-trade` | N/A | `df2c965632` | Domain & Vertical Tools | N/A |
| 74 | [jevsume](https://github.com/unownone/jevsume) | `unownone:jevsume` | `https://github.com/unownone/jevsume` | N/A | `650a96a4c9` | Domain & Vertical Tools | N/A |
| 75 | [jev_ampcode](https://github.com/thesammykins/jev_ampcode) | `thesammykins:jev_ampcode` | `https://github.com/thesammykins/jev_ampcode` | N/A | `8741655927` | MCP & Integrations | N/A |
| 76 | [jev-tool-permissions](https://github.com/NicolasMontone/jev-tool-permissions) | `nicolasmontone:jev-tool-permissions` | `https://github.com/NicolasMontone/jev-tool-permissions` | N/A | `4c57dd6b02` | Security & Guardrails | N/A |
| 77 | [jevthoven](https://github.com/cocktailpeanut/jevthoven) | `cocktailpeanut:jevthoven` | `https://github.com/cocktailpeanut/jevthoven` | N/A | `e513b66164` | Creative Tools | N/A |
| 78 | [doom-jev](https://github.com/AmoghCreator/doom-jev) | `amoghcreator:doom-jev` | `https://github.com/AmoghCreator/doom-jev` | N/A | `b27663fc0f` | High-Frequency & Simulation | N/A |
| 79 | [jev-context](https://github.com/zbush/jev-context) | `zbush:jev-context` | `https://github.com/zbush/jev-context` | N/A | `2be700faeb` | Context GC & Filter | N/A |
| 80 | [ui-generator-instinct-jev](https://github.com/joevidev/ui-generator-instinct-jev) | `joevidev:ui-generator-instinct-jev` | `https://github.com/joevidev/ui-generator-instinct-jev` | N/A | `9a81c2dc23` | Creative Tools | N/A |
| 81 | [jev-use](https://github.com/vlad-terin/jev-use) | `vlad-terin:jev-use` | `https://github.com/vlad-terin/jev-use` | N/A | `02e0b7f8d7` | Browser & OS Action | N/A |
| 82 | [is-odd-jev](https://github.com/alxcrt/is-odd-jev) | `alxcrt:is-odd-jev` | `https://github.com/alxcrt/is-odd-jev` | N/A | `2f36e21981` | CLI & Pipelines | N/A |
| 83 | [mobile-jev](https://github.com/droidrun/mobile-jev) | `droidrun:mobile-jev` | `https://github.com/droidrun/mobile-jev` | N/A | `395fc222be` | Browser & OS Action | N/A |
| 84 | [jev-demo](https://github.com/minghanminghan/jev-demo) | `minghanminghan:jev-demo` | `https://github.com/minghanminghan/jev-demo` | N/A | `b6892294f9` | Routing & Cost Optimization | N/A |
| 85 | [jev-music-theory-1](https://github.com/adammichaelwood/jev-music-theory-1) | `adammichaelwood:jev-music-theory-1` | `https://github.com/adammichaelwood/jev-music-theory-1` | N/A | `7c5b4b8b7e` | Domain & Vertical Tools | N/A |
| 86 | [jev-macos-loop](https://github.com/jcpsimmons/jev-macos-loop) | `jcpsimmons:jev-macos-loop` | `https://github.com/jcpsimmons/jev-macos-loop` | N/A | `5591a9c457` | Browser & OS Action | N/A |
| 87 | [jev-router-playground](https://github.com/hugo-alves/jev-router-playground) | `hugo-alves:jev-router-playground` | `https://github.com/hugo-alves/jev-router-playground` | N/A | `c2eb6ccf68` | Routing & Cost Optimization | N/A |
| 88 | [jevscript](https://github.com/amberwhitehead/jevscript) | `amberwhitehead:jevscript` | `https://github.com/amberwhitehead/jevscript` | N/A | `a01032218d` | CLI & Pipelines | N/A |
| 89 | [grokskill-jev](https://github.com/AE-AlphaEdge/grokskill-jev) | `ae-alphaedge:grokskill-jev` | `https://github.com/AE-AlphaEdge/grokskill-jev` | N/A | `7a5b5963ab` | Browser & OS Action | N/A |
| 90 | [jev-trade](https://github.com/Waxmell114514/jev-trade) | `waxmell114514:jev-trade` | `https://github.com/Waxmell114514/jev-trade` | N/A | `df43b9636e` | Domain & Vertical Tools | N/A |
| 91 | [jev-demos](https://github.com/Bud-ro/jev-demos) | `bud-ro:jev-demos` | `https://github.com/Bud-ro/jev-demos` | N/A | `dbd393781c` | High-Frequency & Simulation | N/A |
| 92 | [jevex](https://github.com/jvsteiner/jevex) | `jvsteiner:jevex` | `https://github.com/jvsteiner/jevex` | N/A | `dd22ffd958` | MCP & Integrations | N/A |
| 93 | [jev-experiments](https://github.com/mittal-parth/jev-experiments) | `mittal-parth:jev-experiments` | `https://github.com/mittal-parth/jev-experiments` | N/A | `2c8272ea13` | High-Frequency & Simulation | N/A |
| 94 | [foreman-jev](https://github.com/Shifty-Eye-Games/foreman-jev) | `shifty-eye-games:foreman-jev` | `https://github.com/Shifty-Eye-Games/foreman-jev` | N/A | `3cb97e6051` | Codebase & Graph Pathfinding | N/A |
| 95 | [jevlogs](https://github.com/reachjalil/jevlogs) | `reachjalil:jevlogs` | `https://github.com/reachjalil/jevlogs` | N/A | `b1ff60079c` | Context GC & Filter | N/A |
| 96 | [ha-conversation-jev](https://github.com/luxus/ha-conversation-jev) | `luxus:ha-conversation-jev` | `https://github.com/luxus/ha-conversation-jev` | N/A | `a405366b66` | Domain & Vertical Tools | N/A |
| 97 | [ai](https://github.com/vercel/ai) | `vercel:ai` | `https://github.com/vercel/ai` | N/A | `9528712c36` | SDK & Integrations | N/A |
| 98 | [langchain](https://github.com/langchain-ai/langchain) | `langchain-ai:langchain` | `https://github.com/langchain-ai/langchain` | N/A | `5bf6a15466` | SDK & Integrations | N/A |
| 99 | [oh-my-pi](https://github.com/can1357/oh-my-pi) | `can1357:oh-my-pi` | `https://github.com/can1357/oh-my-pi` | N/A | `04728e6226` | SDK & Integrations | N/A |
| 100 | [eliza](https://github.com/elizaOS/eliza) | `elizaos:eliza` | `https://github.com/elizaOS/eliza` | N/A | `ebc808e3a6` | SDK & Integrations | N/A |
| 101 | [composio](https://github.com/ComposioHQ/composio) | `composiohq:composio` | `https://github.com/ComposioHQ/composio` | N/A | `b27c24d00d` | SDK & Integrations | N/A |
| 102 | [pydantic-ai](https://github.com/pydantic/pydantic-ai) | `pydantic:pydantic-ai` | `https://github.com/pydantic/pydantic-ai` | N/A | `41da7485fb` | SDK & Integrations | N/A |
| 103 | [litellm](https://github.com/BerriAI/litellm) | `berriai:litellm` | `https://github.com/BerriAI/litellm` | N/A | `799673d5ba` | Routing & Cost Optimization | N/A |
| 104 | [langchainjs](https://github.com/langchain-ai/langchainjs) | `langchain-ai:langchainjs` | `https://github.com/langchain-ai/langchainjs` | N/A | `206d8b992b` | SDK & Integrations | N/A |
| 105 | [firstmate](https://github.com/kunchenguid/firstmate) | `kunchenguid:firstmate` | `https://github.com/kunchenguid/firstmate` | N/A | `9bc051ff43` | Routing & Cost Optimization | N/A |
| 106 | [openchamber](https://github.com/openchamber/openchamber) | `openchamber:openchamber` | `https://github.com/openchamber/openchamber` | N/A | `208f1fb17a` | Routing & Cost Optimization | N/A |
| 107 | [ax](https://github.com/ax-llm/ax) | `ax-llm:ax` | `https://github.com/ax-llm/ax` | N/A | `5c43344f9e` | SDK & Integrations | N/A |
| 108 | [agentgateway](https://github.com/agentgateway/agentgateway) | `agentgateway:agentgateway` | `https://github.com/agentgateway/agentgateway` | N/A | `6b0270efd2` | Security & Guardrails | N/A |
| 109 | [omg.dev](https://github.com/BennyKok/omg.dev) | `bennykok:omg.dev` | `https://github.com/BennyKok/omg.dev` | N/A | `effd0dbd8d` | Browser & OS Action | N/A |
| 110 | [pi-fabric](https://github.com/monotykamary/pi-fabric) | `monotykamary:pi-fabric` | `https://github.com/monotykamary/pi-fabric` | N/A | `97df90fa87` | SDK & Decision Frameworks | N/A |
| 111 | [latitude-llm](https://github.com/latitude-dev/latitude-llm) | `latitude-dev:latitude-llm` | `https://github.com/latitude-dev/latitude-llm` | N/A | `993266cd8b` | Evaluation & Observability | N/A |
| 112 | [instructor-php](https://github.com/cognesy/instructor-php) | `cognesy:instructor-php` | `https://github.com/cognesy/instructor-php` | N/A | `bb1160ce23` | SDK & Decision Frameworks | N/A |
| 113 | [atomic](https://github.com/bastani-inc/atomic) | `bastani-inc:atomic` | `https://github.com/bastani-inc/atomic` | N/A | `33ca4ccb5f` | Routing & Cost Optimization | N/A |
| 114 | [WrongStack](https://github.com/WrongStack/WrongStack) | `wrongstack:wrongstack` | `https://github.com/WrongStack/WrongStack` | N/A | `0b595dfbd2` | Routing & Cost Optimization | N/A |
| 115 | [celesto](https://github.com/CelestoAI/celesto) | `celestoai:celesto` | `https://github.com/CelestoAI/celesto` | N/A | `182b482c5e` | Codebase & Graph Pathfinding | N/A |
| 116 | [req_llm](https://github.com/agentjido/req_llm) | `agentjido:req_llm` | `https://github.com/agentjido/req_llm` | N/A | `9cb0ee7a0f` | SDK & Decision Frameworks | N/A |
| 117 | [vellum-assistant](https://github.com/vellum-ai/vellum-assistant) | `vellum-ai:vellum-assistant` | `https://github.com/vellum-ai/vellum-assistant` | N/A | `7b168d3c04` | MCP & Integrations | N/A |
| 118 | [vexjoy-agent](https://github.com/notque/vexjoy-agent) | `notque:vexjoy-agent` | `https://github.com/notque/vexjoy-agent` | N/A | `f13b3b7f39` | Routing & Cost Optimization | N/A |
| 119 | [aiavatarkit](https://github.com/uezo/aiavatarkit) | `uezo:aiavatarkit` | `https://github.com/uezo/aiavatarkit` | N/A | `38b617b8b9` | Voice & Conversation | N/A |
| 120 | [taskuary](https://github.com/ldbumble/taskuary) | `ldbumble:taskuary` | `https://github.com/ldbumble/taskuary` | N/A | `4ad29d7b29` | MCP & Integrations | N/A |
| 121 | [orchestkit](https://github.com/yonatangross/orchestkit) | `yonatangross:orchestkit` | `https://github.com/yonatangross/orchestkit` | N/A | `110359bb26` | Classification & Taxonomy | N/A |
| 122 | [skillbox](https://github.com/kitze/skillbox) | `kitze:skillbox` | `https://github.com/kitze/skillbox` | N/A | `d83ba4ecd2` | Context GC & Filter | N/A |
| 123 | [interlinked-cli](https://github.com/QuentinCody/interlinked-cli) | `quentincody:interlinked-cli` | `https://github.com/QuentinCody/interlinked-cli` | N/A | `207330d813` | Security & Guardrails | N/A |
| 124 | [effect-agent](https://github.com/danieljvdm/effect-agent) | `danieljvdm:effect-agent` | `https://github.com/danieljvdm/effect-agent` | N/A | `88005e497e` | SDK & Decision Frameworks | N/A |
| 125 | [pi-warden](https://github.com/DevMortimer/pi-warden) | `devmortimer:pi-warden` | `https://github.com/DevMortimer/pi-warden` | N/A | `84a3bc9aa6` | Security & Guardrails | N/A |
| 126 | [advocaat](https://github.com/pithings/advocaat) | `pithings:advocaat` | `https://github.com/pithings/advocaat` | N/A | `75e35bec47` | SDK & Decision Frameworks | N/A |
| 127 | [synkora-ai](https://github.com/getsynkora/synkora-ai) | `getsynkora:synkora-ai` | `https://github.com/getsynkora/synkora-ai` | N/A | `7c0717e5aa` | MCP & Integrations | N/A |
| 128 | [ai](https://github.com/hackclub/ai) | `hackclub:ai` | `https://github.com/hackclub/ai` | N/A | `a76ea2cb15` | MCP & Integrations | N/A |
| 129 | [unclutter](https://github.com/kitze/unclutter) | `kitze:unclutter` | `https://github.com/kitze/unclutter` | N/A | `9ef9beccc1` | Browser & OS Action | N/A |
| 130 | [openai-scala-client](https://github.com/cequence-io/openai-scala-client) | `cequence-io:openai-scala-client` | `https://github.com/cequence-io/openai-scala-client` | N/A | `0425afb65f` | SDK & Decision Frameworks | N/A |
| 131 | [ego-jev](https://github.com/phd-peter/ego-jev) | `phd-peter:ego-jev` | `https://github.com/phd-peter/ego-jev` | N/A | `0da45e4f3a` | Browser & OS Action | N/A |
| 132 | [jev-visual](https://github.com/hr98w/jev-visual) | `hr98w:jev-visual` | `https://github.com/hr98w/jev-visual` | N/A | `19af545f09` | SDK & Decision Frameworks | N/A |
| 133 | [bluenoise](https://github.com/rokcso/bluenoise) | `rokcso:bluenoise` | `https://github.com/rokcso/bluenoise` | N/A | `ef81ea7a7c` | Context GC & Filter | N/A |
| 134 | [jev-gomoku](https://github.com/XieChengYuan/jev-gomoku) | `xiechengyuan:jev-gomoku` | `https://github.com/XieChengYuan/jev-gomoku` | 1375601534 | `2aac72cd54` | High-Frequency & Simulation | N/A |
| 135 | [jev-voice-browser](https://github.com/moritzkremb/jev-voice-browser) | `moritzkremb:jev-voice-browser` | `https://github.com/moritzkremb/jev-voice-browser` | 1375142045 | `054db0f3db` | CLI & Pipelines | N/A |
| 136 | [hono-jev-router](https://github.com/yusukebe/hono-jev-router) | `yusukebe:hono-jev-router` | `https://github.com/yusukebe/hono-jev-router` | 1375544171 | `04f6e103e1` | CLI & Pipelines | N/A |
| 137 | [openjev](https://github.com/razorback16/openjev) | `razorback16:openjev` | `https://github.com/razorback16/openjev` | 1375639479 | `2bcb085a08` | CLI & Pipelines | N/A |
| 138 | [typesafe-jev-workflow](https://github.com/GiesN/typesafe-jev-workflow) | `giesn:typesafe-jev-workflow` | `https://github.com/GiesN/typesafe-jev-workflow` | 1373598463 | `251019670e` | CLI & Pipelines | N/A |
| 139 | [JevRouter](https://github.com/BillionsBobby/JevRouter) | `billionsbobby:jevrouter` | `https://github.com/BillionsBobby/JevRouter` | 1375641268 | `c48ace2fbd` | MCP & Integrations | N/A |
| 140 | [jevwire](https://github.com/Brainwires/jevwire) | `brainwires:jevwire` | `https://github.com/Brainwires/jevwire` | 1375075176 | `21abf12fab` | MCP & Integrations | N/A |
| 141 | [llama-index-jev](https://github.com/WiktorB2004/llama-index-jev) | `wiktorb2004:llama-index-jev` | `https://github.com/WiktorB2004/llama-index-jev` | 1375582165 | `39df3b747c` | Data & Search | N/A |
| 142 | [jevcal](https://github.com/abhixhek/jevcal) | `abhixhek:jevcal` | `https://github.com/abhixhek/jevcal` | 1375491494 | `ae8f3144d6` | CLI & Pipelines | N/A |
| 143 | [jev-benchmark](https://github.com/wondertwins/jev-benchmark) | `wondertwins:jev-benchmark` | `https://github.com/wondertwins/jev-benchmark` | 1373642264 | `1c2509ac7d` | Decision Tools | N/A |
| 144 | [jev-java](https://github.com/Olti1947/jev-java) | `olti1947:jev-java` | `https://github.com/Olti1947/jev-java` | 1375763624 | `8f11284464` | SDK & Decision Frameworks | N/A |
| 145 | [jev-shield](https://github.com/vmendes90/jev-shield) | `vmendes90:jev-shield` | `https://github.com/vmendes90/jev-shield` | 1375636341 | `7674d5cfa6` | High-Frequency & Simulation | N/A |
| 146 | [jev-frontend-qa](https://github.com/Nainish-Rai/jev-frontend-qa) | `nainish-rai:jev-frontend-qa` | `https://github.com/Nainish-Rai/jev-frontend-qa` | 1375055841 | `2a57d0a234` | Decision Tools | N/A |
| 147 | [omp-jev-compaction](https://github.com/jerryfane/omp-jev-compaction) | `jerryfane:omp-jev-compaction` | `https://github.com/jerryfane/omp-jev-compaction` | 1375572022 | `f7d1b917cf` | Decision Tools | N/A |
| 148 | [todo-jev](https://github.com/maker-KK/todo-jev) | `maker-kk:todo-jev` | `https://github.com/maker-KK/todo-jev` | 1375615785 | `08c8a1e744` | CLI & Pipelines | N/A |
| 149 | [jevsome-projects](https://github.com/ozers/jevsome-projects) | `ozers:jevsome-projects` | `https://github.com/ozers/jevsome-projects` | 1375753984 | `ba0bfdceb2` | Domain & Vertical Tools | N/A |
| 150 | [jev-cli](https://github.com/Nasrallah-AL/jev-cli) | `nasrallah-al:jev-cli` | `https://github.com/Nasrallah-AL/jev-cli` | 1375579368 | `02ca80177a` | CLI & Pipelines | N/A |
| 151 | [LightJev](https://github.com/rongxinzy/LightJev) | `rongxinzy:lightjev` | `https://github.com/rongxinzy/LightJev` | 1375873237 | `dede59a91f` | CLI & Pipelines | N/A |
| 152 | [hermes-jev-north-star](https://github.com/poponline63/hermes-jev-north-star) | `poponline63:hermes-jev-north-star` | `https://github.com/poponline63/hermes-jev-north-star` | 1375717325 | `b5499f2da6` | Domain & Vertical Tools | N/A |
| 153 | [codex-jev-compaction](https://github.com/Wang-auspicious/codex-jev-compaction) | `wang-auspicious:codex-jev-compaction` | `https://github.com/Wang-auspicious/codex-jev-compaction` | 1375722961 | `26fa09f831` | MCP & Integrations | N/A |
| 154 | [pi-jev-compaction](https://github.com/Wang-auspicious/pi-jev-compaction) | `wang-auspicious:pi-jev-compaction` | `https://github.com/Wang-auspicious/pi-jev-compaction` | 1375722339 | `058d91db75` | CLI & Pipelines | N/A |
| 155 | [jev-review-action](https://github.com/fatwang2/jev-review-action) | `fatwang2:jev-review-action` | `https://github.com/fatwang2/jev-review-action` | 1375286341 | `8e56fea5f7` | Domain & Vertical Tools | N/A |
| 156 | [jev-curate](https://github.com/AkashPriyadarshii/jev-curate) | `akashpriyadarshii:jev-curate` | `https://github.com/AkashPriyadarshii/jev-curate` | 1375477393 | `a35d420cdf` | High-Frequency & Simulation | N/A |
| 157 | [jevify](https://github.com/altryne/jevify) | `altryne:jevify` | `https://github.com/altryne/jevify` | 1375012405 | `9b50ba1344` | SDK & Decision Frameworks | N/A |
| 158 | [jev-synergy-screening](https://github.com/PistachioAIHQ/jev-synergy-screening) | `pistachioaihq:jev-synergy-screening` | `https://github.com/PistachioAIHQ/jev-synergy-screening` | 1373621304 | `4142c88513` | CLI & Pipelines | N/A |
| 159 | [jev-mcp](https://github.com/BYK/jev-mcp) | `byk:jev-mcp` | `https://github.com/BYK/jev-mcp` | 1375117755 | `cee2e6d581` | MCP & Integrations | N/A |
| 160 | [jev-classifier](https://github.com/felpsdev/jev-classifier) | `felpsdev:jev-classifier` | `https://github.com/felpsdev/jev-classifier` | 1375260489 | `e0c6cc7c6d` | MCP & Integrations | N/A |
| 161 | [jev-exploration](https://github.com/SamuelSacco/jev-exploration) | `samuelsacco:jev-exploration` | `https://github.com/SamuelSacco/jev-exploration` | 1374527814 | `af91a6e09b` | Domain & Vertical Tools | N/A |
| 162 | [jevscan](https://github.com/jevbook/jevscan) | `jevbook:jevscan` | `https://github.com/jevbook/jevscan` | 1375950252 | `ed8c0c5c37` | MCP & Integrations | N/A |
| 163 | [jev-askable-arm](https://github.com/TarunTomar122/jev-askable-arm) | `taruntomar122:jev-askable-arm` | `https://github.com/TarunTomar122/jev-askable-arm` | 1374240949 | `bef98b31a1` | CLI & Pipelines | N/A |
| 164 | [jev-flash-review](https://github.com/TheBous/jev-flash-review) | `thebous:jev-flash-review` | `https://github.com/TheBous/jev-flash-review` | 1375086529 | `658a7bd52e` | Codebase & Graph Pathfinding | N/A |
| 165 | [jevchat](https://github.com/kt3k/jevchat) | `kt3k:jevchat` | `https://github.com/kt3k/jevchat` | 1375245635 | `18ecea877e` | Decision Tools | N/A |
| 166 | [jevarena](https://github.com/raihankhan-rk/jevarena) | `raihankhan-rk:jevarena` | `https://github.com/raihankhan-rk/jevarena` | 1375478982 | `c22adde05e` | High-Frequency & Simulation | N/A |
| 167 | [supercov](https://github.com/supercorp-ai/supercov) | `supercorp-ai:supercov` | `https://github.com/supercorp-ai/supercov` | 1343957927 | `55f5ce93a2` | CLI & Pipelines | N/A |
| 168 | [jev-pref](https://github.com/doeixd/jev-pref) | `doeixd:jev-pref` | `https://github.com/doeixd/jev-pref` | 1374853245 | `9d77ea6069` | CLI & Pipelines | N/A |
| 169 | [jevql](https://github.com/kylemclaren/jevql) | `kylemclaren:jevql` | `https://github.com/kylemclaren/jevql` | 1375800823 | `4534f59cb7` | Data & Search | N/A |
| 170 | [json-render](https://github.com/vercel-labs/json-render) | `vercel-labs:json-render` | `https://github.com/vercel-labs/json-render` | N/A | `3ad381883b` | Creative Tools | False |
| 171 | [cua](https://github.com/trycua/cua) | `trycua:cua` | `https://github.com/trycua/cua` | N/A | `83f142c4b0` | Browser & OS Action | False |
| 172 | [cline-plugin-jev-browser](https://github.com/abeatrix/cline-plugin-jev-browser) | `abeatrix:cline-plugin-jev-browser` | `https://github.com/abeatrix/cline-plugin-jev-browser` | N/A | `c886dcb3df` | MCP & Integrations | False |
| 173 | [ai-hedge-fund](https://github.com/virattt/ai-hedge-fund) | `virattt:ai-hedge-fund` | `https://github.com/virattt/ai-hedge-fund` | N/A | `154a8b2f0a` | Decision Tools | False |
| 174 | [jev-model-router](https://github.com/davila7/claude-code-templates) | `davila7:claude-code-templates` | `https://github.com/davila7/claude-code-templates` | N/A | `6000804618` | Routing & Cost Optimization | False |
| 175 | [rig-typesafeai](https://github.com/0xPlaygrounds/rig) | `0xplaygrounds:rig` | `https://github.com/0xPlaygrounds/rig` | N/A | `2d16c1b268` | SDK & Decision Frameworks | False |
| 176 | [jev-trader](https://github.com/jarrodwatts/jev-trader) | `jarrodwatts:jev-trader` | `https://github.com/jarrodwatts/jev-trader` | N/A | `b587759e55` | High-Frequency & Simulation | False |
| 177 | [typesafe-computer-use](https://github.com/awlevin/typesafe-computer-use) | `awlevin:typesafe-computer-use` | `https://github.com/awlevin/typesafe-computer-use` | N/A | `cc7b506692` | Browser & OS Action | False |
| 178 | [typesafe-mario](https://github.com/fhshaik/typesafe-mario) | `fhshaik:typesafe-mario` | `https://github.com/fhshaik/typesafe-mario` | N/A | `ca22449e21` | High-Frequency & Simulation | False |
| 179 | [jev-drone](https://github.com/RomanSlack/jev-drone) | `RomanSlack:jev-drone` | `https://github.com/RomanSlack/jev-drone` | N/A | `cbeb53cecf` | High-Frequency & Simulation | False |
| 180 | [tsai-sc](https://github.com/phyous/tsai-sc) | `phyous:tsai-sc` | `https://github.com/phyous/tsai-sc` | N/A | `6046ecc634` | High-Frequency & Simulation | False |
| 181 | [oc-auto-perms](https://github.com/OpeOginni/oc-plugins) | `OpeOginni:oc-plugins` | `https://github.com/OpeOginni/oc-plugins` | N/A | `237f8149dc` | Security & Guardrails | False |
| 182 | [jev-block-android-ad](https://github.com/ufec/jev-block-android-ad) | `ufec:jev-block-android-ad` | `https://github.com/ufec/jev-block-android-ad` | 1376095310 | `8da22d212a` | Security & Guardrails | False |


---

### 1.3 Project Object Schema Requirements

#### A. Allowlisted Public Fields (`scripts/prepare-public-data.mjs`)
When `scripts/prepare-public-data.mjs` projects internal data to `public/projects.json`, only the following **25 fields** are allowlisted:
```javascript
export const publicFields = [
  "id", "name", "author", "url", "category",
  "plainSummary", "plainSummaryEn",
  "jevDecisionPoint", "jevDecisionPointEn",
  "highlightBenefit", "highlightBenefitEn",
  "tags", "stars", "forks", "openIssues",
  "license", "lastCommitAt", "createdAt", "metadataFetchedAt",
  "avatarUrl", "summarySource", "claimStatus", "claimStatusEn",
  "evidence", "pinned"
];
```
Any unexpected field in `public/projects.json` fails the production build audit (`audit-build.mjs:80`).

#### B. Internal Database Required Fields & Constraints (`src/data/projects.json`)
Every item in `src/data/projects.json` must satisfy:
1. `id` (string, non-empty, unique): Format is either legacy shorthand (e.g. `jev-ultrafast`) or `${author}:${name}`.toLowerCase().
2. `name` (string, non-empty): Repository name.
3. `author` (string, non-empty): Repository owner username.
4. `url` (string, valid GitHub repository URL): Matching `^https:\/\/github\.com\/[\w.-]+\/[\w.-]+\/?$`.
5. `repoId` (optional number): Integer GitHub repo ID. If provided, must be safe integer > 0.
6. `category` (string): Must match one of the 17 taxonomy categories defined in `generate-readme.mjs` / `App.tsx`.
7. `plainSummary` (string, Chinese): Natural, concise, human-crafted overview (no AI buzzwords).
8. `plainSummaryEn` (string, English): Natural English overview. **Zero Han script characters allowed** (`scripts/i18n.test.mjs:23`).
9. `jevDecisionPoint` (string, Chinese): Concise technical explanation of where Jev makes discrete choices/scores/actions.
10. `jevDecisionPointEn` (string, English): English explanation of Jev decision point. **Zero Han script characters allowed**.
11. `highlightBenefit` (string, Chinese): Concrete engineering benefit / advantage.
12. `highlightBenefitEn` (string, English): English benefit statement. **Zero Han script characters allowed**.
13. `claimStatus` (string, Chinese): Standard disclaimer string.
14. `claimStatusEn` (string, English): Standard disclaimer string. **Zero Han script characters allowed**.
15. `tags` (array of strings, non-empty): e.g. `["Automation", "Browser", "Agent"]`.
16. `stars` (number or null): Stargazers count.
17. `forks` (number or null): Forks count.
18. `openIssues` (number or null): Open issues count.
19. `license` (string or null): SPDX identifier (e.g. `"MIT"`, `"Apache-2.0"`) or null.
20. `createdAt` (ISO timestamp string or null).
21. `lastCommitAt` (ISO timestamp string or null).
22. `headSha` (string, 40-hex commit SHA): Valid immutable commit hash.
23. `avatarUrl` (string, URL): Must start with `https://avatars.githubusercontent.com/`.
24. `verificationStatus` (string): e.g. `"integration-detected"` or `"source-verified"`.
25. `runtimeVerified` (boolean): Must be `false` (repository policy: no runtime execution claims).
26. `summarySource` (string): e.g. `"manual-editorial"` or `"source-reviewed"`.
27. `evidence` (array of objects, non-empty): Each object contains:
    - `url`: `https://github.com/${owner}/${repo}/blob/${sha}/${filePath}`
    - `note` (optional string): Context note.
28. `pinned` (boolean): Must be `false` or omitted for all new projects. Exactly 14 seeds must have `pinned: true`.

#### C. Code-Level Admission Criteria (`scripts/project-source.mjs`)
To qualify for admission, candidate code must satisfy:
1. Public repository, not empty, accessible via GitHub API.
2. Not matching any excluded repo in `radar/exclusions.json`:
   - `JoshuaSP/open-jev`
   - `vinnylarouge/jevlike`
   - `BerriAI/litellm-docs`
   - `langchain-ai/docs`
   - `IgorGanapolsky/ThumbGate`
3. Contains verified code evidence (evaluated with comments/docstrings stripped):
   - Direct call to `api.typesafe.ai`, OR
   - OpenRouter Jev invocation: model ID matching `~?typesafe/jev-(latest|...)` coupled with an OpenRouter API request endpoint or `@openrouter/sdk` call (`alpha.decisions.create`), OR
   - TypeSafe SDK import (`from typesafe import ...`, `@typesafe/sdk`, `typesafe-ai`, etc.) AND discrete decision execution (`.choice(`, `.score(`, `.noul(`, `.decision(`, `.query(`, `.ask(`, `.systemOne(`).
4. Rejections:
   - Mere mentions of "Jev" or "TypeSafe" without imports or calls.
   - Traditional Scala Typesafe config/frameworks.
   - Documentation-only mirrors or dependency declarations without source implementation.

---

### 1.4 scripts/readme-i18n.mjs Mapping & Generation Flow
- **Dictionary Exports**:
  - `DECISIONS_JA`: 73 entries mapping exact `jevDecisionPointEn` string to Japanese.
  - `DECISIONS_KO`: 73 entries mapping exact `jevDecisionPointEn` string to Korean.
  - `BENEFITS_JA`: 78 entries mapping exact `highlightBenefitEn` string to Japanese.
  - `BENEFITS_KO`: 78 entries mapping exact `highlightBenefitEn` string to Korean.
- **Mapping Mechanism**:
  - Dictionary keys are **exact verbatim strings** of `project.jevDecisionPointEn` and `project.highlightBenefitEn`.
  - In `scripts/generate-readme.mjs` (lines 407-415):
    - JA: `decision = DECISIONS_JA[p.jevDecisionPointEn] || p.jevDecisionPointEn`
    - JA: `benefit = BENEFITS_JA[p.highlightBenefitEn] || p.highlightBenefitEn`
    - KO: `decision = DECISIONS_KO[p.jevDecisionPointEn] || p.jevDecisionPointEn`
    - KO: `benefit = BENEFITS_KO[p.highlightBenefitEn] || p.highlightBenefitEn`
- **Current Coverage**:
  - Across all 182 current projects, there are **0 missing translations** in `DECISIONS_JA`, `DECISIONS_KO`, `BENEFITS_JA`, and `BENEFITS_KO`.
- **Workflow & Quality Invariants**:
  - When new projects are introduced, if their English decision or benefit strings are new, corresponding authentic Japanese and Korean translations **must be added** to `scripts/readme-i18n.mjs`.
  - Fallback to English is prevented by requirement R3 ("日文与韩文字典映射完备，没有未翻译的英文回退占位符").
  - Automated test `scripts/i18n.test.mjs:36-42` enforces: **Zero Chinese characters in `README.ko.md`** and **Zero Chinese characters in `README.md`** (excluding language toggle badges).

---

### 1.5 index.html Schema.org Count
- Located in `index.html` lines 69-95:
  ```json
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Awesome Jev - Real-World Projects Radar",
    "headline": "Awesome Jev: 开源项目雷达与决策模式",
    "description": "收集社区真实在跑的 Jev 开源项目。看别人怎么拿它选哪个、打几分、下一步干什么。",
    "url": "https://logicrw.github.io/awesome-jev-projects/",
    "author": {
      "@type": "Person",
      "name": "0xLogicrw",
      "url": "https://x.com/0xLogicrw"
    },
    "about": {
      "@type": "SoftwareApplication",
      "name": "Jev",
      "applicationCategory": "DeveloperApplication",
      "operatingSystem": "All",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    },
    "numberOfItems": 182
  }
  </script>
  ```
- `"numberOfItems": 182` must be updated whenever project count changes.

---

### 1.6 public/llms.txt
- Located at `public/llms.txt` (1,468 lines).
- Maintained as a plain Markdown resource for LLM agents.
- Header contains count:
  - Line 2: `> Curated directory and ecosystem radar of 182 real-world open-source projects powered by TypeSafe AI's Jev model.`
  - Line 11: `## Curated Projects Directory (182 Projects)`
- Body contains structured sections for every project:
  ```markdown
  ### <name>
  - Repository: <url>
  - Category: <category>
  - Overview (EN): <plainSummaryEn>
  - Overview (ZH): <plainSummary>
  - Jev Decision Role: <jevDecisionPoint>
  - Core Benefit: <highlightBenefit>
  ```
- Currently has **100% parity** with all 182 projects in `src/data/projects.json` (0 missing).

---

## 2. Logic Chain

1. **Deduplication Logic**:
   - `scripts/issue-ingestion.mjs:37` and `scripts/project-source.mjs:215` define project identity as a 3-tuple match:
     `a.id === b.id || publicIdentity(a) === publicIdentity(b) || (Number.isSafeInteger(a.repoId) && a.repoId === b.repoId)`.
   - Therefore, any new project discovered or submitted must be compared against all 182 existing project IDs, normalized GitHub URLs (`owner/repo` lowercase), and numeric `repoId`s.

2. **Pinned Seed Invariant**:
   - `audit-build.mjs:73` asserts: `projects.filter((project) => project.pinned).length === 14`.
   - `radar.test.mjs:125` asserts the exact 14 seed IDs remain pinned and intact.
   - Any new candidate must **never** be added with `pinned: true`.

3. **Multi-lingual Synchronization Flow**:
   - Adding a project to `src/data/projects.json` with bilingual metadata (`plainSummary`, `plainSummaryEn`, `jevDecisionPoint`, `jevDecisionPointEn`, `highlightBenefit`, `highlightBenefitEn`, `claimStatus`, `claimStatusEn`) triggers downstream sync requirements:
     - `scripts/readme-i18n.mjs`: Add JA and KO mappings for new English decision and benefit strings.
     - `npm run build:readme`: Regenerates `README.md`, `README.zh-CN.md`, `README.ja.md`, `README.ko.md`.
     - `index.html`: Update `numberOfItems` in Schema.org JSON-LD to new count.
     - `public/llms.txt`: Update header count and append new project markdown blocks.
     - `scripts/prepare-public-data.mjs` (via `npm run build` / `npm run prebuild`): Re-projects `public/projects.json`.

4. **Zero AI / Leakage Standards**:
   - Automated tests strictly forbid Han script in `plainSummaryEn`, `jevDecisionPointEn`, `highlightBenefitEn`, `claimStatusEn`, `README.md`, and `README.ko.md`.
   - Text must be idiomatic, concise, and engineering-grounded.

---

## 3. Caveats

1. **Heterogeneous `repoId` Field Presence**:
   - While 37 newer or ingested projects have numeric `repoId`s populated from GitHub API responses, 145 earlier records have `repoId: undefined`. Deduplication logic properly handles this by checking URL normalized paths and string IDs when numeric `repoId` is absent.
2. **Offline vs Live Git / Xcode Environment**:
   - In macOS terminal environments without GUI Xcode EULA confirmation, standard commands like `git status` or `git diff` will hang waiting for license prompt unless prefixed with `DEVELOPER_DIR=/Library/Developer/CommandLineTools`.
3. **No Automatic Script for `public/llms.txt`**:
   - Unlike the 4 README files generated via `npm run build:readme`, `public/llms.txt` is not generated by an automated build script. It must be carefully synchronized by tooling or explicit scripts.

---

## 4. Conclusion

- The codebase is in an exceptionally clean, fully tested state with 90 passing tests and 0 build errors.
- Baseline catalog contains **182 verified projects** across 17 categories, with exactly 14 pinned seeds.
- The schema, deduplication rules, translation dictionary architecture, and build audit constraints are completely mapped and documented.
- Downstream agents (search, review, translation, integration) have a precise, immutable foundation to execute subsequent phases without ambiguity.

---

## 5. Verification Method

To independently reproduce and verify the findings in this report:

1. **Verify Test Suite (90 tests pass)**:
   ```bash
   DEVELOPER_DIR=/Library/Developer/CommandLineTools npm test
   ```

2. **Verify Production Build & Audit (182 projects, 14 pinned seeds)**:
   ```bash
   DEVELOPER_DIR=/Library/Developer/CommandLineTools npm run build
   ```

3. **Verify README Generation & Parity**:
   ```bash
   DEVELOPER_DIR=/Library/Developer/CommandLineTools npm run build:readme
   DEVELOPER_DIR=/Library/Developer/CommandLineTools git status
   ```

4. **Inspect Catalog Counts & Uniqueness**:
   ```bash
   node -e "
     const p = JSON.parse(require('fs').readFileSync('src/data/projects.json', 'utf8'));
     console.log('Total:', p.length);
     console.log('Pinned true:', p.filter(x => x.pinned === true).length);
     console.log('Unique URLs:', new Set(p.map(x => x.url.toLowerCase())).size);
     console.log('Unique IDs:', new Set(p.map(x => x.id)).size);
     console.log('With repoId:', p.filter(x => Number.isSafeInteger(x.repoId)).length);
   "
   ```

5. **Inspect Schema.org and llms.txt Counts**:
   ```bash
   grep -n "numberOfItems" index.html
   head -n 12 public/llms.txt
   ```
