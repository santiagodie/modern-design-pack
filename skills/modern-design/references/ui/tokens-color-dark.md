# Tokens: dark theme and color schemes

> **Covers:** whether the page is light, dark or both; building a dark theme by reassigning roles; `light-dark()`, its fallback and the user's choice; surfaces with their own color scheme.
> **Read when:** step 2, after `tokens-color.md`, when the brief asks for a dark theme or for both themes.
> **Not here:** color roles, contrast and states → references/ui/tokens-color.md; light text on dark (line height, tracking) → references/ui/tokens-type.md
> **Owner:** modern-design
> **Sources:** impeccable (Apache-2.0), taste-skill (MIT), ui-ux-pro-max-skill (MIT), Modern Web Guidance (CC BY 4.0), webstatus.dev; full table in docs/research/tokens-sources.md

Rules follow the form in `tokens.md`: Rule, Why, When it flips, Source.

## 1. Light, dark or both

**Rule (SHOULD):** decide light or dark from where and when the page is used, not from the category or a habit. "Dark or light is never a default: write one sentence of physical scene (who uses this, where, under what light)" (impeccable). Write that sentence in the brief.

**Why:** a dark page read in daylight on a phone strains the eyes; a white page in a dark room glares. The use scene is a fact about the user's moment (`design-reasoning.md` §1, "Who is here"), and the theme should serve it.

**When it flips:**

- When the brand is dark (or light), follow the brand.
- When people use the product at all hours, ship both themes and follow the system setting.
- For example, a planetarium's evening programme, read in a darkened foyer, can start dark. Its booking pages, used at home during the day, can follow the system.

**Source:** adapted from impeccable `new-work.md` (Apache-2.0) and the author's research (`04_CROSS_CUTTING.md` §13).

## 2. A dark theme reassigns roles

**Rule (SHOULD):** build the dark theme by giving the same semantic roles new values, never by inverting the light theme. "In dark mode, design surface elevation and contrast explicitly; do not invert the light theme mechanically" (impeccable).

- **Surfaces:** dark grey rather than pure black, unless the brief or the brand asks for black.
- **Elevation:** higher surfaces are lighter (page, then raised, then overlay). Shadows barely show on dark, so elevation comes from lightness, and a hairline at the top edge can help.
- **Accents:** keep the brand hue, then lighten it and lower its chroma until it stops vibrating against the dark surface and still passes contrast.
- **Text:** step back from pure white for body text when contrast allows; muted text is where dark themes fail most, so measure it.
- **Images and logos:** check each one on the dark surfaces. A dark logo disappears; provide an alternate version or a light plate.

**Why:** inverted themes keep the light theme's mistakes and add new ones: shadows that read as holes, saturated accents that glow, and grey text that drops below 4.5:1. The user switching themes expects the same product, not a negative of it (trust, `reasoning.md` §2).

**When it flips:** a brand-led direction can choose pure black and saturated accents on purpose (a night-time event, a gallery). Check contrast and the focus ring anyway.

**Source:** adapted from impeccable `colorize.md` (Apache-2.0), ui-ux-pro-max-skill `quick-reference.md` and `app-interface.csv` (MIT), taste-skill `cards.md` (MIT) and the author's research (`04_CROSS_CUTTING.md` §13).

### Check every theme

**Rule (MUST):** check the contrast minimums of `tokens-color.md` §7 in each theme separately, including states, borders, the focus ring and the placeholder marks.

## 3. Implementing two themes

### `light-dark()`

**Rule (SHOULD):** set `color-scheme` on `:root` and add `<meta name="color-scheme" content="light dark">` (`responsive.md`). Then write each semantic color role with `light-dark()`, and keep the raw light and dark values as separate base values:

```css
:root {
  color-scheme: light dark;
  --palette-ink-light: oklch(L C H);  /* from the brief */
  --palette-ink-dark: oklch(L C H);
  --color-text: light-dark(var(--palette-ink-light), var(--palette-ink-dark));
}
```

`light-dark()` is Baseline widely available since November 2026 (webstatus.dev). It works for colors only, not for images.

**Why:** each role is declared once with both values, so no dark block can fall out of step with the light one.

**When it flips:** for projects that target older browsers, define the light values first and switch them in a media query, then upgrade where supported:

```css
:root { --color-text: var(--palette-ink-light); }
@media (prefers-color-scheme: dark) {
  :root { --color-text: var(--palette-ink-dark); }
}
```

Wrap the `light-dark()` version in `@supports (color: light-dark(white, black))` so both paths coexist.

**Source:** webstatus.dev; adapted from Modern Web Guidance "Dark mode" (CC BY 4.0, changes made). The fallback pattern is summarised, not copied.

### The user's choice

**Rule (SHOULD):** follow the system setting by default. When the product offers a choice, give three options (light, dark and system; `implementation.md` §5) and apply it by setting `color-scheme` on the root element (`:root[data-theme="dark"] { color-scheme: dark; }`); `light-dark()` follows it. Store the choice as a preference, and apply it before the first paint, or the page flashes the other theme on load.

**When it flips:** most content sites don't need a visible toggle; following the system is enough. Tools used for hours (editors, dashboards) usually do need one.

**Source:** adapted from Modern Web Guidance "Dark mode" (CC BY 4.0, changes made).

### Tokens and `@property`

**Rule (SHOULD):** don't register color tokens with `@property` as `<color>`. A registered color is computed once where it is declared, so it stops following `light-dark()` and the theme.

**Source:** adapted from Modern Web Guidance "Component-specific light-dark theme" (CC BY 4.0, changes made).

## 4. Surfaces with their own scheme

**Rule (SHOULD):** give a part of the page its own `color-scheme` only when it is a complex surface with its own context: a code block, a media player, an embedded map, a product preview. Don't use it for a single dark button or a card. Inside that surface, declare the inherited color roles again, so its text doesn't keep the page's values.

**Why:** a forced scheme on a small element changes its scrollbars and form controls too, and colors inherited from outside can end up dark on dark.

**Source:** adapted from Modern Web Guidance "Component-specific light-dark theme" (CC BY 4.0, changes made).

## Done when

- The brief has one sentence of use scene that justifies light, dark or both.
- Every semantic color role has a value for each theme, and components never test the theme themselves.
- Contrast, the focus ring and the placeholder marks pass in each theme.
- Logos and images are checked on dark surfaces.
- The theme matches the system on first load, with no flash.
