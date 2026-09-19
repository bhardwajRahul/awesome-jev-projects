export type TagLocale = 'zh' | 'en' | 'ja' | 'ko';
export type TagDefinition = {
  readonly id: string;
  readonly labels: Readonly<Record<TagLocale, string>>;
  readonly descriptions: Readonly<Record<TagLocale, string>>;
  readonly aliases: readonly string[];
};
export type TagProject = {
  id: string;
  name?: string;
  repo?: string;
  author?: string;
  tags?: readonly string[];
  stars?: number | null;
  quarantined?: boolean;
  catalogStatus?: string;
  sourceStatus?: string;
  verificationStatus?: string;
};
export type TagOption = {
  id: string;
  name: string;
  description: string;
  count: number;
  examples: string[];
  optionLabel: string;
};
export const tagConfig: readonly TagDefinition[];
export function resolveTagId(value: unknown): string | null;
export function tagLabel(value: unknown, locale?: TagLocale): string;
export function tagDescription(value: unknown, locale?: TagLocale): string;
export function tagSearchText(value: unknown): string;
export function tagOptions(projects: readonly TagProject[], locale?: TagLocale): TagOption[];
export function inferCanonicalTags(input?: {
  category?: string;
  tags?: readonly string[];
  name?: string;
  description?: string;
}): string[];
