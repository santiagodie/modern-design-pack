# Roadmap

## Working rules

- **Licences are audited when a source is about to be used, not before.** When a phase needs a source from `SOURCES.md`, fill its License column, decide `adapt` / `summarise` / `link only`, and add a `THIRD_PARTY_NOTICES.md` entry if anything is adapted.
- **Split a skill only when needed:** when its `SKILL.md` grows past ~500 lines, or it triggers badly in tests.

## Phase 1: Skeleton (done)

- [x] Plugin and marketplace manifests
- [x] Two skills: `modern-design` (with five references) and `design-review` (with unslop-checklist, visual-qa and audit-report references)
- [x] Audit report format written (`design-review/references/audit-report.md`)
- [x] Docs, READMEs, licence files, banner
- [x] `claude plugin validate .` passes

## Phase 2: design-review, tested

- [x] Write `design-review`: SKILL.md, `references/unslop-checklist.md` and `references/visual-qa.md`
- [x] Test the URL audit mode on 3 real public URLs and review the reports
- [x] Build a test landing page with Claude Code **without** this plugin, and run the own-project mode on it
- [x] Save before and after screenshots in `docs/examples/`
- [x] Record what the review caught and what it missed: [phase-2-results.md](examples/phase-2-results.md)
- [x] Re-test the two rules added after round 2 (borderline findings, CDN image formats): both held in round 3
- [ ] Test the wider emoji rule (CP2), which no build has triggered yet

## Phase 3: modern-design references

Write one reference at a time, test it on the bakery and the vet dashboard, and pick the next one from the failures.

- [x] 3a: `direction.md` and step 1 of SKILL.md: [phase-3-results.md](examples/phase-3/phase-3-results.md)
- [ ] Re-test the reference research in an interactive session (the browser couldn't open external sites in the non-interactive tests)
- [ ] 3b: `components.md` (most failures in 3a: photo placeholders, per-item actions, board navigation on narrow screens, read-only display layouts)
- [ ] 3c: `tokens.md` (section spacing rhythm, semantic color roles)
- [ ] 3d: `motion.md`
- [ ] `resources.md`
- [ ] Write the `modern-design` SKILL.md rules
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
