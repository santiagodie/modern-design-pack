# modern-design-pack: working conventions

This repository is both a Claude Code marketplace (`santiagodie-plugins`) and the plugin it lists (`modern-design-pack`, source `./`). Read `docs/ARCHITECTURE.md` and `docs/ROADMAP.md` before starting work.

## Skills

There are two skills:

- `modern-design`: designing or redesigning. Its five steps load `references/direction.md`, `tokens.md`, `components/` (an index plus one file per component, with `responsive.md`) and `motion.md` one at a time, plus `resources.md` (curated links) when needed.
- `design-review`: reviewing UI in two modes. Own project: review with `references/unslop-checklist.md`, browser check with `references/visual-qa.md`, then fix. URL audit: read-only, public pages only, three pages at most, report in the format of `references/audit-report.md`.

Split a skill only when its `SKILL.md` grows past ~500 lines or it triggers badly in tests. Prefer adding a reference file.

## Third-party material

- Audit a source's licence when it is about to be used, not before. Update its row in `docs/SOURCES.md` at that point.
- Never copy text from a source whose licence is not confirmed as compatible. Summarise it in our own words instead.
- Record every source used in `docs/SOURCES.md`, and every adapted piece in `THIRD_PARTY_NOTICES.md`.
- The working notes in `docs/SOURCES.md` are raw input. Rewrite them before they go into a skill.

## Writing skills

- Skill content is in English. Descriptions include Spanish trigger keywords in parentheses.
- Keep each `SKILL.md` under ~500 lines and move detail to its `references/` folder, loaded only when needed.
- Write rules in context: "do X when Y". Avoid absolute bans.
- Nothing outside the plugin. Skills may read each other's files inside the plugin (for example `${CLAUDE_SKILL_DIR}/../modern-design/references/components/`), but never paths outside the plugin root, because installed plugins are copied to a cache without anything around them. A skill that reads another skill's files must keep working when they're missing. No symlinks anywhere in the repo.
- Descriptions stay under 1024 characters and must not overlap with each other.

## Checks and releases

- Run `claude plugin validate .` after every change.
- Bump the version in `.claude-plugin/plugin.json` and `.claude-plugin/marketplace.json` together, and add a `CHANGELOG.md` entry.
- Line endings are LF (see `.gitattributes`).
