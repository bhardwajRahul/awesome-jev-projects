import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createServer } from 'vite';
import { publicProjects } from './prepare-public-data.mjs';
import { dailyProject, localDay } from '../src/lib/discovery.mjs';

const rows = publicProjects(JSON.parse(await readFile(new URL('../src/data/projects.json', import.meta.url), 'utf8')));

test('daily discovery is identical in four locales while existing Header, Sponsor and search remain intact', async () => {
  const server = await createServer({ server: { middlewareMode: true, hmr: false, ws: false }, appType: 'custom' });
  try {
    const { default: App } = await server.ssrLoadModule('/src/App.tsx');
    const day = '2026-09-19';
    const expected = dailyProject(rows, day);
    for (const initialLocale of ['zh', 'en', 'ja', 'ko']) {
      const html = renderToStaticMarkup(createElement(App, { initialProjects: rows, initialLocale, initialDay: day }));
      const daily = html.match(/<button[^>]*class="daily-project"[\s\S]*?<\/button>/)?.[0];
      assert.ok(daily?.includes(expected.name), `${initialLocale}: same calendar-day selection`);
      assert.ok(daily.includes(`dateTime="${day}"`) || daily.includes(`datetime="${day}"`));
      assert.doesNotMatch(daily, /\bUTC\b/);
      assert.doesNotMatch(daily, /title="[^"]*UTC"/);
      assert.doesNotMatch(daily, /<svg\b/);
      assert.ok(daily.includes('今日一荐') || daily.includes('Project of the day') || daily.includes('今日のプロジェクト') || daily.includes('오늘의 프로젝트'));
      if (['en', 'ko'].includes(initialLocale)) assert.ok(!/\p{Script=Han}/u.test(daily), `${initialLocale}: translated daily card`);
      assert.equal((html.match(/class="card-dispenser"/g) ?? []).length, 1);
      assert.ok(html.includes('class="jevy"'), 'The original mechanical assistant is present in every locale');
      const status = html.match(/<div class="hero-engine-status"[\s\S]*?<\/div>/)?.[0];
      assert.ok(status?.includes(String(rows.length)), 'The status badge uses the actual catalog size');
      if (['en', 'ko'].includes(initialLocale)) assert.doesNotMatch(status, /\p{Script=Han}/u);
      assert.ok(html.includes('class="header-ecosystem"') && html.includes('class="header-utilities"'));
      assert.ok(html.includes('class="discovery-entry" hidden=""'), 'Secondary draw link stays hidden on the deck tab');
      assert.ok(!html.includes('class="gacha-dialog"'), 'No automatic draw or modal on first render');
      assert.equal((html.match(/data-project-id=/g) ?? []).length, 24, 'Initial grid stays bounded');
      assert.equal((html.match(/class="featured-partners"/g) ?? []).length, 1);
      assert.ok(html.includes('class="quick-filters"') && html.includes('class="search-box"'));
      const header = html.match(/<header[^>]*>([\s\S]*?)<\/header>/)[1];
      assert.ok(header.includes('sponsor-entry-button') && header.includes('agent-skill-btn'));
      assert.ok(!header.includes('discovery-entry'), 'Do not expand the six mobile Header slots');
      assert.ok(header.indexOf('language-control') > header.indexOf('submit-top'));
      assert.ok(header.includes('github-star-btn') && !header.includes('>0</a>'));
    }
  } finally { await server.close(); }
});

test('daily card renders the snapshot civil day locally without UTC branding or a fake external link', async () => {
  const server = await createServer({ server: { middlewareMode: true, hmr: false, ws: false }, appType: 'custom' });
  try {
    const { DailyProject } = await server.ssrLoadModule('/src/components/DailyProject.tsx');
    const day = '2026-09-20';
    const expected = dailyProject(rows, day);
    const html = renderToStaticMarkup(createElement(DailyProject, { projects: rows, locale: 'zh', initialDay: day, onOpen() {} }));
    assert.ok(html.includes(expected.name));
    assert.ok(html.includes('今日一荐'));
    assert.match(html, /datetime="2026-09-20"/i);
    assert.match(html, /<strong[^>]*>20<\/strong>/);
    assert.doesNotMatch(html, /\bUTC\b/);
    assert.doesNotMatch(html, /<svg\b/);
    assert.match(html, /aria-label="查看今日项目: /);
    assert.equal(localDay(new Date(2026, 8, 20, 7, 59, 59, 999)), '2026-09-20');
  } finally { await server.close(); }
});

test('daily selection is independent of list order and never selects quarantined project data', () => {
  const before = JSON.stringify(rows);
  for (const day of ['2026-09-19', '2026-09-20', '2026-12-31', '2027-01-01']) {
    assert.equal(dailyProject(rows, day).id, dailyProject([...rows].reverse(), day).id);
    assert.notEqual(dailyProject(rows, day).catalogStatus, 'review-pending');
  }
  assert.equal(JSON.stringify(rows), before);
});


test('draw text exposes its actual fallback language to assistive technology', async () => {
  const server = await createServer({ server: { middlewareMode: true, hmr: false, ws: false }, appType: 'custom' });
  try {
    const { GachaDialog } = await server.ssrLoadModule('/src/components/GachaDialog.tsx');
    const project = { ...rows.find((row) => row.catalogStatus !== 'review-pending'), plainSummaryEn: 'English fallback summary', jevDecisionPointEn: 'Choose a safe candidate', plainSummaryJa: undefined, plainSummaryKo: undefined, jevDecisionPointJa: undefined, jevDecisionPointKo: undefined };
    for (const locale of ['ja', 'ko']) {
      const html = renderToStaticMarkup(createElement(GachaDialog, { projects: [project], locale, onClose() {} }));
      assert.match(html, /class="gacha-summary" lang="en">English fallback summary/);
      assert.match(html, /<p lang="en">Choose a safe candidate/);
      assert.ok(html.includes('target="_blank" rel="noopener noreferrer"'));
    }
  } finally { await server.close(); }
});

test('draw avatars have visible initials before loading and reject untrusted image hosts', async () => {
  const server = await createServer({ server: { middlewareMode: true, hmr: false, ws: false }, appType: 'custom' });
  try {
    const { GachaDialog } = await server.ssrLoadModule('/src/components/GachaDialog.tsx');
    const project = { ...rows.find((row) => row.catalogStatus !== 'review-pending'), author: 'logicrw' };
    for (const avatarUrl of ['https://avatars.githubusercontent.com/u/1?v=4', undefined, 'https://example.com/avatar.png']) {
      const html = renderToStaticMarkup(createElement(GachaDialog, { projects: [{ ...project, avatarUrl }], locale: 'en', onClose() {} }));
      const avatar = html.match(/<span class="gacha-avatar-frame"[\s\S]*?<\/span>(?:<img[^>]*\/>)?<\/span>/)?.[0];
      assert.ok(avatar, 'The avatar always reserves its own space');
      assert.match(avatar, /class="gacha-avatar gacha-initial">LO<\/span>/, 'Initials are visible while the image is pending or absent');
      if (avatarUrl?.startsWith('https://avatars.githubusercontent.com/')) {
        assert.match(avatar, /<img[^>]+data-ready="false"/);
      } else {
        assert.doesNotMatch(avatar, /<img/);
      }
    }
  } finally { await server.close(); }
});
