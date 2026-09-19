import { useEffect, useRef, useState } from "react";
import type { Locale } from "../lib/i18n";
import "../styles/card-dispenser.css";

const copy = {
  zh: {
    draw: "抽张灵感卡",
    count: "个精选项目待抽取",
    badge: "灵感卡包",
    title: "抽取开源灵感",
    tags: ["⚡ 场景匹配", "🎯 快速决策", "🛡️ 确定性"],
    prompt: "点击翻开卡片",
  },
  en: {
    draw: "Draw Inspiration Card",
    count: "projects ready to draw",
    badge: "INSPIRATION PACK",
    title: "Next Open-Source Gem",
    tags: ["⚡ Fast Match", "🎯 Deep Context", "🛡️ Deterministic"],
    prompt: "Tap to Reveal",
  },
  ja: {
    draw: "発見のカードを引く",
    count: "件の厳選プロジェクト",
    badge: "ひらめきデッキ",
    title: "次のひらめきを発見",
    tags: ["⚡ 高速マッチ", "🎯 深層コンテキスト", "🛡️ 決定性"],
    prompt: "タップして引く",
  },
  ko: {
    draw: "영감 카드 뽑기",
    count: "개 프로젝트 대기 중",
    badge: "영감 카드팩",
    title: "다음 오픈소스 발견",
    tags: ["⚡ 빠른 매칭", "🎯 심층 맥락", "🛡️ 결정성"],
    prompt: "카드를 눌러 뽑기",
  },
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
      <span className="cd-plate" aria-hidden="true">
        <span>JEV-01 <span className="cd-plate-divider">//</span> TACTILE DISPATCHER</span>
        <span className="cd-led" />
      </span>
      <span className="cd-stage" aria-hidden="true">
        <span className="cd-feed">
          <span className="cd-feed-lip" />
        </span>
        <span className="cd-deck">
          <span className="cd-card cd-back">
            <span className="cd-back-pattern" />
          </span>
          <span className="cd-card cd-middle">
            <span className="cd-back-pattern" />
          </span>
          <span className="cd-card cd-front">
            <span className="cd-front-foil" />
            <span className="cd-card-header">
              <span className="cd-card-badge">
                <span className="cd-badge-pip" />
                {t.badge}
              </span>
              <span className="cd-seal">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
                  <path d="m12 2 2.6 6.4L21 11l-6.4 2.6L12 20l-2.6-6.4L3 11l6.4-2.6L12 2z" fill="currentColor" opacity="0.85" />
                </svg>
              </span>
            </span>
            <strong className="cd-card-title">{t.title}</strong>
            <span className="cd-card-tags">
              {t.tags.map((tag) => (
                <span key={tag} className="cd-card-tag">{tag}</span>
              ))}
            </span>
            <span className="cd-card-footer">
              <span className="cd-card-prompt">
                <span className="cd-prompt-sparkle">✦</span>
                {t.prompt}
              </span>
              <span className="cd-card-serial">NO.2026-DISP</span>
            </span>
          </span>
        </span>
      </span>
      <span className="cd-count">{count}</span>
      <span className="cd-slot">
        <span className="cd-slot-glow" />
        <span className="cd-slot-label">{t.draw}</span>
        <span className="cd-slot-cue">
          <span className="cd-slot-sparkle">✦</span>
          <svg viewBox="0 0 20 20" width="18" height="18" fill="none" aria-hidden="true">
            <path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </span>
    </button>
  );
}
