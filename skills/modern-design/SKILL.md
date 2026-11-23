---
name: modern-design
description: Entry point for designing or redesigning any website, landing page, app screen or dashboard. Gathers project context, researches live references, then sets direction, tokens, components and motion adapted to the project. Reviewing finished UI belongs to design-review. (diseñar, crear una web, landing, rediseñar, interfaz, colores, tipografía, componentes, animaciones)
license: MIT
---

# Modern Design

> Skeleton (v0.1.0). The step content lives in `${CLAUDE_SKILL_DIR}/references/` and is written in phase 3. See `docs/ROADMAP.md` in the repository.

## When to use

TODO

## Process

Run the steps in order for a new interface or a redesign. When the request covers only one part (for example "change the colors"), go straight to that step. Load each reference only when you reach its step, never all at once.

1. **Direction.** Gather project context (product, audience, tone, existing stack), research live references on the web, and write the design brief. Load `${CLAUDE_SKILL_DIR}/references/direction.md`. TODO
2. **Tokens.** Define color palette, type pairing, spacing, radii, shadows, and light and dark themes from the brief. Load `${CLAUDE_SKILL_DIR}/references/tokens.md` when the project needs new or fixed tokens. TODO
3. **Components.** Build or restyle sections and components in the project's stack, using the brief and tokens. Load `${CLAUDE_SKILL_DIR}/references/components.md` when building UI. TODO
4. **Motion.** Add purposeful animation and interaction, or remove what doesn't help. Load `${CLAUDE_SKILL_DIR}/references/motion.md` when the UI needs motion or feels static or sluggish. TODO
5. **Hand off to `design-review`.** Run it before delivering any UI. TODO

Load `${CLAUDE_SKILL_DIR}/references/resources.md` only when a step needs a specific external resource (fonts, palettes, component libraries, inspiration galleries).

## Rules

TODO. Write every rule as "do X when Y". Never write absolute bans.

## Hand-off

Next skill: `design-review`. When it sends issues back, return to the step that owns them.

## References

Load only when needed:

- `${CLAUDE_SKILL_DIR}/references/direction.md`: step 1
- `${CLAUDE_SKILL_DIR}/references/tokens.md`: step 2
- `${CLAUDE_SKILL_DIR}/references/components.md`: step 3
- `${CLAUDE_SKILL_DIR}/references/motion.md`: step 4
- `${CLAUDE_SKILL_DIR}/references/resources.md`: curated link catalogue
