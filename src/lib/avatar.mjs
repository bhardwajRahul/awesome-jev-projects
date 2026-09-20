/**
 * Validates and provides resilient avatar sources for a project author.
 * Local same-origin static avatars are prioritized to guarantee 100% availability
 * in offline and restricted network environments, with GitHub avatars as reliable fallback.
 */

const SAFE_AUTHOR_REGEX = /^[a-zA-Z0-9_\-\.]+$/;
const GITHUB_AVATAR_PREFIX = "https://avatars.githubusercontent.com/";
const DEFAULT_BASE = typeof import.meta !== "undefined" && import.meta.env?.BASE_URL ? import.meta.env.BASE_URL : "/awesome-jev-projects/";

export function isSafeAuthorName(author) {
  return typeof author === "string" && SAFE_AUTHOR_REGEX.test(author.trim());
}

export function isSafeAvatarUrl(url) {
  if (typeof url !== "string" || !url) return false;
  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:" && parsed.hostname === "avatars.githubusercontent.com";
  } catch {
    return false;
  }
}

export function getLocalAvatarPath(author, baseUrl = DEFAULT_BASE) {
  if (!isSafeAuthorName(author)) return null;
  const prefix = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
  return `${prefix}avatars/${author.trim().toLowerCase()}.png`;
}

export function getAvatarSources(author, remoteUrl, baseUrl = DEFAULT_BASE) {
  const sources = [];
  const localPath = getLocalAvatarPath(author, baseUrl);
  if (localPath) {
    sources.push(localPath);
  }
  if (isSafeAvatarUrl(remoteUrl)) {
    sources.push(remoteUrl);
  }
  return sources;
}
