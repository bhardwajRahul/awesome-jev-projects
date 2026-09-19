import { useEffect, useMemo, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../App';
import { categoryLabel, localizedProjectText } from '../lib/i18n';
import type { Locale } from '../lib/i18n';
import { dailyProject, nextUtcMidnightDelay, utcDay } from '../lib/discovery.mjs';
import '../styles/daily-project.css';

const copy: Record<Locale, { heading: string; short: string; fortune: string; open: string }> = {
  zh: { heading: '今日一荐', short: '今日', fortune: '宜：读点源码 · 试个小项目', open: '查看今日项目' },
  en: { heading: 'Project of the day', short: 'Today', fortune: 'Read the source. Try something small.', open: 'Open today’s project' },
  ja: { heading: '今日のプロジェクト', short: '今日', fortune: '今日はソースを読んで、小さく試そう。', open: '今日のプロジェクトを見る' },
  ko: { heading: '오늘의 프로젝트', short: '오늘', fortune: '소스를 읽고 작은 프로젝트를 써 보세요.', open: '오늘의 프로젝트 보기' },
};

export interface DailyProjectProps {
  projects: Project[];
  locale: Locale;
  onOpen: (project: Project) => void;
  initialDay?: string;
}

export function DailyProject({ projects, locale, onOpen, initialDay }: DailyProjectProps) {
  const [day, setDay] = useState(() => initialDay ?? utcDay());
  const project = useMemo(() => dailyProject(projects, day), [projects, day]);

  useEffect(() => {
    let timer: ReturnType<typeof window.setTimeout>;
    const refresh = () => {
      const now = new Date();
      setDay(utcDay(now));
      window.clearTimeout(timer);
      timer = window.setTimeout(refresh, nextUtcMidnightDelay(now) + 25);
    };
    refresh();
    document.addEventListener('visibilitychange', refresh);
    window.addEventListener('pageshow', refresh);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener('visibilitychange', refresh);
      window.removeEventListener('pageshow', refresh);
    };
  }, []);

  if (!project) return null;
  const t = copy[locale];
  const date = new Date(`${day}T00:00:00.000Z`);
  const month = new Intl.DateTimeFormat(locale, { month: 'short', timeZone: 'UTC' }).format(date);
  const benefit = localizedProjectText(project, 'highlightBenefit', locale);
  return (
    <button type="button" className="daily-project" onClick={() => onOpen(project)} aria-label={`${t.open}: ${project.name}`}>
      <span className="daily-project-heading"><span>{t.heading}</span><span>UTC <ArrowUpRight size={12} aria-hidden="true" /></span></span>
      <span className="daily-project-mobile-label">{t.short}</span>
      <span className="daily-project-main">
        <time className="daily-project-date" dateTime={day} title={`${day} UTC`}>
          <span>{month}</span><strong>{date.getUTCDate().toString().padStart(2, '0')}</strong>
        </time>
        <span className="daily-project-identity">
          <strong className="daily-project-name">{project.name}</strong>
          <span className="daily-project-category">{categoryLabel(project.category, locale)}</span>
        </span>
      </span>
      <span className="daily-project-benefit" lang={benefit.language}>{benefit.text}</span>
      <span className="daily-project-fortune">{t.fortune}</span>
      <ArrowUpRight className="daily-project-mobile-arrow" size={13} aria-hidden="true" />
    </button>
  );
}
