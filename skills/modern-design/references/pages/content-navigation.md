# Content & navigation pages

Catalogue / Listing · Category / Collection · Product page · Search results · Map · Calendar / Booking

Entry format and evidence grades: see the header of `entry-marketing.md`. P-IDs → `../principles.md`.

Persuasion dial for this group: medium to low; high for the product page, with true persuasion only. People are *finding*, not being convinced. The best persuasion here is making the right option easy to find and evaluate.

Group summary: dominant phase assisted conversion; principles that weigh most P10, P09, P31, P13; main risk: non-total price, poor filters.

> **Order of authority:** ethics (`ethics.md` and `content-truth.md`, hard limits) > `site-decisions.md` (what exists and what the user decided) > `design-brief.md` > `reasoning.md` (method for writing the brief) > the other references (`principles.md`, `pages/`, `sections/`, `implementation.md` and the rest, consulted afterwards). When two disagree, the higher one wins; a user decision that breaks either hard limit is declined with the reason.

---

## Catalogue / Product listing

**Persuasion dial:** medium-low.
**3C weight:** Cap 1 / Conf 2 / Conv 2.

### The moment
The user faces many options and is narrowing to a few candidates. They are not ready to buy; they're building a shortlist. Doubt: "which of these suit *me*, and am I missing a better one?". Effort: scanning, comparing, going back and forth to product pages.

### Must prove or protect
That the promise ("the right X for you") is findable here, without wading through irrelevant items.

### Levers
- Comparison made easy, not options reduced (P10): the problem is rarely too many items, it's not being able to filter and compare.
- Conventions (P09): filters, sort, applied-filter chips where people expect them.
- Images first in evaluation (P31), true total price (P13), rating with count (P11).
- Speed (P03) and preserving the user's place.

### Specifics
- [A] Baymard: sites with mediocre product-list usability saw 67–90% abandonment in testing among users trying to find a product, versus 17–33% on slightly optimised sites; 34% of benchmarked sites have poor filtering. https://baymard.com/ecommerce-product-lists/benchmark/page-types/filtering-options
- [A] 15% of sites don't let users select several values in one filter (OR logic); 28% don't show an overview of applied filters; 13% don't return users to the same place when coming back from a product page (Baymard).
- [A] 38% of sites lack filters for attributes they display in list items.
- [A] Loading: Baymard's 2024 re-verification still prefers "Load more" (pagination can work if done carefully); infinite scroll leads users to scan more but focus less, and is worse for search results and mobile. Desktop: 50–150 items per load; mobile: fewer.
- [A] Always show the *number* of ratings, not just stars.

### 🔴 Critical errors
- Filters missing for the attributes users actually decide on.
- Losing filters or scroll position when returning from a product.
- "From" prices that exclude compulsory fees.

### 🟠 Common errors
- Product variants listed as separate items (clutter, and users miss the variant they want).
- Filter labels in internal jargon.

### ↔ When the usual advice flips
- **Small catalogues (under ~20 items):** filters add cost without benefit; a well-ordered grid wins.
- **Inspiration-led categories** (fashion, decor): bigger imagery and fewer data points per tile; spec-driven categories (electronics, parts) need comparable attributes in the tile and may benefit from a table view.
- **B2B reorder catalogues:** list/table density and SKU search beat imagery.

### Signal it's working
Click-through to product pages, filter use, time-to-add-to-cart, return-to-list behaviour.

### Implementation
- **Static:** yes for small catalogues; regenerated pages for large ones.
- **Rendering:** canonical listing pages static or regenerated; filtered and sorted views on the server, or filtered in the browser for small static data.
- **Data and state:** filters, sort and page in the URL, read by one typed parser on server and client; real `?page=` links (a "load more" button may enhance them); a card that reserves its image box; `content-visibility: auto` on long grids; back/forward cache kept working.
- **Anti-patterns:** infinite scroll with no URLs; filters held only in memory; the whole grid rendered in the browser.

---

## Category / Collection

**Persuasion dial:** medium.
**3C weight:** Cap 2 / Conf 1 / Conv 2.

### The moment
The user is exploring a universe ("trail running", "summer collection") and asking "what's in here, and is it for me?". More browsing than searching; the user may not know the vocabulary yet.

### Must prove or protect
That the store understands this domain, and that the user can get from browsing to a shortlist quickly.

### Levers
- Editorial curation and meaning (P08) without pushing products off screen.
- Navigation by the user's mental model (P09, P10): subcategories by use, not by internal taxonomy.
- Images (P31) and real best-seller signals (P11).

### Specifics
- [A] Baymard's 2024 product-finding research recommends intermediary category pages in deep hierarchies so users can orient before facing a long list.
- [A] Inspirational images should link to every product depicted (9% of sites don't, per Baymard).

### 🔴 Critical errors
- Hero banners that push all products below the first mobile screen.

### 🟠 Common errors
- Subcategories named by internal organisation rather than by what users want to do.

### ↔ When the usual advice flips
- **Users who already know exactly what they want** usually come via search, not categories. Don't over-invest in category storytelling for spec-driven, known-item shopping.

### Signal it's working
Depth of browsing, click-through to product pages, use of subcategory links.

### Implementation
- **Static:** yes, or regenerated.
- **Rendering:** regenerated when its products change.
- **Data and state:** the listing template with a category header block; breadcrumbs with structured data.
- **Anti-patterns:** a separate implementation of the listing for categories.

---

## Product page / Detail

**Persuasion dial:** high, but only true persuasion.
**3C weight:** Cap 1 / Conf 3 / Conv 3.

### The moment
The user is evaluating one candidate. Decision: is *this* the one, and what will it really cost me? Doubts: fit/suitability, true total (shipping, taxes, delivery date), what happens if it's wrong (returns), whether others like them were happy.

### Must prove or protect
The core of the promise: that this item does what was promised, arrives when promised, and can be returned as promised.

### Levers
- Images as the first evaluation tool (P31).
- Social proof with distribution, including negatives (P11).
- Total cost and a delivery *date* near the button (P13).
- Return/cancellation policy next to the CTA (P14).
- Scarcity only if real (P24).

### Specifics
- [A] 56% of users' first action on a product page was to explore images; 42% try to gauge size from images, so an "in scale" image is needed (Baymard).
- [A] Up to 95% of test participants used reviews to evaluate products (Baymard).
- [A] Only ~48% of leading US/EU desktop sites have "decent" or better product-page UX (Baymard, 2026 benchmark).
- [A] Users are suspicious of perfect 5.0 ratings; a credible distribution helps (see `../sections/social-proof.md`).

### 🔴 Critical errors
- Fake low-stock or "X people viewing" claims (CMA action against booking sites; Which? found 34 free rooms behind an "only 1 left" message).
- Delivery cost or date unknown until checkout.

### 🟠 Common errors
- Size/fit guidance buried in the footer instead of beside the selector.
- Long descriptions instead of scannable key specs; users rarely read long text.

### ↔ When the usual advice flips
- **Spec-driven products** (tyres, components): a comparable spec table matters more than lifestyle imagery.
- **Luxury:** less information density and more imagery is expected; overt urgency damages the brand.
- **Digital products/SaaS feature pages:** "images" means real UI and short demos.

### Real examples (illustrate the mechanism, don't copy)
Airbnb total price in results (2025); Booking.com scarcity messages as a counter-example.

### Signal it's working
Add-to-cart rate, returns due to "not as expected", pre-sale support questions.

### Implementation
- **Static:** yes; partial when stock or delivery is live.
- **Rendering:** static shell (content, images, specs) with holes for price, stock, delivery estimate and reviews.
- **Data and state:** the variant in the URL; add to cart as a form that works without JavaScript, with an optimistic cart update; the main image with `fetchpriority="high"`; Product structured data; reviews loaded when visible.
- **Anti-patterns:** rendering the whole page per request just for stock; a gallery library that blocks the main thread; variant changes that don't update the URL.

---

## Search results

**Persuasion dial:** low.
**3C weight:** Cap 0 / Conf 1 / Conv 2.

### The moment
The user already knows what they want, or thinks they do, and has expressed it in their own words. Doubt: "did it understand me?". Patience is low; a failed search often sends them back to Google.

### Must prove or protect
That the site understands the user's language and carries what they need, or says so honestly and offers a way forward.

### Levers
- Speed and conventions (P03, P09).
- Echo the query and the count (P07); correct misspellings.
- Treat zero results as an empty state with paths forward (P29).

### Specifics
- [A] Baymard 2026: 56% of e-commerce sites have mediocre-or-worse search UX; sites must support the common query types (product type, feature, symptom, thematic, compatibility, etc.).
- [A] 69% of sites don't offer relevant autocomplete suggestions for close misspellings; users often refuse to submit a query until autocomplete "validates" it.
- [A] A large share of "No results" pages are dead ends with only generic search tips; recommended elements include an alternate query (auto-applied if only one), related categories, help/contact links and recommendations.
- [A] For search results, "Load more" beats infinite scrolling (Baymard).
- [B] Track the null-search rate and the list of zero-result queries; they show what users want and you don't (or can't find).

### 🔴 Critical errors
- A "0 results" page with no way out.
- Sponsored results not marked as such.

### 🟠 Common errors
- Clearing the query from the search box on the results page.
- Search scoped to products only when users also search for help, orders or policies.

### ↔ When the usual advice flips
- **Product-type queries** ("chairs") are often better answered by sending users to the matching category with filters than by a flat results list.
- **Internal tools:** exact-match and filters by ID/date matter more than fuzzy relevance.

### Signal it's working
Null-search rate, refinement rate, click-through on top results, search exits.

### Implementation
- **Static:** partial: a build-time index searched in the browser, or a search service.
- **Rendering:** server-rendered from `?q=` so results can be shared, or a client island against the search service; the same results template as the listing.
- **Data and state:** query and facets in the URL; debounce typing and cancel stale requests; announce the result count in a live region; a no-results state with suggestions; internal search pages not indexed.
- **Anti-patterns:** a request per keystroke; results that exist only in the browser, with no URL.

---

## Map

**Persuasion dial:** low.
**3C weight:** Cap 1 / Conf 2 / Conv 2.

### The moment
The user is deciding by place: "what's near where I need to be, and how does it compare?". Two dimensions at once (location and attributes such as price), which overloads working memory if the interface doesn't help.

### Must prove or protect
That what's shown on the map is the same truth as the list: real price, real availability, real location.

### Levers
- Conventions of map interaction (P09): pan, zoom, "search this area".
- Clustering and progressive detail (P10).
- True total price on the pin (P13); photo on the card (P31).

### Specifics
- [B] Airbnb shows total price including fees (before taxes) in results by default worldwide since April 2025, which carries through to map pins.
- [C] Keep list and map synchronised (hover/tap highlights both); never let the map trap page scrolling on mobile.

### 🔴 Critical errors
- Pins showing a base price that isn't the final price.
- A map as the only way to browse (inaccessible to keyboard and screen-reader users; WCAG/EAA).

### ↔ When the usual advice flips
- **When location doesn't drive the decision** (delivery-only services), a map is decoration; use a list with distance or delivery time.

### Signal it's working
Pin interaction → detail views; bookings started from map vs list.

### Implementation
- **Static:** partial: static page with the map as an island.
- **Rendering:** page static or server-rendered; the map loads when visible or on interaction, with a still image first.
- **Data and state:** map area and selected place in the URL; query by area and cancel requests in flight; an accessible list of the same places next to the map.
- **Anti-patterns:** loading the map library in `<head>`; places shown only on the canvas, with no list.

---

## Calendar / Booking / Schedule

**Persuasion dial:** low.
**3C weight:** Cap 0 / Conf 2 / Conv 2.

### The moment
The user wants to find a slot that fits their life and book it without mistakes. Doubts: "is this time really available?", "which time zone is this?", "can I change it later?".

### Must prove or protect
That the booked time is exactly what they think it is, and that changing it is possible.

### Levers
- Error prevention (P17): show only genuinely available slots; detect conflicts.
- Defaults (P23): detected time zone, stated explicitly.
- Familiar date patterns (P09).

### Specifics
- [A/C] NN/g date input guidance: allow typing the date even when a picker exists; for ranges, show two months side by side; for a short list of possible dates, show a list instead of a calendar; spell out month names for international audiences; grey out and disable unavailable dates.
- [C] Show the day of the week for bookings; it matters for appointments and not for birthdates.
- [C] Birthdates: plain text fields (day/month/year), not a calendar that forces scrolling through decades.

### 🔴 Critical errors
- Ambiguous date formats (03/04) for international users.
- Showing slots that fail at confirmation.

### 🟠 Common errors
- No "add to calendar" after booking; no visible reschedule/cancel path.

### ↔ When the usual advice flips
- **Very limited availability** (3–5 options): a list of slots beats any calendar.
- **Power users scheduling all day** (receptionists): a dense week/resource view with keyboard control beats a consumer-style picker.

### Signal it's working
Completed bookings, failed confirmations, reschedules caused by errors, no-shows.

### Implementation
- **Static:** partial for a public list of events (with a downloadable `.ics`); app for personal scheduling.
- **Rendering:** public list static, grouped by date; an app renders the month or week on the server and handles interaction in the browser.
- **Data and state:** times stored in UTC with the event's time zone; view and range in the URL; optimistic moves that roll back on error; conflicts checked on the server; a list view on small screens.
- **Anti-patterns:** local times stored without a zone; drag as the only way to move an event.
