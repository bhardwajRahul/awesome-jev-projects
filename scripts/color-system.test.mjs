import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const css = readFileSync(new URL('../src/styles/theme.css', import.meta.url), 'utf8');

// Read the shipped declarations instead of keeping a second, test-only palette.
function declarations(selector) {
  const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const block = css.match(new RegExp(`${escaped}\\s*\\{([^}]+)\\}`))?.[1];
  assert.ok(block, `Missing palette selector ${selector}`);
  return Object.fromEntries([...block.matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)].map(([, key, value]) => [key, value.trim()]));
}
function palette(mode) {
  const values = { ...declarations(':root'), ...(mode === 'dark' ? declarations(':root[data-theme="dark"]') : {}) };
  const resolve = (token, seen = new Set()) => {
    assert.ok(values[token], `Missing token ${token}`);
    assert.ok(!seen.has(token), `Circular token ${token}`);
    const next = values[token].match(/^var\((--[\w-]+)\)$/)?.[1];
    return next ? resolve(next, new Set([...seen, token])) : values[token];
  };
  return { values, resolve };
}
function luminance(hex) {
  assert.match(hex, /^#[\da-f]{6}$/i, 'Contrast roles must resolve to opaque sRGB colors');
  const [red, green, blue] = hex.slice(1).match(/../g).map(value => Number.parseInt(value, 16) / 255)
    .map(value => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4);
  return .2126 * red + .7152 * green + .0722 * blue;
}
function contrast(a, b) {
  const [high, low] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (high + .05) / (low + .05);
}
const surfaces = ['canvas', 'surface', 'surface-raised', 'surface-inset'];
const textRoles = ['text', 'text-muted', 'text-quiet'];
const contextualPairs = [
  ['accent-text', 'accent-soft'], ['on-accent', 'accent'],
  ['brass', 'brass-soft'], ['danger', 'danger-soft'],
  ['primary-text', 'primary-bg'], ['code-text', 'code-bg'],
];

for (const mode of ['light', 'dark']) {
  test(`${mode} semantic roles resolve and ordinary text meets AA on every content surface`, () => {
    const { resolve } = palette(mode);
    for (const text of textRoles) for (const surface of surfaces) {
      const ratio = contrast(resolve(`--${text}`), resolve(`--${surface}`));
      assert.ok(ratio >= 4.5, `${mode}: ${text} on ${surface}: ${ratio.toFixed(2)}:1`);
    }
    for (const [text, surface] of contextualPairs) {
      const ratio = contrast(resolve(`--${text}`), resolve(`--${surface}`));
      assert.ok(ratio >= 4.5, `${mode}: ${text} on ${surface}: ${ratio.toFixed(2)}:1`);
    }
    for (const text of ['accent-text', 'brass', 'danger']) for (const surface of surfaces) {
      const ratio = contrast(resolve(`--${text}`), resolve(`--${surface}`));
      assert.ok(ratio >= 4.5, `${mode}: ${text} on ${surface}: ${ratio.toFixed(2)}:1`);
    }
  });

  test(`${mode} keyboard focus is distinguishable and the nine neutrals have a strict lightness order`, () => {
    const { resolve } = palette(mode);
    for (const surface of [...surfaces, 'accent-soft', 'brass-soft', 'danger-soft']) {
      assert.ok(contrast(resolve('--focus'), resolve(`--${surface}`)) >= 3, `${mode}: focus on ${surface}`);
    }
    const neutrals = Array.from({ length: 9 }, (_, index) => luminance(resolve(`--neutral-${index}`)));
    for (let index = 1; index < neutrals.length; index++) {
      assert.ok(mode === 'light' ? neutrals[index] < neutrals[index - 1] : neutrals[index] > neutrals[index - 1], `${mode}: neutral-${index} must progress in lightness`);
    }
  });

  test(`${mode} material surfaces keep functional text readable across both metal stops`, () => {
    const { resolve } = palette(mode);
    for (const surface of ['metal-top', 'metal-bottom']) for (const text of ['text', 'text-muted']) {
      assert.ok(contrast(resolve(`--${text}`), resolve(`--${surface}`)) >= 4.5, `${mode}: ${text} on ${surface}`);
    }
  });

  test(`${mode} compatibility aliases and the persistent dark discovery stage use the same semantic system`, () => {
    const { resolve } = palette(mode);
    for (const [alias, role] of Object.entries({ 'page-bg': 'canvas', 'theme-panel': 'surface', 'theme-raised': 'surface-raised', 'theme-text': 'text', 'theme-muted': 'text-muted', line: 'border', muted: 'text-muted', lime: 'accent' })) {
      assert.equal(resolve(`--${alias}`), resolve(`--${role}`), alias);
    }
    const dark = palette('dark');
    for (const role of [...surfaces, ...textRoles, 'border', 'border-strong', 'accent-text', 'accent-soft', 'on-accent', 'brass', 'brass-soft', 'danger', 'danger-soft', 'focus', 'primary-bg', 'primary-text', 'code-bg', 'code-text', 'overlay', 'shadow-soft', 'shadow-hover', 'shadow-dialog']) {
      assert.equal(resolve(`--night-${role}`), dark.resolve(`--${role}`), `Discovery ${role} must not diverge from the dark palette`);
    }
  });
}

test('canvas and electric lime honor the brand while theme rules avoid component-specific dark overrides', () => {
  assert.equal(palette('light').resolve('--canvas'), '#fafaf8');
  assert.equal(palette('dark').resolve('--canvas'), '#101310');
  assert.equal(palette('light').resolve('--accent'), '#d7fa91');
  assert.equal(palette('dark').resolve('--accent'), '#d7fa91');
  assert.doesNotMatch(css, /!important|:root\[data-theme="dark"\]\s+:is\(/);
  for (const match of css.matchAll(/:root\[data-theme="dark"\]([^{}]*)\{/g)) {
    const descendant = match[1].trim();
    assert.ok(!descendant || /^\.theme-toggle \.theme-icon-(?:light|dark)$/.test(descendant), `Theme-specific component override: ${descendant}`);
  }
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.match(css, /::placeholder\s*\{[^}]*var\(--text-quiet\)[^}]*opacity:\s*1/);
});


test('theme changes do not crossfade foreground independently from backgrounds', () => {
  for (const file of ['src/styles.css','src/styles/theme.css','src/styles/daily-project.css','src/styles/sponsors.css','src/styles/discovery.css','src/styles/developer-actions.css','src/styles/card-dispenser.css','src/styles/hero-engineering.css','src/styles/jevy.css','public/directory.css']) {
    const source = readFileSync(new URL('../' + file, import.meta.url), 'utf8');
    for (const match of source.matchAll(/transition\s*:\s*([^;}]+)/g)) {
      assert.ok(!match[1].split(',').some(part => /^\s*(?:color|background(?:-color)?)\s/.test(part)), `${file}: palette changes must remain atomic`);
    }
  }
});
