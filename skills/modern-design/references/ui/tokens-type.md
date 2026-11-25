# Tokens: type

> **Covers:** choosing faces by function, what to check before choosing one, loading and fallbacks, the type scale, fluid sizes, line height, measure, tracking, numerals and wrapping.
> **Read when:** step 2, after `tokens.md`, whenever the project needs new or fixed type tokens.
> **Not here:** color of text and contrast → references/ui/tokens-color.md; spacing between text blocks → references/ui/tokens-space.md; tiers and format → references/ui/tokens.md
> **Owner:** modern-design
> **Sources:** impeccable (Apache-2.0), taste-skill (MIT), ui-ux-pro-max-skill (MIT), emilkowalski/skills (MIT), Modern Web Guidance (CC BY 4.0), WCAG 2.2, MDN; full table in docs/research/tokens-sources.md

Rules follow the form in `tokens.md`: Rule, Why, When it flips, Source. MUST is only for accessibility.

## 1. Choose by function

**Rule (SHOULD):** give each face a job before choosing it. There are up to three: **reading** (running text), **interface** (labels, buttons, data), **display** (headlines). "Use the fewest roles and families that make the hierarchy unmistakable" (impeccable). One family in several weights, or two families that clearly differ, covers most projects; a third rarely earns its place.

**Why:** every face is a file to load and a voice to keep consistent. Two faces that are almost alike look like a mistake, not a choice.

**When it flips:**

- **Task surfaces** (dashboards, settings, tools): one well-tuned family often does everything. The system font stack is a sound choice there when the brief names no brand face. Display faces stay out of labels, buttons and data.
- **Brand pages:** using a system face as the display voice reads as "no choice was made"; choose a display face from the brief.
- **Monospace:** use it for code, data, IDs and measurements, not as a costume for "technical" (TY3).

For example, on a regional orchestra's season site the reading role carries long programme notes, and the display role carries concert titles. The two roles can come from different families, while the interface role reuses the reading face.

**Source:** adapted from impeccable `typeset.md`, `operate.md` and `craft-floor.md` (Apache-2.0), emilkowalski/skills `apple-design` (MIT) and the author's research (`04_CROSS_CUTTING.md` §2).

### Against the face of the season

**Rule (SHOULD):** choose a face for a reason the brief states: the brand already uses it, the reading role needs its qualities, or a cited reference shows why it fits. A subject association is never that reason ("books, so a serif"; "software, so mono"). A face that generated pages currently share needs a reason no other face could satisfy. Check the result against TY11 in `design-review`; this file keeps no list of faces, because such lists date fast and become the next default.

**Why:** a face picked by association is the first one everyone else picks too, and a page that looks generated is ruled out before it is read (attention is triage).

**When it flips:** when the brand's face is one of the common ones, use it (TY1 and TY11 "Fine when"), and make it specific through scale, weight and spacing.

**Source:** adapted from impeccable `new-work.md` (Apache-2.0).

## 2. Before choosing a face

Check these before writing a face into the brief:

1. **Licence.** It allows web embedding and hosting the files on the user's domain. Read the licence that comes with the files, not a catalogue's label.
2. **Hosting.** Serve the files from the site's own domain (OM13 in `design-review`, `implementation.md` §6). A link to a font service is a choice the user makes, with its privacy implications.
3. **Languages.** The subsets cover every script and character the project uses, including accented capitals and the currency signs on the page.
4. **Files.** A variable font, or only the weights and styles you will use. Budget about four files at most, with the performance reason in mind.
5. **Loading.** `font-display: swap` (or `optional` when a late face shouldn't replace text already read), and preload only the one or two files the first screen needs.

**Why:** a face that can't legally be self-hosted, or lacks a character the business needs, is found out after launch, when changing it is expensive.

**Source:** adapted from ui-ux-pro-max-skill `google-fonts.csv`, `google-font-licenses.json` and `ux-guidelines.csv` (MIT), impeccable `optimize.md` (Apache-2.0) and the author's research (`04_CROSS_CUTTING.md` §2).

## 3. Fallback fonts with matched metrics

**Rule (SHOULD):** declare a fallback `@font-face` over a local font, with `size-adjust` set so that its letters take the same space as the web font's. `size-adjust` is Baseline widely available (MDN). The text then barely moves when the web font arrives.

**Rule (SHOULD, progressive enhancement):** add `ascent-override`, `descent-override` and `line-gap-override` to match the vertical metrics as well. They are not Baseline: Chrome, Edge and Firefox support them, Safari doesn't. Where they are unsupported, the fallback keeps its own line metrics, so lines can shift slightly in height when the web font loads. The layout still works.

**Why:** text that jumps when the font arrives is layout shift (CLS), and a reader who loses their line pays for it.

**Source:** MDN and webstatus.dev; adapted from Modern Web Guidance "Visually stable font fallbacks" (CC BY 4.0, changes made), impeccable `typeset.md` (Apache-2.0) and the author's research (`04_CROSS_CUTTING.md` §2).

## 4. The scale

**Rule (SHOULD):** derive all sizes from one ratio chosen for the page's density (`tokens.md` §3):

| Density | Ratio, as a starting range |
|---|---|
| Dense product UI | about 1.125 to 1.2 |
| Marketing and general content | about 1.25 to 1.333 |
| Editorial or dramatic display | 1.5 and up, for the largest steps |

Name the steps by role, and make them the only sizes on the page: `--text-label`, `--text-small`, `--text-body`, `--text-lead`, `--text-title`, `--text-headline`, `--text-display`. Use as few steps as the content needs.

- Each heading level is visibly larger than the next, and a heading is never smaller than the text under it.
- Build hierarchy from size, weight and line height together, not from size alone.

**Why:** a scale with a reason gives the page a rhythm; sizes chosen one at a time drift (a 15 px here, a 17 px there), and the hierarchy stops being readable at a glance.

**When it flips:** a page that mixes regions (marketing above, a dense table below) keeps one ratio for the base sizes and adds a larger display step only where the brief needs it.

**Source:** adapted from impeccable `operate.md` (Apache-2.0), taste-skill `system.css` and `layout-v4.md` (MIT), ui-ux-pro-max-skill `ux-guidelines.csv` (MIT), emilkowalski/skills `apple-design` (MIT) and the author's research (`04_CROSS_CUTTING.md` §2).

## 5. Units and fluid sizes

**Rule (MUST):** text can be resized to 200 % without losing content or function (WCAG 1.4.4, AA). In practice:

- Sizes in `rem` (or `em` for sizes relative to the parent); line height without units (`1.5`).
- Leave the root font size alone: no `html { font-size: 62.5% }`. The user's browser setting then reaches every `rem`.
- Fluid sizes use `clamp()` with a `rem` term in the middle: `clamp(2rem, 1.5rem + 2.5vw, 3.5rem)`. Never `vw` alone, which doesn't grow when the user zooms. Check at 200 % zoom that the largest heading still grows.
- Text containers have no fixed height, so the text can grow and wrap.

**Rule (SHOULD):** use fluid sizes for display type on pages that persuade, as a straight line between a phone size and a desktop size. Keep a fixed scale for body text and for dense product and reading surfaces, where predictability matters more.

**Rule (SHOULD):** keep body text at 1rem (16 px) or more, unless a dense role, a platform convention or the user's setting justifies less. Inputs stay at 16 px on touch screens (`responsive.md`).

**When it flips:** a data table can use a smaller step than body text, with enough line height and contrast, because people scan it rather than read it.

**Source:** WCAG 2.2; adapted from Modern Web Guidance "Typography" and "Respect OS text scale" (CC BY 4.0, changes made), impeccable `typeset.md` (Apache-2.0) and taste-skill `system.css` (MIT).

## 6. Line height and measure

- **Rule (SHOULD):** line height runs inverse to size: tight on large headings, more open on body text. "Tune line height to the face, width, language, and contrast, not a universal ratio" (impeccable). As starting ranges: about 1.05 to 1.15 for display, 1.2 to 1.3 for small headings, 1.5 to 1.65 for body. Wider lines need more line height.
- **Rule (SHOULD):** light text on a dark surface gets a little more line height and tracking, and sometimes one step more weight, because it reads thinner.
- **Rule (SHOULD):** set the measure of running text as a token, `--measure`, between 45 and 75 characters (about 66 is the classic optimum): `max-inline-size: var(--measure)` with `ch` units.
- **Rule (SHOULD):** separate paragraphs with space or with a first-line indent, not both.

**Why:** long lines make the eye lose its way back to the next line; short ones break the reading rhythm. Line height is what lets the eye find the next line.

**When it flips:** scripts with tall marks (Vietnamese, Thai) need more line height; dense data UI needs less. Tables and code may exceed 75 characters.

**Source:** adapted from impeccable `typeset.md` (Apache-2.0), emilkowalski/skills `apple-design` (MIT) and the author's research (`04_CROSS_CUTTING.md` §2, Bringhurst's measure).

## 7. Tracking

**Rule (SHOULD):** tracking depends on size. Tighten large display text slightly, keep body and interface text at zero (TY5), and loosen small uppercase labels. Set the values per face, as tokens (`--tracking-display`, `--tracking-label`); a value that suits one face is wrong for another.

**Source:** adapted from emilkowalski/skills `apple-design` (MIT), the author's research (`04_CROSS_CUTTING.md` §2) and ui-ux-pro-max-skill `typography-specifications.md` (MIT, by claudekit).

## 8. Numbers

- **Rule (SHOULD):** use tabular figures (`font-variant-numeric: tabular-nums`) for prices in tables, timers, counters, scores and any column of numbers, so digits don't shift. "Use tabular/monospaced figures for data columns, prices, and timers to prevent layout shift" (ui-ux-pro-max-skill). Keep proportional figures in running text (TY10).
- **Rule (SHOULD):** keep a number with its unit on one line (a non-breaking space between them).

For example, the orchestra's ticket table lines up its prices with tabular figures, while the programme notes keep proportional ones.

**Source:** adapted from ui-ux-pro-max-skill `quick-reference.md` (MIT) and taste-skill `system.css` and `system.md` (MIT).

## 9. Wrapping

- **Rule (SHOULD):** set `text-wrap: balance` on headings and other short blocks (Baseline widely available since November 2026), not on long ones.
- **Rule (SHOULD, progressive enhancement):** set `text-wrap: pretty` on paragraphs. It is not Baseline: Chrome, Edge and Safari support it, Firefox doesn't. Where it is unsupported, paragraphs wrap normally and can end on a single word. Nothing breaks.
- **Rule (SHOULD):** apply both to the elements that need them, never to every element.
- **Rule (SHOULD):** set `hyphens: auto` only with the right `lang` on the page, and justify text only when hyphenation is on.
- **Rule (SHOULD):** let long URLs and IDs break with `overflow-wrap: anywhere`; never use `word-break: break-all` on prose.

**Source:** webstatus.dev; adapted from Modern Web Guidance "Typography" (CC BY 4.0, changes made), impeccable `typeset.md` (Apache-2.0), taste-skill `system.css` (MIT) and ui-ux-pro-max-skill `ux-guidelines.csv` (MIT).

## 10. Reading text and display text

- **Rule (SHOULD):** keep ornate, script and all-caps setting out of reading text. Allow them in display when the brief supports it.
- **Rule (SHOULD):** at large sizes, use a face's display cut or optical size axis when it has one; a text cut scaled up looks heavy and loose.

**Source:** adapted from Modern Web Guidance "Typography" (CC BY 4.0, changes made) and the author's research (`04_CROSS_CUTTING.md` §2).

## Done when

- Every face has a role and a reason in the brief.
- Each face's licence and language coverage were checked, and its files are self-hosted.
- The fallback has `size-adjust`.
- Every size in the components is a scale token, in `rem`.
- The page passes 200 % zoom with no lost text.
- Running text has a measure token, and numbers that change or align use tabular figures.
