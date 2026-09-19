[![Live Website](https://img.shields.io/badge/Website-Awesome%20Jev%20Radar-black?style=flat-square&logo=safari)](https://logicrw.github.io/awesome-jev-projects/ja/)

[![Awesome Jev](https://raw.githubusercontent.com/logicrw/awesome-jev-projects/main/public/banner-ja.svg)](https://logicrw.github.io/awesome-jev-projects/ja/)

# Awesome Jev — System-1 Agent アーキテクチャ

[中文](README.zh-CN.md) · [English](README.md) · [日本語](README.ja.md) · [한국어](README.ko.md)

**[検索・絞り込み ↗](https://logicrw.github.io/awesome-jev-projects/ja/)** · **261 件のプロジェクト**

コミュニティが運営する、TypeSafe 非公式の Jev ディレクトリです。公開説明とソースコードに基づいて掲載しています。連携コードの確認は、当サイトによる実行、性能測定、安全性監査を意味しません。

固定バージョンの説明とソースを確認しています。独立した実行、性能測定、安全性監査や収益保証ではありません。互換実装は使用する基盤モデルを明示します。

利用条件は各プロジェクトのライセンスに従います。未記載・独自ライセンスは別途表示します。

## スポンサー · 有料掲載

最初のパートナーを募集中です。現在、有料スポンサーはいません。

[プランとお問い合わせ](https://github.com/logicrw/awesome-jev-projects/blob/main/SPONSORING.md) · [Sponsors](https://github.com/logicrw/awesome-jev-projects/blob/main/SPONSORS.md)

スポンサー契約は掲載審査、説明、通常の表示順を変えません。掲載は推奨や性能保証ではありません。

## Agent Skill の導入

用途で一覧を検索し、固定バージョンのソースと確認範囲を参照できます。掲載は動作や安全性の認証ではありません。

```bash
npx skills add logicrw/awesome-jev-projects
npx skills add https://logicrw.github.io/awesome-jev-projects/
```

[Agent Skill](https://logicrw.github.io/awesome-jev-projects/skill.md) · [llms.txt](https://logicrw.github.io/awesome-jev-projects/llms.txt) · [llms-full.txt](https://logicrw.github.io/awesome-jev-projects/llms-full.txt)

## カテゴリ

- [ブラウザ・デスクトップ (23)](https://logicrw.github.io/awesome-jev-projects/ja/categories/browser-os-action/)
- [CLI・パイプライン (12)](https://logicrw.github.io/awesome-jev-projects/ja/categories/cli-pipelines/)
- [分類・カタログ (2)](https://logicrw.github.io/awesome-jev-projects/ja/categories/classification-taxonomy/)
- [コード・グラフ探索 (11)](https://logicrw.github.io/awesome-jev-projects/ja/categories/codebase-graph-pathfinding/)
- [Context GC・メモリ (14)](https://logicrw.github.io/awesome-jev-projects/ja/categories/context-gc-filter/)
- [音楽・UI 制作 (9)](https://logicrw.github.io/awesome-jev-projects/ja/categories/creative-tools/)
- [データ・検索 (10)](https://logicrw.github.io/awesome-jev-projects/ja/categories/data-search/)
- [判断ツール (7)](https://logicrw.github.io/awesome-jev-projects/ja/categories/decision-tools/)
- [分野別ツール (14)](https://logicrw.github.io/awesome-jev-projects/ja/categories/domain-vertical-tools/)
- [評価・可観測性 (29)](https://logicrw.github.io/awesome-jev-projects/ja/categories/evaluation-observability/)
- [ゲーム・リアルタイム判断 (17)](https://logicrw.github.io/awesome-jev-projects/ja/categories/high-frequency-simulation/)
- [MCP・連携 (18)](https://logicrw.github.io/awesome-jev-projects/ja/categories/mcp-integrations/)
- [モデルルーティング (19)](https://logicrw.github.io/awesome-jev-projects/ja/categories/routing-cost-optimization/)
- [SDK・判断フレームワーク (48)](https://logicrw.github.io/awesome-jev-projects/ja/categories/sdk-decision-frameworks/)
- [SDK・互換連携 (6)](https://logicrw.github.io/awesome-jev-projects/ja/categories/sdk-integrations/)
- [安全対策・コンテンツ審査 (18)](https://logicrw.github.io/awesome-jev-projects/ja/categories/security-guardrails/)
- [音声・会話 (4)](https://logicrw.github.io/awesome-jev-projects/ja/categories/voice-conversation/)

## ブラウザ・デスクトップ

- [**cua**](https://github.com/trycua/cua) — Cua の試験的な jev-use 例が Driver の観察・実行と Jev の候補選択を組み合わせる。
  - **Jev が判断する箇所**: DOM または対応する視覚領域の説明を読み、提示済みの操作 ID を返す。
  - **このプロジェクトの用途**: Python と TypeScript のループと、オフライン・実 API の別々の検証経路を備える。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/trycua/cua/) · ライセンス: MIT

- [**jev-ultrafast**](https://github.com/browser-use/jev-ultrafast) — Jev が操作とページ要素を選び、入力が必要なときだけテキストモデルを呼ぶブラウザー Agent。
  - **Jev が判断する箇所**: 現在の DOM から操作と対応する要素を一度に選び、入力文は別モデルが生成する。
  - **このプロジェクトの用途**: 画面上の選択、文章生成、実行を分け、各ステップを確認できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/jev-ultrafast/) · ライセンス: MIT

- [**jev-desktop**](https://github.com/lahfir/agent-desktop) — agent-desktop のアクセシビリティ情報から操作対象を選ぶ、追加の Jev skill。
  - **Jev が判断する箇所**: Jev が対象・操作・存在確率・リスクを判定し、ローカル方針が実行を決める。
  - **このプロジェクトの用途**: 主 Agent に画面ツリー全体を渡さず、選んだ操作を確認できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/jev-desktop/) · ライセンス: Apache-2.0

- [**omg.dev**](https://github.com/BennyKok/omg.dev) — omg.dev のモバイルテスト用スクリプトが、アクセシビリティツリーから次の操作を Jev に選ばせる。
  - **Jev が判断する箇所**: 対象や完了、行き詰まりを判断し、テスト実行器が画面を操作する。
  - **このプロジェクトの用途**: 現在の画面状態に基づく選択をモバイルテストへ加える。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/bennykok/omg.dev/) · ライセンス: MIT

- [**typesafe-computer-use**](https://github.com/awlevin/typesafe-computer-use) — OCR と画面状態から候補を作り、Jev が macOS の操作を選ぶ。文章入力時は別モデルを使う。
  - **Jev が判断する箇所**: 抽出した要素と操作候補から次の一手を選び、実行器がデスクトップを操作する。
  - **このプロジェクトの用途**: 画面の読み取り、操作選択、文章生成を分ける。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/awlevin/typesafe-computer-use/) · ライセンス: MIT

- [**mobile-jev**](https://github.com/droidrun/mobile-jev) — Mobilerun 経由で Android を操作し、ウェブ画面と CLI で Jev の判断を確認できる。
  - **Jev が判断する箇所**: 画面状態からアプリ、要素、次の操作を選び、Mobilerun が実行する。
  - **このプロジェクトの用途**: 操作履歴とリクエスト時間を記録する。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/droidrun/mobile-jev/) · ライセンス: MIT

- [**jev-browser-use**](https://github.com/wy-coliney/jev-browser-use) — Codex のブラウザー作業で、Jev が移動、クリック、スクロールを選び、文字入力と最終確認は Codex が行う Skill。
  - **Jev が判断する箇所**: ページ状態と実行候補を Jev に送り、既存のブラウザー接続で操作する。
  - **このプロジェクトの用途**: 繰り返す画面選択を独立させ、既存の接続を再利用する。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/wy-coliney/jev-browser-use/) · ライセンス: MIT

- [**jev-browser**](https://github.com/jkudish/jev-browser) — タスクと URL を受け取りブラウザを操作し、最終ページ、画像、操作履歴を返す。
  - **Jev が判断する箇所**: DOM の操作候補と完了・停滞を判断する。入力文は別のモデルが補える。
  - **このプロジェクトの用途**: 提案した操作、実行結果、停止理由を記録する。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/jkudish/jev-browser/) · ライセンス: MIT

- [**jev-voice-browser**](https://github.com/moritzkremb/jev-voice-browser) — 音声の逐次書き起こしを Jev に送り、Playwright ブラウザを操作する。
  - **Jev が判断する箇所**: 意図、要素、URL、原文範囲を選び、命令の完結性や注意を要する操作を判断する。
  - **このプロジェクトの用途**: 音声操作中の確率、動作、リクエスト時間を表示する。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/moritzkremb/jev-voice-browser/) · ライセンス: MIT

- [**jev-use**](https://github.com/vlad-terin/jev-use) — 公開リポジトリにアクセスできず、連携や以前の説明を確認できません。追跡用に記録を保持し、検証済みの推奨項目としては扱いません。
  - **Jev が判断する箇所**: この項目は確認待ちであり、検証済みの Jev 連携としては推奨していません。
  - **このプロジェクトの用途**: 追跡用に記録を保持しています。先に確認待ちの理由と出典をご確認ください。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/vlad-terin/jev-use/) · ライセンス: 記載なし

- [**typesafe-adblock**](https://github.com/realZachi/typesafe-adblock) — 候補 DOM が広告かを Jev に尋ね、強調表示や削除を行う実験的 Chrome 拡張。
  - **Jev が判断する箇所**: 要素の文字、ラベル、リンク情報を Noul で評価し、閾値を適用する。
  - **このプロジェクトの用途**: 意味的な判断とページ要素の操作を結び付ける例。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/realzachi/typesafe-adblock/) · ライセンス: MIT

- [**Jev-cu**](https://github.com/Sac-Y/Jev-cu) — 画面の文字候補を Jev に送り、観察と実行をデスクトップツールが担う Codex ループ。
  - **Jev が判断する箇所**: 対象と操作を選び、完了やリスクを判断し、ローカル規則が実行・確認を決める。
  - **このプロジェクトの用途**: 文字候補を入力にし、既定では dry-run から始める。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/sac-y/jev-cu/) · ライセンス: 記載なし

- [**jev-browser**](https://github.com/Ying-Kai-Liao/jev-browser) — 呼び出し側が目標と入力文を渡し、Jev が操作を選ぶブラウザライブラリ、CLI、MCP サーバー。
  - **Jev が判断する箇所**: 要素、操作、値を選び、完了、エラー、取り消せない操作を評価する。
  - **このプロジェクトの用途**: 操作ループを計画から分け、状態と履歴を返す。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/ying-kai-liao/jev-browser/) · ライセンス: MIT

- [**jev-macos-loop**](https://github.com/jcpsimmons/jev-macos-loop) — ローカル OCR とアクセシビリティ情報を使い、Jev が操作を選ぶ macOS 自動化ループ。
  - **Jev が判断する箇所**: 観測した候補から対象を選び、座標処理と入力実行は Mac が担う。
  - **このプロジェクトの用途**: Finder の操作を含め、候補と実行確認を追跡できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/jcpsimmons/jev-macos-loop/) · ライセンス: AGPL-3.0

- [**jev-ego**](https://github.com/romaluev/jev-ego) — ego lite の操作要素を番号付き一覧にし、Jev が次の動作を選ぶブラウザー Agent。
  - **Jev が判断する箇所**: 一度の要求で操作と対象を選び、自由文が必要なら別の補助モデルを使う。
  - **このプロジェクトの用途**: 観測・提案・実行に対応するが、アップロードやダイアログは別のツールを使う。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/romaluev/jev-ego/) · ライセンス: MIT

- [**AskJev**](https://github.com/ranjan2829/AskJev) — MCP で Agent とブラウザーを接続し、Jev がページ操作を選ぶ。支払いや削除などには確認を挟む。
  - **Jev が判断する箇所**: 現在のページ要素から操作を選び、リスクと取り消し可能性を評価する。
  - **このプロジェクトの用途**: 自動操作とユーザー確認を同じ手順にまとめる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/ranjan2829/askjev/) · ライセンス: MIT

- [**computer-use-jev**](https://github.com/paulsmith/computer-use-jev) — macOS のアクセシビリティツリーから Jev が対象と操作を選ぶ Go 製のコントローラー。
  - **Jev が判断する箇所**: ウィンドウ状態から操作、対象、文字入力の要否、完了状態を選ぶ。
  - **このプロジェクトの用途**: 画面スナップショットに基づく候補と選択過程を確認できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/paulsmith/computer-use-jev/) · ライセンス: MIT

- [**jev-browser**](https://github.com/tontoko/jev-browser) — Playwright と Jev を共通の CLI・MCP・TypeScript SDK から利用するブラウザー自動化ツール。
  - **Jev が判断する箇所**: ページ観測から Jev が操作・フォーム対応・抽出内容を判断し、Playwright が実行する。
  - **このプロジェクトの用途**: 永続セッションと画面回読に対応。画面確認だけでは DB 永続化の証明にならない。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/tontoko/jev-browser/) · ライセンス: Apache-2.0

- [**jev-shield**](https://github.com/vmendes90/jev-shield) — 情報フィードの要素が広告かを Jev で判断する Chrome 拡張。
  - **Jev が判断する箇所**: 候補 DOM をまとめて TypeSafe に送り、Noul の確率と閾値で折りたたみを決める。
  - **このプロジェクトの用途**: ローカルの広告ルールに意味に基づく判断を追加する。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/vmendes90/jev-shield/) · ライセンス: MIT

- [**aside-jev**](https://github.com/himomohi/aside-jev) — Aside ブラウザー Agent に Jev 判断を加える MCP サーバーと skill。
  - **Jev が判断する箇所**: Agent が候補を用意し、Jev が ID を選択。Aside で実行した後に結果を確認する。
  - **このプロジェクトの用途**: 選択をアプリ側の動作表に限定し、実行結果は別途検証する。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/himomohi/aside-jev/) · ライセンス: MIT

- [**cline-plugin-jev-browser**](https://github.com/abeatrix/cline-plugin-jev-browser) — 独立した Playwright ブラウザーと Vercel AI Gateway 経由の Jev 判断を使う Cline プラグイン。
  - **Jev が判断する箇所**: DOM 対象表から Jev が操作を選び、必要な入力文は別のテキストモデルが作る。
  - **このプロジェクトの用途**: 前後のスクリーンショットを保存し、重要操作は制御を返す。完了は結果確認が必要。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/abeatrix/cline-plugin-jev-browser/) · ライセンス: 記載なし

- [**ego-jev**](https://github.com/phd-peter/ego-jev) — Ego Lite のスナップショットと操作を、回数制限のある Jev 判断ループにつなぐ。
  - **Jev が判断する箇所**: 現在のスナップショットの要素と対応操作から選び、必要な入力文は別モデルで補う。
  - **このプロジェクトの用途**: 現在の参照で操作し、各段階の状態を記録する。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/phd-peter/ego-jev/) · ライセンス: MIT

- [**grokskill-jev**](https://github.com/AE-AlphaEdge/grokskill-jev) — 公開リポジトリにアクセスできず、連携や以前の説明を確認できません。追跡用に記録を保持し、検証済みの推奨項目としては扱いません。
  - **Jev が判断する箇所**: この項目は確認待ちであり、検証済みの Jev 連携としては推奨していません。
  - **このプロジェクトの用途**: 追跡用に記録を保持しています。先に確認待ちの理由と出典をご確認ください。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/ae-alphaedge/grokskill-jev/) · ライセンス: 記載なし


## CLI・パイプライン

- [**orchestkit**](https://github.com/yonatangross/orchestkit) — OrchestKit は任意で Jev にコーディングセッションを分類させ、閾値を満たすと表示色に使う。
  - **Jev が判断する箇所**: 最初のタスクとブランチ状態から作業種別を選び、ローカルルールが採用か代替処理を決める。
  - **このプロジェクトの用途**: 作業種別でセッションを区別し、shadow 比較モードも使える。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/yonatangross/orchestkit/) · ライセンス: MIT

- [**jev-axi**](https://github.com/shiftynick/jev-axi) — Jev の pick、rate、check、rank、triage、guard を使う CLI。Agent のツール実行前 hook にも対応する。
  - **Jev が判断する箇所**: 状態と選択肢を質問に変換し、結果やローカルポリシー用のリスクスコアを返す。
  - **このプロジェクトの用途**: スクリプトと Agent で同じ判断コマンドを使える。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/shiftynick/jev-axi/) · ライセンス: MIT

- [**rift**](https://github.com/exYze/rift) — Rust 製コーディング端末 Rift にある、任意の TypeSafe 判断クライアント。
  - **Jev が判断する箇所**: 状態と型付き質問を System One に送り、端末処理用に回答を解析する。
  - **このプロジェクトの用途**: 生成型のコーディングモデルとは別に判断インターフェースを追加する。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/exyze/rift/) · ライセンス: MIT

- [**SemDecide**](https://github.com/sharziki/semdecide) — テキストや JSONL を判定・分類・採点・フィルタリングする Python CLI。
  - **Jev が判断する箇所**: Jev の回答確率とローカル閾値から結果と終了コードを決める。
  - **このプロジェクトの用途**: Bash や CI に型付き判断と明確な失敗状態を組み込める。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/semdecide/) · ライセンス: MIT

- [**jev-cli**](https://github.com/tumf/jev-cli) — テキストや JSON を Jev で判断する CLI と stdio MCP サーバー。
  - **Jev が判断する箇所**: noul・choice・score を問い、JSON または主値を出力する。
  - **このプロジェクトの用途**: ファイルと stdin に対応し、Shell スクリプトや MCP クライアントに接続できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/tumf/jev-cli/) · ライセンス: MIT

- [**jev-cli**](https://github.com/Nasrallah-AL/jev-cli) — 検証・分類・評価の質問を文章入力やスクリプトへ接続する jevctl CLI。
  - **Jev が判断する箇所**: 入力と固定候補を Jev に送り、ローカル閾値で判断と確率を返す。
  - **このプロジェクトの用途**: パイプライン・CI 用の結果と、リクエスト確認・dry-run を提供する。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/nasrallah-al/jev-cli/) · ライセンス: MIT

- [**jev-code**](https://github.com/rhighs/jev-code) — Jev が AST の要素を選んで Python や Bash を組み立てる実験的 CLI。単独の判断コマンドも備える。
  - **Jev が判断する箇所**: 限られた構文や操作から選択し、ローカルコードがプログラム生成やツール呼び出しを行う。
  - **このプロジェクトの用途**: コードの選択とコマンドの判断を履歴で確認できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/rhighs/jev-code/) · ライセンス: 記載なし

- [**jev-cli**](https://github.com/jtsang4/jev-cli) — 文章や JSON を入力し、Jev に分類・Yes/No・評価を質問する CLI。
  - **Jev が判断する箇所**: 一つの入力に型付き質問を適用し、選択結果と確率を JSON で返す。
  - **このプロジェクトの用途**: 標準入力を受け取り、TypeSafe 直結と Vercel gateway に対応する。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/jtsang4/jev-cli/) · ライセンス: MIT

- [**jev-git**](https://github.com/AkashPriyadarshii/jev-git) — キー未設定やリクエスト失敗時に処理を通過させ、インストール時に既存 Git hook を上書きします。管理者の確認・修正までは信頼できる安全ゲートとして推奨しません。
  - **Jev が判断する箇所**: この項目は確認待ちであり、検証済みの Jev 連携としては推奨していません。
  - **このプロジェクトの用途**: 追跡用に記録を保持しています。先に確認待ちの理由と出典をご確認ください。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/akashpriyadarshii/jev-git/) · ライセンス: 記載なし

- [**LightJev**](https://github.com/rongxinzy/LightJev) — Qwen ベースの独立した学習研究であり、TypeSafe Jev API やモデルの連携は確認されていません。関連研究として保持し、Jev 接続事例とは区別します。
  - **Jev が判断する箇所**: この項目は確認待ちであり、検証済みの Jev 連携としては推奨していません。
  - **このプロジェクトの用途**: 追跡用に記録を保持しています。先に確認待ちの理由と出典をご確認ください。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/rongxinzy/lightjev/) · ライセンス: 記載なし

- [**TypeSafe AI Playground**](https://github.com/markjaquith/typesafe-ai-playground) — 医療情報の検査、コメント確認、語調分析、業種・職業分類を試せる Rust CLI。
  - **Jev が判断する箇所**: 入力文を Jev に送り、個別の Noul 確率、スコア、分類結果を受け取る。
  - **このプロジェクトの用途**: 構造化された判断を端末で確認できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/typesafe-ai-playground/) · ライセンス: MIT

- [**jevscript**](https://github.com/amberwhitehead/jevscript) — 意味判断を言語の原語にする初期実験。現状の実装は Jev 要求のバッチ化検証スクリプト。
  - **Jev が判断する箇所**: 個別・一括質問の回答、使用量、遅延を比較し、言語エンジン本体は設計段階。
  - **このプロジェクトの用途**: バッチ化の研究用で、完成したコンパイラーやインタープリターではない。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/amberwhitehead/jevscript/) · ライセンス: 記載なし


## 分類・カタログ

- [**typesafe-jev-workflow**](https://github.com/GiesN/typesafe-jev-workflow) — 模擬メールを請求書関連と一般に分類する、非同期 LangGraph の例。
  - **Jev が判断する箇所**: Jev が invoice または general を返し、graph が処理分岐を選ぶ。
  - **このプロジェクトの用途**: モデル分類とローカル workflow の振り分けを分離する。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/giesn/typesafe-jev-workflow/) · ライセンス: 記載なし

- [**jev-tree**](https://github.com/reachjalil/jev-tree) — 候補が多すぎる目録を階層化し、Jev に枝を順番に選ばせるセレクター。
  - **Jev が判断する箇所**: 各階層で一つの枝を選び、最終候補まで進む。
  - **このプロジェクトの用途**: 大きな目録の末尾を黙って切り捨てず、選択経路を返す。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/reachjalil/jev-tree/) · ライセンス: MIT


## コード・グラフ探索

- [**celesto**](https://github.com/CelestoAI/celesto) — Celesto の PR レビュー例がサンドボックスで検査を準備し、通常モデルと Jev の指摘評価を比較する。
  - **Jev が判断する箇所**: 問題が今回の変更によるものか、根拠があるか、修正対象かを判断する。
  - **このプロジェクトの用途**: 実行記録とレビュー判断を同じ画面で確認できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/celestoai/celesto/) · ライセンス: Apache-2.0

- [**Jev Review**](https://github.com/devagrawal09/jev-review) — Git diff またはコード全体を段階的に確認し、ローカル画面にレビューの手掛かりを表示する。
  - **Jev が判断する箇所**: リスク、ファイル、根拠箇所、原因、重大度を判断し、規則に従ってレビュー経路を選ぶ。
  - **このプロジェクトの用途**: 手掛かりを具体的なコードと結び付け、人が確認しやすくする。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/jev-review/) · ライセンス: MIT

- [**commit-miner**](https://github.com/devanshbatham/commit-miner) — Git のメッセージと diff を Jev で分類し、バグ修正、安全性修正、CWE、変更種別を整理する。
  - **Jev が判断する箇所**: 固定カテゴリを質問し、フィルターや HTML/CSV レポート用に保存する。
  - **このプロジェクトの用途**: 大量の履歴を追加確認しやすい分類記録にする。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/devanshbatham/commit-miner/) · ライセンス: 記載なし

- [**neo4jev**](https://github.com/jexp/neo4jev) — Neo4j のグラフを一段ずつたどり、次に進む関係を Jev に選ばせる。
  - **Jev が判断する箇所**: Choice で隣接関係を評価し Noul で到達を判定、ローカルの beam search が候補経路を残す。
  - **このプロジェクトの用途**: 自然言語の目標を確認可能なグラフ経路に結び付ける。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/neo4jev/) · ライセンス: MIT

- [**Blink**](https://github.com/ellipsis-dev/blink) — 自然言語の質問から複数の walker でディレクトリ木を探索し、ファイルを探す。
  - **Jev が判断する箇所**: Jev が名前の関連確率を評価し、コードが walker を配分する。
  - **このプロジェクトの用途**: ベクトル索引なしで探索し、各パスに到達した walker の比率を示す。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/blink/) · ライセンス: 記載なし

- [**jev-code**](https://github.com/devagrawal09/jev-code) — コードの位置特定、変更意図の確認、テスト失敗やレビュー指摘の整理を支援する。
  - **Jev が判断する箇所**: 固定ワークフローを選び、範囲を限定した diff、コード、ログを評価する。
  - **このプロジェクトの用途**: 確認すべき手掛かりと未確認の範囲を返す。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/devagrawal09/jev-code/) · ライセンス: MIT

- [**jev**](https://github.com/BorisLeMeec/jev) — ファイル検索、コード全体への限定質問、大きな読み取りを Jev で扱う Go 製 Claude Code プラグイン。
  - **Jev が判断する箇所**: ファイル全体を Agent に渡す前に、質問との関連性を選別・確認する。
  - **このプロジェクトの用途**: 確認対象を絞るためのファイル位置と判断を返す。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/borislemeec/jev/) · ライセンス: MIT

- [**leanest**](https://github.com/baronunread/leanest) — diff とテストソースを使い、既存テストランナーの前に Jev 選別を加える。
  - **Jev が判断する箇所**: 関連性を Jev が判断し、不確実・API 障害・テスト自身の変更時はローカル方針で実行する。
  - **このプロジェクトの用途**: shadow モードで比較できるが、選別後のテストだけで漏れがないとは保証しない。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/baronunread/leanest/) · ライセンス: MIT

- [**claude-jev**](https://github.com/buchmark/claude-jev) — Claude Code の指摘、原因仮説、設計案、検索結果に Jev の確認を追加する。
  - **Jev が判断する箇所**: 候補の問題や選択肢を定義済みの質問で評価し、ローカル規則で処理する。
  - **このプロジェクトの用途**: 追加判断と確率を残し、判断の違いを確認できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/buchmark/claude-jev/) · ライセンス: MIT

- [**jev-review-action**](https://github.com/fatwang2/jev-review-action) — ディレクトリ投稿の確認や PR 分類を行い、定型コメントを更新する GitHub Action。
  - **Jev が判断する箇所**: 固定版の根拠や PR 差分について方針の質問に答え、コードが分類規則を適用する。
  - **このプロジェクトの用途**: 質問、しきい値、コメント形式を確認可能な設定に置く。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/fatwang2/jev-review-action/) · ライセンス: MIT

- [**PiJ**](https://github.com/tonyzdev/PiJ) — 主モデルが推論・編集・ツール実行を担い、Jev が補助判断する Pi ベースのターミナル Agent。
  - **Jev が判断する箇所**: skill 提案・実在するソース候補の再順位付け・失敗分類を行い、自動再試行や権限承認はしない。
  - **このプロジェクトの用途**: パス・行番号・ソース・エラーを保持。作者の限定実験は一般的効果の保証ではない。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/tonyzdev/pij/) · ライセンス: MIT


## Context GC・メモリ

- [**fast-jev-compaction**](https://github.com/tamaratran/fast-jev-compaction) — Claude Code の古いツール呼び出しと結果を削減し、残す内容は原文のまま保持する。
  - **Jev が判断する箇所**: 呼び出しと結果全体の必要性を別々に判断し、コードが保持・短縮・削除する。
  - **このプロジェクトの用途**: パス、コマンド、エラーを新しい要約に書き換えずに扱える。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/tamaratran/fast-jev-compaction/) · ライセンス: MIT

- [**bluenoise**](https://github.com/rokcso/bluenoise) — X/Twitter の投稿や返信をローカルルールで整理し、未一致の返信だけ任意で Jev に確認させる拡張。
  - **Jev が判断する箇所**: 実験的 AI を有効にすると、ルールに該当しない返信を評価し、閾値で非表示を決める。
  - **このプロジェクトの用途**: 可逆なローカルルールを先に適用し、必要に応じてモデル判断を追加する。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/rokcso/bluenoise/) · ライセンス: MIT

- [**jev-pruner**](https://github.com/tamaratran/jev-pruner) — Bash 実行後、主モデルへ渡す前に一部の出力を絞る Claude Code プラグイン。
  - **Jev が判断する箇所**: 長さと内容を確認してから Jev が保持する塊を選び、原文は別途保存する。
  - **このプロジェクトの用途**: 短い出力・エラー・認識された構造化データやソースは変更せず通す。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/tamaratran/jev-pruner/) · ライセンス: MIT

- [**Winnow**](https://github.com/GhalebDweikat/winnow) — Claude Code の不要なツール出力を隠し、原文を後から呼び戻せるフィルター。
  - **Jev が判断する箇所**: Jev が出力の関連性を判定し、ローカルの閾値で必要・不確かな部分を残す。
  - **このプロジェクトの用途**: 表示する情報を絞りつつ、隠した原文を取得できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/winnow/) · ライセンス: MIT

- [**jevlogs**](https://github.com/reachjalil/jevlogs) — OpenTelemetry ログに Jev の診断価値、優先度、振り分け判断を付ける。
  - **Jev が判断する箇所**: 各ログを評価し、追加のモデル解析に回す価値があるか判断する。
  - **このプロジェクトの用途**: 既存の保存経路を維持しながら判断を追記できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/reachjalil/jevlogs/) · ライセンス: MIT

- [**pi-fast-jev-compaction**](https://github.com/joelhooks/pi-fast-jev-compaction) — 古いツール履歴を原文のまま整理し、必要なら Pi 標準の要約へ渡す拡張。
  - **Jev が判断する箇所**: モデルに送る履歴で、呼び出しと結果を残す必要があるか判断する。
  - **このプロジェクトの用途**: 元のセッションファイルを保持し、削減の判断を記録する。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/joelhooks/pi-fast-jev-compaction/) · ライセンス: MIT

- [**jev-skill-gate**](https://github.com/ShivamPansuriya/jev-skill-gate) — 現在のプロジェクトに対する Claude Code スキルの関連度を付け、初期表示する説明を絞る。
  - **Jev が判断する箇所**: 技術構成、ディレクトリ、README に照らして関連性を判定し、説明の表示を調整する。
  - **このプロジェクトの用途**: 必要な説明を残し、ほかのスキルも手動で呼び出せる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/shivampansuriya/jev-skill-gate/) · ライセンス: MIT

- [**omp-jev-compaction**](https://github.com/jerryfane/omp-jev-compaction) — Oh My Pi のツール履歴を整理し、判断を再利用して先頭部分の書き換えを抑える拡張。
  - **Jev が判断する箇所**: Jev が呼び出しと結果の必要性を判断し、選択した内容を復元用の注記付きで短縮する。
  - **このプロジェクトの用途**: 削減判断を記憶して後のリクエストに適用する。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/jerryfane/omp-jev-compaction/) · ライセンス: MIT

- [**pi-jev-context**](https://github.com/kevinpita/pi-jev-context) — 古いメッセージの有用性を Jev で判断する Pi の可逆コンテキストフィルター。
  - **Jev が判断する箇所**: 履歴断片を評価し、低評価部分を今後の要求から隠すが会話原本は保持する。
  - **このプロジェクトの用途**: 無効化で全コンテキストへ戻せる。有効時は一部履歴を TypeSafe へ送る。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/kevinpita/pi-jev-context/) · ライセンス: MIT

- [**codex-jev-compaction**](https://github.com/Wang-auspicious/codex-jev-compaction) — Jev で過去のツール記録を選別し、採用した原文を残す Codex 向け引き継ぎ支援。
  - **Jev が判断する箇所**: 対象となる読み取り専用記録の関連性を判断し、必須内容を保護して引き継ぎ資料を作る。
  - **このプロジェクトの用途**: 出典、選別理由、原文の順序を残す。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/wang-auspicious/codex-jev-compaction/) · ライセンス: MIT

- [**jev-context**](https://github.com/zbush/jev-context) — ripgrep の候補を Jev で絞り、関連するコードを返す Codex 検索プラグイン。
  - **Jev が判断する箇所**: 質問との関連性を判断し、No と Unknown の候補を除く。
  - **このプロジェクトの用途**: 前後の内容を記録し、指定 tokenizer で返却量を比較できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/zbush/jev-context/) · ライセンス: MIT

- [**pi-jev-compaction**](https://github.com/Wang-auspicious/pi-jev-compaction) — 生成要約ではなく、選んだツール記録の原文を残す Pi 向け Context GC。
  - **Jev が判断する箇所**: 読み取り専用ツールの呼び出しと返答を一組で判定し、不要な組をコードで除く。
  - **このプロジェクトの用途**: 原文の証拠と Pi の最近のメッセージ境界を残す。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/wang-auspicious/pi-jev-compaction/) · ライセンス: MIT

- [**your-signal**](https://github.com/MithrilMan/your-signal) — 自分のキーで Jev に X の投稿を好み別に採点させ、表示を調整する Chrome 拡張。
  - **Jev が判断する箇所**: 関連性、内容、実用性、宣伝傾向を評価し、ローカルの重みと閾値で表示を決める。
  - **このプロジェクトの用途**: 個人のフィード設定を調整でき、表示変更を元に戻せる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/mithrilman/your-signal/) · ライセンス: MIT

- [**pi-jev-compact**](https://github.com/ilkerulusoy/pi-jev-compact) — 既定では古いツール履歴を、任意で助手の文章も整理する Pi 拡張。
  - **Jev が判断する箇所**: 候補を残す必要性を Jev が判断し、残る文章は原文のまま返す。
  - **このプロジェクトの用途**: 削減範囲を設定でき、判断の記録を確認できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/ilkerulusoy/pi-jev-compact/) · ライセンス: 記載なし


## 音楽・UI 制作

- [**json-render**](https://github.com/vercel-labs/json-render) — json-render のサイト内で、定義済みコンポーネントと属性を Jev が選ぶ UI 組み立て実験。
  - **Jev が判断する箇所**: Vercel AI Gateway で構成を評価し、composeSpec が UI 仕様にまとめる。
  - **このプロジェクトの用途**: Token ごとの JSON 生成とは別の、確認可能な構成経路を提供する。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/vercel-labs/json-render/) · ライセンス: Apache-2.0

- [**jevmeter**](https://github.com/ChetasLua/jevmeter) — 字幕の各文を Jev が指定基準で採点し、メーターを重ねた動画を出力する。
  - **Jev が判断する箇所**: 書き起こした文を質問と尺度で採点し、動画のタイムライン上で表示する。
  - **このプロジェクトの用途**: 文のスコアを対応する映像と照合できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/chetaslua/jevmeter/) · ライセンス: MIT

- [**vibecheck**](https://github.com/RafalWilinski/vibecheck) — X への投稿前に、明瞭さ、語調、不快さなどを Jev で採点するカードを表示する。
  - **Jev が判断する箇所**: 下書きと返信・引用の文脈を送り、複数の評価と投稿の提案を受け取る。
  - **このプロジェクトの用途**: 送信前に文章を複数の観点から見直せる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/rafalwilinski/vibecheck/) · ライセンス: 記載なし

- [**refgarden**](https://github.com/AlbionaHoti/refgarden) — The Met・NASA・Cosmos の参考素材を集め、ローカル Explore で Jev を使うギャラリー。
  - **Jev が判断する箇所**: Jev は画像の画素ではなくタイトルと説明から検索句や注目素材を選ぶ。
  - **このプロジェクトの用途**: 出典リンクを保持。公開検索デモは Jev を呼ばず、画像クラスタリングの証拠ではない。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/albionahoti/refgarden/) · ライセンス: MIT

- [**snifftest**](https://github.com/DanRWilloughby/snifftest) — ローカル規則と任意の Jev 判断で文章を点検する Markdown・テキスト用 linter。
  - **Jev が判断する箇所**: 冗長な結び、常套句、過度な留保などの文体規則を段落ごとに評価する。
  - **このプロジェクトの用途**: ファイル、行、規則を示し、修正は書き手に任せる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/danrwilloughby/snifftest/) · ライセンス: MIT

- [**jevthoven**](https://github.com/cocktailpeanut/jevthoven) — 音楽の説明から Jev が楽器、和声、小節パターンを選び、編集可能なマルチトラック MIDI を作る。
  - **Jev が判断する箇所**: 曲構成、楽器、和音、リズムを候補から選び、コードが音符に変換する。
  - **このプロジェクトの用途**: 編集可能なトラックと判断記録を残し、再生と MIDI 書き出しに対応する。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/cocktailpeanut/jevthoven/) · ライセンス: MIT

- [**ui-generator-instinct-jev**](https://github.com/joevidev/ui-generator-instinct-jev) — UI の説明を既存の shadcn/ui コンポーネント・項目・スタイルの選択へ変換する。
  - **Jev が判断する箇所**: 要求を選択・採点問題に分け、回答を有限のコンポーネント一覧に対応させる。
  - **このプロジェクトの用途**: 判断による UI 構成のデモで、Jev 自体はコードや文言を生成しない。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/joevidev/ui-generator-instinct-jev/) · ライセンス: 記載なし

- [**jev-got**](https://github.com/phureewat29/jev-got) — 別の言語モデルが物語を書き、Jev が場面を分類する Game of Thrones の文章ゲーム。
  - **Jev が判断する箇所**: 場所・物語の展開・気分・危険・物語内かどうかを判定する。
  - **このプロジェクトの用途**: 明示的な場面状態で背景・音楽・次のターンを制御する。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/phureewat29/got-jev/) · ライセンス: 記載なし

- [**jev-music-theory-1**](https://github.com/adammichaelwood/jev-music-theory-1) — 和声練習と楽理問題で Jev を試し、和音選択によるピアノ演奏も行う。
  - **Jev が判断する箇所**: 声部、音高、長さ、和音を選び、コードが採点または再生する。
  - **このプロジェクトの用途**: 楽理のテストと音で確かめる実験を一つにまとめる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/adammichaelwood/jev-music-theory-1/) · ライセンス: 記載なし


## データ・検索

- [**pg-jev**](https://github.com/realZachi/pg-jev) — PostgreSQL の行を自然言語で絞り込み、分類、順位付けする。
  - **Jev が判断する箇所**: 行の内容を Jev に送り、一致判定、分類、スコアを SQL 条件や並べ替えに使う。
  - **このプロジェクトの用途**: 既存の SQL に意味的な条件を加え、キャッシュ結果を再利用できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/realzachi/pg-jev/) · ライセンス: PostgreSQL

- [**jev-search**](https://github.com/superagents-lab/jev-search) — Jev が検索元と期間を選び、取得したウェブリンクを並べ替える検索ツール。
  - **Jev が判断する箇所**: 検索意図、検索元、期間と、各結果の関連度を判断する。
  - **このプロジェクトの用途**: リンク、抜粋、変更可能な条件、検索元の失敗を表示する。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/superagents-lab/jev-search/) · ライセンス: MIT

- [**pg\_typesafe**](https://github.com/giuliosmall/pg_typesafe) — SQL から Jev の分類、二択、採点を呼び出す pre-alpha の PostgreSQL C 拡張。
  - **Jev が判断する箇所**: SQL 入力を System One リクエストに変え、データベース関数で回答を返す。
  - **このプロジェクトの用途**: 既存の問い合わせに型付きの意味判断を加える。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/giuliosmall/pg_typesafe/) · ライセンス: MIT

- [**duckdb-jev**](https://github.com/colliber/duckdb-jev) — SQL から Jev を呼び、ENUM、数値、STRUCT などで答えを返す DuckDB 拡張。
  - **Jev が判断する箇所**: 行のテキストを Choice、Score、Noul で評価し、定義に合う SQL 型へ変換する。
  - **このプロジェクトの用途**: 表や Parquet の問い合わせ中に構造化判断を使える。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/colliber/duckdb-jev/) · ライセンス: MIT

- [**jev-curate**](https://github.com/AkashPriyadarshii/jev-curate) — Jev の採点でテキストレコードを採用・除外する Rust のデータセット選別実験。
  - **Jev が判断する箇所**: ローカル前処理後に TypeSafe を呼び、確率とスコアの閾値を適用する。
  - **このプロジェクトの用途**: ローカル前処理とスコア閾値を備え、レコード単位の選別パイプラインを研究できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/akashpriyadarshii/jev-curate/) · ライセンス: MIT

- [**jevql**](https://github.com/kylemclaren/jevql) — データベース拡張を入れずに、通常の PostgreSQL へ Jev による絞り込み、分類、順位付けを加える。
  - **Jev が判断する箇所**: CLI やサービス層が jev\_\* 呼び出しを解析し、行テキストの判断結果で問い合わせを処理する。
  - **このプロジェクトの用途**: CLI、HTTP、MCP、SDK で同じ意味検索 SQL を使える。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/kylemclaren/jevql/) · ライセンス: MIT

- [**jevsql**](https://github.com/EugeneBoondock/jevsql) — SQLite に Jev の意味判断を加え、絞り込み、順位付け、照合と根拠追跡を行う。
  - **Jev が判断する箇所**: 行データと質問を Jev に送り、回答を SQL で扱える結果へ変換する。
  - **このプロジェクトの用途**: 一括処理、キャッシュ、予算管理、判断履歴を備える。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/eugeneboondock/jevsql/) · ライセンス: MIT

- [**llama-index-jev**](https://github.com/WiktorB2004/llama-index-jev) — LlamaIndex 向けに、検索文章の採点と問い合わせ先の選択を行う Jev 部品を提供する。
  - **Jev が判断する箇所**: Score で文章の関連性を評価し、Choice で検索エンジンやツールを選ぶ。
  - **このプロジェクトの用途**: 既存の検索フローに Jev の判断を組み込める。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/wiktorb2004/llama-index-jev/) · ライセンス: MIT

- [**jev-scout**](https://github.com/AkashPriyadarshii/jev-scout) — 検索で得たリポジトリーと Rust crate の候補を、Jev が依頼に合わせて評価・選択する。
  - **Jev が判断する箇所**: 候補情報と依頼を比べ、適合度や保守の兆候を評価する。
  - **このプロジェクトの用途**: 提案を取得済み候補と出典リンクに結び付ける。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/akashpriyadarshii/jev-scout/) · ライセンス: MIT

- [**jevsome-projects**](https://github.com/ozers/jevsome-projects) — 接続の根拠を保存し、任意で Jev に分類させるプロジェクト一覧と探索パイプライン。
  - **Jev が判断する箇所**: キー設定時は状態と分類候補を Jev に送り、未設定時はローカルルールを使う。
  - **このプロジェクトの用途**: プロジェクト一覧と具体的なコード上の根拠をまとめる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/ozers/jevsome-projects/) · ライセンス: MIT


## 判断ツール

- [**killmyidea**](https://github.com/monteduro/killmyidea) — Jev の複数スコアから KILL・FIX・SHIP を付ける起業アイデア評価デモ。
  - **Jev が判断する箇所**: 採点・分類・明瞭さを Jev に問い、ローカルの重みとゲートで最終ラベルを計算する。
  - **このプロジェクトの用途**: 評価手順の例であり、市場検証・成功予測・投資助言ではない。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/monteduro/killmyidea/) · ライセンス: 記載なし

- [**hermes-jev**](https://github.com/keeltrace/hermes-jev) — 関連性・完了・復旧・任意の許可判断を補助する、Hermes Agent 用の非同期 Jev 連携。
  - **Jev が判断する箇所**: Jev が限定した質問を背景で評価し、推論と実行は Hermes が担う。
  - **このプロジェクトの用途**: 判断元を記録し、通常処理を妨げない設定を選べる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/keeltrace/hermes-jev/) · ライセンス: MIT

- [**jevify**](https://github.com/altryne/jevify) — Jev に適した判断箇所を探し、質問と比較実験を設計する Agent Skill。
  - **Jev が判断する箇所**: 用途に応じた質問を作り、付属スクリプトで API を使うケースを実行できる。
  - **このプロジェクトの用途**: 導入案、質問設計、評価方法を結び付ける。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/altryne/jevify/) · ライセンス: MIT

- [**jev-playground**](https://github.com/Little-Planet-Labs/jev-playground) — 状態や選択・採点の質問を入力し、Jev の回答と確率分布を見る Web 実験画面。
  - **Jev が判断する箇所**: 複数の Noul、Choice、Score を一つのリクエストにまとめる。
  - **このプロジェクトの用途**: アプリのコードを書く前に質問と選択肢を試せる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/little-planet-labs/jev-playground/) · ライセンス: 記載なし

- [**jev-predict-skill**](https://github.com/DanielKillenberger/jev-predict-skill) — 規則と証拠から別の skill の閉じた選択肢での結論を予測する Agent 用レシピ。
  - **Jev が判断する箇所**: Jev が閉集合判断の可否を評価し、対象 skill の結論候補から選ぶ。
  - **このプロジェクトの用途**: API 呼び出しと応答検査の例を含むが、対象 skill 自体は実行しない。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/danielkillenberger/jev-predict-skill/) · ライセンス: 記載なし

- [**jevchat**](https://github.com/kt3k/jevchat) — 定義済みまたは独自の選択肢から回答する、チャット形式の Jev デモ。
  - **Jev が判断する箇所**: 回答スタイルを Choice に変換し、質問の断片からチャットタイトルも選ぶ。
  - **このプロジェクトの用途**: チャット画面で選択肢と確率を確認し、独自の回答集合を試せる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/kt3k/jevchat/) · ライセンス: 記載なし

- [**jev-commit**](https://github.com/valentynkit/jev-commit) — Pre-commit hook for the commit-msg stage: one Jev call judges the message against the staged diff, then warns and gets out of the way, except on a credential on an added line, which it blocks.
  - **Jev が判断する箇所**: Jev returns a structured decision for the local program; consult the source for the exact decision policy.
  - **このプロジェクトの用途**: Adds structured choices or scores to the workflow; performance and cost benefits have not been independently verified.
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/valentynkit/jev-commit/) · ライセンス: MIT


## 分野別ツール

- [**ai-hedge-fund**](https://github.com/virattt/ai-hedge-fund) — 基金判断の流れに任意の Jev アダプターを持つ、教育用途の AI ヘッジファンド試作。
  - **Jev が判断する箇所**: 戦略上の質問を System One に送り、回答をプロジェクト共通の形式に変換する。
  - **このプロジェクトの用途**: 同じ研究フローで Jev やほかのモデルを選べる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/virattt/ai-hedge-fund/) · ライセンス: MIT

- [**jev-trader**](https://github.com/jarrodwatts/jev-trader) — Monad の Kuru MON-USDC 板で、Jev のブロック単位判断を選択できるマーケットメイク実験。
  - **Jev が判断する箇所**: Jev モードでは板から売買方向を選び、コードが模擬約定または設定済み指値注文を扱う。
  - **このプロジェクトの用途**: 既定は mock モデル。秘密鍵なしでは dry run で、模擬結果は収益性を証明しない。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/jarrodwatts/jev-trader/) · ライセンス: MIT

- [**tax-doc-classifier**](https://github.com/kyotofin/tax-doc-classifier) — 事前定義した IRS の書式とページ種別を Jev が選ぶ税務書類分類器。
  - **Jev が判断する箇所**: PDF ページのテキストを抽出し、書式、ページ種別、確信度を取得する。
  - **このプロジェクトの用途**: 固定の書式一覧と各ページの分類を後続の処理につなぐ。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/kyotofin/tax-doc-classifier/) · ライセンス: Apache-2.0

- [**Prism**](https://github.com/irfndi/prism-liquidity-agent) — Solana 流動性プールを監視し、Jev のシャドー判断をルール判断と比較する Agent。
  - **Jev が判断する箇所**: 入池分布・有害フロー・保有・ストレス信号を評価し、校正用ログに残す。
  - **このプロジェクトの用途**: 確定的な取引ルールに比較可能な補助信号を加える。収益は保証しない。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/prism-liquidity-agent/) · ライセンス: MIT

- [**HA-Jev**](https://github.com/AboveColin/HA-Jev) — 洗濯物の取り忘れなどを Jev が判断し、Home Assistant のセンサーとして扱う。
  - **Jev が判断する箇所**: 選択したエンティティの状態から確率、選択肢、スコアを返し、設定した閾値で自動化につなぐ。
  - **このプロジェクトの用途**: 自然言語の条件を既存のセンサーや通知、シーンに組み込める。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/abovecolin/ha-jev/) · ライセンス: MIT

- [**jev-trade**](https://github.com/aowang-ai/jev-trade) — Jev が売買方向と開始、決済、待機を選ぶ Hyperliquid 取引ボットの実験。
  - **Jev が判断する箇所**: 各資産の口座が相場を Jev に送り、実行コードが注文や取り消しを行う。
  - **このプロジェクトの用途**: モデルの判断、注文実行、画面の状態を分けて記録する。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/aowang-ai/jev-trade/) · ライセンス: MIT

- [**Jev-Trades**](https://github.com/zadescoxp/Jev-Trades) — 暗号資産の市場データと Jev による模擬取引を表示するダッシュボード。実注文 API は接続しない。
  - **Jev が判断する箇所**: Jev が確定済みの分足と指標を判定し、Python が制限に従って模擬口座を更新する。
  - **このプロジェクトの用途**: 市場入力・モデル判断・模擬ポジションをまとめて確認できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/zadescoxp/jev-trades/) · ライセンス: Apache-2.0

- [**jev-seo**](https://github.com/AkashPriyadarshii/jev-seo) — ページ検査、DuckDuckGo 検索、任意の Jev 評価を組み合わせる実験的な Rust SEO/GEO CLI と MCP。
  - **Jev が判断する箇所**: 検索意図、直接的回答、内容不足を分類し、独自尺度で引用されやすさを推定する。
  - **このプロジェクトの用途**: ローカル検査、検索結果、モデル判断をレポートにまとめる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/akashpriyadarshii/jev-seo/) · ライセンス: 記載なし

- [**jev-for-engineers**](https://github.com/Foadsf/jev-for-engineers) — タスク振り分け・ログ確認・部品選択を試す、機械・電気工学向けの八つの Jev 実験。
  - **Jev が判断する箇所**: Jev が工学的な文章や候補を分類し、計算と最終処理は Python が担う。
  - **このプロジェクトの用途**: 合成例で工学ワークフローへの判断の組み込み方を確認できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/foadsf/jev-for-engineers/) · ライセンス: MIT

- [**jev-reviewer**](https://github.com/choxos/jev-reviewer) — 論文と補足資料から原文の証拠を選び、人が確認して抽出表へ出力するレビュー支援ツール。
  - **Jev が判断する箇所**: Jev が候補行 ID を選び、コードが原文とファイル・位置をコピーする。
  - **このプロジェクトの用途**: 引用・出典位置・人による確認状況を対応付ける。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/choxos/jev-reviewer/) · ライセンス: MIT

- [**jevscan**](https://github.com/jevbook/jevscan) — 市場特徴に基づくリスク判断を、ライブラリー・CLI・MCP で提供する EVM Token ツール。
  - **Jev が判断する箇所**: 既定はローカル規則で、TypeSafe key を設定すると Jev 判断を使う。
  - **このプロジェクトの用途**: 特徴量・判断元・スコアを並べて確認できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/jevbook/jevscan/) · ライセンス: MIT

- [**jevsume**](https://github.com/unownone/jevsume) — 履歴書の文章・構成を確認し、特定の求人との適合も調べるアプリ。
  - **Jev が判断する箇所**: 抽出した履歴書を Jev が質問ごとに評価し、Worker が結果をまとめる。
  - **このプロジェクトの用途**: 入力と判断を記録し、個々のレビューを後で確認できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/unownone/jevsume/) · ライセンス: 記載なし

- [**leadgenrationaivoiceagent**](https://github.com/sumitrevolt/leadgenrationaivoiceagent) — マーケティング・音声基盤内の TypeSafe 実験モジュールが、Agent 役割の専門ラベルを選ぶ。
  - **Jev が判断する箇所**: 役割情報と限定候補を Choice に送り、コードが能力ラベルへ対応付ける。
  - **このプロジェクトの用途**: 業務アプリでの役割分類の接続例を示す。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/sumitrevolt/leadgenrationaivoiceagent/) · ライセンス: MIT

- [**jev-trade**](https://github.com/Waxmell114514/jev-trade) — BTC・ETH の特徴量を Jev に渡し、遅延と売買コストを含めて模擬取引するループ。
  - **Jev が判断する箇所**: Jev が方向とリスクを判定し、模擬ポジションはローカル方針が決める。
  - **このプロジェクトの用途**: 判断・遅延・コストを同じ実験記録で比較できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/waxmell114514/jev-trade/) · ライセンス: 記載なし


## 評価・可観測性

- [**latitude-llm**](https://github.com/latitude-dev/latitude-llm) — Latitude の任意の Jev 事前分類器が、会話検査の判断と選択理由を記録する。
  - **Jev が判断する箇所**: 検査の必要性を判断し、しきい値と呼び出し制限を満たす場合に検査を追加する。
  - **このプロジェクトの用途**: モデル、しきい値、時間、選択理由を元の処理と対照できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/latitude-dev/latitude-llm/) · ライセンス: MIT

- [**jev-review**](https://github.com/NiazMorshed2007/jev-review) — コーディング Agent に複数の品質スコアを返すローカル MCP レビューサーバー。
  - **Jev が判断する箇所**: Jev が正しさ・複雑度・テスト・セキュリティを採点し、改善項目を整理する。
  - **このプロジェクトの用途**: チェック間のスコア変化を比較でき、修正は主 Agent が担当する。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/niazmorshed2007/jev-review/) · ライセンス: MIT

- [**taskuary**](https://github.com/ldbumble/taskuary) — Taskuary でタスク状態がユーザー定義条件を満たすか点検する任意の Jev モジュール。
  - **Jev が判断する箇所**: 条件を yes/no 確率質問へ変え、ローカル閾値の判定と確率を返す。
  - **このプロジェクトの用途**: タスク結果の確認用で、メッセージシステム全体を Jev が制御するわけではない。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/ldbumble/taskuary/) · ライセンス: MIT

- [**supercov**](https://github.com/supercorp-ai/supercov) — Jev によるコード属性確認と、ローカルのカバレッジを組み合わせた Agent 向け CLI。
  - **Jev が判断する箇所**: ファイルの品質属性を Jev に問い、コードがスコアと順序をまとめる。
  - **このプロジェクトの用途**: スコアを名前付き属性に分け、内容ごとに結果を保存する。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/supercorp-ai/supercov/) · ライセンス: MIT

- [**goodwatch-monorepo**](https://github.com/alp82/goodwatch-monorepo) — GoodWatch 内で、映像作品の特徴に対する Jev の質問設計とバッチ量を比較する実験。
  - **Jev が判断する箇所**: 定義した特徴の有無・強さを質問し、スコア・遅延・Token を記録する。
  - **このプロジェクトの用途**: 固定サンプルで評価尺度・入力条件・バッチ方式を比較できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/alp82/goodwatch-monorepo/) · ライセンス: MIT

- [**typesafe-ai-benchmark**](https://github.com/iammrduncan/typesafe-ai-benchmark) — 共通のタスクで Jev とほかの構造化出力モデルを比べ、誤り、遅延、Token、推定費用を記録する。
  - **Jev が判断する箇所**: 同じタスクを Choice/Noul に変換し、回答を共通の結果形式にそろえる。
  - **このプロジェクトの用途**: 比較手順と結果からモデル間の違いを確認できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/iammrduncan/typesafe-ai-benchmark/) · ライセンス: MIT

- [**jev-playground**](https://github.com/mizchi/jev-playground) — ゲーム・ブラウザー・コマンドリスク・小型言語を扱う MoonBit / TypeScript の Jev 実験集。
  - **Jev が判断する箇所**: 候補動作や型付き質問を Jev に送り、各プログラムが回答を実行・記録する。
  - **このプロジェクトの用途**: ソース、実験記録、一部のオフライン再生例で判断設計を比較できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/mizchi/jev-playground/) · ライセンス: 記載なし

- [**jev-benchmarks**](https://github.com/AbdelStark/jev-benchmarks) — 文章分類・確率校正・選択的自動化を Jev と GLiNER で比較するベンチマーク。
  - **Jev が判断する箇所**: 同じラベル付き課題を実行し、確率・遅延・失敗を記録する。
  - **このプロジェクトの用途**: 課題ごとの精度と、閾値に使う確率の妥当性を調べられる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/abdelstark/jev-benchmarks/) · ライセンス: Apache-2.0

- [**typesafe-playground**](https://github.com/kavehmz/typesafe-playground) — 問い合わせ振り分けのプレビューと3D運転シミュレーションを行う Jev 実験集。
  - **Jev が判断する箇所**: 問い合わせを評価するか、構造化された模擬センサーから車線と速度を選ぶ。
  - **このプロジェクトの用途**: 入力、確率、続く動作を画面で比較できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/kavehmz/typesafe-playground/) · ライセンス: 記載なし

- [**jev-lm**](https://github.com/y0usaf/jev-lm) — Jev に単語を選ばせ、ローカルで作った続きの文章を検証する生成実験。
  - **Jev が判断する箇所**: Choice で次の単語を選び、Noul で続きの候補と終了条件を判定する。
  - **このプロジェクトの用途**: 決定モデルを文章生成に使う際の限界を調べられる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/y0usaf/jev-lm/) · ライセンス: MIT

- [**jevcal**](https://github.com/abhixhek/jevcal) — ラベル付きデータで Jev の確率・閾値・モデル更新の影響を調べるツール。
  - **Jev が判断する箇所**: 固定質問で精度・校正・処理範囲・追加処理率を測定する。
  - **このプロジェクトの用途**: 閾値選択とモデル変化の確認をレポートや CI に組み込める。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/abhixhek/jevcal/) · ライセンス: MIT

- [**jev-behavior-study**](https://github.com/RINNECODER/jev-behavior-study) — 質問表現・入力条件・ゲーム課題における成功と失敗を記録する Jev 1.13.0 の独立研究。
  - **Jev が判断する箇所**: 固定課題の条件を変え、選択・確率・要求と応答の原記録を残す。
  - **このプロジェクトの用途**: 簡単な課題の成功を一般化せず、個々の事例を確認できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/rinnecoder/jev-behavior-study/) · ライセンス: MIT

- [**jev-chat**](https://github.com/adhyaay-karnwal/jev-chat) — Jev に単語や句を繰り返し選ばせ、コードで回答を組み立てる研究用デコーダー。
  - **Jev が判断する箇所**: 段階的な Choice デコードと、完成した候補回答の選択を比較する。
  - **このプロジェクトの用途**: 手法、実験履歴、失敗例を研究用に公開している。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/adhyaay-karnwal/jev-chat/) · ライセンス: MIT

- [**jev-benchmark**](https://github.com/wondertwins/jev-benchmark) — チェスの手選びと、話し掛けられた NPC の識別で Jev を評価する。
  - **Jev が判断する箇所**: 合法な手を選ぶか、発話が各 NPC に向けられたか判断する。
  - **このプロジェクトの用途**: 正解ラベル、リクエストと応答、評価コードを公開している。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/wondertwins/jev-benchmark/) · ライセンス: MIT

- [**jev-frontend-qa**](https://github.com/Nainish-Rai/jev-frontend-qa) — Jev がブラウザー操作を選び、DOM・HTTP・DB の証拠で仕様を確認するフロントエンド QA。
  - **Jev が判断する箇所**: 観測した操作と操作部品から選び、期待値と合格条件はテストコードが判定する。
  - **このプロジェクトの用途**: 探索の記録と仕様の受入確認を区別できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/nainish-rai/jev-frontend-qa/) · ライセンス: 記載なし

- [**jev-pref**](https://github.com/doeixd/jev-pref) — AGENTS.md のプロジェクト方針をルールに整理し、hunk・ステージ済みファイル・PR を Jev で点検する。
  - **Jev が判断する箇所**: 変更証拠を設定ルールに照らして分類し、コードが結果へ変換する。
  - **このプロジェクトの用途**: 意味ルールの指摘を Agent に返すが、型検査・テスト・安全監査の代替ではない。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/doeixd/jev-pref/) · ライセンス: MIT

- [**ask-jev**](https://github.com/omni-/ask-jev) — Codex で :jev を使い、記録済みの実行証拠を点検する Windows PowerShell ツール。
  - **Jev が判断する箇所**: 選択した記録を Jev に送り、結論と証拠の十分さを確率で判断する。
  - **このプロジェクトの用途**: 明示的に呼んだ時だけ記録を読み送信する。実テストの代替ではない。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/omni-/ask-jev/) · ライセンス: MIT

- [**Canny**](https://github.com/qkal/Canny) — Claude Code / Codex CLI の実行台帳から、変更後に検証が通ったか確認する。
  - **Jev が判断する箇所**: Jev は完了声明や意味ルールの問題を補助判断し、停止ゲートは台帳とローカル規則で決める。
  - **このプロジェクトの用途**: 実行証拠とモデル意見を分け、Jev 単独で完了認定しない。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/qkal/canny/) · ライセンス: MIT

- [**hermes-jev-north-star**](https://github.com/poponline63/hermes-jev-north-star) — 要件を保存し実行プロンプトを作り、完了証拠を点検する Hermes の目標確認 skill。
  - **Jev が判断する箇所**: 機械で確認できる要件はローカルで、残りの意味条件は Jev で評価する。
  - **このプロジェクトの用途**: 目標を検査条件に結び付けるが、実際の受入証拠をモデル意見で置き換えない。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/poponline63/hermes-jev-north-star/) · ライセンス: MIT

- [**jev-agent-failure-benchmark**](https://github.com/TokenTrim/jev-agent-failure-benchmark) — 複数 Agent の失敗記録から責任 Agent・重要ステップ・エラー種別を予測する評価プロジェクト。
  - **Jev が判断する箇所**: 記録から候補集合を作り、Jev に三つの choice 質問を送る。
  - **このプロジェクトの用途**: 評価スクリプトと作者結果を公開。一部ベースラインの自由生成と候補選択では条件が異なる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/tokentrim/jev-agent-failure-benchmark/) · ライセンス: Apache-2.0

- [**jev-exploration**](https://github.com/SamuelSacco/jev-exploration) — Jev の主張と限界を記録し、確率校正の実験や実行例を収めた研究リポジトリ。
  - **Jev が判断する箇所**: 定義した質問とラベル付き例を使い、誤り、校正、難易度の影響を分析する。
  - **このプロジェクトの用途**: 研究上の主張をコード、データ、根拠の台帳に結び付ける。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/samuelsacco/jev-exploration/) · ライセンス: 記載なし

- [**jev-flash-review**](https://github.com/TheBous/jev-flash-review) — Agent が渡す diff を明示ルールで評価する MCP コードレビューエンジン。
  - **Jev が判断する箇所**: Jev が diff を点検し、実在する hunk から証拠位置を選んで指摘を再確認する。
  - **このプロジェクトの用途**: diff と業務境界は呼び出し側が渡し、エンジン自身はリポジトリを走査しない。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/thebous/jev-flash-review/) · ライセンス: 記載なし

- [**jev-gomoku**](https://github.com/XieChengYuan/jev-gomoku) — 九つの 15×15 五目並べ盤で、二人の Jev に渡す情報の違いを比較する実験台。
  - **Jev が判断する箇所**: ローカル生成の着手候補から選び、盤面情報や戦術情報の条件を変える。
  - **このプロジェクトの用途**: 明示されたリプレイと自分のキーによる対局で、一手ごとの記録を確認できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/xiechengyuan/jev-gomoku/) · ライセンス: 記載なし

- [**jev-rerank-bench**](https://github.com/anessbelbati/jev-rerank-bench) — 同じ検索候補で Jev、専用 reranker、チャットモデルの順位付けを比較する。
  - **Jev が判断する箇所**: Choice、Noul、段階評価で候補を並べ替え、検索指標を計算する。
  - **このプロジェクトの用途**: 生の応答、評価コード、データセット別結果を公開している。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/anessbelbati/jev-rerank-bench/) · ライセンス: MIT

- [**jev-synergy-screening**](https://github.com/PistachioAIHQ/jev-synergy-screening) — ADHD レビューの題名・抄録を Jev で選別し、Cohen Abstract Triage のラベルと比較する実験。
  - **Jev が判断する箇所**: 適格性を Choice と Noul で質問し、コードで採用・除外にまとめる。
  - **このプロジェクトの用途**: データ区分と質問設計ごとの指標から選別ミスを確認できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/pistachioaihq/jev-synergy-screening/) · ライセンス: 記載なし

- [**foreman-jev**](https://github.com/Shifty-Eye-Games/foreman-jev) — プログラマー指定の受入コマンドを備えた、Codex worker 用の Jev 監督実験。
  - **Jev が判断する箇所**: Jev が進捗や完了を評価し、最終合格は決定的な受入チェックで確認する。
  - **このプロジェクトの用途**: モデルの評価と実行可能な完了確認を分離する。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/shifty-eye-games/foreman-jev/) · ライセンス: MIT

- [**jev-calibration-audit**](https://github.com/jujumilk3/jev-calibration-audit) — 公開 API とデータで Jev の確率較正、選択肢表現の影響、韓国語判断を調べる。
  - **Jev が判断する箇所**: Noul と Choice の結果をラベルと比べ、誤差、正確さ、安定性を計算する。
  - **このプロジェクトの用途**: 呼び出しごとの記録と実験説明で結論の範囲を確認できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/jujumilk3/jev-calibration-audit/) · ライセンス: MIT

- [**jev-demos**](https://github.com/Bud-ro/jev-demos) — 迷路で Jev の単一手選択と複数手の先読みを比較する実験。
  - **Jev が判断する箇所**: 方向候補から移動を選び、衝突、経路、到達を検査する。
  - **このプロジェクトの用途**: 実験条件と失敗を記録し、限界を調べられる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/bud-ro/jev-demos/) · ライセンス: 記載なし

- [**jev-eval**](https://github.com/4esv/jev-eval) — 正解付き分類課題で Jev と OpenRouter モデルの正確さ、較正、遅延、費用を比較する。
  - **Jev が判断する箇所**: 同じ課題の判断を集め、信頼区間と同一入力の安定性を計算する。
  - **このプロジェクトの用途**: 前処理、呼び出し、統計コードとモデル別結果を公開する。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/4esv/jev-eval/) · ライセンス: 記載なし


## ゲーム・リアルタイム判断

- [**typesafe-mario**](https://github.com/fhshaik/typesafe-mario) — スクリーンショットではなく NES の RAM と状態を Jev に渡す Mario 操作実験。
  - **Jev が判断する箇所**: 動き・敵・地形・直近の操作から、定義済みの合法操作を選ぶ。
  - **このプロジェクトの用途**: 画像入力なしで、モデルに渡した状態と操作を記録できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/fhshaik/typesafe-mario/) · ライセンス: 記載なし

- [**jevpilot**](https://github.com/standardagents/jevpilot) — ローカルで作る経路と速度の候補から Jev が選ぶブラウザー運転シミュレーター。
  - **Jev が判断する箇所**: 道路と交通状況から行動を選び、幾何計算・衝突予測・制動はローカルで行う。
  - **このプロジェクトの用途**: シミュレーション中の候補経路と選択確率を確認できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/standardagents/jevpilot/) · ライセンス: 記載なし

- [**jev-drone**](https://github.com/RomanSlack/jev-drone) — カメラのバッファから場面を抽出し、Jev が戦術を助言する MuJoCo ドローン実験。
  - **Jev が判断する箇所**: 距離区分、障害物の高さ、目標状態から機動、リスク、目標喪失を判断する。
  - **このプロジェクトの用途**: 戦術判断をローカルの誘導、反射制御、飛行制御と分ける。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/RomanSlack/jev-drone/) · ライセンス: MIT

- [**tsai-sc**](https://github.com/phyous/tsai-sc) — 状態取得と推論中にゲームを停止し、StarCraft shareware の Strongarm を Jev で操作する。
  - **Jev が判断する箇所**: 構造化されたゲーム状態からコマンドを選び、マウスとキーボードで実行する。
  - **このプロジェクトの用途**: 作者による勝利録画と検証報告があるが、限定ミッションの実験でリアルタイム競技の基準ではない。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/phyous/tsai-sc/) · ライセンス: MIT

- [**live-jev**](https://github.com/vinilana/live-jev) — Jev が車線と速度を選ぶブラウザー上の俯瞰型運転シミュレーター。チャットモデルとの比較も可能。
  - **Jev が判断する箇所**: 車線・速度・危険度・歩行者優先を Jev が判断し、ローカルルールが動作へ変換する。
  - **このプロジェクトの用途**: 同じシードのコースで比較でき、緊急ブレーキには別のローカル処理がある。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/vinilana/live-jev/) · ライセンス: 記載なし

- [**jevscape**](https://github.com/Skyvern-AI/jevscape) — rs-sdk の限定操作候補と Jev で RuneScape タスクを動かす RuneBench 拡張。
  - **Jev が判断する箇所**: 状態から目標動作、tick 内の介入、次の問い合わせ間隔を選ぶ。
  - **このプロジェクトの用途**: 動作分布画面、実行記録、burst/tick 制御を提供する。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/skyvern-ai/jevscape/) · ライセンス: 記載なし

- [**OneVOneJev**](https://github.com/emrickgarrett/OneVOneJev) — 構造化された戦況を読み、Jev が移動、照準、射撃を選ぶブラウザー版 1v1 FPS。
  - **Jev が判断する箇所**: 各 tick で移動、視点、照準、射撃、ジャンプを判断し、API 障害時はヒューリスティックに切り替える。
  - **このプロジェクトの用途**: 対戦ゲームの中で構造化された判断を観察できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/one-v-one-jev/) · ライセンス: 記載なし

- [**JevBird**](https://github.com/leftspace89/JevBird) — コードで候補軌道をシミュレートし、Jev が選ぶ Python 版 Flappy Bird。
  - **Jev が判断する箇所**: 新しいパイプごとに経路を選び、ゲームが予定された羽ばたきを実行する。
  - **このプロジェクトの用途**: 候補軌道・確率・選択結果を画面で確認できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/leftspace89/jevbird/) · ライセンス: MIT

- [**jev-little-airways**](https://github.com/lbotinelly/jev-little-airways) — Jev が航路・譲り合い・緊急放送・着陸順を判断する島の空港シミュレーター。
  - **Jev が判断する箇所**: 機体と周辺交通の状態を質問にし、回答を模擬動作に反映する。
  - **このプロジェクトの用途**: 要求・回答・状態を確認でき、別途 mock 経路も備える。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/lbotinelly/jev-little-airways/) · ライセンス: MIT

- [**jevarena**](https://github.com/raihankhan-rk/jevarena) — 二つのブラウザー画面で Jev Agent が Snake をプレイし、一手ごとの選択を表示する。
  - **Jev が判断する箇所**: 構造化した盤面状態から、許可された方向ボタンを選ぶ。
  - **このプロジェクトの用途**: 候補・操作確率・ゲーム進行を並べて確認できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/raihankhan-rk/jevarena/) · ライセンス: MIT

- [**doom-jev**](https://github.com/AmoghCreator/doom-jev) — 構造化したゲーム状態から Jev が移動・標的・射撃を選ぶ ViZDoom Agent。
  - **Jev が判断する箇所**: Jev が戦術目標と動作を選び、細かな照準はローカルの幾何処理が担う。
  - **このプロジェクトの用途**: ゲームの更新とネットワーク推論を分離する。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/amoghcreator/doom-jev/) · ライセンス: 記載なし

- [**jev-askable-arm**](https://github.com/TarunTomar122/jev-askable-arm) — ManiSkill の模擬ロボットアームで、英語の目標に合わせて既定動作を Jev がつなぐ。
  - **Jev が判断する箇所**: 物体座標と把持状態から、約30の動作と対象を選ぶ。
  - **このプロジェクトの用途**: 動作選択と Python の低層制御を分ける。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/taruntomar122/jev-askable-arm/) · ライセンス: MIT

- [**jev-broadcast-lab**](https://github.com/4anti/jev-broadcast-lab) — チェスを中心に、分類や照合も試せる Jev 実験ワークベンチ。
  - **Jev が判断する箇所**: ローカルで生成した合法手から選ぶ。Stockfish の評価は操作者に表示する。
  - **このプロジェクトの用途**: モデルの選択と別のチェス評価を並べて比較できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/4anti/jev-broadcast-lab/) · ライセンス: 記載なし

- [**jev-doom-agent**](https://github.com/lukaske/jev-doom-agent) — 同じ初期状態から Jev が操作するプレイヤーを比較する、ブラウザー版 Doom 実験。
  - **Jev が判断する箇所**: 体力・弾薬・対象の構造化情報から操作を選び、ローカル制御器が実行する。
  - **このプロジェクトの用途**: モデル判断と、明示されたオフライン・代替方針を見分けられる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/lukaske/jev-doom-agent/) · ライセンス: 記載なし

- [**jev-experiments**](https://github.com/mittal-parth/jev-experiments) — Jev が Chrome の恐竜ゲームやローカル FPS を判断し、Python が操作する。
  - **Jev が判断する箇所**: 状態からジャンプ、しゃがみ、移動、照準、射撃を選び、ローカルルールを適用する。
  - **このプロジェクトの用途**: 検査画面で状態、回答、実行された操作を比較できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/mittal-parth/jev-experiments/) · ライセンス: 記載なし

- [**jev-play-ping-pong**](https://github.com/Icohen007/jev-play-ping-pong) — ブラウザの卓球ゲームで、Jev がサーブ方向、返球角度、強さを選ぶ。
  - **Jev が判断する箇所**: 構造化された状態を読み、Choice で打球を選んでからコードが入力を実行する。
  - **このプロジェクトの用途**: 動作、遅延、試合記録を残し、実行を確認できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/icohen007/jev-play-ping-pong/) · ライセンス: MIT

- [**mk-jev-fly-brain**](https://github.com/lavallee/mk-jev-fly-brain) — mk.js 格闘ゲームで、ハエの接続図によるスパイク仮想回路、Jev、規則方式を比較する。
  - **Jev が判断する箇所**: Jev が試合状態を読み、他の制御器と同じ7動作から選ぶ。
  - **このプロジェクトの用途**: 対照条件、試合記録、実験説明で各部分の寄与を比較する。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/lavallee/mk-jev-fly-brain/) · ライセンス: MIT


## MCP・連携

- [**vellum-assistant**](https://github.com/vellum-ai/vellum-assistant) — Vellum Assistant の任意の Jev provider が、会話状態と明示的な質問を TypeSafe に送る。
  - **Jev が判断する箇所**: 状態と質問を System One に送り、構造化された回答を Assistant に返す。
  - **このプロジェクトの用途**: 既存のアシスタントに選択、確率、採点を追加できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/vellum-ai/vellum-assistant/) · ライセンス: MIT

- [**typesafe-mcp**](https://github.com/itsmostafa/typesafe-mcp) — Claude Code、Claude Desktop、Codex、Pi から Jev に質問する MCP サーバー。
  - **Jev が判断する箇所**: 状態と Choice・Score・Noul の質問を送り、構造化された回答と確率を返す。
  - **このプロジェクトの用途**: 呼び出し側で回答を確認し、処理を分岐できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/typesafe-mcp/) · ライセンス: MIT

- [**jev-mcp**](https://github.com/jkudish/jev-mcp) — 引用確認、内容検査、検索、並べ替え、分類、比較、抽出など、8つの MCP 判断ツールを提供する。
  - **Jev が判断する箇所**: 型付きの質問で、根拠の支持度、内容のリスク、候補の関連度を評価する。
  - **このプロジェクトの用途**: 判断と確率を返し、しきい値や制御の適用は呼び出し側に任せる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/jev-mcp/) · ライセンス: MIT

- [**synkora-ai**](https://github.com/getsynkora/synkora-ai) — Synkora は分類、採点、真偽判断向けの任意の TypeSafe ツールを備える。
  - **Jev が判断する箇所**: 処理の状態と名前付き質問を Jev に送り、回答を Agent に返す。
  - **このプロジェクトの用途**: 既存のプラットフォーム処理から判断機能を使える。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/getsynkora/synkora-ai/) · ライセンス: MIT

- [**plasmallm**](https://github.com/joshuaeroman/plasmallm) — KDE Plasma のアシスタント部品で構造化判断を表示する Jev Decisions アダプター。
  - **Jev が判断する箇所**: 現在のメッセージを質問に変換し、TypeSafe または互換 Decisions 端点から回答を得る。
  - **このプロジェクトの用途**: 既存のデスクトップ画面で判断モデルを試せる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/joshuaeroman/plasmallm/) · ライセンス: GPL-2.0

- [**Jevbridge**](https://github.com/gamesonrblx/Jevbridge) — ACP、MCP、CLI を通じ、Jev や他のモデルを共通の判断インターフェースにつなぐ。
  - **Jev が判断する箇所**: 状態と限定された質問を選択したバックエンドに送り、オフライン規則も利用できる。
  - **このプロジェクトの用途**: Agent が共通の入口で判断バックエンドを比較・交換できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/gamesonrblx/jevbridge/) · ライセンス: MIT

- [**pi-jev**](https://github.com/TheoOliveira/pi-jev) — Pi Agent に必要なツールとスキルを探し、構造化評価や任意の履歴フィルターを提供する。
  - **Jev が判断する箇所**: 候補ツール、スキル、履歴とタスクの関連性を判定し、読み込みや保持に使う。
  - **このプロジェクトの用途**: 必要な能力を必要なときにワークフローへ加えられる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/theooliveira/pi-jev/) · ライセンス: MIT

- [**pi-typesafe**](https://github.com/DevMortimer/pi-typesafe) — 判断ツール・ターミナル実験コマンド・他拡張向け API を提供する Pi の Jev 拡張。
  - **Jev が判断する箇所**: 共通クライアントが質問を一括送信し、応答を検証して使用量と可用性を記録する。
  - **このプロジェクトの用途**: キーとクライアントを共通管理し、他拡張でも判断 API を再利用できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/devmortimer/pi-typesafe/) · ライセンス: MIT

- [**jev-mcp**](https://github.com/blakestone-x/jev-mcp) — Jev の分類・採点・二択判断・候補照合を MCP ツールとして公開する。
  - **Jev が判断する箇所**: MCP サーバーが TypeSafe SDK を呼び、選択肢・確率・スコアを返す。
  - **このプロジェクトの用途**: MCP 対応クライアントで共通の判断インターフェースを使える。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/blakestone-x/jev-mcp/) · ライセンス: MIT

- [**jevwire**](https://github.com/Brainwires/jevwire) — Agent 向けの Jev MCP ツール、組込みライブラリ、Claude Code hooks を提供する。
  - **Jev が判断する箇所**: 順位付け・確認・動作点検・次の一手を Jev に問い、コードが方針を適用する。
  - **このプロジェクトの用途**: MCP とホストコードで判断層を共用でき、hooks の動作は設定に依存する。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/brainwires/jevwire/) · ライセンス: MIT

- [**jev-mcp**](https://github.com/rashedInt32/jev-mcp) — 分類、採点、真偽判断、一括質問を提供する Jev MCP サーバーと Claude Code プラグイン。
  - **Jev が判断する箇所**: Choice、Score、Noul で TypeSafe を呼び、構造化された回答を返す。
  - **このプロジェクトの用途**: MCP クライアントから型付き判断を使える。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/rashedint32/jev-mcp/) · ライセンス: MIT

- [**jev-workbench**](https://github.com/molis-ai/jev-workbench) — ローカル画面で Jev 判断関数を定義、試行、公開し、バックエンドや Agent から固定版を呼ぶ。
  - **Jev が判断する箇所**: 分類や根拠の確認を Noul、Choice、Score として定義し TypeSafe に送る。
  - **このプロジェクトの用途**: 複数の呼び出し元で同じ版の判断関数を再利用できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/molis-ai/jev-workbench/) · ライセンス: MIT

- [**tenbin**](https://github.com/simota/tenbin) — 質問 lint・バッチ評価・校正で Jev 判断を設計する文書、MCP server、Skill。
  - **Jev が判断する箇所**: サンプルを Choice・Score・Noul で評価し、結果からローカル閾値を設計する。
  - **このプロジェクトの用途**: 質問設計・測定・実行時規則を対応付けられる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/simota/tenbin/) · ライセンス: MIT

- [**jev\_ampcode**](https://github.com/thesammykins/jev_ampcode) — 与えられた選択肢、根拠、優先事項を比較する Amp プラグイン。
  - **Jev が判断する箇所**: Jev Choice で限定された候補を比較し、確認用の確率を返す。
  - **このプロジェクトの用途**: 候補と判断材料を明示できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/thesammykins/jev_ampcode/) · ライセンス: 記載なし

- [**jev-classifier**](https://github.com/felpsdev/jev-classifier) — コーディング Agent 向けのローカル Jev ツールルーター。MCP の提案インターフェースもある。
  - **Jev が判断する箇所**: 候補ツールから Jev が次を選び、アダプターにより記録または実際の選択へ反映する。
  - **このプロジェクトの用途**: 判断ログを保持。一部クライアントは観察のみ、または採用を自身で決める。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/felpsdev/jev-classifier/) · ライセンス: MIT

- [**jev-mcp**](https://github.com/BYK/jev-mcp) — 単発質問、一括処理、質問やしきい値の比較を行う評価重視の Jev MCP サーバー。
  - **Jev が判断する箇所**: 型付き質問を実行し、正解付き標本で正確さや較正を測る。
  - **このプロジェクトの用途**: 標本結果を使って質問設計としきい値を確認できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/byk/jev-mcp/) · ライセンス: MIT

- [**n8n-nodes-typesafe-jev**](https://github.com/n3ndor/n8n-nodes-typesafe-jev) — TypeSafe Jev に型付き質問を送る n8n のコミュニティノード。
  - **Jev が判断する箇所**: 入力 item から状態と質問を作り、Jev の回答を追記または単独で出力する。
  - **このプロジェクトの用途**: フォーム・JSON で質問を設定でき、Agent ツールとしても利用できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/n3ndor/n8n-nodes-typesafe-jev/) · ライセンス: MIT

- [**openclaw-typesafe-ai**](https://github.com/Olli0103/openclaw-typesafe-ai) — 明示的に呼ぶ typesafe\_decide ツール一つを登録する独立した OpenClaw プラグイン。
  - **Jev が判断する箇所**: 呼び出し側の状態と質問を TypeSafe に送り、型付き Jev 判断を返す。
  - **このプロジェクトの用途**: チャット provider・自動 hooks・常駐処理はなく、スクレイピングや CAPTCHA 用ではない。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/olli0103/openclaw-typesafe-ai/) · ライセンス: MIT


## モデルルーティング

- [**litellm**](https://github.com/BerriAI/litellm) — LiteLLM の複雑度ルーターで、Jev にリクエストの分類を任せられる。
  - **Jev が判断する箇所**: 設定済みの複雑度へ分類し、その結果からバックエンドを振り分ける。
  - **このプロジェクトの用途**: 振り分けの基になる複雑度判断を確認できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/berriai/litellm/) · ライセンス: MIT

- [**oh-my-pi**](https://github.com/can1357/oh-my-pi) — Oh My Pi に含まれる任意の TypeSafe 判断プロバイダーを、Agent の限定的な判断で使える。
  - **Jev が判断する箇所**: Agent の状態と型付き質問を Jev に送り、回答を解析する。
  - **このプロジェクトの用途**: 既存の Agent 処理に交換可能な判断プロバイダーを加えられる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/can1357/oh-my-pi/) · ライセンス: MIT

- [**jev-model-router**](https://github.com/davila7/claude-code-templates) — Jev で Claude Code の子 Agent のモデル・思考レベルを提案するコミュニティ製 mod。
  - **Jev が判断する箇所**: タスク段階・推論要件・本番リスクを評価し、ローカル方針で設定へ変換する。
  - **このプロジェクトの用途**: 振り分け規則と各選択の理由を確認・設定できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/davila7/claude-code-templates/) · ライセンス: MIT

- [**openchamber**](https://github.com/openchamber/openchamber) — Jev でメッセージを分類し、設定済みモデルと思考レベルを選ぶ OpenChamber の任意ルーター。
  - **Jev が判断する箇所**: Jev がタスク分類を選び、ローカルの対応表でモデル設定を決める。
  - **このプロジェクトの用途**: 分類とモデルの割り当てを明示できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/openchamber/openchamber/) · ライセンス: MIT

- [**firstmate**](https://github.com/kunchenguid/firstmate) — Firstmate は任意で Jev を使い、タスク概要と派工ルールを照合して Agent 設定を選ぶ。
  - **Jev が判断する箇所**: 概要と候補ルールを送り、確信度とローカル条件から実行設定を決める。
  - **このプロジェクトの用途**: 意味的な照合と最終的な派工ポリシーを分ける。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/kunchenguid/firstmate/) · ライセンス: MIT

- [**atomic**](https://github.com/bastani-inc/atomic) — Atomic のコーディング Agent にある任意の Jev バックエンドで、振り分けなどの構造化選択を行う。
  - **Jev が判断する箇所**: 事前定義の質問を送り回答を呼び出し元で使い、コード生成は通常のモデルが担当する。
  - **このプロジェクトの用途**: 構造化判断とテキスト生成のインターフェースを分ける。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/bastani-inc/atomic/) · ライセンス: Custom license

- [**vexjoy-agent**](https://github.com/notque/vexjoy-agent) — VexJoy の依頼を専門 Agent・skill・workflow に対応付ける任意の Jev 経路。
  - **Jev が判断する箇所**: 決定的な振り分け規則の後で、残りの候補と必要な構成要素を判定する。
  - **このプロジェクトの用途**: 固定規則とモデルによる候補選択を別の段階に分ける。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/notque/vexjoy-agent/) · ライセンス: MIT

- [**WrongStack**](https://github.com/WrongStack/WrongStack) — WrongStack の専門 Agent を選ぶための、任意の Jev 分類器。
  - **Jev が判断する箇所**: 適格な専門 Agent とタスクを照合し、ローカル配分規則が結果を使う。
  - **このプロジェクトの用途**: 既存コーディング Agent に設定可能な専門家選択を追加できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/wrongstack/wrongstack/) · ライセンス: MIT

- [**skillbox**](https://github.com/kitze/skillbox) — 任意の Jev 推薦機能を持つ、自前ホスト型の版管理付き Agent skill ライブラリー。
  - **Jev が判断する箇所**: クライアントが利用できる skill の中で、タスクとの関連性を評価する。
  - **このプロジェクトの用途**: アクセス範囲を保ったまま、関連 skill を探せる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/kitze/skillbox/) · ライセンス: MIT

- [**jev-codex-router**](https://github.com/0xNatoshi/jev-codex-router) — Codex の各ターンを Jev が分類し、ローカルルールでモデル、推論の深さ、速度を選ぶ。
  - **Jev が判断する箇所**: タスクの難易度と推論の必要量を分類し、ローカルポリシーが設定を決める。
  - **このプロジェクトの用途**: 振り分けルールと判断ログを手元で確認し調整できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/jev-codex-router/) · ライセンス: MIT

- [**skillranker**](https://github.com/Dicklesworthstone/skillranker) — ライセンスには標準 MIT 以外の主体別の制限があります。利用条件を確認中で、実装の存在は制限のないオープンソース許諾を意味しません。
  - **Jev が判断する箇所**: この項目は確認待ちであり、検証済みの Jev 連携としては推奨していません。
  - **このプロジェクトの用途**: 追跡用に記録を保持しています。先に確認待ちの理由と出典をご確認ください。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/dicklesworthstone/skillranker/) · ライセンス: 記載なし

- [**hono-jev-router**](https://github.com/yusukebe/hono-jev-router) — 自然言語のルート説明を使う Hono の実験的 HTTP セマンティックルーター。
  - **Jev が判断する箇所**: Jev の一致確率から、閾値を超えた最初のルートをコードが選ぶ。
  - **このプロジェクトの用途**: 意味による振り分けの実験用で、認証・認可の境界としての利用は禁止されている。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/yusukebe/hono-jev-router/) · ライセンス: MIT

- [**JevRouter**](https://github.com/BillionsBobby/JevRouter) — モデル、Subagent、Skill、MCP、CLI を共通の候補として振り分ける。
  - **Jev が判断する箇所**: Jev が Choice で選び、ルーターが可用性、権限、リスク、確認方針を別途検査する。
  - **このプロジェクトの用途**: モデルの選択と実行方針を分けて記録する。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/billionsbobby/jevrouter/) · ライセンス: MIT

- [**loki**](https://github.com/wundercorp/loki) — Loki の任意機能として Jev の判断ツールと、同一 gateway 内の会話モデル選択を追加する。
  - **Jev が判断する箇所**: 最初のタスクに必要な能力を評価し、選択したモデルを会話中は維持する。
  - **このプロジェクトの用途**: モデル選択を明示し、会話ごとの経路を保てる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/wundercorp/loki/) · ライセンス: MIT

- [**typesafe-skill-router**](https://github.com/DECRUX9812/typesafe-skill-router) — モデル呼び出し前に関連 skill を一つ提案する、任意の Hermes Agent プラグイン。
  - **Jev が判断する箇所**: 依頼と skill 一覧を比較し、適切な候補がある場合だけ提案を挿入する。
  - **このプロジェクトの用途**: Agent が無視する余地を残した、対象を絞る skill ヒントになる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/decrux9812/typesafe-skill-router/) · ライセンス: MIT

- [**todo-jev**](https://github.com/maker-KK/todo-jev) — skill の条件と環境確認から、ルール・skill・大規模モデルを勧めるタスクルーティング実験。
  - **Jev が判断する箇所**: Jev が要求を分類して skill を照合し、利用不可時はヒューリスティックへ戻る。
  - **このプロジェクトの用途**: 分類と推薦は実装済みだが、実行ハンドラーは例示応答で実処理の接続が必要。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/maker-kk/todo-jev/) · ライセンス: MIT

- [**jev-research**](https://github.com/sherajdev/jev-research) — Jev と Herdr の連携ガイドと、タスクを各 Agent に振り分ける試作ルーター。
  - **Jev が判断する箇所**: タスクとリポジトリ状態から実行先、リスク、派遣の準備状況を判断する。
  - **このプロジェクトの用途**: 複数 Agent への仕事の割り当てを学べる編集可能な例。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/sherajdev/jev-research/) · ライセンス: MIT

- [**jev-demo**](https://github.com/minghanminghan/jev-demo) — Jev にルート判断をまとめて問い、分類結果に沿って処理するカスタマーサービスのデモ。
  - **Jev が判断する箇所**: 多段分類・人への引き継ぎ希望・不満度を評価し、低確信時にエスカレーションする。
  - **このプロジェクトの用途**: 分類と人への引き継ぎをまとめ、返信生成はアプリが担当する。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/minghanminghan/jev-demo/) · ライセンス: 記載なし

- [**jev-router-playground**](https://github.com/hugo-alves/jev-router-playground) — Jev が候補モデルを選び、利用者が各回答を比較するルーティング実験画面。
  - **Jev が判断する箇所**: タスクと候補説明からモデルを選び、確率と実行を記録する。
  - **このプロジェクトの用途**: 結果を出力し、自分の回答評価と選択を比較できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/hugo-alves/jev-router-playground/) · ライセンス: MIT


## SDK・判断フレームワーク

- [**composio**](https://github.com/ComposioHQ/composio) — Composio の任意の TypeSafe provider が、ツールや限られた引数候補を Jev に判断させる。
  - **Jev が判断する箇所**: ツールや操作条件を構造化質問にし、回答をローカルの呼び出し処理に渡す。
  - **このプロジェクトの用途**: 既存のツールインターフェースに構造化判断を加えられる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/composiohq/composio/) · ライセンス: MIT

- [**ai**](https://github.com/vercel/ai) — AI SDK の TypeSafe provider から、共通の evaluate インターフェースで Jev を呼び出す。
  - **Jev が判断する箇所**: 選択、採点、二択の質問を System One リクエストに変換し、型付きの結果を解析する。
  - **このプロジェクトの用途**: AI SDK アプリ内で共通の評価インターフェースを使える。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/vercel/ai/) · ライセンス: Apache-2.0

- [**eliza**](https://github.com/elizaOS/eliza) — Eliza のソースにある任意の TypeSafe HTTP アダプター。既定では Agent 実行系に未登録。
  - **Jev が判断する箇所**: 明示的な systemOne 呼び出しだけが状態と質問を送り、検証済みの型付き回答を返す。
  - **このプロジェクトの用途**: 再利用可能なサーバーモジュールであり、実運用での Jev 採用を示すものではない。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/elizaos/eliza/) · ライセンス: MIT

- [**langchainjs**](https://github.com/langchain-ai/langchainjs) — 状態と定義済み質問を Jev に送る LangChain.js の任意の TypeSafeClassifier 統合。
  - **Jev が判断する箇所**: invoke から TypeSafe を呼び、choice・noul・score と確率を解析する。
  - **このプロジェクトの用途**: Jev をチャット生成器に見立てず、LangChain の処理に型付き判断を加える。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/langchain-ai/langchainjs/) · ライセンス: MIT

- [**rig-typesafeai**](https://github.com/0xPlaygrounds/rig) — Rust 型で Jev の質問と回答を構成する、Rig 内の実験的な TypeSafe crate。
  - **Jev が判断する箇所**: 状態と質問を Jev に送り、Choice、Score、Noul の回答を解析する。
  - **このプロジェクトの用途**: 質問と回答でフィールド構成を再利用し、対応する回答を検証する。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/0xplaygrounds/rig/) · ライセンス: MIT

- [**req\_llm**](https://github.com/agentjido/req_llm) — Elixir の ReqLLM evaluate インターフェースから Jev を呼ぶ TypeSafe provider。
  - **Jev が判断する箇所**: 状態と質問を送り、回答を正規化しつつ provider の生データも保持する。
  - **このプロジェクトの用途**: 判断評価をチャット生成から分離して扱える。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/agentjido/req_llm/) · ライセンス: Apache-2.0

- [**instructor-php**](https://github.com/cognesy/instructor-php) — Instructor PHP の Polyglot モジュールにある TypeSafe Decision ドライバー。
  - **Jev が判断する箇所**: 状態と型付き質問を Jev 要求へ変換し、応答を PHP の判断オブジェクトへ写像する。
  - **このプロジェクトの用途**: 共通の Decision インターフェースから PHP アプリで Jev を利用できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/cognesy/instructor-php/) · ライセンス: MIT

- [**openai-scala-client**](https://github.com/cequence-io/openai-scala-client) — 複数の AI provider に対応する Scala クライアント内の TypeSafe 専用モジュール。
  - **Jev が判断する箇所**: 共有状態と型付き質問を Jev に送り、構造化回答を解析する。
  - **このプロジェクトの用途**: Scala アプリで通信とエラー処理の仕組みを再利用できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/cequence-io/openai-scala-client/) · ライセンス: MIT

- [**pi-fabric**](https://github.com/monotykamary/pi-fabric) — Pi のプログラム可能な runtime に、観測・Jev 判断・制限付き実行のループを追加する。
  - **Jev が判断する箇所**: 記述した質問の回答を、予算制限付きのローカル実行ロジックへ渡す。
  - **このプロジェクトの用途**: 観測・判断・実行を再利用可能なプログラムとして定義できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/monotykamary/pi-fabric/) · ライセンス: MIT

- [**runline**](https://github.com/Michaelliv/runline) — Runline の Agent JavaScript から呼べるアクションとして Jev 判断を公開する TypeSafe プラグイン。
  - **Jev が判断する箇所**: evaluate・choice・score・noul が質問を送り、回答と使用量を保持する。
  - **このプロジェクトの用途**: 他のプラグイン処理と組み合わせられるが、全 Shell コマンドの安全性を自動点検するものではない。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/michaelliv/runline/) · ライセンス: 記載なし

- [**typesafe-sdk-js**](https://github.com/typesafe-ai/typesafe-sdk-js) — TypeSafe が公開する JavaScript / TypeScript SDK。Jev の要求と回答に型を提供する。
  - **Jev が判断する箇所**: systemOne が状態と名前付き質問を送り、質問から回答型を推論する。
  - **このプロジェクトの用途**: ESM・CommonJS・TypeScript 型宣言を含み、アプリへ組み込める。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/typesafe-ai/typesafe-sdk-js/) · ライセンス: MIT

- [**ai**](https://github.com/hackclub/ai) — Hack Club AI プロキシの認証・制限・使用量記録を使う Jev 転送エンドポイント。
  - **Jev が判断する箇所**: 許可された構造化要求を TypeSafe へ転送し、回答と使用量を扱う。
  - **このプロジェクトの用途**: 既存プロキシに判断 API を加えるもので、MCP サーバーではない。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/hackclub/ai/) · ライセンス: 記載なし

- [**effect-agent**](https://github.com/danieljvdm/effect-agent) — 型付き質問集合と任意のモデル選択を扱う Effect Agent の TypeSafe provider。
  - **Jev が判断する箇所**: Jev の確率・選択・採点を、状態遷移やモデル選択に利用する。
  - **このプロジェクトの用途**: Effect の依存・エラー処理に統合し、再試行と期限はアプリが設定する。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/danieljvdm/effect-agent/) · ライセンス: MIT

- [**typesafe-sdk-python**](https://github.com/typesafe-ai/typesafe-sdk-python) — TypeSafe 公式の Python SDK。Jev System One の同期・非同期クライアントと、質問・回答の型を提供する。
  - **Jev が判断する箇所**: system\_one が文脈と選択・採点・はい／いいえの質問を API に送り、質問名ごとに回答を読み取る。
  - **このプロジェクトの用途**: Python でリクエスト処理、型付き回答、接続管理を共用でき、with と async with に対応する。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/typesafe-ai/typesafe-sdk-python/) · ライセンス: MIT

- [**jev-visual**](https://github.com/hr98w/jev-visual) — Jev に着想を得た Qwen/MLX のローカル実験で、TypeSafe Jev モデルの連携ではありません。関連研究として保持し、実際の連携とは区別します。
  - **Jev が判断する箇所**: この項目は確認待ちであり、検証済みの Jev 連携としては推奨していません。
  - **このプロジェクトの用途**: 追跡用に記録を保持しています。先に確認待ちの理由と出典をご確認ください。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/hr98w/jev-visual/) · ライセンス: 記載なし

- [**advocaat**](https://github.com/pithings/advocaat) — 同じデータに複数の型付き質問を送る、小さな TypeScript 製 Jev クライアント。
  - **Jev が判断する箇所**: Yes/No・Choice・Score をまとめ、回答を型付き値へ変換する。
  - **このプロジェクトの用途**: 確率・選択・評価に共通インターフェースを使える。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/pithings/advocaat/) · ライセンス: MIT

- [**openjev**](https://github.com/razorback16/openjev) — Jev API と互換性を持ち、公開モデル DiffusionGemma で動く独立した System One サーバー。
  - **Jev が判断する箇所**: Jev 形式の状態と質問を受け取り、ローカルモデルで確率を出す。
  - **このプロジェクトの用途**: 既存の TypeSafe SDK から自己ホストの互換サービスを試せる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/razorback16/openjev/) · ライセンス: Apache-2.0

- [**ruby\_decision\_model**](https://github.com/obie/ruby_decision_model) — TypeSafe のネイティブ API または OpenRouter 経由で Jev を呼ぶ Ruby クライアント。
  - **Jev が判断する箇所**: 共通 Client から状態と質問を送り、選択・確率・スコア・使用量を解析する。
  - **このプロジェクトの用途**: Ruby 標準ライブラリだけで動き、同じインターフェースで provider を選べる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/obie/ruby_decision_model/) · ライセンス: MIT

- [**jev**](https://github.com/dannote/jev) — Jev を Elixir/OTP の非同期プロセスとして組み込み、GenServer のパターンマッチで応答を処理する。
  - **Jev が判断する箇所**: 状態と型付き質問を TypeSafe に送り、回答をメッセージで届ける。
  - **このプロジェクトの用途**: 既存のメッセージ処理や監視の仕組みに判断を組み込める。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/dannote/jev/) · ライセンス: MIT

- [**typesafe-ai**](https://github.com/Twister915/typesafe-ai) — 非同期 reqwest または同期 ureq と、観測可能な再試行を備えた Rust TypeSafe クライアント。
  - **Jev が判断する箇所**: 共有状態に複数の Jev 質問を送り、回答・確率・用量を解析する。
  - **このプロジェクトの用途**: 同期・非同期を選択し、エラー情報を確認できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/twister915/typesafe-ai/) · ライセンス: Apache-2.0

- [**typesafe-sdk-go**](https://github.com/Tangerg/typesafe-sdk-go) — Go の型で質問を定義し、Jev の選択、点数、確率を読む TypeSafe SDK。
  - **Jev が判断する箇所**: リクエストを検証して System One を呼び、型付き回答に変換する。
  - **このプロジェクトの用途**: 認証、リクエスト、エラー処理を Go クライアントで再利用できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/tangerg/typesafe-sdk-go/) · ライセンス: MIT

- [**zod-jev**](https://github.com/jomatsu/zod-jev) — 説明との一致や個人情報の有無など、意味に基づくルールを Zod の検証に加える。
  - **Jev が判断する箇所**: 同じ解析の条件を Jev Noul にまとめ、確率を検証結果に変換する。
  - **このプロジェクトの用途**: Zod のエラー形式で、問題のあるフィールドを示せる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/jomatsu/zod-jev/) · ライセンス: MIT

- [**jev-dsl**](https://github.com/inanna-malick/jev-dsl) — ラベル付き Jev 質問を記述し、要求生成と回答解析を行う初期 Haskell DSL。
  - **Jev が判断する箇所**: 型推論とラベル付き処理器で、Choice の答えを定義済み分岐へ接続する。
  - **このプロジェクトの用途**: 質問・戻り値の型・分岐処理を一つの定義で確認できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/inanna-malick/jev-dsl/) · ライセンス: MIT

- [**swift-typesafe**](https://github.com/ainame/swift-typesafe) — 型付き質問・動的質問・応答解析に対応するコミュニティ Swift TypeSafe クライアント。
  - **Jev が判断する箇所**: systemOne で Jev に問い、Swift 型または動的マップで回答を扱う。
  - **このプロジェクトの用途**: 文書記載の環境に対応し、必要な Swift・OS 版は対象バージョンで確認する。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/ainame/swift-typesafe/) · ライセンス: MIT

- [**super-jev**](https://github.com/Kevthetech143/super-jev) — 証拠、Jev の判断、許可された操作、結果の記録をつなぐ TypeScript の実行フレームワーク。
  - **Jev が判断する箇所**: 型付き質問と回答を検証し、領域ルールが権限や引数を確認して登録ツールを選ぶ。
  - **このプロジェクトの用途**: 判断、ツール呼び出し、結果の履歴を手元に残す。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/kevthetech143/super-jev/) · ライセンス: MIT

- [**SpecPi**](https://github.com/TannerMidd/SpecPi) — 能力提案とワークフロー点検用の任意の Jev 顧問を含む Pi の設定・拡張セット。
  - **Jev が判断する箇所**: 候補機能・出力・状態を Jev が評価し、機能別設定で提案を適用・記録する。
  - **このプロジェクトの用途**: 顧問の失敗時は元の処理へ戻り、性能や費用の改善を保証しない。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/tannermidd/specpi/) · ライセンス: MIT

- [**typesafe-sdk**](https://github.com/joshmn/typesafe-sdk) — 既定で jev-latest を使う TypeSafe System One のコミュニティ Ruby クライアント。
  - **Jev が判断する箇所**: Choice・Score・Noul で質問を作り、解析した回答を型別に取得する。
  - **このプロジェクトの用途**: Ruby から選択・スコア・確率を直接読める。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/joshmn/typesafe-sdk/) · ライセンス: MIT

- [**daf-jev**](https://github.com/docxology/daf-jev) — Jev の呼び出し・バッチ評価・校正・MCP 接続をまとめた Python ツールキット。
  - **Jev が判断する箇所**: Noul・Choice・Score の質問を作り、返された確率をローカル関数で組み合わせる。
  - **このプロジェクトの用途**: 呼び出し・失敗記録・評価の仕組みを実験間で再利用できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/docxology/daf-jev/) · ライセンス: MIT

- [**jevex**](https://github.com/jvsteiner/jevex) — Jev がツール循環を指揮し、チャットモデルが引数・文章、MCP が実行を担う Agent 実験。
  - **Jev が判断する箇所**: 次の動作と具体的な呼び出しを Jev が判断し、結果を次の状態に戻す。
  - **このプロジェクトの用途**: 判断・生成・実行を分離し、作者による比較実験を含む。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/jvsteiner/jevex/) · ライセンス: MIT

- [**typesafe-ai-rs**](https://github.com/gilljon/typesafe-ai-rs) — 非同期・同期クライアント、再試行、応答メタデータを備える独立開発の Rust SDK。
  - **Jev が判断する箇所**: 状態と質問を Jev に送り、Choice、Score、Noul の回答を解析する。
  - **このプロジェクトの用途**: リクエストと応答解析をまとめ、アプリに型付き判断を組み込める。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/gilljon/typesafe-ai-rs/) · ライセンス: MIT

- [**typesafe-sdk-java**](https://github.com/Premo-Cloud/typesafe-sdk-java) — Jev の設定に Spring Boot Starter も使える、コミュニティ製 Java TypeSafe クライアント。
  - **Jev が判断する箇所**: Java の状態と Noul、Choice、Score を送信し、型付きの結果を解析する。
  - **このプロジェクトの用途**: Java と Spring Boot でリクエスト、設定、エラー処理を共用できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/premo-cloud/typesafe-sdk-java/) · ライセンス: MIT

- [**jev-go**](https://github.com/Stumble/jev-go) — TypeSafe 直結と Vercel AI Gateway に対応するコミュニティ製 Go SDK と CLI。
  - **Jev が判断する箇所**: 状態と質問を Jev に送り、Choice、Score、Noul の回答を解析する。
  - **このプロジェクトの用途**: リクエストと応答解析をまとめ、アプリに型付き判断を組み込める。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/stumble/jev-go/) · ライセンス: MIT

- [**jev-go**](https://github.com/Gaurav-Gosain/jev-go) — 型付き質問・回答と一括処理補助を備える Go の TypeSafe System One クライアント。
  - **Jev が判断する箇所**: 状態と質問を Jev に送り、Choice、Score、Noul の回答を解析する。
  - **このプロジェクトの用途**: リクエストと応答解析をまとめ、アプリに型付き判断を組み込める。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/gaurav-gosain/jev-go/) · ライセンス: MIT

- [**jev-java**](https://github.com/Olti1947/jev-java) — リクエスト・レスポンスのフィールドが現行公式 SDK の契約と異なり、当サイトでは実行していません。確認待ちとして保持し、動作確認済み SDK とは表記しません。
  - **Jev が判断する箇所**: この項目は確認待ちであり、検証済みの Jev 連携としては推奨していません。
  - **このプロジェクトの用途**: 追跡用に記録を保持しています。先に確認待ちの理由と出典をご確認ください。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/olti1947/jev-java/) · ライセンス: 記載なし

- [**typesafe\_sdk**](https://github.com/nshkrdotcom/typesafe_sdk) — Jev の型付き質問と確率的回答を Elixir アプリに組み込む TypeSafe SDK。
  - **Jev が判断する箇所**: 状態と Noul、Choice、Score のリクエストを作り、System One の応答を解析する。
  - **このプロジェクトの用途**: Elixir のデータ構造とクライアントを再利用できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/nshkrdotcom/typesafe_sdk/) · ライセンス: MIT

- [**typesafe-go**](https://github.com/2389-research/typesafe-go) — Go 標準ライブラリーだけで Jev の質問送信と構造化回答を扱う TypeSafe クライアント。
  - **Jev が判断する箇所**: 状態と Noul・Choice・Score を要求へ変換し、回答を検証・解析する。
  - **このプロジェクトの用途**: Go アプリで通信・型対応・エラー処理を再利用できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/2389-research/typesafe-go/) · ライセンス: MIT

- [**typesafe-go**](https://github.com/cole-gillespie/typesafe-go) — 型付き回答、再試行、context キャンセルを備える非公式 Go SDK。
  - **Jev が判断する箇所**: 状態と質問を Jev に送り、Choice、Score、Noul の回答を解析する。
  - **このプロジェクトの用途**: リクエストと応答解析をまとめ、アプリに型付き判断を組み込める。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/cole-gillespie/typesafe-go/) · ライセンス: MIT

- [**typesafe-sdk-rust**](https://github.com/codeitlikemiley/typesafe-sdk-rust) — 非同期と任意の同期呼び出し、型付き質問・回答を備えた TypeSafe 用 Rust クライアント。
  - **Jev が判断する箇所**: Jev 要求を作り、認証・通信・回答解析を処理する。
  - **このプロジェクトの用途**: Rust アプリで API モデルと通信ロジックを再利用できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/codeitlikemiley/typesafe-sdk-rust/) · ライセンス: MIT

- [**jev-go**](https://github.com/guillemus/jev-go) — Jev 呼び出しとモデル一覧取得に対応する小さな非公式 Go SDK。
  - **Jev が判断する箇所**: 状態と質問を Jev に送り、Choice、Score、Noul の回答を解析する。
  - **このプロジェクトの用途**: リクエストと応答解析をまとめ、アプリに型付き判断を組み込める。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/guillemus/jev-go/) · ライセンス: 記載なし

- [**jev-starter**](https://github.com/hamakyo/jev-starter) — TypeSafe SDK に、しきい値、代替経路、人による確認、評価のパターンを加える TypeScript ツール集。
  - **Jev が判断する箇所**: Jev の判断を受け、アプリの規則が自動処理、fallback、人の確認を選ぶ。
  - **このプロジェクトの用途**: モデル呼び出し、実行方針、評価を分けて構成できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/hamakyo/jev-starter/) · ライセンス: MIT

- [**jevclient**](https://github.com/AboveColin/jevclient) — 複数の型付き質問を一度に送れる Jev の非同期 Python クライアント。
  - **Jev が判断する箇所**: aiohttp で TypeSafe を呼び、選択・スコア・確率をオブジェクトに変換する。
  - **このプロジェクトの用途**: 生成文の解析なしで既存の非同期アプリに組み込める。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/abovecolin/jevclient/) · ライセンス: MIT

- [**jevgo**](https://github.com/fgn/jevgo) — 標準ライブラリのみのコアと、任意の Langfuse 追跡を備える Go クライアント。
  - **Jev が判断する箇所**: 状態と質問を Jev に送り、Choice、Score、Noul の回答を解析する。
  - **このプロジェクトの用途**: リクエストと応答解析をまとめ、アプリに型付き判断を組み込める。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/fgn/jevgo/) · ライセンス: MIT

- [**qualm**](https://github.com/qddegtya/qualm) — 不確実な結果を明示的な unsure 分岐で扱う TypeScript の Jev ラッパー。
  - **Jev が判断する箇所**: 確率と選択肢の型を保持し、不確実なら呼び出し側の代替処理へ渡す。
  - **このプロジェクトの用途**: 型で不確実性への対応を求めるが、モデルの正しさを保証しない。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/qddegtya/qualm/) · ライセンス: MIT

- [**typesafe-go**](https://github.com/zhirschtritt/typesafe-go) — System One 呼び出しとモデル一覧に対応する、外部依存のない非公式 Go クライアント。
  - **Jev が判断する箇所**: 状態と質問を Jev に送り、Choice、Score、Noul の回答を解析する。
  - **このプロジェクトの用途**: リクエストと応答解析をまとめ、アプリに型付き判断を組み込める。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/zhirschtritt/typesafe-go/) · ライセンス: MIT

- [**typesafe-sdk-php**](https://github.com/Butochnikov/typesafe-sdk-php) — 同期呼び出しと Guzzle 非同期要求を備える PHP 8.2+ 向けコミュニティ TypeSafe SDK。
  - **Jev が判断する箇所**: 状態と質問を Jev に送り、Choice、Score、Noul の回答を解析する。
  - **このプロジェクトの用途**: リクエストと応答解析をまとめ、アプリに型付き判断を組み込める。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/butochnikov/typesafe-sdk-php/) · ライセンス: MIT

- [**goodall**](https://github.com/bensyverson/goodall) — Go Agent ライブラリー内で、対話モデルとは別に Jev をツールや振り分け判断に使う追加パッケージ。
  - **Jev が判断する箇所**: 専用クライアントで質問し、ツール・ターン振り分け・メール分類例に使う。
  - **このプロジェクトの用途**: 型付き判断と生成モデルの Agent ループを分けて接続する。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/bensyverson/goodall/) · ライセンス: MIT

- [**typesafe-rs**](https://github.com/AbdelStark/typesafe-rs) — 非同期要求、任意の同期インターフェース、ローカル mock テストに対応するコミュニティ Rust クライアント。
  - **Jev が判断する箇所**: 状態と名前付き質問を TypeSafe に送り、choice・score・noul を解析する。
  - **このプロジェクトの用途**: クライアント設定・再試行・エラー型を備え、非同期・同期 Rust アプリに組み込める。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/abdelstark/typesafe-rs/) · ライセンス: MIT

- [**typesafe-sdk-swift**](https://github.com/marandaneto/typesafe-sdk-swift) — Swift Package Manager、Swift 並行処理、URLSession を使う実験的 TypeSafe SDK。
  - **Jev が判断する箇所**: 状態と型付き質問を System One に送り、async/await で回答を受け取る。
  - **このプロジェクトの用途**: Swift アプリで Jev のリクエストと応答処理を再利用できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/marandaneto/typesafe-sdk-swift/) · ライセンス: MIT


## SDK・互換連携

- [**langchain**](https://github.com/langchain-ai/langchain) — Python LangChain のワークフローに追加する、任意の Jev 分類連携。
  - **Jev が判断する箇所**: 二値・分類・段階評価の質問を送り、型付き回答と確率を返す。
  - **このプロジェクトの用途**: 既存 LangChain パイプラインへ分類処理を追加できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/langchain-ai/langchain/) · ライセンス: MIT

- [**pydantic-ai**](https://github.com/pydantic/pydantic-ai) — Pydantic AI 向けの任意の TypeSafe provider と Jev モデル連携。
  - **Jev が判断する箇所**: 対応する構造化出力のフィールドを Jev の質問に変換し、回答を出力モデルへ戻す。
  - **このプロジェクトの用途**: 対応する分類出力で Pydantic AI の既存インターフェースを使える。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/pydantic/pydantic-ai/) · ライセンス: MIT

- [**ax**](https://github.com/ax-llm/ax) — Ax は真偽値や有限分類のシグネチャと、Jev のネイティブ回答に対応する TypeSafe 接続を提供する。
  - **Jev が判断する箇所**: 対応シグネチャを質問へ変換するか、System One リクエストを直接送る。
  - **このプロジェクトの用途**: Ax の処理内でシグネチャと Jev の確率結果を利用できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/ax-llm/ax/) · ライセンス: Apache-2.0

- [**ruby\_llm-typesafe**](https://github.com/kieranklaassen/ruby_llm-typesafe) — 構造化出力を通じて Jev の三種の判断を扱う、RubyLLM 2 用 TypeSafe provider。
  - **Jev が判断する箇所**: Schema で Noul・Choice・Score を作り、回答を RubyLLM アプリへ返す。
  - **このプロジェクトの用途**: 既存 RubyLLM プログラムで構造化判断のインターフェースを使える。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/kieranklaassen/ruby_llm-typesafe/) · ライセンス: MIT

- [**laravel-typesafe-jev**](https://github.com/Butochnikov/laravel-typesafe-jev) — 設定・依存性注入・Facade・リクエスト記録用 fake を備えた Laravel 向け Jev アダプター。
  - **Jev が判断する箇所**: コミュニティ製 PHP SDK を包み、型付き判断・Promise・例外を扱う。
  - **このプロジェクトの用途**: Laravel のサービス・キュー・テストへ Jev を組み込める。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/butochnikov/laravel-typesafe-jev/) · ライセンス: MIT

- [**jev-resilience**](https://github.com/Vicente-MD/jev-resilience) — HTTP 200 の本文に隠れたエラーを検出する Spring WebFlux 向け連携。
  - **Jev が判断する箇所**: Jev がエラーやメンテナンス通知を判定し、閾値に従って例外を発生させる。
  - **このプロジェクトの用途**: HTTP ステータスに現れない失敗を既存のエラー処理へ渡せる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/vicente-md/jev-resilience/) · ライセンス: 記載なし


## 安全対策・コンテンツ審査

- [**agentgateway**](https://github.com/agentgateway/agentgateway) — Agentgateway に含まれる Jev ガードレール例。webhook で要求と応答を点検する。
  - **Jev が判断する箇所**: 脱獄・有害内容・秘密漏えいを採点し、閾値や評価エラーで要求を拒否する。
  - **このプロジェクトの用途**: ゲートウェイ統合の例で、すべての攻撃の防止を保証しない。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/agentgateway/agentgateway/) · ライセンス: Apache-2.0

- [**Agent**](https://github.com/AgentiLoop/Agent) — TypeSafeKit を備えたネイティブ macOS Agent 内の任意の Jev コマンドリスク顧問。
  - **Jev が判断する箇所**: ローカル Shell 検査後に破壊的リスクを評価し、設定閾値以上なら拒否する。
  - **このプロジェクトの用途**: API 障害では通常警告付きで通すため、完全なシステム保護ではない。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/agentiloop/agent/) · ライセンス: MIT

- [**jev-experiments**](https://github.com/dabit3/jev-experiments) — ステージ済み diff を意味的に確認する Commit Sentry など、Jev 開発ツールの実験集。
  - **Jev が判断する箇所**: 秘密情報の露出や破壊的変更を評価し、ローカル規則が警告・停止する。
  - **このプロジェクトの用途**: コミット前にリスクラベルと該当 diff を確認できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/dabit3/jev-experiments/) · ライセンス: 記載なし

- [**interlinked-cli**](https://github.com/QuentinCody/interlinked-cli) — Interlinked はローカルの Agent 検査に、任意の Jev 判断と根拠確認を加える。
  - **Jev が判断する箇所**: テスト名、文書の主張、対応する根拠などを評価する。
  - **このプロジェクトの用途**: モデルの助言を決定的な規則と分けて記録する。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/quentincody/interlinked-cli/) · ライセンス: MIT

- [**unclutter**](https://github.com/kitze/unclutter) — 広告、販促、購読ポップアップを Jev で判定し、再利用可能な非表示ルールを保存する拡張。
  - **Jev が判断する箇所**: 候補のページ要素を評価し、拡張がローカルの非表示ルールを適用する。
  - **このプロジェクトの用途**: ページ上の判断を再利用できるルールにする。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/kitze/unclutter/) · ライセンス: MIT

- [**captaincore**](https://github.com/CaptainCore/captaincore) — WordPress 運用ツール CaptainCore の Jev コマンドで、構造化質問とマルウェア検出結果の優先順位付けを行う。
  - **Jev が判断する箇所**: 検出ルール、該当部分、ファイルの文脈から、真陽性の可能性と対応候補を評価する。
  - **このプロジェクトの用途**: ルールベースの検出を人が確認する順番に整理する。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/captaincore/captaincore/) · ライセンス: MIT

- [**pi-jev**](https://github.com/y0usaf/pi-jev) — Pi のツール実行前にリスクを通知し、実行後に秘密情報や失敗の種類を点検する拡張。
  - **Jev が判断する箇所**: Jev のリスク評価を設定に従って警告や確認要求に使う。
  - **このプロジェクトの用途**: 既定は shadow モードで、API エラー時は通過する。独立した安全境界ではない。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/y0usaf/pi-jev/) · ライセンス: MIT

- [**pi-warden**](https://github.com/DevMortimer/pi-warden) — Pi Agent にプロジェクトルール、範囲外の操作、反復失敗、完了宣言のチェックを追加する。
  - **Jev が判断する箇所**: ルール違反、不可逆操作、タスクの逸脱を Jev が判断し Agent に返す。
  - **このプロジェクトの用途**: ルール上の問題と確認が必要な操作を現在の作業へ戻す。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/devmortimer/pi-warden/) · ライセンス: MIT

- [**Jev-Moderation-Bot**](https://github.com/brainstormity/Jev-Moderation-Bot) — Jev でスパムや詐欺リンクを確認し、ローカル規則で警告・タイムアウトする Discord Bot。
  - **Jev が判断する箇所**: メッセージや直近履歴のリスクを評価し、Bot が削除・警告などを行う。
  - **このプロジェクトの用途**: 判断・対応ログ・手動修正を同じ流れで扱える。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/brainstormity/jev-moderation-bot/) · ライセンス: 記載なし

- [**pi-jev-auto-mode**](https://github.com/jomatsu/pi-jev-auto-mode) — Pi のコマンドやファイル操作をルールで確認し、追加判断が必要な操作を Jev が評価する。
  - **Jev が判断する箇所**: 明示的な拒否と許可を先に処理し、bash、write、edit の権限とリスクを確認する。
  - **このプロジェクトの用途**: ルールと判断ログを見ながら操作の許可条件を調整できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/jomatsu/pi-jev-auto-mode/) · ライセンス: MIT

- [**jev-guard**](https://github.com/leepokai/jev-guard) — コーディング Agent のツール呼び出しで、操作リスク・意図・指示注入の兆候を確認する。
  - **Jev が判断する箇所**: Jev が会話文脈で入出力を評価し、ローカル規則が許可・警告・遮断する。
  - **このプロジェクトの用途**: ホストごとの制約に合わせて、ツール前後に確認を追加できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/leepokai/jev-guard/) · ライセンス: MIT

- [**hermes-jev-approvals**](https://github.com/anpicasso/hermes-jev-approvals) — Hermes の auxiliary.approval だけを置き換える実験的なコマンド承認プラグイン。
  - **Jev が判断する箇所**: Jev の APPROVE・DENY・ESCALATE をローカル閾値と方針で処理する。
  - **このプロジェクトの用途**: 承認への接続例。作者が概念実証と明記しており、本番の安全性を保証しない。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/anpicasso/hermes-jev-approvals/) · ライセンス: MIT

- [**safer-with-jev**](https://github.com/andrelandgraf/safer-with-jev) — Jev で本文を検査し、条件を満たせば HTTPS 宛先に転送するゲートウェイ。
  - **Jev が判断する箇所**: Jev が指示注入や不適切な内容を判定し、ローカル規則が転送・確認・遮断を決める。
  - **このプロジェクトの用途**: 既存 HTTP サービスの前に内容確認を追加できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/typesafe-on-neon/) · ライセンス: 記載なし

- [**jev-block-android-ad**](https://github.com/ufec/jev-block-android-ad) — ローカルの認証コード規則を先に適用し、Jev で広告ノイズを判定する Android フィルター。
  - **Jev が判断する箇所**: ローカル条件を通った文章を分類し、許可・抑制はコードで決める。
  - **このプロジェクトの用途**: 認証コード処理と不確かな場合の許可方針を確認できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/ufec/jev-block-android-ad/) · ライセンス: MIT

- [**jev-cvss**](https://github.com/Red5d/jev-cvss) — 脆弱性の説明から Jev が CVSS 指標を選び、Python で v3.0・v3.1・v4.0 の値を計算する。
  - **Jev が判断する箇所**: 攻撃条件と影響を離散指標へ対応付け、数値はローカルの式で求める。
  - **このプロジェクトの用途**: 総合点だけでなく、選んだ指標とベクトルを確認できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/red5d/jev-cvss/) · ライセンス: MIT

- [**jev-judgment**](https://github.com/HyunjunJeon/jev-judgment) — コーディング Agent に権限、操作リスク、失敗原因の判断を追加する。
  - **Jev が判断する箇所**: 会話と実行結果から、ユーザー確認の必要性、権限範囲、再試行の可否を評価する。
  - **このプロジェクトの用途**: 立ち止まって確認すべき箇所を明示できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/hyunjunjeon/jev-judgment/) · ライセンス: MIT

- [**oc-plugins**](https://github.com/OpeOginni/oc-plugins) — OpenCode プラグイン集の oc-auto-perms が、自然言語ルールに沿ってツール操作の意図を Jev で確認する。
  - **Jev が判断する箇所**: 操作案と権限ルールを送り、ローカルロジックが許可、拒否、確認を選ぶ。
  - **このプロジェクトの用途**: 権限ルールと各操作の判断を対応付ける。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/OpeOginni/oc-plugins/) · ライセンス: 記載なし

- [**jev-tool-permissions**](https://github.com/NicolasMontone/jev-tool-permissions) — Vercel AI SDK にツール呼び出し承認とツール一覧の絞り込みを加える。
  - **Jev が判断する箇所**: 確定ルールを先に適用し、残りのリスクと関連性を Jev と閾値で処理する。
  - **このプロジェクトの用途**: 承認 API の失敗時は人の確認へ回すが、全リスク検知を保証しない。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/nicolasmontone/jev-tool-permissions/) · ライセンス: 記載なし


## 音声・会話

- [**aiavatarkit**](https://github.com/uezo/aiavatarkit) — AIAvatarKit の任意の部品が、音声の書き起こしから発話終了を Jev に判断させる。
  - **Jev が判断する箇所**: 発話の完結性と、利用者が話し続けそうかを評価する。
  - **このプロジェクトの用途**: 無音時間による判定に意味上の情報を加える。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/uezo/aiavatarkit/) · ライセンス: Apache-2.0

- [**OpenWhisper**](https://github.com/Knuckles92/OpenWhisper) — 文字起こしと会議記録のアプリ。Jev で話題変化・記録助手への指示・機密的な文章を任意に確認する。
  - **Jev が判断する箇所**: 転記した断片を判定し、会議チェックポイント・記録操作・遠隔文章処理前の確認を補助する。
  - **このプロジェクトの用途**: 確率判断とローカル閾値・切替・失敗時処理を分けて確認できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/knuckles92/openwhisper/) · ライセンス: MIT

- [**jev-system-one**](https://github.com/haseeb-heaven/jev-system-one) — OpenAI が回答を書き、Jev が方針決定と草稿確認を行う端末の質問応答アプリ。
  - **Jev が判断する箇所**: LangGraph 内で回答形式、詳しさ、不確実性、草稿品質を判断する。
  - **このプロジェクトの用途**: 回答と構造化された判断レポートを並べて確認できる。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/haseeb-heaven/jev-system-one/) · ライセンス: MIT

- [**ha-conversation-jev**](https://github.com/luxus/ha-conversation-jev) — 簡単な照明指示をデバイスサービスへ、それ以外を Grok へ渡す Home Assistant の会話拡張。
  - **Jev が判断する箇所**: Jev が発話と公開デバイスを分類し、コードが照明操作か会話かを選ぶ。
  - **このプロジェクトの用途**: 対応範囲は限定された照明操作で、全家電命令への対応ではない。
  - [詳細と固定バージョンのソース](https://logicrw.github.io/awesome-jev-projects/ja/projects/luxus/ha-conversation-jev/) · ライセンス: 記載なし

## ローカル開発

Node.js 22+

```bash
npm ci --ignore-scripts
npm run dev
npm test
npm run build
npm run build:readme
```

## 自動化とセキュリティの境界

サイトは許可リストに含まれる静的データのみを配信し、GitHub ログインやアカウント認証情報を扱いません。Actions は短期のリポジトリ Token を使用し、収集・ビルドは読み取り専用、データ公開・Pages・Issue 操作は個別の最小権限で実行します。投稿されたコードを実行せず、個人 PAT や終了した GitHub Models の Secret も注入しません。

## プライバシーとアクセス情報

本番サイトでは Cloudflare Web Analytics により、Cookie や訪問者のフィンガープリントを使わずに、ページ訪問と性能の集計情報を確認できます。当サイトのローダーは DNT/GPC を尊重します。ブロッカーにより過少計測となる場合があり、掲載件数は訪問者数ではありません。契約前に期間を明示した集計情報をご請求ください。表示回数や成果は保証しません。

## プロジェクトを投稿

リポジトリのルート URL、用途、Jev が判断する箇所、実装の根拠を添えてください。数値には測定条件が必要です。mock、模擬取引、shadow の助言を本番運用の結果として扱いません。根拠が不十分な場合は確認待ちとなります。

[プロジェクトを投稿](https://github.com/logicrw/awesome-jev-projects/issues/new?template=project.yml)

## 掲載基準とセキュリティ

- [掲載内容の確認記録](docs/catalog-review-2026-09-19.md)
- [Security](SECURITY.md)

公開の問題報告に Token、秘密鍵などの認証情報を貼り付けないでください。

MIT © [logicrw](https://github.com/logicrw) — directory code only; project licenses are separate.
