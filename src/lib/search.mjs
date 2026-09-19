import Fuse from 'fuse.js';
import { tagSearchText } from './tags.mjs';

const normalize = (value) => typeof value === 'string'
  ? value.normalize('NFKC').toLocaleLowerCase('en').replace(/[‐‑‒–—−]/gu, '-').replace(/\s+/gu, ' ').trim()
  : '';
const identity = (value) => normalize(value).replace(/:/gu, '/');
const compareText = (a, b) => a < b ? -1 : a > b ? 1 : 0;
const stableCompare = (a, b) => compareText(identity(a.id), identity(b.id))
  || compareText(identity(a.name), identity(b.name));
const count = (value) => typeof value === 'number' && Number.isFinite(value) && value >= 0 ? value : 0;
const timestamp = (value) => {
  if (value instanceof Date) return value.getTime();
  if (typeof value === 'number') return Number.isFinite(value) ? value : NaN;
  return typeof value === 'string' && value.trim() ? Date.parse(value) : NaN;
};
const dateScore = (value) => Number.isFinite(timestamp(value)) ? timestamp(value) : -Infinity;

// Each entry is one concept. Alternatives within a concept are OR; separate
// concepts remain AND, so "Rust 省钱" cannot become every Rust OR routing project.
const concepts = [
  ['爬虫', '抓取', '数据采集', 'browser', 'crawler', 'scrape', 'scraping'],
  ['省钱', '省成本', '降本', '降本路由', '模型路由降本', 'コスト', '비용', 'cost optimization', 'token saver', 'router', 'model routing'],
  ['评测', '跑分', '基准测试', 'benchmark', 'evaluation', 'eval'],
  ['自动化', 'automation', 'workflow', 'browser'],
  ['大模型', '小模型', 'llm', 'slm', 'model'],
  ['浏览器', '浏览器自动化', 'ブラウザ', '브라우저', 'browser automation', 'browser'],
  ['上下文', '上下文 gc', 'コンテキスト', '컨텍스트', 'context gc', 'context', 'compaction'],
];
// Expand deliberate scenario vocabulary, not every English alternative: a query
// for "browser" should not unexpectedly expand into all generic workflows.
const triggers = new Map();
for (const alternatives of concepts) {
  for (const term of alternatives) {
    if (/[^\x00-\x7F]/u.test(term) || ['browser automation', 'model routing', 'context gc'].includes(term)) {
      if (!triggers.has(term)) triggers.set(term, alternatives.map(normalize));
    }
  }
}
const triggerNames = [...triggers.keys()].sort((a, b) => b.length - a.length);

function queryGroups(query) {
  if (triggers.has(query)) return [triggers.get(query)];
  const groups = [];
  let rest = query;
  // Longest known phrases preserve Chinese scenarios without splitting every Han
  // character. Whitespace-separated unknown words still combine conjunctively.
  while (rest && groups.length < 12) {
    let candidate;
    let offset = Infinity;
    for (const term of triggerNames) {
      const index = rest.indexOf(term);
      if (index < 0 || index > offset) continue;
      const before = rest.slice(0, index);
      const after = rest.slice(index + term.length);
      if (/^[a-z]/u.test(term) && ((before && /[a-z0-9]$/u.test(before)) || /^[a-z0-9]/u.test(after))) continue;
      if (index < offset || term.length > (candidate?.length ?? 0)) {
        candidate = term;
        offset = index;
      }
    }
    if (!candidate) {
      groups.push(...rest.split(/\s+/u).filter(Boolean).map((term) => [term]));
      break;
    }
    groups.push(...rest.slice(0, offset).split(/\s+/u).filter(Boolean).map((term) => [term]));
    groups.push(triggers.get(candidate));
    rest = rest.slice(offset + candidate.length).trim();
  }
  return groups.slice(0, 12);
}

// These quick-search technology names require evidence in the project itself.
// A taxonomy example such as 'Playwright workflows' is not an integration claim.
const literalTechnologies = ['playwright', 'rust', 'claude'];
const summaryFields = ['plainSummary', 'jevDecisionPoint', 'highlightBenefit'];
function makeDocument(project) {
  const names = [project.name, project.id, `${project.author || ''}/${project.name || ''}`];
  if (typeof project.url === 'string') {
    const match = project.url.match(/^https:\/\/github\.com\/([^/?#]+\/[^/?#]+)\/?$/iu);
    if (match) names.push(match[1]);
  }
  const tags = (Array.isArray(project.tags) ? project.tags : []).map((tag) => normalize(tagSearchText(tag)).replace(/\b9\s?hz\b/gu, ''));
  const content = summaryFields.flatMap((field) => ['', 'En', 'Ja', 'Ko'].map((suffix) => normalize(project[field + suffix])));
  const document = {
    project,
    names: [...new Set(names.map(identity).filter(Boolean))],
    author: identity(project.author),
    category: normalize(project.category),
    language: normalize(project.language),
    tags,
    content: content.filter(Boolean),
  };
  document.sourceText = [...document.names, document.author, document.language, ...content].join(' ');
  document.text = [document.sourceText, document.category, ...tags].join(' ');
  return document;
}

/** Builds a local, read-only index. No network requests or project mutations. */
export function createProjectSearch(projects) {
  const items = Array.isArray(projects) ? projects.filter((project) => project && typeof project === 'object') : [];
  const documents = items.map(makeDocument);
  return {
    projects: [...items],
    documents,
    fuse: makeFuse(documents, true),
    sourceFuse: makeFuse(documents, false),
  };
}

function makeFuse(documents, includeTaxonomy) {
  return new Fuse(documents, {
    includeScore: true,
    shouldSort: true,
    ignoreLocation: true,
    threshold: 0.3,
    minMatchCharLength: 2,
    keys: [
      { name: 'names', weight: 0.35 },
      { name: 'author', weight: 0.2 },
      { name: 'language', weight: 0.1 },
      { name: 'content', weight: 0.2 },
      ...(includeTaxonomy ? [
        { name: 'tags', weight: 0.2 },
        { name: 'category', weight: 0.05 },
      ] : []),
    ],
  });
}

function exactRank(document, query) {
  const fields = [...document.names, document.author].filter(Boolean);
  if (fields.includes(query)) return 0;
  if (fields.some((field) => field.startsWith(query))) return 1;
  return 2;
}

function literalMatch(text, term) {
  if (/[^\x00-\x7F]/u.test(term)) return text.includes(term);
  const escaped = term.replace(/[.*+?^${}()|[\]\\]/gu, '\\$&').replace(/ /gu, '[\\s-]+');
  // Latin product names may touch Han/Kana/Hangul in native copy (用Rust构建).
  // Exclude an ASCII prefix such as t in 'trust', without rejecting that copy.
  return new RegExp(`(^|[^a-z0-9])${escaped}(?=$|[^a-z0-9]|[a-z])`, 'u').test(text);
}

/** Query results are relevance ordered: exact identity, prefix identity, Fuse
 * score, stable ID. Stars and browse-sort preferences never enter this path.
 */
export function searchProjects(index, rawQuery) {
  const query = identity(rawQuery).slice(0, 200);
  if (!query) return [...index.projects];
  const groups = queryGroups(query);
  const groupScores = groups.map((alternatives) => {
    const scores = new Map();
    alternatives.forEach((term, alternativeIndex) => {
      const technologies = literalTechnologies.filter((technology) => literalMatch(term, technology));
      const scopedIndex = technologies.length ? index.sourceFuse : index.fuse;
      for (const hit of scopedIndex.search(term)) {
        if (technologies.some((technology) => !literalMatch(hit.item.sourceText, technology))) continue;
        // Known synonyms must have literal evidence; fuzzy 'context' -> 'content'
        // would otherwise pull most of the directory into a scenario search.
        if ((alternatives.length > 1 || /^[a-z0-9]{1,4}$/u.test(term)) && !literalMatch(hit.item.text, term)) continue;
        const score = (Number.isFinite(hit.score) ? hit.score : 1) + (alternativeIndex ? 0.025 : 0);
        scores.set(hit.item, Math.min(scores.get(hit.item) ?? Infinity, score));
      }
    });
    return scores;
  });
  const phraseIndex = literalTechnologies.some((technology) => literalMatch(query, technology)) ? index.sourceFuse : index.fuse;
  const phraseScores = new Map(phraseIndex.search(query).map((hit) => [hit.item, hit.score ?? 1]));
  return index.documents
    .map((document) => {
      const rank = exactRank(document, query);
      if (rank === 2 && !groupScores.every((scores) => scores.has(document))) return null;
      const score = Math.min(
        phraseScores.get(document) ?? Infinity,
        groupScores.reduce((sum, scores) => sum + (scores.get(document) ?? 1), 0) / Math.max(1, groupScores.length),
      );
      return { document, rank, score };
    })
    .filter(Boolean)
    .sort((a, b) => a.rank - b.rank || a.score - b.score || stableCompare(a.document.project, b.document.project))
    .map(({ document }) => document.project);
}

/** Call only in browse mode (an empty query), then apply presentation filters. */
export function browseSort(projects, mode = 'stars') {
  return [...projects].sort((a, b) => {
    if (mode === 'created' || mode === 'newest') {
      const left = dateScore(a.createdAt);
      const right = dateScore(b.createdAt);
      return (left === right ? 0 : left > right ? -1 : 1) || stableCompare(a, b);
    }
    if (mode === 'updated') {
      const left = dateScore(a.lastCommitAt);
      const right = dateScore(b.lastCommitAt);
      return (left === right ? 0 : left > right ? -1 : 1) || stableCompare(a, b);
    }
    return count(b.stars) - count(a.stars) || stableCompare(a, b);
  });
}

const permissiveLicenses = new Set([
  'mit', 'apache-2.0', 'bsd-2-clause', 'bsd-3-clause', '0bsd', 'isc',
  'postgresql', 'zlib', 'bsl-1.0', 'unlicense', 'cc0-1.0',
]);

/** Rising is a creation-date/Stars snapshot, not measured star growth.
 * Commercial is a narrow permissive-SPDX filter, not a compliance guarantee.
 */
export function matchesQuickFilter(project, mode = 'all', now = Date.now()) {
  if (mode !== 'all' && project.catalogStatus === 'review-pending') return false;
  if (mode === 'popular') return count(project.stars) >= 1000;
  if (mode === 'rising') {
    const created = timestamp(project.createdAt);
    const reference = timestamp(now);
    const age = reference - created;
    return Number.isFinite(age) && age >= 0 && age <= 90 * 24 * 60 * 60 * 1000
      && count(project.stars) >= 10 && count(project.stars) < 1000;
  }
  if (mode === 'commercial') {
    return !['unconfirmed', 'custom', 'restricted'].includes(normalize(project.licenseStatus)) && permissiveLicenses.has(normalize(project.license));
  }
  return mode === 'all';
}
