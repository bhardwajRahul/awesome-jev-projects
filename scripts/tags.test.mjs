import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import { tagConfig, tagLabel, tagDescription, tagOptions, tagSearchText, resolveTagId, inferCanonicalTags } from '../src/lib/tags.mjs';

const projects = JSON.parse(readFileSync(new URL('../src/data/projects.json', import.meta.url), 'utf8'));
const validIds = new Set(tagConfig.map((tag) => tag.id));
const languages = ['zh', 'en', 'ja', 'ko'];

test('tag ontology has 20 unique stable IDs and complete four-language copy', () => {
  assert.equal(tagConfig.length, 20);
  assert.equal(validIds.size, 20);
  for (const tag of tagConfig) {
    assert.match(tag.id, /^[a-z]+(?:-[a-z]+)*$/u);
    for (const locale of languages) {
      assert.ok(tag.labels[locale]?.trim(), `${tag.id}: missing ${locale} label`);
      assert.ok(tag.descriptions[locale]?.trim(), `${tag.id}: missing ${locale} description`);
      if (locale === 'en' || locale === 'ko') {
        assert.doesNotMatch(`${tag.labels[locale]} ${tag.descriptions[locale]}`, /\p{Script=Han}/u);
      }
    }
  }
});

test('legacy routing, browser, context and MCP aliases resolve without creating new tags', () => {
  for (const value of ['Model Routing', 'Agent Routing', 'Agent 路由', 'Agent路由', 'Routing', ' LLM Routing & Cost ']) {
    assert.equal(resolveTagId(value), 'llm-routing-cost');
  }
  assert.equal(resolveTagId('ＢＲＯＷＳＥＲ'), 'browser-automation');
  assert.equal(resolveTagId('Context GC'), 'context-compaction');
  assert.equal(resolveTagId('MCP'), 'mcp-integrations');
  assert.equal(resolveTagId('multi-language-sdk'), null);
  assert.equal(resolveTagId('invented-new-topic'), null);
  assert.equal(resolveTagId(null), null);
  assert.equal(tagLabel('invented-new-topic', 'en'), 'invented-new-topic');
  assert.equal(tagDescription('invented-new-topic', 'en'), '');
});

test('labels, descriptions and cross-language search use the same ontology', () => {
  assert.equal(tagLabel('Model Routing', 'zh'), '模型路由与成本');
  assert.equal(tagLabel('Context GC', 'ko'), '컨텍스트 압축');
  assert.match(tagDescription('browser-automation', 'en'), /Playwright/u);
  assert.match(tagSearchText('context-compaction'), /Context GC/u);
  assert.match(tagSearchText('context-compaction'), /上下文压缩/u);
  assert.match(tagSearchText('context-compaction'), /컨텍스트 압축/u);
  assert.match(tagSearchText('context-compaction'), /コンテキスト圧縮/u);
});

test('options count unique project IDs and tag aliases only once', () => {
  const options = tagOptions([
    { id: 'a', name: 'Alpha', stars: 3, tags: ['MCP', 'mcp-integrations', 'MCP'] },
    { id: 'a', name: 'Duplicate', stars: 1000, tags: ['MCP'] },
    { id: 'b', name: 'Beta', stars: 2, tags: ['MCP'] },
    { id: 'c', name: 'Other', stars: 5, tags: ['invented-new-topic'] },
  ], 'en');
  assert.deepEqual(options.map(({ id, count, examples, optionLabel }) => ({ id, count, examples, optionLabel })), [{
    id: 'mcp-integrations', count: 2, examples: ['Alpha', 'Beta'],
    optionLabel: 'MCP & Integrations (2 projects · e.g. Alpha, Beta)',
  }]);
});

test('representatives prefer reviewed sources before Stars and use stable ID ties', () => {
  const sample = [
    { id: 'z', name: 'Pending', stars: 10000, tags: ['MCP'], catalogStatus: 'review-pending' },
    { id: 'b', name: 'Beta', stars: 5, tags: ['MCP'] },
    { id: 'c', name: 'Quarantined', stars: 20000, tags: ['MCP'], quarantined: true },
    { id: 'a', name: 'Alpha', stars: 5, tags: ['MCP'] },
  ];
  const original = structuredClone(sample);
  assert.deepEqual(tagOptions(sample, 'zh')[0].examples, ['Alpha', 'Beta']);
  assert.equal(tagOptions(sample, 'zh')[0].count, 4);
  assert.deepEqual(tagOptions([...sample].reverse(), 'zh')[0], tagOptions(sample, 'zh')[0]);
  assert.deepEqual(sample, original);
});

test('example labels distinguish same-name projects and keep English and Korean free of Han', () => {
  const sameName = tagOptions([
    { id: 'a', name: 'jev-mcp', author: 'author-a', tags: ['MCP'] },
    { id: 'b', name: 'jev-mcp', author: 'author-b', tags: ['MCP'] },
  ], 'en')[0];
  assert.deepEqual(sameName.examples, ['author-a/jev-mcp', 'author-b/jev-mcp']);
  const translated = [{ id: 'chess-project', name: '弈瞬', repo: 'logicrw/chess', tags: ['Games'] }];
  for (const locale of ['en', 'ko']) {
    assert.doesNotMatch(tagOptions(translated, locale)[0].optionLabel, /\p{Script=Han}/u);
    assert.deepEqual(tagOptions(translated, locale)[0].examples, ['logicrw/chess']);
  }
  assert.match(tagOptions(translated, 'zh')[0].optionLabel, /弈瞬/u);
});

test('catalog projects each carry only two or three canonical tags', () => {
  assert.equal(new Set(projects.map((project) => project.id)).size, projects.length);
  for (const project of projects) {
    assert.ok(project.tags.length >= 2 && project.tags.length <= 3, `${project.id}: expected 2–3 tags`);
    assert.equal(new Set(project.tags).size, project.tags.length, `${project.id}: duplicate tags`);
    for (const tag of project.tags) assert.ok(validIds.has(tag), `${project.id}: unknown tag ${tag}`);
  }
  for (const locale of ['en', 'ko']) {
    for (const option of tagOptions(projects, locale)) assert.doesNotMatch(option.optionLabel, /\p{Script=Han}/u);
  }
});

test('tag-only migration retains the original 259 projects while allowing later additions', {
  skip: !process.env.TAG_MIGRATION_BASELINE,
}, () => {
  const before = JSON.parse(readFileSync(process.env.TAG_MIGRATION_BASELINE, 'utf8'));
  assert.equal(before.length, 259);
  assert.ok(projects.length >= before.length, 'the catalog must retain every original project');
  const afterById = new Map(projects.map((project) => [project.id, project]));
  const withoutTags = ({ tags: _tags, ...rest }) => rest;
  for (const original of before) {
    assert.ok(afterById.has(original.id), `${original.id}: project lost in migration`);
    assert.deepEqual(withoutTags(afterById.get(original.id)), withoutTags(original), `${original.id}: non-tag data changed`);
  }
});


test('new candidate tags use explicit category defaults and exact aliases, not languages or free text', () => {
  assert.deepEqual(inferCanonicalTags({ category: 'SDK & Decision Frameworks', tags: ['Go', 'Integration'] }), ['multilanguage-sdk', 'typed-decisions']);
  assert.deepEqual(inferCanonicalTags({ category: 'CLI & Pipelines', tags: ['CLI', 'Rust', 'Git'] }), ['cli-git-gates', 'typed-decisions']);
  assert.deepEqual(inferCanonicalTags({ category: 'Browser & OS Action', tags: ['macOS', 'Desktop Automation'] }), ['desktop-os', 'typed-decisions']);
  assert.deepEqual(inferCanonicalTags({ category: 'Data & Search', tags: ['SQL', 'Database'] }), ['database-vector', 'classification-ranking']);
  assert.deepEqual(inferCanonicalTags({ category: 'Domain & Vertical Tools', tags: ['Trading', 'Finance'] }), ['finance-quant', 'typed-decisions']);
  assert.deepEqual(inferCanonicalTags({ category: 'MCP & Integrations', tags: ['MCP', 'Classification', 'Typed Decisions', 'Browser'] }), ['mcp-integrations', 'classification-ranking', 'typed-decisions']);
  assert.deepEqual(inferCanonicalTags({ category: 'Unknown', tags: ['Go', 'Python'], name: 'Browser', description: 'Claims to do everything with MCP and games' }), ['typed-decisions', 'classification-ranking']);
});

test('every current category produces two or three known tags for future candidates', () => {
  for (const category of new Set(projects.map((project) => project.category))) {
    const tags = inferCanonicalTags({ category });
    assert.ok(tags.length >= 2 && tags.length <= 3);
    assert.equal(new Set(tags).size, tags.length);
    assert.ok(tags.every((tag) => validIds.has(tag)), category);
  }
  assert.equal(resolveTagId('9Hz'), null);
  assert.ok(!tagSearchText('games-simulation').includes('9Hz'));
  const input = { category: 'Creative Tools', tags: ['Creative', 'MIDI'] };
  const before = structuredClone(input);
  inferCanonicalTags(input);
  assert.deepEqual(input, before);
});
