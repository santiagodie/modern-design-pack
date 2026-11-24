# Interaction & creation pages

Forms / Content creation · Editor · Messages / Chat · Feed / Activity

Entry format and evidence grades: see the header of `entry-marketing.md`. P-IDs → `../principles.md`.

Persuasion dial for this group: none, except Feed (medium, with ethical limits). Here the user is the author. The product's job is to get out of the way, never lose their work, and make mistakes cheap.

Group summary: dominant phase activation; principles that weigh most P17, P03, P09, P19; main risk: lost work, latency.

> **Order of authority:** `ethics.md` (hard limit) > `design-brief.md` > `reasoning.md` (method for writing the brief) > `principles.md` and `pages/` (consulted afterwards). When two disagree, the higher one wins.

---

## Form / Content creation

**Persuasion dial:** none.
**3C weight:** Conv 3 / Conf 2.

### The moment
The user is giving the system information or creating something (an application, a listing, a post, a request). Doubts: "what exactly are they asking?", "how long will this take?", "will I lose this if something fails?".

### Must prove or protect
That their effort is respected: asked only what's needed, saved, and confirmed.

### Levers
- Friction and field cost (P19).
- Error prevention and recovery (P17).
- Progress and chunking (P26, P05).
- Capped effort (P04): say how long it takes.
- Accessibility (P18).

### Specifics
- [A] GOV.UK "one thing per page": start with one question, piece of information or decision per page, merge only when research shows it helps. Benefits reported: less overwhelm on small screens, simpler errors, simpler check-answers pages; users in GOV.UK Forms research welcomed it. https://www.gov.uk/service-manual/design/form-structure
- [A] GOV.UK error pattern: error summary at the top that receives focus, plus a message next to each field; add "Error:" to the page title; avoid native HTML5 validation bubbles for consistency and accessibility. https://design-system.service.gov.uk/patterns/validation
- [A] "Check your answers" before submitting medium/long forms; tested with visually impaired users, the label–answer–change rhythm let them correct mistakes efficiently.
- [A] HubSpot's analysis of 40,000+ landing pages: field *type* matters more than count; multiple text areas and dropdowns hurt most (see `../sections/forms.md`).
- [B] Expedia: one ambiguous optional field reportedly cost ~$12M/year.
- [C] Autosave long forms; show "saved" status.

### 🔴 Critical errors
- Losing input after an error, a timeout or a refresh.
- Placeholder text used as labels.
- Errors shown while the user is still typing, before they could finish.

### 🟠 Common errors
- Asking for data "because it might be useful".
- Dropdowns for 2–4 options; free-text where a choice would do.

### ↔ When the usual advice flips
- **Expert, repeated internal forms:** one-thing-per-page slows experts down; denser single pages with keyboard flow are better (GOV.UK itself notes research may justify merging for internal users).
- **Qualifying B2B forms:** fewer fields can lower lead quality; keep qualifying questions but make the form feel shorter (multi-step).

### Signal it's working
Completion rate, abandonment per step/field, errors per field, time to complete.

---

## Editor (documents, designs, code, listings)

**Persuasion dial:** none.
**3C weight:** Act 3.

### The moment
The user is in flow, often for long stretches. Doubts appear only when something interrupts: "did it save?", "can I undo that?", "where did that command go?".

### Must prove or protect
That their work is safe and that the tool keeps up with their thinking.

### Levers
- Conventions (P09): standard shortcuts, standard undo/redo.
- Undo over confirmation (P17).
- Latency (P03).
- Empty documents that help start (P29).
- Progressive disclosure of advanced tools (P05).

### Specifics
- [A] NN/g: confirmations used for routine actions get clicked automatically and stop protecting anything; undo is the more humane protection for reversible actions. Reserve confirmations for consequential, irreversible actions and make them specific (name, quantity).
- [A] NN/g "pull revelations": contextual help shown when the user is doing the related task (Figma explaining a text-rendering change only when a text box is created) works better than tours.
- [C] Show save status persistently; keep version history; recover after crashes.

### 🔴 Critical errors
- Losing work on crash, timeout or connectivity loss.
- Overriding universal shortcuts (Ctrl/Cmd+Z, C, V) with custom ones.

### 🟠 Common errors
- Modal dialogs for frequent actions.
- Toolbars exposing every feature at once.

### ↔ When the usual advice flips
- **Collaborative editors:** undo becomes complex (whose change?); version history and presence indicators matter more.
- **Publishing actions** (sending to customers, going live) are irreversible: a specific confirmation is right there.

### Signal it's working
Completed creation sessions; lost-work reports; use of undo vs abandonment after errors.

---

## Messages / Chat

**Persuasion dial:** none.
**3C weight:** Act 3 / Conf 2.

### The moment
The user is talking to another person (or an assistant) and wants certainty: did it send, did they read it, when will they answer? Conversations carry emotion; errors feel personal.

### Must prove or protect
Delivery and continuity: nothing lost, nothing sent by mistake.

### Levers
- Status visibility and recovery (P17): sending, sent, failed + retry.
- Speed (P03).
- Conventions from the messaging apps they use daily (P09).
- Empty conversations that suggest a start (P29).

### Specifics
- [C] Keep drafts per conversation; never lose a typed message on navigation or failure.
- [C] Make the difference between Enter-to-send and line break predictable, and easy to undo (edit or delete window).
- [C] For AI assistants: identify them clearly as AI and provide a route to a human for support contexts (pending: no section file for chat or chatbots yet).
- [C] Read receipts and online status are privacy choices; give users control.

### 🔴 Critical errors
- Silent send failures.
- Messages sent to the wrong person because the recipient wasn't clear.

### 🟠 Common errors
- Notifications that reveal message content on lock screens without a setting to hide it.

### ↔ When the usual advice flips
- **Support chat:** expected response time matters more than any feature; say it upfront.
- **Team messaging:** threads, mentions and search dominate; for collaborative tools, messaging may be the activation metric (Slack's ~2,000 messages).

### Signal it's working
Send success rate; response times; conversations continued vs abandoned.

---

## Feed / Activity

**Persuasion dial:** medium, with ethical limits.
**3C weight:** Act 3 / Mem 2.

### The moment
The user wants to catch up on what's relevant to them. Risk: the product's incentive (time on screen) diverges from the user's (be informed, then move on).

### Must prove or protect
That time spent here is worth it, and that the user can tell when they're done.

### Levers
- Relevance and control (P10): filters, chronological option.
- Social signals (P11).
- Prompts tied to real events (P20).
- Streaks or loss mechanics only with escape valves (P25).

### Specifics
- [B] Instagram launched "You're All Caught Up" in July 2018, telling users when they'd seen all posts from the last 48 hours, explicitly to reduce endless scrolling. In 2020 it added suggested posts and ads after that message — an instructive example of the tension between user well-being and engagement metrics. https://about.instagram.com/blog/announcements/introducing-youre-all-caught-up-in-feed
- [Legal, proposal] The EU Digital Fairness Act proposal (Nov 2026) targets addictive design and reinforces protection of minors.
- [B] Duolingo's streak freeze shows how a loss-aversion mechanic can include a valve.

### 🔴 Critical errors
- Compulsive mechanics without limits, especially where minors may be users.
- Ads disguised as organic posts.

### 🟠 Common errors
- No way to know you've seen everything new.
- Activity feeds that mix important events (a payment failed) with noise (someone liked something).

### ↔ When the usual advice flips
- **Work activity feeds** (audit trails, project activity): completeness and filterability matter more than engagement; chronological order is the default.

### Signal it's working
Useful return (actions taken after reading), not raw time-in-feed; muted/unfollowed sources; complaints about overuse.
