---
name: modern-design
description: Entry point for designing or redesigning any website, landing page, app screen or web app flow, such as pricing, checkout, sign-up, onboarding, settings or a dashboard. Reasons from what the user doubts on each page, gathers project context, researches live references, then sets direction, tokens, sections and motion adapted to the project. Reviewing finished UI belongs to design-review. (diseñar, crear una web, landing, rediseñar, interfaz, página de precios, registro, onboarding, ajustes, panel de control, colores, tipografía, componentes, animaciones)
license: MIT
---

# Modern Design

> In progress (v0.1.0). Step 1 (direction) and step 3 for pages that persuade (components and responsive) are written. Steps 2 and 4 have no reference content yet: follow the brief with your own judgment until they do. See `docs/ROADMAP.md` in the repository.

## When to use

- The user asks to design, build or redesign a website, landing page, app screen or dashboard.
- The user asks for a specific design layer (colors, type, components, motion): go to that step, reading `design-brief.md` first when it exists.

Reviewing finished UI belongs to `design-review`.

## Order of authority

`ethics.md` (hard limit, including the no-invention rule) > `site-decisions.md` (what exists and what the user decided) > `design-brief.md` > `reasoning.md` (method for writing the brief) > the other references (`principles.md`, `pages/`, `sections/`, `implementation.md` and the rest, consulted afterwards). When two disagree, the higher one wins; a user decision that breaks `ethics.md` is declined with the reason.

- `${CLAUDE_SKILL_DIR}/references/ethics.md` is a hard limit: nothing that deceives is built, whatever the brief or a principle says. Load it when the page shows prices, offers, trials, subscriptions, sign-ups, consent, stock, urgency or reviews, and before handing off any page that persuades. Its section 7, the no-invention rule, applies to every build: never invent or assume prices, figures, business texts, reviews, testimonials, hours, addresses, footer legal details or photos, and decline when the user asks for them. Use marked placeholders and keep `content-needed.md` (template in `${CLAUDE_SKILL_DIR}/references/templates/content-needed.md`).
- `site-decisions.md` (project root) holds the current standards (pointing to the tokens in the code), the inventory of pages, sections and components, and the user's own decisions. It wins over the brief. Template: `${CLAUDE_SKILL_DIR}/references/templates/site-decisions.md`.
- `design-brief.md` holds the direction proposed for the project and wins over every reference below it.
- `${CLAUDE_SKILL_DIR}/references/reasoning.md` is the method for writing the brief, used in step 1.
- `${CLAUDE_SKILL_DIR}/references/principles.md` and the files in `${CLAUDE_SKILL_DIR}/references/pages/` (one per group of page types) are consulted after reasoning, to name a mechanism or catch a missed doubt. When reasoning you can explain in one sentence disagrees with them, the reasoning wins.

## Process

Before step 1, and before any single step, read `site-decisions.md` in the project root, or create it from `${CLAUDE_SKILL_DIR}/references/templates/site-decisions.md` when it doesn't exist. At the end of each step, update it as the template says. Before building anything new, check its inventory for something to reuse. Never name it `design.md`.

Run the steps in order for a new interface or a redesign. When the request covers only one part (for example "change the colors"), go straight to that step. Load each reference only when you reach its step, never all at once.

1. **Direction.** Load `${CLAUDE_SKILL_DIR}/references/direction.md` and follow it: read existing files (`design-brief.md`, `PRODUCT.md`, `DESIGN.md`, the stack), settle the context and the page's main job, research 3–5 live references, plan the structure from the content, commit to a direction, and write `design-brief.md` in the project root. Before writing the brief, `direction.md` sets the order: reason with `reasoning.md` (central promise and, per page, its moment, main doubt and persuasion dial), read only the `pages/` file of each page type, then `principles.md` and `ethics.md` when needed. When the user can't answer questions, assume, record the assumptions in the brief and continue. Skip this step when a fitting `design-brief.md` already exists.
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
- `${CLAUDE_SKILL_DIR}/references/reasoning.md`: step 1, before writing the brief
- `${CLAUDE_SKILL_DIR}/references/reasoning-examples.md`: worked examples of the method, when useful
- `${CLAUDE_SKILL_DIR}/references/pages/`: step 1, only the file of each page type in the brief
- `${CLAUDE_SKILL_DIR}/references/principles.md`: after reasoning, for reference
- `${CLAUDE_SKILL_DIR}/references/ethics.md`: hard limit, for pages with prices, consent, subscriptions, scarcity, urgency or reviews
- `${CLAUDE_SKILL_DIR}/references/tokens.md`: step 2
- `${CLAUDE_SKILL_DIR}/references/sections/index.md`: step 3, then one file per section being built
- `${CLAUDE_SKILL_DIR}/references/responsive.md`: step 3, phone, tablet and desktop
- `${CLAUDE_SKILL_DIR}/references/motion.md`: step 4
- `${CLAUDE_SKILL_DIR}/references/resources.md`: curated link catalogue
- `${CLAUDE_SKILL_DIR}/references/templates/site-decisions.md`: template for the project's `site-decisions.md`, at the start of every run
- `${CLAUDE_SKILL_DIR}/references/templates/content-needed.md`: template for the project's `content-needed.md`, the first time a build uses a placeholder
