# Commerce pages

Cart · Checkout / Payment · Order confirmation · Order history / Orders

Entry format and evidence grades: see the header of `entry-marketing.md`. P-IDs → `../principles.md`.

Persuasion dial for this group: low. The user has already decided to buy; the job now is not to lose them. Trust and friction dominate. The cart abandonment baseline is ~70% across 50 studies (Baymard), much of it "just browsing", but a large part is design-solvable.

Group summary: dominant phase confidence + conversion; principles that weigh most P13, P19, P14, P17, P12; main risk: hidden costs, friction, pre-ticked extras.

> **Order of authority:** `ethics.md` (hard limit) > `design-brief.md` > `reasoning.md` (method for writing the brief) > `principles.md` and `pages/` (consulted afterwards). When two disagree, the higher one wins.

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

---

## Order history / Orders / Tracking / Returns

**Persuasion dial:** none-low.
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
