export type SponsorLocale = 'zh' | 'en' | 'ja' | 'ko';
export type SponsorTier = 'headline' | 'category';
export interface SponsorPartner {
  id: string;
  name: string;
  tier: SponsorTier;
  url: string;
  logo?: string;
  category?: string;
  startsAt: string;
  endsAt: string;
  description: Record<SponsorLocale, string>;
}
export interface SponsorCopy {
  entry: string; title: string; intro: string; audience: string;
  featured: string; paid: string; available: string; placeholder: string;
  placeholderDescription: string; explorePlans: string; headline: string;
  category: string; from: string; perMonth: string; headlinePlacement: string;
  categoryPlacement: string; headlineBenefit: string; categoryBenefit: string;
  includedTitle: string; benefits: string[]; terms: string; process: string;
  payments: string; contactTitle: string; email: string; telegram: string;
  x: string; copyEmail: string; copyTelegram: string; copied: string;
  copyFailed: string; close: string; language: string; emailSubject: string;
  emailBody: string; visit: string; disclosure: string;
}
export function safeSponsorUrl(value: unknown): string | null;
export function safeSponsorLogo(value: unknown): string | null;
export function activeSponsors(partners: unknown, now?: number): SponsorPartner[];
export function featuredSponsors(partners: unknown, category?: string, now?: number): SponsorPartner[];
export const sponsorCopy: Record<SponsorLocale, SponsorCopy>;
export function sponsorLocale(locale: unknown): SponsorLocale;
