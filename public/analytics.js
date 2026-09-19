/* Cloudflare's site identifier is public. No account credential is used here. */
(() => {
  const node = document.currentScript;
  const token = node?.dataset.siteToken;
  if (!/^[a-f\d]{32}$/i.test(token || "")) return;
  if (location.hostname !== node.dataset.hostname || !location.pathname.startsWith(node.dataset.pathPrefix)) return;
  if (navigator.doNotTrack === "1" || window.doNotTrack === "1" || navigator.globalPrivacyControl === true) {
    document.documentElement.dataset.analytics = "privacy-opt-out";
    return;
  }
  if (document.querySelector("script[data-jev-beacon]")) return;
  const script = document.createElement("script");
  script.type = "module";
  script.src = "https://static.cloudflareinsights.com/beacon.min.js";
  script.dataset.cfBeacon = JSON.stringify({ token });
  script.dataset.jevBeacon = "true";
  script.addEventListener("load", () => { document.documentElement.dataset.analytics = "loaded"; });
  script.addEventListener("error", () => { document.documentElement.dataset.analytics = "unavailable"; });
  document.head.append(script);
})();
