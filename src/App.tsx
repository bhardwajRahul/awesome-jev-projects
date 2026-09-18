import { useEffect, useMemo, useRef, useState } from "react";
import Fuse from "fuse.js";
import {
  ArrowDownWideNarrow,
  ArrowRight,
  ArrowUpRight,
  Bookmark,
  Braces,
  Check,
  CheckCheck,
  CircleHelp,
  Code2,
  Copy,
  ExternalLink,
  Filter,
  Gamepad2,
  GitFork,
  Github,
  Globe,
  Layers,
  Network,
  Plus,
  Radar,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Star,
  Terminal,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Project = {
  id: string;
  name: string;
  author: string;
  url: string;
  category: string;
  plainSummary: string;
  jevDecisionPoint: string;
  highlightBenefit: string;
  tags: string[];
  stars: number | null;
  forks: number | null;
  openIssues: number | null;
  license: string | null;
  lastCommitAt: string | null;
  createdAt: string | null;
  summarySource: string;
  claimStatus: string;
  avatarUrl?: string;
  metadataFetchedAt?: string;
  evidence?: { url: string; note?: string }[];
  pinned?: boolean;
};
const categoryInfo: Record<string, { label: string; icon: LucideIcon }> = {
  "SDK & Integrations": { label: "SDK 与兼容接入", icon: Braces },
  "Evaluation & Observability": {
    label: "评测与观测",
    icon: SlidersHorizontal,
  },
  "Voice & Conversation": { label: "语音与对话", icon: Terminal },
  "Data & Search": { label: "数据与搜索", icon: Search },
  "Classification & Taxonomy": { label: "分类与目录", icon: Layers },
  "SDK & Decision Frameworks": { label: "SDK 与决策框架", icon: Braces },
  "Creative Tools": { label: "音乐与界面创作", icon: Sparkles },
  "Benchmarks & Evaluation": { label: "基准与评测", icon: SlidersHorizontal },
  "Decision Tools": { label: "决策工具", icon: Workflow },
  "Browser & OS Action": { label: "浏览器与桌面", icon: Globe },
  "MCP & Integrations": { label: "MCP 与集成", icon: Braces },
  "CLI & Pipelines": { label: "命令行与流水线", icon: Terminal },
  "Routing & Cost Optimization": { label: "模型路由与降本", icon: Workflow },
  "Context GC & Filter": { label: "上下文与记忆", icon: Layers },
  "Codebase & Graph Pathfinding": { label: "代码与图谱", icon: Network },
  "High-Frequency & Simulation": { label: "游戏与实时决策", icon: Gamepad2 },
  "Domain & Vertical Tools": { label: "行业应用", icon: ShieldCheck },
  "Security & Guardrails": { label: "安全与内容审核", icon: ShieldCheck },
};
const format = (n: number | null) =>
  n === null ? "—" : new Intl.NumberFormat("en-US").format(n);
const date = (s: string | null | undefined) =>
  s
    ? new Date(s).toLocaleString("zh-CN", {
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
    : "—";
const label = (c: string) => categoryInfo[c]?.label ?? c;
const validProject = (x: unknown): x is Project => {
  if (!x || typeof x !== "object") return false;
  const p = x as Project;
  return (
    [
      "id",
      "name",
      "author",
      "category",
      "plainSummary",
      "jevDecisionPoint",
      "highlightBenefit",
      "url",
      "claimStatus",
      "summarySource",
    ].every((k) => typeof p[k as keyof Project] === "string") &&
    /^https:\/\/github\.com\/[\w.-]+\/[\w.-]+\/?$/.test(p.url) &&
    ["stars", "forks", "openIssues"].every(
      (k) =>
        p[k as keyof Project] === null ||
        (typeof p[k as keyof Project] === "number" &&
          Number.isFinite(p[k as keyof Project]) &&
          Number(p[k as keyof Project]) >= 0),
    ) &&
    ["license", "lastCommitAt", "createdAt"].every(
      (k) =>
        p[k as keyof Project] === null ||
        typeof p[k as keyof Project] === "string",
    ) &&
    Array.isArray(p.tags) &&
    p.tags.every((t) => typeof t === "string") &&
    (!p.avatarUrl ||
      (typeof p.avatarUrl === "string" &&
        p.avatarUrl.startsWith("https://avatars.githubusercontent.com/"))) &&
    (!p.evidence ||
      (Array.isArray(p.evidence) &&
        p.evidence.every(
          (e) =>
            typeof e.url === "string" &&
            e.url.startsWith("https://github.com/") &&
            (!e.note || typeof e.note === "string"),
        )))
  );
};
const searchProjects = (fuse: Fuse<Project>, query: string): Project[] => {
  const aliases: Record<string, string[]> = {
    省成本: ["Cost Optimization", "Token Saver"],
    省钱: ["Cost Optimization", "Token Saver"],
    降本: ["Cost Optimization", "Token Saver"],
    浏览器: ["browser"],
    上下文: ["context", "compaction"],
    "9hz": ["9hz", "9 hz"],
  };
  const terms = [query, ...(aliases[query.trim().toLowerCase()] ?? [])];
  const hits = new Map<string, Project>();
  for (const term of terms)
    for (const hit of fuse.search(term)) hits.set(hit.item.id, hit.item);
  return [...hits.values()];
};
const getSaved = () => {
  try {
    const x = JSON.parse(localStorage.getItem("awesome-jev:saved") ?? "[]");
    return Array.isArray(x) ? x.filter((y) => typeof y === "string") : [];
  } catch {
    return [];
  }
};
function Modal({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const el = ref.current!;
    el.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      el.close();
      document.body.style.overflow = "";
    };
  }, []);
  return (
    <dialog
      ref={ref}
      className="modal"
      aria-labelledby="modal-title"
      onCancel={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-head">
        <h2 id="modal-title">{title}</h2>
        <button className="icon-button" aria-label="关闭弹窗" onClick={onClose}>
          <X size={20} />
        </button>
      </div>
      {children}
    </dialog>
  );
}
function App() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loadState, setLoadState] = useState<"loading" | "ready" | "error">(
    "loading",
  );
  const [loadAttempt, setLoadAttempt] = useState(0);
  useEffect(() => {
    const controller = new AbortController();
    setLoadState("loading");
    fetch(`${import.meta.env.BASE_URL}projects.json`, {
      signal: AbortSignal.any([controller.signal, AbortSignal.timeout(15000)]),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Project snapshot unavailable");
        return response.json();
      })
      .then((rows) => {
        if (
          !Array.isArray(rows) ||
          rows.length < 14 ||
          rows.some((row) => !validProject(row)) ||
          new Set(rows.map((row) => row.id)).size !== rows.length
        )
          throw new Error("Invalid project snapshot");
        setProjects(rows);
        setLoadState("ready");
      })
      .catch(() => {
        if (!controller.signal.aborted) setLoadState("error");
      });
    return () => controller.abort();
  }, [loadAttempt]);
  const updatedAt = useMemo(
    () =>
      projects.reduce(
        (latest, project) =>
          project.metadataFetchedAt && project.metadataFetchedAt > latest
            ? project.metadataFetchedAt
            : latest,
        "",
      ),
    [projects],
  );
  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [tag, setTag] = useState("all");
  const [stars, setStars] = useState("all");
  const [sort, setSort] = useState("stars");
  const [saved, setSaved] = useState<string[]>(getSaved);
  const [onlySaved, setOnlySaved] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [modal, setModal] = useState<"submit" | null>(null);
  const [active, setActive] = useState<Project | null>(null);
  const [toast, setToast] = useState("");
  const [repo, setRepo] = useState("");
  const [purpose, setPurpose] = useState("");
  const [decision, setDecision] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const t = setTimeout(() => setSearchTerm(query), 90);
    return () => clearTimeout(t);
  }, [query]);
  useEffect(() => {
    if (toast) {
      const t = setTimeout(() => setToast(""), 2400);
      return () => clearTimeout(t);
    }
  }, [toast]);
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const editable = (e.target as HTMLElement).matches(
        'input,textarea,select,[contenteditable="true"]',
      );
      if (
        (e.key === "/" && !editable) ||
        ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k")
      ) {
        if (!document.querySelector("dialog[open]")) {
          e.preventDefault();
          searchRef.current?.focus();
        }
      }
      if (e.key === "Escape" && !document.querySelector("dialog[open]"))
        searchRef.current?.blur();
    };
    window.addEventListener("keydown", handler);
    const fromHash = () => {
      const id =
        new URLSearchParams(location.hash.slice(1)).get("project") ??
        new URLSearchParams(location.search).get("project");
      setActive(projects.find((p) => p.id === id) ?? null);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => {
      window.removeEventListener("keydown", handler);
      window.removeEventListener("hashchange", fromHash);
    };
  }, [projects]);
  const categories = useMemo(
    () => [...new Set(projects.map((p) => p.category))],
    [projects],
  );
  const tags = useMemo(
    () => [...new Set(projects.flatMap((p) => p.tags))].sort(),
    [projects],
  );
  const fuse = useMemo(
    () =>
      new Fuse(projects, {
        keys: [
          { name: "name", weight: 3 },
          { name: "plainSummary", weight: 2 },
          "author",
          "jevDecisionPoint",
          "highlightBenefit",
          "category",
          "tags",
        ],
        threshold: 0.34,
        ignoreLocation: true,
      }),
    [projects],
  );
  useEffect(() => {
    const context = (
      document as Document & {
        modelContext?: {
          registerTool: (
            tool: unknown,
            options: { signal: AbortSignal },
          ) => void | Promise<void>;
        };
      }
    ).modelContext;
    if (!context?.registerTool) return;
    const lifecycle = new AbortController();
    const tool = {
      name: "search_jev_projects",
      title: "Search Jev projects",
      description:
        "Search the same project dataset shown on this page. Returns project summaries and source links; does not change filters or bookmarks.",
      inputSchema: {
        type: "object",
        properties: { query: { type: "string" }, category: { type: "string" } },
        required: ["query"],
        additionalProperties: false,
      },
      annotations: { readOnlyHint: true, untrustedContentHint: true },
      execute: (input: unknown) => {
        const q = input as { query?: unknown; category?: unknown };
        if (
          !q ||
          typeof q.query !== "string" ||
          (q.category !== undefined && typeof q.category !== "string")
        )
          throw new Error("query and category must be strings");
        const found = q.query ? searchProjects(fuse, q.query) : projects;
        return {
          projects: found
            .filter((p) => !q.category || p.category === q.category)
            .slice(0, 20)
            .map((p) => ({
              id: p.id,
              name: p.name,
              summary: p.plainSummary,
              decision: p.jevDecisionPoint,
              url: p.url,
            })),
          snapshotAt: updatedAt,
        };
      },
    };
    try {
      void Promise.resolve(
        context.registerTool(tool, { signal: lifecycle.signal }),
      ).catch(() => {});
    } catch {
      /* Optional API; normal UI remains available. */
    }
    return () => lifecycle.abort();
  }, [projects, fuse, updatedAt]);
  const visible = useMemo(() => {
    const list = searchTerm.trim()
      ? searchProjects(fuse, searchTerm)
      : projects;
    return list
      .filter(
        (p) =>
          (category === "all" || p.category === category) &&
          (tag === "all" || p.tags.includes(tag)) &&
          (!onlySaved || saved.includes(p.id)) &&
          (stars === "all" ||
            (p.stars !== null &&
              (stars === "100+"
                ? p.stars >= 100
                : stars === "10-99"
                  ? p.stars >= 10 && p.stars < 100
                  : p.stars < 10))),
      )
      .sort((a, b) =>
        sort === "created"
          ? Date.parse(b.createdAt ?? "1970") -
            Date.parse(a.createdAt ?? "1970")
          : sort === "updated"
            ? Date.parse(b.lastCommitAt ?? "1970") -
              Date.parse(a.lastCommitAt ?? "1970")
            : (b.stars ?? -1) - (a.stars ?? -1),
      );
  }, [
    fuse,
    searchTerm,
    category,
    tag,
    stars,
    onlySaved,
    saved,
    sort,
    projects,
  ]);
  const trending = useMemo(
    () =>
      [...projects]
        .filter((p) => p.stars !== null)
        .sort((a, b) => b.stars! - a.stars!)
        .slice(0, 4),
    [projects],
  );
  const totalStars = projects.reduce((s, p) => s + (p.stars ?? 0), 0);
  const metadataCount = projects.filter((p) => p.stars !== null).length;
  const toggleSaved = (id: string) => {
    const next = saved.includes(id)
      ? saved.filter((x) => x !== id)
      : [...saved, id];
    setSaved(next);
    try {
      localStorage.setItem("awesome-jev:saved", JSON.stringify(next));
      setToast(next.includes(id) ? "已加入本机收藏" : "已取消收藏");
    } catch {
      setToast("已收藏，本次浏览有效；浏览器未允许保存");
    }
  };
  const copy = async (text: string, success: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setToast(success);
    } catch {
      setToast("无法访问剪贴板，请在弹窗中选择文字复制");
    }
  };
  const share = (p: Project) =>
    copy(
      `${location.origin}${import.meta.env.BASE_URL}#project=${encodeURIComponent(p.id)}`,
      "项目链接已复制",
    );
  const openProject = (p: Project) => {
    location.hash = `project=${encodeURIComponent(p.id)}`;
    setActive(p);
  };
  const closeProject = () => {
    history.replaceState(null, "", location.pathname + location.search);
    setActive(null);
  };
  const reset = () => {
    setQuery("");
    setCategory("all");
    setTag("all");
    setStars("all");
    setOnlySaved(false);
  };
  const submitBody = `## 项目仓库\n${repo}\n\n## 一句话介绍\n${purpose}\n\n## Jev 在哪里做决策\n${decision}\n\n## 证据\n请补充 README 或实现代码链接，以及性能数据的测试条件。`;
  const issueRepository = "logicrw/awesome-jev-projects";
  const repoValid =
    /^https:\/\/github\.com\/[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+\/?$/.test(repo);
  return (
    <>
      <header className="header">
        <a
          className="brand"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            reset();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <span className="brand-icon">
            <Zap size={23} fill="currentColor" />
          </span>
          awesome<span className="brand-jev">jev</span>
          <span className="beta">RADAR</span>
        </a>
        <nav aria-label="主导航">
          <button
            className={!onlySaved ? "nav-item active" : "nav-item"}
            onClick={() => {
              setOnlySaved(false);
              setCategory("all");
            }}
          >
            探索项目
          </button>
          <button
            className={onlySaved ? "nav-item active" : "nav-item"}
            onClick={() => setOnlySaved(true)}
          >
            我的收藏<span className="nav-count">{saved.length}</span>
          </button>
        </nav>
        <button
          className="button dark submit-top"
          onClick={() => setModal("submit")}
        >
          <Plus size={16} />
          <span>提交项目</span>
        </button>
      </header>
      <main className="page">
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero-copy">
            <h1 id="hero-heading">拿到 Jev，然后呢？</h1>
            <p>
              收集社区里真跑起来了的开源项目。
              <br className="mobile-break" />{" "}
              看看别人怎么拿它做选择、省成本和跑高频。
            </p>
            <a
              className="text-link"
              href="https://typesafe.ai/"
              target="_blank"
              rel="noreferrer"
            >
              认识 TypeSafe 的决策模型
              <ArrowUpRight size={15} />
            </a>
          </div>
          <div className="decision-canvas" aria-label="Jev 决策机制示意">
            <div className="canvas-heading">
              <span>INPUT → DECISION</span>
              <span className="mono">jev.choice()</span>
            </div>
            <div className="decision-flow">
              <div className="flow-in">
                <Code2 size={20} />
                <span>任务与选项</span>
              </div>
              <span className="connector" />
              <div className="jev-node">
                <Zap size={23} fill="currentColor" />
                <strong>jev</strong>
              </div>
              <span className="connector" />
              <div className="flow-out">
                <span>
                  <CheckCheck size={16} />
                  选一个
                </span>
                <span>
                  <SlidersHorizontal size={16} />
                  打个分
                </span>
                <span>
                  <Workflow size={16} />
                  下一步
                </span>
              </div>
            </div>
            <div className="canvas-footer">
              把重活留给大模型，把选择题交给 Jev。
              <ArrowRight size={14} />
            </div>
          </div>
        </section>
        <section className="stats" aria-label="生态统计">
          <div>
            <span className="stat-value">
              {projects.length.toString().padStart(2, "0")}
            </span>
            <span>收录项目</span>
          </div>
          <div>
            <span className="stat-value">
              {metadataCount ? format(totalStars) : "—"}
              <Star size={17} />
            </span>
            <span>
              GitHub Stars{metadataCount < projects.length ? " · 部分数据" : ""}
            </span>
          </div>
          <div>
            <span className="stat-value">
              {categories.length.toString().padStart(2, "0")}
            </span>
            <span>应用方向</span>
          </div>
          <div className="data-updated">
            <span>数据更新</span>
            <strong>{updatedAt ? date(updatedAt) : "—"}</strong>
          </div>
        </section>
        {trending.length > 0 && (
          <div className="ticker">
            <span className="ticker-label">
              <Sparkles size={14} />
              热门项目
            </span>
            <div className="ticker-items">
              {trending.map((p) => (
                <button key={p.id} onClick={() => openProject(p)}>
                  {p.name}
                  <span>
                    <Star size={12} />
                    {format(p.stars)}
                  </span>
                </button>
              ))}
            </div>
            <span className="ticker-note">按当前星数</span>
          </div>
        )}
        <section className="explorer" id="explore">
          <aside className="sidebar">
            <div className="side-title">
              分类 <span>{categories.length}</span>
            </div>
            <div className="category-list">
              <button
                className={category === "all" ? "category active" : "category"}
                onClick={() => setCategory("all")}
              >
                <Layers size={16} />
                <span>全部项目</span>
                <b>{projects.length}</b>
              </button>
              {categories.map((c) => {
                const Icon = categoryInfo[c]?.icon ?? Code2;
                return (
                  <button
                    className={category === c ? "category active" : "category"}
                    key={c}
                    onClick={() => setCategory(c)}
                  >
                    <Icon size={16} />
                    <span>{label(c)}</span>
                    <b>{projects.filter((p) => p.category === c).length}</b>
                  </button>
                );
              })}
            </div>
            <div className="side-note">
              <span className="mini-radar">
                <Radar size={19} />
              </span>
              <h3>让好项目被看见</h3>
              <p>
                在做一个 Jev 项目？
                <br />
                把你的下一步，分享给大家。
              </p>
              <button onClick={() => setModal("submit")}>
                提交到雷达 <ArrowUpRight size={15} />
              </button>
            </div>
            <a
              className="side-source"
              href="https://github.com/logicrw/awesome-jev-projects"
              target="_blank"
              rel="noreferrer"
            >
              Awesome Jev · 开源项目雷达 <ExternalLink size={12} />
            </a>
          </aside>
          <div className="results">
            <div className="search-row">
              <div className="search-box">
                <Search size={19} />
                <input
                  ref={searchRef}
                  aria-label="搜索项目"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="搜项目、作者，或场景（如：省成本、浏览器、9Hz、上下文）..."
                />
                {query ? (
                  <button
                    className="clear-search"
                    onClick={() => setQuery("")}
                    aria-label="清空搜索"
                  >
                    <X size={16} />
                  </button>
                ) : (
                  <kbd>⌘ K</kbd>
                )}
              </div>
              <button
                className={`filter-button ${showFilters ? "selected" : ""}`}
                aria-label="展开筛选"
                aria-expanded={showFilters}
                aria-controls="filter-panel"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter size={17} />
                <span>筛选</span>
                {(tag !== "all" || stars !== "all") && <i />}
              </button>
            </div>
            {showFilters && (
              <div id="filter-panel" className="filter-panel">
                <label>
                  技术标签
                  <select
                    aria-label="技术标签"
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                  >
                    <option value="all">全部标签</option>
                    {tags.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </label>
                <label>
                  GitHub Stars
                  <select
                    aria-label="星数范围"
                    value={stars}
                    onChange={(e) => setStars(e.target.value)}
                  >
                    <option value="all">不限星数</option>
                    <option value="100+">100 及以上</option>
                    <option value="10-99">10 – 99</option>
                    <option value="0-9">0 – 9</option>
                  </select>
                </label>
                <button className="text-link" onClick={reset}>
                  重置筛选
                  <X size={13} />
                </button>
              </div>
            )}
            <div className="results-heading">
              <h2>
                {onlySaved
                  ? "我的收藏"
                  : category === "all"
                    ? "发现项目"
                    : label(category)}
                <span>{visible.length}</span>
              </h2>
              <label className="sort-label">
                <ArrowDownWideNarrow size={15} />
                <select
                  aria-label="排序方式"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                >
                  <option value="stars">最多 Stars</option>
                  <option value="created">最近创建</option>
                  <option value="updated">最近更新</option>
                </select>
              </label>
            </div>
            <div className="project-grid" aria-live="polite">
              {visible.map((p) => {
                const Icon = categoryInfo[p.category]?.icon ?? Code2;
                return (
                  <article
                    className="project-card"
                    key={p.id}
                    data-project-id={p.id}
                  >
                    <div className="card-top">
                      <div className="project-identity">
                        {p.avatarUrl ? (
                          <img
                            src={p.avatarUrl}
                            alt=""
                            className="avatar"
                            width="40"
                            height="40"
                            loading="lazy"
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                            }}
                          />
                        ) : (
                          <div className="avatar avatar-fallback">
                            {p.author.slice(0, 2)}
                          </div>
                        )}
                        <div>
                          <button
                            className="project-title"
                            onClick={() => openProject(p)}
                          >
                            {p.name}
                            <ArrowUpRight size={15} />
                          </button>
                          <a
                            href={`https://github.com/${p.author}`}
                            target="_blank"
                            rel="noreferrer"
                            className="author"
                          >
                            {p.author}
                          </a>
                        </div>
                      </div>
                      <button
                        className={`icon-button save-button ${saved.includes(p.id) ? "saved" : ""}`}
                        aria-label={`${saved.includes(p.id) ? "取消收藏" : "收藏"} ${p.name}`}
                        aria-pressed={saved.includes(p.id)}
                        onClick={() => toggleSaved(p.id)}
                      >
                        <Bookmark
                          size={18}
                          fill={saved.includes(p.id) ? "currentColor" : "none"}
                        />
                      </button>
                    </div>
                    <div className="card-category">
                      <Icon size={13} />
                      {label(p.category)}
                      {p.summarySource === "readme-extractive" && (
                        <span className="auto-label">自动提炼</span>
                      )}
                      {false && <span className="unconfirmed">待核实关联</span>}
                    </div>
                    <p className="plain-summary">{p.plainSummary}</p>
                    <div className="decision-block">
                      <div>
                        <Zap size={13} fill="currentColor" />
                        <span>JEV 在这里做什么</span>
                      </div>
                      <p>{p.jevDecisionPoint}</p>
                    </div>
                    <p className="benefit">
                      <ArrowRight size={14} />
                      {p.highlightBenefit}
                    </p>
                    <div className="tags">
                      {p.tags.slice(0, 3).map((t) => (
                        <button
                          key={t}
                          onClick={() => {
                            setTag(t);
                            setShowFilters(true);
                          }}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                    <div className="card-bottom">
                      <div className="repo-metrics">
                        <span title="最近同步的 GitHub Stars">
                          <Star size={15} />
                          {format(p.stars)}
                        </span>
                        <span title="Forks">
                          <GitFork size={14} />
                          {format(p.forks)}
                        </span>
                      </div>
                      <div>
                        <button
                          className="icon-button"
                          aria-label={`分享 ${p.name}`}
                          onClick={() => share(p)}
                        >
                          <Copy size={15} />
                        </button>
                        <a
                          className="github-link"
                          href={p.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Github size={15} />
                          GitHub
                          <ArrowUpRight size={13} />
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
            {loadState === "loading" && (
              <div className="empty-state" role="status">
                正在读取项目…
              </div>
            )}
            {loadState === "error" && (
              <div className="empty-state" role="alert">
                <p>项目数据暂时无法读取。</p>
                <button
                  className="button"
                  onClick={() => setLoadAttempt((n) => n + 1)}
                >
                  重试
                </button>
              </div>
            )}
            {loadState === "ready" && !visible.length && (
              <div className="empty-state">
                <Search size={30} />
                <h3>
                  {onlySaved && !saved.length
                    ? "把想试的项目，留在这里。"
                    : "还没有找到这样的项目"}
                </h3>
                <p>
                  {onlySaved && !saved.length
                    ? "点击项目右上角的书签，即可收藏到本机。"
                    : "试试更短的关键词，或放宽筛选条件。"}
                </p>
                <button className="button dark" onClick={reset}>
                  浏览全部项目
                  <ArrowRight size={15} />
                </button>
              </div>
            )}
            <div className="result-footer">
              <span>
                {visible.length} / {projects.length} 个项目
              </span>
              <span>
                性能数据来自项目说明，未经本站独立复测 <CircleHelp size={13} />
              </span>
            </div>
          </div>
        </section>
        <footer className="footer">
          <a
            className="footer-brand"
            href="https://github.com/logicrw/awesome-jev-projects"
            target="_blank"
            rel="noreferrer"
          >
            <Zap size={16} />
            Awesome Jev · 开源项目雷达
          </a>
          <span>GitHub 数据定时同步</span>
          <a
            href="https://github.com/logicrw/awesome-jev-projects"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
            <ArrowUpRight size={13} />
          </a>
        </footer>
      </main>
      {modal === "submit" && (
        <Modal title="把你的项目带上雷达" onClose={() => setModal(null)}>
          <p className="modal-intro">
            让大家看懂你做了什么，以及 Jev 在哪一步帮上了忙。
          </p>
          <form
            className="submit-form"
            onSubmit={(e) => {
              e.preventDefault();
              if (issueRepository && repoValid)
                window.open(
                  `https://github.com/${issueRepository}/issues/new?title=${encodeURIComponent("[Project] " + repo.split("/").filter(Boolean).pop())}&body=${encodeURIComponent(submitBody)}`,
                  "_blank",
                  "noopener,noreferrer",
                );
              else copy(submitBody, "投稿内容已复制");
            }}
          >
            <label>
              GitHub 仓库
              <input
                type="url"
                required
                value={repo}
                onChange={(e) => setRepo(e.target.value)}
                placeholder="https://github.com/you/your-project"
                pattern="https://github\.com/[A-Za-z0-9_.-]+/[A-Za-z0-9_.-]+/?"
              />
            </label>
            <label>
              一句话，它能做什么？
              <input
                required
                maxLength={200}
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                placeholder="比如：帮 Claude Code 过滤不相关的日志"
              />
            </label>
            <label>
              Jev 负责哪一个判断？
              <textarea
                required
                maxLength={600}
                value={decision}
                onChange={(e) => setDecision(e.target.value)}
                placeholder="它拿到什么输入？需要选择、打分，还是判断下一步？"
                rows={3}
              />
            </label>
            {!issueRepository && (
              <p className="form-note">
                投稿入口还在连接。你可以先复制完整投稿内容，稍后提交为 GitHub
                Issue。
              </p>
            )}
            <button
              className="button dark"
              type="submit"
              disabled={!repoValid || !purpose.trim() || !decision.trim()}
            >
              {issueRepository ? <Github size={17} /> : <Copy size={17} />}{" "}
              {issueRepository ? "前往 GitHub 创建 Issue" : "复制投稿内容"}
              <ArrowUpRight size={15} />
            </button>
            <p className="fine-print">跳转后由你确认发布；不会自动代发。</p>
          </form>
        </Modal>
      )}
      {active && (
        <Modal title={active.name} onClose={closeProject}>
          <div className="detail-author">
            <span>{active.author}</span>
            <span className="tag">{label(active.category)}</span>
          </div>
          <p className="detail-summary">{active.plainSummary}</p>
          <div className="decision-block">
            <div>
              <Zap size={14} />
              JEV 决策点
            </div>
            <p>{active.jevDecisionPoint}</p>
          </div>
          <p className="detail-benefit">{active.highlightBenefit}</p>
          <dl className="detail-grid">
            <div>
              <dt>Stars / Forks</dt>
              <dd>
                {format(active.stars)} / {format(active.forks)}
              </dd>
            </div>
            <div>
              <dt>Issues + PR</dt>
              <dd>{format(active.openIssues)}</dd>
            </div>
            <div>
              <dt>许可证</dt>
              <dd>{active.license ?? "API 未识别"}</dd>
            </div>
            <div>
              <dt>最近提交</dt>
              <dd>{date(active.lastCommitAt)}</dd>
            </div>
          </dl>
          <div className="evidence">
            <h3>来源与说明</h3>
            <p>{active.claimStatus}</p>
            {active.evidence?.map((e, i) => (
              <a key={i} href={e.url} target="_blank" rel="noreferrer">
                {e.note ?? "查看 README 证据"}
                <ExternalLink size={13} />
              </a>
            ))}
            <span>数据更新：{date(active.metadataFetchedAt)}</span>
          </div>
          <div className="detail-actions">
            <a
              className="button dark"
              href={active.url}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={16} />
              打开仓库
              <ArrowUpRight size={15} />
            </a>
            <button className="button" onClick={() => share(active)}>
              <Copy size={15} />
              复制链接
            </button>
          </div>
        </Modal>
      )}
      {toast && (
        <div className="toast" role="status">
          <Check size={16} />
          {toast}
        </div>
      )}
    </>
  );
}
export default App;
