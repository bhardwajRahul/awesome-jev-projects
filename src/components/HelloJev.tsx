import { useEffect, useId, useRef, useState } from "react";
import { ArrowUpRight, Check, ChevronDown, Copy } from "lucide-react";
import {
  copyDeveloperText, developerActionCopy, helloJevPreview, helloJevSnippet, helloJevSource,
} from "../lib/developer-actions.mjs";
import type { DeveloperLocale } from "../lib/developer-actions.mjs";
import "../styles/developer-actions.css";

export function HelloJev({ locale }: { locale: DeveloperLocale }) {
  const t = developerActionCopy[locale];
  const titleId = useId();
  const codeId = useId();
  const feedbackId = useId();
  const [expanded, setExpanded] = useState(false);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");
  const manualCopy = useRef<HTMLTextAreaElement>(null);
  const reset = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    return () => { mounted.current = false; clearTimeout(reset.current); };
  }, []);
  useEffect(() => {
    if (copyState === "failed") { manualCopy.current?.focus(); manualCopy.current?.select(); }
  }, [copyState]);

  async function copyExample() {
    clearTimeout(reset.current);
    let copied = false;
    try { copied = await copyDeveloperText(helloJevSnippet, navigator.clipboard); } catch { /* Manual recovery below. */ }
    if (!mounted.current) return;
    setCopyState(copied ? "copied" : "failed");
    if (copied) reset.current = setTimeout(() => setCopyState("idle"), 2400);
  }

  return (
    <section className="hello-jev" aria-labelledby={titleId} lang={locale === "zh" ? "zh-CN" : locale}>
      <div className="hello-jev-heading">
        <h2 id={titleId}>Hello Jev</h2>
        <button type="button" className="developer-copy-button" data-copied={copyState === "copied"} aria-label={t.copyExample} aria-describedby={feedbackId} onClick={() => void copyExample()}>
          {copyState === "copied" ? <Check size={15} aria-hidden="true" /> : <Copy size={15} aria-hidden="true" />}
          <span>{copyState === "copied" ? t.copied : t.copyExample}</span>
        </button>
      </div>
      <p className="hello-jev-intro">{t.intro}</p>
      <p className="hello-jev-preview-label">{t.preview}</p>
      <pre className="hello-jev-code" id={codeId} tabIndex={0} aria-label={t.codeRegion}><code>{expanded ? helloJevSnippet : helloJevPreview}</code></pre>
      <div className="hello-jev-toolbar">
        <button type="button" className="hello-jev-expand" aria-expanded={expanded} aria-controls={codeId} onClick={() => setExpanded(!expanded)}>
          <ChevronDown size={15} aria-hidden="true" /><span>{expanded ? t.collapse : t.expand}</span>
        </button>
        <a href={helloJevSource.readme} target="_blank" rel="noopener noreferrer">{t.source}<ArrowUpRight size={14} aria-hidden="true" /></a>
      </div>
      <p className="hello-jev-setup">{t.setup}</p>
      <p id={feedbackId} role="status" aria-live="polite" className={copyState === "failed" ? "developer-copy-feedback" : "developer-sr-only"}>{copyState === "copied" ? t.copied : copyState === "failed" ? t.failed : ""}</p>
      {copyState === "failed" && <textarea ref={manualCopy} className="developer-manual-copy hello-jev-manual-copy" aria-label={t.manualExample} value={helloJevSnippet} readOnly spellCheck={false} onFocus={(event) => event.currentTarget.select()} />}
    </section>
  );
}
