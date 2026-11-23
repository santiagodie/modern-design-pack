# The Modern Landing Page Field Guide (2026 edition)

A component-by-component guide to building landing pages that convert, written for designers, developers and marketers who already know the basics and want the details that usually take years to learn.

---

## How this guide is organised

| File | Contents |
|---|---|
| `00_README.md` | This index: priority matrix, canonical page order, psychology cheat-sheet, sources |
| `01_MANDATORY.md` | Components a landing page **cannot ship without** |
| `02_IMPORTANT.md` | Components that **strongly affect conversion** and belong on most pages |
| `03_NICE_TO_HAVE.md` | **Complements**: valuable when you have the assets, traffic or budget |
| `04_CROSS_CUTTING.md` | Things that apply to the whole page: responsive, performance, accessibility, SEO, analytics, consent, testing, the visual system (type, spacing, color, motion) |
| `05_DESIGN_STYLES.md` | How every component changes across styles: Minimalism, Apple-style, Brutalism, Neo-brutalism, Linear/dark SaaS, Swiss/editorial, Maximalism, Retrofuturism, Glass/Neumorphism, Collage, 3D/immersive, Bento |

Every component entry follows the same template:

1. **Job** — the single thing the section must achieve
2. **Psychology** — the mental mechanism it exploits or must respect
3. **Content rules** — what goes in it
4. **Layout, sizes & spacing** — concrete numbers
5. **Critical errors** 🔴 — mistakes that actively destroy conversion or trust
6. **Common errors** 🟠 — mistakes most sites make
7. **Level-up fixes** 🟢 — changes that move a page from "fine" to "professional"
8. **Insider notes** 💎 — the niche stuff senior practitioners know
9. **Style notes** — quick pointers (full detail in `05_DESIGN_STYLES.md`)

---

## Priority matrix

### Components

| # | Component | Priority | Notes |
|---|---|---|---|
| 1 | Header / navigation | 🔴 Mandatory | On paid-traffic pages it can be reduced to just a logo |
| 2 | Hero section | 🔴 Mandatory | Carries the largest share of attention on the page |
| 3 | Quick social proof strip | 🔴 Mandatory | At least one credible proof signal near the hero |
| 4 | Benefits & features | 🔴 Mandatory | The core argument |
| 5 | Conversion mechanism (form / checkout / signup) | 🔴 Mandatory | No mechanism = no landing page |
| 6 | Final CTA | 🔴 Mandatory | The "decision moment" for visitors who scrolled |
| 7 | Footer (legal minimum) | 🔴 Mandatory | Legal obligations in the EU/Spain (privacy, cookies, legal notice) |
| 8 | Problem / pain section | 🟠 Important | Mandatory for cold traffic and new categories |
| 9 | How it works | 🟠 Important | Mandatory when the product is unfamiliar |
| 10 | Visual demonstration (screens, video) | 🟠 Important | Mandatory for software |
| 11 | Testimonials & case studies | 🟠 Important | Mandatory for high-ticket or B2B |
| 12 | Pricing | 🟠 Important | Mandatory for self-serve products |
| 13 | Trust elements (guarantees, security, certifications) | 🟠 Important | Mandatory near any payment or sensitive data request |
| 14 | FAQ | 🟠 Important | Your objection-handling layer |
| 15 | Comparison section | 🟢 Complement | Strong in crowded categories |
| 16 | Live chat / chatbot | 🟢 Complement | B2B and high-ticket only |
| 17 | Interactive demo / calculator / quiz | 🟢 Complement | High lift when well built |
| 18 | Announcement bar | 🟢 Complement | Launches, offers |
| 19 | Founder / team / story block | 🟢 Complement | Strong for small brands and services |
| 20 | Exit-intent / scroll-triggered offers | 🟢 Complement | Use carefully (UX + legal risk) |

### Cross-cutting elements

| Element | Priority |
|---|---|
| Mobile-first responsive design | 🔴 Mandatory |
| Performance (Core Web Vitals) | 🔴 Mandatory |
| Accessibility (WCAG 2.2 AA) | 🔴 Mandatory (legal requirement for many businesses in the EU since June 2025) |
| SEO foundations (meta, headings, structured data) | 🔴 Mandatory |
| Analytics + cookie consent | 🔴 Mandatory |
| Visual system (type scale, spacing, color tokens) | 🔴 Mandatory |
| Copywriting system (message match, reading level) | 🔴 Mandatory |
| Sticky mobile CTA | 🟠 Important |
| Motion & micro-interactions | 🟠 Important (done with restraint) |
| Dark mode support | 🟢 Complement (mandatory if your audience is developers) |
| A/B testing programme | 🟢 Complement until you have enough traffic, then 🟠 Important |
| Personalisation / dynamic content | 🟢 Complement |

---

## Canonical page order (long-form, cold traffic)

```
┌──────────────────────────────────────────┐
│ Announcement bar (optional)              │
│ Header: logo · 3–5 anchors · CTA         │
├──────────────────────────────────────────┤
│ HERO: headline · subhead · CTA · visual  │
│       micro-reassurance under CTA        │
│ Social proof strip (logos / rating)      │  ← must "peek" above the fold
├──────────────────────────────────────────┤
│ Problem / pain (short)                   │
│ Benefits & features (3–6)                │
│ Visual demo                              │
│ How it works (3 steps)                   │
│ Testimonials / case study  ← CTA #2      │
│ Comparison (optional)                    │
│ Pricing                    ← CTA #3      │
│ Trust: guarantee · security · certs      │
│ FAQ (objections)                         │
│ FINAL CTA (reframed offer) ← CTA #4      │
├──────────────────────────────────────────┤
│ Footer: legal · contact · secondary nav  │
└──────────────────────────────────────────┘
```

### Variants by traffic temperature

| Traffic | What changes |
|---|---|
| **Hot** (brand search, retargeting, email to existing users) | Short page. Hero + proof + pricing/CTA. Skip the problem section. |
| **Warm** (comparison searches, referrals) | Lead with differentiation and comparison; proof early. |
| **Cold** (paid social, display) | Long page. Problem first, education, heavy proof, FAQ. CTA can sit lower — see the note on CTA placement in `01_MANDATORY.md`. |

**Rule of thumb:** the less the visitor knows and the more the offer costs, the longer the page has to be. Page length should match the amount of persuasion required, not a template.

---

## Psychology cheat-sheet (referenced throughout)

| Principle | One-line definition | Where it matters most |
|---|---|---|
| **Von Restorff (isolation) effect** | The item that differs is remembered and clicked | CTA color, "Most popular" pricing tier |
| **Hick's law** | More choices = slower decisions | Navigation, number of CTAs, pricing tiers |
| **Fitts's law** | Bigger and closer targets are faster to hit | Button size, mobile thumb zone |
| **Serial position effect** | First and last items are remembered best | Feature lists, FAQ order, hero + final CTA |
| **Cognitive fluency** | Easy-to-process = perceived as true and trustworthy | Typography, plain language, layout clarity |
| **Aesthetic-usability effect** | Beautiful interfaces are perceived as easier to use | Overall polish; buys tolerance for small flaws |
| **Jakob's law** | Users expect your site to work like the others they use | Nav position, logo top-left, form patterns |
| **Social proof** | We copy what similar people do | Logos, testimonials, counts |
| **Authority** | We defer to experts and recognised institutions | Press, certifications, expert quotes |
| **Loss aversion** | Losses hurt roughly twice as much as equivalent gains | Problem section, risk-reversal guarantees |
| **Anchoring** | The first number seen sets the reference | Pricing order, "was/now", enterprise tier |
| **Center-stage effect** | The middle option in a set gets chosen more | Three-tier pricing |
| **Decoy effect** | An inferior option makes the target look better | Pricing tiers |
| **Goal-gradient effect** | Motivation rises as the goal gets closer | Multi-step forms, progress bars |
| **Zeigarnik effect** | Unfinished tasks nag at us | Multi-step forms ("Step 2 of 3") |
| **Foot-in-the-door** | A small yes leads to a bigger yes | First step of a form must be trivial |
| **Peak-end rule** | Experiences are judged by their peak and their end | Final CTA, success / thank-you state |
| **Gestalt proximity** | Things close together are read as a group | Spacing system (internal < external spacing) |
| **Banner blindness** | Users ignore things that look like ads | Carousels, decorative banners, fake badges |
| **Illusion of completeness ("false floor")** | If the screen looks finished, people don't scroll | Full-height heroes with nothing peeking below |

---

## Key data points used in this guide

- Eye-tracking research by Nielsen Norman Group found users spent about 57% of page-viewing time above the fold, about 74% in the first two screenfuls, and the rest spread thinly further down. They also warn about "false floors" in minimalist designs and recommend cut-off content as a signal that there's more below. (NN/g, *Scrolling and Attention*)
- Unbounce's analysis puts the median landing page conversion around 6.6% across industries, with SaaS around 3.8%; pages written at a 5th–7th grade reading level converted noticeably better than harder-to-read pages. (via systeme.io's summary of Unbounce data)
- HubSpot's A/B test removing navigation and links found only small gains on top-of-funnel pages but 16% and 28% lifts on mid-funnel pages. (HubSpot)
- HubSpot's analysis of 40,000+ landing pages found that the *type* of field matters more than the count: multiple text areas and dropdowns depress conversions most. (HubSpot / Dan Zarrella)
- Core Web Vitals "good" thresholds: LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1, measured at the 75th percentile of real users. (web.dev)
- WCAG 2.2 AA adds, among others, Target Size (Minimum) at 24×24 CSS px and Focus Not Obscured. The European Accessibility Act applies from 28 June 2025. (W3C, multiple compliance sources)
- Baymard found 19% of checkout abandoners left because they didn't trust the site with their card details — and that users perceive some parts of a page as more secure than others. (via Lovable's summary of Baymard research)
- PowerReviews data: a surprising share of shoppers are suspicious of perfect 5.0 ratings; the sweet spot sits roughly between 4.75 and 4.99. (via Digital Applied)

> ⚠️ **On statistics from the CRO industry:** many widely quoted numbers ("+90% from first-person button copy", "+120% from shortening a form") come from single tests on single sites, sometimes many years old. Treat them as *hypotheses worth testing*, never as laws. The direction of the effect is usually reliable; the size almost never transfers.

---

## Main sources consulted

Research & standards
- Nielsen Norman Group — Scrolling and Attention: https://www.nngroup.com/articles/scrolling-and-attention/
- Nielsen Norman Group — Neobrutalism: https://www.nngroup.com/articles/neobrutalism/
- Nielsen Norman Group — Brutalism & Antidesign: https://www.nngroup.com/articles/brutalism-antidesign/
- web.dev — How the Core Web Vitals thresholds were defined: https://web.dev/defining-core-web-vitals-thresholds
- W3C — What's new in WCAG 2.2: https://w3.org/WAI/standards-guidelines/wcag/new-in-22/
- Smashing Magazine — Technical Web Typography: https://smashingmagazine.com/2011/03/technical-web-typography-guidelines-and-techniques

Conversion research & practitioner guides
- HubSpot — Should you remove navigation from landing pages: https://blog.hubspot.com/marketing/landing-page-navigation-ht
- HubSpot — Which form fields lower conversions: https://blog.hubspot.com/blog/tabid/6307/bid/6746/Which-Types-of-Form-Fields-Lower-Landing-Page-Conversions.aspx
- Venture Harbour — Landing page best practices (attention ratio): https://ventureharbour.com/landing-page-best-practices/
- systeme.io — Landing page best practices (Unbounce data summary): https://systeme.io/learn/landing-page-best-practices/
- Lovable — SaaS website best practices: https://lovable.dev/guides/saas-website-best-practices
- Orbit Media — How to design a button: https://www.orbitmedia.com/blog/how-to-design-button/
- UserTesting — CTAs that convert: https://www.usertesting.com/blog/ctas-convert
- Zoho PageSense — Heatmap mistakes / CTA placement: https://www.zoho.com/pagesense/conversion-playbook/heatmap-analysis-common-mistakes-user-insights.html
- Omniconvert — Hero section examples: https://www.omniconvert.com/blog/hero-section-examples
- Digital Applied — Trust signal placement framework: https://www.digitalapplied.com/blog/social-proof-trust-signals-2026-conversion-placement-framework
- Digital Applied — Pricing page psychology: https://digitalapplied.com/blog/subscription-pricing-page-psychology-decision-framework-2026
- Kinde — Pricing psychology: https://kinde.com/learn/billing/pricing/leveraging-behavioral-economics-to-increase-conversions

Trends & style references
- Figma — Top web design trends for 2026: https://www.figma.com/resource-library/web-design-trends/
- DesignRush — Web design trends 2026: https://www.designrush.com/agency/website-design-development/trends/web-design-trends
- LogRocket — Linear design: https://blog.logrocket.com/ux-design/linear-design
- AdminLTE — SaaS landing page patterns 2026: https://adminlte.io/?p=7077

Benchmark sites worth studying (live): Linear, Stripe, Vercel, Resend, Attio, Clerk, Raycast (SaaS); apple.com product pages (premium storytelling); Gumroad, Figma marketing pages (neo-brutalism); Lush, Headspace, Starface (vibrant color); Liquid Death, Spotify Wrapped (maximalism); Locomotive, Google Arts & Culture (experimental navigation).
