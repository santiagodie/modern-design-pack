# Commerce pages: after purchase

> **Covers:** Order confirmation and order history (tracking, returns): for each, the user's moment, what the page must prove or protect, levers, specifics with evidence grades, when the usual advice flips, 3C weight, real examples and implementation; the group's persuasion dial.
> **Read when:** step 1 of `modern-design`, after reasoning, only when the brief includes one of these page types; `design-review` may read it when reviewing the same page type.
> **Not here:** P-IDs → references/strategy/principles.md; the dial scale → references/reasoning.md; which file per page type → references/strategy/design-reasoning.md; rendering and state in depth → references/engineering/implementation.md; cart and checkout → references/ux/pages/commerce-purchase.md
> **Owner:** modern-design
> **Sources:** web reasoning research (docs/research/web-reasoning/) and implementation research (docs/research/implementation/), both the author's (MIT); studies and cases cited per entry with links in place; full list in docs/SOURCES.md

Order confirmation · Order history / Orders

This file and [`commerce-purchase.md`](commerce-purchase.md) form one group, commerce, split by moment in the journey: this one covers what comes after the purchase (order confirmation and order history), the other the purchase itself (cart and checkout). The group's persuasion dial, summary and order of authority below apply to both.

Entry format and evidence grades: see the header of `entry-marketing.md`. P-IDs → `../../strategy/principles.md`.

Persuasion dial for this group: low; medium-low for the cart. The user has already decided to buy; the job now is not to lose them. Trust and friction dominate. The cart abandonment baseline is ~70% across 50 studies (Baymard), much of it "just browsing", but a large part is design-solvable.

Group summary: dominant phase confidence + conversion; principles that weigh most P13, P19, P14, P17, P12; main risk: hidden costs, friction, pre-ticked extras.

> **Order of authority:** ethics (`ethics.md` and `content-truth.md`, hard limits) > `site-decisions.md` (what exists and what the user decided) > `design-brief.md` > `reasoning.md` and `design-reasoning.md` (method for writing the brief) > the other references (`principles.md`, `pages/`, `sections/`, `implementation.md` and the rest, consulted afterwards). When two disagree, the higher one wins; a user decision that breaks either hard limit is declined with the reason.

---

## Order confirmation

**Persuasion dial:** low.
**3C weight:** Conf 3 / Mem 3 / Act 2.

### The moment
The user has paid and wants certainty: did it work, what did I buy, when will it arrive, what if something goes wrong? Anxiety is still high for first purchases; this is the end of the purchase story (peak-end).

### Must prove or protect
That the deal is sealed exactly as agreed, and what happens next.

### Levers
- Peak-end (P28): the ending colours the memory of the whole purchase.
- Specificity (P07): order number, items, total, delivery date, where updates will arrive.
- A useful next step (P27) — not an aggressive upsell.

### Specifics
- [A] GOV.UK confirmation pages exist to reassure users that the transaction is complete and tell them what happens next; include a reference number when relevant. https://design-system.service.gov.uk/patterns/confirmation-pages
- [A] Offer account creation here, with one field (password or passkey), reusing data already given (Baymard).
- [C] Send the same information by email immediately; the confirmation page may be closed and never seen again.

### 🔴 Critical errors
- A generic "Thank you!" with no order details or delivery date.
- Double-charge risk: no protection if the user refreshes or presses back.

### 🟠 Common errors
- Upsells that contradict what was just bought, or that bury the confirmation.

### ↔ When the usual advice flips
- **Services and appointments:** "add to calendar" and preparation instructions matter more than tracking.
- **Digital goods:** the confirmation *is* the delivery: show the download or access immediately.

### Signal it's working
"Did my order go through?" contacts near zero; post-purchase account creation rate.

### Implementation
- **Static:** app.
- **Rendering:** rendered on the server, kept out of search results and caches; it shows the order only to its customer, through their session or a signed link.
- **Data and state:** the order is fulfilled when the payment provider notifies the server, not when someone reaches this page; payments still pending have their own state; reloading the page doesn't count the sale again.
- **Anti-patterns:** trusting a URL parameter to confirm payment; counting the purchase again on every reload.
- **Terms:** webhooks in [`../../engineering/implementation.md`, section 9](../../engineering/implementation.md#9-boundaries).

---

## Order history / Orders / Tracking / Returns

**Persuasion dial:** low.
**3C weight:** Conf 3 / Act 2.

### The moment
The user comes back with a specific job: where is my order, when does it arrive, how do I return this, can I reorder? They often arrive from an email, sometimes not logged in. Patience is short; failure means a support contact.

### Must prove or protect
The delivery and return promises. This is where "free returns" or "arrives Friday" is tested.

### Levers
- Self-service and error prevention (P17).
- Reversibility made real (P14): returns and cancellation in-site.
- Specificity (P07): date, carrier, next event, in plain language.
- Familiar account structure (P09).

### Specifics
- [A] Order tracking was rated the most important self-service account feature by 50% of respondents in Baymard's quantitative study; 67% of tested sites didn't consistently provide all key tracking details. For most users the key details are estimated delivery date, carrier name and the stages of delivery. https://baymard.com/research-articles/integrate-tracking-info
- [A] Sending users to third-party carrier pages fails them: those pages often show "no information available" for hours and don't link back to order details; integrate tracking on the store's own page.
- [A] 54% of sites have substantial UX issues in their returns interface (Baymard).
- [C] Allow guest order lookup (order number + email) for guest purchases.

### 🔴 Critical errors
- Returns possible only by phone or email when the purchase was online.
- Ambiguous states (e.g. "cancellation requested" next to "Arrives Thursday").

### 🟠 Common errors
- Order lists without images or product names, forcing users to open each order.
- Status labels in warehouse jargon.

### ↔ When the usual advice flips
- **Subscriptions:** the most important "order" information is the *next* shipment and how to skip, pause or change it.
- **B2B:** invoices, approvals and reorder by SKU matter more than tracking visuals.

### Signal it's working
Share of order issues resolved without contacting support; "where is my order" contacts; return completion time.

### Implementation
- **Static:** app.
- **Rendering:** rendered on the server behind login, in pages, with one page per order.
- **Data and state:** each customer sees only their own orders; statuses come from the providers' notifications; filters live in the URL; reordering and downloading an invoice are actions; an empty state for the first visit.
- **Anti-patterns:** working out an order's status in the browser.
- **Terms:** webhooks in [`../../engineering/implementation.md`, section 9](../../engineering/implementation.md#9-boundaries).

