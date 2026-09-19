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

test('non-identity matches use Fuse scores and stable IDs, never Stars', () => {
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

test('multi-concept queries require every concept, including adjacent Chinese scenes', () => {
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
