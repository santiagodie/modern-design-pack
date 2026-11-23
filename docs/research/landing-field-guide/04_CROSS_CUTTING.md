# 04 — Cross-Cutting Elements

> These don't live in one section; they shape the whole page. Most are mandatory because a failure here breaks *every* component at once.

| # | Element | Priority |
|---|---|---|
| 1 | [Visual system: layout, grid & spacing](#1-visual-system-layout-grid--spacing) | 🔴 Mandatory |
| 2 | [Typography system](#2-typography-system) | 🔴 Mandatory |
| 3 | [Color system & contrast](#3-color-system--contrast) | 🔴 Mandatory |
| 4 | [Copywriting system](#4-copywriting-system) | 🔴 Mandatory |
| 5 | [Mobile-first responsive design](#5-mobile-first-responsive-design) | 🔴 Mandatory |
| 6 | [Performance & Core Web Vitals](#6-performance--core-web-vitals) | 🔴 Mandatory |
| 7 | [Accessibility (WCAG 2.2 AA)](#7-accessibility-wcag-22-aa) | 🔴 Mandatory |
| 8 | [SEO & AI-search foundations](#8-seo--ai-search-foundations) | 🔴 Mandatory |
| 9 | [Analytics, tracking & cookie consent](#9-analytics-tracking--cookie-consent) | 🔴 Mandatory |
| 10 | [Sticky mobile CTA](#10-sticky-mobile-cta) | 🟠 Important |
| 11 | [Motion & micro-interactions](#11-motion--micro-interactions) | 🟠 Important |
| 12 | [Imagery & illustration](#12-imagery--illustration) | 🟠 Important |
| 13 | [Dark mode](#13-dark-mode) | 🟢 Complement |
| 14 | [A/B testing programme](#14-ab-testing-programme) | 🟢 → 🟠 depending on traffic |
| 15 | [Ethics & dark patterns](#15-ethics--dark-patterns) | 🔴 Mandatory (as a constraint) |

---

## 1. Visual System: Layout, Grid & Spacing

### Rules
- **Spacing scale:** use a 4/8-based scale and nothing else: `4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160`. Random values (13 px, 27 px) are the clearest signal of amateur work.
- **Gestalt proximity — the most important spacing rule:** spacing *inside* a group must be visibly smaller than spacing *between* groups. Example: heading→paragraph 16 px; paragraph→next card 48 px; section→section 128 px. When internal and external spacing are similar, the eye can't tell what belongs together.
- **Section rhythm:** vertical section padding 96–160 px desktop, 64–96 px tablet, 48–80 px mobile. Keep it consistent; vary it *deliberately* only to group or separate chapters.
- **Container:** max content width 1120–1280 px; narrow text containers to 640–720 px; product visuals may go wider or full-bleed.
- **Grid:** 12 columns desktop (gutter 24–32 px), 8 tablet, 4 mobile (gutter 16–20 px). Side padding on mobile: 16–24 px.
- **Alignment:** pick one dominant alignment per section (left-aligned is easier to read for long text; centered works for short headings and CTAs). Mixing left and centered blocks inside one section looks unintentional.

### Psychology
- **Visual hierarchy** guides attention through size, contrast, color, position and whitespace — in that order of power.
- Generous whitespace signals **premium and calm**; dense layouts signal **value and abundance**. Choose intentionally for your brand.
- **F-pattern** (text-heavy pages) and **Z-pattern** (sparse pages, heroes) describe common scanning paths: place the headline at the start, the CTA at the end of the scanning path.

### 💎 Insider notes
- Use a **"breathing hierarchy"**: the more important a section, the more space around it. The hero and final CTA get the most space; secondary features the least.
- Do a **"blur test"** on the full page (zoom out to 25% or blur in Figma). You should see clear blocks with a rhythm, not a uniform grey wall.
- The single best upgrade for a "template-looking" page is usually **more space between sections and less inside cards**.

---

## 2. Typography System

### Rules
- **Font count:** 1 family (with weights) or 2 (display + text). Three or more almost always looks chaotic.
- **Type scale:** pick a ratio and derive all sizes from it. 1.250 (major third) for dense/product sites; 1.333 (perfect fourth) for marketing; 1.5+ for dramatic editorial/Apple-style heroes.
- **Fluid type:** use `clamp()` for headings so they scale smoothly between mobile and desktop.

| Role | Mobile | Desktop | Line-height | Weight |
|---|---|---|---|---|
| Display / H1 | 32–44 px | 48–80 px (up to 96+ for editorial) | 1.05–1.15 | 600–800 |
| H2 | 26–32 px | 36–48 px | 1.1–1.2 | 600–700 |
| H3 | 20–22 px | 22–28 px | 1.2–1.3 | 600 |
| Body | 16–18 px | 17–20 px | 1.5–1.65 | 400 |
| Small / microcopy | 13–14 px | 13–15 px | 1.4–1.5 | 400–500 |

- **Line length (measure):** 45–75 characters per line, ~66 is the classic optimum (Bringhurst). In CSS: `max-width: 65ch` on paragraphs.
- **Letter-spacing:** tighten large display type (−0.01 to −0.04 em); loosen small uppercase labels (+0.05 to +0.12 em).
- **`text-wrap: balance`** for headings, **`text-wrap: pretty`** for paragraphs (avoids orphans).
- Use **real typographic punctuation**: curly quotes (" " ' '), en dashes for ranges (2–4), em dashes (—), the true ellipsis (…).

### 🔴 Critical errors
- Body text below 16 px on mobile.
- Light grey thin text (weight 300 at #999) — fails contrast and reads as "faded".
- Paragraphs stretched to 120+ characters per line.

### 💎 Insider notes
- **Web font loading causes layout shift**: self-host fonts, subset them, preload the 1–2 critical files, use `font-display: swap`, and set a fallback font with `size-adjust`/`ascent-override` so the fallback occupies the same space (eliminates the "jump" when the web font arrives).
- **Variable fonts** let you ship one file for all weights and fine-tune weight (e.g. 560) for perfect hierarchy.
- Optical sizing: display cuts of a typeface (e.g. "Display" variants) look much better at 60+ px than the text cut scaled up.
- One of the clearest tells of AI-generated, template-built pages is the default stack: Inter, slate grey, purple gradient, centered hero over a dark mesh. If you use Inter, make it deliberate (custom tracking, a distinctive display font, or a strong color).

---

## 3. Color System & Contrast

### Rules
- **60-30-10 rule:** ~60% dominant neutral (background), ~30% secondary (surfaces, text blocks), ~10% accent.
- **Reserve one accent exclusively for primary CTAs** (Von Restorff). If the CTA color also appears in icons, headings and decorative shapes, the CTA stops standing out.
- Build colors as **tokens** (e.g. `--bg`, `--surface`, `--text`, `--text-muted`, `--border`, `--accent`, `--accent-contrast`), with light and dark values.
- Use **near-black and off-white** rather than pure #000/#FFF for large areas (reduces glare, looks more refined), but keep contrast compliant.
- **Contrast minimums (WCAG AA):** 4.5:1 for body text; 3:1 for large text (≥ 24 px regular or ≥ 18.66 px bold) and for UI components/graphics (button borders, input borders, focus rings, icons that convey meaning).

### 💎 Insider notes
- Check contrast **on top of images and gradients at their worst point**, not at their average.
- Never convey meaning by color alone (errors, success, "included/not included" in pricing tables) — pair with icons or text.
- Muted footer and microcopy text is the #1 contrast failure on otherwise good sites.
- Color psychology claims ("blue = trust") are weak and culture-dependent. Contrast, consistency and brand fit matter far more than hue.

---

## 4. Copywriting System

### Rules
- **Message match:** the hero headline repeats the promise of the ad, email or search query that brought the visitor.
- **One page, one offer, one audience.** If you need to speak to two audiences, make two pages.
- **Reading level:** Unbounce's data, as summarised by systeme.io, shows pages written at a 5th–7th grade reading level converting at around 11%, substantially more than pages at 8th–9th grade. Short words, short sentences (≤ 20 words), active voice.
- **"You" over "we".** Count both on the page; "you/your" should clearly dominate.
- **Specifics over adjectives:** "Set up in 4 minutes" beats "Quick and easy setup".
- **Headings must make sense on their own:** a visitor who reads only the H2s should understand the full argument (most visitors scan headings only).
- **Front-load:** the first 2–3 words of every heading and bullet carry the meaning.

### Copy structure frameworks
- **PAS** — Problem, Agitate, Solve (cold traffic, pain-driven products).
- **AIDA** — Attention, Interest, Desire, Action (classic sales structure; maps well to hero → benefits → proof → CTA).
- **BAB** — Before, After, Bridge (transformation-driven products).
- **4U headline test** — Useful, Urgent, Unique, Ultra-specific.

### 💎 Insider notes
- Write the page **before** designing it ("content-first"). Designing with lorem ipsum produces layouts that don't fit real messages and pushes copy into decorative boxes.
- The **"so what?" test:** read each sentence and ask "so what?". If the next sentence doesn't answer it, the copy is feature-talk.
- Steal the customer's words: review mining (G2, Amazon, App Store, Trustpilot reviews of you *and competitors*) gives you headlines that sound like your buyers, not like marketing.

---

## 5. Mobile-First Responsive Design

Most landing-page visits happen on mobile, while mobile conversion rates commonly lag desktop by a wide margin. Closing that gap is one of the highest-ROI jobs on any page.

### Rules
- **Design mobile first**, then expand. The mobile version forces clear priorities.
- **Breakpoints by content**, not by device names: add a breakpoint where the layout breaks.
- **Thumb zone:** primary actions within easy reach of the thumb (lower and center of the screen); avoid critical actions in the top corners.
- **Touch targets:** minimum 24×24 px (WCAG 2.2 AA), recommended 44–48 px, with ≥ 8 px between adjacent targets.
- **Viewport units:** use `svh`/`dvh` instead of `vh` for full-height sections (mobile browser bars make `100vh` taller than the visible screen).
- **Safe areas:** respect `env(safe-area-inset-*)` for notches and home indicators, especially on sticky bottom bars.
- **Nothing hover-dependent:** tooltips, reveals and menus must work on tap.
- **Inputs ≥ 16 px font size** (prevents iOS zoom), correct `inputmode` and `type` for the right keyboard (`email`, `tel`, `numeric`).
- **Reorder thoughtfully:** on mobile, the hero visual often goes *below* the headline and CTA, not above.
- **Tables** (pricing, comparison) need a mobile strategy: horizontal scroll with a sticky first column, or card stacking.

### 🔴 Critical errors
- Horizontal scrolling on the whole page (an element wider than the viewport).
- Text that requires zooming.
- Pop-ups that cover the screen on mobile with a tiny close button.

### 💎 Insider notes
- Test on a **real mid-range Android phone** on a throttled 4G connection, not on your MacBook's responsive mode. That's where most of your users and most of your performance problems are.
- On mobile, **every pixel of sticky chrome** (header + announcement + cookie bar + chat bubble + sticky CTA) reduces the content area. Audit the total.

---

## 6. Performance & Core Web Vitals

### Thresholds (75th percentile of real users)
| Metric | Measures | Good | Poor |
|---|---|---|---|
| **LCP** — Largest Contentful Paint | Loading of the main content | ≤ 2.5 s | > 4.0 s |
| **INP** — Interaction to Next Paint | Responsiveness to clicks/taps/keys | ≤ 200 ms | > 500 ms |
| **CLS** — Cumulative Layout Shift | Visual stability | ≤ 0.1 | > 0.25 |

Core Web Vitals are part of Google's page experience signals, and for paid traffic, landing page experience feeds into Google Ads Quality Score — a slow page can make every click more expensive.

### LCP checklist (usually the hero image or headline)
- Preload the hero image; `fetchpriority="high"`; **never** lazy-load it.
- Serve AVIF/WebP with responsive `srcset` and `sizes`.
- Server-render or statically generate the page; avoid client-side rendering of the hero.
- Use a CDN; keep TTFB low.
- Inline critical CSS; defer non-critical CSS.

### INP checklist (usually JavaScript)
- **Third-party scripts are the #1 culprit**: tag managers, chat widgets, heatmaps, A/B testing tools, ad pixels. Audit and defer everything that isn't needed for the first interaction.
- Break up long tasks; load widgets on interaction (facades).
- Avoid heavy scroll listeners; use `IntersectionObserver` and CSS scroll-driven animations.

### CLS checklist
- Set `width`/`height` or `aspect-ratio` on all images, videos and iframes.
- Reserve space for anything injected late: cookie banners, announcement bars, embeds, ads.
- Font fallback metrics matched (`size-adjust`) to prevent text reflow.
- Animate only `transform` and `opacity`.

### 💎 Insider notes
- A/B testing tools that use **anti-flicker snippets** (hiding the page until the test loads) can add hundreds of milliseconds to LCP. Prefer server-side or edge-based testing for landing pages.
- Measure with **field data** (CrUX, the `web-vitals` library sending to your analytics), not just Lighthouse lab scores. Lighthouse on a fast laptop routinely says "100" while real mobile users suffer.
- Set a **performance budget** (e.g. ≤ 1 MB total page weight, ≤ 150 KB JS for the landing page) and fail builds that exceed it.

---

## 7. Accessibility (WCAG 2.2 AA)

### Why it's mandatory
WCAG 2.2 is the current W3C standard (published October 2023, approved as ISO/IEC 40500:2025) and is referenced by accessibility laws worldwide. The **European Accessibility Act** has applied since 28 June 2025 to many businesses selling digital products and services, including e-commerce, in EU markets. Beyond legal risk, accessibility improvements generally improve usability and conversion for everyone.

### The landing-page checklist
- **Structure:** one `<h1>`; headings in order (h2 → h3, no skipping); landmarks (`<header>`, `<nav>`, `<main>`, `<footer>`); a skip link.
- **Text alternatives:** meaningful `alt` text for informative images; `alt=""` for decorative ones; captions for videos.
- **Contrast:** 4.5:1 body text; 3:1 large text and UI components.
- **Keyboard:** everything reachable and operable with Tab/Enter/Space/Esc; logical focus order; no keyboard traps; modals trap focus correctly and return it on close.
- **Focus visible** — and, new in WCAG 2.2, **Focus Not Obscured (Minimum, 2.4.11)**: a focused element must not be entirely hidden by sticky headers, cookie banners or chat bubbles.
- **Target Size (Minimum, 2.5.8):** interactive targets at least 24×24 CSS px (or with enough spacing).
- **Forms:** visible labels; errors described in text; `autocomplete` attributes; **Redundant Entry (3.3.7)**: don't make users re-type information already given; **Accessible Authentication (3.3.8)**: allow password managers and paste, no cognitive puzzles.
- **Motion:** respect `prefers-reduced-motion`; any auto-moving content lasting more than 5 s needs pause/stop controls (carousels, marquees, background videos).
- **Language:** `<html lang="en">` (or the right language).

### 💎 Insider notes
- **Accessibility overlays** (widgets claiming one-line compliance) don't make a site compliant and are criticised by the accessibility community; fix the code instead.
- Test with a screen reader for 10 minutes (VoiceOver on Mac/iOS, NVDA on Windows, TalkBack on Android). You'll find issues no automated tool catches.
- Automated tools (axe, Lighthouse, WAVE) catch only a minority of WCAG issues; they're a floor, not a certificate.

---

## 8. SEO & AI-Search Foundations

### Rules
- **Title tag** ≤ ~60 characters: primary keyword + benefit + brand.
- **Meta description** ~140–160 characters: the promise + a reason to click (not a ranking factor, but a click-through factor).
- **One H1** that includes the main topic naturally.
- **Semantic HTML** and a logical heading outline (also how AI systems parse your page).
- **Open Graph / social meta** (`og:title`, `og:description`, `og:image` at 1200×630) — controls how the page looks when shared in Slack, LinkedIn, WhatsApp.
- **Structured data (JSON-LD):** `Organization`, `Product` or `SoftwareApplication`, `Offer` (pricing), `Review`/`AggregateRating` (only for genuine reviews), `FAQPage`, `BreadcrumbList`.
- **Canonical URL**; avoid duplicate landing page variants indexed separately (`noindex` paid-only variants, or canonicalise to the main page).
- **Image SEO:** descriptive file names and alt text, modern formats, dimensions set.

### AI-search considerations (2026)
Search is increasingly mediated by AI answer engines. DesignRush describes the 2026 requirement as pages that are fast enough to convert, structured enough for AI, and distinctive enough not to look machine-generated.
- Answer clear questions in clear sentences (FAQ, "What is X?" sections).
- Put facts in **HTML text**, not in images or canvas.
- State specifics (prices, integrations, locations, numbers) plainly so they can be extracted and quoted correctly.

### 💎 Insider notes
- Paid campaign landing pages and SEO landing pages have **conflicting needs**: paid pages want fewer links and shorter copy; SEO pages need depth and internal links. Don't force one page to do both.

---

## 9. Analytics, Tracking & Cookie Consent

### Minimum tracking plan
| Event | Why |
|---|---|
| Page view with UTM source/medium/campaign | Attribution, message-match analysis |
| CTA clicks (each CTA with a position label: hero, mid, pricing, final, sticky) | Learn which CTA position actually works |
| Scroll depth (25/50/75/90%) | Find where attention drops |
| Form start, field interactions, form submit, form errors | Diagnose form friction |
| Video play / 25 / 50 / 100% | Is the demo watched? |
| FAQ item opens | Discover the biggest objections |
| Pricing toggle (monthly/annual) and plan selection | Pricing psychology insights |
| Outbound clicks | Find leaks |

Add **qualitative tools**: heatmaps and session recordings (e.g. Microsoft Clarity, Hotjar), on-page polls ("What's stopping you from signing up today?"), and post-conversion surveys ("What almost stopped you?").

### Cookie consent (EU / Spain)
- Non-essential cookies (analytics, advertising, most heatmaps) require **prior consent**.
- The **"Reject" option must be as easy as "Accept"** — same layer, comparable prominence. This is explicit in EDPB guidance and in the Spanish data protection authority's (AEPD) cookie guidance.
- Provide a permanent way to change preferences (footer link).
- Use **Google Consent Mode v2** if running Google Ads/Analytics, so measurement degrades gracefully when consent is denied.
- Consider privacy-friendly, cookieless analytics (e.g. Plausible, Fathom, Matomo configured without cookies) for baseline traffic data.

### 💎 Insider notes
- Design the cookie banner as a **first-class component**: it is the first thing every new visitor sees. A huge, ugly banner covering the hero damages first impressions and the LCP metric. A compact bottom bar with clear Accept/Reject/Settings buttons is both compliant and less damaging.
- Heatmaps tell you *what* happens; recordings and polls tell you *why*. NN/g's line is worth remembering: a click blob shows *where* users clicked a lot, not *why* they're confused.

---

## 10. Sticky Mobile CTA

### When and how
- A bottom bar with the primary CTA (and optionally the price) that **appears after the hero CTA scrolls out of view**.
- **Hides** when the final CTA section or a form is visible (avoids duplicate buttons on screen).
- Height 56–72 px plus `env(safe-area-inset-bottom)`; full-width button; subtle top border or shadow.

### Rules
- Must not cover the cookie banner, chat bubble or form submit button.
- Must not obscure focused elements (WCAG 2.2 Focus Not Obscured).
- Desktop usually doesn't need it — a sticky header CTA is enough.

### 💎 Insider notes
- Adding a short context line in the bar ("14-day free trial · No card") often helps more than the button alone, because the bar is seen mid-scroll when the visitor has forgotten the offer terms.

---

## 11. Motion & Micro-Interactions

Figma's 2026 trend overview notes that motion — from subtle hover effects to scroll-based narratives — is now a baseline expectation, used to guide attention and build immersion, with timing and easing matched to brand tone (smooth for luxury, snappy for playful).

### Rules
| Motion type | Duration | Easing |
|---|---|---|
| Hover/press feedback | 100–200 ms | ease-out |
| Small UI transitions (accordion, tabs) | 200–300 ms | ease-in-out |
| Section reveals on scroll | 300–600 ms | ease-out, small distance (8–24 px) |
| Hero/storytelling sequences | 600–1200 ms | custom curves |

- Animate **`transform` and `opacity` only**.
- Reveal-on-scroll should be **subtle and fast**, and content must be visible if JavaScript fails.
- **Respect `prefers-reduced-motion`:** remove parallax, auto-playing loops and large movements; keep instant state changes.
- **Never scroll-jack** (overriding native scroll speed/direction) on a conversion page — it disorients users and breaks accessibility.

### 💎 Insider notes
- Motion's job is to **explain** (where something came from, what changed) and to **direct attention** (one moving thing at a time). Movement is a powerful attention magnet — which is exactly why multiple simultaneous animations destroy hierarchy.
- Native **CSS scroll-driven animations** (`animation-timeline: view()`) now handle many scroll effects without JavaScript, which is better for INP. Provide fallbacks for browsers without support.
- Staggered reveals of every single card on every section quickly feel like a template. Animate the *important* moments only.

---

## 12. Imagery & Illustration

### Rules
- **Hierarchy of image credibility:** real product UI > real customers/team > custom photography > custom illustration > stock photography.
- Pick **one illustration/photo style** and apply it consistently (line weight, palette, perspective, lighting).
- People in images: diverse, realistic, and *doing* something relevant. Faces attract attention; a face looking at the CTA directs attention there.
- Compress everything; provide `alt` text; set dimensions.

### 🔴 Critical errors
- Generic stock (handshakes, people pointing at laptops, smiling headset agents). Visitors recognise them instantly and discount the whole page.
- AI-generated "people" presented as real customers or staff.

---

## 13. Dark Mode

Figma notes that dark mode has become standard across many sites and apps, often with a toggle, as part of a broader push toward personalisation and accessibility.

### Rules
- If you support it, follow the user's system preference (`prefers-color-scheme`) and offer a toggle.
- Don't just invert: dark surfaces should be **dark grey, not pure black**; elevate with lighter surfaces instead of shadows; desaturate bright accents slightly.
- Check every image, logo and screenshot in both modes (dark logos vanish on dark backgrounds; provide alternates).
- Re-check contrast in dark mode — muted text often fails.

### 💎 Insider notes
- For developer and design-tool audiences, a dark landing page is an expected genre signal (see "Linear style" in `05_DESIGN_STYLES.md`). For many consumer and B2B audiences, light pages read as more open and trustworthy. Choose by audience, not by trend.

---

## 14. A/B Testing Programme

### When it makes sense
- You need enough conversions to reach statistical significance — practically, at least a few hundred conversions per variant within 2–4 weeks. Lovable's guide suggests that **below roughly 1,000 weekly visitors**, you should apply proven best practices instead of testing.
- Below that, use qualitative research: 5-second tests, user interviews, session recordings, polls.

### Rules
- Test **one hypothesis** at a time, based on research ("Visitors don't understand X, as shown in polls → clarify the headline").
- **Pre-commit** to sample size and duration; run full weeks (weekday/weekend behaviour differs); don't stop when it "looks significant".
- Prioritise big levers: offer, headline/value proposition, page structure, form length, proof placement. Button colors are last.
- Measure **downstream metrics** (qualified leads, activation, revenue), not just clicks.

### 💎 Insider notes
- The biggest wins usually come from changing **the offer** (free trial vs. freemium vs. demo; guarantee terms; bonus) rather than the design.
- Keep a **test log** (hypothesis, result, learning). The learnings compound across pages; the individual wins often don't.

---

## 15. Ethics & Dark Patterns

These are not just ethical concerns: in the EU, the Digital Services Act, consumer protection law (Unfair Commercial Practices Directive) and GDPR increasingly target manipulative design.

### Avoid
- **Fake urgency:** countdown timers that reset on reload; "Only 2 left!" when false.
- **Fake social proof:** invented "X just bought" pop-ups, fabricated reviews.
- **Confirmshaming:** guilt-trip decline links.
- **Hidden costs:** fees revealed only at checkout.
- **Roach motel:** easy to sign up, hard to cancel.
- **Pre-checked boxes** for marketing consent or add-ons.
- **Disguised ads** and misleading button hierarchies (making "Reject" invisible).

### The principle
Use psychology to **reduce friction and clarify value**, never to deceive. Figma's 2026 trend overview explicitly frames avoiding dark patterns as part of ethical, sustainable web design. Real urgency (an actual deadline, actual limited stock), real proof and honest guarantees convert well and keep working; manipulative tactics erode trust and invite regulators.
