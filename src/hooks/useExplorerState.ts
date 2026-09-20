import { useEffect, useMemo, useRef, useState } from "react";
import type { Project } from "../App";
import type { Locale } from "../lib/i18n";
import { resolveTagId } from "../lib/tags.mjs";
import { createProjectSearch, searchProjects, browseSort, matchesQuickFilter } from "../lib/search.mjs";

export const EXPLORER_URL_DEBOUNCE_MS = 250;

export type QuickFilterMode = "all" | "popular" | "rising" | "commercial";
export type SortMode = "stars" | "created" | "updated";

export type ExplorerState = {
  q: string;
  category: string;
  tag: string;
  quickFilter: QuickFilterMode;
  sort: SortMode;
  onlySaved: boolean;
};

export const KNOWN_CATEGORIES = new Set([
  "SDK & Integrations",
  "Evaluation & Observability",
  "Voice & Conversation",
  "Data & Search",
  "Classification & Taxonomy",
  "SDK & Decision Frameworks",
  "Creative Tools",
  "Benchmarks & Evaluation",
  "Decision Tools",
  "Browser & OS Action",
  "MCP & Integrations",
  "CLI & Pipelines",
  "Routing & Cost Optimization",
  "Context GC & Filter",
  "Codebase & Graph Pathfinding",
  "High-Frequency & Simulation",
  "Domain & Vertical Tools",
  "Security & Guardrails",
]);

export function projectHasTag(project: Pick<Project, "tags">, id: string): boolean {
  return project.tags.some((value) => resolveTagId(value) === id);
}

export function readExplorerState(
  search = "",
  projects?: readonly Pick<Project, "category" | "tags">[],
): ExplorerState {
  const params = new URLSearchParams(search);
  const requestedCategory = params.get("category") ?? "all";
  const rawTag = params.get("tag") ?? "all";
  const requestedTag = rawTag.length <= 100 ? resolveTagId(rawTag) : null;
  const quickFilter = params.get("view");
  const sort = params.get("sort");
  return {
    q: (params.get("q") ?? "").slice(0, 200),
    category: (projects && projects.length > 0 ? projects.some((p) => p.category === requestedCategory) : KNOWN_CATEGORIES.has(requestedCategory)) ? requestedCategory : "all",
    tag: requestedTag && (!projects || projects.length === 0 || projects.some((p) => p.tags.some((value) => resolveTagId(value) === requestedTag))) ? requestedTag : "all",
    quickFilter: quickFilter === "popular" || quickFilter === "rising" || quickFilter === "commercial" ? quickFilter : "all",
    sort: sort === "created" || sort === "updated" ? sort : "stars",
    onlySaved: params.get("saved") === "1",
  };
}

export function writeExplorerSearchParams(params: URLSearchParams, state: ExplorerState): URLSearchParams {
  for (const [key, value] of Object.entries({
    q: state.q,
    category: state.category === "all" ? "" : state.category,
    tag: state.tag === "all" ? "" : state.tag,
    view: state.quickFilter === "all" ? "" : state.quickFilter,
    stars: "",
    sort: state.sort === "stars" ? "" : state.sort,
    saved: state.onlySaved ? "1" : "",
  })) {
    if (value) params.set(key, value);
    else params.delete(key);
  }
  return params;
}

export function localeNavigationUrl(
  currentUrl: string,
  next: Locale,
  state: ExplorerState,
  base = "/awesome-jev-projects/",
): URL {
  const url = new URL(currentUrl);
  url.pathname = `${base}${next === "zh" ? "" : `${next}/`}`;
  writeExplorerSearchParams(url.searchParams, state);
  if (next === "zh") url.searchParams.set("lang", "zh");
  else url.searchParams.delete("lang");
  return url;
}

export function tagSelectionState(
  state: ExplorerState,
  requested: string,
  projects: readonly Project[],
  saved: readonly string[] = [],
): ExplorerState {
  const next = { ...state, tag: resolveTagId(requested) ?? "all" };
  if (
    next.tag === "all" ||
    projects.some((project) =>
      projectHasTag(project, next.tag) &&
      (next.category === "all" || project.category === next.category) &&
      (!next.onlySaved || saved.includes(project.id)) &&
      matchesQuickFilter(project, next.quickFilter)
    )
  ) return next;
  return { ...next, category: "all", quickFilter: "all", onlySaved: false };
}

export interface UseExplorerStateOptions {
  projects: readonly Project[];
  saved?: readonly string[];
  loadState?: "loading" | "ready" | "error";
  initialSearch?: string;
  initialProjects?: readonly Project[];
}

export interface UseExplorerStateResult {
  query: string;
  searchTerm: string;
  category: string;
  tag: string;
  quickFilter: QuickFilterMode;
  sort: SortMode;
  onlySaved: boolean;
  visibleLimit: number;
  showFilters: boolean;
  activeFilterCount: number;

  explorerState: ExplorerState;

  setQuery: (q: string) => void;
  setSearchTerm: (term: string) => void;
  setCategory: (cat: string) => void;
  setTag: (tag: string) => void;
  setQuickFilter: (mode: QuickFilterMode) => void;
  setSort: (sort: SortMode) => void;
  setOnlySaved: (only: boolean) => void;
  setVisibleLimit: React.Dispatch<React.SetStateAction<number>>;
  setShowFilters: (show: boolean) => void;

  selectTag: (tag: string, focusFilter?: boolean) => void;
  clearSearch: () => void;
  reset: () => void;

  fuse: ReturnType<typeof createProjectSearch>;
  visible: Project[];
  displayed: Project[];

  searchRowRef: React.RefObject<HTMLDivElement | null>;
  tagFilterRef: React.RefObject<HTMLSelectElement | null>;
}

export function useExplorerState(options: UseExplorerStateOptions): UseExplorerStateResult {
  const {
    projects,
    saved = [],
    loadState = "ready",
    initialSearch,
    initialProjects,
  } = options;

  const projectsRef = useRef(projects);
  projectsRef.current = projects;

  const [initialExplorer] = useState(() =>
    readExplorerState(
      initialSearch !== undefined
        ? initialSearch
        : typeof window === "undefined"
          ? ""
          : window.location.search,
      initialProjects ?? projects,
    ),
  );

  const [query, setQuery] = useState(initialExplorer.q);
  const [searchTerm, setSearchTerm] = useState(initialExplorer.q);
  const [category, setCategory] = useState(initialExplorer.category);
  const [tag, setTag] = useState(initialExplorer.tag);
  const [quickFilter, setQuickFilter] = useState<QuickFilterMode>(initialExplorer.quickFilter);
  const [sort, setSort] = useState<SortMode>(initialExplorer.sort);
  const [visibleLimit, setVisibleLimit] = useState(24);
  const [onlySaved, setOnlySaved] = useState(initialExplorer.onlySaved);
  const [showFilters, setShowFilters] = useState(initialExplorer.tag !== "all");

  const searchRowRef = useRef<HTMLDivElement>(null);
  const tagFilterRef = useRef<HTMLSelectElement>(null);

  // Popstate synchronization
  useEffect(() => {
    if (typeof window === "undefined") return;
    const onPopState = () => {
      const next = readExplorerState(window.location.search, projectsRef.current);
      setQuery(next.q);
      setSearchTerm(next.q);
      setCategory(next.category);
      setTag(next.tag);
      setQuickFilter(next.quickFilter);
      setSort(next.sort);
      setOnlySaved(next.onlySaved);
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  // Debounced URL write
  useEffect(() => {
    if (typeof window === "undefined") return;
    const timer = window.setTimeout(() => {
      const url = new URL(window.location.href);
      writeExplorerSearchParams(url.searchParams, {
        q: query,
        category,
        tag,
        quickFilter,
        sort,
        onlySaved,
      });
      const next = `${url.pathname}${url.search}${url.hash}`;
      const current = `${window.location.pathname}${window.location.search}${window.location.hash}`;
      if (next !== current) history.replaceState(history.state, "", next);
    }, EXPLORER_URL_DEBOUNCE_MS);
    return () => window.clearTimeout(timer);
  }, [query, category, tag, quickFilter, sort, onlySaved]);

  // Sanitize non-existent category/tag when projects become ready
  useEffect(() => {
    if (loadState !== "ready") return;
    if (category !== "all" && !projects.some((p) => p.category === category)) setCategory("all");
    if (tag !== "all" && !projects.some((p) => projectHasTag(p, tag))) setTag("all");
  }, [projects, loadState, category, tag]);

  // Query search debounce (90ms)
  useEffect(() => {
    const t = setTimeout(() => setSearchTerm(query), 90);
    return () => clearTimeout(t);
  }, [query]);

  // Reset pagination limit on filter changes
  useEffect(() => {
    setVisibleLimit(24);
  }, [searchTerm, category, tag, quickFilter, onlySaved, sort]);

  // Outside click & Escape for filter popover
  useEffect(() => {
    if (!showFilters) return;
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (searchRowRef.current && !searchRowRef.current.contains(event.target as Node)) {
        setShowFilters(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowFilters(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showFilters]);

  const selectTag = (next: string, focusFilter = false) => {
    const nextState = tagSelectionState(
      { q: query, category, tag, quickFilter, sort, onlySaved },
      next,
      projects,
      saved,
    );
    setTag(nextState.tag);
    setCategory(nextState.category);
    setQuickFilter(nextState.quickFilter);
    setOnlySaved(nextState.onlySaved);
    setQuery(nextState.q);
    setSearchTerm(nextState.q);
    if (!focusFilter) setShowFilters(true);
    if (focusFilter) window.requestAnimationFrame(() => tagFilterRef.current?.focus({ preventScroll: true }));
  };

  const clearSearch = () => {
    setQuery("");
    setSearchTerm("");
  };

  const reset = () => {
    clearSearch();
    setCategory("all");
    setTag("all");
    setQuickFilter("all");
    setOnlySaved(false);
  };

  const fuse = useMemo(() => createProjectSearch(projects as Project[]), [projects]);

  const visible = useMemo(() => {
    const list = searchTerm.trim()
      ? searchProjects(fuse, searchTerm)
      : (projects as Project[]);
    const filtered = list.filter((p) =>
      (category === "all" || p.category === category) &&
      (tag === "all" || projectHasTag(p, tag)) &&
      (!onlySaved || saved.includes(p.id)) &&
      matchesQuickFilter(p, quickFilter)
    );
    return searchTerm.trim() ? filtered : browseSort(filtered, sort);
  }, [fuse, searchTerm, category, tag, quickFilter, onlySaved, saved, sort, projects]);

  const displayed = visible.slice(0, visibleLimit);

  const activeFilterCount = (tag !== "all" ? 1 : 0) + (quickFilter !== "all" ? 1 : 0) + (onlySaved ? 1 : 0);

  const explorerState: ExplorerState = {
    q: query,
    category,
    tag,
    quickFilter,
    sort,
    onlySaved,
  };

  return {
    query,
    searchTerm,
    category,
    tag,
    quickFilter,
    sort,
    onlySaved,
    visibleLimit,
    showFilters,
    activeFilterCount,
    explorerState,
    setQuery,
    setSearchTerm,
    setCategory,
    setTag,
    setQuickFilter,
    setSort,
    setOnlySaved,
    setVisibleLimit,
    setShowFilters,
    selectTag,
    clearSearch,
    reset,
    fuse,
    visible,
    displayed,
    searchRowRef,
    tagFilterRef,
  };
}
