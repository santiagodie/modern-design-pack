# Phase 3b, batch A results: sections and responsive

Date: 2026-11-24. Tested: `modern-design/references/sections/` (index plus header, hero, CTA, social proof, benefits, forms, final CTA, footer) and `references/responsive.md`, then `design-review` with the four-width browser check (375, 768, 1024, 1440 px). Tools: `@playwright/cli` 0.1.25 and `lighthouse` 13.6.0.

| Test | Brief | Review notes |
|---|---|---|
| Bakery landing, rebuilt from the phase 3a brief | [design-brief.md](phase-3/bakery/design-brief.md) (unchanged) | [review-notes.md](phase-3b/bakery/review-notes.md) · site after review: [site/](phase-3b/site/) |

The vet dashboard was not rebuilt: batch A covers pages that persuade, and its open issues belong to batch D.

## How it was run, and how that differs from phase 3a

Phases 2 and 3a used non-interactive `claude -p --plugin-dir` sessions. This time that route was blocked in the test environment: a nested session with permission checks bypassed was refused. Instead, two fresh subagents without this conversation's context ran the skills:

1. **Build:** told to follow `modern-design/SKILL.md` exactly with the request "Create a landing page for a bakery in this folder, in static HTML and CSS", in a folder holding only the phase 3a `design-brief.md`. It stopped at the hand-off.
2. **Review:** told to follow `design-review/SKILL.md` in own-project mode at the four widths, with Lighthouse once, fixing what the skill says to fix.

Three differences matter when comparing:

- The brief already existed, so step 1 was skipped.
- Both prompts asked the agent to stop any server it started, so "servers left running" (a phase 3a problem) was not tested independently.
- The subagents had no context, but their prompts were written by a session that knew the phase 3a results. The prompts didn't mention those failures, but the choice of what to ask for (stopping servers, Lighthouse once, the four widths, the report fields) may have been shaped by them. A clean `claude -p` run with the bare user request is still the stronger test.

## What the build loaded and used

`SKILL.md` → `sections/index.md` → `header.md`, `hero.md`, `cta.md`, `social-proof.md`, `benefits.md`, `forms.md`, `footer.md`, `responsive.md`, plus the start of `final-cta.md` (to decide it wasn't needed). Loading followed the one-file-per-section rule.

Where a reference changed the result:

- **CTA wording:** "Encargar para mañana" (verb plus outcome) everywhere, instead of "Encargar".
- **Phone header:** name plus a small visible CTA and the four links in a row, no hamburger. Sticky only from 700 × 560 px, with `scroll-padding-top`.
- **Touch baseline from `responsive.md`:** hover gated by `(hover: hover) and (pointer: fine)` with `:active` pairs, `viewport-fit=cover` and safe-area padding, `touch-action: manipulation`, `svh` instead of `vh`, two `theme-color` metas.
- **Social proof left out**, as `social-proof.md` says when no real proof exists. No invented reviews or figures.
- **Menu as a plain list** (`benefits.md`), not cards.
- **Footer:** placeholder legal links and no invented tax ID.

## What design-review found

No critical design issues and no generic patterns; nothing sent back to `modern-design`. Eight fixes, all in CSS:

| ID | Finding | First width | Status |
|---|---|---|---|
| M1 | Footer focus ring at 2.00:1 on the dark footer | all | Fixed |
| M2 | Nav links under 44 px wide on touch ("Hoy" 26 px) | 375 (also 768, 1024) | Fixed |
| M3 | Order-step headings at different heights (stretched grid rows) | 700 (also 1024, 1440) | Fixed |
| M4 | On phones the baking-times board sat below the CTAs, off the first screen, against the brief | 375 to 899 | Fixed with `display: contents` + `order`; DOM and focus order unchanged |
| T1–T4 | Footer phone link 59 × 15 px, map link 43.99 px tall, hours dot misaligned, negative tracking on 20 px headings | 375 / all | Fixed |

Not fixed, with reasons: no `og:image` (no brand images yet), hard-coded copyright year (no JavaScript allowed), render-blocking Google Fonts without SRI (the brief allows that request), 7 px decorative stamp text (`aria-hidden`).

Measured: no horizontal overflow at 375, 712 (phone landscape), 768, 1024 or 1440; small tap targets went from 5/5/5/3/1 to 0 at every width; MN checks clean at 375; Lighthouse (mobile, before fixes) 100/100/100/100, LCP 1.4 s, CLS 0.007.

## Against the phase 3a failures

| Phase 3a issue (owner: components) | Batch A result |
|---|---|
| Missing photo shown as a panel of diagonal stripes (CP4) | **Fixed.** A plain dashed frame with "Foto pendiente" and a caption saying what to photograph. Still a tall empty box at 1440 px until the photo exists. |
| Per-item action buttons repeated 12 times (vet) | Not tested: batch D |
| Board needing sideways scroll at 768 px (vet) | Not tested: batch D |
| Read-only TV layout (vet) | Not tested: batch D |
| Servers left running after the build | Not tested independently (the prompt asked to stop them); none were left running |

Still open from phase 3a and owned by `tokens.md`: vertical spacing between sections is large and uneven (visible at 1440 around the bakehouse and the order band).

## Gaps found in the references

Owners in brackets. All twelve were addressed in the commit after this test ("fix: batch A reference gaps"), as "do X when Y" rules. Gap 5 went to the ROADMAP as part of batch B without being written. The focus and touch-target fixes from the review (M1, M2, T1, T2) were not repeated in each section file: they are recorded in the ROADMAP as requirements for `tokens.md`.

1. **Static sites with no JavaScript** [`header.md`, `cta.md`, `footer.md`]. Menu focus trap and Esc, hide-on-scroll, the sticky phone CTA appearing and hiding, and the dynamic copyright year all assume JavaScript. None of the files says what to do without it. Add a "no JavaScript" line to each.
2. **Mobile order of the hero** [`hero.md`]. The build put the bold element (the board) below the copy and both CTAs on phones, although the brief asked for it right under the headline. The review caught it. `hero.md` should say that the brief's mobile order wins and that the distinctive element should appear on the first phone screen when it carries the information.
3. **Duplicate CTAs on the first screen** [`cta.md`, `header.md`]. Without a sticky header, the header CTA and the hero CTA share the phone's first screen; "consider hiding one" needs JavaScript. Say when the duplicate is acceptable.
4. **One action, two channels** [`sections/index.md`, `forms.md`]. "One primary action, named the same everywhere" doesn't cover a mechanism with two channels ("Encargar por WhatsApp" / "Llamar al [teléfono]"). State that the action keeps its name and the channel is a qualifier.
5. **No section for location and hours** [batch B]. Local businesses need a "where and when" section; the build used `footer.md` and `responsive.md`. Add it to batch B (important sections) for local business pages.
6. **Cookie settings link when no cookies are set** [`footer.md`]. Make it conditional on the site actually setting non-essential cookies.
7. **Tablet hero at 768 px** [`hero.md`] (judgment, from the screenshots). The stacked hero keeps the headline in a narrow column with empty space to its right. Allowed by `hero.md`, but it reads as a stretched phone; give a tablet line for stacked heroes (wider measure or a split from 768).

In `design-review`:

8. **Placeholders the brief requires** [`unslop-checklist.md`, CY3]. CY3 rates visible placeholders critical; the reviewer decided the brief wins and listed them under "before publishing". Write that rule down.
9. **Own-project notes format** [`SKILL.md`]. Own-project mode doesn't say what the notes contain or where they go; the reviewer borrowed the severity sections from `audit-report.md`.
10. **Non-interactive runs and "show the list first"** [`SKILL.md`, step 4]. With no one to ask, the reviewer used "the brief already points that way" as permission for M4. Say this explicitly.
11. **Lighthouse width in own-project mode** [`visual-qa.md`]. Not specified; Lighthouse emulates 412 px, not 375.
12. **Phone landscape width** [`visual-qa.md`]. The "iPhone 13 Mini landscape" preset is 712 px wide, not 812; the table and file naming should say so.

## Screenshots (after review)

| | |
|---|---|
| Phone, first screen (375 px) | [bakery-375-hero.jpg](phase-3b/screenshots/bakery-375-hero.jpg) |
| Tablet portrait, first screen (768 px) | [bakery-768-fold.jpg](phase-3b/screenshots/bakery-768-fold.jpg) |
| Tablet landscape, first screen (1024 px) | [bakery-1024-fold.jpg](phase-3b/screenshots/bakery-1024-fold.jpg) |
| Desktop, full page (1440 px, scaled to 1000) | [bakery-1440.jpg](phase-3b/screenshots/bakery-1440.jpg) |

Compare with [phase 3a at 1440](phase-3/screenshots/bakery-1440.jpg). The review notes refer to the reviewer's working screenshots in `qa-tmp/`, which were not kept.

**Next:** re-run the bakery with a clean `claude -p` session when it is allowed, to check the new rules (phone hero order, no-JavaScript header, CY3 placeholders), then batch B with the "where and when" section.
