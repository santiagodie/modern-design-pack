# Support & contact pages

> **Covers:** Contact, FAQ or help centre, and support centre or tickets: for each, the user's moment, what the page must prove or protect, levers, specifics with evidence grades, when the usual advice flips, 3C weight, real examples and implementation; the group's persuasion dial.
> **Read when:** step 1 of `modern-design`, after reasoning, only when the brief includes one of these page types; `design-review` may read it when reviewing the same page type.
> **Not here:** P-IDs → references/strategy/principles.md; the dial scale → references/reasoning.md; which file per page type → references/strategy/design-reasoning.md; rendering and state in depth → references/engineering/implementation.md; contact details in the footer → references/ui/sections/footer.md
> **Owner:** modern-design
> **Sources:** web reasoning research (docs/research/web-reasoning/) and implementation research (docs/research/implementation/), both the author's (MIT); studies and cases cited per entry with links in place; full list in docs/SOURCES.md

Contact · FAQ / Help centre · Support centre / Tickets

Entry format and evidence grades: see the header of `entry-marketing.md`. P-IDs → `../../strategy/principles.md`.

Persuasion dial for this group: none; low for FAQ and help centre. The user usually arrives with a problem, often frustrated. These pages are a trust test: the product's promise is being checked at its weakest moment, and how this ends is remembered (peak-end).

Group summary: dominant phase confidence; principles that weigh most P17, P04, P10; main risk: no way out to a human.

> **Order of authority:** ethics (`ethics.md` and `content-truth.md`, hard limits) > `site-decisions.md` (what exists and what the user decided) > `design-brief.md` > `reasoning.md` and `design-reasoning.md` (method for writing the brief) > the other references (`principles.md`, `pages/`, `sections/`, `implementation.md` and the rest, consulted afterwards). When two disagree, the higher one wins; a user decision that breaks either hard limit is declined with the reason.

---

## Contact

**Persuasion dial:** none.
**3C weight:** Conf 3 / Conv 2.

### The moment
The user wants to reach a person, or at least know that someone will answer. Doubts: "will anyone read this?", "when?", "which channel is fastest for my problem?".

### Must prove or protect
That real, accountable people are behind the promise and reachable.

### Levers
- Minimal friction (P19).
- Credibility (P12): real address, real channels.
- Capped expectations (P04): state response times.
- Routing by need (P10): sales vs support vs billing vs press.

### Specifics
- [C] State expected response time per channel ("we reply within 1 business day").
- [Legal, EU/Spain] Businesses offering services online must make identification and contact details easily accessible (LSSI in Spain; e-Commerce Directive at EU level) — see the footer legal minimum in `../../ui/sections/footer.md`.
- [C] After sending, confirm on screen and by email with a reference number.

### 🔴 Critical errors
- Contact hidden behind a chatbot or FAQ with no route to a human.
- A form that fails silently.

### 🟠 Common errors
- Long forms asking for data the team could look up.
- One generic inbox for every kind of request.

### ↔ When the usual advice flips
- **Sales contact for high-ticket B2B:** a short qualification form and immediate calendar booking can serve the visitor better than a free-text box.

### Signal it's working
Submissions completed; first response within the promised time; repeat contacts about the same issue.

### Implementation
- **Static:** partial: static page plus a form endpoint.
- **Rendering:** static.
- **Data and state:** the form works without JavaScript and redirects to a thank-you page; server validation; spam protection (honeypot, challenge, rate limit); only the personal data needed; an acknowledgement email; route by topic.
- **Anti-patterns:** a form that only submits with JavaScript; collecting data nobody uses.

---

## FAQ / Help centre

**Persuasion dial:** low.
**3C weight:** Conf 3.

### The moment
The user has a specific question and hopes to solve it alone, fast. They search or scan headings; they rarely read whole pages.

### Must prove or protect
That the answer exists, is current and is written in their words.

### Levers
- Findability (P10): search first, then grouping by task.
- Answer-first writing (P01) and specificity (P07).
- Pre-empting objections — the pricing FAQ is a conversion tool as much as a support one.

### Specifics
- [A] NN/g on no-results pages: restate the query, keep it editable, suggest alternatives and correct spelling; the same applies to help-centre search.
- [C] Write questions as users ask them (from support tickets and chat transcripts), not as the company frames them.
- [C] Each article: one question, the answer in the first sentence, steps if needed, a "did this help?" control with a route to contact.

### 🔴 Critical errors
- Outdated answers (old prices, old UI) with no date.
- No route to a human from an article that didn't help.

### 🟠 Common errors
- One huge FAQ page of accordions nobody can search.
- Marketing copy disguised as answers.

### ↔ When the usual advice flips
- **Very small products:** five honest FAQs on the pricing or product page beat a separate help centre.

### Signal it's working
Ticket deflection; searches without results; "did this help? no" rate per article.

### Implementation
- **Static:** yes.
- **Rendering:** static.
- **Data and state:** native `<details>` and `<summary>` (find-in-page works, no JavaScript); an anchor per question; FAQ entries as a collection reused on pricing and checkout.
- **Anti-patterns:** an accordion script that hides answers from find-in-page.

---

## Support centre / Tickets

**Persuasion dial:** none.
**3C weight:** Conf 3 / Mem 3.

### The moment
The user has a problem that needs a person and wants to know its status without chasing. Anxiety grows with silence.

### Must prove or protect
That the problem is being handled, by whom and by when — and that the ending is a real resolution.

### Levers
- Status visibility (P17).
- Peak-end (P28): resolution and closure are remembered.
- Capped expectations (P04): stated timeframes.

### Specifics
- [C] Ticket states in plain language ("We're waiting for your reply", "Fixed — please confirm"), not internal workflow names.
- [C] Close tickets only after confirming the problem is solved, or after a stated period with clear notice.
- [B] Order-related questions dominate e-commerce support; Baymard found order tracking is the most important self-service feature (50%), so good tracking pages reduce ticket volume (see `commerce-after-purchase.md`, order history).

### 🔴 Critical errors
- Tickets closed automatically without resolution.
- Asking the user to repeat information already given.

### 🟠 Common errors
- No way to add information to an open ticket from the web.

### ↔ When the usual advice flips
- **Incidents affecting many users:** a public status page and a banner reduce duplicate tickets better than individual replies.

### Signal it's working
Time to resolution; reopenings; satisfaction at close.

### Implementation
- **Static:** partial: help articles are static; tickets are app (or a provider's widget).
- **Rendering:** static articles with search; ticket list and detail server-rendered behind login.
- **Data and state:** a status timeline; replies threaded by email; attachments uploaded straight to storage; the ticket form suggests relevant articles first.
- **Anti-patterns:** ticket status worked out in the browser.
