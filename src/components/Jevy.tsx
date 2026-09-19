import { useEffect, useId, useRef, useState } from "react";
import type { Locale } from "../lib/i18n";
import "../styles/jevy.css";

const cog = "M-4-17h8l1 5 4 2 5-2 4 7-4 3v4l4 3-4 7-5-2-4 2-1 5h-8l-1-5-4-2-5 2-4-7 4-3v-4l-4-3 4-7 5 2 4-2Z";

export function Jevy(_props: { locale: Locale }) {
  const id = useId();
  const root = useRef<HTMLDivElement>(null);
  const [winding, setWinding] = useState(false);
  const [awake, setAwake] = useState(true);

  useEffect(() => {
    let visible = true;
    const update = () => setAwake(visible && !document.hidden);
    const observer = typeof IntersectionObserver === "undefined" ? null : new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      update();
    });
    if (root.current) observer?.observe(root.current);
    document.addEventListener("visibilitychange", update);
    update();
    return () => { observer?.disconnect(); document.removeEventListener("visibilitychange", update); };
  }, []);

  useEffect(() => {
    if (!winding) return;
    const timer = window.setTimeout(() => setWinding(false), 950);
    return () => window.clearTimeout(timer);
  }, [winding]);

  return (
    <div ref={root} className="jevy" data-awake={awake} data-winding={winding} aria-hidden="true" onClick={() => setWinding(true)}>
      <svg viewBox="0 0 184 166" width="176" height="159" fill="none" focusable="false">
        <defs>
          <linearGradient id={`${id}-brass`} x1="0" y1="0" x2=".85" y2="1">
            <stop className="jevy-brass-light" /><stop offset=".4" className="jevy-brass-mid" /><stop offset="1" className="jevy-brass-dark" />
          </linearGradient>
          <linearGradient id={`${id}-steel`} x1="0" y1="0" x2=".8" y2="1">
            <stop className="jevy-steel-light" /><stop offset=".3" className="jevy-steel-mid" /><stop offset="1" className="jevy-steel-dark" />
          </linearGradient>
          <linearGradient id={`${id}-lens`} x1="0" y1="0" x2="1" y2="1">
            <stop className="jevy-lens-light" /><stop offset=".65" className="jevy-lens-dark" />
          </linearGradient>
        </defs>
        <ellipse className="jevy-shadow" cx="94" cy="154" rx="43" ry="5" />
        <g className="jevy-assembly" strokeLinejoin="round" strokeLinecap="round">
          {/* The winding key, jointed legs and feet sit behind the cast body. */}
          <path d="M124 86h22" className="jevy-edge" strokeWidth="7" />
          <path d="M126 84h20" className="jevy-brass-stroke" strokeWidth="3" />
          <g transform="translate(151 85)">
            <g className="jevy-key" fill={`url(#${id}-brass)`} stroke="var(--jevy-edge)" strokeWidth="1.5">
              <path fillRule="evenodd" d="M-4-3C-18-6-16-19-8-19c8 0 10 8 8 16C9-9 19-6 19 1c0 9-14 11-19 3L-5 5Zm-1-5c1-5-1-8-4-7-4 1-3 6 4 7ZM5 1c5 5 11 3 10 0-1-4-5-4-10 0Z" />
              <circle r="3.2" className="jevy-hardware" /><path d="m-1.2-1.2 2.4 2.4" />
            </g>
          </g>
          <path d="m79 129-3 13m29-13 4 13" className="jevy-edge" strokeWidth="9" />
          <path d="m79 130-3 11m29-11 4 11" className="jevy-brass-stroke" strokeWidth="4" />
          <path d="M64 143c2-5 13-6 18-2l2 8H63Zm39-2c5-4 16-3 18 2l1 6h-21Z" fill={`url(#${id}-steel)`} className="jevy-outline" />
          <path d="M63 150h21m17 0h21" className="jevy-edge" strokeWidth="3" />
          <path d="M66 143h11m29 0h10" className="jevy-shine" />
          {/* Ribbed arms terminate in a small articulated claw. */}
          <path d="M67 106c-11-5-16 3-18 17m72-17c10-3 14 5 15 13" className="jevy-edge" strokeWidth="9" />
          <path d="M65 106c-9-2-11 6-13 13m72-13c6 0 8 5 9 10" className="jevy-brass-stroke" strokeWidth="4" strokeDasharray="1 3" />
          <path d="m46 123-4 5 2 6m8-11 4 5-2 5m80-14-4 6 3 6m6-12 5 5-1 6" className="jevy-edge" strokeWidth="4" />
          <path d="m46 123-4 5m10-5 4 5m78-9-4 6m9-6 5 5" className="jevy-brass-stroke" strokeWidth="2" />
          <path d="M71 98h42l6 11-5 22c-12 8-31 8-43 0l-5-22Z" fill={`url(#${id}-steel)`} className="jevy-outline" />
          <path d="M73 102h38m-37 29c10 4 23 4 34 0" className="jevy-shine" />
          <rect x="84" y="94" width="17" height="9" rx="2" className="jevy-hardware" />
          <path d="M85 96h15m-15 3h15" className="jevy-edge" />
          <g transform="translate(92 116)">
            <g className="jevy-cog">
              <path d={cog} transform="scale(.67)" fill={`url(#${id}-brass)`} className="jevy-outline" strokeWidth="1.5" />
              <circle r="6.5" className="jevy-hardware" /><path d="M-4 0h8M0-4v8" className="jevy-brass-stroke" strokeWidth="2" />
            </g>
            <circle r="2.5" className="jevy-hardware jevy-outline" />
          </g>
          <circle cx="73" cy="110" r="1.5" className="jevy-rivet" /><circle cx="111" cy="110" r="1.5" className="jevy-rivet" />
          <path d="M77 126h3m24 0h3" className="jevy-brass-stroke" strokeWidth="2" />
          <g className="jevy-head">
            {/* A three-pin glass transistor forms the antenna. */}
            <path d="M91 38V24m5 14V24m-10 9 1-9" className="jevy-brass-stroke" strokeWidth="2" />
            <path d="M86 23V16a7 7 0 0 1 14 0v7Z" fill={`url(#${id}-lens)`} className="jevy-outline" />
            <path className="jevy-antenna-light" d="M90 20v-4a3 3 0 0 1 6 0v4Z" />
            <path d="M88 23h10" className="jevy-brass-stroke" strokeWidth="3" />
            <path d="M89 13v5" className="jevy-shine" strokeWidth="1.5" />
            <rect x="48" y="59" width="11" height="21" rx="4" fill={`url(#${id}-brass)`} className="jevy-outline" />
            <path d="M51 64v11" className="jevy-shine" />
            <rect x="128" y="58" width="11" height="22" rx="4" fill={`url(#${id}-brass)`} className="jevy-outline" />
            <path d="M135 63v11" className="jevy-edge" strokeWidth="2" />
            <path d="M69 36h46l17 13v32l-12 15H66L55 83V50Z" fill={`url(#${id}-steel)`} className="jevy-outline" />
            <path d="m59 50 12-10h41l14 11" className="jevy-shine" />
            <path d="M59 83h69l-10 10H68Z" className="jevy-faceplate" />
            <path d="M84 87h19" className="jevy-edge" strokeWidth="3" />
            <path d="M86 86h15" className="jevy-brass-stroke" />
            <path d="M75 44h35" className="jevy-brass-stroke" strokeWidth="2" />
            {/* Individually machined lens bezels, index marks and glass reflections. */}
            <circle cx="76" cy="65" r="19" fill={`url(#${id}-brass)`} className="jevy-outline" />
            <circle cx="76" cy="65" r="15.5" className="jevy-hardware jevy-outline" />
            <circle cx="76" cy="65" r="12" fill={`url(#${id}-lens)`} className="jevy-outline" />
            <path d="M76 47v3m-17 15h3m14 15v3m15-18h3" className="jevy-edge" />
            <path d="M65 59a13 13 0 0 1 12-7" className="jevy-shine" />
            <circle cx="111" cy="65" r="16" fill={`url(#${id}-brass)`} className="jevy-outline" />
            <circle cx="111" cy="65" r="12.5" className="jevy-hardware jevy-outline" />
            <circle cx="111" cy="65" r="9.5" fill={`url(#${id}-lens)`} className="jevy-outline" />
            <path d="M111 50v2m-14 13h2m12 13v2m12-15h2" className="jevy-edge" />
            <path d="M103 59a10 10 0 0 1 9-5" className="jevy-shine" />
            <g className="jevy-gaze">
              <rect x="74" y="59" width="5" height="11" rx="2.5" className="jevy-eye-light" />
              <rect x="109" y="60" width="4.5" height="10" rx="2.25" className="jevy-eye-light" />
              <circle cx="70" cy="58" r="2" className="jevy-glint" /><circle cx="107" cy="59" r="1.5" className="jevy-glint" />
            </g>
            <path d="m64 45 2 2m57-2-2 2m-58 40 2 2m58-2-2 2" className="jevy-rivet-stroke" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}
