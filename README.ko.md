<div align="center">

<a href="https://logicrw.github.io/awesome-jev-projects/">
  <img src="https://raw.githubusercontent.com/logicrw/awesome-jev-projects/main/public/banner.svg" alt="Awesome Jev Projects Banner" width="880" style="max-width: 100%; border-radius: 12px;" />
</a>

<br/><br/>

<p>
  <a href="https://awesome.re"><img src="https://awesome.re/badge.svg" alt="Awesome" /></a>
  <a href="https://logicrw.github.io/awesome-jev-projects/"><img src="https://img.shields.io/badge/Live%20Radar-logicrw.github.io-059669?style=flat-square&logo=safari" alt="Live Radar" /></a>
  <a href="#contents"><img src="https://img.shields.io/badge/Curated%20Projects-181%2B-2563eb?style=flat-square" alt="Projects Count" /></a>
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

<p>TypeSafe AI의 Jev 모델을 탑재한 **181+** 개의 검증된 오픈소스 도구, 프로덕션 앱 및 벤치마크 모음. 모든 프로젝트는 실제 소스 코드가 검증되었습니다.</p>

</div>

---

> **Awesome Jev 프로젝트란?**  
> 텍스트 생성 모델과 달리, TypeSafe AI의 Jev는 100ms 미만의 고속 구조화 판단(`Choice` 선택, `Score` 채점, `Noul` 확률 판정)에 특화되어 있습니다.  
> 본 디렉터리는 Jev를 핵심 의사결정 엔진으로 직접 활용하는 실제 오픈소스 소프트웨어만을 검증하여 수록합니다.

---
<a id="contents"></a>
## 목차

- [⚡ 고주파 시뮬레이션 및 실시간 게임 (17)](#high-frequency-simulation-ko)
- [🛠️ SDK 및 의사결정 프레임워크 (12)](#sdk-decision-frameworks-ko)
- [🔌 생태계 연동 및 어댑터 (8)](#sdk-integrations-ko)
- [💻 CLI 및 자동화 파이프라인 (26)](#cli-pipelines-ko)
- [💾 데이터베이스 확장 및 시맨틱 검색 (4)](#data-search-ko)
- [🌐 브라우저 및 데스크톱 자동화 (16)](#browser-os-action-ko)
- [🧹 컨텍스트 압축 및 가비지 컬렉션 (7)](#context-gc-filter-ko)
- [🛡️ 보안 및 가드레일 (10)](#security-guardrails-ko)
- [🧩 MCP 프로토콜 및 도구 확장 (29)](#mcp-integrations-ko)
- [🧭 코드베이스 분석 및 지식 그래프 탐색 (9)](#codebase-graph-pathfinding-ko)
- [🔀 모델 라우팅 및 비용 최적화 (10)](#routing-cost-optimization-ko)
- [📊 도메인 특화 및 엔터프라이즈 도구 (15)](#domain-vertical-tools-ko)
- [🎯 범용 의사결정 및 휴리스틱 평가 (11)](#decision-tools-ko)
- [🏷️ 텍스트 분류 및 분류 체계 (2)](#classification-taxonomy-ko)
- [📈 벤치마크 및 가관측성 (1)](#evaluation-observability-ko)
- [🎙️ 음성 인터랙션 및 실시간 대화 (1)](#voice-conversation-ko)
- [🎨 크리에이티브 미디어 및 작곡 (3)](#creative-tools-ko)
- [📖 로컬 개발 및 아키텍처](#dev-arch-ko)
- [🤝 프로젝트 제출 방법](#submit-guide-ko)

---

<a id="high-frequency-simulation-ko"></a>
## ⚡ 고주파 시뮬레이션 및 실시간 게임

*게임, 로보틱스 및 인터랙티브 시뮬레이션 루프를 위한 실시간 밀리초 단위 의사결정.*

- [**jev-trader**](https://github.com/jarrodwatts/jev-trader) `★ 902` - jev-trader: High-frequency market-making bot on Monad testnet querying Jev every ~300ms block to decide buy/sell orders on Kuru orderbook.
  - 🎯 **Jev의 역할**: 스프레드, 100블록 이동 수익률, 테이커 흐름을 분석하여 향후 30블록의 중간 가격 변동 방향을 예측.
  - 💡 **핵심 장점**: 약 80ms의 추론 지연 시간으로 1초 미만 블록체인 블록 생성 주기에 완벽하게 부합.

- [**typesafe-mario**](https://github.com/fhshaik/typesafe-mario) `★ 263` - typesafe-mario: Screenshot-free NES Super Mario Bros agent parsing emulator RAM into structured state for Jev to choose controller inputs in real-time.
  - 🎯 **Jev의 역할**: 마리오의 이동 속도, 점프 궤적, 전방의 적 상태를 평가하여 패미컴 컨트롤러 입력을 실시간 결정.
  - 💡 **핵심 장점**: 원시 픽셀 인식을 결정론적 객체 텔레메트리로 축소하여 촉박한 프레임 예산 내에서 유효한 동작을 출력.

- [**jev-drone**](https://github.com/RomanSlack/jev-drone) `★ 63` - jev-drone: Autonomous quadrotor in MuJoCo obstacle course using onboard camera buffers with Jev tactical judgment at 2.5Hz backed by 50Hz/500Hz flight controllers.
  - 🎯 **Jev의 역할**: 고전 컴퓨터 비전의 거리 섹터와 장애물 높이를 분석하여 상승, 제동, 간극 통과 등 전술 기동을 선택.
  - 💡 **핵심 장점**: 계층화된 제어 아키텍처: Jev가 거시적 전술 결정을 전담하고 결정론적 코드가 비행 안전을 보장.

- [**jevpilot**](https://github.com/standardagents/jevpilot) `★ 58` - jevpilot: Real-time decision engine operating at sub-100ms latency for games, bots, and simulations.
  - 🎯 **Jev의 역할**: 게임 및 로봇의 이동, 조향 및 행동을 구동하는 연속 멀티 Hz 의사결정 루프를 실행.
  - 💡 **핵심 장점**: 프론티어 LLM이 물리적으로 제공할 수 없는 실시간 반응 속도를 달성합니다.

- [**tsai-sc**](https://github.com/phyous/tsai-sc) `★ 15` - tsai-sc: TypeSafe Jev harness completing the original 1998 StarCraft Strongarm combat mission across 421 verified decisions with full visual replay proof.
  - 🎯 **Jev의 역할**: 구조화된 전장 상황과 자원 데이터를 읽고 기지 건설과 전투 유닛 미세 컨트롤을 독립적으로 의사결정.
  - 💡 **핵심 장점**: 복잡한 실시간 전략 시뮬레이션 상태를 이산적인 시맨틱 의사결정으로 분해할 수 있음을 입증.

- [**1v1 Jev**](https://github.com/emrickgarrett/OneVOneJev) `★ 5` - 1v1 Jev: Real-time decision engine operating at sub-100ms latency for games, bots, and simulations.
  - 🎯 **Jev의 역할**: 게임 및 로봇의 이동, 조향 및 행동을 구동하는 연속 멀티 Hz 의사결정 루프를 실행.
  - 💡 **핵심 장점**: 프론티어 LLM이 물리적으로 제공할 수 없는 실시간 반응 속도를 달성합니다.

- [**live-jev**](https://github.com/vinilana/live-jev) `★ 3` - live-jev: Real-time decision engine operating at sub-100ms latency for games, bots, and simulations.
  - 🎯 **Jev의 역할**: 게임 및 로봇의 이동, 조향 및 행동을 구동하는 연속 멀티 Hz 의사결정 루프를 실행.
  - 💡 **핵심 장점**: 프론티어 LLM이 물리적으로 제공할 수 없는 실시간 반응 속도를 달성합니다.

- [**jev-shield**](https://github.com/vmendes90/jev-shield) `★ 2` - Semantic content blocker distinguishing sponsored feed cards and native ads from organic content using real-time Jev judgments.
  - 🎯 **Jev의 역할**: 피드 카드 DOM 구조를 검사하여 일반 콘텐츠와 동일한 스타일의 광고성 포스트를 분류.
  - 💡 **핵심 장점**: 기존 CSS 선택자나 URL 차단 목록으로 막을 수 없는 퍼스트 파티 네이티브 광고를 차단합니다.

- [**JevBird**](https://github.com/leftspace89/JevBird) `★ 2` - JevBird: Real-time decision engine operating at sub-100ms latency for games, bots, and simulations.
  - 🎯 **Jev의 역할**: 게임 및 로봇의 이동, 조향 및 행동을 구동하는 연속 멀티 Hz 의사결정 루프를 실행.
  - 💡 **핵심 장점**: 프론티어 LLM이 물리적으로 제공할 수 없는 실시간 반응 속도를 달성합니다.

- [**doom-jev**](https://github.com/AmoghCreator/doom-jev) `★ 1` - doom-jev: Real-time decision engine operating at sub-100ms latency for games, bots, and simulations.
  - 🎯 **Jev의 역할**: 게임 및 로봇의 이동, 조향 및 행동을 구동하는 연속 멀티 Hz 의사결정 루프를 실행.
  - 💡 **핵심 장점**: 프론티어 LLM이 물리적으로 제공할 수 없는 실시간 반응 속도를 달성합니다.

- [**jev-curate**](https://github.com/AkashPriyadarshii/jev-curate) `★ 1` - High-throughput pretraining dataset sifter streaming, filtering, and scoring Parquet and JSONL rows via Jev.
  - 🎯 **Jev의 역할**: 초당 1,500행 이상의 속도로 데이터셋 행에 대해 Score 및 Noul 배치 판단을 수행.
  - 💡 **핵심 장점**: 연산 집약적인 모델 학습 전에 저품질 또는 유해한 합성 데이터를 사전 분리합니다.

- [**jev-doom-agent**](https://github.com/lukaske/jev-doom-agent) `★ 1` - jev-doom-agent: Real-time decision engine operating at sub-100ms latency for games, bots, and simulations.
  - 🎯 **Jev의 역할**: 게임 및 로봇의 이동, 조향 및 행동을 구동하는 연속 멀티 Hz 의사결정 루프를 실행.
  - 💡 **핵심 장점**: 프론티어 LLM이 물리적으로 제공할 수 없는 실시간 반응 속도를 달성합니다.

- [**jev-gomoku**](https://github.com/XieChengYuan/jev-gomoku) `★ 1` - Dual-Jev 9x9 Gomoku workbench evaluating how input representations affect placement decisions, featuring replay and live play.
  - 🎯 **Jev의 역할**: 턴당 단일 Choice 문제를 해결: 바둑판 상태, 후보 수, 게임 규칙을 기반으로 다음 착수 좌표를 선택.
  - 💡 **핵심 장점**: 턴별 요청 페이로드, 모델 확률, 지연 시간을 투명하게 공개하며 기보 무료 다시보기 및 실시간 대국을 지원합니다.
  - 🌐 [라이브 데모](https://xiechengyuan.github.io/jev-gomoku/)

- [**jev-little-airways**](https://github.com/lbotinelly/jev-little-airways) `★ 1` - jev-little-airways: Real-time decision engine operating at sub-100ms latency for games, bots, and simulations.
  - 🎯 **Jev의 역할**: 게임 및 로봇의 이동, 조향 및 행동을 구동하는 연속 멀티 Hz 의사결정 루프를 실행.
  - 💡 **핵심 장점**: 프론티어 LLM이 물리적으로 제공할 수 없는 실시간 반응 속도를 달성합니다.

- [**jevarena**](https://github.com/raihankhan-rk/jevarena) `★ 1` - Interactive evaluation arena staging click-only browser game duels between competing Jev agents.
  - 🎯 **Jev의 역할**: 실시간 브라우저 캔버스 프레임에서 이산 UI 좌표와 클릭 동작을 선택.
  - 💡 **핵심 장점**: 고주파 의사결정 반사신경을 테스트하기 위한 시각적 대전 벤치마크를 제공합니다.

- [**jev-demos**](https://github.com/Bud-ro/jev-demos) - jev-demos: Real-time decision engine operating at sub-100ms latency for games, bots, and simulations.
  - 🎯 **Jev의 역할**: 게임 및 로봇의 이동, 조향 및 행동을 구동하는 연속 멀티 Hz 의사결정 루프를 실행.
  - 💡 **핵심 장점**: 프론티어 LLM이 물리적으로 제공할 수 없는 실시간 반응 속도를 달성합니다.

- [**jev-experiments**](https://github.com/mittal-parth/jev-experiments) - jev-experiments: Real-time decision engine operating at sub-100ms latency for games, bots, and simulations.
  - 🎯 **Jev의 역할**: 게임 및 로봇의 이동, 조향 및 행동을 구동하는 연속 멀티 Hz 의사결정 루프를 실행.
  - 💡 **핵심 장점**: 프론티어 LLM이 물리적으로 제공할 수 없는 실시간 반응 속도를 달성합니다.

---

<a id="sdk-decision-frameworks-ko"></a>
## 🛠️ SDK 및 의사결정 프레임워크

*Jev의 구조화된 호출과 타입 안전 상호작용을 위한 다국어 클라이언트 라이브러리 및 SDK.*

- [**rig-typesafeai**](https://github.com/0xPlaygrounds/rig) `★ 8669` - rig-typesafeai: Official Rig crate bringing native type-safe Choice, Score, and Noul System One decision primitives to the Rust LLM ecosystem.
  - 🎯 **Jev의 역할**: Rust 제네릭 구조체로 질문과 답변 레이아웃을 한 번만 선언하고 Jev를 통해 강타입 필드로 직접 디코딩.
  - 💡 **핵심 장점**: 수동 JSON 프롬프트 작성이나 런타임 스키마 검증이 전혀 필요 없는 Rust 네이티브 제로 비용 추상화.

- [**req_llm**](https://github.com/agentjido/req_llm) `★ 577` - req_llm: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: 실시간 도메인 원격 측정 데이터를 수집하여 자동 실행 또는 리스크 경고를 트리거.
  - 💡 **핵심 장점**: 초 단위의 미션 크리티컬 워크플로에 구조화된 시맨틱 인지를 결합합니다.

- [**instructor-php**](https://github.com/cognesy/instructor-php) `★ 327` - instructor-php: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: 실시간 도메인 원격 측정 데이터를 수집하여 자동 실행 또는 리스크 경고를 트리거.
  - 💡 **핵심 장점**: 초 단위의 미션 크리티컬 워크플로에 구조화된 시맨틱 인지를 결합합니다.

- [**openai-scala-client**](https://github.com/cequence-io/openai-scala-client) `★ 248` - openai-scala-client: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: 실시간 도메인 원격 측정 데이터를 수집하여 자동 실행 또는 리스크 경고를 트리거.
  - 💡 **핵심 장점**: 초 단위의 미션 크리티컬 워크플로에 구조화된 시맨틱 인지를 결합합니다.

- [**pi-fabric**](https://github.com/monotykamary/pi-fabric) `★ 233` - pi-fabric: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: 실시간 도메인 원격 측정 데이터를 수집하여 자동 실행 또는 리스크 경고를 트리거.
  - 💡 **핵심 장점**: 초 단위의 미션 크리티컬 워크플로에 구조화된 시맨틱 인지를 결합합니다.

- [**effect-agent**](https://github.com/danieljvdm/effect-agent) `★ 116` - effect-agent: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: 실시간 도메인 원격 측정 데이터를 수집하여 자동 실행 또는 리스크 경고를 트리거.
  - 💡 **핵심 장점**: 초 단위의 미션 크리티컬 워크플로에 구조화된 시맨틱 인지를 결합합니다.

- [**jev-visual**](https://github.com/hr98w/jev-visual) `★ 95` - Local Jev-like visual inference experiment on Apple Silicon Mac. Scores and classifies single images across multiple questions with 3 playable game demos.
  - 🎯 **Jev의 역할**: 자기회귀 생성 없이 멀티모달 시각 컨텍스트를 재사용하여 로짓에서 직접 후보 응답을 채점.
  - 💡 **핵심 장점**: Apple Silicon의 로컬 엣지 비전에 Jev 스타일의 1패스 다중 판정 스코어링을 도입합니다.

- [**advocaat**](https://github.com/pithings/advocaat) `★ 66` - advocaat: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: 실시간 도메인 원격 측정 데이터를 수집하여 자동 실행 또는 리스크 경고를 트리거.
  - 💡 **핵심 장점**: 초 단위의 미션 크리티컬 워크플로에 구조화된 시맨틱 인지를 결합합니다.

- [**jev-java**](https://github.com/Olti1947/jev-java) `★ 2` - Idiomatic Java SDK and type-safe client library for TypeSafe AI Jev decision engine.
  - 🎯 **Jev의 역할**: HTTP System One 엔드포인트를 강력한 타입의 Java POJO 및 비동기 리액티브 플로우로 래핑.
  - 💡 **핵심 장점**: Jev 기반 마이크로서비스에 엔터프라이즈 네이티브 Java 호환성을 제공합니다.

- [**jev-starter**](https://github.com/hamakyo/jev-starter) `★ 1` - jev-starter: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: 실시간 도메인 원격 측정 데이터를 수집하여 자동 실행 또는 리스크 경고를 트리거.
  - 💡 **핵심 장점**: 초 단위의 미션 크리티컬 워크플로에 구조화된 시맨틱 인지를 결합합니다.

- [**jevclient**](https://github.com/AboveColin/jevclient) `★ 1` - jevclient: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: 실시간 도메인 원격 측정 데이터를 수집하여 자동 실행 또는 리스크 경고를 트리거.
  - 💡 **핵심 장점**: 초 단위의 미션 크리티컬 워크플로에 구조화된 시맨틱 인지를 결합합니다.

- [**jevify**](https://github.com/altryne/jevify) `★ 1` - CLI installer and integration assistant configuring Jev decision endpoints for Claude Code, Codex, and Cursor.
  - 🎯 **Jev의 역할**: 개발 에이전트 환경 전반에 구조화된 Jev 판단 훅을 구성하는 대화형 설정 CLI.
  - 💡 **핵심 장점**: 멀티 에이전트 환경 구성을 자동화하여 수동 설정 작업을 완전히 제거합니다.

---

<a id="sdk-integrations-ko"></a>
## 🔌 생태계 연동 및 어댑터

*기존 에이전트 런타임 및 애플리케이션 스택을 Jev와 원활하게 연결하는 어댑터.*

- [**langchain**](https://github.com/langchain-ai/langchain) `★ 146595` - langchain: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: 실시간 도메인 원격 측정 데이터를 수집하여 자동 실행 또는 리스크 경고를 트리거.
  - 💡 **핵심 장점**: 초 단위의 미션 크리티컬 워크플로에 구조화된 시맨틱 인지를 결합합니다.

- [**oh-my-pi**](https://github.com/can1357/oh-my-pi) `★ 31786` - oh-my-pi: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: 실시간 도메인 원격 측정 데이터를 수집하여 자동 실행 또는 리스크 경고를 트리거.
  - 💡 **핵심 장점**: 초 단위의 미션 크리티컬 워크플로에 구조화된 시맨틱 인지를 결합합니다.

- [**composio**](https://github.com/ComposioHQ/composio) `★ 30228` - composio: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: 실시간 도메인 원격 측정 데이터를 수집하여 자동 실행 또는 리스크 경고를 트리거.
  - 💡 **핵심 장점**: 초 단위의 미션 크리티컬 워크플로에 구조화된 시맨틱 인지를 결합합니다.

- [**ai**](https://github.com/vercel/ai) `★ 26825` - ai: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: 실시간 도메인 원격 측정 데이터를 수집하여 자동 실행 또는 리스크 경고를 트리거.
  - 💡 **핵심 장점**: 초 단위의 미션 크리티컬 워크플로에 구조화된 시맨틱 인지를 결합합니다.

- [**pydantic-ai**](https://github.com/pydantic/pydantic-ai) `★ 20027` - pydantic-ai: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: 실시간 도메인 원격 측정 데이터를 수집하여 자동 실행 또는 리스크 경고를 트리거.
  - 💡 **핵심 장점**: 초 단위의 미션 크리티컬 워크플로에 구조화된 시맨틱 인지를 결합합니다.

- [**eliza**](https://github.com/elizaOS/eliza) `★ 19359` - eliza: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: 실시간 도메인 원격 측정 데이터를 수집하여 자동 실행 또는 리스크 경고를 트리거.
  - 💡 **핵심 장점**: 초 단위의 미션 크리티컬 워크플로에 구조화된 시맨틱 인지를 결합합니다.

- [**langchainjs**](https://github.com/langchain-ai/langchainjs) `★ 18207` - langchainjs: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: 실시간 도메인 원격 측정 데이터를 수집하여 자동 실행 또는 리스크 경고를 트리거.
  - 💡 **핵심 장점**: 초 단위의 미션 크리티컬 워크플로에 구조화된 시맨틱 인지를 결합합니다.

- [**ax**](https://github.com/ax-llm/ax) `★ 2926` - ax: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: 실시간 도메인 원격 측정 데이터를 수집하여 자동 실행 또는 리스크 경고를 트리거.
  - 💡 **핵심 장점**: 초 단위의 미션 크리티컬 워크플로에 구조화된 시맨틱 인지를 결합합니다.

---

<a id="cli-pipelines-ko"></a>
## 💻 CLI 및 자동화 파이프라인

*터미널 유틸리티, 셸 파이프 및 CI/CD 워크플로에 시맨틱 판단을 결합한 도구.*

- [**jev-voice-browser**](https://github.com/moritzkremb/jev-voice-browser) `★ 35` - Control a real browser with sub-300ms voice commands, using Jev to resolve intent and target elements before sentences finish.
  - 🎯 **Jev의 역할**: 발화당 약 300ms 내에 음성 입력을 대상 DOM 컨트롤 및 액션으로 분류.
  - 💡 **핵심 장점**: 말이 끝나기도 전에 동작을 개시할 정도로 빠른 음성 기반 브라우징을 지원합니다.

- [**supercov**](https://github.com/supercorp-ai/supercov) `★ 32` - Code quality and test coverage for coding agents: Jev scores each source file so the agent knows what to fix first. Coverage runs locally with no account.
  - 🎯 **Jev의 역할**: 단일 요청으로 각 소스 파일의 12개 Noul 속성을 조회하며, CLI에서 점수 계산과 파일 정렬을 수행.
  - 💡 **핵심 장점**: 점수는 파일별로 검증 가능한 속성으로 분해되며, 콘텐츠에 따라 응답이 캐싱됩니다.

- [**hono-jev-router**](https://github.com/yusukebe/hono-jev-router) `★ 19` - Semantic HTTP request router for Hono applications powered by TypeSafe Jev discrete classifications.
  - 🎯 **Jev의 역할**: 정적 URL 경로가 아닌 시맨틱 의미를 기반으로 수신 HTTP 요청을 라우팅.
  - 💡 **핵심 장점**: 경량 엣지 및 서버리스 웹 API에 의도 기반 라우팅을 내장합니다.

- [**jev-playground**](https://github.com/mizchi/jev-playground) `★ 14` - jev-playground: Command-line utility embedding Jev decision logic directly into Unix pipes and CI scripts.
  - 🎯 **Jev의 역할**: 표준 입력 스트림에 실시간 시맨틱 분류 및 필터링을 적용.
  - 💡 **핵심 장점**: 셸 워크플로 및 CI/CD에 무의존성 시맨틱 가드레일을 내장합니다.

- [**openjev**](https://github.com/razorback16/openjev) `★ 14` - Open-source, self-hostable Jev-compatible System One decision server built on DiffusionGemma.
  - 🎯 **Jev의 역할**: TypeSafe API 규격에 맞는 Choice, Score, Noul 구조화 추론 요청을 처리.
  - 💡 **핵심 장점**: 로컬 Jev 호환 의사결정 루프를 위한 즉시 교체 가능한 오픈소스 대안을 제공합니다.

- [**SemDecide**](https://github.com/sharziki/semdecide) `★ 5` - Unix command-line utility bringing Jev into terminal pipes and CI pipelines for semantic filtering and scoring.
  - 🎯 **Jev의 역할**: Unix 텍스트 스트림에서 실시간 분류, 채점 및 임계값 가드를 직접 실행.
  - 💡 **핵심 장점**: Python 런타임 오버헤드 없이 Bash 스크립트 및 CI/CD에 직접 내장됩니다.

- [**jev-lm**](https://github.com/y0usaf/jev-lm) `★ 4` - jev-lm: Command-line utility embedding Jev decision logic directly into Unix pipes and CI scripts.
  - 🎯 **Jev의 역할**: 표준 입력 스트림에 실시간 시맨틱 분류 및 필터링을 적용.
  - 💡 **핵심 장점**: 셸 워크플로 및 CI/CD에 무의존성 시맨틱 가드레일을 내장합니다.

- [**typesafe-jev-workflow**](https://github.com/GiesN/typesafe-jev-workflow) `★ 4` - Async LangGraph workflow routing simulated emails to typed destination handlers via Jev Choice judgments.
  - 🎯 **Jev의 역할**: 수신 이메일 데이터를 이산 범주(예: 청구서 vs 일반 문의)로 분류.
  - 💡 **핵심 장점**: 장황한 프롬프트 오버헤드 없이 결정론적 상태 머신 분기를 제공합니다.

- [**jev-chat**](https://github.com/adhyaay-karnwal/jev-chat) `★ 3` - jev-chat: Command-line utility embedding Jev decision logic directly into Unix pipes and CI scripts.
  - 🎯 **Jev의 역할**: 표준 입력 스트림에 실시간 시맨틱 분류 및 필터링을 적용.
  - 💡 **핵심 장점**: 셸 워크플로 및 CI/CD에 무의존성 시맨틱 가드레일을 내장합니다.

- [**jev-cli**](https://github.com/tumf/jev-cli) `★ 2` - jev-cli: Command-line utility embedding Jev decision logic directly into Unix pipes and CI scripts.
  - 🎯 **Jev의 역할**: 표준 입력 스트림에 실시간 시맨틱 분류 및 필터링을 적용.
  - 💡 **핵심 장점**: 셸 워크플로 및 CI/CD에 무의존성 시맨틱 가드레일을 내장합니다.

- [**jev-pref**](https://github.com/doeixd/jev-pref) `★ 2` - Turn AGENTS.md preferences into a fast, Jev-powered AI linter: define project-specific review rules in jev-pref.json, check hunks, staged files or PRs with Jev, and feed findings back to your coding agent.
  - 🎯 **Jev의 역할**: 각 환경설정 규칙과 코드 변경 헝크에 대해 해당 변경이 규칙을 위반하는지 판정.
  - 💡 **핵심 장점**: pre-commit, PR 및 에이전트 워크플로를 위한 CLI 도구(차단 vs 권고 결과 분리).

- [**jev-system-one**](https://github.com/haseeb-heaven/jev-system-one) `★ 2` - jev-system-one: Command-line utility embedding Jev decision logic directly into Unix pipes and CI scripts.
  - 🎯 **Jev의 역할**: 표준 입력 스트림에 실시간 시맨틱 분류 및 필터링을 적용.
  - 💡 **핵심 장점**: 셸 워크플로 및 CI/CD에 무의존성 시맨틱 가드레일을 내장합니다.

- [**jevcal**](https://github.com/abhixhek/jevcal) `★ 2` - Calibration and drift-detection toolkit for typed decision models against frontier LLM teachers.
  - 🎯 **Jev의 역할**: 보정 곡선, 최적 신뢰도 임계값 및 시간에 따른 분포 드리프트를 계산.
  - 💡 **핵심 장점**: 신뢰도 유효성을 체계적으로 검증하여 의사결정 품질 저하를 방지합니다.

- [**pi-fast-jev-compaction**](https://github.com/joelhooks/pi-fast-jev-compaction) `★ 2` - pi-fast-jev-compaction: Command-line utility embedding Jev decision logic directly into Unix pipes and CI scripts.
  - 🎯 **Jev의 역할**: 표준 입력 스트림에 실시간 시맨틱 분류 및 필터링을 적용.
  - 💡 **핵심 장점**: 셸 워크플로 및 CI/CD에 무의존성 시맨틱 가드레일을 내장합니다.

- [**todo-jev**](https://github.com/maker-KK/todo-jev) `★ 2` - Intelligent task classifier and 3-tier routing engine organizing todo items via Jev decisions.
  - 🎯 **Jev의 역할**: 작업 메모를 우선순위 등급, 실행 컨텍스트 및 일정 버킷으로 자동 분류.
  - 💡 **핵심 장점**: 100ms 미만의 응답 속도로 백로그 정리 및 작업 우선순위 지정을 자동화합니다.

- [**ask-jev**](https://github.com/omni-/ask-jev) `★ 1` - ask-jev: Command-line utility embedding Jev decision logic directly into Unix pipes and CI scripts.
  - 🎯 **Jev의 역할**: 표준 입력 스트림에 실시간 시맨틱 분류 및 필터링을 적용.
  - 💡 **핵심 장점**: 셸 워크플로 및 CI/CD에 무의존성 시맨틱 가드레일을 내장합니다.

- [**is-odd-jev**](https://github.com/alxcrt/is-odd-jev) `★ 1` - is-odd-jev: Command-line utility embedding Jev decision logic directly into Unix pipes and CI scripts.
  - 🎯 **Jev의 역할**: 표준 입력 스트림에 실시간 시맨틱 분류 및 필터링을 적용.
  - 💡 **핵심 장점**: 셸 워크플로 및 CI/CD에 무의존성 시맨틱 가드레일을 내장합니다.

- [**jev-askable-arm**](https://github.com/TarunTomar122/jev-askable-arm) `★ 1` - Robot arm manipulation controller selecting discrete action primitives and target objects via high-speed Jev decisions.
  - 🎯 **Jev의 역할**: 시뮬레이션 상태를 기반으로 이산 로봇 기본 스킬과 목표 좌표를 선택.
  - 💡 **핵심 장점**: 고수준 이산 스킬 선택과 저수준 PD 모터 제어를 분리합니다.

- [**jev-cli**](https://github.com/jtsang4/jev-cli) `★ 1` - jev-cli: Command-line utility embedding Jev decision logic directly into Unix pipes and CI scripts.
  - 🎯 **Jev의 역할**: 표준 입력 스트림에 실시간 시맨틱 분류 및 필터링을 적용.
  - 💡 **핵심 장점**: 셸 워크플로 및 CI/CD에 무의존성 시맨틱 가드레일을 내장합니다.

- [**jev-cli**](https://github.com/Nasrallah-AL/jev-cli) `★ 1` - Command-line interface for testing, dry-running, and piping structured Jev decisions in shell pipelines.
  - 🎯 **Jev의 역할**: 표준 입력에서 타입화된 Jev 쿼리를 실행하고 파이프용 JSON 또는 구조화 종료 코드를 반환.
  - 💡 **핵심 장점**: 표준 Bash 및 CI 스크립트에 System One 의사결정 게이트를 매끄럽게 결합합니다.

- [**jev-code**](https://github.com/rhighs/jev-code) `★ 1` - jev-code: Command-line utility embedding Jev decision logic directly into Unix pipes and CI scripts.
  - 🎯 **Jev의 역할**: 표준 입력 스트림에 실시간 시맨틱 분류 및 필터링을 적용.
  - 💡 **핵심 장점**: 셸 워크플로 및 CI/CD에 무의존성 시맨틱 가드레일을 내장합니다.

- [**jev-synergy-screening**](https://github.com/PistachioAIHQ/jev-synergy-screening) `★ 1` - High-throughput biomedical literature abstract triage pipeline for systematic reviews using typed Jev decisions.
  - 🎯 **Jev의 역할**: 논문 제목 및 초록(TIAB)을 평가하여 연관성을 분류하고 포함 확률을 채점.
  - 💡 **핵심 장점**: 고속 시맨틱 사전 필터링으로 체계적 문헌 검토 파이프라인을 대폭 가속합니다.

- [**LightJev**](https://github.com/rongxinzy/LightJev) `★ 1` - Lightweight training and evaluation framework for typed decision backbones, exploring CE/Brier loss on offline decision tasks.
  - 🎯 **Jev의 역할**: 벤치마크 데이터셋 전반에서 후보 확률 및 이산 선택 정확도를 평가.
  - 💡 **핵심 장점**: 소형 System One 의사결정 모델의 오프라인 실험 및 벤치마크 평가를 지원합니다.

- [**pi-jev-compaction**](https://github.com/Wang-auspicious/pi-jev-compaction) `★ 1` - Context compaction utility for Pi retaining critical instructions and tool records via Jev scoring.
  - 🎯 **Jev의 역할**: 이전 도구 호출의 유용성을 채점하고 모델 입력 전에 불필요한 출력을 사전 필터링.
  - 💡 **핵심 장점**: 장시간 다단계 코딩 세션에서도 에이전트 메모리를 깨끗하게 유지합니다.

- [**TypeSafe AI Playground**](https://github.com/markjaquith/typesafe-ai-playground) `★ 1` - Rust CLI playground experimenting with PHI detection, code comment review, and sentiment classification.
  - 🎯 **Jev의 역할**: 단문 텍스트에 대해 서브 밀리초 단위의 시맨틱 패턴 매칭과 속성 판정을 실행.
  - 💡 **핵심 장점**: 로컬 환경에서 Jev 의사결정 프리미티브를 테스트하려는 개발자에게 이상적인 샌드박스입니다.

- [**jevscript**](https://github.com/amberwhitehead/jevscript) - jevscript: Command-line utility embedding Jev decision logic directly into Unix pipes and CI scripts.
  - 🎯 **Jev의 역할**: 표준 입력 스트림에 실시간 시맨틱 분류 및 필터링을 적용.
  - 💡 **핵심 장점**: 셸 워크플로 및 CI/CD에 무의존성 시맨틱 가드레일을 내장합니다.

---

<a id="data-search-ko"></a>
## 💾 데이터베이스 확장 및 시맨틱 검색

*플러그인 설치가 필요 없는 네이티브 SQL 시맨틱 확장, 행 단위 필터링 및 리랭킹.*

- [**pg-jev**](https://github.com/realZachi/pg-jev) `★ 137` - pg-jev: Semantic query and classification layer applied over tabular databases and search indexes.
  - 🎯 **Jev의 역할**: 테이블 레코드에 대해 배치 시맨틱 매칭과 조건 평가를 수행.
  - 💡 **핵심 장점**: 기존 SQL 쿼리 내에서 자연어 시맨틱 필터링을 직접 수행할 수 있습니다.

- [**jev-search**](https://github.com/superagents-lab/jev-search) `★ 38` - jev-search: Semantic query and classification layer applied over tabular databases and search indexes.
  - 🎯 **Jev의 역할**: 테이블 레코드에 대해 배치 시맨틱 매칭과 조건 평가를 수행.
  - 💡 **핵심 장점**: 기존 SQL 쿼리 내에서 자연어 시맨틱 필터링을 직접 수행할 수 있습니다.

- [**jevql**](https://github.com/kylemclaren/jevql) `★ 2` - Semantic SQL for vanilla Postgres without database extensions. Query rows with WHERE jev(), jev_prob, jev_choice, and jev_score via CLI and Go/TS/Python SDKs.
  - 🎯 **Jev의 역할**: Noul, Choice, Score 판정을 활용하여 테이블 후보 행을 평가하고 클라이언트 시맨틱 필터링 및 정렬을 수행.
  - 💡 **핵심 장점**: 자동 배치, 동시성 풀링, 콘텐츠 주소 지정 응답 캐싱을 지원하는 2패스 클라이언트 실행.
  - 🌐 [라이브 데모](https://jevql.fly.dev/)

- [**llama-index-jev**](https://github.com/WiktorB2004/llama-index-jev) `★ 2` - Reranker and semantic router for LlamaIndex leveraging Jev for typed document scoring and choice.
  - 🎯 **Jev의 역할**: 후보 문서의 연관도를 채점하고 특화된 인덱스 컬렉션으로 쿼리를 라우팅.
  - 💡 **핵심 장점**: 무거운 판사 모델(LLM-as-a-judge) 리랭킹 대비 훨씬 빠르고 경제적인 대안을 제공합니다.

---

<a id="browser-os-action-ko"></a>
## 🌐 브라우저 및 데스크톱 자동화

*웹 접근성 트리 분석, 자율 브라우징 및 데스크톱 GUI 제어를 위한 에이전트.*

- [**cua**](https://github.com/trycua/cua) `★ 23548` - cua: Open-source computer use infrastructure using jev-use driver for discrete desktop and browser actions, with open-source CUA-S1 model family.
  - 🎯 **Jev의 역할**: 경계가 지정된 UI 상태와 화면 영역 테이블을 평가하여 구체적인 클릭, 포커스, 단축키 동작을 결정.
  - 💡 **핵심 장점**: OS 제어를 빠른 이산 동작으로 분해하여 느린 멀티모달 계획 루프를 우회.

- [**jev-ultrafast**](https://github.com/browser-use/jev-ultrafast) `★ 4673` - Ultra-fast browser agent using Jev for per-step DOM action decisions. Complete Google Flights search in ~7.1s.
  - 🎯 **Jev의 역할**: 단일 요청으로 다음 액션과 대상 DOM 요소를 결정하고, 텍스트 입력만 텍스트 모델에 위임.
  - 💡 **핵심 장점**: UI 탐색과 텍스트 생성을 분리하여 중복 페이지 평가를 대폭 줄입니다.

- [**jev-desktop**](https://github.com/lahfir/agent-desktop) `★ 1266` - jev-desktop: Automates browser or desktop interactions by turning UI state into discrete choices.
  - 🎯 **Jev의 역할**: DOM 및 접근성 트리 상태를 실시간으로 평가하여 대상 컨트롤과 다음 동작을 선택.
  - 💡 **핵심 장점**: 의사결정과 실행을 분리하여 검증 가능하고 번개처럼 빠른 UI 탐색을 구현합니다.

- [**omg.dev**](https://github.com/BennyKok/omg.dev) `★ 531` - omg.dev: Automates browser or desktop interactions by turning UI state into discrete choices.
  - 🎯 **Jev의 역할**: DOM 및 접근성 트리 상태를 실시간으로 평가하여 대상 컨트롤과 다음 동작을 선택.
  - 💡 **핵심 장점**: 의사결정과 실행을 분리하여 검증 가능하고 번개처럼 빠른 UI 탐색을 구현합니다.

- [**typesafe-computer-use**](https://github.com/awlevin/typesafe-computer-use) `★ 237` - typesafe-computer-use: Ultra-low-cost macOS computer use combining deterministic OCR with Jev discrete action choices at ~$0.0002 per step.
  - 🎯 **Jev의 역할**: 목표에 맞춰 화면 요소 목록을 비교하고 후보군 중에서 다음 원자적 클릭 또는 키 입력을 선택.
  - 💡 **핵심 장점**: 멀티모달 LLM으로 고해상도 스크린샷 전송을 방지하여 막대한 토큰 비용과 이미지 처리 지연을 제거.

- [**mobile-jev**](https://github.com/droidrun/mobile-jev) `★ 93` - mobile-jev: Automates browser or desktop interactions by turning UI state into discrete choices.
  - 🎯 **Jev의 역할**: DOM 및 접근성 트리 상태를 실시간으로 평가하여 대상 컨트롤과 다음 동작을 선택.
  - 💡 **핵심 장점**: 의사결정과 실행을 분리하여 검증 가능하고 번개처럼 빠른 UI 탐색을 구현합니다.

- [**jev-use**](https://github.com/vlad-terin/jev-use) `★ 76` - jev-use: Automates browser or desktop interactions by turning UI state into discrete choices.
  - 🎯 **Jev의 역할**: DOM 및 접근성 트리 상태를 실시간으로 평가하여 대상 컨트롤과 다음 동작을 선택.
  - 💡 **핵심 장점**: 의사결정과 실행을 분리하여 검증 가능하고 번개처럼 빠른 UI 탐색을 구현합니다.

- [**jev-browser**](https://github.com/jkudish/jev-browser) `★ 70` - jev-browser: Automates browser or desktop interactions by turning UI state into discrete choices.
  - 🎯 **Jev의 역할**: DOM 및 접근성 트리 상태를 실시간으로 평가하여 대상 컨트롤과 다음 동작을 선택.
  - 💡 **핵심 장점**: 의사결정과 실행을 분리하여 검증 가능하고 번개처럼 빠른 UI 탐색을 구현합니다.

- [**unclutter**](https://github.com/kitze/unclutter) `★ 66` - unclutter: Automates browser or desktop interactions by turning UI state into discrete choices.
  - 🎯 **Jev의 역할**: DOM 및 접근성 트리 상태를 실시간으로 평가하여 대상 컨트롤과 다음 동작을 선택.
  - 💡 **핵심 장점**: 의사결정과 실행을 분리하여 검증 가능하고 번개처럼 빠른 UI 탐색을 구현합니다.

- [**AskJev**](https://github.com/ranjan2829/AskJev) `★ 2` - AskJev: Automates browser or desktop interactions by turning UI state into discrete choices.
  - 🎯 **Jev의 역할**: DOM 및 접근성 트리 상태를 실시간으로 평가하여 대상 컨트롤과 다음 동작을 선택.
  - 💡 **핵심 장점**: 의사결정과 실행을 분리하여 검증 가능하고 번개처럼 빠른 UI 탐색을 구현합니다.

- [**computer-use-jev**](https://github.com/paulsmith/computer-use-jev) `★ 2` - computer-use-jev: Automates browser or desktop interactions by turning UI state into discrete choices.
  - 🎯 **Jev의 역할**: DOM 및 접근성 트리 상태를 실시간으로 평가하여 대상 컨트롤과 다음 동작을 선택.
  - 💡 **핵심 장점**: 의사결정과 실행을 분리하여 검증 가능하고 번개처럼 빠른 UI 탐색을 구현합니다.

- [**aside-jev**](https://github.com/himomohi/aside-jev) `★ 1` - aside-jev: Automates browser or desktop interactions by turning UI state into discrete choices.
  - 🎯 **Jev의 역할**: DOM 및 접근성 트리 상태를 실시간으로 평가하여 대상 컨트롤과 다음 동작을 선택.
  - 💡 **핵심 장점**: 의사결정과 실행을 분리하여 검증 가능하고 번개처럼 빠른 UI 탐색을 구현합니다.

- [**jev-browser**](https://github.com/tontoko/jev-browser) `★ 1` - jev-browser: Automates browser or desktop interactions by turning UI state into discrete choices.
  - 🎯 **Jev의 역할**: DOM 및 접근성 트리 상태를 실시간으로 평가하여 대상 컨트롤과 다음 동작을 선택.
  - 💡 **핵심 장점**: 의사결정과 실행을 분리하여 검증 가능하고 번개처럼 빠른 UI 탐색을 구현합니다.

- [**ego-jev**](https://github.com/phd-peter/ego-jev) - Integrates Jev with Ego Lite browser agent. Reads semantic snapshots to decide DOM clicks and wheel scrolls, delegating text entry to LLMs.
  - 🎯 **Jev의 역할**: 페이지 스냅샷에서 후보 액션 공간을 평가하여 단일 요청으로 대상 컨트롤과 액션 유형을 선택.
  - 💡 **핵심 장점**: 초 단위 미만의 브라우저 루프를 위해 무거운 비전 모델을 경량 시맨틱 스냅샷으로 대체합니다.

- [**grokskill-jev**](https://github.com/AE-AlphaEdge/grokskill-jev) - grokskill-jev: Automates browser or desktop interactions by turning UI state into discrete choices.
  - 🎯 **Jev의 역할**: DOM 및 접근성 트리 상태를 실시간으로 평가하여 대상 컨트롤과 다음 동작을 선택.
  - 💡 **핵심 장점**: 의사결정과 실행을 분리하여 검증 가능하고 번개처럼 빠른 UI 탐색을 구현합니다.

- [**jev-macos-loop**](https://github.com/jcpsimmons/jev-macos-loop) - jev-macos-loop: Automates browser or desktop interactions by turning UI state into discrete choices.
  - 🎯 **Jev의 역할**: DOM 및 접근성 트리 상태를 실시간으로 평가하여 대상 컨트롤과 다음 동작을 선택.
  - 💡 **핵심 장점**: 의사결정과 실행을 분리하여 검증 가능하고 번개처럼 빠른 UI 탐색을 구현합니다.

---

<a id="context-gc-filter-ko"></a>
## 🧹 컨텍스트 압축 및 가비지 컬렉션

*토큰 절약, 지능형 컨텍스트 정리 및 소셜 타임라인의 노이즈 필터링.*

- [**fast-jev-compaction**](https://github.com/tamaratran/fast-jev-compaction) `★ 2645` - fast-jev-compaction: Prunes extraneous tool outputs, logs, and grep results before feeding LLM context.
  - 🎯 **Jev의 역할**: 현재 작업 목표와의 연관성을 라인 단위로 판단하여 불필요한 토큰 노이즈를 제거.
  - 💡 **핵심 장점**: 컨텍스트 윈도우 대역폭을 보존하고 장시간 세션에서의 추론 성능 저하를 방지합니다.

- [**skillbox**](https://github.com/kitze/skillbox) `★ 149` - skillbox: Prunes extraneous tool outputs, logs, and grep results before feeding LLM context.
  - 🎯 **Jev의 역할**: 현재 작업 목표와의 연관성을 라인 단위로 판단하여 불필요한 토큰 노이즈를 제거.
  - 💡 **핵심 장점**: 컨텍스트 윈도우 대역폭을 보존하고 장시간 세션에서의 추론 성능 저하를 방지합니다.

- [**bluenoise**](https://github.com/rokcso/bluenoise) `★ 82` - X/Twitter browser extension filtering noise. Uses local rules first, batching ambiguous replies to Jev for noise probability scoring (filters at >=0.9).
  - 🎯 **Jev의 역할**: 요청당 최대 25개의 후보 답글을 배치 처리하고 Noul 노이즈 확률을 판정하여 DOM 표시 여부를 결정.
  - 💡 **핵심 장점**: X API 의존성 없이 고속 로컬 매칭과 Jev 시맨틱 게이트를 결합하여 타임라인을 정화합니다.

- [**Winnow**](https://github.com/GhalebDweikat/winnow) `★ 13` - Context garbage collector for Claude Code pruning voluminous bash, grep, and file outputs.
  - 🎯 **Jev의 역할**: 터미널 및 도구 출력을 즉시 필터링하여 현재 버그와 직접 관련된 라인만 격리.
  - 💡 **핵심 장점**: 노이즈 로그로 인한 컨텍스트 포화 및 에이전트 추론 성능 저하를 방지합니다.

- [**jevlogs**](https://github.com/reachjalil/jevlogs) `★ 5` - jevlogs: Prunes extraneous tool outputs, logs, and grep results before feeding LLM context.
  - 🎯 **Jev의 역할**: 현재 작업 목표와의 연관성을 라인 단위로 판단하여 불필요한 토큰 노이즈를 제거.
  - 💡 **핵심 장점**: 컨텍스트 윈도우 대역폭을 보존하고 장시간 세션에서의 추론 성능 저하를 방지합니다.

- [**jev-skill-gate**](https://github.com/ShivamPansuriya/jev-skill-gate) `★ 2` - jev-skill-gate: Prunes extraneous tool outputs, logs, and grep results before feeding LLM context.
  - 🎯 **Jev의 역할**: 현재 작업 목표와의 연관성을 라인 단위로 판단하여 불필요한 토큰 노이즈를 제거.
  - 💡 **핵심 장점**: 컨텍스트 윈도우 대역폭을 보존하고 장시간 세션에서의 추론 성능 저하를 방지합니다.

- [**jev-context**](https://github.com/zbush/jev-context) `★ 1` - jev-context: Prunes extraneous tool outputs, logs, and grep results before feeding LLM context.
  - 🎯 **Jev의 역할**: 현재 작업 목표와의 연관성을 라인 단위로 판단하여 불필요한 토큰 노이즈를 제거.
  - 💡 **핵심 장점**: 컨텍스트 윈도우 대역폭을 보존하고 장시간 세션에서의 추론 성능 저하를 방지합니다.

---

<a id="security-guardrails-ko"></a>
## 🛡️ 보안 및 가드레일

*프롬프트 주입 방어, 콘텐츠 검열, 위험도 평가 및 정책 검증 가드레일.*

- [**agentgateway**](https://github.com/agentgateway/agentgateway) `★ 4916` - agentgateway: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: 실시간 도메인 원격 측정 데이터를 수집하여 자동 실행 또는 리스크 경고를 트리거.
  - 💡 **핵심 장점**: 초 단위의 미션 크리티컬 워크플로에 구조화된 시맨틱 인지를 결합합니다.

- [**interlinked-cli**](https://github.com/QuentinCody/interlinked-cli) `★ 177` - interlinked-cli: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: 실시간 도메인 원격 측정 데이터를 수집하여 자동 실행 또는 리스크 경고를 트리거.
  - 💡 **핵심 장점**: 초 단위의 미션 크리티컬 워크플로에 구조화된 시맨틱 인지를 결합합니다.

- [**pi-jev**](https://github.com/y0usaf/pi-jev) `★ 126` - pi-jev: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: 실시간 도메인 원격 측정 데이터를 수집하여 자동 실행 또는 리스크 경고를 트리거.
  - 💡 **핵심 장점**: 초 단위의 미션 크리티컬 워크플로에 구조화된 시맨틱 인지를 결합합니다.

- [**pi-warden**](https://github.com/DevMortimer/pi-warden) `★ 61` - pi-warden: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: 실시간 도메인 원격 측정 데이터를 수집하여 자동 실행 또는 리스크 경고를 트리거.
  - 💡 **핵심 장점**: 초 단위의 미션 크리티컬 워크플로에 구조화된 시맨틱 인지를 결합합니다.

- [**pi-jev-auto-mode**](https://github.com/jomatsu/pi-jev-auto-mode) `★ 9` - pi-jev-auto-mode: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: 실시간 도메인 원격 측정 데이터를 수집하여 자동 실행 또는 리스크 경고를 트리거.
  - 💡 **핵심 장점**: 초 단위의 미션 크리티컬 워크플로에 구조화된 시맨틱 인지를 결합합니다.

- [**Safer with Jev**](https://github.com/andrelandgraf/typesafe-on-neon) `★ 3` - Serverless request router on Neon evaluating incoming queries and dispatching to specialized frontier models.
  - 🎯 **Jev의 역할**: 콜드 스타트 없이 사용자 의도(단순 Q&A vs 복잡한 코딩 vs 추론)를 즉시 분류.
  - 💡 **핵심 장점**: 모델 계층화를 최적화하면서 전역 지연 시간을 최소화합니다.

- [**jev-guard**](https://github.com/leepokai/jev-guard) `★ 2` - jev-guard: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: 실시간 도메인 원격 측정 데이터를 수집하여 자동 실행 또는 리스크 경고를 트리거.
  - 💡 **핵심 장점**: 초 단위의 미션 크리티컬 워크플로에 구조화된 시맨틱 인지를 결합합니다.

- [**jev-judgment**](https://github.com/HyunjunJeon/jev-judgment) `★ 2` - jev-judgment: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: 실시간 도메인 원격 측정 데이터를 수집하여 자동 실행 또는 리스크 경고를 트리거.
  - 💡 **핵심 장점**: 초 단위의 미션 크리티컬 워크플로에 구조화된 시맨틱 인지를 결합합니다.

- [**oc-auto-perms**](https://github.com/OpeOginni/oc-plugins) `★ 2` - oc-auto-perms: Intent-aware permission plugin for OpenCode V2 using natural language policies evaluated by Jev across shell and network tool invocations.
  - 🎯 **Jev의 역할**: 사용자 대화 이력과 도구 인수를 종합 평가하여 실행 의도가 보안 정책 규칙을 준수하는지 판정.
  - 💡 **핵심 장점**: 정적 정규식 매칭을 초월: 도구의 종류와 무관하게 시맨틱 의도를 통해 보안 정책 위반을 감지.

- [**jev-tool-permissions**](https://github.com/NicolasMontone/jev-tool-permissions) `★ 1` - jev-tool-permissions: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: 실시간 도메인 원격 측정 데이터를 수집하여 자동 실행 또는 리스크 경고를 트리거.
  - 💡 **핵심 장점**: 초 단위의 미션 크리티컬 워크플로에 구조화된 시맨틱 인지를 결합합니다.

---

<a id="mcp-integrations-ko"></a>
## 🧩 MCP 프로토콜 및 도구 확장

*Model Context Protocol(MCP)을 준수하는 표준 의사결정 서버 및 도구 엔드포인트.*

- [**vellum-assistant**](https://github.com/vellum-ai/vellum-assistant) `★ 1285` - vellum-assistant: Exposes Jev low-latency decision primitives via the Model Context Protocol (MCP).
  - 🎯 **Jev의 역할**: 외부 에이전트 환경을 위해 온디맨드 Choice·Score·Noul 의사결정 도구를 제공.
  - 💡 **핵심 장점**: 기존 에이전트 스택에 저지연 구조화 의사결정을 손쉽게 통합합니다.

- [**ai**](https://github.com/hackclub/ai) `★ 133` - ai: Exposes Jev low-latency decision primitives via the Model Context Protocol (MCP).
  - 🎯 **Jev의 역할**: 외부 에이전트 환경을 위해 온디맨드 Choice·Score·Noul 의사결정 도구를 제공.
  - 💡 **핵심 장점**: 기존 에이전트 스택에 저지연 구조화 의사결정을 손쉽게 통합합니다.

- [**taskuary**](https://github.com/ldbumble/taskuary) `★ 102` - taskuary: Exposes Jev low-latency decision primitives via the Model Context Protocol (MCP).
  - 🎯 **Jev의 역할**: 외부 에이전트 환경을 위해 온디맨드 Choice·Score·Noul 의사결정 도구를 제공.
  - 💡 **핵심 장점**: 기존 에이전트 스택에 저지연 구조화 의사결정을 손쉽게 통합합니다.

- [**jev-mcp**](https://github.com/jkudish/jev-mcp) `★ 67` - Pragmatic MCP utility suite packaging real-time fact-checking, prompt injection guards, and semantic reranking.
  - 🎯 **Jev의 역할**: 출력 안전성과 사실 일치성을 즉시 바이너리 검증하고 후보 리랭킹을 수행.
  - 💡 **핵심 장점**: 프론티어 모델 대비 극히 저렴한 비용으로 경량 안전 가드레일을 적용합니다.

- [**typesafe-mcp**](https://github.com/itsmostafa/typesafe-mcp) `★ 59` - MCP server connecting Jev directly into Claude Code, Claude Desktop, and Codex as a decision co-processor.
  - 🎯 **Jev의 역할**: 자율 LLM 에이전트에 구조화된 판단(Choice / Score / Noul)을 온디맨드로 제공.
  - 💡 **핵심 장점**: 프론티어 모델 지연 없이 에이전트가 100ms 미만으로 다중 선택 결정을 내리도록 지원합니다.

- [**synkora-ai**](https://github.com/getsynkora/synkora-ai) `★ 34` - synkora-ai: Exposes Jev low-latency decision primitives via the Model Context Protocol (MCP).
  - 🎯 **Jev의 역할**: 외부 에이전트 환경을 위해 온디맨드 Choice·Score·Noul 의사결정 도구를 제공.
  - 💡 **핵심 장점**: 기존 에이전트 스택에 저지연 구조화 의사결정을 손쉽게 통합합니다.

- [**Jevbridge**](https://github.com/gamesonrblx/Jevbridge) `★ 13` - Jevbridge: Exposes Jev low-latency decision primitives via the Model Context Protocol (MCP).
  - 🎯 **Jev의 역할**: 외부 에이전트 환경을 위해 온디맨드 Choice·Score·Noul 의사결정 도구를 제공.
  - 💡 **핵심 장점**: 기존 에이전트 스택에 저지연 구조화 의사결정을 손쉽게 통합합니다.

- [**cline-plugin-jev-browser**](https://github.com/abeatrix/cline-plugin-jev-browser) `★ 12` - cline-plugin-jev-browser: Cline desktop browser plugin routing through Vercel AI Gateway to execute DOM element selection and sub-second clicks via Jev.
  - 🎯 **Jev의 역할**: 경량 DOM 트리와 작업 컨텍스트를 입력받아 페이지 상호작용 동작과 대상 선택자를 반환.
  - 💡 **핵심 장점**: 브라우저 동작을 타입 안전하고 결정론적인 열거형으로 제한하여 에이전트의 경로 이탈을 감소.

- [**jev**](https://github.com/dannote/jev) `★ 10` - jev: Exposes Jev low-latency decision primitives via the Model Context Protocol (MCP).
  - 🎯 **Jev의 역할**: 외부 에이전트 환경을 위해 온디맨드 Choice·Score·Noul 의사결정 도구를 제공.
  - 💡 **핵심 장점**: 기존 에이전트 스택에 저지연 구조화 의사결정을 손쉽게 통합합니다.

- [**jev-mcp**](https://github.com/blakestone-x/jev-mcp) `★ 7` - Pragmatic MCP utility suite packaging real-time fact-checking, prompt injection guards, and semantic reranking.
  - 🎯 **Jev의 역할**: 출력 안전성과 사실 일치성을 즉시 바이너리 검증하고 후보 리랭킹을 수행.
  - 💡 **핵심 장점**: 프론티어 모델 대비 극히 저렴한 비용으로 경량 안전 가드레일을 적용합니다.

- [**pi-jev**](https://github.com/TheoOliveira/pi-jev) `★ 6` - pi-jev: Exposes Jev low-latency decision primitives via the Model Context Protocol (MCP).
  - 🎯 **Jev의 역할**: 외부 에이전트 환경을 위해 온디맨드 Choice·Score·Noul 의사결정 도구를 제공.
  - 💡 **핵심 장점**: 기존 에이전트 스택에 저지연 구조화 의사결정을 손쉽게 통합합니다.

- [**zod-jev**](https://github.com/jomatsu/zod-jev) `★ 6` - zod-jev: Exposes Jev low-latency decision primitives via the Model Context Protocol (MCP).
  - 🎯 **Jev의 역할**: 외부 에이전트 환경을 위해 온디맨드 Choice·Score·Noul 의사결정 도구를 제공.
  - 💡 **핵심 장점**: 기존 에이전트 스택에 저지연 구조화 의사결정을 손쉽게 통합합니다.

- [**JevRouter**](https://github.com/BillionsBobby/JevRouter) `★ 4` - Local-first agent capability router coordinating models, tools, and subagents with Jev decision gates.
  - 🎯 **Jev의 역할**: 보안 및 권한 정책을 적용하면서 최적의 실행 에이전트와 도구를 선택.
  - 💡 **핵심 장점**: 이기종 에이전트 기능을 단일 타입화 라우팅 계층 아래로 통합합니다.

- [**daf-jev**](https://github.com/docxology/daf-jev) `★ 3` - daf-jev: Exposes Jev low-latency decision primitives via the Model Context Protocol (MCP).
  - 🎯 **Jev의 역할**: 외부 에이전트 환경을 위해 온디맨드 Choice·Score·Noul 의사결정 도구를 제공.
  - 💡 **핵심 장점**: 기존 에이전트 스택에 저지연 구조화 의사결정을 손쉽게 통합합니다.

- [**hermes-jev-approvals**](https://github.com/anpicasso/hermes-jev-approvals) `★ 3` - hermes-jev-approvals: Exposes Jev low-latency decision primitives via the Model Context Protocol (MCP).
  - 🎯 **Jev의 역할**: 외부 에이전트 환경을 위해 온디맨드 Choice·Score·Noul 의사결정 도구를 제공.
  - 💡 **핵심 장점**: 기존 에이전트 스택에 저지연 구조화 의사결정을 손쉽게 통합합니다.

- [**jevex**](https://github.com/jvsteiner/jevex) `★ 3` - jevex: Exposes Jev low-latency decision primitives via the Model Context Protocol (MCP).
  - 🎯 **Jev의 역할**: 외부 에이전트 환경을 위해 온디맨드 Choice·Score·Noul 의사결정 도구를 제공.
  - 💡 **핵심 장점**: 기존 에이전트 스택에 저지연 구조화 의사결정을 손쉽게 통합합니다.

- [**jevwire**](https://github.com/Brainwires/jevwire) `★ 3` - Agent decision layer providing an MCP server, embeddable library, and Claude Code escalation plugin.
  - 🎯 **Jev의 역할**: 작업 위험도와 복잡성을 평가하여 상위 모델로 에스컬레이션할 시점을 결정.
  - 💡 **핵심 장점**: 임베디드 의사결정 게이트를 통해 고비용 프론티어 모델의 불필요한 호출을 줄입니다.

- [**jev-mcp**](https://github.com/rashedInt32/jev-mcp) `★ 2` - Pragmatic MCP utility suite packaging real-time fact-checking, prompt injection guards, and semantic reranking.
  - 🎯 **Jev의 역할**: 출력 안전성과 사실 일치성을 즉시 바이너리 검증하고 후보 리랭킹을 수행.
  - 💡 **핵심 장점**: 프론티어 모델 대비 극히 저렴한 비용으로 경량 안전 가드레일을 적용합니다.

- [**jev-workbench**](https://github.com/molis-ai/jev-workbench) `★ 2` - jev-workbench: Exposes Jev low-latency decision primitives via the Model Context Protocol (MCP).
  - 🎯 **Jev의 역할**: 외부 에이전트 환경을 위해 온디맨드 Choice·Score·Noul 의사결정 도구를 제공.
  - 💡 **핵심 장점**: 기존 에이전트 스택에 저지연 구조화 의사결정을 손쉽게 통합합니다.

- [**laravel-typesafe-jev**](https://github.com/Butochnikov/laravel-typesafe-jev) `★ 2` - laravel-typesafe-jev: Exposes Jev low-latency decision primitives via the Model Context Protocol (MCP).
  - 🎯 **Jev의 역할**: 외부 에이전트 환경을 위해 온디맨드 Choice·Score·Noul 의사결정 도구를 제공.
  - 💡 **핵심 장점**: 기존 에이전트 스택에 저지연 구조화 의사결정을 손쉽게 통합합니다.

- [**codex-jev-compaction**](https://github.com/Wang-auspicious/codex-jev-compaction) `★ 1` - Jev-powered context curation skill for Codex generating compact, traceable task handoff packages.
  - 🎯 **Jev의 역할**: 이전 대화 단계와 도구 로그를 평가하여 에이전트 인수인계에 필수적인 컨텍스트를 분리.
  - 💡 **핵심 장점**: 프롬프트 토큰을 대폭 절약하면서 환각 없는 컴팩트한 인수인계 상태를 생성합니다.

- [**jev_ampcode**](https://github.com/thesammykins/jev_ampcode) `★ 1` - jev_ampcode: Exposes Jev low-latency decision primitives via the Model Context Protocol (MCP).
  - 🎯 **Jev의 역할**: 외부 에이전트 환경을 위해 온디맨드 Choice·Score·Noul 의사결정 도구를 제공.
  - 💡 **핵심 장점**: 기존 에이전트 스택에 저지연 구조화 의사결정을 손쉽게 통합합니다.

- [**jev-classifier**](https://github.com/felpsdev/jev-classifier) `★ 1` - Local tool-routing classifier and gateway for coding agents with decision logging.
  - 🎯 **Jev의 역할**: 프롬프트 의도를 평가하여 작업을 전문 도구 및 에이전트 플러그인으로 라우팅.
  - 💡 **핵심 장점**: 에이전트 도구 세트를 제어하여 도구 호출 난립을 방지하고 지연 시간을 줄입니다.

- [**jev-go**](https://github.com/Stumble/jev-go) `★ 1` - jev-go: Exposes Jev low-latency decision primitives via the Model Context Protocol (MCP).
  - 🎯 **Jev의 역할**: 외부 에이전트 환경을 위해 온디맨드 Choice·Score·Noul 의사결정 도구를 제공.
  - 💡 **핵심 장점**: 기존 에이전트 스택에 저지연 구조화 의사결정을 손쉽게 통합합니다.

- [**jev-go**](https://github.com/guillemus/jev-go) `★ 1` - jev-go: Exposes Jev low-latency decision primitives via the Model Context Protocol (MCP).
  - 🎯 **Jev의 역할**: 외부 에이전트 환경을 위해 온디맨드 Choice·Score·Noul 의사결정 도구를 제공.
  - 💡 **핵심 장점**: 기존 에이전트 스택에 저지연 구조화 의사결정을 손쉽게 통합합니다.

- [**jev-mcp**](https://github.com/BYK/jev-mcp) `★ 1` - Evaluation-first Model Context Protocol (MCP) server providing typed Jev decision tools.
  - 🎯 **Jev의 역할**: 보정된 Choice, Score, Noul 기능을 Claude Desktop 및 Cursor에 직접 제공.
  - 💡 **핵심 장점**: 모든 MCP 준수 에이전트에 즉시 사용 가능한 의사결정 프리미티브를 제공합니다.

- [**jev-resilience**](https://github.com/Vicente-MD/jev-resilience) `★ 1` - jev-resilience: Exposes Jev low-latency decision primitives via the Model Context Protocol (MCP).
  - 🎯 **Jev의 역할**: 외부 에이전트 환경을 위해 온디맨드 Choice·Score·Noul 의사결정 도구를 제공.
  - 💡 **핵심 장점**: 기존 에이전트 스택에 저지연 구조화 의사결정을 손쉽게 통합합니다.

- [**jevgo**](https://github.com/fgn/jevgo) `★ 1` - jevgo: Exposes Jev low-latency decision primitives via the Model Context Protocol (MCP).
  - 🎯 **Jev의 역할**: 외부 에이전트 환경을 위해 온디맨드 Choice·Score·Noul 의사결정 도구를 제공.
  - 💡 **핵심 장점**: 기존 에이전트 스택에 저지연 구조화 의사결정을 손쉽게 통합합니다.

- [**jevscan**](https://github.com/jevbook/jevscan) `★ 1` - On-chain token risk scanner providing typed EVM safety verdicts, rug risk, and liquidity health scores.
  - 🎯 **Jev의 역할**: 스마트 컨트랙트 바이트코드와 유동성 풀 지표를 평가하여 투자/주시/회피 등급을 산출.
  - 💡 **핵심 장점**: 실시간 DeFi 원격 측정과 즉각적인 머신 리스크 스코어링을 결합합니다.

---

<a id="codebase-graph-pathfinding-ko"></a>
## 🧭 코드베이스 분석 및 지식 그래프 탐색

*코드 의존성 탐색, AST 심볼 분석, 코드 리뷰 트리아지 및 지식 그래프 쿼리.*

- [**celesto**](https://github.com/CelestoAI/celesto) `★ 943` - celesto: Semantic exploration engine for codebases and knowledge graphs using beam search.
  - 🎯 **Jev의 역할**: 후보 파일 또는 지식 그래프 엣지에 연관성 확률을 부여하여 탐색 경로를 유도.
  - 💡 **핵심 장점**: 비싼 벡터 인덱싱 없이도 대상 코드와 관계를 단 몇 초 만에 특정합니다.

- [**Jev Review**](https://github.com/devagrawal09/jev-review) `★ 241` - Code review triage engine assessing correctness, security, reliability, and compatibility before deep review.
  - 🎯 **Jev의 역할**: 코드 변경 위험도를 사전 채점하여 프론티어 모델이 집중 검토할 고위험 청크를 격리.
  - 💡 **핵심 장점**: 단순 반복 차이점이 아닌 핵심적인 코드 변경에 고비용 모델 추론을 집중합니다.

- [**jev-review**](https://github.com/NiazMorshed2007/jev-review) `★ 111` - Code review triage engine assessing correctness, security, reliability, and compatibility before deep review.
  - 🎯 **Jev의 역할**: 코드 변경 위험도를 사전 채점하여 프론티어 모델이 집중 검토할 고위험 청크를 격리.
  - 💡 **핵심 장점**: 단순 반복 차이점이 아닌 핵심적인 코드 변경에 고비용 모델 추론을 집중합니다.

- [**neo4jev**](https://github.com/jexp/neo4jev) `★ 16` - Knowledge graph pathfinder scoring candidate edges with Jev and traversing paths via beam search.
  - 🎯 **Jev의 역할**: 저지연 탐색을 위해 후보 그래프 관계에 전이 확률을 할당.
  - 💡 **핵심 장점**: 멀티 홉 지식 그래프 추론 속도를 획기적으로 개선합니다.

- [**Blink**](https://github.com/ellipsis-dev/blink) `★ 14` - Semantic pathfinder navigating large codebases without vector indexes using beam search.
  - 🎯 **Jev의 역할**: 계층별로 후보 파일 및 디렉터리를 평가하여 관련 경로로 탐색 예산을 배분.
  - 💡 **핵심 장점**: 사전 인덱싱 없이도 대규모 저장소에서 관련 파일을 즉시 찾아냅니다.

- [**jev-code**](https://github.com/devagrawal09/jev-code) `★ 6` - jev-code: Semantic exploration engine for codebases and knowledge graphs using beam search.
  - 🎯 **Jev의 역할**: 후보 파일 또는 지식 그래프 엣지에 연관성 확률을 부여하여 탐색 경로를 유도.
  - 💡 **핵심 장점**: 비싼 벡터 인덱싱 없이도 대상 코드와 관계를 단 몇 초 만에 특정합니다.

- [**claude-jev**](https://github.com/buchmark/claude-jev) `★ 1` - claude-jev: Semantic exploration engine for codebases and knowledge graphs using beam search.
  - 🎯 **Jev의 역할**: 후보 파일 또는 지식 그래프 엣지에 연관성 확률을 부여하여 탐색 경로를 유도.
  - 💡 **핵심 장점**: 비싼 벡터 인덱싱 없이도 대상 코드와 관계를 단 몇 초 만에 특정합니다.

- [**jev-flash-review**](https://github.com/TheBous/jev-flash-review) `★ 1` - Local-first code review triage engine returning structured verdicts on candidate diff hunks.
  - 🎯 **Jev의 역할**: 비즈니스 의도에 따라 코드 차이점을 평가하여 정밀 리뷰 전 고위험 경로를 식별.
  - 💡 **핵심 장점**: 소스 코드의 프라이버시를 보장하면서 검토 범위를 고위험 변경점으로 좁힙니다.

- [**foreman-jev**](https://github.com/Shifty-Eye-Games/foreman-jev) - foreman-jev: Semantic exploration engine for codebases and knowledge graphs using beam search.
  - 🎯 **Jev의 역할**: 후보 파일 또는 지식 그래프 엣지에 연관성 확률을 부여하여 탐색 경로를 유도.
  - 💡 **핵심 장점**: 비싼 벡터 인덱싱 없이도 대상 코드와 관계를 단 몇 초 만에 특정합니다.

---

<a id="routing-cost-optimization-ko"></a>
## 🔀 모델 라우팅 및 비용 최적화

*작업 난이도 자동 분류, 계층형 모델 라우팅 및 API 비용 절감.*

- [**litellm**](https://github.com/BerriAI/litellm) `★ 59076` - litellm: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: 실시간 도메인 원격 측정 데이터를 수집하여 자동 실행 또는 리스크 경고를 트리거.
  - 💡 **핵심 장점**: 초 단위의 미션 크리티컬 워크플로에 구조화된 시맨틱 인지를 결합합니다.

- [**jev-model-router**](https://github.com/davila7/claude-code-templates) `★ 30779` - jev-model-router: Claude Code mod using Jev to evaluate task difficulty, reasoning effort, and blast radius in one call to route subagents dynamically.
  - 🎯 **Jev의 역할**: 작업 난이도 계층, 추론 깊이, 운영 환경 위험도를 병렬 평가하여 Claude Code에 최적의 모델 구성을 동적 주입.
  - 💡 **핵심 장점**: 단순 작업에 대한 과도한 비용 지출을 방지하면서 고위험 코드 변경에 대해 엄격한 고신뢰도 임계값을 강제.

- [**openchamber**](https://github.com/openchamber/openchamber) `★ 10038` - openchamber: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: 실시간 도메인 원격 측정 데이터를 수집하여 자동 실행 또는 리스크 경고를 트리거.
  - 💡 **핵심 장점**: 초 단위의 미션 크리티컬 워크플로에 구조화된 시맨틱 인지를 결합합니다.

- [**firstmate**](https://github.com/kunchenguid/firstmate) `★ 6502` - firstmate: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: 실시간 도메인 원격 측정 데이터를 수집하여 자동 실행 또는 리스크 경고를 트리거.
  - 💡 **핵심 장점**: 초 단위의 미션 크리티컬 워크플로에 구조화된 시맨틱 인지를 결합합니다.

- [**atomic**](https://github.com/bastani-inc/atomic) `★ 805` - atomic: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: 실시간 도메인 원격 측정 데이터를 수집하여 자동 실행 또는 리스크 경고를 트리거.
  - 💡 **핵심 장점**: 초 단위의 미션 크리티컬 워크플로에 구조화된 시맨틱 인지를 결합합니다.

- [**vexjoy-agent**](https://github.com/notque/vexjoy-agent) `★ 420` - vexjoy-agent: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: 실시간 도메인 원격 측정 데이터를 수집하여 자동 실행 또는 리스크 경고를 트리거.
  - 💡 **핵심 장점**: 초 단위의 미션 크리티컬 워크플로에 구조화된 시맨틱 인지를 결합합니다.

- [**WrongStack**](https://github.com/WrongStack/WrongStack) `★ 327` - WrongStack: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: 실시간 도메인 원격 측정 데이터를 수집하여 자동 실행 또는 리스크 경고를 트리거.
  - 💡 **핵심 장점**: 초 단위의 미션 크리티컬 워크플로에 구조화된 시맨틱 인지를 결합합니다.

- [**Jev Codex Router**](https://github.com/0xNatoshi/jev-codex-router) `★ 26` - Smart request router evaluating turn difficulty with Jev to route between cheap and frontier models.
  - 🎯 **Jev의 역할**: 모델 실행 전에 기술 작업의 복잡성과 컨텍스트 깊이를 사전 추정.
  - 💡 **핵심 장점**: 237턴에 걸친 실측 테스트 결과, 전체 API 비용을 약 60% 절감했습니다.

- [**jev-demo**](https://github.com/minghanminghan/jev-demo) - jev-demo: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: 실시간 도메인 원격 측정 데이터를 수집하여 자동 실행 또는 리스크 경고를 트리거.
  - 💡 **핵심 장점**: 초 단위의 미션 크리티컬 워크플로에 구조화된 시맨틱 인지를 결합합니다.

- [**jev-router-playground**](https://github.com/hugo-alves/jev-router-playground) - jev-router-playground: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: 실시간 도메인 원격 측정 데이터를 수집하여 자동 실행 또는 리스크 경고를 트리거.
  - 💡 **핵심 장점**: 초 단위의 미션 크리티컬 워크플로에 구조화된 시맨틱 인지를 결합합니다.

---

<a id="domain-vertical-tools-ko"></a>
## 📊 도메인 특화 및 엔터프라이즈 도구

*DeFi, 퀀트 트레이딩, 컴플라이언스 및 법률 도메인을 위한 엔터프라이즈 시스템.*

- [**Prism**](https://github.com/irfndi/prism-liquidity-agent) `★ 32` - DeFi liquidity agent detecting toxic flow, market stress, and pool distribution in shadow mode.
  - 🎯 **Jev의 역할**: 고주파 추론으로 평균 회귀 확률과 유동성 왜도를 즉시 평가.
  - 💡 **핵심 장점**: 초 단위 금융 리스크 모니터링에 LLM 수준의 시맨틱 인지 능력을 결합합니다.

- [**Jev-Trades**](https://github.com/zadescoxp/Jev-Trades) `★ 7` - High-frequency perp trader on Hyperliquid with live dashboard (jev-trade.com). Evaluates order book every tick to trade.
  - 🎯 **Jev의 역할**: 호가창 불균형, 깊이, 스프레드를 틱 단위로 평가하여 매수/매도, 레버리지 및 호가를 결정.
  - 💡 **핵심 장점**: 멀티 슬리브 격리를 통한 1초 미만의 탈중앙화 파생상품 거래 실행을 지원합니다.

- [**HA-Jev**](https://github.com/AboveColin/HA-Jev) `★ 6` - HA-Jev: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: 실시간 도메인 원격 측정 데이터를 수집하여 자동 실행 또는 리스크 경고를 트리거.
  - 💡 **핵심 장점**: 초 단위의 미션 크리티컬 워크플로에 구조화된 시맨틱 인지를 결합합니다.

- [**jev-trade**](https://github.com/aowang-ai/jev-trade) `★ 3` - High-frequency perp trader on Hyperliquid with live dashboard (jev-trade.com). Evaluates order book every tick to trade.
  - 🎯 **Jev의 역할**: 호가창 불균형, 깊이, 스프레드를 틱 단위로 평가하여 매수/매도, 레버리지 및 호가를 결정.
  - 💡 **핵심 장점**: 멀티 슬리브 격리를 통한 1초 미만의 탈중앙화 파생상품 거래 실행을 지원합니다.

- [**jev-for-engineers**](https://github.com/Foadsf/jev-for-engineers) `★ 2` - jev-for-engineers: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: 실시간 도메인 원격 측정 데이터를 수집하여 자동 실행 또는 리스크 경고를 트리거.
  - 💡 **핵심 장점**: 초 단위의 미션 크리티컬 워크플로에 구조화된 시맨틱 인지를 결합합니다.

- [**got-jev**](https://github.com/phureewat29/got-jev) `★ 1` - got-jev: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: 실시간 도메인 원격 측정 데이터를 수집하여 자동 실행 또는 리스크 경고를 트리거.
  - 💡 **핵심 장점**: 초 단위의 미션 크리티컬 워크플로에 구조화된 시맨틱 인지를 결합합니다.

- [**hermes-jev-north-star**](https://github.com/poponline63/hermes-jev-north-star) `★ 1` - Hermes Agent skill utilizing Jev as a north-star gatekeeper to evaluate unproven task criteria.
  - 🎯 **Jev의 역할**: 미검증 기준의 우선순위를 지정하고 실행 결과가 승인 마일스톤에 도달했는지 판정.
  - 💡 **핵심 장점**: 검증된 완료 게이트를 적용하여 에이전트가 조기에 종료되는 것을 방지합니다.

- [**jev-broadcast-lab**](https://github.com/4anti/jev-broadcast-lab) `★ 1` - jev-broadcast-lab: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: 실시간 도메인 원격 측정 데이터를 수집하여 자동 실행 또는 리스크 경고를 트리거.
  - 💡 **핵심 장점**: 초 단위의 미션 크리티컬 워크플로에 구조화된 시맨틱 인지를 결합합니다.

- [**jev-exploration**](https://github.com/SamuelSacco/jev-exploration) `★ 1` - Exploratory benchmark and runnable experiment collection examining Jev latency and accuracy.
  - 🎯 **Jev의 역할**: Jev 지연 시간을 자기회귀 LLM과 비교하는 통제된 의사결정 실험을 수행.
  - 💡 **핵심 장점**: 도입을 고려하는 개발자에게 실증적 성능 근거와 재현 가능한 코드를 제공합니다.

- [**jev-review-action**](https://github.com/fatwang2/jev-review-action) `★ 1` - Configurable GitHub Action for PR triage and automated code review classification with Jev.
  - 🎯 **Jev의 역할**: PR 변경점의 위험도를 채점하여 단순 변경은 자동 머지로, 복잡한 변경은 수동 리뷰로 라우팅.
  - 💡 **핵심 장점**: 코드 리뷰 속도를 높이고 일상적인 PR의 엔지니어링 오버헤드를 줄입니다.

- [**jevsome-projects**](https://github.com/ozers/jevsome-projects) `★ 1` - Automated index tracking verified open-source repositories integrating TypeSafe Jev model.
  - 🎯 **Jev의 역할**: GitHub 커밋 및 풀 리퀘스트를 검사하여 소스 코드 수준의 구현 시그니처를 검증.
  - 💡 **핵심 장점**: 성장하는 Jev 생태계 전반에 걸쳐 라인 단위의 투명한 코드 추적성을 제공합니다.

- [**jevsume**](https://github.com/unownone/jevsume) `★ 1` - jevsume: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: 실시간 도메인 원격 측정 데이터를 수집하여 자동 실행 또는 리스크 경고를 트리거.
  - 💡 **핵심 장점**: 초 단위의 미션 크리티컬 워크플로에 구조화된 시맨틱 인지를 결합합니다.

- [**ha-conversation-jev**](https://github.com/luxus/ha-conversation-jev) - ha-conversation-jev: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: 실시간 도메인 원격 측정 데이터를 수집하여 자동 실행 또는 리스크 경고를 트리거.
  - 💡 **핵심 장점**: 초 단위의 미션 크리티컬 워크플로에 구조화된 시맨틱 인지를 결합합니다.

- [**jev-music-theory-1**](https://github.com/adammichaelwood/jev-music-theory-1) - jev-music-theory-1: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: 실시간 도메인 원격 측정 데이터를 수집하여 자동 실행 또는 리스크 경고를 트리거.
  - 💡 **핵심 장점**: 초 단위의 미션 크리티컬 워크플로에 구조화된 시맨틱 인지를 결합합니다.

- [**jev-trade**](https://github.com/Waxmell114514/jev-trade) - High-frequency perp trader on Hyperliquid with live dashboard (jev-trade.com). Evaluates order book every tick to trade.
  - 🎯 **Jev의 역할**: 호가창 불균형, 깊이, 스프레드를 틱 단위로 평가하여 매수/매도, 레버리지 및 호가를 결정.
  - 💡 **핵심 장점**: 멀티 슬리브 격리를 통한 1초 미만의 탈중앙화 파생상품 거래 실행을 지원합니다.

---

<a id="decision-tools-ko"></a>
## 🎯 범용 의사결정 및 휴리스틱 평가

*범용 선택 엔진, 휴리스틱 스코어러 및 비즈니스 의사결정 보조 유틸리티.*

- [**ai-hedge-fund**](https://github.com/virattt/ai-hedge-fund) `★ 63497` - ai-hedge-fund: Multi-agent AI hedge fund simulation with native JevLLM adapter calling System One endpoints for deterministic financial decisions.
  - 🎯 **Jev의 역할**: 다중 소스 시장 지표와 신호를 종합하여 보정된 신뢰도를 갖춘 매수, 매도 또는 보유 결정을 출력.
  - 💡 **핵심 장점**: LLM 출력 형식 왜곡과 파싱 에러를 원천 차단하며 엄격한 정책 임계값을 적용한 초고속 거래 신호를 제공.

- [**jev-benchmarks**](https://github.com/AbdelStark/jev-benchmarks) `★ 7` - jev-benchmarks: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: 실시간 도메인 원격 측정 데이터를 수집하여 자동 실행 또는 리스크 경고를 트리거.
  - 💡 **핵심 장점**: 초 단위의 미션 크리티컬 워크플로에 구조화된 시맨틱 인지를 결합합니다.

- [**jev-benchmark**](https://github.com/wondertwins/jev-benchmark) `★ 2` - Interactive benchmark suite and playground evaluating Jev across chess tactics and NPC dialogue routing.
  - 🎯 **Jev의 역할**: 보드게임 좌표 선택 및 오디오 스크립트의 화자 식별 판단 정확도를 검증.
  - 💡 **핵심 장점**: 실제 의사결정 시나리오 전반에서 재현 가능한 지연 시간 및 정확도 기준을 제공합니다.

- [**jev-frontend-qa**](https://github.com/Nainish-Rai/jev-frontend-qa) `★ 2` - Automated frontend QA and regression testing suite exercising browser interactions with Jev contract verification.
  - 🎯 **Jev의 역할**: 합성 시나리오 계약을 평가하고 테스트 대상 UI 요소의 상태 전이를 검증.
  - 💡 **핵심 장점**: 고비용 모델 없이도 UI의 미세한 결함과 동작 이상을 감지합니다.

- [**omp-jev-compaction**](https://github.com/jerryfane/omp-jev-compaction) `★ 2` - Verbatim context reduction plugin for OpenMultiPlatform (omp) scoring token utility via Jev.
  - 🎯 **Jev의 역할**: 대화 기록과 도구 응답을 채점하여 원문 텍스트를 유지하면서 불필요한 컨텍스트를 정리.
  - 💡 **핵심 장점**: 요약 환각 없이 프롬프트 토큰 오버헤드를 대폭 줄입니다.

- [**jev-agent-failure-benchmark**](https://github.com/TokenTrim/jev-agent-failure-benchmark) `★ 1` - jev-agent-failure-benchmark: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: 실시간 도메인 원격 측정 데이터를 수집하여 자동 실행 또는 리스크 경고를 트리거.
  - 💡 **핵심 장점**: 초 단위의 미션 크리티컬 워크플로에 구조화된 시맨틱 인지를 결합합니다.

- [**jev-playground**](https://github.com/Little-Planet-Labs/jev-playground) `★ 1` - jev-playground: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: 실시간 도메인 원격 측정 데이터를 수집하여 자동 실행 또는 리스크 경고를 트리거.
  - 💡 **핵심 장점**: 초 단위의 미션 크리티컬 워크플로에 구조화된 시맨틱 인지를 결합합니다.

- [**jev-predict-skill**](https://github.com/DanielKillenberger/jev-predict-skill) `★ 1` - jev-predict-skill: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: 실시간 도메인 원격 측정 데이터를 수집하여 자동 실행 또는 리스크 경고를 트리거.
  - 💡 **핵심 장점**: 초 단위의 미션 크리티컬 워크플로에 구조화된 시맨틱 인지를 결합합니다.

- [**jev-rerank-bench**](https://github.com/anessbelbati/jev-rerank-bench) `★ 1` - jev-rerank-bench: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: 실시간 도메인 원격 측정 데이터를 수집하여 자동 실행 또는 리스크 경고를 트리거.
  - 💡 **핵심 장점**: 초 단위의 미션 크리티컬 워크플로에 구조화된 시맨틱 인지를 결합합니다.

- [**jev-research**](https://github.com/sherajdev/jev-research) `★ 1` - jev-research: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: 실시간 도메인 원격 측정 데이터를 수집하여 자동 실행 또는 리스크 경고를 트리거.
  - 💡 **핵심 장점**: 초 단위의 미션 크리티컬 워크플로에 구조화된 시맨틱 인지를 결합합니다.

- [**jevchat**](https://github.com/kt3k/jevchat) `★ 1` - Lightweight terminal chat utility querying Jev for custom persona answers and binary choices.
  - 🎯 **Jev의 역할**: 사전 정의된 스타일 옵션(Yes/No, 해적 말투 등) 중에서 최적의 응답을 선택.
  - 💡 **핵심 장점**: 토큰별 생성 오버헤드 없이 제로 레이턴시 페르소나 맞춤형 선택을 제공합니다.

---

<a id="classification-taxonomy-ko"></a>
## 🏷️ 텍스트 분류 및 분류 체계

*다중 레이블 분류, 계층적 분류 체계 구축 및 데이터셋 레이블링.*

- [**orchestkit**](https://github.com/yonatangross/orchestkit) `★ 278` - orchestkit: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: 실시간 도메인 원격 측정 데이터를 수집하여 자동 실행 또는 리스크 경고를 트리거.
  - 💡 **핵심 장점**: 초 단위의 미션 크리티컬 워크플로에 구조화된 시맨틱 인지를 결합합니다.

- [**jev-tree**](https://github.com/reachjalil/jev-tree) `★ 2` - jev-tree: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: 실시간 도메인 원격 측정 데이터를 수집하여 자동 실행 또는 리스크 경고를 트리거.
  - 💡 **핵심 장점**: 초 단위의 미션 크리티컬 워크플로에 구조화된 시맨틱 인지를 결합합니다.

---

<a id="evaluation-observability-ko"></a>
## 📈 벤치마크 및 가관측성

*의사결정 프로파일링, 지연 시간 모니터링, 텔레메트리 및 벤치마크 평가 제품군.*

- [**latitude-llm**](https://github.com/latitude-dev/latitude-llm) `★ 4654` - latitude-llm: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: 실시간 도메인 원격 측정 데이터를 수집하여 자동 실행 또는 리스크 경고를 트리거.
  - 💡 **핵심 장점**: 초 단위의 미션 크리티컬 워크플로에 구조화된 시맨틱 인지를 결합합니다.

---

<a id="voice-conversation-ko"></a>
## 🎙️ 음성 인터랙션 및 실시간 대화

*발화 순서 중재, 인터럽트 감지 및 실시간 저지연 음성 AI 시스템.*

- [**aiavatarkit**](https://github.com/uezo/aiavatarkit) `★ 674` - aiavatarkit: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: 실시간 도메인 원격 측정 데이터를 수집하여 자동 실행 또는 리스크 경고를 트리거.
  - 💡 **핵심 장점**: 초 단위의 미션 크리티컬 워크플로에 구조화된 시맨틱 인지를 결합합니다.

---

<a id="creative-tools-ko"></a>
## 🎨 크리에이티브 미디어 및 작곡

*동적 UI 레이아웃 생성, 알고리즘 기반 작곡 및 MIDI 편곡 도구.*

- [**json-render**](https://github.com/vercel-labs/json-render) `★ 16519` - json-render: Vercel Labs generative UI library replacing token streaming with Jev discrete evaluations, cutting render latency from 3.21s to 880ms.
  - 🎯 **Jev의 역할**: 컴포넌트 트리의 적합성을 병렬로 평가하여 단일 패스로 구조화된 컴포넌트 선택 및 슬롯 동작을 직접 출력.
  - 💡 **핵심 장점**: 느린 토큰 단위 JSON 스트리밍을 제거하여 밀리초 단위로 초기 UI 렌더링을 제공.

- [**jevthoven**](https://github.com/cocktailpeanut/jevthoven) `★ 3` - jevthoven: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: 실시간 도메인 원격 측정 데이터를 수집하여 자동 실행 또는 리스크 경고를 트리거.
  - 💡 **핵심 장점**: 초 단위의 미션 크리티컬 워크플로에 구조화된 시맨틱 인지를 결합합니다.

- [**ui-generator-instinct-jev**](https://github.com/joevidev/ui-generator-instinct-jev) `★ 1` - ui-generator-instinct-jev: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: 실시간 도메인 원격 측정 데이터를 수집하여 자동 실행 또는 리스크 경고를 트리거.
  - 💡 **핵심 장점**: 초 단위의 미션 크리티컬 워크플로에 구조화된 시맨틱 인지를 결합합니다.

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
