import { renderToStaticMarkup } from "react-dom/server";
import App, { type Project } from "./App";
import type { Locale } from "./lib/i18n";
export { categoryLabel, localeMeta } from "./lib/i18n";

export function renderHome(projects: Project[], locale: Locale, initialDay?: string) {
  return renderToStaticMarkup(
    <App initialProjects={projects} initialLocale={locale} initialDay={initialDay} />,
  );
}
