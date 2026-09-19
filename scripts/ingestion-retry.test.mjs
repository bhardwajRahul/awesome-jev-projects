import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { bodyHash } from "./issue-ingestion.mjs";
import { retryState, selectRetry, markRetry, claimRetry, MAX_RETRIES, RETRY_LEASE_MS } from "./ingestion-retry.mjs";

const body = "## 项目仓库\nhttps://github.com/example/jev-tool";
const candidate = { issueNumber: 12, bodySha: bodyHash(body), attempt: 1 };
const issue = { number: 12, state: "open", body };
const comment = (attempt, patch = {}) => ({ user: { login: "github-actions[bot]" }, body: `<!-- awesome-jev-retry:v1:${candidate.bodySha}:${attempt} -->`, ...patch });
function fixture({ comments = [], current = issue, search = { items: [issue], total_count: 1 }, reread } = {}) {
  const writes = [];
  const reads = [];
  let issueReads = 0;
  return { writes, reads, api: async (path, options = {}) => {
    if (options.method) { writes.push({ path, ...options }); return {}; }
    reads.push(path);
    if (path.startsWith("/search/issues?")) return search;
    if (path.includes("/comments?")) return comments;
    issueReads++;
    return issueReads > 1 && reread ? reread : current;
  } };
}

test("retry budget trusts only bot markers bound to the exact issue body", () => {
  assert.equal(retryState([comment(0), comment(2)], candidate.bodySha), 2);
  assert.equal(retryState([comment(3, { user: { login: "attacker" } })], candidate.bodySha), -1);
  assert.equal(retryState([comment(0)], bodyHash("edited")), -1);
  assert.equal(retryState([comment(9)], candidate.bodySha), -1);
});

test("only queued open submissions below the retry budget are selected", async () => {
  for (const options of [{ comments: [] }, { comments: [comment(MAX_RETRIES)] }, { comments: [comment(0)], current: { ...issue, state: "closed" } }, { comments: [comment(0)], current: { ...issue, pull_request: {} } }, { comments: [comment(0)], current: { ...issue, body: "edited" } }]) {
    const f = fixture(options);
    assert.equal(await selectRetry({ api: f.api, now: () => 0 }), null);
    assert.equal(f.writes.length, 0);
  }
  const f = fixture({ comments: [comment(0)] });
  assert.deepEqual(await selectRetry({ api: f.api, now: () => 0 }), candidate);
  assert.match(decodeURIComponent(f.reads[0]), /in:comments "awesome-jev-retry"/);
});

test("queue windows rotate so exhausted old entries cannot block every future attempt", async () => {
  const f = fixture({ comments: [comment(0)], search: { items: [issue], total_count: 90 } });
  assert.deepEqual(await selectRetry({ api: f.api, now: () => 1_800_000 }), candidate);
  assert.match(f.reads[1], /page=2$/);
  for (const search of [{ items: [], incomplete_results: true }, { items: [], total_count: 1001 }])
    await assert.rejects(selectRetry({ api: fixture({ search }).api }), /Incomplete or oversized/);
});

test("a stale publication creates one durable pending marker and never resets an existing budget", async () => {
  const fresh = fixture();
  assert.equal(await markRetry({ api: fresh.api, candidate }), true);
  assert.equal(fresh.writes.length, 1);
  assert.match(fresh.writes[0].body.body, /:0 -->/);
  for (const comments of [[comment(0)], [comment(1)], [comment(3)]]) {
    const f = fixture({ comments });
    assert.equal(await markRetry({ api: f.api, candidate }), false);
    assert.equal(f.writes.length, 0);
  }
});

test("claim persists its attempt before dispatch and cannot repeat, exceed budget, or follow edits", async () => {
  const f = fixture({ comments: [comment(0)] });
  assert.equal(await claimRetry({ api: f.api, candidate }), true);
  assert.match(f.writes[0].body.body, /:1 -->/);
  for (const options of [{ comments: [comment(1)] }, { comments: [comment(3)] }, { comments: [comment(0)], current: { ...issue, body: "edited" } }, { comments: [comment(0)], reread: { ...issue, state: "closed" } }]) {
    const g = fixture(options);
    assert.equal(await claimRetry({ api: g.api, candidate }), false);
    assert.equal(g.writes.length, 0);
  }
  await assert.rejects(claimRetry({ api: f.api, candidate: { ...candidate, attempt: 4 } }), /Invalid retry attempt/);
});

test("new scheduler only dispatches the existing gated workflow and has no dependency installation", async () => {
  const workflow = await readFile(new URL("../.github/workflows/reconcile-ingestion.yml", import.meta.url), "utf8");
  assert.match(workflow, /cron: "17,47 \* \* \* \*"/);
  assert.match(workflow, /steps.claim.outputs.claimed == 'true'/);
  assert.match(workflow, /gh workflow run auto-ingest-issue.yml/);
  assert.match(workflow, /--ref main.*dry_run=false/);
  assert.doesNotMatch(workflow, /npm |contents: write|pull_request_target|secrets\./);
  for (const ref of workflow.matchAll(/uses: ([^\s]+)/g)) assert.match(ref[1], /^actions\/.+@[a-f\d]{40}$/);
});


test("in-flight retry leases prevent another scheduled dispatch until 90 minutes have elapsed", async () => {
  const started = Date.parse("2026-09-19T00:00:00Z");
  for (const attempt of [1, 2]) {
    const comments = [comment(0), comment(attempt, { created_at: new Date(started).toISOString() })];
    const expected = { ...candidate, attempt: attempt + 1 };
    const live = fixture({ comments });
    assert.equal(await selectRetry({ api: live.api, now: () => started + RETRY_LEASE_MS - 1 }), null);
    assert.equal(await claimRetry({ api: live.api, candidate: expected, now: () => started + RETRY_LEASE_MS - 1 }), false);
    assert.equal(live.writes.length, 0);
    const expired = fixture({ comments });
    assert.deepEqual(await selectRetry({ api: expired.api, now: () => started + RETRY_LEASE_MS }), expected);
    assert.equal(await claimRetry({ api: expired.api, candidate: expected, now: () => started + RETRY_LEASE_MS }), true);
  }
  const invalid = fixture({ comments: [comment(1, { created_at: "unknown" })] });
  assert.equal(await selectRetry({ api: invalid.api, now: () => started + RETRY_LEASE_MS }), null);
});
