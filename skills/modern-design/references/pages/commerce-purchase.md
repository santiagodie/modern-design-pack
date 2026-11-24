# Commerce pages: purchase

Cart · Checkout / Payment

This file and [`commerce-after-purchase.md`](commerce-after-purchase.md) form one group, commerce, split by moment in the journey: this one covers the purchase (cart and checkout), the other what comes after it (order confirmation and order history). The group's persuasion dial, summary and order of authority below apply to both.

Entry format and evidence grades: see the header of `entry-marketing.md`. P-IDs → `../principles.md`.

Persuasion dial for this group: low. The user has already decided to buy; the job now is not to lose them. Trust and friction dominate. The cart abandonment baseline is ~70% across 50 studies (Baymard), much of it "just browsing", but a large part is design-solvable.

Group summary: dominant phase confidence + conversion; principles that weigh most P13, P19, P14, P17, P12; main risk: hidden costs, friction, pre-ticked extras.

> **Order of authority:** `ethics.md` (hard limit, including the no-invention rule) > `site-decisions.md` (what exists and what the user decided) > `design-brief.md` > `reasoning.md` (method for writing the brief) > the other references (`principles.md`, `pages/`, `sections/`, `implementation.md` and the rest, consulted afterwards). When two disagree, the higher one wins; a user decision that breaks `ethics.md` is declined with the reason.

---

## Cart

**Persuasion dial:** medium-low.
**3C weight:** Cap 0 / Conf 3 / Conv 3.

### The moment
The user is reviewing: is this what I chose, in the right size/quantity, and what will it all cost? Many carts are also used as a "save for later" or comparison list. Doubt: "what's the real total, and when will it arrive?".

### Must prove or protect
That the price and delivery promised on the product page are still true, now in total.

### Levers
- Total cost visible early (P13).
- Risk reduction (P14): returns policy visible.
- Low friction to edit and to continue (P19).
- Useful empty cart (P29).

### Specifics
- [A] Among US shoppers who abandoned (excluding "just browsing"): 40% extra costs too high, 20% delivery too slow, 19% didn't trust the site with card details, 18% forced account creation, 17% long/complicated checkout, 13% unsatisfactory returns policy, 12% couldn't calculate total cost up front (Baymard). https://baymard.com/blog/cart-abandonment-rate
- [A] Show delivery as a date ("Arrives Friday"), not a speed ("3–5 business days"); Baymard has long reported many sites get this wrong.

### 🔴 Critical errors
- Automatically added extras or insurance; pre-ticked add-ons.
- Countdown timers that reset (fake urgency).

### 🟠 Common errors
- Shipping and taxes hidden until the last checkout step.
- "Remove" and "Save for later" placed so close that slips happen.

### ↔ When the usual advice flips
- **Single-item or instant purchases** (tickets, digital goods): a cart is an extra step; go straight to checkout.
- **B2B carts** are often quotes: allow saving, sharing and exporting, and show account-specific prices.

### Signal it's working
Cart → checkout progression; cart edits followed by abandonment.

### Implementation
- **Static:** app; partial when a static site embeds a hosted cart.
- **Rendering:** rendered on the server for each visitor and kept out of shared caches; the cart count in the header is a small interactive part.
- **Data and state:** the server keeps the cart and recognises it through a secure cookie; adding, changing and removing items are ordinary forms that also work without JavaScript, shown on screen at once with a pending mark on each line; the server recalculates totals, discounts and taxes; every cost is visible early.
- **Anti-patterns:** keeping the cart only in browser storage; letting a shared cache serve one visitor's cart to others; accepting prices sent by the browser.
- **Terms:** HttpOnly cookies in [`../implementation.md`, section 3](../implementation.md#3-apps-kinds-of-state); islands in [`../implementation.md`, section 1](../implementation.md#1-rendering-decided-per-route).

---

## Checkout / Payment

**Persuasion dial:** low.
**3C weight:** Cap 0 / Conf 3 / Conv 3.

### The moment
The user has decided and is handing over personal and payment data. They are at their most cautious. Doubts: "is this safe?", "is this the final price?", "how long is this going to take?". Every field is a cost and a small risk.

### Must prove or protect
That the deal agreed on the previous pages holds: same price, same date, no surprises, no hidden commitments.

### Levers
- Minimal friction (P19); guest checkout; autofill.
- Trust signals where the doubt arises (P12): next to the card field.
- Error prevention and clear recovery (P17); never lose input.
- Accessibility (P18) — payment is within EAA scope in the EU.
- Fast authentication (P30) for returning customers.

### Specifics
- [A] An ideal checkout can have 12–14 form elements (7–8 fields); the US average shows 23.48 by default (Baymard).
- [A] 18% abandoned because the site required account creation; Baymard recommends offering account creation on the confirmation step instead (42% of sites don't).
- [A] GOV.UK pattern, tested with users and screen readers: before submitting, a "check your answers" summary with a "change" link per item; on error, an error summary at the top that receives focus plus messages beside each field. https://design-system.service.gov.uk/patterns/validation
- [A] Passkeys: 93% sign-in success vs 78% for passwords + traditional MFA; ~2.8× faster (FIDO Passkey Index 2026).
- [B] Expedia removed an optional "Company" field that caused customers to enter their bank's name and address, failing card verification; reported ~$12M/year in profit.
- Form-level detail (labels, autocomplete attributes, input sizes): `../sections/forms.md`.

### 🔴 Critical errors
- Forced account creation before purchase.
- Price changing between steps; costs appearing at the last step.
- Pre-ticked paid extras or marketing consent (illegal under GDPR for consent; targeted by the proposed EU Digital Fairness Act for extras).
- Clearing the form after a validation error.

### 🟠 Common errors
- Global navigation and promotions distracting from completion.
- Optional fields that create ambiguity (company, second address line labelled unclearly).
- Card errors that say only "payment failed" with no reason or next step.

### ↔ When the usual advice flips
- **B2B purchasing:** PO numbers, VAT IDs and billing contacts are required, not friction; group them clearly and allow saving.
- **Returning customers with saved details:** a one-page express path beats a multi-step flow.
- **High-value or regulated purchases:** an extra review step increases confidence rather than reducing conversion.

### Signal it's working
Checkout completion rate, errors per field, payment-decline recovery rate, support contacts during checkout.

### Implementation
- **Static:** app.
- **Rendering:** rendered on the server and never cached, in its own layout with few external scripts; card details go into the payment provider's own fields or page.
- **Data and state:** guest checkout first; few fields, each with the right autofill and keyboard settings; one column; a retried payment attempt never charges twice, and the pay button can't be sent twice; the server checks totals and stock.
- **Anti-patterns:** showing the order as complete before the server confirms it; building card fields by hand; loading the checkout page in advance; tracking scripts on the payment step.
- **Terms:** autocomplete and inputmode in [`../implementation.md`, section 7](../implementation.md#7-accessibility) and [`../sections/forms.md`](../sections/forms.md#accessibility); optimistic UI in [`../implementation.md`, section 3](../implementation.md#3-apps-kinds-of-state); idempotency key and webhooks in [`../implementation.md`, section 9](../implementation.md#9-boundaries).

