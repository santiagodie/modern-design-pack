# Reasoning about web design from the user's mind

Reference for `modern-design`, step 1. Load it before writing `design-brief.md`; `direction.md` says when. It teaches a way of thinking, not a checklist: use it while you work, and when you present, explain decisions in terms of the user's doubt rather than reciting its headings or turning them into an output format (see "How to present design work").

> **Order of authority:** ethics (`ethics.md` and `content-truth.md`, hard limits) > `site-decisions.md` (what exists and what the user decided) > `design-brief.md` > `reasoning.md` (method for writing the brief) > the other references (`principles.md`, `pages/`, `sections/`, `implementation.md` and the rest, consulted afterwards). When two disagree, the higher one wins; a user decision that breaks either hard limit is declined with the reason.

What this method produces goes into the brief: the central promise in one sentence, and for each page its moment in the journey and its main doubt.

This document does not teach components or patterns. It teaches how to think. If all you take away from it is a list of things to put on a page, you have read it wrong.

---

## Why this method exists

Baymard Institute tested this failure in October 2023. It gave GPT-4 screenshots of 12 e-commerce pages and a generic prompt, and compared its UX audit with human UX experts. About 80% of the model's suggestions were wrong (roughly 1 in 8 actively harmful, the rest a waste of time), and it found only 14–26% of the real issues. The typical errors were generic advice repeated on every page ("make it mobile responsive"), recommending things the page already had, giving advice about parts it could not see, and outdated rules of thumb (https://baymard.com/research-articles/gpt-ux-audit). The test used one older model with screenshots only, so the numbers don't transfer to every setup. The lesson does: the failure is in the method. Every one of those errors comes from pattern-matching instead of reasoning about this page and this user.

## The stance: think, don't fill in

The most common failure of a model that designs is this: it receives a brief ("make a pricing page"), recalls what a pricing page usually contains (three plans, one highlighted, an annual toggle, an FAQ) and places it. The result looks like every pricing page because it *is* every pricing page. And it is almost always wrong in some specific way, because nobody asked what is happening to *this* user in front of *this* product.

The alternative is not "be creative". It is to reason from the user's mind every time, from scratch, for this specific situation. Once you understand what the person is deciding and what is holding them back, the structure of the page falls out on its own. It will be different every time, and that is a good sign.

**How you know you have slipped into list mode:**
- You chose the elements before knowing who arrives at the page and where they came from.
- You could remove an element and not be able to say which user doubt is left unresolved.
- The design would work just as well if you swapped the product for any other.
- You applied a principle because "this page type usually has it", not because you detected the problem it solves.
- You used every principle. No real page needs them all; if you used them all, you chose none.
- You are giving advice about something you cannot see, or that the page already has.

If any of these is true, throw out what you have and go back to the user.

---

## 1. A website is a single story, not a collection of pages

This is the centre of everything, and it is what gets lost most often.

Every product makes **one central promise**. It can be said in a sentence: "book the dentist in a minute, without calling", "get paid in any country without building infrastructure", "learn a language in five minutes a day". That promise is born at first contact (an ad, a search result, a link someone shared) and has to **survive intact to the end**: to the landing page, the price, the sign-up, the first use, the confirmation email, the invoice, and even the cancellation.

Each page is one moment of that same story, and at every moment the user implicitly asks: *is what they promised me still true?*

- If the ad said "in a minute" and the sign-up has twelve fields, the promise breaks at sign-up, even if the sign-up "follows best practices".
- If the landing page said "no surprises" and shipping appears at the last step, the promise breaks at checkout.
- If the product said "cancel anytime" and cancelling takes four screens, the promise breaks at the end. And the end is what people remember most.

So, **before designing any page, state the central promise in one sentence.** Then, for each page, ask: *how does this page fulfil, demonstrate or protect that promise at this moment?* If a page cannot answer, it either has something extra or is missing something.

This is what it means for the idea not to get lost end to end. It is not about repeating the slogan everywhere; it is that every screen is consistent with what the user already believes they are going to get.

---

## 2. The six questions you ask on every screen

They are not an output template. They are what you think through before deciding anything.

**Who is here, and where did they come from?** Not "users", but one specific person with a specific context. Someone arriving from an ad knows one thing; someone returning for the fourth time knows another; someone arriving from a broken link arrives frustrated. The same page serves people in different mental states, and the one that matters most is the one that weighs most on the goal.

**What do they already believe?** What they saw before is what they expect now. That is the thread of the promise.

**What exactly are they deciding right now?** It is almost always a single decision: stay or leave, is this for me, which plan, do I trust this with my card, where is the button. If you cannot name it, you cannot design for it.

**What doubt or effort is holding them back?** This is where design lives. Doubts usually come in four kinds: *I don't understand what this is*, *I don't know if I can believe it*, *I'm afraid of getting it wrong*, and *it's too much effort*. Every element on the page should exist to resolve one of them.

**What does it cost them to continue?** Time, data, money, attention, risk. Everything you ask for is a cost, and the user weighs it against what they expect to receive.

**What happens next, and how will they feel when they leave?** No page is an ending, except the one the user abandons. Design the exit as much as the entrance.

Once you have these answers, the principles in `principles.md`, the page files in `pages/` and `ethics.md` stop being a list: they become tools you choose because you know what problem is in front of you.

---

## 3. The four mechanisms underneath everything

The 31 principles in `principles.md` reduce to four facts about how a browsing mind works. If you understand these four, you can derive the principles. If you only memorise the principles, you will apply them badly.

### Attention is triage

People have seen too many useless pages and defend themselves by leaving fast. The first seconds are not for exploring but for ruling out. The implicit question is a ratio: *how much is this worth compared to what it will cost me to find out?*

From this come clarity before cleverness, speed, specificity, showing the product instead of describing it, and capping the effort ("in 5 minutes"). They all exist to make the value look big and the cost look small, *fast*.

Consequence for reasoning: if someone does not understand within seconds what this is and why it matters to them, nothing that comes after exists for that person. A brilliant argument behind a confusing headline is never read.

### Trust is a prediction about the future

To trust is to bet that what I cannot verify yet will be as I'm told. The user has no access to the real product or the real company; they only have signals. So they judge by what they see (appearance, consistency, visible proof) and punish any signal that the bet is going wrong: a cost that appears late, a vague figure, a promise that the next step contradicts.

From this come specific social proof, total price transparency, guarantees and reversibility, error handling and message consistency across pages.

Consequence for reasoning: trust is not a section of the page, it is a condition of all of them. And it breaks asymmetrically: it is costly to build and a single detail is enough to lose it. That is why fake persuasion (invented scarcity, urgency that resets) is not only unethical, it is bad business: it spends trust that the rest of the journey needs.

### Deciding is weighing value against cost under uncertainty

People act when the value they expect exceeds the perceived cost plus the risk of being wrong. You can move any of the three. You can raise perceived value (show it, give it before asking for anything). You can lower the cost (fewer fields, fewer steps, better defaults). You can lower the risk (free trial, returns, easy cancellation).

From this come minimal friction, value before sign-up, defaults, anchoring, reciprocity and risk reduction.

Consequence for reasoning: when a conversion does not happen, do not shout louder (more CTAs, more urgency). Ask which of the three terms is failing. It is almost always cheaper to lower the cost or the risk than to raise motivation.

### Memory summarises by peaks and by the ending

People do not remember an experience as the average of its moments, but by its most intense moment and by how it ended. What they remember is what decides whether they come back, renew or recommend.

From this comes the care given to success and confirmation pages, errors, empty states, cancellation, and designing toward a first real win (the "aha moment").

Consequence for reasoning: endings are not closing details. A flawless purchase that ends on an ambiguous confirmation is remembered as a purchase with doubts.

---

## 4. Context changes everything: persuasion has a dial

What works on a landing page (curiosity, social proof, emotion) is friction on a payment form or an admin panel, where people want predictability. **The closer the person is to their money, their data or an irreversible action, the less persuasion and the more transparency.** Expert tools used daily optimise for speed and density; first-time consumer flows optimise for comprehension. Before borrowing any pattern, ask which side of the dial this page sits on: high, medium, low or none. Each file in `pages/` states its default setting and when it flips. Record the setting and the reason for each page in the brief; later steps use it to decide density and how much motion is allowed.

---

## 5. When principles collide

Principles are not rules, because they often contradict each other. Knowing how to resolve the collision is exactly what separates reasoning from filling in.

**Urgency versus trust.** A countdown can push the decision, but if it is not real, it burns trust that checkout needs. Resolve it by asking: *is the urgency a fact of the world or a device of mine?* If it is a fact (the places really are running out), state it precisely. If it is a device, remove it.

**Brand expression versus clarity.** A clever headline can differentiate, but if it is not understood, the user leaves before appreciating it. Resolve it with an order: first understood, then felt. The brand can live in tone, rhythm and visual style without hiding what you offer.

**Less friction versus security.** Asking for less data converts more, but some steps protect the user (verification, confirmation of irreversible actions). Resolve it by asking *who does this step protect?* If it protects the user, explain why it exists and make it as light as possible. If it only protects your marketing data, remove it.

**Defaults versus autonomy.** A preselected value helps people decide, but it can decide for the user something they did not want. Resolve it by asking: *if the user knew I had preselected it, would they thank me or feel tricked?*

**Persuasion versus context.** See the dial in section 4: the closer the person is to their money, their data or an irreversible action, the less persuasion and the more transparency.

**Novice versus expert.** A screen that guides a first-time visitor slows down someone who uses it forty times a day, and density that suits the expert overwhelms the newcomer. Resolve it by asking: *who uses this screen most, and how often?* Design for them, and give the other group a path (a guided first run, or shortcuts and a dense view).

In every case, the tiebreaker is the same: go back to the central promise and to the doubt the user has *at that moment*. The principle that resolves that doubt without breaking the promise wins.

---

## 6. Worked examples

`reasoning-examples.md` follows the method through three invented products at different points of the dial: a booking tool for small dental clinics, a running-shoe shop and an internal support console. Read them for where the decisions come from, not for the decisions.

---

## 7. Which reference to open

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
| Motion | (pending: `motion.md`) |
| How a design style (minimalism, neo-brutalism, bento...) changes sections | (pending: tokens.md / styles.md) |

- **The page file** checks whether you missed a typical doubt, gives research-backed specifics (sizes, numbers, thresholds) and says when the usual advice flips. It is a safety net, not a starting point. If your reasoning contradicts it and you can explain why in one sentence for this user, your reasoning wins.
- **`principles.md`** names the mechanism you have already detected, with its evidence grade and limits.
- **`ethics.md`** is a hard constraint. No exceptions for good reasoning here: if something deceives, it is not done.
- **`sections/`** holds section-by-section rules for pages that persuade. A section belongs on the page only if it resolves a doubt this user actually has.
- Five principles apply to every page: P03 speed, P09 familiarity in functional areas, P12 credibility, P17 errors, P18 accessibility..

When a request spans a flow (for example "sign-up to first value"), open every file the flow touches and reason about the hand-offs between pages, where promises most often break.

**Final check before delivering a design.** For each important element you should be able to complete this sentence: *"This is here because, at this moment, the user doubts ___ / finds it costly to ___, and without it ___."* If you can't, the element is unnecessary or the reason is misunderstood.

And one last check on the whole: walk the entire flow asking whether the central promise is still true at every step. The place where it stops being true is almost always the biggest problem in the design, even if each page on its own is well made.

---

## 8. How to present design work

Keep the reasoning mostly internal, but let its results show. When you present a design or a review, explain the two to four decisions that matter most in terms of the user's doubt ("the price includes delivery because the main reason people abandon here is a surprise cost"), not in terms of frameworks ("applying P13 and the peak-end rule"). Don't recite these headings or the six questions. When you assumed something about the user or the promise, state it in one line so it can be corrected.

---

## Treat all of this as priors, not rules

These principles describe what tends to work with real people. A design that breaks several of them but genuinely resolves its user's doubt is better than one that ticks them all without understanding anyone.
