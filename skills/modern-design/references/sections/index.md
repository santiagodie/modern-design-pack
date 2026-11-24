# Sections

Reference for `modern-design`, step 3. Load this file first, then only the file of each section you are about to build, plus `../responsive.md`. These files cover whole page sections; reusable pieces (buttons, cards, inputs on their own) will live in a separate `components/` folder in a later batch.

> **Scope.** This catalogue covers pages that **persuade**: landing pages, product homepages, local business sites, campaign pages. Sections for pages that **operate** (dashboards, internal tools, admin screens) will come in a later batch. Until then, build those from the brief's Structure, `../responsive.md` and your own judgment, and borrow only the parts of these files that clearly apply (buttons, forms, header).

## How to use it

1. Read the brief's Structure (from `../direction.md`). It decides which sections exist and in what order.
2. For each section, find its file below and load that file only.
3. Load `../responsive.md` once, and build every section for phone, tablet and desktop.
4. Before handing off, run each section's "Generic-pattern watch" against `design-review`'s checklist IDs.

## Which sections each page job needs

| Section | File | Persuade | Operate | Read | Experience |
|---|---|---|---|---|---|
| Header / navigation | `header.md` | Always | Yes (app bar; see note) | Yes | Usually, often minimal |
| Hero | `hero.md` | Always | No: open on the work itself | A title block, not a hero | Often the main piece |
| Primary CTA (button system) | `cta.md` | Always | Buttons only | Rarely | When there is an action |
| Quick social proof | `social-proof.md` | When real proof exists | No | No | Rarely |
| Benefits and features | `benefits.md` | Always (the argument) | No | No | Sometimes, as story |
| Conversion mechanism (forms) | `forms.md` | Always (no mechanism, no landing page) | Often (data entry) | Newsletter at most | Sometimes |
| Final CTA | `final-cta.md` | On long pages | No | Optional (next read) | Optional |
| Footer | `footer.md` | Always (legal minimum) | Minimal or none | Yes | Yes |

For "operate" pages, `header.md`, `cta.md` and `forms.md` apply to the app bar, buttons and inputs; the rest don't.

## Priority matrix (persuade pages)

| Priority | Sections |
|---|---|
| Mandatory (files written) | Header, hero, primary CTA, quick social proof, benefits and features, conversion mechanism, final CTA, footer |
| Important (no file yet) | Problem or pain, how it works, visual demonstration, testimonials and case studies, pricing, trust elements (guarantees, security), FAQ |
| Complement (no file yet) | Comparison, live chat, interactive demo or calculator, announcement bar, founder or team story, exit-intent offers |

Quick social proof is mandatory only when real proof exists. Without it, see `social-proof.md` for what to do instead.

Cross-cutting needs for every persuade page: mobile-first responsive (`../responsive.md`), performance within Core Web Vitals (LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1), accessibility at WCAG 2.2 AA, SEO basics, analytics with lawful cookie consent, and a consistent visual system.

## Possible content, not a page structure

The research behind this catalogue lists a long-form order (announcement, header, hero, proof, problem, benefits, demo, how it works, testimonials, comparison, pricing, trust, FAQ, final CTA, footer). Use it as an **inventory of content a page might need**, never as the page's structure. The structure comes from `../direction.md`: what this product needs to say, in the order its audience needs it. Two useful signals from the research, as direction only:

- The less the visitor knows and the more the offer costs, the more the page has to explain and prove, so the longer it gets.
- Visitors arriving ready to act (brand searches, returning customers) need less: a short page with proof and the action.

## Statistics

The research quotes conversion figures from single tests on single sites. In these files, use the **direction** of an effect ("fewer fields usually raise completion; field type matters more than count"), never the size. Exceptions are published standards with fixed thresholds: WCAG (contrast ratios, target sizes) and Core Web Vitals.

## Shared rules

- One primary action per page, named the same everywhere it appears.
- Put proof next to the doubt it answers: near the hero, near the action.
- Gate hover effects by capability (`(hover: hover) and (pointer: fine)`) and give touch users `:active` feedback.
- Every section has a phone, tablet and desktop layout. Tablet is not "stretched phone" or "squeezed desktop".
- Real content or marked placeholders only. Never invent facts, logos, figures or reviews.

## Sources

Written in our own words from the author's research in `docs/research/landing-field-guide/` (`00_README.md`, `01_MANDATORY.md`, `04_CROSS_CUTTING.md`), which is part of this repository and released under its licence.
