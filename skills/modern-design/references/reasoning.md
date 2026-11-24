# Reasoning about web design from the user's mind

Reference for `modern-design`, step 1. Load it before writing `design-brief.md`; `direction.md` says when. It teaches a way of thinking, not a checklist: apply it silently, and don't repeat its headings to the user or turn them into an output format.

> **Order of authority:** `ethics.md` (hard limit) > `design-brief.md` > `reasoning.md` (method for writing the brief) > `principles.md` and `page-types.md` (consulted afterwards). When two disagree, the higher one wins.

What this method produces goes into the brief: the central promise in one sentence, and for each page its moment in the journey and its main doubt.

This document does not teach components or patterns. It teaches how to think. If all you take away from it is a list of things to put on a page, you have read it wrong.

---

## The stance: think, don't fill in

The most common failure of a model that designs is this: it receives a brief ("make a pricing page"), recalls what a pricing page usually contains (three plans, one highlighted, an annual toggle, an FAQ) and places it. The result looks like every pricing page because it *is* every pricing page. And it is almost always wrong in some specific way, because nobody asked what is happening to *this* user in front of *this* product.

The alternative is not "be creative". It is to reason from the user's mind every time, from scratch, for this specific situation. Once you understand what the person is deciding and what is holding them back, the structure of the page falls out on its own. It will be different every time, and that is a good sign.

**How you know you have slipped into list mode:**
- You chose the elements before knowing who arrives at the page and where they came from.
- You could remove an element and not be able to say which user doubt is left unresolved.
- The design would work just as well if you swapped the product for any other.
- You applied a principle because "the matrix says it goes on this page", not because you detected the problem it solves.
- You used every principle. No real page needs them all; if you used them all, you chose none.

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

Once you have these answers, the principles in `principles.md`, `page-types.md` and `ethics.md` stop being a list: they become tools you choose because you know what problem is in front of you.

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

## 4. When principles collide

Principles are not rules, because they often contradict each other. Knowing how to resolve the collision is exactly what separates reasoning from filling in.

**Urgency versus trust.** A countdown can push the decision, but if it is not real, it burns trust that checkout needs. Resolve it by asking: *is the urgency a fact of the world or a device of mine?* If it is a fact (the places really are running out), state it precisely. If it is a device, remove it.

**Brand expression versus clarity.** A clever headline can differentiate, but if it is not understood, the user leaves before appreciating it. Resolve it with an order: first understood, then felt. The brand can live in tone, rhythm and visual style without hiding what you offer.

**Less friction versus security.** Asking for less data converts more, but some steps protect the user (verification, confirmation of irreversible actions). Resolve it by asking *who does this step protect?* If it protects the user, explain why it exists and make it as light as possible. If it only protects your marketing data, remove it.

**Defaults versus autonomy.** A preselected value helps people decide, but it can decide for the user something they did not want. Resolve it by asking: *if the user knew I had preselected it, would they thank me or feel tricked?*

**Persuasion versus context.** What works on a landing page (curiosity, social proof, emotion) gets in the way on a payment form or an admin panel, where the user wants predictability. The closer the person is to their money, their data or an irreversible action, the less persuasion and the more transparency.

In every case, the tiebreaker is the same: go back to the central promise and to the doubt the user has *at that moment*. The principle that resolves that doubt without breaking the promise wins.

---

## 5. A reasoned journey, end to end

Illustrative example (invented product) to show the reasoning, not to copy the solution.

**Product:** an app that lets small dental clinics manage online appointments.
**Person:** the owner of a two-chair clinic who handles appointments by phone today, misses calls while treating patients and doesn't really trust software ("we tried one already and it was a mess").
**Central promise:** *"Your patients book on their own and you stop losing appointments because you couldn't answer the phone, without changing how you work."*

Notice that the promise has two halves: a benefit ("you stop losing appointments") and a protection against her fear ("without changing how you work"). Both have to survive the whole journey.

**Ad → Landing page.** She arrives from an ad that talked about missed calls, and that is what she believes now. If the landing page opens with "Comprehensive clinic management software", the promise breaks in the first second: it is not what she was told, and "comprehensive" sounds like exactly the mess she fears. The headline picks up the missed call. Below it, instead of an abstract illustration, she sees what her patient will see when booking, because her doubt is "will my older patients use this?". The social proof is not "thousands of customers" but something close to her: small clinics, in her country, with a concrete figure. Her main objection ("we tried one and it was a mess") is answered where it arises, before the button: "we set it up with you in a 20-minute call".

**Pricing.** Her decision here is not "which plan" but "how much does it really cost and can I get out?". So the total price per clinic, with taxes clarified, matters more than a "most popular" plan. And "cancel anytime" has to sit next to the price, not in the terms, because her fear is getting trapped again. A third decoy plan would be a mistake: she is comparing against the phone, not against another plan.

**Sign-up.** The promise says "without changing how you work". A twelve-field form contradicts the promise before she even starts. Ask for the minimum needed to show her booking page working, and the rest when it is needed.

**Onboarding and empty state.** The first real win is not "profile complete" but *the first appointment that arrives on its own*. The whole onboarding is designed toward that moment: set opening hours, share the link, see the first booking. The empty calendar does not say "No appointments"; it says what is missing for them to arrive and offers the next step.

**First appointment booked.** This is the peak. It deserves its own moment, because it is proof that the promise was true. It is worth far more than any welcome animation at sign-up.

**Error.** If a patient tries to book a slot that is already taken, the system prevents it before it happens and offers the next free slots. A badly handled error in front of a patient breaks the protective half of the promise ("no mess").

**Billing and cancellation.** The date and amount of the next charge are always visible. If she decides to leave, she leaves in the same number of steps it took to get in, with her data exportable. It seems to work against the business, but the ending is what she will remember and what she will tell other clinics.

What matters in the example is not the decisions but where they come from. None of them comes from "on a pricing page you put X". They all come from the same promise, the same person and the specific doubt at each moment.

---

## 6. How to use `principles.md`, `page-types.md` and `ethics.md`

First reason with this document: person, promise, decision, doubt, cost, exit. Only then consult:

- **`principles.md`:** to name the mechanism you have already detected, check its evidence and know its limits.
- **`page-types.md`:** to check whether you have missed a typical doubt for that kind of page. It is a safety net, not a starting point. If your reasoning contradicts the matrix and you can explain why in one sentence, your reasoning wins.
- **`ethics.md`:** as a hard constraint. No exceptions for good reasoning here: if something deceives, it is not done.

**Final check before delivering a design.** For each important element you should be able to complete this sentence: *"This is here because, at this moment, the user doubts ___ / finds it costly to ___, and without it ___."* If you can't, the element is unnecessary or the reason is misunderstood.

And one last check on the whole: walk the entire flow asking whether the central promise is still true at every step. The place where it stops being true is almost always the biggest problem in the design, even if each page on its own is well made.

---

## Treat all of this as priors, not rules

These principles describe what tends to work with real people. A design that breaks several of them but genuinely resolves its user's doubt is better than one that ticks them all without understanding anyone.
