# Phase 2 results: design-review

Date: 2026-11-23. Skill version: 0.1.0 (unreleased). Every run was a non-interactive Claude Code session (`claude -p`) with the plugin loaded through `--plugin-dir`, so the skill had to make every decision without asking.

## Setup

| | |
|---|---|
| Browser automation | Playwright agent CLI 0.1.25 (`npm install -g @playwright/cli@latest`). It opens pages, emulates reduced motion, resizes, takes full-page screenshots and evaluates JS. |
| Lighthouse | 13.6.0 via `npx`, using the installed Chrome. Works on Windows. |
| Machine | Windows 11, Node 24, no Python. |

## Tests

| Test | Mode | Runs | Evidence |
|---|---|---|---|
| santiagodie.com/graduate-salary-predictor (looks AI-made) | URL audit | 1 | [report](url-audits/santiagodie.com-2026-11-23.md) |
| linear.app (well designed) | URL audit | 2 | [run 1](url-audits/linear.app-2026-11-23.run1.md), [run 2](url-audits/linear.app-2026-11-23.md) |
| berkshirehathaway.com (old site) | URL audit | 1 | [report](url-audits/berkshirehathaway.com-2026-11-23.md) |
| Bakery landing built by Claude Code with no skills loaded (`--disable-slash-commands`) | Own project | 2 | [run 1 notes](bakery/review-notes.run1.md), [run 2 notes](bakery/review-notes.run2.md) |

The reports are written in Spanish because the test prompts were in Spanish; the skill writes in the user's language.

Only the reports and six compressed screenshots are committed (about 450 KB). The plugin is installed from this repository root, so everything in `docs/` ships with each install. The reports mention evidence files (`home-375.png`, `lighthouse-home.json` and so on) that existed during the test but are not in the repository.

## Screenshots

| | |
|---|---|
| Bakery before review (1440 px) | [bakery-before-1440.jpg](screenshots/bakery-before-1440.jpg) |
| Bakery after review, run 2 (1440 px) | [bakery-after-1440.jpg](screenshots/bakery-after-1440.jpg) |
| AI-made site, home (1440 px) | [ai-site-home-1440.jpg](screenshots/ai-site-home-1440.jpg) |
| AI-made site, home (375 px, header overflow) | [ai-site-home-375.jpg](screenshots/ai-site-home-375.jpg) |
| linear.app, first screen (1440 px) | [linear-home-1440-fold.jpg](screenshots/linear-home-1440-fold.jpg) |
| Berkshire Hathaway on a phone with no viewport meta (375 px) | [berkshire-home-375-mobile.jpg](screenshots/berkshire-home-375-mobile.jpg) |

## What it caught well

- **AI-made site (santiagodie.com).** It found every major template tell: the centered hero with two buttons on a blue-to-purple gradient, three identical emoji cards, a stat band, and colored side bars that encode nothing. It also caught real problems underneath: Tailwind compiled in the browser (lab TBT about 10 s on the form), header overflow at 375 px, labels without `for`, and focus moving through controls in a closed sidebar. It said what to keep.
- **Old site (Berkshire Hathaway).** It went straight to measurable faults: no viewport meta (text rendered at about 6 px on phones), quirks mode from a script placed before the DOCTYPE, an invalid charset, Analytics loaded twice, link contrast of 4.00:1, and 17 px tap targets. It explicitly kept the austere look as a brand decision and fixed only the execution, which is the right call.
- **Well-designed site (linear.app).** No aesthetic false positives in run 1. It explicitly declined to flag the dark theme, Inter, uppercase mono labels or the three-column figures, because they are used with intent. The real issues it found are verifiable: the mobile menu button has no accessible name, demo UI in the hero sits in the tab order with 14 px targets, a reduced-motion gap in a dot animation, and secondary gray at 3.45:1.
- **Bakery (own project, run 2).** It took before and after screenshots, fixed focus (1:1 → 12.6:1 on the footer), contrast (4.2:1 → 5.38:1), the heading outline, a missing favicon, tap targets and balanced headlines. It removed the italic accent word, the headline period, the repeated eyebrows, the emoji feature icons, the decorative stripes and the colored testimonial borders. It marked placeholder phone, email, address and reviews without inventing replacements, and kept the cream palette and the two hero buttons with stated reasons.
- **Measured "Outdated".** With the Chrome-based signals (OM1–OM12), the Outdated sections now open with evidence: render-blocking scripts, missing viewport, images without `srcset`. Aesthetic findings come after, marked as judgment.

## False positives

| Site | Finding | Cause | Fix |
|---|---|---|---|
| linear.app (run 1) | "Inconsistent price format: $0 vs 10 US$" | The audit browser ran in Spanish, so `Intl` formatted the prices for Spanish | Locale rule in the checklist. Fixed in run 2. |
| linear.app (run 1) | Hero headline rated **critical** from an 18.9 s lab LCP | Simulated slow mobile treated as real-user data. Run 2 measured 4.7 s on the same page. | Lab-data rule in the checklist and report format. In run 2 it became minor and labelled "lab". |
| linear.app (run 2) | Three equal cards and a stat band listed under Outdated | The report itself called the cards "borderline"; run 1 had excluded them | Rule: borderline findings go to Tips, never Outdated. Added after run 2, not re-tested. |
| linear.app (both) | "0 of 7 images in WebP/AVIF" from the OM script | The CDN negotiates the format with `f=auto`, so URLs have no extension | Run 1 caught it by hand. Rule added: confirm OM5 with Lighthouse or the content type. |
| Wording | One report said santiagodie.com "passes the template test" (meaning generic), another said linear "passes" (meaning specific) | Ambiguous phrasing | Rule: describe the result in plain words, never "pass" or "fail". |

## What it missed

- **Bakery: emoji used as product photos.** It removed emoji from the feature band but left them as the product images, deferring to real photos. That is reasonable, since it won't invent photos, but a neutral placeholder or an illustration in the hero's style would have read less like a template.
- **Bakery: the empty history panel.** Removing the stripes left a plain brown block that is still filler (CP4). The review didn't flag the result of its own change.
- **Bakery: overall structure.** After the fixes, the page still follows the generic landing sequence. Run 1 named this (O1) but rightly left it to `modern-design`. design-review polishes; it doesn't redesign.
- **Coverage gaps.** The focus pass skipped pricing on linear (run 2), and states behind forms (the salary result screen) can't be seen in read-only mode. Both are stated in the reports.

## Environment problems found

1. **Run 1 of the bakery failed to use the skill properly.** The child session couldn't read the skill's references (outside its working directory in non-interactive mode) and couldn't use the shell because a local hook didn't find Git Bash. It still produced a sensible code-only review, but with no screenshots. Fixed for run 2 with `--add-dir` and `CLAUDE_CODE_GIT_BASH_PATH`. The skill now uses `${CLAUDE_SKILL_DIR}` paths so references resolve without ambiguity.
2. **`file://` pages render blank** in Playwright CLI. Pages must be served over HTTP. Python isn't always present, so the rule doesn't assume it.
3. **Leftover files.** The child sessions left helper scripts (`tools/`, `qa/*.js`) and `.playwright-cli/` in the working directory. There are now rules to keep them in the screenshot folder and clean up.

## Rules changed

After round 1, then re-tested in round 2:

- `visual-qa.md`: serve over HTTP first (new step 1); keep helper scripts out of the project.
- `unslop-checklist.md`: report the template test in plain words; rule out lab-data and locale artefacts before reporting; well-executed intent goes to "What to keep".
- `audit-report.md`: label Lighthouse numbers as lab data; new "What to keep" section in the template.
- `SKILL.md` (both skills): reference paths use `${CLAUDE_SKILL_DIR}`.

After round 2, re-tested in round 3 (below):

- `unslop-checklist.md`: borderline findings go to Tips; confirm OM5 against CDN format negotiation.
- `visual-qa.md`: run `playwright-cli` from the screenshot folder or delete `.playwright-cli/`.

## Round 3 (phase 3a)

- **linear.app, third run** ([report](url-audits/linear.app-2026-11-23.run3.md)). Both rules held. The two patterns that run 2 had put under Outdated (uppercase label above the logos, three equal cards) now appear as Tips marked "borderline", and the Outdated section says plainly that it found no dated aesthetic patterns. OM5 recognised the CDN's `f=auto` format negotiation, confirmed it with Lighthouse, and reported only the missing `srcset`. Helper scripts stayed in the audit folder, as the rule asks, but the session couldn't delete them in non-interactive mode.
- **An unmodified SaaS template from a public AI-builder gallery** (report kept out of the repository). The page could belong to any competitor. It found 8 generic patterns (template hero, pill label above every section, six identical icon-tile cards, 01/02/03 steps, gradient headline text, default component styling with a single default font, fade-in on every section), placeholder client logos, a hotlinked product screenshot from another brand, calls to action that do nothing, contradictory claims, and dark-mode contrast failures.
- **Two rules added in phase 3a.** Re-checking the areas a fix changed (`visual-qa.md`) was exercised: both own-project reviews caught and fixed regressions their own fixes had introduced. The wider emoji rule (CP2) was not triggered, because the new builds used no emoji. It is still untested. See [phase-3-results.md](phase-3/phase-3-results.md).

## Comparison

| | AI-made site | Well-designed site | Old site | Bakery (own project) |
|---|---|---|---|---|
| Generic patterns found | 6 of 6 obvious ones | 0 in run 1; 2 borderline in run 2 | 0, and kept the look on purpose | 7 fixed, 2 left (emoji photos, empty panel) |
| Measured issues | Performance, overflow, form a11y | Menu name, tab order, contrast, reduced motion | Viewport, quirks mode, contrast, targets | Focus, contrast, headings, favicon, targets |
| Aesthetic false positives | none seen | 0 in run 1, 2 in run 2 | none | none |
| Setup false positives | none | locale, lab LCP (fixed in run 2) | none | n/a |

## Limitations of this test

- One or two runs per site. Lab metrics and judgment calls vary between runs (linear's LCP went from 18.9 s to 4.7 s).
- The AI-made example is the author's own site, chosen to avoid publishing a critique of a third party. It isn't a blind test.
- Results come from one model in non-interactive mode. Interactive sessions can ask questions, which should reduce wrong guesses about pages and intent.
