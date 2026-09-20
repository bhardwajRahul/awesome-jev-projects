export function isSafeAuthorName(author: string | null | undefined): boolean;
export function isSafeAvatarUrl(url: string | null | undefined): boolean;
export function getLocalAvatarPath(author: string | null | undefined, baseUrl?: string): string | null;
export function getAvatarSources(author: string | null | undefined, remoteUrl: string | null | undefined, baseUrl?: string): string[];
export const loadedAvatarCache: Set<string>;
export function isAvatarCached(src: string | null | undefined): boolean;
export function markAvatarCached(src: string | null | undefined): void;
export function prefetchAvatars(projects: Array<{ author?: string } | null | undefined>, baseUrl?: string): void;
