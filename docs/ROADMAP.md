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
- [x] 3b, batch A: `sections/` for pages that persuade (index plus header, hero, CTA, social proof, benefits, forms, final CTA, footer) and `responsive.md` (phone, tablet, desktop; capability over device): [phase-3b-results.md](examples/phase-3b-results.md)
- [ ] 3b, batch B: important sections (problem, how it works, demo, testimonials, pricing, trust, FAQ, and "where and when" for local businesses: address, weekly hours, map link, how to get there)
- [ ] 3b, batch C: sections for pages that operate (app bar, boards, tables, side panels, per-item actions, read-only displays)
- [ ] 3b, batch D: `references/components/` for reusable pieces (buttons, cards, inputs, badges) shared by several sections
- [x] Reasoning layer in `modern-design`: `reasoning.md` (with `reasoning-examples.md`), `pages/` (11 files, one per group of page types), `principles.md` and `ethics.md`, with one order of authority; the central promise and, per page, moment, main doubt and persuasion dial in `design-brief.md`; in `design-review` the DP family, the promise check and the audit rules against generic advice
- [ ] "Layout & responsive" subsection inside each `pages/` file: what each page type adds in layout and responsive (the reasoning per type is already there)
- [ ] Verify before citing, then update `pages/`: CNIL and AEPD decisions on reject-vs-accept parity in cookie banners (`pages/legal.md`, also `ethics.md` §3); NIST SP 800-63B Rev. 4 wording on SMS and phone codes as a restricted authenticator (`pages/authentication.md`); the EDPB 2026 coordinated enforcement action on transparency (`pages/legal.md`)
- [ ] Test the reasoning layer: rebuild the bakery from scratch (does the brief state a promise and per-page doubts?) and audit a page with prices or a cookie banner (does the DP family fire, and only on real cases?)
- [ ] 3c: `tokens.md` (section spacing rhythm, semantic color roles, density from the brief's persuasion dial per page, and two requirements from the 3b test: focus-ring tokens that keep 3:1 on every surface, dark bands and footers included; and touch-target tokens, at least 44 px on coarse pointers, also for inline links, nav items and footer links. Section files point to these tokens instead of repeating them)
- [ ] 3d: `motion.md` (how much animation each page allows, from the brief's persuasion dial: more room on high, almost none on low and none)
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
