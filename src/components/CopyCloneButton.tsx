import { useEffect, useId, useRef, useState } from "react";
import { Check, Copy, X } from "lucide-react";
import { copyDeveloperText, developerActionCopy, githubCloneCommand } from "../lib/developer-actions.mjs";
import type { DeveloperLocale } from "../lib/developer-actions.mjs";
import "../styles/developer-actions.css";

export function CopyCloneButton({ url, locale }: { url: string; locale: DeveloperLocale }) {
  const command = githubCloneCommand(url);
  const t = developerActionCopy[locale];
  const feedbackId = useId();
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");
  const manualCopy = useRef<HTMLTextAreaElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const reset = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    return () => { mounted.current = false; clearTimeout(reset.current); };
  }, []);
  useEffect(() => { setCopyState("idle"); clearTimeout(reset.current); }, [url]);
  useEffect(() => {
    if (copyState === "failed") { manualCopy.current?.focus(); manualCopy.current?.select(); }
  }, [copyState]);

  async function copyClone() {
    if (!command) return;
    clearTimeout(reset.current);
    let copied = false;
    try { copied = await copyDeveloperText(command, navigator.clipboard); } catch { /* Manual recovery below. */ }
    if (!mounted.current) return;
    setCopyState(copied ? "copied" : "failed");
    if (copied) reset.current = setTimeout(() => setCopyState("idle"), 2400);
  }

  if (!command) return null;
  return (
    <div className={`developer-clone${copyState === "failed" ? " developer-clone-recovery" : ""}`}>
      <button ref={button} type="button" className="developer-copy-button developer-clone-button" data-copied={copyState === "copied"} aria-label={t.clone} aria-describedby={feedbackId} title={t.clone} onClick={() => void copyClone()}>
        {copyState === "copied" ? <Check size={14} aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
        <span>{copyState === "copied" ? t.copied : t.cloneText}</span>
      </button>
      <p id={feedbackId} className={copyState === "failed" ? "developer-copy-feedback" : "developer-sr-only"} role="status" aria-live="polite">{copyState === "copied" ? t.cloneCopied : copyState === "failed" ? t.failed : ""}</p>
      {copyState === "failed" && <div className="developer-clone-fallback">
        <textarea ref={manualCopy} className="developer-manual-copy" aria-label={t.manualClone} value={command} readOnly rows={3} spellCheck={false} onFocus={(event) => event.currentTarget.select()} />
        <button type="button" className="developer-copy-dismiss" aria-label={t.dismiss} title={t.dismiss} onClick={() => { setCopyState("idle"); button.current?.focus(); }}><X size={14} aria-hidden="true" /></button>
      </div>}
    </div>
  );
}
