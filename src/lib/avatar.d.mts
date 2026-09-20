export function isSafeAuthorName(author: string | null | undefined): boolean;
export function isSafeAvatarUrl(url: string | null | undefined): boolean;
export function getLocalAvatarPath(author: string | null | undefined, baseUrl?: string): string | null;
export function getAvatarSources(author: string | null | undefined, remoteUrl: string | null | undefined, baseUrl?: string): string[];
