import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import { createProjectSearch, searchProjects, browseSort, matchesQuickFilter } from '../src/lib/search.mjs';
import { tagConfig } from '../src/lib/tags.mjs';
import { publicProjects } from './prepare-public-data.mjs';

const project = (id, overrides = {}) => ({ id, name: id, author: 'dev', tags: [], stars: 0, ...overrides });
const ids = (items) => items.map(({ id }) => id);
const queryIds = (items, query) => ids(searchProjects(createProjectSearch(items), query));

test('exact Jev-cu precedes large projects and name-prefix matches in the real catalog', () => {
  const catalog = JSON.parse(readFileSync(new URL('../src/data/projects.json', import.meta.url), 'utf8'));
  const target = catalog.find((item) => item.name.toLowerCase() === 'jev-cu');
  assert.ok(target, 'The audited Jev-cu repository remains in the catalog');
  const inflated = project('irrelevant-high-stars', { stars: 999999999, plainSummaryEn: 'An ecosystem containing Jev-cu browser automation integrations.' });
  assert.equal(searchProjects(createProjectSearch([...catalog, inflated]), 'Jev-cu')[0].id, target.id);
  assert.equal(searchProjects(createProjectSearch([...catalog].reverse()), 'jev-cu')[0].id, target.id);
});

test('identity boost supports name, author, prefix, case, full-width and owner/repo aliases', () => {
  const items = [
    project('z:similar', { author: 'Other', name: 'Jev-cu-plus', stars: 9000 }),
    project('sac-y:jev-cu', { author: 'Sac-Y', name: 'Jev-cu', stars: 41, url: 'https://github.com/Sac-Y/Jev-cu' }),
    project('a:doc', { author: 'Other', plainSummaryEn: 'An example by Sac-Y using Jev-cu.' }),
  ];
  for (const query of ['jev-cu', 'Ｊｅｖ－ｃｕ', 'ＳＡＣ－Ｙ／ＪＥＶ－ＣＵ', 'sac-y:jev-cu', 'sac-y', 'sac']) {
    assert.equal(queryIds(items, query)[0], 'sac-y:jev-cu', query);
  }
  assert.deepEqual(queryIds(items, 'Jev-c').slice(0, 2), ['sac-y:jev-cu', 'z:similar']);
});

test('non-identity matches preserve relevance and stable IDs, never Stars', () => {
  const items = [
    project('z', { stars: 140000, plainSummaryEn: 'A framework mentioning command routing within a large ecosystem of developer tools and utilities.' }),
    project('b', { stars: 2, plainSummaryEn: 'Command routing.' }),
    project('a', { stars: 1, plainSummaryEn: 'Command routing.' }),
  ];
  assert.deepEqual(queryIds(items, 'command routing'), ['a', 'b', 'z']);
  assert.deepEqual(queryIds([...items].reverse(), 'command routing'), ['a', 'b', 'z']);
});

test('Chinese scenario synonyms find meaningful native English evidence', () => {
  const items = [
    project('web', { plainSummaryEn: 'Headless browser scraping with Playwright.' }),
    project('cost', { plainSummaryEn: 'A model router for cost optimization.' }),
    project('eval', { plainSummaryEn: 'A benchmark and evaluation harness.' }),
    project('flow', { plainSummaryEn: 'Workflow automation for deployment.' }),
    project('model', { plainSummaryEn: 'An SLM decision runner.' }),
    project('unrelated', { plainSummaryEn: 'Piano music composition.' }),
  ];
  for (const query of ['爬虫', '抓取', '数据采集']) assert.ok(queryIds(items, query).includes('web'), query);
  for (const query of ['省钱', '省成本', '降本', '模型路由降本']) assert.ok(queryIds(items, query).includes('cost'), query);
  for (const query of ['评测', '跑分', '基准测试']) assert.ok(queryIds(items, query).includes('eval'), query);
  assert.ok(queryIds(items, '自动化').includes('flow'));
  for (const query of ['大模型', '小模型']) assert.ok(queryIds(items, query).includes('model'), query);
  assert.ok(!queryIds(items, '爬虫').includes('unrelated'));
});

test('two-concept queries preserve precision, including adjacent Chinese scenes', () => {
  const items = [
    project('rust-router', { plainSummaryEn: 'A Rust model router for cost optimization.' }),
    project('rust-game', { plainSummaryEn: 'A Rust game engine.' }),
    project('python-router', { plainSummaryEn: 'A Python model router for cost optimization.' }),
    project('rust-browser', { plainSummaryEn: 'Rust browser scraping automation.' }),
  ];
  assert.deepEqual(queryIds(items, 'Rust 省钱'), ['rust-router']);
  assert.deepEqual(queryIds(items, '爬虫自动化'), ['rust-browser']);
  assert.deepEqual(queryIds(items, 'Rust impossible-missing-tool'), []);
});

test('four-language summaries and ontology labels, aliases and descriptions are searchable', () => {
  const bodyItems = [
    project('zh', { plainSummary: '邮件队列清理工具' }),
    project('en', { plainSummaryEn: 'Lightning sentence classifier.' }),
    project('ja', { plainSummaryJa: '音声会議の文字起こしを整理します。' }),
    project('ko', { plainSummaryKo: '음성 회의 기록을 정리합니다.' }),
  ];
  for (const [query, expected] of [['邮件队列', 'zh'], ['lightning sentence', 'en'], ['音声会議', 'ja'], ['회의 기록', 'ko']]) {
    assert.ok(queryIds(bodyItems, query).includes(expected), query);
  }
  const items = [project('web', { tags: ['browser-automation'] }), project('sql', { tags: ['database-vector'] })];
  const browserTag = tagConfig.find((tag) => tag.id === 'browser-automation');
  for (const query of [...Object.values(browserTag.labels), 'Browser Extension', 'page controls']) {
    assert.ok(queryIds(items, query).includes('web'), query);
  }
  assert.deepEqual(queryIds(items, 'PostgreSQL'), ['sql']);
});

test('synonyms do not fuzzy-expand context into content or Rust into trust', () => {
  const items = [
    project('context-tool', { plainSummaryEn: 'Context compaction for Agents.' }),
    project('content-tool', { plainSummaryEn: 'Content moderation and trusted policies.' }),
    project('rust-tool', { plainSummaryEn: 'A Rust SDK.' }),
  ];
  assert.deepEqual(queryIds(items, '上下文 GC'), ['context-tool']);
  assert.deepEqual(queryIds(items, 'Rust'), ['rust-tool']);
});

test('9Hz is not fabricated by a broad game tag, while actual source copy stays searchable', () => {
  const items = [project('generic-game', { tags: ['games-simulation'] }), project('measured', { plainSummaryEn: 'The author reports a 9Hz decision tick.' })];
  assert.deepEqual(queryIds(items, '9Hz'), ['measured']);
});

test('all five suggested queries have real current catalog matches', () => {
  const catalog = JSON.parse(readFileSync(new URL('../src/data/projects.json', import.meta.url), 'utf8'));
  const index = createProjectSearch(catalog);
  for (const query of ['browser automation', 'model routing', 'context GC', 'Rust', 'Claude']) {
    assert.ok(searchProjects(index, query).length > 0, query);
  }
});

test('empty queries and browse sorts return copies without mutating input or relevance', () => {
  const items = Object.freeze([
    Object.freeze(project('a', { stars: 1, name: 'Exact-tool', tags: Object.freeze([]) })),
    Object.freeze(project('b', { stars: 1000, plainSummaryEn: 'Uses exact-tool.', tags: Object.freeze([]) })),
  ]);
  const index = createProjectSearch(items);
  assert.deepEqual(searchProjects(index, ' \n\t '), items);
  assert.notEqual(searchProjects(index, ''), items);
  assert.deepEqual(ids(browseSort(items)), ['b', 'a']);
  assert.deepEqual(ids(items), ['a', 'b']);
  assert.deepEqual(ids(searchProjects(index, 'exact-tool')), ['a', 'b']);
});

test('browse sorts safely handle invalid numbers, dates, and deterministic ties', () => {
  const items = [
    project('z', { stars: NaN, createdAt: 'bad-date', lastCommitAt: null }),
    project('b', { stars: Infinity, createdAt: '2026-09-01', lastCommitAt: '2026-09-15' }),
    project('a', { stars: -5, createdAt: '2026-09-01', lastCommitAt: '2026-09-16' }),
    project('c', { stars: 20, createdAt: '2026-08-01', lastCommitAt: 'invalid' }),
  ];
  assert.deepEqual(ids(browseSort(items, 'stars')), ['c', 'a', 'b', 'z']);
  assert.deepEqual(ids(browseSort(items, 'created')), ['a', 'b', 'c', 'z']);
  assert.deepEqual(ids(browseSort(items, 'updated')), ['a', 'b', 'c', 'z']);
  assert.deepEqual(ids(browseSort(items, 'newest')), ['a', 'b', 'c', 'z']);
});

test('quick filters have explicit popularity and creation snapshot boundaries', () => {
  const now = Date.parse('2026-09-19T00:00:00Z');
  const boundary = new Date(now - 90 * 86400000).toISOString();
  assert.equal(matchesQuickFilter(project('p', { stars: 999 }), 'popular'), false);
  assert.equal(matchesQuickFilter(project('p', { stars: 1000 }), 'popular'), true);
  assert.equal(matchesQuickFilter(project('p', { stars: Infinity }), 'popular'), false);
  for (const stars of [10, 999]) assert.equal(matchesQuickFilter(project('p', { stars, createdAt: boundary }), 'rising', now), true);
  for (const stars of [0, 9, 1000, NaN]) assert.equal(matchesQuickFilter(project('p', { stars, createdAt: boundary }), 'rising', now), false);
  for (const createdAt of [null, 'bad-date', new Date(now + 1).toISOString(), new Date(now - 90 * 86400000 - 1).toISOString()]) {
    assert.equal(matchesQuickFilter(project('p', { stars: 100, createdAt }), 'rising', now), false);
  }
  assert.equal(matchesQuickFilter(project('p', { stars: 10, createdAt: boundary }), 'rising', new Date(now)), true);
  assert.equal(matchesQuickFilter(project('p', { stars: 10, createdAt: boundary }), 'rising', 'invalid'), false);
  assert.equal(matchesQuickFilter(project('p'), 'all'), true);
  assert.equal(matchesQuickFilter(project('p'), 'unknown'), false);
});

test('commercial filter permits known permissive SPDX licenses only', () => {
  for (const license of ['MIT', 'Apache-2.0', 'BSD-2-Clause', 'BSD-3-Clause', 'ISC', 'PostgreSQL']) {
    assert.equal(matchesQuickFilter(project('p', { license, licenseStatus: 'declared' }), 'commercial'), true, license);
    assert.equal(matchesQuickFilter(project('p', { license, licenseStatus: 'unconfirmed' }), 'commercial'), false, license);
  }
  for (const license of [null, '', 'Custom license', 'GPL-2.0', 'AGPL-3.0', 'BUSL-1.1', 'MIT AND Proprietary', 'Unspecified']) {
    assert.equal(matchesQuickFilter(project('p', { license, licenseStatus: 'declared' }), 'commercial'), false, String(license));
  }
});


test('literal technologies require native project evidence, never taxonomy examples', () => {
  const items = [
    project('z-unrelated', { stars: 999999, tags: ['browser-automation', 'coding-agents', 'multilanguage-sdk'], plainSummaryEn: 'An unrelated toolkit.' }),
    project('playwright-native', { stars: 1, plainSummaryJa: 'Playwright を使ってページを操作します。' }),
    project('claude-native', { stars: 2, plainSummaryKo: 'Claude Code 도구 호출을 검토합니다.' }),
    project('rust-native', { stars: 3, language: 'Rust', plainSummaryEn: 'A compact decision client.' }),
  ];
  assert.deepEqual(queryIds(items, 'Playwright'), ['playwright-native']);
  assert.deepEqual(queryIds(items, 'Claude'), ['claude-native']);
  assert.deepEqual(queryIds(items, 'Rust'), ['rust-native']);
  assert.deepEqual(queryIds(items, 'Ｃｌａｕｄｅ'), ['claude-native']);
  // Domain navigation remains intentionally broader than a technology claim.
  assert.ok(queryIds(items, '爬虫').includes('z-unrelated'));
  assert.ok(queryIds(items, '浏览器自动化').includes('z-unrelated'));
});

test('approved GitHub topics are native technology evidence while taxonomy labels remain navigation only', () => {
  const items = [
    project('taxonomy-only', { tags: ['browser-automation', 'coding-agents'], plainSummaryEn: 'A generic utility.' }),
    project('playwright-topic', { topics: ['playwright'] }),
    project('claude-topic', { topics: ['claude-code'] }),
  ];
  assert.deepEqual(queryIds(items, 'Playwright'), ['playwright-topic']);
  assert.deepEqual(queryIds(items, 'Claude'), ['claude-topic']);
});

test('approved search metadata survives the source to public projection without numeric line references', () => {
  const [publicRow] = publicProjects([project('logicrw:metadata-source', {
    topics: ['playwright', 'claude-code'],
    description: 'A GitHub description for deterministic reconciliation.',
    evidenceLines: ['The implementation records a bounded retry ledger.', 17, 'L19-L42'],
  })]);
  assert.deepEqual(publicRow.topics, ['playwright', 'claude-code']);
  assert.equal(publicRow.description, 'A GitHub description for deterministic reconciliation.');
  assert.deepEqual(publicRow.evidenceLines, ['The implementation records a bounded retry ledger.']);
  assert.deepEqual(queryIds([publicRow], 'Playwright'), ['logicrw:metadata-source']);
  assert.deepEqual(queryIds([publicRow], 'bounded retry ledger'), ['logicrw:metadata-source']);
  assert.deepEqual(queryIds([publicRow], '17'), []);
});

test('technical terms keep native scope inside mixed scenario queries', () => {
  const items = [
    project('browser-other', { stars: 999999, tags: ['browser-automation', 'llm-routing-cost'] }),
    project('native-browser', { plainSummaryEn: 'Playwright browser automation with cost optimization.' }),
    project('native-context', { plainSummaryEn: 'Claude Code context compaction.' }),
    project('context-other', { tags: ['coding-agents', 'context-compaction'] }),
  ];
  assert.deepEqual(queryIds(items, 'Playwright 省钱'), ['native-browser']);
  assert.deepEqual(queryIds(items, 'Claude 上下文'), ['native-context']);
});

test('current catalog technical hits have native evidence while Chinese scenes and author search remain useful', () => {
  const catalog = JSON.parse(readFileSync(new URL('../src/data/projects.json', import.meta.url), 'utf8'));
  const index = createProjectSearch(catalog);
  const ownEvidence = (item) => [item.name, item.id, item.author, item.url, item.language,
    ...(Array.isArray(item.topics) ? item.topics : []),
    item.description,
    ...(Array.isArray(item.evidenceLines) ? item.evidenceLines.filter((line) => typeof line === 'string' && !/^\s*(?:lines?\s*)?#?L?\d+(?:\s*[-–,:]\s*#?L?\d+)*\s*$/iu.test(line)) : []),
    ...['plainSummary', 'jevDecisionPoint', 'highlightBenefit'].flatMap((field) => ['', 'En', 'Ja', 'Ko'].map((suffix) => item[field + suffix])),
  ].filter(Boolean).join(' ').normalize('NFKC').toLowerCase();
  for (const query of ['Playwright', 'Rust', 'Claude']) {
    const results = searchProjects(index, query);
    assert.ok(results.length > 0, `${query} must have a genuine current match`);
    assert.ok(results.every((item) => ownEvidence(item).includes(query.toLowerCase())), `${query} may not enter through taxonomy prose`);
  }
  for (const query of ['爬虫', '降本路由']) assert.ok(searchProjects(index, query).length > 0, query);
  assert.equal(searchProjects(index, 'Sac-Y')[0].id, 'sac-y:jev-cu');
});


test('Latin technology names embedded in Chinese, Japanese or Korean keep native evidence', () => {
  const items = [
    project('zh-only', { plainSummary: '基于Playwright的网页操作工具' }),
    project('ko-only', { plainSummaryKo: '이 도구는Claude를호출합니다.' }),
    project('ja-only', { plainSummaryJa: 'Rustで実装された決定クライアント。' }),
    project('unrelated', { plainSummaryEn: 'A trusted content browser.' }),
  ];
  assert.deepEqual(queryIds(items, 'Playwright'), ['zh-only']);
  assert.deepEqual(queryIds(items, 'Claude'), ['ko-only']);
  assert.deepEqual(queryIds(items, 'Rust'), ['ja-only']);
});


test('public UI data retains language evidence and rejects technology matches from taxonomy alone', () => {
  const catalog = JSON.parse(readFileSync(new URL('../src/data/projects.json', import.meta.url), 'utf8'));
  const rows = publicProjects(catalog);
  assert.equal(rows.length, catalog.length);
  const ownEvidence = (item) => [item.name, item.id, item.author, item.url, item.language,
    ...(Array.isArray(item.topics) ? item.topics : []),
    item.description,
    ...(Array.isArray(item.evidenceLines) ? item.evidenceLines.filter((line) => typeof line === 'string' && !/^\s*(?:lines?\s*)?#?L?\d+(?:\s*[-–,:]\s*#?L?\d+)*\s*$/iu.test(line)) : []),
    ...['plainSummary', 'jevDecisionPoint', 'highlightBenefit'].flatMap((field) => ['', 'En', 'Ja', 'Ko'].map((suffix) => item[field + suffix])),
  ].filter(Boolean).join(' ').normalize('NFKC').toLowerCase();
  const index = createProjectSearch([...rows, ...publicProjects([
    project('logicrw:taxonomy-only', { stars: 999999999, tags: ['browser-automation', 'coding-agents', 'multilanguage-sdk'], plainSummaryEn: 'A generic tool with no named dependencies.' }),
    project('logicrw:language-only', { language: 'Rust', tags: ['typed-decisions'], plainSummaryEn: 'A typed decision client.' }),
  ])]);
  for (const query of ['Playwright', 'Rust', 'Claude']) {
    const results = searchProjects(index, query);
    assert.ok(results.length > 0, `${query}: public catalog must retain real matches`);
    assert.ok(results.every((item) => ownEvidence(item).includes(query.toLowerCase())), `${query}: every public hit needs its own evidence`);
    assert.ok(!results.some((item) => item.id === 'logicrw:taxonomy-only'), `${query}: high Stars do not justify a taxonomy-only hit`);
  }
  assert.ok(searchProjects(index, 'Rust').some((item) => item.id === 'logicrw:language-only'));
  assert.equal(searchProjects(index, 'Sac-Y')[0].id, 'sac-y:jev-cu');
  for (const query of ['爬虫', '降本路由']) assert.ok(searchProjects(index, query).length > 0, query);
});

test('pending catalog entries remain browsable but never enter curated quick filters', () => {
  const now = Date.parse('2026-09-19T00:00:00Z');
  for (const [mode, fields] of [
    ['popular', { stars: 5000 }],
    ['rising', { stars: 50, createdAt: '2026-09-01T00:00:00Z' }],
    ['commercial', { license: 'MIT', licenseStatus: 'declared' }],
  ]) {
    assert.equal(matchesQuickFilter(project('active', { ...fields, catalogStatus: 'active' }), mode, now), true, mode);
    const pending = project('pending', { ...fields, catalogStatus: 'review-pending' });
    assert.equal(matchesQuickFilter(pending, mode, now), false, mode);
    assert.equal(matchesQuickFilter(pending, 'all', now), true, 'Preserve pending records in the complete catalog');
  }
});

test('custom or restricted license status overrides a permissive-looking SPDX label', () => {
  for (const license of ['MIT', 'Apache-2.0', 'BSD-3-Clause']) {
    for (const licenseStatus of ['custom', 'restricted', 'unconfirmed', ' CUSTOM ', 'RESTRICTED']) {
      assert.equal(matchesQuickFilter(project('p', { license, licenseStatus }), 'commercial'), false, `${license}: ${licenseStatus}`);
    }
  }
});

test('CJK fallback joins shared bigrams without requiring a contiguous phrase', () => {
  const items = [
    project('combined', { plainSummary: '量子工具与编程分析。' }),
    project('one-pair', { plainSummary: '量子物理研究。' }),
    project('one-character', { plainSummary: '量杯使用教程。' }),
  ];
  assert.deepEqual(queryIds(items, '量子编程'), ['combined']);
});

test('synonym phrases preserve input-word coverage without counting duplicate concepts', () => {
  const items = [project('a', { plainSummaryEn: 'Browser automation.' }), project('b', { plainSummaryEn: 'Alpha toolkit.' })];
  assert.deepEqual(queryIds(items, 'browser automation unmatched'), ['a']);
  assert.deepEqual(queryIds(items, 'unmatched browser automation'), ['a']);
  assert.deepEqual(queryIds(items, 'alpha alpha unmatched'), []);
  assert.deepEqual(queryIds(items, '爬虫 抓取 unmatched'), []);
});

test('exact URL slugs precede name prefixes and URL identities accept trailing metadata', () => {
  const items = [
    project('a-prefix', { name: 'Needle-Plus' }),
    project('z-url', { name: 'Display title', url: 'https://github.com/acme/needle' }),
    project('other-host', { url: 'https://example.org/tools/catalog' }),
  ];
  assert.equal(queryIds(items, 'needle')[0], 'z-url');
  for (const query of ['https://github.com/acme/needle/?tab=readme#top', 'github.com/acme/needle', 'https://github.com/acme/needle.git']) {
    assert.equal(queryIds(items, query)[0], 'z-url');
  }
  assert.equal(queryIds(items, 'https://example.org/tools/catalog')[0], 'other-host');
});

test('non-GitHub URL identity preserves path case, query and fragment', () => {
  const items = [
    project('upper', { url: 'https://example.org/Tools/Widget?id=1#intro' }),
    project('lower', { url: 'https://example.org/tools/widget?id=2#intro' }),
    project('fragment', { url: 'https://example.org/Tools/Widget?id=1#usage' }),
  ];
  for (const item of items) assert.deepEqual(queryIds(items, item.url), [item.id]);
  assert.deepEqual(queryIds(items, 'HTTPS://EXAMPLE.ORG/Tools/Widget?id=1#intro'), ['upper']);
  assert.deepEqual(queryIds(items, 'https://example.org/tools/widget?unrelated=3'), []);
});

test('a whole-query identity suppresses partial fallbacks and query results are independent', () => {
  const items = [project('identity', { name: 'Alpha beta gamma toolkit' }), project('partial', { plainSummaryEn: 'Alpha beta.' })];
  const index = createProjectSearch(items);
  assert.deepEqual(ids(searchProjects(index, 'alpha beta gamma')), ['identity']);
  const first = searchProjects(index, 'alpha beta unmatched');
  first.pop();
  assert.equal(searchProjects(index, 'alpha beta unmatched').length, 2);
  assert.deepEqual(searchProjects(index, '!!!'), []);
});

test('literal taxonomy tags cannot impersonate GitHub topics or source evidence', () => {
  const items = [project('taxonomy', { tags: ['rust', 'claude', 'playwright'] }), project('repository', { topics: ['rust', 'claude', 'playwright'] })];
  for (const query of ['Rust', 'Claude', 'Playwright']) assert.deepEqual(queryIds(items, query), ['repository']);
});

test('direct and public indexes ignore every supported source-line notation', () => {
  const rows = [project('locations', { evidenceLines: ['lines 15-45', '#L15-#L45', 'L３５-L４５', 42] })];
  for (const input of [rows, publicProjects(rows)]) for (const query of ['15', '45', '35', '42', 'lines', 'l15']) {
    assert.deepEqual(queryIds(input, query), [], query);
  }
});

test('punctuation-only repository names still retain their exact identity', () => {
  const items = [project('owner:dash', { name: '-' }), project('other', { plainSummaryEn: 'An unrelated tool.' })];
  assert.deepEqual(queryIds(items, '-'), ['owner:dash']);
  assert.deepEqual(queryIds(items, '!!!'), []);
});

test('identity evidence wins over keyword stuffing across URL, id, name and author forms', () => {
  const items = [
    project('logicrw:needle-stack', {
      name: 'Needle-Stack',
      author: 'LogicRW',
      url: 'https://github.com/LogicRW/needle-stack',
      plainSummaryEn: 'A small project.',
    }),
    project('keyword-stuffed', {
      name: 'Needle Stack integrations',
      author: 'Other',
      plainSummaryEn: 'needle-stack logicrw github.com/logicrw/needle-stack ' + 'needle stack '.repeat(20),
    }),
    project('prefix-only', { name: 'Needle-Stack-Plus', author: 'LogicRW Labs' }),
  ];
  for (const query of [
    'needle-stack',
    'logicrw:needle-stack',
    'LogicRW/needle-stack',
    'https://github.com/LogicRW/needle-stack/',
    'LogicRW',
  ]) {
    assert.equal(queryIds(items, query)[0], 'logicrw:needle-stack', query);
  }
});

test('pathname tokens, topics, GitHub descriptions and textual evidence lines are searchable', () => {
  const items = [
    project('acme:plain', { url: 'https://github.com/acme/plain-project' }),
    project('acme:dash-path', { url: 'https://github.com/acme/edge-worker-kit' }),
    project('acme:underscore-path', { url: 'https://github.com/acme/vector_store_tools' }),
    project('acme:topic', { topics: ['release-orchestration'] }),
    project('acme:description', { description: 'GitHub description: deterministic snapshot reconciliation.' }),
    project('acme:evidence', { evidenceLines: ['The implementation exports a bounded retry ledger.', '127', 42] }),
  ];
  for (const [query, expected] of [
    ['edge worker', 'acme:dash-path'],
    ['vector store', 'acme:underscore-path'],
    ['release orchestration', 'acme:topic'],
    ['snapshot reconciliation', 'acme:description'],
    ['bounded retry ledger', 'acme:evidence'],
  ]) {
    assert.ok(queryIds(items, query).includes(expected), query);
  }
  assert.deepEqual(queryIds(items, '127'), [], 'numeric source line references are provenance, not search copy');
  assert.deepEqual(queryIds(items, '42'), [], 'numeric source line references are provenance, not search copy');
});

test('field weights, stable ties and frozen inputs preserve relevance without popularity leakage', () => {
  const items = Object.freeze([
    Object.freeze(project('z-url', { stars: 999999, url: 'https://github.com/acme/orchid' })),
    Object.freeze(project('a-name', { stars: 0, name: 'Orchid' })),
    Object.freeze(project('e-topics', { stars: 2, topics: Object.freeze(['orchid']) })),
    Object.freeze(project('f-tags', { stars: 3, tags: Object.freeze(['orchid']) })),
    Object.freeze(project('g-summary', { stars: 4, plainSummaryEn: 'orchid' })),
    Object.freeze(project('h-benefit', { stars: 5, highlightBenefitEn: 'orchid' })),
    Object.freeze(project('i-decision', { stars: 6, jevDecisionPointEn: 'orchid' })),
    Object.freeze(project('j-language', { stars: 7, language: 'Orchid' })),
    Object.freeze(project('k-category', { stars: 8, category: 'orchid' })),
    Object.freeze(project('b-name-tie', { stars: 1, name: 'Orchid' })),
  ]);
  const before = JSON.stringify(items);
  assert.deepEqual(queryIds(items, 'orchid'), [
    'a-name', 'b-name-tie', 'z-url', 'e-topics', 'f-tags', 'g-summary', 'h-benefit', 'i-decision', 'j-language', 'k-category',
  ]);
  assert.equal(JSON.stringify(items), before, 'search must not mutate frozen projects or nested metadata');
  assert.deepEqual(queryIds([...items].reverse(), 'orchid'), queryIds(items, 'orchid'), 'ties use stable identity, never insertion order or Stars');
});

test('unknown Chinese phrases use meaningful bigrams and do not admit unrelated shared characters', () => {
  const items = [
    project('target', { plainSummary: '量子编程工具，提供可复现的编译流程。' }),
    project('shared-first', { plainSummary: '量子力学课程与实验笔记。' }),
    project('shared-last', { plainSummary: '编程入门教材。' }),
    project('unrelated', { plainSummary: '量杯与烹饪计时器。' }),
  ];
  assert.deepEqual(queryIds(items, '量子编程'), ['target']);
});

test('fallback grades partial multi-concept coverage only when no full result exists', () => {
  const items = [
    project('all-three', { plainSummaryEn: 'Alpha beta gamma workflow.' }),
    project('two-three', { plainSummaryEn: 'Alpha beta workflow.' }),
    project('one-three', { plainSummaryEn: 'Alpha workflow.' }),
    project('identity', { name: 'Alpha beta gamma catalog entry' }),
  ];
  assert.deepEqual(queryIds(items, 'alpha beta gamma'), ['identity', 'all-three'], 'a full match suppresses partial fallback while retaining identity');

  const fallbackThree = [
    project('two-of-three', { plainSummaryEn: 'Alpha beta workflow.' }),
    project('one-of-three', { plainSummaryEn: 'Alpha workflow.' }),
  ];
  assert.deepEqual(queryIds(fallbackThree, 'alpha beta gamma'), ['two-of-three']);

  const fallbackItems = [
    project('three-of-four', { plainSummaryEn: 'Alpha beta gamma workflow.' }),
    project('two-of-four', { plainSummaryEn: 'Alpha beta workflow.' }),
    project('one-of-two', { plainSummaryEn: 'Delta workflow.' }),
  ];
  assert.deepEqual(queryIds(fallbackItems, 'alpha beta gamma delta'), ['three-of-four', 'two-of-four']);
  assert.deepEqual(queryIds(fallbackItems, 'delta epsilon'), [], 'one of two concepts is too weak to fall back');
});

test('fallback never lets taxonomy prose satisfy native Rust, Claude or Playwright evidence', () => {
  const items = [
    project('taxonomy-sdk', { tags: ['multilanguage-sdk'], plainSummaryEn: 'Alpha beta deployment tool.' }),
    project('taxonomy-coding', { tags: ['coding-agents'], plainSummaryEn: 'Alpha beta deployment tool.' }),
    project('taxonomy-browser', { tags: ['browser-automation'], plainSummaryEn: 'Alpha beta deployment tool.' }),
    project('rust-native', { language: 'Rust', plainSummaryEn: 'Alpha beta deployment tool.' }),
  ];
  assert.deepEqual(queryIds(items, 'Rust alpha beta gamma'), ['rust-native']);
  assert.deepEqual(queryIds(items, 'Claude alpha beta gamma'), []);
  assert.deepEqual(queryIds(items, 'Playwright alpha beta gamma'), []);
});

test('prefix search and subword matching consistently finds projects (Ultra vs UltraFast parity)', () => {
  const catalog = JSON.parse(readFileSync(new URL('../src/data/projects.json', import.meta.url), 'utf8'));
  const index = createProjectSearch(catalog);

  const ultraFastResults = searchProjects(index, 'UltraFast').map((p) => p.id);
  const ultraResults = searchProjects(index, 'Ultra').map((p) => p.id);
  const ulResults = searchProjects(index, 'ul').map((p) => p.id);

  assert.ok(ultraFastResults.includes('jev-ultrafast'), 'UltraFast must find jev-ultrafast');
  assert.ok(ultraFastResults.includes('chy4pro:jevbrowserext'), 'UltraFast must find JevBrowserExt');
  assert.ok(ultraResults.includes('jev-ultrafast'), 'Ultra prefix must find jev-ultrafast');
  assert.ok(ultraResults.includes('chy4pro:jevbrowserext'), 'Ultra prefix must find JevBrowserExt');
  assert.equal(ultraResults[0], 'jev-ultrafast', 'jev-ultrafast must rank first due to name identity match');
  assert.ok(ulResults.includes('jev-ultrafast'), 'ul 2-char prefix must find jev-ultrafast');
  assert.ok(ulResults.includes('chy4pro:jevbrowserext'), 'ul 2-char prefix must find JevBrowserExt');

  // ext prefix finds JevBrowserExt and extension projects
  const extResults = searchProjects(index, 'ext').map((p) => p.id);
  assert.ok(extResults.includes('chy4pro:jevbrowserext'), 'ext must find JevBrowserExt');
});

test('camelCase and hyphenated segment prefix matching works in isolation', () => {
  const items = [
    project('p1', { name: 'jev-ultrafast', plainSummaryEn: 'A fast automation driver.' }),
    project('p2', { name: 'JevBrowserExt', plainSummaryEn: 'Based on jev-ultrafast.' }),
    project('p3', { name: 'unrelated', plainSummaryEn: 'Nothing related here.' }),
  ];
  assert.deepEqual(queryIds(items, 'UltraFast'), ['p1', 'p2']);
  assert.deepEqual(queryIds(items, 'Ultra'), ['p1', 'p2']);
  assert.deepEqual(queryIds(items, 'ul'), ['p1', 'p2']);
  assert.deepEqual(queryIds(items, 'browser'), ['p2']);
  assert.deepEqual(queryIds(items, 'ext'), ['p2']);
});
