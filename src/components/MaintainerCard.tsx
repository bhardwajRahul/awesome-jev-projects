import { ArrowUpRight } from 'lucide-react';
import type { Locale } from '../lib/i18n';

interface MaintainerCardProps {
  locale: Locale;
}

const copy: Record<Locale, { role: string; handle: string; bio: string; action: string }> = {
  zh: {
    role: '维护者',
    handle: '@0xLogicrw',
    bio: '探讨 Jev 架构设计，或有新项目收录想法？欢迎随时交流。',
    action: '在 𝕏 关注维护者',
  },
  en: {
    role: 'Maintainer',
    handle: '@0xLogicrw',
    bio: 'Exploring Jev architecture or have a project idea? Feel free to connect.',
    action: 'Follow on 𝕏',
  },
  ja: {
    role: 'メンテナー',
    handle: '@0xLogicrw',
    bio: 'Jev アーキテクチャの相談や掲載の提案など、お気軽にどうぞ。',
    action: '𝕏 でフォロー',
  },
  ko: {
    role: '메인테이너',
    handle: '@0xLogicrw',
    bio: 'Jev 아키텍처 설계나 프로젝트 등록 제안 등 편하게 연락해 주세요.',
    action: '𝕏에서 팔로우',
  },
};

export function MaintainerCard({ locale }: MaintainerCardProps) {
  const t = copy[locale];
  return (
    <div className="maintainer-card" aria-label={`${t.role}: ${t.handle}`}>
      <div className="maintainer-card-header">
        <div className="maintainer-avatar-wrap" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </div>
        <div className="maintainer-meta">
          <span className="maintainer-role">{t.role}</span>
          <a
            href="https://x.com/0xLogicrw"
            target="_blank"
            rel="noopener noreferrer"
            className="maintainer-handle"
            title="X (Twitter) @0xLogicrw"
          >
            {t.handle}
          </a>
        </div>
      </div>
      <p className="maintainer-bio">{t.bio}</p>
      <a
        href="https://x.com/0xLogicrw"
        target="_blank"
        rel="noopener noreferrer"
        className="maintainer-action-btn"
      >
        <span>{t.action}</span>
        <ArrowUpRight size={13} aria-hidden="true" />
      </a>
    </div>
  );
}
