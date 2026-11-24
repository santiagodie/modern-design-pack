# Ethical and legal limits, and quality of evidence

Reference for `modern-design` and `design-review`. A hard limit: if something deceives, it is not done, and good reasoning is no exception. When a recommendation in `principles.md` or `pages/` conflicts with this file, this file wins. `design-review` turns sections 4 and 6 into its DP checks, and section 7 into its placeholder check before publishing.

Load it for any page that persuades and, for section 7, for every build: the no-invention rule applies to every page, whatever its content.

> **Order of authority:** `ethics.md` (hard limit, including the no-invention rule) > `site-decisions.md` (what exists and what the user decided) > `design-brief.md` > `reasoning.md` (method for writing the brief) > the other references (`principles.md`, `pages/`, `sections/`, `implementation.md` and the rest, consulted afterwards). When two disagree, the higher one wins; a user decision that breaks `ethics.md` is declined with the reason.

Not legal advice. It summarises public facts to guide design decisions, with regulatory status as of November 2026; for specific cases, consult a professional.

## 1. Decision rule: legitimate persuasion vs dark pattern

A tactic is legitimate if it meets all three:
1. Truth: the information (stock, popularity, deadline, price) is true and verifiable at that moment.
2. Symmetry: undoing the decision costs the same as making it (sign-up = cancellation; accept = reject).
3. Aligned interest: the user, informed of the mechanism, would not feel deceived.

If any fails, it is a dark pattern. Do not propose it, even if it "converts".

## 2. Real reference cases (2019–2026)

| Case | What happened | Design lesson | Source |
|---|---|---|---|
| Amazon Prime vs FTC (Sept. 2025) | $2.5 B settlement ($1 B civil penalty + $1.5 B in refunds to ~35 M customers) over deceptive enrolment and a deterrent cancellation flow internally nicknamed "Iliad". The order requires simple cancellation and clear disclosure. | Cancelling must be as easy as subscribing. No multi-page flows with repeated confirmations. | https://www.jurist.org/news/2025/09/ftc-settles-amazon-prime-deceptive-practices-suit-for-2-5b/ |
| Hotel booking sites vs CMA (2019) | Expedia, Booking.com, Agoda, Hotels.com, ebookers and trivago committed not to give a false impression of popularity or availability, not to place sold-out hotels to create pressure, to show compulsory charges in the headline price and to distinguish sponsored results. | Scarcity and popularity only if real and with context ("others are looking at this hotel, perhaps for other dates"). Total price in the headline. | https://www.gov.uk/government/news/hotel-booking-sites-to-make-major-changes-after-cma-probe |
| Booking.com after the deadline (Which?, 2019) | Half of the "only X left" notices checked did not reflect availability; in one case 34 rooms remained. | A formal commitment is not enough: the message must come from real data and be precise ("at this price"). | https://www.which.co.uk/news/article/booking-com-still-misleading-holidaymakers-with-1-room-left-claims-aSNln2j8gkGl |
| Epic Games vs FTC (Dec. 2022) | FTC settlement of $520 M announced on 19 December 2022: a $275 M civil penalty for children's privacy violations (COPPA) and $245 M in refunds over dark patterns. A confusing button layout made players buy with a single press, account holders (children included) were charged without authorisation, and accounts were locked after disputed charges. | Purchase buttons must never be ambiguous; confirm charges; reinforced protection for minors. | https://www.ftc.gov/news-events/news/press-releases/2022/12/fortnite-video-game-maker-epic-games-pay-more-half-billion-dollars-over-ftc-allegations |
| Airbnb total price (April 2025) | Switches to showing the total price with fees (before taxes) by default worldwide in search results, ahead of the US rule on hidden fees. | Price transparency is now a market standard and a regulatory requirement in several jurisdictions. | https://news.airbnb.com/total-price-display-is-now-standard-globally |

## 3. Regulatory framework relevant to sites operating in the EU/Spain (status as of Nov. 2026)

| Rule | Status | Design impact |
|---|---|---|
| European Accessibility Act (Directive 2019/882) | Applicable since 28-06-2025. Existing content/services have a transition to 2030 depending on the case. | B2C e-commerce, including authentication and payment, must be accessible; technical reference EN 301 549 → WCAG 2.1 AA. Accessibility statement. |
| Digital Fairness Act (Commission proposal, 11-11-2026) | Proposal; under negotiation in Parliament and Council, the final text may change. | Targets: dark patterns, addictive design, unfair personalisation, influencer marketing, subscription traps. Includes a simple, unambiguous cancellation option, a reminder before a free trial converts to paid with express consent, and renewal reminders. Press coverage mentions fines of up to 6% of global turnover in the associated enforcement reform. |
| Digital Services Act | In force | Prohibits online platforms from interface designs that deceive or manipulate (Art. 25). |
| GDPR + ePrivacy (cookies) | In force | Free, specific, informed consent; rejecting cannot be harder than accepting (see the verification note in `pages/legal.md`, cookie policy and consent banner). |
| (US reference) FTC: ROSCA, fees rule | In force (the fees rule applies to live-event tickets and short-term lodging since May 2025) | Total price visible; clear consent in subscriptions; simple cancellation. |

Sources: Bird & Bird on the EAA (https://www.twobirds.com/en/insights/2025/a-guide-to-navigating-the-european-accessibility-act-for-online-retailers-service-providers-and-plat), Euronews and A&O Shearman/Legal500 on the DFA (https://www.euronews.com/2026/11/11/eu-targets-subscription-traps-addictive-design-and-hidden-fees-with-new-digital-rules), Fortune/ABC on the fees rule and Airbnb.

## 4. Blacklist (never propose)

- Pre-ticked boxes for paid extras, insurance, newsletters or consents.
- Offer timers that reset or false end dates.
- "Only X left" / "X people viewing" without real data and without context.
- "From" or base prices that exclude known compulsory charges.
- Cancellation with more steps, channels or confirmations than sign-up.
- Confirmshaming ("No, I prefer to keep losing money").
- Reject buttons hidden, greyed out, or on a second layer when accept is on the first.
- Free trials that convert to paid without prior notice.
- Invented testimonials, logos or customer figures, or any other invented content (see section 7).
- "Gifted" progress that doesn't correspond to anything real (P26 misused).
- Loss mechanics (streaks, "you'll lose everything") without an escape valve, or used to prevent cancellation.
- Advertising disguised as a notification, organic result or editorial content.

## 5. Quality of evidence (so as not to repeat myths)

| Popular claim | Actual status | How to use it |
|---|---|---|
| "More options reduce purchases" (jams: 30% vs 3%) | NOT robust: meta-analysis by Scheibehenne et al. (2010) with a mean effect of virtually zero and large variance. | Reframe: the problem is the difficulty of comparing, not quantity. Make comparison easy and recommend by default. |
| "You have 50 ms to make a good impression" | Robust for visual appeal (Lindgaard 2006, replicated); it does not mean the user DECIDES in 50 ms. | Aesthetics opens the door; the value proposition (10 s) decides. |
| "Users leave within 10–20 s" | Based on 2010–2011 data (Liu, White & Dumais; Nielsen). The early-abandonment pattern remains plausible; the exact figure is not updated. | Use as a principle (early triage), not as an exact figure. |
| "The Economist decoy effect (84%/16%)" | Experiment with students, hypothetical scenario; the attraction effect has broad literature but variable size. Ariely is under scrutiny for other work. | Cite the mechanism (Huber, Payne & Puto 1982), not the number as a guarantee. |
| "Local social norms work better" (towels, "this room") | The general effect of descriptive norms replicates; the "local" norm effect does not always (Bohner & Schlüter 2014; Schultz et al.). | Specific, close social proof is a good hypothesis; test it. |
| "Removing one field made $12 M" (Expedia) | Real case recounted by an Expedia VP; it is company data, not a published experiment. The effect came from a field that caused payment errors, not from "fewer fields" in the abstract. | Lesson: remove what confuses, not just what is superfluous. |
| "Delaying sign-up +20% DAU" (Duolingo) | Company data shared in an interview; consumer app context. | Valid for products where value can be shown without identity. |
| "0.1 s = +8.4% conversion" (Deloitte/Google) | Study commissioned by Google, 37 brands, observational (correlation), 2019–2020. | Clear direction (faster = better); the percentage does not transfer. |
| "Pricing page" benchmarks with dozens of A/B tests and exact percentages found on SEO blogs | Unverifiable methodology; several contradict each other. | DO NOT use as evidence. Test on your own product. |
| Passkeys: 93% success, 2.8× faster (FIDO 2026) | FIDO Alliance index with data from large members (Amazon, Google, Microsoft, PayPal...). Interested source but with data from real deployments. | Valid as direction and order of magnitude. |

## 6. Minimum compliance checklist by page type (for the skill)

- Pricing / Billing / Sign-up with trial: total price, renewal date and amount, notice before trial ends, symmetric cancellation.
- Product page / Listing / Map / Cart / Checkout: compulsory charges in the headline price; scarcity only if real; sponsored results marked; no pre-ticked extras.
- Checkout / Login / Sign-up / Forms: WCAG 2.1 AA (focus, labels, errors not only by colour, touch targets).
- Cookies / Privacy: accept/reject parity; no consent by default; readable layers.
- Feed / Onboarding with gamification: escape valves (pause, freeze); special care if minors are involved.

## 7. No invention (hard limit)

The model never invents or assumes content that a visitor would take as a fact about the business: prices, figures and statistics, texts that describe the business (its story, its products, its team), reviews and testimonials, client names and logos, opening hours, addresses and phone numbers, legal details in the footer (company name, tax ID, registry entry), and photographs. This holds in every page, every step and every mode, and nothing ranks above it.

- **When the user asks for invented content** ("make up some reviews", "put a plausible price", "write a history for the shop"), decline that part and say why in one or two sentences: the page would present as true something nobody has checked, which misleads visitors and, for reviews and prices, is illegal in the EU and the US. Then offer what helps: placeholders, a list of what to collect, or copy written from facts the user supplies.
- **What the model may write:** design decisions and their assumptions (in `design-brief.md`); interface text with no factual claim (labels, buttons, navigation, form hints, error messages); and copy, persuasive copy included, that phrases and orders facts the user or the project supplied.
- **A new fact inside a sentence is data, not copy.** Frequency, origin, figures, guarantees, shipping, delivery times, ingredients, awards: when the user didn't supply it, the sentence carries a placeholder for it ("bread baked [FREQUENCY]"), or the sentence goes to `content-needed.md` as a proposal for the user to confirm, never onto the page. "Bread baked fresh every morning" is a claim about the bakery, not copy; write it only when the user said so.

### Placeholders

Use a placeholder wherever real content is missing, so the layout is built and tested at its real size:

| Missing | Placeholder | Example |
|---|---|---|
| A datum (price, phone, address, hours, figure, name, tax ID) | The field's name in capitals between brackets, in the page's language | `[PRICE]`, `[PHONE]`, `[HOURS: Saturday]` |
| Running text (description, story, testimonial body) | Lorem ipsum of the length the real text should have | A three-line product description gets three lines of lorem ipsum |
| An image | A box with the final aspect ratio and a label naming the picture | `[PHOTO: shop front]`, in a 4:3 box |

- Wrap every placeholder in an element with `data-placeholder="<field>"` and give that attribute a visible style, for example `[data-placeholder] { outline: 2px dashed currentColor; outline-offset: 2px; }`, so nobody can mistake it for real content in a screenshot.
- Never use stock photos or generated images presented as the business's own. A labelled box is the placeholder.
- Keep placeholder values out of machine-read places: no placeholder in structured data, meta descriptions, `tel:`, `mailto:` or map links. Add those when the real value arrives, and list them in `content-needed.md`.
- A section the brief plans but has no data for is designed and built with placeholders, never dropped. Removing it is the user's decision; record it in `content-needed.md` with status "discarded".

### content-needed.md

Every build that uses a placeholder writes `content-needed.md` in the project root, from `templates/content-needed.md` in this folder, and keeps it up to date: what is missing, where it goes (page and section), the placeholder used, and its status. When the model has a guess about a value (from a public listing, from the brief), it writes the guess only in this file, marked "assumption: confirm" in the user's language ("suposición: confirmar" in Spanish), never on the page.
