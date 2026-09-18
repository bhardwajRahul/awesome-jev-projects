import { readFile, writeFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";
export const publicFields = [
  "id",
  "name",
  "author",
  "url",
  "category",
  "plainSummary",
  "plainSummaryEn",
  "jevDecisionPoint",
  "jevDecisionPointEn",
  "highlightBenefit",
  "highlightBenefitEn",
  "tags",
  "stars",
  "forks",
  "openIssues",
  "license",
  "lastCommitAt",
  "createdAt",
  "metadataFetchedAt",
  "avatarUrl",
  "summarySource",
  "claimStatus",
  "claimStatusEn",
  "evidence",
  "pinned",
];
export function publicProjects(rows) {
  return rows.map((row) =>
    Object.fromEntries(
      publicFields
        .filter((key) => row[key] !== undefined)
        .map((key) => [key, row[key]]),
    ),
  );
}
export async function preparePublicData() {
  const rows = JSON.parse(
    await readFile(
      new URL("../src/data/projects.json", import.meta.url),
      "utf8",
    ),
  );
  if (!Array.isArray(rows) || rows.length < 14)
    throw new Error("Missing canonical project dataset");
  await mkdir(new URL("../public/", import.meta.url), { recursive: true });
  await writeFile(
    new URL("../public/projects.json", import.meta.url),
    JSON.stringify(publicProjects(rows)) + "\n",
  );
  console.log(
    `Prepared ${rows.length} public project records; no radar logs or configuration included.`,
  );
}
if (
  process.argv[1] &&
  resolve(process.argv[1]) === fileURLToPath(import.meta.url)
)
  await preparePublicData();
