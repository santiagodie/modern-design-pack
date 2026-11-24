# Direction

Reference for `modern-design`, step 1. Load it at the start of a new interface or a redesign. It produces `design-brief.md`, which every later step follows.

## When to use

- A new site, page, screen or dashboard, or a redesign, and no `design-brief.md` exists yet.
- When a `design-brief.md` exists, read it instead. Update it only when the user's request changes the product, audience or direction, and say what changed.
- When the request touches only one part (for example "change the colors"), skip this step unless the brief is missing and the change depends on it.

## Process

### 1. Read what already exists

Before asking anything, look at the project:

- `design-brief.md` from an earlier run.
- `PRODUCT.md` and `DESIGN.md`, written by Impeccable or another tool. Treat them as decisions already made: follow them, and note in the brief where you rely on them. Never write or overwrite these two files; they belong to their tools.
- The stack: framework, CSS approach (plain CSS, Tailwind, CSS modules), component library, existing tokens or theme files.
- Brand material: logo, colors and fonts already in use, real photos, product screenshots, real copy.

### 2. Gather context

Settle these points, from the project files first and from the user second:

| Point | What to pin down |
|---|---|
| Product | One concrete subject: what it is, in the user's words. "A sourdough bakery in a Madrid neighbourhood", not "a food business". |
| Audience | Who uses the page and what they already know. |
| Main job of the page | One of the four below. It decides structure, density and how much the page may perform. |
| Tone | Three adjectives that fit, and one to avoid. |
| Brand and assets | What exists and must be kept; what is missing. |
| Constraints | Stack, languages, accessibility needs, performance budget, content that must appear. |

The main job of the page:

| Job | The page exists to | It implies |
|---|---|---|
| Persuade | Convince someone to buy, sign up, visit or call. | One primary action, proof close to claims, a first screen that says what it is and for whom. |
| Operate | Let someone get work done repeatedly (dashboards, internal tools, admin). | No hero, no marketing copy. Navigation, the primary task area, status and data first. Dense but calm, fast, keyboard-friendly, little motion. |
| Read | Let someone take in long content (docs, articles, reports). | Comfortable measure, strong type hierarchy, navigation within the content, very little decoration. |
| Experience | Create an impression (portfolio, campaign, launch, art). | Room for bold type, imagery and motion, as long as content stays reachable and accessible. |

When you can ask, ask at most five short questions in one message, only about what the files don't answer, and offer a sensible default for each.

**When there are no answers** (a non-interactive session, or the user says "you decide"), don't stop. Make reasonable assumptions and write each one under "Assumptions" in the brief, so the user can correct them later. Never invent facts the user would have to stand behind: addresses, phone numbers, prices, reviews, client names, statistics. Use clearly marked placeholders for those.

### 3. Research live references

Look at real sites before deciding anything.

1. **Find** 3 to 5 live sites with WebSearch: the same category and a similar tone, ideally real businesses or products rather than templates. Search for the category plus a quality signal ("independent sourdough bakery website", "veterinary practice management software dashboard"). Galleries such as Awwwards or Curated help for "experience" pages; for "operate", look at well-regarded products in the category.
2. **See** them. Take screenshots with `playwright-cli`: first screen and full page at 1440 px, and the first screen at 375 px, with reduced motion on. Save them in a temporary folder outside the project and don't commit them. When the browser isn't available, read the pages with WebFetch and say that the visual comparison was skipped.
3. **Extract principles**, not looks. For each reference, write one line on each of:
   - **Layout rhythm:** how sections are sized and paced, alignment, grid, how the first screen is used.
   - **Type scale:** number of sizes, contrast between display and body, faces and why they fit.
   - **Color strategy:** neutral base, how many accents, where color is spent.
   - **Density:** how much is on a screen, whitespace, information per section.
   - **Motion level:** none, functional only, or expressive, and where.
   - **What makes it specific:** the one thing that ties it to its own subject.
4. **Never copy.** No code, images, text or signature effects from a reference. The brief records what makes each reference work, with its URL, so the user can see where the direction came from.

When search is unavailable, say so in the brief and set the direction from the context alone.

### 4. Plan the structure from the content

Work in this order before writing the brief:

1. **Reason** with `reasoning.md` (in this folder): who arrives and from where, the central promise in one sentence, and for each page its moment in the journey, its main doubt and its place on the persuasion dial.
2. **Read only the `pages/` file of each page type in the brief** (`reasoning.md`, "Which reference to open", maps types to files). Use it to catch a missed doubt and to check when the usual advice flips.
3. **Consult `principles.md` and `ethics.md` when needed:** principles to name a mechanism and check its evidence; ethics as a hard limit for anything with prices, consent, subscriptions, scarcity, urgency or reviews.
4. **Write the brief**, starting with the structure below.

Decide the sections from what the product needs to say and what people need to do, not from the usual landing sequence.

1. List the content: the messages, the proof, the actions, the information people come for (for a bakery: what's on the counter today, opening hours, how to order; for a dashboard: today's appointments, who is waiting, what needs attention).
2. Order it by what the audience needs first.
3. Turn it into sections, one line each: the section's purpose, its content or picture, and whether the asset is real or a placeholder.
4. Check the result against the default sequence (hero, three features, stats, testimonials, call to action). When your plan matches it section by section, question each one: keep it only when the content needs it.
5. For each section, say which doubt or cost it resolves at this moment. Cut it when you can't.

For "operate" pages, think in regions instead of sections: navigation, the primary task area, secondary panels, status and alerts.

### 5. Commit to a direction

Choose one clear aesthetic direction and give it a short name ("market-stall chalkboard", "quiet clinical ledger"). Take it from the subject's own world: its industry, materials, places and vernacular. Then decide:

- **Typography:** one family, or two that clearly differ, each with a role. The scale and the size of the headline voice.
- **Color strategy:** a neutral base and where color is spent. Plan 4 to 6 named colors with their roles; `design-tokens` turns them into tokens.
- **Layout concept:** grid, alignment, how the first screen (or main workspace) is composed. A rough ASCII sketch helps.
- **Imagery:** what pictures the page needs, which are real and which are placeholders.
- **Density and motion level:** following the page's job.
- **Light or dark:** from where and when the page is used, not from the category.
- **The one bold element:** the single memorable thing. Keep everything else quiet.

Then review the plan against the brief and revise anything that reads as a default. Watch for the combinations generators reach for first:

- cream background, serif headlines and a terracotta accent;
- near-black background with one acid accent;
- identical rounded cards with a soft shadow and gradient washes;
- purple-to-blue gradients;
- template chrome: tracked uppercase labels above headings, monospace labels, arrow glyphs on every link.

Use one of these only when the subject really calls for it, and then make it specific (real photographs, the business's own words and details) so it doesn't read as the default. A direction already set by the brand or by `DESIGN.md` overrides this list.

### 6. Run the template test on the brief

Swap the product's name for a competitor's. When the brief still fits, it is generic: sharpen the subject, the structure or the bold element until it doesn't.

### 7. Write `design-brief.md`

Save it in the project root. Never write `PRODUCT.md` or `DESIGN.md`.

```markdown
# Design brief: <product>

Date: <YYYY-MM-DD>

## Context
- Product: <one concrete sentence>
- Audience: <who, and what they know>
- Main job: persuade | operate | read | experience
- Tone: <three adjectives>; avoid: <one>
- Brand and assets: <what exists, what is missing>
- Stack and constraints: <framework, CSS, languages, accessibility, performance>
- Existing decisions followed: <PRODUCT.md / DESIGN.md, if any>

## Central promise
<one sentence: what the product promises, which every page and step must keep true>

## Assumptions
- <each assumption made without the user's answer, so it can be corrected>

## References
| Site | URL | Principles taken |
|---|---|---|
| <name> | <url> | <layout rhythm; type scale; color strategy; density; motion; what makes it specific> |

## Structure
### <page> (one block per page; a single-page site has one)
- Moment in the journey: <where the visitor comes from and what they already believe>
- Main doubt: <the one doubt or effort this page must resolve>
- Persuasion dial: <high | medium | low | none> — <why, for this page and this person>
1. <section or region>: <purpose> — <content or picture> — <real | placeholder>

## Direction
- Name: <short name>
- Why: <how it comes from the subject's world>
- Typography: <faces, roles, scale>
- Color: <neutral base; 4–6 named colors and their roles>
- Layout: <grid, alignment, first screen; optional ASCII sketch>
- Imagery: <what, real or placeholder>
- Density and motion: <level, where>
- Light or dark: <and why>
- Bold element: <the one memorable thing>

## Avoid
- <defaults and patterns that would make this page generic, specific to this project>

## Template test
<one sentence: why this brief couldn't belong to a competitor>
```

## Rules

- Read existing files before asking, and ask only what the files don't answer.
- Write the central promise before the structure, and check that every page keeps it true.
- When the user can't answer, assume, write the assumption down, and keep going.
- Mark every placeholder for facts, photos and figures the user must supply; never fill them with invented data.
- Take the direction from the subject's world, and say why in the brief.
- Spend boldness on one element when the page's job allows it; for "operate" and "read" pages, spend it on clarity instead.
- Keep reference screenshots out of the project and out of version control.
- Follow `PRODUCT.md`, `DESIGN.md` and existing brand decisions when they exist, and note where.

## Hand-off

Next step: tokens (`tokens.md`). The brief's Direction section is its input.

## Sources

Written in our own words. The approach to subject, audience and main job, the token plan reviewed against the brief, the list of generator defaults and the "one bold element" idea adapt Anthropic's [frontend-design](https://github.com/anthropics/skills/tree/main/skills/frontend-design) skill (Apache-2.0). Writing down the real material before building, marking assumed facts, deciding structure by kind of business and planning one line per section adapt [Taste Skill](https://github.com/Leonxlnx/taste-skill) by Leon Lin and blueemi (MIT). Ideas on content before visuals, mobile first, performance as a design input and choosing from audience and brand values come from Figma's [web design](https://www.figma.com/resource-library/what-is-web-design/) and [web design trends](https://www.figma.com/es-es/resource-library/tendencias-diseno-web/) articles. Respecting existing `PRODUCT.md` and `DESIGN.md` files follows the convention of [Impeccable](https://impeccable.style). See `THIRD_PARTY_NOTICES.md` in the repository.
