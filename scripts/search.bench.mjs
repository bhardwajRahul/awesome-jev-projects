// Run manually: node scripts/search.bench.mjs --output /tmp/search-benchmark.json
// Timings are observations, not a CI assertion. No search-result memoization is
// added here: every warmup and measured call executes the supplied engine.
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { cpus, platform, arch, release } from 'node:os';
import { dirname, resolve } from 'node:path';
import { performance } from 'node:perf_hooks';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { parseArgs } from 'node:util';

const root = fileURLToPath(new URL('..', import.meta.url));
const { values } = parseArgs({ options: {
  engine: { type: 'string', default: 'src/lib/search.mjs' },
  catalog: { type: 'string', default: 'src/data/projects.json' },
  records: { type: 'string', default: '300' },
  iterations: { type: 'string', default: '100' },
  warmup: { type: 'string', default: '5' },
  'build-iterations': { type: 'string', default: '10' },
  'source-sha': { type: 'string' },
  label: { type: 'string', default: 'working-tree' },
  query: { type: 'string' },
  output: { type: 'string' },
} });
const positiveInteger = (name) => {
  const value = Number(values[name]);
  if (!Number.isSafeInteger(value) || value < 1) throw new Error(`--${name} must be a positive integer`);
  return value;
};
const recordCount = positiveInteger('records');
const iterations = positiveInteger('iterations');
const warmupRounds = positiveInteger('warmup');
const buildIterations = positiveInteger('build-iterations');
const sha256 = (value) => createHash('sha256').update(value).digest('hex');
const enginePath = resolve(root, values.engine);
const catalogPath = resolve(root, values.catalog);
const engineBytes = readFileSync(enginePath);
const catalogBytes = readFileSync(catalogPath);
const benchmarkBytes = readFileSync(fileURLToPath(import.meta.url));
const catalog = JSON.parse(catalogBytes);
if (!Array.isArray(catalog) || !catalog.length || catalog.some((row) => !row || typeof row.id !== 'string')) {
  throw new Error('The benchmark requires a nonempty catalog with string IDs');
}
if (new Set(catalog.map(({ id }) => id)).size !== catalog.length) throw new Error('Catalog IDs must be unique');

// Preserve the real multilingual text, tags and topics. Pad only the final few
// records with catalog copies and unique IDs; do not replace prose with tokens.
const projects = catalog.slice(0, recordCount).map((row) => ({ ...row }));
const usedIds = new Set(projects.map(({ id }) => id));
for (let offset = 0; projects.length < recordCount; offset += 1) {
  const source = catalog[offset % catalog.length];
  let id = `${source.id}:benchmark-copy-${offset + 1}`;
  while (usedIds.has(id)) id += '-copy';
  usedIds.add(id);
  projects.push({ ...source, id });
}
const identityExample = projects.find((row) => row.name?.toLowerCase() === 'jev-cu') || projects[0];
const topic = projects.flatMap((row) => Array.isArray(row.topics) ? row.topics : [])
  .find((value) => typeof value === 'string' && value.length >= 4) || 'browser-automation';
const queries = [
  ['exact-name', identityExample.name || identityExample.id],
  ['exact-author', identityExample.author || identityExample.id],
  ['exact-id', identityExample.id],
  ['exact-url', identityExample.url || identityExample.id],
  ['url-fragment', (identityExample.url || identityExample.id).replace(/^https?:\/\//u, '')],
  ['owner-repo', `${identityExample.author}/${identityExample.name}`],
  ['topic', topic],
  ['browser-phrase', 'browser automation'],
  ['routing-phrase', 'model routing'],
  ['context-phrase', 'context GC'],
  ['technology-rust', 'Rust'],
  ['technology-claude', 'Claude'],
  ['technology-playwright', 'Playwright'],
  ['synonym-scraping', '爬虫'],
  ['synonym-cost', '省钱'],
  ['synonym-routing', '降本路由'],
  ['synonym-context', '上下文'],
  ['mixed-concepts', 'Rust 省钱'],
  ['adjacent-concepts', '爬虫自动化'],
  ['unknown-zh-term', '页面控件'],
  ['unknown-ja-term', '構造化'],
  ['unknown-ko-term', '확률'],
  ['known-phrase-plus-missing', 'browser automation qzxmissing'],
  ['multiword-two-of-three', 'browser scraping qzxmissing'],
  ['typo-browser', 'browesr'],
  ['typo-technology', 'Playwrigth'],
  ['typo-name', 'SemDecdie'],
  ['nonsense-latin', 'qzxvnotacatalogterm'],
  ['nonsense-cjk', '紫色海豚月球车'],
].map(([id, query]) => ({ id, query }))
  .filter(({ id }) => !values.query || id === values.query);
if (!queries.length) throw new Error(`Unknown --query ID: ${values.query}`);
const { createProjectSearch, searchProjects } = await import(pathToFileURL(enginePath));
if (typeof createProjectSearch !== 'function' || typeof searchProjects !== 'function') {
  throw new Error('Engine must export createProjectSearch and searchProjects');
}
const stats = (samples) => {
  const sorted = [...samples].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  return {
    samples: sorted.length,
    medianMs: sorted.length % 2 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2,
    p95Ms: sorted[Math.ceil(sorted.length * 0.95) - 1],
    maxMs: sorted.at(-1),
  };
};

// Cold construction is separate from warmed construction and query timings.
const coldStart = performance.now();
let index = createProjectSearch(projects);
const coldBuildMs = performance.now() - coldStart;
for (let round = 0; round < 3; round += 1) index = createProjectSearch(projects);
const buildSamples = [];
for (let round = 0; round < buildIterations; round += 1) {
  const start = performance.now();
  index = createProjectSearch(projects);
  buildSamples.push(performance.now() - start);
}
let consumedResults = 0;
for (let round = 0; round < warmupRounds; round += 1) {
  for (const { query } of queries) consumedResults += searchProjects(index, query).length;
}
const perQuery = queries.map((query) => ({ ...query, latencyMs: [], resultCount: null }));
const resultDigest = createHash('sha256');
const elapsedStart = performance.now();
for (let round = 0; round < iterations; round += 1) {
  // Rotate query order to spread scheduling/GC effects across query families.
  for (let offset = 0; offset < perQuery.length; offset += 1) {
    const entry = perQuery[(offset + round) % perQuery.length];
    const start = performance.now();
    const results = searchProjects(index, entry.query);
    entry.latencyMs.push(performance.now() - start);
    consumedResults += results.length;
    entry.resultCount = results.length;
    // Consume results outside the timed section; this also records result order.
    resultDigest.update(JSON.stringify([entry.id, results.map(({ id }) => id)]));
  }
}
const measuredElapsedMs = performance.now() - elapsedStart;
const queryStats = stats(perQuery.flatMap(({ latencyMs }) => latencyMs));
let gitHead = null;
try { gitHead = execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim(); } catch {}
const dependencyHash = (relativePath) => {
  try { return sha256(readFileSync(resolve(dirname(enginePath), relativePath))); } catch { return null; }
};
const report = {
  schemaVersion: 1,
  label: values.label,
  capturedAt: new Date().toISOString(),
  environment: { node: process.version, v8: process.versions.v8, platform: platform(), arch: arch(), osRelease: release(), cpu: cpus()[0]?.model, logicalCpus: cpus().length, execArgv: process.execArgv },
  source: { gitHead, engineSourceSha: values['source-sha'] || null, engineOrigin: values['source-sha'] ? 'commit-snapshot' : 'working-tree', engineSha256: sha256(engineBytes), tagsSha256: dependencyHash('tags.mjs'), tagConfigSha256: dependencyHash('../data/tag-config.json'), catalogSha256: sha256(catalogBytes), benchmarkSha256: sha256(benchmarkBytes) },
  dataset: { sourceRecords: catalog.length, recordCount: projects.length, paddedRecords: Math.max(0, recordCount - catalog.length), sha256: sha256(JSON.stringify(projects)), policy: 'Current catalog order and real multilingual text; copies only receive unique IDs.' },
  method: { clock: 'performance.now', percentile: 'nearest rank', iterationsPerQuery: iterations, warmupRounds, queryCount: queries.length, measuredQueryCalls: queries.length * iterations, buildIterations, queryResultMemoization: false, order: 'Round-robin rotation', timingScope: 'Synchronous search call only; excludes construction, result checksums, rendering and network.' },
  construction: { coldBuildMs, ...stats(buildSamples), latencyMs: buildSamples },
  query: { ...queryStats, measuredElapsedMs, consumedResults, resultsSha256: resultDigest.digest('hex') },
  perQuery: perQuery.map((entry) => ({ ...entry, ...stats(entry.latencyMs) })),
  target: { p95Ms: 5, allQueryP95UnderTarget: perQuery.every((entry) => stats(entry.latencyMs).p95Ms < 5), informationalOnly: true },
};
if (values.output) writeFileSync(resolve(values.output), `${JSON.stringify(report, null, 2)}\n`, { flag: 'wx' });
const { latencyMs: _buildSamples, ...construction } = report.construction;
console.log(JSON.stringify({ ...report, construction, perQuery: report.perQuery.map(({ latencyMs, ...entry }) => entry) }, null, 2));
