# Reasoning about web design from the user's mind

> **Covers:** the shared method: think instead of filling in, the central promise, the four mechanisms, the persuasion dial scale, collisions between principles, how to present conclusions, and treating all of it as priors.
> **Read when:** at the start of any skill run, whole; in `modern-design`, before writing the brief.
> **Not here:** the six questions per screen, worked examples and which reference to open → references/design-reasoning.md; evidence grades and verification → references/evidence.md; the default dial per page type → references/pages/
> **Owner:** shared core (lives in modern-design)
> **Sources:** Baymard GPT-4 UX audit (2023); our own method, from docs/research/web-reasoning/; full list in docs/SOURCES.md

> **Order of authority:** ethics (`ethics.md` and `content-truth.md`, hard limits) > `site-decisions.md` (what exists and what the user decided) > `design-brief.md` > `reasoning.md` and `design-reasoning.md` (method for writing the brief) > the other references (`principles.md`, `pages/`, `sections/`, `implementation.md` and the rest, consulted afterwards). When two disagree, the higher one wins; a user decision that breaks either hard limit is declined with the reason.

This document does not teach components or patterns. It teaches how to think. If all you take away from it is a list of things to put on a page, you have read it wrong.

For the page-level part of the method (the six questions on every screen, the worked examples and which reference to open), see `design-reasoning.md`.

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

## 2. The four mechanisms underneath everything

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

## 3. Context changes everything: persuasion has a dial

What works on a landing page (curiosity, social proof, emotion) is friction on a payment form or an admin panel, where people want predictability. **The closer the person is to their money, their data or an irreversible action, the less persuasion and the more transparency.** Expert tools used daily optimise for speed and density; first-time consumer flows optimise for comprehension. Before borrowing any pattern, ask where on the dial this page sits. The scale has five levels:

- **High:** persuading is the page's job. Emotion, proof and a strong call to action are legitimate, as long as every claim is true.
- **Medium:** persuasion supports the content without pressure: proof next to the claim it backs, one call to action after the value is delivered.
- **Medium-low:** the person is finding or finishing something. Persuasion only helps them choose (ratings, a relevant suggestion, one next step) and never competes with the main task.
- **Low:** clarity and trust first; at most one optional, honest offer or next step that is easy to ignore.
- **None:** no persuasive tactic; any would be friction or a legal or trust risk. Clarity, transparency and a way out.

The default level for each page type, and when it flips, lives only in its entry in `pages/`. Record the setting and the reason for each page in the brief; later steps use it to decide density and how much motion is allowed.

---

## 4. When principles collide

Principles are not rules, because they often contradict each other. Knowing how to resolve the collision is exactly what separates reasoning from filling in.

**Urgency versus trust.** A countdown can push the decision, but if it is not real, it burns trust that checkout needs. Resolve it by asking: *is the urgency a fact of the world or a device of mine?* If it is a fact (the places really are running out), state it precisely. If it is a device, remove it.

**Brand expression versus clarity.** A clever headline can differentiate, but if it is not understood, the user leaves before appreciating it. Resolve it with an order: first understood, then felt. The brand can live in tone, rhythm and visual style without hiding what you offer.

**Less friction versus security.** Asking for less data converts more, but some steps protect the user (verification, confirmation of irreversible actions). Resolve it by asking *who does this step protect?* If it protects the user, explain why it exists and make it as light as possible. If it only protects your marketing data, remove it.

**Defaults versus autonomy.** A preselected value helps people decide, but it can decide for the user something they did not want. Resolve it by asking: *if the user knew I had preselected it, would they thank me or feel tricked?*

**Persuasion versus context.** See the dial in section 3: the closer the person is to their money, their data or an irreversible action, the less persuasion and the more transparency.

**Novice versus expert.** A screen that guides a first-time visitor slows down someone who uses it forty times a day, and density that suits the expert overwhelms the newcomer. Resolve it by asking: *who uses this screen most, and how often?* Design for them, and give the other group a path (a guided first run, or shortcuts and a dense view).

In every case, the tiebreaker is the same: go back to the central promise and to the doubt the user has *at that moment*. The principle that resolves that doubt without breaking the promise wins.

---

## 5. How to present design work

Keep the reasoning mostly internal, but let its results show. When you present a design or a review, explain the two to four decisions that matter most in terms of the user's doubt ("the price includes delivery because the main reason people abandon here is a surprise cost"), not in terms of frameworks ("applying P13 and the peak-end rule"). Don't recite these headings or the six questions. When you assumed something about the user or the promise, state it in one line so it can be corrected.

---

## Treat all of this as priors, not rules

These principles describe what tends to work with real people. A design that breaks several of them but genuinely resolves its user's doubt is better than one that ticks them all without understanding anyone.
