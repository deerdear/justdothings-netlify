# History

## 2026-11-12 — security review and hardening (branch `fix/security-hardening`)

Review found no serious hole (static bundle, no backend/forms/cookies/secrets). Fixed:

- **Headers**: added `public/_headers` (CSP, `frame-ancestors 'none'`, nosniff, Referrer-Policy,
  Permissions-Policy, COOP, HSTS with includeSubDomains). Netlify copies it to `dist/_headers`.
  CSP is `script-src 'self'`, so Cloudflare's injected inline bot-detection script
  (`/cdn-cgi/challenge-platform/...`) will be blocked and log one console violation. Harmless
  for rendering; if Cloudflare starts challenging visitors, turn off JS detections in the
  Cloudflare dashboard rather than adding `'unsafe-inline'`.
- **GPT Engineer leftovers**: removed `.gpt_engineer/` and its script tag (it screenshotted the
  page and posted to gptengineer.app when framed), `html-to-image`, the template README.
- **Dev server**: `vite.config.js` host `"::"` → `"localhost"`. `vite-books-plugin.js` now rejects
  non-loopback Host/Origin (403) and any non-empty book `url` that is not `https://` (400).
  Three books have `"url": ""`, so the check must allow falsy values.
- **Dependencies**: deleted all of `src/components/ui/` (nothing imported it; App.jsx only wrapped
  in unused Toaster/TooltipProvider/QueryClient) and ~45 packages. Upgraded vite 5→8,
  @vitejs/plugin-react 4→6, react-router-dom 6→7 (imports unchanged). `npm audit`: 25 → 0.
- **Fonts**: EB Garamond self-hosted via `@fontsource-variable/eb-garamond`; family name is now
  `"EB Garamond Variable"` in `src/index.css` and `tailwind.config.js`. No Google Fonts requests.
- **Build**: removed stale `bun.lockb` so Netlify installs from `package-lock.json`; added
  `.nvmrc` (22) because Vite 8 needs Node ≥ 20.19.

Verified: build passes; dist served locally with the `_headers` values renders /, /reading and an
essay in Chrome with no console errors and no third-party requests; curl tests of `/__books`
(evil Origin, rebinding Host, `javascript:` url, valid round trip leaves books.json unchanged).
`npm run lint` already failed before this work (233 errors, mostly unescaped quotes in essays).

Not done: GitHub branch protection on `main` (account setting, left to the owner).
