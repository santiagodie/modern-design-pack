# Roadmap

## Working rules

- **Licences are audited when a source is about to be used, not before.** When a phase needs a source from `SOURCES.md`, fill its License column, decide `adapt` / `summarise` / `link only`, and add a `THIRD_PARTY_NOTICES.md` entry if anything is adapted.
- **Split a skill only when needed:** when its `SKILL.md` grows past ~500 lines, or it triggers badly in tests.

## Phase 1: Skeleton (done)

- [x] Plugin and marketplace manifests
- [x] Two skills: `modern-design` (with five references) and `unslop-review` (with a visual-qa reference)
- [x] Docs, READMEs, licence files, banner
- [x] `claude plugin validate .` passes

## Phase 2: unslop-review, tested

- [ ] Write `unslop-review` and `references/visual-qa.md`
- [ ] Build a test landing page with Claude Code **without** this plugin
- [ ] Run `unslop-review` on it
- [ ] Save before and after screenshots in `docs/examples/`
- [ ] Record what the review caught and what it missed

## Phase 3: modern-design references

- [ ] Fill the references of `modern-design`, starting with the one that fails most in the tests: `direction.md`, `tokens.md`, `components.md`, `motion.md`, `resources.md`
- [ ] Write the `modern-design` SKILL.md process and rules
- [ ] Remove the "Sources to merge" sections as they are used

## Phase 4: Tests with real briefs

- [ ] Run the full flow on several real projects with different contexts (for example a SaaS landing page, a local business site, a dashboard)
- [ ] Check that both skills trigger on English and Spanish requests
- [ ] Record results and fix what fails

## Phase 5: Publish v0.1.0

- [ ] Add a square PNG icon (512 to 2048 px) for the plugin directory
- [ ] Update the README status and Known Limitations
- [ ] Move CHANGELOG 0.1.0 out of Unreleased
- [ ] Tag `v0.1.0` and publish
