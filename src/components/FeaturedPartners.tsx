import { ArrowUpRight, Plus, Star } from 'lucide-react';
import { featuredSponsors, sponsorConfig, sponsorCopy, sponsorLocale } from '../lib/sponsors.ts';
import type { SponsorLocale } from '../lib/sponsors.ts';
import '../styles/sponsors.css';

export interface FeaturedPartnersProps {
  locale: SponsorLocale;
  onSponsor: () => void;
  category?: string;
}

export function FeaturedPartners({ locale, onSponsor, category = 'all' }: FeaturedPartnersProps) {
  const language = sponsorLocale(locale);
  const t = sponsorCopy[language];
  const partners = featuredSponsors(sponsorConfig.partners, category);
  const capacity = category === 'all' ? 2 : 1;

  return (
    <section className="featured-partners" aria-label={t.featured}>
      <div className="featured-partners-heading">
        <span><Star size={13} aria-hidden="true" />{t.featured}</span>
        <button type="button" onClick={onSponsor}>{t.entry}<ArrowUpRight size={14} aria-hidden="true" /></button>
      </div>
      <div className={`featured-partners-grid${partners.length === 0 ? ' featured-partners-grid-empty' : ''}`}>
        {partners.map((partner) => (
          <a className="featured-partner-card" key={partner.id} href={partner.url} target="_blank" rel="sponsored noopener noreferrer">
            <div className="featured-partner-top">
              {partner.logo && <img src={`${import.meta.env.BASE_URL}${partner.logo}`} alt="" width="32" height="32" loading="lazy" decoding="async" />}
              <span className="featured-partner-label">{t.paid}</span>
              <ArrowUpRight size={18} aria-hidden="true" />
            </div>
            <h3>{partner.name}</h3>
            <p>{partner.description[language]}</p>
            <span className="featured-partner-action">{t.visit}<ArrowUpRight size={14} aria-hidden="true" /></span>
          </a>
        ))}
        {partners.length < capacity && (
          <button className="featured-partner-card featured-partner-placeholder" type="button" onClick={onSponsor}>
            <div className="featured-partner-main">
              <span className="featured-partner-label"><Plus size={13} aria-hidden="true" />{t.available}</span>
              <h3>{t.placeholder}</h3>
              <p>{t.placeholderDescription}</p>
            </div>
            <span className="featured-partner-action">{t.explorePlans}<ArrowUpRight size={16} aria-hidden="true" /></span>
          </button>
        )}
      </div>
    </section>
  );
}
