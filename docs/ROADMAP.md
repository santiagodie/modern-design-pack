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
- [ ] 3b, batch D: `references/ui/components/` for reusable pieces (buttons, cards, inputs, badges) shared by several sections
- [x] Reasoning layer in `modern-design`: `reasoning.md` (with `reasoning-examples.md`), `pages/` (12 files, one per group of page types; commerce is split in two by moment in the journey), `principles.md` and `ethics.md`, with one order of authority; the central promise and, per page, moment, main doubt and persuasion dial in `design-brief.md`; in `design-review` the DP family, the promise check and the audit rules against generic advice
- [ ] "Layout & responsive" subsection inside each `pages/` file: what each page type adds in layout and responsive (the reasoning per type is already there)
- [ ] Verify before citing, then update `pages/`: CNIL and AEPD decisions on reject-vs-accept parity in cookie banners (`pages/legal.md`, also `ethics.md` §3); NIST SP 800-63B Rev. 4 wording on SMS and phone codes as a restricted authenticator (`pages/authentication.md`); the EDPB 2026 coordinated enforcement action on transparency (`pages/legal.md`)
- [ ] Test the reasoning layer: rebuild the bakery from scratch (does the brief state a promise and per-page doubts?) and audit a page with prices or a cookie banner (does the DP family fire, and only on real cases?)
- [x] Content rules, decisions and implementation: slop indicators from a third screenshot (TY11, CO9, CP7–CP9, CY6–CY8; checklist split into `unslop-checklist.md` and `copy-states-checklist.md`); the no-invention rule in `content-truth.md` with marked placeholders and `content-needed.md`; `site-decisions.md` above the brief in the order of authority; `implementation.md`, an "Implementation" subsection per page type, and OM13 (Google Fonts)
- [x] Test the no-invention rule: rebuild the bakery without giving any business data: [no-invention-results.md](examples/no-invention-results.md). No explicit fact was invented; four implicit claims about how the business works reached headings, labels and the meta description
- [x] Fix implicit claims: `content-truth.md` covers every visible or indexed text (three allowed sources) and treats an unconfirmed service as a question; the brief separates design assumptions from business facts; `content-needed.md` gains business-question rows with the sections that depend on them, and "proposal: confirm"; CY3 gains a claims review; two placeholder styles (dashed for data, lighter for running text)
- [x] Re-run the no-invention test after the implicit-claims fix: [no-invention-2-results.md](examples/no-invention-2-results.md). None of the four implicit claims came back, and a request to invent reviews was declined; gaps left: country assumed for the legal pages and `og:locale`, CY3 not checking `og:*` or the review's own additions, buttons whose destination is a placeholder
- [x] Claims round 2: country or jurisdiction as a standard business question (`content-truth.md`, `content-needed.md`); actions whose destination is a placeholder lead to its section or show as a placeholder (`content-truth.md`, `cta.md`); CY3 covers `og:*`, `lang`, `hreflang`, structured data and what the review itself adds; test-derived bakery and vet examples replaced in the references
- [ ] Next no-invention test, run 3: a business that is not a bakery (and not the vet clinic), with a page that has a form, to check the `implementation.md` MUST rules on labels, `autocomplete`, `inputmode` and error messages. Send the request to invent reviews as a real user message in the session (for example the first message of a new build), not from the coordinator: in run 2 the agent noticed the request came from the orchestrator
- Discarded for now: sample values in screenshots (a mode that swaps placeholders for labelled example values so a client can judge the look). It is the same path by which invented content gets published (CY3); revisit only with a mechanism that can't reach the real page
- Watch for convergence: phase 3a and no-invention runs 1 and 2 all chose a near-white named "harina" (flour), and 3a and run 1 chose Archivo; run 2 changed the font (Barlow) but kept the base and the "sign plus hours board" idea. Part of the cause was in the references: the examples in `direction.md`, `hero.md`, `cta.md`, `final-cta.md`, `ethics.md` and the content-needed template came from our own bakery tests ("out of the oven today" board, sourdough bakery, "Order for tomorrow"). They were replaced by examples from varied businesses in claims round 2. If run 3, with another business, still converges on the same base or font, treat it as a plugin default and fix the cause (`direction.md`, generator defaults list)
- [ ] Test `site-decisions.md`: record a user decision that overrides a checklist rule and check that `design-review` doesn't report it, except a measured failure marked "decided by user"
- [ ] Verify before citing, then update: Next.js 16.4 and TanStack Start 1.0 claims in `implementation.md`
- [x] 3c: tokens step: `tokens.md` (three tiers, the brief's dial to density, rhythm and motion budget, the method against convergence, mandatory focus, target, placeholder and reduced-motion tokens, CSS by default with DTCG and Tailwind v4 as dated options, the record in `site-decisions.md`), `tokens-color.md`, `tokens-color-dark.md`, `tokens-type.md` and `tokens-space.md`, from five reference skills filtered by our rules (decision table in `docs/research/tokens-sources.md`). Target size aligned in `implementation.md` and `responsive.md`: MUST 24 × 24 CSS px (WCAG 2.5.8), SHOULD 44 px for primary actions on coarse pointers
- [ ] 3d: `motion.md` (how much animation each page allows, from the brief's persuasion dial: more room on high, almost none on low and none). Names already reserved in `tokens.md` §3: `--duration-feedback`, `--duration-small`, `--duration-overlay`, `--duration-sheet`, `--ease-enter`, `--ease-exit`, `--ease-move`
- [ ] **Next:** knowledge audit by branches: check each reference family (pages, sections, tokens, implementation) for gaps and contradictions, one branch per family, with the deferred rows of `docs/research/tokens-sources.md` as input for tokens
- [ ] Test the tokens step: build a page for a business outside the anti-seed list and check that the palette and faces cite the brief, not a default (TY11, CO1, CO8)
- [ ] `resources.md` (color, fonts and token links added with the tokens step; galleries, component libraries, backgrounds and motion pending)
- [ ] Write the `modern-design` SKILL.md rules
- [ ] Remove the "Sources to merge" sections as they are used (done in `tokens.md`)

### Pending verification

Claims kept out of the skills, or left as they are, until checked at a primary source:

- iOS Safari zooming the page when focus lands on an input under 16 px (stated in `responsive.md`; Apple doesn't document it).
- Safari 17 as the version that added `@font-face size-adjust`.
- Tailwind v4's single `--spacing` base variable.
- Android's 48 dp minimum target.
- From Modern Web Guidance: the "maximum within 2.5× the minimum" rule for fluid type; `<meta name="text-scale">`; a Chromium bug with `oklch` neutrals; forced colours removing `box-shadow`; Safari's `accent-color` caveat; support for `contrast-color()`, `text-box`, `corner-shape`, `hyphenate-limit-chars`, `font-size-adjust: from-font` and container style queries.
- EN 301 549: version in force and the WCAG version it references.

## Phase 4: Tests with real briefs

- [ ] Run the full flow on several real projects with different contexts (for example a SaaS landing page, a local business site, a dashboard)
- [ ] Check that both skills trigger on English and Spanish requests
- [ ] Record results and fix what fails

## Phase 5: Publish v0.1.0

- [ ] Add a square PNG icon (512 to 2048 px) for the plugin directory
- [ ] Update the README status and Known Limitations
- [ ] Move CHANGELOG 0.1.0 out of Unreleased
- [ ] Tag `v0.1.0` and publish
