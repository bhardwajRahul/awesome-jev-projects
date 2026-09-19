import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const projects = JSON.parse(readFileSync(new URL('../src/data/projects.json', import.meta.url), 'utf8'));
const sdk = projects.find(project => project.id === 'typesafe-ai:typesafe-sdk-python');

test('the official Python SDK retains immutable source evidence after catalog merges', () => {
  assert.ok(sdk, 'The official SDK must remain in the catalog');
  const proof = sdk.sourceVerification;
  assert.match(proof?.sha ?? '', /^[a-f0-9]{40}$/);
  assert.ok(proof.files?.length > 0, 'A source-reviewed SDK needs file receipts');
  const prefix = `/typesafe-ai/typesafe-sdk-python/blob/${proof.sha}/`;
  for (const file of proof.files) {
    const url = new URL(file.url);
    assert.equal(url.origin, 'https://github.com');
    assert.equal(url.pathname, prefix + file.path);
    assert.equal(file.hashType, 'sha256');
    assert.match(file.hash, /^[a-f0-9]{64}$/);
    assert.notEqual(file.hash, 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855', 'Empty downloads are not source evidence');
  }
  assert.ok(proof.files.some(file => file.path === sdk.sourcePath && file.url === sdk.sourceUrl));
  assert.ok(sdk.evidence.some(item => item.url === sdk.sourceUrl));
});

test('the official SDK has its own complete four-language copy', () => {
  assert.ok(sdk);
  for (const suffix of ['', 'En', 'Ja', 'Ko']) {
    for (const field of ['plainSummary', 'jevDecisionPoint', 'highlightBenefit', 'claimStatus']) {
      const text = sdk[field + suffix];
      assert.ok(typeof text === 'string' && text.trim().length > 0, field + suffix);
      if (suffix === 'En' || suffix === 'Ko') assert.doesNotMatch(text, /\p{Script=Han}/u);
    }
  }
});
