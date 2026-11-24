---
name: modern-design
description: Entry point for designing or redesigning any website, landing page, app screen or web app flow, such as pricing, checkout, sign-up, onboarding, settings or a dashboard. Reasons from what the user doubts on each page, gathers project context, researches live references, then sets direction, tokens, sections and motion adapted to the project. Reviewing finished UI belongs to design-review. (diseñar, crear una web, landing, rediseñar, interfaz, página de precios, registro, onboarding, ajustes, panel de control, colores, tipografía, componentes, animaciones)
license: MIT
---

# Modern Design

> In progress (v0.1.0). Step 1 (direction) and step 3 for pages that persuade (components and responsive) are written. Steps 2 and 4 are not covered yet: follow the brief with your own judgment until they are.

## When to use

- The user asks to design, build or redesign a website, landing page, app screen or dashboard.
- The user asks for a specific design layer (colors, type, components, motion): go to that step, reading the project's design brief first when it exists (a Markdown file named design-brief in the project root).

Reviewing finished UI belongs to `design-review`.

## Project files

The skill keeps three Markdown files in the root of the user's project. Use these exact names:

- **site-decisions**: current standards (pointing to the tokens in the code), the inventory of pages, sections and components, and the user's own decisions. To create it, copy `references/templates/site-decisions.md` to the project root and fill it. Never give it the same name as Impeccable's DESIGN file: on Windows, file names ignore case.
- **design-brief**: the direction proposed for the project. Its template is in `references/direction.md`.
- **content-needed**: every placeholder and what the user still has to supply. To create it, copy `references/templates/content-needed.md` to the project root and fill it.

Impeccable may also have left a PRODUCT file and a DESIGN file (Markdown, in the project root). Read and follow them; never write them.

## Order of authority

ethics (`references/ethics.md` and `references/content-truth.md`, hard limits) > the site-decisions file (what exists and what the user decided) > the design-brief file > `references/reasoning.md` (method for writing the brief) > the other references (`references/principles.md`, `references/pages/`, `references/sections/`, `references/implementation.md` and the rest, consulted afterwards). When two disagree, the higher one wins; a user decision that breaks either hard limit is declined with the reason.

- `references/ethics.md` is a hard limit: nothing that deceives is built, whatever the brief or a principle says. Load it when the page shows prices, offers, trials, subscriptions, sign-ups, consent, stock, urgency or reviews, and before handing off any page that persuades.
- `references/content-truth.md` is a hard limit at the same level: the no-invention rule, which applies to every build. Load it for every build: never invent or assume prices, figures, business texts, reviews, testimonials, hours, addresses, footer legal details or photos, and decline when the user asks for them. Use marked placeholders and keep the content-needed file up to date.
- The site-decisions file wins over the brief.
- The design-brief file wins over every reference below it.
- `references/reasoning.md` is the method for writing the brief, used in step 1.
- `references/principles.md` and the files in `references/pages/` (one per group of page types; commerce has two, `references/pages/commerce-purchase.md` and `references/pages/commerce-after-purchase.md`) are consulted after reasoning, to name a mechanism or catch a missed doubt. When reasoning you can explain in one sentence disagrees with them, the reasoning wins.

## Process

Before step 1, and before any single step, read the site-decisions file in the project root; when it doesn't exist, copy `references/templates/site-decisions.md` to the project root and fill it. At the end of each step, update it as the template says. Before building anything new, check its inventory for something to reuse.

Run the steps in order for a new interface or a redesign. When the request covers only one part (for example "change the colors"), go straight to that step. Load each reference only when you reach its step, never all at once.

1. **Direction.** Load `references/direction.md` and follow it: read what exists (the design-brief file, Impeccable's PRODUCT and DESIGN files, the stack), settle the context and the page's main job, research 3–5 live references, plan the structure from the content, commit to a direction, and write the design-brief file in the project root. Before writing the brief, `references/direction.md` sets the order: reason with `references/reasoning.md` (central promise and, per page, its moment, main doubt and persuasion dial), read only the `references/pages/` file of each page type, then `references/principles.md` and `references/ethics.md` when needed. When the brief must choose a stack or decide between a static site and an app, load `references/implementation.md`. When the user can't answer questions, assume design decisions, record them in the brief and continue; never assume content or how the business works (orders, delivery, on-site production): those are placeholders and business questions in the content-needed file (`references/content-truth.md`). Skip this step when a fitting design-brief file already exists.
2. **Tokens.** Define color palette, type pairing, spacing, radii, shadows, and light and dark themes from the brief's Direction section. Load `references/tokens.md` when the project needs new or fixed tokens. (Reference not written yet.)
3. **Components.** Build or restyle sections and components in the project's stack, following the brief's Structure and the tokens. Load `references/sections/index.md` first, then only the file of each section you are about to build (for example `references/sections/hero.md`), plus `references/responsive.md`, and `references/implementation.md` when you set up routes, rendering, state or shared components. Build every component for phone, tablet and desktop. The catalogue covers pages that persuade; for pages that operate, use the brief, `references/responsive.md` and the parts of `references/sections/header.md`, `references/sections/cta.md` and `references/sections/forms.md` that apply.
4. **Motion.** Add purposeful animation and interaction at the level the brief sets, or remove what doesn't help. Load `references/motion.md` when the UI needs motion or feels static or sluggish. (Reference not written yet.)
5. **Hand off to `design-review`.** Run it in own-project mode before delivering any UI.

Load `references/resources.md` only when a step needs a specific external resource (fonts, palettes, component libraries, inspiration galleries).

## Rules

TODO. Write every rule as "do X when Y". Never write absolute bans.

## Hand-off

Next skill: `design-review`. When it sends issues back, return to the step that owns them.

## References

Load only when needed:

- `references/direction.md`: step 1
- `references/reasoning.md`: step 1, before writing the brief
- `references/reasoning-examples.md`: worked examples of the method, when useful
- `references/pages/`: step 1, only the file of each page type in the brief
- `references/principles.md`: after reasoning, for reference
- `references/ethics.md`: hard limit, for pages with prices, consent, subscriptions, scarcity, urgency or reviews
- `references/content-truth.md`: hard limit, the no-invention rule, placeholders and the content-needed file, for every build
- `references/tokens.md`: step 2
- `references/sections/index.md`: step 3, then one file per section being built
- `references/responsive.md`: step 3, phone, tablet and desktop
- `references/implementation.md`: step 1 when choosing static or app, and step 3 for rendering, state, reuse layers, performance, accessibility and the legal minimum; its "Boundaries" section says what this plugin doesn't review
- `references/motion.md`: step 4
- `references/resources.md`: curated link catalogue
- `references/templates/site-decisions.md`: copy it to the project root and fill it, at the start of the first run
- `references/templates/content-needed.md`: copy it to the project root and fill it, the first time a build uses a placeholder
