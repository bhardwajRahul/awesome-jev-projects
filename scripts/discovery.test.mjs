import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import { dailyProject, drawProject, eligibleProjects, localDay, nextLocalMidnightDelay, nextUtcMidnightDelay, rarity, utcDay } from '../src/lib/discovery.mjs';

const project = (id, overrides = {}) => ({ id, stars: 30, license: 'MIT', licenseStatus: 'declared', ...overrides });
const ids = (projects) => projects.map(({ id }) => id);
const catalog = JSON.parse(readFileSync(new URL('../src/data/projects.json', import.meta.url), 'utf8'));

test('discovery excludes pending records, deduplicates stable IDs and preserves source data', () => {
  const items = Object.freeze([
    Object.freeze(project('z')),
    Object.freeze(project('a', { catalogStatus: 'review-pending' })),
    Object.freeze(project('a')),
    Object.freeze(project('z')),
    Object.freeze(project('')),
    null,
  ]);
  assert.deepEqual(ids(eligibleProjects(items)), ['a', 'z']);
  assert.deepEqual(ids(eligibleProjects([...items].reverse())), ['a', 'z']);
  assert.equal(items.length, 6);
});

test('conflicting duplicate selection metadata resolves independently of input order', () => {
  const items = [project('a', { stars: 30 }), project('a', { stars: 2000 }), project('b', { stars: 29 })];
  assert.deepEqual(eligibleProjects(items), eligibleProjects([...items].reverse()));
  assert.equal(dailyProject(items, '2026-09-19').id, dailyProject([...items].reverse(), '2026-09-19').id);
});

test('UTC helpers remain available for a specified instant, including leap days', () => {
  const before = new Date('2028-03-01T07:59:59.999+08:00');
  assert.equal(utcDay(before), '2028-02-29');
  assert.equal(nextUtcMidnightDelay(before), 1);
  const midnight = new Date('2028-03-01T00:00:00Z');
  assert.equal(utcDay(midnight), '2028-03-01');
  assert.equal(nextUtcMidnightDelay(midnight), 86_400_000);
  assert.equal(nextUtcMidnightDelay(new Date('1969-12-31T23:59:59.999Z')), 1);
  assert.throws(() => utcDay(new Date('bad-date')), RangeError);
  assert.throws(() => nextUtcMidnightDelay(new Date('bad-date')), RangeError);
});

test('visitor civil day follows local calendar fields and next local midnight handles leap days', () => {
  const morning = new Date(2028, 1, 29, 8, 0, 0, 0);
  assert.equal(localDay(morning), '2028-02-29');
  const beforeMidnight = new Date(2028, 1, 29, 23, 59, 59, 999);
  assert.equal(localDay(beforeMidnight), '2028-02-29');
  assert.equal(nextLocalMidnightDelay(beforeMidnight), 1);
  const midnight = new Date(2028, 2, 1, 0, 0, 0, 0);
  assert.equal(localDay(midnight), '2028-03-01');
  const nextMidnight = new Date(midnight);
  nextMidnight.setHours(24, 0, 0, 0);
  assert.equal(nextLocalMidnightDelay(midnight), nextMidnight.getTime() - midnight.getTime());
  assert.ok(nextLocalMidnightDelay(midnight) > 0);
  assert.throws(() => localDay(new Date('bad-date')), RangeError);
  assert.throws(() => nextLocalMidnightDelay(new Date('bad-date')), RangeError);
});

test('East-eight morning is not forced onto the previous UTC date', () => {
  const localMorning = new Date(2028, 2, 1, 7, 59, 59, 999);
  assert.equal(localDay(localMorning), '2028-03-01');
  if (localMorning.getTimezoneOffset() < 0) {
    assert.equal(utcDay(localMorning), '2028-02-29');
    assert.notEqual(localDay(localMorning), utcDay(localMorning));
  }
});

test('daily project validates real calendar days instead of silently rolling dates', () => {
  for (const day of ['2026-02-29', '2026-04-31', '2026-13-01', '2026-9-19', '2026-09-19T00:00Z', '', undefined]) {
    assert.throws(() => dailyProject([], day), RangeError, String(day));
  }
  assert.equal(dailyProject([], '2028-02-29'), null);
});

test('daily pool prefers licensed 20–50 star long-tail projects and includes copyleft', () => {
  const items = [
    project('mit20', { stars: 20 }), project('gpl50', { stars: 50, license: 'GPL-2.0', licenseStatus: 'confirmed' }),
    project('popular', { stars: 5000 }), project('below', { stars: 19 }), project('above', { stars: 51 }),
    project('unknown', { license: null, licenseStatus: 'unconfirmed' }),
    project('restricted', { license: 'Custom license', licenseStatus: 'custom' }),
    project('pending', { catalogStatus: 'review-pending' }),
  ];
  const draws = ['2026-09-19', '2026-09-20'].map((day) => dailyProject(items, day).id);
  assert.deepEqual([...draws].sort(), ['gpl50', 'mit20']);
});

test('daily fallback retains zero-star projects and unknown licenses without implying permission', () => {
  const small = project('zero', { stars: 0, license: null, licenseStatus: 'unconfirmed' });
  const big = project('big', { stars: 1000 });
  assert.equal(dailyProject([small, big], '2026-09-19'), small);
  assert.equal(dailyProject([big], '2026-09-19'), big);
  const unknown = project('unknown', { stars: null, license: null });
  assert.equal(dailyProject([unknown], '2026-09-19'), unknown);
  assert.equal(dailyProject([project('p', { catalogStatus: 'review-pending' })], '2026-09-19'), null);
});

test('every member receives one day per cycle with no adjacent repeats, unaffected by language or order', () => {
  const items = ['charlie', 'alpha', 'bravo'].map((id) => project(id));
  const seen = new Set();
  let previous;
  for (let offset = 0; offset < 6; offset += 1) {
    const day = localDay(new Date(2026, 8, 19 + offset));
    const selected = dailyProject(items, day);
    assert.notEqual(selected.id, previous);
    assert.equal(selected.id, dailyProject([...items].reverse().map((item) => ({ ...item, plainSummary: '文本不影响选择', plainSummaryEn: 'Changed translation' })), day).id);
    if (offset < 3) seen.add(selected.id);
    previous = selected.id;
  }
  assert.equal(seen.size, 3);
  assert.ok(dailyProject(items, '1969-12-31'));
});

test('draws are uniformly indexed, avoid immediate repeats and ignore stars or locale', () => {
  const items = [project('b', { stars: 0 }), project('a', { stars: 100000 }), project('c', { stars: null })];
  assert.deepEqual([0, 1 / 3, 2 / 3].map((value) => drawProject(items, undefined, value).id), ['a', 'b', 'c']);
  assert.equal(drawProject(items, 'a', 0).id, 'b');
  assert.equal(drawProject([...items].reverse(), 'a', 0.999).id, 'c');
  assert.equal(drawProject([items[0]], items[0].id, 0), items[0]);
  assert.equal(drawProject([], undefined, 0), null);
  assert.equal(drawProject([project('pending', { catalogStatus: 'review-pending' })], undefined, 0), null);
  for (const value of [-1, 1, Infinity, NaN]) assert.throws(() => drawProject(items, undefined, value), RangeError);
});

test('rarity is a finite popularity threshold, not source quality or an unknown-star assumption', () => {
  assert.equal(rarity(project('a', { stars: 1000 })), 'ssr');
  assert.equal(rarity(project('a', { stars: 999 })), 'rising');
  for (const stars of [0, null, undefined, -1, NaN, Infinity]) assert.equal(rarity({ id: 'a', stars }), 'rising');
});

test('real catalog discovery does not mutate metadata or recommend quarantined records', () => {
  const before = JSON.stringify(catalog);
  const eligible = eligibleProjects(catalog);
  assert.equal(eligible.length, catalog.filter(({ catalogStatus }) => catalogStatus !== 'review-pending').length);
  for (let day = 0; day < 30; day += 1) {
    const selected = dailyProject(catalog, localDay(new Date(2026, 8, 19 + day)));
    assert.ok(selected.stars >= 20 && selected.stars <= 50);
    assert.ok(['declared', 'confirmed'].includes(selected.licenseStatus));
    assert.notEqual(selected.catalogStatus, 'review-pending');
  }
  assert.equal(JSON.stringify(catalog), before);
});
