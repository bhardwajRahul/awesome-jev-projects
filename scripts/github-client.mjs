/** Serialized GitHub requests; remote repository content is never executed. */
const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function retryAfterMs(value, now) {
  if (!value) return 0;
  const seconds = Number(value);
  if (Number.isFinite(seconds)) return Math.max(0, seconds * 1000);
  const date = Date.parse(value);
  return Number.isFinite(date) ? Math.max(0, date - now) : 0;
}

export function createGitHubClient({
  token,
  fetchImpl = fetch,
  now = Date.now,
  sleep = pause,
  maxAttempts = 3,
  maxRateLimitWaitMs = 15 * 60 * 1000,
  onRetry = () => {},
} = {}) {
  let queue = Promise.resolve();
  let nextRequest = 0;
  let nextSearch = 0;
  let rateLimitWaited = 0;
  let rateLimitBlocked = null;

  async function request(
    path,
    { search = false, code = false, raw = false, method = "GET", body } = {},
  ) {
    // A run-wide circuit avoids hammering every remaining repository after the
    // bounded retry allowance has been exhausted. The next run starts fresh.
    if (rateLimitBlocked) throw rateLimitBlocked;
    if (!path.startsWith("/") || path.startsWith("//")) {
      throw new Error("GitHub API path must be an absolute API pathname");
    }
    let requestUrl = "https://api.github.com" + path;
    let redirects = 0;
    const attempts = method === "POST" ? 1 : maxAttempts;
    for (let attempt = 0; attempt < attempts; attempt++) {
      const wait = Math.max(
        0,
        nextRequest - now(),
        search ? nextSearch - now() : 0,
      );
      if (wait) await sleep(wait);
      const sentAt = now();
      nextRequest = sentAt + 1500;
      if (search) nextSearch = sentAt + (code ? 6500 : token ? 2200 : 6200);
      let response;
      try {
        response = await fetchImpl(requestUrl, {
          method,
          ...(body === undefined ? {} : { body: JSON.stringify(body) }),
          headers: {
            Accept: raw
              ? "application/vnd.github.raw+json"
              : "application/vnd.github+json",
            "X-GitHub-Api-Version": "2022-11-28",
            "User-Agent": "awesome-jev-radar",
            ...(body === undefined
              ? {}
              : { "Content-Type": "application/json" }),
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
          signal: AbortSignal.timeout(20000),
          redirect: "manual",
        });
      } catch (error) {
        if (attempt === attempts - 1) throw error;
        await sleep(1500 * (attempt + 1));
        continue;
      }
      if ([301, 302, 307, 308].includes(response.status)) {
        await response.body?.cancel();
        const error = new Error(
          "GitHub API redirect rejected: invalid destination or redirect limit exceeded",
        );
        error.status = response.status;
        const location = response.headers.get("location");
        let destination;
        try {
          destination = location ? new URL(location, requestUrl) : null;
        } catch {
          throw error;
        }
        if (
          redirects >= 3 ||
          !destination ||
          destination.origin !== "https://api.github.com" ||
          destination.username ||
          destination.password
        )
          throw error;
        requestUrl = destination.href;
        redirects++;
        // Redirects consume their own bounded allowance, while every follow-up
        // still passes through the same request and search pacing above.
        attempt--;
        continue;
      }
      if (response.ok)
        return response.status === 204
          ? null
          : raw
            ? response.text()
            : response.json();
      let detail;
      try {
        detail = (await response.json()).message;
      } catch {
        detail = response.statusText;
      }
      const message = token
        ? String(detail).replaceAll(token, "[redacted]")
        : String(detail);
      const error = new Error(
        `GitHub ${response.status}: ${message.slice(0, 220)}`,
      );
      error.status = response.status;
      const remaining = response.headers.get("x-ratelimit-remaining");
      const retryAfter = response.headers.get("retry-after");
      const rateLimited =
        response.status === 429 ||
        (response.status === 403 &&
          (remaining === "0" ||
            retryAfter !== null ||
            /rate limit|secondary limit|abuse detection/i.test(message)));
      if (rateLimited) {
        error.rateLimited = true;
        const reset = Number(response.headers.get("x-ratelimit-reset")) * 1000;
        const retry = retryAfterMs(retryAfter, now());
        const primaryWait =
          remaining === "0" && Number.isFinite(reset)
            ? Math.max(0, reset - now())
            : 0;
        // GitHub requires at least one minute for secondary limits without a
        // Retry-After header, followed by an exponentially increasing delay.
        const backoff =
          Math.max(retry || 60000 * 2 ** attempt, primaryWait) + 500;
        error.retryAfterMs = backoff;
        if (
          attempt === attempts - 1 ||
          rateLimitWaited + backoff > maxRateLimitWaitMs
        ) {
          rateLimitBlocked = error;
          throw error;
        }
        rateLimitWaited += backoff;
        onRetry({
          status: response.status,
          waitMs: backoff,
          attempt: attempt + 1,
        });
        await sleep(backoff);
        continue;
      }
      if (response.status >= 500 && attempt < attempts - 1) {
        await sleep(1500 * (attempt + 1));
        continue;
      }
      throw error;
    }
  }

  return function api(path, options) {
    const result = queue.then(() => request(path, options));
    queue = result.catch(() => {});
    return result;
  };
}
