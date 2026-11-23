---
name: design-review
description: "Reviews any interface and reports or fixes what is wrong. Two modes: own project (finds generic AI-made patterns and UI mistakes, checks it in a real browser with screenshots, then fixes them) and any public URL (read-only audit that returns a full report: critical issues, minor issues, outdated patterns, tips, improvement proposals and alternatives). Use before delivering UI, when it looks generic, or when the user shares a link to audit. Designing belongs to modern-design. (auditar web, revisar página, informe, parece hecho con IA, genérico, revisar visualmente, capturas, responsive)"
argument-hint: "[url]"
license: MIT
---

# Design Review

Find what makes an interface look generic or work badly, show the evidence, and either fix it (own project) or report it (URL audit).

## When to use

- The user asks to review, audit or check a page, a screen or a whole site.
- UI has just been built or changed and is about to be delivered.
- The user says it looks generic, templated, cheap or "made with AI".
- The user shares a link and wants an opinion, a critique or a report.

Designing something new or redesigning from scratch belongs to `modern-design`. This skill can hand its findings over to it.

## Choose the mode

- **Own project:** the code is in the working directory, or the user's app runs locally. Review, check in the browser, then fix.
- **URL audit:** the user shares a public link, or passes one as the argument, to a site they want assessed. Read-only: report, never change anything.

When a URL points to the user's own project and its code is here, use own-project mode. When it is unclear, ask.

## Process

### Mode 1: Own project

1. **Context.** Read the design brief when one exists (from `modern-design`), and note the product, audience and stack. The brief overrides the checklist: a pattern the brief chose on purpose is not a finding.
2. **Review the code.** Load `${CLAUDE_SKILL_DIR}/references/unslop-checklist.md`. Go through the pages and components the user named, or the main page when none was named. Run the template test first, then the checklist by category. Note each finding with the file and line.
3. **Browser check.** When the app can be started or is already running, load `${CLAUDE_SKILL_DIR}/references/visual-qa.md` and follow it: screenshots at 375, 768 and 1440 px with reduced motion, the checks script, the focus pass. When the app can't run, say so and continue with the code review only.
4. **Prioritise.** Sort findings into critical, minor, outdated and tip (definitions in the checklist). Show the user the list, critical first, before changing anything large.
5. **Fix.** Fix critical and minor issues directly when the fix is local (a color, a size, a missing state). For outdated patterns, fix them when the user agrees or the brief already points that way. Send problems of direction, tokens, components or motion back to `modern-design`, to the step that owns them.
6. **Verify.** Take the screenshots again at the same widths and compare. Report what changed, with before and after files.

### Mode 2: URL audit (read-only)

Limits:

- Read-only. Never submit forms, log in, buy anything or change anything on the site. Dismissing a cookie banner to see the page is fine; say so in the report.
- Public pages only. When a page needs a login, skip it and say so.
- Three pages at most: the URL given plus up to two linked pages that matter most (for example pricing or a product page). Ask the user when they want specific pages.

Steps:

1. **Set up.** Take the domain without `www.` and today's date, and create `audits/<domain>-<YYYY-MM-DD>/`. When `audits/` isn't in the project's `.gitignore`, mention it.
2. **Screenshots.** Load `${CLAUDE_SKILL_DIR}/references/visual-qa.md` and follow it for each page: reduced motion on, scroll through, screenshots at 375, 768 and 1440 px, the checks script, and the focus pass.
3. **Read the HTML.** Use the page source (`playwright-cli --raw eval "() => document.documentElement.outerHTML"` or WebFetch) for structure, heading order, meta tags, fonts, scripts and image attributes.
4. **Lighthouse,** when Chrome is available:
   ```bash
   npx --yes lighthouse <url> --quiet --chrome-flags="--headless" --output=json --output-path=audits/<domain>-<YYYY-MM-DD>/lighthouse-<page>.json
   ```
   Read the four category scores and the failing audits that matter for design (contrast, tap targets, image sizes, layout shift, LCP). When Chrome is missing or Lighthouse fails, record the reason in the report header and continue without it. Never invent scores.
5. **Review.** Load `${CLAUDE_SKILL_DIR}/references/unslop-checklist.md`. Run the template test, then the checklist by category, using the screenshots, the checks output, the HTML and Lighthouse together. Run the "Outdated, measurable" script at 1440 px, so the Outdated section starts from evidence rather than taste.
6. **Write the report.** Load `${CLAUDE_SKILL_DIR}/references/audit-report.md` and follow its format. Write it in the user's language and save it as `audits/<domain>-<YYYY-MM-DD>.md`. In the chat, give the three summary priorities and the path to the report.

## Rules

- Flag a pattern when it hurts this page in this context; leave it alone when the "Fine when" line of the checklist applies or the brief chose it, and say so when it's borderline.
- Tag a finding `measured` when a tool or the code shows it, and `judgment` when it rests on design criteria. Tag "outdated" findings as judgment unless something measurable is also wrong.
- Give a number only when a tool produced it.
- Point every finding to a screenshot or a selector (URL audit), or a file and line (own project). Drop findings you can't locate.
- Recapture before reporting a visual problem that might come from lazy loading, a slow font or an animation.
- Keep praise short and specific when something is well done: the report should also say what to keep, so the owner doesn't remove good work by accident.
- When a well-designed page uses a pattern from the checklist with clear intent and good execution, treat it as fine and don't list it as outdated.
- Write in a neutral tone; the site may belong to the user, a client or a competitor.
- Stay inside the limits of the mode: in URL audits never change, submit or log in; in own-project mode ask before large or visual-direction changes.

## Hand-off

- **Own project:** when issues are found that belong to direction, tokens, components or motion, continue with `modern-design` at that step, then run this review again.
- **URL audit:** no hand-off. When the user owns the site and wants the proposals applied, continue with `modern-design`.

## References

Load only when needed:

- `${CLAUDE_SKILL_DIR}/references/unslop-checklist.md`: generic patterns and common mistakes, with when each is fine and where it goes in the report (both modes, review step)
- `${CLAUDE_SKILL_DIR}/references/visual-qa.md`: screenshot process, checks script and what to look for at each width (both modes, browser step)
- `${CLAUDE_SKILL_DIR}/references/audit-report.md`: report format and file locations (URL audit, last step)
