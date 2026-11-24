# States & system pages

Error 404 · Error 500 · Maintenance · Empty state · Success / Thank-you page

Entry format and evidence grades: see the header of `entry-marketing.md`. P-IDs → `../principles.md`.

Persuasion dial for this group: none for errors and maintenance; low to medium for empty states and success pages. These are endings or interruptions — the moments memory weighs most (peak-end rule). They are also where list-mode design does the most damage, because they are designed last and copied from templates.

Group summary: dominant phase confidence + memory; principles that weigh most P17, P28, P29, P27; main risk: dead ends, blaming the user.

> **Order of authority:** `ethics.md` (hard limit, including the no-invention rule) > `site-decisions.md` (what exists and what the user decided) > `design-brief.md` > `reasoning.md` (method for writing the brief) > the other references (`principles.md`, `pages/`, `sections/`, `implementation.md` and the rest, consulted afterwards). When two disagree, the higher one wins; a user decision that breaks `ethics.md` is declined with the reason.

---

## Error 404 (page not found)

**Persuasion dial:** none.
**3C weight:** Conf 2 / Mem 2.

### The moment
The user followed a link (from search, an old email, a colleague) and hit a dead end. It's rarely their fault. They are mildly annoyed and one click from leaving.

### Must prove or protect
That the site still has what they need, and that it's easy to get back on track.

### Levers
- Error recovery (P17): what happened, what to do now.
- Conventions (P09): search box, main navigation.
- Empty-state thinking (P29): offer paths, not apologies alone.
- Light novelty only if it doesn't get in the way (P28).

### Specifics
- [A] NN/g error-message guidelines: plain language, no jargon or bare codes, don't blame the user, offer a remedy. The 404 page is cited as the web's most common violation of "avoid jargon". https://www.nngroup.com/articles/error-message-guidelines/
- [C] Put a search field above the fold, ideally pre-filled with words from the broken URL; show likely matches.
- [Technical] Return a real 404 status code. A "not found" design served with 200 OK becomes a "soft 404" that search engines may index (Google Search Central).
- [C] Log 404s and redirect frequent ones to the right page.

### 🔴 Critical errors
- Returning 200 for error pages.
- Messages that imply the user mistyped when the site broke the link.

### 🟠 Common errors
- A witty illustration with no search and no links.
- Redirecting every 404 to the home page silently (users lose context and don't know what happened).

### ↔ When the usual advice flips
- **Logged-in apps:** a missing record (deleted project, revoked access) is not a 404 in the user's mind; say what happened ("This project was deleted by Ana on 3 May") and who to ask.

### Signal it's working
Share of 404 visitors who continue to another page; what they search for from the 404.

### Implementation
- **Static:** yes.
- **Rendering:** a static page served with status 404 (frameworks: their not-found helper).
- **Data and state:** search and popular links; a redirect map (301) for known moved URLs; 404s logged to find broken links; no data dependencies.
- **Anti-patterns:** a not-found page served with status 200 (a soft 404).

---

## Error 500 (server error)

**Persuasion dial:** none.
**3C weight:** Conf 3 / Mem 3.

### The moment
Something broke on your side, often mid-task, sometimes after the user submitted something important. Worry: "did my payment/form go through? Did I lose my work?".

### Must prove or protect
That their data and money are safe, and what to do now.

### Levers
- Error recovery and honesty (P17): own the error.
- Peak-end (P28): this can be the most intense moment of the visit; leave them somewhere stable.
- Credibility (P12): link to a status page.

### Specifics
- [A] NN/g: concise, precise description of the problem, constructive advice, no blame; when the system fails completely, novelty can soften the frustration (Twitter's "Fail Whale" is the classic example).
- [C] Preserve what the user was doing: keep form input client-side and offer retry.
- [C] For payments: say explicitly whether the charge happened, or how to check, before suggesting a retry (avoid double charges).
- [C] Keep the error page lightweight and self-contained (it must render when other services are down).

### 🔴 Critical errors
- Generic "Something went wrong" after a payment with no indication of whether it went through.
- Error pages that depend on the same failing backend.

### 🟠 Common errors
- Stack traces or error IDs shown without human explanation (IDs are useful only next to a plain message).

### ↔ When the usual advice flips
- **Developer audiences:** a request ID and a link to the status page are genuinely helpful; include them below the plain message.

### Signal it's working
Retries that succeed; support contacts after errors; duplicate charges.

### Implementation
- **Static:** yes: a prebuilt static fallback.
- **Rendering:** static HTML that doesn't depend on the failing app, its data or its layout providers; served with a 5xx status.
- **Data and state:** a request id for support; a retry action; error boundaries for partial failures inside pages.
- **Anti-patterns:** stack traces on the page; an error page that needs the broken app to render.

---

## Maintenance

**Persuasion dial:** none.
**3C weight:** Conf 3.

### The moment
The user can't use the service right now. Questions: "for how long?", "is my data/order safe?", "where can I follow this?".

### Must prove or protect
Reliability: that this is planned or under control, and temporary.

### Levers
- Capped uncertainty (P04): a concrete return time with time zone.
- Credibility (P12): status page, advance notice.
- Reassurance about pending orders or data (P14).

### Specifics
- [A/technical] Google Search Central: during planned downtime return HTTP 503 (Service Unavailable), optionally with a `Retry-After` header; don't serve 404s or error pages with 200. Don't serve 503 for more than about 1–2 days (URLs may be dropped from the index); for longer closures, serve an indexable placeholder with 200. Never return 503 for robots.txt. https://developers.google.com/search/docs/crawling-indexing/pause-online-business
- [C] Announce planned maintenance in advance in-product and by email for users with active tasks; schedule it at low-traffic times for the main audience's time zone.
- [C] Use a static, self-contained page (inline CSS, no external dependencies).

### 🔴 Critical errors
- "We'll be back soon" with no time, for hours.
- Maintenance during a promoted sale or deadline, with no advance notice to users.

### 🟠 Common errors
- No mention of whether scheduled things (orders, bookings, payments) still happen.

### ↔ When the usual advice flips
- **Partial maintenance:** if only one feature is down, keep the rest usable and show a banner, instead of taking the whole site offline.

### Signal it's working
Support contacts during maintenance; users returning after the stated time.

### Implementation
- **Static:** yes: served from the CDN or edge.
- **Rendering:** a static page with status 503 and `Retry-After`.
- **Data and state:** switched by an edge rule or flag; a link to an external status page; for planned work, prefer a read-only mode to full downtime.
- **Anti-patterns:** status 200 with "maintenance" text; a maintenance page that loads the app bundle.

---

## Empty state

**Persuasion dial:** low.
**3C weight:** Act 3.

### The moment
The user sees a container with nothing in it: first use, no search results, everything cleared, or an error that looks like emptiness. Questions: "is this working?", "what goes here?", "what do I do now?".

### Must prove or protect
That the system works and that the next step toward value is obvious. For new users, the empty state *is* onboarding.

### Levers
- Empty states as teaching and pathways (P29).
- Design toward the activation action (P27).
- Real progress (P26).

### Specifics
- [A] NN/g: totally blank empty states cause confusion about whether the system works; use empty states to communicate system status, increase learnability and give direct pathways to key tasks. A common failure is showing "no items" while data is still loading. https://www.nngroup.com/articles/empty-state-interface-design/
- [C] Distinguish types: first use (teach + main action + optional example/template), no results (alternatives, see `content-navigation.md` → Search), user-cleared (acknowledge: "All done"), error (explain and offer retry).

### 🔴 Critical errors
- "No data" shown while loading or when the request failed.

### 🟠 Common errors
- Several empty states on one screen, each with its own illustration and CTA competing.
- Empty states with a cute illustration and no action.

### ↔ When the usual advice flips
- **Expert tools with frequent empties** (an inbox at zero, a cleared queue): a quiet, small message beats an illustration every time.

### Signal it's working
Share of users who take the suggested action from the empty state; time to first item created.

### Implementation
- **Static:** not a page: a state of every list.
- **Rendering:** part of the component that renders the list.
- **Data and state:** one empty-state component with variants: first use (explain, primary action, sample data), no results (show active filters and how to clear them), done, error (retry), no permission (request access).
- **Anti-patterns:** "no data" shown while loading or after a failed request.

---

## Success / Thank-you page

**Persuasion dial:** low-medium.
**3C weight:** Mem 3 / Act 3.

### The moment
The user just completed something (signed up, sent a form, bought, published). Relief, some residual doubt ("did it work?"), and peak openness to a next step.

### Must prove or protect
That the action succeeded and what happens next — closing one story and, if appropriate, opening the next.

### Levers
- Peak-end (P28): a proportionate celebration tied to the user's achievement.
- Specificity (P07): what was received, reference, what happens when.
- A useful next step (P27); reciprocity (P15); referral only if natural (P11).

### Specifics
- [A] GOV.UK confirmation pages: reassure that the transaction is complete and explain what happens next; include a reference number where useful.
- [B] Robinhood's pre-launch thank-you page showed the person's queue position and a personal referral link, turning the confirmation into the main growth loop.
- [C] Send the same confirmation by email immediately.

### 🔴 Critical errors
- Dead ends: no confirmation details, no next step.
- Offers that contradict what the user just did (upselling the plan they just bought).

### 🟠 Common errors
- Celebrations about the brand rather than the user's accomplishment.
- No protection against double submission when the user refreshes.

### ↔ When the usual advice flips
- **Serious or sensitive contexts** (medical forms, legal filings, complaints): celebration feels inappropriate; calm reassurance and clear next steps are the right peak.

### Signal it's working
Next-step click-through; confirmation-related support contacts; referral share where relevant.

### Implementation
- **Static:** yes for a generic thank-you; app when it shows an order.
- **Rendering:** reached by a redirect after the post; not indexed.
- **Data and state:** safe on reload (no second submission, the conversion counted once); a clear next action; transaction details read from the server, never from query parameters.
- **Anti-patterns:** re-submitting or re-counting on reload.
