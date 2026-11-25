# Implementation

Reference for `modern-design`. Load it in step 1 when the brief has to choose a stack or decide between a static site and an app, and in step 3 before building pages and components. It covers how a page is built, not how it looks: rendering, state, reuse, performance, accessibility and the legal minimum. Each file in `pages/` has an "Implementation" subsection per page type; the summary table is at the end of this file.

> **Order of authority:** ethics (`ethics.md` and `content-truth.md`, hard limits) > `site-decisions.md` (what exists and what the user decided) > `design-brief.md` > `reasoning.md` (method for writing the brief) > the other references (`principles.md`, `pages/`, `sections/`, `implementation.md` and the rest, consulted afterwards). When two disagree, the higher one wins; a user decision that breaks either hard limit is declined with the reason.

**How strong each rule is.** MUST is used only for security, accessibility and legal requirements, and for the truth rule in `ethics.md` (never show something as done or true when it may not be). Everything else is SHOULD: the default, which you may leave when the project has a reason; write the reason in the brief or, when the user decided it, in `site-decisions.md`.

**Dates.** Framework facts are as of November 2026 and age fast. Facts marked "verify before citing" were not checked against the framework's own release notes; check them before you quote them to the user or base a decision on them.

## 1. Rendering, decided per route

Choose how each route is rendered, and then each component inside it, never once for the whole site. From cheapest to most expensive at run time:

| Mode | HTML produced | Fits |
|---|---|---|
| Static generation | At build time | Content that is the same for everyone and changes less often than you deploy: marketing, legal, docs, blog |
| Static with revalidation | At build time, then regenerated after a change (on a webhook, or after a time limit) | Large catalogues, prices, news |
| Static shell with dynamic holes | Shell at build time; small parts per request (server islands, partial prerendering) | A product page with live stock, a home page with an avatar |
| Server rendering, streamed | Per request; slow parts stream in later | Pages behind a login, dashboards, search results |
| Client islands | In the browser, only for the components that need it | A carousel, a form, a map, a cart badge |
| Client app | In the browser | Editors and heavy tools |
| Local-first sync | A local copy in the browser, synced with the server | Issue trackers, collaborative tools |

How to choose, per route:

1. Is the content the same for every visitor? When it is and it changes less often than you deploy, generate it statically. When it changes more often, regenerate on change.
2. When most of the page is shared and only small parts are personal or slow, keep a static shell and render those parts as holes. Each hole reserves its final size, so nothing shifts when it arrives.
3. When the whole page depends on who is looking, render it on the server and stream it.
4. Then, per component: ship JavaScript only for components that need interaction, and hydrate them when they become visible, when the browser is idle, or on first interaction.

SHOULD: default every route to static and move away only when a requirement forces it. SHOULD: keep the hole fallbacks the same size as the content they hold.

### Static site or app

A **static site** is HTML built ahead of time and served from a CDN, with no application server. It can still call third-party services and serverless functions (a form endpoint, a booking widget). It can't render per request, keep sessions or regenerate pages on its own. An **app** has a server that knows who the user is.

Decide in step 1 and write it in the brief. Pages that need a session (cart, checkout, account, dashboards) are app pages; a static site either leaves them out or embeds a hosted service (a hosted cart, a hosted login). The "Static" line of each page type in `pages/` says which.

### Frameworks (November 2026)

Examples only; the principles above don't depend on any of them.

| Need | Astro | Next.js 16 | Nuxt | SvelteKit | React Router 7 | TanStack Start |
|---|---|---|---|---|---|---|
| Static by default | Default | Static unless the route needs request data | `prerender` or route rules | `prerender = true` | Prerender config | Static prerender |
| Dynamic holes | Server islands (`server:defer`) | Partial prerendering through Cache Components | `<NuxtIsland>` | Streamed promises | Deferred loaders | Streamed server rendering |
| Interactive parts | `client:*` islands | `"use client"` components | Components | Components | Components | Components |

- Next.js 16 (October 2025) introduced Cache Components and renamed middleware to `proxy.ts`. Next.js 16.4 recommends Cache Components for every app and says they will be the default in Next.js 17 (verify before citing).
- TanStack Start reached 1.0, stable, in October 2026 (verify before citing).
- Astro suits content-first sites with a few interactive parts; the others suit products that are mostly app.

## 2. Static sites

These apply to static sites and to the static routes of an app.

- SHOULD: build complete, semantic HTML whose content is readable without JavaScript. Search engines, agents and visitors on bad connections all read it.
- SHOULD: keep content in typed collections (validated frontmatter or CMS models) and render pages from templates over them, never by copying page HTML.
- SHOULD: build marketing pages as an ordered list of typed section blocks (hero, proof, benefits, pricing, FAQ, call to action) from one registry, so the same section has one implementation on every page. The blocks are the files in `sections/`.
- SHOULD: send forms to an endpoint (serverless function, form service, framework action) that works without JavaScript, and redirect to a thank-you page after the post.
- MUST: keep secrets out of anything shipped to the browser.
- SHOULD: return real status codes from the host: 404 for missing pages (with a custom page), 410 for removed ones, 301 for moved ones. A "not found" page served with 200 is a soft 404.
- SHOULD: generate sitemap, feeds, structured data and share images at build time; for docs, also `llms.txt` and a Markdown version of each page.
- SHOULD: keep pages eligible for the back/forward cache (no `unload` handlers, no `no-store` on public pages).
- SHOULD: add cross-document view transitions and speculation rules as progressive enhancement, with view transitions gated behind `prefers-reduced-motion: no-preference`.

## 3. Apps: kinds of state

Classify every piece of state before writing it, and keep each kind in its own place:

| Kind | Source of truth | Example |
|---|---|---|
| Server data | The database, through the server | Orders, users, products |
| URL state | Path and query parameters | Filters, sort, page, tab, selected item, date range, map area |
| Form state | The form itself (`FormData`) | A profile being edited |
| Interface state | The component | An open menu |
| Session | An HttpOnly cookie, read on the server | User and organisation |
| Preferences | A cookie when the server needs it, local storage otherwise | Theme, density |
| Local copy | IndexedDB, through a sync engine | Linear-style apps |

- SHOULD: cache server data with keyed queries and invalidate the keys after a change, rather than copying it into a global client store.
- SHOULD: put anything a person would share or bookmark in the URL, with one typed parser used by both server and client. Debounce text inputs.
- MUST: never put secrets or personal data in URLs.
- MUST: keep sessions in HttpOnly, Secure, SameSite cookies.
- SHOULD: build changes as real forms that work before JavaScript loads, then add pending and optimistic states on top.
- SHOULD: use optimistic UI (showing the result before the server confirms it) only for small, reversible, frequent actions (add to cart, like, rename).
- MUST: never use optimistic UI for actions that are irreversible or move money, such as paying, deleting an account or sending an invoice: show an explicit pending state and wait for the server's confirmation. Showing "order placed" before the server confirms it can be false, which breaks the truth rule in [`ethics.md`, section 1](ethics.md#1-decision-rule-legitimate-persuasion-vs-dark-pattern).
- SHOULD: give every route its own loading, error and not-found states, and give each dashboard widget its own error boundary, so one failure doesn't blank the page. Every list has loading, first-use empty, no-results, error and partial states (`pages/states-system.md`, Empty state).

## 4. Reuse layers

The layers match the four levels in `docs/ARCHITECTURE.md` (tokens, components, sections, pages). Each layer uses only the layers below it.

| Level | What lives there | In this plugin |
|---|---|---|
| Tokens | Color, type, spacing, radii, shadows, motion, breakpoints, defined once | `tokens.md` |
| Components | Accessible primitives (native elements or a headless library) and the project's own styled components built on them: button, field, card, table, dialog | `components/` (later batch) |
| Sections | Patterns and blocks made of components: hero, pricing table, filter bar, data table, empty state, auth form | `sections/` |
| Pages | Layouts (marketing, app shell, docs, auth, checkout) and the routes that compose sections and load their data | `pages/` |

- SHOULD: before creating a component, section or page, check the inventory in `site-decisions.md` for one to reuse or extend.
- SHOULD: define tokens once in a tool-neutral form and expose them as CSS custom properties (`tokens.md`); for several platforms, use the Design Tokens Community Group format 2025.10 (a community group report, not a W3C standard). Use tiers: base values, then semantic roles, then component tokens; themes swap only the semantic tier.
- SHOULD: own the component source (the shadcn/ui model) instead of wrapping a library and fighting its styles, and keep one prop vocabulary across components (`size`, `variant`).
- SHOULD: make components responsible for their own responsive behavior with container queries, and let layouts own the space between them.
- SHOULD: keep one source for business catalogues used on several pages (plans and prices, navigation, legal versions, the cookie list), so pricing, checkout and billing never disagree.
- SHOULD: give each shell (marketing, app, auth, checkout) its own layout, loading only its own scripts and styles.

## 5. Platform features and agent mistakes

Prefer what the browser already does over custom JavaScript. A short check before handing off:

- [ ] Modals use `<dialog>`; menus and tooltips use `popover`; accordions use `<details>`.
- [ ] Focus moves into a new view or dialog and returns to its trigger on close.
- [ ] Reduced motion covers smooth scrolling, scroll-driven animation and view transitions, not only CSS animations.
- [ ] Form errors appear after the user interacts (`:user-invalid`), hints sit above the field, and `aria-invalid` matches what is shown.
- [ ] `<meta name="color-scheme">` is set, themes include "system", and colors use `light-dark()` where supported.
- [ ] Media and embeds reserve their space; full-height sections use `svh` or `dvh`.
- [ ] Swipes and carousels use scroll snapping, not pointer-move physics.
- [ ] No hand-written HTML sanitizer.

For depth, use Chrome's [Modern Web Guidance](https://developer.chrome.com/docs/modern-web-guidance) alongside this plugin: an agent skill with guides on these features and the mistakes agents make with them. At its 1.0 release, one agent ("Agent One") was reported to pass 60.8% of 19 checks with no guidance, 76.5% with the skill installed and 94.0% when the prompt named the skill ([Search Engine Journal](https://www.searchenginejournal.com/google-releases-modern-web-guidance-1-0-for-ai-coding-agents/596495/)); one agent and 19 checks, so read it as direction, not as a general rate. `design-review` measures some of the same signals in `outdated-checklist.md`.

## 6. Performance

- SHOULD: aim for the Core Web Vitals at the 75th percentile of real visits: LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1. Measure real visits when the site has traffic; lab runs are a worst case.
- SHOULD: put the largest element of the first screen in the HTML, give its image `fetchpriority="high"`, never lazy-load it, and lazy-load images below the fold.
- SHOULD: give every image, video and embed its dimensions or `aspect-ratio`, and adjust fallback font metrics so the swap doesn't move text.
- SHOULD: host fonts on the site's own domain instead of loading them from a font service (see OM13 in `design-review`'s `outdated-checklist.md`).
- SHOULD: keep interactions responsive: show feedback before heavy work, split long tasks, cancel stale requests.
- SHOULD: remove or defer third-party scripts, and avoid client-side A/B snippets that hide the page while they decide.

## 7. Accessibility

Target WCAG 2.2 AA. Under the European Accessibility Act, B2C commerce in the EU must be accessible (`ethics.md`, section 3).

- MUST: use semantic elements for what they are: buttons, links, forms with labels, tables for tabular data, landmarks, one continuous heading outline.
- MUST: manage focus when the view changes, keep a visible focus indicator with at least 3:1 contrast, and make background content inert behind a modal.
- MUST: honour `prefers-reduced-motion` for every kind of motion, without hiding content.
- MUST: build forms as [`sections/forms.md`](sections/forms.md#accessibility) says: persistent labels, errors linked to their field, an error summary on submit, and the right `autocomplete` and `inputmode` (its "Accessibility" section and keyboard row). Two points it doesn't spell out: put format hints above the field, linked with `aria-describedby`, where the on-screen keyboard and autofill can't cover them; and keep `aria-invalid` in sync with the error on screen, set and cleared together.
- MUST: keep text contrast at 4.5:1 (3:1 for large text) and pointer targets at least 24 × 24 CSS px, or spaced as WCAG 2.5.8 allows. SHOULD: 44 × 44 px for primary actions under `(pointer: coarse)` (`tokens-space.md`).
- SHOULD: announce results that arrive later (search counts, saved states, new messages) in a live region.

## 8. Legal minimum

- MUST: load no non-essential tracking before consent, and make rejecting as easy as accepting (`ethics.md` and `pages/legal.md`, cookie policy and consent banner).
- MUST: show the total price, with compulsory charges, wherever a price appears, from one source shared with checkout (`ethics.md`, sections 3 and 6).
- SHOULD: keep legal documents versioned with an effective date, and record which version each user accepted.
- SHOULD: keep the consent banner from becoming the largest element of the first screen or from shifting the layout.

## 9. Boundaries

This plugin does not review security. A site with a backend needs, at least, all of these, and none of them is checked here:

- one server-side data access layer that authenticates and authorises every read and write, instead of relying on route guards or middleware;
- a strict Content Security Policy and the other security headers;
- server-side validation, rate limits and bot protection on every endpoint;
- an idempotency key for each payment attempt, so a retry never charges twice, and webhooks that tolerate duplicate and concurrent deliveries; the payment provider's documentation says how to do both;
- prompt patching of framework and server-rendering dependencies;
- for collaborative or offline products, a sync engine or CRDTs, which are architecture decisions in their own right.

When the project has a backend, tell the user these need their own review, and point to the [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/) and the security guide of their framework.

## 10. Summary by page type

Static: yes (fully static), partial (static page plus an endpoint, widget or island), app (needs a server and a session; a static site leaves it out or embeds a hosted service).

| Group | Page | Static | Default rendering | JavaScript | Indexed |
|---|---|---|---|---|---|
| Entry & marketing | Landing | Yes | Static | Almost none; form island | Yes |
| | Home | Yes, or partial | Static, with holes for personal parts | Low | Yes |
| | About | Yes | Static | Almost none | Yes |
| | Pricing | Yes | Static, regenerated when prices change | Low | Yes |
| | Coming soon / Waitlist | Partial | Static plus form endpoint | Almost none | Optional |
| Content & navigation | Catalogue / Listing | Yes (small) or regenerated | Static or regenerated; filtered views on the server | Low to medium | Canonical pages only |
| | Category | Yes, or regenerated | Regenerated on change | Low | Yes |
| | Product / Detail | Yes, or partial | Static shell with holes for price, stock and reviews | Low to medium | Yes |
| | Search results | Partial | Server or client against a search index | Medium | Usually not |
| | Map | Partial | Static page plus a lazy map island | High, in the island | Page yes |
| | Calendar / Booking | Partial (public list) or app | Static list, or server-rendered app | Medium to high | Public list yes |
| Commerce | Cart | App, or partial with a hosted cart | Server, private, optimistic | Medium | No |
| | Checkout | App | Server, no cache, provider payment fields | Medium | No |
| | Order confirmation | App | Server, reading the order | Low | No |
| | Order history | App | Server behind login, paginated | Low | No |
| Authentication | Sign-up, login, recovery, verification | App, or partial with hosted auth | Server, or a static form posting to an auth service | Low | Login yes; the rest no |
| | Onboarding | App | Server, one URL per step | Medium | No |
| User & account | Profile, settings, billing, notifications | App | Server plus forms | Low to medium | No (a public profile yes) |
| Interaction & creation | Form / Creation | Partial (submit only) or app | Server plus actions | Medium | No |
| | Editor | App | Client-heavy route inside a server shell | High | No |
| | Messages / Chat | App | Server shell plus real-time | High | No |
| | Feed / Activity | App, or partial for a public feed | Server with cursor pagination | Medium | Public yes |
| Management & admin | Dashboard, analytics, admin, team | App | Streamed server, one boundary per widget | Medium to high | No |
| Blog & resources | Article list, article, docs | Yes | Static, regenerated from a CMS | Almost none | Yes |
| Support & contact | Contact | Partial | Static plus form endpoint | Almost none | Yes |
| | FAQ / Help | Yes | Static | None | Yes |
| | Support centre / Tickets | Partial (articles) or app (tickets) | Static articles, server tickets | Low to medium | Articles yes |
| Legal | Terms, privacy, cookies | Yes | Static, plus a consent banner island | Almost none | Yes |
| States & system | 404, 500, maintenance | Yes | Static fallback with the right status code | Almost none | No |
| | Empty state | Component, not a page | Part of every list | n/a | n/a |
| | Success / Thank-you | Yes (generic) or app (order) | Reached by redirect after a post | Almost none | No |

## Sources

Written in our own words from the author's implementation research (written with Claude, MIT) (four documents, November 2026; see `docs/SOURCES.md`, "Implementation research"), which summarises framework documentation, web.dev, MDN, OWASP and published case studies. The case studies are listed with their URLs in `docs/SOURCES.md`. Modern Web Guidance is linked, not copied.
