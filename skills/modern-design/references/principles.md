# Web psychology and marketing principles

Reference for `modern-design`. Consult it after reasoning (`reasoning.md`), never as a starting point: to name a mechanism you have already detected, check its evidence and know its limits. Use the principles while you reason; when you present, explain decisions in terms of the user's doubt rather than listing principle names or turning them into a visible checklist.

> **Order of authority:** `ethics.md` (hard limit) > `design-brief.md` > `reasoning.md` (method for writing the brief) > `principles.md` and `pages/` (consulted afterwards). When two disagree, the higher one wins.

IDs P01–P31 are used by the files in `pages/`. Evidence: **A** = experiment, meta-analysis or large-scale primary data; **B** = company primary data or documented case; **C** = professional consensus or heuristic without a public experiment.

## 0. How to use this document (instructions for the LLM)

- Each principle describes a mechanism in the user's mind, not a component to copy.
- Before proposing a pattern, identify: (1) page type (see `pages/`), (2) what decision the user is making at that moment, (3) which principle reduces their doubt or effort.
- If a principle only works by deceiving (fake scarcity, invented urgency, hard cancellation), it is NOT a principle: it is a dark pattern. See `ethics.md`.
- Prioritise evidence A > B > C. When evidence is weak, say so.
- If the design still works when you swap the product for any other, it is a template, not reasoning. Rewrite from the specific user.

## 1. Framework: from the 3Cs to a full funnel

Note on origin: "Capture, Confidence, Conversion" (the 3Cs; in Spanish *Captación, Confianza, Conversión*) is a practical marketing heuristic; no canonical academic source defining it was found. Use it as a mental skeleton, not as theory.

The modern web (2024–2026) needs to extend the 3Cs because much of the value happens AFTER conversion (SaaS, subscriptions, apps):

| Phase | User's question | Key principles |
|---|---|---|
| Capture | Is this for me and is it worth my time? | P01–P10 |
| Confidence (trust) | Can I trust this? What do I lose if I'm wrong? | P11–P18 |
| Conversion | How much effort does saying yes cost me right now? | P19–P25 |
| Activation / Continuity | Is it already useful to me? Will I come back tomorrow? | P26, P27, P29, P30 |
| Memory | How do I feel when I leave? Would I recommend it? | P28 |

Cross-cutting golden rule: trust is not a phase, it is a condition. Any trust failure at any point cancels conversion.

---

## 2. Catalogue of principles

### CAPTURE BLOCK

#### P01 · Clarity before cleverness (value proposition in 10 seconds)
- Mechanism: users perform ruthless triage in the first seconds; if they don't understand what it is and what they gain, they leave.
- Evidence (A): Nielsen/NN/g, analysis of dwell times: the probability of leaving is highest in the first seconds, stays high until ~30 s and then flattens; recommendation: communicate the value proposition within 10 s. Source: https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/
- Real example: Stripe opens with "Financial infrastructure to grow your revenue" + a sentence saying what you do with it (accept payments, banking, revenue models) "from your first transaction to your billionth". Source: https://stripe.com
- Real example: Linear: "Linear is a purpose-built tool for planning and building products" — one sentence, no detours, and the real product underneath.
- Application: headline = what it is + what for; subheadline = how/for whom; immediate visual proof (real product, not abstract illustration).
- Limit: clarity is not dullness; the brand can have a voice, but never at the cost of the offer being understood. Stripe has been criticised for stating a "category" rather than an "outcome" for cold visitors: validate with your audience.
- Weighs most on: Landing, Home, Pricing, Coming soon, Documentation (front page), Dashboard (what needs attention).

#### P02 · First impressions are aesthetic and colour everything else (halo / aesthetic-usability)
- Mechanism: visual judgement forms almost instantly and biases perceived usability and credibility.
- Evidence (A): Lindgaard et al. (2006), Behaviour & Information Technology: visual appeal is reliably assessed with 50 ms exposures and correlates with longer evaluations. https://www.tandfonline.com/doi/abs/10.1080/01449290500330448
- Evidence (A): Stanford Web Credibility (Fogg et al., 2002; 2,684 participants): "design look" appeared in 46.1% of credibility comments, more than any other factor; in finance it rose to 54.6%. https://advocacy.consumerreports.org/research/how-do-people-evaluate-a-web-sites-credibility/
- Nuance: experts in the same study paid much less attention to visual appearance than consumers. Aesthetics buys the first chance; content keeps it.
- Application: typography, spacing and consistency are signals of competence. A visual flaw (pixelated logo, broken alignment) reads as "not a serious company".
- Weighs most on: Home, Landing, About us, Checkout (fintech/finance), Pricing.

#### P03 · Speed is persuasion (Doherty threshold, perceived performance)
- Mechanism: every wait breaks the flow of attention; slowness is read as friction and as lack of quality.
- Evidence (A/B): Deloitte + 55 for Google (37 brands, >30 M sessions): improving four mobile speed metrics by 0.1 s was associated with +8.4% conversion in retail and +10.1% in travel; in retail, spend rose 9.2%. https://web.dev/case-studies/milliseconds-make-millions
- Application: performance budget (LCP, INP), skeletons instead of spinners, optimistic UI, prefetching the next likely action.
- Weighs most on: Product page, Listings, Search, Checkout, Editor, Chat, Landing pages with paid traffic.

#### P04 · Value/time ratio: make value big and cost small
- Mechanism: every visitor calculates, without realising, "how much is this worth?" and "how much will it cost me?". It is a ratio.
- Evidence (C, supported by P01/P19): heuristic, consistent with early-abandonment data (NN/g) and form friction data (Baymard).
- Application: cap the cost explicitly: "Set it up in 5 minutes", "6 min read", "3 steps", progress bar with counted steps, "no card required".
- Real example: Wise shows the exact price of a transfer before asking for any form (cited by a 2025 onboarding analysis: https://uxcam.com/blog/10-apps-with-great-user-onboarding/).
- Weighs most on: Landing, Sign-up, Onboarding, Articles, Long forms, Maintenance (estimated time).

#### P05 · Progressive disclosure: each block earns the next
- Mechanism: people scan, skip and come back, so a page is read in blocks, not line by line. Each section needs a headline that stands on its own and a reason to keep going.
- Application on pages that persuade: the promise, proof that it's real, how it works, who it's for, objections, price and the action are **possible content, not an order**. Which of them a page needs, and in what sequence, comes from the brief's Structure: what this audience doubts first, at this moment of the journey. In forms: ask only for what each step needs; reveal conditional fields when they become relevant.
- Weighs most on: Landing, Article, Onboarding, Multi-step forms, Advanced settings (show the common, hide the rare).

#### P06 · Honest curiosity loops (curiosity gap / Zeigarnik), with caution
- Mechanism: an open question in the user's head creates tension they want to resolve; incomplete tasks are remembered more.
- Critical rule: never open a loop you won't pay off. Promising and not delivering destroys trust in all future loops.
- On functional pages (checkout, settings, admin) curiosity is friction; the user wants predictability, not suspense. Use it in marketing and content, almost never in product.
- Real example: waitlists that show your position and how to move up (Robinhood) keep a legitimate "loop" open until launch.
- Weighs most on: Coming soon, Landing (storytelling), Article list, Article, Onboarding emails.
- Avoid on: Checkout, Errors, Legal, Billing, Admin.

#### P07 · Specificity: numbers, names and dates instead of categories
- Mechanism: the concrete can be pictured and verified; the vague triggers nothing and smells of marketing.
- Real example: Stripe does not say "we're reliable": it shows 99.999% historical uptime linked to its status page and more than 200 M active subscriptions managed in Billing. https://stripe.com
- Real example: Airbnb shows the total price with fees in results (not "from €X/night"). https://news.airbnb.com/total-price-display-is-now-standard-globally
- Test: in every sentence, is there a number, name or date that could replace a generic summary? "Saves time" → "saves 5 hours a week" (only if true and measurable).
- Weighs most on: Landing, Pricing, About us, Product page, Testimonials, Article titles, Dashboards (with comparative context).

#### P08 · Meaning and purpose (Golden Circle: "why" before "what")
- Mechanism: people identify with beliefs, not specifications; purpose gives a reason to choose between similar alternatives.
- Source (C, highly influential): Simon Sinek, TED 2009 "How great leaders inspire action": people don't buy what you do but why you do it; uses Apple as the example (the belief in challenging the status quo, then expressed in products).
- Reference example: Apple does not sell "computers" but an identity (Think Different).
- Valid criticism: the "why" doesn't save a product that people don't want or can't afford; the circle also has "how" and "what" (Walton College, U. Arkansas: https://walton.uark.edu/insights/posts/start-with-why-just-dont-end-there.php).
- Application: the "why" goes on Home, About us and manifesto; a clear "what" (P01) is still mandatory in the hero. First understood, then felt.
- Weighs most on: About us, Home, Coming soon, Blog (editorial line). Of little use on: Checkout, Settings, Admin.

#### P09 · Familiarity: users expect your site to work like all the others (Jakob's Law)
- Mechanism: users spend most of their time on other sites; they transfer mental models (logo top left goes home, cart top right, etc.).
- Source (C/accumulated A): Laws of UX (Jon Yablonski) and NN/g heuristics. https://lawsofux.com/jakobs-law/
- Application: innovate in the proposition and the brand, not in where the pay button is. Conventions in login, cart, filters, settings, editors (standard keyboard shortcuts).
- Weighs most on: EVERYTHING functional (auth, commerce, settings, admin, search, editor). Less critical on: campaign landing pages, coming soon (they can be more expressive).

#### P10 · Cognitive load and number of options (Hick, choice overload)
- Mechanism: more options and more simultaneous information = more decision time and more chance of not deciding.
- Nuanced evidence (A): the famous jam study (Iyengar & Lepper, 2000: 30% bought with 6 options vs 3% with 24) is NOT robust: the meta-analysis by Scheibehenne et al. (2010, 50 experiments, N=5,036) found a mean effect of virtually zero with large variance between studies. https://abcwest.cogs.indiana.edu/pmwiki/pdf/scheibehenne.options.2010.pdf
- Practical conclusion: the problem is not the number of options but the difficulty of comparing them. More options work if there are good filters, a meaningful order and a default recommendation.
- Application: 3 plans with one recommended; faceted filters in catalogues; grouping in settings; menus by task, not by org chart.
- Weighs most on: Pricing, Catalogue, Category, Settings, Dashboard, Global navigation.

### CONFIDENCE (TRUST) BLOCK

#### P11 · Social proof (descriptive norms)
- Mechanism: when in doubt, we copy what "people like me" do.
- Evidence (A): Goldstein, Cialdini & Griskevicius (2008, J. Consumer Research): hotel signs saying most guests reused their towels raised reuse from 35.1% to 44.1% versus the standard environmental message; the closest norm ("guests in this room") worked even better in the original study. Note: later replications (Bohner & Schlüter 2014) confirm the general effect but not always the "local" norm effect. https://pmc.ncbi.nlm.nih.gov/articles/PMC4118982
- Evidence (A/B): in Baymard research, up to 95% of participants used reviews to evaluate products. https://baymard.com/learn/ecommerce-cro
- Real example: Stripe combines customer logos with processed volume (quantified social proof = P07 + P11).
- Application: specific, close social proof ("used by 1,200 dental clinics in Spain") > generic ("thousands of customers"). Reviews with full distribution, including negatives.
- Risk: fake or ambiguous social proof ("X people looking at this" without saying they're searching other dates) was flagged by the UK CMA. See `ethics.md`.
- Weighs most on: Landing, Home, Product page, Pricing, Coming soon (real sign-up count), Sign-up.

#### P12 · Credibility = what is noticed × how it is interpreted (Prominence-Interpretation, authority)
- Mechanism (Fogg): an element only influences credibility if (1) the user notices it and (2) interprets it positively. Words alone are not enough.
- Source: https://www.nngroup.com/articles/prominence-interpretation-theory/
- Application: visible, verifiable signals: real people with names and faces, physical address, last-updated date, author with credentials, links to status page, real certifications near the point of doubt (not in the footer).
- Weighs most on: About us, Checkout (next to the card field), Article (author/date), Documentation (version/date), Contact, Legal.

#### P13 · Total price transparency (anti drip pricing)
- Mechanism: an unexpected cost at the end feels like betrayal; it breaks trust right at the point of highest intent.
- Evidence (A): Baymard (US survey, excluding "just browsing"): 40% abandoned due to extra costs being too high (shipping, tax, fees) and 12% because they couldn't see or calculate the total order cost up front. https://baymard.com/blog/cart-abandonment-rate
- Real example: Airbnb made the total price (with fees, before taxes) the global standard in April 2025; almost 17 M guests had already used the optional toggle. https://news.airbnb.com/total-price-display-is-now-standard-globally
- Regulatory context: the CMA (UK) obtained commitments from the large hotel booking sites to show all compulsory charges in the headline price. https://www.gov.uk/government/news/hotel-booking-sites-to-make-major-changes-after-cma-probe
- Application: final price visible in listing and product page; shipping calculator before checkout; in SaaS, show per-user price AND total, taxes clarified.
- Weighs most on: Pricing, Product page, Listing, Map (prices on pins), Cart, Checkout, Billing.

#### P14 · Reducing perceived risk (reversibility)
- Mechanism: the decision is easier if being wrong is cheap: free trial, returns, one-click cancellation, "no card required".
- Evidence (A): 13% abandon due to an unsatisfactory returns policy (Baymard). Regulatory evidence: the FTC settled with Amazon for $2.5 B (September 2025) over deceptive Prime enrolment and a cancellation designed to deter, internally nicknamed "Iliad" (4 pages, 6 clicks, 15 options according to former commissioner Bedoya). https://www.pbs.org/newshour/economy/amazon-to-pay-2-5-billion-to-settle-ftc-allegations-it-duped-customers-into-enrolling-in-prime
- Application: show the returns/cancellation policy next to the CTA, not on a legal page; "cancel anytime" only if it is literally as easy as signing up.
- Weighs most on: Pricing, Product page, Cart, Checkout, Sign-up (trial), Account and billing.

#### P15 · Reciprocity: give before you ask
- Mechanism: receiving value creates a social obligation to reciprocate.
- Evidence (A): in Goldstein's hotel studies, promising to donate in exchange for reuse did not raise reuse; saying the hotel HAD ALREADY donated raised it by 45% (Scientific American). https://www.scientificamerican.com/article/hotel-case-study/
- Real example: since April 2024 ChatGPT can be used without an account; the account is requested when you want to keep your chats. Shopify builds your store with AI before you create an account. https://uxcam.com/blog/10-apps-with-great-user-onboarding/
- Application: useful free tool, interactive demo without sign-up, valuable content without an email wall; ask for data after delivering value.
- Weighs most on: Landing, Sign-up, Onboarding, Blog, Coming soon.

#### P16 · Consistency of voice and promise across the journey (message match)
- Mechanism: every inconsistency between what was promised (ad, email, hero) and what is found reads as a sign of deception.
- Evidence (C): CRO consensus; indirectly supported by P12.
- Application: the landing headline repeats the promise of the ad that brought the visitor; the ad price is the checkout price; the tone of errors and empty states matches the marketing tone (Slack is the canonical example of a human voice in loading messages, errors and empty states).
- Weighs most on: Landing (paid traffic), Emails, Checkout, System states.

#### P17 · Prevent errors and help recovery (heuristics 5 and 9)
- Mechanism: an error is a moment of maximum emotional vulnerability; how you handle it defines trust.
- Source (A/C): NN/g Error-Message Guidelines: show the error close to its source, not only through colour (accessibility), don't show it prematurely, human language, describe the problem precisely, offer a solution, don't blame the user, preserve what the user typed. https://www.nngroup.com/articles/error-message-guidelines/
- Real example (with data): Expedia removed an optional "Company" field that caused some customers to enter their bank's name and address, which made card verification fail; according to Joe Megibow (Expedia), this meant about $12 M in annual profit. https://www.library.hbs.edu/working-knowledge/how-numbers-talk-to-people
- Application: inline validation on leaving the field (not on the first keystroke), undo instead of "are you sure?" where possible, autosave, explicit confirmation only for destructive and irreversible actions.
- Weighs most on: Forms, Checkout, Login, Password recovery, 404/500, Editor, Admin.

#### P18 · Accessibility as trust (and as a legal obligation)
- Mechanism: a site that cannot be used with a keyboard, screen reader or under low contrast excludes people and signals carelessness.
- Legal context: since 28-06-2025 the European Accessibility Act requires accessibility for most e-commerce services aimed at EU consumers; the technical standard (EN 301 549) incorporates WCAG 2.1 AA. https://www.twobirds.com/en/insights/2025/a-guide-to-navigating-the-european-accessibility-act-for-online-retailers-service-providers-and-plat
- Application: WCAG 2.1 AA as a minimum (aim for 2.2), visible focus, errors not only in red, large touch targets, accessibility statement.
- Weighs most on: ALL, but critical on Checkout, Sign-up/Login (authentication and payment are in scope), Forms, Legal.

### CONVERSION BLOCK

#### P19 · Every field and every step has a cost (friction)
- Evidence (A): Baymard: an ideal checkout can have 12–14 form elements (7–8 fields), but the US average shows 23.48 by default; 17–18% abandoned due to a long/complicated checkout and 18% due to being forced to create an account. https://baymard.com/blog/cart-abandonment-rate
- Application: remove optional fields that confuse (Expedia case, P17); autocomplete attributes, guest checkout by default, address lookup, a single name field where possible.
- Weighs most on: Checkout, Sign-up, Contact, Forms, Verification.

#### P20 · Behaviour = Motivation × Ability × Prompt (Fogg Behavior Model, B=MAP)
- Mechanism: an action happens when sufficient motivation, sufficient ease and a well-timed prompt coincide. If one is missing, it doesn't happen.
- Source: BJ Fogg, Stanford. https://behaviormodel.org
- Application: ask for notification permission when the user has just seen why it's useful (not on app open); upgrade CTA when the user hits a real limit; if motivation is low, increase ease rather than shouting louder.
- Weighs most on: Onboarding, Notifications, Upgrade in Billing, Empty states, Feed.

#### P21 · Value before sign-up (gradual engagement / lazy registration)
- Evidence (B): Duolingo lets you do a lesson before asking for an account; its growth team attributed to moving the sign-up screen back a few steps an increase of ~20% in daily active users (First Round interview, cited by Taplytics). https://taplytics.com/blog/duolingo-ab-test-onboarding
- Real examples: ChatGPT without an account (2024), Shopify builds the store before the account, Wise shows the price before the form.
- Limit: does not apply when value requires identity (banking, health, private data) or when registration IS the value (products with strong network effects).
- Weighs most on: Sign-up, Onboarding, Product landing pages, Free tools.

#### P22 · Anchoring and the decoy effect (anchoring, decoy / asymmetric dominance)
- Evidence (A, with caution): Ariely on The Economist subscription: with web $59, print $125 and print+web $125, 84% chose print+web and nobody chose print only; when the "print only" option was removed, 68% chose web only. The decoy effect was described by Huber, Payne & Puto (1982). https://en.wikipedia.org/wiki/Decoy_effect
- Evidence warning: Ariely's experiment used students in a hypothetical scenario; and Ariely has faced controversy over other work. The attraction effect in general has broad literature, but its size varies a lot.
- Ethical application: order plans so the recommended one is easy to evaluate against its neighbours; show annual savings as a figure; Enterprise plan as a capacity anchor, not a trap.
- Weighs most on: Pricing, Product page with variants, Cart (warranty upsell, opt-in only).

#### P23 · The power of defaults
- Mechanism: most people accept the preselected option; the default communicates "this is the recommended choice".
- Evidence (B): Dashlane attributes the mass adoption of passkeys at Google to making them the default option rather than an opt-in security feature. https://www.dashlane.com/blog/passkey-report-2025
- Ethical use: defaults that protect the user (maximum privacy, minimum notifications, most common option). Prohibited use: pre-ticked boxes for paid extras or consents (see `ethics.md`).
- Weighs most on: Pricing (annual/monthly), Settings, Notifications, Login (remember me), Calendar (time zone), Cookies (rejecting cannot be harder than accepting).

#### P24 · Scarcity and urgency: only if real and verifiable
- Mechanism: what is scarce seems more valuable and imminent loss triggers action.
- Documented counter-example: Which? found in 2019 that half of the "only X rooms left" messages it checked on Booking.com did not reflect actual availability; at one London hotel 34 rooms were still free. https://www.which.co.uk/news/article/booking-com-still-misleading-holidaymakers-with-1-room-left-claims-aSNln2j8gkGl
- Honest contrast: Agoda switched to specifying "we only have 1 left at this price".
- Application: real stock, real and persistent offer end date, real places. Never countdowns that reset.
- Weighs most on: Product page, Calendar/bookings, Coming soon (real beta places). Avoid on: Cart/Checkout with artificial timers.

#### P25 · Loss aversion and the endowment effect
- Mechanism: losing hurts more than gaining; what we already feel is "ours" we value more.
- Evidence (B): Duolingo: users who reach a 7-day streak are 3.6 times more likely to complete their course; to ease the pressure it introduced the "Streak Freeze" (pause the streak for a day). https://blog.duolingo.com/how-duolingo-streak-builds-habit
- Evidence (B): separating the streak from the daily goal increased Day-14 retention by 3.3% in their A/B test. https://blog.duolingo.com/improving-the-streak
- Ethical limit: the Digital Fairness Act proposed by the European Commission (11-11-2026) explicitly targets addictive design. Always include an escape valve (pause, freeze) and never use loss to retain payments (e.g. "you'll lose all your data" when cancelling, if it isn't true).
- Weighs most on: Onboarding, Feed/Activity, Profile (progress), Trial (what you've created).

### ACTIVATION, CONTINUITY AND MEMORY BLOCK

#### P26 · Endowed progress and goal gradient
- Evidence (A): Nunes & Drèze (2006): car wash card with 10 slots and 2 free stamps vs an empty 8-slot card (same 8 purchases needed): 34% redeemed versus 19%, and customers sped up as they approached the goal. https://www.changingminds.org/explanations/theories/endowed_progress.htm
- Application: onboarding checklists that start with the first step already ticked (because they actually did it: "Account created ✓"), profile progress bars, numbered steps in forms.
- Rule: the gifted progress must correspond to something real the user did; inventing it is manipulation.
- Weighs most on: Onboarding, Profile, Multi-step forms, Verification, Coming soon (position on the list).

#### P27 · Design toward the "aha" moment (activation metric)
- Evidence (B): Slack defined that a team that has exchanged 2,000 messages "has really tried Slack"; past that threshold 93% were still using it (Stewart Butterfield). https://www.amplitude.com/blog/one-metric-product-team-needs
- Application: identify the action that predicts retention in YOUR product and design onboarding, empty states, invitations and emails to get the user there as soon as possible.
- Weighs most on: Onboarding, Empty state, Team management (invite), Initial dashboard, Success page.

#### P28 · Peak-end rule
- Mechanism: we remember an experience by its most intense moment and its ending, not by the average.
- Evidence (A): Kahneman, Fredrickson, Schreiber & Redelmeier (1993). UX application: NN/g. https://www.nngroup.com/articles/peak-end-rule/
- Real examples: IKEA and the cheap hot dog at the exit (cited by Jakob Nielsen as peak-end engineering); TurboTax closes the process with a human tone (NN/g); Mailchimp celebrates sending a campaign with an animation.
- Rules: never end on an error; after recovering from an error, take the user to a stable, reassuring place; one genuine peak per journey tied to the user's achievement, not to the brand.
- Weighs most on: Order confirmation, Success page, Password recovery (ending), Cancellation (dignified exit), Resolved tickets, 500/404.

#### P29 · Empty states are onboarding, not a gap
- Source (A/C): NN/g: totally blank empty states create doubt about whether the system is working; they should communicate status, teach the system and offer a direct path to the key task. https://www.nngroup.com/articles/empty-state-interface-design/
- Pattern: what this is + why it's empty + what to do now (CTA) + optional: example content or templates.
- Weighs most on: Empty state, New dashboard, Search with no results, Empty cart, Messages, Notifications, Analytics with no data.

#### P30 · Passwordless authentication as conversion (passkeys)
- Evidence (A/B): FIDO Passkey Index 2026: 36% of successful sign-ins already use a passkey (26% in 2025); 93% success with passkeys vs 78% with password + traditional MFA; 2.8× faster, ~27 s saved per sign-in. https://fidoalliance.org/passkey-index-2026/
- Evidence (B): Microsoft reports 95% success with passkeys versus 30% with passwords. https://fidoalliance.org/?p=85145
- Application: offer a passkey at sign-up and after a successful login; keep alternatives (magic link, social) for accessibility and shared devices.
- Weighs most on: Login, Sign-up, Password recovery (offer passkey at the end), Checkout (re-authentication), Security settings.

#### P31 · In product evaluation, the image comes first
- Evidence (A): Baymard: 56% of users began by exploring images as their first action on arriving at a product page; 42% try to infer size from the images (they need an "in scale" image). https://baymard.com/blog/in-scale-product-images
- Application: gallery with thumbnails, sufficient zoom, in-scale image, images with descriptive text when they show a feature.
- Weighs most on: Product page, Catalogue, Category, Map (photos on cards).

---

## 3. Level of persuasion allowed by context (general rule)

- HIGH (explicit persuasion acceptable): Landing, Home, Pricing, Coming soon, Product page.
- MEDIUM (supporting persuasion, no pressure): Catalogue, Category, Cart, Sign-up, Onboarding, Blog, Success page.
- LOW (clarity and trust only): Checkout, Login, Verification, Settings, Billing, Dashboard, Admin, Documentation, Support.
- NONE (any persuasive tactic is a legal or trust risk): Legal, Cookies, Cancellation, 404/500 errors, Maintenance.

The closer the user is to money, their data or an irreversible action, the less persuasion and the more transparency.
