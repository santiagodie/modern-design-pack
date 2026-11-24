# Third-Party Notices

modern-design-pack is released under the MIT License (see `LICENSE`). Some parts of the skills adapt or summarise material from third parties. Each piece is listed below with its original licence and copyright notice.

The full list of sources consulted, including those only linked, is in `docs/SOURCES.md`.

No text or code from these sources is copied. The ideas below were rewritten in our own words and reorganised. They are listed here to credit the authors and to meet the attribution terms of their licences.

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
- **Used in:** `skills/modern-design/references/responsive.md`, `skills/design-review/references/visual-qa.md`, `skills/design-review/references/unslop-checklist.md` (MN1–MN5)
- **What was used:** the capability-first approach to touch (hover and pointer queries, `svh` and `dvh`, safe areas with `viewport-fit=cover`, 16 px inputs, `touch-action`, tap highlight with `:active` feedback, selection on controls only, overscroll behaviour) and the list of what emulation can't reproduce.
- **Changes:** rewritten in our own words, merged with the author's research, extended with a tablet section and with measurable checks and a detection script of our own.

### unslop

- **URL:** https://github.com/heydamir/unslop
- **Author / copyright holder:** Damir Sokolovsky (@heydamir)
- **License:** Creative Commons Attribution 4.0 International (CC BY 4.0), https://creativecommons.org/licenses/by/4.0/
- **Used in:** `skills/design-review/references/unslop-checklist.md`
- **What was used:** ideas for detecting generic AI-made UI patterns (gradients and glows, emoji icons, nested radii, filler visuals, decorative loops, copy tells, the template test).
- **Changes:** rewritten in our own words, merged with other sources, reorganised by category, and given context exceptions and report severities. Not endorsed by the original author.

### Impeccable

- **URL:** https://github.com/pbakaus/impeccable (https://impeccable.style)
- **Author / copyright holder:** Paul Bakaus
- **License:** Apache License 2.0, https://www.apache.org/licenses/LICENSE-2.0
- **Used in:** `skills/design-review/references/unslop-checklist.md`
- **What was used:** ideas on anti-patterns (identical card grids, eyebrow labels, numbered sections, side accent bars, monospace as decoration, glass as decoration, ghost cards, icon tiles, cream defaults, formula copy) and quality checks (contrast floors, tracking, measure, states, heading outline). Some ideas come from the catalogue at https://impeccable.style/slop, whose site text has no stated licence; only the ideas were summarised.
- **Changes:** rewritten in our own words, merged with other sources, and turned from bans into context-dependent rules. Impeccable's automated checks were not replicated.

### Taste Skill

- **URL:** https://github.com/Leonxlnx/taste-skill (https://tasteskill.dev)
- **Author / copyright holder:** Leon Lin and blueemi (Copyright (c) 2026 Leonxlnx)
- **License:** MIT, https://opensource.org/license/mit
- **Used in:** `skills/design-review/references/unslop-checklist.md`, `skills/modern-design/references/direction.md`
- **What was used:** ideas on showing the real product, effects that don't fit the business, scroll-triggered card animations and mobile checks (checklist); writing down the real material before building, marking assumed facts, deciding structure by kind of business, and planning one line per section (direction).
- **Changes:** rewritten in our own words and merged with other sources. Its seeded per-kind palette selection and fixed section lists were not used.

### Web Interface Guidelines

- **URL:** https://github.com/vercel-labs/web-interface-guidelines (https://vercel.com/design/guidelines)
- **Author / copyright holder:** Vercel
- **License:** MIT, https://opensource.org/license/mit
- **Used in:** `skills/design-review/references/visual-qa.md`, `skills/design-review/references/unslop-checklist.md`
- **What was used:** guidance on tap target sizes, focus states, text wrapping, layout shift, loading timing, reduced motion, safe areas and mobile input sizes.
- **Changes:** rewritten in our own words and mapped to checks at 375, 768 and 1440 px. The Vercel-specific section was not used.

### SkillEvaluator CI workflow (NVIDIA)

- **URL:** https://github.com/NVIDIA/SkillEvaluator (file `ci/bundles/1.0.1/skill-checks.yml`)
- **Author / copyright holder:** NVIDIA Corporation & Affiliates
- **License:** Apache License 2.0, https://www.apache.org/licenses/LICENSE-2.0
- **Used in:** `.github/workflows/skill-checks.yml`
- **What was used:** the release workflow file, copied unmodified (SHA-256 `c192e32cf40cf42c789d9ec326114a18f7a1e723fe7333cf9fe8210e00dfa73f`, matching the bundle's `SHA256SUMS.txt`). Its SPDX header is kept.
- **Changes:** none. It calls NVIDIA's reusable workflow and container image, pinned by commit SHA and digest, at run time.

### Ideas without a stated licence

Ideas from these sources were used in rewritten form only, with credit and no reuse of their wording: Instagram posts by @charles.unemployed and @millee.md, two shared screenshots whose authors are not yet identified, the names of laws from Laws of UX (https://lawsofux.com) by Jon Yablonski, and the legacy-to-modern direction of Chrome's Modern Web Guidance (https://developer.chrome.com/docs/modern-web-guidance) by Chrome for Developers, used for the "Outdated, measurable" section (the detection script is our own). `direction.md` also uses rewritten ideas from Figma's articles "What is web design" and "Tendencias de diseño web" (content before visuals, mobile first, performance as a design input, choosing from audience and brand values), and follows Impeccable's convention of `PRODUCT.md` and `DESIGN.md` files without reproducing their format. See `docs/SOURCES.md`.

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
