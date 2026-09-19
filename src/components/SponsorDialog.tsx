import { useEffect, useId, useRef, useState } from 'react';
import { ArrowUpRight, Check, Copy, Mail, Send, X } from 'lucide-react';
import { sponsorConfig, sponsorCopy, sponsorLocale } from '../lib/sponsors.ts';
import type { SponsorLocale } from '../lib/sponsors.ts';
import '../styles/sponsors.css';

export interface SponsorDialogProps {
  locale: SponsorLocale;
  projectCount: number;
  onClose: () => void;
}

export function SponsorDialog({ locale, projectCount, onClose }: SponsorDialogProps) {
  const dialog = useRef<HTMLDialogElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const closeHandler = useRef(onClose);
  const titleId = useId();
  const introId = useId();
  const [language, setLanguage] = useState<SponsorLocale>(sponsorLocale(locale));
  const [copyState, setCopyState] = useState<'email' | 'telegram' | 'failed' | null>(null);
  const pointerStartedOutside = useRef(false);
  const t = sponsorCopy[language];
  const contacts = sponsorConfig.contacts;
  const count = Number.isFinite(projectCount) && projectCount >= 0 ? Math.floor(projectCount) : 0;
  const emailUrl = `mailto:${contacts.email}?subject=${encodeURIComponent(t.emailSubject)}&body=${encodeURIComponent(t.emailBody)}`;

  useEffect(() => { closeHandler.current = onClose; }, [onClose]);
  useEffect(() => { setLanguage(sponsorLocale(locale)); }, [locale]);
  useEffect(() => {
    const element = dialog.current;
    if (!element) return;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    element.showModal();
    closeButton.current?.focus({ preventScroll: true });
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
      if (previousFocus?.isConnected) previousFocus.focus({ preventScroll: true });
    };
  }, []);

  async function copyContact(channel: 'email' | 'telegram') {
    try {
      await navigator.clipboard.writeText(contacts[channel]);
      setCopyState(channel);
    } catch { setCopyState('failed'); }
  }

  function outsideDialog(event: React.PointerEvent<HTMLDialogElement> | React.MouseEvent<HTMLDialogElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    return event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  }

  return (
    <dialog
      ref={dialog}
      className="sponsor-dialog"
      aria-labelledby={titleId}
      aria-describedby={introId}
      lang={language === 'zh' ? 'zh-CN' : language}
      onCancel={(event) => { event.preventDefault(); closeHandler.current(); }}
      onPointerDown={(event) => { pointerStartedOutside.current = event.target === event.currentTarget && outsideDialog(event); }}
      onClick={(event) => {
        if (pointerStartedOutside.current && event.target === event.currentTarget && outsideDialog(event)) closeHandler.current();
        pointerStartedOutside.current = false;
      }}
    >
      <div className="sponsor-dialog-toolbar">
        <select aria-label={t.language} value={language} onChange={(event) => setLanguage(sponsorLocale(event.target.value))}>
          <option value="zh">中文</option><option value="en">English</option><option value="ja">日本語</option><option value="ko">한국어</option>
        </select>
        <button className="sponsor-close" type="button" ref={closeButton} onClick={() => closeHandler.current()} aria-label={t.close}><X size={20} aria-hidden="true" /></button>
      </div>
      <div className="sponsor-dialog-body">
        <h2 id={titleId}>{t.title}</h2>
        <p className="sponsor-intro" id={introId}>{t.intro}</p>
        <p className="sponsor-audience">{t.audience.replace('{count}', new Intl.NumberFormat(language).format(count))}</p>

        <div className="sponsor-tiers">
          <section className="sponsor-tier sponsor-tier-headline" aria-labelledby={`${titleId}-headline`}>
            <h3 id={`${titleId}-headline`}>{t.headline}</h3>
            <div className="sponsor-price"><strong>{t.from}</strong><span>{t.perMonth}</span></div>
            <p className="sponsor-placement">{t.headlinePlacement}</p>
            <p>{t.headlineBenefit}</p>
            <a href={`${emailUrl}${encodeURIComponent(`\n${t.headline}`)}`} className="sponsor-plan-action">{t.inquirePlan}<ArrowUpRight size={16} aria-hidden="true" /></a>
          </section>
          <section className="sponsor-tier" aria-labelledby={`${titleId}-category`}>
            <h3 id={`${titleId}-category`}>{t.category}</h3>
            <div className="sponsor-price"><strong>{t.from}</strong><span>{t.perMonth}</span></div>
            <p className="sponsor-placement">{t.categoryPlacement}</p>
            <p>{t.categoryBenefit}</p>
            <a href={`${emailUrl}${encodeURIComponent(`\n${t.category}`)}`} className="sponsor-plan-action">{t.inquirePlan}<ArrowUpRight size={16} aria-hidden="true" /></a>
          </section>
        </div>

        <section className="sponsor-benefits" aria-labelledby={`${titleId}-benefits`}>
          <h3 id={`${titleId}-benefits`}>{t.includedTitle}</h3>
          <ul>{t.benefits.map((benefit) => <li key={benefit}><Check size={15} aria-hidden="true" />{benefit}</li>)}</ul>
        </section>
        <p className="sponsor-terms">{t.terms}</p>

        <section className="sponsor-contact" aria-labelledby={`${titleId}-contact`}>
          <h3 id={`${titleId}-contact`}>{t.contactTitle}</h3>
          <p>{t.process}</p>
          <div className="sponsor-contact-list">
            <div className="sponsor-contact-row">
              <a href={emailUrl}><Mail size={18} aria-hidden="true" /><span><strong>{t.email}</strong><span className="sponsor-contact-value">{contacts.email}</span></span><ArrowUpRight size={16} aria-hidden="true" /></a>
              <button type="button" onClick={() => void copyContact('email')} aria-label={t.copyEmail} title={t.copyEmail}>{copyState === 'email' ? <Check size={18} aria-hidden="true" /> : <Copy size={18} aria-hidden="true" />}</button>
            </div>
            <div className="sponsor-contact-row">
              <a href={contacts.telegramUrl} target="_blank" rel="noopener noreferrer"><Send size={18} aria-hidden="true" /><span><strong>{t.telegram}</strong><span className="sponsor-contact-value">{contacts.telegram}</span></span><ArrowUpRight size={16} aria-hidden="true" /></a>
              <button type="button" onClick={() => void copyContact('telegram')} aria-label={t.copyTelegram} title={t.copyTelegram}>{copyState === 'telegram' ? <Check size={18} aria-hidden="true" /> : <Copy size={18} aria-hidden="true" />}</button>
            </div>
            <div className="sponsor-contact-row">
              <a href={contacts.xUrl} target="_blank" rel="noopener noreferrer"><ArrowUpRight size={18} aria-hidden="true" /><span><strong>{t.x}</strong><span className="sponsor-contact-value">@0xLogicrw</span></span><ArrowUpRight size={16} aria-hidden="true" /></a>
            </div>
          </div>
          <p className={`sponsor-copy-status${copyState === 'failed' ? ' sponsor-copy-error' : ''}`} role="status" aria-live="polite">{copyState === 'failed' ? t.copyFailed : copyState ? `${t.copied}: ${contacts[copyState]}` : ''}</p>
          <p className="sponsor-payment-note">{t.payments}</p>
        </section>
      </div>
    </dialog>
  );
}
