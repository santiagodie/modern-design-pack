# modern-design-pack: working conventions

This repository is both a Claude Code marketplace (`santiagodie-plugins`) and the plugin it lists (`modern-design-pack`, source `./`). Read `docs/ARCHITECTURE.md` and `docs/ROADMAP.md` before starting work.

## Skills

There are two skills:

- `modern-design`: designing or redesigning. Its five steps load `references/direction.md` (which sends step 1 through `reasoning.md`, then only the `pages/` file of each page type, with `principles.md` and `ethics.md` when needed), `tokens.md`, `sections/` (an index plus one file per page section, with `responsive.md`; `components/` is reserved for reusable pieces in a later batch), `implementation.md` (steps 1 and 3) and `motion.md` one at a time, plus `resources.md` (curated links) when needed. It reads and updates `site-decisions.md` in the user's project at every step, and writes `content-needed.md` when it uses placeholders (templates in `references/templates/`).
- `design-review`: reviewing UI in two modes. Own project: review with `references/unslop-checklist.md` and `copy-states-checklist.md` (plus `mobile-checklist.md`, `outdated-checklist.md`, and `dark-patterns-checklist.md` when the page shows prices, offers, free trials, subscriptions, a sign-up, a payment, consent or cookies, stock or scarcity, urgency or deadlines, reviews or testimonials, or sponsored content), browser check with `references/visual-qa.md`, then fix. URL audit: read-only, public pages only, three pages at most, report in the format of `references/audit-report.md`.

Split a skill only when its `SKILL.md` grows past ~500 lines or it triggers badly in tests. Prefer adding a reference file.

## Rules that shape every skill

- Order of authority, the same order in both `SKILL.md` files, `docs/ARCHITECTURE.md` and every reference header that states it: `ethics.md` (hard limit, including the no-invention rule) > `site-decisions.md` > `design-brief.md` > `reasoning.md` > the other references. Change it everywhere at once or not at all.
- In `SKILL.md` files, name the skill's own files by their path relative to the `SKILL.md` (`references/ethics.md`), and use `${CLAUDE_SKILL_DIR}` only in bash commands that need the real path. Name the user's project files in prose with their exact name and no path or extension ("a Markdown file named design-brief in the project root"); for files with a template, say "copy `references/templates/<file>` to the project root and fill it". Never point a `SKILL.md` at a repository document such as the roadmap. The skill scanner reports any other file reference as missing.
- No invention: no skill content may tell the model to invent or assume prices, figures, business texts, reviews, hours, addresses, legal details or photos. Missing content is a marked placeholder (`ethics.md` §7).
- The project file for the user's decisions is `site-decisions.md`; never `design.md`.
- MUST in `implementation.md` is only for security, accessibility and legal rules. Date framework facts and mark unverified ones "verify before citing".
- Keep every file in `skills/` under about 400 lines (the CI scanner fails on large files). Split by rule family without changing IDs.

## Third-party material

- Audit a source's licence when it is about to be used, not before. Update its row in `docs/SOURCES.md` at that point.
- Never copy text from a source whose licence is not confirmed as compatible. Summarise it in our own words instead.
- Record every source used in `docs/SOURCES.md`, and every adapted piece in `THIRD_PARTY_NOTICES.md`.
- The working notes in `docs/SOURCES.md` are raw input. Rewrite them before they go into a skill.

## Writing skills

- Skill content is in English. Descriptions include Spanish trigger keywords in parentheses.
- Keep each `SKILL.md` under ~500 lines and move detail to its `references/` folder, loaded only when needed.
- Write rules in context: "do X when Y". Avoid absolute bans.
- Nothing outside the plugin. Skills may read each other's files inside the plugin (for example `${CLAUDE_SKILL_DIR}/../modern-design/references/sections/`), but never paths outside the plugin root, because installed plugins are copied to a cache without anything around them. A skill that reads another skill's files must keep working when they're missing. No symlinks anywhere in the repo.
- Descriptions stay under 1024 characters and must not overlap with each other.

## Checks and releases

- Run `claude plugin validate .` after every change.
- Add every change to the "Unreleased" section of `CHANGELOG.md`. Bump the version only when publishing a release, in `.claude-plugin/plugin.json` and `.claude-plugin/marketplace.json` together; until then it stays at 0.1.0.
- Line endings are LF (see `.gitattributes`).
