import definitions from '../data/tag-config.json' with { type: 'json' };

const locales = new Set(['zh', 'en', 'ja', 'ko']);
const normalize = (value) => typeof value === 'string'
  ? value.normalize('NFKC').trim().toLocaleLowerCase('en').replace(/[\s_]+/gu, ' ')
  : '';

export const tagConfig = Object.freeze(definitions.map((tag) => Object.freeze({
  ...tag,
  labels: Object.freeze({ ...tag.labels }),
  descriptions: Object.freeze({ ...tag.descriptions }),
  aliases: Object.freeze([...tag.aliases]),
})));
const byId = new Map(tagConfig.map((tag) => [tag.id, tag]));
const aliases = new Map();
for (const tag of tagConfig) {
  for (const value of [tag.id, ...Object.values(tag.labels), ...tag.aliases]) {
    const key = normalize(value);
    if (aliases.has(key) && aliases.get(key) !== tag.id) {
      throw new Error(`Ambiguous tag alias: ${value}`);
    }
    aliases.set(key, tag.id);
  }
}

/** Legacy aliases resolve only to reviewed ontology entries; unknown text never creates tags. */
export function resolveTagId(value) {
  return aliases.get(normalize(value)) || null;
}

export function tagLabel(value, locale = 'en') {
  const tag = byId.get(resolveTagId(value));
  return tag ? tag.labels[locales.has(locale) ? locale : 'en'] : String(value ?? '');
}

export function tagDescription(value, locale = 'en') {
  const tag = byId.get(resolveTagId(value));
  return tag ? tag.descriptions[locales.has(locale) ? locale : 'en'] : '';
}

/** All four labels, descriptions and legacy aliases remain searchable after migration. */
export function tagSearchText(value) {
  const tag = byId.get(resolveTagId(value));
  return tag ? [tag.id, ...Object.values(tag.labels), ...Object.values(tag.descriptions), ...tag.aliases].join(' ') : String(value ?? '');
}

// Defaults describe the reviewed category, not a programming language or arbitrary README keywords.
const categoryTags = new Map(Object.entries({
  'Browser & OS Action': ['browser-automation', 'typed-decisions'],
  'Routing & Cost Optimization': ['llm-routing-cost', 'typed-decisions'],
  'Context GC & Filter': ['context-compaction', 'classification-ranking'],
  'Codebase & Graph Pathfinding': ['ast-code-graph', 'search-retrieval'],
  'MCP & Integrations': ['mcp-integrations', 'typed-decisions'],
  'High-Frequency & Simulation': ['games-simulation', 'typed-decisions'],
  'Domain & Vertical Tools': ['domain-workflows', 'typed-decisions'],
  'CLI & Pipelines': ['cli-git-gates', 'typed-decisions'],
  'Security & Guardrails': ['security-guardrails', 'typed-decisions'],
  'SDK & Decision Frameworks': ['multilanguage-sdk', 'typed-decisions'],
  'SDK & Integrations': ['multilanguage-sdk', 'typed-decisions'],
  'Data & Search': ['search-retrieval', 'classification-ranking'],
  'Creative Tools': ['creative-multimedia', 'typed-decisions'],
  'Evaluation & Observability': ['evaluation-benchmarks', 'typed-decisions'],
  'Voice & Conversation': ['voice-conversation', 'typed-decisions'],
  'Classification & Taxonomy': ['classification-ranking', 'typed-decisions'],
  'Decision Tools': ['typed-decisions', 'classification-ranking'],
}).map(([category, tags]) => [normalize(category), tags]));
// These historical strings are useful URL/search aliases but do not establish a new integration.
const ambiguousInferenceAliases = new Set(['integration', 'optional integration', 'extension', 'plugin', 'framework', 'source evidence', 'evidence']);

/** Only for new verified candidates. Existing reviewed tags must not be regenerated during sync.
 * Category defaults and exact known aliases keep the result bounded to 2–3 ontology IDs.
 * Free-form names/descriptions and language names are deliberately not used as classification evidence.
 */
export function inferCanonicalTags({ category, tags = [] } = {}) {
  const explicit = [...new Set((Array.isArray(tags) ? tags : [])
    .filter((value) => !ambiguousInferenceAliases.has(normalize(value)))
    .map(resolveTagId).filter(Boolean))];
  const categoryId = resolveTagId(category);
  let defaults = categoryTags.get(normalize(category))
    || [categoryId || explicit[0] || 'typed-decisions', 'typed-decisions'];
  // Combined legacy categories need the narrower, explicit signal to avoid browser/database assumptions.
  if (normalize(category) === normalize('Browser & OS Action') && explicit.includes('desktop-os') && !explicit.includes('browser-automation')) {
    defaults = ['desktop-os', 'typed-decisions'];
  } else if (normalize(category) === normalize('Data & Search') && explicit.includes('database-vector')) {
    defaults = ['database-vector', 'classification-ranking'];
  } else if (normalize(category) === normalize('Domain & Vertical Tools') && explicit.includes('finance-quant')) {
    defaults = ['finance-quant', 'typed-decisions'];
  }
  const result = [...new Set([defaults[0], ...explicit])].slice(0, 3);
  for (const fallback of [...defaults.slice(1), 'typed-decisions', 'classification-ranking']) {
    if (result.length >= 2) break;
    if (!result.includes(fallback)) result.push(fallback);
  }
  return result;
}

function pending(project) {
  return project.quarantined === true
    || ['quarantined', 'review-pending', 'pending', 'rejected', 'unverified'].includes(project.catalogStatus)
    || ['quarantined', 'review-pending', 'pending', 'rejected', 'unverified'].includes(project.sourceStatus)
    || ['quarantined', 'review-pending'].includes(project.verificationStatus);
}
const stars = (project) => Number.isFinite(project.stars) && project.stars > 0 ? project.stars : 0;
const stableCompare = (a, b) => String(a).localeCompare(String(b), 'en');

/** Counts include all supplied unique project IDs, including visibly pending reviews.
 * Representatives prefer reviewed records, then descending Stars and stable IDs.
 * Call with the full catalog for stable totals independent of the active UI filters.
 */
export function tagOptions(projects, locale = 'en') {
  const language = locales.has(locale) ? locale : 'en';
  const unique = new Map();
  for (const project of Array.isArray(projects) ? projects : []) {
    if (!project || typeof project.id !== 'string' || !project.id || unique.has(project.id)) continue;
    unique.set(project.id, project);
  }
  return tagConfig.map((tag) => {
    const matches = [...unique.values()].filter((project) => new Set((Array.isArray(project.tags) ? project.tags : []).map(resolveTagId)).has(tag.id));
    matches.sort((a, b) => Number(pending(a)) - Number(pending(b)) || stars(b) - stars(a) || stableCompare(a.id, b.id));
    const selected = matches.slice(0, 2);
    const examples = selected.map((project) => {
      const name = typeof project.name === 'string' && project.name.trim() ? project.name : project.id;
      // Do not leak untranslated display names into the English or Korean interface.
      const safeName = ['en', 'ko'].includes(language) && /\p{Script=Han}/u.test(name)
        ? (typeof project.repo === 'string' && !/\p{Script=Han}/u.test(project.repo) ? project.repo : project.id)
        : name;
      return selected.filter((other) => other.name === project.name).length > 1 && project.author
        ? `${project.author}/${safeName}` : safeName;
    });
    const name = tag.labels[language];
    const count = matches.length;
    const examplesText = examples.join(language === 'zh' || language === 'ja' ? '、' : ', ');
    const optionLabel = language === 'zh' ? `${name} (${count} 个项目${examples.length ? ` · 如 ${examplesText}` : ''})`
      : language === 'ja' ? `${name} (${count} 件${examples.length ? ` · 例: ${examplesText}` : ''})`
      : language === 'ko' ? `${name} (프로젝트 ${count}개${examples.length ? ` · 예: ${examplesText}` : ''})`
      : `${name} (${count} ${count === 1 ? 'project' : 'projects'}${examples.length ? ` · e.g. ${examplesText}` : ''})`;
    return { id: tag.id, name, description: tag.descriptions[language], count, examples, optionLabel };
  }).filter((option) => option.count > 0);
}
