import { publicProjects } from "./prepare-public-data.mjs";
import { readFile, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import ts from "typescript";
import { activeSponsors } from "../src/lib/sponsors.mjs";
import { COPY, LOCALES, SITE, REPOSITORY, localePrefix, projectRoute, categoryRoute, projectCopy, escapeHTML, paidPlacementMarkdown, machineDocuments, MACHINE_RESOURCES, SKILL_COPIES, INSTALL_COMMANDS } from "./site-content.mjs";
const root = new URL("../", import.meta.url);
const projects = publicProjects(JSON.parse(await readFile(new URL("src/data/projects.json", root), "utf8")));
const partners = activeSponsors(JSON.parse(await readFile(new URL("src/data/sponsors.json", root), "utf8")).partners);
const code = ts.transpileModule(await readFile(new URL("src/lib/i18n.ts", root), "utf8"), { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } }).outputText;
const { categoryLabel, localeMeta } = await import(`data:text/javascript;base64,${Buffer.from(code).toString("base64")}`);
const files = { en: "README.md", zh: "README.zh-CN.md", ja: "README.ja.md", ko: "README.ko.md" };
const md = (text) => String(text ?? "").replace(/[\\`*_[\]<>]/g, (s) => `\\${s}`).replace(/\s+/g, " ");
const text = {
  zh: {
    count: "个精选项目",
    public: "各项目遵循原仓库的开源许可证；特殊或未声明许可已单独注明。",
    scope: "所有条目均已核对公开源码与实际决策逻辑，便于参考与选型。协议兼容实现会明确注明底层模型。",
    development: "本地开发",
    workflow: "自动化与安全机制",
    flow: "网站为纯静态架构，不收集敏感凭据，所有展示数据均来自公开开源代码。Actions 采用短期仓库 Token，最小权限运行，不执行第三方未核验代码。",
    submission: "欢迎提交项目！请提供仓库地址、简要用途以及 Jev 在代码中的实际决策逻辑位置。",
    policies: "收录与安全说明",
    details: "项目详情与固定源码",
    readme: "生成四语 README",
    review: "本轮目录审核记录",
    warning: "发现安全问题请勿在公开 Issue 中粘贴 Token、私钥或其他凭据。"
  },
  en: {
    count: "curated projects",
    public: "Projects follow their respective open-source licenses; unstated licenses are noted individually.",
    scope: "Entries are linked to commit-pinned source code and specific decision points for easy reference. Compatible implementations clearly identify their underlying model.",
    development: "Local development",
    workflow: "Automation and security boundaries",
    flow: "The website serves static data and handles no credentials. Actions use short-lived repository tokens with least privilege, and submitted code is never executed directly.",
    submission: "Submissions are welcome! Please provide the repository URL, core use case, and code location of the Jev decision logic.",
    policies: "Editorial and security notes",
    details: "Project details and fixed source",
    readme: "Generate four-language READMEs",
    review: "Catalog audit record",
    warning: "Never paste tokens, private keys or other credentials into public security reports."
  },
  ja: {
    count: "件の厳選プロジェクト",
    public: "利用条件は各プロジェクトのライセンスに従います。独自または未記載のライセンスは個別に表示しています。",
    scope: "すべての項目で公開ソースと具体的な判断箇所を確認しており、技術選定の参考として活用できます。互換実装は基盤モデルを明記しています。",
    development: "ローカル開発",
    workflow: "自動化とセキュリティの境界",
    flow: "サイトは静的データのみを配信し、認証情報を扱いません。Actions は短期 Token と最小権限で実行され、外部コードを直接実行することはありません。",
    submission: "プロジェクトの推薦を歓迎します。リポジトリ URL、用途、Jev の実装箇所を添えてお送りください。",
    policies: "掲載基準とセキュリティ",
    details: "詳細と固定バージョンのソース",
    readme: "4言語の README を生成",
    review: "掲載内容の確認記録",
    warning: "公開の問題報告に Token、秘密鍵などの認証情報を貼り付けないでください。"
  },
  ko: {
    count: "개 엄선 프로젝트",
    public: "각 프로젝트의 라이선스를 따르며, 맞춤 라이선스나 미명시 라이선스는 개별 표기되어 있습니다.",
    scope: "모든 항목은 공개 소스와 구체적인 판단 지점을 확인하여 기술 검토에 바로 참고할 수 있도록 구성했습니다. 호환 구현은 기반 모델을 명시합니다.",
    development: "로컬 개발",
    workflow: "자동화 및 보안 경계",
    flow: "사이트는 정적 데이터만 제공하며 자격 증명을 다루지 않습니다. Actions는 단기 Token과 최소 권한으로 실행되며 외부 코드를 직접 실행하지 않습니다.",
    submission: "프로젝트 제보를 환영합니다! 저장소 주소, 핵심 용도, Jev 연동 코드 위치를 함께 전달해 주세요.",
    policies: "수록 기준 및 보안 안내",
    details: "상세 설명 및 고정 버전 소스",
    readme: "네 언어의 README 생성",
    review: "목록 검토 기록",
    warning: "공개 문제 보고에 Token, 개인 키 또는 기타 자격 증명을 붙여 넣지 마세요."
  },
};
const additions = {
  zh: {
    agent: "Agent Skill 接入",
    agentText: "安装官方技能后，可在终端或 Agent 中按赛道检索项目、读取固定版本源码证据与决策逻辑。",
    privacy: "访问统计与透明度",
    privacyText: "采用轻量无 Cookie 的 Cloudflare Web Analytics 进行基础性能与访问汇总，尊重 DNT/GPC。"
  },
  en: {
    agent: "Install the Agent Skill",
    agentText: "Install the skill to query projects by domain and inspect pinned source evidence directly from your terminal or agent.",
    privacy: "Privacy and analytics",
    privacyText: "We use lightweight, cookie-free Cloudflare Web Analytics for aggregate performance and visit metrics, respecting DNT/GPC."
  },
  ja: {
    agent: "Agent Skill の導入",
    agentText: "スキルを導入すると、ターミナルや Agent からカテゴリ別にプロジェクトを検索し、固定バージョンの実装を確認できます。",
    privacy: "アクセス解析について",
    privacyText: "Cookie を使用しない軽量な Cloudflare Web Analytics を採用し、DNT/GPC を尊重した基本的な集計を行っています。"
  },
  ko: {
    agent: "Agent Skill 설치",
    agentText: "스킬을 설치하면 터미널이나 에이전트에서 분야별 프로젝트를 검색하고 고정 버전의 구현 근거를 바로 확인할 수 있습니다.",
    privacy: "통계 및 개인정보 보호",
    privacyText: "쿠키 없는 가벼운 Cloudflare Web Analytics를 사용하여 기본적인 통계를 집계하며 DNT/GPC 설정을 존중합니다."
  },
};
for (const locale of LOCALES) {
  const c=COPY[locale], t=text[locale], homepage=SITE+localePrefix(locale);
  const bannerFile=`public/banner${locale==='en'?'':locale==='zh'?'-zh':`-${locale}`}.svg`;
  const languageLabels = { zh: "简体中文", en: "English", ja: "日本語", ko: "한국어" };
  const languageNav = LOCALES.map(l => (l === locale ? `<b>${languageLabels[l]}</b>` : `<a href="${files[l]}">${languageLabels[l]}</a>`)).join(" &nbsp;•&nbsp; ");
  const skillAnchor = locale === 'zh' ? 'agent-skill-接入' : locale === 'en' ? 'install-the-agent-skill' : locale === 'ja' ? 'agent-skill-の導入' : 'agent-skill-설치';
  const catAnchor = locale === 'zh' ? '分类' : locale === 'en' ? 'categories' : locale === 'ja' ? 'カテゴリ' : '분류';
  const submitNavLabel = {
    zh: '🚀 <b>提交项目 (Issue 专用通道)</b>',
    en: '🚀 <b>Submit a project (Issue only)</b>',
    ja: '🚀 <b>プロジェクトを投稿 (Issue 経由)</b>',
    ko: '🚀 <b>프로젝트 제출 (Issue 전용)</b>'
  }[locale];
  const navLinks = [
    `<a href="${homepage}">🌐 <b>${c.explore} ↗</b></a>`,
    `<a href="#${skillAnchor}">🤖 <b>${additions[locale].agent}</b></a>`,
    `<a href="#${catAnchor}">📂 <b>${c.categories}</b></a>`,
    `<a href="${REPOSITORY}/issues/new?template=project.yml">${submitNavLabel}</a>`
  ].join(" &nbsp;｜&nbsp; ");
  const whyTitle = {
    zh: "💡 **为什么关注 Jev 与 System-1 决策架构？**",
    en: "💡 **Why Jev & System-1 Decision Architecture?**",
    ja: "💡 **なぜ Jev と System-1 意思決定アーキテクチャなのか？**",
    ko: "💡 **왜 Jev와 System-1 결정 아키텍처인가?**"
  }[locale];
  const whyBody = {
    zh: `构建自主智能体（Agent）时，如果把每一个分支选项都交给秒级响应的大推理模型（System 2），不仅**延迟高、成本高**，而且极易发生上下文漂移。\n\n**TypeSafe Jev（System 1）** 是专门针对离散选择、连续打分与概率优化的百毫秒级决策模型：\n- ⚡ **百毫秒内极速返回**：50–100ms 快速完成判定，保障 Agent 主循环高频敏捷。\n- 🎯 **原生确定性输出**：原生支持 \`Choice\`（多选一）、\`Score\`（打分）与 \`Noul\`（二元逻辑与概率），免去易碎的正则提取。\n- 🛡️ **严格拒绝概念炒作**：全网严选 **${projects.length}+** 个绑定真实公开开源源码版本的落地项目，覆盖 17 大核心工程赛道。`,
    en: `When building autonomous agents, routing every small branching decision to a heavy reasoning model (System 2) incurs seconds of latency, runaway token costs, and context drift.\n\n**TypeSafe Jev (System 1)** is purpose-built for fast, typed discrete decisions:\n- ⚡ **Sub-100ms Latency**: Delivers decisions in 50–100ms to keep agent loops snappy.\n- 🎯 **Native Typed Outputs**: Built-in primitives for \`Choice\`, \`Score\`, and \`Noul\` without fragile JSON regex parsing.\n- 🛡️ **Zero Vaporware**: ${projects.length}+ projects rigorously anchored to verifiable, commit-pinned public open source across 17 real-world domains.`,
    ja: `Agent を構築する際、すべての分岐判断を巨大な推論モデル（System 2）に委ねると、数秒の遅延と高いコスト、文脈ドリフトが発生します。\n\n**TypeSafe Jev（System 1）** は、離散選択、スコアリング、真偽値判定に特化した軽量モデルです：\n- ⚡ **100ms 未満の高速応答**：50–100ms で判断を完了し、Agent の高速ループを維持します。\n- 🎯 **ネイティブな型安全出力**：\`Choice\`、\`Score\`、\`Noul\` を直接返し、壊れやすい正規表現パースが不要です。\n- 🛡️ **誇大広告を排除**：17 の実用分野にわたる ${projects.length}+ 件の検証済みオープンソースコードのみを厳選掲載しています。`,
    ko: `에이전트를 구축할 때 모든 일상적인 분기 결정을 거대 추론 모델(System 2)에 맡기면 수 초의 지연 시간과 높은 비용, 문맥 왜곡이 발생합니다.\n\n**TypeSafe Jev (System 1)**는 빠른 타입 안전 결정을 위해 제작된 경량 모델입니다:\n- ⚡ **100ms 미만 초고속 응답**: 50–100ms 내에 결정을 내려 에이전트 루프의 민첩성을 유지합니다.\n- 🎯 **네이티브 타입 출력**: \`Choice\`, \`Score\`, \`Noul\`을 지원하여 취약한 JSON 정규식 파싱이 필요 없습니다.\n- 🛡️ **과대 광고 배제**: 17개 실제 엔지니어링 영역에 걸쳐 공개 소스 커밋이 검증된 ${projects.length}+개 프로젝트만을 엄선했습니다.`
  }[locale];

  const comparisonTable = {
    zh: `### 📊 架构分工对比：System 1 (Jev) vs System 2 (大推理模型)

| 核心维度 | System 2（大推理模型） | TypeSafe Jev（System 1 决策模型） |
| :--- | :--- | :--- |
| **响应时延** | 1,500ms – 5,000ms+（秒级高延迟） | **50ms – 100ms（百毫秒极速反射）** |
| **输出结构** | 自由文本 / 易损坏的 JSON 正则提取 | **原生强类型 \`Choice\`、\`Score\`、\`Noul\`** |
| **Token 成本** | 高昂（$1.00 – $15.00 / 1M tokens） | **极轻量（仅占常规调用的极小零头）** |
| **上下文稳定性** | 易产生幻觉、长对话注意力漂移 | **确定性状态输入，零格式幻觉** |
| **工程核心职责** | 宏观规划、长文本总结、开放生成 | **工具路由、动作选择、安全门禁、高频循环** |`,
    en: `### 📊 Architecture Comparison: System 1 (Jev) vs System 2 (Reasoning LLMs)

| Dimension | System 2 (Reasoning LLMs) | TypeSafe Jev (System 1 Radar) |
| :--- | :--- | :--- |
| **Latency** | 1,500ms – 5,000ms+ (Slow) | **50ms – 100ms (Sub-second reflex)** |
| **Output Type** | Unstructured text / fragile JSON regex | **Native typed \`Choice\`, \`Score\`, \`Noul\`** |
| **Token Economy** | High cost ($1.00 – $15.00 / 1M tokens) | **Ultra-lightweight (fraction of a cent)** |
| **Context Drift** | Prone to hallucinations & attention fade | **Deterministic bounded state machine** |
| **Primary Domain** | High-level planning, open-ended generation | **Tool routing, action dispatch, safety gates** |`,
    ja: `### 📊 アーキテクチャ比較：System 1 (Jev) vs System 2 (巨大推論モデル)

| 評価軸 | System 2（LLM / 巨大推論モデル） | TypeSafe Jev（System 1 レーダー） |
| :--- | :--- | :--- |
| **応答速度** | 1,500ms – 5,000ms+（数秒の遅延） | **50ms – 100ms（ミリ秒単位の即時判断）** |
| **出力形式** | 自由文 / 壊れやすい正規表現パース | **ネイティブな型安全 \`Choice\`, \`Score\`, \`Noul\`** |
| **トークン費用** | 高コスト ($1.00 – $15.00 / 1M tokens) | **超軽量（通常の呼び出しのわずかな一部）** |
| **文脈ドリフト** | ハルシネーションや指示見落としのリスク | **確定的な状態遷移、形式エラーなし** |
| **エンジニアリング役割** | 高度な計画立案、長文作成、発散的思考 | **ツール選定、アクション分岐、ガードレール** |`,
    ko: `### 📊 아키텍처 비교: System 1 (Jev) vs System 2 (거대 추론 모델)

| 평가 항목 | System 2 (거대 추론 모델) | TypeSafe Jev (System 1 레이더) |
| :--- | :--- | :--- |
| **응답 지연 시간** | 1,500ms – 5,000ms+ (수 초 지연) | **50ms – 100ms (초고속 반사 신경)** |
| **출력 형식** | 자유 텍스트 / 취약한 JSON 정규식 파싱 | **네이티브 타입 \`Choice\`, \`Score\`, \`Noul\`** |
| **토큰 비용** | 높은 비용 ($1.00 – $15.00 / 1M tokens) | **극도로 가벼움 (매우 적은 비용)** |
| **문맥 왜곡** | 환각 및 지시사항 누락 위험 | **결정론적 상태 기계, 무결점 형식** |
| **주요 역할** | 거시적 계획, 긴 텍스트 생성 | **도구 라우팅, 액션 선택, 안전 게이트** |`
  };

  const discoveryHighlights = {
    zh: `### 🎮 探索功能一览

- 🎰 **实体机械卡牌分发仓**：探索 Jev 原生决策点，支持连击抽卡计数与**逢 10 抽全屏粒子大烟花（💥 嘣！）**。
- ⚡ **毫秒级吸顶搜索与浮动过滤**：即便页面下滑，也可随时唤出浮动分类面板，支持多标签一键点选过滤。
- 🔍 **100% 绑定固定源码**：所有收录项目均核验真实 commit SHA 与具体接入点，绝无空气包装与死链。`,
    en: `### 🎮 Key Interactive Features

- 🎰 **Tactile Gacha Dispatcher**: Discover discrete decision points with real-time streak counting and **10-draw fireworks celebrations (💥 BOOM!)**.
- ⚡ **Sticky Search & Floating Popover Filter**: Filter tags and categories anytime while scrolling via the anchored toolbar popover.
- 🔍 **100% Commit-Pinned Code Evidence**: Every listed project links to immutable source files and explicit decision points.`,
    ja: `### 🎮 主なインタラクティブ機能

- 🎰 **物理カードディスペンサー**：Jev の判断箇所をランダムに発見。ドロー数のカウントと**10連ごとの花火演出（💥 BOOM!）**に対応。
- ⚡ **固定検索バーとフローティング絞り込み**：スクロール中も追従するツールバーから、いつでもカテゴリやタグで即座に絞り込み可能。
- 🔍 **100% コミット固定のソース検証**：全プロジェクトが公開ソースコードの具体的な判断行と直接リンクしています。`,
    ko: `### 🎮 주요 인터랙티브 기능

- 🎰 **피지컬 카드 디스펜서**: 실시간 연속 뽑기 카운트와 **10회 연속 축하 불꽃놀이 (💥 BOOM!)**로 Jev 결정 지점을 탐색합니다.
- ⚡ **고정 검색바 및 플로팅 필터**: 페이지를 스크롤하는 중에도 툴바에서 언제든지 태그와 카테고리를 즉시 필터링할 수 있습니다.
- 🔍 **100% 커밋 고정 소스 검증**: 수록된 모든 프로젝트는 공개 소스 코드의 구체적인 결정 지점과 직접 연결됩니다.`
  };

  const submissionTip = {
    zh: `> [!TIP]\n> **📢 项目收录通道**：欢迎大家提交自己的 Jev 开源项目！为保障格式规范与自动化索引，本项目**统一通过 [Issue 专用模板](${REPOSITORY}/issues/new?template=project.yml) 提交收录**，仓库**不接收 Pull Request**。填写仓库地址即可提交。\n\n`,
    en: `> [!TIP]\n> **Project Submissions**: We welcome your Jev projects! All project submissions and updates are handled **exclusively via [GitHub Issues](${REPOSITORY}/issues/new?template=project.yml)**. This repository **does not accept Pull Requests**. Simply fill out the issue template with your repository URL.\n\n`,
    ja: `> [!TIP]\n> **プロジェクトの投稿について**: Jev プロジェクトの推薦・投稿を歓迎します。本ディレクトリの収録・更新は **[GitHub Issue 専門テンプレート](${REPOSITORY}/issues/new?template=project.yml)** 経由でのみ受け付けており、Pull Request は受け付けておりません。\n\n`,
    ko: `> [!TIP]\n> **프로젝트 제출 안내**: Jev 프로젝트 제출을 환영합니다! 본 저장소는 **[GitHub Issue 전용 템플릿](${REPOSITORY}/issues/new?template=project.yml)**을 통해서만 등록을 진행하며, Pull Request는 받지 않습니다. 저장소 주소만 작성하여 제출해 주세요.\n\n`
  }[locale];

  let out = `<div align="center">\n\n` +
    `<a href="${homepage}"><img src="${bannerFile}" alt="Awesome Jev" width="100%" /></a>\n\n` +
    `# ${localeMeta[locale].title}\n\n` +
    `<p align="center">\n` +
    `  <a href="https://awesome.re"><img src="https://awesome.re/badge.svg" alt="Mentioned in Awesome" /></a>\n` +
    `  <a href="${homepage}"><img src="https://img.shields.io/badge/Live%20Radar-logicrw.github.io-d7fa91?style=flat-square&labelColor=1a201a&logo=safari" alt="Live Radar" /></a>\n` +
    `  <a href="#${catAnchor}"><img src="https://img.shields.io/badge/Curated%20Projects-${projects.length}%2B-2563eb?style=flat-square" alt="Projects Count" /></a>\n` +
    `  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-d97706.svg?style=flat-square" alt="License: MIT" /></a>\n` +
    `  <a href="${REPOSITORY}/issues/new?template=project.yml"><img src="https://img.shields.io/badge/Submissions-via%20Issue-16a34a.svg?style=flat-square" alt="Submissions via Issue" /></a>\n` +
    `</p>\n\n` +
    `<p align="center">\n  ${languageNav}\n</p>\n\n` +
    `<p align="center">\n  ${navLinks}\n</p>\n\n` +
    submissionTip +
    `</div>\n\n` +
    `## ${whyTitle}\n\n${whyBody}\n\n${comparisonTable[locale]}\n\n${discoveryHighlights[locale]}\n\n` +
    `> **[${c.explore} ↗](${homepage})** · **${projects.length} ${t.count}**\n\n` +
    `${c.aboutText}\n\n${t.scope}\n\n${t.public}\n\n`;

  out+=paidPlacementMarkdown(partners,locale)+`\n## ${additions[locale].agent}\n\n${additions[locale].agentText}\n\n\`\`\`bash\n${INSTALL_COMMANDS.join("\n")}\n\`\`\`\n\n[Agent Skill](${SITE}skill.md) · [llms.txt](${SITE}llms.txt) · [llms-full.txt](${SITE}llms-full.txt)\n\n`;
  out+=`## ${c.categories}\n\n`;
  const categories=[...new Set(projects.map(p=>p.category))].sort();
  for(const category of categories){const count=projects.filter(p=>p.category===category).length;out+=`- [${categoryLabel(category,locale)} (${count})](${SITE+categoryRoute(category,locale)})\n`;}
  for(const category of categories){
    out+=`\n## ${categoryLabel(category,locale)}\n\n`;
    const rows=projects.filter(p=>p.category===category).sort((a,b)=>(b.stars??0)-(a.stars??0)||a.name.localeCompare(b.name));
    for(const p of rows){
      out+=`- [**${md(p.name)}**](${p.url}) — ${md(projectCopy(p,'plainSummary',locale))}\n`;
      out+=`  - **${c.decision}**: ${md(projectCopy(p,'jevDecisionPoint',locale))}\n`;
      out+=`  - **${c.benefit}**: ${md(projectCopy(p,'highlightBenefit',locale))}\n`;
      out+=`  - [${t.details}](${SITE+projectRoute(p.id,locale)}) · ${c.license}: ${md(p.license||c.unknown)}\n\n`;
    }
  }
  out+=`## ${t.development}\n\nNode.js 22+\n\n\`\`\`bash\nnpm ci --ignore-scripts\nnpm run dev\nnpm test\nnpm run build\nnpm run build:readme\n\`\`\`\n\n## ${t.workflow}\n\n${t.flow}\n\n## ${additions[locale].privacy}\n\n${additions[locale].privacyText}\n\n## ${c.submit}\n\n${t.submission}\n\n[${c.submit}](${REPOSITORY}/issues/new?template=project.yml)\n\n## ${t.policies}\n\n- [${t.review}](docs/catalog-review-2026-09-19.md)\n- [Security](SECURITY.md)\n\n${t.warning}\n\nMIT © [logicrw](https://github.com/logicrw) · [X @0xLogicrw](https://x.com/0xLogicrw) — directory code only; project licenses are separate.\n`;
  await writeFile(new URL(files[locale],root),out);

  const subtitle=locale==='zh'?'System-1 Agent 架构雷达 · 把选择题交给 Jev':locale==='ja'?'System-1 Agent アーキテクチャ · 選択は Jev に':locale==='ko'?'System-1 Agent 아키텍처 · 선택은 Jev에':'System-1 Agent Architecture Radar · Let Jev choose';
  const pillLabel={zh:'SYSTEM-1 架构雷达 · 50–100ms 极速反射',en:'SYSTEM-1 DECISION RADAR · < 100ms REFLEX',ja:'SYSTEM-1 アーキテクチャ · 100ms 未満の応答',ko:'SYSTEM-1 결정 레이더 · 100ms 미만 반사'}[locale];
  const choiceSub={zh:'离散多选一',en:'N-Pick-1',ja:'離散選択',ko:'이산 선택'}[locale];
  const scoreSub={zh:'连续打分',en:'Continuous',ja:'連続スコア',ko:'연속 점수'}[locale];
  const noulSub={zh:'二元概率',en:'True / False',ja:'真偽値判定',ko:'참 / 거짓'}[locale];

  const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="1100" height="280" viewBox="0 0 1100 280" role="img" aria-label="Awesome Jev">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f150e"/>
      <stop offset="50%" stop-color="#141c13"/>
      <stop offset="100%" stop-color="#1b2419"/>
    </linearGradient>
    <radialGradient id="radarGlow" cx="880" cy="140" r="220" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#d7fa91" stop-opacity="0.18"/>
      <stop offset="50%" stop-color="#d7fa91" stop-opacity="0.05"/>
      <stop offset="100%" stop-color="#d7fa91" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="topGlow" cx="200" cy="40" r="300" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#7b5b28" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#7b5b28" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
      <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#263422" stroke-width="0.75" stroke-opacity="0.4"/>
      <circle cx="0" cy="0" r="1" fill="#43583b" fill-opacity="0.5"/>
    </pattern>
    <linearGradient id="brassGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#f5dfa8"/>
      <stop offset="50%" stop-color="#d9bc82"/>
      <stop offset="100%" stop-color="#997b42"/>
    </linearGradient>
  </defs>

  <rect width="1100" height="280" rx="18" fill="url(#bgGrad)"/>
  <rect width="1100" height="280" rx="18" fill="url(#grid)"/>
  <rect width="1100" height="280" rx="18" fill="url(#radarGlow)"/>
  <rect width="1100" height="280" rx="18" fill="url(#topGlow)"/>
  <rect x="1" y="1" width="1098" height="278" rx="17" fill="none" stroke="#33442e" stroke-width="1.2"/>

  <g transform="translate(48, 36)">
    <rect width="${locale==='en'?320:locale==='zh'?320:300}" height="28" rx="14" fill="#1b251a" stroke="#3d4f37" stroke-width="1"/>
    <circle cx="14" cy="14" r="4.5" fill="#d7fa91"/>
    <circle cx="14" cy="14" r="7.5" fill="none" stroke="#d7fa91" stroke-width="1" stroke-opacity="0.4"/>
    <text x="28" y="18" font-family="'JetBrains Mono', ui-monospace, monospace" font-size="11" font-weight="600" fill="#d7fa91" letter-spacing="0.5">${escapeHTML(pillLabel)}</text>
  </g>

  <text x="48" y="118" font-family="'Inter', -apple-system, sans-serif" font-size="52" font-weight="800" letter-spacing="-1.5" fill="#f4f7f0">Awesome Jev</text>
  <text x="48" y="156" font-family="'Inter', -apple-system, 'PingFang SC', 'Yu Gothic', 'Malgun Gothic', sans-serif" font-size="16" font-weight="400" fill="#9ab090">${escapeHTML(subtitle)}</text>

  <g transform="translate(48, 192)">
    <g transform="translate(0, 0)">
      <rect width="140" height="34" rx="8" fill="#1a2419" stroke="#384a33" stroke-width="1"/>
      <text x="12" y="22" font-size="14">⚡</text>
      <text x="32" y="21" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="600" fill="#d7fa91">Choice</text>
      <text x="82" y="21" font-family="sans-serif" font-size="10" fill="#798e72">${escapeHTML(choiceSub)}</text>
    </g>
    <g transform="translate(150, 0)">
      <rect width="140" height="34" rx="8" fill="#1a2419" stroke="#384a33" stroke-width="1"/>
      <text x="12" y="22" font-size="14">🎯</text>
      <text x="32" y="21" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="600" fill="#d7fa91">Score</text>
      <text x="76" y="21" font-family="sans-serif" font-size="10" fill="#798e72">${escapeHTML(scoreSub)}</text>
    </g>
    <g transform="translate(300, 0)">
      <rect width="140" height="34" rx="8" fill="#1a2419" stroke="#384a33" stroke-width="1"/>
      <text x="12" y="22" font-size="14">🛡️</text>
      <text x="32" y="21" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="600" fill="#d7fa91">Noul</text>
      <text x="70" y="21" font-family="sans-serif" font-size="10" fill="#798e72">${escapeHTML(noulSub)}</text>
    </g>
    <g transform="translate(450, 0)">
      <rect width="158" height="34" rx="8" fill="#231b12" stroke="#685026" stroke-width="1"/>
      <text x="12" y="22" font-size="13">⚡</text>
      <text x="30" y="21" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600" fill="#f0ca7d">&lt; 100ms Latency</text>
    </g>
  </g>

  <g transform="translate(880, 140)">
    <circle r="110" fill="none" stroke="#2c3b28" stroke-width="1" stroke-dasharray="4 4"/>
    <circle r="80" fill="none" stroke="#34462f" stroke-width="1"/>
    <circle r="50" fill="none" stroke="#3d5337" stroke-width="1"/>
    <circle r="20" fill="none" stroke="#486241" stroke-width="1"/>
    <line x1="-120" y1="0" x2="120" y2="0" stroke="#2c3b28" stroke-width="1"/>
    <line x1="0" y1="-120" x2="0" y2="120" stroke="#2c3b28" stroke-width="1"/>
    <line x1="-85" y1="-85" x2="85" y2="85" stroke="#243020" stroke-width="1" stroke-dasharray="2 3"/>
    <line x1="-85" y1="85" x2="85" y2="-85" stroke="#243020" stroke-width="1" stroke-dasharray="2 3"/>
    <path d="M 0 0 L 85 -75 A 110 110 0 0 1 110 0 Z" fill="#d7fa91" fill-opacity="0.08"/>

    <g transform="translate(45, -35)">
      <circle r="4" fill="#d7fa91"/>
      <circle r="8" fill="none" stroke="#d7fa91" stroke-width="1" stroke-opacity="0.5"/>
    </g>
    <g transform="translate(-55, 42)">
      <circle r="3.5" fill="#f0ca7d"/>
      <circle r="7" fill="none" stroke="#f0ca7d" stroke-width="0.8" stroke-opacity="0.4"/>
    </g>
    <g transform="translate(68, 50)">
      <circle r="3" fill="#d7fa91" fill-opacity="0.8"/>
    </g>
    <g transform="translate(-32, -65)">
      <circle r="3" fill="#d7fa91" fill-opacity="0.7"/>
    </g>

    <g transform="translate(-24, -26) scale(0.32)">
      <rect x="15" y="20" width="120" height="110" rx="28" fill="#1e271c" stroke="#5d7253" stroke-width="4"/>
      <circle cx="75" cy="72" r="32" fill="url(#brassGrad)" stroke="#1a201a" stroke-width="3"/>
      <circle cx="75" cy="72" r="22" fill="#131912"/>
      <circle cx="75" cy="72" r="12" fill="#d7fa91"/>
      <circle cx="79" cy="68" r="4" fill="#ffffff"/>
      <line x1="75" y1="20" x2="75" y2="-8" stroke="#d9bc82" stroke-width="4" stroke-linecap="round"/>
      <circle cx="75" cy="-12" r="7" fill="#d7fa91"/>
    </g>

    <g transform="translate(-75, 95)">
      <rect width="150" height="24" rx="12" fill="#182216" stroke="#41543a" stroke-width="1"/>
      <text x="75" y="16" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="600" fill="#d7fa91">${projects.length} VERIFIED REPOS</text>
    </g>
  </g>
</svg>\n`;
  await writeFile(new URL(`public/banner${locale==='en'?'':locale==='zh'?'-zh':`-${locale}`}.svg`,root),svg);
}
const skillPath = new URL("public/skill.md", root);
const skill = (await readFile(skillPath, "utf8")).replace(/<!-- paid-placement:start -->[\s\S]*?<!-- paid-placement:end -->/, `<!-- paid-placement:start -->\n${paidPlacementMarkdown(partners)}<!-- paid-placement:end -->`);
for (const path of SKILL_COPIES) await writeFile(new URL(path, root), skill);
const discoveryPath = new URL("public/.well-known/agent-skills/index.json",root);
const discovery = JSON.parse(await readFile(discoveryPath,"utf8"));
for (const entry of discovery.skills) if (entry.name === "awesome-jev") entry.digest = `sha256:${createHash("sha256").update(skill).digest("hex")}`;
await writeFile(discoveryPath,JSON.stringify(discovery,null,2)+"\n");
const docs = machineDocuments(projects, partners);
await writeFile(new URL("public/llms.txt",root),docs.llms);
await writeFile(new URL("public/llms-full.txt",root),docs.full);
await writeFile(new URL("public/sitemap.xml",root),`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${[...LOCALES.map(localePrefix),...MACHINE_RESOURCES].map((route)=>`<url><loc>${escapeHTML(SITE+route)}</loc></url>`).join("\n")}</urlset>\n`);
console.log(`Generated four source-aligned READMEs and banners for ${projects.length} projects.`);
