# Tokens: source decisions

Working document for the `tokens` branch (phase A). It decides what the five reference skills, the author's research and the standards contribute to `tokens.md`, `tokens-color.md`, `tokens-type.md` and `tokens-space.md`. Nothing here is skill content: rows are rewritten before they reach `skills/`.

Reviewed on 2026-11-25. Per-repo working notes (with short verbatim excerpts) stayed outside the repo.

## Sources reviewed

| Tag | Repo and commit | Licence | Copyright line | NOTICE | Files read in full (others by targeted grep) |
|---|---|---|---|---|---|
| IMP | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) `9e460a8` | Apache-2.0 | "Copyright 2025 Paul Bakaus" (LICENSE, appendix) | Yes, `NOTICE.md`: `skill/reference/ios.md` and `android.md` are MIT from ehmo's platform-design-skills; fonts (OFL) and autoconsent (MPL-2.0) in the extension | `skill/reference/`: typeset, colorize, layout, foundations, craft-floor, mode-persuade, mode-operate, mode-read, adapt, polish, init, document, quieter, bolder, new-work, operate; `plugin/skills/impeccable/SKILL.md`. In part: harden, critique-rubric, audit, optimize, ios, android, distill |
| TST | [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) `d1a2bb4` | MIT | "Copyright (c) 2026 Leonxlnx" | No | `skills/taste-skill/`: SKILL.md, references/system.md, layout-v4.md, gate.md, backgrounds.md, assets/system.css (lines 670-1234 by grep). In part: references/motion.md (names), cards.md, sections.md "Look", library/palettes.json and type.json (structure), scripts/consistency.mjs (check list), start.mjs |
| UUP | [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) `8db3633` | MIT | "Copyright (c) 2024 Next Level Builder" | No. Caveats: the design-system, ui-styling and brand skills name "claudekit" as author; `ui-styling/LICENSE.txt` is Apache-2.0 with no holder (canvas material); its density dial credits taste-skill | `.claude/skills/ui-ux-pro-max/`: SKILL.md, references/pro-rules.md, quick-reference.md, data/ux-guidelines.csv, colors.csv, typography.csv, styles.csv, products.csv, app-interface.csv, landing.csv (google-fonts.csv structure only). `design-system/`: SKILL.md, references/token-architecture.md, primitive-tokens.md, semantic-tokens.md, component-tokens.md, component-specs.md, states-and-variants.md, tailwind-integration.md. `ui-styling/`: SKILL.md, shadcn-theming.md, tailwind-customization.md. `brand/references/`: color-palette-management.md, typography-specifications.md |
| EMK | [emilkowalski/skills](https://github.com/emilkowalski/skills) `64eb3de` | MIT | "Copyright (c) 2026 Emil Kowalski" | No | ui-cheatsheet.md; skills/emil-design-eng, apple-design, mobile-native, learn-taste, pick-ui-library (SKILL.md each). skills/animate for token names only |
| MWG | [GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src) `92686ac` | Split: code Apache-2.0; `guides/` CC-BY 4.0 (README "License"); portions derived from MDN and W3C/WHATWG/IETF specs | "Copyright 2026 Google LLC" in `src/` headers only; guides carry none | No | `guides/visual-design/`: color, contrast-color, dark-mode, browser-ui-theming, typography, improve-text-layout-and-legibility, visually-stable-font-fallbacks, visually-stable-mixed-fonts, precise-text-alignment, visual-effects. `guides/css/`: css, css-layout, responsive-design, fluid-scaling, design-token-reactivity, size-aware-styling. `guides/accessibility/`: accessibility, respect-os-text-scale. `guides/ui-atoms/component-specific-light-dark-theme`, `guides/ui-behaviors/motion`, `guides/user-experience/form-factor-adaptation`; `features/light-dark.md`, `color-scheme.md`, `accent-color.md` |
| CC | `docs/research/landing-field-guide/04_CROSS_CUTTING.md` | Author's research (written with Claude, MIT) | Repository | n/a | Sections 1, 2, 3, 5, 13 |

**Licence notes that shape the decisions:**

- MWG has a clear licence, but its published skill is labelled Apache-2.0 while the guide text is CC-BY 4.0 and partly derived from MDN. MDN's prose is CC BY-SA 2.5 or any later version (checked 2026-11-25 at https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Attrib_copyright_license; code samples are CC0). Every MWG row is therefore **adapt** with facts only, in our own wording and order, credited "Modern Web Guidance (CC BY 4.0, changes made)", never adopt. `features/*.md` sits outside `guides/` and has no stated licence: summarise only.
- UUP files authored by claudekit are **adapt** only (paraphrase, credit both). Its `ux-guidelines.csv` and `quick-reference.md` (Next Level Builder) may be adopted.
- IMP: `ios.md` and `android.md` are MIT from ehmo. They are not used as text; platform figures are cited from Apple and the standards instead.
- `docs/SOURCES.md` still marks UUP's licence "TO VERIFY" and the MWG repo "not checked". Both are confirmed above and get updated in phase B.

**Decisions:** adopt (keep wording, credit per section; only for Apache-2.0 and MIT text), adapt (rewrite in our form, credit), reject (reason recorded, nothing copied), link (goes to `resources.md`). The ID column lets you refer to rows when you send changes.

## 1. Decision table

### 1.1 `tokens.md` (the step)

| ID | Idea or rule | Source (repo, file, heading) | Licence | Decision | Reason | Target |
|---|---|---|---|---|---|---|
| T1 | Three tiers: base values → semantic roles → component tokens; each tier reads only the one below | UUP design-system/references/token-architecture.md "Layer Overview"; TST assets/system.css "tokens", "grounds"; MWG css/css "5. Design Tokens and Theming" | MIT (claudekit); MIT; CC-BY 4.0 | adapt | Same model as `implementation.md` §4; rename to our tiers, drop fixed values | tokens.md |
| T2 | Themes remap only the semantic tier; base values and component tokens stay | IMP colorize.md "Apply at system scale" | Apache-2.0 | adopt | Short, value-free, exactly our rule | tokens.md |
| T3 | Same rule, with sub-brands and a `.dark` class | UUP token-architecture.md "Dark Mode"; semantic-tokens.md "Dark Mode Overrides" | MIT (claudekit) | adapt | Add `prefers-color-scheme` and a user override; T2 carries the wording | tokens.md |
| T4 | Smaller scope needs fewer tiers; check the project's existing naming before inventing one | MWG css/css "5. Design Tokens and Theming" | CC-BY 4.0 | adapt | Stops over-built token sets on small sites | tokens.md |
| T5 | Token and role names describe purpose, not value | IMP typeset.md "Set the system"; layout.md "Set the spatial thesis" | Apache-2.0 | adopt | Matches "`--color-action`, not `--color-blue`" | tokens.md |
| T6 | Naming grammar `--{category}-{item}-{variant}-{state}`; `destructive`, not `red` | UUP token-architecture.md "Naming Convention"; ui-styling/references/shadcn-theming.md "Best Practices" | MIT (claudekit) | adapt | Useful grammar; merge into T5 with our own example | tokens.md |
| T7 | Base values never reference each other; components read semantic roles (IMP lets components read primitives) | IMP document.md "Rules that matter" | Apache-2.0 | adapt | Our rule is stricter: components never read base values | tokens.md |
| T8 | Promote a value to a token only when it is reused; one-off values stay local; no empty scale steps | IMP polish.md "Content and code"; document.md "Pitfalls" | Apache-2.0 | adopt | Guards against bloated scales | tokens.md |
| T9 | Before adding a token, check whether `currentColor`, `inherit`, `em` or container units already do the job | MWG css/css "1. Foundations" | CC-BY 4.0 | adapt | Keeps the set small | tokens.md |
| T10 | Values with design meaning live in custom properties; trivial values (`0`, `transparent`) may stay inline | MWG css/css "5"; UUP design-system/SKILL.md "Best Practices" 1 | CC-BY 4.0; MIT (claudekit) | adapt | Both state it absolutely; rewrite as "when" | tokens.md |
| T11 | One source of truth; prose never restates a token's value | IMP document.md "Step 2b", "Style guidelines" | Apache-2.0 | adopt | Backs "site-decisions cites names, never values" | tokens.md |
| T12 | Extend the project's existing tokens instead of a parallel set | EMK skills/animate/SKILL.md "Hard Rules" 2-3 | MIT | adapt | Drop "defect"/"never" wording | tokens.md |
| T13 | Token discovery order in an existing project: custom properties, Tailwind theme, CSS-in-JS theme, token JSON, components, computed styles | IMP document.md "Step 1: Find the design assets" | Apache-2.0 | adapt | Mentions Tailwind v3 config only; add v4 `@theme` | tokens.md |
| T14 | Name the colour strategy (temperature, dominant relationship, contrast range, dosage) before picking values; follow the brief, not a fixed percentage | IMP colorize.md "Choose a strategy" | Apache-2.0 | adopt | Criterion without values; fits the derivation method | tokens.md |
| T15 | Self-check against category looks: if the aesthetic can be guessed from the category alone, rework; the four over-used looks are fine only when the brief asks | IMP new-work.md "4. Commit the world" | Apache-2.0 | adapt | Already conditional; rewrite and point to `direction.md` §5, TY11 and CO8 instead of repeating the list | tokens.md |
| T16 | Ground classes remap role tokens per band (base, surface, inverse) so components work unchanged on any section | TST assets/system.css "grounds (at most three)" | MIT | adapt | Good mechanism; rename and drop the "at most three" absolute | tokens.md |
| T17 | Record each decision with its reason, at class level, only from what the user said; mark inferred reasons | EMK skills/learn-taste/SKILL.md "Hard Rules", "Phase 3" | MIT | adapt | Fits `site-decisions.md` section 3 and content-truth | tokens.md |
| T18 | Optional check after the build: hard-coded hex or px outside the token file | UUP design-system/scripts/validate-tokens.cjs (usage); EMK learn-taste "Hard Rules" 4 | MIT (claudekit); MIT | adapt | Describe the check; any script ships later in `scripts/`, Node only, optional | tokens.md |
| T19 | Declare cascade layer order up front; tokens in a low layer | MWG css/css "2. Inheritance and The Cascade" | CC-BY 4.0 | adapt | Optional format note; Tailwind has its own layers | tokens.md |
| T20 | Do not register colour tokens with `@property` as `<color>` (it freezes `light-dark()`) | MWG ui-atoms/component-specific-light-dark-theme "Known issues" | CC-BY 4.0 | adapt | Precise format rule; paraphrase | tokens.md |
| T21 | DTCG JSON as interchange, CSS custom properties at run time; a single CSS file with tier comments by default | UUP token-architecture.md "W3C DTCG Alignment", "File Organization" | MIT (claudekit) | adapt | Format facts from the DTCG reports (table 2), not from UUP | tokens.md |
| T22 | Tailwind v4 `@theme` with `--color-*` and the other namespaces as a dated example | UUP ui-styling/references/tailwind-customization.md "@theme Directive" | MIT (claudekit) | adapt | Source uses `--font-size-*` where v4 uses `--text-*`; cite Tailwind's docs | tokens.md |
| T23 | HSL-channel variables and `tailwind.config.ts` theming (shadcn/Tailwind v3 pattern) | UUP shadcn-theming.md "Color Format"; tailwind-integration.md "HSL Format Benefits" | MIT (claudekit) | reject | Outdated for v4, internally inconsistent (RGB triplet labelled HSL) | none |
| T24 | DESIGN.md / Stitch token format as an export option | IMP document.md "The frontmatter: token schema" | Apache-2.0 | link, deferred | External spec that changes; our file stays site-decisions | resources.md |
| T25 | In the brief, describe colours in words; in site-decisions, cite token names | IMP document.md "Step 3", "Style guidelines" | Apache-2.0 | adapt | Descriptive names help people; values stay in code | tokens.md |
| T26 | Motion token names by role: durations (press, small overlay, overlay/panel, sheet, or fast/normal/slow) and easings by intent (enter, exit, in-out) | EMK skills/animate/SKILL.md "Duration", easing block; TST references/motion.md (names); UUP design-system/references/primitive-tokens.md "Motion / Duration"; IMP document.md "Step 1" | MIT; MIT; MIT (claudekit); Apache-2.0 | adapt | Names only, reserved in tokens.md; values in motion.md | tokens.md, motion.md |
| T27 | Reduced motion handled in one place; do not zero every duration with a global `0.01ms` | MWG ui-behaviors/motion "Respect reduced motion" | CC-BY 4.0 | adapt | Only the hook belongs here; detail in motion.md | tokens.md |
| T28 | Global `.001ms !important` reduced-motion override | TST assets/system.css "highlight + entrance + motion" | MIT | reject | MWG explains why it can make motion more jarring | none |
| T29 | Changing an inherited custom property recalculates all descendants; drive per-frame values on the element | EMK emil-design-eng "Performance Rules" | MIT | adapt, deferred | Motion concern | motion.md |
| T30 | Classify drift (missing token, one-off, conceptual mismatch, local defect) before fixing | IMP polish.md "1. Establish the system" | Apache-2.0 | adapt, deferred | Belongs to a review; deferred | design-review (later) |

### 1.2 `tokens-color.md`

| ID | Idea or rule | Source (repo, file, heading) | Licence | Decision | Reason | Target |
|---|---|---|---|---|---|---|
| C1 | Build colour as roles (surfaces, text levels, action, focus, selection, borders, status, data), not a bag of swatches | IMP colorize.md "Choose a strategy" | Apache-2.0 | adopt | Value-free; matches our semantic tier | tokens-color.md |
| C2 | Every fill role pairs with a foreground role (action/on-action), plus border and ring | UUP data/colors.csv (column set); ui-styling/references/shadcn-theming.md "Best Practices" | MIT; MIT (claudekit) | adapt | Keep the slot set; every value in the CSV is rejected (C40) | tokens-color.md |
| C3 | Status roles success, warning, error, info, each with its own foreground | UUP design-system/references/semantic-tokens.md "Status Colors" | MIT (claudekit) | adapt | Role list; its Tailwind-default values rejected | tokens-color.md |
| C4 | State vocabulary for task surfaces: hover, focus, active, disabled, selected, loading, error, warning, success, info | IMP operate.md "Color" | Apache-2.0 | adapt | Write as "when the surface has interactive states" | tokens-color.md |
| C5 | Separate `action` from `accent`; when the brand colour is too pale for action, action falls back to the ink or an adjusted shade | TST assets/system.css "tokens"; references/system.md "Colour" | MIT | adapt | Useful split; reword as "when" | tokens-color.md |
| C6 | When a brand colour fails a role, derive an adjusted shade for that role, keep the original as a base value, record the change | UUP data/colors.csv "Notes" | MIT | adapt | Adjust per role instead of discarding the brand colour; record in site-decisions | tokens-color.md |
| C7 | Darken a brand colour in steps until its label passes 4.5:1 and it passes 3:1 on the grounds | TST references/system.md "Colour" | MIT | adopt | Method for any brand colour; thresholds re-cited from WCAG | tokens-color.md |
| C8 | One accent reserved for the primary action, not decoration (Von Restorff) | CC §3 "Rules"; IMP operate.md "Color" | Author; Apache-2.0 | adapt | IMP also spends the accent on selection and state, which clashes with "action never means status": rewrite | tokens-color.md |
| C9 | One accent at most | TST references/system.md "Colour" | MIT | adapt | Absolute; make it a default with "when the brand has two colours" | tokens-color.md |
| C10 | Prefer OKLCH for a new web palette; keep the project's existing colour space otherwise | IMP colorize.md "Choose a strategy" | Apache-2.0 | adopt | Already conditional; support verified (table 2) | tokens-color.md |
| C11 | Ramps step lightness and lower chroma near white and black | IMP colorize.md "Contrast and perception" | Apache-2.0 | adopt | Technical criterion, no values | tokens-color.md |
| C12 | A tonal ramp of about 8 steps across 15-95 % lightness | IMP document.md "Tonal ramps" | Apache-2.0 | adapt | Offer as one option, not a default | tokens-color.md |
| C13 | Scales in `oklch` declared so that utilities are generated (Tailwind v4) | UUP tailwind-customization.md "Color Customization"; data/stacks/html-tailwind.csv rows 22, 51 | MIT (claudekit); MIT | adapt | Example values rewritten | tokens-color.md |
| C14 | Hairlines and strong lines derived from the ink with `color-mix(in oklab, ink N%, transparent)` instead of extra greys | TST assets/system.css "grounds" | MIT | adopt | Derived, theme-safe; percentages become "start from" values | tokens-color.md |
| C15 | Hover and pressed states derived with `color-mix` toward the ink | TST assets/system.css buttons, forms | MIT | adapt | Method good; their percentages are house values | tokens-color.md |
| C16 | Prefer predefined tint tokens; when generating, mix in `oklab`; keep lightness shifts modest | MWG visual-design/color "Generating tints"; visual-effects "Gradients and color-mix()" | CC-BY 4.0 | adapt | The claimed Chromium bug with `oklch` neutrals is unverified (table 2) | tokens-color.md |
| C17 | Explicit colours over stacked translucent layers when alpha would make contrast depend on what is behind | IMP colorize.md "Contrast and perception" | Apache-2.0 | adopt | Testable, accessibility-linked | tokens-color.md |
| C18 | Tint neutrals only when the brand hue creates cohesion; neutral grey is valid | IMP colorize.md "Apply at system scale" | Apache-2.0 | adopt | Already "do X when Y", as the brief asks | tokens-color.md |
| C19 | Warm or cool tinted greys instead of pure grey, as the default quieting move | IMP quieter.md "Color Refinement" | Apache-2.0 | reject | Makes tinted neutrals a default; contradicts C18 | none |
| C20 | A second neutral layer for sidebars and toolbars in dense apps | IMP operate.md "Color" | Apache-2.0 | adapt | "When the layout has panels"; direction comes from the brief | tokens-color.md |
| C21 | Secondary text on a coloured surface derives from that surface's hue, not generic grey | IMP colorize.md "Apply at system scale" | Apache-2.0 | adopt | Already used by CO5's fix; add the contrast check | tokens-color.md |
| C22 | The main ground comes from the brand and the use scene; never one fixed off-white for every site | TST references/backgrounds.md "The three tokens" | MIT | adapt | Drop its sector temperatures ("warm greys for a service") | tokens-color.md |
| C23 | Alternate ground: same hue, a small lightness step | TST references/backgrounds.md "The three tokens" | MIT | adapt | Relational rule; its numeric bands are claims, not values | tokens-color.md |
| C24 | Near-black ink and off-white rather than pure `#000` / `#FFF` for large areas | CC §3 "Rules"; TST references/system.md "Colour" | Author; MIT | adapt | SHOULD, not a default tint; drop "often warm"; must not seed CO8 | tokens-color.md |
| C25 | Interface mostly neutral; colour comes from the real material (product, photos, logo) | TST references/system.md "Colour" | MIT | adapt | Fits "derive from the user's material"; drop "90 to 95 %" | tokens-color.md |
| C26 | Choose hue from product meaning, not a category association | IMP colorize.md "Choose a strategy" | Apache-2.0 | adapt | Soften "never" | tokens-color.md |
| C27 | Colour psychology ("blue = trust") is weak and culture-dependent; contrast, consistency and brand fit matter more | CC §3 "Insider notes" | Author | adopt | Our own research | tokens-color.md |
| C28 | Dosage strategies (restrained, committed, full palette, drenched) chosen per surface, with 60-30-10 as one starting split | IMP new-work.md "4. Commit the world"; CC §3 "60-30-10 rule" | Apache-2.0; Author | adapt | Vocabulary, not fixed percentages | tokens-color.md |
| C29 | Fixed colour-share figures (60-70 % primary, 90-95 % neutral, accent under 3 %, 70-85 % saturation, 10 % rule) | UUP brand/references/color-palette-management.md "Brand Compliance Validation"; TST references/system.md; IMP quieter.md | MIT (claudekit); MIT; Apache-2.0 | reject | Context-free recipes | none |
| C30 | Light or dark is never a default: write one sentence of the physical use scene and let it decide | IMP new-work.md "4. Commit the world" | Apache-2.0 | adopt | Context decides; matches `direction.md` "Light or dark" | tokens-color.md |
| C31 | Dark pages only for tech products | TST references/system.md "Colour"; backgrounds.md | MIT | reject | Sector rule; dark mode is a user preference and a brief decision | none |
| C32 | Dark mode designs elevation and contrast explicitly; it is not a mechanical inversion | IMP colorize.md "Apply at system scale", "Verify" | Apache-2.0 | adopt | Already well worded | tokens-color.md |
| C33 | Dark set derived from the brand: keep the hue, derive dark surfaces, lighten or desaturate accents, re-test contrast | UUP references/quick-reference.md `color-dark-mode`; data/app-interface.csv row 29 | MIT | adapt | Method kept; the script's fixed dark values rejected | tokens-color.md |
| C34 | Dark surfaces dark grey, not black; elevate with lighter surfaces; desaturate bright accents slightly | CC §13 "Rules" | Author | adapt | Our research; rewrite with "when" | tokens-color.md |
| C35 | Dark cards: one step lighter, optionally a faint top highlight | TST references/cards.md "The card" | MIT | adapt | Hint for dark elevation; drop the values | tokens-color.md |
| C36 | `light-dark()` for tokens, with the raw light and dark values kept as separate properties; `color-scheme` on `:root` plus the meta | MWG visual-design/dark-mode "Implementation" | CC-BY 4.0 | adapt | Dated example; `light-dark()` is Baseline widely available since 2026-11-13 | tokens-color.md |
| C37 | Fallback: switch properties on `:root` with `prefers-color-scheme`, upgrade inside `@supports` | MWG features/light-dark.md, color-scheme.md "Fallbacks" | Unstated (outside `guides/`) | adapt | Summarise only, no wording | tokens-color.md |
| C38 | Follow the system theme; a persistent toggle is optional; a dark theme can be tuned to its surroundings | MWG visual-design/dark-mode "JS-based theme detection", "OPTIONAL" sections | CC-BY 4.0 | adapt | Compatible with the "system" option in `implementation.md` §5 | tokens-color.md |
| C39 | Only complex surfaces (code blocks, maps, embeds) get their own `color-scheme`; re-declare inherited colours there | MWG ui-atoms/component-specific-light-dark-theme "When to change colors…", "Best practices" | CC-BY 4.0 | adapt | Clear criterion | tokens-color.md |
| C40 | Fixed palettes per sector or trade (64 TST palettes, 194 UUP product palettes, UUP example palettes per business type, UUP style presets including warm cream and tinted off-white) | TST library/palettes.json; UUP data/colors.csv, products.csv, ui-reasoning.csv, styles.csv; brand/references/color-palette-management.md "Color Palette Examples" | MIT; MIT; MIT (claudekit) | reject | Starter palettes per sector: the mechanism behind convergence | none |
| C41 | Violet and lavender hues (OKLCH 270-330) banned and shifted to blue or rose | TST references/system.md "Colour"; scripts/start.mjs | MIT | reject | Absolute hue ban; ours targets the purple-blue gradient default only (CO1) | none |
| C42 | Contrast minimums: text 4.5:1, large text (18 pt, or 14 pt bold) 3:1, UI boundaries, states, icons and focus indicators 3:1; checked in every theme and state | IMP colorize.md "Contrast and perception"; MWG visual-design/color "Contrast"; UUP quick-reference.md `color-contrast` | Apache-2.0; CC-BY 4.0; MIT | adapt | MUST; cite WCAG 1.4.3 and 1.4.11 (table 2), not the skills. UUP's "18px+" and "AAA UI 4.5:1" are wrong | tokens-color.md |
| C43 | 7:1 for body text only when the project targets AAA | UUP quick-reference.md `color-accessible-pairs` | MIT | adapt | Phase B: written under "When it flips" (long reading or low vision → consider 1.4.6, AAA), never as the norm | tokens-color.md |
| C44 | Body text at 7:1 as the house default | TST references/system.md "Type"; scripts/consistency.mjs | MIT | reject | House choice presented as the norm | none |
| C45 | Measure the real pair: muted text, placeholder, label on its fill, text over an image through its overlay, scrims | UUP data/landing.csv rows 1, 9; references/pro-rules.md "Scrim and modal legibility" | MIT | adapt | Method the step needs | tokens-color.md |
| C46 | Check contrast on images and gradients at their worst point; muted footer and microcopy text is the most common failure | CC §3 "Insider notes" | Author | adopt | Our own research | tokens-color.md |
| C47 | Text over gradients meets contrast against every stop | MWG visual-design/visual-effects "Accessibility considerations" | CC-BY 4.0 | adapt | MUST; paraphrase | tokens-color.md |
| C48 | Colour is never the only signal: pair with text, shape, icon or position | IMP colorize.md "Apply at system scale" | Apache-2.0 | adopt | MUST (WCAG 1.4.1) | tokens-color.md |
| C49 | An error shows a border and the reason in words, so colour is never the only sign | TST assets/system.css forms | MIT | adopt | Concrete case of C48 | tokens-color.md |
| C50 | Status colours carry an icon or text, and meet text contrast themselves | UUP data/ux-guidelines.csv row 37; MWG visual-design/color "Accessible color" | MIT; CC-BY 4.0 | adapt | Merged into C48 | tokens-color.md |
| C51 | Hover, pressed, disabled, selected and focus as role tokens; state changes never move layout bounds | UUP semantic-tokens.md "Interactive States"; references/pro-rules.md "Stable Interaction States" | MIT (claudekit); MIT | adapt | Our version: hover only under `(hover: hover)`; disabled uses its own colour, not opacity, for text | tokens-color.md |
| C52 | Disabled state by opacity (`--opacity-disabled: 0.5`) | UUP semantic-tokens.md "Interactive States" | MIT (claudekit) | reject | Text contrast then depends on what is behind (C17) | none |
| C53 | State parity: borders, dividers, focus, pressed and disabled stay distinguishable in both themes | UUP references/pro-rules.md "Light/Dark Mode Contrast" | MIT | adapt | Checklist for "done when" | tokens-color.md |
| C54 | Focus ring: `:focus-visible`, 2 px outline in the action colour, offset, 3:1 on the ground, never animated, never hidden under a fixed bar | TST assets/system.css base; references/system.md "Access" | MIT | adopt | Accessibility rule with context; the figures re-cited from WCAG | tokens-color.md |
| C55 | Keep native rings unless they fail; a custom ring needs 3:1 against adjacent colours and uses `outline` plus `outline-offset`; `CanvasText` is a safe default; `currentColor` can fail | MWG accessibility/accessibility "Focus indicators"; user-experience/natural-interactions | CC-BY 4.0 | adapt | Paraphrase; MUST where it is WCAG | tokens-color.md |
| C56 | Ring tokens (width, offset, colour, offset colour) drawn with `outline: none` plus `box-shadow` | UUP semantic-tokens.md "Interactive States"; states-and-variants.md "Focus Ring Spec" | MIT (claudekit) | adapt | Keep the token set; use `outline` instead (`box-shadow` may vanish in forced colours: unverified) | tokens-color.md |
| C57 | Focus Not Obscured (Minimum) is AA; Focus Appearance (2 px perimeter, 3:1) is AAA and is not presented as AA | UUP data/ux-guidelines.csv rows 100-102 | MIT | adopt | Precise and level-aware | tokens.md |
| C58 | `prefers-contrast: more` reinforces deliberately low-contrast accents; it never fixes defaults that fail | MWG visual-design/color "Contrast" | CC-BY 4.0 | adapt | Paraphrase | tokens-color.md |
| C59 | `prefers-reduced-transparency: reduce` makes translucent surfaces solid | EMK skills/apple-design "14. Reduced motion & accessibility" | MIT | adapt | Only when the design uses translucency | tokens-color.md |
| C60 | Forced colours: map colour tokens to system colours; do not rely on shadows or background images for borders and state | MWG visual-design/color "Forced Colors Mode" | CC-BY 4.0 | adapt | Rewrite the DON'Ts as conditions | tokens-color.md, tokens-space.md |
| C61 | Theme browser surfaces with tokens: `accent-color`, `scrollbar-color` (thumb 3:1 on the track), `::selection`, caret, underline offset | MWG visual-design/dark-mode "Fine-grained browser UI customization"; browser-ui-theming; IMP craft-floor.md "Browser surfaces" | CC-BY 4.0; Apache-2.0 | adapt | Checklist; Safari `accent-color` caveat unverified | tokens-color.md |
| C62 | One `theme-color` meta per scheme, matching the header surface | EMK skills/mobile-native "10. Status bar color doesn't match" | MIT | adapt | Already in `responsive.md`; cross-reference the header surface token only | tokens-color.md |
| C63 | `contrast-color()` when a background is only known at run time; hand-checked pairs for fixed brand colours | MWG visual-design/contrast-color | CC-BY 4.0 | adapt, deferred | Only for dynamic backgrounds; formula credited to Lea Verou in the source; support unverified | tokens-color.md |
| C64 | Choose the gradient interpolation space on purpose (`oklab` by default) | MWG visual-design/visual-effects "Gradients and color-mix()" | CC-BY 4.0 | adapt | Short note | tokens-color.md |
| C65 | Eased gradient stops for scrims, to avoid a visible edge | EMK ui-cheatsheet.md | MIT | adapt | Short note | tokens-color.md |
| C66 | Translucent surfaces: weight encodes hierarchy; no light translucent layer over another; text on them needs more contrast and slightly more weight | EMK skills/apple-design "12. Materials & depth" | MIT | adapt | Conditional on the direction using translucency (CO7) | tokens-color.md |
| C67 | Fixed glass recipe (white 60 %, blur 20 px, saturate 180 %) | EMK skills/apple-design "12. Materials & depth" | MIT | reject | One recognisable look shipped as a default | none |
| C68 | Brand-colour band: the words on it take the colour that passes contrast; the primary button inverts | TST references/backgrounds.md; assets/system.css `.ground-brand` | MIT | adapt, deferred | Recipe kept; "7:1, the one number" dropped | tokens-color.md |
| C69 | Example values to avoid as seeds: MWG `oklch(45% 0.23 270)` (purple-blue), IMP DESIGN.md example (`#faf7f2` + Cormorant Garamond), UUP purple-to-pink gradient button | MWG dark-mode; IMP document.md; UUP shadcn-theming.md "Customize Variants" | — | reject | Exactly the defaults CO1, CO8 and TY11 flag | none |

### 1.3 `tokens-type.md`

| ID | Idea or rule | Source (repo, file, heading) | Licence | Decision | Reason | Target |
|---|---|---|---|---|---|---|
| Y1 | Use the fewest roles and families that make hierarchy unmistakable | IMP typeset.md "Set the system" | Apache-2.0 | adopt | Criterion, no values | tokens-type.md |
| Y2 | One family with weights, or two that differ (display and text); three or more rarely works | CC §2 "Rules" | Author | adapt | Our research; rewrite as "when" | tokens-type.md |
| Y3 | One family, or display plus text with fixed jobs; at most four font files | TST references/layout-v4.md §5 | MIT | adapt | Keep the file budget with its performance reason; drop "never three" | tokens-type.md |
| Y4 | Task surfaces: one well-tuned family and a fixed rem scale often suffice; display faces stay out of labels, buttons and data | IMP operate.md "Typography"; typeset.md "Visitor mode" | Apache-2.0 | adapt | Soften "clamp headings don't serve product UI" | tokens-type.md |
| Y5 | A subject association is never the reason for a face (books → serif, tech → mono) | IMP new-work.md "4. Commit the world"; craft-floor.md "Refuse" | Apache-2.0 | adopt | Pure anti-convergence criterion | tokens-type.md |
| Y6 | Faces generators currently share need a reason no other face could satisfy | IMP new-work.md "4. Commit the world" | Apache-2.0 | adapt | Keep the rule, drop the named list (it dates and seeds); point to TY11 | tokens-type.md |
| Y7 | Blocklist of named faces (Inter, Roboto, Poppins, Space Grotesk…) | TST references/layout-v4.md §5 | MIT | reject | Absolute ban; the brand may already use one (TY1 "Fine when") | none |
| Y8 | Mono only for code, data or measurement, not as a "technical" costume | IMP craft-floor.md "Refuse" | Apache-2.0 | adopt | Same as TY3 | tokens-type.md |
| Y9 | A system display face as a brand page's display voice is a miss; the system stack is fine on task surfaces | IMP craft-floor.md "Refuse" | Apache-2.0 | adapt | Drop "is a failure"; add the task-surface case | tokens-type.md |
| Y10 | Start from the platform system font before a custom face | EMK skills/apple-design "15. Typography" | MIT | adapt | Only as an option for app and tool UI with no brand face | tokens-type.md |
| Y11 | Before choosing a face: its licence allows web embedding and self-hosting; its subsets cover every script the project uses; prefer variable or subset files | UUP data/google-font-licenses.json; data/google-fonts.csv "Subsets", "Variable Axes"; data/stacks/nextjs.csv rows 22, 24 | MIT | adapt | Selection criteria, not a catalogue | tokens-type.md |
| Y12 | Self-host on the site's own domain; load only the weights and subsets used; `font-display: swap` or `optional`; preload one or two critical files | IMP optimize.md "Optimize Fonts"; craft-floor.md "Refuse"; UUP data/ux-guidelines.csv rows 50, 75 | Apache-2.0; MIT | adapt | Matches OM13 and `implementation.md` §6 | tokens-type.md |
| Y13 | Self-host, subset, preload critical files, `font-display: swap`, metric-matched fallback; variable fonts ship one file | CC §2 "Insider notes" | Author | adopt | Our own research | tokens-type.md |
| Y14 | Google Fonts linked by default; font pairings with Google URLs and `@import` | TST layout-v4.md §5, scripts/start.mjs; UUP data/typography.csv; brand/references/typography-specifications.md "Font Loading" | MIT; MIT (claudekit) | reject | We self-host by default (OM13) | none |
| Y15 | Fonts fetched by a vendor CLI from Google; CDN fonts with `integrity()` | IMP craft-floor.md `font-fetch`; MWG security/secure-external-subresources | Apache-2.0; CC-BY 4.0 | reject | Depends on a binary or on third-party hosting | none |
| Y16 | Fixed font pairings per sector or page kind (39 TST pairs, 74 UUP pairs) | TST library/type.json; UUP data/typography.csv; brand typography-specifications.md "Common Font Pairings" | MIT; MIT (claudekit) | reject | Starter pairs per sector; several are this season's faces | none |
| Y17 | Fallback with matched metrics: `size-adjust` (widely available), `ascent-override` / `descent-override` / `line-gap-override` (no Safari), `font-size-adjust: from-font` | MWG visual-design/visually-stable-font-fallbacks, visually-stable-mixed-fonts; IMP typeset.md "Apply", "Optical alignment" | CC-BY 4.0; Apache-2.0 | adapt | Overrides only as progressive enhancement (table 2) | tokens-type.md |
| Y18 | Per-face size correction table | TST library/type.json `display.scale` | MIT | reject | A table of their faces; Y17 measures instead | none |
| Y19 | One modular scale with a ratio chosen for the density: about 1.125-1.2 for dense product UI, 1.25-1.333 for marketing, 1.5 and up for editorial display | IMP operate.md "Typography"; CC §2 "Rules" | Apache-2.0; Author | adapt | Ranges tied to density, not one ratio | tokens-type.md |
| Y20 | Fixed 1.25 (Major Third) ratio and size table | UUP brand/references/typography-specifications.md "Type Scale" | MIT (claudekit) | reject | One ratio for every project | none |
| Y21 | Type sizes as named scale tokens, the only sizes on the page | TST assets/system.css "type scale" | MIT | adopt | Context-free discipline; names rewritten by role | tokens-type.md |
| Y22 | Few steps named by role (display, headline, title, body, label); no in-between sizes | UUP data/ux-guidelines.csv row 74; quick-reference.md `font-scale`, `text-styles-system` | MIT | adapt | Merge into Y21 | tokens-type.md |
| Y23 | Each heading level visibly larger than the next; a heading never smaller than the text under it | TST references/layout-v4.md §5; scripts/consistency.mjs heading-scale | MIT | adapt | Their 1.3× and 1.2× are claims, not values | tokens-type.md |
| Y24 | Hierarchy from weight, size and leading together, not size alone | EMK skills/apple-design "15. Typography" | MIT | adapt | Rewrite | tokens-type.md |
| Y25 | Fluid display type for persuasion surfaces; a fixed scale for dense product and reading surfaces | IMP typeset.md "Apply"; operate.md "Typography" | Apache-2.0 | adopt | Conditional by surface | tokens-type.md |
| Y26 | `clamp(rem, rem + vw, rem)`, never `vw` alone; keep the maximum within about 2.5× the minimum so zoom still reaches 200 % | MWG visual-design/typography "Responsive Typography"; accessibility/respect-os-text-scale "Fluid Typography" | CC-BY 4.0 | adapt | MUST for the zoom part (WCAG 1.4.4); the 2.5× figure is a rule of thumb (unverified) | tokens-type.md |
| Y27 | Fluid headings as a straight line from a phone size to a desktop size | TST assets/system.css "type scale" | MIT | adapt | Method kept; their sizes are house values | tokens-type.md |
| Y28 | `clamp()` heroes with `vw` and no rem term | UUP data/styles.csv rows 20, 47 | MIT | reject | Fails text resize (1.4.4) | none |
| Y29 | Component type with container units (`cqi`) inside `clamp()`, keeping a rem term | MWG css/fluid-scaling; css-layout "4.1" | CC-BY 4.0 | adapt, deferred | Their own example omits the rem term; fixed in ours | tokens-type.md |
| Y30 | Sizes in rem, unitless line height, no fixed heights on text containers (WCAG 1.4.12) | MWG visual-design/typography "Overall best practices" | CC-BY 4.0 | adapt | Format rules; accessibility part MUST | tokens-type.md |
| Y31 | Never set a root font size (no `62.5 %`); respect the OS text scale (`<meta name="text-scale">`) | MWG accessibility/respect-os-text-scale | CC-BY 4.0 | adapt | The meta is new: "verify before citing" | tokens-type.md |
| Y32 | Body floor 1rem / 16 px unless a dense role, platform or user setting justifies otherwise | IMP typeset.md "Apply" | Apache-2.0 | adopt | Already conditional | tokens-type.md |
| Y33 | Form text at 16 px on phones so the browser doesn't zoom | TST references/system.md "Forms"; UUP data/ux-guidelines.csv row 67 | MIT; MIT | adapt | Already in `responsive.md`; the input text token respects it (cross-reference) | tokens-type.md |
| Y34 | Line height inverse to size, tuned to face, width and language; wider lines need more leading | IMP typeset.md "Apply"; EMK skills/apple-design "15. Typography" | Apache-2.0; MIT | adapt | IMP wording adopted for "not a universal ratio"; the rest rewritten | tokens-type.md |
| Y35 | Line-height and size ranges per role (display 1.05-1.15, body 1.5-1.65…) | CC §2 role table; UUP brand typography-specifications.md "Line Height Guidelines" | Author; MIT (claudekit) | adapt | Starting ranges, not defaults | tokens-type.md |
| Y36 | Light text on dark: a little more line height and tracking, sometimes one weight step | IMP typeset.md "Apply" | Apache-2.0 | adopt | Conditional | tokens-type.md |
| Y37 | Measure 45-75 characters (about 66 is the classic optimum) as a token | CC §2 "Rules" (Bringhurst); IMP typeset.md "Apply" | Author; Apache-2.0 | adapt | One range settles the conflict: IMP 45-75 and 65-75, TST 62, EMK 65, UUP 65-75, MWG 80 | tokens-type.md |
| Y38 | Tracking by size: tighten large display, body at zero, loosen small uppercase labels | EMK skills/apple-design "15. Typography"; CC §2 "Rules"; UUP brand typography-specifications.md "Letter Spacing" | MIT; Author; MIT (claudekit) | adapt | Values depend on the face | tokens-type.md |
| Y39 | Light headline weight with tight tracking as the default look | TST references/layout-v4.md §5 | MIT | reject | One season's look as a default | none |
| Y40 | Tabular figures for prices, tables, timers and changing numbers; proportional figures in prose | UUP quick-reference.md `number-tabular`; TST assets/system.css `.t-stat`, `.rows__value` | MIT; MIT | adopt | Same as TY10 | tokens-type.md |
| Y41 | A number never breaks from its unit | TST references/system.md "Type" | MIT | adopt | Functional rule | tokens-type.md |
| Y42 | `text-wrap: balance` on headings and short blocks, `pretty` on body; never on `*`; not on long boxed blocks | MWG visual-design/typography "Text wrapping"; improve-text-layout-and-legibility; IMP typeset.md "Line breaks"; UUP data/ux-guidelines.csv row 110 | CC-BY 4.0; Apache-2.0; MIT | adapt | `balance` widely available (2026-11-13); `pretty` limited (no Firefox): progressive only | tokens-type.md |
| Y43 | `hyphens: auto` keyed to `lang`, limited to long words; justified text only with hyphenation and a declared language | TST assets/system.css base; MWG visual-design/typography "Readability" | MIT; CC-BY 4.0 | adapt | `hyphenate-limit-chars` support unverified | tokens-type.md |
| Y44 | Long URLs and IDs: `overflow-wrap: anywhere`; never `word-break: break-all` on prose | UUP data/ux-guidelines.csv row 111 | MIT | adapt | Short rewrite | tokens-type.md |
| Y45 | Paragraph rhythm by space or first-line indent, not both | IMP typeset.md "Apply" | Apache-2.0 | adopt | Small, conditional | tokens-type.md |
| Y46 | Avoid ornate or cursive faces and all-caps for reading text; allow them for display when the brief supports it | MWG visual-design/typography "Readability" | CC-BY 4.0 | adapt | Restrict to reading text | tokens-type.md |
| Y47 | Display cuts and optical sizes at large sizes; variable fonts for fine weight steps | CC §2 "Insider notes" | Author | adopt | Our research | tokens-type.md |
| Y48 | Sentence case only; no tracked capitals | TST references/system.md "Type" | MIT | reject | Taste stated as absolute; TY4 already covers the real problem | none |

### 1.4 `tokens-space.md`

| ID | Idea or rule | Source (repo, file, heading) | Licence | Decision | Reason | Target |
|---|---|---|---|---|---|---|
| S1 | A documented spacing scale; a 4-unit base gives middle steps an 8-only scale lacks | IMP layout.md "Apply" | Apache-2.0 | adapt | Base chosen by density, not fixed | tokens-space.md |
| S2 | One scale for every margin, padding and gap (4, 8, 12 … 160) | CC §1 "Rules"; TST assets/system.css "spacing"; UUP primitive-tokens.md "Spacing Scale" | Author; MIT; MIT (claudekit) | adapt | Keep "everything from the scale"; values follow the base, with optical alignment as the documented exception | tokens-space.md |
| S3 | Spacing inside a group visibly smaller than between groups (proximity) | CC §1 "Gestalt proximity" | Author | adopt | Basis of the three named levels | tokens-space.md |
| S4 | Rhythm from contrast between tight and generous intervals; more space above a heading than below; group by proximity before containers | IMP layout.md "Apply"; craft-floor.md "Verify" | Apache-2.0 | adopt | Criteria, no values | tokens-space.md |
| S5 | Semantic aliases over the scale (component, section, page gutter); components use aliases | UUP semantic-tokens.md "Spacing Semantics"; references/pro-rules.md "Section spacing hierarchy"; TST references/system.md "Rhythm tokens" | MIT (claudekit); MIT; MIT | adapt | Becomes the three levels: within, between components, between sections | tokens-space.md |
| S6 | Section padding ranges per device; vary only to group chapters; the most important sections get the most space | CC §1 "Rules", "Insider notes" | Author | adapt | Ranges become a function of the dial | tokens-space.md |
| S7 | Blur test: the page shows blocks with rhythm, not a grey wall | CC §1 "Insider notes" | Author | adopt | Cheap check for "done when" | tokens-space.md |
| S8 | Density declared from use frequency, decision complexity and visitor mode | IMP layout.md "Two isolated assessments", "Set the spatial thesis" | Apache-2.0 | adopt | Fits the dial | tokens-space.md |
| S9 | Density as a higher-order token (`data-density` with `:where()`; container style queries later) | MWG css/design-token-reactivity | CC-BY 4.0 | adapt | Attribute approach by default; style queries not Baseline | tokens-space.md |
| S10 | Density tiers (spacious, standard, dense) that swap the scale | UUP ui-ux-pro-max/SKILL.md "Step 2c: Design Dials" (credits taste-skill) | MIT | adapt | Idea kept; their pixel tiers and 1-10 dial rejected | tokens-space.md |
| S11 | Container as one token: `width: min(100% - 2 * gutter, container)` | TST assets/system.css grid | MIT | adopt | Context-free formula | tokens-space.md |
| S12 | One content width per page type; gutters grow with the viewport; no fixed-pixel containers | UUP references/pro-rules.md "Adaptive gutters by breakpoint", "Consistent content width" | MIT | adapt | Values come from `responsive.md` | tokens-space.md |
| S13 | Fixed `max-w-6xl` / `7xl` containers; fixed device breakpoints (375/768/1024/1440, 640/768/1024) | UUP quick-reference.md `container-width`; IMP adapt.md "Breakpoints" | MIT; Apache-2.0 | reject | Device sizes as defaults; `responsive.md` keeps content-driven breakpoints | none |
| S14 | Container-aware components and `gap` for sibling rhythm; intrinsic sizing with `minmax(min(100%, X), 1fr)` | IMP layout.md "Apply"; MWG css/css-layout "2", "3" | Apache-2.0; CC-BY 4.0 | adapt | IMP sentence adopted, MWG paraphrased | tokens-space.md |
| S15 | Logical properties where the value should flip in right-to-left text | IMP harden.md "RTL"; MWG css/css "1. Foundations" | Apache-2.0; CC-BY 4.0 | adapt | MWG's "would it flip?" test, paraphrased | tokens-space.md |
| S16 | Spacing in rem or em where it is coupled to text, so layout grows with the user's text size | EMK skills/apple-design "15. Typography"; MWG accessibility/respect-os-text-scale | MIT; CC-BY 4.0 | adapt | Only for text-coupled spacing | tokens-space.md |
| S17 | Safe areas with a minimum: `max(<min>, env(safe-area-inset-bottom, 0px))` | MWG user-experience/form-factor-adaptation "Keep UI clear of notches" | CC-BY 4.0 | adapt | `responsive.md` covers safe areas; the minimum is new | tokens-space.md |
| S18 | `scroll-padding` at least the height of fixed bars, so focus is never hidden (2.4.11) | MWG form-factor-adaptation; UUP data/ux-guidelines.csv row 100 | CC-BY 4.0; MIT | adapt | MUST (2.4.11 AA) | tokens-space.md |
| S19 | Target size as a token: 24×24 minimum, 44×44 under `(pointer: coarse)`; size with `min-block-size` or padding; extend icon hit areas with a pseudo-element without overlap | MWG form-factor-adaptation "Size targets for the input method"; accessibility "Target sizes" | CC-BY 4.0 | adapt | MUST 24 (2.5.8), SHOULD 44 (2.5.5 AAA) | tokens-space.md |
| S20 | Never collapse web 24 CSS px, iOS 44 pt and Android 48 dp into one number | UUP data/ux-guidelines.csv rows 22, 104; data/app-interface.csv row 6 | MIT | adopt | Precise; Apple figure corrected (table 2: 44 pt default, 28 pt minimum) | tokens-space.md |
| S21 | Control heights as tokens (button, field) | TST assets/system.css controls | MIT | adapt | Names only; heights follow S19 | tokens-space.md |
| S22 | Pointer and hover media queries size targets by input, not screen | IMP adapt.md "Detect Input Method" | Apache-2.0 | adapt | Already in `responsive.md`; cross-reference | tokens-space.md |
| S23 | Radius as a short scale with roles, chosen from the direction; one root value with derived steps | UUP ui-styling/references/shadcn-theming.md "Radius Customization"; TST references/system.md "Radius and buttons" | MIT (claudekit); MIT | adapt | Roles kept; TST's sector table and UUP's default value rejected | tokens-space.md |
| S24 | Nested radius: inner = outer minus inset, with a floor | TST references/cards.md "panel--inset" | MIT | adopt | Geometric rule | tokens-space.md |
| S25 | Card radii fixed at 12-16 px; radius by sector ("sharp for fintech") | IMP craft-floor.md `<codex>`; TST references/system.md | Apache-2.0; MIT | reject | Defaults that converge every build | none |
| S26 | `corner-shape: squircle` as progressive enhancement when the direction wants it | MWG css/css "9. Shapes" | CC-BY 4.0 | adapt, deferred | Option only; support unverified | tokens-space.md |
| S27 | Elevation declared once (border or shadow); shadows have offset and blur; zero-offset coloured glow is decoration | IMP craft-floor.md "Verify" | Apache-2.0 | adapt | Ties to CO3; drop absolutes | tokens-space.md |
| S28 | A short named shadow scale by purpose (raised, overlay, modal); no ad hoc values | UUP quick-reference.md `elevation-consistent`; primitive-tokens.md "Shadows"; EMK learn-taste "Phase 3" (`shadow-raised`) | MIT; MIT (claudekit); MIT | adapt | Values rejected; names by role | tokens-space.md |
| S29 | Layered shadows for soft depth; `drop-shadow()` for non-rectangular shapes | MWG visual-design/visual-effects "Depth and texture" | CC-BY 4.0 | adapt | Construction note | tokens-space.md |
| S30 | Bigger surfaces read thicker; heavier shadow over busy content | EMK skills/apple-design "12. Materials & depth" | MIT | adapt | Ties elevation to size and context | tokens-space.md |
| S31 | Hard offset shadows only in a direction that chose them; no blurred shadow at rest in flat directions | IMP craft-floor.md "Refuse"; TST references/cards.md "The card" | Apache-2.0; MIT | adapt | Both as "when the direction is…" | tokens-space.md |
| S32 | Z-index as named layers | UUP primitive-tokens.md "Z-Index Scale"; data/ux-guidelines.csv row 15 | MIT (claudekit); MIT | adapt | Small, useful family | tokens-space.md |
| S33 | Trim text boxes on badges and buttons so padding equals the visible gap; not on body text | MWG visual-design/precise-text-alignment | CC-BY 4.0 | adapt, deferred | Progressive; support unverified | tokens-space.md |
| S34 | One to three grounds down the page, changing only at section edges | TST references/backgrounds.md; scripts/consistency.mjs "grounds" | MIT | adapt | Default, not a limit | tokens-space.md |
| S35 | Every section exactly one or two viewport heights | TST references/layout-v4.md §2 | MIT | reject | House layout doctrine; content decides height | none |
| S36 | Dynamic viewport units everywhere | MWG css/responsive-design "Overall best practices" | CC-BY 4.0 | reject | We keep `svh` for heroes and `dvh` for app shells (`responsive.md`) | none |

### 1.5 Links for `resources.md`

| ID | Idea or rule | Source | Licence | Decision | Reason | Target |
|---|---|---|---|---|---|---|
| L1 | WebAIM contrast checker | UUP brand/references/color-palette-management.md "Tools & Resources" | Link | link | Tool | resources.md |
| L2 | Tailwind v4 theme docs; shadcn/ui theming docs | UUP ui-styling/SKILL.md "Resources" | Link | link | Change often | resources.md |
| L3 | google/fonts metadata (licence per family) | UUP data/google-font-licenses.json | Link | link | Licence check before choosing a face | resources.md |
| L4 | Modern Web Guidance and webstatus.dev / Baseline for support status | MWG README; `web-features` | Link | link | Support data changes; "verify before citing" | resources.md |
| L5 | taste-skill's `consistency.mjs` as an optional browser check | TST scripts/consistency.mjs | MIT | link | Needs Node 22 and Chrome; optional | resources.md |
| L6 | next-themes (no-flash theme switching), cva (typed variants) | EMK skills/pick-ui-library "The list" | Link | link | Catalogue | resources.md |
| L7 | DESIGN.md format spec | IMP document.md | Link | link, deferred | See T24 | resources.md |
| L8 | DTCG reports (format, resolver, color) at designtokens.org | Standards | Link | link | Reference for multi-platform projects | resources.md |
| L9 | Coolors: only its contrast checker and editing from a brand colour | Listed in the current `tokens.md` stub | Link; site licence not needed for a link | link | Its random generator is a starter-palette source (C40); say so | resources.md |
| L10 | Fontshare | Current `tokens.md` stub | Link; per-font licence to check | link | Free faces; check each licence for self-hosting | resources.md |
| L11 | Fonts In Use | Current `tokens.md` stub | Link | link | Real usage across sectors: supports the "cited references" step | resources.md |
| L12 | Fontesk | Current `tokens.md` stub | Link; licences vary per font | link | Aggregator; verify each licence | resources.md |
| L13 | impeccable.style as a companion | Current `tokens.md` stub | Link | link | Already recommended in the README | resources.md |
| L14 | Random palette generators (Color Hunt and similar) | UUP color-palette-management.md "Tools & Resources" | — | reject | Starter palettes | none |

### 1.6 Other rejections (outside tokens, recorded so nothing is copied)

| ID | Idea or rule | Source | Licence | Decision | Reason | Target |
|---|---|---|---|---|---|---|
| X1 | "Realistic data with plausible values"; "author every blank at production fidelity"; synthetic demo data | IMP mode-operate.md; new-work.md | Apache-2.0 | reject | Content-truth: missing content is a marked placeholder | none |
| X2 | Stock imagery with checked URLs | IMP new-work.md | Apache-2.0 | reject | Stock photos as the business's own | none |
| X3 | "Use realistic sample data" | UUP data/ux-guidelines.csv row 87 | MIT | reject | Content-truth | none |
| X4 | "Plausible hours and prices" marked `data-assumed` | TST SKILL.md step 2 | MIT | reject | Content-truth | none |
| X5 | Python search and generator workflow (search.py, design_system.py, tailwind_config_gen.py, shadcn_add.py) | UUP ui-ux-pro-max/SKILL.md "Running the search tool" | MIT | reject | Python dependency; outputs sector defaults | none |
| X6 | Vendor binaries and process gates (impeccable detect/shot/live; taste gate.mjs, start.mjs dealing) | IMP; TST | Apache-2.0; MIT | reject | Tool dependency; dealing by trade | none |
| X7 | "Good defaults matter more than options" | EMK skills/emil-design-eng "The Sonner Principles" | MIT | reject | Pushes default "tasteful" values | none |
| X8 | Mandatory Before/After review table | EMK skills/emil-design-eng "Review Format" | MIT | reject | Out of scope | none |
| X9 | "Thin fonts preferred (200-300)" | UUP ui-styling/references/canvas-design-system.md | Apache-2.0, holder unknown | reject | Legibility; unclear provenance | none |
| X10 | Countdown or testimonials recommended per sector | UUP data/ui-reasoning.csv rows 60, 70 | MIT | reject | Ethics and content-truth when no real data exists | none |

### 1.7 Counts

207 rows: 40 adopt, 118 adapt, 35 reject, 14 link. By target: T 30, C 69, Y 48, S 36, L 14, X 10.

A row can cite several sources, so the columns below add up to more than 207. A row counts for a source when that source appears in its source cell.

| Source | adopt | adapt | reject | link |
|---|---|---|---|---|
| IMP | 23 | 29 | 8 | 2 |
| TST | 9 | 23 | 16 | 1 |
| UUP | 3 | 36 | 15 | 3 |
| EMK | 0 | 16 | 3 | 1 |
| MWG | 0 | 39 | 3 | 1 |
| CC (author) | 6 | 11 | 0 | 0 |
| Standards and stub links | 0 | 0 | 0 | 6 |

### 1.8 Phase B: where each row landed

Changes approved on 2026-11-25 and applied:

- Apple 44 × 44 pt is cited as the HIG's default control size and 28 × 28 pt as its minimum. Ours stays MUST 24 × 24 CSS px (2.5.8) and SHOULD 44 px for primary actions under `(pointer: coarse)`.
- `text-wrap: pretty` and the `*-override` descriptors appear only as progressive enhancement, with what happens without support. `size-adjust` is a normal recommendation.
- `light-dark()` is a dated example with a `prefers-color-scheme` fallback.
- 7:1 appears only as a "When it flips" (C43).
- Unverified claims stay out of the skills (`ROADMAP.md`, "Pending verification").

Rows that say the same thing from several sources were merged into one rule in the files, crediting every source in that rule's Source line. The 35 reject rows (T23, T28, C19, C29, C31, C40, C41, C44, C52, C67, C69, Y7, Y14-Y16, Y18, Y20, Y28, Y39, Y48, S13, S25, S35, S36, L14, X1-X10) are not used.

| Target | Rows used |
|---|---|
| `tokens.md` | T1-T22, T25-T27, C30 (scene sentence, by reference), C57, S19-S20 (target tokens) |
| `tokens-color.md` | C1-C18, C20-C28, C42, C43, C45-C51, C53-C56, C58-C62, C64-C66 |
| `tokens-color-dark.md` | C30, C32-C39 |
| `tokens-type.md` | Y1-Y6, Y8-Y13, Y17, Y19, Y21-Y27, Y30-Y38, Y40-Y47 |
| `tokens-space.md` | S1-S12, S14-S24, S27-S32, S34 |
| `resources.md` | L1-L6, L8-L13 |

**Deferred (9):**

| ID | Why |
|---|---|
| T24, L7 | DESIGN.md spec URL not verified |
| T29 | Belongs to `motion.md` |
| T30 | Belongs to `design-review` |
| C63 | `contrast-color()` support not verified |
| C68 | Brand-band recipe; contrast MUST already covers the failure |
| Y29 | Container-unit type not verified |
| S26 | `corner-shape` support not verified |
| S33 | `text-box` support not verified |

Parts dropped from rows that were otherwise used, all because they are unverified:

- C16: the Chromium `oklch` bug.
- C61: the Safari `accent-color` caveat.
- Y17: `font-size-adjust: from-font`.
- Y26: the 2.5× rule.
- Y31: `<meta name="text-scale">`.

## 2. Standards and support facts

Checked at the original source on 2026-11-25. Skills cite these, never the figures inside the reference skills.

| Fact | URL | Status |
|---|---|---|
| WCAG 2.2 is a W3C Recommendation (12 December 2024) | https://www.w3.org/TR/WCAG22/ | verified |
| 1.4.1 Use of Color (A): colour is not the only visual means of conveying information, indicating an action, prompting a response or distinguishing an element | https://www.w3.org/TR/WCAG22/#use-of-color | verified |
| 1.4.3 Contrast (Minimum) (AA): 4.5:1 for text, 3:1 for large-scale text; exceptions for incidental text and logotypes | https://www.w3.org/TR/WCAG22/#contrast-minimum | verified |
| Large-scale text is at least 18 pt, or 14 pt bold; the Understanding document gives about 24 px and 18.5 px (non-normative) | https://www.w3.org/TR/WCAG22/#dfn-large-scale · https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | verified |
| 1.4.6 Contrast (Enhanced) (AAA): at least 7:1 for text and images of text, 4.5:1 for large-scale text; same incidental and logotype exceptions as 1.4.3 | https://www.w3.org/TR/WCAG22/#contrast-enhanced | verified (page text, 2026-11-25) |
| WCAG 2.2 document licence: "Copyright © 2020-2024 World Wide Web Consortium. W3C® liability, trademark and document use rules apply."; "document use" links to the W3C Document License, 2023 version | https://www.w3.org/copyright/document-license/ | verified |
| 1.4.4 Resize Text (AA): text resizes to 200 % without assistive technology and without loss of content or function | https://www.w3.org/TR/WCAG22/#resize-text | verified |
| 1.4.11 Non-text Contrast (AA): 3:1 against adjacent colours for what identifies UI components and their states, and for meaningful graphics; exceptions for inactive components and unmodified user-agent appearance | https://www.w3.org/TR/WCAG22/#non-text-contrast | verified |
| 2.4.7 Focus Visible (AA) | https://www.w3.org/TR/WCAG22/#focus-visible | verified |
| 2.4.11 Focus Not Obscured (Minimum) (AA): a focused component is not entirely hidden by author content; 2.4.12 (AAA) requires no part hidden | https://www.w3.org/TR/WCAG22/#focus-not-obscured-minimum | verified |
| 2.4.13 Focus Appearance (AAA): indicator area at least a 2 CSS px perimeter of the component, 3:1 between focused and unfocused states | https://www.w3.org/TR/WCAG22/#focus-appearance | verified |
| 2.5.5 Target Size (Enhanced) (AAA): 44×44 CSS px, exceptions equivalent, inline, user agent, essential | https://www.w3.org/TR/WCAG22/#target-size-enhanced | verified |
| 2.5.8 Target Size (Minimum) (AA): 24×24 CSS px, exceptions spacing (24 px circles), equivalent, inline, user agent, essential | https://www.w3.org/TR/WCAG22/#target-size-minimum | verified |
| Apple HIG: iOS/iPadOS default control size 44×44 pt, minimum 28×28 pt | https://developer.apple.com/design/human-interface-guidelines/accessibility | partly verified: read through the HIG data endpoint; "44 pt minimum" is outdated wording |
| Baseline: "newly available" when in all core browsers; "widely available" 30 months later | https://web.dev/baseline | verified |
| `oklch()` / `oklab()`: Baseline widely available (newly 2023-05-09, widely 2025-11-09) | https://webstatus.dev/features/oklab | verified |
| `color-mix()`: widely available (newly 2023-05-09, widely 2025-11-09); three or more colours limited | https://webstatus.dev/features/color-mix | verified |
| `light-dark()`: widely available (newly 2024-05-13, widely 2026-11-13); image values are a separate, newer feature | https://webstatus.dev/features/light-dark | verified |
| `text-wrap: balance`: widely available (newly 2024-05-13, widely 2026-11-13) | https://webstatus.dev/features/text-wrap-balance | verified |
| `text-wrap: pretty`: limited (Chrome/Edge 117, Safari 26, no Firefox) | https://webstatus.dev/features/text-wrap-pretty | verified |
| `@font-face size-adjust`: widely available, across browsers since September 2023 | https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/size-adjust | partly verified (MDN only; no separate webstatus entry) |
| `ascent-override`, `descent-override`, `line-gap-override`: limited (Chrome/Edge 87, Firefox 89, not in stable Safari) | https://webstatus.dev/features/font-metric-overrides | verified |
| `prefers-reduced-motion`, `prefers-color-scheme`: widely available (2022-07-15) | https://webstatus.dev/features/prefers-reduced-motion · https://webstatus.dev/features/prefers-color-scheme | verified |
| `color-scheme` property: widely available (2024-08-03) | https://webstatus.dev/features/color-scheme | verified |
| `:focus-visible`: widely available (2024-09-14) | https://webstatus.dev/features/focus-visible | verified |
| Design Tokens Format Module 2025.10: Final Community Group Report of the Design Tokens Community Group, 28 October 2025, "not a W3C Standard nor … on the W3C Standards Track" | https://www.designtokens.org/TR/2025.10/format/ | verified (its status section also says "Candidate Recommendation"; cite "Final Community Group Report") |
| Format: `.tokens` or `.tokens.json`, media type `application/design-tokens+json`; a token has a required `$value`, optional `$type` (inheritable from its group) and `$description`; aliases `{group.token}`, plus `$ref` JSON Pointer; groups extend with `$extends` | https://www.designtokens.org/TR/2025.10/format/ | verified |
| Resolver Module 2025.10 (same date and status): sets merged in order and modifiers (light, dark, high contrast…) combined in a resolution order; `.resolver.json` | https://www.designtokens.org/TR/2025.10/resolver/ | verified |
| Color Module 2025.10: colour `$value` is an object with `colorSpace` and `components` (optional `alpha`, `hex`); 14 colour spaces including `oklch` | https://www.designtokens.org/TR/2025.10/color/ | verified |
| Tailwind v4: theme variables in `@theme { … }` also generate utilities; namespaces `--color-*`, `--font-*`, `--text-*`, `--font-weight-*`, `--tracking-*`, `--leading-*`, `--breakpoint-*`, `--container-*`, `--spacing-*`, `--radius-*`, `--shadow-*`, `--ease-*`, `--animate-*` and others; `@theme inline` when a variable references another | https://tailwindcss.com/docs/theme | verified |
| Latest stable Tailwind release v4.3.5 (2026-11-06) | https://github.com/tailwindlabs/tailwindcss/releases/latest | verified; the patch will move ("verify before citing") |

**Not verified: these are not written as facts.**

- Safari 17 as the version that added `size-adjust`.
- Tailwind v4's single `--spacing` base variable (the docs list the namespace as `--spacing-*`).
- Android 48 dp minimum target (only from IMP's `android.md` and UUP).
- iOS Safari zooming focused inputs under 16 px (widely repeated; Apple doesn't document it). It already appears in `responsive.md`.
- MWG's claims:
  - a Chromium bug giving `oklch` neutrals a reddish hue;
  - `<meta name="text-scale">`;
  - the "maximum within 2.5× the minimum" rule for `clamp()`;
  - forced colours removing `box-shadow`;
  - Safari's `accent-color` caveat;
  - support for `contrast-color()`, `text-box`, `corner-shape`, `hyphenate-limit-chars`, `font-size-adjust: from-font` and container style queries.
- MDN prose licence (CC-BY-SA 2.5), relevant because MWG says parts derive from MDN.
- UUP's DTCG `$schema` URL and next/font behaviour.

## 3. Coverage

Each point of the phase B brief, with what covers it.

**`tokens.md`**

- Purpose (turn the brief into reusable decisions once, before components): no source; written from `direction.md` hand-off and `implementation.md` §4.
- Three tiers, components read roles, themes remap the semantic tier, names by role: T1, T2, T4, T5, T6, T7, T16.
- Brief to tokens (dial decides density, section rhythm, motion budget; motion names reserved): T26, T27; the dial link has no source and is written from `reasoning.md` §3.
- Method against convergence:
  - derive from promise and real material, references from other sectors, an explicit constraint, one line per choice citing the brief: no source; written from `direction.md` and CLAUDE.md;
  - checks against TY11, CO8 and CO1: T15, C18, C22, C24, Y5, Y6;
  - brand wins: T12, T13.
- Mandatory tokens:
  - focus: C54, C55, C56, C57 and table 2;
  - targets: S19, S20, S21 and table 2;
  - placeholder styles: no outside source; from `content-truth.md`;
  - reduced motion: T27.
- Format: T19, T20, T21, T22, T23 and table 2 (DTCG, Tailwind); the `implementation.md` link is ours.
- Registry (site-decisions cites names, asks on mismatch): T11, T17, T25; template rule ours.
- What to read next: ours.
- Done when: T18, C42, C53, C54; the rest is ours.

**`tokens-color.md`**

- Roles: C1, C2, C3, C4, C20.
- Action never used for status: C5, C8 (rewritten); the rule itself has no source and is written from our own test history, which the file doesn't cite.
- OKLCH scales, `color-mix()` for derived states: C10-C16, C64 and table 2 (both verified).
- Contrast MUST: C42, C43, C45, C46, C47 and table 2.
- Colour never the only signal: C48, C49, C50 and table 2.
- Dark mode as reassignment: C30, C32-C39; `light-dark()` dated from table 2.
- States: C15, C51, C52, C53; hover gating from `responsive.md`.
- Palette with no user brand is a design assumption: no outside source; from `direction.md` and `content-truth.md`.
- Tinted neutrals only as "do X when Y": C18 (adopt), C19 (reject).

**`tokens-type.md`**

- Choose by function: Y1-Y4, Y8-Y10.
- Before choosing (licence, self-hosting, variable or subset, languages): Y11, Y12, Y13.
- Scale with a reason by density: Y19, Y21, Y22, Y23, Y24.
- Fluid `clamp()` with rem: Y25, Y26, Y27, Y29, Y30, Y31 and table 2 (1.4.4).
- Line height and measure: Y34-Y37.
- Fallback metrics: Y17 and table 2 (`size-adjust` widely; overrides limited).
- Tabular figures and `text-wrap`: Y40, Y41, Y42 and table 2.
- Refers to TY11 instead of listing faces: Y5, Y6, Y7.

**`tokens-space.md`**

- Scale with a base by density, everything from it, optical exception: S1, S2 (exception written by us).
- Three named levels: S3, S4, S5.
- Section rhythm by the dial: S6, S7, S34.
- Containers, gutters and safe areas: S11-S17; `responsive.md`.
- Radii and elevation: S23-S31, C60.
- Density (expert vs entry, never below target minimums): S8, S9, S10, S19.

## 4. Anti-seed list

Businesses already used as examples in `skills/` and `docs/examples/` (grep, 2026-11-25), which the new files must not use:

- Bakery (with chocolate and "flour" white).
- Veterinary clinic.
- Bicycle repair workshop.
- Physiotherapy practice.
- Warehouse dashboard.
- Ferry line.
- Sailing school.
- Logistics / night-shift dispatch.
- Translation agency.
- Language school.
- Fishmonger, florist, coffee roaster / café.
- Ceramics studio, wine shop.
- Dental clinic booking tool.
- Running-shoe shop.
- Internal support console.
- Hotel (the real cases in `ethics.md` and `principles.md`).

The sources add more, which we also avoid:

- guesthouse, restaurant, yoga studio, brewery, bike shop, coffee beans (TST);
- "Serenity Spa", "Ops Console", AI search homepage (UUP);
- the "daily-grind" coffee shop (MWG evals);
- the allergy-aware recipe app (EMK).

Examples in the four files will come from businesses outside both lists, one per file, with no repeats.
