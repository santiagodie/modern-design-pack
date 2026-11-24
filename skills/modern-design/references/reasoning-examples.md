# Worked reasoning examples

Reference for `modern-design`, step 1. Open it from `reasoning.md` when you want to see the method applied end to end.

> **Order of authority:** `ethics.md` (hard limit) > `design-brief.md` > `reasoning.md` (method for writing the brief) > `principles.md` and `pages/` (consulted afterwards). When two disagree, the higher one wins.

Three invented products, chosen because they sit at different points of the persuasion dial. Read them for *where the decisions come from*, not for the decisions themselves. None of these solutions should be copied to a different product.

Contents:
1. SaaS for small dental clinics (consumer-ish B2B, high distrust of software)
2. Online running-shoe store (e-commerce, cost and fit anxiety)
3. Internal support console (expert tool used all day, zero persuasion)

---

## 1. SaaS for small dental clinics

**Person:** owner of a two-chair clinic who handles bookings by phone, misses calls while treating patients, and distrusts software ("we tried one and it was a mess").
**Central promise:** *"Your patients book on their own and you stop losing appointments because you couldn't answer the phone, without changing how you work."*

The promise has two halves: a benefit ("stop losing appointments") and a protection against her fear ("without changing how you work"). Both must survive the whole journey.

**Ad → Landing.** She arrives from an ad about missed calls; that is what she now believes. A landing that opens with "Comprehensive clinic management software" breaks the promise in the first second, and "comprehensive" sounds like the mess she fears. The headline picks up the missed call. Below it she sees what her patient will see when booking, because her doubt is "will my older patients manage this?". Social proof is close to her — small clinics, her country, a concrete number — not "thousands of customers". Her main objection is answered where it arises, next to the button: "we set it up with you in a 20-minute call".

**Pricing.** Her decision is not "which plan" but "what does it really cost, and can I get out?". Total price per clinic with taxes clarified matters more than a "most popular" badge. "Cancel anytime" sits next to the price, not in the terms. A decoy third plan would be a mistake: she is comparing against the phone, not against another plan.

**Sign-up.** "Without changing how you work" is contradicted by a twelve-field form. Ask for the minimum to show her booking page working; collect the rest when needed.

**Onboarding and empty state.** The first real win is *the first appointment that arrives on its own*. Onboarding is designed toward it: set hours, share the link, see the first booking. The empty calendar says what's missing for bookings to arrive and offers the next step.

**First booking.** The peak. It deserves its own moment because it proves the promise.

**Error.** A patient tries to book a taken slot: prevent it, offer the next free slots. An error in front of a patient breaks the protective half of the promise.

**Billing and cancellation.** Next charge date and amount always visible. Leaving takes as many steps as joining, with data export. The ending is what she will tell other clinics.

---

## 2. Online running-shoe store

**Person:** a recreational runner replacing worn-out shoes, comparing two or three models across shops, unsure about size because brands fit differently, and burned before by return costs.
**Central promise:** *"The right shoe for how you run, delivered by Friday, and free to send back if it doesn't fit."*

**Catalogue.** She arrives from a search like "neutral trail shoes women". Her decision is narrowing, not buying. The doubt is "which of these suit *me*?". So filters must match how runners think (terrain, cushioning, drop, width), allow several values per filter, and show what is applied. The tile shows what she compares on: price including any delivery cost, rating *and number of ratings*, and the attribute she filtered by. When she returns from a product page, she lands exactly where she was; losing her place would cost her the comparison she was building.

**Product page.** Her real fear is fit, not features. So the size guide is next to the size selector, not in the footer, and it speaks in her terms ("runs half a size small compared with brand X"). Reviews are filterable by "fit". The return promise appears next to the button, because "free to send back" is half of the central promise and it is exactly what reduces her risk. "Only 2 left" appears only if it is true, in her size.

**Cart.** She checks that total, size and date are right. The delivery date is shown as a date ("arrives Friday"), not as a speed ("3–5 business days"), because the promise said Friday.

**Checkout.** Guest checkout by default; she can create an account on the confirmation page with one field, using the data already given. Card security signals sit next to the card field, where the doubt appears, not in the footer. Minimal fields. Nothing pre-ticked.

**Confirmation.** What she bought, in which size, when it arrives, how to return it. This is the end of the purchase story and the start of the "will it fit?" story.

**Order history / tracking.** The most important account feature for most shoppers is knowing where the order is and when it arrives. Status, carrier, estimated date and the next event live on the store's own page; she shouldn't be bounced to a carrier site that says "no information available yet".

**Return.** The promise is tested here. A return started in two steps with a printable or QR label keeps the promise; a return that requires an email to support breaks it — and that's the memory she'll keep.

---

## 3. Internal support console

**Person:** a support agent who handles 60–80 tickets a day, knows the tool deeply, works with keyboard shortcuts, and is measured on resolution time and accuracy.
**Central promise (internal):** *"Resolve each customer's problem quickly and correctly, without hunting for information or making irreversible mistakes."*

Here the persuasion dial is at zero. There is nothing to sell. Every principle that served the first two products — curiosity, social proof, emotional peaks — would be friction. The same reasoning method leads to the opposite design.

**Ticket queue (a dashboard).** Her decision: "what do I handle next?". So the top of the screen answers that: what is breaching its time limit, what is assigned to her, what changed since she last looked. High density is correct here; she is an expert scanning dozens of rows. Ordering and filters are stable and remembered.

**Ticket view (an editor plus history).** Her doubt is "do I have the full picture?". Customer history, previous tickets and order status sit beside the reply, so she doesn't switch tabs. Standard shortcuts work. Drafts autosave.

**Actions.** Refunds and account deletions are irreversible and costly, so they get specific confirmations ("Refund €84.90 to card ending 4417?"), placed away from frequent harmless actions so a slip can't trigger them. Frequent, reversible actions (tagging, assigning) get no confirmation at all, only undo; confirming them would train her to click "Yes" without reading, which would make the dangerous confirmations useless.

**Errors.** When the payment system is down, the console says so in one line with the time it was detected and what still works, instead of failing silently on submit.

**Lesson.** Nothing here came from "admin panels usually have X". It came from the same six questions. The answers were simply different because the person, her frequency of use and the cost of her mistakes were different.
