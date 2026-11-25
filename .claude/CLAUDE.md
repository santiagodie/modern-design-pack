# modern-design-pack: working conventions

This repository is both a Claude Code marketplace (`santiagodie-plugins`) and the plugin it lists (`modern-design-pack`, source `./`). Read `docs/ARCHITECTURE.md` and `docs/ROADMAP.md` before starting work.

## Skills

There are two skills:

- `modern-design`: designing or redesigning. Its five steps load `references/strategy/direction.md` (which sends step 1 through `reasoning.md`, then only the `pages/` file of each page type (commerce has two: `commerce-purchase.md` for cart and checkout, `commerce-after-purchase.md` for order confirmation and order history), with `principles.md` and `ethics.md` when needed, and `content-truth.md` for every build), `tokens.md`, `sections/` (an index plus one file per page section, with `responsive.md`; `components/` is reserved for reusable pieces in a later batch), `implementation.md` (steps 1 and 3) and `motion.md` one at a time, plus `resources.md` (curated links) when needed. It reads and updates `site-decisions.md` in the user's project at every step, and writes `content-needed.md` when it uses placeholders (templates in `references/templates/`).
- `design-review`: reviewing UI in two modes. Own project: review with `references/review-method.md` (shared by every review skill), the unslop checklists (`unslop-type-color.md`, `unslop-layout.md`, `unslop-components.md`) and `copy-states-checklist.md` (plus `mobile-checklist.md`, `outdated-checklist.md`, and `dark-patterns-checklist.md` when the page shows prices, offers, free trials, subscriptions, a sign-up, a payment, consent or cookies, stock or scarcity, urgency or deadlines, reviews or testimonials, or sponsored content), browser check with `references/visual-qa.md`, then fix. URL audit: read-only, public pages only, three pages at most, report in the format of `references/audit-report.md`.

Split a skill only when its `SKILL.md` grows past ~500 lines or it triggers badly in tests. Prefer adding a reference file.

## Rules that shape every skill

- Order of authority, the same order in both `SKILL.md` files, `docs/ARCHITECTURE.md` and every reference header that states it: ethics (`ethics.md` and `content-truth.md`, hard limits) > `site-decisions.md` > `design-brief.md` > `reasoning.md` and `design-reasoning.md` > the other references. Change it everywhere at once or not at all.
- In `SKILL.md` files, name the skill's own files by their path relative to the `SKILL.md` (`references/ethics.md`), and use `${CLAUDE_SKILL_DIR}` only in bash commands that need the real path. Name the user's project files in prose with their exact name and no path or extension ("a Markdown file named design-brief in the project root"); for files with a template, say "copy `references/templates/<file>` to the project root and fill it". Never point a `SKILL.md` at a repository document such as the roadmap. The skill scanner reports any other file reference as missing. Exception: `design-review`'s paths into the other skill (`${CLAUDE_SKILL_DIR}/../modern-design/...`) stay as they are, because they resolve at run time and point outside the scanned folder.
- No invention: no skill content may tell the model to invent or assume prices, figures, business texts, reviews, hours, addresses, legal details or photos. Missing content is a marked placeholder (`content-truth.md`).
- The project file for the user's decisions is `site-decisions.md`; never `design.md`.
- MUST in `implementation.md` is only for security, accessibility and legal rules, and for the truth rule in `ethics.md`. Date framework facts and mark unverified ones "verify before citing".
- Keep every file in `skills/` under about 300 lines (see "Skill scanner" below). Split by rule family or journey moment without changing IDs.

## Third-party material

- Audit a source's licence when it is about to be used, not before. Update its row in `docs/SOURCES.md` at that point.
- Never copy text from a source whose licence is not confirmed as compatible. Summarise it in our own words instead.
- Record every source used in `docs/SOURCES.md`, and every adapted piece in `THIRD_PARTY_NOTICES.md`.
- The working notes in `docs/SOURCES.md` are raw input. Rewrite them before they go into a skill.

## Writing skills

- Skill content is in English. Descriptions include Spanish trigger keywords in parentheses.
- Keep each `SKILL.md` under ~500 lines and move detail to its `references/` folder, loaded only when needed.
- Write rules in context: "do X when Y". Avoid absolute bans.
- Nothing outside the plugin. Skills may read each other's files inside the plugin (for example `${CLAUDE_SKILL_DIR}/../modern-design/references/ui/sections/`), but never paths outside the plugin root, because installed plugins are copied to a cache without anything around them. A skill that reads another skill's files must keep working when they're missing. No symlinks anywhere in the repo.
- Descriptions stay under 1024 characters and must not overlap with each other.
- Never copy concepts, names or solutions from the briefs and results in `docs/examples/` into `skills/` as examples. Keep the examples in the references varied, and don't repeat a business or concept across files. Reason: in tests 3a, no-invention 1 and no-invention 2, the bakery examples in the references made the builds converge (the same "flour" white, the same hours board).
- Businesses already used as examples (a living list: grep `skills/` and `docs/examples/` before adding an example, and add every new one here). A new example uses a business that isn't on it.
  - In `skills/` and `docs/examples/`: bakery (and chocolate maker), veterinary clinic, bicycle repair workshop, physiotherapy practice, warehouse dashboard, ferry line, sailing school, logistics and night-shift dispatch, translation agency, language school, fishmonger, florist, coffee roaster and café, ceramics studio, wine shop, dental clinic booking tool, running-shoe shop, internal support console, hotel (real cases in `ethics.md` and `principles.md`).
  - In the tokens references: piano-tuning service (`tokens.md`), climbing wall (`tokens-color.md`), planetarium (`tokens-color-dark.md`), regional orchestra (`tokens-type.md`), allotment garden association (`tokens-space.md`).
  - In the reference skills we draw from: guesthouse, restaurant, yoga studio, brewery, bike shop, coffee beans, beauty spa, "Ops Console" dashboard, AI search homepage, the "daily-grind" coffee shop, allergy-aware recipe app.

## Checks and releases

- Run `claude plugin validate .` after every change.
- After moving or renaming any file in `skills/`, run `node scripts/dev/check-paths.js` from the repository root. It checks every `references/...` and `../modern-design/references/...` path and every relative link in `skills/`, and must report 0 broken. A path followed by "(planned)" is skipped.
- Add every change to the "Unreleased" section of `CHANGELOG.md`. Bump the version only when publishing a release, in `.claude-plugin/plugin.json` and `.claude-plugin/marketplace.json` together; until then it stays at 0.1.0.
- Line endings are LF (see `.gitattributes`).

## Skill scanner (SkillEvaluator / SkillSpector)

The CI workflow runs NVIDIA's SkillEvaluator, whose security stage is SkillSpector. What we learned fixing its reports:

- When it reports `static_parse_limit` or `obfuscated_instruction_text` with no line, first split the affected file by rule family or journey moment. Look for a specific phrase only if the split doesn't fix it. Both times it happened (the review checklist and `pages/commerce.md`), the cause was the combination of content in one file, not a single phrase.
- `reference_missing` doesn't block the scan on its own. Still, name the user's project files in prose and the skill's own files with a path relative to the `SKILL.md` (`references/...`), as the rule above says.
- Executable code blocks go in `scripts/`, not in the Markdown.
- Files dense with risk vocabulary (deceive, hide, fake, invent, never) are the most likely to trigger `obfuscated_instruction_text`. Split them by topic before they grow. It happened with commerce (split into `commerce-purchase.md` and `commerce-after-purchase.md`) and with ethics (the no-invention rule moved to `content-truth.md`).
- Rephrase words that sound like suppressing warnings ("without warning"), even when they mean something else.
- To locate a failure without a local scanner, use a throwaway branch with temporary `zz-bisect-*` skills (one change each, plus a control with none and one with all) and a draft PR. Never merge it.
- Keep every file in `skills/` under about 300 lines.
