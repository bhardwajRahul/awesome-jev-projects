import { createProjectSearch, searchProjects, type SearchableProject, type SearchMetadata } from '../../src/lib/search.mjs';

// Previously valid structural records must keep their own unrelated fields.
interface LegacyProject { id: string; description: { short: string }; evidence: string; catalogStatus: number }
const legacy: readonly LegacyProject[] = [{ id: 'legacy', description: { short: 'Legacy text' }, evidence: 'Custom evidence', catalogStatus: 1 }];
const result = searchProjects(createProjectSearch(legacy), 'legacy');
const legacyText: string = result[0].description.short;
void legacyText;

const enriched: readonly (SearchableProject & SearchMetadata & { extra: number })[] = [{ id: 'modern', topics: ['deepseek'], description: 'Public description', evidenceLines: [12, 'A textual snippet', { text: 'A typed snippet' }], extra: 7 }];
const index = createProjectSearch(enriched);
const extra: number = searchProjects(index, 'deepseek')[0].extra;
void extra;
// @ts-expect-error Queries remain strings, never an untyped options object.
searchProjects(index, { query: 'deepseek' });
// @ts-expect-error The existing required stable ID contract remains enforced.
createProjectSearch([{ name: 'Missing stable ID' }]);
// @ts-expect-error Indexed records are exposed through a readonly collection.
index.projects.push(enriched[0]);
