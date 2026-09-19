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
    audience: '这里收录 {count} 个公开代码项目，供开发者查找实现、比较方案。项目数不等于访客数；合作前可沟通实际流量。',
    featured: '精选赞助商', paid: '付费展示', available: '首发合作伙伴招募中',
    placeholder: 'Your project here', placeholderDescription: '你的工具，也可以出现在开发者找方案的地方。',
    explorePlans: '查看合作方案', headline: 'Headline Sponsor', category: 'Category Sponsor',
    from: '起', perMonth: '/ 月', headlinePlacement: '首页顶部 · 最多 2 个展示位',
    categoryPlacement: '对应分类顶部 · 每类 1 个展示位',
    headlineBenefit: '首页 Featured 卡片，优先展示产品用途与直达链接。',
    categoryBenefit: '在匹配分类中展示，让正在找此类工具的人看见你。',
    includedTitle: '两档均包含', benefits: ['README 赞助区 Logo 与链接鸣谢', 'llms.txt 与 Agent Skill 中明确标注的赞助区', '四种语言的展示文案协作'],
    terms: '价格为每月美元起价，以确认的档期与合作范围为准。赞助不改变收录标准、项目描述或自然排序，不承诺访问量与转化。',
    process: '发来项目链接与想合作的档期，我们确认相关性、展示文案与排期后，再安排付款。',
    payments: '付款方式在联系后确认，可沟通 GitHub Sponsors、Stripe、微信或支付宝；本站不处理支付。',
    contactTitle: '先聊聊你的工具', email: '发送合作邮件', telegram: 'Telegram 联系', x: '在 X 上联系',
    copyEmail: '复制邮箱', copyTelegram: '复制 Telegram 用户名', copied: '已复制',
    copyFailed: '复制失败，请选中联系方式手动复制。', close: '关闭赞助合作', language: '弹窗语言',
    emailSubject: 'Awesome Jev 赞助合作', emailBody: '你好，我想了解 Awesome Jev 赞助合作。\n\n项目名称与链接：\n计划合作档期：\n感兴趣的方案：\n',
    visit: '了解产品', disclosure: '赞助位明确标注，项目收录独立审核。',
  },
  en: {
    entry: 'Sponsor', title: 'Put your tool where builders look.',
    intro: 'Clearly labeled paid placements for Jev, Agent, and AI infrastructure teams.',
    audience: 'A directory of {count} public-code projects for developers comparing real implementations. Project count is not visitor count; ask about current traffic before booking.',
    featured: 'Featured partners', paid: 'Sponsored', available: 'Founding partner slots open',
    placeholder: 'Your project here', placeholderDescription: 'Meet developers while they are looking for the right tool.',
    explorePlans: 'Explore sponsorship', headline: 'Headline Sponsor', category: 'Category Sponsor',
    from: 'from', perMonth: '/ month', headlinePlacement: 'Homepage top · Up to 2 placements',
    categoryPlacement: 'Category top · 1 placement per category',
    headlineBenefit: 'A homepage Featured card with your product use case and a direct link.',
    categoryBenefit: 'A placement in a matching category, alongside the tools developers are exploring.',
    includedTitle: 'Both plans include', benefits: ['Logo and link in the README sponsor section', 'Labeled sponsor sections in llms.txt and the Agent Skill', 'Collaborative copy in four languages'],
    terms: 'Starting prices in USD per month; availability and scope are confirmed before booking. Sponsorship does not change inclusion standards, project descriptions, or organic ranking. Traffic and conversions are not guaranteed.',
    process: 'Send your project link and preferred dates. We agree on relevance, copy, and availability before arranging payment.',
    payments: 'Payment is arranged after contact. Ask about GitHub Sponsors, Stripe, WeChat Pay, or Alipay; this site does not process payments.',
    contactTitle: 'Tell us about your tool', email: 'Email about sponsorship', telegram: 'Contact on Telegram', x: 'Contact on X',
    copyEmail: 'Copy email address', copyTelegram: 'Copy Telegram username', copied: 'Copied',
    copyFailed: 'Could not copy. Select the contact details and copy them manually.', close: 'Close sponsorship', language: 'Dialog language',
    emailSubject: 'Awesome Jev sponsorship', emailBody: 'Hi, I would like to discuss an Awesome Jev sponsorship.\n\nProject name and link:\nPreferred dates:\nPlan of interest:\n',
    visit: 'Explore product', disclosure: 'Paid placements are labeled. Project inclusion is reviewed independently.',
  },
  ja: {
    entry: 'スポンサー', title: 'ツールを探す開発者に、あなたのツールを。',
    intro: 'Jev・Agent・AI インフラのチーム向けに、有料掲載であることを明示した紹介枠を提供します。',
    audience: '{count} 件の公開コードプロジェクトを収録し、開発者による実装の比較を支援しています。収録件数は訪問者数ではありません。最新のアクセス状況は契約前にご相談ください。',
    featured: '注目のスポンサー', paid: '有料掲載', available: '最初のパートナーを募集中',
    placeholder: 'Your project here', placeholderDescription: '開発者が次のツールを探す場所で、あなたの製品を紹介しませんか。',
    explorePlans: 'スポンサーの詳細', headline: 'Headline Sponsor', category: 'Category Sponsor',
    from: 'から', perMonth: '/ 月', headlinePlacement: 'ホームページ上部 · 最大 2 枠',
    categoryPlacement: 'カテゴリ上部 · 各カテゴリ 1 枠',
    headlineBenefit: 'ホームページの Featured カードに、用途と製品リンクを掲載します。',
    categoryBenefit: '関連カテゴリで掲載し、その分野のツールを探す開発者に紹介します。',
    includedTitle: '両プラン共通', benefits: ['README のスポンサー欄にロゴとリンクを掲載', 'llms.txt と Agent Skill のスポンサー欄に明示して掲載', '4 言語の紹介文を共同で作成'],
    terms: '月額米ドルの開始価格です。日程と掲載範囲は事前に確認します。スポンサー契約によって収録基準、プロジェクト説明、通常の表示順は変わりません。アクセス数や成果は保証しません。',
    process: 'プロジェクトのリンクと希望期間をお送りください。関連性、掲載文、空き状況を確認した後、お支払いをご案内します。',
    payments: '支払い方法はご連絡後に確認します。GitHub Sponsors、Stripe、WeChat Pay、Alipay についてご相談いただけます。このサイトでは決済しません。',
    contactTitle: 'あなたのツールについて聞かせてください', email: 'メールで相談', telegram: 'Telegram で相談', x: 'X で相談',
    copyEmail: 'メールアドレスをコピー', copyTelegram: 'Telegram ユーザー名をコピー', copied: 'コピーしました',
    copyFailed: 'コピーできませんでした。連絡先を選択してコピーしてください。', close: 'スポンサー案内を閉じる', language: '表示言語',
    emailSubject: 'Awesome Jev スポンサーのご相談', emailBody: 'Awesome Jev のスポンサーについて相談したいです。\n\nプロジェクト名とリンク：\n希望期間：\n希望プラン：\n',
    visit: '製品を見る', disclosure: '有料枠は明示されます。プロジェクトの収録審査は独立して行います。',
  },
  ko: {
    entry: '스폰서', title: '도구를 찾는 개발자에게 소개하세요.',
    intro: 'Jev, Agent, AI 인프라 팀을 위한 유료 노출 공간입니다. 모든 유료 게재에는 스폰서 표시가 붙습니다.',
    audience: '{count}개의 공개 코드 프로젝트를 모아 개발자가 실제 구현을 비교할 수 있도록 돕습니다. 프로젝트 수는 방문자 수가 아닙니다. 계약 전에 현재 트래픽을 문의해 주세요.',
    featured: '추천 스폰서', paid: '유료 게재', available: '첫 파트너를 모집합니다',
    placeholder: 'Your project here', placeholderDescription: '개발자가 다음 도구를 찾는 곳에서 여러분의 제품을 소개하세요.',
    explorePlans: '스폰서십 살펴보기', headline: 'Headline Sponsor', category: 'Category Sponsor',
    from: '부터', perMonth: '/ 월', headlinePlacement: '홈페이지 상단 · 최대 2개 자리',
    categoryPlacement: '카테고리 상단 · 카테고리당 1개 자리',
    headlineBenefit: '홈페이지 Featured 카드에 제품 용도와 바로가기 링크를 제공합니다.',
    categoryBenefit: '관련 카테고리에 게재하여 해당 분야의 도구를 찾는 개발자에게 소개합니다.',
    includedTitle: '두 플랜 공통 혜택', benefits: ['README 스폰서 영역에 로고와 링크 게시', 'llms.txt 및 Agent Skill에 스폰서 영역으로 명확히 표시', '4개 언어 소개 문구 공동 작성'],
    terms: '미국 달러 기준 월 시작 가격입니다. 일정과 게재 범위는 계약 전에 확정합니다. 스폰서십은 수록 기준, 프로젝트 설명, 일반 정렬 순서를 바꾸지 않습니다. 방문자 수와 전환은 보장하지 않습니다.',
    process: '프로젝트 링크와 희망 기간을 보내 주세요. 관련성, 소개 문구, 일정을 확인한 뒤 결제를 안내합니다.',
    payments: '결제 방법은 연락 후 확인합니다. GitHub Sponsors, Stripe, WeChat Pay, Alipay를 문의할 수 있습니다. 이 사이트에서는 결제를 처리하지 않습니다.',
    contactTitle: '어떤 도구를 만들고 있나요?', email: '이메일로 문의', telegram: 'Telegram으로 문의', x: 'X에서 문의',
    copyEmail: '이메일 주소 복사', copyTelegram: 'Telegram 사용자 이름 복사', copied: '복사됨',
    copyFailed: '복사하지 못했습니다. 연락처 텍스트를 선택해 직접 복사해 주세요.', close: '스폰서 안내 닫기', language: '표시 언어',
    emailSubject: 'Awesome Jev 스폰서십 문의', emailBody: '안녕하세요. Awesome Jev 스폰서십을 문의하고 싶습니다.\n\n프로젝트 이름과 링크:\n희망 기간:\n관심 플랜:\n',
    visit: '제품 보기', disclosure: '유료 게재는 명확히 표시됩니다. 프로젝트 수록은 독립적으로 검토합니다.',
  },
};

export function sponsorLocale(locale) { return LOCALES.includes(locale) ? locale : 'en'; }
