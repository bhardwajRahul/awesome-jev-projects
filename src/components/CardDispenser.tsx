import { useEffect, useRef, useState } from "react";
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
  const [pressed, setPressed] = useState(false);
  const pressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (pressTimer.current !== null) clearTimeout(pressTimer.current);
  }, []);

  function draw() {
    if (pressTimer.current !== null) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      onDraw();
      return;
    }
    setPressed(true);
    pressTimer.current = setTimeout(() => {
      pressTimer.current = null;
      setPressed(false);
      onDraw();
    }, 120);
  }

  const t = copy[locale];
  const count = `${projectCount.toLocaleString(locale)} ${t.count}`;
  return (
    <button type="button" className="card-dispenser" data-pressed={pressed || undefined} onClick={draw} aria-haspopup="dialog" aria-label={`${t.draw} · ${count}`}>
      <span className="cd-plate" aria-hidden="true"><span>JEV-01 <span className="cd-plate-divider">//</span> TACTILE DISPATCHER</span><span className="cd-led" /></span>
      <span className="cd-stage" aria-hidden="true">
        <span className="cd-feed" />
        <span className="cd-deck">
          <span className="cd-card cd-back" />
          <span className="cd-card cd-middle" />
          <span className="cd-card cd-front">
            <span className="cd-card-heading"><span>choice</span><span className="cd-seal"><svg viewBox="0 0 24 24" width="18" height="18" fill="none"><path d="m7 12 3 3 7-7M6 19h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span></span>
            <strong>{t.next}</strong>
            <span className="cd-options">{t.options.map((option, index) => <span className={index === 0 ? "is-chosen" : undefined} key={option}>{option}</span>)}</span>
          </span>
        </span>
      </span>
      <span className="cd-count">{count}</span>
      <span className="cd-slot"><span>{t.draw}</span><svg viewBox="0 0 20 20" width="18" height="18" fill="none" aria-hidden="true"><path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
    </button>
  );
}
