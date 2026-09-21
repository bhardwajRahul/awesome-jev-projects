import React, { useState, useEffect } from "react";
import { Copy, Check, X } from "lucide-react";
import type { Locale } from "../lib/i18n";

interface Props {
  locale: Locale;
}

const copyMap: Record<Locale, { tip: string; copy: string; copied: string; dismiss: string }> = {
  zh: {
    tip: "应用内浏览？复制链接到独立浏览器，长久保存",
    copy: "复制链接",
    copied: "已复制",
    dismiss: "不再提示",
  },
  en: {
    tip: "In-app browser? Copy link to save or open in Safari/Chrome",
    copy: "Copy link",
    copied: "Copied!",
    dismiss: "Dismiss",
  },
  ja: {
    tip: "アプリ内閲覧中？リンクをコピーしてブラウザで保存できます",
    copy: "コピー",
    copied: "完了",
    dismiss: "閉じる",
  },
  ko: {
    tip: "앱 내 브라우저? 링크를 복사하여 외부 브라우저에 보관하세요",
    copy: "링크 복사",
    copied: "복사됨",
    dismiss: "닫기",
  },
};

export function MobileWebviewBar({ locale }: Props) {
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const t = copyMap[locale] || copyMap.en;

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (localStorage.getItem("awesome-jev:hide-webview-bar") === "true") return;
    } catch {}

    const isMobile = window.innerWidth <= 768 || /iPhone|iPad|iPod|Android|Mobile/i.test(navigator.userAgent);
    if (isMobile) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!visible) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  const handleDismiss = () => {
    setVisible(false);
    try {
      localStorage.setItem("awesome-jev:hide-webview-bar", "true");
    } catch {}
  };

  return (
    <aside className="mobile-webview-bar" role="complementary" aria-label={t.tip}>
      <div className="mobile-webview-content">
        <span className="mobile-webview-tip">{t.tip}</span>
        <div className="mobile-webview-actions">
          <button
            type="button"
            className="mobile-webview-btn copy-btn"
            onClick={handleCopy}
            aria-label={copied ? t.copied : t.copy}
          >
            {copied ? <Check size={13} aria-hidden="true" /> : <Copy size={13} aria-hidden="true" />}
            <span>{copied ? t.copied : t.copy}</span>
          </button>
          <button
            type="button"
            className="mobile-webview-btn close-btn"
            onClick={handleDismiss}
            aria-label={t.dismiss}
          >
            <X size={14} aria-hidden="true" />
          </button>
        </div>
      </div>
    </aside>
  );
}
