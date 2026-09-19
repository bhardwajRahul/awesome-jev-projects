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
  const navLinks = [
    `<a href="${homepage}">🌐 <b>${c.explore} ↗</b></a>`,
    `<a href="#${skillAnchor}">🤖 <b>${additions[locale].agent}</b></a>`,
    `<a href="#${catAnchor}">📂 <b>${c.categories}</b></a>`,
    `<a href="${REPOSITORY}/issues/new?template=project.yml">🚀 <b>${c.submit}</b></a>`
  ].join(" &nbsp;｜&nbsp; ");
  const whyTitle = {
    zh: "💡 为什么关注 Jev 与 System-1 决策架构？",
    en: "💡 Why Jev & System-1 Decision Architecture?",
    ja: "💡 なぜ Jev と System-1 意思決定アーキテクチャなのか？",
    ko: "💡 왜 Jev와 System-1 결정 아키텍처인가?"
  }[locale];
  const whyBody = {
    zh: "构建自主智能体（Agent）时，如果把每一个分支选项都交给秒级响应的大推理模型（System 2），不仅**延迟高、成本高**，而且极易发生上下文漂移。\n\n**TypeSafe Jev（System 1）** 是专门针对离散选择、连续打分与概率优化的百毫秒级决策模型：\n- ⚡ **百毫秒内极速返回**：50–100ms 快速完成判定，保障 Agent 主循环高频敏捷。\n- 🎯 **原生确定性输出**：原生支持 `Choice`（多选一）、`Score`（打分）与 `Noul`（二元逻辑与概率），免去易碎的正则提取。\n- 🛡️ **严格拒绝概念炒作**：全网严选 **267+** 个绑定真实公开开源源码版本的落地项目，覆盖 17 大核心工程赛道。",
    en: "When building autonomous agents, routing every small branching decision to a heavy reasoning model (System 2) incurs seconds of latency, runaway token costs, and context drift.\n\n**TypeSafe Jev (System 1)** is purpose-built for fast, typed discrete decisions:\n- ⚡ **Sub-100ms Latency**: Delivers decisions in 50–100ms to keep agent loops snappy.\n- 🎯 **Native Typed Outputs**: Built-in primitives for `Choice`, `Score`, and `Noul` without fragile JSON regex parsing.\n- 🛡️ **Zero Vaporware**: 267+ projects rigorously anchored to verifiable, commit-pinned public open source across 17 real-world domains.",
    ja: "Agent を構築する際、すべての分岐判断を巨大な推論モデル（System 2）に委ねると、数秒の遅延と高いコスト、文脈ドリフトが発生します。\n\n**TypeSafe Jev（System 1）** は、離散選択、スコアリング、真偽値判定に特化した軽量モデルです：\n- ⚡ **100ms 未満の高速応答**：50–100ms で判断を完了し、Agent の高速ループを維持します。\n- 🎯 **ネイティブな型安全出力**：`Choice`、`Score`、`Noul` を直接返し、壊れやすい正規表現パースが不要です。\n- 🛡️ **誇大広告を排除**：17 の実用分野にわたる 267+ 件の検証済みオープンソースコードのみを厳選掲載しています。",
    ko: "에이전트를 구축할 때 모든 일상적인 분기 결정을 거대 추론 모델(System 2)에 맡기면 수 초의 지연 시간과 높은 비용, 문맥 왜곡이 발생합니다.\n\n**TypeSafe Jev (System 1)**는 빠른 타입 안전 결정을 위해 제작된 경량 모델입니다:\n- ⚡ **100ms 미만 초고속 응답**: 50–100ms 내에 결정을 내려 에이전트 루프의 민첩성을 유지합니다.\n- 🎯 **네이티브 타입 출력**: `Choice`, `Score`, `Noul`을 지원하여 취약한 JSON 정규식 파싱이 필요 없습니다.\n- 🛡️ **과대 광고 배제**: 17개 실제 엔지니어링 영역에 걸쳐 공개 소스 커밋이 검증된 267+개 프로젝트만을 엄선했습니다."
  }[locale];

  let out = `<div align="center">\n\n` +
    `<a href="${homepage}"><img src="${bannerFile}" alt="Awesome Jev" width="100%" /></a>\n\n` +
    `# ${localeMeta[locale].title}\n\n` +
    `<p align="center">\n` +
    `  <a href="https://awesome.re"><img src="https://awesome.re/badge.svg" alt="Mentioned in Awesome" /></a>\n` +
    `  <a href="${homepage}"><img src="https://img.shields.io/badge/Live%20Radar-logicrw.github.io-d7fa91?style=flat-square&labelColor=1a201a&logo=safari" alt="Live Radar" /></a>\n` +
    `  <a href="#${catAnchor}"><img src="https://img.shields.io/badge/Curated%20Projects-${projects.length}%2B-2563eb?style=flat-square" alt="Projects Count" /></a>\n` +
    `  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-d97706.svg?style=flat-square" alt="License: MIT" /></a>\n` +
    `  <a href="${REPOSITORY}/issues/new?template=project.yml"><img src="https://img.shields.io/badge/PRs-Welcome-16a34a.svg?style=flat-square" alt="PRs Welcome" /></a>\n` +
    `</p>\n\n` +
    `<p align="center">\n  ${languageNav}\n</p>\n\n` +
    `<p align="center">\n  ${navLinks}\n</p>\n\n` +
    `</div>\n\n` +
    `${whyTitle}\n\n${whyBody}\n\n` +
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
  out+=`## ${t.development}\n\nNode.js 22+\n\n\`\`\`bash\nnpm ci --ignore-scripts\nnpm run dev\nnpm test\nnpm run build\nnpm run build:readme\n\`\`\`\n\n## ${t.workflow}\n\n${t.flow}\n\n## ${additions[locale].privacy}\n\n${additions[locale].privacyText}\n\n## ${c.submit}\n\n${t.submission}\n\n[${c.submit}](${REPOSITORY}/issues/new?template=project.yml)\n\n## ${t.policies}\n\n- [${t.review}](docs/catalog-review-2026-09-19.md)\n- [Security](SECURITY.md)\n\n${t.warning}\n\nMIT © [logicrw](https://github.com/logicrw) — directory code only; project licenses are separate.\n`;
  await writeFile(new URL(files[locale],root),out);
  const subtitle=locale==='zh'?'System-1 Agent 架构雷达 · 把选择题交给 Jev':locale==='ja'?'System-1 Agent アーキテクチャ · 選択は Jev に':locale==='ko'?'System-1 Agent 아키텍처 · 선택은 Jev에':'System-1 Agent Architecture Radar · Let Jev choose';
  const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="1100" height="240" viewBox="0 0 1100 240" role="img" aria-label="Awesome Jev"><rect width="1100" height="240" rx="16" fill="#fafaf8"/><rect x="1" y="1" width="1098" height="238" rx="15" fill="none" stroke="#d5dbcf"/><rect x="46" y="69" width="60" height="60" rx="14" fill="#263422"/><path d="M80 80 62 102h15l-6 19 21-27H78l7-14" fill="#d7fa91"/><text x="128" y="116" font-family="Inter,Arial,sans-serif" font-size="48" font-weight="700" letter-spacing="-1.4" fill="#20271e">Awesome Jev</text><text x="48" y="177" font-family="Inter,Arial,'PingFang SC','Yu Gothic','Malgun Gothic',sans-serif" font-size="22" fill="#53614d">${escapeHTML(subtitle)}</text><path d="M891 82h102m-24-18 24 18-24 18" fill="none" stroke="#7b5b28" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>\n`;
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
