# Search contract

`createProjectSearch(projects)` builds an in-memory index once. Reuse it with
`searchProjects(index, query)`. Results contain the original project objects in
a new array; neither operation changes catalog records. `browseSort` and quick
filters remain separate and unchanged.

## Ranking

1. **Exact identity (1000+):** normalized project name, stable ID, author,
   repository URL or URL slug. Full-width characters, case and GitHub URL
   query/hash/trailing-slash variants normalize to the same identity.
   Non-GitHub HTTP URLs retain path case, query parameters and fragments.
2. **Identity prefix or complete name/path word (500+).**
3. **All concepts matched (100–499):** names/path words weigh 10, GitHub topics
   and tags 6, summaries/benefits/descriptions/text evidence 4, Jev decisions 3,
   and language/category 1. Presence is capped per field; repetition and Stars
   cannot buy relevance. A small length adjustment breaks ties within each band.
4. **Partial or approximate matches (1–99):** used only when there is no full
   match. Queries with at least three input words need at least half their words
   (minimum two). More coverage ranks first. Known phrases such as `browser
   automation` retain two words of coverage; their synonym alternatives are not
   counted as additional matches. Repeated concepts cannot inflate coverage.

One-of-two matches remain empty, preserving queries such as `Rust
impossible-missing-tool`. Exact and whole-query prefix hits suppress partial
fallbacks. Stable normalized IDs break ties, independent of input order.

Chinese, Japanese and Korean character bigrams allow non-contiguous phrase
fallbacks with at least two shared bigrams and 60% coverage. This is lexical
matching, not semantic inference. Unknown Latin words of five or more letters
can use one edit or an adjacent transposition; short words and synonym
expansions never use fuzzy matching.

## Evidence and compatibility

Named technologies (`Rust`, `Claude`, `Playwright`) require the project's own
names, language, text, or declared GitHub topics. Taxonomy descriptions and
ordinary catalog tags alone cannot establish those associations. This applies
inside partial queries too.

The public data projection explicitly admits bounded GitHub topics, a public
description and textual evidence lines. Numeric line references, internal
objects, source dumps and recognizable credentials/local paths are excluded;
review-pending records do not export the new metadata. Existing evidence notes
remain searchable. No query sends data or requests to a server.

`SearchMetadata` describes optional enrichment for new TypeScript callers.
It is separate from the original `SearchableProject` generic constraint so
legacy records using fields like `description` for other structures still
compile; unsupported values are ignored when indexing.

## Verification and performance

Run `npm test` and `npm run build`. The tests cover identity pinning, metadata
weights, Unicode, real topics versus taxonomy, partial coverage, numeric
provenance exclusion, read-only inputs and declaration compatibility.

`node scripts/search.bench.mjs --output /absolute/path/to/report.json` measures
300 records, 29 query shapes and 100 rounds per query. It reports index creation
separately from query median/p95/max and retains individual samples, environment
and source checksums. Reports are created exclusively rather than overwritten.
There is no cross-query result cache. Timing is reported rather than used as a
flaky CI assertion; the target is less than 5ms per query on this catalog size.
