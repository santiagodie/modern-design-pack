# Third-Party Notices

modern-design-pack is released under the MIT License (see `LICENSE`). Some parts of the skills adapt or summarise material from third parties. Each piece is listed below with its original licence and copyright notice.

The full list of sources consulted, including those only linked, is in `docs/SOURCES.md`.

The ideas below were rewritten in our own words and reorganised. The only exceptions are short quoted sentences in the tokens references (`skills/modern-design/references/tokens*.md`), taken from Impeccable (Apache-2.0) and ui-ux-pro-max-skill (MIT). Each one is in quotation marks with its source named next to it. The entries below credit the authors and meet the attribution terms of their licences.

## Entries

### frontend-design (Anthropic)

- **URL:** https://github.com/anthropics/skills/tree/main/skills/frontend-design
- **Author / copyright holder:** Anthropic
- **License:** Apache License 2.0 (`LICENSE.txt` in the skill folder), https://www.apache.org/licenses/LICENSE-2.0
- **Used in:** `skills/modern-design/references/direction.md`
- **What was used:** the approach of naming a concrete subject, audience and main job; planning colors, type and layout before coding and reviewing that plan against the brief; the list of generator defaults to check a direction against; spending boldness on one element.
- **Changes:** rewritten in our own words, combined with other sources, and organised into a brief-writing process with an output template.

### mobile-native (Emil Kowalski)

- **URL:** https://github.com/emilkowalski/skills/tree/main/skills/mobile-native
- **Author / copyright holder:** Emil Kowalski (Copyright (c) 2026 Emil Kowalski)
- **License:** MIT, https://opensource.org/license/mit
- **Used in:** `skills/modern-design/references/responsive.md`, `skills/design-review/references/visual-qa.md`, `skills/design-review/references/mobile-checklist.md` (MN1–MN5)
- **What was used:** the capability-first approach to touch (hover and pointer queries, `svh` and `dvh`, safe areas with `viewport-fit=cover`, 16 px inputs, `touch-action`, tap highlight with `:active` feedback, selection on controls only, overscroll behaviour) and the list of what emulation can't reproduce.
- **Changes:** rewritten in our own words, merged with the author's research, extended with a tablet section and with measurable checks and a detection script of our own.

### unslop

- **URL:** https://github.com/heydamir/unslop
- **Author / copyright holder:** Damir Sokolovsky (@heydamir)
- **License:** Creative Commons Attribution 4.0 International (CC BY 4.0), https://creativecommons.org/licenses/by/4.0/
- **Used in:** `skills/design-review/references/unslop-type-color.md`, `skills/design-review/references/unslop-layout.md`, `skills/design-review/references/unslop-components.md`, `skills/design-review/references/copy-states-checklist.md`
- **What was used:** ideas for detecting generic AI-made UI patterns (gradients and glows, emoji icons, nested radii, filler visuals, decorative loops, copy tells, the template test).
- **Changes:** rewritten in our own words, merged with other sources, reorganised by category, and given context exceptions and report severities. Not endorsed by the original author.

### Impeccable

- **URL:** https://github.com/pbakaus/impeccable (https://impeccable.style)
- **Author / copyright holder:** Paul Bakaus
- **License:** Apache License 2.0, https://www.apache.org/licenses/LICENSE-2.0
- **Used in:** `skills/design-review/references/unslop-type-color.md`, `skills/design-review/references/unslop-layout.md`, `skills/design-review/references/unslop-components.md`, `skills/design-review/references/copy-states-checklist.md`; `skills/modern-design/references/tokens.md`, `tokens-color.md`, `tokens-color-dark.md`, `tokens-type.md`, `tokens-space.md`
- **What was used:**
  - In the checklists: ideas on anti-patterns (identical card grids, eyebrow labels, numbered sections, side accent bars, monospace as decoration, glass as decoration, ghost cards, icon tiles, cream defaults, formula copy) and quality checks (contrast floors, tracking, measure, states, heading outline). Some of these ideas come from the catalogue at https://impeccable.style/slop, whose site text has no stated licence; only the ideas were summarised.
  - In the tokens references: rules from `skill/reference/colorize.md`, `typeset.md`, `layout.md`, `new-work.md`, `operate.md`, `polish.md`, `document.md`, `craft-floor.md`, `optimize.md` and `harden.md` (commit `9e460a8`). They cover color roles and strategy, OKLCH ramps, tinted neutrals, dark themes, names by purpose, type roles and line height, the spacing base, rhythm and density.
- **Changes:** files modified. Ideas were rewritten in our own words and merged with other sources. Bans were turned into context-dependent rules. Fifteen short sentences are quoted verbatim and credited in place. Impeccable's automated checks and its NOTICE-listed material (`ios.md`, `android.md`, fonts, autoconsent) were not used.

### Taste Skill

- **URL:** https://github.com/Leonxlnx/taste-skill (https://tasteskill.dev)
- **Author / copyright holder:** Leon Lin and blueemi (Copyright (c) 2026 Leonxlnx)
- **License:** MIT, https://opensource.org/license/mit
- **Used in:** `skills/design-review/references/unslop-type-color.md`, `skills/design-review/references/unslop-layout.md`, `skills/design-review/references/unslop-components.md`, `skills/design-review/references/copy-states-checklist.md`, `skills/modern-design/references/direction.md`, `skills/modern-design/references/tokens*.md`
- **What was used:**
  - Checklist: ideas on showing the real product, effects that don't fit the business, scroll-triggered card animations and mobile checks.
  - Direction: writing down the real material before building, marking assumed facts, deciding structure by kind of business, and planning one line per section.
  - Tokens (`assets/system.css`, `references/system.md`, `backgrounds.md`, `cards.md`, `layout-v4.md`, `motion.md`; commit `d1a2bb4`):
    - the tier model with grounds that remap roles;
    - action kept separate from accent, and lines and states derived with `color-mix()`;
    - darkening a brand color until it passes;
    - the focus ring, type scale tokens, tabular figures, numbers kept with their unit;
    - the container formula, nested radii and motion token names.
- **Changes:** rewritten in our own words and merged with other sources. Not used: its seeded per-kind palette selection, its fixed palette and font-pairing libraries, Google Fonts links, hue and font bans, and fixed section lists.

### ui-ux-pro-max-skill (Next Level Builder)

- **URL:** https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
- **Author / copyright holder:** Next Level Builder (Copyright (c) 2024 Next Level Builder). The `design-system`, `ui-styling` and `brand` skills inside the repo name "claudekit" as their author.
- **License:** MIT, https://opensource.org/license/mit
- **Used in:** `skills/modern-design/references/tokens.md`, `tokens-color.md`, `tokens-color-dark.md`, `tokens-type.md`, `tokens-space.md`
- **What was used** (commit `8db3633`):
  - From `ui-ux-pro-max/data/ux-guidelines.csv`, `references/quick-reference.md`, `pro-rules.md`, `colors.csv` (column set and notes), `landing.csv`, `app-interface.csv` and `google-fonts.csv`:
    - keeping AA and AAA focus criteria apart;
    - keeping web, iOS and Android target sizes apart;
    - tabular figures (one sentence quoted);
    - measuring real contrast pairs;
    - adjusting a brand color per role;
    - state parity across themes;
    - checking font licences and subsets.
  - From the claudekit skills (`design-system/references/token-architecture.md`, `primitive-tokens.md`, `semantic-tokens.md`, `ui-styling/references/shadcn-theming.md`, `tailwind-customization.md`, `brand/references/typography-specifications.md`):
    - the three-tier model and the naming grammar;
    - status and state roles;
    - the radius root value, the shadow and z-index scales;
    - tracking by role;
    - DTCG and Tailwind `@theme` as formats.
- **Changes:** rewritten in our own words, apart from one quoted sentence. Not used: per-sector palettes, font pairings with Google Fonts links, style presets, the Python tooling, and all of its fixed values.

### emilkowalski/skills (Emil Kowalski)

- **URL:** https://github.com/emilkowalski/skills
- **Author / copyright holder:** Emil Kowalski (Copyright (c) 2026 Emil Kowalski)
- **License:** MIT, https://opensource.org/license/mit
- **Used in:** `skills/modern-design/references/tokens.md`, `tokens-color.md`, `tokens-type.md`, `tokens-space.md` (mobile-native is listed separately above)
- **What was used** (commit `64eb3de`, from `skills/apple-design`, `animate`, `learn-taste`, `emil-design-eng` and `ui-cheatsheet.md`):
  - tracking and line height by size;
  - hierarchy from weight, size and leading;
  - the system font as an option for tool UI;
  - material and elevation criteria;
  - reduced-transparency handling;
  - eased gradient stops;
  - motion token names by role;
  - extending existing tokens;
  - recording the user's decisions with their reason.
- **Changes:** rewritten in our own words. Its fixed glass recipe and its review format were not used.

### Modern Web Guidance (Google)

- **URL:** https://github.com/GoogleChrome/modern-web-guidance-src (docs: https://developer.chrome.com/docs/modern-web-guidance)
- **Author / copyright holder:** Google LLC (Chrome for Developers)
- **License:** guide content under `guides/` is Creative Commons Attribution 4.0 International (CC BY 4.0), https://creativecommons.org/licenses/by/4.0/; code is Apache-2.0. The source says parts of the guides derive from MDN Web Docs (Mozilla Contributors, CC BY-SA 2.5).
- **Used in:** `skills/modern-design/references/tokens.md`, `tokens-color.md`, `tokens-color-dark.md`, `tokens-type.md`, `tokens-space.md`
- **What was used** (commit `92686ac`), facts and techniques from `guides/`:
  - from `visual-design/` (color, dark-mode, browser-ui-theming, typography, visually-stable-font-fallbacks, visual-effects): contrast for borders, states and focus; `light-dark()` with raw values kept apart; why `@property` `<color>` breaks themes; scoped color schemes; text over gradients; browser UI theming; forced colors; `prefers-contrast`; fluid type with a `rem` term and no root font size; `text-wrap`; fallback metrics;
  - from `css/` (css, css-layout, design-token-reactivity): tiers sized to the project; layered shadows; logical properties; `gap`; density as a higher-order token;
  - from `accessibility/` and `user-experience/form-factor-adaptation`: target size tokens; `scroll-padding` for fixed bars.
- **Changes:** facts only, in our own wording and order (because of the MDN-derived prose); statements written as conditions instead of MANDATORY/DO NOT. Not endorsed by Google.

### Standards cited

- **WCAG 2.2** (W3C Recommendation, 12 December 2024), https://www.w3.org/TR/WCAG22/: success criteria 1.4.1, 1.4.3, 1.4.4, 1.4.6, 1.4.11, 2.4.7, 2.4.11, 2.4.13, 2.5.5 and 2.5.8 are cited by number and summarised in the tokens references. Copyright © 2020-2024 World Wide Web Consortium, under the W3C Document License (2023 version, https://www.w3.org/copyright/document-license/); no text reproduced beyond short criterion names.
- **Design Tokens Format Module, Resolver Module and Color Module 2025.10** (Design Tokens Community Group, Final Community Group Reports, 28 October 2025), https://www.designtokens.org/TR/2025.10/: file format facts (`.tokens.json`, `$value`, `$type`, aliases, sets and modifiers) summarised in `tokens.md`. Not a W3C Standard.
- **Apple Human Interface Guidelines, Accessibility**, https://developer.apple.com/design/human-interface-guidelines/accessibility: the default (44 × 44 pt) and minimum (28 × 28 pt) control sizes, cited as figures.

### Author's research

`docs/research/landing-field-guide/04_CROSS_CUTTING.md` (sections 1, 2, 3 and 13: spacing, type, color and dark mode) is the author's own research, written with Claude and released with this repository under MIT. It is adapted in the tokens references and credited there as "the author's research".

### Web Interface Guidelines

- **URL:** https://github.com/vercel-labs/web-interface-guidelines (https://vercel.com/design/guidelines)
- **Author / copyright holder:** Vercel
- **License:** MIT, https://opensource.org/license/mit
- **Used in:** `skills/design-review/references/visual-qa.md`, `skills/design-review/references/unslop-type-color.md`, `skills/design-review/references/unslop-layout.md`, `skills/design-review/references/unslop-components.md`, `skills/design-review/references/copy-states-checklist.md`
- **What was used:** guidance on tap target sizes, focus states, text wrapping, layout shift, loading timing, reduced motion, safe areas and mobile input sizes.
- **Changes:** rewritten in our own words and mapped to checks at 375, 768 and 1440 px. The Vercel-specific section was not used.

### SkillEvaluator CI workflow (NVIDIA)

- **URL:** https://github.com/NVIDIA/SkillEvaluator (file `ci/bundles/1.0.1/skill-checks.yml`)
- **Author / copyright holder:** NVIDIA Corporation & Affiliates
- **License:** Apache License 2.0, https://www.apache.org/licenses/LICENSE-2.0
- **Used in:** `.github/workflows/skill-checks.yml`
- **What was used:** the release workflow file, copied unmodified (SHA-256 `c192e32cf40cf42c789d9ec326114a18f7a1e723fe7333cf9fe8210e00dfa73f`, matching the bundle's `SHA256SUMS.txt`). Its SPDX header is kept.
- **Changes:** none. It calls NVIDIA's reusable workflow and container image, pinned by commit SHA and digest, at run time.

### Hallmark

- **URL:** https://github.com/Nutlope/hallmark
- **Author / copyright holder:** Hallmark contributors (Copyright (c) 2026 Hallmark contributors)
- **License:** MIT, https://opensource.org/license/mit
- **Version used:** commit `04977e15f3dfd6ee4b74c887dac3eb52665d6c92` (2026-11-11), read on 2026-11-25
- **Used in:** `skills/design-review/references/review-method.md`, `skills/design-review/references/regression-check.md`, `skills/design-review/references/unslop-type-color.md`, `skills/design-review/references/unslop-layout.md`, `skills/design-review/references/unslop-components.md`, `skills/design-review/references/copy-states-checklist.md`, `skills/design-review/scripts/inventory.js`, `skills/design-review/scripts/inventory-diff.js`, `skills/modern-design/references/content-truth.md`
- **What was used:**
  - The Floor, Reflex and Finish tiers and the rule that a waiver must give a reason specific to the page (`skills/hallmark/references/gates.md` §1–§2), mapped to our report sections.
  - Reviews in a fresh context, without the builder's transcript (`gates.md` §6).
  - The redesign check: record links, forms, fields and headings before a redesign and report what is missing afterwards (`scripts/sloplint.mjs` `--before` and `--kept`, `references/redesign.md` "Before" and "After").
  - Signals adapted as checklist entries: TY12–TY14, CO10, LA11–LA19, CP10–CP14, CY9, CY10, SF10–SF12, MO6 (gates 10a, 17, 39a, 42, 44d, 47a, 47b, 49a, 49b, 56, 58, 66, 68, 69, 70, 73, 74, 77, 78, 79, 80, 81, 82, 83, 84, 85, and finish checks F1 and F2).
- **Changes:** rewritten in our own words as context rules with a "Fine when" line; no text quoted and no code copied (`inventory.js` and `inventory-diff.js` are our own and work in the browser through `playwright-cli`, not on source files). Not used: its "house rules" as Floor (eyebrow, tracked capitals, word budget, template punctuation), its numeric thresholds as rules, its photo-library stand-ins (they conflict with our no-invention rule), the CSS stamp (we record decisions in `site-decisions.md`), its themes and its edit-time hook.

MIT License

Copyright (c) 2026 Hallmark contributors

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

### Ideas without a stated licence

Ideas from these sources were used in rewritten form only, with credit and no reuse of their wording: Instagram posts by @charles.unemployed and @millee.md, three shared screenshots whose authors are not yet identified (the third is a list of AI slop indicators, used in the three unslop checklists (`unslop-type-color.md`, `unslop-layout.md`, `unslop-components.md`) and `copy-states-checklist.md`), the names of laws from Laws of UX (https://lawsofux.com) by Jon Yablonski, and the legacy-to-modern direction of Chrome's Modern Web Guidance (https://developer.chrome.com/docs/modern-web-guidance) by Chrome for Developers (its guides are CC BY 4.0, see its entry above), used for the "Outdated, measurable" section in `outdated-checklist.md` (the detection script is our own). `direction.md` also uses rewritten ideas from Figma's articles "What is web design" and "Tendencias de diseño web" (content before visuals, mobile first, performance as a design input, choosing from audience and brand values), and follows Impeccable's convention of `PRODUCT.md` and `DESIGN.md` files without reproducing their format. See `docs/SOURCES.md`.

## Entry template

Copy this block for each adapted source.

```markdown
### <Source name>

- **URL:** <link>
- **Author / copyright holder:** <name>
- **License:** <SPDX identifier or licence name>
- **Used in:** `skills/<skill>/...`
- **What was used:** <adapted code / summarised ideas / ...>
- **Changes:** <what was changed>

<Full licence text or required notice, if the licence asks for it>
```
