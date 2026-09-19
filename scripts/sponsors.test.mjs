import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { safeSponsorUrl, safeSponsorLogo, activeSponsors, featuredSponsors, sponsorCopy, sponsorLocale } from '../src/lib/sponsors.mjs';

const now = Date.parse('2026-09-19T00:00:00Z');
const valid = {
  id: 'example-tool', name: 'Example Tool', tier: 'headline',
  url: 'https://example.com/tool', logo: 'sponsors/example.webp',
  startsAt: '2026-09-01T00:00:00Z', endsAt: '2026-10-01T00:00:00Z',
  description: { en: 'A tool for testing Agent decisions.', zh: '用于测试 Agent 决策的工具。', ja: 'Agent の意思決定をテストするツール。', ko: 'Agent 의사결정을 테스트하는 도구.' },
};

test('sponsor outbound links accept HTTPS and reject credentials, active schemes and control characters', () => {
  assert.equal(safeSponsorUrl('https://example.com/tool?q=jev'), 'https://example.com/tool?q=jev');
  for (const value of ['javascript:alert(1)', 'data:text/html,x', '//example.com', 'http://example.com', 'https://user:pass@example.com', 'https://example.com/\nx', 'https://example.com/\\x', null, 4]) {
    assert.equal(safeSponsorUrl(value), null, String(value));
  }
});

test('sponsor logos are confined to same-site raster assets', () => {
  assert.equal(safeSponsorLogo('sponsors/example-tool.avif'), 'sponsors/example-tool.avif');
  for (const value of ['https://track.example/pixel.png', '//track.example/pixel.png', '/sponsors/a.png', 'sponsors/../a.png', 'sponsors/a.svg', 'sponsors/a.png?tracking=yes', 'sponsors/a.png#x', 'sponsors/%2f.png', null]) assert.equal(safeSponsorLogo(value), null);
});

test('placements fail closed without both valid dates and stop exactly at expiry', () => {
  assert.equal(activeSponsors([valid], now).length, 1);
  for (const change of [
    { startsAt: undefined }, { endsAt: undefined }, { startsAt: null }, { endsAt: 'never' },
    { startsAt: '2026-09-20T00:00:00Z' }, { endsAt: '2026-09-19T00:00:00Z' },
    { startsAt: '2026-10-01T00:00:00Z' }, { startsAt: '2026-02-30T00:00:00Z' },
  ]) assert.equal(activeSponsors([{ ...valid, ...change }], now).length, 0, JSON.stringify(change));
  assert.equal(activeSponsors([valid], Date.parse(valid.startsAt)).length, 1);
  assert.deepEqual(activeSponsors([valid], NaN), []);
});

test('invalid sponsor data is omitted without mutating canonical records', () => {
  const input = structuredClone(valid);
  const before = JSON.stringify(input);
  assert.equal(activeSponsors([null, {}, input, input, { ...valid, id: 'invalid', url: 'javascript:x' }], now).length, 1);
  assert.equal(JSON.stringify(input), before);
  assert.deepEqual(activeSponsors(null, now), []);
  for (const change of [{ id: '../x' }, { name: '' }, { tier: 'pretend-editorial' }, { logo: 'https://example.com/a.png' }, { description: {} }, { description: { en: 'x'.repeat(241) } }]) assert.deepEqual(activeSponsors([{ ...valid, ...change }], now), []);
});

test('headline placement is capped at two and category sponsors appear only in their category', () => {
  const records = [valid, { ...valid, id: 'two' }, { ...valid, id: 'three' }, { ...valid, id: 'router', tier: 'category', category: 'Model Routing' }];
  assert.deepEqual(featuredSponsors(records, 'all', now).map((p) => p.id), ['example-tool', 'two']);
  assert.deepEqual(featuredSponsors(records, 'Model Routing', now).map((p) => p.id), ['router']);
  assert.deepEqual(featuredSponsors(records, 'Security', now), []);
  assert.deepEqual(activeSponsors([{ ...valid, tier: 'category' }], now), []);
});

test('missing translations fall back to English while English and Korean never receive Han copy', () => {
  const output = activeSponsors([{ ...valid, description: { en: 'A routing tool for Agent workflows.', ko: '错误的中文' } }], now)[0];
  assert.equal(output.description.zh, output.description.en);
  assert.equal(output.description.ko, output.description.en);
  assert.deepEqual(activeSponsors([{ ...valid, description: { en: '中文介绍' } }], now), []);
});

test('sponsorship copy has complete locale parity and no Han in English or Korean', () => {
  const keys = Object.keys(sponsorCopy.en).sort();
  for (const language of ['zh', 'en', 'ja', 'ko']) {
    assert.deepEqual(Object.keys(sponsorCopy[language]).sort(), keys);
    assert.ok(sponsorCopy[language].audience.includes('{count}'));
    assert.equal(sponsorCopy[language].benefits.length, 3);
  }
  for (const language of ['en', 'ko']) assert.doesNotMatch(JSON.stringify(sponsorCopy[language]), /\p{Script=Han}/u);
  assert.equal(sponsorLocale('ja'), 'ja');
  assert.equal(sponsorLocale('de'), 'en');
});

test('sponsorship configuration keeps declared tiers and public contact channels without fake checkout URLs', async () => {
  const config = JSON.parse(await readFile(new URL('../src/data/sponsors.json', import.meta.url), 'utf8'));
  assert.ok(Array.isArray(config.partners));
  assert.deepEqual(config.tiers, [{ id: 'headline', priceUsd: 199, slots: 2 }, { id: 'category', priceUsd: 99, slots: 1 }]);
  assert.equal(config.contacts.email, 'logicrw.chen@gmail.com');
  assert.equal(config.contacts.telegram, '@logicrw');
  assert.equal(safeSponsorUrl(config.contacts.telegramUrl), 'https://t.me/logicrw');
  assert.equal(safeSponsorUrl(config.contacts.xUrl), 'https://x.com/0xLogicrw');
  assert.equal('checkout' in config, false);
});
