# Tokens: space, size and depth

> **Covers:** the spacing scale and its three named levels, rhythm between sections, density, containers and gutters, safe areas and fixed bars, target sizes, radii, elevation and layers.
> **Read when:** step 2, after `tokens.md`, whenever the project needs new or fixed spacing, radius, shadow or target tokens.
> **Not here:** breakpoints and device behaviour → references/responsive.md; measure of text → references/tokens-type.md; tiers and format → references/tokens.md
> **Owner:** modern-design
> **Sources:** impeccable (Apache-2.0), taste-skill (MIT), ui-ux-pro-max-skill (MIT), emilkowalski/skills (MIT), Modern Web Guidance (CC BY 4.0), WCAG 2.2, Apple HIG; full table in docs/research/tokens-sources.md

Rules follow the form in `tokens.md`: Rule, Why, When it flips, Source. MUST is only for accessibility.

## 1. The scale

**Rule (SHOULD):** define one spacing scale as base values (`--space-1`, `--space-2` …, in `rem`), and take every margin, padding and gap from it. Choose the base from the density (`tokens.md` §3): "a 4-unit base usually provides the useful middle steps that an 8-only scale misses" (impeccable), which suits dense interfaces; a coarser base suits spacious pages.

The one exception is optical alignment: nudging an icon, a round shape or a large letter by a pixel or two so it looks aligned. Write it in the component with a comment saying why.

**Why:** values picked one at a time (13 px, 27 px) are the clearest sign of a page nobody designed as a whole, and they make the hierarchy of distances unreadable.

**When it flips:** an existing project with its own scale keeps it (`tokens.md` §6).

**Source:** adapted from impeccable `layout.md` (Apache-2.0), taste-skill `system.css` (MIT), ui-ux-pro-max-skill `primitive-tokens.md` (MIT, by claudekit) and the author's research (`04_CROSS_CUTTING.md` §1).

## 2. Three named levels

**Rule (SHOULD):** components read three semantic levels, not scale steps:

| Level | Token | Between |
|---|---|---|
| Inside a component | `--space-inside` | Label and field, icon and text, heading and its paragraph |
| Between components | `--space-between` | Cards in a grid, fields in a form, blocks in a section |
| Between sections | `--space-section` | One section of the page and the next |

Each level is clearly larger than the one before: spacing inside a group is visibly smaller than spacing between groups. Put more space above a heading than below it, so the heading belongs to what follows. Group by proximity before adding borders or boxes. A level may have a small and a large variant (`--space-between-s`) when the content needs it.

**Why:** the eye reads distance as belonging. When inside and outside spacing are similar, nobody can tell what goes together, and the page reads as a flat list. "Create rhythm through deliberate contrast between tight and generous intervals" (impeccable).

**When it flips:** a dense data view can tighten `--space-inside` and `--space-between` together, but keeps the ratio between them.

**Source:** adapted from impeccable `layout.md` and `craft-floor.md` (Apache-2.0), ui-ux-pro-max-skill `semantic-tokens.md` (MIT, by claudekit) and `pro-rules.md` (MIT), taste-skill `system.md` (MIT) and the author's research (`04_CROSS_CUTTING.md` §1, Gestalt proximity).

## 3. Rhythm between sections

**Rule (SHOULD):** set `--space-section` from the page's dial (`tokens.md` §3).

- **Pages that persuade:** generous, with the most space around the most important sections (the first screen, the final call to action) and less around secondary ones.
- **Pages that operate:** tight and even.

Make it fluid with `clamp()` and a `rem` term, so it shrinks on phones without a breakpoint. Vary it only on purpose, to group sections into chapters.

**Why:** the space around a section tells the reader how much it matters before they read it. Equal space everywhere gives no hierarchy; random space gives a false one.

**When it flips:** keep one to three background bands down the page and change background only at section edges; a band change already separates sections, so the space around it can be smaller.

**Source:** adapted from the author's research (`04_CROSS_CUTTING.md` §1) and taste-skill `backgrounds.md` (MIT).

## 4. Density

**Rule (SHOULD):** declare the density of each region in the brief: compact, comfortable or spacious. "Does the amount of information per region fit use frequency, decision complexity, and visitor mode?" (impeccable). Implement it as a higher-order token: an attribute on the region (`data-density="compact"`) that reassigns the three levels, with low specificity (`:where([data-density="compact"])`) so components can still override it.

**Why:** an expert who uses a screen every day reads density as speed; a first-time visitor reads the same density as effort (`reasoning.md` §4, novice versus expert).

**When it flips:** density never shrinks targets. Compact mode reduces space between things, never the size of what is tapped or clicked (section 6).

For example, an allotment garden association can have a plot-management table used every week by volunteers, which is compact, and a public page for joining the waiting list, which is comfortable. Both regions draw from the same scale.

**Source:** adapted from impeccable `layout.md` (Apache-2.0), Modern Web Guidance "Design token reactivity" (CC BY 4.0, changes made) and ui-ux-pro-max-skill `SKILL.md` design dials (MIT, an idea it credits to taste-skill).

## 5. Containers, gutters and layout space

- **Rule (SHOULD):** define `--container` (the content's maximum width per page type) and `--gutter` (side space that grows with the viewport), and lay out with one formula: `width: min(100% - 2 * var(--gutter), var(--container)); margin-inline: auto;`. Values come from `responsive.md` (container about 1120 to 1280 px, phone gutters 16 to 24 px). Running text also has its measure (`tokens-type.md` §6).
- **Rule (SHOULD):** space siblings with `gap`, not margins on children, and let components that appear in places of different widths respond to their container (`responsive.md`).
- **Rule (SHOULD):** for card grids that reflow on their own, use `repeat(auto-fit, minmax(min(100%, <min>), 1fr))`.
- **Rule (SHOULD):** use logical properties (`margin-inline`, `padding-block`) where the value should flip in right-to-left text; keep physical ones where it shouldn't.
- **Rule (SHOULD):** set spacing that is coupled to text (padding inside a button, space under a heading) in `rem` or `em`, so it grows with the user's text size.

**Source:** adapted from taste-skill `system.css` (MIT), impeccable `layout.md` and `harden.md` (Apache-2.0), ui-ux-pro-max-skill `pro-rules.md` (MIT), emilkowalski/skills `apple-design` (MIT) and Modern Web Guidance "CSS layout" and "CSS" (CC BY 4.0, changes made).

### Safe areas and fixed bars

- **Rule (SHOULD):** give fixed bars a safe-area padding with a minimum: `padding-bottom: max(var(--space-inside), env(safe-area-inset-bottom, 0px))`, with `viewport-fit=cover` in the viewport meta (`responsive.md`).
- **Rule (MUST):** keep a token for the height of each sticky bar (`--header-height`) and set `scroll-padding-top` (or `-bottom`) on the scroll container to at least that height, so a focused element is never fully hidden behind it (WCAG 2.4.11, AA).

**Source:** WCAG 2.2; adapted from Modern Web Guidance "Form factor adaptation" (CC BY 4.0, changes made) and ui-ux-pro-max-skill `ux-guidelines.csv` (MIT).

## 6. Target sizes

The target tokens are defined in `tokens.md` §5: `--target-min` (24 px, MUST, WCAG 2.5.8) and `--target-touch` (44 px, SHOULD for primary actions under `(pointer: coarse)`, WCAG 2.5.5 AAA and Apple's default control size).

**Rule (MUST):** size controls with `min-block-size` and `min-inline-size`, or with padding, from those tokens, so the target grows with the text instead of clipping it. When a visible icon must stay small, extend its hit area with a pseudo-element, without overlapping a neighbour's area. A target smaller than 24 px passes only through an exception of 2.5.8, such as the spacing exception (a 24 px circle centred on it doesn't overlap another target or circle).

**Rule (SHOULD):** derive control heights from the targets (`--control-height`, `--control-height-touch`), and switch them with `@media (pointer: coarse)`, not with screen width (`responsive.md`).

**Why:** a missed tap feels like the page doesn't work, and fixing it later moves every layout around it.

**When it flips:** keep the platform numbers apart: 24 CSS px is the web's AA floor, 44 × 44 pt is Apple's default control size (its minimum is 28 × 28 pt). A native app follows its own platform's guidelines.

**Source:** WCAG 2.2; [Apple HIG, Accessibility](https://developer.apple.com/design/human-interface-guidelines/accessibility); adapted from Modern Web Guidance "Form factor adaptation" and "Accessibility" (CC BY 4.0, changes made), ui-ux-pro-max-skill `ux-guidelines.csv` and `app-interface.csv` (MIT) and taste-skill `system.css` (MIT).

## 7. Radii

**Rule (SHOULD):** keep a short radius scale with roles, chosen from the direction: `--radius-control` (buttons, fields), `--radius-surface` (cards, panels, dialogs) and, when the direction uses it, `--radius-round` for pills and avatars. Derive the steps from one root value, so the whole shape language changes in one place.

**Rule (SHOULD):** when one rounded box sits inside another, give the inner one the outer radius minus the gap between them, with a small floor, so the curves stay parallel.

**Why:** radius is part of the direction's voice. A radius picked per component makes the page look assembled from different kits.

**When it flips:** sharp corners, soft corners or none at all come from the brief and the brand, never from the sector.

**Source:** adapted from ui-ux-pro-max-skill `shadcn-theming.md` (MIT, by claudekit) and taste-skill `system.md` and `cards.md` (MIT).

## 8. Elevation

**Rule (SHOULD):** keep a short shadow scale named by purpose: `--shadow-raised` (cards that lift on interaction), `--shadow-overlay` (menus, popovers), `--shadow-modal` (dialogs). Then follow these points:

- Declare elevation once per element: a border or a shadow, not a faint border under a wide soft shadow.
- A shadow has an offset and a blur. A colored glow with no offset is decoration (CO3).
- Layer two or three shadows for a soft, believable depth.
- Larger surfaces read as thicker, so give them a deeper shadow than small chips.
- On dark themes, elevation comes from lighter surfaces (`tokens-color-dark.md`).
- In forced-colors mode, an element whose edge is only a shadow needs a real border (`tokens-color.md` §10).

**Why:** elevation tells people what sits above what (a menu over the page, a dialog over everything). When every card floats, nothing does.

**When it flips:** a flat direction uses no shadow at rest and separates surfaces with color or a line. Hard offset shadows with no blur belong only to a direction that chose them.

**Source:** adapted from impeccable `craft-floor.md` (Apache-2.0), ui-ux-pro-max-skill `quick-reference.md` (MIT), emilkowalski/skills `apple-design` and `learn-taste` (MIT), Modern Web Guidance "Visual effects" (CC BY 4.0, changes made) and taste-skill `cards.md` (MIT).

## 9. Layers

**Rule (SHOULD):** name stacking levels as tokens instead of writing large numbers: `--layer-sticky`, `--layer-dropdown`, `--layer-overlay`, `--layer-toast`. Native `<dialog>` and `popover` already sit in the top layer and need none (`implementation.md` §5).

**Source:** adapted from ui-ux-pro-max-skill `primitive-tokens.md` (MIT, by claudekit) and `ux-guidelines.csv` (MIT).

## Done when

- Every margin, padding and gap comes from the scale or a level token. Optical nudges are commented.
- `--space-inside` < `--space-between` < `--space-section`. A blurred screenshot shows blocks with rhythm, not an even grey wall.
- Every region has a declared density, and no density shrinks a target below its token.
- Sticky bars have a height token and matching `scroll-padding`.
- Radii and shadows come from their short scales, by role.
