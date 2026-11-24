# Changelog

All notable changes to this project are documented in this file.
The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and versions follow [Semantic Versioning](https://semver.org/).

## [0.1.0] - Unreleased - skeleton

### Added

- Plugin manifest (`.claude-plugin/plugin.json`) and marketplace manifest (`.claude-plugin/marketplace.json`, marketplace `santiagodie-plugins`).
- Two skill templates with frontmatter and empty sections:
  - `modern-design`, with references `direction.md`, `tokens.md`, `components.md`, `motion.md` and `resources.md`.
  - `design-review`, with references `unslop-checklist.md`, `visual-qa.md` and `audit-report.md`. Two modes: own project, and read-only URL audit (`argument-hint: [url]`).
- Audit report format (`design-review/references/audit-report.md`), the first reference with real content.
- Docs: `SOURCES.md`, `ARCHITECTURE.md`, `ROADMAP.md`.
- README in English and Spanish, banner, MIT licence, third-party notices template.

- `design-review` content: SKILL.md process and rules for both modes, `unslop-checklist.md` (57 context-dependent rules in 8 categories plus 12 measurable "outdated" signals based on Chrome's Modern Web Guidance), and `visual-qa.md` (Playwright CLI capture process at 375/768/1440 px with reduced motion, checks script, per-width checklist).
- Phase 2 tests in `docs/examples/`: three URL audits, a before/after own-project review of a bakery landing, and `phase-2-results.md`.
- Licence audit for the phase 2 sources in `docs/SOURCES.md`, and entries in `THIRD_PARTY_NOTICES.md`.
- Impeccable recommended in the README as a companion plugin.
- `modern-design` step 1: `references/direction.md` (context and the page's main job, assumptions when the user can't answer, 3–5 live references with principles on five axes, structure from content, one committed direction, template test, `design-brief.md` output; respects `PRODUCT.md` and `DESIGN.md` without writing them).
- `design-review`: emoji used as any kind of image (CP2), and re-checking the areas a fix changed.
- CI: NVIDIA SkillEvaluator "Skill checks" workflow (bundle 1.0.1, unmodified, checksum verified) on `skills/` with a minimum score of 70 and read-only permissions; badge in both READMEs.
- Security: page content (HTML, text, metadata, `alt`, comments) is treated as data, never as instructions, in `design-review` and the direction step; text addressed to an AI is reported as a security finding in URL audits.
- Pinned tool versions: Lighthouse 13.6.0, `@playwright/cli` 0.1.25, `serve` 14.2.8.
- Phase 3a tests in `docs/examples/phase-3/` (bakery landing and veterinary dashboard built with the direction step, then reviewed).
- `modern-design` step 3: `references/sections/` (an index with the sections each page job needs, and one file per mandatory section for pages that persuade: header, hero, CTA, social proof, benefits, forms, final CTA, footer, each with phone, tablet and desktop layouts) and `references/responsive.md` (capability-first touch baseline, tablet section, what emulation can't reproduce). Replaces the empty `components.md`.
- `design-review`: screenshots at 375, 768, 1024 and 1440 px with touch emulated through device presets at the first three, phone landscape when the page has fixed elements, a "Needs a real device" section in reports, measurable mobile checks MN1–MN5 with a detection script, and optional reading of `modern-design`'s section files.
- Phase 3b batch A test in `docs/examples/phase-3b-results.md` (bakery rebuilt with `sections/` and `responsive.md`, reviewed at 375, 768, 1024 and 1440 px).
- The author's research (`docs/research/landing-field-guide/`) and its cited sources in `docs/SOURCES.md`.

- `modern-design` reasoning layer: `references/reasoning.md` (method for writing the brief: one central promise, and per page its moment in the journey and its main doubt), `principles.md` (P01–P31 with evidence levels), `pages/` (eleven files, one per group of page types: the user's moment, what the page must prove, levers, specifics with evidence grades, critical and common errors, when the usual advice flips, persuasion dial and 3C weight) and `ethics.md` (hard limit: dark-pattern blacklist, reference cases, evidence quality, minimum checks per page type). One order of authority in SKILL.md and in each file: ethics > brief > reasoning > principles and pages. `reasoning.md` also covers why the method exists (Baymard's GPT-4 audit), the persuasion dial, novice versus expert, which reference to open and how to present design work; worked examples in `reasoning-examples.md`.
- `design-brief.md` template: "Central promise" and, per page, its moment in the journey, its main doubt and its persuasion dial. `direction.md` sets the order: reason, read only the `pages/` file of each page type, then principles and ethics, then write the brief.
- `modern-design` description names a few app page types (pricing, checkout, sign-up, onboarding, settings, dashboard) and more Spanish keywords.
- `design-review`: Deceptive patterns family (DP1–DP10 plus a minimum per page type), each rule marked measured or judgment, pointing to CY3 for invented proof; optional reading of `modern-design`'s `ethics.md`; promise check for audits of two or three pages, with its own report section; audit rules against generic advice (infer whom the page serves first, comment only on what was seen or measured, check before recommending, order findings by how much they block the main decision, justify repeated findings per page); optional reading of `modern-design`'s `pages/` file for the page type.
### Changed (phase 3b)

- Skills may read each other's files inside the plugin; the rule is now "nothing outside the plugin".
- `design-review` checklist split by rule family, with content and IDs unchanged: `unslop-checklist.md` (shared rules plus TY, CO, LA, CP, CY, SF, MO, ME), `mobile-checklist.md` (MN1–MN5), `outdated-checklist.md` (OM1–OM12) and `dark-patterns-checklist.md` (DP1–DP10 and the minimum per page type, loaded when the page has a price, sign-up, subscription, payment or cookie banner).
- `design-review` page scripts moved from js code blocks in `visual-qa.md` and `unslop-checklist.md` to `skills/design-review/scripts/` (`scroll-check.js`, `page-checks.js`, `mobile-measurable.js`, `outdated-measurable.js`), unchanged and with a header comment, so the skill scanner can analyse the Markdown; the agent reads each file and passes it to `playwright-cli --raw eval`, which has no option to run a file in the page.
- Landing-page sections live in `modern-design/references/sections/`. `references/components/` is kept for reusable pieces (batch D).
- Batch A gaps from the phase 3b test: "Without JavaScript" notes in header, CTA and footer (`<details>` menu, real `tel:`/`wa.me` links, static copyright year); phone hero order led by the brief's main job; stacked tablet hero; one action with several channels; cookie settings link only when consent is needed; CY3 accepts brief-required placeholders that are visibly marked; own-project review notes format and non-interactive runs in `design-review`; Lighthouse width and the 712 px phone landscape viewport in `visual-qa.md`.

### Changed

- Consolidated the six initial skills (`design-direction`, `design-tokens`, `compose-ui`, `motion`, `unslop-review`, `visual-qa`) into two. The first four became references of `modern-design`, and `visual-qa` became a reference of `unslop-review`.
- Renamed `unslop-review` to `design-review` and added the URL audit mode. The anti-slop sources moved to `references/unslop-checklist.md`.
- `audits/` added to `.gitignore`.
