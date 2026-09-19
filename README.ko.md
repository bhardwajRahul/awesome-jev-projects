<div align="center">

<a href="https://logicrw.github.io/awesome-jev-projects/">
  <img src="https://raw.githubusercontent.com/logicrw/awesome-jev-projects/main/public/banner.svg" alt="Awesome Jev Projects Banner" width="880" style="max-width: 100%; border-radius: 12px;" />
</a>

<br/><br/>

<p>
  <a href="https://awesome.re"><img src="https://awesome.re/badge.svg" alt="Awesome" /></a>
  <a href="https://logicrw.github.io/awesome-jev-projects/"><img src="https://img.shields.io/badge/Live%20Radar-logicrw.github.io-059669?style=flat-square&logo=safari" alt="Live Radar" /></a>
  <a href="#contents"><img src="https://img.shields.io/badge/Curated%20Projects-169%2B-2563eb?style=flat-square" alt="Projects Count" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-d97706.svg?style=flat-square" alt="License: MIT" /></a>
  <a href="https://github.com/logicrw/awesome-jev-projects/issues/new?template=project.yml"><img src="https://img.shields.io/badge/PRs-Welcome-16a34a.svg?style=flat-square" alt="PRs Welcome" /></a>
</p>

<p>
  <strong>언어 선택:</strong>&nbsp;
  <a href="README.md">English</a> • 
  <a href="README.zh-CN.md">简体中文</a> • 
  <a href="README.ja.md">日本語</a> • 
  <a href="README.ko.md">한국어</a>
</p>

<p>
  <a href="https://logicrw.github.io/awesome-jev-projects/"><strong>🌐 실시간 인터랙티브 레이더 열기</strong></a> • 
  <a href="https://github.com/logicrw/awesome-jev-projects/issues/new?template=project.yml"><strong>📝 프로젝트 등록 신청</strong></a>
</p>

<p>TypeSafe AI의 Jev 모델을 탑재한 **169+** 개의 검증된 오픈소스 도구, 프로덕션 앱 및 벤치마크 모음. 모든 프로젝트는 실제 소스 코드가 검증되었습니다.</p>

</div>

---

> **Awesome Jev 프로젝트란?**  
> 텍스트 생성 모델과 달리, TypeSafe AI의 Jev는 100ms 미만의 고속 구조화 판단(`Choice` 선택, `Score` 채점, `Noul` 확률 판정)에 특화되어 있습니다.  
> 본 디렉터리는 Jev를 핵심 의사결정 엔진으로 직접 활용하는 실제 오픈소스 소프트웨어만을 검증하여 수록합니다.

---
<a id="contents"></a>
## 목차

- [⚡ 고주파 시뮬레이션 및 실시간 게임 (13)](#high-frequency-simulation-ko)
- [🛠️ SDK 및 의사결정 프레임워크 (11)](#sdk-decision-frameworks-ko)
- [🔌 생태계 연동 및 어댑터 (8)](#sdk-integrations-ko)
- [💻 CLI 및 자동화 파이프라인 (26)](#cli-pipelines-ko)
- [💾 데이터베이스 확장 및 시맨틱 검색 (4)](#data-search-ko)
- [🌐 브라우저 및 데스크톱 자동화 (14)](#browser-os-action-ko)
- [🧹 컨텍스트 압축 및 가비지 컬렉션 (7)](#context-gc-filter-ko)
- [🛡️ 보안 및 가드레일 (9)](#security-guardrails-ko)
- [🧩 MCP 프로토콜 및 도구 확장 (28)](#mcp-integrations-ko)
- [🧭 코드베이스 분석 및 지식 그래프 탐색 (9)](#codebase-graph-pathfinding-ko)
- [🔀 모델 라우팅 및 비용 최적화 (9)](#routing-cost-optimization-ko)
- [📊 도메인 특화 및 엔터프라이즈 도구 (15)](#domain-vertical-tools-ko)
- [🎯 범용 의사결정 및 휴리스틱 평가 (10)](#decision-tools-ko)
- [🏷️ 텍스트 분류 및 분류 체계 (2)](#classification-taxonomy-ko)
- [📈 벤치마크 및 가관측성 (1)](#evaluation-observability-ko)
- [🎙️ 음성 인터랙션 및 실시간 대화 (1)](#voice-conversation-ko)
- [🎨 크리에이티브 미디어 및 작곡 (2)](#creative-tools-ko)
- [📖 로컬 개발 및 아키텍처](#dev-arch-ko)
- [🤝 프로젝트 제출 방법](#submit-guide-ko)

---

<a id="high-frequency-simulation-ko"></a>
## ⚡ 고주파 시뮬레이션 및 실시간 게임

*게임, 로보틱스 및 인터랙티브 시뮬레이션 루프를 위한 실시간 밀리초 단위 의사결정.*

- [**jevpilot**](https://github.com/standardagents/jevpilot) `★ 58` - jevpilot: Real-time decision engine operating at sub-100ms latency for games, bots, and simulations.
  - 🎯 **Jev의 역할**: Executes continuous multi-Hz decision loops to drive movement, steering, and actions.
  - 💡 **핵심 장점**: Achieves real-time interaction rates that frontier LLMs cannot physically deliver.

- [**1v1 Jev**](https://github.com/emrickgarrett/OneVOneJev) `★ 5` - 1v1 Jev: Real-time decision engine operating at sub-100ms latency for games, bots, and simulations.
  - 🎯 **Jev의 역할**: Executes continuous multi-Hz decision loops to drive movement, steering, and actions.
  - 💡 **핵심 장점**: Achieves real-time interaction rates that frontier LLMs cannot physically deliver.

- [**live-jev**](https://github.com/vinilana/live-jev) `★ 3` - live-jev: Real-time decision engine operating at sub-100ms latency for games, bots, and simulations.
  - 🎯 **Jev의 역할**: Executes continuous multi-Hz decision loops to drive movement, steering, and actions.
  - 💡 **핵심 장점**: Achieves real-time interaction rates that frontier LLMs cannot physically deliver.

- [**jev-shield**](https://github.com/vmendes90/jev-shield) `★ 2` - Traditional ad blockers (like uBlock Origin) rely primarily on static URL filterlists and CSS selector lists. While effective for traditional banner networks, they struggle with **native ads and sponsored feed cards** (on platforms like X/Twitter, Reddit, LinkedIn, and modern digital feeds) where promotional posts share the exact same first-party domain, markup structure, and styling as organic content.
  - 🎯 **Jev의 역할**: 读取当前状态，在可用动作中做选择。
  - 💡 **핵심 장점**: 在连续交互中观察决策效果；频率依实际运行而定。

- [**JevBird**](https://github.com/leftspace89/JevBird) `★ 2` - JevBird: Real-time decision engine operating at sub-100ms latency for games, bots, and simulations.
  - 🎯 **Jev의 역할**: Executes continuous multi-Hz decision loops to drive movement, steering, and actions.
  - 💡 **핵심 장점**: Achieves real-time interaction rates that frontier LLMs cannot physically deliver.

- [**doom-jev**](https://github.com/AmoghCreator/doom-jev) `★ 1` - doom-jev: Real-time decision engine operating at sub-100ms latency for games, bots, and simulations.
  - 🎯 **Jev의 역할**: Executes continuous multi-Hz decision loops to drive movement, steering, and actions.
  - 💡 **핵심 장점**: Achieves real-time interaction rates that frontier LLMs cannot physically deliver.

- [**jev-curate**](https://github.com/AkashPriyadarshii/jev-curate) `★ 1` - High-throughput synthetic & pretraining dataset sifter powered by TypeSafe AI Jev (api.typesafe.ai). Stream, filter, and score Parquet & JSONL datasets at 1,500+ rows/sec using System One typed decisions (Choice, Score, Noul).
  - 🎯 **Jev의 역할**: 读取当前状态，在可用动作中做选择。
  - 💡 **핵심 장점**: 在连续交互中观察决策效果；频率依实际运行而定。

- [**jev-doom-agent**](https://github.com/lukaske/jev-doom-agent) `★ 1` - jev-doom-agent: Real-time decision engine operating at sub-100ms latency for games, bots, and simulations.
  - 🎯 **Jev의 역할**: Executes continuous multi-Hz decision loops to drive movement, steering, and actions.
  - 💡 **핵심 장점**: Achieves real-time interaction rates that frontier LLMs cannot physically deliver.

- [**jev-gomoku**](https://github.com/XieChengYuan/jev-gomoku) `★ 1` - Dual-Jev 9x9 Gomoku workbench evaluating how input representations affect placement decisions, featuring replay and live play.
  - 🎯 **Jev의 역할**: Answers a single Choice problem per turn: picks the next move coordinate based on board state, candidate moves, and game rules.
  - 💡 **핵심 장점**: Exposes per-turn request payloads, model probabilities, and latency; supports free replay of recorded matches and OpenRouter live play.
  - 🌐 [라이브 데모](https://xiechengyuan.github.io/jev-gomoku/)

- [**jev-little-airways**](https://github.com/lbotinelly/jev-little-airways) `★ 1` - jev-little-airways: Real-time decision engine operating at sub-100ms latency for games, bots, and simulations.
  - 🎯 **Jev의 역할**: Executes continuous multi-Hz decision loops to drive movement, steering, and actions.
  - 💡 **핵심 장점**: Achieves real-time interaction rates that frontier LLMs cannot physically deliver.

- [**jevarena**](https://github.com/raihankhan-rk/jevarena) `★ 1` - JevArena — two Jev agents duel in click-only browser games (Browser Use + TypeSafe Jev)
  - 🎯 **Jev의 역할**: 读取当前状态，在可用动作中做选择。
  - 💡 **핵심 장점**: 在连续交互中观察决策效果；频率依实际运行而定。

- [**jev-demos**](https://github.com/Bud-ro/jev-demos) - jev-demos: Real-time decision engine operating at sub-100ms latency for games, bots, and simulations.
  - 🎯 **Jev의 역할**: Executes continuous multi-Hz decision loops to drive movement, steering, and actions.
  - 💡 **핵심 장점**: Achieves real-time interaction rates that frontier LLMs cannot physically deliver.

- [**jev-experiments**](https://github.com/mittal-parth/jev-experiments) - jev-experiments: Real-time decision engine operating at sub-100ms latency for games, bots, and simulations.
  - 🎯 **Jev의 역할**: Executes continuous multi-Hz decision loops to drive movement, steering, and actions.
  - 💡 **핵심 장점**: Achieves real-time interaction rates that frontier LLMs cannot physically deliver.

---

<a id="sdk-decision-frameworks-ko"></a>
## 🛠️ SDK 및 의사결정 프레임워크

*Jev의 구조화된 호출과 타입 안전 상호작용을 위한 다국어 클라이언트 라이브러리 및 SDK.*

- [**req_llm**](https://github.com/agentjido/req_llm) `★ 577` - req_llm: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: Ingests real-time domain telemetry to trigger automated execution or risk advisories.
  - 💡 **핵심 장점**: Brings structured semantic perception to second-level mission-critical workflows.

- [**instructor-php**](https://github.com/cognesy/instructor-php) `★ 327` - instructor-php: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: Ingests real-time domain telemetry to trigger automated execution or risk advisories.
  - 💡 **핵심 장점**: Brings structured semantic perception to second-level mission-critical workflows.

- [**openai-scala-client**](https://github.com/cequence-io/openai-scala-client) `★ 248` - openai-scala-client: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: Ingests real-time domain telemetry to trigger automated execution or risk advisories.
  - 💡 **핵심 장점**: Brings structured semantic perception to second-level mission-critical workflows.

- [**pi-fabric**](https://github.com/monotykamary/pi-fabric) `★ 233` - pi-fabric: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: Ingests real-time domain telemetry to trigger automated execution or risk advisories.
  - 💡 **핵심 장점**: Brings structured semantic perception to second-level mission-critical workflows.

- [**effect-agent**](https://github.com/danieljvdm/effect-agent) `★ 116` - effect-agent: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: Ingests real-time domain telemetry to trigger automated execution or risk advisories.
  - 💡 **핵심 장점**: Brings structured semantic perception to second-level mission-critical workflows.

- [**jev-visual**](https://github.com/hr98w/jev-visual) `★ 95` - Local Jev-like visual inference experiment on Apple Silicon Mac. Scores and classifies single images across multiple questions with 3 playable game demos.
  - 🎯 **Jev의 역할**: Reuses multimodal visual context to score candidate answers directly from logits without autoregressive generation.
  - 💡 **핵심 장점**: Brings Jev-style single-pass multi-question scoring to local edge vision on Apple Silicon.

- [**advocaat**](https://github.com/pithings/advocaat) `★ 66` - advocaat: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: Ingests real-time domain telemetry to trigger automated execution or risk advisories.
  - 💡 **핵심 장점**: Brings structured semantic perception to second-level mission-critical workflows.

- [**jev-java**](https://github.com/Olti1947/jev-java) `★ 2` - Idiomatic Java SDK for TypeSafe AI Jev System One decision engine
  - 🎯 **Jev의 역할**: 由业务代码定义问题，客户端负责提交 Jev 请求并解析结构化结果。
  - 💡 **핵심 장점**: 在现有程序中复用接入代码，减少重复处理接口细节。

- [**jev-starter**](https://github.com/hamakyo/jev-starter) `★ 1` - jev-starter: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: Ingests real-time domain telemetry to trigger automated execution or risk advisories.
  - 💡 **핵심 장점**: Brings structured semantic perception to second-level mission-critical workflows.

- [**jevclient**](https://github.com/AboveColin/jevclient) `★ 1` - jevclient: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: Ingests real-time domain telemetry to trigger automated execution or risk advisories.
  - 💡 **핵심 장점**: Brings structured semantic perception to second-level mission-critical workflows.

- [**jevify**](https://github.com/altryne/jevify) `★ 1` - The CLI asks which agents to install for (Claude Code, Codex, Cursor, and others) and whether to install for this project or globally. Common variations:
  - 🎯 **Jev의 역할**: 由业务代码定义问题，客户端负责提交 Jev 请求并解析结构化结果。
  - 💡 **핵심 장점**: 在现有程序中复用接入代码，减少重复处理接口细节。

---

<a id="sdk-integrations-ko"></a>
## 🔌 생태계 연동 및 어댑터

*기존 에이전트 런타임 및 애플리케이션 스택을 Jev와 원활하게 연결하는 어댑터.*

- [**langchain**](https://github.com/langchain-ai/langchain) `★ 146595` - langchain: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: Ingests real-time domain telemetry to trigger automated execution or risk advisories.
  - 💡 **핵심 장점**: Brings structured semantic perception to second-level mission-critical workflows.

- [**oh-my-pi**](https://github.com/can1357/oh-my-pi) `★ 31786` - oh-my-pi: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: Ingests real-time domain telemetry to trigger automated execution or risk advisories.
  - 💡 **핵심 장점**: Brings structured semantic perception to second-level mission-critical workflows.

- [**composio**](https://github.com/ComposioHQ/composio) `★ 30228` - composio: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: Ingests real-time domain telemetry to trigger automated execution or risk advisories.
  - 💡 **핵심 장점**: Brings structured semantic perception to second-level mission-critical workflows.

- [**ai**](https://github.com/vercel/ai) `★ 26825` - ai: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: Ingests real-time domain telemetry to trigger automated execution or risk advisories.
  - 💡 **핵심 장점**: Brings structured semantic perception to second-level mission-critical workflows.

- [**pydantic-ai**](https://github.com/pydantic/pydantic-ai) `★ 20027` - pydantic-ai: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: Ingests real-time domain telemetry to trigger automated execution or risk advisories.
  - 💡 **핵심 장점**: Brings structured semantic perception to second-level mission-critical workflows.

- [**eliza**](https://github.com/elizaOS/eliza) `★ 19359` - eliza: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: Ingests real-time domain telemetry to trigger automated execution or risk advisories.
  - 💡 **핵심 장점**: Brings structured semantic perception to second-level mission-critical workflows.

- [**langchainjs**](https://github.com/langchain-ai/langchainjs) `★ 18207` - langchainjs: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: Ingests real-time domain telemetry to trigger automated execution or risk advisories.
  - 💡 **핵심 장점**: Brings structured semantic perception to second-level mission-critical workflows.

- [**ax**](https://github.com/ax-llm/ax) `★ 2926` - ax: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: Ingests real-time domain telemetry to trigger automated execution or risk advisories.
  - 💡 **핵심 장점**: Brings structured semantic perception to second-level mission-critical workflows.

---

<a id="cli-pipelines-ko"></a>
## 💻 CLI 및 자동화 파이프라인

*터미널 유틸리티, 셸 파이프 및 CI/CD 워크플로에 시맨틱 판단을 결합한 도구.*

- [**jev-voice-browser**](https://github.com/moritzkremb/jev-voice-browser) `★ 35` - Control a real browser by voice. Jev (TypeSafe System One) decides intent + target in ~300 ms per spoken word; Playwright acts — often before you finish the sentence.
  - 🎯 **Jev의 역할**: 对输入文本做分类或打分，交给本地规则继续处理。
  - 💡 **핵심 장점**: 把语义判断接到已有的命令行工作流。

- [**supercov**](https://github.com/supercorp-ai/supercov) `★ 32` - Code quality and test coverage for coding agents: Jev scores each source file so the agent knows what to fix first. Coverage runs locally with no account.
  - 🎯 **Jev의 역할**: Asks twelve named Noul properties about each source file in one request; the CLI composes the score, the bands, and the file ordering.
  - 💡 **핵심 장점**: A score decomposes into named properties you can check against the file, and answers are cached by content.

- [**hono-jev-router**](https://github.com/yusukebe/hono-jev-router) `★ 19` - Route HTTP requests by meaning. A semantic router for Hono powered by Jev.
  - 🎯 **Jev의 역할**: 对输入文本做分类或打分，交给本地规则继续处理。
  - 💡 **핵심 장점**: 把语义判断接到已有的命令行工作流。

- [**jev-playground**](https://github.com/mizchi/jev-playground) `★ 14` - jev-playground: Command-line utility embedding Jev decision logic directly into Unix pipes and CI scripts.
  - 🎯 **Jev의 역할**: Applies real-time semantic classification and filtering on standard input streams.
  - 💡 **핵심 장점**: Embeds zero-dependency semantic guardrails into shell workflows and CI/CD.

- [**openjev**](https://github.com/razorback16/openjev) `★ 14` - Open, Jev-compatible System One decision server on DiffusionGemma
  - 🎯 **Jev의 역할**: 对输入文本做分类或打分，交给本地规则继续处理。
  - 💡 **핵심 장점**: 把语义判断接到已有的命令行工作流。

- [**SemDecide**](https://github.com/sharziki/semdecide) `★ 5` - Unix command-line utility bringing Jev into terminal pipes and CI pipelines for semantic filtering and scoring.
  - 🎯 **Jev의 역할**: Executes real-time classification, scoring, and threshold guards directly on Unix text streams.
  - 💡 **핵심 장점**: Embeds directly into Bash scripts and CI/CD pipelines without Python runtime overhead.

- [**jev-lm**](https://github.com/y0usaf/jev-lm) `★ 4` - jev-lm: Command-line utility embedding Jev decision logic directly into Unix pipes and CI scripts.
  - 🎯 **Jev의 역할**: Applies real-time semantic classification and filtering on standard input streams.
  - 💡 **핵심 장점**: Embeds zero-dependency semantic guardrails into shell workflows and CI/CD.

- [**typesafe-jev-workflow**](https://github.com/GiesN/typesafe-jev-workflow) `★ 4` - A small async LangGraph workflow that sends a mocked email to TypeSafe's Jev model,
receives a typed `Choice` (`invoice` or `general`), and routes to a demo handler.
The handlers only set a destination in graph state; they do not send email or make payments.
  - 🎯 **Jev의 역할**: 对输入文本做分类或打分，交给本地规则继续处理。
  - 💡 **핵심 장점**: 把语义判断接到已有的命令行工作流。

- [**jev-chat**](https://github.com/adhyaay-karnwal/jev-chat) `★ 3` - jev-chat: Command-line utility embedding Jev decision logic directly into Unix pipes and CI scripts.
  - 🎯 **Jev의 역할**: Applies real-time semantic classification and filtering on standard input streams.
  - 💡 **핵심 장점**: Embeds zero-dependency semantic guardrails into shell workflows and CI/CD.

- [**jev-cli**](https://github.com/tumf/jev-cli) `★ 2` - jev-cli: Command-line utility embedding Jev decision logic directly into Unix pipes and CI scripts.
  - 🎯 **Jev의 역할**: Applies real-time semantic classification and filtering on standard input streams.
  - 💡 **핵심 장점**: Embeds zero-dependency semantic guardrails into shell workflows and CI/CD.

- [**jev-pref**](https://github.com/doeixd/jev-pref) `★ 2` - Turn AGENTS.md preferences into a fast, Jev-powered AI linter: define project-specific review rules in jev-pref.json, check hunks, staged files or PRs with Jev, and feed findings back to your coding agent.
  - 🎯 **Jev의 역할**: For each preference rule and each code-change hunk, decide whether the change violates the rule.
  - 💡 **핵심 장점**: CLI (npx jev-pref setup) for pre-commit, PR and agent workflows, with blocking vs. advisory findings.

- [**jev-system-one**](https://github.com/haseeb-heaven/jev-system-one) `★ 2` - jev-system-one: Command-line utility embedding Jev decision logic directly into Unix pipes and CI scripts.
  - 🎯 **Jev의 역할**: Applies real-time semantic classification and filtering on standard input streams.
  - 💡 **핵심 장점**: Embeds zero-dependency semantic guardrails into shell workflows and CI/CD.

- [**jevcal**](https://github.com/abhixhek/jevcal) `★ 2` - Stop guessing confidence thresholds: calibrate, threshold, and drift-check typed decision models (TypeSafe Jev) against an LLM teacher.
  - 🎯 **Jev의 역할**: 对输入文本做分类或打分，交给本地规则继续处理。
  - 💡 **핵심 장점**: 把语义判断接到已有的命令行工作流。

- [**pi-fast-jev-compaction**](https://github.com/joelhooks/pi-fast-jev-compaction) `★ 2` - pi-fast-jev-compaction: Command-line utility embedding Jev decision logic directly into Unix pipes and CI scripts.
  - 🎯 **Jev의 역할**: Applies real-time semantic classification and filtering on standard input streams.
  - 💡 **핵심 장점**: Embeds zero-dependency semantic guardrails into shell workflows and CI/CD.

- [**todo-jev**](https://github.com/maker-KK/todo-jev) `★ 2` - ⚡ Ultra-fast, low-cost intelligent task classifier and 3-tier routing engine powered by TypeSafe Jev (System One)
  - 🎯 **Jev의 역할**: 对输入文本做分类或打分，交给本地规则继续处理。
  - 💡 **핵심 장점**: 把语义判断接到已有的命令行工作流。

- [**ask-jev**](https://github.com/omni-/ask-jev) `★ 1` - ask-jev: Command-line utility embedding Jev decision logic directly into Unix pipes and CI scripts.
  - 🎯 **Jev의 역할**: Applies real-time semantic classification and filtering on standard input streams.
  - 💡 **핵심 장점**: Embeds zero-dependency semantic guardrails into shell workflows and CI/CD.

- [**is-odd-jev**](https://github.com/alxcrt/is-odd-jev) `★ 1` - is-odd-jev: Command-line utility embedding Jev decision logic directly into Unix pipes and CI scripts.
  - 🎯 **Jev의 역할**: Applies real-time semantic classification and filtering on standard input streams.
  - 💡 **핵심 장점**: Embeds zero-dependency semantic guardrails into shell workflows and CI/CD.

- [**jev-askable-arm**](https://github.com/TarunTomar122/jev-askable-arm) `★ 1` - 1. **Catalog.** ~30 mutually exclusive skills: `open_gripper`, `up_1cm`, `hover_over`, `descend_onto`, `press_onto`, `done`, …
2. **State.** Privileged sim xyz, gripper open/closed, object distances, recent chain. No images go to Jev.
3. **Choose.** One System One request: which primitive, and which object if it needs a target.
4. **Act.** A small PD executor drives `pd_ee_delta_pos` for that skill, then we ask again.
  - 🎯 **Jev의 역할**: 对输入文本做分类或打分，交给本地规则继续处理。
  - 💡 **핵심 장점**: 把语义判断接到已有的命令行工作流。

- [**jev-cli**](https://github.com/jtsang4/jev-cli) `★ 1` - jev-cli: Command-line utility embedding Jev decision logic directly into Unix pipes and CI scripts.
  - 🎯 **Jev의 역할**: Applies real-time semantic classification and filtering on standard input streams.
  - 💡 **핵심 장점**: Embeds zero-dependency semantic guardrails into shell workflows and CI/CD.

- [**jev-cli**](https://github.com/Nasrallah-AL/jev-cli) `★ 1` - Exit code was 2: a claim was contradicted. Add `--json` to any command for machine-readable output, or `--dry-run` to see exactly what would be sent without calling the API.
  - 🎯 **Jev의 역할**: 对输入文本做分类或打分，交给本地规则继续处理。
  - 💡 **핵심 장점**: 把语义判断接到已有的命令行工作流。

- [**jev-code**](https://github.com/rhighs/jev-code) `★ 1` - jev-code: Command-line utility embedding Jev decision logic directly into Unix pipes and CI scripts.
  - 🎯 **Jev의 역할**: Applies real-time semantic classification and filtering on standard input streams.
  - 💡 **핵심 장점**: Embeds zero-dependency semantic guardrails into shell workflows and CI/CD.

- [**jev-synergy-screening**](https://github.com/PistachioAIHQ/jev-synergy-screening) `★ 1` - **Gold story = Abstract Triage (TIAB) only — not Article Triage, not MEDLINE PT, not SYNERGY.**
  - 🎯 **Jev의 역할**: 对输入文本做分类或打分，交给本地规则继续处理。
  - 💡 **핵심 장점**: 把语义判断接到已有的命令行工作流。

- [**LightJev**](https://github.com/rongxinzy/LightJev) `★ 1` - Train lightweight language backbones for typed decisions and candidate probabilities. CE/Brier training, evaluation, and an offline end-to-end demo.
  - 🎯 **Jev의 역할**: 对输入文本做分类或打分，交给本地规则继续处理。
  - 💡 **핵심 장점**: 把语义判断接到已有的命令行工作流。

- [**pi-jev-compaction**](https://github.com/Wang-auspicious/pi-jev-compaction) `★ 1` - Jev-powered context compaction for Pi. Keep critical instructions and tool history, prune the noise, and fall back gracefully.
  - 🎯 **Jev의 역할**: 对输入文本做分类或打分，交给本地规则继续处理。
  - 💡 **핵심 장점**: 把语义判断接到已有的命令行工作流。

- [**TypeSafe AI Playground**](https://github.com/markjaquith/typesafe-ai-playground) `★ 1` - Rust CLI playground experimenting with PHI detection, code comment review, and sentiment classification.
  - 🎯 **Jev의 역할**: Runs sub-millisecond semantic pattern matching and attribute decisions on short text.
  - 💡 **핵심 장점**: Ideal sandbox for developers testing Jev decision primitives locally.

- [**jevscript**](https://github.com/amberwhitehead/jevscript) - jevscript: Command-line utility embedding Jev decision logic directly into Unix pipes and CI scripts.
  - 🎯 **Jev의 역할**: Applies real-time semantic classification and filtering on standard input streams.
  - 💡 **핵심 장점**: Embeds zero-dependency semantic guardrails into shell workflows and CI/CD.

---

<a id="data-search-ko"></a>
## 💾 데이터베이스 확장 및 시맨틱 검색

*플러그인 설치가 필요 없는 네이티브 SQL 시맨틱 확장, 행 단위 필터링 및 리랭킹.*

- [**pg-jev**](https://github.com/realZachi/pg-jev) `★ 137` - pg-jev: Semantic query and classification layer applied over tabular databases and search indexes.
  - 🎯 **Jev의 역할**: Performs batch semantic matching and condition evaluation over row records.
  - 💡 **핵심 장점**: Enables natural-language semantic filtering directly within existing SQL queries.

- [**jev-search**](https://github.com/superagents-lab/jev-search) `★ 38` - jev-search: Semantic query and classification layer applied over tabular databases and search indexes.
  - 🎯 **Jev의 역할**: Performs batch semantic matching and condition evaluation over row records.
  - 💡 **핵심 장점**: Enables natural-language semantic filtering directly within existing SQL queries.

- [**jevql**](https://github.com/kylemclaren/jevql) `★ 2` - Semantic SQL for vanilla Postgres without database extensions. Query rows with WHERE jev(), jev_prob, jev_choice, and jev_score via CLI and Go/TS/Python SDKs.
  - 🎯 **Jev의 역할**: Evaluates candidate table rows using Noul, Choice, or Score judgements to drive client-side semantic filtering, ranking, or grouping.
  - 💡 **핵심 장점**: Two-pass client-side execution with automatic batching, concurrency pooling, and content-addressable response caching.
  - 🌐 [라이브 데모](https://jevql.fly.dev/)

- [**llama-index-jev**](https://github.com/WiktorB2004/llama-index-jev) `★ 2` - LlamaIndex reranker + router powered by TypeSafe Jev — typed scores/choices, cheaper than LLM-as-judge.
  - 🎯 **Jev의 역할**: 给候选记录判断相关性或打分，再由本地程序筛选和排序。
  - 💡 **핵심 장점**: 把语义判断接进已有的数据查询流程。

---

<a id="browser-os-action-ko"></a>
## 🌐 브라우저 및 데스크톱 자동화

*웹 접근성 트리 분석, 자율 브라우징 및 데스크톱 GUI 제어를 위한 에이전트.*

- [**jev-ultrafast**](https://github.com/browser-use/jev-ultrafast) `★ 4673` - Ultra-fast browser agent using Jev for per-step DOM action decisions. Complete Google Flights search in ~7.1s.
  - 🎯 **Jev의 역할**: Decides next action and target DOM element in a single request; delegates typing to text models.
  - 💡 **핵심 장점**: Separates UI navigation from text generation, slashing redundant page evaluations.

- [**jev-desktop**](https://github.com/lahfir/agent-desktop) `★ 1266` - jev-desktop: Automates browser or desktop interactions by turning UI state into discrete choices.
  - 🎯 **Jev의 역할**: Evaluates DOM or accessibility tree state to pick target controls and next actions in real time.
  - 💡 **핵심 장점**: Decouples decision making from execution for inspectable, lightning-fast UI navigation.

- [**omg.dev**](https://github.com/BennyKok/omg.dev) `★ 531` - omg.dev: Automates browser or desktop interactions by turning UI state into discrete choices.
  - 🎯 **Jev의 역할**: Evaluates DOM or accessibility tree state to pick target controls and next actions in real time.
  - 💡 **핵심 장점**: Decouples decision making from execution for inspectable, lightning-fast UI navigation.

- [**mobile-jev**](https://github.com/droidrun/mobile-jev) `★ 93` - mobile-jev: Automates browser or desktop interactions by turning UI state into discrete choices.
  - 🎯 **Jev의 역할**: Evaluates DOM or accessibility tree state to pick target controls and next actions in real time.
  - 💡 **핵심 장점**: Decouples decision making from execution for inspectable, lightning-fast UI navigation.

- [**jev-use**](https://github.com/vlad-terin/jev-use) `★ 76` - jev-use: Automates browser or desktop interactions by turning UI state into discrete choices.
  - 🎯 **Jev의 역할**: Evaluates DOM or accessibility tree state to pick target controls and next actions in real time.
  - 💡 **핵심 장점**: Decouples decision making from execution for inspectable, lightning-fast UI navigation.

- [**jev-browser**](https://github.com/jkudish/jev-browser) `★ 70` - jev-browser: Automates browser or desktop interactions by turning UI state into discrete choices.
  - 🎯 **Jev의 역할**: Evaluates DOM or accessibility tree state to pick target controls and next actions in real time.
  - 💡 **핵심 장점**: Decouples decision making from execution for inspectable, lightning-fast UI navigation.

- [**unclutter**](https://github.com/kitze/unclutter) `★ 66` - unclutter: Automates browser or desktop interactions by turning UI state into discrete choices.
  - 🎯 **Jev의 역할**: Evaluates DOM or accessibility tree state to pick target controls and next actions in real time.
  - 💡 **핵심 장점**: Decouples decision making from execution for inspectable, lightning-fast UI navigation.

- [**AskJev**](https://github.com/ranjan2829/AskJev) `★ 2` - AskJev: Automates browser or desktop interactions by turning UI state into discrete choices.
  - 🎯 **Jev의 역할**: Evaluates DOM or accessibility tree state to pick target controls and next actions in real time.
  - 💡 **핵심 장점**: Decouples decision making from execution for inspectable, lightning-fast UI navigation.

- [**computer-use-jev**](https://github.com/paulsmith/computer-use-jev) `★ 2` - computer-use-jev: Automates browser or desktop interactions by turning UI state into discrete choices.
  - 🎯 **Jev의 역할**: Evaluates DOM or accessibility tree state to pick target controls and next actions in real time.
  - 💡 **핵심 장점**: Decouples decision making from execution for inspectable, lightning-fast UI navigation.

- [**aside-jev**](https://github.com/himomohi/aside-jev) `★ 1` - aside-jev: Automates browser or desktop interactions by turning UI state into discrete choices.
  - 🎯 **Jev의 역할**: Evaluates DOM or accessibility tree state to pick target controls and next actions in real time.
  - 💡 **핵심 장점**: Decouples decision making from execution for inspectable, lightning-fast UI navigation.

- [**jev-browser**](https://github.com/tontoko/jev-browser) `★ 1` - jev-browser: Automates browser or desktop interactions by turning UI state into discrete choices.
  - 🎯 **Jev의 역할**: Evaluates DOM or accessibility tree state to pick target controls and next actions in real time.
  - 💡 **핵심 장점**: Decouples decision making from execution for inspectable, lightning-fast UI navigation.

- [**ego-jev**](https://github.com/phd-peter/ego-jev) - Integrates Jev with Ego Lite browser agent. Reads semantic snapshots to decide DOM clicks and wheel scrolls, delegating text entry to LLMs.
  - 🎯 **Jev의 역할**: Evaluates candidate action space from page snapshots to pick target controls and action types in a single request.
  - 💡 **핵심 장점**: Substitutes heavy vision models with lightweight semantic snapshots for sub-second browser loops.

- [**grokskill-jev**](https://github.com/AE-AlphaEdge/grokskill-jev) - grokskill-jev: Automates browser or desktop interactions by turning UI state into discrete choices.
  - 🎯 **Jev의 역할**: Evaluates DOM or accessibility tree state to pick target controls and next actions in real time.
  - 💡 **핵심 장점**: Decouples decision making from execution for inspectable, lightning-fast UI navigation.

- [**jev-macos-loop**](https://github.com/jcpsimmons/jev-macos-loop) - jev-macos-loop: Automates browser or desktop interactions by turning UI state into discrete choices.
  - 🎯 **Jev의 역할**: Evaluates DOM or accessibility tree state to pick target controls and next actions in real time.
  - 💡 **핵심 장점**: Decouples decision making from execution for inspectable, lightning-fast UI navigation.

---

<a id="context-gc-filter-ko"></a>
## 🧹 컨텍스트 압축 및 가비지 컬렉션

*토큰 절약, 지능형 컨텍스트 정리 및 소셜 타임라인의 노이즈 필터링.*

- [**fast-jev-compaction**](https://github.com/tamaratran/fast-jev-compaction) `★ 2645` - fast-jev-compaction: Prunes extraneous tool outputs, logs, and grep results before feeding LLM context.
  - 🎯 **Jev의 역할**: Judges line-by-line relevance against current task goals to discard token noise.
  - 💡 **핵심 장점**: Preserves context window bandwidth and prevents reasoning degradation on long sessions.

- [**skillbox**](https://github.com/kitze/skillbox) `★ 149` - skillbox: Prunes extraneous tool outputs, logs, and grep results before feeding LLM context.
  - 🎯 **Jev의 역할**: Judges line-by-line relevance against current task goals to discard token noise.
  - 💡 **핵심 장점**: Preserves context window bandwidth and prevents reasoning degradation on long sessions.

- [**bluenoise**](https://github.com/rokcso/bluenoise) `★ 82` - X/Twitter browser extension filtering noise. Uses local rules first, batching ambiguous replies to Jev for noise probability scoring (filters at >=0.9).
  - 🎯 **Jev의 역할**: Batches up to 25 candidate replies per System One request, querying noul noise probability to decide DOM visibility.
  - 💡 **핵심 장점**: Zero X API dependency; combines fast local matching with Jev semantic gatekeeping for clean timelines.

- [**Winnow**](https://github.com/GhalebDweikat/winnow) `★ 13` - Context garbage collector for Claude Code pruning voluminous bash, grep, and file outputs.
  - 🎯 **Jev의 역할**: Filters terminal and tool outputs in seconds to isolate lines directly relevant to the current bug.
  - 💡 **핵심 장점**: Prevents agent context window saturation and reasoning degradation from noisy logs.

- [**jevlogs**](https://github.com/reachjalil/jevlogs) `★ 5` - jevlogs: Prunes extraneous tool outputs, logs, and grep results before feeding LLM context.
  - 🎯 **Jev의 역할**: Judges line-by-line relevance against current task goals to discard token noise.
  - 💡 **핵심 장점**: Preserves context window bandwidth and prevents reasoning degradation on long sessions.

- [**jev-skill-gate**](https://github.com/ShivamPansuriya/jev-skill-gate) `★ 2` - jev-skill-gate: Prunes extraneous tool outputs, logs, and grep results before feeding LLM context.
  - 🎯 **Jev의 역할**: Judges line-by-line relevance against current task goals to discard token noise.
  - 💡 **핵심 장점**: Preserves context window bandwidth and prevents reasoning degradation on long sessions.

- [**jev-context**](https://github.com/zbush/jev-context) `★ 1` - jev-context: Prunes extraneous tool outputs, logs, and grep results before feeding LLM context.
  - 🎯 **Jev의 역할**: Judges line-by-line relevance against current task goals to discard token noise.
  - 💡 **핵심 장점**: Preserves context window bandwidth and prevents reasoning degradation on long sessions.

---

<a id="security-guardrails-ko"></a>
## 🛡️ 보안 및 가드레일

*프롬프트 주입 방어, 콘텐츠 검열, 위험도 평가 및 정책 검증 가드레일.*

- [**agentgateway**](https://github.com/agentgateway/agentgateway) `★ 4916` - agentgateway: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: Ingests real-time domain telemetry to trigger automated execution or risk advisories.
  - 💡 **핵심 장점**: Brings structured semantic perception to second-level mission-critical workflows.

- [**interlinked-cli**](https://github.com/QuentinCody/interlinked-cli) `★ 177` - interlinked-cli: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: Ingests real-time domain telemetry to trigger automated execution or risk advisories.
  - 💡 **핵심 장점**: Brings structured semantic perception to second-level mission-critical workflows.

- [**pi-jev**](https://github.com/y0usaf/pi-jev) `★ 126` - pi-jev: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: Ingests real-time domain telemetry to trigger automated execution or risk advisories.
  - 💡 **핵심 장점**: Brings structured semantic perception to second-level mission-critical workflows.

- [**pi-warden**](https://github.com/DevMortimer/pi-warden) `★ 61` - pi-warden: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: Ingests real-time domain telemetry to trigger automated execution or risk advisories.
  - 💡 **핵심 장점**: Brings structured semantic perception to second-level mission-critical workflows.

- [**pi-jev-auto-mode**](https://github.com/jomatsu/pi-jev-auto-mode) `★ 9` - pi-jev-auto-mode: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: Ingests real-time domain telemetry to trigger automated execution or risk advisories.
  - 💡 **핵심 장점**: Brings structured semantic perception to second-level mission-critical workflows.

- [**Safer with Jev**](https://github.com/andrelandgraf/typesafe-on-neon) `★ 3` - Serverless request router on Neon evaluating incoming queries and dispatching to specialized frontier models.
  - 🎯 **Jev의 역할**: Classifies user intent (simple Q&A vs complex coding vs reasoning) with zero cold start.
  - 💡 **핵심 장점**: Minimizes global latency while optimizing model tiering.

- [**jev-guard**](https://github.com/leepokai/jev-guard) `★ 2` - jev-guard: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: Ingests real-time domain telemetry to trigger automated execution or risk advisories.
  - 💡 **핵심 장점**: Brings structured semantic perception to second-level mission-critical workflows.

- [**jev-judgment**](https://github.com/HyunjunJeon/jev-judgment) `★ 2` - jev-judgment: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: Ingests real-time domain telemetry to trigger automated execution or risk advisories.
  - 💡 **핵심 장점**: Brings structured semantic perception to second-level mission-critical workflows.

- [**jev-tool-permissions**](https://github.com/NicolasMontone/jev-tool-permissions) `★ 1` - jev-tool-permissions: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: Ingests real-time domain telemetry to trigger automated execution or risk advisories.
  - 💡 **핵심 장점**: Brings structured semantic perception to second-level mission-critical workflows.

---

<a id="mcp-integrations-ko"></a>
## 🧩 MCP 프로토콜 및 도구 확장

*Model Context Protocol(MCP)을 준수하는 표준 의사결정 서버 및 도구 엔드포인트.*

- [**vellum-assistant**](https://github.com/vellum-ai/vellum-assistant) `★ 1285` - vellum-assistant: Exposes Jev low-latency decision primitives via the Model Context Protocol (MCP).
  - 🎯 **Jev의 역할**: Provides Choice, Score, and Noul tools on demand for external agent environments.
  - 💡 **핵심 장점**: Integrates low-latency structured decisions into existing agent stacks effortlessly.

- [**ai**](https://github.com/hackclub/ai) `★ 133` - ai: Exposes Jev low-latency decision primitives via the Model Context Protocol (MCP).
  - 🎯 **Jev의 역할**: Provides Choice, Score, and Noul tools on demand for external agent environments.
  - 💡 **핵심 장점**: Integrates low-latency structured decisions into existing agent stacks effortlessly.

- [**taskuary**](https://github.com/ldbumble/taskuary) `★ 102` - taskuary: Exposes Jev low-latency decision primitives via the Model Context Protocol (MCP).
  - 🎯 **Jev의 역할**: Provides Choice, Score, and Noul tools on demand for external agent environments.
  - 💡 **핵심 장점**: Integrates low-latency structured decisions into existing agent stacks effortlessly.

- [**jev-mcp**](https://github.com/jkudish/jev-mcp) `★ 67` - Pragmatic MCP utility suite packaging real-time fact-checking, prompt injection guards, and semantic reranking.
  - 🎯 **Jev의 역할**: Applies instant binary checks for output safety and factual consistency, plus candidate reranking.
  - 💡 **핵심 장점**: Enforces lightweight safety guardrails at a fraction of frontier model costs.

- [**typesafe-mcp**](https://github.com/itsmostafa/typesafe-mcp) `★ 59` - MCP server connecting Jev directly into Claude Code, Claude Desktop, and Codex as a decision co-processor.
  - 🎯 **Jev의 역할**: Delivers structured decisions (Choice / Score / Noul) on demand to autonomous LLM agents.
  - 💡 **핵심 장점**: Enables heavy agents to make sub-100ms multi-choice decisions without frontier model latency.

- [**synkora-ai**](https://github.com/getsynkora/synkora-ai) `★ 34` - synkora-ai: Exposes Jev low-latency decision primitives via the Model Context Protocol (MCP).
  - 🎯 **Jev의 역할**: Provides Choice, Score, and Noul tools on demand for external agent environments.
  - 💡 **핵심 장점**: Integrates low-latency structured decisions into existing agent stacks effortlessly.

- [**Jevbridge**](https://github.com/gamesonrblx/Jevbridge) `★ 13` - Jevbridge: Exposes Jev low-latency decision primitives via the Model Context Protocol (MCP).
  - 🎯 **Jev의 역할**: Provides Choice, Score, and Noul tools on demand for external agent environments.
  - 💡 **핵심 장점**: Integrates low-latency structured decisions into existing agent stacks effortlessly.

- [**jev**](https://github.com/dannote/jev) `★ 10` - jev: Exposes Jev low-latency decision primitives via the Model Context Protocol (MCP).
  - 🎯 **Jev의 역할**: Provides Choice, Score, and Noul tools on demand for external agent environments.
  - 💡 **핵심 장점**: Integrates low-latency structured decisions into existing agent stacks effortlessly.

- [**jev-mcp**](https://github.com/blakestone-x/jev-mcp) `★ 7` - Pragmatic MCP utility suite packaging real-time fact-checking, prompt injection guards, and semantic reranking.
  - 🎯 **Jev의 역할**: Applies instant binary checks for output safety and factual consistency, plus candidate reranking.
  - 💡 **핵심 장점**: Enforces lightweight safety guardrails at a fraction of frontier model costs.

- [**pi-jev**](https://github.com/TheoOliveira/pi-jev) `★ 6` - pi-jev: Exposes Jev low-latency decision primitives via the Model Context Protocol (MCP).
  - 🎯 **Jev의 역할**: Provides Choice, Score, and Noul tools on demand for external agent environments.
  - 💡 **핵심 장점**: Integrates low-latency structured decisions into existing agent stacks effortlessly.

- [**zod-jev**](https://github.com/jomatsu/zod-jev) `★ 6` - zod-jev: Exposes Jev low-latency decision primitives via the Model Context Protocol (MCP).
  - 🎯 **Jev의 역할**: Provides Choice, Score, and Noul tools on demand for external agent environments.
  - 💡 **핵심 장점**: Integrates low-latency structured decisions into existing agent stacks effortlessly.

- [**JevRouter**](https://github.com/BillionsBobby/JevRouter) `★ 4` - A lightweight Jev-powered router for models, tools, and subagents
  - 🎯 **Jev의 역할**: 通过工具接口提供选择、评分或概率判断。
  - 💡 **핵심 장점**: 让现有 Agent 通过通用接口使用 Jev。

- [**daf-jev**](https://github.com/docxology/daf-jev) `★ 3` - daf-jev: Exposes Jev low-latency decision primitives via the Model Context Protocol (MCP).
  - 🎯 **Jev의 역할**: Provides Choice, Score, and Noul tools on demand for external agent environments.
  - 💡 **핵심 장점**: Integrates low-latency structured decisions into existing agent stacks effortlessly.

- [**hermes-jev-approvals**](https://github.com/anpicasso/hermes-jev-approvals) `★ 3` - hermes-jev-approvals: Exposes Jev low-latency decision primitives via the Model Context Protocol (MCP).
  - 🎯 **Jev의 역할**: Provides Choice, Score, and Noul tools on demand for external agent environments.
  - 💡 **핵심 장점**: Integrates low-latency structured decisions into existing agent stacks effortlessly.

- [**jevex**](https://github.com/jvsteiner/jevex) `★ 3` - jevex: Exposes Jev low-latency decision primitives via the Model Context Protocol (MCP).
  - 🎯 **Jev의 역할**: Provides Choice, Score, and Noul tools on demand for external agent environments.
  - 💡 **핵심 장점**: Integrates low-latency structured decisions into existing agent stacks effortlessly.

- [**jevwire**](https://github.com/Brainwires/jevwire) `★ 3` - Jev decision layer for agents: MCP server, embeddable DecisionModel library, and an escalate-only Claude Code plugin (TypeSafe AI's Jev)
  - 🎯 **Jev의 역할**: 通过工具接口提供选择、评分或概率判断。
  - 💡 **핵심 장점**: 让现有 Agent 通过通用接口使用 Jev。

- [**jev-mcp**](https://github.com/rashedInt32/jev-mcp) `★ 2` - Pragmatic MCP utility suite packaging real-time fact-checking, prompt injection guards, and semantic reranking.
  - 🎯 **Jev의 역할**: Applies instant binary checks for output safety and factual consistency, plus candidate reranking.
  - 💡 **핵심 장점**: Enforces lightweight safety guardrails at a fraction of frontier model costs.

- [**jev-workbench**](https://github.com/molis-ai/jev-workbench) `★ 2` - jev-workbench: Exposes Jev low-latency decision primitives via the Model Context Protocol (MCP).
  - 🎯 **Jev의 역할**: Provides Choice, Score, and Noul tools on demand for external agent environments.
  - 💡 **핵심 장점**: Integrates low-latency structured decisions into existing agent stacks effortlessly.

- [**laravel-typesafe-jev**](https://github.com/Butochnikov/laravel-typesafe-jev) `★ 2` - laravel-typesafe-jev: Exposes Jev low-latency decision primitives via the Model Context Protocol (MCP).
  - 🎯 **Jev의 역할**: Provides Choice, Score, and Noul tools on demand for external agent environments.
  - 💡 **핵심 장점**: Integrates low-latency structured decisions into existing agent stacks effortlessly.

- [**codex-jev-compaction**](https://github.com/Wang-auspicious/codex-jev-compaction) `★ 1` - Jev-powered context curation for Codex. Build compact, traceable handoff context through native plugins and skills.
  - 🎯 **Jev의 역할**: 通过工具接口提供选择、评分或概率判断。
  - 💡 **핵심 장점**: 让现有 Agent 通过通用接口使用 Jev。

- [**jev_ampcode**](https://github.com/thesammykins/jev_ampcode) `★ 1` - jev_ampcode: Exposes Jev low-latency decision primitives via the Model Context Protocol (MCP).
  - 🎯 **Jev의 역할**: Provides Choice, Score, and Noul tools on demand for external agent environments.
  - 💡 **핵심 장점**: Integrates low-latency structured decisions into existing agent stacks effortlessly.

- [**jev-classifier**](https://github.com/felpsdev/jev-classifier) `★ 1` - Local tool-routing classifier for coding agents, with a gateway, MCP integrations, and decision logs.
  - 🎯 **Jev의 역할**: 通过工具接口提供选择、评分或概率判断。
  - 💡 **핵심 장점**: 让现有 Agent 通过通用接口使用 Jev。

- [**jev-go**](https://github.com/Stumble/jev-go) `★ 1` - jev-go: Exposes Jev low-latency decision primitives via the Model Context Protocol (MCP).
  - 🎯 **Jev의 역할**: Provides Choice, Score, and Noul tools on demand for external agent environments.
  - 💡 **핵심 장점**: Integrates low-latency structured decisions into existing agent stacks effortlessly.

- [**jev-go**](https://github.com/guillemus/jev-go) `★ 1` - jev-go: Exposes Jev low-latency decision primitives via the Model Context Protocol (MCP).
  - 🎯 **Jev의 역할**: Provides Choice, Score, and Noul tools on demand for external agent environments.
  - 💡 **핵심 장점**: Integrates low-latency structured decisions into existing agent stacks effortlessly.

- [**jev-mcp**](https://github.com/BYK/jev-mcp) `★ 1` - An eval-first MCP server for TypeSafe's Jev, a System One model that returns typed judgments (noul, choice, score) with probabilities instead of generated text.
  - 🎯 **Jev의 역할**: 通过工具接口提供选择、评分或概率判断。
  - 💡 **핵심 장점**: 让现有 Agent 通过通用接口使用 Jev。

- [**jev-resilience**](https://github.com/Vicente-MD/jev-resilience) `★ 1` - jev-resilience: Exposes Jev low-latency decision primitives via the Model Context Protocol (MCP).
  - 🎯 **Jev의 역할**: Provides Choice, Score, and Noul tools on demand for external agent environments.
  - 💡 **핵심 장점**: Integrates low-latency structured decisions into existing agent stacks effortlessly.

- [**jevgo**](https://github.com/fgn/jevgo) `★ 1` - jevgo: Exposes Jev low-latency decision primitives via the Model Context Protocol (MCP).
  - 🎯 **Jev의 역할**: Provides Choice, Score, and Noul tools on demand for external agent environments.
  - 💡 **핵심 장점**: Integrates low-latency structured decisions into existing agent stacks effortlessly.

- [**jevscan**](https://github.com/jevbook/jevscan) `★ 1` - Typed onchain verdicts for EVM tokens. Paste a contract address, get `ape / watch / avoid` with calibrated probabilities, plus `rug_risk`, `momentum`, `liquidity_health` and `fdv_stress` scores. One System One decision loop, three interfaces: a library, a CLI built for pipelines, and an MCP server so your agents can use it too.
  - 🎯 **Jev의 역할**: 通过工具接口提供选择、评分或概率判断。
  - 💡 **핵심 장점**: 让现有 Agent 通过通用接口使用 Jev。

---

<a id="codebase-graph-pathfinding-ko"></a>
## 🧭 코드베이스 분석 및 지식 그래프 탐색

*코드 의존성 탐색, AST 심볼 분석, 코드 리뷰 트리아지 및 지식 그래프 쿼리.*

- [**celesto**](https://github.com/CelestoAI/celesto) `★ 943` - celesto: Semantic exploration engine for codebases and knowledge graphs using beam search.
  - 🎯 **Jev의 역할**: Assigns relevance probabilities to candidate files or graph edges to direct exploration.
  - 💡 **핵심 장점**: Locates target code and relationships in seconds without expensive vector indexing.

- [**Jev Review**](https://github.com/devagrawal09/jev-review) `★ 241` - Code review triage engine assessing correctness, security, reliability, and compatibility before deep review.
  - 🎯 **Jev의 역할**: Scores risk dimensions upfront to isolate high-risk diff chunks for frontier model attention.
  - 💡 **핵심 장점**: Focuses expensive model reasoning on critical changes rather than boilerplate diffs.

- [**jev-review**](https://github.com/NiazMorshed2007/jev-review) `★ 111` - Code review triage engine assessing correctness, security, reliability, and compatibility before deep review.
  - 🎯 **Jev의 역할**: Scores risk dimensions upfront to isolate high-risk diff chunks for frontier model attention.
  - 💡 **핵심 장점**: Focuses expensive model reasoning on critical changes rather than boilerplate diffs.

- [**neo4jev**](https://github.com/jexp/neo4jev) `★ 16` - Knowledge graph pathfinder scoring candidate edges with Jev and traversing paths via beam search.
  - 🎯 **Jev의 역할**: Assigns transition probabilities to candidate graph relations for low-latency traversal.
  - 💡 **핵심 장점**: Accelerates multi-hop graph reasoning by orders of magnitude.

- [**Blink**](https://github.com/ellipsis-dev/blink) `★ 14` - Semantic pathfinder navigating large codebases without vector indexes using beam search.
  - 🎯 **Jev의 역할**: Evaluates candidate files and directories per level to allocate walker budgets toward relevant paths.
  - 💡 **핵심 장점**: Pinpoints relevant files across huge repos in seconds without pre-indexing.

- [**jev-code**](https://github.com/devagrawal09/jev-code) `★ 6` - jev-code: Semantic exploration engine for codebases and knowledge graphs using beam search.
  - 🎯 **Jev의 역할**: Assigns relevance probabilities to candidate files or graph edges to direct exploration.
  - 💡 **핵심 장점**: Locates target code and relationships in seconds without expensive vector indexing.

- [**claude-jev**](https://github.com/buchmark/claude-jev) `★ 1` - claude-jev: Semantic exploration engine for codebases and knowledge graphs using beam search.
  - 🎯 **Jev의 역할**: Assigns relevance probabilities to candidate files or graph edges to direct exploration.
  - 💡 **핵심 장점**: Locates target code and relationships in seconds without expensive vector indexing.

- [**jev-flash-review**](https://github.com/TheBous/jev-flash-review) `★ 1` - Local-first: the engine never reads your repository. The calling agent supplies
the diff (and the business context); the engine returns structured verdicts.
  - 🎯 **Jev의 역할**: 评估候选代码或关系与目标的相关程度，选择下一条路径。
  - 💡 **핵심 장점**: 把下一步调查集中到更相关的证据上。

- [**foreman-jev**](https://github.com/Shifty-Eye-Games/foreman-jev) - foreman-jev: Semantic exploration engine for codebases and knowledge graphs using beam search.
  - 🎯 **Jev의 역할**: Assigns relevance probabilities to candidate files or graph edges to direct exploration.
  - 💡 **핵심 장점**: Locates target code and relationships in seconds without expensive vector indexing.

---

<a id="routing-cost-optimization-ko"></a>
## 🔀 모델 라우팅 및 비용 최적화

*작업 난이도 자동 분류, 계층형 모델 라우팅 및 API 비용 절감.*

- [**litellm**](https://github.com/BerriAI/litellm) `★ 59076` - litellm: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: Ingests real-time domain telemetry to trigger automated execution or risk advisories.
  - 💡 **핵심 장점**: Brings structured semantic perception to second-level mission-critical workflows.

- [**openchamber**](https://github.com/openchamber/openchamber) `★ 10038` - openchamber: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: Ingests real-time domain telemetry to trigger automated execution or risk advisories.
  - 💡 **핵심 장점**: Brings structured semantic perception to second-level mission-critical workflows.

- [**firstmate**](https://github.com/kunchenguid/firstmate) `★ 6502` - firstmate: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: Ingests real-time domain telemetry to trigger automated execution or risk advisories.
  - 💡 **핵심 장점**: Brings structured semantic perception to second-level mission-critical workflows.

- [**atomic**](https://github.com/bastani-inc/atomic) `★ 805` - atomic: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: Ingests real-time domain telemetry to trigger automated execution or risk advisories.
  - 💡 **핵심 장점**: Brings structured semantic perception to second-level mission-critical workflows.

- [**vexjoy-agent**](https://github.com/notque/vexjoy-agent) `★ 420` - vexjoy-agent: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: Ingests real-time domain telemetry to trigger automated execution or risk advisories.
  - 💡 **핵심 장점**: Brings structured semantic perception to second-level mission-critical workflows.

- [**WrongStack**](https://github.com/WrongStack/WrongStack) `★ 327` - WrongStack: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: Ingests real-time domain telemetry to trigger automated execution or risk advisories.
  - 💡 **핵심 장점**: Brings structured semantic perception to second-level mission-critical workflows.

- [**Jev Codex Router**](https://github.com/0xNatoshi/jev-codex-router) `★ 26` - Smart request router evaluating turn difficulty with Jev to route between cheap and frontier models.
  - 🎯 **Jev의 역할**: Estimates technical task complexity and context depth prior to model execution.
  - 💡 **핵심 장점**: Tested on 237 turns, slashing overall API bills by ~60%.

- [**jev-demo**](https://github.com/minghanminghan/jev-demo) - jev-demo: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: Ingests real-time domain telemetry to trigger automated execution or risk advisories.
  - 💡 **핵심 장점**: Brings structured semantic perception to second-level mission-critical workflows.

- [**jev-router-playground**](https://github.com/hugo-alves/jev-router-playground) - jev-router-playground: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: Ingests real-time domain telemetry to trigger automated execution or risk advisories.
  - 💡 **핵심 장점**: Brings structured semantic perception to second-level mission-critical workflows.

---

<a id="domain-vertical-tools-ko"></a>
## 📊 도메인 특화 및 엔터프라이즈 도구

*DeFi, 퀀트 트레이딩, 컴플라이언스 및 법률 도메인을 위한 엔터프라이즈 시스템.*

- [**Prism**](https://github.com/irfndi/prism-liquidity-agent) `★ 32` - DeFi liquidity agent detecting toxic flow, market stress, and pool distribution in shadow mode.
  - 🎯 **Jev의 역할**: Evaluates mean reversion probability and liquidity skew with high-frequency inference.
  - 💡 **핵심 장점**: Brings LLM-grade semantic perception to second-level financial risk monitoring.

- [**Jev-Trades**](https://github.com/zadescoxp/Jev-Trades) `★ 7` - High-frequency perp trader on Hyperliquid with live dashboard (jev-trade.com). Evaluates order book every tick to trade.
  - 🎯 **Jev의 역할**: Evaluates order book imbalance, depth, and spread per tick to decide side, leverage, and quotes.
  - 💡 **핵심 장점**: Sub-second decentralized derivatives execution with multi-sleeve isolation.

- [**HA-Jev**](https://github.com/AboveColin/HA-Jev) `★ 6` - HA-Jev: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: Ingests real-time domain telemetry to trigger automated execution or risk advisories.
  - 💡 **핵심 장점**: Brings structured semantic perception to second-level mission-critical workflows.

- [**jev-trade**](https://github.com/aowang-ai/jev-trade) `★ 3` - High-frequency perp trader on Hyperliquid with live dashboard (jev-trade.com). Evaluates order book every tick to trade.
  - 🎯 **Jev의 역할**: Evaluates order book imbalance, depth, and spread per tick to decide side, leverage, and quotes.
  - 💡 **핵심 장점**: Sub-second decentralized derivatives execution with multi-sleeve isolation.

- [**jev-for-engineers**](https://github.com/Foadsf/jev-for-engineers) `★ 2` - jev-for-engineers: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: Ingests real-time domain telemetry to trigger automated execution or risk advisories.
  - 💡 **핵심 장점**: Brings structured semantic perception to second-level mission-critical workflows.

- [**got-jev**](https://github.com/phureewat29/got-jev) `★ 1` - got-jev: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: Ingests real-time domain telemetry to trigger automated execution or risk advisories.
  - 💡 **핵심 장점**: Brings structured semantic perception to second-level mission-critical workflows.

- [**hermes-jev-north-star**](https://github.com/poponline63/hermes-jev-north-star) `★ 1` - Hermes Agent skill whose north-star gate is judged by Jev (TypeSafe System One): turn an intention into a checkable finish line, generate the run prompt, and let Jev rank what is still unproven.
  - 🎯 **Jev의 역할**: 评估业务状态，给出供本地规则参考的分类或风险分数。
  - 💡 **핵심 장점**: 增加一组可记录、可对照的判断信号。

- [**jev-broadcast-lab**](https://github.com/4anti/jev-broadcast-lab) `★ 1` - jev-broadcast-lab: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: Ingests real-time domain telemetry to trigger automated execution or risk advisories.
  - 💡 **핵심 장점**: Brings structured semantic perception to second-level mission-critical workflows.

- [**jev-exploration**](https://github.com/SamuelSacco/jev-exploration) `★ 1` - Jev (TypeSafe) exploratory thread: claim audit, live demos, and runnable code
  - 🎯 **Jev의 역할**: 评估业务状态，给出供本地规则参考的分类或风险分数。
  - 💡 **핵심 장점**: 增加一组可记录、可对照的判断信号。

- [**jev-review-action**](https://github.com/fatwang2/jev-review-action) `★ 1` - Configurable GitHub submission review and PR classification with TypeSafe Jev. No text-generation model.
  - 🎯 **Jev의 역할**: 评估业务状态，给出供本地规则参考的分类或风险分数。
  - 💡 **핵심 장점**: 增加一组可记录、可对照的判断信号。

- [**jevsome-projects**](https://github.com/ozers/jevsome-projects) `★ 1` - Open-source projects that provably call Jev, TypeSafe AI's System One model. Every entry links to the line of code that proves it. Refreshed daily.
  - 🎯 **Jev의 역할**: 评估业务状态，给出供本地规则参考的分类或风险分数。
  - 💡 **핵심 장점**: 增加一组可记录、可对照的判断信号。

- [**jevsume**](https://github.com/unownone/jevsume) `★ 1` - jevsume: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: Ingests real-time domain telemetry to trigger automated execution or risk advisories.
  - 💡 **핵심 장점**: Brings structured semantic perception to second-level mission-critical workflows.

- [**ha-conversation-jev**](https://github.com/luxus/ha-conversation-jev) - ha-conversation-jev: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: Ingests real-time domain telemetry to trigger automated execution or risk advisories.
  - 💡 **핵심 장점**: Brings structured semantic perception to second-level mission-critical workflows.

- [**jev-music-theory-1**](https://github.com/adammichaelwood/jev-music-theory-1) - jev-music-theory-1: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: Ingests real-time domain telemetry to trigger automated execution or risk advisories.
  - 💡 **핵심 장점**: Brings structured semantic perception to second-level mission-critical workflows.

- [**jev-trade**](https://github.com/Waxmell114514/jev-trade) - High-frequency perp trader on Hyperliquid with live dashboard (jev-trade.com). Evaluates order book every tick to trade.
  - 🎯 **Jev의 역할**: Evaluates order book imbalance, depth, and spread per tick to decide side, leverage, and quotes.
  - 💡 **핵심 장점**: Sub-second decentralized derivatives execution with multi-sleeve isolation.

---

<a id="decision-tools-ko"></a>
## 🎯 범용 의사결정 및 휴리스틱 평가

*범용 선택 엔진, 휴리스틱 스코어러 및 비즈니스 의사결정 보조 유틸리티.*

- [**jev-benchmarks**](https://github.com/AbdelStark/jev-benchmarks) `★ 7` - jev-benchmarks: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: Ingests real-time domain telemetry to trigger automated execution or risk advisories.
  - 💡 **핵심 장점**: Brings structured semantic perception to second-level mission-critical workflows.

- [**jev-benchmark**](https://github.com/wondertwins/jev-benchmark) `★ 2` - Benchmarks and a playground for TypeSafe's Jev (System One) model: chess, and who-is-the-player-talking-to for speech-to-text game NPCs
  - 🎯 **Jev의 역할**: 把任务状态交给 Jev，返回供本地程序使用的结构化判断；具体策略请查看来源。
  - 💡 **핵심 장점**: 把选择和打分接进现有程序；暂无可核验的性能对照。

- [**jev-frontend-qa**](https://github.com/Nainish-Rai/jev-frontend-qa) `★ 2` - **Status: live Jev acceptance passed for the synthetic reference scenarios.** The real CLI, Jev `1.13.0`, Browser Harness, Chrome, HTTP endpoints, and SQLite were exercised together. Healthy creation, lifecycle, and validation passed; all three deliberate defects failed their authored contracts; exploration completed without claiming a contract PASS. There is no offline-model fallback in the production CLI.
  - 🎯 **Jev의 역할**: 把任务状态交给 Jev，返回供本地程序使用的结构化判断；具体策略请查看来源。
  - 💡 **핵심 장점**: 把选择和打分接进现有程序；暂无可核验的性能对照。

- [**omp-jev-compaction**](https://github.com/jerryfane/omp-jev-compaction) `★ 2` - Verbatim Jev-scored context reduction for omp, over TypeSafe or OpenRouter
  - 🎯 **Jev의 역할**: 把任务状态交给 Jev，返回供本地程序使用的结构化判断；具体策略请查看来源。
  - 💡 **핵심 장점**: 把选择和打分接进现有程序；暂无可核验的性能对照。

- [**jev-agent-failure-benchmark**](https://github.com/TokenTrim/jev-agent-failure-benchmark) `★ 1` - jev-agent-failure-benchmark: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: Ingests real-time domain telemetry to trigger automated execution or risk advisories.
  - 💡 **핵심 장점**: Brings structured semantic perception to second-level mission-critical workflows.

- [**jev-playground**](https://github.com/Little-Planet-Labs/jev-playground) `★ 1` - jev-playground: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: Ingests real-time domain telemetry to trigger automated execution or risk advisories.
  - 💡 **핵심 장점**: Brings structured semantic perception to second-level mission-critical workflows.

- [**jev-predict-skill**](https://github.com/DanielKillenberger/jev-predict-skill) `★ 1` - jev-predict-skill: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: Ingests real-time domain telemetry to trigger automated execution or risk advisories.
  - 💡 **핵심 장점**: Brings structured semantic perception to second-level mission-critical workflows.

- [**jev-rerank-bench**](https://github.com/anessbelbati/jev-rerank-bench) `★ 1` - jev-rerank-bench: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: Ingests real-time domain telemetry to trigger automated execution or risk advisories.
  - 💡 **핵심 장점**: Brings structured semantic perception to second-level mission-critical workflows.

- [**jev-research**](https://github.com/sherajdev/jev-research) `★ 1` - jev-research: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: Ingests real-time domain telemetry to trigger automated execution or risk advisories.
  - 💡 **핵심 장점**: Brings structured semantic perception to second-level mission-critical workflows.

- [**jevchat**](https://github.com/kt3k/jevchat) `★ 1` - By default Jev answers **Yes** or **No**. You can switch to other answer styles
(Yes/No/Maybe, Mom, Pirate, Tabloid headlines, …) or create your own custom set
of answers for Jev to choose from.
  - 🎯 **Jev의 역할**: 把任务状态交给 Jev，返回供本地程序使用的结构化判断；具体策略请查看来源。
  - 💡 **핵심 장점**: 把选择和打分接进现有程序；暂无可核验的性能对照。

---

<a id="classification-taxonomy-ko"></a>
## 🏷️ 텍스트 분류 및 분류 체계

*다중 레이블 분류, 계층적 분류 체계 구축 및 데이터셋 레이블링.*

- [**orchestkit**](https://github.com/yonatangross/orchestkit) `★ 278` - orchestkit: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: Ingests real-time domain telemetry to trigger automated execution or risk advisories.
  - 💡 **핵심 장점**: Brings structured semantic perception to second-level mission-critical workflows.

- [**jev-tree**](https://github.com/reachjalil/jev-tree) `★ 2` - jev-tree: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: Ingests real-time domain telemetry to trigger automated execution or risk advisories.
  - 💡 **핵심 장점**: Brings structured semantic perception to second-level mission-critical workflows.

---

<a id="evaluation-observability-ko"></a>
## 📈 벤치마크 및 가관측성

*의사결정 프로파일링, 지연 시간 모니터링, 텔레메트리 및 벤치마크 평가 제품군.*

- [**latitude-llm**](https://github.com/latitude-dev/latitude-llm) `★ 4654` - latitude-llm: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: Ingests real-time domain telemetry to trigger automated execution or risk advisories.
  - 💡 **핵심 장점**: Brings structured semantic perception to second-level mission-critical workflows.

---

<a id="voice-conversation-ko"></a>
## 🎙️ 음성 인터랙션 및 실시간 대화

*발화 순서 중재, 인터럽트 감지 및 실시간 저지연 음성 AI 시스템.*

- [**aiavatarkit**](https://github.com/uezo/aiavatarkit) `★ 674` - aiavatarkit: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: Ingests real-time domain telemetry to trigger automated execution or risk advisories.
  - 💡 **핵심 장점**: Brings structured semantic perception to second-level mission-critical workflows.

---

<a id="creative-tools-ko"></a>
## 🎨 크리에이티브 미디어 및 작곡

*동적 UI 레이아웃 생성, 알고리즘 기반 작곡 및 MIDI 편곡 도구.*

- [**jevthoven**](https://github.com/cocktailpeanut/jevthoven) `★ 3` - jevthoven: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: Ingests real-time domain telemetry to trigger automated execution or risk advisories.
  - 💡 **핵심 장점**: Brings structured semantic perception to second-level mission-critical workflows.

- [**ui-generator-instinct-jev**](https://github.com/joevidev/ui-generator-instinct-jev) `★ 1` - ui-generator-instinct-jev: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: Ingests real-time domain telemetry to trigger automated execution or risk advisories.
  - 💡 **핵심 장점**: Brings structured semantic perception to second-level mission-critical workflows.

---

<a id="dev-arch-ko"></a>
## 📖 로컬 개발 및 아키텍처

**Node.js 22+** 가 필요합니다.

```bash
# 의존성 패키지 설치
npm ci

# 로컬 인터랙티브 레이더 실행 (Vite + React + Tailwind)
npm run dev

# 자동화 검증 테스트 실행 (87개 테스트 스위트)
npm test

# 프로덕션 빌드
npm run build

# 4개 국어 README 동기화 생성
npm run build:readme
```

### 자율 동기화 파이프라인
레이더는 GitHub Actions를 통해 완전 자동화로 운영됩니다:
1. **정기 생태계 탐색** (12시간 주기): 실제 Jev 구현 코드를 포함하는 신규 리포지토리를 자동 검색.
2. **Issue 자동 검증**: 제출된 리포지토리의 소스 코드를 정적 분석하여 실제 연동 여부를 엄격히 확인.
3. **연속 배포**: 테스트 통과 즉시 [GitHub Pages](https://logicrw.github.io/awesome-jev-projects/)로 실시간 배포.

---

<a id="submit-guide-ko"></a>
## 🤝 프로젝트 제출 방법

Jev를 연동한 모든 오픈소스 프로젝트, 실험 및 도구의 등록을 환영합니다!

1. **웹사이트에서 등록**: [라이브 레이더](https://logicrw.github.io/awesome-jev-projects/) 우측 상단 'Submit Project' 클릭.
2. **GitHub Issue로 등록**: [프로젝트 제출 템플릿](https://github.com/logicrw/awesome-jev-projects/issues/new?template=project.yml)을 통해 리포지토리 링크와 Jev 의사결정 역할을 기재.
3. **검증 기준**: 리포지토리 내에 실제로 동작하는 Jev 연동 코드가 포함되어 있어야 합니다.

---

## 라이선스

MIT © [Logicrw](https://github.com/logicrw).
