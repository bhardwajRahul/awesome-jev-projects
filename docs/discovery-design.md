# Discovery interactions and regression contract

The directory remains the main product. The inspiration draw is an optional Hero action, and the daily pick is a compact sidebar button. Neither changes the search query, filters, saved projects, organic ranking, or canonical project data.

## Design references

- [Aceternity 3D Card Effect](https://ui.aceternity.com/components/3d-card-effect): use small CSS perspective and rotation to give the card depth. This implementation limits pointer tilt to four degrees.
- [Magic UI Confetti](https://magicui.design/docs/components/confetti) and [Border Beam](https://magicui.design/docs/components/border-beam): celebrate a deliberate action once; use a restrained highlight instead of a permanent animated banner. The draw uses 18 short-lived Canvas particles and a pointer-driven highlight.
- [Raycast's design update](https://www.raycast.com/blog/a-fresh-look-and-feel): keep search central and secondary actions compact. The Header keeps its existing six mobile controls; the new action shares the Hero toolbar.
- [daily.dev](https://daily.dev/) and its [documentation](https://docs.daily.dev/): preserve the feed and use small discovery controls alongside tags and themes.

No UI, animation or 3D dependency was added. The draw's JavaScript and CSS load only when opened. A loading/error dialog can be closed or retried without losing the catalog state. Animations last 180–200ms; reduced-motion preferences and coarse pointers disable tilt and particles.

## Selection policy

Both features exclude `review-pending` records. Stars describe GitHub attention, not security, quality, runtime adoption or performance. Sponsorship does not affect either selection.

The random draw gives every eligible stable project ID the same chance, excluding the immediately previous card when more than one is available. It copies public project text and the canonical localized detail URL. It opens GitHub separately; it never executes project code or calls a model.

The daily pick first uses reviewed projects with 20–50 Stars and a declared or confirmed, non-custom license. If that pool is empty, it falls back to eligible projects below 1,000 Stars, then the remaining eligible catalog. At this release, 252 projects are drawable and 13 form the primary daily pool.

Daily selection sorts stable IDs and uses the UTC epoch day plus a fixed hash offset of the pool. This avoids adjacent-day repeats and covers every project in one rotation. Every visitor using the same catalog version sees the same choice regardless of language, timezone, input order or selected filters. A later catalog release can change the eligible pool and therefore the selection; the directory does not claim consistency between different cached data versions.

The server includes its UTC date in the initial snapshot. The browser checks the date after loading, at UTC midnight, and when the page resumes. No backend, visitor identifier, cookie or new analytics event is needed.

## Six-lane non-regression checks

| Lane | Invariant | Verification |
| --- | --- | --- |
| Data and security | All 259 records remain byte-identical; pending entries excluded from recommendations; token and publication boundaries unchanged | Baseline SHA-256, discovery tests, independent code review, existing security tests |
| Sponsorship and Agent access | Four-language Sponsor and Agent dialogs remain accessible; all nine machine resources stay published | Existing tests, browser interactions, Pages archive audit and live readback |
| Header | Language remains last with a globe; Star has no count; counts remain data-driven | Server-render regression and 375/430px browser inspection |
| Tags | 20 topics, 2–3 tags per record, localized counts/examples and clickable chips remain | Tag tests, unchanged taxonomy hash, browser regression |
| Search and developer UX | Exact names outrank Stars; synonyms, four quick filters, Hello Jev, clone, mobile tabs and themes remain | Existing search tests and browser checks before/after opening discovery |
| Discovery | UTC selection is deterministic; no immediate random repeat; no automatic modal; focus, copy, loading recovery and reduced motion work | Pure-function and SSR tests, production-bundle browser tests |

## Measuring performance

Measure both uncompressed initial assets and gzip transfer cost against the release before this feature. Report the separately loaded draw assets instead of hiding them from the total. A 15KB transfer budget is not a claim that the complete source diff is smaller than 15KB. Frame timing is a measurement on the tested browser/device, not a guarantee for all hardware. Keep raw build logs and runtime results with the release evidence.
