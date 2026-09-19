export interface SearchableProject {
  id: string;
  name?: string;
  author?: string;
  url?: string;
  category?: string;
  language?: string | null;
  tags?: readonly string[];
  plainSummary?: string;
  plainSummaryEn?: string;
  plainSummaryJa?: string;
  plainSummaryKo?: string;
  jevDecisionPoint?: string;
  jevDecisionPointEn?: string;
  jevDecisionPointJa?: string;
  jevDecisionPointKo?: string;
  highlightBenefit?: string;
  highlightBenefitEn?: string;
  highlightBenefitJa?: string;
  highlightBenefitKo?: string;
  stars?: number | null;
  createdAt?: string | null;
  lastCommitAt?: string | null;
  license?: string | null;
  licenseStatus?: string;
}
export interface ProjectSearch<T extends SearchableProject> {
  readonly projects: readonly T[];
}
export type QuickFilter = 'all' | 'popular' | 'rising' | 'commercial';
export type BrowseSort = 'stars' | 'created' | 'newest' | 'updated';
export function createProjectSearch<T extends SearchableProject>(projects: readonly T[]): ProjectSearch<T>;
export function searchProjects<T extends SearchableProject>(index: ProjectSearch<T>, query: string): T[];
export function browseSort<T extends SearchableProject>(projects: readonly T[], mode?: BrowseSort): T[];
export function matchesQuickFilter(project: SearchableProject, mode?: QuickFilter, now?: Date | number | string): boolean;
