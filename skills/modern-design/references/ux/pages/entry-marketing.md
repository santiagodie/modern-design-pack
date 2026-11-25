# Entry & marketing pages

Landing · Home · About us · Pricing · Coming soon / Waitlist

How to read each entry: **The moment** describes the user's mind; **Must prove or protect** links the page to the central promise; **Levers** are mechanisms with the reason they apply (P-IDs → `../../strategy/principles.md`); **Specifics** are research-backed details with evidence grade [A] experiment/large dataset, [B] company data/documented case, [C] professional consensus; **When the usual advice flips** lists conditions where the default is wrong; **3C weight** rates capture, confidence and conversion from 0 to 3 for that page (3 = critical; Act = activation and continuity, Mem = memory); **Real examples** illustrate a mechanism and are not designs to copy. **Implementation** says whether the page can be static, how to render it, where its data and state live, and the anti-patterns (`../../engineering/implementation.md`). Use all of it after reasoning, not instead of it.

Persuasion dial for this group: high by default. Marketing pages are where explicit persuasion is legitimate, provided it is true.

Group summary: dominant phase capture + confidence; principles that weigh most P01, P07, P11, P04, P08; main risk: vague or false claims.

> **Order of authority:** ethics (`ethics.md` and `content-truth.md`, hard limits) > `site-decisions.md` (what exists and what the user decided) > `design-brief.md` > `reasoning.md` and `design-reasoning.md` (method for writing the brief) > the other references (`principles.md`, `pages/`, `sections/`, `implementation.md` and the rest, consulted afterwards). When two disagree, the higher one wins; a user decision that breaks either hard limit is declined with the reason.

---

## Landing page

**Persuasion dial:** high.
**3C weight:** Cap 3 / Conf 2 / Conv 3.

### The moment
A visitor arrives from one specific source (ad, search, email, link) carrying one specific expectation. They give the page a few seconds of ruthless triage: is this what I clicked for, is it for me, what do I do? They know little about you and owe you nothing.

### Must prove or protect
That the promise they clicked on is real and is here. The landing page is the first page of the story; message match is not a tactic, it is continuity.

### Levers
- Continuity with the source (P16): the headline repeats the promise of the ad or query. Mismatch reads as "wrong place".
- Clarity and value/time ratio (P01, P04): what it is + what they get, with the effort capped.
- Progressive disclosure (P05): each section should make the next necessary; length matches how much persuasion this visitor needs.
- Specific proof near the decision (P07, P11).
- Value before the ask (P15, P21) when the product can show itself.

### Specifics
- Section-level detail (hero anatomy, CTA states, form fields, final CTA, footer legal minimum, sizes and spacing) lives in `../../ui/sections/` (start with `../../ui/sections/index.md`). Problem, how it works, demo, testimonials, pricing, trust and FAQ sections are pending (batch B). Read them through the questions above.
- [A] Users judge visual appeal in ~50 ms and decide to stay or leave mostly in the first 10–30 s (Lindgaard 2006; NN/g). See P01, P02.
- [A] Mobile speed: 0.1 s improvements were associated with +8.4% retail conversion (Deloitte/Google, correlational). See P03.

### 🔴 Critical errors
- Headline about the company instead of the visitor's outcome.
- A promise in the ad that the page doesn't repeat.
- Proof that is vague, unverifiable or invented.

### 🟠 Common errors
- Every section of a template included regardless of what this visitor doubts.
- Several equal-weight CTAs.

### ↔ When the usual advice flips
- **Hot traffic** (returning users, brand search, email to customers): skip problem/education sections; go straight to offer and action.
- **Expensive or unfamiliar offers:** the CTA above the fold still belongs there, but most conversions will come from CTAs after the explanation; a short page underperforms.
- **The product can be used without an account** (tool, calculator, generator): the best landing page may be the product itself, with the sign-up deferred.

### Real examples (illustrate the mechanism, don't copy)
Stripe opens with what it is and verifiable numbers; Duolingo, ChatGPT and Shopify let visitors use the product before an account.

### Signal it's working
Conversion by traffic source (not blended); early-abandonment rate; qualified leads or revenue, not just submits.

### Implementation
- **Static:** yes.
- **Rendering:** static. Run A/B variants by serving a prebuilt variant from the edge or server, not with a client script that hides the page.
- **Data and state:** content as typed section blocks; the lead form posts to an endpoint that works without JavaScript and is the only island.
- **Anti-patterns:** a landing rendered by a client app; a carousel as the largest first-screen element, with transitions that delay its image; a heavy animation library for scroll effects.

---

## Home / Start page

**Persuasion dial:** high, but routing matters as much as persuading.
**3C weight:** Cap 3 / Conf 3 / Conv 1–2.

### The moment
Unlike the landing page, many different people arrive: new prospects, returning customers looking for login or support, press, candidates, partners. Each asks "is my path here?". New visitors still triage in seconds.

### Must prove or protect
What the company is and does, credibly, and that each kind of visitor can find their door. It sets the frame for every other page.

### Levers
- Clarity of "what is this" (P01) plus visible credibility (P02, P12).
- Familiar structure (P09): logo, navigation, login, search where people expect them.
- Specific, quantified proof (P07, P11).
- Purpose ("why") as a second layer (P08), after "what".
- Routing by audience or use case so nobody has to read everything (P10).

### Specifics
- [A] "Design look" was the most cited credibility factor (46.1% of comments) in Stanford's study of 2,684 people; higher in finance (54.6%). See P02.
- [B] Stripe pairs its one-line value proposition with checkable figures (uptime linked to its status page, subscriptions managed).

### 🔴 Critical errors
- An abstract hero that never says what you do.
- Hiding login or support for returning customers behind marketing.

### 🟠 Common errors
- Treating the home page as a single-CTA landing page.
- Auto-rotating carousels splitting the main message.

### ↔ When the usual advice flips
- **Single-product, single-audience startups:** the home page can behave like a landing page.
- **Strong brands with high recognition:** radical minimalism works (Vercel-style), because the visitor already knows what it is. Unknown brands can't afford it.
- **Logged-in users:** the home page should become their workspace or dashboard, not marketing.

### Real examples (illustrate the mechanism, don't copy)
Stripe (category + numbers), Linear (one sentence + real UI), Vercel (minimalism earned by brand recognition).

### Signal it's working
Click-through to key routes per audience; abandonment in the first 10–30 s; support tickets of the "where is X" kind.

### Implementation
- **Static:** yes; partial when some modules are personal.
- **Rendering:** static shell with holes for personal parts (cart count, avatar, "continue where you left off"), each reserving its size. Signed-in users of a product can be redirected to the app on the server.
- **Data and state:** the same section blocks as the landing page; prefetch or prerender the main categories.
- **Anti-patterns:** making the whole page dynamic for one avatar; fetching first-screen content in the browser.

---

## About us

**Persuasion dial:** medium.
**3C weight:** Cap 1 / Conf 3 / Conv 1.

### The moment
The visitor is already interested and is now checking: who are these people, are they real, can I hold someone accountable? Often visited just before contacting or buying, especially for services and small brands.

### Must prove or protect
That real, accountable people stand behind the promise, and why they care about it.

### Levers
- Credibility through verifiable signals (P12): names, faces, dates, location.
- Purpose (P08) told as a concrete story, not a mission statement.
- Specificity (P07): moments, numbers and places instead of adjectives.
- Liking and similarity: a real founder voice.

### Specifics
- [A] Prominence-interpretation (Fogg): signals only work if noticed and interpreted positively; a hidden address or a stock photo does the opposite.
- [C] Founder story of 60–120 words, real photo, optional short phone-quality video; (pending: no section file for founder or team stories yet).

### 🔴 Critical errors
- Stock photos presented as the team; invented history or figures.

### 🟠 Common errors
- Corporate mission language ("empower", "innovative solutions") that cancels the human effect.
- Long chronologies nobody asked for.

### ↔ When the usual advice flips
- **Large enterprises or regulated sectors:** the visitor is checking legitimacy (registration, leadership, certifications, investor relations), not warmth. Facts over story.
- **Anonymous-by-design products** (privacy tools): accountability can come from audits and open source rather than faces.

### Signal it's working
About-page visitors who continue to contact or sign-up.

### Implementation
- **Static:** yes.
- **Rendering:** static.
- **Data and state:** team members and milestones as a content collection; Organization structured data.
- **Anti-patterns:** anything dynamic.

---

## Plans & pricing

**Persuasion dial:** high, but honest; this is where trust and money meet.
**3C weight:** Cap 1 / Conf 3 / Conv 3.

### The moment
The visitor is close to deciding and afraid of two things: choosing the wrong plan and paying more than expected. Decision: which plan, and is it worth it? Doubt: "what's the catch?" (renewal, limits, taxes, cancellation).

### Must prove or protect
That the price is the real price and that leaving is as easy as joining. Pricing pages make or break the central promise's credibility.

### Levers
- Total price transparency (P13).
- Comparison made easy, one plan recommended for a stated reason (P10, P22, P23).
- Risk reduction next to the price (P14): trial terms, cancellation, refunds.
- Objection handling via FAQ: renewal, plan changes, taxes, data on downgrade.

### Specifics
- [A] 40% of US shoppers who abandoned (excluding "just browsing") cited extra costs; 12% couldn't see the total up front (Baymard). See P13.
- [A, with caution] Decoy/anchoring: Economist subscription example (Ariely). Mechanism robust in general, size varies. See P22.
- [B] FTC v. Amazon (2025, $2.5B): enrollment and cancellation designs count as deception. See `../../ethics.md`.
- Component detail (tiers, toggles, layout): pending (batch B, pricing section in `../../ui/sections/`).
- Note: many SEO-blog "pricing page benchmarks" with exact percentages have unverifiable methods. Don't treat them as evidence.

### 🔴 Critical errors
- Hiding the monthly price behind an annual one; renewal terms only in small print.
- "Most popular" labels that are not true.

### 🟠 Common errors
- Feature tables of 40 rows nobody can compare.
- "Contact sales" on every tier when self-serve is possible.

### ↔ When the usual advice flips
- **The buyer is comparing against "doing nothing" or a manual habit, not against your other plans:** a three-tier decoy structure adds confusion. One price, framed against the old way, may convert better.
- **Enterprise-only products:** publishing a starting price or a range still reduces the doubt "is this even in my budget?".
- **Usage-based pricing:** a calculator with sensible defaults answers "what will *I* pay?" better than a table.

### Real examples (illustrate the mechanism, don't copy)
Airbnb's switch to total prices by default (2025) shows transparency becoming the market norm.

### Signal it's working
Trial/paid conversion, plan mix, refund requests and billing-related tickets falling.

### Implementation
- **Static:** yes.
- **Rendering:** static, regenerated when the billing catalogue changes (a webhook from the billing provider).
- **Data and state:** one plans source shared with checkout, billing and the server's entitlement checks; the monthly/annual toggle as native radios or a tiny island, reflected in the URL; prices formatted with `Intl.NumberFormat`; the comparison as a real `<table>`; plan links carry the plan id and the server re-checks the price.
- **Anti-patterns:** prices typed into the markup and repeated on several pages; computing the final price in the browser and trusting it at checkout.

---

## Coming soon / Waitlist

**Persuasion dial:** high.
**3C weight:** Cap 3 / Conf 2 / Conv 2.

### The moment
The visitor can't use anything yet. Decision: is this worth my email, and is it worth telling someone? Doubt: "will this ever launch, and will they spam me?".

### Must prove or protect
That the promise is concrete enough to wait for, and that joining has a clear, honest reward.

### Levers
- A specific, repeatable promise (P01, P07): the sentence people will forward.
- An honest open loop (P06): position, timeline, what happens next.
- Progress and referral mechanics (P26) only if real.
- Reciprocity (P15): early access, a useful preview or resource.

### Specifics
- [B] Robinhood's pre-launch referral waitlist: ~10,000 sign-ups on day one, ~50,000 in the first week, close to 1 million within about a year; each person saw their position and could move up by referring.
- [C] One field (email). Say how often you'll write and when access opens.

### 🔴 Critical errors
- Fake counters or positions; launch dates invented and silently moved.

### 🟠 Common errors
- A beautiful page that never says what the product does.
- A thank-you page that is a dead end (the most shareable moment wasted).

### ↔ When the usual advice flips
- **B2B or high-trust products:** a referral race can feel cheap; a short qualification question ("what would you use it for?") builds a better list.
- **Long or uncertain timelines:** promise cadence ("monthly update") rather than a date.

### Signal it's working
Sign-up rate, share of sign-ups from referrals, list-to-active-user conversion at launch.

### Implementation
- **Static:** partial: static page plus a form endpoint.
- **Rendering:** static.
- **Data and state:** the form posts without JavaScript and redirects to a thank-you page; signing up twice gives the same answer; spam protection and a rate limit; double opt-in by email.
- **Anti-patterns:** a form that only submits with JavaScript; a message that reveals whether an email is already registered.
