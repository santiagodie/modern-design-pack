---
name: design-review
description: "Reviews any interface and reports or fixes what is wrong. Two modes: own project (finds generic AI-made patterns and UI mistakes, checks it in a real browser with screenshots, then fixes them) and any public URL (read-only audit that returns a full report: critical issues, minor issues, outdated patterns, tips, improvement proposals and alternatives). Use before delivering UI, when it looks generic, or when the user shares a link to audit. Designing belongs to modern-design. (auditar web, revisar página, informe, parece hecho con IA, genérico, revisar visualmente, capturas, responsive)"
argument-hint: "[url]"
license: MIT
---

# Design Review

> Skeleton (v0.1.0). Only `references/audit-report.md` is written. The rest of this skill is written in phase 2. See `docs/ROADMAP.md` in the repository.

## When to use

TODO

## Choose the mode

- **Own project:** the user wants their own UI reviewed (code in the working directory, or their app running locally). Review, check in the browser, then fix.
- **URL audit:** the user shares a link, or passes one as the argument, to a site they want assessed. Read-only: report, never change anything.

When it is unclear whether a URL is the user's own project, ask.

## Process

### Mode 1: Own project

1. **Review** the code and design decisions for generic AI-made patterns and common UI mistakes. Load `references/unslop-checklist.md`. TODO
2. **Browser check**, when a running app is available: screenshots at mobile, tablet and desktop widths, contrast, focus states, overflow, loading and empty states. Load `references/visual-qa.md`. TODO
3. **Fix** what was found. Send problems of direction, tokens, components or motion back to `modern-design`, to the step that owns them. TODO

### Mode 2: URL audit (read-only)

Limits:

- Read-only. Never submit forms, log in, accept purchases or change anything on the site.
- Public pages only. When a page needs a login, skip it and say so in the report.
- Three pages at most: the URL given plus up to two linked pages that matter most (for example pricing or a product page).

Steps:

1. **Screenshots** with Playwright at 375, 768 and 1440 px, full page, saved in `audits/<domain>-<YYYY-MM-DD>/`. TODO
2. **Read the HTML**: structure, headings, meta tags, fonts, images, scripts. TODO
3. **Lighthouse** via `npx lighthouse` when Chrome is available. When it is not, record that in the report header and continue without it. TODO
4. **Review** against `references/unslop-checklist.md` and the browser criteria in `references/visual-qa.md`. TODO
5. **Write the report** with the format in `references/audit-report.md`, in the user's language, saved as `audits/<domain>-<YYYY-MM-DD>.md`.

## Rules

TODO. Write every rule as "do X when Y". Never write absolute bans.

## Hand-off

TODO. Own project: when issues are found, go back to `modern-design`, then run this review again. URL audit: no hand-off; when the user owns the site and wants the proposals applied, continue with `modern-design`.

## References

Load only when needed:

- `references/unslop-checklist.md`: generic patterns and common mistakes (both modes)
- `references/visual-qa.md`: browser check criteria (both modes)
- `references/audit-report.md`: report format (URL audit only)
