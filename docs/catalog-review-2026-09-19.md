# 2026-09-19 全目录审核 / Catalog audit

最终目录保留当前主分支的 **259 条记录**：**252 条完成源码说明核对，7 条保留为 `review-pending`**。本轮修正了 79 项分类，并为 252 条已审校记录对齐中英日韩的简介、决策点和用途。这些记录共附 665 条固定版本源码引用；其中 49 项许可未确认、1 项为自定义许可，均不能笼统称为已确认开源授权。14 个初始种子保留，人工审校其事实与翻译，自动同步仍不得覆盖审定文案。

The final catalog preserves **all 259 records from the current main branch: 252 source-reviewed entries and 7 marked `review-pending`**. The review corrected 79 category assignments and aligned Chinese, English, Japanese and Korean descriptions for the 252 reviewed entries, supported by 665 fixed-version source references. Of those entries, 49 have unconfirmed licenses and one has a custom license. Public source is not automatically open-source licensed. Source review is not independent execution, benchmarking, security auditing, legal clearance or endorsement.

The original review snapshot covered 260 records. Upstream had already removed `alxcrt/is-odd-jev` before integration; that change is preserved. The later requirement to keep the current 259 records supersedes the initial removal proposals. Seven questioned records remain identifiable and recoverable, with explicit review status rather than an unqualified recommendation.

最初审查快照包含 260 条；整合前上游已删除 `alxcrt/is-odd-jev`，本轮保留该变更。随后明确的“保留当前 259 条”要求优先于早期移除建议，因此下述 7 条没有从数据中删除，而是保留身份与原记录、标明待复核。

## Changes with user-visible impact

- Removed mismatched category templates, unsupported speed/cost/security/profit claims, and translations that described unrelated functionality.
- Corrected SDK/tool names, optional or disabled integrations, shadow-mode boundaries, mock benchmarks, model/API identities, and current canonical repository URLs.
- Distinguished public code from declared open-source licenses. OpenJev is explicitly a protocol-compatible implementation using DiffusionGemma, not a claim that it calls TypeSafe's hosted model.
- Preserved small but real tools. Stars, age and visual polish are not removal criteria.
- Retained seven questioned records with explicit multilingual reasons. Their public summaries explain the review concern rather than repeat unsupported claims. Pending detail pages are excluded from the sitemap and marked `noindex,follow`.
- Kept discovery exclusions for unresolved findings so an automated discovery run cannot reintroduce the same record as an ordinary, reviewed project.
- Standardized all 259 records to 20 topic IDs, with 2–3 tags per project. Tag migration changes only `tags`; stable IDs, repository URLs and multilingual fields are checked against the pre-migration snapshot.

## Retained pending entries / 保留待复核条目

All seven records below remain in `src/data/projects.json` with `catalogStatus: "review-pending"`. “Out of scope” is a review finding, not a statement that the upstream project is poor quality.

以下 7 条均保留在 `src/data/projects.json` 中，状态为 `review-pending`。范围不符是目录适用性判断，不代表上游项目质量低。

| Repository | Review concern | Reason |
| --- | --- | --- |
| [vlad-terin/jev-use](https://github.com/vlad-terin/jev-use) | Source unavailable / 来源不可用 | 当前仓库 metadata 端点返回 404，无法区分已删除、改为私有或其他不可访问原因；不是根据旧 SHA 失效推断无集成。保留旧记录待来源恢复。 |
| [AE-AlphaEdge/grokskill-jev](https://github.com/AE-AlphaEdge/grokskill-jev) | Source unavailable / 来源不可用 | 当前仓库 metadata 端点返回 404，无法区分已删除、改为私有或其他不可访问原因；不是根据旧 SHA 失效推断无集成。保留旧记录待来源恢复。 |
| [hr98w/jev-visual](https://github.com/hr98w/jev-visual) | Integration scope / 集成范围 | README 明确本地模型为 Qwen3.5-0.8B + MLX，仅借鉴 Jev-like logits scoring；未集成 TypeSafe Jev。保留为待复核记录，不描述为实际 Jev 模型集成。 |
| [Olti1947/jev-java](https://github.com/Olti1947/jev-java) | API contract / API 契约 | 存在 HTTP 代码，但请求与响应契约不匹配：JevRequest 发送 evaluations 数组而非 questions 对象，evaluateChoice 读取 results[0].value 而非 answers；对照同批官方 TypeSafe SDK。未执行第三方代码或实际 API，不把该 SDK 描述为已可用；开源许可尚未确认。 |
| [rongxinzy/LightJev](https://github.com/rongxinzy/LightJev) | Integration scope / 集成范围 | 独立 Qwen3-0.6B 训练项目，README.zh-CN.md:157 明确只用程序真值、排除 Jev 教师输出；未集成 TypeSafe/Jev API 或模型。保留待复核不是对质量或 Star 数的否定。 |
| [AkashPriyadarshii/jev-git](https://github.com/AkashPriyadarshii/jev-git) | Fail-open gate / 门禁失败放行 | src/main.rs:113–114 缺 Key 成功返回，156–163 API/解析错误成功返回，167–192 缺少答案也可 PASS；95 覆盖原 pre-commit 且未设置可执行位。保留待复核，不将演示时延或概率包装成安全保证。 |
| [Dicklesworthstone/skillranker](https://github.com/Dicklesworthstone/skillranker) | License rider / 许可附加限制 | 固定 SHA 的 LICENSE 含针对特定主体的限制性 rider，不是普通 MIT。保留记录并标明许可问题，不代表功能质量差，也不提供合规结论。 |

## Evidence and limits

The machine-readable receipt is [radar/reviews/2026-09-19.json](../radar/reviews/2026-09-19.json). It records decisions, checked revisions and source references, plus original records for the questioned entries. Its historical `removedOrQuarantined` field preserves the original proposals; the final `catalogRecords`, `pendingRecordsRetained` and `userConstraint` fields describe the implemented preservation decision. Repository 404 responses are reported as unavailable; they do not establish whether a repository was deleted or made private. Contract and fail-open findings are source findings; third-party code was not executed.

Repository metadata was re-read. Source hashes refer to the recorded revisions; later upstream changes need another review. Stars measure attention to the entire repository, including large frameworks with optional Jev adapters, not Jev adoption or project quality.

## Security and publication

Workflow permissions were separated by job, personal-token references removed, and official actions pinned. Data publication is bound to the reviewed source commit with a non-force main-ref update. See [SECURITY.md](../SECURITY.md).

Local agent research files are now untracked and ignored; the files remain on the maintainer's machine. Earlier Git history was not rewritten. A full-history GitGuardian scan reported one Generic Password finding at an old URL validation guard (`url.password || url.port`); syntax inspection confirmed it was a property check, not a credential value. No confirmed credential leak was identified by that scan. This is a bounded scanner result, not an absolute security guarantee.

The static site generates reciprocal language links, unique canonical URLs, real per-project pages, an accurate sitemap and a source-linked llms.txt from the same data. No schema claims that the Jev service is free, that projects are production-proven, or that search placement is guaranteed. Google explicitly recommends crawlable useful content and ordinary SEO fundamentals for its AI search features; it provides no guarantee of crawling, indexing or ranking. See [Google JavaScript SEO](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics) and [Google AI search guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide).

## Sponsorship independence / 赞助独立

The commerce features do not change the catalog's review findings or natural search ranking. Paid display areas are labeled; project counts are not presented as people reached. There are no paid sponsors at this release. See [SPONSORS.md](../SPONSORS.md) and [SPONSORING.md](../SPONSORING.md) for disclosure, reference rates and the contact-first process.

商业合作功能不改变目录审查结论或自然搜索排序。付费展示独立标注，不把项目数当作触达人数；本次版本尚无付费赞助商。合作说明、参考价格与先联系后付款流程见上述文档。
