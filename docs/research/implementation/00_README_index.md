# Web Implementation Principles — Report Set (LLM-optimized)

> Purpose: knowledge base for a web-design/implementation SKILL used by an LLM coding agent.
> Scope: implementation & code architecture (NOT visual style) for (a) fully static sites and (b) web apps connected to a backend.
> Time window: practices current in 2024–2026. Research date: 2026-11-24.
> Language: English. Audience: an LLM. Dense, rule-based, cross-referenced.

## File map

| File | Content | Use when |
|---|---|---|
| `00_README_index.md` | Conventions, glossary, source registry | Always load first |
| `01_foundations_architecture.md` | Rendering decision tree, static-first rules, backend-app rules, reuse/scalability architecture, platform-first features, performance targets, security, agent pitfalls | Any build task |
| `02_page_type_matrix.md` | Per page type (≈45 pages in 10 categories): static viability, rendering, data/state, ranked principles, anti-patterns, reusable parts, category weighting | Building/reviewing a specific page |
| `03_real_world_case_studies.md` | Verified real implementations with outcomes + source URLs | Justifying a decision, choosing patterns |

## Conventions

- Rule IDs: `R-<AREA>-<n>` (e.g. `R-REND-3`). Page sections reference rule IDs instead of repeating them.
- Normative keywords: **MUST** (non-negotiable), **SHOULD** (default; deviate only with a reason), **MAY** (optional), **AVOID** (anti-pattern).
- Applicability tags: `[STATIC]` fully static site (build-time HTML on CDN, no app server; may call third-party/serverless endpoints), `[APP]` backend-connected app, `[BOTH]`.
- Evidence tags: `[E:standard]` spec/standards body · `[E:vendor-doc]` official framework/platform docs · `[E:case]` measured real-world case study · `[E:research]` UX research (e.g. Baymard) · `[E:practice]` widely accepted practice, no single authoritative source.
- Framework neutrality: principles are stack-agnostic; framework mappings are given as examples (Astro, Next.js 16, Nuxt, SvelteKit, React Router 7, TanStack Start, Eleventy).

## Core thesis (one paragraph)

Decide rendering **per route and per component**, not per site. Default to static HTML with zero JS; add server rendering, streaming, client islands or a full client app only where data freshness, personalization or interactivity demand it. Keep all server data access behind one authorization-enforcing layer. Treat the URL as state, the server as source of truth, and the client as an optimistic cache. Build UI from tokens → headless primitives → owned components → page sections → templates, and prefer native platform features (dialog, popover, invokers, view transitions, speculation rules, container queries, content-visibility) over custom JS. Measure with field Core Web Vitals (LCP, INP, CLS).

## Glossary (short)

- **SSG**: static site generation at build time.
- **ISR / SWR**: serve cached static output, regenerate in background after TTL or on-demand (tag/path revalidation).
- **SSR**: HTML rendered per request.
- **Streaming SSR**: shell sent immediately; slower parts stream in via Suspense boundaries.
- **PPR / Cache Components (Next.js 16)**: static shell prerendered + dynamic holes streamed in the same response; component-level caching via `"use cache"`, `cacheLife()`, `cacheTag()`.
- **Islands**: static HTML page with isolated interactive (client islands) or deferred server-rendered (server islands) regions.
- **RSC**: React Server Components; components that run only on the server and ship no JS.
- **DAL**: Data Access Layer; single server-only module that performs authN/authZ and returns minimal DTOs.
- **Local-first / sync engine**: client holds a local replica (e.g. IndexedDB) and syncs deltas with the server; UI reads/writes locally.
- **Baseline**: web-features compatibility status (Newly available = all major engines; Widely available = 30 months later).
- **CWV**: Core Web Vitals — LCP (≤2.5 s), INP (≤200 ms), CLS (≤0.1), measured at p75 field data.

## Source registry (primary sources used)

Rendering & frameworks
- Astro islands & server islands: https://docs.astro.build/en/concepts/islands · https://docs.astro.build/en/guides/server-islands/
- Next.js 16 release (Cache Components, proxy.ts, React Compiler stable): https://nextjs.org/blog/next-16 (Oct 21 2025)
- Next.js 16.4 (Cache Components recommended; default in v17): https://nextjs.org/blog/next-16-4
- Next.js cacheComponents config: https://nextjs.org/docs/app/api-reference/config/next-config-js/cacheComponents
- Nuxt rendering/routeRules: https://nuxtseo.com/learn-seo/nuxt/routes-and-rendering
- TanStack Start 1.0 stable (Oct 13 2026): https://tanstack.com/blog/tanstack-start-1-0
- React 19 `<form action>` / actions: https://react.dev/reference/react-dom/components/form
- Islands concept (Jason Miller / Katie Sylor-Miller): via Astro docs above

Performance & platform
- web.dev case studies: Fotocasa INP, QuintoAndar INP, Ray-Ban speculation rules, Monrif, Nuvemshop (see file 03)
- Shopify speculation rules: https://shopify.dev/docs/storefronts/themes/best-practices/performance/use-speculation-rules
- Cross-document view transitions: https://developer.chrome.com/docs/web-platform/view-transitions/cross-document
- content-visibility: https://web.dev/articles/content-visibility
- Fetch Priority: https://web.dev/articles/fetch-priority
- Invoker commands (Baseline 2025): https://developer.mozilla.org/docs/Web/API/Invoker_Commands_API
- CSS & UI I/O 2025 recap (popover, dialog closedby, anchor positioning): https://developer.chrome.com/blog/new-in-web-ui-io-2025-recap
- Baseline status of container queries / :has(): https://web.dev/blog/new-in-the-web-io2024
- Chrome Modern Web Guidance 1.0 (agent skill, Nov 2026): https://developer.chrome.com/blog/modern-web-guidance-v1
- Top 10 things AI gets wrong in web dev: https://developer.chrome.com/blog/top-10-things-ai-gets-wrong-in-web-dev

Design systems & architecture
- W3C Design Tokens spec 2025.10 (first stable): https://www.designtokens.org/tr/2025.10/
- Tailwind CSS v4 (CSS-first `@theme`, tokens as CSS variables): https://tailwindcss.com/blog/tailwindcss-v4
- shadcn/ui principles (open code, composition, distribution): https://ui.shadcn.com/docs
- bulletproof-react project structure: https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md

Security & identity
- Next.js data security / DAL: https://nextjs.org/docs/app/guides/data-security · https://nextjs.org/blog/security-nextjs-server-components-actions
- OWASP Next.js Security Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/Nextjs_Security_Cheat_Sheet.html
- React2Shell CVE-2025-55182: https://react.dev/blog/2025/12/03/critical-security-vulnerability-in-react-server-components
- NIST SP 800-63B-4 (final, Jul/Aug 2025): https://csrc.nist.gov/pubs/sp/800/63/b/4/final
- OWASP Forgot Password Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/Forgot_Password_Cheat_Sheet.html
- web.dev sign-in form best practices: https://web.dev/articles/sign-in-form-best-practices
- Passkey form autofill: https://web.dev/articles/passkey-form-autofill

Commerce, data, real-time, content
- Baymard checkout research: https://baymard.com/research-articles/checkout-flow-average-form-fields · https://baymard.com/research-articles/ecommerce-checkout-usability-report-and-benchmark
- Stripe fulfillment via webhooks: https://docs.stripe.com/checkout/fulfillment
- Shopify Hydrogen cart: https://shopify.dev/docs/storefronts/hydrogen/cart
- Slack real-time messaging: https://slack.engineering/real-time-messaging
- Linear sync engine (reverse-engineered, endorsed by Linear CTO): https://github.com/wzhudev/reverse-linear-sync-engine
- Notion CRDT editing: https://www.notion.com/blog/how-notion-handles-concurrent-editing-with-crdts
- llms.txt spec: https://github.com/AnswerDotAI/llms-txt
- Google soft-404 / status codes: https://developers.google.com/search/docs/crawling-indexing/http-network-errors
- Google Consent Mode: https://developers.google.com/tag-platform/security/concepts/consent-mode
- WebKit Declarative Web Push (Safari 18.4): https://webkit.org/blog/16574/
