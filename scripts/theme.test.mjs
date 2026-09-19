import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const source = readFileSync(new URL('../public/theme-init.js', import.meta.url), 'utf8');
const key = 'awesome-jev-theme';

function browser({ saved = null, dark = false, blockedStorage = false } = {}) {
  const documentEvents = new Map();
  const windowEvents = new Map();
  const root = { dataset: {} };
  const changes = [];
  const buttons = [];
  const storage = new Map(saved ? [[key, saved]] : []);
  const media = { matches: dark, addEventListener: (_, callback) => { media.onChange = callback; } };
  const window = {
    matchMedia: () => media,
    addEventListener: (event, callback) => windowEvents.set(event, callback),
    dispatchEvent: event => changes.push(event.detail),
  };
  const document = {
    documentElement: root,
    querySelectorAll: () => buttons,
    addEventListener: (event, callback) => documentEvents.set(event, callback),
  };
  const localStorage = {
    getItem: name => { if (blockedStorage) throw Error('SecurityError'); return storage.get(name) ?? null; },
    setItem: (name, value) => { if (blockedStorage) throw Error('SecurityError'); storage.set(name, value); },
    removeItem: name => { if (blockedStorage) throw Error('SecurityError'); storage.delete(name); },
  };
  class Element {
    constructor(button) { this.button = button; }
    closest() { return this.button; }
  }
  vm.runInNewContext(source, { window, document, localStorage, Element, CustomEvent: class { constructor(type, init) { this.type = type; this.detail = init.detail; } } });
  return { api: window.awesomeJevTheme, root, media, storage, changes, buttons, documentEvents, windowEvents, Element };
}

test('theme is resolved before body paint and tracks the system until explicitly chosen', () => {
  const b = browser({ dark: true });
  assert.equal(b.root.dataset.theme, 'dark');
  assert.equal(b.api.getMode(), 'system');
  assert.equal(b.storage.size, 0);
  b.media.matches = false;
  b.media.onChange();
  assert.equal(b.root.dataset.theme, 'light');
  b.api.toggle();
  assert.equal(b.api.getResolved(), 'dark');
  assert.equal(b.storage.get(key), 'dark');
  b.media.onChange();
  assert.equal(b.api.getResolved(), 'dark');
  assert.ok(Object.isFrozen(b.api));
});

test('saved theme overrides the OS and system mode resets the saved preference', () => {
  const b = browser({ saved: 'light', dark: true });
  assert.equal(b.api.getResolved(), 'light');
  b.api.setMode('system');
  assert.equal(b.api.getResolved(), 'dark');
  assert.equal(b.api.getMode(), 'system');
  assert.equal(b.storage.has(key), false);
  b.api.setMode('invalid');
  assert.equal(b.api.getMode(), 'system');
  assert.equal(browser({ saved: '<script>', dark: true }).api.getMode(), 'system');
});

test('storage-denied browsers still render and toggle for the current visit', () => {
  const b = browser({ blockedStorage: true, dark: true });
  b.api.toggle();
  assert.equal(b.root.dataset.theme, 'light');
  b.api.setMode('system');
  assert.equal(b.root.dataset.theme, 'dark');
});

test('theme changes synchronize between tabs and clearing storage resumes system preference', () => {
  const b = browser({ dark: true });
  b.windowEvents.get('storage')({ key, newValue: 'light' });
  assert.equal(b.api.getResolved(), 'light');
  b.windowEvents.get('storage')({ key: 'unrelated', newValue: 'dark' });
  assert.equal(b.api.getResolved(), 'light');
  b.windowEvents.get('storage')({ key: null, newValue: null });
  assert.equal(b.api.getMode(), 'system');
  assert.equal(b.api.getResolved(), 'dark');
});

test('static page buttons are labeled after parsing and their nested icons toggle once', () => {
  const b = browser();
  const attributes = new Map([
    ['data-theme-dark-label', 'Switch to dark mode'],
    ['data-theme-light-label', 'Switch to light mode'],
  ]);
  const button = { getAttribute: name => attributes.get(name), setAttribute: (name, value) => attributes.set(name, value) };
  b.buttons.push(button);
  b.documentEvents.get('DOMContentLoaded')();
  assert.equal(attributes.get('aria-label'), 'Switch to dark mode');
  b.documentEvents.get('click')({ target: new b.Element(button) });
  assert.equal(b.api.getResolved(), 'dark');
  assert.equal(attributes.get('title'), 'Switch to light mode');
  b.documentEvents.get('click')({ target: new b.Element(null) });
  assert.equal(b.api.getResolved(), 'dark');
  assert.equal(b.changes.at(-1).resolved, 'dark');
});

test('pre-paint initializer remains below 2 KB and has no network, cookies or dynamic execution', () => {
  assert.ok(Buffer.byteLength(source) < 2048);
  assert.doesNotMatch(source, /\bfetch\b|XMLHttpRequest|sendBeacon|document\.cookie|eval\(|new Function/);
});

test('four-language theme button renders without a browser and has no duplicate delegated handler', async () => {
  const { createServer } = await import('vite');
  const { renderToStaticMarkup } = await import('react-dom/server');
  const { createElement } = await import('react');
  const server = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' });
  try {
    const { ThemeToggle } = await server.ssrLoadModule('/src/components/ThemeToggle.tsx');
    for (const locale of ['zh', 'en', 'ja', 'ko']) {
      const html = renderToStaticMarkup(createElement(ThemeToggle, { locale }));
      assert.match(html, /aria-label="[^"]+"/);
      assert.match(html, /type="button"/);
      assert.doesNotMatch(html, /data-theme-toggle/);
      if (locale === 'en' || locale === 'ko') assert.doesNotMatch(html, /\p{Script=Han}/u);
    }
  } finally { await server.close(); }
});

test('dark theme text, secondary copy, warning and error colors meet 4.5:1 on their surfaces', () => {
  const luminance = hex => {
    const values = hex.match(/[a-f\d]{2}/gi).map(value => Number.parseInt(value, 16) / 255).map(value => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4);
    return 0.2126 * values[0] + 0.7152 * values[1] + 0.0722 * values[2];
  };
  for (const [foreground, background] of [
    ['#eef2e9', '#121412'], ['#eef2e9', '#1c201c'], ['#aebba5', '#252c23'],
    ['#d7fa91', '#2b3822'], ['#202620', '#d7fa91'], ['#efcf8d', '#332a19'],
    ['#ffb1a5', '#1c201c'], ['#e2efcf', '#151b12'],
  ]) {
    const a = luminance(foreground), b = luminance(background);
    assert.ok((Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05) >= 4.5, `${foreground} on ${background}`);
  }
});
