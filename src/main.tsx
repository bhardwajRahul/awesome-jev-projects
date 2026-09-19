import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "./styles.css";
import App, { type Project } from "./App";
import { locales, localeFromPath, readLocale, type Locale } from "./lib/i18n";
function initialSnapshot(): { projects: Project[]; locale: Locale } | undefined {
  try {
    const snapshot = JSON.parse(document.getElementById("initial-projects")?.textContent ?? "null");
    if (snapshot && Array.isArray(snapshot.projects) && locales.includes(snapshot.locale)) return snapshot;
  } catch {
    // A malformed snapshot uses the normal same-origin JSON loader.
  }
  return undefined;
}
const snapshot = initialSnapshot();
const url = new URL(window.location.href);
const requested = url.searchParams.get("lang");
const preferred = localeFromPath(url.pathname) ?? (locales.includes(requested as Locale) ? requested as Locale : readLocale());
if (snapshot && preferred !== snapshot.locale) {
  url.pathname = `${import.meta.env.BASE_URL}${preferred === "zh" ? "" : `${preferred}/`}`;
  if (preferred !== "zh") url.searchParams.delete("lang");
  window.location.replace(url.href);
} else {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <App initialProjects={snapshot?.projects} initialLocale={snapshot?.locale ?? preferred} />
    </React.StrictMode>,
  );
}
