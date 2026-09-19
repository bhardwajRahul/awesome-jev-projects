export const SITE = "https://logicrw.github.io/awesome-jev-projects/";
export const BASE = "/awesome-jev-projects/";
export const REPOSITORY = "https://github.com/logicrw/awesome-jev-projects";
export const LOCALES = ["zh", "en", "ja", "ko"];
export const COPY = {
  zh: {
    lang: "zh-CN", og: "zh_CN", suffix: "", name: "中文",
    title: "Awesome Jev — System-1 Agent 架构雷达",
    description: "查找 TypeSafe Jev 的开源项目、SDK、Agent 工具和集成示例。按场景浏览用途、Jev 决策点与固定版本源码，支持中文、English、日本語和한국어。",
    catalog: "完整项目目录", explore: "搜索与筛选", categories: "分类", source: "GitHub 仓库",
    decision: "Jev 在哪一步做判断", benefit: "这个项目的用途", evidence: "源码与说明", limits: "核查范围",
    review: "目录核查", related: "同类项目", back: "返回目录", about: "关于 Awesome Jev",
    aboutText: "由社区维护的 Jev 项目与架构雷达，收录具有公开源码与清晰集成逻辑的开源项目，帮助开发者快速探索和落地 System-1 决策架构。",
    model: "Jev 是什么？", modelText: "Jev 是 TypeSafe 的决策模型。这里按实际接入方式整理选择、评分和概率判断等用途，并链接项目实现，方便你判断是否适合自己的任务。",
    criteria: "怎样收录？", criteriaText: "优先收录公开开源、能清晰定位 Jev 实现逻辑的项目。未公开源码或无法核实的仓库不纳入主目录。Star 数反映社区关注热度。",
    submit: "提交项目", contact: "联系维护者", languages: "语言", date: "源码核查日期", license: "许可证", unknown: "未声明",
    fallback: "中文或英文原文", noIndependent: "已核对公开源码与实际接入逻辑。",
  },
  en: {
    lang: "en", og: "en_US", suffix: "En", name: "English",
    title: "Awesome Jev — System-1 Agent Architecture Radar",
    description: "Find open-source TypeSafe Jev projects, SDKs, Agent tools and integration examples. Browse use cases, decision points and fixed-version source evidence in four languages.",
    catalog: "Complete project directory", explore: "Search and filter", categories: "Categories", source: "GitHub repository",
    decision: "Where Jev makes a decision", benefit: "What this project offers", evidence: "Sources and implementation", limits: "Review scope",
    review: "Catalog review", related: "Related projects", back: "Back to directory", about: "About Awesome Jev",
    aboutText: "A community-maintained directory and radar for Jev, highlighting open-source projects with verified code and clear decision architectures.",
    model: "What is Jev?", modelText: "Jev is TypeSafe's decision model. This directory groups projects by how they use choices, scores and probability judgements, with implementation links to help you assess fit for your own task.",
    criteria: "What gets listed?", criteriaText: "We prioritize open-source projects with clear Jev implementation evidence. Repositories without verifiable source code are excluded from the main directory.",
    submit: "Submit a project", contact: "Contact maintainer", languages: "Languages", date: "Source reviewed", license: "License", unknown: "Not declared",
    fallback: "Original Chinese or English text", noIndependent: "Public sources and integration logic reviewed.",
  },
  ja: {
    lang: "ja", og: "ja_JP", suffix: "Ja", name: "日本語",
    title: "Awesome Jev — System-1 Agent アーキテクチャ",
    description: "TypeSafe Jev のオープンソースプロジェクト、SDK、Agent ツール、連携事例を検索。用途、判断を行う箇所、固定バージョンのソースを4言語で確認できます。",
    catalog: "全プロジェクト一覧", explore: "検索・絞り込み", categories: "カテゴリ", source: "GitHub リポジトリ",
    decision: "Jev が判断する箇所", benefit: "このプロジェクトの用途", evidence: "ソースと実装", limits: "確認の範囲",
    review: "掲載内容の確認", related: "同じカテゴリのプロジェクト", back: "一覧に戻る", about: "Awesome Jev について",
    aboutText: "コミュニティによって運営される Jev プロジェクトカタログです。公開ソースコードと明確な設計を持つオープンソースプロジェクトを整理し、開発者のアーキテクチャ選定を支援します。",
    model: "Jev とは？", modelText: "Jev は TypeSafe の判断モデルです。選択、スコア、確率判断を実際にどう使っているかでプロジェクトを分類し、用途に合うか確認できる実装リンクを掲載しています。",
    criteria: "掲載基準は？", criteriaText: "Jev の実装箇所が確認できる公開プロジェクトを優先します。ソースコードが確認できないリポジトリは掲載対象外としています。",
    submit: "プロジェクトを投稿", contact: "管理者に連絡", languages: "言語", date: "ソース確認日", license: "ライセンス", unknown: "記載なし",
    fallback: "中国語または英語の原文", noIndependent: "公開ソースと連携ロジックを確認済み。",
  },
  ko: {
    lang: "ko", og: "ko_KR", suffix: "Ko", name: "한국어",
    title: "Awesome Jev — System-1 Agent 아키텍처 레이더",
    description: "TypeSafe Jev 오픈 소스 프로젝트, SDK, Agent 도구와 연동 사례를 찾아보세요. 용도, 판단 지점, 고정 버전 소스 근거를 네 가지 언어로 제공합니다.",
    catalog: "전체 프로젝트 목록", explore: "검색 및 필터", categories: "분류", source: "GitHub 저장소",
    decision: "Jev가 판단하는 지점", benefit: "프로젝트의 용도", evidence: "소스 및 구현", limits: "검토 범위",
    review: "목록 검토", related: "같은 분류의 프로젝트", back: "목록으로 돌아가기", about: "Awesome Jev 소개",
    aboutText: "커뮤니티가 운영하는 Jev 프로젝트 디렉터리로, 공개 소스 코드와 명확한 결정 아키텍처를 갖춘 오픈소스 프로젝트를 선별하여 제공합니다.",
    model: "Jev란?", modelText: "Jev는 TypeSafe의 판단 모델입니다. 선택, 점수 및 확률 판단의 실제 활용 방식에 따라 프로젝트를 분류하고, 작업에 적합한지 확인할 수 있도록 구현 링크를 제공합니다.",
    criteria: "수록 기준은?", criteriaText: "Jev 구현을 명확히 확인할 수 있는 오픈소스 프로젝트를 우선합니다. 소스 코드를 확인할 수 없는 저장소는 메인 목록에서 제외됩니다.",
    submit: "프로젝트 제출", contact: "관리자에게 연락", languages: "언어", date: "소스 확인일", license: "라이선스", unknown: "명시되지 않음",
    fallback: "중국어 또는 영어 원문", noIndependent: "공개 소스와 연동 논리를 확인했습니다.",
  },
};

export function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
}
export function safeJSON(value) {
  return JSON.stringify(value).replace(/</g, "\\u003c").replace(/>/g, "\\u003e").replace(/&/g, "\\u0026").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
}
export const localePrefix = (locale) => locale === "zh" ? "" : `${locale}/`;
export function projectRoute(id, locale = "zh") {
  const parts = id.split(":");
  if (parts.length < 1 || parts.length > 2 || parts.some((p) => !/^[a-z\d][a-z\d._-]*$/i.test(p) || p === "." || p === "..")) throw new Error("Invalid public project identity");
  return `${localePrefix(locale)}projects/${parts.map(encodeURIComponent).join("/")}/`;
}
export const categorySlug = (category) => category.toLowerCase().replace(/[^a-z\d]+/g, "-").replace(/^-|-$/g, "");
export const categoryRoute = (category, locale = "zh") => `${localePrefix(locale)}categories/${categorySlug(category)}/`;
export function projectCopy(project, field, locale) {
  const value = project[`${field}${COPY[locale].suffix}`];
  if (typeof value === "string" && value.trim()) return value;
  if (field === "claimStatus") return COPY[locale].noIndependent;
  return project[`${field}En`] || project[field] || "";
}
export function pageHead({ locale, title, description, route, alternates, schema, indexable = true }) {
  const c = COPY[locale], canonical = SITE + route;
  const graph = schema["@graph"] ?? [Object.fromEntries(Object.entries(schema).filter(([key]) => key !== "@context"))];
  const structuredData = { "@context": "https://schema.org", "@graph": [...graph, {
    "@type": "DataFeed", "@id": SITE + "#agent-skill", name: "Awesome Jev Agent Skill",
    url: SITE + "skill.md", encodingFormat: "text/markdown",
    description: "Instructions and structured data for finding Jev projects, with source evidence and review limits.",
  }] };
  return `<meta name="theme-color" content="#fafaf8" />
<meta name="description" content="${escapeHTML(description)}" />
<title>${escapeHTML(title)}</title>
<link rel="canonical" href="${escapeHTML(canonical)}" />
<link rel="alternate" type="text/markdown" title="Agent Skill" href="${SITE}skill.md" />
<link rel="agent-skill" href="${SITE}skill.md" />
<link rel="alternate" type="text/markdown" title="LLM Directory" href="${SITE}llms.txt" />
${LOCALES.map((l) => `<link rel="alternate" hreflang="${COPY[l].lang}" href="${SITE + alternates(l)}" />`).join("\n")}
<link rel="alternate" hreflang="x-default" href="${SITE + alternates("en")}" />
<meta name="robots" content="${indexable ? "index,follow,max-image-preview:large" : "noindex,follow"}" />
<meta property="og:type" content="website" /><meta property="og:site_name" content="Awesome Jev" />
<meta property="og:locale" content="${c.og}" /><meta property="og:title" content="${escapeHTML(title)}" />
<meta property="og:description" content="${escapeHTML(description)}" /><meta property="og:url" content="${canonical}" />
<meta property="og:image" content="${SITE}og-card.png?v=visual-20260919" /><meta property="og:image:width" content="1200" /><meta property="og:image:height" content="630" />
<meta name="twitter:card" content="summary_large_image" /><meta name="twitter:creator" content="@0xLogicrw" />
<meta name="twitter:title" content="${escapeHTML(title)}" /><meta name="twitter:description" content="${escapeHTML(description)}" />
<meta name="twitter:image" content="${SITE}og-card.png?v=visual-20260919" />
<script type="application/ld+json">${safeJSON(structuredData)}</script>`;
}

export const MACHINE_RESOURCES = ["projects.json", "llms.txt", "llms-full.txt", "skill.md", ".well-known/skills/index.json", ".well-known/agent-skills/index.json", ".well-known/skills/default/skill.md", ".well-known/skills/awesome-jev/SKILL.md", ".well-known/agent-skills/awesome-jev/SKILL.md"];
export const SKILL_COPIES = ["SKILL.md", "skills/awesome-jev/SKILL.md", "public/skill.md", "public/.well-known/skills/default/skill.md", "public/.well-known/skills/awesome-jev/SKILL.md", "public/.well-known/agent-skills/awesome-jev/SKILL.md"];
export const INSTALL_COMMANDS = ["npx skills add logicrw/awesome-jev-projects", "npx skills add https://logicrw.github.io/awesome-jev-projects/"];
export const markdownText = (value) => String(value ?? "").replace(/[\\`*_[\]<>]/g, (char) => `\\${char}`).replace(/\s+/g, " ");
const markdownUrl = (value) => String(value).replace(/[()]/g, (char) => char === "(" ? "%28" : "%29");

// Only pass partners admitted by activeSponsors. Paid placements never alter catalog rows.
export function paidPlacementMarkdown(partners, locale = "en") {
  const title = { zh: "赞助合作 · 付费展示", en: "Sponsorship · Paid placements", ja: "スポンサー · 有料掲載", ko: "스폰서십 · 유료 게재" }[locale];
  const empty = { zh: "首发合作伙伴招募中，目前没有付费赞助商。", en: "Founding partner slots are open. There are no paid sponsors yet.", ja: "最初のパートナーを募集中です。現在、有料スポンサーはいません。", ko: "첫 파트너를 모집합니다. 현재 유료 스폰서는 없습니다." }[locale];
  const note = { zh: "赞助不影响收录审核、项目描述或自然排序。", en: "Sponsorship does not change inclusion review, project descriptions, or organic ranking.", ja: "スポンサー契約は掲載審査、説明、通常の表示順を変えません。", ko: "스폰서십은 수록 심사, 설명 또는 일반 정렬 순서를 바꾸지 않습니다." }[locale];
  const link = { zh: "查看合作方案与联系方式", en: "Plans and contact", ja: "プランとお問い合わせ", ko: "플랜 및 문의" }[locale];
  const body = partners.length ? partners.map((p) => `${p.logo ? `[![${markdownText(p.name)}](${SITE + p.logo})](${markdownUrl(p.url)})\n\n` : ""}- **Sponsored**: [${markdownText(p.name)}](${markdownUrl(p.url)}) — ${markdownText(p.description[locale] || p.description.en)} (${markdownText(p.tier)}; ${p.startsAt.slice(0,10)}–${p.endsAt.slice(0,10)})`).join("\n\n") : empty;
  return `## ${title}\n\n${body}\n\n[${link}](${REPOSITORY}/blob/main/SPONSORING.md) · [Sponsors](${REPOSITORY}/blob/main/SPONSORS.md)\n\n${note}\n`;
}

export function machineDocuments(projects, partners) {
  const intro = `# Awesome Jev\n\nThe definitive community radar and directory for TypeSafe Jev and System-1 Agent architecture projects. Every listed project is verified against commit-pinned public open source code.\n\nWebsite: ${SITE}\nRepository: ${REPOSITORY}\nCatalog entries: ${projects.length}\n\n## Install the Agent Skill\n\n\`\`\`bash\n${INSTALL_COMMANDS.join("\n")}\n\`\`\`\n\n## Machine-readable resources\n${MACHINE_RESOURCES.map((path) => `- [${path}](${SITE + path})`).join("\n")}\n`;
  const languages = `\n## Language directories\n${LOCALES.map((l)=>`- [${{zh:"Chinese",en:"English",ja:"Japanese",ko:"Korean"}[l]}](${SITE+localePrefix(l)}catalog/)`).join("\n")}\n`;
  const categories = `\n## Categories\n${[...new Set(projects.map((p)=>p.category))].sort().map((category)=>`- [${markdownText(category)}](${SITE+categoryRoute(category,"en")}): ${projects.filter((p)=>p.category===category).length}`).join("\n")}\n`;
  const disclosure = "\n" + paidPlacementMarkdown(partners);
  const full = projects.map((p)=>`## ${markdownText(p.name)}\n\n${markdownText(projectCopy(p,"plainSummary","en"))}\n\n- Repository: ${p.url}\n- Category: ${markdownText(p.category)}\n- Jev decision: ${markdownText(projectCopy(p,"jevDecisionPoint","en"))}\n- Purpose: ${markdownText(projectCopy(p,"highlightBenefit","en"))}\n- Review scope: ${markdownText(projectCopy(p,"claimStatus","en"))}\n- License: ${markdownText(p.license || "Not declared")}\n- Details: ${SITE+projectRoute(p.id,"en")}\n${(p.evidence??[]).slice(0,12).map((item)=>`- Source evidence: ${item.url}`).join("\n")}\n`).join("\n");
  return { llms: intro + languages + categories + disclosure, full: intro + languages + disclosure + "\n## Complete project catalog\n\n" + full };
}
