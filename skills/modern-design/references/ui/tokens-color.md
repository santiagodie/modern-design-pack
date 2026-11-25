# Tokens: color

> **Covers:** color roles, the strategy and the scales, a brand color that fails contrast, neutrals, contrast, states, the focus color and the browser surfaces.
> **Read when:** step 2, after `tokens.md`, whenever the project needs new or fixed color tokens.
> **Not here:** dark theme and color schemes → references/ui/tokens-color-dark.md; tiers, names and format → references/ui/tokens.md
> **Owner:** modern-design
> **Sources:** impeccable (Apache-2.0), taste-skill (MIT), ui-ux-pro-max-skill (MIT), emilkowalski/skills (MIT), Modern Web Guidance (CC BY 4.0), WCAG 2.2; full table in docs/research/tokens-sources.md

Rules follow the form in `tokens.md`: Rule, Why, When it flips, Source. MUST is only for accessibility and truth.

## 1. Roles

**Rule (SHOULD):** build color as roles, not as a set of swatches. Every fill role has its own foreground role:

| Group | Roles |
|---|---|
| Surface | `--color-surface` (page), `--color-surface-raised` (cards, menus), `--color-surface-sunken` (wells, inputs), `--color-surface-inverse` |
| Text | `--color-text`, `--color-text-muted`, `--color-text-on-action`, `--color-text-on-inverse` |
| Border | `--color-border` (dividers), `--color-border-strong` (inputs, controls) |
| Action | `--color-action`, `--color-action-hover`, `--color-action-pressed` |
| Status | `--color-success`, `--color-warning`, `--color-error`, `--color-info`, each with `-surface` and `-text` |
| Focus and selection | `--color-focus`, `--color-selection` |
| Placeholder | `--color-placeholder` (the mark from `content-truth.md`) |

Add `--color-accent` only when the direction spends a color on something other than the action (a highlight, a chart series). Add data colors only for charts.

**Why:** a component that asks for "the action color" stays right when the palette changes; one that asks for "blue" doesn't.

**When it flips:** a product UI with side panels adds a second neutral surface (`--color-surface-panel`), slightly apart from the content surface. Its direction (warmer or cooler) comes from the brief.

**Source:** adapted from impeccable `colorize.md` and `operate.md` (Apache-2.0) and ui-ux-pro-max-skill `colors.csv` and `semantic-tokens.md` (MIT; the latter by claudekit). Their values are not used.

## 2. Action is never status

**Rule (SHOULD):** use the action color only for what can be clicked or tapped, and the status colors only for state (success, warning, error, information). They are different hues, not shades of one.

**Why:** people read color before words. When the button is the same green as "Saved", or an error red looks like a link, the user hesitates at the moment of deciding (`reasoning.md` §2, "Deciding is weighing"), and the page loses the one signal that says "act here".

**When it flips:** when the brand's only color is the hue the status should have (a green brand), keep it for action and move success to another hue. Every status already carries an icon or text (section 7), so the move costs nothing. For example, on a climbing wall's site where colored holds mark route grades, the grade colors are information: the action color stays out of that set.

**Source:** our own, from test results; the reserved accent comes from the author's research (`04_CROSS_CUTTING.md` §3) and impeccable `operate.md` (Apache-2.0), rewritten.

### One accent, spent on the action

**Rule (SHOULD):** keep one accent and spend it on the primary action and a few key highlights, not on decoration.

**Why:** the accent works by being rare. When it also fills icons, headings and shapes, the primary action stops standing out (attention is triage).

**When it flips:** a deliberately monochrome direction gets hierarchy from size and weight (CO4 "Fine when"). A brand with two real colors may use both, each with a role.

**Source:** adapted from the author's research (`04_CROSS_CUTTING.md` §3) and taste-skill `system.md` (MIT).

## 3. Strategy

Before choosing values, name the strategy in the brief:

- **Restrained:** neutrals plus one accent.
- **Committed:** one color carries a large share of the surface.
- **Full palette:** three or four named roles beyond the neutrals.
- **Drenched:** a surface flooded with one color.

A 60-30-10 split (dominant neutral, secondary, accent) is one place to start, not a rule. Choose hue from the product's meaning and the brief, not from a category association. Color psychology ("blue means trust") is weak and depends on culture; contrast, consistency and fit with the brand matter more.

**Source:** adapted from impeccable `new-work.md` and `colorize.md` (Apache-2.0) and the author's research (`04_CROSS_CUTTING.md` §3).

## 4. Scales in OKLCH

- **Rule (SHOULD):** for a new web palette, define ramps in `oklch()`. Keep the project's existing color space when it has one. "For a new web palette, prefer OKLCH" (impeccable). `oklch()` is Baseline widely available since November 2025.
- **Rule (SHOULD):** step lightness evenly and lower chroma near white and black; high chroma at the ends looks harsh or falls outside the screen's gamut. Eight or so steps is one option, not a target.
- **Rule (SHOULD):** derive lines and state colors from existing tokens with `color-mix()` instead of adding grey values: `--color-border: color-mix(in oklab, var(--color-text) 12%, transparent)`. Mix in `oklab` by default and keep the shifts modest. `color-mix()` is Baseline widely available since November 2025.
- **Rule (SHOULD):** prefer a predefined tint token over generating one in each component.
- **Rule (SHOULD):** use explicit, opaque colors instead of chains of translucent layers when the alpha would make contrast depend on what is behind.

**Why:** OKLCH lightness matches what the eye sees, so a ramp's steps look even, and the contrast of a step can be predicted from its lightness.

**When it flips:** a project with an existing palette in hex or HSL keeps it; convert only when building ramps.

**Source:** adapted from impeccable `colorize.md` (Apache-2.0), taste-skill `system.css` (MIT) and Modern Web Guidance "Color" (CC BY 4.0, changes made); support from webstatus.dev.

## 5. A brand color that fails a role

**Rule (SHOULD):** when the brand color can't carry a role (white text on it fails 4.5:1, or it fails 3:1 against the page), keep it as a base value and derive an adjusted shade for that role. Darken it or lighten it in steps until the label on it passes 4.5:1 and it passes 3:1 against every ground it sits on. Record the change in the brief: "action: brand orange, darkened two steps for 4.5:1 with white".

**Why:** the brand stays recognisable, and the page stays readable. Dropping the brand color loses the thread of the promise; using it as it is loses the users who can't read it.

**When it flips:** when the brand color is too pale to work as an action color at any useful shade, use the ink color for actions and keep the brand color for surfaces and highlights.

**Source:** adapted from taste-skill `system.md` and `system.css` (MIT) and ui-ux-pro-max-skill `colors.csv` notes (MIT).

## 6. Neutrals and grounds

- **Rule (SHOULD):** neutral grey is a valid choice. "Tint neutrals only when the brand hue genuinely creates cohesion. Neutral gray is valid when it serves the world" (impeccable).
- **Rule (SHOULD):** take the page background from the brand and the use scene (white paper, the color of the place, a dark room), never one fixed off-white for every site. `tokens.md` §4 says when a tinted white needs a reason.
- **Rule (SHOULD):** prefer a near-black ink and an off-white over pure `#000` and `#fff` on large areas, unless the brand uses them. The tint direction comes from the brief.
- **Rule (SHOULD):** on a colored surface, derive secondary text from that surface's hue instead of a generic grey, and check its contrast.
- **Rule (SHOULD):** an alternate section background stays in the same hue family as the main one, one small lightness step away.

**Why:** a default tint is how pages start to look alike (CO8). A tint chosen from the material makes the page specific.

**Source:** adapted from impeccable `colorize.md` (Apache-2.0), taste-skill `backgrounds.md` and `system.md` (MIT) and the author's research (`04_CROSS_CUTTING.md` §3).

## 7. Contrast

**Rule (MUST):** text reaches at least 4.5:1 against its background, and large text (at least 18 pt, or 14 pt bold; about 24 px and 18.5 px) at least 3:1 (WCAG 1.4.3, AA). Borders of controls, state indicators, focus rings and icons that carry meaning reach at least 3:1 against what is next to them (1.4.11, AA). Check every pair in every theme and every state.

Measure the real pair, not the palette:

- muted text, placeholder text and footer microcopy (the most common failure);
- the label on its fill (white on the action color);
- text over an image, through its overlay, at the image's worst point;
- text over a gradient, against every stop.

Disabled controls and logos are exempt from these minimums (1.4.3 and 1.4.11).

**Why:** text that can't be read is content that doesn't exist for that person, and the page's promise never reaches them.

**When it flips:** for long reading (documentation, articles, reports) or an audience with low vision, consider [WCAG 1.4.6 Contrast (Enhanced)](https://www.w3.org/TR/WCAG22/#contrast-enhanced) (AAA): 7:1 for text, 4.5:1 for large text. Use it as the project's target only when the brief says so, never as a house rule.

**Source:** WCAG 2.2; adapted from impeccable `colorize.md` (Apache-2.0), ui-ux-pro-max-skill `quick-reference.md` and `landing.csv` (MIT), Modern Web Guidance "Visual effects" (CC BY 4.0, changes made) and the author's research (`04_CROSS_CUTTING.md` §3).

### Color is never the only signal

**Rule (MUST):** information carried by color also has text, an icon, a shape or a position (WCAG 1.4.1, A). An error shows a border and the reason in words; a required field has a label, not only a red asterisk; a chart series has a label or a pattern.

**Source:** WCAG 2.2; adapted from impeccable `colorize.md` (Apache-2.0) and taste-skill `system.css` (MIT).

## 8. States

**Rule (SHOULD):** give each interactive state its own role token, derived from the base color:

| State | Token | Notes |
|---|---|---|
| Hover | `--color-action-hover` | Applied only inside `@media (hover: hover) and (pointer: fine)` (`responsive.md`) |
| Pressed | `--color-action-pressed` | Also gives touch feedback through `:active` |
| Disabled | `--color-disabled`, `--color-text-disabled` | Its own colors; don't fade the control with `opacity`, which makes the label's contrast depend on what is behind |
| Selected | `--color-selection` | Distinct from hover and from the action itself |
| Focus | `--color-focus` | Section 9 |

- A state change never moves layout: no border that appears and pushes content, no weight change that reflows a line.
- Borders, dividers, focus, pressed and disabled stay distinguishable in every theme.

**Why:** a state that looks like another state makes people doubt what they just did, and a layout that jumps on hover makes the target move under the pointer.

**When it flips:** a disabled control may fall below 4.5:1 (inactive components are exempt), but its label should still be readable enough to tell what is unavailable.

**Source:** adapted from impeccable `operate.md` (Apache-2.0), ui-ux-pro-max-skill `semantic-tokens.md` (MIT, by claudekit) and `pro-rules.md` (MIT), and taste-skill `system.css` (MIT).

## 9. The focus color

**Rule (MUST):** `--color-focus` reaches 3:1 against every surface it can appear on, including the inverse and brand-colored bands (`tokens.md` §5). Draw the ring with `outline` and `outline-offset`.

**Why:** a ring that vanishes on one band leaves keyboard users lost exactly there.

**When it flips:** when one color can't pass everywhere, reassign `--color-focus` per band, or draw a two-tone ring (an inner and an outer line in contrasting colors). `CanvasText` is a safe default color that follows the user's system colors; `currentColor` can fail on colored buttons.

**Source:** WCAG 2.2; adapted from taste-skill `system.css` (MIT) and Modern Web Guidance "Focus indicators" (CC BY 4.0, changes made).

## 10. User preferences and forced colors

- **Rule (SHOULD):** when the direction uses deliberately soft accents, add `@media (prefers-contrast: more)` to strengthen them. It reinforces colors that already pass; it never repairs a default that fails.
- **Rule (SHOULD):** when the direction uses translucent or blurred surfaces, add `@media (prefers-reduced-transparency: reduce)` to make them solid.
- **Rule (SHOULD):** in `@media (forced-colors: active)`, map color tokens to system colors (`Canvas`, `CanvasText`, `LinkText`, `Highlight`), and give elements whose edge or state is drawn only with a shadow or a background image a real border.

**Source:** adapted from Modern Web Guidance "Color" (CC BY 4.0, changes made) and emilkowalski/skills `apple-design` (MIT).

## 11. Browser surfaces

**Rule (SHOULD):** let the tokens reach what the browser draws: `accent-color` for checkboxes, radios and ranges; `::selection`; `caret-color`; `scrollbar-color` when scrollbars are restyled, with the thumb at 3:1 on its track; and the two `theme-color` metas of `responsive.md`, taken from the header surface token.

**Why:** a page whose controls and selection keep the browser's blue looks unfinished next to a careful palette.

**Source:** adapted from Modern Web Guidance "Browser UI theming" (CC BY 4.0, changes made) and impeccable `craft-floor.md` (Apache-2.0).

## 12. Gradients, scrims and translucency

- **Rule (SHOULD):** interpolate gradients in `oklab` unless the brief wants a specific hue path, and add eased stops to a scrim so it has no visible edge.
- **Rule (SHOULD):** when the direction uses translucent surfaces, keep one translucent layer at a time and give the text on it more contrast and a little more weight than on solid ground. Glassmorphism used as decoration is CO7.

**Source:** adapted from Modern Web Guidance "Visual effects" (CC BY 4.0, changes made) and emilkowalski/skills `ui-cheatsheet.md` and `apple-design` (MIT).

## 13. When the user has no brand colors

**Rule (MUST):** a palette chosen without the user's brand is a design decision, written under "Design assumptions" in the brief, never presented as the business's own colors. Ask for the logo and existing material first (`direction.md` §1).

**Why:** a color is part of how a business presents itself; choosing it for them silently is a claim about the business.

**Source:** our own, from `direction.md` and `content-truth.md`.

## Done when

- Every color in the components is a role token.
- Action and status are different hues.
- Every text pair, border, icon and focus ring passes its minimum in every theme and state.
- Every status has a sign besides its color.
- Disabled, selected, hover and pressed are distinguishable and don't move the layout.
