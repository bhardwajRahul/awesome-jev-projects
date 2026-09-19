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
  zh: { count:"个项目", public:"许可依各项目而定；未声明或自定义许可会单独标明。", scope:"已核对固定版本说明与源码；不代表独立运行、性能复测、安全审计或收益保证。协议兼容实现会明确注明底层模型。", development:"本地开发", workflow:"自动化与安全边界", flow:"网站只发布白名单静态数据，不提供 GitHub 登录，也不接触账户凭据。Actions 采用短期仓库 Token，按 job 最小授权：抓取和构建只读，发布仅修改允许的数据路径；Pages 发布与 Issue 回复单独授权。第三方项目代码不会被下载执行。个人 PAT 和失效的 GitHub Models Secret 不注入工作流。", submission:"请提供仓库根链接、用途、Jev 的实际判断位置与源码证据。效果数据需附测试条件；不能把 mock、paper trading 或影子建议说成真实生产效果。自动检查不足时保留待审，不能冒充已确认。", policies:"收录与安全说明", details:"项目详情与固定源码", readme:"生成四语 README", review:"本轮目录审核记录", warning:"发现安全问题请勿在公开 Issue 中粘贴 Token、私钥或其他凭据。" },
  en: { count:"projects", public:"Licensing belongs to each project; missing and custom licenses are identified separately.", scope:"Fixed-version descriptions and source were checked. This is not independent execution, benchmarking, a security audit or a profitability guarantee. Compatible implementations identify their underlying model.", development:"Local development", workflow:"Automation and security boundaries", flow:"The website serves allowlisted static data, has no GitHub login and handles no account credentials. Actions use short-lived repository tokens with job-level least privilege: read-only collection and builds, narrowly scoped data publication, and separate Pages and Issue permissions. Submitted code is never executed. Personal PATs and retired GitHub Models secrets are not injected into workflows.", submission:"Provide a repository root URL, purpose, the exact Jev decision point and implementation evidence. Measurements need test conditions; mock results, paper trading and shadow advice must not be presented as production outcomes. Insufficient evidence stays pending review.", policies:"Editorial and security notes", details:"Project details and fixed source", readme:"Generate four-language READMEs", review:"Catalog audit record", warning:"Never paste tokens, private keys or other credentials into public security reports." },
  ja: { count:"件のプロジェクト", public:"利用条件は各プロジェクトのライセンスに従います。未記載・独自ライセンスは別途表示します。", scope:"固定バージョンの説明とソースを確認しています。独立した実行、性能測定、安全性監査や収益保証ではありません。互換実装は使用する基盤モデルを明示します。", development:"ローカル開発", workflow:"自動化とセキュリティの境界", flow:"サイトは許可リストに含まれる静的データのみを配信し、GitHub ログインやアカウント認証情報を扱いません。Actions は短期のリポジトリ Token を使用し、収集・ビルドは読み取り専用、データ公開・Pages・Issue 操作は個別の最小権限で実行します。投稿されたコードを実行せず、個人 PAT や終了した GitHub Models の Secret も注入しません。", submission:"リポジトリのルート URL、用途、Jev が判断する箇所、実装の根拠を添えてください。数値には測定条件が必要です。mock、模擬取引、shadow の助言を本番運用の結果として扱いません。根拠が不十分な場合は確認待ちとなります。", policies:"掲載基準とセキュリティ", details:"詳細と固定バージョンのソース", readme:"4言語の README を生成", review:"掲載内容の確認記録", warning:"公開の問題報告に Token、秘密鍵などの認証情報を貼り付けないでください。" },
  ko: { count:"개 프로젝트", public:"사용 조건은 각 프로젝트의 라이선스를 따릅니다. 미명시 및 사용자 정의 라이선스는 따로 표시합니다.", scope:"고정 버전의 설명과 소스를 확인했습니다. 독립적인 실행, 성능 측정, 보안 감사나 수익 보장은 아닙니다. 호환 구현은 실제 기반 모델을 명시합니다.", development:"로컬 개발", workflow:"자동화 및 보안 경계", flow:"사이트는 허용 목록의 정적 데이터만 제공하며 GitHub 로그인이나 계정 자격 증명을 다루지 않습니다. Actions는 단기 저장소 Token과 작업별 최소 권한을 사용합니다. 수집과 빌드는 읽기 전용이며, 데이터 게시·Pages·Issue 권한은 분리됩니다. 제출된 코드를 실행하지 않고 개인 PAT나 종료된 GitHub Models Secret도 주입하지 않습니다.", submission:"저장소 루트 URL, 용도, Jev의 실제 판단 지점 및 구현 근거를 제공하세요. 측정값에는 테스트 조건이 필요합니다. mock 결과, 모의 거래, shadow 조언을 실제 운영 결과로 표현하지 않습니다. 근거가 부족하면 검토 대기 상태로 남습니다.", policies:"수록 기준 및 보안 안내", details:"상세 설명 및 고정 버전 소스", readme:"네 언어의 README 생성", review:"목록 검토 기록", warning:"공개 문제 보고에 Token, 개인 키 또는 기타 자격 증명을 붙여 넣지 마세요." },
};
const additions = {
  zh: { agent: "Agent Skill 接入", agentText: "安装技能后，可按用途查询目录、读取固定版本源码证据与核查范围。收录不等于运行效果或安全认证。", privacy: "隐私与流量透明", privacyText: "生产站点使用 Cloudflare Web Analytics，收集汇总页面访问与性能数据，不使用 Cookie 或访客指纹。本站加载器尊重 DNT/GPC；拦截器可能使统计低估访问量；项目数不等于访客数。合作前可索取带时间范围的汇总数据，不承诺曝光或转化。" },
  en: { agent: "Install the Agent Skill", agentText: "Query the catalog by use case, then inspect fixed-version source evidence and review limits. Inclusion is not runtime or security certification.", privacy: "Privacy and traffic transparency", privacyText: "The production site uses Cloudflare Web Analytics for aggregate page visits and performance, without cookies or visitor fingerprinting. Our loader respects DNT/GPC. Blockers can cause undercounting; project count is not visitor count. Request dated aggregate figures before booking. Impressions and conversions are not guaranteed." },
  ja: { agent: "Agent Skill の導入", agentText: "用途で一覧を検索し、固定バージョンのソースと確認範囲を参照できます。掲載は動作や安全性の認証ではありません。", privacy: "プライバシーとアクセス情報", privacyText: "本番サイトでは Cloudflare Web Analytics により、Cookie や訪問者のフィンガープリントを使わずに、ページ訪問と性能の集計情報を確認できます。当サイトのローダーは DNT/GPC を尊重します。ブロッカーにより過少計測となる場合があり、掲載件数は訪問者数ではありません。契約前に期間を明示した集計情報をご請求ください。表示回数や成果は保証しません。" },
  ko: { agent: "Agent Skill 설치", agentText: "용도별로 목록을 검색하고 고정 버전의 소스 근거와 검토 범위를 확인하세요. 수록은 실행 결과나 보안 인증을 뜻하지 않습니다.", privacy: "개인정보 및 트래픽 투명성", privacyText: "운영 사이트는 Cloudflare Web Analytics로 Cookie나 방문자 지문 없이 페이지 방문 및 성능 집계 정보를 확인할 수 있습니다. 사이트 로더는 DNT/GPC를 존중합니다. 차단 도구로 인해 방문 수가 적게 집계될 수 있으며, 프로젝트 수는 방문자 수가 아닙니다. 계약 전에 기간이 표시된 집계 자료를 요청하세요. 노출이나 전환을 보장하지 않습니다." },
};
for (const locale of LOCALES) {
  const c=COPY[locale], t=text[locale], homepage=SITE+localePrefix(locale);
  const bannerFile=`public/banner${locale==='en'?'':locale==='zh'?'-zh':`-${locale}`}.svg`;
  const languageNames = locale === "en" || locale === "ko" ? {zh:"Chinese",en:"English",ja:"Japanese",ko:"한국어"} : Object.fromEntries(LOCALES.map((l)=>[l,COPY[l].name]));
  const skillAnchor = locale === 'zh' ? 'agent-skill-接入' : locale === 'en' ? 'install-the-agent-skill' : locale === 'ja' ? 'agent-skill-の導入' : 'agent-skill-설치';
  const catAnchor = locale === 'zh' ? '分类' : locale === 'en' ? 'categories' : locale === 'ja' ? 'カテゴリ' : '분류';
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
    `<p>\n` +
    `  <a href="https://awesome.re"><img src="https://awesome.re/badge.svg" alt="Mentioned in Awesome" /></a>\n` +
    `  <a href="${homepage}"><img src="https://img.shields.io/badge/Live%20Radar-logicrw.github.io-d7fa91?style=flat-square&labelColor=1a201a&logo=safari" alt="Live Radar" /></a>\n` +
    `  <a href="#${catAnchor}"><img src="https://img.shields.io/badge/Curated%20Projects-${projects.length}%2B-2563eb?style=flat-square" alt="Projects Count" /></a>\n` +
    `  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-d97706.svg?style=flat-square" alt="License: MIT" /></a>\n` +
    `  <a href="${REPOSITORY}/issues/new?template=project.yml"><img src="https://img.shields.io/badge/PRs-Welcome-16a34a.svg?style=flat-square" alt="PRs Welcome" /></a>\n` +
    `</p>\n\n` +
    `<p>\n  ${LOCALES.map(l=>`[${languageNames[l]}](${files[l]})`).join(" · ")}\n</p>\n\n` +
    `<p>\n  <a href="${homepage}"><strong>${c.explore} ↗</strong></a> · ` +
    `<a href="#${skillAnchor}"><strong>${additions[locale].agent}</strong></a> · ` +
    `<a href="#${catAnchor}"><strong>${c.categories}</strong></a> · ` +
    `<a href="${REPOSITORY}/issues/new?template=project.yml"><strong>${c.submit}</strong></a>\n</p>\n\n` +
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
