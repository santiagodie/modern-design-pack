# 01 — Foundations: Rendering, Data, Reuse, Platform, Performance, Security

> Load after `00_README_index.md`. Rule IDs are referenced by `02_page_type_matrix.md`.

---

## 1. Rendering decision model

### 1.1 Spectrum (least → most runtime cost)

| Mode | Where HTML is produced | Freshness | JS shipped | Typical fit |
|---|---|---|---|---|
| SSG | build | until rebuild | 0 by default | marketing, legal, docs, blog |
| ISR / SWR (time or tag revalidation) | build + background regen | bounded staleness | 0 by default | large catalogs, news, pricing |
| Static shell + server islands / PPR | build shell + per-request holes | per hole | 0 for shell | PDP with price/stock/avatar, home with personalization |
| SSR (+ streaming) | per request | real-time | as needed | auth-gated pages, dashboards, search results |
| Client islands | browser, selected components | n/a | only island code | carousels, forms, maps, cart badge |
| SPA / client route | browser | real-time | high | editors, heavy tools |
| Local-first sync engine | browser replica + sync | real-time, offline | high | issue trackers, collaborative tools |

### 1.2 Decision tree (apply per route, then per component)

```
Is content identical for all users?
├─ YES → Does it change more often than you deploy?
│        ├─ NO  → SSG                                       (R-REND-1)
│        └─ YES → ISR / tag revalidation (webhook → revalidate) (R-REND-2)
│                 Large page count? → ISR on-demand, not full prebuild
└─ NO  → Is most of the page shared, with small personalized parts?
         ├─ YES → static shell + server islands / PPR / Suspense holes (R-REND-3)
         └─ NO  → SSR (streaming) behind auth                  (R-REND-4)
Then for each component:
  Needs interactivity? → client island, hydrate on visible/idle/interaction (R-REND-5)
  Interaction must be instant, offline, collaborative, high-frequency? → local-first/sync engine (R-REND-6)
```

### 1.3 Rules

- **R-REND-1 [BOTH] MUST** default every route to static unless a requirement forces otherwise. Rendering mode is chosen per route (Nuxt `routeRules`, Next per-segment, Astro `prerender`), never once for the whole site. `[E:vendor-doc]`
- **R-REND-2 [BOTH] SHOULD** use on-demand (tag/path) revalidation triggered by CMS/commerce webhooks instead of short TTLs. Next.js 16: `cacheTag()` + `revalidateTag(tag, profile)` / `updateTag()`. `[E:vendor-doc]`
- **R-REND-3 [BOTH] SHOULD** isolate per-user or slow fragments (avatar, price, stock, recommendations, reviews) into deferred units so the shell can be CDN-cached: Astro `server:defer` with `slot="fallback"`; Next.js 16 Cache Components (PPR is the default with `cacheComponents: true`); Nuxt islands. Fallbacks MUST reserve space (no CLS). `[E:vendor-doc]`
- **R-REND-4 [APP] SHOULD** stream SSR with one Suspense boundary per independent data source so a slow query never blocks the shell. `[E:vendor-doc]`
- **R-REND-5 [BOTH] MUST** ship JS only for components that need it; choose hydration trigger (`client:visible`, `client:idle`, on-interaction). AVOID hydrating whole pages for a few widgets. `[E:vendor-doc]`
- **R-REND-6 [APP] MAY** adopt a sync engine only when interaction density justifies its complexity (issue trackers, docs, design tools). Reference: Linear (file 03). `[E:case]`
- **R-REND-7 [APP]** Edge vs region: run rendering close to the data, not necessarily close to the user; edge is for routing, redirects, geolocation, A/B bucketing, light personalization. `[E:practice]`
- **R-REND-8 [BOTH]** Static hosting caveat: pure static hosts (no server) cannot do ISR/SSR; use build hooks, client fetch to APIs, or serverless functions for forms. `[E:practice]`

### 1.4 Framework mapping (2025–2026)

| Need | Astro (5/6) | Next.js 16 | Nuxt 3/4 | SvelteKit | React Router 7 / Remix | TanStack Start 1.0 |
|---|---|---|---|---|---|---|
| SSG | default | default static w/ Cache Components | `prerender` / routeRules | `export const prerender = true` | prerender config | static prerender |
| Revalidate | adapter/CDN | `cacheLife`, `cacheTag`, `revalidateTag` | routeRules `isr`/`swr` | config + CDN | Cache-Control headers | Cache-Control / server fns |
| Partial dynamic | `server:defer` server islands | PPR via Cache Components + Suspense | `<NuxtIsland>` | streaming promises | deferred loaders | streaming SSR |
| Client interactivity | `client:*` islands (any framework) | `"use client"` | components | components | components | components |
| Mutations | Actions | Server Functions/Actions | server routes | form actions | `action` + `<Form>` | `createServerFn` |

Notes: Next.js 16 renamed middleware to `proxy.ts`; TanStack Start treats RSC as optional (Next.js treats them as default). Choose Astro for content-first sites with sparse interactivity; Next/RR7/TanStack/SvelteKit/Nuxt for app-heavy products. `[E:vendor-doc]`

---

## 2. Static-site principles `[STATIC]` (also apply to static routes of apps)

- **R-STAT-1 MUST** output semantic, complete HTML at build; content visible without JS (SEO, resilience, LLM/agent readability).
- **R-STAT-2 MUST** model content as typed collections (schema-validated frontmatter / CMS models). Pages are templates over collections; never hand-duplicate page HTML.
- **R-STAT-3 SHOULD** model marketing pages as an ordered array of typed **section blocks** (`hero`, `logos`, `features`, `pricing`, `faq`, `cta`) rendered by a block registry. Same blocks across landing, home, about, pricing → one implementation per section. `[E:practice]`
- **R-STAT-4 MUST** keep dynamic needs out of the static build via: (a) form endpoints (serverless/Actions/third-party), (b) client islands calling public APIs, (c) server islands. Secrets never in client bundles.
- **R-STAT-5 SHOULD** use cross-document View Transitions (`@view-transition { navigation: auto; }`) gated behind `prefers-reduced-motion: no-preference` for app-like MPA navigation — progressive enhancement (Chrome 126+, Safari 18.2+; unsupported browsers navigate normally). `[E:vendor-doc]`
- **R-STAT-6 SHOULD** add Speculation Rules (`prefetch` conservative/moderate; `prerender` for highest-probability next pages, excluding logout/cart-mutating/`nofollow` links). Chromium-only; harmless elsewhere. `[E:case]` Ray-Ban, Shopify, Monrif.
- **R-STAT-7 MUST** keep pages bfcache-eligible: no `unload` handlers, avoid `Cache-Control: no-store` on public pages. `[E:case]` Ray-Ban.
- **R-STAT-8 SHOULD** generate machine-readable companions at build: sitemap, RSS/Atom, structured data (JSON-LD), OG images, and for docs `llms.txt` + per-page `.md` (`rel="alternate" type="text/markdown"`). `[E:standard]`/`[E:practice]`
- **R-STAT-9 MUST** return correct status codes from the host: real 404 (custom `404.html`), 410 for removed, 301 for moved; no soft 404s. `[E:vendor-doc]` Google Search.
- **R-STAT-10 SHOULD** use static search indexes (generated at build) for small/medium sites; hosted search API only when scale/facets require it. `[E:practice]`

---

## 3. Backend-connected app principles `[APP]`

### 3.1 State taxonomy (MUST classify every piece of state)

| State kind | Source of truth | Tool/pattern | Example |
|---|---|---|---|
| Server/domain state | DB via API | server components/loaders; client cache (TanStack Query, SWR, RTK Query) with keys & invalidation | orders, users, products |
| URL state | URL path/search params | typed search params (nuqs, TanStack Router search schemas, `useSearchParams`) | filters, sort, page, tab, selected id, date range, map bbox |
| Form state | DOM/FormData | native forms + actions; schema validation | profile edit |
| Ephemeral UI state | component | `useState`/signals | open menu, hover |
| Session/auth | HttpOnly cookie | server reads only | user id, tenant |
| Preferences | cookie (SSR-needed) or localStorage (client-only) | theme, density | dark mode |
| Local replica | IndexedDB | sync engine | Linear-style apps |

- **R-STATE-1 MUST NOT** copy server state into a global client store; cache it with keyed queries and invalidate after mutations.
- **R-STATE-2 MUST** put shareable/bookmarkable state in the URL (filters, pagination, sort, tabs, search). Debounce text inputs (~300 ms); never put secrets/PII in URLs. `[E:practice]`
- **R-STATE-3 SHOULD** keep a single typed parser for search params used by both server (rendering/query) and client (controls).

### 3.2 Data access & authorization

- **R-DATA-1 MUST** route all server data access through a server-only **Data Access Layer** that authenticates, authorizes per resource, and returns minimal DTOs; only the DAL reads secrets/env. `[E:vendor-doc]` Next.js data security guide.
- **R-DATA-2 MUST NOT** rely on middleware/proxy/route-guards as the only authorization; re-check at the data source. CVE-2025-29927 allowed bypass of middleware-only auth in self-hosted Next.js. `[E:standard]` OWASP Next.js cheat sheet.
- **R-DATA-3 MUST** treat every Server Function/Action/API route as a public endpoint: validate input with a schema, check auth, rate-limit.
- **R-DATA-4 MUST** include user/tenant in cache keys for any cached per-user data; never place personalized responses in shared CDN cache (`Cache-Control: private`). `[E:standard]` OWASP Next.js cheat sheet.
- **R-DATA-5 MUST** patch framework/RSC dependencies promptly: CVE-2025-55182 ("React2Shell", CVSS 10) allowed unauthenticated RCE through RSC Server Function deserialization (React 19.0–19.2.0; fixed 19.0.1/19.1.2/19.2.1). `[E:standard]`
- **R-DATA-6 SHOULD** use multi-tenant scoping as a mandatory DAL parameter (tenantId from session, never from client input).

### 3.3 Mutations

- **R-MUT-1 SHOULD** implement mutations as `<form>` + server action/endpoint so they work before JS loads (progressive enhancement); enhance with pending/optimistic UI. React 19: `<form action={fn}>`, `useActionState`, `useFormStatus`, `useOptimistic`. `[E:vendor-doc]`
- **R-MUT-2 SHOULD** use optimistic UI for low-risk, high-frequency actions (add to cart, like, rename, reorder); show pending markers and auto-rollback on error. Disable follow-up actions on optimistic items. `[E:vendor-doc]` Hydrogen.
- **R-MUT-3 MUST NOT** use optimistic UI for irreversible/financial actions (payment, delete account, send invoice); use explicit pending + server confirmation.
- **R-MUT-4 MUST** make side-effecting endpoints idempotent (idempotency key or natural key); webhooks MUST tolerate duplicate & concurrent delivery. `[E:vendor-doc]` Stripe.
- **R-MUT-5 MUST** share one validation schema (Zod/Valibot/ArkType) between client hints and server enforcement; server is authoritative.
- **R-MUT-6 SHOULD** use Post/Redirect/Get after non-JS form submits to avoid duplicate submission on reload.
- **R-MUT-7 SHOULD** invalidate by tag/key after mutation (e.g., `revalidateTag`, `queryClient.invalidateQueries`) rather than refetching everything.

### 3.4 Real-time

- **R-RT-1 MUST** persist first, then fan out; the DB is the source of truth, the socket is an optimization; clients catch up via HTTP after reconnect. `[E:case]` Slack.
- **R-RT-2 SHOULD** choose transport by direction: SSE for server→client streams (notifications, AI token streaming, progress); WebSocket for bidirectional/high-frequency (chat, presence, collaboration); polling acceptable for low-frequency status.
- **R-RT-3 SHOULD** separate transient events (typing, presence) from persisted events. `[E:case]` Slack.
- **R-RT-4 SHOULD** use CRDTs (Yjs, Automerge, custom RGA/Peritext) for concurrent rich-text editing rather than last-write-wins. `[E:case]` Notion.

### 3.5 Errors, loading, empty

- **R-ERR-1 MUST** define per-route loading, error and not-found boundaries (Next `loading/error/not-found`, RR7 `ErrorBoundary`) and per-widget error boundaries on dashboards so one failing widget doesn't blank the page.
- **R-ERR-2 MUST** send real HTTP status from the server for not-found/forbidden/unavailable; SPAs must avoid soft 404s (redirect to a 404-status URL or add `noindex`). `[E:vendor-doc]` Google.
- **R-ERR-3 SHOULD** implement every collection component with explicit states: loading (skeleton sized to final layout), empty-first-use, empty-no-results, error-retry, partial, success.

---

## 4. Reuse & scalability architecture `[BOTH]`

### 4.1 Layer model (dependencies point downward only)

```
L0 Design tokens (DTCG JSON → CSS variables / Tailwind @theme)
L1 Headless primitives (Radix, React Aria, Base UI, native <dialog>/popover)
L2 Owned components (Button, Input, Field, Card, Table, Dialog) — styled with tokens
L3 Patterns / blocks (DataTable, FilterBar, EmptyState, PricingTable, AuthForm, Section blocks)
L4 Layouts / templates (MarketingLayout, AppShell, DocsLayout, AuthLayout, CheckoutLayout)
L5 Routes/pages (compose L3–L4, own data loading)
Cross-cutting: features/<domain> (api, components, hooks, schemas) — no cross-feature imports
```

- **R-REUSE-1 MUST** define tokens once (color, space, type, radius, motion, z, breakpoints) in a tool-neutral format; W3C DTCG spec reached first stable version 2025.10 (theming, modern color spaces, multi-file). Emit CSS custom properties; Tailwind v4 exposes theme tokens as CSS variables via `@theme`. `[E:standard]`
- **R-REUSE-2 SHOULD** use semantic token tiers: primitive (`blue-600`) → semantic (`color-bg-danger`) → component (`button-bg`). Themes (dark, brand, tenant) swap semantic tier only. Use `light-dark()` + `color-scheme` for theme-adaptive tokens. `[E:vendor-doc]`
- **R-REUSE-3 SHOULD** build L2 on accessible headless primitives and **own the source** (shadcn/ui model: open code, composition, distribution via registry/CLI); avoid wrapping opaque libraries to fight their styles. `[E:vendor-doc]`
- **R-REUSE-4 SHOULD** expose compound/slot APIs (`<Card><Card.Header/>…`) over boolean-prop explosions; keep a consistent prop vocabulary (`size`, `variant`, `asChild`/`render`) across components.
- **R-REUSE-5 MUST** make components layout-agnostic: own their responsive behavior with container queries (Widely available Aug 2025) and adapt to content with `:has()`; page layouts own spacing between components. `[E:standard]`
- **R-REUSE-6 SHOULD** organize code by feature (`features/billing`, `features/catalog`), each exporting a public API; forbid cross-feature imports and enforce unidirectional flow shared → features → app with lint rules. `[E:practice]` bulletproof-react.
- **R-REUSE-7 SHOULD** keep one configuration source for business catalogs reused across pages (plans/entitlements, navigation, legal versions, cookie registry, feature flags) — e.g. `plans.ts` consumed by pricing page, checkout, billing, and server-side entitlement checks.
- **R-REUSE-8 SHOULD** use layout composition/route groups for shells (marketing vs app vs auth vs checkout) so each shell loads only its JS/CSS and providers.
- **R-REUSE-9 SHOULD** document components with states (loading/empty/error/disabled/RTL/dark) in a workshop (Storybook/Ladle) and run visual + a11y tests on them; page tests then focus on composition.
- **R-REUSE-10 SHOULD** design for agents: consistent, readable source and shared APIs make components easier for LLMs to read and generate (explicit shadcn/ui rationale). `[E:vendor-doc]`

### 4.2 Platform-first primitives (prefer over custom JS)

| Need | Native feature (status) | Replaces |
|---|---|---|
| Modal | `<dialog>` + `showModal()`; `closedby="any"` for light dismiss | custom overlays, focus traps, scroll locks, `popstate` hacks |
| Menus/tooltips/toggletips | `popover` attribute (Baseline newly available 2025) + CSS anchor positioning | positioning libs, click-outside handlers |
| Button → element control | Invoker commands `command`/`commandfor` (Baseline 2025) | click handlers for open/close |
| Enter/exit animations | `@starting-style`, `transition-behavior: allow-discrete` | rAF/transitionend state machines |
| Page transitions (MPA) | Cross-document View Transitions | SPA routers just for animation |
| Instant navigation | Speculation Rules | custom prefetch scripts |
| Offscreen rendering cost | `content-visibility: auto` + `contain-intrinsic-size: auto <n>px` | manual virtualization for moderately long pages |
| Component responsiveness | `@container`, `:has()` | JS resize observers |
| Validation styling | `:user-invalid` | blur-based JS validation |
| Swipe/gestures | CSS scroll-snap, `overscroll-behavior`, scroll-driven animations | pointermove physics |
| Exclusive accordion | `<details name="group">` | accordion JS |
| Theme | `<meta name="color-scheme">`, `light-dark()` | flash-of-wrong-theme hacks |
| Main-thread scheduling | `scheduler.yield()` / `postTask()` (where supported), yield-to-main fallback | long tasks |
| Sanitization | `setHTML()` where supported, DOMPurify lazy fallback, Trusted Types | hand-rolled sanitizers |

Sources: MDN, Chrome I/O 2025 recap, Chrome Modern Web Guidance. Always check the project's Baseline target and provide fallbacks/polyfills.

---

## 5. Performance targets & techniques `[BOTH]`

- **R-PERF-1 MUST** measure field CWV at p75 (LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1) via RUM (`web-vitals` library with attribution), segmented by page type/device. `[E:case]` Fotocasa, QuintoAndar.
- **R-PERF-2 MUST** make the LCP element discoverable in HTML, `fetchpriority="high"` on the LCP image, never `loading="lazy"` on it; lazy-load below-the-fold. Limit high priority to 1–2 resources. `[E:case]` Google Flights 2.6→1.9 s; Nuvemshop.
- **R-PERF-3 MUST** reserve space for all media/embeds (`width`/`height`, `aspect-ratio`, including `<video>`), use `dvh/svh` instead of static `vh` for full-height sections, `font-size-adjust`/metric overrides for font fallbacks. `[E:vendor-doc]`
- **R-PERF-4 MUST** keep interactions responsive: break long tasks (yield to main), use transitions (`useTransition`) for non-urgent updates, show immediate visual feedback before heavy work, debounce, abort stale requests (AbortController). `[E:case]` QuintoAndar.
- **R-PERF-5 SHOULD** remove/defer third-party scripts; prefer server-side tagging; remove CSS-in-JS runtime cost. `[E:case]` QuintoAndar removed third-party pixels and CSS-in-JS.
- **R-PERF-6 SHOULD** prevent regressions with performance budgets in CI, canary/staged releases and RUM alerting. `[E:case]` QuintoAndar, Fotocasa.
- **R-PERF-7 AVOID** client-side A/B anti-flicker snippets that hide the page; do bucketing at edge/server or use `blocking="render"` scripts where available. `[E:vendor-doc]`
- **R-PERF-8 SHOULD** use React Compiler (stable 1.0; built-in in Next.js 16) instead of manual memoization in React projects. `[E:vendor-doc]`

---

## 6. Security baseline `[BOTH]`

- **R-SEC-1 MUST** send a strict CSP (nonce- or hash-based `script-src` with `'strict-dynamic'`), plus HSTS, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `frame-ancestors`. Static pages: hash inline scripts. `[E:vendor-doc]`
- **R-SEC-2 MUST** sanitize any user-provided HTML (editor output, markdown with HTML) before rendering; prefer Trusted Types enforcement.
- **R-SEC-3 MUST** use HttpOnly, Secure, SameSite cookies for sessions; CSRF protection on cookie-authenticated mutations (framework Server Actions check Origin; keep `allowedOrigins` narrow). `[E:standard]`
- **R-SEC-4 MUST** keep secrets server-side; only explicitly public env vars reach the client (e.g. `NEXT_PUBLIC_*`).
- **R-SEC-5 MUST** rate-limit auth, forms, search, and expensive endpoints; add bot protection to public forms.
- **R-SEC-6 SHOULD** minimize payment PCI scope by using hosted/embedded provider fields; never handle raw card data in your code.

---

## 7. Accessibility baseline `[BOTH]`

- **R-A11Y-1 MUST** use semantic elements (`<button>`, `<a>`, `<form>`, `<label>`, `<table>`, landmarks, heading order).
- **R-A11Y-2 MUST** manage focus on view changes: move focus into new view/dialog, restore to trigger on close; mark background `inert`; roving tabindex for toolbars/grids; visible `:focus-visible` with ≥3:1 contrast.
- **R-A11Y-3 MUST** respect `prefers-reduced-motion` for all motion incl. smooth scroll, scroll-driven animations and view transitions (gate the `@view-transition` rule itself).
- **R-A11Y-4 MUST** forms: persistent labels (no placeholder-as-label), format hints above inputs linked via `aria-describedby`, `aria-invalid` synchronized with visible errors, error summary on submit, correct `autocomplete`/`inputmode`.
- **R-A11Y-5 SHOULD** announce async results (live regions) for search counts, saved states, chat messages.

---

## 8. Known LLM/agent failure modes (use as a review checklist)

From Chrome's Modern Web Guidance evals (Nov 2026: unguided agents pass ~50% of checks vs ~90% guided). Check generated code for:

1. Missing focus move/restore; JS focus traps + `aria-modal` instead of `<dialog>`/`inert`; every toolbar item a tab stop.
2. Reduced-motion gaps on smooth scroll, scroll-driven animations, view transitions; blanket `0.01ms` resets on `*`.
3. JS blur validation instead of `:user-invalid`; `aria-invalid` out of sync; placeholder used for format hints; hints below inputs (hidden by keyboard/autofill).
4. `pointermove` swipe physics instead of scroll-snap; missing `overscroll-behavior-x: none` on swipe tabs.
5. Custom fixed overlays + click-outside instead of `popover`; JS animation state machines instead of `@starting-style`; `overflow:hidden` on `<html>` for scroll lock.
6. Missing `<meta name="color-scheme">`, no `light-dark()`, binary theme toggle without "system", no cross-tab `storage` sync.
7. `setTimeout` queues instead of `scheduler.yield/postTask`; no `content-visibility` on dense layouts; `display:none` for cached SPA views instead of `content-visibility:hidden` + `inert`.
8. Missing dimensions on `<video>`, `vh` instead of `dvh/svh`, no font metric adjustment, anti-flicker A/B snippets.
9. Hand-rolled sanitizers, passthrough Trusted Types policies, no CSP by default.
10. Hand-rolled base64url for WebAuthn instead of `parseRequestOptionsFromJSON()`/`toJSON()`; no `getClientCapabilities()`; no `signalUnknownCredential()`; no AbortController.

Source: https://developer.chrome.com/blog/top-10-things-ai-gets-wrong-in-web-dev
