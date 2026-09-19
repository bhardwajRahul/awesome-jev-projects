export interface DiscoverableProject {
  id: string;
  stars?: number | null;
  catalogStatus?: string;
  licenseStatus?: string;
  license?: string | null;
  url?: string;
}
export function eligibleProjects<T extends DiscoverableProject>(projects: readonly T[]): T[];
export function utcDay(date?: Date): string;
export function nextUtcMidnightDelay(date?: Date): number;
export function dailyProject<T extends DiscoverableProject>(projects: readonly T[], dayStringUTC: string): T | null;
export function drawProject<T extends DiscoverableProject>(projects: readonly T[], previousId?: string, randomValue?: number): T | null;
export function rarity(project: DiscoverableProject): 'ssr' | 'rising';
