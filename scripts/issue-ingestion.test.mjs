import test from "node:test";
import assert from "node:assert/strict";
import {
  prepareSubmission,
  publishSubmission,
  acknowledgePublished,
  bodyHash,
  successComment,
} from "./issue-ingestion.mjs";
const repository = "logicrw/awesome-jev-projects";
const issue = {
  number: 12,
  title: "[Project] Useful Jev tool",
  state: "open",
  body: "## 项目仓库\nhttps://github.com/example/jev-tool\n\n## 一句话介绍\n给 Agent 的终端日志做过滤，只留下与任务有关的内容。",
  comments: 0,
  user: { login: "example" },
  author_association: "NONE",
};
const meta = {
  id: 42,
  full_name: "example/jev-tool",
  name: "jev-tool",
  private: false,
  description: "A Jev tool for filtering irrelevant Agent logs.",
  owner: {
    login: "example",
    avatar_url: "https://avatars.githubusercontent.com/u/1",
  },
  stargazers_count: 2,
  forks_count: 0,
  open_issues_count: 0,
  created_at: "2026-09-01T00:00:00Z",
};
const sha = "a".repeat(40);
const inspected = {
  status: "accepted",
  repo: meta,
  sha,
  commits: [{ sha, commit: { committer: { date: "2026-09-01T00:00:00Z" } } }],
  readme: "Jev source",
  evidence: {
    files: [
      {
        path: "src/jev.ts",
        url: `https://github.com/example/jev-tool/blob/${sha}/src/jev.ts`,
        hash: "proof",
      },
    ],
  },
};
const fallback = {
  plainSummary: "给 Agent 的终端日志做过滤，只留下与任务有关的内容。",
  plainSummaryEn: meta.description,
  jevDecisionPoint: "判断每一段日志与任务是否相关。",
  highlightBenefit: "减少后续处理的无关日志。",
  category: "Context GC & Filter",
  tags: ["Agent"],
  summarySource: "source-first",
};
const project = {
  id: "example:jev-tool",
  url: "https://github.com/example/jev-tool",
  repoId: 42,
  ingestion: {
    repository,
    issueNumber: 12,
    issueBodySha256: bodyHash(issue.body),
  },
};
const contents = (rows) => ({
  sha: "blob-sha",
  encoding: "base64",
  content: Buffer.from(JSON.stringify(rows)).toString("base64"),
});

test("non-submissions, ambiguous URLs, and duplicate projects never reach AI", async () => {
  let calls = 0;
  const base = {
    repository,
    projects: [],
    taxonomy: [],
    api: async () => {},
    enrich: async () => {
      calls++;
      return fallback;
    },
  };
  assert.equal(
    (
      await prepareSubmission({
        ...base,
        issue: { ...issue, title: "Bug report", body: "Error in startup" },
      })
    ).status,
    "ignored",
  );
  assert.equal(
    (
      await prepareSubmission({
        ...base,
        issue: {
          ...issue,
          body: "## 项目仓库\nhttps://github.com/a/b\nhttps://github.com/c/d",
        },
      })
    ).status,
    "rejected",
  );
  assert.equal(
    (
      await prepareSubmission({
        ...base,
        issue,
        inspect: async () => ({
          status: "duplicate",
          reason: "already listed",
        }),
      })
    ).status,
    "duplicate",
  );
  assert.equal(calls, 0);
});
test("verified ingestion fixes repository identity and retains immutable evidence and provenance", async () => {
  const result = await prepareSubmission({
    issue,
    repository,
    projects: [],
    taxonomy: [],
    api: async () => {},
    inspect: async (input) => {
      assert.equal(input.requireCodeEvidence, true);
      return inspected;
    },
    enrich: async (input) => {
      assert.equal(input.issueTrusted, true);
      assert.equal(input.issueBody, issue.body);
      return fallback;
    },
    now: () => "2026-09-18T00:00:00Z",
  });
  assert.equal(result.status, "ready");
  assert.equal(result.project.url, "https://github.com/example/jev-tool");
  assert.equal(result.project.runtimeVerified, false);
  assert.equal(result.project.ingestion.issueBodySha256, bodyHash(issue.body));
  assert.equal(result.project.sourceVerification.sha, sha);
  assert.equal(result.project.plainSummary, fallback.plainSummary);
});
test("compare-and-swap retries preserve another concurrent submission", async () => {
  let writes = 0;
  const other = { id: "other:repo", url: "https://github.com/other/repo" };
  let snapshot = [];
  const api = async (path, options = {}) => {
    if (path.endsWith("/issues/12")) return issue;
    if (path === "/repos/example/jev-tool") return meta;
    if (!options.method) return contents(snapshot);
    writes++;
    if (writes === 1) {
      snapshot = [other];
      throw Object.assign(new Error("conflict"), { status: 409 });
    }
    const next = JSON.parse(
      Buffer.from(options.body.content, "base64").toString(),
    );
    assert.deepEqual(next, [other, project]);
    assert.equal(options.body.sha, "blob-sha");
    assert.equal(options.body.branch, "main");
    return { commit: { sha: "commit-sha" } };
  };
  assert.deepEqual(await publishSubmission({ api, repository, project }), {
    status: "ingested",
    changed: true,
    commit: "commit-sha",
  });
  assert.equal(writes, 2);
});
test("unknown write outcome is read back without appending twice", async () => {
  let saved = false,
    writes = 0;
  const api = async (path, options = {}) => {
    if (path.endsWith("/issues/12")) return issue;
    if (path === "/repos/example/jev-tool") return meta;
    if (!options.method) return contents(saved ? [project] : []);
    writes++;
    saved = true;
    throw new TypeError("lost response");
  };
  assert.deepEqual(await publishSubmission({ api, repository, project }), {
    status: "ingested",
    changed: false,
  });
  assert.equal(writes, 1);
});
test("edited or closed submissions and privatized repositories do not publish", async () => {
  for (const changed of [
    { ...issue, body: "withdrawn" },
    { ...issue, state: "closed" },
  ]) {
    let calls = 0;
    const r = await publishSubmission({
      repository,
      project,
      api: async () => {
        calls++;
        return changed;
      },
    });
    assert.equal(r.status, "changed");
    assert.equal(calls, 1);
  }
  const r = await publishSubmission({
    repository,
    project,
    api: async (path) =>
      path.endsWith("/issues/12") ? issue : { ...meta, private: true },
  });
  assert.equal(r.status, "changed");
});
test("a different submission of the same project does not overwrite the winner", async () => {
  const old = {
    ...project,
    ingestion: { ...project.ingestion, issueNumber: 9 },
  };
  const api = async (path, options = {}) => {
    assert.equal(options.method, undefined);
    if (path.endsWith("/issues/12")) return issue;
    if (path === "/repos/example/jev-tool") return meta;
    return contents([old]);
  };
  assert.equal(
    (await publishSubmission({ api, repository, project })).status,
    "duplicate",
  );
});
function notifier({
  published = [project],
  existingComment = false,
  edited = false,
  commentFailure = false,
} = {}) {
  const calls = [];
  const api = async (path, options = {}) => {
    calls.push({ path, ...options });
    if (path.includes("?state=open")) return [issue];
    if (path.includes("/comments?"))
      return existingComment
        ? [
            {
              user: { login: "github-actions[bot]" },
              body: "<!-- awesome-jev-ingestion:12:42 -->",
            },
          ]
        : [];
    if (options.method === "POST") {
      if (commentFailure) throw new Error("comment unavailable");
      assert.equal(options.body.body.split("\n\n")[0], successComment);
      return {};
    }
    if (options.method === "PATCH") {
      assert.deepEqual(options.body, {
        state: "closed",
        state_reason: "completed",
      });
      return {};
    }
    return edited ? { ...issue, body: "edited" } : issue;
  };
  return {
    calls,
    run: () =>
      acknowledgePublished({
        api,
        repository,
        projects: [project],
        publishedProjects: published,
      }),
  };
}
test("notification requires live inclusion and rechecks current issue content", async () => {
  for (const options of [{ published: [] }, { edited: true }]) {
    const n = notifier(options);
    await n.run();
    assert.equal(n.calls.filter((c) => c.method).length, 0);
  }
});
test("successful publication comments exactly once before closing as completed", async () => {
  const n = notifier();
  assert.deepEqual(await n.run(), [{ issue: 12, status: "completed" }]);
  assert.deepEqual(
    n.calls.filter((c) => c.method).map((c) => c.method),
    ["POST", "PATCH"],
  );
  const rerun = notifier({ existingComment: true });
  await rerun.run();
  assert.deepEqual(
    rerun.calls.filter((c) => c.method).map((c) => c.method),
    ["PATCH"],
  );
});
test("failed success comment leaves the issue open for reconciliation", async () => {
  const n = notifier({ commentFailure: true });
  await assert.rejects(n.run());
  assert.equal(
    n.calls.some((c) => c.method === "PATCH"),
    false,
  );
});

test("a previously committed submission can resume deployment without calling AI", async () => {
  const prior = { ...project, ...fallback };
  let modelCalls = 0;
  const result = await prepareSubmission({
    issue,
    repository,
    projects: [prior],
    taxonomy: [],
    api: async () => {},
    inspect: async () => ({ status: "duplicate", repo: meta }),
    enrich: async () => {
      modelCalls++;
      return fallback;
    },
  });
  assert.equal(result.status, "resume");
  assert.equal(result.project, prior);
  assert.equal(modelCalls, 0);
});
test("large canonical files are read through their immutable blob without overwriting concurrent data", async () => {
  let blobRead = false;
  const api = async (path, options = {}) => {
    if (path.endsWith("/issues/12")) return issue;
    if (path === "/repos/example/jev-tool") return meta;
    if (path.includes("/git/blobs/")) {
      blobRead = true;
      return contents([]);
    }
    if (!options.method)
      return { sha: "immutable-blob", encoding: "none", size: 1_100_000 };
    assert.equal(options.body.sha, "immutable-blob");
    return { commit: { sha: "new" } };
  };
  assert.equal(
    (await publishSubmission({ api, repository, project })).status,
    "ingested",
  );
  assert.equal(blobRead, true);
});


test("third-party Issue prose is not treated as repository-author copy", async () => {
  for (const [login, association, trusted] of [
    ["stranger", "NONE", false],
    ["curator", "OWNER", true],
    ["EXAMPLE", "NONE", true],
  ]) {
    const result = await prepareSubmission({
      issue: { ...issue, user: { login }, author_association: association },
      repository, projects: [], taxonomy: [], api: async () => {},
      inspect: async () => inspected,
      enrich: async (input) => {
        assert.equal(input.issueTrusted, trusted);
        return fallback;
      },
    });
    assert.equal(result.status, "ready");
  }
});
