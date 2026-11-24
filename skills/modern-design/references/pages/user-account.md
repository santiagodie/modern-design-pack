# User & account pages

Profile · Settings / Configuration · Account & billing · Notifications

Entry format and evidence grades: see the header of `entry-marketing.md`. P-IDs → `../principles.md`.

Persuasion dial for this group: none to low. These pages are about control. Users come with a specific task, often after something annoyed them (a charge, a notification, a privacy worry). The way you treat them here is remembered.

Group summary: dominant phase confidence; principles that weigh most P14, P23, P09, P17; main risk: hard cancellation, abusive defaults.

> **Order of authority:** `ethics.md` (hard limit, including the no-invention rule) > `site-decisions.md` (what exists and what the user decided) > `design-brief.md` > `reasoning.md` (method for writing the brief) > the other references (`principles.md`, `pages/`, `sections/`, `implementation.md` and the rest, consulted afterwards). When two disagree, the higher one wins; a user decision that breaks `ethics.md` is declined with the reason.

---

## Profile

**Persuasion dial:** low.
**3C weight:** Conf 2 / Act 2.

### The moment
The user wants to control how they appear (to others or to the system) and complete what is genuinely needed. Doubts: "who can see this?", "why do they want this?".

### Must prove or protect
That the user controls their identity and visibility.

### Levers
- Visible control and credibility (P12): who sees what.
- Progress only toward fields that serve the user (P26).
- Error prevention when changing identifiers like email or username (P17).

### Specifics
- [C] "Preview as others see you" removes the doubt about visibility.
- [C] Changing email or phone should verify the new value before switching and notify the old one.
- [A/legal] GDPR transparency: just-in-time notices at the point of data collection are recommended alongside the privacy notice (WP29/EDPB guidelines, endorsed by the ICO).

### 🔴 Critical errors
- Public-by-default fields the user didn't expect to be public.

### 🟠 Common errors
- Completion bars that pressure users into giving unnecessary data.

### ↔ When the usual advice flips
- **Marketplaces and communities:** a complete profile is the trust signal for *other* users (sellers, hosts); here, guided completion helps everyone.

### Signal it's working
Completion of the fields that matter; privacy-related support tickets.

### Implementation
- **Static:** app (a public profile page can be static, regenerated on change).
- **Rendering:** server-rendered with form actions.
- **Data and state:** optimistic saves for low-risk fields; avatar uploads straight to storage, checked on the server; bios sanitised; every write checks ownership on the server.
- **Anti-patterns:** trusting the browser to say whose profile it is editing.

---

## Settings / Configuration

**Persuasion dial:** none.
**3C weight:** Conf 2 / Act 2.

### The moment
The user is looking for one specific option, usually because a default annoys them. Doubts: "where is it?", "what will happen if I change this?", "did it save?".

### Must prove or protect
That the product respects the user's choices and doesn't silently reverse them.

### Levers
- Conventions and findability (P09, P10): grouping by task, search within settings.
- Defaults that protect the user (P23).
- Clear saving and safe changes (P17).
- Progressive disclosure for advanced options (P05).

### Specifics
- [A] NN/g on confirmation dialogs: confirm only consequential, irreversible actions and make the confirmation specific; routine confirmations train users to click "Yes" without reading, which makes the important ones useless. Prefer undo where possible. https://www.nngroup.com/articles/confirmation-dialog/
- [A] NN/g: place consequential options away from frequent ones; proximity causes slips. https://www.nngroup.com/articles/proximity-consequential-options/
- [C] Choose one saving model per screen (auto-save with visible confirmation, or explicit save) and never mix them silently.

### 🔴 Critical errors
- Defaults that favour the company against the user (data sharing on, maximum notifications) — increasingly a regulatory issue (DSA art. 25; proposed Digital Fairness Act).
- Destructive actions (delete account, remove workspace) next to routine ones.

### 🟠 Common errors
- Settings organised by internal team or system architecture.
- Toggles whose effect isn't stated ("Enable sync").

### ↔ When the usual advice flips
- **Admin/enterprise settings:** changes affect other people; show who is affected and keep an audit history.
- **Very few settings:** a single page beats categories and navigation.

### Signal it's working
"Where do I change…?" tickets; settings changes followed by reversal.

### Implementation
- **Static:** app.
- **Rendering:** server-rendered; each settings group is its own form with its own errors.
- **Data and state:** explicit save for consequential settings, autosave with a visible status for trivial toggles; theme with light, dark and system, stored in a cookie when the server needs it; delete account in a `<dialog>` with re-authentication; each group reachable by URL.
- **Anti-patterns:** one giant form where one error blocks every change.

---

## Account & billing

**Persuasion dial:** low (one optional, honest retention offer is acceptable).
**3C weight:** Conf 3 / Conv 1 (upgrade) / Mem 2.

### The moment
The user wants to understand or change a financial relationship: what am I paying, when, for what; upgrade, downgrade, update a card, get an invoice, or leave. If they're leaving, they've usually already decided.

### Must prove or protect
The "cancel anytime" and "no surprises" halves of the promise. This is the end of the relationship story — the part they will tell others about.

### Levers
- Reversibility made real (P14): cancellation symmetric with sign-up.
- Total, specific amounts and dates (P13, P07).
- Upgrade prompts tied to real limits (P20), not nagging.
- A dignified ending (P28).

### Specifics
- [B/legal] FTC v. Amazon (Sept. 2025): $2.5B settlement over Prime enrolment and a cancellation flow internally nicknamed "Iliad"; the order requires simple cancellation. https://www.pbs.org/newshour/economy/amazon-to-pay-2-5-billion-to-settle-ftc-allegations-it-duped-customers-into-enrolling-in-prime
- [Legal, proposal] EU Digital Fairness Act (Commission proposal, 11 Nov 2026): simple, unambiguous cancellation; reminder and express consent before a free trial becomes paid; renewal reminders. Text may change during negotiation.
- [C] Show the next charge date and amount on the billing page at all times; invoices downloadable without contacting support.
- [C] On downgrade or cancellation, say exactly what happens to data and when; offer export.

### 🔴 Critical errors
- Cancellation requiring more steps, channels or confirmations than sign-up; cancellation only by phone or chat.
- Confirmshaming ("No, I don't want to save money").
- Threatening data loss that isn't real to retain users.

### 🟠 Common errors
- Retention offers shown repeatedly in a loop.
- Prices per seat shown without the total.

### ↔ When the usual advice flips
- **Pausing is often what the user actually wants:** offering "pause for 1–3 months" next to cancel is a genuine service, not a trick — if cancelling remains one click away.
- **B2B contracts with notice periods:** cancellation can't be instant, but its terms and the effective date must be visible upfront.

### Signal it's working
Voluntary cancellations completed in-product versus chargebacks and complaints; billing tickets; reactivations later.

### Implementation
- **Static:** app.
- **Rendering:** server-rendered.
- **Data and state:** plan and entitlements come from the billing provider's webhooks, never from the browser; the same plans source as the pricing page; payment methods and invoices through the provider's customer portal when possible; proration previewed by the server.
- **Anti-patterns:** checking the subscription only in the front end; storing card data.

---

## Notifications (preferences and permission requests)

**Persuasion dial:** none-low.
**3C weight:** Act 3 / Conf 2.

### The moment
Two different moments: (1) the product asks for permission to interrupt; (2) the user, often annoyed, wants to reduce interruptions. In both, the question is "is this worth my attention?".

### Must prove or protect
That interruptions will be useful and controllable; that the product respects attention.

### Levers
- Behaviour = motivation × ability × prompt (P20): ask when the value is evident.
- Protective defaults (P23); granular control (P10).

### Specifics
- [A] Chrome telemetry: only about 6.7% of web notification permission prompts were accepted (Windows, accumulated data); most are ignored or blocked. https://developer.chrome.com/blog/permissions-chip
- [A] Chrome automatically switches sites with very low acceptance rates to a quieter permission UI, and recommends against prompting on page load (Chromium, 2020). In July 2026 Chrome announced lighter, less intrusive notification prompts on Android, again recommending prompts tied to context.
- [C] Use a "pre-permission" explanation in your own UI, then trigger the browser prompt only after the user opts in; a browser denial is hard to reverse.
- [C] Every notification should lead to a place where it can be turned off.

### 🔴 Critical errors
- Permission prompts on first page load.
- "Notifications" that are advertising.

### 🟠 Common errors
- One global on/off switch instead of control by type and channel.
- Settings that require login to unsubscribe from emails.

### ↔ When the usual advice flips
- **Time-critical products** (deliveries, security alerts, rides): asking early can be justified, *if* the prompt states the specific benefit ("so we can tell you when your driver arrives").

### Signal it's working
Permission acceptance rate; opt-out/revocation rate; notification-to-action rate.

### Implementation
- **Static:** app.
- **Rendering:** server-rendered preferences; the in-app inbox updated by server-sent events.
- **Data and state:** preferences per channel and event stored on the server; ask for push permission only after a user action with context; one-click unsubscribe in emails.
- **Anti-patterns:** a permission prompt on page load; polling every second.
