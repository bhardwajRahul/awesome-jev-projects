import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import type { Locale } from '../lib/i18n';
import '../styles/theme.css';

type Theme = 'light' | 'dark';
type ThemeMode = Theme | 'system';

declare global {
  interface Window {
    awesomeJevTheme?: Readonly<{
      getMode: () => ThemeMode;
      getResolved: () => Theme;
      setMode: (mode: ThemeMode) => void;
      toggle: () => void;
    }>;
  }
}

const labels: Record<Locale, { light: string; dark: string }> = {
  zh: { light: '切换到明亮模式', dark: '切换到暗黑模式' },
  en: { light: 'Switch to light mode', dark: 'Switch to dark mode' },
  ja: { light: 'ライトモードに切り替え', dark: 'ダークモードに切り替え' },
  ko: { light: '라이트 모드로 전환', dark: '다크 모드로 전환' },
};

export function ThemeToggle({ locale }: { locale: Locale }) {
  // A deterministic initial render also works in the static page generator.
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const update = () => setTheme(window.awesomeJevTheme?.getResolved() ?? 'light');
    update();
    window.addEventListener('awesome-jev-theme-change', update);
    return () => window.removeEventListener('awesome-jev-theme-change', update);
  }, []);

  const label = labels[locale][theme === 'dark' ? 'light' : 'dark'];
  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label={label}
      title={label}
      onClick={() => window.awesomeJevTheme?.toggle()}
    >
      <Sun className="theme-icon-light" size={18} aria-hidden="true" />
      <Moon className="theme-icon-dark" size={18} aria-hidden="true" />
    </button>
  );
}
