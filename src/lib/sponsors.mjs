const TIERS = new Set(['headline', 'category']);
const LOCALES = ['zh', 'en', 'ja', 'ko'];

export function safeSponsorUrl(value) {
  if (typeof value !== 'string' || /[\u0000-\u0020\\]/u.test(value)) return null;
  try {
    const url = new URL(value);
    return url.protocol === 'https:' && url.hostname && !url.username && !url.password
      ? url.href : null;
  } catch { return null; }
}

export function safeSponsorLogo(value) {
  // Local raster assets only: no third-party tracking requests or active SVG content.
  if (typeof value !== 'string' || !/^sponsors\/[a-zA-Z0-9_-]+\.(?:png|webp|avif)$/u.test(value)) return null;
  return value;
}

export function activeSponsors(partners, now = Date.now()) {
  if (!Array.isArray(partners) || !Number.isFinite(now)) return [];
  const ids = new Set();
  return partners.flatMap((partner) => {
    if (!partner || typeof partner !== 'object' || !TIERS.has(partner.tier)) return [];
    if (typeof partner.id !== 'string' || !/^[a-z0-9-]{1,64}$/u.test(partner.id) || ids.has(partner.id)) return [];
    if (typeof partner.name !== 'string' || !partner.name.trim() || partner.name.length > 80) return [];
    const url = safeSponsorUrl(partner.url);
    if (!url) return [];
    // Both dates are mandatory. Publishing an entry alone never starts an open-ended placement.
    const datePattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{3})?Z$/u;
    if (typeof partner.startsAt !== 'string' || typeof partner.endsAt !== 'string' || !datePattern.test(partner.startsAt) || !datePattern.test(partner.endsAt)) return [];
    const start = Date.parse(partner.startsAt), end = Date.parse(partner.endsAt);
    if (!Number.isFinite(start) || !Number.isFinite(end) || start >= end || now < start || now >= end) return [];
    const canonicalDate = (value) => value.replace(/\.000Z$/u, 'Z');
    if (canonicalDate(new Date(start).toISOString()) !== canonicalDate(partner.startsAt) || canonicalDate(new Date(end).toISOString()) !== canonicalDate(partner.endsAt)) return [];
    if (!partner.description || typeof partner.description !== 'object') return [];
    if (typeof partner.description.en !== 'string' || !partner.description.en.trim() || partner.description.en.length > 240) return [];
    if (partner.logo !== undefined && !safeSponsorLogo(partner.logo)) return [];
    if (partner.tier === 'category' && (typeof partner.category !== 'string' || !partner.category.trim())) return [];
    const description = Object.fromEntries(LOCALES.map((locale) => [locale,
      typeof partner.description[locale] === 'string' && partner.description[locale].trim() && partner.description[locale].length <= 240
        ? partner.description[locale] : partner.description.en,
    ]));
    // English and Korean stay readable in the selected language, with English as the safe fallback.
    if (/\p{Script=Han}/u.test(description.en)) return [];
    if (/\p{Script=Han}/u.test(description.ko)) description.ko = description.en;
    ids.add(partner.id);
    return [{ id: partner.id, name: partner.name.trim(), tier: partner.tier, url,
      ...(partner.logo ? { logo: partner.logo } : {}),
      ...(partner.category ? { category: partner.category } : {}),
      startsAt: partner.startsAt, endsAt: partner.endsAt, description }];
  });
}

export function featuredSponsors(partners, category = 'all', now = Date.now()) {
  const active = activeSponsors(partners, now);
  if (!category || category === 'all') return active.filter((p) => p.tier === 'headline').slice(0, 2);
  return active.filter((p) => p.tier === 'category' && p.category === category).slice(0, 1);
}

export const sponsorCopy = {
  zh: {
    entry: '赞助合作', title: '让做工具的人，看见你的工具。',
    intro: '为 Jev、Agent 与 AI 基础设施团队提供清晰标注的付费展示位。',
    audience: '收录 {count} 个真实开源项目，供开发者查找实现与方案选型。欢迎提前沟通近期的受众与流量数据。',
    featured: '精选赞助商', paid: '付费展示', available: '首发合作伙伴招募中',
    placeholder: 'Your project here', placeholderDescription: '你的工具，也可以出现在开发者找方案的地方。',
    explorePlans: '查看合作方案', headline: '全站首页置顶 (Headline)', category: '垂直分类置顶 (Category)',
    from: '首发早鸟方案', perMonth: ' · 开放咨询', headlinePlacement: '首页首屏 · 独占最多 2 席',
    categoryPlacement: '对应技术分类顶部 · 每类独占 1 席',
    headlineBenefit: '首页首屏 Featured 专属卡片与直达链接，覆盖全站高意向开发者，快速建立行业品牌认知。',
    categoryBenefit: '独占精准技术分类顶部，直面正在该领域进行架构选型的开发者与架构师，转化率最高。',
    includedTitle: '两档均包含完整商业权益', benefits: ['官方 README 赞助区 Logo、简介与官方链接鸣谢', 'llms.txt 与 Agent Skill 机器可读生态中独立标注推荐', '中英日韩四国语言展示文案深度协作与官网直达外链'],
    terms: '按月排期合作，首发合作伙伴享长期锁定特惠与定制支持。赞助位独立标注，不影响项目的客观收录与自然排序。',
    process: '发来你的产品链接与一句话用途，我们核对契合度并提供专属卡片预览，确认后即可排期上线。',
    payments: '商业合作支持 Stripe、微信支付、支付宝或银行转账，在确认方案后提供对应结算信息。若仅希望无偿支持开源维护（无需商业位），亦可通过 GitHub Sponsors 赞助。',
    contactTitle: '先聊聊你的工具与契合度', email: '发送合作邮件', inquirePlan: '垂询合作档期', telegram: 'Telegram 联系', x: '在 X 上联系',
    copyEmail: '复制邮箱', copyTelegram: '复制 Telegram 用户名', copied: '已复制',
    copyFailed: '复制失败，请选中联系方式手动复制。', close: '关闭赞助合作', language: '弹窗语言',
    emailSubject: 'Awesome Jev 赞助合作咨询', emailBody: '你好，我想了解 Awesome Jev 赞助合作。\n\n产品名称与官网链接：\n核心定位与一句话用途：\n计划合作档期与意向方案：\n',
    visit: '了解产品', disclosure: '赞助位明确标注，项目收录独立审核。',
  },
  en: {
    entry: 'Sponsor', title: 'Put your tool where builders look.',
    intro: 'Clearly labeled paid placements for Jev, Agent, and AI infrastructure teams.',
    audience: 'A curated catalog of {count} open-source projects for builders comparing architectures. Feel free to ask about recent audience and traffic figures before booking.',
    featured: 'Featured partners', paid: 'Sponsored', available: 'Founding partner slots open',
    placeholder: 'Your project here', placeholderDescription: 'Meet developers while they are looking for the right tool.',
    explorePlans: 'Explore sponsorship', headline: 'Homepage Featured Placement', category: 'Category Focused Placement',
    from: 'Early Access Plan', perMonth: ' · Inquire for Slots', headlinePlacement: 'Homepage top · Up to 2 slots',
    categoryPlacement: 'Category top · 1 exclusive slot per category',
    headlineBenefit: 'A prominent homepage Featured card with direct links, reaching builders across the entire directory to build brand awareness.',
    categoryBenefit: 'Exclusively placed at the top of a relevant category, directly engaging architects actively comparing solutions in your niche.',
    includedTitle: 'Both plans include full partner perks', benefits: ['Logo, summary and link in the official README sponsor section', 'Explicitly labeled partner entries in llms.txt and Agent Skill files', 'Collaborative copy in four languages with direct outbound link'],
    terms: 'Priced per monthly term. Founding partners receive lock-in privileges and custom packages. Placements do not affect objective inclusion.',
    process: 'Send your project link and one-sentence use case. We review the fit, share a card preview, and schedule launch upon agreement.',
    payments: 'Commercial placements support Stripe, WeChat Pay, Alipay, or bank wire upon agreement. If you only wish to support our open-source maintenance without a placement, GitHub Sponsors is warmly welcomed.',
    contactTitle: 'Tell us about your tool & fit', email: 'Email about sponsorship', inquirePlan: 'Inquire about placement', telegram: 'Contact on Telegram', x: 'Contact on X',
    copyEmail: 'Copy email address', copyTelegram: 'Copy Telegram username', copied: 'Copied',
    copyFailed: 'Could not copy. Select the contact details and copy them manually.', close: 'Close sponsorship', language: 'Dialog language',
    emailSubject: 'Awesome Jev sponsorship inquiry', emailBody: 'Hi, I would like to discuss an Awesome Jev sponsorship.\n\nProject name and link:\nCore use case:\nPreferred dates and plan:\n',
    visit: 'Explore product', disclosure: 'Paid placements are labeled. Project inclusion is reviewed independently.',
  },
  ja: {
    entry: 'スポンサー', title: 'ツールを探す開発者に、あなたのツールを。',
    intro: 'Jev・Agent・AI インフラのチーム向けに、有料掲載であることを明示した紹介枠を提供します。',
    audience: '開発者が実装や設計を比較するための、{count} 件のオープンソースカタログです。最新の閲覧数やユーザー層については事前にお問い合わせください。',
    featured: '注目のスポンサー', paid: '有料掲載', available: '最初のパートナーを募集中',
    placeholder: 'Your project here', placeholderDescription: '開発者が次のツールを探す場所で、あなたの製品を紹介しませんか。',
    explorePlans: 'スポンサーの詳細', headline: 'ホームページ最上部掲載 (Headline)', category: 'カテゴリ別独占掲載 (Category)',
    from: '早期パートナー', perMonth: ' · 相談受付中', headlinePlacement: 'ホームページ最上部 · 最大 2 枠',
    categoryPlacement: '該当カテゴリ最上部 · 各カテゴリ独占 1 枠',
    headlineBenefit: 'トップページの Featured カードで直達リンクと共に掲載。全訪問者に向けたブランド認知の確立に最適です。',
    categoryBenefit: '関連技術カテゴリの先頭に独占掲載。その分野でツールを選定中のエンジニアへ高確度でアプローチできます。',
    includedTitle: '両プラン共通の掲載特典', benefits: ['公式 README スポンサー欄へのロゴ・紹介文・リンク掲載', 'llms.txt および Agent Skill のスポンサー枠に明記', '4言語の紹介文共同作成と公式サイトへの直達リンク'],
    terms: '月単位の契約です。初期パートナーには特別プランと継続特典を提供します。収録審査の公平性には影響しません。',
    process: '製品リンクと用途をお送りください。適合性を確認のうえカード試作を行い、日程調整後に公開します。',
    payments: '有料掲載は Stripe、WeChat Pay、Alipay、銀行振込に対応しています。広告枠を伴わない純粋なオープンソース支援は GitHub Sponsors でも歓迎します。',
    contactTitle: 'あなたのツールについて聞かせてください', email: 'メールで相談', inquirePlan: '掲載枠・プランを相談', telegram: 'Telegram で相談', x: 'X で相談',
    copyEmail: 'メールアドレスをコピー', copyTelegram: 'Telegram ユーザー名をコピー', copied: 'コピーしました',
    copyFailed: 'コピーできませんでした。連絡先を選択してコピーしてください。', close: 'スポンサー案内を閉じる', language: '表示言語',
    emailSubject: 'Awesome Jev スポンサーのご相談', emailBody: 'Awesome Jev のスポンサーについて相談したいです。\n\n製品名とリンク：\n主な用途：\n希望期間・プラン：\n',
    visit: '製品を見る', disclosure: '有料枠は明示されます。プロジェクトの収録審査は独立して行います。',
  },
  ko: {
    entry: '스폰서', title: '도구를 찾는 개발자에게 소개하세요.',
    intro: 'Jev, Agent, AI 인프라 팀을 위한 유료 노출 공간입니다. 모든 유료 게재에는 스폰서 표시가 붙습니다.',
    audience: '개발자가 구현과 아키텍처를 비교할 수 있는 {count}개 오픈소스 프로젝트 디렉터리입니다. 최근 방문자 수와 통계는 언제든 편하게 문의해 주세요.',
    featured: '추천 스폰서', paid: '유료 게재', available: '첫 파트너를 모집합니다',
    placeholder: 'Your project here', placeholderDescription: '개발자가 다음 도구를 찾는 곳에서 여러분의 제품을 소개하세요.',
    explorePlans: '스폰서십 살펴보기', headline: '홈페이지 최상단 노출 (Headline)', category: '카테고리별 독점 노출 (Category)',
    from: '얼리 파트너 플랜', perMonth: ' · 문의 접수 중', headlinePlacement: '홈페이지 최상단 · 최대 2개 자리',
    categoryPlacement: '해당 카테고리 최상단 · 카테고리당 독점 1개 자리',
    headlineBenefit: '홈페이지 Featured 카드로 바로가기 링크와 함께 노출되어 전체 방문자에게 강력한 브랜드 인지도를 형성합니다.',
    categoryBenefit: '해당 분야의 도구를 실제로 비교 분석 중인 개발자에게 집중 노출되어 가장 높은 전환율을 제공합니다.',
    includedTitle: '두 플랜 공통 파트너 혜택', benefits: ['공식 README 스폰서 영역에 로고, 소개 및 링크 게시', 'llms.txt 및 Agent Skill에 스폰서 영역으로 명확히 표시', '4개 언어 소개 문구 협력 작성 및 공식 사이트 직결 링크'],
    terms: '월 단위로 진행됩니다. 초기 파트너에게는 얼리버드 혜택과 맞춤 지원이 제공되며 프로젝트의 객관적 수록에는 영향을 주지 않습니다.',
    process: '제품 링크와 한 줄 설명을 보내주시면 적합성을 확인하고 카드 미리보기를 제공한 뒤 일정을 확정합니다.',
    payments: '유료 게재는 Stripe, WeChat Pay, Alipay, 은행 송금을 지원합니다. 광고 게재 없이 오픈소스 유지를 순수 후원하시려면 GitHub Sponsors를 이용하실 수 있습니다.',
    contactTitle: '어떤 도구를 만들고 계신가요?', email: '이메일로 문의', inquirePlan: '일정 및 플랜 문의', telegram: 'Telegram으로 문의', x: 'X에서 문의',
    copyEmail: '이메일 주소 복사', copyTelegram: 'Telegram 사용자 이름 복사', copied: '복사됨',
    copyFailed: '복사하지 못했습니다. 연락처 텍스트를 선택해 직접 복사해 주세요.', close: '스폰서 안내 닫기', language: '표시 언어',
    emailSubject: 'Awesome Jev 스폰서십 문의', emailBody: '안녕하세요. Awesome Jev 스폰서십을 문의하고 싶습니다.\n\n프로젝트 이름과 링크:\n핵심 용도:\n희망 기간 및 관심 플랜:\n',
    visit: '제품 보기', disclosure: '유료 게재는 명확히 표시됩니다. 프로젝트 수록은 독립적으로 검토합니다.',
  },
};

export function sponsorLocale(locale) { return LOCALES.includes(locale) ? locale : 'en'; }
