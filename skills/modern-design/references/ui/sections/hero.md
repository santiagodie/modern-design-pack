# Hero

> **Covers:** The hero, the first screen of a page that persuades: job, when it applies, content, layout per device, states and interaction, accessibility, critical and common errors, level-up, generic-pattern watch and style notes.
> **Read when:** step 3 of `modern-design`, when building or restyling this section; `design-review` may read it to check it.
> **Not here:** which sections a page needs → references/ui/sections/index.md; token values → references/ui/tokens.md; the phone, tablet and desktop baseline → references/engineering/responsive.md
> **Owner:** modern-design
> **Sources:** the author's landing field guide (docs/research/landing-field-guide/, MIT), written in our own words; full list in docs/SOURCES.md

Reference for `modern-design`, step 3. `design-review` may also read it to check this component.

## Job

In a few seconds, answer three questions: what is this, is it for me, what do I do next. Then earn the scroll.

## When it applies

Pages that persuade, and many pages that create an experience. Pages that operate open on the work itself, with no hero. Pages people read open with a title block: title, short summary, author or date.

The brief may replace the classic hero with something more useful (a ferry line's timetable for today is a hero that is also information). Follow the brief.

## Content

| Element | Rule |
|---|---|
| Label above the headline (eyebrow) | **Use it only when it carries real information the headline doesn't**: the audience ("For translation agencies of 2–20 people"), the category, or a dated announcement that links to it. Delete it when it repeats the headline or only decorates (checklist TY4, CP1). |
| Headline (h1) | The outcome the visitor gets, in their words, about 4–12 words. Specific beats clever. |
| Subheadline | How it works and who it's for, one or two sentences. |
| Primary CTA | One verb-plus-outcome button (see `cta.md`). |
| Secondary action | Only when there is a real second intent (watch a demo, see prices), visibly weaker. |
| Reassurance | One short line under the CTA that answers the main worry (cost, commitment, time). |
| Visual | The product, the result, or the people who get it. Never generic stock or abstract shapes. |
| Proof | A rating, logos or a real count inside the hero or right below it, when real proof exists. |

**Template test:** cover the logo and read the headline. When a competitor could use it unchanged, rewrite it.

## Layout per device

| | Phone | Tablet | Desktop |
|---|---|---|---|
| Order | The headline, then the content that does the brief's main job, then the rest (see below) | Portrait: stacked like phone, or split only if each column keeps at least about 20rem (narrower, the headline breaks into too many lines). Landscape: split | Split (copy left, visual right), centered with visual below, or full-bleed media with text over it |
| Headline size | `--text-display`, fluid with `clamp()` | `--text-display` | `--text-display` |
| Height | Content-driven; if full-screen, `min-height: 100svh`, never `100vh` | Content-driven; check portrait doesn't leave a tall empty band | About 80–90% of the first screen, so the next section peeks |
| CTA | Full width inside the side padding, in thumb reach | Natural width, at least `--target-touch` tall | Natural width |
| Top padding | `--space-section` | `--space-section` | `--space-section` |

**Phone order.** On phones, put first what serves the main job in the brief, right after the headline. When the brief names a hero element that carries the information visitors come for (a timetable, a price, an availability slot, the product itself), place it straight under the headline, before the subheadline and buttons. When the brief gives a mobile order, follow it. Otherwise use headline, subheadline, CTA, reassurance, then the visual. Keep the header CTA visible, so the action stays on the first screen when the buttons move down. Reorder with CSS (`order`, `display: contents`) only when the reading and focus order still make sense. Otherwise change the HTML order.

**Stacked tablet hero.** When the tablet portrait hero stacks, widen the text to the container (a headline measure around 16–22 characters per line at tablet size, a subheadline up to about 60–70), or let the hero element sit beside the subheadline. A phone column in the middle of a 768 px screen, with empty space beside it, reads as a stretched phone.

Use `text-wrap: balance` on the headline and check its wrap at every width: a two-line desktop headline can become six lines on a phone. Line height around 1.05–1.15 at large sizes; subheadline `--text-lead` with a measure of 50–60 characters.

## States and interaction

- One entrance at most, honouring `prefers-reduced-motion`; content must be visible without JavaScript.
- Hero video: muted, `playsinline`, short loop, a static `poster`, and a pause control (required when motion lasts more than 5 s).
- Hover effects on the visual only behind the hover-capability query.

## Accessibility

- One `h1` on the page, in the hero.
- Text over images keeps contrast at the image's worst point: add an overlay or a solid panel.
- Informative images have `alt` text; decorative ones `alt=""`.

## Critical errors

- A carousel or rotating messages in the hero.
- A headline about the company instead of the visitor's outcome.
- A hero image or video that pushes LCP past 2.5 s on mobile, or a hero image with `loading="lazy"`.
- Text over a busy image without an overlay.

## Common errors

- Two or three equal-weight buttons.
- Abstract blobs, orbs or 3D shapes that say nothing about the product.
- "Learn more" or "Discover" as the main action.
- No reassurance, so the cost of clicking is unknown.

## Level-up

- Show the real product, cropped to the part that proves the headline, rather than a whole dashboard shrunk to illegibility.
- Prefer the smallest true claim you can prove over a big claim visitors discount.
- Preload the hero image with `fetchpriority="high"` and set its dimensions.
- Run a five-second test with a few people from the audience before polishing visuals.

## Generic-pattern watch

LA5 (template hero), TY2 (italic accent word), TY4 (eyebrows), TY6 and TY9 (headline wrap and size), CO1 and CO2 (purple gradients, gradient text), CP1 (filler badges), CP4 (decoration instead of product), CY1 (headline that fits any product), MO1 (fade-in everywhere), MN4 (`100vh` heroes).

## Style notes

Minimal or premium: centered, few words, product as the hero. Editorial: type-led, asymmetric. Dark product sites: two-line value statement with the real UI below. Expressive: layered imagery, but the three questions still get answered.
