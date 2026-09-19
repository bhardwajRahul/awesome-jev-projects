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
  "language",
  "lastCommitAt",
  "createdAt",
  "metadataFetchedAt",
  "avatarUrl",
  "summarySource",
  "claimStatus",
  "claimStatusEn",
  "plainSummaryJa",
  "plainSummaryKo",
  "jevDecisionPointJa",
  "jevDecisionPointKo",
  "highlightBenefitJa",
  "highlightBenefitKo",
  "claimStatusJa",
  "claimStatusKo",
  "licenseStatus",
  "sourceReviewedAt",
  "catalogStatus",
  "reviewReason",
  "reviewReasonEn",
  "reviewReasonJa",
  "reviewReasonKo",
  "evidence",
  "pinned",
];
export function publicProjects(rows) {
  return rows.map((row) => {
    const project = Object.fromEntries(
      publicFields
        .filter((key) => row[key] !== undefined)
        .map((key) => [key, row[key]]),
    );
    if (row.catalogStatus === "review-pending") {
      const pending = {
        "": ["此条目待复核，暂不作为已确认的 Jev 集成推荐。", "保留记录供追踪；请先查看复核原因与来源。"],
        En: ["This entry is pending review, not a verified Jev integration recommendation.", "The record is preserved for follow-up. Check the review reason and sources first."],
        Ja: ["この項目は確認待ちであり、検証済みの Jev 連携としては推奨していません。", "追跡用に記録を保持しています。先に確認待ちの理由と出典をご確認ください。"],
        Ko: ["이 항목은 검토 대기 중이며 검증된 Jev 연동으로 추천하지 않습니다.", "추후 확인을 위해 기록을 보존합니다. 먼저 검토 사유와 출처를 확인하세요."],
      };
      for (const [suffix, copy] of Object.entries(pending)) {
        const reason = row[`reviewReason${suffix}`] || copy[0];
        project[`plainSummary${suffix}`] = reason;
        project[`jevDecisionPoint${suffix}`] = copy[0];
        project[`highlightBenefit${suffix}`] = copy[1];
        project[`claimStatus${suffix}`] = reason;
      }
      project.summarySource = "review-pending";
      project.license = null;
      project.licenseStatus = "unconfirmed";
      project.evidence = (row.reviewSources ?? []).map(({ url }) => ({ url }));
    }
    return project;
  });
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
