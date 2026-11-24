# 02 — Page-Type Implementation Matrix

> Rules referenced by ID are defined in `01_foundations_architecture.md`.
> Per-page schema: **Static** (viability on a fully static site) · **Render** · **Data/State** · **Priorities** (ranked; first = most important) · **Weighting vs baseline** (↑ matters more, ↓ matters less) · **Anti-patterns** · **Reuse** (shared components/configs).
> Static viability: `YES` = fully static · `PARTIAL` = static page + external endpoint/island · `NO (APP)` = requires backend & auth; omit from pure static sites.

---

## 0. Global summary matrix

| Category | Page | Static | Default render | JS budget | Cache | Auth | Indexable |
|---|---|---|---|---|---|---|---|
| Entry/marketing | Landing | YES | SSG | ~0 + form island | CDN long + revalidate | no | yes |
| | Home | YES / PARTIAL | SSG/ISR + personalization holes | low | CDN shell | optional | yes |
| | About | YES | SSG | ~0 | CDN long | no | yes |
| | Pricing | YES | SSG/ISR (tag on price change) | low | CDN + tag | no | yes |
| | Coming soon / waitlist | PARTIAL | SSG + form endpoint | ~0 + form | CDN | no | yes/optional |
| Content/navigation | Catalog / listing | YES (small) / ISR | ISR, SSR for filtered | low–med | CDN per URL | no | canonical pages only |
| | Category / collection | YES / ISR | ISR | low | CDN + tag | no | yes |
| | Product / detail | YES / PARTIAL | static shell + dynamic holes | low–med | shell CDN, holes private | no | yes |
| | Search results | PARTIAL | SSR or CSR vs search API | med | short/none | no | usually noindex |
| | Map | PARTIAL | static page + lazy client island | high (island) | data API cache | no | page yes, tiles n/a |
| | Calendar / agenda | PARTIAL (public list) / APP | SSG list or SSR app | med–high | varies | optional | public yes |
| Commerce | Cart | NO (APP) / PARTIAL (3rd-party cart) | SSR + optimistic | med | private/no-store | session | noindex |
| | Checkout | NO (APP) | SSR + provider elements | med | no-store | session/guest | noindex |
| | Order confirmation | NO (APP) | SSR reading order state | low | no-store | session/token | noindex |
| | Order history | NO (APP) | SSR auth, paginated | low | private | yes | noindex |
| Auth | Sign up / Login / Recovery / Verify | NO (APP) / PARTIAL (hosted auth) | SSR or static form + auth API | low | no-store | n/a | login yes, rest noindex |
| | Onboarding | NO (APP) | SSR steps | med | private | yes | noindex |
| User/account | Profile, Settings, Billing, Notifications | NO (APP) | SSR + forms | low–med | private | yes | noindex (public profile: yes) |
| Interaction/creation | Form/creation | PARTIAL (submit-only) / APP | SSR + actions | med | private | usually | noindex |
| | Editor | NO (APP) | client-heavy route | high | n/a | yes | noindex |
| | Messages/chat | NO (APP) | SSR shell + realtime | high | private | yes | noindex |
| | Feed/activity | NO (APP) / PARTIAL (public feed) | SSR + cursor pagination | med | private / ISR public | varies | public yes |
| Management | Dashboard, Analytics, Admin, Users/Team | NO (APP) | streaming SSR, widget boundaries | med–high | private, per-tenant | yes (RBAC) | noindex |
| Blog/resources | Article list, Article, Docs | YES | SSG (+ISR if CMS) | ~0 + islands | CDN long + tag | no | yes |
| Support | Contact | PARTIAL | SSG + form endpoint | ~0 + form | CDN | no | yes |
| | FAQ / Help | YES | SSG | ~0 | CDN | no | yes |
| | Support center / tickets | PARTIAL (articles) / APP (tickets) | SSG articles + SSR tickets | low–med | mixed | tickets yes | articles yes |
| Legal | Terms, Privacy, Cookies | YES | SSG | ~0 (+ consent banner) | CDN | no | yes |
| States/system | 404, 500, Maintenance, Empty, Success | YES (404/500/maint) | static fallback HTML | ~0 | special | n/a | no |

---

## 1. Category weighting (how the principle mix shifts)

Scale: H = dominant concern, M = important, L = minor. Use to decide trade-offs.

| Category | Load perf (LCP/CLS) | Interaction (INP) | SEO / crawlability | Security / privacy | Data freshness | Accessibility | Reuse leverage | Offline / resilience |
|---|---|---|---|---|---|---|---|---|
| Entry & marketing | H | L | H | L | L–M (pricing M) | H | H (section blocks) | M (must work w/o JS) |
| Content & navigation | H | M–H (filters, maps) | H | L | M–H (price/stock) | H | H (listing/card system) | M |
| Commerce | M | H | L (noindex) | H | H | H | M | H (idempotency, no double-charge) |
| Authentication | M | M | L | H | L | H | M (AuthForm) | M (works without JS) |
| User & account | L–M | M | L | H | M | H | H (settings form pattern) | L |
| Interaction & creation | L–M | H | L | H (sanitization) | H (real-time) | H | M | H (drafts, reconnection) |
| Management & admin | L–M | H (tables/charts) | none | H (RBAC, audit) | H | H (tables, keyboard) | H (DataTable, FilterBar) | M |
| Blog & resources | H | L | H (+ AI agents) | L | L | H | H (content collections) | M |
| Support & contact | M | L | M | M (spam, PII) | L–M | H | M | M |
| Legal | M | L | M | M (consent compliance) | L (versioned) | H | M (doc template) | H (static) |
| States & system | M | L | H (status codes) | M (no stack traces) | n/a | H | H (state components) | H (must not depend on failing system) |

Key differences in one line each:
- Marketing/content/blog/legal: static-first, zero-JS, SEO and LCP dominate; reuse via section blocks and content collections.
- Commerce: correctness > speed; server-authoritative totals, idempotency, webhook truth; optimistic only for cart.
- Auth: standards-driven (NIST/OWASP/WebAuthn); native forms + autofill; anti-enumeration; no client trust.
- Account/admin/dashboards: authorization in DAL, per-tenant caching, URL state for views, per-widget error isolation.
- Creation/chat/feeds: interaction latency and data consistency dominate; optimistic UI, real-time transport, CRDTs, virtualization.
- System states: must be independent of the failing subsystem and must send correct HTTP status.

---

## 2. Entry & marketing

### Landing page
- **Static**: YES.
- **Render**: SSG. Variants/A-B at edge (rewrite to prerendered variant), not client anti-flicker (R-PERF-7).
- **Data/State**: content from CMS/collection as typed section blocks (R-STAT-3); lead form posts to endpoint/action (R-STAT-4).
- **Priorities**: 1) LCP: hero image/text in HTML, `fetchpriority="high"`, no lazy (R-PERF-2) · 2) zero JS by default; form as island (R-REND-5) · 3) CLS-safe media/fonts (R-PERF-3) · 4) consent-aware analytics (see Legal) · 5) speculation rules prerender on primary CTA target (R-STAT-6) · 6) OG/JSON-LD.
- **Weighting**: ↑ LCP, SEO, third-party script discipline. ↓ state management.
- **Anti-patterns**: SPA-rendered landing; carousels as LCP with transitions delaying the LCP image (Nuvemshop lesson); heavy animation libraries for scroll effects (use scroll-driven animations + reduced motion).
- **Reuse**: Section block registry (`Hero`, `LogoCloud`, `FeatureGrid`, `Testimonials`, `PricingTable`, `FAQ`, `CTA`), `LeadForm`, `MarketingLayout`.

### Home / Inicio
- **Static**: YES (marketing home) / PARTIAL (personalized modules).
- **Render**: SSG or ISR shell + server islands/PPR for per-user modules (cart count, avatar, "continue where you left off") (R-REND-3). For logged-in products, server-redirect authenticated users to the app dashboard.
- **Priorities**: 1) cacheable shell 2) personalized holes with reserved size 3) navigation prefetch/prerender to top categories 4) same block system as landing.
- **Anti-patterns**: making the entire home dynamic because of one avatar; client-fetching above-the-fold content.
- **Reuse**: same section blocks; `UserMenu` server island; `RecentlyViewed` island.

### About / Sobre nosotros
- **Static**: YES. **Render**: SSG.
- **Priorities**: semantic content, structured data (Organization), image optimization, accessible team grids.
- **Weighting**: ↓ everything dynamic; ↑ content modeling (team members as a collection).
- **Reuse**: block system, `PersonCard` from collection.

### Plans & pricing / Planes y precios
- **Static**: YES.
- **Render**: SSG/ISR; revalidate by tag when the billing catalog changes (webhook from billing provider) (R-REND-2).
- **Data/State**: single source of truth `plans` config/catalog shared with checkout, billing page and server entitlement checks (R-REUSE-7). Monthly/annual toggle via native radio + CSS (`:has(:checked)`) or tiny island; reflect choice in URL (`?billing=annual`) for shareability (R-STATE-2).
- **Priorities**: 1) price correctness (one source) 2) currency/locale formatting (`Intl.NumberFormat`), region pricing decided at edge or per-locale static variants 3) comparison table as real `<table>` with headers/scope 4) CTA links carry plan id to checkout (server re-validates price) 5) structured data where applicable.
- **Weighting**: ↑ data consistency vs. other marketing pages.
- **Anti-patterns**: hard-coded prices in markup duplicated across pages; computing final price client-side and trusting it at checkout.
- **Reuse**: `PricingTable`, `PlanCard`, `FeatureComparison`, `plans.ts`.

### Coming soon / Waitlist
- **Static**: PARTIAL (static page + form endpoint).
- **Render**: SSG.
- **Priorities**: 1) form works without JS (POST → redirect to thank-you) (R-MUT-1, R-MUT-6) 2) idempotent signup (unique email; same response if already registered) (R-MUT-4) 3) spam/bot protection + rate limit (R-SEC-5) 4) double opt-in email for consent 5) referral/position features only if needed (then APP).
- **Anti-patterns**: client-only form submission with no fallback; revealing whether an email already exists.
- **Reuse**: `LeadForm`, `SuccessState`, marketing layout.

---

## 3. Content & navigation

### Catalog / Listing
- **Static**: YES for small catalogs; ISR for large.
- **Render**: canonical listing pages SSG/ISR; filtered/sorted views SSR (or client-filter for small static datasets).
- **Data/State**: filters/sort/page in URL with a typed parser shared by server and client (R-STATE-2, R-STATE-3); results from DAL/search API.
- **Priorities**: 1) URL-addressable pagination (real `?page=` links; "Load more" may enhance) 2) card component with reserved image box, responsive `srcset/sizes`, lazy except first row 3) `content-visibility: auto` on long grids (R-PERF) 4) prefetch/prerender detail pages on hover/viewport (Ray-Ban: first tiles on mobile) 5) bfcache eligibility (back/forward is frequent on listings) (R-STAT-7) 6) canonical/noindex rules for facet combinations.
- **Weighting**: ↑ INP for filter interactions (yield, transitions, abort stale fetches — QuintoAndar).
- **Anti-patterns**: infinite scroll without URLs; filter state only in memory; client-side rendering of the whole grid.
- **Reuse**: `ProductCard`/`ItemCard`, `FilterBar`, `SortSelect`, `Pagination`, `EmptyState(no-results)`, `ListingTemplate` shared with Category and Search.

### Category / Collection
- **Static**: YES/ISR. **Render**: ISR with `cacheTag('category:<id>')`; revalidate on product/category change.
- **Priorities**: same template as Listing with category-specific header content block; breadcrumbs (+ BreadcrumbList JSON-LD); curated static landing pages for top facet combos.
- **Reuse**: `ListingTemplate`, `Breadcrumbs`, section blocks for editorial header.

### Product / Detail page (PDP)
- **Static**: YES (no live stock) / PARTIAL.
- **Render**: static shell (content, images, specs) + dynamic holes for price/stock/delivery estimate/reviews/recommendations (Astro server islands; Next PPR/Cache Components) (R-REND-3).
- **Data/State**: variant selection in URL (`?variant=`); add-to-cart as progressively enhanced form with optimistic cart update (R-MUT-1/2).
- **Priorities**: 1) LCP = main product image with `fetchpriority="high"` 2) dynamic holes with fixed-size fallbacks 3) Product/Offer JSON-LD 4) prerender from listing (Ray-Ban) 5) accessible gallery (native scroll-snap) 6) reviews deferred (`client:visible` or server island).
- **Anti-patterns**: SSR'ing entire PDP per request just for stock; image gallery libraries blocking main thread; variant changes that don't update URL.
- **Reuse**: `MediaGallery`, `VariantPicker`, `PriceBlock` (shared with cart & checkout formatting), `AddToCartForm`, `ReviewList`.

### Search results
- **Static**: PARTIAL (build-time index, client search) / APP (search API).
- **Render**: SSR from `?q=` for shareable/first-load results, or CSR island against search API; results template shared with Listing.
- **Priorities**: 1) query & facets in URL 2) debounce input, AbortController for stale requests, `useTransition`/yield for responsiveness (R-PERF-4) 3) announce result counts via live region 4) empty-no-results state with suggestions 5) `noindex` internal search pages (Google treats empty internal search results as soft-404 candidates).
- **Anti-patterns**: firing a request per keystroke without debounce/abort; rendering results only client-side with no URL.
- **Reuse**: `SearchInput`, `ListingTemplate`, `EmptyState(no-results)`.

### Map
- **Static**: PARTIAL (static page; map library as island; data from static GeoJSON or API).
- **Render**: page SSG/SSR; map as lazy client island (`client:visible`/on interaction); poster/static preview image first.
- **Data/State**: viewport (center/zoom/bbox) and selected marker in URL; query API by bbox; cluster server-side for large sets.
- **Priorities**: 1) don't let the map library hit LCP/INP of the page 2) accessible alternative list of locations (map is not the only way) 3) keyboard operability 4) throttle move events, cancel in-flight bbox queries.
- **Anti-patterns**: loading map SDK in `<head>`; markers only in canvas with no list equivalent.
- **Reuse**: `LocationList` (shares card with Listing), `MapIsland`, `PlaceCard`.

### Calendar / Agenda
- **Static**: PARTIAL (public events list + downloadable `.ics` generated at build) / APP (personal scheduling).
- **Render**: public: SSG/ISR list grouped by date; app: SSR month/week shell + client interactions.
- **Data/State**: store instants in UTC + IANA time zone per event; selected range/view in URL; optimistic move/resize with rollback (R-MUT-2).
- **Priorities**: 1) time-zone correctness (render in viewer tz, show event tz when different) 2) accessible grid (roving tabindex, R-A11Y-2) 3) list view alternative on small screens (container queries) 4) conflict detection server-side.
- **Anti-patterns**: storing local times without zone; drag-only interactions.
- **Reuse**: `DateRangePicker`, `EventCard`, `EmptyState`.

---

## 4. Commerce (APP; static sites can only embed a hosted cart/checkout)

### Cart / Carrito
- **Render**: server-authoritative cart (cart id in HttpOnly cookie); page SSR with `Cache-Control: private, no-store`; header cart badge as island/server island on static pages.
- **Priorities**: 1) progressive-enhanced forms (add/update/remove submit to a real endpoint without JS) with optimistic projection and per-line pending state (Shopify Hydrogen pattern) 2) server recomputes totals, discounts, taxes 3) show all costs early (unexpected extra costs are the top UX abandonment cause per Baymard) 4) if using prerender/prefetch, clear speculation caches on cart change (Shopify sends `Clear-Site-Data`) 5) persistent cart across devices for logged-in users.
- **Anti-patterns**: cart only in localStorage as source of truth; caching personalized cart HTML at CDN; trusting client prices.
- **Reuse**: `PriceBlock`, `LineItem`, `QuantityStepper` (native number input or buttons with live region), `CartSummary` (shared with checkout).

### Checkout / Pago
- **Render**: SSR, `no-store`; isolated route group with minimal third-party scripts and strict CSP (R-SEC-1); payment via provider-hosted fields/page (R-SEC-6).
- **Priorities**: 1) guest checkout as the most prominent option (Baymard) 2) minimal fields — research suggests ~8 fields suffice vs 11.3 average (Baymard 2024) 3) correct `autocomplete` tokens (`shipping street-address`, `cc-number` within provider fields, `email`, `tel`), `inputmode` 4) linear single-column flow, inline validation with `:user-invalid` + synced `aria-invalid` (R-A11Y-4) 5) idempotency key per payment attempt; disable double-submit (R-MUT-4) 6) server-side totals and inventory reservation 7) express wallets (Apple Pay/Google Pay/Link) as accelerators.
- **Weighting**: ↑ correctness, security, form UX; ↓ animation, SEO (noindex).
- **Anti-patterns**: optimistic "order placed" UI; custom JS card inputs; prerendering checkout; marketing pixels on payment step.
- **Reuse**: `AddressForm`, `Field`, `CartSummary`, `StepIndicator`, `CheckoutLayout`.

### Order confirmation / Confirmación
- **Render**: SSR, `noindex`, `no-store`; reads order by id from server (authorized by session or signed token).
- **Priorities**: 1) do NOT fulfill based on reaching the success URL — fulfill from webhooks; success page may also trigger the same idempotent fulfill function (Stripe) 2) handle `pending` states for async payment methods (bank transfers) with polling/SSE 3) dedupe conversion analytics on reload 4) clear cart server-side 5) clear next steps (email sent, tracking, account creation offer for guests).
- **Anti-patterns**: treating `?session_id=` presence as proof of payment; firing purchase events on every reload.
- **Reuse**: `SuccessState`, `OrderSummary`, `Timeline`.

### Order history / Historial de pedidos
- **Render**: SSR behind auth; cursor pagination; detail route per order.
- **Priorities**: DAL scoping by user/tenant (R-DATA-1); statuses updated from webhooks; filters in URL; re-order and invoice download as actions; empty-first-use state.
- **Reuse**: `DataTable` or `OrderCard` list, `StatusBadge`, `Pagination`, `EmptyState`.

---

## 5. Authentication (APP or hosted auth provider; static sites can host a form that posts to an auth service)

Common: `AuthLayout` route group, minimal JS, no third-party scripts, `no-store`, rate limits, generic errors, HttpOnly session cookies (R-SEC-3), redirect authenticated users server-side.

### Registro / Sign up
- **Priorities**: 1) native `<form>` with `<label>`s, `type="email"` + `autocomplete="username"`, password `autocomplete="new-password"` (web.dev) 2) NIST SP 800-63B-4: no composition rules ("shall not"), length-based policy (15+ chars when password is the sole authenticator), blocklist of breached/common passwords, no periodic rotation 3) show-password toggle; don't require double entry of email/password on sign-up 4) offer passkey creation right after sign-up (check `getClientCapabilities()`) 5) email verification with single-use, time-limited tokens; don't activate before verification (OWASP) 6) bot protection.
- **Anti-patterns**: disabling submit until valid; placeholder-as-label; complexity meters that enforce composition.
- **Reuse**: `AuthForm`, `PasswordField`, `Field`, shared password policy module used by sign-up/reset/change.

### Inicio de sesión / Login
- **Priorities**: 1) username field `autocomplete="username webauthn"` + conditional WebAuthn (`mediation: 'conditional'`) so passkeys and passwords coexist in autofill (web.dev) 2) password `autocomplete="current-password"` 3) after success navigate (or history push + remove form) so password managers save credentials 4) generic error ("email or password incorrect") 5) rate-limit/progressive delays, no hard lockout DoS 6) SSO/OAuth buttons as secondary options 7) keep sign-in button visible above mobile keyboard.
- **Anti-patterns**: hand-rolled base64url WebAuthn helpers (use `parseRequestOptionsFromJSON`); separate "login with passkey" page only.
- **Reuse**: `AuthForm`, `PasskeyButton`, `OAuthButtons`.

### Recuperar contraseña / Password recovery
- **Priorities** (OWASP): 1) identical message and response time whether or not the account exists (send email async) 2) token: CSPRNG, long, stored hashed, single-use, short expiry, invalidate older tokens 3) reset link host hard-coded (no Host-header injection) 4) no account lockout on reset requests 5) after reset: apply normal password policy, notify user, invalidate other sessions 6) rate-limit per account/IP.
- **Reuse**: `AuthForm`, `PasswordField`, password policy module, `SuccessState`.

### Verificación (email / 2FA)
- **Priorities**: 1) OTP input `autocomplete="one-time-code"`, `inputmode="numeric"`; WebOTP for SMS where available 2) prefer phishing-resistant factors (passkeys) — NIST rev.4 integrates syncable authenticators 3) TOTP + recovery codes; treat recovery as authentication (no weaker than login) 4) resend with cooldown; tokens single-use and time-limited.
- **Anti-patterns**: one input per digit without paste support; SMS as only factor for high-risk accounts.
- **Reuse**: `OtpField`, `AuthLayout`.

### Onboarding
- **Static**: NO (APP).
- **Render**: SSR steps; each step its own URL (`/onboarding/[step]`) so refresh/back work; progress persisted server-side (resumable).
- **Priorities**: 1) state machine on server (step order, skip rules) 2) progressive profiling (ask only what's needed now) 3) seed sample data / templates to avoid empty first-use 4) focus management between steps (R-A11Y-2) 5) analytics per step.
- **Anti-patterns**: client-only wizard state lost on reload; forced long questionnaires.
- **Reuse**: `StepIndicator` (shared with checkout), `Field`, `EmptyState(first-use)`.

---

## 6. User & account (APP)

### Perfil / Profile
- **Render**: SSR + form actions; public profile pages (if any) ISR with tag `user:<id>`.
- **Priorities**: optimistic for low-risk fields; avatar upload direct-to-storage via presigned URL + server validation (type/size) + image processing; sanitize bios; DAL ownership check.
- **Reuse**: `SettingsSection` form pattern, `AvatarUploader`.

### Ajustes / Settings
- **Priorities**: 1) settings grouped into sections, each an independent form/action (partial saves, independent errors) 2) explicit save for consequential settings; autosave with visible status for trivial toggles 3) theme: `<meta name="color-scheme" content="light dark">`, `light-dark()` tokens, tri-state (light/dark/system), sync tabs via `storage` event; store in cookie if SSR needs it to avoid flash 4) destructive actions (delete account) in `<dialog>` with re-authentication (step-up passkey with AbortController) 5) settings routes as URL sub-paths or `#hash` sections for deep links.
- **Reuse**: `SettingsLayout`, `SettingsSection`, `Toggle`, `ConfirmDialog`.

### Cuenta y facturación / Account & billing
- **Priorities**: 1) plan/entitlements derived server-side from billing webhooks, never from client 2) delegate payment-method management/invoices to the provider's customer portal where possible 3) same `plans` source as Pricing (R-REUSE-7) 4) proration preview from server 5) idempotent plan changes.
- **Anti-patterns**: checking subscription status only in the frontend; storing card data.
- **Reuse**: `PlanCard`, `PriceBlock`, `DataTable(invoices)`.

### Notificaciones / Notifications
- **Priorities**: 1) preference matrix (channel × event type) stored server-side 2) in-app inbox via SSE (server→client) with unread counts; persist first (R-RT-1/2) 3) Web Push: request permission only after a user gesture with context; iOS/iPadOS supports Web Push for Home-Screen web apps (16.4+), and Declarative Web Push (Safari 18.4+) works without a service worker 4) digesting/batching server-side 5) one-click unsubscribe links in emails.
- **Anti-patterns**: permission prompt on page load; polling every second.
- **Reuse**: `NotificationList` (shares Feed item primitives), `PreferenceMatrix` (DataTable variant).

---

## 7. Interaction & creation (APP)

### Formulario / Creación de contenido
- **Static**: PARTIAL for simple submit-only forms.
- **Priorities**: 1) one schema → server validation + client hints (R-MUT-5) 2) `:user-invalid` styling, `aria-describedby` hints above fields, error summary with links on submit (R-A11Y-4) 3) autosave drafts (server or IndexedDB) and restore 4) idempotent create (client-generated id) (R-MUT-4) 5) uploads: direct-to-storage, resumable/chunked for large files, progress via events 6) PRG on success.
- **Reuse**: `Field`, `FormSection`, `FileUploader`, `ErrorSummary`, `SuccessState`.

### Editor
- **Render**: client-heavy route (lazy-loaded bundle) inside SSR app shell; show read-only server-rendered content first if possible.
- **Priorities**: 1) choose editor framework with structured document model (ProseMirror/Tiptap, Lexical, Slate, Plate) 2) collaboration via CRDT (Yjs or custom; Notion moved to CRDT for concurrent edits and offline) (R-RT-4) 3) autosave with debounced persistence + version history 4) sanitize serialized HTML on render (R-SEC-2) 5) keyboard shortcuts with discoverability, roving tabindex toolbars 6) undo/redo as transactions 7) large documents: `content-visibility`, virtualization.
- **Anti-patterns**: `contenteditable` + `innerHTML` string storage; last-write-wins on shared docs.
- **Reuse**: `Toolbar` (roving tabindex), `CommandMenu` (popover + anchor positioning), `PresenceAvatars`.

### Mensajes / Chat
- **Render**: SSR shell + recent messages; real-time via WebSocket (bidirectional) or SSE (AI assistants streaming tokens).
- **Priorities**: 1) persist-first then fan-out; reconnect → HTTP catch-up from last cursor (Slack) (R-RT-1) 2) optimistic send with client-generated id, then reconcile (dedupe on server) 3) typing/presence as transient events (R-RT-3) 4) virtualized, reverse-chronological list with stable scroll anchoring 5) announce new messages politely (live region) 6) sanitize/linkify safely 7) attachments via presigned uploads.
- **Anti-patterns**: socket as source of truth; re-rendering entire thread per message.
- **Reuse**: `MessageItem`, `Composer` (shares `Field`, `FileUploader`), `VirtualList`.

### Feed / Actividad
- **Static**: PARTIAL for public, ISR-able feeds (e.g., changelog).
- **Priorities**: 1) cursor-based pagination with real "next" URLs 2) new items announced via banner ("N new"), not auto-inserted above viewport (CLS) 3) `content-visibility: auto` per item / virtualization 4) optimistic reactions 5) media dimensions reserved.
- **Reuse**: `FeedItem`, `ReactionBar`, `EmptyState`, `VirtualList`.

---

## 8. Management & administration (APP)

### Dashboard / Panel
- **Render**: streaming SSR; each widget its own Suspense + error boundary (R-REND-4, R-ERR-1); charts as client islands only where interactive.
- **Data/State**: date range, filters, tab in URL (shareable dashboards); cache per tenant with short TTL or tag revalidation; background refresh for live metrics via SSE/polling.
- **Priorities**: 1) widget isolation 2) skeletons sized to final layout 3) server-side aggregation (send numbers, not raw rows) 4) INP on filter changes (transitions) 5) RBAC-aware widget visibility (still enforced in DAL).
- **Reuse**: `AppShell`, `StatCard`, `ChartCard`, `FilterBar`, `DateRangePicker`.

### Analíticas / Informes
- **Priorities**: 1) pre-aggregate on server/warehouse; paginate/stream big tables 2) data grid with virtualization and `content-visibility`, keyboard navigation, sticky headers 3) exports as async jobs with notification/download link 4) charts with accessible data table fallback 5) consistent number/date formatting via shared `Intl` utilities.
- **Reuse**: `DataTable` (sorting/filtering state in URL), `ChartCard`, `ExportButton`.

### Panel de administración / Admin
- **Priorities**: 1) separate route group (or subdomain) with stricter CSP & session lifetime 2) RBAC/ABAC enforced in DAL for every read/write (R-DATA-1/2) 3) audit log for privileged mutations 4) bulk actions idempotent with confirmation `<dialog>` and progress 5) generated CRUD from a resource schema (list/detail/form from one definition) for scale 6) `noindex`.
- **Anti-patterns**: hiding admin buttons in UI as the only protection; admin pages in same bundle as public site.
- **Reuse**: resource-driven `ListView`/`DetailView`/`FormView` generated from schema; `DataTable`, `ConfirmDialog`.

### Gestión de usuarios / Equipo
- **Priorities**: 1) invitations with single-use, expiring tokens 2) role model with "last owner" protection 3) tenant scoping everywhere (R-DATA-6) 4) enterprise: SSO/SCIM integration via identity provider 5) seat counts tied to billing entitlements.
- **Reuse**: `DataTable(members)`, `RoleSelect`, `InviteForm`, `ConfirmDialog`.

---

## 9. Blog & resources

### Listado de artículos
- **Static**: YES. **Render**: SSG (ISR if headless CMS with webhooks).
- **Priorities**: typed content collection; static pagination pages; tag/category archives generated at build; RSS/Atom; card system shared with other listings.
- **Reuse**: `ArticleCard`, `Pagination`, `ListingTemplate`.

### Artículo / Post
- **Static**: YES. **Render**: SSG; MDX with interactive embeds as islands; comments as deferred island/server island.
- **Priorities**: 1) LCP (hero image or heading) 2) Article JSON-LD, canonical, OG image generated at build 3) table of contents from headings; stable heading anchors 4) code blocks highlighted at build (no runtime highlighter) 5) prerender "next article" links 6) reading width tokens.
- **Anti-patterns**: client-side markdown rendering; runtime syntax highlighting.
- **Reuse**: `ProseLayout`, `TOC`, `CodeBlock`, `Callout`, MDX component map.

### Documentación
- **Static**: YES. **Render**: SSG (Starlight, Docusaurus, Nextra/Fumadocs, Mintlify-hosted).
- **Priorities**: 1) versioned content collections 2) static search index or hosted docs search 3) agent readability: `llms.txt` + per-page Markdown (`.md` URL or `Accept: text/markdown`), `rel="alternate" type="text/markdown"` (llms.txt v2) (R-STAT-8) 4) self-contained pages (agents retrieve chunks) 5) stable anchors/redirect map on renames 6) API reference generated from OpenAPI/types 7) "edit this page" & last-updated from git.
- **Reuse**: `DocsLayout`, `Sidebar` from collection metadata, `Tabs` (with `name`-linked state), `CodeBlock`.

---

## 10. Support & contact

### Contacto
- **Static**: PARTIAL. **Render**: SSG + form endpoint/action.
- **Priorities**: works without JS (POST → thank-you), server validation, spam protection (honeypot + challenge + rate limit), minimal PII, send acknowledgement email, route by topic.
- **Reuse**: `LeadForm`/`Field`, `SuccessState`.

### FAQ / Ayuda
- **Static**: YES. **Render**: SSG.
- **Priorities**: native `<details>/<summary>` (exclusive groups with `name` where supported) — searchable with find-in-page, no JS; anchor per question; FAQ content as a collection reused in pricing/checkout pages; do not rely on FAQ rich results for SEO.
- **Reuse**: `FAQ` section block (same as landing/pricing).

### Centro de soporte / Tickets
- **Static**: PARTIAL — help articles static; ticketing is APP (or embedded provider widget).
- **Priorities**: articles SSG with search; ticket list/detail SSR behind auth; status timeline; replies via email threading; attachments presigned; SLA indicators; ticket creation form deflects to relevant articles first.
- **Reuse**: `DataTable(tickets)`, `Timeline`, `MessageItem` (shared with chat), `StatusBadge`.

---

## 11. Legal

### Términos y condiciones / Privacy policy
- **Static**: YES. **Render**: SSG.
- **Priorities**: versioned documents with effective date and archive of prior versions (content collection with `version`, `effectiveDate`); stable section anchors; record which version each user accepted (APP: store version id at signup/checkout); print-friendly CSS.
- **Reuse**: `LegalLayout`/`ProseLayout`, `TOC`.

### Política de cookies + consent implementation
- **Static**: YES (policy) + consent banner island.
- **Priorities**: 1) single cookie/tracker registry config that generates the cookie policy table AND drives the consent manager (R-REUSE-7) 2) no non-essential tags before consent; with Google tags set `gtag('consent','default', …denied)` before any measurement commands; choose basic (tags blocked until interaction) vs advanced (cookieless pings while denied) consent mode per legal advice 3) banner must not be the LCP element nor shift layout (fixed overlay, reserved space) 4) accessible dialog (focus, keyboard), equal-weight accept/reject 5) consent re-openable from footer; store decision with version.
- **Anti-patterns**: loading analytics then asking; banner injected late causing CLS.
- **Reuse**: `ConsentBanner`, `CookieTable` (generated), consent config.

---

## 12. States & system

### Error 404
- **Static**: YES. Host serves custom `404.html` **with status 404**; frameworks: `notFound()` → 404 status.
- **Priorities**: real status (no soft 404) (R-ERR-2, R-STAT-9); search box + popular links; redirect map for known moved URLs (301); log 404s to find broken links; lightweight, no data dependencies.
- **Reuse**: `ErrorLayout`, `SearchInput`.

### Error 500
- **Static**: YES (static fallback). 
- **Priorities**: prebuilt static HTML that does not depend on the failing app/data/layout providers; correct 5xx status; correlation/request id shown for support; no stack traces; retry affordance; error boundaries for partial failures inside pages.
- **Reuse**: `ErrorLayout` (dependency-free variant).

### Mantenimiento
- **Static**: YES — served at CDN/edge.
- **Priorities**: HTTP 503 + `Retry-After`; static page from edge rule/flag; link to external status page; for planned maintenance, prefer read-only mode over full downtime.
- **Anti-patterns**: returning 200 with "maintenance" text (indexing problems); maintenance page that loads the app bundle.

### Estado vacío / Empty state
- **Not a page — a component state** present in every collection (R-ERR-3).
- **Variants**: first-use (explain + primary action + sample data), no-results (show active filters + clear action), cleared/done ("inbox zero"), error (retry), no-permission (request access).
- **Reuse**: one `EmptyState` component with variant prop, used by Listing, Search, Dashboard widgets, Tables, Feed, Orders, Notifications.

### Página de éxito / Agradecimiento
- **Static**: YES (generic thank-you) / APP (order-specific).
- **Priorities**: reached via PRG redirect (R-MUT-6); `noindex`; idempotent on reload (no re-submission, deduped conversion events); clear next action; for transactions, data comes from server state, not query params.
- **Reuse**: `SuccessState`, `ErrorLayout`-like minimal layout.
