import type { Locale } from "../lib/i18n";
import "../styles/card-dispenser.css";

const copy = {
  zh: { draw: "抽张灵感卡", count: "个可探索项目", next: "下一步", options: ["继续", "重试", "跳过"] },
  en: { draw: "Draw an inspiration card", count: "projects to explore", next: "Next step", options: ["Continue", "Retry", "Skip"] },
  ja: { draw: "発見のカードを引く", count: "件のプロジェクト", next: "次の一手", options: ["続行", "再試行", "スキップ"] },
  ko: { draw: "영감 카드 뽑기", count: "개 프로젝트 탐색", next: "다음 단계", options: ["계속", "재시도", "건너뛰기"] },
};

export function CardDispenser({ locale, projectCount, onDraw }: {
  locale: Locale;
  projectCount: number;
  onDraw: () => void;
}) {
  const t = copy[locale];
  const count = `${projectCount.toLocaleString(locale)} ${t.count}`;
  return (
    <button type="button" className="card-dispenser" onClick={onDraw} aria-haspopup="dialog" aria-label={`${t.draw} · ${count}`}>
      <span className="cd-plate" aria-hidden="true"><span>JEV / DISCOVERY</span><span className="cd-index">System 1</span></span>
      <span className="cd-deck" aria-hidden="true">
        <span className="cd-card cd-back" />
        <span className="cd-card cd-middle" />
        <span className="cd-card cd-front">
          <span className="cd-card-heading"><span>choice</span><span className="cd-contact" /></span>
          <strong>{t.next}</strong>
          <span className="cd-options">{t.options.map((option, index) => <span className={index === 0 ? "is-chosen" : undefined} key={option}>{option}</span>)}</span>
        </span>
      </span>
      <span className="cd-count">{count}</span>
      <span className="cd-slot"><span>{t.draw}</span><svg viewBox="0 0 20 20" width="18" height="18" fill="none" aria-hidden="true"><path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
    </button>
  );
}
