import { readFile } from "node:fs/promises";
export const BEACON_SCRIPT = "https://static.cloudflareinsights.com/beacon.min.js";
export const BEACON_ENDPOINT = "https://cloudflareinsights.com/cdn-cgi/rum";
export function validateAnalytics(config) {
  if (!config?.enabled) return { enabled: false };
  if (config.provider !== "cloudflare" || !/^[a-f\d]{32}$/i.test(config.siteToken ?? "") ||
      config.scriptUrl !== BEACON_SCRIPT || config.hostname !== "logicrw.github.io" ||
      config.pathPrefix !== "/awesome-jev-projects/" || config.respectPrivacySignals !== true) {
    throw new Error("Invalid analytics configuration; no unapproved script or collector is allowed");
  }
  return config;
}
export async function loadAnalytics() {
  return validateAnalytics(JSON.parse(await readFile(new URL("../src/data/analytics.json", import.meta.url), "utf8")));
}
export function analyticsMarkup(config) {
  const value = validateAnalytics(config);
  if (!value.enabled) return "";
  // This is Cloudflare's public beacon identifier, not an API credential.
  return `<script defer src="/awesome-jev-projects/analytics.js" data-analytics="cloudflare" data-site-token="${value.siteToken}" data-hostname="${value.hostname}" data-path-prefix="${value.pathPrefix}"></script>`;
}
export function analyticsSources(html, config) {
  return validateAnalytics(config).enabled && html.includes('data-analytics="cloudflare"')
    ? { script: BEACON_SCRIPT, connect: BEACON_ENDPOINT }
    : { script: "", connect: "" };
}
