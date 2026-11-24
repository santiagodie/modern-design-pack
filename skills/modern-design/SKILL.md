---
name: modern-design
description: Entry point for designing or redesigning any website, landing page, app screen or dashboard. Gathers project context, researches live references, then sets direction, tokens, components and motion adapted to the project. Reviewing finished UI belongs to design-review. (diseñar, crear una web, landing, rediseñar, interfaz, colores, tipografía, componentes, animaciones)
license: MIT
---

# Modern Design

> In progress (v0.1.0). Step 1 (direction) and step 3 for pages that persuade (components and responsive) are written. Steps 2 and 4 have no reference content yet: follow the brief with your own judgment until they do. See `docs/ROADMAP.md` in the repository.

## When to use

- The user asks to design, build or redesign a website, landing page, app screen or dashboard.
- The user asks for a specific design layer (colors, type, components, motion): go to that step, reading `design-brief.md` first when it exists.

Reviewing finished UI belongs to `design-review`.

## Process

Run the steps in order for a new interface or a redesign. When the request covers only one part (for example "change the colors"), go straight to that step. Load each reference only when you reach its step, never all at once.

1. **Direction.** Load `${CLAUDE_SKILL_DIR}/references/direction.md` and follow it: read existing files (`design-brief.md`, `PRODUCT.md`, `DESIGN.md`, the stack), settle the context and the page's main job, research 3–5 live references, plan the structure from the content, commit to a direction, and write `design-brief.md` in the project root. When the user can't answer questions, assume, record the assumptions in the brief and continue. Skip this step when a fitting `design-brief.md` already exists.
2. **Tokens.** Define color palette, type pairing, spacing, radii, shadows, and light and dark themes from the brief's Direction section. Load `${CLAUDE_SKILL_DIR}/references/tokens.md` when the project needs new or fixed tokens. (Reference not written yet.)
3. **Components.** Build or restyle sections and components in the project's stack, following the brief's Structure and the tokens. Load `${CLAUDE_SKILL_DIR}/references/sections/index.md` first, then only the file of each section you are about to build (for example `sections/hero.md`), plus `${CLAUDE_SKILL_DIR}/references/responsive.md`. Build every component for phone, tablet and desktop. The catalogue covers pages that persuade; for pages that operate, use the brief, `responsive.md` and the parts of `header.md`, `cta.md` and `forms.md` that apply.
4. **Motion.** Add purposeful animation and interaction at the level the brief sets, or remove what doesn't help. Load `${CLAUDE_SKILL_DIR}/references/motion.md` when the UI needs motion or feels static or sluggish. (Reference not written yet.)
5. **Hand off to `design-review`.** Run it in own-project mode before delivering any UI.

Load `${CLAUDE_SKILL_DIR}/references/resources.md` only when a step needs a specific external resource (fonts, palettes, component libraries, inspiration galleries).

## Rules

TODO. Write every rule as "do X when Y". Never write absolute bans.

## Hand-off

Next skill: `design-review`. When it sends issues back, return to the step that owns them.

## References

Load only when needed:

- `${CLAUDE_SKILL_DIR}/references/direction.md`: step 1
- `${CLAUDE_SKILL_DIR}/references/tokens.md`: step 2
- `${CLAUDE_SKILL_DIR}/references/sections/index.md`: step 3, then one file per section being built
- `${CLAUDE_SKILL_DIR}/references/responsive.md`: step 3, phone, tablet and desktop
- `${CLAUDE_SKILL_DIR}/references/motion.md`: step 4
- `${CLAUDE_SKILL_DIR}/references/resources.md`: curated link catalogue
