# 03 — Real-World Case Studies (verified, sourced)

> Each entry: Context · Implementation · Outcome (as reported by the source) · Principles demonstrated (rule IDs from file 01) · Page types it informs (file 02) · Source.
> Only figures stated by the cited source are included. Numbers are self-reported by the companies/publishers.

---

## A. Performance & navigation

### A1. QuintoAndar (Brazil, real-estate marketplace) — INP
- **Context**: After INP replaced FID (2024), QuintoAndar had poor responsiveness; some property-search interactions took ~4 s at p75.
- **Implementation**: declared an internal "Code Yellow" (performance as org-wide priority); RUM with INP sub-parts and Long Animation Frames; yield-to-main (`await` a `setTimeout(0)` promise) after showing a spinner in filter handlers; React `useTransition` for non-urgent state; memoization, debouncing, AbortController, Suspense; removed third-party pixels from the client; eliminated CSS-in-JS; used TBT as lab proxy; canary releases (1% → 10% → 65% → 100%) and A/B of optimized code to prevent regressions.
- **Outcome**: INP reduced 80% (RUM); pages meeting "good" INP from 42% → 78%; poor pages 32% → 6.9%; conversions +36% YoY.
- **Principles**: R-PERF-1, R-PERF-4, R-PERF-5, R-PERF-6.
- **Informs**: Catalog/Listing, Search results, Map, Dashboard filters.
- **Source**: https://web.dev/case-studies/quintoandar-inp (published 2025-01-22)

### A2. Fotocasa (Spain, real-estate portal) — INP
- **Context**: When INP became a Core Web Vital, most pages moved from "Good" to "Needs improvement/Poor" in Search Console.
- **Implementation**: custom RUM in Datadog using `web-vitals` (with attribution to identify the DOM target responsible), anomaly monitors/alerts, OpenSearch dashboards filtered by page type/device/load state; Chrome DevTools Performance panel to inspect INP sub-parts (e.g., style recalculations triggered by body-level style changes); React DevTools profiler to find re-render causes.
- **Outcome**: reported as contributing to 27% growth in key metrics (title of case study).
- **Principles**: R-PERF-1, R-PERF-4, R-PERF-6.
- **Informs**: Listing, Search, any interactive app page.
- **Source**: https://web.dev/case-studies/fotocasa-cwv (published 2025-10-14)

### A3. Ray-Ban (EssilorLuxottica e-commerce) — Speculation Rules + bfcache
- **Context**: heavy external libraries kept LCP high on product pages.
- **Implementation**: Speculation Rules `prerender` for product detail pages from listing pages, later extended to listing links in the menu; fallback for non-supporting browsers: resource prefetch on hover (desktop) and for the first 4 tiles (mobile); unlocked bfcache on listing pages (back/forward was up to 40% of traffic with 0% bfcache hit) by removing `unload` usage and restricting via `Permissions-Policy`.
- **Outcome**: LCP improved 43% (desktop and mobile) for prerendered navigations; conversion rate doubled and exit rate −13% (title); bfcache work gave ~30% LCP and 83% CLS improvement on PLPs.
- **Principles**: R-STAT-6, R-STAT-7, R-PERF-2.
- **Informs**: Catalog/Category → PDP navigation, Home → Category.
- **Source**: https://web.dev/case-studies/rayban-speculation-rules (published 2025-01-28)

### A4. Shopify — platform-wide Speculation Rules
- **Context**: all Liquid storefronts.
- **Implementation**: since June 2025, a `Speculation-Rules` HTTP header points to a JSON ruleset; default `prefetch` with `conservative` eagerness (on pointer/touch down); themes can add more aggressive rules; Shopify sends `Clear-Site-Data` to clear prefetch/prerender caches when the cart changes; guidance to use `prerender` with caution.
- **Outcome**: same-site navigations ~220 ms faster at median on desktop and ~20 ms on mobile (Chromium), ~0.7% extra renderer traffic.
- **Principles**: R-STAT-6; cache invalidation on state change (Cart).
- **Informs**: every storefront page; Cart (invalidation).
- **Source**: https://shopify.dev/docs/storefronts/themes/best-practices/performance/use-speculation-rules

### A5. Monrif (Italian news publisher) — prerender + bfcache
- **Implementation**: Speculation Rules prerender on all desktop/mobile domains for most-visited article paths, restricted by selector conditions (excluding `rel~=nofollow` and `.no-prerender` links); bfcache work.
- **Outcome**: LCP up to −17.9%, engagement +8.9% (title); share of ad creatives loaded within 0–500 ms rose (desktop 76.1% → 84.1%, mobile 66.6% → 78.0%) for prerendered navigations.
- **Principles**: R-STAT-6, R-STAT-7.
- **Informs**: Article, Article list, Home (media).
- **Source**: https://web.dev/case-studies/monrif-cwv (published 2025-12-09)

### A6. Nuvemshop / Tiendanube (LatAm e-commerce platform) — LCP detection & image priority
- **Context**: carousels on ~85% of storefronts; CSS transitions on carousels/banners interfered with LCP.
- **Implementation**: identify the real LCP element per layout; remove `loading="lazy"` from first image of top sections; `fetchpriority="high"` on the first slide; adjust top-of-page rendering; edge caching to cut latency.
- **Outcome** (Jan 2025 → Jan 2026): pages with good LCP 57% → 96% (+68% relative); CWV pass rate 48% → 72%; mobile organic conversion +8.9%; session-to-cart +8.4%.
- **Principles**: R-PERF-2, R-PERF-3.
- **Informs**: Landing, Home, Category, PDP (hero/carousel components).
- **Source**: https://web.dev/case-studies/nuvemshop

### A7. Google Flights & Etsy — Fetch Priority
- **Outcome**: Google Flights LCP 2.6 s → 1.9 s in a lab test by boosting hero image priority; Etsy reported ~4% LCP improvement from priority hints.
- **Principles**: R-PERF-2.
- **Sources**: https://web.dev/articles/fetch-priority · https://www.etsy.com/codeascraft/priority-hints-what-your-browser-doesnt-know-yet

---

## B. Rendering architecture

### B1. The Guardian — islands on a news site
- **Implementation**: dotcom-rendering renders server-side with Preact and uses Preact (via preact/compat) client-side; interactive parts hydrated as isolated islands; Source design system. Reported lesson: isolation of islands simplified state (each island self-contained), accepting some duplication.
- **Principles**: R-REND-5, R-REUSE-1/3.
- **Informs**: Article, Home (media), any content-heavy page with few widgets.
- **Sources**: https://github.com/guardian/dotcom-rendering · LogRocket summary https://blog.logrocket.com/?p=200547

### B2. Astro server islands — e-commerce reference pattern (documentation example, not a named company)
- **Implementation**: product page main content static and aggressively cached; avatar, deals, reviews rendered as `server:defer` islands fetched in parallel via GET (cacheable with Cache-Control; props encrypted in query); fallback slot prevents layout shift; set `ASTRO_KEY` for rolling/multi-region deploys.
- **Principles**: R-REND-3.
- **Informs**: PDP, Home, any static page with personalized fragments.
- **Source**: https://docs.astro.build/en/guides/server-islands/

### B3. Next.js 16 — Cache Components / PPR (framework direction)
- **Facts**: Next.js 16 (2025-10-21) introduced Cache Components (`"use cache"`, `cacheLife`, `cacheTag`) completing PPR (static shell + streamed dynamic parts); caching is opt-in (nothing cached unless declared); middleware → `proxy.ts`; React Compiler support stable. 16.4 recommends Cache Components for every app and states it will be the default in Next.js 17; Partial Prefetching (16.3) prefetches a reusable loading shell for instant navigations.
- **Principles**: R-REND-2, R-REND-3, R-PERF-8.
- **Sources**: https://nextjs.org/blog/next-16 · https://nextjs.org/blog/next-16-4

---

## C. App data, real-time & collaboration

### C1. Linear — local-first sync engine
- **Implementation** (from a reverse-engineering study endorsed by Linear's CTO as correct): in-memory observable object graph (MobX) persisted to IndexedDB; models have load strategies (instant at bootstrap, lazy, partial on demand, explicitly requested, local-only); user actions update local state immediately and are queued as transactions; server pushes delta packets over WebSocket; transaction-based undo/redo.
- **Outcome**: perceived-instant UI for all edits; offline-capable.
- **Principles**: R-REND-6, R-MUT-2, R-RT-2.
- **Informs**: Editor, Dashboard/issue lists, Feed, any high-frequency CRUD app. Caveat: high complexity — adopt only for interaction-dense products.
- **Source**: https://github.com/wzhudev/reverse-linear-sync-engine

### C2. Notion — CRDT for concurrent rich-text editing (2025)
- **Context**: blocks were separate DB records with last-write-wins; concurrent edits in the same block lost changes; offline mode would worsen this.
- **Implementation**: CRDT based on Replicated Growable Array (stable IDs per text item, tombstones for deletes, Lamport clocks + session ids); rich-text annotations via Peritext-based operations; new concepts ("text slices", "text instances") to support splitting/merging text across blocks concurrently.
- **Principles**: R-RT-4.
- **Informs**: Editor, collaborative forms, comments.
- **Source**: https://www.notion.com/blog/how-notion-handles-concurrent-editing-with-crdts

### C3. Slack — real-time messaging
- **Implementation**: each client keeps a persistent WebSocket; Gateway Servers (stateful, geo-distributed) hold subscriptions; Channel Servers (stateful, consistent-hashed by channel) hold channel history; messages go web API → Admin Server → Channel Server → all Gateway Servers → subscribed sockets; transient events (typing) follow a separate non-persisted flow.
- **Principles**: R-RT-1, R-RT-2, R-RT-3.
- **Informs**: Messages/Chat, Notifications, Feed.
- **Sources**: https://slack.engineering/real-time-messaging · https://www.infoq.com/news/2023/04/real-time-messaging-slack/

### C4. Shopify Hydrogen — progressively enhanced optimistic cart
- **Implementation**: cart controls are plain HTML `<form>`s with real `method`/`action` posting to `/api/cart` (work without JS; first add sets cart cookie); a client cart store applies an optimistic projection immediately, tracks pending lines/discounts, scopes errors to the affected line; `useOptimisticCart` marks optimistic lines (`isOptimistic`) so their actions are disabled until confirmed.
- **Principles**: R-MUT-1, R-MUT-2, R-STATE-1.
- **Informs**: Cart, PDP add-to-cart, any list with quick mutations.
- **Sources**: https://shopify.dev/docs/storefronts/hydrogen/cart · https://shopify.dev/docs/api/hydrogen/latest/hooks/useoptimisticcart

### C5. Stripe Checkout — webhook-driven fulfillment
- **Implementation**: fulfill on `checkout.session.completed` and `checkout.session.async_payment_succeeded` webhooks; the landing (success) page may also trigger the same function; `fulfill_checkout` must be safe to run multiple times and concurrently for the same session; never rely only on the success URL (users may close the tab; malicious users can hit it directly).
- **Principles**: R-MUT-3, R-MUT-4.
- **Informs**: Checkout, Order confirmation, Billing.
- **Source**: https://docs.stripe.com/checkout/fulfillment

---

## D. UX research with implementation impact

### D1. Baymard Institute — checkout
- **Findings**: average checkout 5.1 steps and 11.3 form fields (2024) while most sites need ~8; 17% of users abandoned due to checkout complexity; ideal flow can be as small as 12 form elements vs 23.48 average displayed (14.88 fields); average large site could gain ~35% conversion via checkout design; global cart abandonment ~70%; guest checkout often not the most prominent option.
- **Implementation implications**: field minimization (hide redundant fields, auto-detect city/state from postal code, address lookup), guest-first account step, early full cost disclosure, linear flow, specific error recovery.
- **Informs**: Cart, Checkout, Sign-up during checkout.
- **Sources**: https://baymard.com/research-articles/checkout-flow-average-form-fields · https://baymard.com/research-articles/ecommerce-checkout-usability-report-and-benchmark

---

## E. Security & identity

### E1. React2Shell (CVE-2025-55182) — RSC supply-chain risk
- **Facts**: disclosed 2025-12-03; CVSS 10; unauthenticated RCE through unsafe deserialization at React Server Function endpoints; affected react-server-dom-* 19.0–19.2.0 and frameworks bundling them (Next.js App Router, Vite/Parcel RSC plugins, React Router unstable RSC APIs, Waku, Redwood SDK); apps without a server are unaffected; fixed in 19.0.1/19.1.2/19.2.1; added to CISA KEV.
- **Lesson**: server-rendering frameworks expand attack surface; patch cadence and dependency monitoring are architecture concerns.
- **Principles**: R-DATA-3, R-DATA-5.
- **Sources**: https://react.dev/blog/2025/12/03/critical-security-vulnerability-in-react-server-components · https://nvd.nist.gov/vuln/detail/CVE-2025-55182

### E2. CVE-2025-29927 — middleware-only authorization bypass (Next.js self-hosted)
- **Lesson**: authorization must be enforced in the data layer, not only in routing middleware.
- **Principles**: R-DATA-1, R-DATA-2.
- **Source**: https://cheatsheetseries.owasp.org/cheatsheets/Nextjs_Security_Cheat_Sheet.html

### E3. NIST SP 800-63B-4 (final, published July 2025 / announced Aug 1 2025)
- **Implementation-relevant**: composition rules prohibited ("shall not"); length-based policy (15-char minimum when password is the only factor per secondary summaries); change only on evidence of compromise; syncable authenticators (synced passkeys) integrated; phishing resistance central at higher assurance.
- **Informs**: Sign-up, Login, Recovery, Settings (change password).
- **Sources**: https://csrc.nist.gov/pubs/sp/800/63/b/4/final · https://pages.nist.gov/800-63-4

---

## F. Content, docs & agents

### F1. Mintlify-hosted docs (e.g., Anthropic, Cursor, Pinecone) — llms.txt
- **Implementation**: automatic `/llms.txt` (page index), `/llms-full.txt` (all content), `.md` per page; llms.txt v2 adds `rel="alternate" type="text/markdown"` per page and `rel="describedby"` to the index. Fern deliberately omits llms-full.txt because full sites exceed context windows.
- **Principles**: R-STAT-8.
- **Informs**: Documentation, Article, Help center.
- **Sources**: https://github.com/AnswerDotAI/llms-txt · https://context7.com/llms-txt-documentation-platforms

### F2. Chrome Modern Web Guidance 1.0 (Nov 2026) — agent skill for web best practices
- **Facts**: cross-browser effort (Chrome, Firefox, Edge); 200+ guides with Baseline data; evals: unguided agents ~52% vs guided ~91% pass rate. Adopters: note inc. (pass rate on modern-web checks 61% → 94% across 180 runs; LCP image prioritization +28% across 431 PRs), MetaMask (PR review bot; 43 findings fixed, median 15 min), WeTV/Tencent (agent in CI fixing ~90% of failed perf checks; resolution time −87%), Pensionbazaar (turnaround >90% faster).
- **Relevance to this skill**: use its failure-mode list (file 01 §8) as a review checklist; consider recommending it alongside this skill.
- **Sources**: https://developer.chrome.com/blog/modern-web-guidance-v1 · https://developer.chrome.com/blog/top-10-things-ai-gets-wrong-in-web-dev

---

## G. Quick index: page type → case studies

| Page type | Case studies |
|---|---|
| Landing / Home | A6, A3, A7, B1, B2 |
| Catalog / Category | A1, A3, A4, A6 |
| Product detail | A3, B2, C4, A6 |
| Search results / Map | A1, A2 |
| Cart | C4, A4 (cache clear), D1 |
| Checkout / Confirmation | C5, D1 |
| Auth pages | E3 |
| Editor | C2, C1 |
| Chat / Notifications / Feed | C3, C1 |
| Dashboard / Admin | A1 (filters/INP), E1, E2, C1 |
| Article / Blog | A5, B1 |
| Docs | F1 |
| All (review process) | F2, B3 |
