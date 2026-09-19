export type DeveloperLocale = "zh" | "en" | "ja" | "ko";
export function githubCloneCommand(input: unknown): string | null;
export function copyDeveloperText(text: string, clipboard?: Pick<Clipboard, "writeText">): Promise<boolean>;
export const helloJevSource: Readonly<{
  package: string; version: string; commit: string;
  readme: string; client: string; questions: string;
}>;
export const helloJevPreview: string;
export const helloJevSnippet: string;
interface DeveloperActionCopy {
  intro: string; preview: string; copyExample: string; copied: string;
  failed: string; expand: string; collapse: string; setup: string;
  source: string; codeRegion: string; manualExample: string;
  clone: string; cloneText: string; manualClone: string; cloneCopied: string; dismiss: string;
}
export const developerActionCopy: Record<DeveloperLocale, DeveloperActionCopy>;
