import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { DECISIONS_JA, DECISIONS_KO, BENEFITS_JA, BENEFITS_KO } from "./readme-i18n.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, "..");

const projectsPath = resolve(rootDir, "src/data/projects.json");
const projects = JSON.parse(readFileSync(projectsPath, "utf-8"));

const BANNER_URL = "https://raw.githubusercontent.com/logicrw/awesome-jev-projects/main/public/banner.svg";
const BANNER_ZH_URL = "https://raw.githubusercontent.com/logicrw/awesome-jev-projects/main/public/banner-zh.svg";
const SITE_URL = "https://logicrw.github.io/awesome-jev-projects/";
const ISSUE_SUBMIT_URL = "https://github.com/logicrw/awesome-jev-projects/issues/new?template=project.yml";

const CATEGORY_CONFIG = {
  "High-Frequency & Simulation": {
    slug: "high-frequency-simulation",
    icon: "⚡",
    en: "High-Frequency & Simulation",
    zh: "高频模拟与实时博弈",
    ja: "高頻度シミュレーション・リアルタイムゲーム",
    ko: "고주파 시뮬레이션 및 실시간 게임",
    descEn: "Real-time decision loops for games, robotics, and interactive tick-based simulations.",
    descZh: "在游戏对战、机器人与高频仿真模拟闭环中做出毫秒级离散动作抉择。",
    descJa: "ゲームやロボティクス、高頻度シミュレーションループにおけるミリ秒単位の意思決定。",
    descKo: "게임, 로보틱스 및 인터랙티브 시뮬레이션 루프를 위한 실시간 밀리초 단위 의사결정."
  },
  "SDK & Decision Frameworks": {
    slug: "sdk-decision-frameworks",
    icon: "🛠️",
    en: "SDK & Decision Frameworks",
    zh: "开发工具包与决策框架",
    ja: "SDK・意思決定フレームワーク",
    ko: "SDK 및 의사결정 프레임워크",
    descEn: "Type-safe client libraries, language bindings, and composable decision engines.",
    descZh: "封装 Jev 结构化调用与类型安全交互的多语言客户端、绑定库与决策引擎。",
    descJa: "Jevの構造化呼び出しと型安全な対話をカプセル化するクライアントライブラリ群。",
    descKo: "Jev의 구조화된 호출과 타입 안전 상호작용을 위한 다국어 클라이언트 라이브러리 및 SDK."
  },
  "SDK & Integrations": {
    slug: "sdk-integrations",
    icon: "🔌",
    en: "SDK & Ecosystem Integrations",
    zh: "生态框架与接入适配器",
    ja: "エコシステム統合・アダプター",
    ko: "생태계 연동 및 어댑터",
    descEn: "Adapters and bridge connectors integrating existing runtime stacks with Jev.",
    descZh: "将现有智能体框架、调度器与上层应用系统平滑接入 Jev 的集成适配器。",
    descJa: "既存のエージェントフレームワークやランタイムをJevと接続するアダプター群。",
    descKo: "기존 에이전트 런타임 및 애플리케이션 스택을 Jev와 원활하게 연결하는 어댑터."
  },
  "CLI & Pipelines": {
    slug: "cli-pipelines",
    icon: "💻",
    en: "CLI & Pipelines",
    zh: "命令行工具与自动化工作流",
    ja: "CLI・自動化パイプライン",
    ko: "CLI 및 자동화 파이프라인",
    descEn: "Terminal utilities, shell pipes, and CI/CD automation incorporating semantic gates.",
    descZh: "在终端脚本、Unix 管道与 CI/CD 自动化流程中引入语义判断的工程工具。",
    descJa: "ターミナルコマンド、Unixパイプ、CI/CDにセマンティック判定を組み込むツール群。",
    descKo: "터미널 유틸리티, 셸 파이프 및 CI/CD 워크플로에 시맨틱 판단을 결합한 도구."
  },
  "Data & Search": {
    slug: "data-search",
    icon: "💾",
    en: "Data & Search",
    zh: "数据库扩展与语义检索",
    ja: "データベース拡張・セマンティック検索",
    ko: "데이터베이스 확장 및 시맨틱 검색",
    descEn: "Semantic SQL query extensions, row-level filters, and intelligent reranking.",
    descZh: "免安装插件的原生数据库 SQL 语义扩展、数据表行级智能过滤与重排检索。",
    descJa: "拡張機能不要のネイティブSQLセマンティック拡張、行レベルフィルタリング、リランキング。",
    descKo: "플러그인 설치가 필요 없는 네이티브 SQL 시맨틱 확장, 행 단위 필터링 및 리랭킹."
  },
  "Browser & OS Action": {
    slug: "browser-os-action",
    icon: "🌐",
    en: "Browser & Desktop Automation",
    zh: "浏览器与桌面端自动化",
    ja: "ブラウザ・デスクトップ自動化",
    ko: "브라우저 및 데스크톱 자동화",
    descEn: "Autonomous web agents, DOM accessibility tree reasoning, and desktop computer use.",
    descZh: "网页无障碍树解析、自主浏览器操作与桌面端智能体操作动作裁决。",
    descJa: "DOMアクセシビリティツリー解析、自律型ブラウザ操作、デスクトップGUI自動化。",
    descKo: "웹 접근성 트리 분석, 자율 브라우징 및 데스크톱 GUI 제어를 위한 에이전트."
  },
  "Context GC & Filter": {
    slug: "context-gc-filter",
    icon: "🧹",
    en: "Context GC & Noise Filtering",
    zh: "上下文垃圾回收与降噪",
    ja: "コンテキスト圧縮・ノイズ除去",
    ko: "컨텍스트 압축 및 가비지 컬렉션",
    descEn: "Token reduction, intelligent context pruning, and noise removal for LLM prompts.",
    descZh: "大模型上下文窗口压缩、冗余信息垃圾回收与社交媒体长尾降噪过滤。",
    descJa: "トークン節約、プロンプトコンテキストの不要情報整理、タイムラインのノイズ除去。",
    descKo: "토큰 절약, 지능형 컨텍스트 정리 및 소셜 타임라인의 노이즈 필터링."
  },
  "Security & Guardrails": {
    slug: "security-guardrails",
    icon: "🛡️",
    en: "Security & Guardrails",
    zh: "安全防御与输入护栏",
    ja: "セキュリティ・ガードレール",
    ko: "보안 및 가드레일",
    descEn: "Prompt injection defense, content moderation, risk scoring, and policy validation.",
    descZh: "提示词注入防御、内容合规审查、风险评估与关键策略安全护栏拦截。",
    descJa: "プロンプトインジェクション防御、コンテンツモデレーション、ポリシー適合性検査。",
    descKo: "프롬프트 주입 방어, 콘텐츠 검열, 위험도 평가 및 정책 검증 가드레일."
  },
  "MCP & Integrations": {
    slug: "mcp-integrations",
    icon: "🧩",
    en: "MCP Protocols & Tool Endpoints",
    zh: "MCP 协议与工具扩展",
    ja: "MCP プロトコル・ツール拡張",
    ko: "MCP 프로토콜 및 도구 확장",
    descEn: "Model Context Protocol (MCP) servers providing standardized Jev decision endpoints.",
    descZh: "基于模型上下文协议（MCP）的标准服务器，向智能体开放结构化判定能力。",
    descJa: "Model Context Protocol（MCP）に準拠した標準意思決定サーバーとツール群。",
    descKo: "Model Context Protocol(MCP)을 준수하는 표준 의사결정 서버 및 도구 엔드포인트."
  },
  "Codebase & Graph Pathfinding": {
    slug: "codebase-graph-pathfinding",
    icon: "🧭",
    en: "Codebase Analysis & Knowledge Graphs",
    zh: "代码库分析与图谱寻路",
    ja: "コードベース解析・グラフ探索",
    ko: "코드베이스 분석 및 지식 그래프 탐색",
    descEn: "Code navigation, AST symbol triage, review assistance, and knowledge graph querying.",
    descZh: "代码库依赖关系导航、AST 符号审查、代码评审分流与知识图谱关系推理。",
    descJa: "コード依存関係ナビゲーション、ASTシンボル検査、コードレビュー支援、知識グラフ探索。",
    descKo: "코드 의존성 탐색, AST 심볼 분석, 코드 리뷰 트리아지 및 지식 그래프 쿼리."
  },
  "Routing & Cost Optimization": {
    slug: "routing-cost-optimization",
    icon: "🔀",
    en: "Model Routing & Cost Reduction",
    zh: "模型路由与成本优化",
    ja: "モデルルーティング・コスト最適化",
    ko: "모델 라우팅 및 비용 최적화",
    descEn: "Task triage, dynamic tiered model routing, and token spend reduction.",
    descZh: "根据任务复杂度智能分流、多级模型动态路由与 API 调用成本大幅缩减。",
    descJa: "タスク難易度の自動判定、多層モデルルーティング、API利用コストの大幅削減。",
    descKo: "작업 난이도 자동 분류, 계층형 모델 라우팅 및 API 비용 절감."
  },
  "Domain & Vertical Tools": {
    slug: "domain-vertical-tools",
    icon: "📊",
    en: "Domain-Specific & Enterprise Tools",
    zh: "垂直行业与专业业务系统",
    ja: "専門分野・バーティカルツール",
    ko: "도메인 특화 및 엔터프라이즈 도구",
    descEn: "Production systems for DeFi, quantitative trading, compliance, and legal domains.",
    descZh: "去中心化金融（DeFi）、量化交易策略、合规法务等垂直行业的专业决策系统。",
    descJa: "DeFi、クオンツ取引、コンプライアンス、法務など特定領域に特化した業務システム。",
    descKo: "DeFi, 퀀트 트레이딩, 컴플라이언스 및 법률 도메인을 위한 엔터프라이즈 시스템."
  },
  "Decision Tools": {
    slug: "decision-tools",
    icon: "🎯",
    en: "General Decision & Evaluation Tools",
    zh: "通用决策与启发式评估",
    ja: "意思決定支援・ヒューリスティック評価",
    ko: "범용 의사결정 및 휴리스틱 평가",
    descEn: "Versatile decision modules, heuristic scorers, and operational choice helpers.",
    descZh: "开箱即用的通用判定组件、启发式打分工具与业务动作多选辅助器。",
    descJa: "汎用的な選択エンジン、ヒューリスティックスコアリング、業務判断支援ツール。",
    descKo: "범용 선택 엔진, 휴리스틱 스코어러 및 비즈니스 의사결정 보조 유틸리티."
  },
  "Classification & Taxonomy": {
    slug: "classification-taxonomy",
    icon: "🏷️",
    en: "Text Classification & Taxonomy",
    zh: "文本分类与分类学标注",
    ja: "テキスト分類・タキソノミー",
    ko: "텍스트 분류 및 분류 체계",
    descEn: "Multi-label categorization, hierarchical taxonomies, and dataset annotation.",
    descZh: "多标签层级分类、文档结构化标引与分类学数据集构建工具。",
    descJa: "マルチラベル分類、階層型タキソノミー構築、データセットの自動ラベリング。",
    descKo: "다중 레이블 분류, 계층적 분류 체계 구축 및 데이터셋 레이블링."
  },
  "Evaluation & Observability": {
    slug: "evaluation-observability",
    icon: "📈",
    en: "Benchmarks & Observability",
    zh: "评测基准与系统可观测性",
    ja: "ベンチマーク・可観測性",
    ko: "벤치마크 및 가관측성",
    descEn: "Decision profiling, latency monitoring, telemetry, and benchmark evaluation suites.",
    descZh: "决策时延监控、错误遥测追踪与端到端系统性能评测看板。",
    descJa: "意思決定プロファイリング、レイテンシ監視、エラーテレメトリ、性能ベンチマーク。",
    descKo: "의사결정 프로파일링, 지연 시간 모니터링, 텔레메트리 및 벤치마크 평가 제품군."
  },
  "Voice & Conversation": {
    slug: "voice-conversation",
    icon: "🎙️",
    en: "Voice & Real-Time Conversation",
    zh: "实时语音与多轮对话",
    ja: "音声対話・リアルタイム会話",
    ko: "음성 인터랙션 및 실시간 대화",
    descEn: "Turn-taking arbitration, conversational interrupt detection, and real-time audio AI.",
    descZh: "多轮对话轮次裁决、插话检测与实时低延迟语音交互系统。",
    descJa: "発話権調停、会話の割り込み検出、低遅延リアルタイム音声エージェント。",
    descKo: "발화 순서 중재, 인터럽트 감지 및 실시간 저지연 음성 AI 시스템."
  },
  "Creative Tools": {
    slug: "creative-tools",
    icon: "🎨",
    en: "Creative Media & Composition",
    zh: "创意生成与多媒体编排",
    ja: "クリエイティブツール・メディア生成",
    ko: "크리에이티브 미디어 및 작곡",
    descEn: "Dynamic UI layout generation, algorithmic music composition, and MIDI arrangement.",
    descZh: "界面组件动态组合生成、算法音乐编排与智能 MIDI 旋律生成工具。",
    descJa: "UI動的レイアウト生成、アルゴリズム作曲、MIDIアレンジメントツール。",
    descKo: "동적 UI 레이아웃 생성, 알고리즘 기반 작곡 및 MIDI 편곡 도구."
  }
};

function getLiveDemo(project) {
  if (project.evidence && Array.isArray(project.evidence)) {
    for (const e of project.evidence) {
      if (typeof e.url !== "string") continue;
      if (
        (e.url.includes(".github.io/") || e.url.includes(".fly.dev") || e.url.includes(".vercel.app") || !e.url.includes("github.com")) &&
        !e.url.endsWith(".md") &&
        !e.url.endsWith(".png") &&
        !e.url.endsWith(".jpg")
      ) {
        return e.url;
      }
    }
  }
  return null;
}

const categorized = {};
for (const cat of Object.keys(CATEGORY_CONFIG)) {
  categorized[cat] = [];
}
for (const p of projects) {
  const cat = p.category && categorized[p.category] ? p.category : "Domain & Vertical Tools";
  categorized[cat].push(p);
}

for (const cat of Object.keys(categorized)) {
  categorized[cat].sort((a, b) => {
    const starA = a.stars || 0;
    const starB = b.stars || 0;
    if (starB !== starA) return starB - starA;
    return a.name.localeCompare(b.name);
  });
}

function buildHeader(lang) {
  const titles = {
    en: "Awesome Jev Projects",
    zh: "Awesome Jev 开源生态雷达",
    ja: "Awesome Jev オープンソースエコシステム",
    ko: "Awesome Jev 오픈소스 생태계 레이더"
  };

  const taglines = {
    en: `A source-verified, zero-hype directory of **${projects.length}+** open-source applications, tools, and benchmarks built with TypeSafe AI's Jev model.`,
    zh: `严谨收录 **${projects.length}+** 个由 TypeSafe AI Jev 模型驱动的真实开源应用、工程工具与评测基准。拒绝无源码概念炒作，每项均绑定可查验的提交版本。`,
    ja: `TypeSafe AIのJevモデルを採用した **${projects.length}+** 件のオープンソースツール、実用アプリ、検証プロジェクトを網羅。ソースコード検証済み。`,
    ko: `TypeSafe AI의 Jev 모델을 탑재한 **${projects.length}+** 개의 검증된 오픈소스 도구, 프로덕션 앱 및 벤치마크 모음. 모든 프로젝트는 실제 소스 코드가 검증되었습니다.`
  };

  const missionText = {
    en: `> **Why Awesome Jev?**  
> Unlike autoregressive generative models, TypeSafe AI's Jev specializes in sub-100ms structured \`Choice\`, \`Score\`, and \`Noul\` (probability) judgements.  
> This directory curates real-world software where Jev acts as the high-speed decision core. Every repository is strictly verified against commit-pinned source code.`,
    zh: `> **为什么建立 Awesome Jev？**  
> 与长文本自回归生成模型不同，TypeSafe AI 的 Jev 专攻 100 毫秒以内的结构化决策判断（\`Choice\` 选项抉择、\`Score\` 离散评分与 \`Noul\` 概率推理）。  
> 本雷达站专为开发者呈现真正将 Jev 落地为核心决策单元的开源项目。纯净真实、代码可查、开箱即用。`,
    ja: `> **Awesome Jev とは？**  
> 長文生成モデルとは異なり、TypeSafe AIのJevはサブ100ミリ秒の高速構造化判断（\`Choice\` 選択、\`Score\` スコアリング、\`Noul\` 確率推定）に特化しています。  
> 本リポジトリは、Jevを中核の意思決定エンジンとして実装した実用的なソフトウェアのみを厳選・掲載しています。`,
    ko: `> **Awesome Jev 프로젝트란?**  
> 텍스트 생성 모델과 달리, TypeSafe AI의 Jev는 100ms 미만의 고속 구조화 판단(\`Choice\` 선택, \`Score\` 채점, \`Noul\` 확률 판정)에 특화되어 있습니다.  
> 본 디렉터리는 Jev를 핵심 의사결정 엔진으로 직접 활용하는 실제 오픈소스 소프트웨어만을 검증하여 수록합니다.`
  };

  const navLabels = {
    en: "Language",
    zh: "多语言版本",
    ja: "言語切り替え",
    ko: "언어 선택"
  };

  const actionLabels = {
    en: { radar: "🌐 Explore Live Interactive Radar", submit: "📝 Submit a Project" },
    zh: { radar: "🌐 访问在线交互雷达站", submit: "📝 提交开源项目" },
    ja: { radar: "🌐 ライブ対話型レーダーを開く", submit: "📝 プロジェクトを申請" },
    ko: { radar: "🌐 실시간 인터랙티브 레이더 열기", submit: "📝 프로젝트 등록 신청" }
  };

  const banner = lang === "zh" ? BANNER_ZH_URL : BANNER_URL;

  return `<div align="center">

<a href="${SITE_URL}">
  <img src="${banner}" alt="Awesome Jev Projects Banner" width="880" style="max-width: 100%; border-radius: 12px;" />
</a>

<br/><br/>

<p>
  <a href="https://awesome.re"><img src="https://awesome.re/badge.svg" alt="Awesome" /></a>
  <a href="${SITE_URL}"><img src="https://img.shields.io/badge/Live%20Radar-logicrw.github.io-059669?style=flat-square&logo=safari" alt="Live Radar" /></a>
  <a href="#contents"><img src="https://img.shields.io/badge/Curated%20Projects-${projects.length}%2B-2563eb?style=flat-square" alt="Projects Count" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-d97706.svg?style=flat-square" alt="License: MIT" /></a>
  <a href="${ISSUE_SUBMIT_URL}"><img src="https://img.shields.io/badge/PRs-Welcome-16a34a.svg?style=flat-square" alt="PRs Welcome" /></a>
</p>

<p>
  <strong>${navLabels[lang]}:</strong>&nbsp;
  <a href="README.md">English</a> • 
  <a href="README.zh-CN.md">简体中文</a> • 
  <a href="README.ja.md">日本語</a> • 
  <a href="README.ko.md">한국어</a>
</p>

<p>
  <a href="${SITE_URL}"><strong>${actionLabels[lang].radar}</strong></a> • 
  <a href="${ISSUE_SUBMIT_URL}"><strong>${actionLabels[lang].submit}</strong></a>
</p>

<p>${taglines[lang]}</p>

</div>

---

${missionText[lang]}

---
`;
}

function buildReadme(lang) {
  let md = buildHeader(lang);

  const tocTitles = {
    en: "Contents",
    zh: "目录索引",
    ja: "目次",
    ko: "목차"
  };

  const devTitles = {
    en: "📖 Local Development & Architecture",
    zh: "📖 本地运行与架构原理",
    ja: "📖 ローカル開発とアーキテクチャ",
    ko: "📖 로컬 개발 및 아키텍처"
  };

  const submitTitles = {
    en: "🤝 How to Submit a Project",
    zh: "🤝 如何提交你的项目",
    ja: "🤝 プロジェクトの掲載申請",
    ko: "🤝 프로젝트 제출 방법"
  };

  md += `<a id="contents"></a>\n## ${tocTitles[lang]}\n\n`;

  for (const [cat, cfg] of Object.entries(CATEGORY_CONFIG)) {
    const list = categorized[cat];
    if (!list || list.length === 0) continue;
    md += `- [${cfg.icon} ${cfg[lang]} (${list.length})](#${cfg.slug}-${lang})\n`;
  }
  md += `- [${devTitles[lang]}](#dev-arch-${lang})\n`;
  md += `- [${submitTitles[lang]}](#submit-guide-${lang})\n\n---\n\n`;

  const labels = {
    en: { role: "What Jev Decides", advantage: "Key Advantage", demo: "Live Interactive Demo" },
    zh: { role: "核心决策", advantage: "收益亮点", demo: "在线演示" },
    ja: { role: "Jevの判断箇所", advantage: "主な特徴", demo: "オンラインデモ" },
    ko: { role: "Jev의 역할", advantage: "핵심 장점", demo: "라이브 데모" }
  };

  for (const [cat, cfg] of Object.entries(CATEGORY_CONFIG)) {
    const list = categorized[cat];
    if (!list || list.length === 0) continue;

    md += `<a id="${cfg.slug}-${lang}"></a>\n`;
    md += `## ${cfg.icon} ${cfg[lang]}\n\n`;
    md += `*${cfg["desc" + lang.charAt(0).toUpperCase() + lang.slice(1)] || cfg.descEn}*\n\n`;

    for (const p of list) {
      const demo = getLiveDemo(p);
      const starTag = p.stars ? ` \`★ ${p.stars}\`` : "";

      let summary = p.plainSummaryEn || p.plainSummary;
      let decision = p.jevDecisionPointEn || p.jevDecisionPoint;
      let benefit = p.highlightBenefitEn || p.highlightBenefit;

      if (lang === "zh") {
        summary = p.plainSummary;
        decision = p.jevDecisionPoint;
        benefit = p.highlightBenefit;
      } else if (lang === "ja") {
        summary = p.plainSummaryEn || p.plainSummary;
        decision = DECISIONS_JA[p.jevDecisionPointEn] || p.jevDecisionPointEn;
        benefit = BENEFITS_JA[p.highlightBenefitEn] || p.highlightBenefitEn;
      } else if (lang === "ko") {
        summary = p.plainSummaryEn || p.plainSummary;
        decision = DECISIONS_KO[p.jevDecisionPointEn] || p.jevDecisionPointEn;
        benefit = BENEFITS_KO[p.highlightBenefitEn] || p.highlightBenefitEn;
      }

      md += `- [**${p.name}**](${p.url})${starTag} - ${summary}\n`;
      md += `  - 🎯 **${labels[lang].role}**: ${decision}\n`;
      if (benefit) {
        md += `  - 💡 **${labels[lang].advantage}**: ${benefit}\n`;
      }
      if (demo) {
        md += `  - 🌐 [${labels[lang].demo}](${demo})\n`;
      }
      md += `\n`;
    }
    md += `---\n\n`;
  }

  // Local Dev Section
  const devBody = {
    en: `<a id="dev-arch-en"></a>
## 📖 Local Development & Architecture

Requires **Node.js 22+**.

\`\`\`bash
# Install dependencies
npm ci

# Start local interactive radar (Vite + React + Tailwind)
npm run dev

# Run full automated test suite (87+ source verification & validation tests)
npm test

# Build production bundle
npm run build

# Regenerate all 4 language READMEs from projects.json
npm run build:readme
\`\`\`

### Autonomous Radar Pipeline
The radar operates automatically via GitHub Actions:
1. **Scheduled Exploration** (\`.github/workflows/radar.yml\` every 12h): Searches GitHub for genuine Jev/TypeSafe implementations.
2. **Issue Ingestion** (\`.github/workflows/auto-ingest-issue.yml\`): Validates source-level integration before appending accepted submissions to \`main\`.
3. **Continuous Deployment** (\`.github/workflows/deploy-pages.yml\`): Verifies and publishes to [GitHub Pages](https://logicrw.github.io/awesome-jev-projects/).

---

<a id="submit-guide-en"></a>
## 🤝 How to Submit a Project

We warmly welcome all genuine Jev-powered software, experiments, and tools!

1. **Option A (Interactive Web)**: Visit the [Live Radar](https://logicrw.github.io/awesome-jev-projects/) and click **Submit Project**.
2. **Option B (GitHub Issue)**: [Open a Project Issue directly](https://github.com/logicrw/awesome-jev-projects/issues/new?template=project.yml) with your repository URL, a clear summary, and where Jev makes decisions.
3. **Automated Verification**: Our CI reviews the codebase, captures an immutable commit SHA, checks integration signals, and deploys upon approval.

---

## License

MIT © [Logicrw](https://github.com/logicrw).
`,
    zh: `<a id="dev-arch-zh"></a>
## 📖 本地运行与架构原理

需要 **Node.js 22+** 环境。

\`\`\`bash
# 安装项目依赖
npm ci

# 启动本地可视化雷达站 (Vite + React + Tailwind)
npm run dev

# 执行全量自动化测试（包含 87 项静态审查与数据规范测试）
npm test

# 生产环境编译打包
npm run build

# 根据 projects.json 自动重新编译 4 国语言 README
npm run build:readme
\`\`\`

### 自动化同步机制
雷达系统完全基于 GitHub Actions 自动化运转：
1. **定时全网扫描**（\`.github/workflows/radar.yml\` 每 12 小时）：检索 GitHub 开源生态，识别具备真实 Jev 接入代码的新项目。
2. **提报自动核验**（\`.github/workflows/auto-ingest-issue.yml\`）：沙盒审查投稿源码，拦截无代码凭证的虚假提报，核验通过后原子入库。
3. **全网发布流**（\`.github/workflows/deploy-pages.yml\`）：自动编译静态资源并推送到 [GitHub Pages 生产雷达站](https://logicrw.github.io/awesome-jev-projects/)。

---

<a id="submit-guide-zh"></a>
## 🤝 如何提交你的项目

热烈欢迎各类接入 Jev 的开源工具、生产系统与实验 Demo！

1. **方式一（网页提交）**：访问[在线雷达站](https://logicrw.github.io/awesome-jev-projects/)，点击右上角「提交项目」。
2. **方式二（Issue 提交）**：[直接发起项目 Issue](https://github.com/logicrw/awesome-jev-projects/issues/new?template=project.yml)，填写仓库地址、客观用途与 Jev 决策位置。
3. **审查准入原则**：仓库必须包含真实可调用的 Jev 逻辑代码，并附带可验证的运行或复现证据。核验通过后系统将自动合并上线！

---

## 开源协议

MIT © [Logicrw](https://github.com/logicrw).
`,
    ja: `<a id="dev-arch-ja"></a>
## 📖 ローカル開発とアーキテクチャ

**Node.js 22+** が必要です。

\`\`\`bash
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
\`\`\`

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
`,
    ko: `<a id="dev-arch-ko"></a>
## 📖 로컬 개발 및 아키텍처

**Node.js 22+** 가 필요합니다.

\`\`\`bash
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
\`\`\`

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
`
  };

  md += devBody[lang];
  return md;
}

export function generateAllReadmes() {
  const en = buildReadme("en");
  const zh = buildReadme("zh");
  const ja = buildReadme("ja");
  const ko = buildReadme("ko");

  writeFileSync(resolve(rootDir, "README.md"), en, "utf-8");
  writeFileSync(resolve(rootDir, "README.zh-CN.md"), zh, "utf-8");
  writeFileSync(resolve(rootDir, "README.ja.md"), ja, "utf-8");
  writeFileSync(resolve(rootDir, "README.ko.md"), ko, "utf-8");

  return { en, zh, ja, ko };
}

generateAllReadmes();
console.log(`Generated 4 language READMEs (EN, ZH, JA, KO) for ${projects.length} projects.`);
