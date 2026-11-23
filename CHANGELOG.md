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

### Changed

- Consolidated the six initial skills (`design-direction`, `design-tokens`, `compose-ui`, `motion`, `unslop-review`, `visual-qa`) into two. The first four became references of `modern-design`, and `visual-qa` became a reference of `unslop-review`.
- Renamed `unslop-review` to `design-review` and added the URL audit mode. The anti-slop sources moved to `references/unslop-checklist.md`.
- `audits/` added to `.gitignore`.
