/** Public href allowlist. Relative and protocol-relative input must not inherit a base host. */
const ALLOWED_HOSTS = new Set(["github.com", "avatars.githubusercontent.com"]);

export function safePublicUrl(value) {
  if (typeof value !== "string" || !value) return "#";
  try {
    const parsed = new URL(value);
    const host = parsed.hostname.toLowerCase();
    if (parsed.protocol !== "https:" || parsed.username || parsed.password) {
      return "#";
    }
    if (!ALLOWED_HOSTS.has(host)) return "#";
    if (
      host === "github.com" &&
      parsed.pathname.split("/").filter(Boolean).length < 2
    ) {
      return "#";
    }
    return parsed.href;
  } catch {
    return "#";
  }
}
