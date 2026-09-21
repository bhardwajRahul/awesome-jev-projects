/* Same-origin, pre-paint language routing. Honors explicit user selection, defaults to English for international visitors. */
(() => {
  if (typeof window === "undefined") return;
  const path = window.location.pathname;
  // Only auto-route on the root landing page, avoid redirect loops on subpages
  const base = "/awesome-jev-projects/";
  const isRoot = path === base || path === base + "index.html" || path === "/" || path === "/index.html";
  if (!isRoot) return;

  const key = "awesome-jev:locale";
  let stored = null;
  try { stored = localStorage.getItem(key); } catch {}

  // If user explicitly chose a locale:
  if (stored === "zh") return;
  if (stored === "en" || stored === "ja" || stored === "ko") {
    const target = (path.startsWith(base) ? base : "/") + stored + "/" + window.location.search + window.location.hash;
    window.location.replace(target);
    return;
  }

  // If URL explicitly requests Chinese via query param ?lang=zh, remember it and stay
  const search = new URLSearchParams(window.location.search);
  if (search.get("lang") === "zh") {
    try { localStorage.setItem(key, "zh"); } catch {}
    return;
  }

  // First-time visitor on root path without stored preference:
  const nav = ((navigator.languages && navigator.languages[0]) || navigator.language || "").toLowerCase();
  if (nav.startsWith("zh")) {
    // Explicit Chinese preference: stay on default Chinese root
    return;
  }

  // Direct international visitors to their language or default to English
  let targetLang = "en";
  if (nav.startsWith("ja")) targetLang = "ja";
  else if (nav.startsWith("ko")) targetLang = "ko";

  const targetUrl = (path.startsWith(base) ? base : "/") + targetLang + "/" + window.location.search + window.location.hash;
  window.location.replace(targetUrl);
})();
