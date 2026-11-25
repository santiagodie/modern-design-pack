# Management & administration pages

Dashboard · Analytics / Reports · Admin panel · User / Team management

Entry format and evidence grades: see the header of `entry-marketing.md`. P-IDs → `../../strategy/principles.md`.

Persuasion dial for this group: none; low for user and team management. These users are often experts who come back daily. Optimise for speed, accuracy and confidence. Density that would overwhelm a newcomer can be exactly right for an expert; the question is always who uses the screen most and how often.

Group summary: dominant phase operational confidence; principles that weigh most P10, P07, P17, P12; main risk: density without hierarchy, irreversible errors.

> **Order of authority:** ethics (`ethics.md` and `content-truth.md`, hard limits) > `site-decisions.md` (what exists and what the user decided) > `design-brief.md` > `reasoning.md` and `design-reasoning.md` (method for writing the brief) > the other references (`principles.md`, `pages/`, `sections/`, `implementation.md` and the rest, consulted afterwards). When two disagree, the higher one wins; a user decision that breaks either hard limit is declined with the reason.

---

## Dashboard / Panel

**Persuasion dial:** none.
**3C weight:** Act 3 / Conf 2.

### The moment
The user glances at the screen to answer one question: "does anything need my attention, and what do I do next?". Seconds, not minutes, for operational use; longer for analytical reviews.

### Must prove or protect
That nothing important is hidden, and that what's shown is current and trustworthy.

### Levers
- Clarity of the main question (P01): the top of the screen answers it.
- Cognitive load (P10): few elements, clear hierarchy.
- Specificity with context (P07): numbers compared to something (previous period, target).
- Empty states that lead to the first data (P29).

### Specifics
- [A] NN/g distinguishes operational dashboards (time-sensitive, continuously updating, immediate action) from analytical ones (at-a-glance overview that prompts further investigation). Know which you're building. https://www.nngroup.com/articles/dashboards-preattentive/
- [A] Preattentive processing: 2D position and length are the visual attributes people read most accurately for quantities; prefer bar and line charts over area-based charts (pies, bubbles, gauges) for comparisons (NN/g).
- [C] Stephen Few's dashboard guidance (widely used): one audience per dashboard; numbers need context; limit simultaneous alerts so they keep meaning.
- [C] State data freshness ("updated 2 min ago") and loading vs truly-empty states distinctly.

### 🔴 Critical errors
- Showing "no data" while data is still loading (NN/g flags this as a misleading system-status message).
- Colour as the only signal of good/bad (fails colour-blind users and WCAG).

### 🟠 Common errors
- Walls of equal-weight charts without hierarchy.
- Vanity metrics nobody acts on.

### ↔ When the usual advice flips
- **Wall-mounted/operational screens** (support queues, logistics): huge type, few numbers, status colours with redundant labels; dark themes can suit dim rooms.
- **New users of a SaaS product:** their first dashboard is an onboarding surface; show the path to the activation action rather than empty charts.

### Signal it's working
Time from opening to action; recurring use; questions to support about "what does this number mean".

### Implementation
- **Static:** app.
- **Rendering:** streamed server rendering; each widget with its own loading and error boundary; charts as islands only where they are interactive.
- **Data and state:** date range, filters and tab in the URL; numbers aggregated on the server; per-tenant caching; skeletons the size of the final widget; widget visibility follows roles, and the server enforces it.
- **Anti-patterns:** one failing widget that blanks the page; sending raw rows to the browser to aggregate.

---

## Analytics / Reports

**Persuasion dial:** none.
**3C weight:** Conf 3.

### The moment
The user wants to understand what happened and often to explain it to someone else. Doubts: "can I trust this number?", "what exactly does it measure?", "compared to what?".

### Must prove or protect
The integrity of the numbers. A misleading chart damages trust in the whole product.

### Levers
- Specificity and definitions (P07).
- Error prevention (P17): clear periods, filters and units.
- Conventions (P09): standard chart types, export formats.

### Specifics
- [A] Position and length encode quantity most accurately (NN/g, preattentive).
- [C] Every metric should have an accessible definition; every chart a visible period and filter state.
- [C] Truncated axes exaggerate differences; if you must truncate, mark it.

### 🔴 Critical errors
- Hiding the period, sample or definition behind a chart.
- Comparisons of incomparable periods (a full month vs a partial one) that don't tell the reader the periods differ.

### 🟠 Common errors
- No export, forcing screenshots.
- Defaults that show the most flattering period.

### ↔ When the usual advice flips
- **Executive summaries:** fewer numbers with plain-language takeaways beat interactive exploration.
- **Analyst users:** they want raw data access and flexible slicing over curated stories.

### Signal it's working
Reports exported or shared; support questions about definitions; decisions referencing the report.

### Implementation
- **Static:** app.
- **Rendering:** streamed server rendering.
- **Data and state:** pre-aggregated data; large tables paginated or virtualised, with keyboard navigation and sticky headers; exports as background jobs; every chart with a data-table alternative; one shared formatter for numbers and dates.
- **Anti-patterns:** exports that block the page; charts with no table alternative.

---

## Admin panel

**Persuasion dial:** none.
**3C weight:** Conf 3.

### The moment
An operator performs many tasks in sequence, often in bulk, often under time pressure. Mistakes can affect customers or money. Doubt: "am I about to do what I think I'm doing, to the right records?".

### Must prove or protect
That operators can act fast without causing irreversible damage, and that actions are traceable.

### Levers
- Error prevention for consequential actions (P17).
- Conventions and keyboard efficiency (P09).
- Accountability (P12): audit logs.
- High density is acceptable (P10) when users are experts.

### Specifics
- [A] NN/g: separate consequential options from frequent ones; slips happen when users are in automatic mode, especially in tables and repetitive work. https://www.nngroup.com/articles/proximity-consequential-options/
- [A] Confirmations only for consequential, irreversible actions, and specific ("Delete 214 subscribers from list 'Spring'?"), like the Mailchimp example cited by NN/g; for reversible actions use undo.
- [C] Bulk actions should state exactly how many records are affected before executing.
- [C] Typed confirmation (type the name) only for the most destructive actions.

### 🔴 Critical errors
- Irreversible bulk actions with generic "Are you sure?" dialogs.
- No audit trail of who changed what.

### 🟠 Common errors
- Consumer-style spacing that forces endless scrolling for experts.
- Filters and sort reset on every visit.

### ↔ When the usual advice flips
- **Occasional admins** (a small-business owner configuring their shop once a month): they are novices, not experts; guidance and safer defaults beat density.

### Signal it's working
Operational errors; time per task; actions reversed shortly after execution.

### Implementation
- **Static:** app.
- **Rendering:** its own route group (or subdomain) with stricter policies and shorter sessions; not indexed.
- **Data and state:** roles enforced on the server for every read and write; an audit log for privileged changes; bulk actions safe to retry, confirmed in a `<dialog>` with progress; list, detail and form generated from one resource definition.
- **Anti-patterns:** hiding admin buttons as the only protection; admin code shipped in the public bundle.

---

## User / Team management

**Persuasion dial:** low.
**3C weight:** Act 3 / Conf 3.

### The moment
An owner or admin invites people, sets permissions, or removes access. Doubts: "what can this person see and do?", "will adding them cost money?", "did removing them really cut access?".

### Must prove or protect
Control and security of the organisation's data; no surprise charges.

### Levers
- Activation through invitations (P27): in collaborative tools, inviting teammates often *is* the activation action.
- Error prevention (P17) and credibility (P12).
- Cost transparency (P13).

### Specifics
- [B] Slack's activation threshold (teams exchanging ~2,000 messages; ~93% retained) depends on more than one person being in the workspace, so invitation flows are a core growth lever, not admin housekeeping.
- [C] Explain roles in plain language with what each can and cannot do; show a preview of permissions before saving.
- [C] Show the price impact of adding a seat before confirming the invitation.
- [C] When removing a user, say what happens to their content and sessions.

### 🔴 Critical errors
- Charging for seats without showing it at the moment of inviting.
- Removing a user without revoking active sessions or tokens.

### 🟠 Common errors
- Role names without descriptions ("Editor", "Manager", "Owner").
- Invitations that expire silently.

### ↔ When the usual advice flips
- **Enterprise with SSO/SCIM:** users are provisioned by identity systems; the screen becomes about mapping groups to roles and auditing, not inviting.

### Signal it's working
Invitations sent and accepted; time-to-second-active-user; permission-related incidents.

### Implementation
- **Static:** app.
- **Rendering:** server-rendered.
- **Data and state:** single-use, expiring invitations; a role model that protects the last owner; tenant scoping everywhere; seat counts tied to billing.
- **Anti-patterns:** roles checked only in the interface.
