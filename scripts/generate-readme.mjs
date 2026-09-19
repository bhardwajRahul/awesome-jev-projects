import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, "..");

const projectsPath = resolve(rootDir, "src/data/projects.json");
const projects = JSON.parse(readFileSync(projectsPath, "utf-8"));

const CATEGORY_META = {
  "High-Frequency & Simulation": {
    slug: "high-frequency-simulation",
    icon: "⚡",
    en: "High-Frequency & Simulation",
    zh: "高频模拟与实时博弈",
    descEn: "Real-time decision making in games, interactive simulations, and tick-based loops.",
    descZh: "在游戏、高频交互与仿真模拟闭环中做出毫秒级动作选择。"
  },
  "SDK & Decision Frameworks": {
    slug: "sdk-decision-frameworks",
    icon: "🛠️",
    en: "SDK & Decision Frameworks",
    zh: "SDK 与决策框架",
    descEn: "Type-safe client libraries, developer SDKs, and composable decision abstractions.",
    descZh: "封装 Jev 结构化调用与类型安全交互的客户端与基础 SDK。"
  },
  "SDK & Integrations": {
    slug: "sdk-integrations",
    icon: "🔌",
    en: "SDK & Integrations",
    zh: "SDK 与生态框架集成",
    descEn: "Framework adapters and connectors integrating existing stacks with Jev.",
    descZh: "将现有智能体架构与应用系统快速接入 Jev 的集成适配器。"
  },
  "CLI & Pipelines": {
    slug: "cli-pipelines",
    icon: "💻",
    en: "CLI & Pipelines",
    zh: "命令行与自动化工作流",
    descEn: "Command-line tools, shell pipes, and CI/CD pipelines incorporating semantic gates.",
    descZh: "在终端命令行、Unix 管道与 CI/CD 流程中引入语义判断的生产工具。"
  },
  "Data & Search": {
    slug: "data-search",
    icon: "💾",
    en: "Data & Search",
    zh: "数据库扩展与语义搜索",
    descEn: "Semantic SQL for databases, dataset filtering, and intelligent reranking without extensions.",
    descZh: "原生数据库 SQL 语义扩展、数据表行级智能过滤与重排检索。"
  },
  "Browser & OS Action": {
    slug: "browser-os-action",
    icon: "🌐",
    en: "Browser & OS Action",
    zh: "浏览器与桌面端侧自动化",
    descEn: "Autonomous web browsing, DOM accessibility tree reasoning, and desktop computer use.",
    descZh: "网页无障碍树解析、智能浏览器操作与桌面端动作选择。"
  },
  "Context GC & Filter": {
    slug: "context-gc-filter",
    icon: "🧹",
    en: "Context GC & Filter",
    zh: "上下文垃圾回收与降噪",
    descEn: "Token reduction, intelligent context compaction, and noise removal for LLM memory.",
    descZh: "LLM 上下文窗口压缩、冗余信息垃圾回收与社交媒体降噪。"
  },
  "Security & Guardrails": {
    slug: "security-guardrails",
    icon: "🛡️",
    en: "Security & Guardrails",
    zh: "安全审查与护栏防御",
    descEn: "Prompt injection protection, content moderation, safety policy gating, and risk scoring.",
    descZh: "提示词注入防御、内容合规审查、风险评估与安全护栏拦截。"
  },
  "MCP & Integrations": {
    slug: "mcp-integrations",
    icon: "🧩",
    en: "MCP & Integrations",
    zh: "MCP 协议与工具扩展",
    descEn: "Model Context Protocol (MCP) servers and tool endpoints powered by Jev judgements.",
    descZh: "基于 Model Context Protocol (MCP) 的标准服务器与工具插件。"
  },
  "Codebase & Graph Pathfinding": {
    slug: "codebase-graph-pathfinding",
    icon: "🧭",
    en: "Codebase & Graph Pathfinding",
    zh: "代码库分析与图谱寻路",
    descEn: "Repository navigation, AST exploration, review triage, and knowledge graph queries.",
    descZh: "代码库依赖关系导航、AST 符号审查与知识图谱关系推理。"
  },
  "Routing & Cost Optimization": {
    slug: "routing-cost-optimization",
    icon: "🔀",
    en: "Routing & Cost Optimization",
    zh: "模型路由与成本优化",
    descEn: "Task triage, tiered model routing, and token spend reduction.",
    descZh: "任务难度智能分流、模型动态路由与 API 调用成本大幅优化。"
  },
  "Domain & Vertical Tools": {
    slug: "domain-vertical-tools",
    icon: "📊",
    en: "Domain & Vertical Tools",
    zh: "垂直行业与金融工具",
    descEn: "Production-grade tools for DeFi, algorithmic trading, compliance, and legal domains.",
    descZh: "DeFi、金融量化交易、合规法务等垂直领域的工业级决策工具。"
  },
  "Decision Tools": {
    slug: "decision-tools",
    icon: "🎯",
    en: "Decision Tools",
    zh: "通用决策辅助与评估",
    descEn: "General-purpose decision engines, heuristic evaluators, and scoring utilities.",
    descZh: "通用选择器、启发式评分与业务决策辅助工具。"
  },
  "Classification & Taxonomy": {
    slug: "classification-taxonomy",
    icon: "🏷️",
    en: "Classification & Taxonomy",
    zh: "文本分类与分类学标注",
    descEn: "Structured multi-label tagging, document categorizers, and taxonomy builders.",
    descZh: "多标签打标、文档分类与分类学知识体系构建。"
  },
  "Evaluation & Observability": {
    slug: "evaluation-observability",
    icon: "📈",
    en: "Evaluation & Observability",
    zh: "评测基准与可观测性",
    descEn: "Benchmark suites, latency profiling, error telemetry, and decision tracking.",
    descZh: "性能基准评测、推理时延分析与端到端决策可观测性看板。"
  },
  "Voice & Conversation": {
    slug: "voice-conversation",
    icon: "🎙️",
    en: "Voice & Conversation",
    zh: "语音交互与会话流",
    descEn: "Real-time speech systems, conversational turn-taking, and streaming audio AI.",
    descZh: "实时对话轮次判定、语音交互与多模态流式响应。"
  },
  "Creative Tools": {
    slug: "creative-tools",
    icon: "🎨",
    en: "Creative Tools",
    zh: "创意生成与多媒体",
    descEn: "Generative UI, music composition, MIDI arranging, and creative workflows.",
    descZh: "动态 UI 生成、音乐编曲、MIDI 生成与艺术创作辅助。"
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
for (const cat of Object.keys(CATEGORY_META)) {
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

function buildEnglishReadme() {
  let md = `<!-- Awesome Jev Header -->
<div align="center">

# Awesome Jev Projects 🚀

[![Awesome](https://awesome.re/badge.svg)](https://github.com/sindresorhus/awesome)
[![Live Radar](https://img.shields.io/badge/Live%20Radar-logicrw.github.io-059669?style=flat-square&logo=safari)](https://logicrw.github.io/awesome-jev-projects/)
[![Curated Projects](https://img.shields.io/badge/Curated%20Projects-${projects.length}%2B-blue?style=flat-square)](#contents)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/logicrw/awesome-jev-projects/issues/new?template=project.yml)

**A source-verified, plain-language radar of ${projects.length}+ open-source tools, applications, and experiments built with TypeSafe AI's Jev model.**

[**🌐 Explore Live Interactive Radar**](https://logicrw.github.io/awesome-jev-projects/) • [**📝 Submit a Project**](https://github.com/logicrw/awesome-jev-projects/issues/new?template=project.yml) • [**🇨🇳 简体中文版本**](README.zh-CN.md)

</div>

---

> **Why Awesome Jev?**  
> TypeSafe AI's Jev model specializes in structured \`Choice\`, \`Score\`, and \`Noul\` (probability) judgements at high speed and low cost.  
> This list curates real-world software where Jev powers core decisions — completely free of speculative AI hype. Every listed project is backed by verified repository source code and commit evidence.

---

<a id="contents"></a>
## Contents

`;

  for (const [cat, meta] of Object.entries(CATEGORY_META)) {
    const list = categorized[cat];
    if (!list || list.length === 0) continue;
    md += `- [${meta.icon} ${meta.en} (${list.length})](#${meta.slug})\n`;
  }
  md += `- [📖 Local Development & Architecture](#local-development)\n`;
  md += `- [🤝 How to Submit a Project](#how-to-submit)\n\n---\n\n`;

  for (const [cat, meta] of Object.entries(CATEGORY_META)) {
    const list = categorized[cat];
    if (!list || list.length === 0) continue;

    md += `<a id="${meta.slug}"></a>\n`;
    md += `## ${meta.icon} ${meta.en}\n\n`;
    md += `*${meta.descEn}*\n\n`;

    for (const p of list) {
      const demo = getLiveDemo(p);
      const starTag = p.stars ? ` \`★ ${p.stars}\`` : "";
      const summary = p.plainSummaryEn || p.plainSummary;
      const decision = p.jevDecisionPointEn || p.jevDecisionPoint;
      const benefit = p.highlightBenefitEn || p.highlightBenefit;

      md += `- [**${p.name}**](${p.url})${starTag} - ${summary}\n`;
      md += `  - **Jev Role**: ${decision}\n`;
      if (benefit) {
        md += `  - **Highlight**: ${benefit}\n`;
      }
      if (demo) {
        md += `  - 🌐 [Live Demo / Interactive App](${demo})\n`;
      }
      md += `\n`;
    }
    md += `---\n\n`;
  }

  md += `<a id="local-development"></a>
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
\`\`\`

### Autonomous Radar Sync
The radar runs every 12 hours via GitHub Actions (\`.github/workflows/radar.yml\`), automatically:
1. Discovering Jev ecosystem projects through GitHub Code, Topic, and PR searches.
2. Verifying genuine Jev / TypeSafe source code integration (rejecting unverified mention-only repos).
3. Updating metadata, commit timestamps, and generating clean bilingual summaries.
4. Compiling and deploying directly to [GitHub Pages](https://logicrw.github.io/awesome-jev-projects/).

---

<a id="how-to-submit"></a>
## 🤝 How to Submit a Project

We welcome all genuine Jev-powered projects!

1. **Option A (Interactive Web)**: Visit the [Live Website](https://logicrw.github.io/awesome-jev-projects/) and click **Submit Project**.
2. **Option B (GitHub Issue)**: [Open a Project Issue directly](https://github.com/logicrw/awesome-jev-projects/issues/new?template=project.yml) with your repository link, brief description, and where Jev makes decisions.
3. **Automated Verification**: Our CI automatically reviews the source code, captures an immutable commit SHA, compiles bilingual summaries, and deploys to the live radar upon approval!

---

## License

MIT © [Logicrw](https://github.com/logicrw).
`;

  return md;
}

function buildChineseReadme() {
  let md = `<!-- Awesome Jev 中文主页 -->
<div align="center">

# Awesome Jev Projects 🚀

[![Awesome](https://awesome.re/badge.svg)](https://github.com/sindresorhus/awesome)
[![Live Radar](https://img.shields.io/badge/在线雷达-logicrw.github.io-059669?style=flat-square&logo=safari)](https://logicrw.github.io/awesome-jev-projects/)
[![Curated Projects](https://img.shields.io/badge/收录项目-${projects.length}%2B-blue?style=flat-square)](#目录)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-欢迎提交-brightgreen.svg?style=flat-square)](https://github.com/logicrw/awesome-jev-projects/issues/new?template=project.yml)

**精选由 TypeSafe AI Jev 大模型驱动的 ${projects.length}+ 个开源工具、生产级应用与实验项目雷达。**

[**🌐 访问在线交互雷达站**](https://logicrw.github.io/awesome-jev-projects/) • [**📝 提交新项目**](https://github.com/logicrw/awesome-jev-projects/issues/new?template=project.yml) • [**🇺🇸 English Version**](README.md)

</div>

---

> **为什么建立 Awesome Jev？**  
> TypeSafe AI 的 Jev 大模型专注于超高速、极低成本的结构化决策判断（\`Choice\` 选择、\`Score\` 评分与 \`Noul\` 概率推理）。  
> 本列表严谨收录真正由 Jev 驱动核心逻辑的真实开源项目，**坚决拒绝无源码佐证的概念炒作**。收录的每一个项目均经过代码级核验并绑定固定提交版本。

---

<a id="目录"></a>
## 目录

`;

  for (const [cat, meta] of Object.entries(CATEGORY_META)) {
    const list = categorized[cat];
    if (!list || list.length === 0) continue;
    md += `- [${meta.icon} ${meta.zh} (${list.length})](#${meta.slug}-zh)\n`;
  }
  md += `- [📖 本地运行与架构](#本地运行与架构)\n`;
  md += `- [🤝 如何提交你的项目](#如何提交你的项目)\n\n---\n\n`;

  for (const [cat, meta] of Object.entries(CATEGORY_META)) {
    const list = categorized[cat];
    if (!list || list.length === 0) continue;

    md += `<a id="${meta.slug}-zh"></a>\n`;
    md += `## ${meta.icon} ${meta.zh}\n\n`;
    md += `*${meta.descZh}*\n\n`;

    for (const p of list) {
      const demo = getLiveDemo(p);
      const starTag = p.stars ? ` \`★ ${p.stars}\`` : "";
      const summary = p.plainSummary;
      const decision = p.jevDecisionPoint;
      const benefit = p.highlightBenefit;

      md += `- [**${p.name}**](${p.url})${starTag} - ${summary}\n`;
      md += `  - 🎯 **Jev 决策点**: ${decision}\n`;
      if (benefit) {
        md += `  - 💡 **核心收益**: ${benefit}\n`;
      }
      if (demo) {
        md += `  - 🌐 [在线体验 Demo / 演示看板](${demo})\n`;
      }
      md += `\n`;
    }
    md += `---\n\n`;
  }

  md += `<a id="本地运行与架构"></a>
## 📖 本地运行与架构

需要 **Node.js 22+** 环境。

\`\`\`bash
# 安装依赖
npm ci

# 启动本地雷达站交互界面 (Vite + React + Tailwind)
npm run dev

# 运行自动化测试套件（包含 87 项源码与安全规则测试）
npm test

# 生产环境编译打包
npm run build
\`\`\`

### 全自动雷达同步机制
本仓库每 12 小时通过 GitHub Actions（\`.github/workflows/radar.yml\`）自动运行：
1. 通过 GitHub Code / Topics / PR 全网探测 Jev 生态开源新项目。
2. 静态核验真实 Jev / TypeSafe 源码实现（杜绝仅在 README 蹭热度的空头项目）。
3. 抓取最新 Star 数、分支提交时间，并提炼高质量双语简介。
4. 自动编译并部署至 [GitHub Pages 生产雷达站](https://logicrw.github.io/awesome-jev-projects/)。

---

<a id="如何提交你的项目"></a>
## 🤝 如何提交你的项目

热烈欢迎任何集成了 Jev 的开源应用、SDK 或趣味实验！

1. **方式一（网页提交）**：访问[在线雷达站](https://logicrw.github.io/awesome-jev-projects/)，点击右上角「提交项目」。
2. **方式二（Issue 提交）**：[直接创建项目 Issue](https://github.com/logicrw/awesome-jev-projects/issues/new?template=project.yml)，填写你的仓库链接、一句话大白话介绍及 Jev 决策点。
3. **自动化入库审查**：GitHub Actions 会自动对仓库代码进行沙盒静态审查，核验通过后自动合入主分支并向全网发布！

---

## 开源协议

MIT © [Logicrw](https://github.com/logicrw).
`;

  return md;
}

export function generateReadmes() {
  const en = buildEnglishReadme();
  const zh = buildChineseReadme();

  const enPath = resolve(rootDir, "README.md");
  const zhPath = resolve(rootDir, "README.zh-CN.md");

  writeFileSync(enPath, en, "utf-8");
  writeFileSync(zhPath, zh, "utf-8");

  return { en, zh };
}

if (true) {
  const { en, zh } = generateReadmes();
  console.log(`Successfully generated README.md (${en.length} bytes) and README.zh-CN.md (${zh.length} bytes) for ${projects.length} projects.`);
}
