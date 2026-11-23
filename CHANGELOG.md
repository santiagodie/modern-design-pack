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

### Changed

- Consolidated the six initial skills (`design-direction`, `design-tokens`, `compose-ui`, `motion`, `unslop-review`, `visual-qa`) into two. The first four became references of `modern-design`, and `visual-qa` became a reference of `unslop-review`.
- Renamed `unslop-review` to `design-review` and added the URL audit mode. The anti-slop sources moved to `references/unslop-checklist.md`.
- `audits/` added to `.gitignore`.
