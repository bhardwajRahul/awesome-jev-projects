# Security boundaries

This site is a static, unauthenticated directory. It has no GitHub login, backend session, wallet connection, or API-key form. Its catalog reads only its own published data; browser code receives no maintenance credentials. Source links open separately with `noopener noreferrer`.

## Repository automation

- Workflow defaults grant no permissions. Each job requests only what it needs.
- Issue and radar collection run with repository read permissions. Third-party repositories, READMEs and Issue bodies are data; their code and package scripts are never executed.
- Dependency installation uses `--ignore-scripts` and occurs in read-only validation jobs. Write jobs install no dependencies and consume only bounded JSON artifacts from the exact preceding job's immutable artifact ID.
- Issue publication permits a single `src/data/projects.json` Git tree entry, one reviewed parent commit and a non-force update to `main`. If code, policy or data has advanced, publication fails closed and the Issue stays open for a retry. Other file paths, branches, force pushes and mutation redirects are rejected.
- Pages has a separate deployment job. The acknowledgement job has Issue permissions only and confirms the deployed data before commenting or closing submissions.
- Official Actions are pinned to full commit SHAs. Workflows do not reference personal access tokens or the retired GitHub Models secret. Unused repository secrets are not automatically deleted or claimed to be revoked.
- Public PR validation is unprivileged. No `pull_request_target` job checks out contributor code. Privileged `workflow_run` processing validates the workflow path, repository, branch and event.

## Published content

Project descriptions are escaped as text. Embedded JSON escapes HTML delimiters. Every generated HTML page has a restrictive Content Security Policy; executable inline scripts are refused. Structured JSON uses per-page SHA-256 CSP hashes. Project routes reject traversal, and the build verifies internal links, translations, canonical URLs, sitemap coverage and public-field allowlists.

Source inspection establishes implementation evidence, not security certification or real-world adoption. A successful build or secret scan does not prove that no vulnerability exists. Upstream packages, GitHub, account authentication, maintainers' devices and future changes remain outside a static website's guarantees. Keep account sign-in protections and recovery methods secure.

## Optional traffic analytics

The production build includes Cloudflare Web Analytics only for the configured GitHub Pages hostname and path. Its public beacon identifier is not an API credential. The CSP permits exactly `https://static.cloudflareinsights.com/beacon.min.js` and `https://cloudflareinsights.com/cdn-cgi/rum`; it does not allow wildcard third-party script domains. The local loader skips tracking when Do Not Track or Global Privacy Control is enabled. Preview builds on localhost do not send analytics.

The beacon is third-party code that Cloudflare can update. A strict allowlist limits its source but cannot remove that supply-chain trust. The loader fails harmlessly when blocked. No Cookie banner, advertising network, user account identifier or secret is added. See [Cloudflare's privacy explanation](https://developers.cloudflare.com/web-analytics/data-metrics/privacy/) and [sponsorship terms](SPONSORING.md) for aggregate reporting limits.

## Reporting

Please do not put credentials or exploitable private details in a public Issue. Contact the maintainer through the repository profile first. For ordinary source, classification or translation corrections, link the affected project and a fixed source revision in an Issue.
