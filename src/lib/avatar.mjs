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

// In-memory cache for loaded avatars to guarantee zero-latency instant display
export const loadedAvatarCache = new Set();

export function isAvatarCached(src) {
  if (typeof src !== "string" || !src) return false;
  return loadedAvatarCache.has(src);
}

export function markAvatarCached(src) {
  if (typeof src === "string" && src) {
    loadedAvatarCache.add(src);
  }
}

/**
 * Preload an array of projects' avatars into browser cache during idle.
 */
export function prefetchAvatars(projects, baseUrl = DEFAULT_BASE) {
  if (typeof window === "undefined" || !Array.isArray(projects) || projects.length === 0) return;

  const run = () => {
    for (const p of projects) {
      if (!p || !p.author) continue;
      const localPath = getLocalAvatarPath(p.author, baseUrl);
      if (localPath && !loadedAvatarCache.has(localPath)) {
        const img = new Image();
        img.decoding = "async";
        img.onload = () => {
          loadedAvatarCache.add(localPath);
        };
        img.src = localPath;
      }
    }
  };

  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(() => run(), { timeout: 2000 });
  } else {
    setTimeout(run, 100);
  }
}
