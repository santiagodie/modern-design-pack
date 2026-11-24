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
- Phase 3a tests in `docs/examples/phase-3/` (bakery landing and veterinary dashboard built with the direction step, then reviewed).
- `modern-design` step 3: `references/sections/` (an index with the sections each page job needs, and one file per mandatory section for pages that persuade: header, hero, CTA, social proof, benefits, forms, final CTA, footer, each with phone, tablet and desktop layouts) and `references/responsive.md` (capability-first touch baseline, tablet section, what emulation can't reproduce). Replaces the empty `components.md`.
- `design-review`: screenshots at 375, 768, 1024 and 1440 px with touch emulated through device presets at the first three, phone landscape when the page has fixed elements, a "Needs a real device" section in reports, measurable mobile checks MN1–MN5 with a detection script, and optional reading of `modern-design`'s section files.
- The author's research (`docs/research/landing-field-guide/`) and its cited sources in `docs/SOURCES.md`.

### Changed (phase 3b)

- Skills may read each other's files inside the plugin; the rule is now "nothing outside the plugin".
- Landing-page sections live in `modern-design/references/sections/`. `references/components/` is kept for reusable pieces (batch D).

### Changed

- Consolidated the six initial skills (`design-direction`, `design-tokens`, `compose-ui`, `motion`, `unslop-review`, `visual-qa`) into two. The first four became references of `modern-design`, and `visual-qa` became a reference of `unslop-review`.
- Renamed `unslop-review` to `design-review` and added the URL audit mode. The anti-slop sources moved to `references/unslop-checklist.md`.
- `audits/` added to `.gitignore`.
