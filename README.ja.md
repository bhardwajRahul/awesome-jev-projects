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
  <strong>言語切り替え:</strong>&nbsp;
  <a href="README.md">English</a> • 
  <a href="README.zh-CN.md">简体中文</a> • 
  <a href="README.ja.md">日本語</a> • 
  <a href="README.ko.md">한국어</a>
</p>

<p>
  <a href="https://logicrw.github.io/awesome-jev-projects/"><strong>🌐 ライブ対話型レーダーを開く</strong></a> • 
  <a href="https://github.com/logicrw/awesome-jev-projects/issues/new?template=project.yml"><strong>📝 プロジェクトを申請</strong></a>
</p>

<p>TypeSafe AIのJevモデルを採用した **259+** 件のオープンソースツール、実用アプリ、検証プロジェクトを網羅。ソースコード検証済み。</p>

</div>

---

> **Awesome Jev とは？**  
> 長文生成モデルとは異なり、TypeSafe AIのJevはサブ100ミリ秒の高速構造化判断（`Choice` 選択、`Score` スコアリング、`Noul` 確率推定）に特化しています。  
> 本リポジトリは、Jevを中核の意思決定エンジンとして実装した実用的なソフトウェアのみを厳選・掲載しています。

---
<a id="contents"></a>
## 目次

- [⚡ 高頻度シミュレーション・リアルタイムゲーム (20)](#high-frequency-simulation-ja)
- [🛠️ SDK・意思決定フレームワーク (32)](#sdk-decision-frameworks-ja)
- [🔌 エコシステム統合・アダプター (9)](#sdk-integrations-ja)
- [💻 CLI・自動化パイプライン (32)](#cli-pipelines-ja)
- [💾 データベース拡張・セマンティック検索 (7)](#data-search-ja)
- [🌐 ブラウザ・デスクトップ自動化 (23)](#browser-os-action-ja)
- [🧹 コンテキスト圧縮・ノイズ除去 (11)](#context-gc-filter-ja)
- [🛡️ セキュリティ・ガードレール (16)](#security-guardrails-ja)
- [🧩 MCP プロトコル・ツール拡張 (32)](#mcp-integrations-ja)
- [🧭 コードベース解析・グラフ探索 (12)](#codebase-graph-pathfinding-ja)
- [🔀 モデルルーティング・コスト最適化 (15)](#routing-cost-optimization-ja)
- [📊 専門分野・バーティカルツール (19)](#domain-vertical-tools-ja)
- [🎯 意思決定支援・ヒューリスティック評価 (14)](#decision-tools-ja)
- [🏷️ テキスト分類・タキソノミー (2)](#classification-taxonomy-ja)
- [📈 ベンチマーク・可観測性 (7)](#evaluation-observability-ja)
- [🎙️ 音声対話・リアルタイム会話 (3)](#voice-conversation-ja)
- [🎨 クリエイティブツール・メディア生成 (5)](#creative-tools-ja)
- [📖 ローカル開発とアーキテクチャ](#dev-arch-ja)
- [🤝 プロジェクトの掲載申請](#submit-guide-ja)

---

<a id="high-frequency-simulation-ja"></a>
## ⚡ 高頻度シミュレーション・リアルタイムゲーム

*ゲームやロボティクス、高頻度シミュレーションループにおけるミリ秒単位の意思決定。*

- [**jev-trader**](https://github.com/jarrodwatts/jev-trader) `★ 902` - jev-trader: High-frequency market-making bot on Monad testnet querying Jev every ~300ms block to decide buy/sell orders on Kuru orderbook.
  - 🎯 **Jevの判断箇所**: スプレッド、過去100ブロックのリターン、テイカーフローを入力し、今後30ブロックの中間価格の方向を予測。
  - 💡 **主な特徴**: 約80ミリ秒の推論レイテンシにより、サブセカンド級ブロックチェーンの生成間隔に完全に適合。

- [**typesafe-mario**](https://github.com/fhshaik/typesafe-mario) `★ 263` - typesafe-mario: Screenshot-free NES Super Mario Bros agent parsing emulator RAM into structured state for Jev to choose controller inputs in real-time.
  - 🎯 **Jevの判断箇所**: マリオの移動速度、ジャンプ軌道、前方の敵を評価し、ファミコンのコントローラー入力を決定。
  - 💡 **主な特徴**: 生のピクセル認識を決定的オブジェクトテレメトリに次元削減し、厳しいフレーム予算内で有効なアクションを出力。

- [**jev-drone**](https://github.com/RomanSlack/jev-drone) `★ 63` - jev-drone: Autonomous quadrotor in MuJoCo obstacle course using onboard camera buffers with Jev tactical judgment at 2.5Hz backed by 50Hz/500Hz flight controllers.
  - 🎯 **Jevの判断箇所**: 古典的CVによる距離セクターと障害物高さを読み取り、上昇、ブレーキ、間隙通過などの戦術機動を選択。
  - 💡 **主な特徴**: 階層化制御アーキテクチャ：Jevがマクロ戦術判断を担当し、決定論的コードが飛行の安全性を保証。

- [**jevpilot**](https://github.com/standardagents/jevpilot) `★ 58` - jevpilot: Real-time decision engine operating at sub-100ms latency for games, bots, and simulations.
  - 🎯 **Jevの判断箇所**: ゲームやロボットの移動・操舵・アクションを制御する連続マルチHz意思決定ループを実行。
  - 💡 **主な特徴**: 最先端LLMでは物理的に不可能なリアルタイム応答レートを実現。

- [**tsai-sc**](https://github.com/phyous/tsai-sc) `★ 15` - tsai-sc: TypeSafe Jev harness completing the original 1998 StarCraft Strongarm combat mission across 421 verified decisions with full visual replay proof.
  - 🎯 **Jevの判断箇所**: 構造化された戦況とリソースデータを読み取り、内政建築と戦闘ユニットの操作を独立して意思決定。
  - 💡 **主な特徴**: 複雑なリアルタイムストラテジーの状況を離散的なセマンティック決定へ分解可能であることを実証。

- [**jevscape**](https://github.com/Skyvern-AI/jevscape) `★ 6` - RuneBench harness for TypeSafe Jev featuring bounded action catalogs and tick-mode controllers.
  - 🎯 **Jevの判断箇所**: ゲームのTick状態を読み取り、有界カタログから最適なキャラクター行動と対象を選択。
  - 💡 **主な特徴**: Tick制ゲーム世界においてJevの意思決定反射神経を厳格に評価できる再現可能なベンチマーク。

- [**1v1 Jev**](https://github.com/emrickgarrett/OneVOneJev) `★ 5` - 1v1 Jev: Real-time decision engine operating at sub-100ms latency for games, bots, and simulations.
  - 🎯 **Jevの判断箇所**: ゲームやロボットの移動・操舵・アクションを制御する連続マルチHz意思決定ループを実行。
  - 💡 **主な特徴**: 最先端LLMでは物理的に不可能なリアルタイム応答レートを実現。

- [**live-jev**](https://github.com/vinilana/live-jev) `★ 3` - live-jev: Real-time decision engine operating at sub-100ms latency for games, bots, and simulations.
  - 🎯 **Jevの判断箇所**: ゲームやロボットの移動・操舵・アクションを制御する連続マルチHz意思決定ループを実行。
  - 💡 **主な特徴**: 最先端LLMでは物理的に不可能なリアルタイム応答レートを実現。

- [**jev-shield**](https://github.com/vmendes90/jev-shield) `★ 2` - Semantic content blocker distinguishing sponsored feed cards and native ads from organic content using real-time Jev judgments.
  - 🎯 **Jevの判断箇所**: フィードカードのDOM構造を検査し、通常の投稿と同一スタイルを持つスポンサー広告を分類。
  - 💡 **主な特徴**: 従来のCSSセレクターやURLブロックリストでは対処できないファーストパーティネイティブ広告を除去。

- [**JevBird**](https://github.com/leftspace89/JevBird) `★ 2` - JevBird: Real-time decision engine operating at sub-100ms latency for games, bots, and simulations.
  - 🎯 **Jevの判断箇所**: ゲームやロボットの移動・操舵・アクションを制御する連続マルチHz意思決定ループを実行。
  - 💡 **主な特徴**: 最先端LLMでは物理的に不可能なリアルタイム応答レートを実現。

- [**doom-jev**](https://github.com/AmoghCreator/doom-jev) `★ 1` - doom-jev: Real-time decision engine operating at sub-100ms latency for games, bots, and simulations.
  - 🎯 **Jevの判断箇所**: ゲームやロボットの移動・操舵・アクションを制御する連続マルチHz意思決定ループを実行。
  - 💡 **主な特徴**: 最先端LLMでは物理的に不可能なリアルタイム応答レートを実現。

- [**jev-curate**](https://github.com/AkashPriyadarshii/jev-curate) `★ 1` - High-throughput pretraining dataset sifter streaming, filtering, and scoring Parquet and JSONL rows via Jev.
  - 🎯 **Jevの判断箇所**: 毎秒1,500行以上の速度でデータセットの各行に対してScoreおよびNoulのバッチ判定を実行。
  - 💡 **主な特徴**: 高負荷なモデル学習の前に、低品質または有害な合成データを事前分離。

- [**jev-doom-agent**](https://github.com/lukaske/jev-doom-agent) `★ 1` - jev-doom-agent: Real-time decision engine operating at sub-100ms latency for games, bots, and simulations.
  - 🎯 **Jevの判断箇所**: ゲームやロボットの移動・操舵・アクションを制御する連続マルチHz意思決定ループを実行。
  - 💡 **主な特徴**: 最先端LLMでは物理的に不可能なリアルタイム応答レートを実現。

- [**jev-gomoku**](https://github.com/XieChengYuan/jev-gomoku) `★ 1` - Dual-Jev 9x9 Gomoku workbench evaluating how input representations affect placement decisions, featuring replay and live play.
  - 🎯 **Jevの判断箇所**: 1手ごとに1つのChoice問題を解決：盤面状態、候補手、ルールに基づき次の着手座標を決定。
  - 💡 **主な特徴**: ターンごとのリクエスト、モデル確率、レイテンシを可視化。棋譜の無料再生とOpenRouter対戦に対応。
  - 🌐 [オンラインデモ](https://xiechengyuan.github.io/jev-gomoku/)

- [**jev-little-airways**](https://github.com/lbotinelly/jev-little-airways) `★ 1` - jev-little-airways: Real-time decision engine operating at sub-100ms latency for games, bots, and simulations.
  - 🎯 **Jevの判断箇所**: ゲームやロボットの移動・操舵・アクションを制御する連続マルチHz意思決定ループを実行。
  - 💡 **主な特徴**: 最先端LLMでは物理的に不可能なリアルタイム応答レートを実現。

- [**jevarena**](https://github.com/raihankhan-rk/jevarena) `★ 1` - Interactive evaluation arena staging click-only browser game duels between competing Jev agents.
  - 🎯 **Jevの判断箇所**: ライブブラウザキャンバスのフレームから離散的なUI座標とクリック操作を選択。
  - 💡 **主な特徴**: 高頻度な意思決定の反射神経をテストするための視覚的対戦ベンチマークを提供。

- [**jev-demos**](https://github.com/Bud-ro/jev-demos) - jev-demos: Real-time decision engine operating at sub-100ms latency for games, bots, and simulations.
  - 🎯 **Jevの判断箇所**: ゲームやロボットの移動・操舵・アクションを制御する連続マルチHz意思決定ループを実行。
  - 💡 **主な特徴**: 最先端LLMでは物理的に不可能なリアルタイム応答レートを実現。

- [**jev-experiments**](https://github.com/mittal-parth/jev-experiments) - jev-experiments: Real-time decision engine operating at sub-100ms latency for games, bots, and simulations.
  - 🎯 **Jevの判断箇所**: ゲームやロボットの移動・操舵・アクションを制御する連続マルチHz意思決定ループを実行。
  - 💡 **主な特徴**: 最先端LLMでは物理的に不可能なリアルタイム応答レートを実現。

- [**jev-play-ping-pong**](https://github.com/Icohen007/jev-play-ping-pong) - Real-time browser ping-pong simulation where Jev evaluates table telemetry to steer the paddle.
  - 🎯 **Jevの判断箇所**: ボールの位置、速度ベクトル、パドルの座標を評価し、上移動・下移動・静止を選択。
  - 💡 **主な特徴**: 生成プロンプトの負荷を排除し、物理演算に追従する低遅延の離散アクションを実現。

- [**mk-jev-fly-brain**](https://github.com/lavallee/mk-jev-fly-brain) - Connectome meets language model: biological spiking neural network fights Jev in mk.js simulation.
  - 🎯 **Jevの判断箇所**: フレームごとの体力、距離、敵の姿勢を評価し、格闘ゲームの即時入力を決定。
  - 💡 **主な特徴**: 連続的な格闘ゲームループにおいて低遅延の反射神経と戦術的意思決定を検証。

---

<a id="sdk-decision-frameworks-ja"></a>
## 🛠️ SDK・意思決定フレームワーク

*Jevの構造化呼び出しと型安全な対話をカプセル化するクライアントライブラリ群。*

- [**rig-typesafeai**](https://github.com/0xPlaygrounds/rig) `★ 8669` - rig-typesafeai: Official Rig crate bringing native type-safe Choice, Score, and Noul System One decision primitives to the Rust LLM ecosystem.
  - 🎯 **Jevの判断箇所**: Rustのジェネリック構造体で問いと答えのレイアウトを一度だけ宣言し、Jev経由で強型フィールドへ直接デコード。
  - 💡 **主な特徴**: 手動のJSONプロンプト作成や実行時スキーマ検証が不要な、Rustネイティブのゼロコスト抽象化。

- [**req_llm**](https://github.com/agentjido/req_llm) `★ 577` - req_llm: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jevの判断箇所**: リアルタイムのドメインテレメトリを取り込み、自動実行やリスク警告をトリガー。
  - 💡 **主な特徴**: 秒単位のミッションクリティカルな業務に構造化されたセマンティック認知を導入。

- [**instructor-php**](https://github.com/cognesy/instructor-php) `★ 327` - instructor-php: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jevの判断箇所**: リアルタイムのドメインテレメトリを取り込み、自動実行やリスク警告をトリガー。
  - 💡 **主な特徴**: 秒単位のミッションクリティカルな業務に構造化されたセマンティック認知を導入。

- [**openai-scala-client**](https://github.com/cequence-io/openai-scala-client) `★ 248` - openai-scala-client: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jevの判断箇所**: リアルタイムのドメインテレメトリを取り込み、自動実行やリスク警告をトリガー。
  - 💡 **主な特徴**: 秒単位のミッションクリティカルな業務に構造化されたセマンティック認知を導入。

- [**pi-fabric**](https://github.com/monotykamary/pi-fabric) `★ 233` - pi-fabric: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jevの判断箇所**: リアルタイムのドメインテレメトリを取り込み、自動実行やリスク警告をトリガー。
  - 💡 **主な特徴**: 秒単位のミッションクリティカルな業務に構造化されたセマンティック認知を導入。

- [**typesafe-sdk-js**](https://github.com/typesafe-ai/typesafe-sdk-js) `★ 138` - Official TypeScript/JavaScript SDK for TypeSafe AI providing authoritative Jev bindings.
  - 🎯 **Jevの判断箇所**: System OneのChoice、Score、Noulエンドポイントを型推論と再試行付きで完全にサポート。
  - 💡 **主な特徴**: 公式に保守されるリファレンス実装であり、JS/TSエコシステム全体の強固な基盤として機能。

- [**effect-agent**](https://github.com/danieljvdm/effect-agent) `★ 116` - effect-agent: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jevの判断箇所**: リアルタイムのドメインテレメトリを取り込み、自動実行やリスク警告をトリガー。
  - 💡 **主な特徴**: 秒単位のミッションクリティカルな業務に構造化されたセマンティック認知を導入。

- [**jev-visual**](https://github.com/hr98w/jev-visual) `★ 95` - Local Jev-like visual inference experiment on Apple Silicon Mac. Scores and classifies single images across multiple questions with 3 playable game demos.
  - 🎯 **Jevの判断箇所**: 自己回帰生成を行わず、マルチモーダル視覚コンテキストを再利用してロジットから候補回答を直接スコアリング。
  - 💡 **主な特徴**: Apple SiliconのエッジビジョンにJevスタイルの1パス複数判定スコアリングを導入。

- [**advocaat**](https://github.com/pithings/advocaat) `★ 66` - advocaat: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jevの判断箇所**: リアルタイムのドメインテレメトリを取り込み、自動実行やリスク警告をトリガー。
  - 💡 **主な特徴**: 秒単位のミッションクリティカルな業務に構造化されたセマンティック認知を導入。

- [**ruby_decision_model**](https://github.com/obie/ruby_decision_model) `★ 36` - Ruby client library providing strongly typed request builders and retries for TypeSafe Jev.
  - 🎯 **Jevの判断箇所**: Rubyのハッシュと列挙型からSystem Oneパケットを構築し、構造化回答をデコード。
  - 💡 **主な特徴**: 慣用的なRuby構文と型スキーマを提供し、HTTPリクエストやJSONデコードのボイラープレートを排除。

- [**typesafe-ai**](https://github.com/Twister915/typesafe-ai) `★ 8` - Typed Rust SDK for TypeSafe AI featuring async/blocking backends and observable retries.
  - 🎯 **Jevの判断箇所**: Jev System Oneエンドポイントに対する通信ハンドシェイク、認証、強型付けコーデックを管理。
  - 💡 **主な特徴**: Tokio非同期ランタイムとシンプルなブロッキングCLIの両方に柔軟に対応。

- [**typesafe-sdk-go**](https://github.com/Tangerg/typesafe-sdk-go) `★ 7` - Go SDK for TypeSafe AI API: typed questions in, calibrated probability distributions out.
  - 🎯 **Jevの判断箇所**: Goバックエンド向けに標準Jevインターフェースを提供し、JSONマーシャリングと再試行を管理。
  - 💡 **主な特徴**: スレッドセーフで並行呼び出しに対応し、マイクロサービスに安定した低遅延チャネルを提供。

- [**jev-dsl**](https://github.com/inanna-malick/jev-dsl) `★ 6` - Agent-first Haskell DSL for TypeSafe Jev featuring type inference and labeled answer packets.
  - 🎯 **Jevの判断箇所**: Haskellの型システムを通じて厳密な戻り値を定義し、パース時の網羅性を保証。
  - 💡 **主な特徴**: 純粋関数型の安全パラダイムにより、Jevの判定結果の正当性をコンパイル時に検証。

- [**swift-typesafe**](https://github.com/ainame/swift-typesafe) `★ 6` - Unofficial Swift SDK providing idiomatic Apple platform wrappers for TypeSafe Jev.
  - 🎯 **Jevの判断箇所**: 強型付けされたSwift構造体で問題を定義し、Jevの離散的な選択とスコア結果をデコード。
  - 💡 **主な特徴**: XcodeプロジェクトやSwiftの現代的な並行処理ワークフローに無駄な依存なく統合。

- [**super-jev**](https://github.com/Kevthetech143/super-jev) `★ 5` - Extensible decision-to-action harness mapping Jev discrete choices to deterministic handlers.
  - 🎯 **Jevの判断箇所**: JevのChoice/Noul判定を通じてドメイン固有の問題を解決し、対応するコールバックを起動。
  - 💡 **主な特徴**: 確率的出力を決定論的なステートマシン遷移に収束させ、JSONパースやリトライを排除。

- [**typesafe-sdk**](https://github.com/joshmn/typesafe-sdk) `★ 4` - Lightweight Ruby client for typesafe.ai providing clean request wrappers and response mapping.
  - 🎯 **Jevの判断箇所**: Rubyのハッシュからクエリを構築し、離散判断レスポンスをRubyオブジェクトへパース。
  - 💡 **主な特徴**: 依存が少なくシンプルで、Railsのバックグラウンドジョブ等へ容易に組み込み可能。

- [**typesafe-ai-rs**](https://github.com/gilljon/typesafe-ai-rs) `★ 3` - Independent async and blocking Rust SDK for TypeSafe AI System One with zero-overhead error handling.
  - 🎯 **Jevの判断箇所**: 分類問題を構造化列挙型にマッピングし、サーバーの浮動小数点確率配列を安全にパース。
  - 💡 **主な特徴**: 明確なエラー列挙型設計により、ミッションクリティカルなアプリでのフォールバックを支援。

- [**typesafe-sdk-java**](https://github.com/Premo-Cloud/typesafe-sdk-java) `★ 3` - Community Java SDK and Spring Boot Starter providing autoconfigured TypeSafe Jev clients.
  - 🎯 **Jevの判断箇所**: Java POJOとアノテーションでJev System Oneクエリをカプセル化し、自動デシリアライズを実行。
  - 💡 **主な特徴**: エンタープライズSpringスタックに自動構成やスレッドプール管理でシームレスに統合。

- [**jev-go**](https://github.com/Gaurav-Gosain/jev-go) `★ 2` - Go client for TypeSafe Jev focusing on typed judgments and calibrated probabilities.
  - 🎯 **Jevの判断箇所**: 質問と候補選択肢をシリアライズしてJevに送信し、較正された確率分布付きChoice結果を返却。
  - 💡 **主な特徴**: System One契約に厳格に準拠し、結果の決定論的性質が求められる本番サービスに最適。

- [**jev-java**](https://github.com/Olti1947/jev-java) `★ 2` - Idiomatic Java SDK and type-safe client library for TypeSafe AI Jev decision engine.
  - 🎯 **Jevの判断箇所**: HTTP System Oneエンドポイントを強く型付けされたJava POJOと非同期リアクティブフローにラップ。
  - 💡 **主な特徴**: Jev駆動マイクロサービスにネイティブなエンタープライズJava互換性を実現。

- [**typesafe_sdk**](https://github.com/nshkrdotcom/typesafe_sdk) `★ 2` - Idiomatic Elixir SDK providing unified LLM and System One Jev interfaces with OTP concurrency.
  - 🎯 **Jevの判断箇所**: Elixirプロセスで非同期Jev判定を実行し、パターンマッチングで結果を処理。
  - 💡 **主な特徴**: Erlang/OTP耐障害性アーキテクチャにサブセカンド判定を導入し、大規模並行処理を支援。

- [**typesafe-go**](https://github.com/2389-research/typesafe-go) `★ 2` - Zero-dependency Go client for TypeSafe System One API relying solely on the Go standard library.
  - 🎯 **Jevの判断箇所**: ネイティブGo構造体をJevリクエストに変換し、Choice/Score/Noul出力を解析。
  - 💡 **主な特徴**: サプライチェーンリスクのないミニマル設計で、組み込み環境へのクロスコンパイルも容易。

- [**typesafe-go**](https://github.com/cole-gillespie/typesafe-go) `★ 2` - Unofficial Go SDK for TypeSafe AI featuring exponential retries, context cancellation, and typing.
  - 🎯 **Jevの判断箇所**: HTTPライフサイクルを管理し、Jevの確率分布を強型付けされたGo列挙型へデコード。
  - 💡 **主な特徴**: context.Contextキャンセルと再試行ポリシーを備え、並行バックエンドサービスに最適化。

- [**typesafe-sdk-rust**](https://github.com/codeitlikemiley/typesafe-sdk-rust) `★ 2` - Rust SDK for TypeSafe AI providing constants, serialization models, and HTTP client wrappers.
  - 🎯 **Jevの判断箇所**: Rust内でSystem Oneペイロードを構築し、エンドポイントルーティングと認証ヘッダーを管理。
  - 💡 **主な特徴**: Rustの所有権と型チェックを活用し、不正なリクエスト形式をコンパイル時に未然防止。

- [**jev-starter**](https://github.com/hamakyo/jev-starter) `★ 1` - jev-starter: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jevの判断箇所**: リアルタイムのドメインテレメトリを取り込み、自動実行やリスク警告をトリガー。
  - 💡 **主な特徴**: 秒単位のミッションクリティカルな業務に構造化されたセマンティック認知を導入。

- [**jevclient**](https://github.com/AboveColin/jevclient) `★ 1` - jevclient: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jevの判断箇所**: リアルタイムのドメインテレメトリを取り込み、自動実行やリスク警告をトリガー。
  - 💡 **主な特徴**: 秒単位のミッションクリティカルな業務に構造化されたセマンティック認知を導入。

- [**jevify**](https://github.com/altryne/jevify) `★ 1` - CLI installer and integration assistant configuring Jev decision endpoints for Claude Code, Codex, and Cursor.
  - 🎯 **Jevの判断箇所**: 開発エージェント環境全体に構造化されたJev意思決定フックを構築する対話型設定CLI。
  - 💡 **主な特徴**: マルチエージェント環境構築を自動化し、手動の設定作業を不要に。

- [**qualm**](https://github.com/qddegtya/qualm) `★ 1` - System One decision library enforcing explicit fallback strategies when Jev signals low confidence.
  - 🎯 **Jevの判断箇所**: Jevの確率分布を検査し、信頼度が安全基準を下回る場合に明示的なフォールバックを起動。
  - 💡 **主な特徴**: モデルの不確実性を型レベルで処理することを強制し、自律パイプラインでの暗黙の障害を防止。

- [**typesafe-go**](https://github.com/zhirschtritt/typesafe-go) `★ 1` - Idiomatic Go SDK for TypeSafe AI API providing ergonomic client interfaces and context control.
  - 🎯 **Jevの判断箇所**: HTTP通信とJSONコーデックを管理し、Jevの選択およびスコアをGoコードへ注入。
  - 💡 **主な特徴**: 簡潔で直感的なAPI設計により、GoバックエンドやCLIツールへの容易な組み込みを実現。

- [**typesafe-sdk-php**](https://github.com/Butochnikov/typesafe-sdk-php) `★ 1` - PHP SDK for modern PHP 8+ applications providing typed clients and query builders for Jev.
  - 🎯 **Jevの判断箇所**: PHPの連想配列や列挙型を規格に適合したJevクエリペイロードへと変換。
  - 💡 **主な特徴**: LaravelやSymfonyが外部Pythonデーモンなしでミリ秒単位の判断能力を導入可能。

- [**typesafe-rs**](https://github.com/AbdelStark/typesafe-rs) - Latency-first Rust SDK for TypeSafe System One featuring zero-copy parsing and connection pooling.
  - 🎯 **Jevの判断箇所**: 型付きRust構造体をJevリクエストにシリアライズし、確率分布データを最小負荷でデコード。
  - 💡 **主な特徴**: 不要なメモリ割り当てを排除し、デーモンや高頻度取引、CLIに最大の処理スループットを提供。

- [**typesafe-sdk-swift**](https://github.com/marandaneto/typesafe-sdk-swift) - Swift native client porting official SDK ergonomics to Swift modern async/await concurrency.
  - 🎯 **Jevの判断箇所**: Swiftのasync/awaitインターフェースでJevクエリを実行し、Codableでレスポンスをデコード。
  - 💡 **主な特徴**: iOS、macOS、LinuxのSwiftアプリでコンパイル時安全性を活かしたJev判定を利用可能。

---

<a id="sdk-integrations-ja"></a>
## 🔌 エコシステム統合・アダプター

*既存のエージェントフレームワークやランタイムをJevと接続するアダプター群。*

- [**langchain**](https://github.com/langchain-ai/langchain) `★ 146595` - langchain: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jevの判断箇所**: リアルタイムのドメインテレメトリを取り込み、自動実行やリスク警告をトリガー。
  - 💡 **主な特徴**: 秒単位のミッションクリティカルな業務に構造化されたセマンティック認知を導入。

- [**oh-my-pi**](https://github.com/can1357/oh-my-pi) `★ 31786` - oh-my-pi: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jevの判断箇所**: リアルタイムのドメインテレメトリを取り込み、自動実行やリスク警告をトリガー。
  - 💡 **主な特徴**: 秒単位のミッションクリティカルな業務に構造化されたセマンティック認知を導入。

- [**composio**](https://github.com/ComposioHQ/composio) `★ 30228` - composio: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jevの判断箇所**: リアルタイムのドメインテレメトリを取り込み、自動実行やリスク警告をトリガー。
  - 💡 **主な特徴**: 秒単位のミッションクリティカルな業務に構造化されたセマンティック認知を導入。

- [**ai**](https://github.com/vercel/ai) `★ 26825` - ai: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jevの判断箇所**: リアルタイムのドメインテレメトリを取り込み、自動実行やリスク警告をトリガー。
  - 💡 **主な特徴**: 秒単位のミッションクリティカルな業務に構造化されたセマンティック認知を導入。

- [**pydantic-ai**](https://github.com/pydantic/pydantic-ai) `★ 20027` - pydantic-ai: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jevの判断箇所**: リアルタイムのドメインテレメトリを取り込み、自動実行やリスク警告をトリガー。
  - 💡 **主な特徴**: 秒単位のミッションクリティカルな業務に構造化されたセマンティック認知を導入。

- [**eliza**](https://github.com/elizaOS/eliza) `★ 19359` - eliza: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jevの判断箇所**: リアルタイムのドメインテレメトリを取り込み、自動実行やリスク警告をトリガー。
  - 💡 **主な特徴**: 秒単位のミッションクリティカルな業務に構造化されたセマンティック認知を導入。

- [**langchainjs**](https://github.com/langchain-ai/langchainjs) `★ 18207` - langchainjs: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jevの判断箇所**: リアルタイムのドメインテレメトリを取り込み、自動実行やリスク警告をトリガー。
  - 💡 **主な特徴**: 秒単位のミッションクリティカルな業務に構造化されたセマンティック認知を導入。

- [**ax**](https://github.com/ax-llm/ax) `★ 2926` - ax: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jevの判断箇所**: リアルタイムのドメインテレメトリを取り込み、自動実行やリスク警告をトリガー。
  - 💡 **主な特徴**: 秒単位のミッションクリティカルな業務に構造化されたセマンティック認知を導入。

- [**ruby_llm-typesafe**](https://github.com/kieranklaassen/ruby_llm-typesafe) `★ 12` - TypeSafe structured-output provider driver for RubyLLM 2 unified model framework.
  - 🎯 **Jevの判断箇所**: RubyLLMのスキーマをJevクエリに変換し、分類や選択判断のタスクを高速に代行。
  - 💡 **主な特徴**: 既存のRubyLLMアプリに適合し、業務コードを変更せずに高速Jev推論へ切り替え可能。

---

<a id="cli-pipelines-ja"></a>
## 💻 CLI・自動化パイプライン

*ターミナルコマンド、Unixパイプ、CI/CDにセマンティック判定を組み込むツール群。*

- [**jev-experiments**](https://github.com/dabit3/jev-experiments) `★ 255` - Developer experimentation suite by Nader Dabit featuring commit sentry and intent triage with Jev.
  - 🎯 **Jevの判断箇所**: コミット差分を評価してリスクを分類し、問題のあるコミットを遮断して改善案を提示。
  - 💡 **主な特徴**: 開発者ツールチェーンにおけるJevの有用性を示す実践的なコード群を提供。

- [**runline**](https://github.com/Michaelliv/runline) `★ 162` - Agent code execution runtime embedding Jev plugins to validate shell command security.
  - 🎯 **Jevの判断箇所**: 提案されたシェルコマンドを評価し、セキュリティリスク、パス破壊、不正な通信を分類。
  - 💡 **主な特徴**: 静的正規表現を超えた汎用的なセマンティック検証により、自律エージェントの安全な実行を担保。

- [**captaincore**](https://github.com/CaptainCore/captaincore) `★ 71` - WordPress site management CLI incorporating Jev for update risk scoring and plugin compatibility.
  - 🎯 **Jevの判断箇所**: プラグインの更新履歴と競合情報を評価し、自動更新か手動レビューかを判定。
  - 💡 **主な特徴**: 一括メンテナンスタスクにセマンティックガードレールを導入し、更新による障害を未然に防止。

- [**jev-voice-browser**](https://github.com/moritzkremb/jev-voice-browser) `★ 35` - Control a real browser with sub-300ms voice commands, using Jev to resolve intent and target elements before sentences finish.
  - 🎯 **Jevの判断箇所**: 発話ごとに約300ミリ秒で音声入力を対象DOMコントロールと操作に分類。
  - 💡 **主な特徴**: 発話が完了する前に操作を開始できるほど高速な音声駆動ブラウジングを実現。

- [**supercov**](https://github.com/supercorp-ai/supercov) `★ 32` - Code quality and test coverage for coding agents: Jev scores each source file so the agent knows what to fix first. Coverage runs locally with no account.
  - 🎯 **Jevの判断箇所**: 1回のリクエストで各ソースファイルの12個のNoulプロパティを照会し、CLI側でスコア計算とファイル並び替えを実行。
  - 💡 **主な特徴**: スコアはファイルごとに検証可能なプロパティに分解され、コンテンツに応じてキャッシュ。

- [**hono-jev-router**](https://github.com/yusukebe/hono-jev-router) `★ 19` - Semantic HTTP request router for Hono applications powered by TypeSafe Jev discrete classifications.
  - 🎯 **Jevの判断箇所**: 静的なURLパスではなく、セマンティックな意味に基づいて受信HTTPリクエストをルーティング。
  - 💡 **主な特徴**: 軽量なエッジやサーバーレスWeb APIに意図ベースのルーティングを組み込み。

- [**jev-playground**](https://github.com/mizchi/jev-playground) `★ 14` - jev-playground: Command-line utility embedding Jev decision logic directly into Unix pipes and CI scripts.
  - 🎯 **Jevの判断箇所**: 標準入力ストリームに対してリアルタイムのセマンティック分類とフィルタリングを適用。
  - 💡 **主な特徴**: シェルワークフローやCI/CDに依存関係ゼロのセマンティックガードレールを組み込み。

- [**openjev**](https://github.com/razorback16/openjev) `★ 14` - Open-source, self-hostable Jev-compatible System One decision server built on DiffusionGemma.
  - 🎯 **Jevの判断箇所**: TypeSafeのAPI仕様に準拠したChoice、Score、Noulの構造化推論リクエストを処理。
  - 💡 **主な特徴**: ローカルのJev互換意思決定ループ向けに、即座に置き換え可能なOSS選択肢を提供。

- [**jev-axi**](https://github.com/shiftynick/jev-axi) `★ 13` - Ergonomic CLI suite for Jev executing pick, rate, check, rank, triage, and guard commands from shell.
  - 🎯 **Jevの判断箇所**: サブコマンドに応じて、シェル入力をChoice、Score、Noul、ランキング、ガードゲートに振り分け。
  - 💡 **主な特徴**: Jevの全決定プリミティブをUnixライクなコマンドにまとめ、Bashパイプラインへ容易に統合。

- [**rift**](https://github.com/exYze/rift) `★ 9` - High-performance Rust terminal TUI embedding Jev decision components for code assistance.
  - 🎯 **Jevの判断箇所**: ターミナルコンテキストとカーソル位置のコードを分析し、最適な補完やリファクタリングを選択。
  - 💡 **主な特徴**: Rustのゼロオーバーヘッドとサブセカンド判定を融合し、軽快なターミナル操作性を実現。

- [**SemDecide**](https://github.com/sharziki/semdecide) `★ 5` - Unix command-line utility bringing Jev into terminal pipes and CI pipelines for semantic filtering and scoring.
  - 🎯 **Jevの判断箇所**: Unixテキストストリーム上でリアルタイムの分類、スコアリング、しきい値ガードを直接実行。
  - 💡 **主な特徴**: Python実行オーバーヘッドなしでBashスクリプトやCI/CDパイプラインに直接組み込み可能。

- [**jev-lm**](https://github.com/y0usaf/jev-lm) `★ 4` - jev-lm: Command-line utility embedding Jev decision logic directly into Unix pipes and CI scripts.
  - 🎯 **Jevの判断箇所**: 標準入力ストリームに対してリアルタイムのセマンティック分類とフィルタリングを適用。
  - 💡 **主な特徴**: シェルワークフローやCI/CDに依存関係ゼロのセマンティックガードレールを組み込み。

- [**typesafe-jev-workflow**](https://github.com/GiesN/typesafe-jev-workflow) `★ 4` - Async LangGraph workflow routing simulated emails to typed destination handlers via Jev Choice judgments.
  - 🎯 **Jevの判断箇所**: 受信メールペイロードを離散的なカテゴリ選択（請求書 vs 一般問い合わせ等）に分類。
  - 💡 **主な特徴**: 冗長なプロンプトオーバーヘッドなしで、決定論的なステートマシン分岐を提供。

- [**jev-chat**](https://github.com/adhyaay-karnwal/jev-chat) `★ 3` - jev-chat: Command-line utility embedding Jev decision logic directly into Unix pipes and CI scripts.
  - 🎯 **Jevの判断箇所**: 標準入力ストリームに対してリアルタイムのセマンティック分類とフィルタリングを適用。
  - 💡 **主な特徴**: シェルワークフローやCI/CDに依存関係ゼロのセマンティックガードレールを組み込み。

- [**jev-cli**](https://github.com/tumf/jev-cli) `★ 2` - jev-cli: Command-line utility embedding Jev decision logic directly into Unix pipes and CI scripts.
  - 🎯 **Jevの判断箇所**: 標準入力ストリームに対してリアルタイムのセマンティック分類とフィルタリングを適用。
  - 💡 **主な特徴**: シェルワークフローやCI/CDに依存関係ゼロのセマンティックガードレールを組み込み。

- [**jev-pref**](https://github.com/doeixd/jev-pref) `★ 2` - Turn AGENTS.md preferences into a fast, Jev-powered AI linter: define project-specific review rules in jev-pref.json, check hunks, staged files or PRs with Jev, and feed findings back to your coding agent.
  - 🎯 **Jevの判断箇所**: 各設定ルールおよびコード変更ハンクごとに、変更がルールに違反しているかを判定。
  - 💡 **主な特徴**: pre-commitやPR、エージェント向けのCLI。警告とブロッキングを明確に分離。

- [**jev-system-one**](https://github.com/haseeb-heaven/jev-system-one) `★ 2` - jev-system-one: Command-line utility embedding Jev decision logic directly into Unix pipes and CI scripts.
  - 🎯 **Jevの判断箇所**: 標準入力ストリームに対してリアルタイムのセマンティック分類とフィルタリングを適用。
  - 💡 **主な特徴**: シェルワークフローやCI/CDに依存関係ゼロのセマンティックガードレールを組み込み。

- [**jevcal**](https://github.com/abhixhek/jevcal) `★ 2` - Calibration and drift-detection toolkit for typed decision models against frontier LLM teachers.
  - 🎯 **Jevの判断箇所**: 較正曲線、最適な信頼度しきい値、および経時的な分布ドリフトを計算。
  - 💡 **主な特徴**: 信頼度の妥当性を体系的に検証し、意思決定の品質劣化を防止。

- [**pi-fast-jev-compaction**](https://github.com/joelhooks/pi-fast-jev-compaction) `★ 2` - pi-fast-jev-compaction: Command-line utility embedding Jev decision logic directly into Unix pipes and CI scripts.
  - 🎯 **Jevの判断箇所**: 標準入力ストリームに対してリアルタイムのセマンティック分類とフィルタリングを適用。
  - 💡 **主な特徴**: シェルワークフローやCI/CDに依存関係ゼロのセマンティックガードレールを組み込み。

- [**todo-jev**](https://github.com/maker-KK/todo-jev) `★ 2` - Intelligent task classifier and 3-tier routing engine organizing todo items via Jev decisions.
  - 🎯 **Jevの判断箇所**: タスクメモを優先度階層、実行コンテキスト、スケジュール枠に自動分類。
  - 💡 **主な特徴**: 100ms未満の応答速度でバックログ整理とタスク優先度判定を自動化。

- [**ask-jev**](https://github.com/omni-/ask-jev) `★ 1` - ask-jev: Command-line utility embedding Jev decision logic directly into Unix pipes and CI scripts.
  - 🎯 **Jevの判断箇所**: 標準入力ストリームに対してリアルタイムのセマンティック分類とフィルタリングを適用。
  - 💡 **主な特徴**: シェルワークフローやCI/CDに依存関係ゼロのセマンティックガードレールを組み込み。

- [**is-odd-jev**](https://github.com/alxcrt/is-odd-jev) `★ 1` - is-odd-jev: Command-line utility embedding Jev decision logic directly into Unix pipes and CI scripts.
  - 🎯 **Jevの判断箇所**: 標準入力ストリームに対してリアルタイムのセマンティック分類とフィルタリングを適用。
  - 💡 **主な特徴**: シェルワークフローやCI/CDに依存関係ゼロのセマンティックガードレールを組み込み。

- [**jev-askable-arm**](https://github.com/TarunTomar122/jev-askable-arm) `★ 1` - Robot arm manipulation controller selecting discrete action primitives and target objects via high-speed Jev decisions.
  - 🎯 **Jevの判断箇所**: シミュレーション状態に基づき、離散的なロボット基本スキルと目標座標を選択。
  - 💡 **主な特徴**: 高レベルな離散スキル選択と低レベルなPDモーター制御を分離。

- [**jev-cli**](https://github.com/jtsang4/jev-cli) `★ 1` - jev-cli: Command-line utility embedding Jev decision logic directly into Unix pipes and CI scripts.
  - 🎯 **Jevの判断箇所**: 標準入力ストリームに対してリアルタイムのセマンティック分類とフィルタリングを適用。
  - 💡 **主な特徴**: シェルワークフローやCI/CDに依存関係ゼロのセマンティックガードレールを組み込み。

- [**jev-cli**](https://github.com/Nasrallah-AL/jev-cli) `★ 1` - Command-line interface for testing, dry-running, and piping structured Jev decisions in shell pipelines.
  - 🎯 **Jevの判断箇所**: 標準入力から型付きJevクエリを実行し、パイプ処理用のJSONまたは構造化終了コードを出力。
  - 💡 **主な特徴**: 標準的なBashおよびCIスクリプトにSystem One判定ゲートをシームレスに組み込み。

- [**jev-code**](https://github.com/rhighs/jev-code) `★ 1` - jev-code: Command-line utility embedding Jev decision logic directly into Unix pipes and CI scripts.
  - 🎯 **Jevの判断箇所**: 標準入力ストリームに対してリアルタイムのセマンティック分類とフィルタリングを適用。
  - 💡 **主な特徴**: シェルワークフローやCI/CDに依存関係ゼロのセマンティックガードレールを組み込み。

- [**jev-git**](https://github.com/AkashPriyadarshii/jev-git) `★ 1` - Sub-second Git pre-commit and pre-push semantic reflex gate powered by TypeSafe Jev.
  - 🎯 **Jevの判断箇所**: ステージされた差分を走査し、ルール違反、アーキテクチャの逸脱、ハードコードされた秘密を分類。
  - 💡 **主な特徴**: 約300msで動作する純Rustバイナリにより、コミットごとにシームレスな品質ゲートを適用。

- [**jev-synergy-screening**](https://github.com/PistachioAIHQ/jev-synergy-screening) `★ 1` - High-throughput biomedical literature abstract triage pipeline for systematic reviews using typed Jev decisions.
  - 🎯 **Jevの判断箇所**: 論文のタイトルと抄録（TIAB）を評価し、関連性を分類して採用確率をスコアリング。
  - 💡 **主な特徴**: 高速セマンティック事前フィルタリングによりシステマティックレビューを劇的に加速。

- [**LightJev**](https://github.com/rongxinzy/LightJev) `★ 1` - Lightweight training and evaluation framework for typed decision backbones, exploring CE/Brier loss on offline decision tasks.
  - 🎯 **Jevの判断箇所**: ベンチマークデータセット全体で候補確率と離散選択の精度を評価。
  - 💡 **主な特徴**: コンパクトなSystem One意思決定モデルのオフライン実験と評価を可能に。

- [**pi-jev-compaction**](https://github.com/Wang-auspicious/pi-jev-compaction) `★ 1` - Context compaction utility for Pi retaining critical instructions and tool records via Jev scoring.
  - 🎯 **Jevの判断箇所**: 過去のツール呼び出しの有用性をスコアリングし、モデル入力前に非本質的な出力をフィルタリング。
  - 💡 **主な特徴**: 長時間のマルチステップコーディングセッションでもエージェントメモリをクリーンに維持。

- [**TypeSafe AI Playground**](https://github.com/markjaquith/typesafe-ai-playground) `★ 1` - Rust CLI playground experimenting with PHI detection, code comment review, and sentiment classification.
  - 🎯 **Jevの判断箇所**: 短いテキストに対してサブミリ秒のセマンティックパターンマッチングと属性判定を実行。
  - 💡 **主な特徴**: ローカル環境でJevの判定プリミティブをテストする開発者に最適なサンドボックス。

- [**jevscript**](https://github.com/amberwhitehead/jevscript) - jevscript: Command-line utility embedding Jev decision logic directly into Unix pipes and CI scripts.
  - 🎯 **Jevの判断箇所**: 標準入力ストリームに対してリアルタイムのセマンティック分類とフィルタリングを適用。
  - 💡 **主な特徴**: シェルワークフローやCI/CDに依存関係ゼロのセマンティックガードレールを組み込み。

---

<a id="data-search-ja"></a>
## 💾 データベース拡張・セマンティック検索

*拡張機能不要のネイティブSQLセマンティック拡張、行レベルフィルタリング、リランキング。*

- [**pg-jev**](https://github.com/realZachi/pg-jev) `★ 137` - pg-jev: Semantic query and classification layer applied over tabular databases and search indexes.
  - 🎯 **Jevの判断箇所**: テーブルレコードに対してバッチセマンティックマッチングと条件評価を実行。
  - 💡 **主な特徴**: 既存のSQLクエリ内で自然言語によるセマンティックフィルタリングを直接実現。

- [**pg_typesafe**](https://github.com/giuliosmall/pg_typesafe) `★ 76` - Pre-alpha PostgreSQL C extension calling Jev directly within SQL queries for categorical classification.
  - 🎯 **Jevの判断箇所**: SQL実行中に行テキストのJev分類を実行し、結果をSQLカラムとして返却。
  - 💡 **主な特徴**: 外部スクリプトへのデータ転送を伴わずに、DBエンジン内で直接セマンティック分類を実行。

- [**jev-search**](https://github.com/superagents-lab/jev-search) `★ 38` - jev-search: Semantic query and classification layer applied over tabular databases and search indexes.
  - 🎯 **Jevの判断箇所**: テーブルレコードに対してバッチセマンティックマッチングと条件評価を実行。
  - 💡 **主な特徴**: 既存のSQLクエリ内で自然言語によるセマンティックフィルタリングを直接実現。

- [**duckdb-jev**](https://github.com/colliber/duckdb-jev) `★ 8` - DuckDB extension exposing typed Jev answers directly as native SQL types and expressions.
  - 🎯 **Jevの判断箇所**: DuckDBクエリ内で行テキストに対してJev分類およびスコア判定を実行し、型付き列を生成。
  - 💡 **主な特徴**: 列指向分析パイプライン内で直接、超高速なセマンティックラベリングとフィルタリングを実現。

- [**jevsql**](https://github.com/EugeneBoondock/jevsql) `★ 3` - SQL engine with natural-language predicates powered by Jev for semantic filtering and ranking.
  - 🎯 **Jevの判断箇所**: データセット行全体で自然言語条件の一致度を評価し、フィルタリングと並び替え順序を決定。
  - 💡 **主な特徴**: 自動バッチ処理、コンテンツキャッシュ、コスト制限を備え、SQLにセマンティック認識を付与。

- [**jevql**](https://github.com/kylemclaren/jevql) `★ 2` - Semantic SQL for vanilla Postgres without database extensions. Query rows with WHERE jev(), jev_prob, jev_choice, and jev_score via CLI and Go/TS/Python SDKs.
  - 🎯 **Jevの判断箇所**: Noul、Choice、Scoreの判定を用いてテーブル行候補を評価し、クライアント側のセマンティックフィルタリングやソートを実行。
  - 💡 **主な特徴**: 自動バッチ処理、並行処理プール、コンテンツ連動キャッシュを備えた2パスクライアント実行。
  - 🌐 [オンラインデモ](https://jevql.fly.dev/)

- [**llama-index-jev**](https://github.com/WiktorB2004/llama-index-jev) `★ 2` - Reranker and semantic router for LlamaIndex leveraging Jev for typed document scoring and choice.
  - 🎯 **Jevの判断箇所**: 候補ドキュメントの関連度をスコアリングし、特化型インデックスコレクションへクエリを振り分け。
  - 💡 **主な特徴**: 重いLLM-as-a-judgeリランキングに代わる、より高速で経済的な選択肢。

---

<a id="browser-os-action-ja"></a>
## 🌐 ブラウザ・デスクトップ自動化

*DOMアクセシビリティツリー解析、自律型ブラウザ操作、デスクトップGUI自動化。*

- [**cua**](https://github.com/trycua/cua) `★ 23548` - cua: Open-source computer use infrastructure using jev-use driver for discrete desktop and browser actions, with open-source CUA-S1 model family.
  - 🎯 **Jevの判断箇所**: 有界なUI状態と画面領域テーブルを評価し、具体的なクリック、フォーカス、ショートカット操作を決定。
  - 💡 **主な特徴**: OS制御を高速な離散アクションに分解することで、低速なマルチモーダル計画ループをバイパス。

- [**jev-ultrafast**](https://github.com/browser-use/jev-ultrafast) `★ 4673` - Ultra-fast browser agent using Jev for per-step DOM action decisions. Complete Google Flights search in ~7.1s.
  - 🎯 **Jevの判断箇所**: 1回のリクエストで次のアクションと対象DOM要素を決定し、テキスト入力のみをテキストモデルに委譲。
  - 💡 **主な特徴**: UI操作とテキスト生成を分離し、冗長なページ評価を大幅に削減。

- [**jev-desktop**](https://github.com/lahfir/agent-desktop) `★ 1266` - jev-desktop: Automates browser or desktop interactions by turning UI state into discrete choices.
  - 🎯 **Jevの判断箇所**: DOMやアクセシビリティツリーの状態をリアルタイムに評価し、対象UI要素と次の操作を選択。
  - 💡 **主な特徴**: 意思決定を実行から分離し、検査可能で超高速なUIナビゲーションを実現。

- [**Agent**](https://github.com/AgentiLoop/Agent) `★ 616` - macOS native autonomous agent bundling TypeSafeKit for fast OS action decisions and scripting.
  - 🎯 **Jevの判断箇所**: アプリ状態とユーザー目標を評価し、次のmacOSネイティブ自動化アクションと引数を選択。
  - 💡 **主な特徴**: Swiftネイティブ実装とJevの構造化判断を統合し、OS操作の計画遅延を最小化。

- [**omg.dev**](https://github.com/BennyKok/omg.dev) `★ 531` - omg.dev: Automates browser or desktop interactions by turning UI state into discrete choices.
  - 🎯 **Jevの判断箇所**: DOMやアクセシビリティツリーの状態をリアルタイムに評価し、対象UI要素と次の操作を選択。
  - 💡 **主な特徴**: 意思決定を実行から分離し、検査可能で超高速なUIナビゲーションを実現。

- [**typesafe-computer-use**](https://github.com/awlevin/typesafe-computer-use) `★ 237` - typesafe-computer-use: Ultra-low-cost macOS computer use combining deterministic OCR with Jev discrete action choices at ~$0.0002 per step.
  - 🎯 **Jevの判断箇所**: 目標に照らして画面要素リストを比較し、候補の中から次のアトミックなクリックまたはキーストロークを選択。
  - 💡 **主な特徴**: マルチモーダルLLMへの高解像度スクリーンショット送信を回避し、莫大なトークン費用と画像処理の遅延を解消。

- [**jev-browser-use**](https://github.com/wy-coliney/jev-browser-use) `★ 132` - Browser automation by EZCollegeApp where Jev handles clicks and Codex plans, speeding ops 5–10x.
  - 🎯 **Jevの判断箇所**: 軽量DOM候補から具体的なクリック対象、フォーム入力、スクロール操作を決定。
  - 💡 **主な特徴**: 局所的操作と大局的計画を分離し、処理速度を5〜10倍向上させつつマルチモーダルコストを削減。

- [**mobile-jev**](https://github.com/droidrun/mobile-jev) `★ 93` - mobile-jev: Automates browser or desktop interactions by turning UI state into discrete choices.
  - 🎯 **Jevの判断箇所**: DOMやアクセシビリティツリーの状態をリアルタイムに評価し、対象UI要素と次の操作を選択。
  - 💡 **主な特徴**: 意思決定を実行から分離し、検査可能で超高速なUIナビゲーションを実現。

- [**jev-use**](https://github.com/vlad-terin/jev-use) `★ 76` - jev-use: Automates browser or desktop interactions by turning UI state into discrete choices.
  - 🎯 **Jevの判断箇所**: DOMやアクセシビリティツリーの状態をリアルタイムに評価し、対象UI要素と次の操作を選択。
  - 💡 **主な特徴**: 意思決定を実行から分離し、検査可能で超高速なUIナビゲーションを実現。

- [**jev-browser**](https://github.com/jkudish/jev-browser) `★ 70` - jev-browser: Automates browser or desktop interactions by turning UI state into discrete choices.
  - 🎯 **Jevの判断箇所**: DOMやアクセシビリティツリーの状態をリアルタイムに評価し、対象UI要素と次の操作を選択。
  - 💡 **主な特徴**: 意思決定を実行から分離し、検査可能で超高速なUIナビゲーションを実現。

- [**unclutter**](https://github.com/kitze/unclutter) `★ 66` - unclutter: Automates browser or desktop interactions by turning UI state into discrete choices.
  - 🎯 **Jevの判断箇所**: DOMやアクセシビリティツリーの状態をリアルタイムに評価し、対象UI要素と次の操作を選択。
  - 💡 **主な特徴**: 意思決定を実行から分離し、検査可能で超高速なUIナビゲーションを実現。

- [**plasmallm**](https://github.com/joshuaeroman/plasmallm) `★ 28` - KDE Plasma desktop widget adapter introducing Jev decision gates for desktop interactions.
  - 🎯 **Jevの判断箇所**: デスクトップでのユーザー意図を評価し、ローカルショートカット、対話、ツール呼び出しを分岐。
  - 💡 **主な特徴**: 日常的なデスクトップ操作において、重いクラウドモデルを呼ばずに100ms未満で意図を分類。

- [**Jev-cu**](https://github.com/Sac-Y/Jev-cu) `★ 14` - Jev-cu: Desktop Computer Use co-processor delegating "where to click next" to Jev System One from text candidates without raw screenshots.
  - 🎯 **Jevの判断箇所**: UIテキストの候補から次の操作対象、アクション種別、完了度、およびリスクレベルを直接評価。
  - 💡 **主な特徴**: テキストのみの候補評価によりマルチモーダルトークンの消費と遅延を大幅削減し、厳格なローカルポリシーゲートを適用。

- [**jev-browser**](https://github.com/Ying-Kai-Liao/jev-browser) `★ 12` - Hybrid browser automation where an LLM plans and Jev decides low-level clicks and interactions.
  - 🎯 **Jevの判断箇所**: アクセシビリティツリーから具体的なDOMセレクタとインタラクション種別を選択。
  - 💡 **主な特徴**: ライブラリ、CLI、MCPを提供し、Web自動化における探索待機時間とコストを抑制。

- [**jev-ego**](https://github.com/romaluev/jev-ego) `★ 4` - Fast browser agent for ego lite executing one TypeSafe request per step to pick the next move.
  - 🎯 **Jevの判断箇所**: 操作可能な要素を評価し、クリック、テキスト入力、スクロール、フォーム送信を選択。
  - 💡 **主な特徴**: ステップごとの多段推論ループを排除し、フォーム入力やナビゲーションを大幅に高速化。

- [**AskJev**](https://github.com/ranjan2829/AskJev) `★ 2` - AskJev: Automates browser or desktop interactions by turning UI state into discrete choices.
  - 🎯 **Jevの判断箇所**: DOMやアクセシビリティツリーの状態をリアルタイムに評価し、対象UI要素と次の操作を選択。
  - 💡 **主な特徴**: 意思決定を実行から分離し、検査可能で超高速なUIナビゲーションを実現。

- [**computer-use-jev**](https://github.com/paulsmith/computer-use-jev) `★ 2` - computer-use-jev: Automates browser or desktop interactions by turning UI state into discrete choices.
  - 🎯 **Jevの判断箇所**: DOMやアクセシビリティツリーの状態をリアルタイムに評価し、対象UI要素と次の操作を選択。
  - 💡 **主な特徴**: 意思決定を実行から分離し、検査可能で超高速なUIナビゲーションを実現。

- [**aside-jev**](https://github.com/himomohi/aside-jev) `★ 1` - aside-jev: Automates browser or desktop interactions by turning UI state into discrete choices.
  - 🎯 **Jevの判断箇所**: DOMやアクセシビリティツリーの状態をリアルタイムに評価し、対象UI要素と次の操作を選択。
  - 💡 **主な特徴**: 意思決定を実行から分離し、検査可能で超高速なUIナビゲーションを実現。

- [**jev-browser**](https://github.com/tontoko/jev-browser) `★ 1` - jev-browser: Automates browser or desktop interactions by turning UI state into discrete choices.
  - 🎯 **Jevの判断箇所**: DOMやアクセシビリティツリーの状態をリアルタイムに評価し、対象UI要素と次の操作を選択。
  - 💡 **主な特徴**: 意思決定を実行から分離し、検査可能で超高速なUIナビゲーションを実現。

- [**ego-jev**](https://github.com/phd-peter/ego-jev) - Integrates Jev with Ego Lite browser agent. Reads semantic snapshots to decide DOM clicks and wheel scrolls, delegating text entry to LLMs.
  - 🎯 **Jevの判断箇所**: ページスナップショットから候補アクション空間を評価し、単一リクエストで対象コントロールと操作種別を選択。
  - 💡 **主な特徴**: 1秒未満のブラウザループのために、重いビジョンモデルを軽量セマンティックスナップショットに置き換え。

- [**grokskill-jev**](https://github.com/AE-AlphaEdge/grokskill-jev) - grokskill-jev: Automates browser or desktop interactions by turning UI state into discrete choices.
  - 🎯 **Jevの判断箇所**: DOMやアクセシビリティツリーの状態をリアルタイムに評価し、対象UI要素と次の操作を選択。
  - 💡 **主な特徴**: 意思決定を実行から分離し、検査可能で超高速なUIナビゲーションを実現。

- [**jev-macos-loop**](https://github.com/jcpsimmons/jev-macos-loop) - jev-macos-loop: Automates browser or desktop interactions by turning UI state into discrete choices.
  - 🎯 **Jevの判断箇所**: DOMやアクセシビリティツリーの状態をリアルタイムに評価し、対象UI要素と次の操作を選択。
  - 💡 **主な特徴**: 意思決定を実行から分離し、検査可能で超高速なUIナビゲーションを実現。

- [**openclaw-typesafe-ai**](https://github.com/Olli0103/openclaw-typesafe-ai) - OpenClaw web scraping adapter incorporating Jev decisions for target selection and captcha triage.
  - 🎯 **Jevの判断箇所**: ページ構造を分析し、ページネーションセレクタ、動的トリガー、スクレイピング防止壁を判別。
  - 💡 **主な特徴**: 決定論的な型セレクタでスクレイピングを制御し、動的Webレイアウトに対する耐性を向上。

---

<a id="context-gc-filter-ja"></a>
## 🧹 コンテキスト圧縮・ノイズ除去

*トークン節約、プロンプトコンテキストの不要情報整理、タイムラインのノイズ除去。*

- [**fast-jev-compaction**](https://github.com/tamaratran/fast-jev-compaction) `★ 2645` - fast-jev-compaction: Prunes extraneous tool outputs, logs, and grep results before feeding LLM context.
  - 🎯 **Jevの判断箇所**: 現在のタスク目標に対する関連性を1行ずつ判定し、冗長なトークンノイズを破棄。
  - 💡 **主な特徴**: コンテキストウィンドウの消費を抑え、長時間セッションでの推論劣化を防止。

- [**skillbox**](https://github.com/kitze/skillbox) `★ 149` - skillbox: Prunes extraneous tool outputs, logs, and grep results before feeding LLM context.
  - 🎯 **Jevの判断箇所**: 現在のタスク目標に対する関連性を1行ずつ判定し、冗長なトークンノイズを破棄。
  - 💡 **主な特徴**: コンテキストウィンドウの消費を抑え、長時間セッションでの推論劣化を防止。

- [**bluenoise**](https://github.com/rokcso/bluenoise) `★ 82` - X/Twitter browser extension filtering noise. Uses local rules first, batching ambiguous replies to Jev for noise probability scoring (filters at >=0.9).
  - 🎯 **Jevの判断箇所**: 1リクエストあたり最大25件の返信候補をバッチ処理し、ノイズ確率（Noul）を判定してDOM表示を制御。
  - 💡 **主な特徴**: X API依存ゼロ。高速なローカル一致とJevセマンティック判定を組み合わせタイムラインを浄化。

- [**jev-pruner**](https://github.com/tamaratran/jev-pruner) `★ 17` - Claude Code plugin trimming voluminous Bash and command outputs with Jev before model ingestion.
  - 🎯 **Jevの判断箇所**: コマンド出力ブロックのエラー関連性とコンテキスト有用性を評価し、保持またはトリミングを決定。
  - 💡 **主な特徴**: 後続のプロンプトトークン消費を大幅に削減し、ノイズの多いログによるコンテキスト飽和を防止。

- [**Winnow**](https://github.com/GhalebDweikat/winnow) `★ 13` - Context garbage collector for Claude Code pruning voluminous bash, grep, and file outputs.
  - 🎯 **Jevの判断箇所**: ターミナルやツールの出力を瞬時にフィルタリングし、現在のバグに直接関連する行のみを抽出。
  - 💡 **主な特徴**: ノイズの多いログによるエージェントのコンテキスト飽和と推論能力低下を防止。

- [**jevlogs**](https://github.com/reachjalil/jevlogs) `★ 5` - jevlogs: Prunes extraneous tool outputs, logs, and grep results before feeding LLM context.
  - 🎯 **Jevの判断箇所**: 現在のタスク目標に対する関連性を1行ずつ判定し、冗長なトークンノイズを破棄。
  - 💡 **主な特徴**: コンテキストウィンドウの消費を抑え、長時間セッションでの推論劣化を防止。

- [**jev-skill-gate**](https://github.com/ShivamPansuriya/jev-skill-gate) `★ 2` - jev-skill-gate: Prunes extraneous tool outputs, logs, and grep results before feeding LLM context.
  - 🎯 **Jevの判断箇所**: 現在のタスク目標に対する関連性を1行ずつ判定し、冗長なトークンノイズを破棄。
  - 💡 **主な特徴**: コンテキストウィンドウの消費を抑え、長時間セッションでの推論劣化を防止。

- [**pi-jev-context**](https://github.com/kevinpita/pi-jev-context) `★ 2` - Reversible context pruning for Pi powered by Jev, keeping useful context without deleting history.
  - 🎯 **Jevの判断箇所**: ツール実行結果と対話を検査し、保持・折りたたみ・参照ポインタへの置き換えを決定。
  - 💡 **主な特徴**: プロンプトの簡潔さを維持しながら元の履歴を保持する完全可逆設計を実現。

- [**jev-context**](https://github.com/zbush/jev-context) `★ 1` - jev-context: Prunes extraneous tool outputs, logs, and grep results before feeding LLM context.
  - 🎯 **Jevの判断箇所**: 現在のタスク目標に対する関連性を1行ずつ判定し、冗長なトークンノイズを破棄。
  - 💡 **主な特徴**: コンテキストウィンドウの消費を抑え、長時間セッションでの推論劣化を防止。

- [**your-signal**](https://github.com/MithrilMan/your-signal) `★ 1` - Open-source BYOK Chrome extension using Jev to filter spam and low-signal posts from X timelines.
  - 🎯 **Jevの判断箇所**: ツイート本文と文脈を評価し、有益な技術的議論と無価値な宣伝ノイズを判別。
  - 💡 **主な特徴**: 無関係な投稿をクライアント側でスマートに非表示化し、いつでも即座に復元可能。

- [**pi-jev-compact**](https://github.com/ilkerulusoy/pi-jev-compact) - Context compression extension for Pi coding agent using Jev to identify and prune redundancy.
  - 🎯 **Jevの判断箇所**: 現在のタスクに対する過去ログや対話ターンの必要性を評価し、圧縮対象を特定。
  - 💡 **主な特徴**: 長時間のコーディングセッションにおいてコンテキスト領域を回復し、推論の劣化を防止。

---

<a id="security-guardrails-ja"></a>
## 🛡️ セキュリティ・ガードレール

*プロンプトインジェクション防御、コンテンツモデレーション、ポリシー適合性検査。*

- [**agentgateway**](https://github.com/agentgateway/agentgateway) `★ 4916` - agentgateway: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jevの判断箇所**: リアルタイムのドメインテレメトリを取り込み、自動実行やリスク警告をトリガー。
  - 💡 **主な特徴**: 秒単位のミッションクリティカルな業務に構造化されたセマンティック認知を導入。

- [**interlinked-cli**](https://github.com/QuentinCody/interlinked-cli) `★ 177` - interlinked-cli: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jevの判断箇所**: リアルタイムのドメインテレメトリを取り込み、自動実行やリスク警告をトリガー。
  - 💡 **主な特徴**: 秒単位のミッションクリティカルな業務に構造化されたセマンティック認知を導入。

- [**pi-jev**](https://github.com/y0usaf/pi-jev) `★ 126` - pi-jev: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jevの判断箇所**: リアルタイムのドメインテレメトリを取り込み、自動実行やリスク警告をトリガー。
  - 💡 **主な特徴**: 秒単位のミッションクリティカルな業務に構造化されたセマンティック認知を導入。

- [**pi-warden**](https://github.com/DevMortimer/pi-warden) `★ 61` - pi-warden: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jevの判断箇所**: リアルタイムのドメインテレメトリを取り込み、自動実行やリスク警告をトリガー。
  - 💡 **主な特徴**: 秒単位のミッションクリティカルな業務に構造化されたセマンティック認知を導入。

- [**typesafe-adblock**](https://github.com/realZachi/typesafe-adblock) `★ 50` - Experimental Chrome extension querying Jev whether a DOM element is an ad and removing it directly.
  - 🎯 **Jevの判断箇所**: DOMノードのテキストと属性を評価し、ネイティブ広告やスポンサーコンテンツを分類。
  - 💡 **主な特徴**: 膨大な静的ルールリストを回避し、通常のデザインに偽装した広告をセマンティックに検知。

- [**vibecheck**](https://github.com/RafalWilinski/vibecheck) `★ 30` - Chrome extension vibe-checking X posts with TypeSafe Jev before hitting Post.
  - 🎯 **Jevの判断箇所**: 投稿前のドラフトを走査し、炎上リスク、攻撃的表現、プライバシーリスクを分類。
  - 💡 **主な特徴**: SNS投稿前に即座に自己点検ゲートを提供し、オンライン上での評判リスクを保護。

- [**Jev-Moderation-Bot**](https://github.com/brainstormity/Jev-Moderation-Bot) `★ 28` - Chat moderation bot using Jev for low-latency violation triage and automated enforcement.
  - 🎯 **Jevの判断箇所**: チャットメッセージ内の嫌がらせ、スパム、ヘイト、悪意あるリンクを信頼度付きで判定。
  - 💡 **主な特徴**: 高価な生成モデルを介さずに、高スループットなチャットルームをミリ秒単位で保護。

- [**snifftest**](https://github.com/DanRWilloughby/snifftest) `★ 14` - Prose linter detecting AI writing patterns using deterministic rules and Jev decision scoring.
  - 🎯 **Jevの判断箇所**: 文章段落を評価し、定型的な接続詞、不自然な過剰表現、機械的な対称構文を検知。
  - 💡 **主な特徴**: 構文統計とセマンティック判定を組み合わせ、文単位の精緻なフィードバックを依存ゼロで提供。

- [**pi-jev-auto-mode**](https://github.com/jomatsu/pi-jev-auto-mode) `★ 9` - pi-jev-auto-mode: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jevの判断箇所**: リアルタイムのドメインテレメトリを取り込み、自動実行やリスク警告をトリガー。
  - 💡 **主な特徴**: 秒単位のミッションクリティカルな業務に構造化されたセマンティック認知を導入。

- [**Safer with Jev**](https://github.com/andrelandgraf/typesafe-on-neon) `★ 3` - Serverless request router on Neon evaluating incoming queries and dispatching to specialized frontier models.
  - 🎯 **Jevの判断箇所**: コールドスタートなしでユーザー意図（簡単なQ&A vs 複雑なコーディング vs 推論）を瞬時に分類。
  - 💡 **主な特徴**: モデルの階層化を最適化しながらグローバルレイテンシを最小化。

- [**jev-block-android-ad**](https://github.com/ufec/jev-block-android-ad) `★ 2` - JevNoiseGate: Android notification and SMS noise gate using Jev to classify and suppress spam ads while strictly failing open on OTP verification codes.
  - 🎯 **Jevの判断箇所**: キャプチャした通知やSMSのテキストをJevに送信し、メッセージが広告ノイズであるかを判定。
  - 💡 **主な特徴**: 脆弱なキーワードブラックリストを堅牢なセマンティックフィルタリングに置き換え、認証コードの誤遮断をゼロに。

- [**jev-cvss**](https://github.com/Red5d/jev-cvss) `★ 2` - Security vulnerability triage utility evaluating CVE descriptions to predict CVSS v3.1 metrics.
  - 🎯 **Jevの判断箇所**: 非構造化な説明文から攻撃ベクトル、複雑性、特権要件、影響度の離散値を抽出。
  - 💡 **主な特徴**: JSONフォーマット崩れなしにミリ秒単位で確定的な脆弱性ベクトルスコアを出力。

- [**jev-guard**](https://github.com/leepokai/jev-guard) `★ 2` - jev-guard: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jevの判断箇所**: リアルタイムのドメインテレメトリを取り込み、自動実行やリスク警告をトリガー。
  - 💡 **主な特徴**: 秒単位のミッションクリティカルな業務に構造化されたセマンティック認知を導入。

- [**jev-judgment**](https://github.com/HyunjunJeon/jev-judgment) `★ 2` - jev-judgment: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jevの判断箇所**: リアルタイムのドメインテレメトリを取り込み、自動実行やリスク警告をトリガー。
  - 💡 **主な特徴**: 秒単位のミッションクリティカルな業務に構造化されたセマンティック認知を導入。

- [**oc-auto-perms**](https://github.com/OpeOginni/oc-plugins) `★ 2` - oc-auto-perms: Intent-aware permission plugin for OpenCode V2 using natural language policies evaluated by Jev across shell and network tool invocations.
  - 🎯 **Jevの判断箇所**: ユーザーの対話履歴とツールの引数を総合評価し、実行意図がセキュリティポリシー規則に適合しているかを判定。
  - 💡 **主な特徴**: 静的な正規表現マッチングを超越：ツール選択に依存せずセマンティックな意図からポリシー違反を検知。

- [**jev-tool-permissions**](https://github.com/NicolasMontone/jev-tool-permissions) `★ 1` - jev-tool-permissions: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jevの判断箇所**: リアルタイムのドメインテレメトリを取り込み、自動実行やリスク警告をトリガー。
  - 💡 **主な特徴**: 秒単位のミッションクリティカルな業務に構造化されたセマンティック認知を導入。

---

<a id="mcp-integrations-ja"></a>
## 🧩 MCP プロトコル・ツール拡張

*Model Context Protocol（MCP）に準拠した標準意思決定サーバーとツール群。*

- [**vellum-assistant**](https://github.com/vellum-ai/vellum-assistant) `★ 1285` - vellum-assistant: Exposes Jev low-latency decision primitives via the Model Context Protocol (MCP).
  - 🎯 **Jevの判断箇所**: 外部エージェント環境向けに、Choice・Score・Noulの判断ツールをオンデマンドで提供。
  - 💡 **主な特徴**: 低遅延な構造化意思決定を既存のエージェントスタックに容易に統合。

- [**ai**](https://github.com/hackclub/ai) `★ 133` - ai: Exposes Jev low-latency decision primitives via the Model Context Protocol (MCP).
  - 🎯 **Jevの判断箇所**: 外部エージェント環境向けに、Choice・Score・Noulの判断ツールをオンデマンドで提供。
  - 💡 **主な特徴**: 低遅延な構造化意思決定を既存のエージェントスタックに容易に統合。

- [**taskuary**](https://github.com/ldbumble/taskuary) `★ 102` - taskuary: Exposes Jev low-latency decision primitives via the Model Context Protocol (MCP).
  - 🎯 **Jevの判断箇所**: 外部エージェント環境向けに、Choice・Score・Noulの判断ツールをオンデマンドで提供。
  - 💡 **主な特徴**: 低遅延な構造化意思決定を既存のエージェントスタックに容易に統合。

- [**jev-mcp**](https://github.com/jkudish/jev-mcp) `★ 67` - Pragmatic MCP utility suite packaging real-time fact-checking, prompt injection guards, and semantic reranking.
  - 🎯 **Jevの判断箇所**: 出力の安全性と事実整合性を即座に2値判定し、候補のリランキングを実施。
  - 💡 **主な特徴**: 最先端モデルの極めてわずかなコストで軽量な安全ガードレールを適用。

- [**typesafe-mcp**](https://github.com/itsmostafa/typesafe-mcp) `★ 59` - MCP server connecting Jev directly into Claude Code, Claude Desktop, and Codex as a decision co-processor.
  - 🎯 **Jevの判断箇所**: 自律型LLMエージェントに対してオンデマンドで構造化判断（Choice / Score / Noul）を提供。
  - 💡 **主な特徴**: 最先端モデルの遅延なしに、エージェントが100ms未満で多肢選択決定を行えるよう支援。

- [**synkora-ai**](https://github.com/getsynkora/synkora-ai) `★ 34` - synkora-ai: Exposes Jev low-latency decision primitives via the Model Context Protocol (MCP).
  - 🎯 **Jevの判断箇所**: 外部エージェント環境向けに、Choice・Score・Noulの判断ツールをオンデマンドで提供。
  - 💡 **主な特徴**: 低遅延な構造化意思決定を既存のエージェントスタックに容易に統合。

- [**pi-typesafe**](https://github.com/DevMortimer/pi-typesafe) `★ 14` - Extension suite for Pi coding agent providing batch Jev evaluation, terminal playground, and APIs.
  - 🎯 **Jevの判断箇所**: Piセッション内で候補ファイルやコード修正案を一括評価し、構造化された推奨事項を返却。
  - 💡 **主な特徴**: Pi拡張機能開発者向けに即座に利用可能な判断ツールと対話型サンドボックスを提供。

- [**Jevbridge**](https://github.com/gamesonrblx/Jevbridge) `★ 13` - Jevbridge: Exposes Jev low-latency decision primitives via the Model Context Protocol (MCP).
  - 🎯 **Jevの判断箇所**: 外部エージェント環境向けに、Choice・Score・Noulの判断ツールをオンデマンドで提供。
  - 💡 **主な特徴**: 低遅延な構造化意思決定を既存のエージェントスタックに容易に統合。

- [**cline-plugin-jev-browser**](https://github.com/abeatrix/cline-plugin-jev-browser) `★ 12` - cline-plugin-jev-browser: Cline desktop browser plugin routing through Vercel AI Gateway to execute DOM element selection and sub-second clicks via Jev.
  - 🎯 **Jevの判断箇所**: 軽量DOMツリーとタスクコンテキストを受け取り、ページ操作アクションと対象セレクタを返却。
  - 💡 **主な特徴**: ブラウザ操作を型安全な決定的列挙型に制約し、エージェントの誤動作や迷走を低減。

- [**jev**](https://github.com/dannote/jev) `★ 10` - jev: Exposes Jev low-latency decision primitives via the Model Context Protocol (MCP).
  - 🎯 **Jevの判断箇所**: 外部エージェント環境向けに、Choice・Score・Noulの判断ツールをオンデマンドで提供。
  - 💡 **主な特徴**: 低遅延な構造化意思決定を既存のエージェントスタックに容易に統合。

- [**jev-mcp**](https://github.com/blakestone-x/jev-mcp) `★ 7` - Pragmatic MCP utility suite packaging real-time fact-checking, prompt injection guards, and semantic reranking.
  - 🎯 **Jevの判断箇所**: 出力の安全性と事実整合性を即座に2値判定し、候補のリランキングを実施。
  - 💡 **主な特徴**: 最先端モデルの極めてわずかなコストで軽量な安全ガードレールを適用。

- [**pi-jev**](https://github.com/TheoOliveira/pi-jev) `★ 6` - pi-jev: Exposes Jev low-latency decision primitives via the Model Context Protocol (MCP).
  - 🎯 **Jevの判断箇所**: 外部エージェント環境向けに、Choice・Score・Noulの判断ツールをオンデマンドで提供。
  - 💡 **主な特徴**: 低遅延な構造化意思決定を既存のエージェントスタックに容易に統合。

- [**zod-jev**](https://github.com/jomatsu/zod-jev) `★ 6` - zod-jev: Exposes Jev low-latency decision primitives via the Model Context Protocol (MCP).
  - 🎯 **Jevの判断箇所**: 外部エージェント環境向けに、Choice・Score・Noulの判断ツールをオンデマンドで提供。
  - 💡 **主な特徴**: 低遅延な構造化意思決定を既存のエージェントスタックに容易に統合。

- [**JevRouter**](https://github.com/BillionsBobby/JevRouter) `★ 4` - Local-first agent capability router coordinating models, tools, and subagents with Jev decision gates.
  - 🎯 **Jevの判断箇所**: 安全性と権限ポリシーを適用しながら、最適な実行エージェントとツールを選択。
  - 💡 **主な特徴**: 異種エージェント機能を単一の型安全なルーティング層に統合。

- [**daf-jev**](https://github.com/docxology/daf-jev) `★ 3` - daf-jev: Exposes Jev low-latency decision primitives via the Model Context Protocol (MCP).
  - 🎯 **Jevの判断箇所**: 外部エージェント環境向けに、Choice・Score・Noulの判断ツールをオンデマンドで提供。
  - 💡 **主な特徴**: 低遅延な構造化意思決定を既存のエージェントスタックに容易に統合。

- [**hermes-jev-approvals**](https://github.com/anpicasso/hermes-jev-approvals) `★ 3` - hermes-jev-approvals: Exposes Jev low-latency decision primitives via the Model Context Protocol (MCP).
  - 🎯 **Jevの判断箇所**: 外部エージェント環境向けに、Choice・Score・Noulの判断ツールをオンデマンドで提供。
  - 💡 **主な特徴**: 低遅延な構造化意思決定を既存のエージェントスタックに容易に統合。

- [**jevex**](https://github.com/jvsteiner/jevex) `★ 3` - jevex: Exposes Jev low-latency decision primitives via the Model Context Protocol (MCP).
  - 🎯 **Jevの判断箇所**: 外部エージェント環境向けに、Choice・Score・Noulの判断ツールをオンデマンドで提供。
  - 💡 **主な特徴**: 低遅延な構造化意思決定を既存のエージェントスタックに容易に統合。

- [**jevwire**](https://github.com/Brainwires/jevwire) `★ 3` - Agent decision layer providing an MCP server, embeddable library, and Claude Code escalation plugin.
  - 🎯 **Jevの判断箇所**: タスクのリスクと複雑性を評価し、上位モデルへ処理をエスカレーションすべきタイミングを判定。
  - 💡 **主な特徴**: 組み込み可能な判定ゲートにより、高コストな最先端モデルの不要な呼び出しを削減。

- [**jev-mcp**](https://github.com/rashedInt32/jev-mcp) `★ 2` - Pragmatic MCP utility suite packaging real-time fact-checking, prompt injection guards, and semantic reranking.
  - 🎯 **Jevの判断箇所**: 出力の安全性と事実整合性を即座に2値判定し、候補のリランキングを実施。
  - 💡 **主な特徴**: 最先端モデルの極めてわずかなコストで軽量な安全ガードレールを適用。

- [**jev-workbench**](https://github.com/molis-ai/jev-workbench) `★ 2` - jev-workbench: Exposes Jev low-latency decision primitives via the Model Context Protocol (MCP).
  - 🎯 **Jevの判断箇所**: 外部エージェント環境向けに、Choice・Score・Noulの判断ツールをオンデマンドで提供。
  - 💡 **主な特徴**: 低遅延な構造化意思決定を既存のエージェントスタックに容易に統合。

- [**laravel-typesafe-jev**](https://github.com/Butochnikov/laravel-typesafe-jev) `★ 2` - laravel-typesafe-jev: Exposes Jev low-latency decision primitives via the Model Context Protocol (MCP).
  - 🎯 **Jevの判断箇所**: 外部エージェント環境向けに、Choice・Score・Noulの判断ツールをオンデマンドで提供。
  - 💡 **主な特徴**: 低遅延な構造化意思決定を既存のエージェントスタックに容易に統合。

- [**tenbin**](https://github.com/simota/tenbin) `★ 2` - MCP server and agent skill decomposing judgments into Choice/Score/Noul queries with calibration.
  - 🎯 **Jevの判断箇所**: MCPエージェントに標準化されたJevツールを提供し、コード内で較正されたしきい値検査を強制。
  - 💡 **主な特徴**: プロンプト構造と信頼度較正を標準化し、テスト可能で決定論的なエージェントロジックを実現。

- [**codex-jev-compaction**](https://github.com/Wang-auspicious/codex-jev-compaction) `★ 1` - Jev-powered context curation skill for Codex generating compact, traceable task handoff packages.
  - 🎯 **Jevの判断箇所**: 過去の会話ステップとツールログを評価し、エージェント引き継ぎに必要な重要コンテキストを抽出。
  - 💡 **主な特徴**: プロンプトトークンを大幅に節約しながら、幻覚のないコンパクトな引き継ぎ状態を生成。

- [**jev_ampcode**](https://github.com/thesammykins/jev_ampcode) `★ 1` - jev_ampcode: Exposes Jev low-latency decision primitives via the Model Context Protocol (MCP).
  - 🎯 **Jevの判断箇所**: 外部エージェント環境向けに、Choice・Score・Noulの判断ツールをオンデマンドで提供。
  - 💡 **主な特徴**: 低遅延な構造化意思決定を既存のエージェントスタックに容易に統合。

- [**jev-classifier**](https://github.com/felpsdev/jev-classifier) `★ 1` - Local tool-routing classifier and gateway for coding agents with decision logging.
  - 🎯 **Jevの判断箇所**: プロンプトの意図を評価し、特化型ツールやエージェントプラグインへタスクを振り分け。
  - 💡 **主な特徴**: エージェントのツールセットを制御することで、呼び出しの乱立を防ぎ遅延を削減。

- [**jev-go**](https://github.com/Stumble/jev-go) `★ 1` - jev-go: Exposes Jev low-latency decision primitives via the Model Context Protocol (MCP).
  - 🎯 **Jevの判断箇所**: 外部エージェント環境向けに、Choice・Score・Noulの判断ツールをオンデマンドで提供。
  - 💡 **主な特徴**: 低遅延な構造化意思決定を既存のエージェントスタックに容易に統合。

- [**jev-go**](https://github.com/guillemus/jev-go) `★ 1` - jev-go: Exposes Jev low-latency decision primitives via the Model Context Protocol (MCP).
  - 🎯 **Jevの判断箇所**: 外部エージェント環境向けに、Choice・Score・Noulの判断ツールをオンデマンドで提供。
  - 💡 **主な特徴**: 低遅延な構造化意思決定を既存のエージェントスタックに容易に統合。

- [**jev-mcp**](https://github.com/BYK/jev-mcp) `★ 1` - Evaluation-first Model Context Protocol (MCP) server providing typed Jev decision tools.
  - 🎯 **Jevの判断箇所**: 較正されたChoice、Score、Noulの判定機能をClaude DesktopやCursorに直接提供。
  - 💡 **主な特徴**: あらゆるMCP準拠エージェントに即座に組み込み可能な意思決定プリミティブを提供。

- [**jev-resilience**](https://github.com/Vicente-MD/jev-resilience) `★ 1` - jev-resilience: Exposes Jev low-latency decision primitives via the Model Context Protocol (MCP).
  - 🎯 **Jevの判断箇所**: 外部エージェント環境向けに、Choice・Score・Noulの判断ツールをオンデマンドで提供。
  - 💡 **主な特徴**: 低遅延な構造化意思決定を既存のエージェントスタックに容易に統合。

- [**jevgo**](https://github.com/fgn/jevgo) `★ 1` - jevgo: Exposes Jev low-latency decision primitives via the Model Context Protocol (MCP).
  - 🎯 **Jevの判断箇所**: 外部エージェント環境向けに、Choice・Score・Noulの判断ツールをオンデマンドで提供。
  - 💡 **主な特徴**: 低遅延な構造化意思決定を既存のエージェントスタックに容易に統合。

- [**jevscan**](https://github.com/jevbook/jevscan) `★ 1` - On-chain token risk scanner providing typed EVM safety verdicts, rug risk, and liquidity health scores.
  - 🎯 **Jevの判断箇所**: コントラクトのバイトコードと流動性プール指標を評価し、ape/watch/avoidの格付けを出力。
  - 💡 **主な特徴**: リアルタイムのDeFiテレメトリと即座のマシンリスクスコアリングを融合。

- [**n8n-nodes-typesafe-jev**](https://github.com/n3ndor/n8n-nodes-typesafe-jev) - n8n community node introducing TypeSafe Jev structured AI decision capabilities to workflows.
  - 🎯 **Jevの判断箇所**: ワークフローイベントデータを評価し、カテゴリ、スコア、真偽判定を出力して処理を分岐。
  - 💡 **主な特徴**: ノーコード/ローコード環境において、カスタムコード不要で決定論的な判定分岐を導入可能。

---

<a id="codebase-graph-pathfinding-ja"></a>
## 🧭 コードベース解析・グラフ探索

*コード依存関係ナビゲーション、ASTシンボル検査、コードレビュー支援、知識グラフ探索。*

- [**celesto**](https://github.com/CelestoAI/celesto) `★ 943` - celesto: Semantic exploration engine for codebases and knowledge graphs using beam search.
  - 🎯 **Jevの判断箇所**: 候補ファイルや知識グラフのエッジに関連度確率を割り当て、探索パスを指示。
  - 💡 **主な特徴**: 高コストなベクトルインデックスなしで目的のコードや関係性を瞬時に特定。

- [**Jev Review**](https://github.com/devagrawal09/jev-review) `★ 241` - Code review triage engine assessing correctness, security, reliability, and compatibility before deep review.
  - 🎯 **Jevの判断箇所**: 変更差分のリスク次元を事前にスコアリングし、最先端モデルが精査すべき高リスク箇所を特定。
  - 💡 **主な特徴**: 定型的な差分ではなく、重要なコード変更に高価なモデル推論を集中。

- [**jev-review**](https://github.com/NiazMorshed2007/jev-review) `★ 111` - Code review triage engine assessing correctness, security, reliability, and compatibility before deep review.
  - 🎯 **Jevの判断箇所**: 変更差分のリスク次元を事前にスコアリングし、最先端モデルが精査すべき高リスク箇所を特定。
  - 💡 **主な特徴**: 定型的な差分ではなく、重要なコード変更に高価なモデル推論を集中。

- [**commit-miner**](https://github.com/devanshbatham/commit-miner) `★ 22` - Classify Git commit diffs and messages with Jev into bug fixes, security CWEs, and change types.
  - 🎯 **Jevの判断箇所**: 差分ハンクとコミットメッセージを走査し、リファクタリング、新機能、CWE修正へ分類。
  - 💡 **主な特徴**: Rustによる高速実装で、数千件のコミット履歴を迅速に分析してセキュリティ情報を抽出。

- [**neo4jev**](https://github.com/jexp/neo4jev) `★ 16` - Knowledge graph pathfinder scoring candidate edges with Jev and traversing paths via beam search.
  - 🎯 **Jevの判断箇所**: 低遅延な探索のために候補グラフ関係に遷移確率を割り当て。
  - 💡 **主な特徴**: マルチホップグラフ推論を桁違いに高速化。

- [**Blink**](https://github.com/ellipsis-dev/blink) `★ 14` - Semantic pathfinder navigating large codebases without vector indexes using beam search.
  - 🎯 **Jevの判断箇所**: 階層ごとに候補ファイルとディレクトリを評価し、関連性の高いパスへ探索バジェットを配分。
  - 💡 **主な特徴**: 事前インデックスなしで大規模リポジトリ内の関連ファイルを即座に特定。

- [**jev-code**](https://github.com/devagrawal09/jev-code) `★ 6` - jev-code: Semantic exploration engine for codebases and knowledge graphs using beam search.
  - 🎯 **Jevの判断箇所**: 候補ファイルや知識グラフのエッジに関連度確率を割り当て、探索パスを指示。
  - 💡 **主な特徴**: 高コストなベクトルインデックスなしで目的のコードや関係性を瞬時に特定。

- [**leanest**](https://github.com/baronunread/leanest) `★ 3` - Local-first test selector using Jev judgments to pinpoint tests affected by code changes.
  - 🎯 **Jevの判断箇所**: 差分ロジックと関数シグネチャを分析し、変更の影響を受けるテストサブセットを抽出。
  - 💡 **主な特徴**: 軽微な変更で全テストを実行する無駄を省き、開発フィードバックループを数秒に短縮。

- [**claude-jev**](https://github.com/buchmark/claude-jev) `★ 1` - claude-jev: Semantic exploration engine for codebases and knowledge graphs using beam search.
  - 🎯 **Jevの判断箇所**: 候補ファイルや知識グラフのエッジに関連度確率を割り当て、探索パスを指示。
  - 💡 **主な特徴**: 高コストなベクトルインデックスなしで目的のコードや関係性を瞬時に特定。

- [**jev-flash-review**](https://github.com/TheBous/jev-flash-review) `★ 1` - Local-first code review triage engine returning structured verdicts on candidate diff hunks.
  - 🎯 **Jevの判断箇所**: ビジネス意図に照らしてコード差分を評価し、詳細レビュー前に高リスクパスを特定。
  - 💡 **主な特徴**: ソースコードのプライバシーを守りながら、レビュー範囲を高リスク箇所に絞り込み。

- [**jev-scout**](https://github.com/AkashPriyadarshii/jev-scout) `★ 1` - Zero-hallucination repo and crate scout combining web search with Jev System One scoring.
  - 🎯 **Jevの判断箇所**: 候補リポジトリのREADME、活動指標、スタック互換性を評価し、最適な選択肢を抽出。
  - 💡 **主な特徴**: 存在しない架空パッケージの幻覚を排除し、検証済みの実在リポジトリを瞬時に提示。

- [**foreman-jev**](https://github.com/Shifty-Eye-Games/foreman-jev) - foreman-jev: Semantic exploration engine for codebases and knowledge graphs using beam search.
  - 🎯 **Jevの判断箇所**: 候補ファイルや知識グラフのエッジに関連度確率を割り当て、探索パスを指示。
  - 💡 **主な特徴**: 高コストなベクトルインデックスなしで目的のコードや関係性を瞬時に特定。

---

<a id="routing-cost-optimization-ja"></a>
## 🔀 モデルルーティング・コスト最適化

*タスク難易度の自動判定、多層モデルルーティング、API利用コストの大幅削減。*

- [**litellm**](https://github.com/BerriAI/litellm) `★ 59076` - litellm: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jevの判断箇所**: リアルタイムのドメインテレメトリを取り込み、自動実行やリスク警告をトリガー。
  - 💡 **主な特徴**: 秒単位のミッションクリティカルな業務に構造化されたセマンティック認知を導入。

- [**jev-model-router**](https://github.com/davila7/claude-code-templates) `★ 30779` - jev-model-router: Claude Code mod using Jev to evaluate task difficulty, reasoning effort, and blast radius in one call to route subagents dynamically.
  - 🎯 **Jevの判断箇所**: タスクの難易度階層、推論深度、本番リスクを並行評価し、Claude Codeへ最適なモデル設定を動的注入。
  - 💡 **主な特徴**: 軽微なタスクへの過剰支出を防ぎつつ、高リスクなコード変更に対して厳格な高信頼度しきい値を適用。

- [**openchamber**](https://github.com/openchamber/openchamber) `★ 10038` - openchamber: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jevの判断箇所**: リアルタイムのドメインテレメトリを取り込み、自動実行やリスク警告をトリガー。
  - 💡 **主な特徴**: 秒単位のミッションクリティカルな業務に構造化されたセマンティック認知を導入。

- [**firstmate**](https://github.com/kunchenguid/firstmate) `★ 6502` - firstmate: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jevの判断箇所**: リアルタイムのドメインテレメトリを取り込み、自動実行やリスク警告をトリガー。
  - 💡 **主な特徴**: 秒単位のミッションクリティカルな業務に構造化されたセマンティック認知を導入。

- [**atomic**](https://github.com/bastani-inc/atomic) `★ 805` - atomic: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jevの判断箇所**: リアルタイムのドメインテレメトリを取り込み、自動実行やリスク警告をトリガー。
  - 💡 **主な特徴**: 秒単位のミッションクリティカルな業務に構造化されたセマンティック認知を導入。

- [**vexjoy-agent**](https://github.com/notque/vexjoy-agent) `★ 420` - vexjoy-agent: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jevの判断箇所**: リアルタイムのドメインテレメトリを取り込み、自動実行やリスク警告をトリガー。
  - 💡 **主な特徴**: 秒単位のミッションクリティカルな業務に構造化されたセマンティック認知を導入。

- [**WrongStack**](https://github.com/WrongStack/WrongStack) `★ 327` - WrongStack: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jevの判断箇所**: リアルタイムのドメインテレメトリを取り込み、自動実行やリスク警告をトリガー。
  - 💡 **主な特徴**: 秒単位のミッションクリティカルな業務に構造化されたセマンティック認知を導入。

- [**skillranker**](https://github.com/Dicklesworthstone/skillranker) `★ 50` - Rust CLI using Jev to rank agent skills for the next step based on live session context.
  - 🎯 **Jevの判断箇所**: ステップごとに候補スキルをスコアリングして並べ替え、最も適切なツールを選択または棄権。
  - 💡 **主な特徴**: 過剰なツールによるエージェントの迷走を防ぎ、Claude Codeフックを通じて判断精度を向上。

- [**Jev Codex Router**](https://github.com/0xNatoshi/jev-codex-router) `★ 26` - Smart request router evaluating turn difficulty with Jev to route between cheap and frontier models.
  - 🎯 **Jevの判断箇所**: モデル実行前に技術タスクの複雑性とコンテキスト深度を事前推定。
  - 💡 **主な特徴**: 237ターンの実測テストで、API利用料金を約60%削減。

- [**typesafe-skill-router**](https://github.com/DECRUX9812/typesafe-skill-router) `★ 7` - Skill router for Hermes Agent selecting the single optimal skill to load prior to model calls.
  - 🎯 **Jevの判断箇所**: 多数のエージェントスキル候補からユーザープロンプトを照合し、ロードすべき単一のツールを選択。
  - 💡 **主な特徴**: 全ツールのスキーマをプロンプトに埋め込む必要がなくなり、トークン消費とTTFTを大幅に短縮。

- [**jev**](https://github.com/BorisLeMeec/jev) `★ 6` - Claude Code Go plugin utilizing Jev for rapid model tiering and context optimization.
  - 🎯 **Jevの判断箇所**: 変更の複雑さと指示の意図を評価し、軽量モデルと上位モデルの間で処理を振り分け。
  - 💡 **主な特徴**: 外部依存関係のない単一のGoバイナリプラグインにより、日々の開発APIコストを削減。

- [**hermes-jev**](https://github.com/keeltrace/hermes-jev) `★ 4` - Typed System One decisions, ranking, and opt-in tool gating for Hermes Agent using Jev.
  - 🎯 **Jevの判断箇所**: 候補ツールを評価してアクセスゲートを適用し、不要なツール呼び出しによる迷走を防止。
  - 💡 **主な特徴**: ツール選択肢を必要最小限に絞り込み、長時間の複雑タスクにおける実行成功率を向上。

- [**SpecPi**](https://github.com/TannerMidd/SpecPi) `★ 4` - Minimal harness for Pi coding agent featuring Jev advisor extension for parameter optimization.
  - 🎯 **Jevの判断箇所**: コード変更規模と依存深度を評価し、適切なモデルティアとコンテキスト配分を推奨。
  - 💡 **主な特徴**: 過剰な抽象化を排除した軽量設計により、的確なルーティングでトークン消費を抑制。

- [**jev-demo**](https://github.com/minghanminghan/jev-demo) - jev-demo: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jevの判断箇所**: リアルタイムのドメインテレメトリを取り込み、自動実行やリスク警告をトリガー。
  - 💡 **主な特徴**: 秒単位のミッションクリティカルな業務に構造化されたセマンティック認知を導入。

- [**jev-router-playground**](https://github.com/hugo-alves/jev-router-playground) - jev-router-playground: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jevの判断箇所**: リアルタイムのドメインテレメトリを取り込み、自動実行やリスク警告をトリガー。
  - 💡 **主な特徴**: 秒単位のミッションクリティカルな業務に構造化されたセマンティック認知を導入。

---

<a id="domain-vertical-tools-ja"></a>
## 📊 専門分野・バーティカルツール

*DeFi、クオンツ取引、コンプライアンス、法務など特定領域に特化した業務システム。*

- [**tax-doc-classifier**](https://github.com/kyotofin/tax-doc-classifier) `★ 155` - Tax document page classifier built on Jev achieving 100% accuracy across 261 IRS forms.
  - 🎯 **Jevの判断箇所**: 抽出されたOCRテキストを分析し、261種類のIRS税務フォーム候補から正確な種別を判定。
  - 💡 **主な特徴**: 261種類の大規模候補空間において100%の厳格精度を達成し、ページあたり約$0.001で処理。

- [**goodwatch-monorepo**](https://github.com/alp82/goodwatch-monorepo) `★ 38` - Movie and TV show discovery platform using Jev for prototype comparisons and taste affinity scoring.
  - 🎯 **Jevの判断箇所**: 映画のメタデータ特徴とユーザーの好みを照合し、おすすめ適合度をスコアリング。
  - 💡 **主な特徴**: 単純なベクトル類似度を超え、複雑な嗜好境界に対応して高適合なニッチ作品を発掘。

- [**Prism**](https://github.com/irfndi/prism-liquidity-agent) `★ 32` - DeFi liquidity agent detecting toxic flow, market stress, and pool distribution in shadow mode.
  - 🎯 **Jevの判断箇所**: 高頻度推論により平均回帰確率と流動性スキューを瞬時に評価。
  - 💡 **主な特徴**: 秒単位の金融リスク監視にLLMレベルのセマンティック認識能力を導入。

- [**Jev-Trades**](https://github.com/zadescoxp/Jev-Trades) `★ 7` - High-frequency perp trader on Hyperliquid with live dashboard (jev-trade.com). Evaluates order book every tick to trade.
  - 🎯 **Jevの判断箇所**: 板の不均衡、深度、スプレッドをティック単位で評価し、売買方向、レバレッジ、指値を決定。
  - 💡 **主な特徴**: マルチスリーブ分離による1秒未満の分散型デリバティブ取引執行。

- [**HA-Jev**](https://github.com/AboveColin/HA-Jev) `★ 6` - HA-Jev: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jevの判断箇所**: リアルタイムのドメインテレメトリを取り込み、自動実行やリスク警告をトリガー。
  - 💡 **主な特徴**: 秒単位のミッションクリティカルな業務に構造化されたセマンティック認知を導入。

- [**jev-seo**](https://github.com/AkashPriyadarshii/jev-seo) `★ 3` - Free agent-first SEO & GEO CLI suite and MCP server combining DuckDuckGo with Jev scoring.
  - 🎯 **Jevの判断箇所**: 検索スニペットとWebテキストの意図適合性、キーワードカバレッジ、表示可能性を評価。
  - 💡 **主な特徴**: 高額な商用SEO契約を代替し、オープンソースCLIとJevによるセマンティック監査を実現。

- [**jev-trade**](https://github.com/aowang-ai/jev-trade) `★ 3` - High-frequency perp trader on Hyperliquid with live dashboard (jev-trade.com). Evaluates order book every tick to trade.
  - 🎯 **Jevの判断箇所**: 板の不均衡、深度、スプレッドをティック単位で評価し、売買方向、レバレッジ、指値を決定。
  - 💡 **主な特徴**: マルチスリーブ分離による1秒未満の分散型デリバティブ取引執行。

- [**jev-for-engineers**](https://github.com/Foadsf/jev-for-engineers) `★ 2` - jev-for-engineers: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jevの判断箇所**: リアルタイムのドメインテレメトリを取り込み、自動実行やリスク警告をトリガー。
  - 💡 **主な特徴**: 秒単位のミッションクリティカルな業務に構造化されたセマンティック認知を導入。

- [**got-jev**](https://github.com/phureewat29/got-jev) `★ 1` - got-jev: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jevの判断箇所**: リアルタイムのドメインテレメトリを取り込み、自動実行やリスク警告をトリガー。
  - 💡 **主な特徴**: 秒単位のミッションクリティカルな業務に構造化されたセマンティック認知を導入。

- [**hermes-jev-north-star**](https://github.com/poponline63/hermes-jev-north-star) `★ 1` - Hermes Agent skill utilizing Jev as a north-star gatekeeper to evaluate unproven task criteria.
  - 🎯 **Jevの判断箇所**: 未検証の基準をランク付けし、実行結果が受け入れマイルストーンを満たしたかを判定。
  - 💡 **主な特徴**: 検証済みの完了ゲートを適用することで、エージェントの早期終了を防止。

- [**jev-broadcast-lab**](https://github.com/4anti/jev-broadcast-lab) `★ 1` - jev-broadcast-lab: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jevの判断箇所**: リアルタイムのドメインテレメトリを取り込み、自動実行やリスク警告をトリガー。
  - 💡 **主な特徴**: 秒単位のミッションクリティカルな業務に構造化されたセマンティック認知を導入。

- [**jev-exploration**](https://github.com/SamuelSacco/jev-exploration) `★ 1` - Exploratory benchmark and runnable experiment collection examining Jev latency and accuracy.
  - 🎯 **Jevの判断箇所**: Jevのレイテンシと自己回帰型LLMを比較する管理された意思決定実験を実行。
  - 💡 **主な特徴**: 導入を検討するエンジニア向けに、実証された性能根拠と再現可能なコードを提供。

- [**jev-review-action**](https://github.com/fatwang2/jev-review-action) `★ 1` - Configurable GitHub Action for PR triage and automated code review classification with Jev.
  - 🎯 **Jevの判断箇所**: PR差分のリスク次元をスコアリングし、軽微な変更を自動マージへ、複雑な変更を人間レビューへ振り分け。
  - 💡 **主な特徴**: コードレビュー速度を加速し、定型PRにおけるエンジニアリング負荷を削減。

- [**jev-reviewer**](https://github.com/choxos/jev-reviewer) `★ 1` - Data extraction tool for systematic literature reviews quoting evidence lines with Jev assistance.
  - 🎯 **Jevの判断箇所**: 治験報告書内の特定テキスト行を特定し、バイアスリスク評価基準への該当性を判定。
  - 💡 **主な特徴**: 全抽出結果を原文の引用とページ数に紐付け、全ファイルをローカルに保持して機密性を担保。

- [**jevsome-projects**](https://github.com/ozers/jevsome-projects) `★ 1` - Automated index tracking verified open-source repositories integrating TypeSafe Jev model.
  - 🎯 **Jevの判断箇所**: GitHubのコミットとプルリクエストを走査し、ソースコードレベルの実装シグネチャを検証。
  - 💡 **主な特徴**: 成長するJevエコシステム全体にわたり、行単位の透明なコード追跡可能性を提供。

- [**jevsume**](https://github.com/unownone/jevsume) `★ 1` - jevsume: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jevの判断箇所**: リアルタイムのドメインテレメトリを取り込み、自動実行やリスク警告をトリガー。
  - 💡 **主な特徴**: 秒単位のミッションクリティカルな業務に構造化されたセマンティック認知を導入。

- [**ha-conversation-jev**](https://github.com/luxus/ha-conversation-jev) - ha-conversation-jev: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jevの判断箇所**: リアルタイムのドメインテレメトリを取り込み、自動実行やリスク警告をトリガー。
  - 💡 **主な特徴**: 秒単位のミッションクリティカルな業務に構造化されたセマンティック認知を導入。

- [**jev-music-theory-1**](https://github.com/adammichaelwood/jev-music-theory-1) - jev-music-theory-1: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jevの判断箇所**: リアルタイムのドメインテレメトリを取り込み、自動実行やリスク警告をトリガー。
  - 💡 **主な特徴**: 秒単位のミッションクリティカルな業務に構造化されたセマンティック認知を導入。

- [**jev-trade**](https://github.com/Waxmell114514/jev-trade) - High-frequency perp trader on Hyperliquid with live dashboard (jev-trade.com). Evaluates order book every tick to trade.
  - 🎯 **Jevの判断箇所**: 板の不均衡、深度、スプレッドをティック単位で評価し、売買方向、レバレッジ、指値を決定。
  - 💡 **主な特徴**: マルチスリーブ分離による1秒未満の分散型デリバティブ取引執行。

---

<a id="decision-tools-ja"></a>
## 🎯 意思決定支援・ヒューリスティック評価

*汎用的な選択エンジン、ヒューリスティックスコアリング、業務判断支援ツール。*

- [**ai-hedge-fund**](https://github.com/virattt/ai-hedge-fund) `★ 63497` - ai-hedge-fund: Multi-agent AI hedge fund simulation with native JevLLM adapter calling System One endpoints for deterministic financial decisions.
  - 🎯 **Jevの判断箇所**: マルチソースの市場指標とシグナルを入力し、較正された信頼度付きで売買・保有の判断を出力。
  - 💡 **主な特徴**: LLMの出力フォーマット崩れやパース失敗を防止し、厳格なしきい値ポリシーによる超高速トレードシグナルを提供。

- [**loki**](https://github.com/wundercorp/loki) `★ 24` - Self-evolving agent framework using Jev client to grade intermediate step completion and milestones.
  - 🎯 **Jevの判断箇所**: エージェントの環境状態と目標を評価し、中間マイルストーンが達成されたかを判定。
  - 💡 **主な特徴**: 客観的で軽量な完了判定ゲートを提供し、無限ループや時期尚早な終了を防止。

- [**killmyidea**](https://github.com/monteduro/killmyidea) `★ 17` - Startup idea triage tool: describe your idea and Jev decides whether to kill it, fix it, or ship it.
  - 🎯 **Jevの判断箇所**: スタートアップの構想を市場の課題、実現性、優位性に照らして評価し、kill/fix/shipを出力。
  - 💡 **主な特徴**: 過剰な賛美を排した客観的なフィードバックにより、致命的な欠陥を数秒で浮き彫りに。

- [**jev-benchmarks**](https://github.com/AbdelStark/jev-benchmarks) `★ 7` - jev-benchmarks: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jevの判断箇所**: リアルタイムのドメインテレメトリを取り込み、自動実行やリスク警告をトリガー。
  - 💡 **主な特徴**: 秒単位のミッションクリティカルな業務に構造化されたセマンティック認知を導入。

- [**jev-benchmark**](https://github.com/wondertwins/jev-benchmark) `★ 2` - Interactive benchmark suite and playground evaluating Jev across chess tactics and NPC dialogue routing.
  - 🎯 **Jevの判断箇所**: ボードゲームでの座標選択や音声書き起こしにおける話者判定の精度を検証。
  - 💡 **主な特徴**: 現実的な意思決定シナリオ全体で再現可能なレイテンシと精度の基準を提供。

- [**jev-frontend-qa**](https://github.com/Nainish-Rai/jev-frontend-qa) `★ 2` - Automated frontend QA and regression testing suite exercising browser interactions with Jev contract verification.
  - 🎯 **Jevの判断箇所**: 合成シナリオの契約を評価し、テスト対象UI要素の状態遷移を検証。
  - 💡 **主な特徴**: 高コストなエンドツーエンドモデルなしでUIの微細な欠陥や動作逸脱を検出。

- [**omp-jev-compaction**](https://github.com/jerryfane/omp-jev-compaction) `★ 2` - Verbatim context reduction plugin for OpenMultiPlatform (omp) scoring token utility via Jev.
  - 🎯 **Jevの判断箇所**: 会話履歴とツール応答をスコアリングし、正確なテキストを保持しながら不要なコンテキストを整理。
  - 💡 **主な特徴**: 要約による幻覚を生じさせることなく、プロンプトトークンの消費を劇的に削減。

- [**jev-agent-failure-benchmark**](https://github.com/TokenTrim/jev-agent-failure-benchmark) `★ 1` - jev-agent-failure-benchmark: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jevの判断箇所**: リアルタイムのドメインテレメトリを取り込み、自動実行やリスク警告をトリガー。
  - 💡 **主な特徴**: 秒単位のミッションクリティカルな業務に構造化されたセマンティック認知を導入。

- [**jev-playground**](https://github.com/Little-Planet-Labs/jev-playground) `★ 1` - jev-playground: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jevの判断箇所**: リアルタイムのドメインテレメトリを取り込み、自動実行やリスク警告をトリガー。
  - 💡 **主な特徴**: 秒単位のミッションクリティカルな業務に構造化されたセマンティック認知を導入。

- [**jev-predict-skill**](https://github.com/DanielKillenberger/jev-predict-skill) `★ 1` - jev-predict-skill: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jevの判断箇所**: リアルタイムのドメインテレメトリを取り込み、自動実行やリスク警告をトリガー。
  - 💡 **主な特徴**: 秒単位のミッションクリティカルな業務に構造化されたセマンティック認知を導入。

- [**jev-rerank-bench**](https://github.com/anessbelbati/jev-rerank-bench) `★ 1` - jev-rerank-bench: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jevの判断箇所**: リアルタイムのドメインテレメトリを取り込み、自動実行やリスク警告をトリガー。
  - 💡 **主な特徴**: 秒単位のミッションクリティカルな業務に構造化されたセマンティック認知を導入。

- [**jev-research**](https://github.com/sherajdev/jev-research) `★ 1` - jev-research: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jevの判断箇所**: リアルタイムのドメインテレメトリを取り込み、自動実行やリスク警告をトリガー。
  - 💡 **主な特徴**: 秒単位のミッションクリティカルな業務に構造化されたセマンティック認知を導入。

- [**jevchat**](https://github.com/kt3k/jevchat) `★ 1` - Lightweight terminal chat utility querying Jev for custom persona answers and binary choices.
  - 🎯 **Jevの判断箇所**: 定義済みのスタイル選択肢（Yes/No、海賊風、大衆紙風など）から最適な回答を選択。
  - 💡 **主な特徴**: トークンごとの生成オーバーヘッドなしでゼロレイテンシのスタイル別回答を実現。

- [**goodall**](https://github.com/bensyverson/goodall) - Simple and extensible agent loop for Go projects integrating TypeSafe Jev for decision branches.
  - 🎯 **Jevの判断箇所**: 各ターンで環境の観測結果を評価し、次に呼び出すローカルツールまたは終了を判定。
  - 💡 **主な特徴**: 極めて簡潔なコードベースで、Goによる自律エージェント構築のための軽量な基準設計を提供。

---

<a id="classification-taxonomy-ja"></a>
## 🏷️ テキスト分類・タキソノミー

*マルチラベル分類、階層型タキソノミー構築、データセットの自動ラベリング。*

- [**orchestkit**](https://github.com/yonatangross/orchestkit) `★ 278` - orchestkit: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jevの判断箇所**: リアルタイムのドメインテレメトリを取り込み、自動実行やリスク警告をトリガー。
  - 💡 **主な特徴**: 秒単位のミッションクリティカルな業務に構造化されたセマンティック認知を導入。

- [**jev-tree**](https://github.com/reachjalil/jev-tree) `★ 2` - jev-tree: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jevの判断箇所**: リアルタイムのドメインテレメトリを取り込み、自動実行やリスク警告をトリガー。
  - 💡 **主な特徴**: 秒単位のミッションクリティカルな業務に構造化されたセマンティック認知を導入。

---

<a id="evaluation-observability-ja"></a>
## 📈 ベンチマーク・可観測性

*意思決定プロファイリング、レイテンシ監視、エラーテレメトリ、性能ベンチマーク。*

- [**latitude-llm**](https://github.com/latitude-dev/latitude-llm) `★ 4654` - latitude-llm: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jevの判断箇所**: リアルタイムのドメインテレメトリを取り込み、自動実行やリスク警告をトリガー。
  - 💡 **主な特徴**: 秒単位のミッションクリティカルな業務に構造化されたセマンティック認知を導入。

- [**typesafe-ai-benchmark**](https://github.com/iammrduncan/typesafe-ai-benchmark) `★ 32` - LLM Gateway and benchmark suite contrasting structured outputs against genuine Jev performance.
  - 🎯 **Jevの判断箇所**: 従来の生成モデルによる構造化出力とネイティブJevのレイテンシおよびエラー率を比較。
  - 💡 **主な特徴**: 離散分類においてJevが従来モデルに対して圧倒的な優位性を持つことを実証データで証明。

- [**typesafe-playground**](https://github.com/kavehmz/typesafe-playground) `★ 9` - Interactive sandbox testing Jev from support ticket routing to 3D autonomous driving simulations.
  - 🎯 **Jevの判断箇所**: チケットに最適なサポートキューを割り当て、3Dセンサー情報から操舵アクションを決定。
  - 💡 **主な特徴**: 静的テキスト分類と動的シミュレーションの双方でJevのレイテンシと信頼度分布を視覚的に実証。

- [**jev-behavior-study**](https://github.com/RINNECODER/jev-behavior-study) `★ 3` - Independent Jev 1.13.0 behavior study featuring controlled prompt tests and offline verification.
  - 🎯 **Jevの判断箇所**: 温度パラメータやプロンプト変動におけるJevの出力安定性と確率ドリフトを体系的に記録。
  - 💡 **主な特徴**: System Oneモデルの意思決定特性を解明する貴重な一次実証エビデンスを提供。

- [**Canny**](https://github.com/qkal/Canny) `★ 1` - Stops AI coding agents from claiming tasks are done without evidence, aided by Jev advice.
  - 🎯 **Jevの判断箇所**: ツール出力、差分、テスト結果を分析し、エージェントの完了報告が事実に基づいているかを判定。
  - 💡 **主な特徴**: 確定的なフックとJevのセマンティック助言を組み合わせ、作業完了の幻覚を排除。

- [**jev-calibration-audit**](https://github.com/jujumilk3/jev-calibration-audit) - Independent calibration audit measuring Jev prediction accuracy, ECE error, and probability fidelity.
  - 🎯 **Jevの判断箇所**: ベンチマークデータセットから予測確率値を収集し、正解ラベルとの整合性を計算。
  - 💡 **主な特徴**: 客観的な第三者による較正指標を提供し、実運用における信頼度しきい値の設定を支援。

- [**jev-eval**](https://github.com/4esv/jev-eval) - Independent evaluation benchmarking TypeSafe Jev against frontier models on accuracy, calibration, and latency.
  - 🎯 **Jevの判断箇所**: 標準ベンチマーク上でJevと最先端モデルを並行評価し、厳密な統計的検定を実施。
  - 💡 **主な特徴**: ベンダーのバイアスを排除し、離散判断におけるJevのレイテンシとコストの優位性を定量化。

---

<a id="voice-conversation-ja"></a>
## 🎙️ 音声対話・リアルタイム会話

*発話権調停、会話の割り込み検出、低遅延リアルタイム音声エージェント。*

- [**aiavatarkit**](https://github.com/uezo/aiavatarkit) `★ 674` - aiavatarkit: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jevの判断箇所**: リアルタイムのドメインテレメトリを取り込み、自動実行やリスク警告をトリガー。
  - 💡 **主な特徴**: 秒単位のミッションクリティカルな業務に構造化されたセマンティック認知を導入。

- [**OpenWhisper**](https://github.com/Knuckles92/OpenWhisper) `★ 185` - Local speech-to-text platform using Jev for real-time meeting topic classification and segment triage.
  - 🎯 **Jevの判断箇所**: リアルタイム書き起こし音声をアジェンダトピック、アクションアイテム、雑談に分類。
  - 💡 **主な特徴**: 音声ストリームを並行処理し、会議終了後の要約待ち時間なしで構造化されたメモを提供。

- [**leadgenrationaivoiceagent**](https://github.com/sumitrevolt/leadgenrationaivoiceagent) `★ 1` - B2B voice sales agent integrating Jev for real-time customer intent classification and turn routing.
  - 🎯 **Jevの判断箇所**: 音声認識の書き起こし後、300ms以内に対話相手の意図（反論、価格照会、デモ希望等）を分類。
  - 💡 **主な特徴**: 300ms未満の意図分類により不自然な会話の空白を排除し、スムーズな音声対話を実現。

---

<a id="creative-tools-ja"></a>
## 🎨 クリエイティブツール・メディア生成

*UI動的レイアウト生成、アルゴリズム作曲、MIDIアレンジメントツール。*

- [**json-render**](https://github.com/vercel-labs/json-render) `★ 16519` - json-render: Vercel Labs generative UI library replacing token streaming with Jev discrete evaluations, cutting render latency from 3.21s to 880ms.
  - 🎯 **Jevの判断箇所**: コンポーネントツリーの適合度を並行評価し、単一パスで構造化されたコンポーネント選択とスロット操作を直接出力。
  - 💡 **主な特徴**: トークン単位の低速なJSONストリーミングを排除し、ミリ秒単位でUIの初期描画を実現。

- [**jevmeter**](https://github.com/ChetasLua/jevmeter) `★ 57` - Video caption rating pipeline scoring every sentence with Jev and rendering dynamic meters on 16:9 edits.
  - 🎯 **Jevの判断箇所**: 字幕の文ごとにエンゲージメント、ユーモア、情報密度をスコアリングし、離散指標を出力。
  - 💡 **主な特徴**: セマンティック評価を画面上のモーショングラフィックスとして可視化し、動画編集を効率化。

- [**refgarden**](https://github.com/AlbionaHoti/refgarden) `★ 15` - Spatial reference library for creators using Jev to categorize design assets and cluster visual ideas.
  - 🎯 **Jevの判断箇所**: 説明文に基づき、デザインアセットやインスピレーションを美術スタイルやムードボードに分類。
  - 💡 **主な特徴**: クリエイターが発想に集中できるよう、バックグラウンドで素材の整理と関連付けを自動化。

- [**jevthoven**](https://github.com/cocktailpeanut/jevthoven) `★ 3` - jevthoven: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jevの判断箇所**: リアルタイムのドメインテレメトリを取り込み、自動実行やリスク警告をトリガー。
  - 💡 **主な特徴**: 秒単位のミッションクリティカルな業務に構造化されたセマンティック認知を導入。

- [**ui-generator-instinct-jev**](https://github.com/joevidev/ui-generator-instinct-jev) `★ 1` - ui-generator-instinct-jev: Domain-tailored decision automation for quantitative trading, auditing, and specialized operations.
  - 🎯 **Jevの判断箇所**: リアルタイムのドメインテレメトリを取り込み、自動実行やリスク警告をトリガー。
  - 💡 **主な特徴**: 秒単位のミッションクリティカルな業務に構造化されたセマンティック認知を導入。

---

<a id="dev-arch-ja"></a>
## 📖 ローカル開発とアーキテクチャ

**Node.js 22+** が必要です。

```bash
# 依存関係のインストール
npm ci

# ローカル開発サーバー起動 (Vite + React + Tailwind)
npm run dev

# 自動テストの実行 (87項目の検証テスト)
npm test

# プロダクションビルド
npm run build

# 4言語のREADMEを自動再生成
npm run build:readme
```

### 自律型同期パイプライン
本プロジェクトは GitHub Actions により完全に自動同期されます：
1. **定期巡回収集**（12時間ごと）：GitHub全体からJev実装コードを含む新プロジェクトを自律探索。
2. **Issue自動検証**：提出されたリポジトリのソースコードを静的解析し、確証のないPR/Issueを自動除外。
3. **自動デプロイ**：テスト通過後、[GitHub Pages](https://logicrw.github.io/awesome-jev-projects/) へ即時配信。

---

<a id="submit-guide-ja"></a>
## 🤝 プロジェクトの掲載申請

Jevを採用したあらゆるOSS、ライブラリ、実験的ツールの掲載を歓迎します！

1. **Webから申請**：[ライブレーダー](https://logicrw.github.io/awesome-jev-projects/) 右上の「Submit Project」ボタンから。
2. **GitHub Issueから申請**：[申請用Issueテンプレート](https://github.com/logicrw/awesome-jev-projects/issues/new?template=project.yml) にリポジトリURLとJevの判断箇所を記入。
3. **掲載基準**：コードベース内に実際にJevを呼び出す実装が含まれていることが必須条件です。

---

## ライセンス

MIT © [Logicrw](https://github.com/logicrw).
