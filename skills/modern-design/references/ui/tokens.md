# Tokens

> **Covers:** step 2, turning the brief into one set of reusable visual decisions: tiers, names, the method against convergence, the mandatory tokens, the file format and the record in `site-decisions.md`.
> **Read when:** step 2 of `modern-design`, or any request that changes colors, type, spacing, radii, shadows or themes.
> **Not here:** color roles → references/tokens-color.md; dark theme → references/tokens-color-dark.md; type → references/tokens-type.md; spacing, radii, elevation and targets → references/tokens-space.md; motion values → references/motion.md
> **Owner:** modern-design
> **Sources:** impeccable (Apache-2.0), taste-skill (MIT), ui-ux-pro-max-skill (MIT), emilkowalski/skills (MIT), Modern Web Guidance (CC BY 4.0), WCAG 2.2, DTCG 2025.10; full table in docs/research/tokens-sources.md

> **Order of authority:** ethics (`ethics.md` and `content-truth.md`, hard limits) > `site-decisions.md` (what exists and what the user decided) > `design-brief.md` > `reasoning.md` and `design-reasoning.md` (method for writing the brief) > the other references (`principles.md`, `pages/`, `sections/`, `implementation.md` and the rest, consulted afterwards). When two disagree, the higher one wins; a user decision that breaks either hard limit is declined with the reason.

## How the rules are written

Each rule has four parts, so you can reason about it instead of ticking it:

- **Rule:** "do X when Y". MUST only for accessibility, security, legal requirements and the truth rule; everything else is SHOULD, the default you may leave with a reason written in the brief.
- **Why:** the mechanism, tied to `reasoning.md` where it applies (central promise, attention, trust, deciding, memory, persuasion dial).
- **When it flips:** the context where the usual rule stops working, and what to do then.
- **Source:** a short credit. Short rules fit on one line.

## 1. What this step is for

Tokens turn the brief's Direction section into decisions that every component reuses: colors, type, spacing, radii, elevation, targets, focus and the names of motion. Decide them once, before step 3 builds anything, so components never choose a value on their own.

The output is a token file in the user's project and an updated section 1 of `site-decisions.md`. The brief proposes; the token file is what the code uses.

## 2. Three tiers

**Rule (SHOULD):** organise tokens in three tiers, each reading only the one below:

| Tier | Holds | Example name |
|---|---|---|
| Base values | Raw values: the color ramps, the spacing scale, the type sizes | `--palette-brand-600`, `--space-4`, `--size-step-2` |
| Semantic roles | What a value is for | `--color-action`, `--color-text-muted`, `--space-between`, `--text-body` |
| Component tokens | One component's own knob, when it needs one | `--button-padding-inline`, `--card-radius` |

- Components read semantic roles or their own component tokens, never base values.
- Base values never reference each other.
- Themes (dark, high contrast, a sub-brand) change only the semantic tier: "Theme changes should normally remap semantic roles" (impeccable).
- A band of the page that needs another background (an inverse section, a brand-colored strip) is a class that reassigns the same roles, so components inside it work unchanged.

**Why:** when a component reads `--palette-brand-600` directly, a dark theme or a brand change means editing every component, and one forgotten edit breaks the theme's contrast. Trust breaks on one detail (`reasoning.md`, "Trust is a prediction"); one tier that remaps is how a theme stays consistent.

**When it flips:** a one-page site with one theme can work with two tiers (base and semantic) and no component tokens. Check the project's existing naming before inventing tiers; follow it when it already separates values from roles.

**Source:** adapted from impeccable `colorize.md` (Apache-2.0), ui-ux-pro-max-skill `design-system` (MIT, by claudekit), taste-skill `system.css` grounds (MIT) and Modern Web Guidance "Design Tokens and Theming" (CC BY 4.0, changes made).

### Names

- **Rule (SHOULD):** name tokens by role, never by value: `--color-action`, not `--color-blue`; `--space-section`, not `--space-96`. "Role names and tokens should describe purpose rather than values" (impeccable). A useful order is category, item, variant, state: `--color-action-hover`.
- **Rule (SHOULD):** promote a value to a token when it is reused. "Do not create a system abstraction for one local exception" (impeccable), and don't fill a scale with steps nothing uses.
- **Rule (SHOULD):** before adding a token, check whether `currentColor`, `inherit`, `em` or a container unit already does the job.
- **Rule (SHOULD):** a value with design meaning (a color, a size, a shadow) lives in a token; trivial values (`0`, `transparent`, `100%`) may stay inline.

**Why:** a name by value is wrong the day the value changes, and a token used once is noise that hides the real system.

**Source:** adapted from impeccable `typeset.md`, `polish.md` (Apache-2.0), ui-ux-pro-max-skill `token-architecture.md` (MIT, by claudekit) and Modern Web Guidance "Foundations" (CC BY 4.0, changes made).

## 3. From the brief to the tokens

Read the brief's Direction section and, per page, its persuasion dial and main job (`reasoning.md` §3, `direction.md` §2). The dial decides three things here:

| Dial and job | Density | Rhythm between sections | Motion budget |
|---|---|---|---|
| High: persuade, experience | Comfortable to spacious | Generous, with clear contrast between tight and wide intervals | Room for one expressive moment; the rest functional |
| Medium: read, browse | Comfortable | Regular, steady | Functional: feedback, state changes, small reveals |
| Medium-low: find, choose, finish | Comfortable | Regular, tighter around the list or the main action | Functional: feedback and state changes; reveals only for what the person asked for (a filter applied, an item added) |
| Low: complete, pay | Compact to comfortable | Tight and consistent | Functional only: feedback and state, never decoration |
| None: operate, decide something irreversible, recover from an error | Compact for experts who return daily; comfortable for occasional readers | Tight and consistent | Functional only: feedback and state; nothing moves on its own |

The level of each page comes from its entry in `pages/`; the scale is defined in `reasoning.md` §3.

**Why:** near money, data or an irreversible action people want predictability (`reasoning.md` §3), and spacing and motion are part of what feels predictable. An expert using a screen forty times a day reads density as speed; a first-time visitor reads it as effort.

**When it flips:** a page with mixed regions (a marketing home with a live pricing calculator) gets two densities, one per region, from the same scale. A brand whose whole identity is calm can keep generous spacing even on its checkout, as long as targets and contrast hold.

**Motion names, reserved here.** Step 4 sets their values in `motion.md`. Define the names now, so components can reference them from the start:

| Token | Used for |
|---|---|
| `--duration-feedback` | Press and hover feedback |
| `--duration-small` | Tooltips, small popovers, toggles |
| `--duration-overlay` | Menus, dropdowns, dialogs |
| `--duration-sheet` | Drawers, sheets, large panels |
| `--ease-enter` | Things arriving (decelerating) |
| `--ease-exit` | Things leaving (accelerating) |
| `--ease-move` | Things moving from one place to another |

**Source:** our own, from `reasoning.md`; motion names adapted from emilkowalski/skills `animate` (MIT), taste-skill `motion.md` (MIT) and ui-ux-pro-max-skill `primitive-tokens.md` (MIT, by claudekit).

## 4. The method against convergence

Generators converge on the same few palettes and faces (`unslop-checklist.md` TY11, CO1 and CO8 in `design-review`). This step gives no starting palette and no font pair. Derive them instead:

1. **From the promise and the real material.** Start from the central promise and from what the user supplied: logo, existing colors, signage, product photos, packaging, the place itself. Color found in that material outranks any idea of yours.
2. **From two or three real references in other sectors.** Look for references outside the user's category (a type specimen, a transport map, an instrument panel, a book series), cite each with its URL in the brief, and say what you take from it. References from the same category pull toward the category look.
3. **From one explicit constraint.** Name it in the brief: "one hue plus neutrals", "only the two inks of the existing logo", "a single family in three weights". A constraint stops the palette from drifting toward the generic.
4. **Write one line per choice** in the brief that cites the part of the brief that asks for it: "action color: the green of the existing van livery, darkened to pass 4.5:1".
5. **Check the result** against TY11, CO1 and CO8. "If someone could guess your aesthetic from the category alone… rework" (impeccable).

**Rule (SHOULD):** before choosing a tinted white or a "warm" tone as a background, name the part of the brief that asks for it. When nothing does, start from another point: plain white, the color of the material, or a dark ground when the use scene is dark.

**Why:** attention is triage (`reasoning.md` §2). A page that looks like the category's template is ruled out as "another one of those" before its promise is read.

**When it flips:** the user's real brand wins over all of this. When `site-decisions.md`, `DESIGN.md` or the brand material already fixes colors and faces, use them and spend the method on what is still open (ramps, roles, dark theme). A cream background is right when the brand is cream.

Name the color strategy before picking values: temperature, which color dominates, the contrast range and how much of each surface carries color; it "must follow the brief and selected world rather than a fixed percentage rule" (impeccable). `tokens-color.md` gives the vocabulary.

**Worked example.** For a piano-tuning service whose brief promises a tuner at the door within the week, the material supplied is the user's own photos and a two-color logo. The constraint written in the brief is "only the two inks of the logo, plus neutrals". The references are an instrument maker's catalogue and a railway timetable, both from other sectors, chosen for their tabular clarity. Each token then cites one of these lines. When the user supplied no logo, the palette is a design assumption in the brief, never a business fact.

**Source:** our own, from `direction.md` and the convergence found in tests 3a and no-invention 1 and 2; the strategy and the category check are adapted from impeccable `colorize.md` and `new-work.md` (Apache-2.0).

## 5. Mandatory tokens

Define these once in the token file, whatever the direction.

### Focus

**Rule (MUST):** define `--focus-color`, `--focus-width` and `--focus-offset`, and draw the ring with `outline` on `:focus-visible`. The ring is visible on every surface (WCAG 2.4.7, AA) and reaches at least 3:1 against the colors next to it (1.4.11, AA). When one color can't pass on every surface, give the inverse surfaces their own `--focus-color`, or use a two-tone ring. Keep focused elements clear of sticky bars with `scroll-padding` (2.4.11, AA).

**Why:** keyboard users lose their place without it, and `outline` stays drawn in modes where colors and shadows are replaced.

**When it flips:** the browser's own ring is fine when it passes on all your surfaces. Projects that target AAA also meet 2.4.13 Focus Appearance: an indicator at least as large as a 2 CSS px perimeter, with 3:1 between its focused and unfocused states. It is AAA, never presented as AA.

**Source:** WCAG 2.2; adapted from taste-skill `system.css` (MIT), ui-ux-pro-max-skill `ux-guidelines.csv` (MIT) and Modern Web Guidance "Focus indicators" (CC BY 4.0, changes made).

### Targets

**Rule (MUST):** `--target-min: 24px`. Every pointer target is at least 24 × 24 CSS px, unless an exception of WCAG 2.5.8 (AA) applies: a 24 px circle centred on a smaller target doesn't overlap another target or its circle, or the target is inline in text, has an equivalent control, is the browser's default or is essential.

**Rule (SHOULD):** `--target-touch: 44px` for primary actions under `@media (pointer: coarse)`. 44 × 44 CSS px is the AAA level of WCAG 2.5.5, and 44 × 44 pt is the default control size in Apple's Human Interface Guidelines, which give 28 × 28 pt as the minimum ([HIG, Accessibility](https://developer.apple.com/design/human-interface-guidelines/accessibility)).

**Why:** a finger covers more than a cursor; a missed tap on a primary action reads as "this doesn't work" (deciding is weighing cost, `reasoning.md` §2).

**When it flips:** dense expert tools used with a mouse keep 24 px targets and gain density. A touch-first product sets 44 px for every control, not only primary ones. `tokens-space.md` has the sizing method.

**Source:** WCAG 2.2; Apple HIG; adapted from Modern Web Guidance "Form factor adaptation" (CC BY 4.0, changes made) and ui-ux-pro-max-skill `ux-guidelines.csv` (MIT).

### Placeholders

**Rule (MUST):** the two placeholder styles of `content-truth.md` are tokens, defined once: `--placeholder-outline` (dashed outline for data and images) and `--placeholder-text-mark` (the lighter mark for running text). They stay visible in every theme.

**Why:** a placeholder that passes for real content in a screenshot breaks the truth rule.

**Source:** our own, from `content-truth.md`.

### Reduced motion

**Rule (MUST):** handle `prefers-reduced-motion: reduce` in one place: the token file redefines the motion tokens (shorter durations, no distance for movement), and components read the tokens instead of writing their own query. Keep content visible, and avoid a global `0.01ms` override on every animation: some animations become more jarring that way.

**Why:** one place means no component forgets it.

**Source:** `implementation.md` §7 (accessibility); adapted from Modern Web Guidance "Respect reduced motion" (CC BY 4.0, changes made). Values in `motion.md`.

## 6. Format

**Rule (SHOULD):** by default, write one CSS file of custom properties with the three tiers, imported once before any component (`src/styles/tokens.css` or the stack's equivalent). Mark each tier with a comment. The shape, without values (values come from the brief):

```css
/* Base values */
:root {
  --palette-brand-600: oklch(L C H);   /* from the user's logo */
  --space-4: 1rem;
}
/* Semantic roles */
:root {
  --color-action: var(--palette-brand-600);
  --space-between: var(--space-4);
}
/* Component tokens */
.button { --button-padding-inline: var(--space-between); }
```

- Declaring a cascade layer for tokens (`@layer tokens, base, components;`) helps when the project uses layers.
- Don't register color tokens with `@property` as `<color>`: the registered value is computed once and stops following `light-dark()` and theme changes.

**When it flips:**

- **Several platforms** (web plus a native app), or **sync with a design tool**: keep the source in the Design Tokens Community Group format 2025.10 (JSON, `.tokens.json`, each token with `$value` and optionally `$type` and `$description`, aliases written `{group.token}`), and generate the CSS from it. Its Resolver Module describes themes as sets and modifiers. It is a community group report (October 2025), not a W3C standard.
- **Tailwind CSS v4** (4.3 in November 2026; check later versions before citing): declare base values and roles in `@theme { --color-action: …; }`. Each theme variable also generates utilities (`bg-action`). Use `@theme inline` when a variable points to another variable. Namespaces include `--color-*`, `--font-*`, `--text-*`, `--spacing-*`, `--radius-*`, `--shadow-*` and `--ease-*`.
- **An existing project:** find its tokens first, in this order: custom properties (`--color-`, `--space-`, `--radius-`), the Tailwind theme, a CSS-in-JS theme, token JSON, then computed styles. Extend what exists instead of creating a parallel set.

`implementation.md` §4 places tokens in the reuse layers.

**Source:** DTCG Format and Resolver Modules 2025.10; Tailwind CSS docs; adapted from ui-ux-pro-max-skill `token-architecture.md` (MIT, by claudekit), impeccable `document.md` (Apache-2.0), emilkowalski/skills `animate` (MIT) and Modern Web Guidance "Design Tokens and Theming" and "Component-specific light-dark theme" (CC BY 4.0, changes made).

## 7. The record in site-decisions

- **Rule (SHOULD):** in section 1 of `site-decisions.md`, each row names the token file and the token names (`--color-*`, `--text-*`, `--space-*`), never their values. One source of truth: prose that repeats a value drifts from the code.
- **Rule (SHOULD):** when the code and `site-decisions.md` disagree, ask the user which is right before changing either. In a non-interactive run, follow the code and note the mismatch in the brief's Design assumptions.
- **Rule (SHOULD):** when the user corrects a token ("the green is too loud"), record the decision in section 3 with the user's reason, at the level of the class of thing ("action colors stay below the logo's saturation"), not the single instance. When you infer a reason, mark it as inferred.

In the brief, describe colors in words ("the deep green of the van livery") so people can discuss them; in `site-decisions.md`, cite names.

**Source:** our own template rules; adapted from impeccable `document.md` (Apache-2.0) and emilkowalski/skills `learn-taste` (MIT).

## 8. What to read next

Read only the file you need, and read it whole:

- `tokens-color.md`: color roles, contrast, states and focus color, palettes without a brand.
- `tokens-color-dark.md`: dark theme and other color schemes.
- `tokens-type.md`: choosing faces, the scale, fluid type, line height, measure, fallbacks, numerals.
- `tokens-space.md`: spacing scale and levels, density, containers, safe areas, targets, radii, elevation.

Then step 3 (`sections/index.md`).

## 9. Done when

- No color, size, spacing, radius or shadow is written by hand outside the token file (an optional check: search the components for hex values and pixel sizes).
- The interactive color and the status colors are different hues.
- Contrast is checked in every theme and state (`tokens-color.md`).
- The focus ring is visible on every surface, including inverse and brand-colored bands.
- Every choice has a line in the brief that cites what asks for it.
- Section 1 of `site-decisions.md` names the token file and the token names.
