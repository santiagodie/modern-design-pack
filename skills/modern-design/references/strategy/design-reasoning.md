# Design reasoning: from the method to each page

> **Covers:** the method applied to designing pages: the six questions per screen, the worked examples, which reference to open per page type, the final checks per element and per flow, and how to present design work.
> **Read when:** `modern-design` step 1 (direction), after `reasoning.md` and before writing the brief.
> **Not here:** the shared method (promise, mechanisms, dial scale, collisions) → references/reasoning.md; the examples themselves → references/reasoning-examples.md; page-type specifics and default dial → references/pages/
> **Owner:** modern-design
> **Sources:** our own method, from docs/research/web-reasoning/ and the integrated web-design-reasoning skill; full list in docs/SOURCES.md

Reference for `modern-design`, step 1. Load it before writing `design-brief.md`; `direction.md` says when. It teaches a way of thinking, not a checklist: use it while you work, and when you present, explain decisions in terms of the user's doubt rather than reciting its headings or turning them into an output format (see "How to present design work").

> **Order of authority:** ethics (`ethics.md` and `content-truth.md`, hard limits) > `site-decisions.md` (what exists and what the user decided) > `design-brief.md` > `reasoning.md` and `design-reasoning.md` (method for writing the brief) > the other references (`principles.md`, `pages/`, `sections/`, `implementation.md` and the rest, consulted afterwards). When two disagree, the higher one wins; a user decision that breaks either hard limit is declined with the reason.

What this method produces goes into the brief: the central promise in one sentence, and for each page its moment in the journey and its main doubt.

Read `reasoning.md` first: it holds the shared method (the stance, the central promise, the four mechanisms, the persuasion dial and how principles collide). This file applies it to designing pages.

---

## 1. The six questions you ask on every screen

They are not an output template. They are what you think through before deciding anything.

**Who is here, and where did they come from?** Not "users", but one specific person with a specific context. Someone arriving from an ad knows one thing; someone returning for the fourth time knows another; someone arriving from a broken link arrives frustrated. The same page serves people in different mental states, and the one that matters most is the one that weighs most on the goal.

**What do they already believe?** What they saw before is what they expect now. That is the thread of the promise.

**What exactly are they deciding right now?** It is almost always a single decision: stay or leave, is this for me, which plan, do I trust this with my card, where is the button. If you cannot name it, you cannot design for it.

**What doubt or effort is holding them back?** This is where design lives. Doubts usually come in four kinds: *I don't understand what this is*, *I don't know if I can believe it*, *I'm afraid of getting it wrong*, and *it's too much effort*. Every element on the page should exist to resolve one of them.

**What does it cost them to continue?** Time, data, money, attention, risk. Everything you ask for is a cost, and the user weighs it against what they expect to receive.

**What happens next, and how will they feel when they leave?** No page is an ending, except the one the user abandons. Design the exit as much as the entrance.

Once you have these answers, the principles in `principles.md`, the page files in `pages/` and `ethics.md` stop being a list: they become tools you choose because you know what problem is in front of you.

---

## 2. Worked examples

`reasoning-examples.md` follows the method through three invented products at different points of the dial: a booking tool for small dental clinics, a running-shoe shop and an internal support console. Read them for where the decisions come from, not for the decisions.

---

## 3. Which reference to open

First reason with this document: person, promise, decision, doubt, cost, exit, dial. Only then open the file for each page type in the brief, and nothing else. `direction.md` gives the order of the whole step.

| Page | File |
|---|---|
| Landing, Home, About us, Pricing, Coming soon / Waitlist | `pages/entry-marketing.md` (for landing sections in depth, also `sections/`) |
| Catalogue, Category, Product page, Search results, Map, Calendar | `pages/content-navigation.md` |
| Cart, Checkout | `pages/commerce-purchase.md` |
| Order confirmation, Order history | `pages/commerce-after-purchase.md` |
| Sign-up, Login, Password recovery, Verification, Onboarding | `pages/authentication.md` |
| Profile, Settings, Account and billing, Notifications | `pages/user-account.md` |
| Forms, Editor, Messages / Chat, Feed / Activity | `pages/interaction-creation.md` |
| Dashboard, Analytics, Admin panel, User / Team management | `pages/management-admin.md` |
| Article list, Article, Documentation | `pages/blog-resources.md` |
| Contact, FAQ / Help, Support / Tickets | `pages/support-contact.md` |
| Terms, Privacy, Cookies | `pages/legal.md` |
| 404, 500, Maintenance, Empty state, Success page | `pages/states-system.md` |
| Naming a mechanism (P01–P31) and checking its evidence | `principles.md` |
| Anything with prices, consent, subscriptions, scarcity, urgency or reviews | `ethics.md` (hard limit) |
| Visual system: color, dark mode, typography, spacing (step 2) | `tokens.md`, then `tokens-color.md`, `tokens-color-dark.md`, `tokens-type.md`, `tokens-space.md` |
| Performance and accessibility | `implementation.md` |
| Motion | `motion.md` (skeleton; values pending) |
| How a design style (minimalism, neo-brutalism, bento...) changes sections | (pending: `styles.md`) |

- **The page file** checks whether you missed a typical doubt, gives research-backed specifics (sizes, numbers, thresholds) and says when the usual advice flips. It is a safety net, not a starting point. If your reasoning contradicts it and you can explain why in one sentence for this user, your reasoning wins.
- **`principles.md`** names the mechanism you have already detected, with its evidence grade and limits.
- **`ethics.md`** is a hard constraint. No exceptions for good reasoning here: if something deceives, it is not done.
- **`sections/`** holds section-by-section rules for pages that persuade. A section belongs on the page only if it resolves a doubt this user actually has.
- Five principles apply to every page: P03 speed, P09 familiarity in functional areas, P12 credibility, P17 errors, P18 accessibility.

When a request spans a flow (for example "sign-up to first value"), open every file the flow touches and reason about the hand-offs between pages, where promises most often break.

**Final check before delivering a design.** For each important element you should be able to complete this sentence: *"This is here because, at this moment, the user doubts ___ / finds it costly to ___, and without it ___."* If you can't, the element is unnecessary or the reason is misunderstood.

And one last check on the whole: walk the entire flow asking whether the central promise is still true at every step. The place where it stops being true is almost always the biggest problem in the design, even if each page on its own is well made.

---

## 4. How to present design work

Keep the reasoning mostly internal, but let its results show. When you present a design or a review, explain the two to four decisions that matter most in terms of the user's doubt ("the price includes delivery because the main reason people abandon here is a surprise cost"), not in terms of frameworks ("applying P13 and the peak-end rule"). Don't recite these headings or the six questions (§1). When you assumed something about the user or the promise, state it in one line so it can be corrected.
