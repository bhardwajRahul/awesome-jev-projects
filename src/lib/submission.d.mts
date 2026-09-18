export interface SubmissionValues {
  repo: string;
  purpose: string;
  decision: string;
}

export type SubmissionErrors = Partial<Record<keyof SubmissionValues, string>>;
export type SubmissionLocale = "zh" | "en";

export function normalizeRepository(input: string): string | null;
export function validateSubmission(
  values: SubmissionValues,
  locale?: SubmissionLocale,
): {
  values: SubmissionValues;
  errors: SubmissionErrors;
};
export function createIssueUrl(
  values: SubmissionValues,
  locale?: SubmissionLocale,
): string;
