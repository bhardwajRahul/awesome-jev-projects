import { useEffect, useId, useRef, useState } from 'react';
import { ArrowUpRight, Check, Copy, Link, RotateCw, Share2, Sparkles, Star, X } from 'lucide-react';
import type { Project } from '../App';
import { categoryLabel, localeMeta, localizedProjectText, projectPath } from '../lib/i18n';
import type { Locale } from '../lib/i18n';
import { drawProject, rarity } from '../lib/discovery.mjs';
import '../styles/discovery.css';

const copy = {
  zh: { title: '抽张灵感卡', intro: '把熟悉的排序放一边，遇见一个没看过的项目。', close: '关闭抽卡机', rising: '潜力新星', decision: 'Jev 决策点', github: '前往 GitHub', again: '再抽一张', summary: '复制摘要', link: '复制链接', share: '分享卡片', copied: '已复制', shared: '已打开分享', failed: '无法自动复制，请选择下方内容手动复制。', manual: '手动复制内容', empty: '暂时没有可抽取的已审校项目。', note: '随机发现 · 星级只表示 GitHub 关注度', drawn: '本次抽中' },
  en: { title: 'Draw an inspiration card', intro: 'Step outside the usual ranking. Find a project you have not tried.', close: 'Close card draw', rising: 'Rising project', decision: 'Jev decision point', github: 'Open GitHub', again: 'Draw again', summary: 'Copy summary', link: 'Copy link', share: 'Share card', copied: 'Copied', shared: 'Share opened', failed: 'Automatic copy is unavailable. Select the text below to copy it.', manual: 'Text to copy manually', empty: 'No reviewed projects are available to draw yet.', note: 'Random discovery · Tiers reflect GitHub stars only', drawn: 'You drew' },
  ja: { title: 'ひらめきのカードを引く', intro: 'いつもの順位から離れて、まだ知らないプロジェクトに出会おう。', close: 'カードを閉じる', rising: '期待の新星', decision: 'Jev の判断ポイント', github: 'GitHub を開く', again: 'もう一枚引く', summary: '概要をコピー', link: 'リンクをコピー', share: 'カードを共有', copied: 'コピーしました', shared: '共有を開きました', failed: '自動コピーできません。下のテキストを選択してコピーしてください。', manual: '手動コピー用テキスト', empty: '抽選できる確認済みプロジェクトはまだありません。', note: 'ランダムな発見 · ランクは GitHub の Star 数のみ', drawn: '今回のカード' },
  ko: { title: '영감 카드 뽑기', intro: '익숙한 순위에서 벗어나 새로운 프로젝트를 만나 보세요.', close: '카드 닫기', rising: '떠오르는 프로젝트', decision: 'Jev의 판단 지점', github: 'GitHub 열기', again: '다시 뽑기', summary: '요약 복사', link: '링크 복사', share: '카드 공유', copied: '복사됨', shared: '공유 창 열림', failed: '자동 복사가 불가능합니다. 아래 텍스트를 선택해서 복사하세요.', manual: '직접 복사할 텍스트', empty: '아직 뽑을 수 있는 검토 완료 프로젝트가 없습니다.', note: '무작위 발견 · 등급은 GitHub Star 수만 나타냅니다', drawn: '이번 카드' },
} satisfies Record<Locale, Record<string, string>>;

export function GachaDialog({ projects, locale, onClose }: { projects: Project[]; locale: Locale; onClose: () => void }) {
  const t = copy[locale];
  const titleId = useId();
  const introId = useId();
  const dialog = useRef<HTMLDialogElement>(null);
  const card = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const close = useRef<HTMLButtonElement>(null);
  const manual = useRef<HTMLTextAreaElement>(null);
  const closeHandler = useRef(onClose);
  const pointerOutside = useRef(false);
  const tiltFrame = useRef(0);
  const revision = useRef(0);
  const mounted = useRef(false);
  const [draw, setDraw] = useState(() => ({ project: drawProject(projects), turn: 0 }));
  const [avatarResult, setAvatarResult] = useState<{ src: string; ok: boolean } | null>(null);
  const [feedback, setFeedback] = useState<'copied' | 'shared' | 'failed' | null>(null);
  const [fallback, setFallback] = useState('');
  const p = draw.project;
  const plain = localizedProjectText(p ?? {}, 'plainSummary', locale);
  const decision = localizedProjectText(p ?? {}, 'jevDecisionPoint', locale);
  const link = p ? `https://logicrw.github.io${projectPath(p.id, locale)}` : '';
  const summary = p ? `${p.name} — ${p.author}\n${plain.text}\n${t.decision}: ${decision.text}\n${link}` : '';
  const avatar = p?.avatarUrl && /^https:\/\/avatars\.githubusercontent\.com\//.test(p.avatarUrl) ? p.avatarUrl : null;
  const avatarReady = Boolean(avatar && avatarResult?.src === avatar && avatarResult.ok);
  const avatarFailed = Boolean(avatar && avatarResult?.src === avatar && !avatarResult.ok);

  useEffect(() => {
    if (avatar && imageRef.current?.complete && imageRef.current.naturalWidth > 0) {
      setAvatarResult({ src: avatar, ok: true });
    }
  }, [avatar, draw.turn]);

  useEffect(() => { closeHandler.current = onClose; }, [onClose]);
  useEffect(() => {
    setDraw((previous) => {
      // A dialog opened before the catalog loads should recover without
      // interrupting an existing card or a user's subsequent draws.
      if (previous.project) return previous;
      const project = drawProject(projects);
      return project ? { project, turn: previous.turn + 1 } : previous;
    });
  }, [projects]);
  useEffect(() => {
    const element = dialog.current;
    if (!element) return;
    mounted.current = true;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    element.showModal();
    close.current?.focus({ preventScroll: true });
    return () => {
      mounted.current = false;
      revision.current++;
      cancelAnimationFrame(tiltFrame.current);
      element.close();
      document.body.style.overflow = previousOverflow;
      if (previousFocus?.isConnected) previousFocus.focus({ preventScroll: true });
    };
  }, []);
  useEffect(() => {
    if (feedback === 'failed') { manual.current?.focus(); manual.current?.select(); }
  }, [feedback, fallback]);
  useEffect(() => {
    revision.current++;
    setFeedback(null);
    setFallback('');
  }, [locale]);
  useEffect(() => {
    const element = canvas.current;
    const allowed = matchMedia('(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)');
    if (!element || !p || !allowed.matches || document.hidden) return;
    const ctx = element.getContext('2d');
    if (!ctx) return;
    const width = element.clientWidth, height = element.clientHeight;
    const scale = Math.min(devicePixelRatio || 1, 2);
    element.width = width * scale; element.height = height * scale; ctx.scale(scale, scale);
    let frame = 0, start = 0;
    const stop = () => { cancelAnimationFrame(frame); ctx.clearRect(0, 0, width, height); };
    const render = (time: number) => {
      if (!start) start = time;
      const progress = (time - start) / 200;
      ctx.clearRect(0, 0, width, height);
      if (progress >= 1 || !allowed.matches || document.hidden) return;
      ctx.globalAlpha = 1 - progress;
      for (let i = 0; i < 18; i++) {
        const angle = (i / 18) * Math.PI * 2;
        ctx.fillStyle = i % 3 ? '#d7fa91' : '#e9c879';
        ctx.save();
        ctx.translate(width / 2 + Math.cos(angle) * progress * width / 2, height / 3 + Math.sin(angle) * progress * 120 + progress * progress * 80);
        ctx.rotate(angle + progress * 3);
        ctx.fillRect(-2, -4, 4, 8); ctx.restore();
      }
      frame = requestAnimationFrame(render);
    };
    frame = requestAnimationFrame(render);
    allowed.addEventListener('change', stop);
    document.addEventListener('visibilitychange', stop);
    return () => { stop(); allowed.removeEventListener('change', stop); document.removeEventListener('visibilitychange', stop); };
  }, [draw.turn, p]);

  function redraw() {
    revision.current++;
    setFeedback(null); setFallback(''); setAvatarResult(null);
    cancelAnimationFrame(tiltFrame.current);
    setDraw((previous) => ({ project: drawProject(projects, previous.project?.id) as Project | null, turn: previous.turn + 1 }));
  }
  async function copyText(text: string) {
    const ticket = ++revision.current;
    try {
      await navigator.clipboard.writeText(text);
      if (mounted.current && ticket === revision.current) { setFeedback('copied'); setFallback(''); }
    } catch {
      if (mounted.current && ticket === revision.current) { setFallback(text); setFeedback('failed'); }
    }
  }
  async function share() {
    if (!p) return;
    if (!navigator.share) { await copyText(link); return; }
    const ticket = ++revision.current;
    try {
      await navigator.share({ title: p.name, text: plain.text, url: link });
      if (mounted.current && ticket === revision.current) { setFeedback('shared'); setFallback(''); }
    } catch (error) {
      if (mounted.current && ticket === revision.current && !(error instanceof DOMException && error.name === 'AbortError')) await copyText(link);
    }
  }
  function tilt(event: React.PointerEvent<HTMLElement>) {
    if (event.pointerType !== 'mouse' || !matchMedia('(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)').matches) return;
    const element = event.currentTarget, x = event.clientX, y = event.clientY;
    cancelAnimationFrame(tiltFrame.current);
    tiltFrame.current = requestAnimationFrame(() => {
      const rect = element.getBoundingClientRect();
      const horizontal = Math.max(0, Math.min(1, (x - rect.left) / rect.width));
      const vertical = Math.max(0, Math.min(1, (y - rect.top) / rect.height));
      element.style.setProperty('--gacha-x', `${(0.5 - vertical) * 8}deg`);
      element.style.setProperty('--gacha-y', `${(horizontal - 0.5) * 8}deg`);
      element.style.setProperty('--gacha-light', `${horizontal * 100}% ${vertical * 100}%`);
    });
  }
  function resetTilt() {
    cancelAnimationFrame(tiltFrame.current);
    card.current?.style.removeProperty('--gacha-x'); card.current?.style.removeProperty('--gacha-y'); card.current?.style.removeProperty('--gacha-light');
  }

  return <dialog ref={dialog} className="gacha-dialog" lang={locale === 'zh' ? 'zh-CN' : locale} aria-labelledby={titleId} aria-describedby={introId}
    onCancel={(event) => { event.preventDefault(); closeHandler.current(); }}
    onPointerDown={(event) => { pointerOutside.current = event.target === event.currentTarget; }}
    onClick={(event) => { if (pointerOutside.current && event.target === event.currentTarget) closeHandler.current(); pointerOutside.current = false; }}>
    <div className="gacha-shell">
      <header className="gacha-heading"><h2 id={titleId}><Sparkles size={21} aria-hidden="true" />{t.title}</h2><button ref={close} type="button" className="gacha-close" onClick={() => closeHandler.current()} aria-label={t.close}><X size={20} aria-hidden="true" /></button></header>
      <p id={introId} className="gacha-intro">{t.intro}</p>
      {p ? <>
        <div className="gacha-stage">
          <article ref={card} key={draw.turn} className="gacha-card" data-rarity={rarity(p)} onPointerMove={tilt} onPointerLeave={resetTilt} onPointerCancel={resetTilt}>
            <div className="gacha-card-top"><span className="gacha-tier"><Star size={13} aria-hidden="true" />{rarity(p) === 'ssr' ? 'SSR · 1k+' : t.rising}</span><span className="gacha-stars">{p.stars == null ? '—' : new Intl.NumberFormat(locale).format(p.stars)} Stars</span></div>
            <div className="gacha-identity">
              <span className="gacha-avatar-frame" aria-hidden="true">
                <span className="gacha-avatar gacha-initial" hidden={avatarReady}>{p.author.slice(0, 2).toUpperCase()}</span>
                {avatar && !avatarFailed && <img ref={imageRef} key={avatar} src={avatar} alt="" className="gacha-avatar" width="42" height="42" decoding="async" referrerPolicy="no-referrer" data-ready={avatarReady} onLoad={() => setAvatarResult({ src: avatar, ok: true })} onError={() => setAvatarResult({ src: avatar, ok: false })} />}
              </span>
              <div><h3>{p.name}</h3><span className="gacha-author">{p.author}</span></div>
            </div>
            <span className="gacha-category">{categoryLabel(p.category, locale)}</span>
            <p className="gacha-summary" lang={localeMeta[plain.language].language}>{plain.text}</p>
            <div className="gacha-decision"><span>{t.decision}</span><p lang={localeMeta[decision.language].language}>{decision.text}</p></div>
            <a className="gacha-github" href={p.url} target="_blank" rel="noopener noreferrer">{t.github}<ArrowUpRight size={17} aria-hidden="true" /></a>
          </article>
          <canvas ref={canvas} className="gacha-confetti" aria-hidden="true" />
        </div>
        <p className="gacha-sr-only" role="status" aria-live="polite" aria-atomic="true">{t.drawn}: {p.name}, {p.author}</p>
        <div className="gacha-actions"><button type="button" className="gacha-redraw" onClick={redraw}><RotateCw size={16} aria-hidden="true" />{t.again}</button><button type="button" onClick={() => void copyText(summary)}><Copy size={16} aria-hidden="true" />{t.summary}</button><button type="button" onClick={() => void share()}><Share2 size={16} aria-hidden="true" />{t.share}</button><button type="button" onClick={() => void copyText(link)}><Link size={16} aria-hidden="true" />{t.link}</button></div>
        <p className="gacha-feedback" role="status" aria-live="polite">{feedback === 'copied' && <Check size={14} aria-hidden="true" />}{feedback ? t[feedback] : ''}</p>
        {feedback === 'failed' && <textarea ref={manual} className="gacha-manual" aria-label={t.manual} value={fallback} readOnly rows={4} spellCheck={false} onFocus={(event) => event.currentTarget.select()} />}
        <p className="gacha-note">{t.note}</p>
      </> : <p className="gacha-empty">{t.empty}</p>}
    </div>
  </dialog>;
}
