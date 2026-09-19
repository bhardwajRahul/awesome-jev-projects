<div align="center">

<a href="https://logicrw.github.io/awesome-jev-projects/">
  <img src="https://raw.githubusercontent.com/logicrw/awesome-jev-projects/main/public/banner.svg" alt="Awesome Jev Projects Banner" width="880" style="max-width: 100%; border-radius: 12px;" />
</a>

<br/><br/>

<p>
  <a href="https://awesome.re"><img src="https://awesome.re/badge.svg" alt="Awesome" /></a>
  <a href="https://logicrw.github.io/awesome-jev-projects/"><img src="https://img.shields.io/badge/Live%20Radar-logicrw.github.io-059669?style=flat-square&logo=safari" alt="Live Radar" /></a>
  <a href="#contents"><img src="https://img.shields.io/badge/Curated%20Projects-259%2B-2563eb?style=flat-square" alt="Projects Count" /></a>
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

<p>TypeSafe AI의 Jev 모델을 탑재한 **259+** 개의 검증된 오픈소스 도구, 프로덕션 앱 및 벤치마크 모음. 모든 프로젝트는 실제 소스 코드가 검증되었습니다.</p>

</div>

---

> **Awesome Jev 프로젝트란?**  
> 텍스트 생성 모델과 달리, TypeSafe AI의 Jev는 100ms 미만의 고속 구조화 판단(`Choice` 선택, `Score` 채점, `Noul` 확률 판정)에 특화되어 있습니다.  
> 본 디렉터리는 Jev를 핵심 의사결정 엔진으로 직접 활용하는 실제 오픈소스 소프트웨어만을 검증하여 수록합니다.

---
<a id="contents"></a>
## 목차

- [⚡ 고주파 시뮬레이션 및 실시간 게임 (20)](#high-frequency-simulation-ko)
- [🛠️ SDK 및 의사결정 프레임워크 (32)](#sdk-decision-frameworks-ko)
- [🔌 생태계 연동 및 어댑터 (9)](#sdk-integrations-ko)
- [💻 CLI 및 자동화 파이프라인 (32)](#cli-pipelines-ko)
- [💾 데이터베이스 확장 및 시맨틱 검색 (7)](#data-search-ko)
- [🌐 브라우저 및 데스크톱 자동화 (23)](#browser-os-action-ko)
- [🧹 컨텍스트 압축 및 가비지 컬렉션 (11)](#context-gc-filter-ko)
- [🛡️ 보안 및 가드레일 (16)](#security-guardrails-ko)
- [🧩 MCP 프로토콜 및 도구 확장 (32)](#mcp-integrations-ko)
- [🧭 코드베이스 분석 및 지식 그래프 탐색 (12)](#codebase-graph-pathfinding-ko)
- [🔀 모델 라우팅 및 비용 최적화 (15)](#routing-cost-optimization-ko)
- [📊 도메인 특화 및 엔터프라이즈 도구 (19)](#domain-vertical-tools-ko)
- [🎯 범용 의사결정 및 휴리스틱 평가 (14)](#decision-tools-ko)
- [🏷️ 텍스트 분류 및 분류 체계 (2)](#classification-taxonomy-ko)
- [📈 벤치마크 및 가관측성 (7)](#evaluation-observability-ko)
- [🎙️ 음성 인터랙션 및 실시간 대화 (3)](#voice-conversation-ko)
- [🎨 크리에이티브 미디어 및 작곡 (5)](#creative-tools-ko)
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

- [**jevscape**](https://github.com/Skyvern-AI/jevscape) `★ 6` - RuneBench harness for TypeSafe Jev featuring bounded action catalogs and tick-mode controllers.
  - 🎯 **Jev의 역할**: 게임 틱 상태를 분석하여 제한된 액션 카탈로그에서 최적의 캐릭터 행동과 목표를 선택.
  - 💡 **핵심 장점**: 틱 기반 게임 환경에서 Jev의 의사결정 반사신경을 엄밀히 측정할 수 있는 재현 가능한 벤치마크를 제공.

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

- [**jev-play-ping-pong**](https://github.com/Icohen007/jev-play-ping-pong) - Real-time browser ping-pong simulation where Jev evaluates table telemetry to steer the paddle.
  - 🎯 **Jev의 역할**: 공의 위치, 속도 벡터 및 패들 좌표를 평가하여 위로 이동, 아래로 이동 또는 대기 동작을 선택.
  - 💡 **핵심 장점**: 장황한 생성 프롬프트 오버헤드를 제거하고 실시간 물리 연산에 맞춘 저지연 이산 동작을 제공.

- [**mk-jev-fly-brain**](https://github.com/lavallee/mk-jev-fly-brain) - Connectome meets language model: biological spiking neural network fights Jev in mk.js simulation.
  - 🎯 **Jev의 역할**: 프레임별 체력, 거리, 적의 자세를 평가하여 격투 게임 입력을 즉시 출력.
  - 💡 **핵심 장점**: 연속적인 격투 게임 루프 환경에서 저지연 반사신경과 전술적 의사결정을 실증.

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

- [**typesafe-sdk-js**](https://github.com/typesafe-ai/typesafe-sdk-js) `★ 138` - Official TypeScript/JavaScript SDK for TypeSafe AI providing authoritative Jev bindings.
  - 🎯 **Jev의 역할**: 타입 추론과 재시도를 지원하여 System One의 Choice, Score, Noul 엔드포인트를 완벽 지원.
  - 💡 **핵심 장점**: 공식 유지보수되는 표준 구현체로 JavaScript 및 TypeScript 생태계 전반의 핵심 기반을 제공.

- [**effect-agent**](https://github.com/danieljvdm/effect-agent) `★ 116` - effect-agent: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: 실시간 도메인 원격 측정 데이터를 수집하여 자동 실행 또는 리스크 경고를 트리거.
  - 💡 **핵심 장점**: 초 단위의 미션 크리티컬 워크플로에 구조화된 시맨틱 인지를 결합합니다.

- [**jev-visual**](https://github.com/hr98w/jev-visual) `★ 95` - Local Jev-like visual inference experiment on Apple Silicon Mac. Scores and classifies single images across multiple questions with 3 playable game demos.
  - 🎯 **Jev의 역할**: 자기회귀 생성 없이 멀티모달 시각 컨텍스트를 재사용하여 로짓에서 직접 후보 응답을 채점.
  - 💡 **핵심 장점**: Apple Silicon의 로컬 엣지 비전에 Jev 스타일의 1패스 다중 판정 스코어링을 도입합니다.

- [**advocaat**](https://github.com/pithings/advocaat) `★ 66` - advocaat: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: 실시간 도메인 원격 측정 데이터를 수집하여 자동 실행 또는 리스크 경고를 트리거.
  - 💡 **핵심 장점**: 초 단위의 미션 크리티컬 워크플로에 구조화된 시맨틱 인지를 결합합니다.

- [**ruby_decision_model**](https://github.com/obie/ruby_decision_model) `★ 36` - Ruby client library providing strongly typed request builders and retries for TypeSafe Jev.
  - 🎯 **Jev의 역할**: Ruby 해시와 열거형에서 System One 패킷을 구성하고 구조화된 응답을 디코딩.
  - 💡 **핵심 장점**: 관용적인 Ruby 문법과 타입 스키마를 제공하여 HTTP 통신 및 JSON 디코딩 상용구 코드를 제거.

- [**typesafe-ai**](https://github.com/Twister915/typesafe-ai) `★ 8` - Typed Rust SDK for TypeSafe AI featuring async/blocking backends and observable retries.
  - 🎯 **Jev의 역할**: Jev System One 엔드포인트에 대한 네트워크 핸드셰이크, 인증 및 강타입 코덱을 관리.
  - 💡 **핵심 장점**: Tokio 비동기 런타임과 단순 동기식 CLI 스크립트 환경 모두를 유연하게 지원.

- [**typesafe-sdk-go**](https://github.com/Tangerg/typesafe-sdk-go) `★ 7` - Go SDK for TypeSafe AI API: typed questions in, calibrated probability distributions out.
  - 🎯 **Jev의 역할**: Go 백엔드를 위한 표준 Jev 질의 인터페이스를 제공하고 JSON 마샬링과 재시도를 처리.
  - 💡 **핵심 장점**: 스레드에 안전하고 동시성 호출을 지원하여 마이크로서비스에 안정적인 저지연 의사결정 경로를 제공.

- [**jev-dsl**](https://github.com/inanna-malick/jev-dsl) `★ 6` - Agent-first Haskell DSL for TypeSafe Jev featuring type inference and labeled answer packets.
  - 🎯 **Jev의 역할**: Haskell 타입 시스템을 통해 엄격한 반환 타입을 강제하고 파싱 시 완전성을 보장.
  - 💡 **핵심 장점**: 순수 함수형 패러다임으로 Jev 의사결정 페이로드의 유효성을 컴파일 시점에 완벽히 검증.

- [**swift-typesafe**](https://github.com/ainame/swift-typesafe) `★ 6` - Unofficial Swift SDK providing idiomatic Apple platform wrappers for TypeSafe Jev.
  - 🎯 **Jev의 역할**: 강력한 타입의 Swift 구조체로 문제를 선언하고 Jev의 이산 선택 및 채점 결과를 디코딩.
  - 💡 **핵심 장점**: 불필요한 외부 의존성 없이 Xcode 프로젝트와 Swift 동시성 워크플로에 깔끔하게 연동.

- [**super-jev**](https://github.com/Kevthetech143/super-jev) `★ 5` - Extensible decision-to-action harness mapping Jev discrete choices to deterministic handlers.
  - 🎯 **Jev의 역할**: Jev의 Choice/Noul 질의를 통해 도메인 질문을 해결하고 일치하는 콜백 핸들러를 실행.
  - 💡 **핵심 장점**: 확률적 출력을 결정론적 상태 머신 전이로 수렴하여 JSON 파싱 및 재시도 오버헤드를 제거.

- [**typesafe-sdk**](https://github.com/joshmn/typesafe-sdk) `★ 4` - Lightweight Ruby client for typesafe.ai providing clean request wrappers and response mapping.
  - 🎯 **Jev의 역할**: Ruby 해시로 질의 페이로드를 생성하고 이산 결정 응답을 Ruby 객체로 파싱.
  - 💡 **핵심 장점**: 최소한의 의존성을 갖춘 간결한 구조로 Rails 백그라운드 작업 등에 손쉽게 내장 가능.

- [**typesafe-ai-rs**](https://github.com/gilljon/typesafe-ai-rs) `★ 3` - Independent async and blocking Rust SDK for TypeSafe AI System One with zero-overhead error handling.
  - 🎯 **Jev의 역할**: 분류 문제를 구조화된 열거형으로 매핑하고 서버의 부동소수점 확률 배열을 안전하게 파싱.
  - 💡 **핵심 장점**: 명확한 에러 열거형을 제공하여 미션 크리티컬 환경에서 정밀한 예외 폴백 로직 구현을 지원.

- [**typesafe-sdk-java**](https://github.com/Premo-Cloud/typesafe-sdk-java) `★ 3` - Community Java SDK and Spring Boot Starter providing autoconfigured TypeSafe Jev clients.
  - 🎯 **Jev의 역할**: Java POJO와 어노테이션으로 Jev System One 질의를 캡슐화하고 자동 역직렬화를 처리.
  - 💡 **핵심 장점**: 자동 구성 및 스레드 풀 관리를 통해 엔터프라이즈 Spring 스택에 매끄럽게 연동.

- [**jev-go**](https://github.com/Gaurav-Gosain/jev-go) `★ 2` - Go client for TypeSafe Jev focusing on typed judgments and calibrated probabilities.
  - 🎯 **Jev의 역할**: 질문과 후보 선택지를 직렬화하여 Jev에 전송하고 보정된 확률 분포를 갖춘 Choice 결과를 반환.
  - 💡 **핵심 장점**: System One 규격을 엄격히 준수하여 결정론적 확률 품질이 요구되는 운영 서비스에 최적.

- [**jev-java**](https://github.com/Olti1947/jev-java) `★ 2` - Idiomatic Java SDK and type-safe client library for TypeSafe AI Jev decision engine.
  - 🎯 **Jev의 역할**: HTTP System One 엔드포인트를 강력한 타입의 Java POJO 및 비동기 리액티브 플로우로 래핑.
  - 💡 **핵심 장점**: Jev 기반 마이크로서비스에 엔터프라이즈 네이티브 Java 호환성을 제공합니다.

- [**typesafe_sdk**](https://github.com/nshkrdotcom/typesafe_sdk) `★ 2` - Idiomatic Elixir SDK providing unified LLM and System One Jev interfaces with OTP concurrency.
  - 🎯 **Jev의 역할**: Elixir 프로세스 전반에 걸쳐 비차단 Jev 질의를 디스패치하고 패턴 매칭으로 결과를 처리.
  - 💡 **핵심 장점**: Erlang/OTP 내결함성 아키텍처에 1초 미만 의사결정을 결합하여 대규모 동시성을 완벽 지원.

- [**typesafe-go**](https://github.com/2389-research/typesafe-go) `★ 2` - Zero-dependency Go client for TypeSafe System One API relying solely on the Go standard library.
  - 🎯 **Jev의 역할**: 네이티브 Go 구조체를 Jev 요청 페이로드로 변환하고 Choice/Score/Noul 출력을 파싱.
  - 💡 **핵심 장점**: 공급망 위험이 전혀 없는 경량 설계로 다양한 컨테이너 및 임베디드 환경에 손쉽게 크로스 컴파일 가능.

- [**typesafe-go**](https://github.com/cole-gillespie/typesafe-go) `★ 2` - Unofficial Go SDK for TypeSafe AI featuring exponential retries, context cancellation, and typing.
  - 🎯 **Jev의 역할**: HTTP 수명주기를 관리하고 Jev 확률 분포를 강력한 타입의 Go 열거형으로 디코딩.
  - 💡 **핵심 장점**: context.Context 취소 제어와 스마트 재시도 정책을 갖추어 대규모 동시성 백엔드 서비스에 최적화.

- [**typesafe-sdk-rust**](https://github.com/codeitlikemiley/typesafe-sdk-rust) `★ 2` - Rust SDK for TypeSafe AI providing constants, serialization models, and HTTP client wrappers.
  - 🎯 **Jev의 역할**: Rust에서 System One 페이로드를 생성하고 엔드포인트 라우팅 및 인증 헤더를 관리.
  - 💡 **핵심 장점**: Rust의 소유권과 타입 시스템을 활용하여 잘못된 형식의 요청을 컴파일 시점에 방지.

- [**jev-starter**](https://github.com/hamakyo/jev-starter) `★ 1` - jev-starter: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: 실시간 도메인 원격 측정 데이터를 수집하여 자동 실행 또는 리스크 경고를 트리거.
  - 💡 **핵심 장점**: 초 단위의 미션 크리티컬 워크플로에 구조화된 시맨틱 인지를 결합합니다.

- [**jevclient**](https://github.com/AboveColin/jevclient) `★ 1` - jevclient: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: 실시간 도메인 원격 측정 데이터를 수집하여 자동 실행 또는 리스크 경고를 트리거.
  - 💡 **핵심 장점**: 초 단위의 미션 크리티컬 워크플로에 구조화된 시맨틱 인지를 결합합니다.

- [**jevify**](https://github.com/altryne/jevify) `★ 1` - CLI installer and integration assistant configuring Jev decision endpoints for Claude Code, Codex, and Cursor.
  - 🎯 **Jev의 역할**: 개발 에이전트 환경 전반에 구조화된 Jev 판단 훅을 구성하는 대화형 설정 CLI.
  - 💡 **핵심 장점**: 멀티 에이전트 환경 구성을 자동화하여 수동 설정 작업을 완전히 제거합니다.

- [**qualm**](https://github.com/qddegtya/qualm) `★ 1` - System One decision library enforcing explicit fallback strategies when Jev signals low confidence.
  - 🎯 **Jev의 역할**: Jev 확률 분포를 검사하여 신뢰도가 안전 기준 미만일 경우 명시적 폴백을 트리거.
  - 💡 **핵심 장점**: 모델의 불확실성을 타입 시스템 수준에서 처리하도록 강제하여 자율 파이프라인의 잠재적 오류를 방지.

- [**typesafe-go**](https://github.com/zhirschtritt/typesafe-go) `★ 1` - Idiomatic Go SDK for TypeSafe AI API providing ergonomic client interfaces and context control.
  - 🎯 **Jev의 역할**: HTTP 통신과 JSON 코덱을 관리하여 Jev의 선택 및 채점 결과를 Go 코드에 주입.
  - 💡 **핵심 장점**: 간결하고 군더더기 없는 API 설계로 Go 백엔드 서비스 및 CLI 도구에 손쉽게 결합.

- [**typesafe-sdk-php**](https://github.com/Butochnikov/typesafe-sdk-php) `★ 1` - PHP SDK for modern PHP 8+ applications providing typed clients and query builders for Jev.
  - 🎯 **Jev의 역할**: PHP 연관 배열과 열거형을 표준 규격에 맞는 Jev 질의 페이로드로 변환.
  - 💡 **핵심 장점**: Laravel 및 Symfony 웹 프레임워크에서 외부 파이썬 데몬 없이 초고속 의사결정을 직접 도입.

- [**typesafe-rs**](https://github.com/AbdelStark/typesafe-rs) - Latency-first Rust SDK for TypeSafe System One featuring zero-copy parsing and connection pooling.
  - 🎯 **Jev의 역할**: 강타입 Rust 구조체를 Jev 요청으로 직렬화하고 최소 오버헤드로 확률 분포 데이터를 디코딩.
  - 💡 **핵심 장점**: 불필요한 메모리 할당을 제거하여 데몬, 트레이딩 시스템 및 CLI 도구에 극대화된 처리량을 제공.

- [**typesafe-sdk-swift**](https://github.com/marandaneto/typesafe-sdk-swift) - Swift native client porting official SDK ergonomics to Swift modern async/await concurrency.
  - 🎯 **Jev의 역할**: Swift async/await 인터페이스로 Jev 질의를 실행하고 Codable 프로토콜을 통해 응답을 디코딩.
  - 💡 **핵심 장점**: iOS, macOS 및 Linux Swift 애플리케이션에서 컴파일 타임 안전성을 갖춘 의사결정을 지원.

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

- [**ruby_llm-typesafe**](https://github.com/kieranklaassen/ruby_llm-typesafe) `★ 12` - TypeSafe structured-output provider driver for RubyLLM 2 unified model framework.
  - 🎯 **Jev의 역할**: RubyLLM의 구조화된 스키마를 Jev 질의로 변환하여 분류 및 선택 판단을 고속 대행.
  - 💡 **핵심 장점**: 기존 RubyLLM 앱에 완벽히 연동되어 비즈니스 로직 수정 없이 고속 Jev 추론으로 손쉽게 전환.

---

<a id="cli-pipelines-ko"></a>
## 💻 CLI 및 자동화 파이프라인

*터미널 유틸리티, 셸 파이프 및 CI/CD 워크플로에 시맨틱 판단을 결합한 도구.*

- [**jev-experiments**](https://github.com/dabit3/jev-experiments) `★ 255` - Developer experimentation suite by Nader Dabit featuring commit sentry and intent triage with Jev.
  - 🎯 **Jev의 역할**: 커밋 차이점을 평가하여 변경 위험도를 분류하고 문제 가능성이 있는 커밋을 차단 및 조언.
  - 💡 **핵심 장점**: 개발자 도구 체인에서 Jev의 활용 잠재력을 보여주는 실용적이고 영감을 주는 예제 코드를 제공.

- [**runline**](https://github.com/Michaelliv/runline) `★ 162` - Agent code execution runtime embedding Jev plugins to validate shell command security.
  - 🎯 **Jev의 역할**: 제안된 셸 명령어를 평가하여 보안 위험, 파일 시스템 파괴 및 무단 네트워크 호출을 분류.
  - 💡 **핵심 장점**: 정적 정규식을 뛰어넘는 시맨틱 검증으로 자율 에이전트의 터미널 실행에 견고한 안전 가드를 제공.

- [**captaincore**](https://github.com/CaptainCore/captaincore) `★ 71` - WordPress site management CLI incorporating Jev for update risk scoring and plugin compatibility.
  - 🎯 **Jev의 역할**: 플러그인 릴리스 노트와 충돌 정보를 평가하여 자동 업데이트 또는 수동 검토 여부를 결정.
  - 💡 **핵심 장점**: 대규모 사이트 유지보수 작업에 시맨틱 가드레일을 도입하여 업데이트로 인한 사이트 장애를 방지.

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

- [**jev-axi**](https://github.com/shiftynick/jev-axi) `★ 13` - Ergonomic CLI suite for Jev executing pick, rate, check, rank, triage, and guard commands from shell.
  - 🎯 **Jev의 역할**: 서브커맨드 플래그에 따라 셸 입력을 Choice, Score, Noul, 랭킹 또는 가드 게이트로 분기.
  - 💡 **핵심 장점**: 모든 Jev 핵심 프리미티브를 Unix 친화적 명령어로 감싸 셸 파이프라인에 손쉽게 통합 가능.

- [**rift**](https://github.com/exYze/rift) `★ 9` - High-performance Rust terminal TUI embedding Jev decision components for code assistance.
  - 🎯 **Jev의 역할**: 터미널 컨텍스트와 커서 위치의 코드 블록을 분석하여 최적의 자동완성 또는 리팩터링 동작을 선택.
  - 💡 **핵심 장점**: Rust의 제로 오버헤드 런타임과 1초 미만의 의사결정을 결합하여 매끄러운 터미널 작업 흐름을 제공.

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

- [**jev-git**](https://github.com/AkashPriyadarshii/jev-git) `★ 1` - Sub-second Git pre-commit and pre-push semantic reflex gate powered by TypeSafe Jev.
  - 🎯 **Jev의 역할**: 스테이징된 코드 차이점을 검사하여 규칙 위반, 아키텍처 드리프트 또는 하드코딩된 비밀을 분류.
  - 💡 **핵심 장점**: 약 300ms 내에 실행되는 순수 Rust 바이너리로 모든 커밋마다 원활한 시맨틱 품질 검사를 강제.

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

- [**pg_typesafe**](https://github.com/giuliosmall/pg_typesafe) `★ 76` - Pre-alpha PostgreSQL C extension calling Jev directly within SQL queries for categorical classification.
  - 🎯 **Jev의 역할**: SQL 실행 중에 행 텍스트에 대한 Jev 분류 요청을 처리하고 결과를 SQL 컬럼으로 반환.
  - 💡 **핵심 장점**: 외부 스크립트로 데이터를 내보내지 않고 데이터베이스 엔진 내부에서 직접 시맨틱 분류를 수행.

- [**jev-search**](https://github.com/superagents-lab/jev-search) `★ 38` - jev-search: Semantic query and classification layer applied over tabular databases and search indexes.
  - 🎯 **Jev의 역할**: 테이블 레코드에 대해 배치 시맨틱 매칭과 조건 평가를 수행.
  - 💡 **핵심 장점**: 기존 SQL 쿼리 내에서 자연어 시맨틱 필터링을 직접 수행할 수 있습니다.

- [**duckdb-jev**](https://github.com/colliber/duckdb-jev) `★ 8` - DuckDB extension exposing typed Jev answers directly as native SQL types and expressions.
  - 🎯 **Jev의 역할**: DuckDB 쿼리 실행 중 행 텍스트에 대한 Jev 분류 및 채점을 수행하여 네이티브 타입 컬럼을 생성.
  - 💡 **핵심 장점**: 데이터베이스 밖으로 내보낼 필요 없이 컬럼형 쿼리 파이프라인 내부에서 초고속 시맨틱 태깅을 수행.

- [**jevsql**](https://github.com/EugeneBoondock/jevsql) `★ 3` - SQL engine with natural-language predicates powered by Jev for semantic filtering and ranking.
  - 🎯 **Jev의 역할**: 데이터셋 행에 대해 자연어 조건 일치도를 평가하여 행 필터링 및 정렬 가중치를 결정.
  - 💡 **핵심 장점**: 자동 배치, 콘텐츠 캐싱 및 비용 한도 관리 기능을 갖추어 SQL에 시맨틱 인지 능력을 부여.

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

- [**Agent**](https://github.com/AgentiLoop/Agent) `★ 616` - macOS native autonomous agent bundling TypeSafeKit for fast OS action decisions and scripting.
  - 🎯 **Jev의 역할**: 애플리케이션 상태와 사용자 목표를 평가하여 다음 macOS 네이티브 자동화 액션 및 인수를 선택.
  - 💡 **핵심 장점**: Swift 네이티브 아키텍처와 Jev의 구조화된 결정을 결합하여 운영체제 제어 계획 지연 시간을 최소화.

- [**omg.dev**](https://github.com/BennyKok/omg.dev) `★ 531` - omg.dev: Automates browser or desktop interactions by turning UI state into discrete choices.
  - 🎯 **Jev의 역할**: DOM 및 접근성 트리 상태를 실시간으로 평가하여 대상 컨트롤과 다음 동작을 선택.
  - 💡 **핵심 장점**: 의사결정과 실행을 분리하여 검증 가능하고 번개처럼 빠른 UI 탐색을 구현합니다.

- [**typesafe-computer-use**](https://github.com/awlevin/typesafe-computer-use) `★ 237` - typesafe-computer-use: Ultra-low-cost macOS computer use combining deterministic OCR with Jev discrete action choices at ~$0.0002 per step.
  - 🎯 **Jev의 역할**: 목표에 맞춰 화면 요소 목록을 비교하고 후보군 중에서 다음 원자적 클릭 또는 키 입력을 선택.
  - 💡 **핵심 장점**: 멀티모달 LLM으로 고해상도 스크린샷 전송을 방지하여 막대한 토큰 비용과 이미지 처리 지연을 제거.

- [**jev-browser-use**](https://github.com/wy-coliney/jev-browser-use) `★ 132` - Browser automation by EZCollegeApp where Jev handles clicks and Codex plans, speeding ops 5–10x.
  - 🎯 **Jev의 역할**: 경량 DOM 후보군에서 구체적인 클릭 대상, 폼 상호작용 및 스크롤 동작을 결정.
  - 💡 **핵심 장점**: 국소적 조작과 전역 계획을 분리하여 작업 속도를 5~10배 가속하고 멀티모달 API 비용을 절감.

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

- [**plasmallm**](https://github.com/joshuaeroman/plasmallm) `★ 28` - KDE Plasma desktop widget adapter introducing Jev decision gates for desktop interactions.
  - 🎯 **Jev의 역할**: 데스크톱 사용자 의도를 평가하여 로컬 단축키, 대화형 응답 및 도구 호출 사이를 라우팅.
  - 💡 **핵심 장점**: 일반적인 데스크톱 작업에서 무거운 클라우드 모델 호출 없이 100ms 미만으로 의도를 분류.

- [**Jev-cu**](https://github.com/Sac-Y/Jev-cu) `★ 14` - Jev-cu: Desktop Computer Use co-processor delegating "where to click next" to Jev System One from text candidates without raw screenshots.
  - 🎯 **Jev의 역할**: UI 텍스트 후보군에서 다음 작업 대상, 작업 유형, 완료도 및 위험 등급을 직접 평가.
  - 💡 **핵심 장점**: 텍스트 전용 후보 평가로 멀티모달 토큰 소비와 지연 시간을 대폭 절감하며 엄격한 로컬 정책 게이트를 적용.

- [**jev-browser**](https://github.com/Ying-Kai-Liao/jev-browser) `★ 12` - Hybrid browser automation where an LLM plans and Jev decides low-level clicks and interactions.
  - 🎯 **Jev의 역할**: 접근성 트리에서 구체적인 DOM 요소 선택자와 상호작용 이벤트 유형을 선택.
  - 💡 **핵심 장점**: 라이브러리, CLI 및 MCP 규격을 모두 지원하여 브라우저 탐색 중 지연 시간과 비용을 최소화.

- [**jev-ego**](https://github.com/romaluev/jev-ego) `★ 4` - Fast browser agent for ego lite executing one TypeSafe request per step to pick the next move.
  - 🎯 **Jev의 역할**: 페이지의 상호작용 요소를 평가하여 클릭, 텍스트 입력, 스크롤 또는 양식 제출 동작을 선택.
  - 💡 **핵심 장점**: 스텝당 다중 추론 루프를 제거하여 양식 작성 및 다단계 웹 탐색 소요 시간을 대폭 단축.

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

- [**openclaw-typesafe-ai**](https://github.com/Olli0103/openclaw-typesafe-ai) - OpenClaw web scraping adapter incorporating Jev decisions for target selection and captcha triage.
  - 🎯 **Jev의 역할**: 페이지 구조를 분석하여 페이지네이션 선택자, 동적 트리거 또는 차단 요소를 판별.
  - 💡 **핵심 장점**: 결정론적인 강타입 선택자로 수집 흐름을 제어하여 동적 웹 레이아웃에 대한 안정성을 극대화.

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

- [**jev-pruner**](https://github.com/tamaratran/jev-pruner) `★ 17` - Claude Code plugin trimming voluminous Bash and command outputs with Jev before model ingestion.
  - 🎯 **Jev의 역할**: 명령어 출력 블록의 에러 연관성과 컨텍스트 유용성을 평가하여 보존 또는 트리밍 여부를 결정.
  - 💡 **핵심 장점**: 후속 프롬프트 토큰 소비를 대폭 줄이고 불필요한 로그로 인한 컨텍스트 포화를 방지.

- [**Winnow**](https://github.com/GhalebDweikat/winnow) `★ 13` - Context garbage collector for Claude Code pruning voluminous bash, grep, and file outputs.
  - 🎯 **Jev의 역할**: 터미널 및 도구 출력을 즉시 필터링하여 현재 버그와 직접 관련된 라인만 격리.
  - 💡 **핵심 장점**: 노이즈 로그로 인한 컨텍스트 포화 및 에이전트 추론 성능 저하를 방지합니다.

- [**jevlogs**](https://github.com/reachjalil/jevlogs) `★ 5` - jevlogs: Prunes extraneous tool outputs, logs, and grep results before feeding LLM context.
  - 🎯 **Jev의 역할**: 현재 작업 목표와의 연관성을 라인 단위로 판단하여 불필요한 토큰 노이즈를 제거.
  - 💡 **핵심 장점**: 컨텍스트 윈도우 대역폭을 보존하고 장시간 세션에서의 추론 성능 저하를 방지합니다.

- [**jev-skill-gate**](https://github.com/ShivamPansuriya/jev-skill-gate) `★ 2` - jev-skill-gate: Prunes extraneous tool outputs, logs, and grep results before feeding LLM context.
  - 🎯 **Jev의 역할**: 현재 작업 목표와의 연관성을 라인 단위로 판단하여 불필요한 토큰 노이즈를 제거.
  - 💡 **핵심 장점**: 컨텍스트 윈도우 대역폭을 보존하고 장시간 세션에서의 추론 성능 저하를 방지합니다.

- [**pi-jev-context**](https://github.com/kevinpita/pi-jev-context) `★ 2` - Reversible context pruning for Pi powered by Jev, keeping useful context without deleting history.
  - 🎯 **Jev의 역할**: 도구 실행 결과와 대화 내용을 검사하여 유지, 접기 또는 원문 포인터 대체 여부를 결정.
  - 💡 **핵심 장점**: 프롬프트의 간결성을 확보하면서도 원본 이력을 손실 없이 보존하는 완전 가역적 설계를 구현.

- [**jev-context**](https://github.com/zbush/jev-context) `★ 1` - jev-context: Prunes extraneous tool outputs, logs, and grep results before feeding LLM context.
  - 🎯 **Jev의 역할**: 현재 작업 목표와의 연관성을 라인 단위로 판단하여 불필요한 토큰 노이즈를 제거.
  - 💡 **핵심 장점**: 컨텍스트 윈도우 대역폭을 보존하고 장시간 세션에서의 추론 성능 저하를 방지합니다.

- [**your-signal**](https://github.com/MithrilMan/your-signal) `★ 1` - Open-source BYOK Chrome extension using Jev to filter spam and low-signal posts from X timelines.
  - 🎯 **Jev의 역할**: 트윗 텍스트와 맥락을 평가하여 유익한 기술 토론과 불필요한 홍보 노이즈를 분류.
  - 💡 **핵심 장점**: 불필요한 트윗을 클라이언트에서 깔끔하게 숨기면서 언제든 원래대로 복원 가능한 구조를 제공.

- [**pi-jev-compact**](https://github.com/ilkerulusoy/pi-jev-compact) - Context compression extension for Pi coding agent using Jev to identify and prune redundancy.
  - 🎯 **Jev의 역할**: 현재 작업 대비 과거 로그 및 대화 턴의 필요성을 평가하여 정리 대상을 식별.
  - 💡 **핵심 장점**: 장시간 코딩 세션에서 컨텍스트 윈도우 공간을 동적으로 확보하여 추론 품질 저하를 방지.

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

- [**typesafe-adblock**](https://github.com/realZachi/typesafe-adblock) `★ 50` - Experimental Chrome extension querying Jev whether a DOM element is an ad and removing it directly.
  - 🎯 **Jev의 역할**: DOM 노드의 텍스트와 속성을 평가하여 네이티브 광고 및 스폰서 콘텐츠를 분류.
  - 💡 **핵심 장점**: 방대한 정적 규칙 목록 없이도 일반 콘텐츠와 유사한 네이티브 광고를 시맨틱 의도로 탐지.

- [**vibecheck**](https://github.com/RafalWilinski/vibecheck) `★ 30` - Chrome extension vibe-checking X posts with TypeSafe Jev before hitting Post.
  - 🎯 **Jev의 역할**: 게시 전 초안 텍스트를 검사하여 분쟁 유발 어조, 공격적 표현 또는 개인정보 위험을 분류.
  - 💡 **핵심 장점**: 소셜 미디어 게시 전 실시간 자체 검토 게이트를 제공하여 평판 리스크를 사전에 예방.

- [**Jev-Moderation-Bot**](https://github.com/brainstormity/Jev-Moderation-Bot) `★ 28` - Chat moderation bot using Jev for low-latency violation triage and automated enforcement.
  - 🎯 **Jev의 역할**: 채팅 메시지의 괴롭힘, 스팸, 혐오 발언 또는 악성 링크 여부를 신뢰도 점수와 함께 평가.
  - 💡 **핵심 장점**: 비싼 생성 모델을 호출하지 않고도 높은 처리량의 채팅방을 밀리초 단위로 안전하게 보호.

- [**snifftest**](https://github.com/DanRWilloughby/snifftest) `★ 14` - Prose linter detecting AI writing patterns using deterministic rules and Jev decision scoring.
  - 🎯 **Jev의 역할**: 문단 텍스트를 평가하여 상투적인 전환구, 부자연스러운 어조 및 기계적인 대칭 구조를 감지.
  - 💡 **핵심 장점**: 구문 통계와 시맨틱 판단을 결합하여 외부 의존성 없이 정밀한 문장 단위 피드백을 제공.

- [**pi-jev-auto-mode**](https://github.com/jomatsu/pi-jev-auto-mode) `★ 9` - pi-jev-auto-mode: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: 실시간 도메인 원격 측정 데이터를 수집하여 자동 실행 또는 리스크 경고를 트리거.
  - 💡 **핵심 장점**: 초 단위의 미션 크리티컬 워크플로에 구조화된 시맨틱 인지를 결합합니다.

- [**Safer with Jev**](https://github.com/andrelandgraf/typesafe-on-neon) `★ 3` - Serverless request router on Neon evaluating incoming queries and dispatching to specialized frontier models.
  - 🎯 **Jev의 역할**: 콜드 스타트 없이 사용자 의도(단순 Q&A vs 복잡한 코딩 vs 추론)를 즉시 분류.
  - 💡 **핵심 장점**: 모델 계층화를 최적화하면서 전역 지연 시간을 최소화합니다.

- [**jev-block-android-ad**](https://github.com/ufec/jev-block-android-ad) `★ 2` - JevNoiseGate: Android notification and SMS noise gate using Jev to classify and suppress spam ads while strictly failing open on OTP verification codes.
  - 🎯 **Jev의 역할**: 캡처된 알림 또는 SMS 텍스트를 Jev로 전송하여 메시지가 광고 스팸인지 판정.
  - 💡 **핵심 장점**: 취약한 키워드 블랙리스트를 견고한 시맨틱 필터링으로 대체하여 인증 코드 유실을 원천 방지.

- [**jev-cvss**](https://github.com/Red5d/jev-cvss) `★ 2` - Security vulnerability triage utility evaluating CVE descriptions to predict CVSS v3.1 metrics.
  - 🎯 **Jev의 역할**: 비정형 설명문에서 공격 벡터, 복잡성, 권한 요구사항 및 영향도에 대한 이산 지표를 추출.
  - 💡 **핵심 장점**: JSON 포맷 오류 없이 밀리초 단위로 결정론적인 취약점 벡터 스코어를 산출.

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

- [**pi-typesafe**](https://github.com/DevMortimer/pi-typesafe) `★ 14` - Extension suite for Pi coding agent providing batch Jev evaluation, terminal playground, and APIs.
  - 🎯 **Jev의 역할**: Pi 세션 내에서 후보 파일과 코드 수정 옵션을 일괄 평가하여 구조화된 조치 제안을 반환.
  - 💡 **핵심 장점**: Pi 확장 기능 개발자를 위한 즉시 사용 가능한 의사결정 도구와 대화형 터미널 샌드박스를 제공.

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

- [**tenbin**](https://github.com/simota/tenbin) `★ 2` - MCP server and agent skill decomposing judgments into Choice/Score/Noul queries with calibration.
  - 🎯 **Jev의 역할**: MCP 에이전트에 표준화된 Jev 도구를 제공하고 코드 수준에서 보정된 확률 임계값을 적용.
  - 💡 **핵심 장점**: 프롬프트 구조와 신뢰도 보정을 표준화하여 테스트 가능하고 결정론적인 에이전트 로직을 구현.

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

- [**n8n-nodes-typesafe-jev**](https://github.com/n3ndor/n8n-nodes-typesafe-jev) - n8n community node introducing TypeSafe Jev structured AI decision capabilities to workflows.
  - 🎯 **Jev의 역할**: 워크플로 이벤트 데이터를 평가하여 비즈니스 범주, 점수 또는 불리언 게이트를 출력하여 분기 처리.
  - 💡 **핵심 장점**: 로우코드 환경에서 별도 코딩 없이 저지연의 결정론적 시맨틱 분기 로직을 워크플로에 추가.

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

- [**commit-miner**](https://github.com/devanshbatham/commit-miner) `★ 22` - Classify Git commit diffs and messages with Jev into bug fixes, security CWEs, and change types.
  - 🎯 **Jev의 역할**: 코드 변경 헝크와 커밋 메시지를 검사하여 리팩터링, 신규 기능 또는 CWE 수정으로 분류.
  - 💡 **핵심 장점**: 고성능 Rust 구현으로 수천 개의 커밋 이력을 빠르게 분석하여 보안 인텔리전스를 도출.

- [**neo4jev**](https://github.com/jexp/neo4jev) `★ 16` - Knowledge graph pathfinder scoring candidate edges with Jev and traversing paths via beam search.
  - 🎯 **Jev의 역할**: 저지연 탐색을 위해 후보 그래프 관계에 전이 확률을 할당.
  - 💡 **핵심 장점**: 멀티 홉 지식 그래프 추론 속도를 획기적으로 개선합니다.

- [**Blink**](https://github.com/ellipsis-dev/blink) `★ 14` - Semantic pathfinder navigating large codebases without vector indexes using beam search.
  - 🎯 **Jev의 역할**: 계층별로 후보 파일 및 디렉터리를 평가하여 관련 경로로 탐색 예산을 배분.
  - 💡 **핵심 장점**: 사전 인덱싱 없이도 대규모 저장소에서 관련 파일을 즉시 찾아냅니다.

- [**jev-code**](https://github.com/devagrawal09/jev-code) `★ 6` - jev-code: Semantic exploration engine for codebases and knowledge graphs using beam search.
  - 🎯 **Jev의 역할**: 후보 파일 또는 지식 그래프 엣지에 연관성 확률을 부여하여 탐색 경로를 유도.
  - 💡 **핵심 장점**: 비싼 벡터 인덱싱 없이도 대상 코드와 관계를 단 몇 초 만에 특정합니다.

- [**leanest**](https://github.com/baronunread/leanest) `★ 3` - Local-first test selector using Jev judgments to pinpoint tests affected by code changes.
  - 🎯 **Jev의 역할**: Git 차이점 로직과 함수 시그니처를 분석하여 코드 변경의 영향을 받는 테스트 부분집합을 선별.
  - 💡 **핵심 장점**: 단순 수정마다 전체 테스트를 실행하는 비효율을 방지하여 피드백 루프를 수 분에서 수 초로 단축.

- [**claude-jev**](https://github.com/buchmark/claude-jev) `★ 1` - claude-jev: Semantic exploration engine for codebases and knowledge graphs using beam search.
  - 🎯 **Jev의 역할**: 후보 파일 또는 지식 그래프 엣지에 연관성 확률을 부여하여 탐색 경로를 유도.
  - 💡 **핵심 장점**: 비싼 벡터 인덱싱 없이도 대상 코드와 관계를 단 몇 초 만에 특정합니다.

- [**jev-flash-review**](https://github.com/TheBous/jev-flash-review) `★ 1` - Local-first code review triage engine returning structured verdicts on candidate diff hunks.
  - 🎯 **Jev의 역할**: 비즈니스 의도에 따라 코드 차이점을 평가하여 정밀 리뷰 전 고위험 경로를 식별.
  - 💡 **핵심 장점**: 소스 코드의 프라이버시를 보장하면서 검토 범위를 고위험 변경점으로 좁힙니다.

- [**jev-scout**](https://github.com/AkashPriyadarshii/jev-scout) `★ 1` - Zero-hallucination repo and crate scout combining web search with Jev System One scoring.
  - 🎯 **Jev의 역할**: 후보 저장소의 README, 활동성 지표 및 기술 호환성을 평가하여 최적의 대안을 선별.
  - 💡 **핵심 장점**: 존재하지 않는 패키지 환각을 완전히 차단하고 검증된 실제 오픈소스 저장소를 즉시 제시.

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

- [**skillranker**](https://github.com/Dicklesworthstone/skillranker) `★ 50` - Rust CLI using Jev to rank agent skills for the next step based on live session context.
  - 🎯 **Jev의 역할**: 스텝마다 후보 스킬을 채점 및 재정렬하여 가장 적절한 도구를 선택하거나 기권 판정.
  - 💡 **핵심 장점**: 과도한 도구로 인한 에이전트 혼선을 방지하고 Claude Code 훅을 통해 의사결정 정확도를 제고.

- [**Jev Codex Router**](https://github.com/0xNatoshi/jev-codex-router) `★ 26` - Smart request router evaluating turn difficulty with Jev to route between cheap and frontier models.
  - 🎯 **Jev의 역할**: 모델 실행 전에 기술 작업의 복잡성과 컨텍스트 깊이를 사전 추정.
  - 💡 **핵심 장점**: 237턴에 걸친 실측 테스트 결과, 전체 API 비용을 약 60% 절감했습니다.

- [**typesafe-skill-router**](https://github.com/DECRUX9812/typesafe-skill-router) `★ 7` - Skill router for Hermes Agent selecting the single optimal skill to load prior to model calls.
  - 🎯 **Jev의 역할**: 수십 개의 에이전트 스킬 목록에서 사용자 프롬프트와 대조하여 로드할 유일한 도구를 선별.
  - 💡 **핵심 장점**: 모든 도구 스키마를 프롬프트에 포함할 필요를 없애 토큰 오버헤드와 초기 응답 지연을 대폭 단축.

- [**jev**](https://github.com/BorisLeMeec/jev) `★ 6` - Claude Code Go plugin utilizing Jev for rapid model tiering and context optimization.
  - 🎯 **Jev의 역할**: 코드 변경 복잡도와 지시 의도를 평가하여 경량 모델과 프론티어 모델 간의 실행 경로를 분기.
  - 💡 **핵심 장점**: 외부 런타임 의존성 없는 단일 Go 바이너리 플러그인으로 일상적인 코딩 API 비용을 절감.

- [**hermes-jev**](https://github.com/keeltrace/hermes-jev) `★ 4` - Typed System One decisions, ranking, and opt-in tool gating for Hermes Agent using Jev.
  - 🎯 **Jev의 역할**: 후보 도구들을 채점하고 접근 게이트를 적용하여 무관한 도구 호출로 인한 에이전트 경로 이탈을 차단.
  - 💡 **핵심 장점**: 도구 후보군을 필수 범위로 제한하여 복잡한 장기 실행 작업의 성공률을 대폭 향상.

- [**SpecPi**](https://github.com/TannerMidd/SpecPi) `★ 4` - Minimal harness for Pi coding agent featuring Jev advisor extension for parameter optimization.
  - 🎯 **Jev의 역할**: 코드 수정 범위와 의존성 깊이를 평가하여 적절한 모델 계층과 컨텍스트 예산을 추천.
  - 💡 **핵심 장점**: 불필요한 추상화 없는 경량 아키텍처로 정밀한 라우팅을 통해 세션 토큰 소비를 절감.

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

- [**tax-doc-classifier**](https://github.com/kyotofin/tax-doc-classifier) `★ 155` - Tax document page classifier built on Jev achieving 100% accuracy across 261 IRS forms.
  - 🎯 **Jev의 역할**: 추출된 OCR 텍스트를 분석하여 261개의 IRS 세무 서식 후보군 중 정확한 서식 종류를 판정.
  - 💡 **핵심 장점**: 261개 서식 후보군에서 100%의 정확도를 달성하며 페이지당 약 $0.001 수준으로 처리 비용을 절감.

- [**goodwatch-monorepo**](https://github.com/alp82/goodwatch-monorepo) `★ 38` - Movie and TV show discovery platform using Jev for prototype comparisons and taste affinity scoring.
  - 🎯 **Jev의 역할**: 다차원 영화 메타데이터와 사용자 취향 프로필을 평가하여 추천 적합도를 채점.
  - 💡 **핵심 장점**: 단순 벡터 코사인 유사도를 뛰어넘어 복잡한 취향 경계에서 높은 적합도의 틈새 작품을 발굴.

- [**Prism**](https://github.com/irfndi/prism-liquidity-agent) `★ 32` - DeFi liquidity agent detecting toxic flow, market stress, and pool distribution in shadow mode.
  - 🎯 **Jev의 역할**: 고주파 추론으로 평균 회귀 확률과 유동성 왜도를 즉시 평가.
  - 💡 **핵심 장점**: 초 단위 금융 리스크 모니터링에 LLM 수준의 시맨틱 인지 능력을 결합합니다.

- [**Jev-Trades**](https://github.com/zadescoxp/Jev-Trades) `★ 7` - High-frequency perp trader on Hyperliquid with live dashboard (jev-trade.com). Evaluates order book every tick to trade.
  - 🎯 **Jev의 역할**: 호가창 불균형, 깊이, 스프레드를 틱 단위로 평가하여 매수/매도, 레버리지 및 호가를 결정.
  - 💡 **핵심 장점**: 멀티 슬리브 격리를 통한 1초 미만의 탈중앙화 파생상품 거래 실행을 지원합니다.

- [**HA-Jev**](https://github.com/AboveColin/HA-Jev) `★ 6` - HA-Jev: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: 실시간 도메인 원격 측정 데이터를 수집하여 자동 실행 또는 리스크 경고를 트리거.
  - 💡 **핵심 장점**: 초 단위의 미션 크리티컬 워크플로에 구조화된 시맨틱 인지를 결합합니다.

- [**jev-seo**](https://github.com/AkashPriyadarshii/jev-seo) `★ 3` - Free agent-first SEO & GEO CLI suite and MCP server combining DuckDuckGo with Jev scoring.
  - 🎯 **Jev의 역할**: 검색 스니펫과 웹 본문의 의도 일치도, 키워드 범위 및 검색 가시성을 종합 평가.
  - 💡 **핵심 장점**: 고비용 상용 SEO 구독 서비스를 대체하여 오픈소스 CLI와 Jev 시맨틱 감사로 사이트를 최적화.

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

- [**jev-reviewer**](https://github.com/choxos/jev-reviewer) `★ 1` - Data extraction tool for systematic literature reviews quoting evidence lines with Jev assistance.
  - 🎯 **Jev의 역할**: 임상시험 보고서에서 특정 텍스트 행을 찾아 비뚤림 위험(RoB) 평가 기준 부합 여부를 판정.
  - 💡 **핵심 장점**: 모든 추출 결과를 원문 인용 및 페이지 번호와 직접 연계하며 문서를 로컬에 안전하게 보존.

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

- [**loki**](https://github.com/wundercorp/loki) `★ 24` - Self-evolving agent framework using Jev client to grade intermediate step completion and milestones.
  - 🎯 **Jev의 역할**: 에이전트의 현재 환경 상태와 목표를 평가하여 중간 마일스톤 도달 여부를 판정.
  - 💡 **핵심 장점**: 객관적이고 경량화된 완료 검증 게이트를 제공하여 무한 루프나 조기 종료 오류를 방지.

- [**killmyidea**](https://github.com/monteduro/killmyidea) `★ 17` - Startup idea triage tool: describe your idea and Jev decides whether to kill it, fix it, or ship it.
  - 🎯 **Jev의 역할**: 스타트업 아이디어를 시장 고통점, 실현 가능성 및 해자에 비추어 평가하여 kill/fix/ship을 판정.
  - 💡 **핵심 장점**: 아첨성 답변을 배제한 솔직한 피드백으로 수 초 만에 치명적인 결함을 객관적으로 직시하도록 지원.

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

- [**goodall**](https://github.com/bensyverson/goodall) - Simple and extensible agent loop for Go projects integrating TypeSafe Jev for decision branches.
  - 🎯 **Jev의 역할**: 각 턴마다 환경 관측 데이터를 평가하여 다음에 호출할 로컬 도구를 선택하거나 루프를 종료.
  - 💡 **핵심 장점**: 매우 간결한 코드베이스로 Go 언어 기반 자율 에이전트 구축을 위한 테스트 가능한 기준을 제공.

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

- [**typesafe-ai-benchmark**](https://github.com/iammrduncan/typesafe-ai-benchmark) `★ 32` - LLM Gateway and benchmark suite contrasting structured outputs against genuine Jev performance.
  - 🎯 **Jev의 역할**: 전통적 생성 모델의 구조화 출력과 네이티브 Jev의 지연 시간 및 오류율을 직접 비교.
  - 💡 **핵심 장점**: 이산 분류 시나리오에서 Jev가 기존 모델 대비 압도적인 성능 우위를 지님을 실측 데이터로 입증.

- [**typesafe-playground**](https://github.com/kavehmz/typesafe-playground) `★ 9` - Interactive sandbox testing Jev from support ticket routing to 3D autonomous driving simulations.
  - 🎯 **Jev의 역할**: 티켓에 적합한 지원 대기열을 매칭하고 3D 센서 원격 측정 데이터를 분석하여 조향 동작을 선택.
  - 💡 **핵심 장점**: 정적 텍스트 분류와 동적 물리 시뮬레이션 전반에서 Jev의 지연 시간과 신뢰도 분포를 시각적으로 입증.

- [**jev-behavior-study**](https://github.com/RINNECODER/jev-behavior-study) `★ 3` - Independent Jev 1.13.0 behavior study featuring controlled prompt tests and offline verification.
  - 🎯 **Jev의 역할**: 온도 매개변수와 프롬프트 변동에 따른 Jev의 출력 안정성과 확률 드리프트를 체계적으로 기록.
  - 💡 **핵심 장점**: System One 의사결정 모델의 특성을 객관적으로 밝혀내는 소중한 실증적 연구 근거를 제공.

- [**Canny**](https://github.com/qkal/Canny) `★ 1` - Stops AI coding agents from claiming tasks are done without evidence, aided by Jev advice.
  - 🎯 **Jev의 역할**: 도구 출력, 코드 변경점 및 테스트 통과율을 분석하여 에이전트의 완료 주장이 사실인지 평가.
  - 💡 **핵심 장점**: 결정론적 훅과 Jev 시맨틱 판단을 결합하여 조기 완료 보고 환각을 원천적으로 차단.

- [**jev-calibration-audit**](https://github.com/jujumilk3/jev-calibration-audit) - Independent calibration audit measuring Jev prediction accuracy, ECE error, and probability fidelity.
  - 🎯 **Jev의 역할**: 벤치마크 데이터셋에서 예측 확률값을 수집하고 정답 레이블과의 정렬 신뢰도를 산출.
  - 💡 **핵심 장점**: 객관적인 제3자 보정 지표를 제공하여 실제 운영 시 신뢰할 수 있는 임계값 설정을 지원.

- [**jev-eval**](https://github.com/4esv/jev-eval) - Independent evaluation benchmarking TypeSafe Jev against frontier models on accuracy, calibration, and latency.
  - 🎯 **Jev의 역할**: 표준 벤치마크 상에서 Jev와 프론티어 모델을 병렬 평가하고 엄격한 통계적 검정을 수행.
  - 💡 **핵심 장점**: 공급업체 편향 없이 이산 의사결정 워크플로에서 Jev의 지연 시간 및 비용 우위를 정량화.

---

<a id="voice-conversation-ko"></a>
## 🎙️ 음성 인터랙션 및 실시간 대화

*발화 순서 중재, 인터럽트 감지 및 실시간 저지연 음성 AI 시스템.*

- [**aiavatarkit**](https://github.com/uezo/aiavatarkit) `★ 674` - aiavatarkit: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jev의 역할**: 실시간 도메인 원격 측정 데이터를 수집하여 자동 실행 또는 리스크 경고를 트리거.
  - 💡 **핵심 장점**: 초 단위의 미션 크리티컬 워크플로에 구조화된 시맨틱 인지를 결합합니다.

- [**OpenWhisper**](https://github.com/Knuckles92/OpenWhisper) `★ 185` - Local speech-to-text platform using Jev for real-time meeting topic classification and segment triage.
  - 🎯 **Jev의 역할**: 실시간 전사된 음성 텍스트 조각을 안건 주제, 실행 항목 또는 일상 대화로 분류.
  - 💡 **핵심 장점**: 음성 스트림을 동시에 처리하여 회의 종료 후 지연 없이 구조화된 회의록 초안을 생성.

- [**leadgenrationaivoiceagent**](https://github.com/sumitrevolt/leadgenrationaivoiceagent) `★ 1` - B2B voice sales agent integrating Jev for real-time customer intent classification and turn routing.
  - 🎯 **Jev의 역할**: 음성 인식 전사 후 300ms 이내에 발화자의 핵심 의도(거절, 가격 문의, 데모 요청)를 분류.
  - 💡 **핵심 장점**: 300ms 미만의 의도 분류로 대화 지연을 해소하여 자연스러운 음성 상호작용 흐름을 지원.

---

<a id="creative-tools-ko"></a>
## 🎨 크리에이티브 미디어 및 작곡

*동적 UI 레이아웃 생성, 알고리즘 기반 작곡 및 MIDI 편곡 도구.*

- [**json-render**](https://github.com/vercel-labs/json-render) `★ 16519` - json-render: Vercel Labs generative UI library replacing token streaming with Jev discrete evaluations, cutting render latency from 3.21s to 880ms.
  - 🎯 **Jev의 역할**: 컴포넌트 트리의 적합성을 병렬로 평가하여 단일 패스로 구조화된 컴포넌트 선택 및 슬롯 동작을 직접 출력.
  - 💡 **핵심 장점**: 느린 토큰 단위 JSON 스트리밍을 제거하여 밀리초 단위로 초기 UI 렌더링을 제공.

- [**jevmeter**](https://github.com/ChetasLua/jevmeter) `★ 57` - Video caption rating pipeline scoring every sentence with Jev and rendering dynamic meters on 16:9 edits.
  - 🎯 **Jev의 역할**: 자막 문장별로 몰입도, 유머 또는 정보 밀도를 채점하여 이산 평가 지표를 반환.
  - 💡 **핵심 장점**: 시맨틱 평가 결과를 영상 내 그래픽 효과로 직접 시각화하여 영상 편집 및 검토 효율을 제고.

- [**refgarden**](https://github.com/AlbionaHoti/refgarden) `★ 15` - Spatial reference library for creators using Jev to categorize design assets and cluster visual ideas.
  - 🎯 **Jev의 역할**: 설명 텍스트를 기반으로 디자인 에셋과 영감을 미적 스타일 및 무드보드 버킷으로 분류.
  - 💡 **핵심 장점**: 창작자가 아이디어에 집중할 수 있도록 백그라운드에서 에셋 정리와 영감 연결을 자동화.

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
