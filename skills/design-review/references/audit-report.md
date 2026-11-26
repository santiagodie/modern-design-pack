# Audit report format

> **Covers:** the URL audit report: what is specific to the report (language, measured outdated signals first, lab data, Floor first, empty sections), the section guide, the finding block, file locations and the template.
> **Read when:** URL audit mode, last step, when writing the report.
> **Not here:** how to judge, tag and order findings → references/review-method.md; the checks → references/unslop-type-color.md, references/unslop-layout.md, references/unslop-components.md, references/copy-states-checklist.md; own-project review notes → design-review SKILL.md, Mode 1 step 7
> **Owner:** design-review
> **Sources:** our own format

Reference for `design-review`, URL audit mode. Load only when writing the report.

## How to write it

How to judge, tag, order and word each finding is in `review-method.md`: whom the page serves (§1), what may be commented on and numbers only from tools (§2), `measured` and `judgment` (§3), severity (§4), order (§5), the fields of a finding and a neutral tone (§6), levels (§8). What follows is only about this report.

- **Language:** this template is in English. Write the final report, headings included, in the language the user writes in.
- **Make "Outdated" measurable where you can.** Start the section with the signals in the "Outdated, measurable" table of `outdated-checklist.md` (legacy techniques with a modern Baseline replacement, after Chrome's Modern Web Guidance). Those are `measured`: name the signal, the evidence and the modern approach. Aesthetic findings (a dated gradient, a template hero) come after them and are `judgment`. Say so in plain words and name what they are being compared to.
- **Say what kind of measurement it is.** Lighthouse runs are lab data on a simulated slow phone; write "lab" next to those numbers and don't present them as what real visitors get. When a tool could not run, say which one and what that leaves unchecked.
- **Floor findings come first** inside Critical issues, and placeholders and claims go to "Before publishing", never to another section (`review-method.md` §8).
- **Empty sections stay.** Write "None found" instead of padding a section.

## Section guide

| Section | What goes in it |
|---|---|
| Critical issues | Broken layout at a tested width, unreadable text, inaccessible navigation or forms, very slow load, broken links or images on the main path, missing basics such as a page title or viewport meta. |
| Minor issues | Real problems with limited impact: inconsistent spacing, mixed icon styles, weak focus states, small contrast misses on secondary text, heavy images that don't block the page. |
| Outdated | First, legacy techniques with a modern replacement, checked on the page (`measured`). Then aesthetic patterns that make the site look older or more generic than its competitors (`judgment`). |
| Tips | Small, low-effort improvements that don't need a redesign. |
| Promise check | Only when two or three pages were audited: the first page's central promise in one sentence, and the first page where it stops being true (or that it holds throughout). |
| Improvement proposals | Larger changes with clear payoff: restructure a section, rewrite the hero, rebuild the type scale. |
| Alternatives | Different directions the site could take, each with its trade-off. Not fixes: options for the owner to weigh. |
| Before publishing | Blocking. Every placeholder found (CY3): `data-placeholder` elements, bracketed text in capitals such as `[PRICE]`, lorem ipsum. Each is `measured`, with its selector and screenshot. On a page that is already public, also name the most visible one in the Summary. Write "None found" when there are none. |

## Finding format

Number findings by section: C1, C2 for critical; M1 for minor; O1 for outdated; T1 for tips; P1 for proposals; A1 for alternatives. The fields are defined in `review-method.md` §6.

```markdown
### C1. Short title of the problem

- **What:** one or two sentences describing the problem.
- **Where:** `home-375.png`, selector `.hero h1`
- **Why it matters:** the effect on users or on the business.
- **How to fix:** a concrete change, with values when they help.
- **Evidence:** measured (Lighthouse accessibility 62; contrast 2.8:1) | judgment
```

## File locations

- Report: `audits/<domain>-<YYYY-MM-DD>.md`, for example `audits/example.com-2026-11-23.md`.
- Screenshots: `audits/<domain>-<YYYY-MM-DD>/`, named `<page>-<width>.png`, for example `home-375.png`, `pricing-1440.png`.
- Use the domain without `www.`. When `audits/` is not in the project's `.gitignore`, mention it to the user, since audits of third-party sites usually should not be committed.

## Template

```markdown
# Design audit: <domain>

| | |
|---|---|
| URL | <url> |
| Pages reviewed | <up to 3 URLs> |
| Date | <YYYY-MM-DD> |
| Viewports | 375 px, 768 px, 1024 px (touch emulated), 1440 px |
| Tools used | <for example: Playwright screenshots, HTML read, Lighthouse> |
| Tools not available | <for example: Lighthouse, Chrome not found, so performance and accessibility scores are not measured> or "None" |

## Summary

1. <Top priority, one line>
2. <Second priority, one line>
3. <Third priority, one line>

## Critical issues

### C1. <title>

- **What:**
- **Where:**
- **Why it matters:**
- **How to fix:**
- **Evidence:** measured | judgment

## Minor issues

### M1. <title>

<same fields>

## Outdated

> Measured legacy techniques first; design judgment about current conventions after, marked as such.

### O1. <title> (measured: <signal ID, for example OM5>)

<same fields>

### O2. <title> (judgment)

<same fields>

## Tips

### T1. <title>

<same fields>

## Promise check

<Only for audits of two or three pages. Promise: "<one sentence>", from <page and selector>. Holds on <pages>; breaks on <page>, <selector or screenshot>: <how>. (judgment)>

## Improvement proposals

### P1. <title>

<same fields>

## Alternatives

### A1. <title>

<same fields; under "How to fix", describe the direction and its trade-off>

## Before publishing (blocking)

<Every placeholder found, one line each: the placeholder, page, selector, screenshot (measured). "None found" when there are none.>

## Needs a real device

<What emulation couldn't verify and matters for this page, one line each: sticky hover after a tap, tap delay, safe areas, the on-screen keyboard, rubber-band scrolling, real Safari, performance on a mid-range phone. Write "Nothing relevant" when the page has no touch-specific risk.>

## What to keep

<Short bullets: what is well done and should survive any redesign, with evidence.>

## Appendix: Lighthouse (lab data, simulated mobile)

| Page | Performance | Accessibility | Best practices | SEO |
|---|---|---|---|---|
| <page> | | | | |

<Omit this appendix when Lighthouse did not run.>
```
