# modern-design-pack: working conventions

This repository is both a Claude Code marketplace (`santiagodie-plugins`) and the plugin it lists (`modern-design-pack`, source `./`). Read `docs/ARCHITECTURE.md` and `docs/ROADMAP.md` before starting work.

## Third-party material

- Never copy text from a source whose licence is not confirmed as compatible. Summarise it in our own words instead.
- Record every source used in `docs/SOURCES.md`, and every adapted piece in `THIRD_PARTY_NOTICES.md`.
- The working notes in `docs/SOURCES.md` are raw input. Rewrite them before they go into a skill.

## Writing skills

- Skill content is in English. Descriptions include Spanish trigger keywords in parentheses.
- Keep each `SKILL.md` under ~500 lines and move detail to its `references/` folder, loaded only when needed.
- Write rules in context: "do X when Y". Avoid absolute bans.
- Each skill is self-contained. No paths that leave its folder, and no symlinks anywhere in the repo.
- Descriptions stay under 1024 characters and must not overlap with the other skills.

## Checks and releases

- Run `claude plugin validate .` after every change.
- Bump the version in `.claude-plugin/plugin.json` and `.claude-plugin/marketplace.json` together, and add a `CHANGELOG.md` entry.
- Line endings are LF (see `.gitattributes`).
