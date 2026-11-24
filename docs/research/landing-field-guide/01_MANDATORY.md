# 01 — Mandatory Components

> A landing page without any of these is broken: it either can't convert, can't be trusted, or can't be legally published.

Components in this file:

1. [Header / Navigation](#1-header--navigation)
2. [Hero Section](#2-hero-section)
3. [Primary CTA (the button system)](#3-primary-cta-the-button-system)
4. [Quick Social Proof Strip](#4-quick-social-proof-strip)
5. [Benefits & Features](#5-benefits--features)
6. [Conversion Mechanism (forms, signup, checkout)](#6-conversion-mechanism-forms-signup-checkout)
7. [Final CTA Section](#7-final-cta-section)
8. [Footer](#8-footer)

---

## 1. Header / Navigation

### Job
Identify the brand in under a second, offer the main action at all times, and **avoid becoming an exit**.

### Psychology
- **Hick's law:** every link is a decision. Each extra item slows the visitor and dilutes the main action.
- **Attention ratio:** the ratio between the number of things a visitor *can* do and the number of things you *want* them to do. The ideal on a dedicated landing page is 1:1. In one reported case, VWO cut a landing page's ratio from 13:1 to 3:1 by removing navigation and conversions doubled.
- **Jakob's law:** logo top-left, nav top-right, CTA far right. Breaking this costs cognitive effort for no gain.

### Decide first: what kind of page is this?

| Page type | Header recommendation |
|---|---|
| Paid ad / campaign landing page | Logo only (not linked, or linked to the same page), optionally a single CTA. No menu. |
| Product homepage acting as a landing page | Logo + 3–5 items + 1 CTA button (+ optional "Log in" text link) |
| Long single-page site | Logo + 3–5 **anchor links** to sections + CTA |

HubSpot's own test found that removing navigation and outbound links barely changed top-of-funnel pages but lifted mid-funnel pages by 16% and 28%. So the more "decision-ready" the visitor, the more aggressively you should remove exits.

### Content rules
- Max **5 nav items**. If you need more, the page is not a landing page; it's a website.
- Use words the visitor uses ("Pricing", "Customers", "How it works"), never internal jargon ("Solutions", "Platform", "Resources" are vague and lower click-through).
- The CTA in the header should be the **same action** as the hero CTA, styled as a smaller secondary or primary button.
- "Log in" belongs as a quiet text link, never as a button competing with "Start free trial".

### Layout, sizes & spacing
- Height: **56–72 px** desktop, **52–64 px** mobile.
- Logo: visual height ~24–32 px; it should *read* at the same visual weight as the nav text, not dominate.
- Horizontal padding matches the page container (e.g. same 24/32/48 px gutters as the content).
- Nav link spacing: 24–40 px between items.
- Sticky header: shrink 8–16 px on scroll; or use the **"hide on scroll down, reveal on scroll up"** pattern (saves vertical space on mobile, keeps the CTA one flick away).

### 🔴 Critical errors
- Full website mega-menu on a paid campaign page (pays for the click, then hands the visitor 30 exits).
- Header CTA leads somewhere different from the hero CTA.
- Sticky header that covers anchored section titles when clicking a nav link (fix: `scroll-padding-top` equal to the header height).
- Sticky header hiding focused elements during keyboard navigation (fails WCAG 2.2 *Focus Not Obscured*).

### 🟠 Common errors
- Hamburger menu on desktop with only four items (hides choices for no reason).
- Transparent header over a hero image that becomes unreadable on some images or when scrolling.
- Logo bigger than the headline in visual weight.
- Nav anchors with no "active section" indicator on long single-pages.

### 🟢 Level-up fixes
- Add a **skip link** ("Skip to content") as the first focusable element.
- On scroll, switch from transparent to a solid or frosted background with a 1 px bottom border, not a heavy shadow.
- Keep the header CTA hidden while the hero CTA is visible, then reveal it once the hero scrolls out (avoids two identical buttons on screen at once).
- On mobile, keep the CTA visible *outside* the hamburger (as a small button next to it).

### 💎 Insider notes
- A frosted-glass header (`backdrop-filter`) needs a **solid fallback** and should respect `prefers-reduced-transparency`; on low-end Android it can also tank scroll performance.
- Anchor navigation should update the URL hash (`#pricing`) so sales teams can send deep links to specific sections. Sales teams love this, and it costs nothing.
- If a stakeholder insists on keeping full nav on a campaign page "for branding", a compromise that preserves most of the gain is: keep the logo, remove the menu, and put secondary links in the footer only.

### Style notes
Minimal/Apple: thin, quiet, translucent. Neo-brutalist: thick bottom border, chunky button. Linear/dark: translucent dark bar with 1 px hairline border. See `05_DESIGN_STYLES.md`.

---

## 2. Hero Section

### Job
In **five seconds**, answer three questions: *What is this? Is it for me? What do I do next?* Then earn the scroll.

### Psychology
- Nielsen Norman Group's eye-tracking found that content above the fold receives about 57% of viewing time, and within that screen, the top half gets most of it. The hero is where the "keep reading or leave" decision is made.
- **Cognitive fluency:** a headline that is instantly understood feels more true. Cleverness costs comprehension.
- **Message match:** if the visitor clicked an ad promising X, the hero must say X in the first line, or they assume they landed in the wrong place.
- **Illusion of completeness:** a full-screen hero with nothing peeking below creates a "false floor" and suppresses scrolling. NN/g recommends cut-off content as a visual cue that more follows.

### Content rules (the anatomy)

| Element | Rule |
|---|---|
| **Eyebrow** (optional) | 2–5 words above the headline: category, audience, or announcement ("For finance teams", "New: AI reports"). |
| **Headline (H1)** | The outcome the visitor gets, in their words. 4–12 words. Specific beats clever. |
| **Subheadline** | The mechanism or "how", plus who it's for. 1–2 sentences, max ~25 words. |
| **Primary CTA** | Verb + outcome. One button. |
| **Secondary CTA** (optional) | A lower-commitment action ("Watch 2-min demo", "See pricing"), styled visibly weaker. |
| **Micro-reassurance** | One short line under the CTA that kills the main fear: "No credit card required · Cancel anytime". |
| **Visual** | The product itself, the result, or the person who gets the result. Never generic stock. |
| **Proof peek** | Logos, rating or a usage count either inside the hero or immediately below it. |

**Headline formulas that consistently work:**
- *Outcome + timeframe:* "Close your books in 3 days, not 3 weeks."
- *Outcome + without pain:* "Professional invoices without the spreadsheet."
- *Category reframe:* "The CRM that updates itself."
- *Audience + outcome:* "Payroll for Spanish startups, done in 10 minutes."

**Test it:** cover the logo and read the headline. Could a competitor use the same sentence unchanged? If yes, it's too generic.

### Layout, sizes & spacing
- **Layout options:** (a) split — copy left, visual right (default for SaaS/B2B, matches left-to-right reading); (b) centered — copy centered, product visual below (works for strong brands and short headlines); (c) full-bleed media with overlaid text (lifestyle, hospitality, e-commerce).
- **Height:** don't force `100vh`. Aim for the hero to occupy ~80–90% of the first viewport so the next section peeks. On mobile use `min-height: 100svh` only if you must; prefer content-driven height.
- **H1 size:** desktop 48–80 px, mobile 32–44 px. Use fluid sizing, e.g. `font-size: clamp(2.25rem, 1.5rem + 3.5vw, 4.5rem)`.
- **H1 line-height:** 1.05–1.15. **Letter-spacing:** slightly negative at large sizes (−0.01 to −0.03 em).
- **H1 measure:** max ~12–18 words per line; use `text-wrap: balance` to avoid a lone word on the last line.
- **Subheadline:** 18–22 px, line-height 1.4–1.5, `max-width: 50–60ch`, color one step lighter than the H1.
- **Spacing:** eyebrow→H1: 12–16 px · H1→subhead: 16–24 px · subhead→CTA: 32–40 px · CTA→reassurance: 12 px.
- **Top padding:** 64–120 px desktop below the header; 32–56 px mobile.

### 🔴 Critical errors
- **Carousels/sliders in the hero.** Rotating messages split the one message, get ignored as banners, and hide content behind timing.
- Headline about the company ("We are a leading provider of innovative solutions") instead of the visitor's outcome.
- Background video or huge image that delays the LCP past 2.5 s on mobile.
- Hero image `loading="lazy"` (it's the LCP element; lazy-loading it delays the most important paint).
- Text over a busy image without an overlay → fails contrast, unreadable on half the images.

### 🟠 Common errors
- Two or three equal-weight buttons ("Get started", "Book demo", "Learn more").
- Abstract 3D blobs or illustrations that say nothing about the product.
- Headline over two lines on desktop but six lines on mobile (always check the mobile wrap).
- A "Learn more" or "Discover" CTA — low commitment *and* low clarity.
- Missing reassurance microcopy, so the button's implied cost (time, card, commitment) is unknown.

### 🟢 Level-up fixes
- Show the **actual product UI**, cropped tight on the most impressive part, not a full dashboard shrunk to unreadable size.
- If you run multiple ad campaigns, create a hero variant per campaign (dynamic headline per UTM or per ad group). One angle per landing page above the fold; reuse the body below.
- Put a rating or "Trusted by 4,200+ teams" line directly under the CTA. Proof is most effective at the point of decision.
- Use a **directional cue**: a person in the photo looking toward the headline/CTA, or the product image slightly angled toward the copy.

### 💎 Insider notes
- **The CTA-above-the-fold rule isn't universal.** Zoho's CRO playbook cites tests where a below-the-fold CTA outperformed an above-the-fold one; visibility is not readiness. Simple, familiar products → CTA above the fold. Complex, expensive or unfamiliar products → keep the hero CTA, but expect the real conversions to come from CTAs placed after the explanation.
- The **"smallest true claim"** technique: product pages from Apple lead with modest, verifiable claims rather than grand promises, which reads as more confident. A smaller claim you can prove beats a big claim the visitor discounts.
- Preload the hero image and give it `fetchpriority="high"`; set explicit `width`/`height` or `aspect-ratio` to prevent layout shift.
- For hero video: muted, `playsinline`, short loop (≤ 10–15 s), a static `poster` image that *is* the LCP, and a pause control (required for accessibility on auto-playing motion > 5 s).
- Run a **5-second test** (show the hero for 5 seconds to 5–10 people from the target audience, then ask what the product does and who it's for). If more than a couple can't answer, rewrite before touching the design.

### Style notes
Apple: centered, huge, few words, product-as-hero. Neo-brutalist: massive type, flat color blocks, stickers. Linear: dark, two-line value prop, product UI glowing below. Maximalist: layered collage, vibrant color. See `05_DESIGN_STYLES.md`.

---

## 3. Primary CTA (the button system)

The CTA isn't one section; it's a **system** repeated down the page. It's mandatory because without it the page has no purpose.

### Job
Make the next step obvious, low-risk, and easy to hit — wherever the visitor is when they decide.

### Psychology
- **Von Restorff effect:** the button must be the most visually distinct element on the screen. Reserve one accent color exclusively for primary CTAs.
- **Fitts's law:** big, close, easy-to-reach targets get clicked more, especially with thumbs.
- **First-person framing:** button copy in the first person ("Start **my** free trial") makes the button part of the reader's internal dialogue. Unbounce's Michael Aagaard reported a 90% click-through lift switching from "your" to "my" in one test; Orbit Media reports a 24% difference in another. Direction reliable; size varies — test it.
- **Anxiety reduction:** the fear behind the click (cost, commitment, spam, effort) has to be addressed right next to the button.

### Content rules
- **Verb + outcome:** "Get my report", "Start free trial", "Book my demo", "See pricing".
- 2–5 words. Never "Submit", "Click here", "Send", "Learn more" as the primary.
- The label must **predict the next screen**. If the button says "Start free trial" and leads to a "Contact sales" form, trust is broken.
- **Microcopy** under or beside the button: one line, smaller and visually subordinate, answering the main objection ("Free for 14 days · No card needed", "Takes 2 minutes", "Reply within 1 business day").

### Layout, sizes & spacing
- Height: **44–56 px** desktop, **48–56 px** mobile. Horizontal padding 24–32 px.
- Minimum target: WCAG 2.2 AA requires 24×24 CSS px; Apple HIG recommends 44 pt; Google Material 48 dp. Use **48 px** as your mobile floor.
- Font: 16–18 px, weight 600, sentence case. Avoid ALL CAPS (lower legibility, feels like shouting) unless the style demands it.
- On mobile, primary CTAs can go **full-width** within the content padding.
- Spacing between primary and secondary buttons: 12–16 px; never stack two equally styled buttons.
- **Repeat the CTA** roughly every 2–3 screenfuls: hero, after proof/demo, after pricing, final CTA.

### Button states (all required)
| State | Treatment |
|---|---|
| Default | Accent fill, high-contrast label (≥ 4.5:1) |
| Hover | Slightly darker/lighter fill, or 1–2 px lift; 120–200 ms transition |
| Focus-visible | Clear 2–3 px outline with offset, ≥ 3:1 contrast against the background |
| Active/pressed | Darker fill or 1 px push down |
| Loading | Spinner + label kept ("Creating account…"), button width locked to avoid layout jump |
| Disabled | **Avoid**: instead, keep it enabled and show validation errors on click |

### 🔴 Critical errors
- CTA in the brand color that is *also* used for headings, links and icons — nothing stands out.
- Low-contrast "ghost" button as the primary action.
- Multiple primary CTAs with different destinations competing in one viewport.
- Button too small or too close to other links on mobile (mis-taps).

### 🟠 Common errors
- Generic copy ("Get started") on every button regardless of context.
- Disabled submit buttons that never explain what's missing.
- No loading state → double submissions and duplicate leads.
- Reassurance copy larger or louder than the button.

### 🟢 Level-up fixes
- Vary the **framing** (not the action) as the page progresses: hero "Start free trial" → after pricing "Start free trial — 14 days free" → final CTA "Start my free trial today".
- Add an arrow icon or chevron (→) to imply forward movement; animate it 2–4 px on hover.
- Run the **squint test**: blur your eyes (or apply a 5–10 px blur in Figma). If the button isn't the first thing you see, it's not distinct enough.

### 💎 Insider notes
- "The best color for a button" is a myth. What matters is **contrast with everything around it**, which is why the same orange that wins on one site loses on another.
- Microcopy wording matters in surprising ways: a well-known ContentVerve test found that adding "100% privacy — we will never spam you" near a signup button *reduced* signups, likely because it introduced the idea of spam. Reassure without naming the fear when possible ("Your data stays private").
- "Trial" outperforms "Sign up" in many tests because it implies a temporary, reversible commitment.
- Never make the button label depend on placeholder text or icons alone — screen readers and translation tools need real text.

---

## 4. Quick Social Proof Strip

### Job
Answer "Is this real, and do people like me use it?" **before** the visitor reads the argument.

### Psychology
- **Social proof** reduces perceived risk when uncertain. Its power depends on *similarity*: logos from the visitor's own industry beat bigger but irrelevant names.
- Proof should sit **next to the doubt**: near the hero (is this legit?) and near the CTA (will I regret this?), rather than as an isolated block at the bottom.

### Content options (choose 1–2)
| Type | Best for | Format |
|---|---|---|
| Customer logos | B2B | 5–8 logos, monochrome |
| Usage count | B2C / PLG | "Used by 41,000+ designers" |
| Aggregate rating | Any with reviews | "4.8 ★ on G2 (1,240 reviews)" with platform logo |
| Press mentions | Consumer brands | "As featured in" + 3–5 outlets (only if real) |
| Single micro-testimonial | New products without logos | One short quote with face, name, role |

### Layout, sizes & spacing
- Place it **immediately under the hero**, peeking into the first viewport (also fixes the false floor).
- Logos: grayscale or single color at 40–60% opacity; container height ~24–40 px. **Equalise visual weight, not width**: a wide wordmark and a square icon need different sizes to look equal.
- Label above or beside: small text ("Trusted by teams at"), 12–14 px, muted color.
- Spacing: 32–64 px from the hero CTA; 32–48 px between logos.

### 🔴 Critical errors
- Fake or unauthorized logos, invented review counts, stock-photo "customers". Beyond ethics, fake reviews are illegal: the EU Omnibus Directive bans fake reviews and requires disclosure of how reviews are verified; the US FTC's 2024 rule allows fines for fake testimonials.
- Logos of companies that used a free plan once, presented as clients (gets discovered and kills trust).

### 🟠 Common errors
- Vague claims: "Thousands of happy customers" — say the number.
- Infinite logo marquee moving too fast, with no pause on hover and ignoring `prefers-reduced-motion`.
- Mixing colored and grayscale logos (looks messy).
- A perfect 5.0 rating: many shoppers are suspicious of perfect scores; ratings in the 4.75–4.99 range are perceived as more credible.

### 🟢 Level-up fixes
- **Segment the logos** to the traffic source: show healthcare logos to visitors from a healthcare campaign.
- Precise numbers ("4,127 teams") feel more credible than round ones ("4,000+"); round numbers are better for big scale claims ("2 million").
- Third-party ratings (G2, Trustpilot, App Store, Google) beat self-hosted testimonials because visitors discount on-site claims.

### 💎 Insider notes
- The proof strip is also a **layout tool**: it's the cheapest way to create the "peek" below the hero that encourages scrolling.
- If you have no logos yet: use a count of something real (beta users, waitlist signups, countries), a founder credential, or a single specific testimonial. One specific proof beats six generic ones.

---

## 5. Benefits & Features

### Job
Convert interest into desire by showing **what changes for the visitor** and **why they should believe it**.

### Psychology
- **Features tell, benefits sell** — but benefits without features sound like empty promises. You need both, in that order: benefit as the headline, feature as the proof.
- **Serial position effect:** the first and last items in a list are remembered best. Put your strongest benefit first and your most differentiating second-strongest last.
- **Cognitive load:** past ~6 items, people stop reading and start skimming icons.

### Content rules
- **3–6 benefits**. If you have 15 features, group them into 3–4 themes.
- Each block: **Benefit headline** (outcome, 3–8 words) → **one sentence of mechanism** (how the feature delivers it) → **proof** (screenshot, metric or micro-quote).
- Apply the **"so that" test**: "[Feature] so that you [benefit]." If you can't finish the sentence, it's not a benefit.
- Use concrete numbers: "Reports in 30 seconds" beats "Fast reporting".
- Write in the customer's vocabulary (mine reviews, support tickets, sales call transcripts, Reddit threads in your niche).

### Layout patterns
| Pattern | When to use |
|---|---|
| **Zig-zag (alternating text/image rows)** | 3–5 key benefits that each deserve a real product visual. Best for depth. |
| **Bento grid** | 5–8 capabilities with different importance; tile size signals priority. |
| **Icon grid (3×2)** | Secondary features only. Never for your main argument. |
| **Tabs / sticky scrollytelling** | Many features of a complex product; one visual swaps as the text scrolls. |

### Layout, sizes & spacing
- Section padding: 96–160 px vertical desktop, 64–96 px mobile.
- Section header (H2): 32–48 px desktop, 26–32 px mobile, with a short intro paragraph (max 2 lines).
- Zig-zag rows: 64–120 px gap between rows; text column max 480–560 px wide.
- Bento: 12–24 px gap, consistent corner radius (e.g. 16–24 px), one "hero tile" 2× the others.
- **Spacing rule (Gestalt proximity):** spacing *inside* a block (title→text) must be clearly smaller than spacing *between* blocks. A typical ratio is 1:3 or more.

### 🔴 Critical errors
- Features with no benefit ("Advanced AI engine", "Cloud-based architecture").
- Claims with no proof anywhere on the page.
- Screenshots so small that text inside them is a blur — worse than no screenshot.

### 🟠 Common errors
- The **three identical cards with icons** layout as the main argument (the most generic pattern on the web; nothing feels important).
- Icons that don't communicate anything (a rocket for "fast", a shield for "secure").
- Benefits written as "we" statements ("We provide…") instead of "you" statements.
- Too many features at equal weight, so nothing stands out.

### 🟢 Level-up fixes
- Replace icons with **cropped, annotated product screenshots** showing the exact UI that delivers each benefit.
- Use a **hierarchy of tile sizes** in bento layouts: size = importance.
- Add one metric per benefit, ideally from a customer ("Acme cut month-end close from 9 to 3 days").
- Use **sticky scrollytelling** for complex products: the product image is pinned while each benefit's text scrolls by and the image updates.

### 💎 Insider notes
- Order benefits by the visitor's **objection sequence**, not by your roadmap: "Will it work for me?" → "Is it easy?" → "Does it fit my tools?" → "Is it safe?"
- An "integrations" row (logos of tools it connects to) is secretly a social proof element: it says "this fits your world".
- The "feature graveyard" test: if removing a feature block from the page doesn't change a reader's decision, remove it.

---

## 6. Conversion Mechanism (forms, signup, checkout)

### Job
Turn intent into action with the **least possible friction**, while collecting only what you need.

### Psychology
- **Effort vs. reward:** every field is a cost. The perceived reward must exceed the perceived effort at each step.
- HubSpot's analysis of over 40,000 landing pages found that more fields lower conversion, but the *type* matters even more: multiple text areas and dropdown menus depress completion the hardest.
- **Foot-in-the-door & goal-gradient:** in multi-step forms, a trivial first step creates commitment; progress indicators raise motivation as the end approaches.
- **Zeigarnik effect:** a visible "Step 2 of 3" makes abandonment feel like leaving something unfinished.

### Content rules
- Ask for the **minimum** at conversion: often just email (B2C) or email + company (B2B). Collect the rest later during onboarding or with progressive profiling.
- One column. Labels **above** fields. Never use placeholders as labels (they vanish when typing and fail accessibility).
- Every field must justify itself. Ask "what decision would sales/onboarding make differently with this data?" If none, remove it.
- Required vs. optional: mark the **minority** (usually "optional" on the few optional fields).
- The submit button label states the outcome ("Get my quote"), never "Submit".
- Under the button: privacy/consent microcopy and what happens next ("We'll email you within 1 business day").

### Layout, sizes & spacing
- Input height: 44–56 px; font-size **≥ 16 px** on mobile (iOS Safari zooms the page on inputs below 16 px — a classic bug).
- Label→input: 6–8 px; field→field: 16–24 px; last field→button: 24–32 px.
- Form width: 320–480 px; never stretch inputs to 1000 px wide.
- Use the correct `type` and `autocomplete` attributes (`email`, `tel`, `given-name`, `organization`, `postal-code`) so browsers and password managers autofill.
- Multi-step: show progress ("Step 1 of 3"), keep each step to 1–3 fields, put the easiest question first.

### Validation rules
- Validate **on blur** (when leaving a field), not on every keystroke.
- Error messages: specific, next to the field, in text + color + icon (not color alone), and describe how to fix ("Enter an email like name@company.com").
- Never clear the form after an error.
- After submit: a clear success state with the **next step** — this is the "end" in the peak-end rule.

### 🔴 Critical errors
- Asking for phone number when there's no reason to call (major drop-off driver).
- CAPTCHA puzzles on a lead form (use honeypot fields, time-based checks or invisible challenges instead).
- Pre-ticked marketing consent checkboxes (illegal under GDPR).
- Losing all data after a validation error or a page refresh.
- Requiring account creation before purchase in e-commerce (offer guest checkout).

### 🟠 Common errors
- Splitting name into first/last when one "Full name" field works.
- Dropdowns for things with 2–4 options (use radio buttons or segmented controls).
- "Confirm email" fields.
- Password rules revealed only after failure.
- No `autocomplete`, so mobile users type everything by hand.

### 🟢 Level-up fixes
- **Social / SSO sign-in** ("Continue with Google") as the first option for SaaS.
- **Two-step opt-in:** a button that opens the form ("Get my free guide" → modal with one email field). The click is a micro-commitment.
- Wallet payments (Apple Pay, Google Pay) for checkout.
- Enrich B2B leads with a data-enrichment tool after submit instead of asking company size, industry, role.
- Show a small reassurance/proof element **next to the form** (a testimonial, a security badge, response time).

### 💎 Insider notes
- Shortening forms is often reported as the single biggest lift on lead-gen pages (a widely cited Imagescape case reported +120% going from 11 to 4 fields), but beware: fewer fields can lower **lead quality**. Measure qualified leads or revenue, not just form submits.
- For high-ticket B2B, a slightly *longer* qualifying form can increase sales efficiency. Fix it by making the form feel shorter (multi-step) rather than actually removing qualifying questions.
- Track **form starts vs. completions** per field (field-level analytics). The field with the highest abandonment is your next fix.
- Put the form **on the page** (inline) for low-commitment offers; use a dedicated step/modal for high-commitment ones.

---

## 7. Final CTA Section

### Job
Catch visitors who read everything and are now ready — and give the page a strong ending.

### Psychology
- **Peak-end rule:** the last impression weighs disproportionately. A weak or absent ending wastes the page's momentum.
- **Recency effect:** the final message is remembered.
- **Loss aversion / risk reversal:** at the moment of decision, the main barrier is fear of making a mistake.

### Content rules
- **Restate the core promise** in new words (don't copy the hero headline verbatim).
- Repeat the offer and its key terms (trial length, price, guarantee).
- One primary CTA (same action as the hero). Optionally a secondary low-commitment action ("Talk to sales").
- Add **risk reversal** ("30-day money-back guarantee", "Cancel anytime").
- Optional: one short testimonial or a proof line.
- **No new information.** Introducing a new feature here creates a new question at the worst moment.

### Layout, sizes & spacing
- A visually distinct **full-width band**: contrasting background (dark band on a light page, brand color, or gradient).
- Centered content, max-width ~640–720 px.
- Vertical padding: 96–160 px desktop, 64–96 px mobile.
- Headline: 36–56 px desktop.

### 🔴 Critical errors
- No final CTA at all (the page just ends in a footer).
- Final CTA with a different offer or destination than the hero.

### 🟠 Common errors
- Just a button with "Ready to get started?" — the most generic headline on the web.
- Placing the final CTA *before* the FAQ, so visitors who resolve their last objection in the FAQ have nowhere to go.

### 🟢 Level-up fixes
- Use a **benefit-recap headline**: "Close your books in 3 days. Starting this month."
- Show the faces of a few customers or team members (humanises the decision).
- If the offer has a natural deadline (launch pricing, cohort start), state it honestly here.

### 💎 Insider notes
- If you have an FAQ, put a mini-CTA directly after it **and** the final CTA band after that. The FAQ is where the last objections die; that's exactly the moment to ask.
- In long pages, heatmaps often show the final CTA getting a meaningful share of conversions from the most qualified visitors — those who read everything. Don't treat it as decoration.

---

## 8. Footer

### Job
Satisfy legal obligations, give a last route to contact or convert, and support SEO/navigation without distracting.

### Legal minimum (EU / Spain)
- **Aviso legal / Legal notice** (required in Spain by the LSSI-CE for businesses operating online: company name, tax ID/NIF, registered address, contact email, registry details).
- **Privacy policy** (GDPR).
- **Cookie policy** + a way to **reopen cookie settings** at any time (a "Cookie settings" link).
- Terms and conditions if you sell or offer a service.
- Accessibility statement (recommended; required for public sector and increasingly expected under the EAA).

### Content by page type
| Page type | Footer |
|---|---|
| Paid campaign landing page | Minimal: legal links, copyright, contact email. No navigation. |
| Product homepage | "Fat footer": product links, company, resources, legal, social, language selector, newsletter. |

### Layout, sizes & spacing
- Text 13–14 px, muted color but **still ≥ 4.5:1 contrast** (very common accessibility failure).
- Vertical padding 48–96 px; columns 4–5 on desktop collapsing to accordions or stacked lists on mobile.
- Link targets still need ≥ 24×24 px area (add padding).

### 🔴 Critical errors
- No legal notice, privacy or cookie links (legal exposure; also a trust red flag).
- Footer links so light gray they fail contrast.

### 🟠 Common errors
- Copyright year hard-coded and outdated (signals an abandoned site; generate it dynamically).
- Social icons linking to dead or inactive profiles (negative social proof).
- A full mega-footer on a campaign page (escape hatches at the end of the funnel).

### 🟢 Level-up fixes
- Add a compact final CTA or newsletter field in the footer of product homepages.
- Add trust signals (certifications, payment methods, security badges) in the footer row for e-commerce.
- Show a physical address and real contact options: strong trust signal for B2B and local businesses.

### 💎 Insider notes
- A footer is the cheapest place to add **internal links for SEO** on a product site, but on a campaign page every link is a leak. Use a different footer template per page type.
- A "Status" link (uptime page) in a SaaS footer is a quiet but powerful trust signal for technical buyers.
