# Outdated checklist

Reference for `design-review`, used in both modes during the review step, for the measurable part of the "Outdated" section. `unslop-checklist.md` holds the shared rules: how to use the checklists, severity, `measured` and `judgment`, and how to report.

## Outdated, measurable

Use these first when filling the "Outdated" section of a report. Each one can be checked on a live page, so it is `measured`, not taste. They follow the direction of Chrome's Modern Web Guidance, which steers sites toward Baseline web features instead of older workarounds. Run `${CLAUDE_SKILL_DIR}/scripts/outdated-measurable.js` at 1440 px (how to run it: "How to run the scripts" in `visual-qa.md`) and confirm each hit in the HTML before reporting it.

| ID | Legacy signal | Modern approach | How to check |
|---|---|---|---|
| OM1 | No viewport meta, or a fixed-width layout that scrolls sideways at 375 px | Responsive layout with `width=device-width` | Checks script in `visual-qa.md` (`viewport`, `horizontalOverflow`) |
| OM2 | Zoom disabled in the viewport meta | Let people zoom and scale text | `viewport` contains `user-scalable=no` or `maximum-scale=1` (also ME2) |
| OM3 | Render-blocking scripts in `<head>` | `defer`, `async` or `type="module"` | `outdated-measurable.js` (`blockingScripts`); Lighthouse `render-blocking-resources` |
| OM4 | Icon fonts (Font Awesome-style stylesheets, `<i class="fa …">`) | Inline or sprite SVG icons | `outdated-measurable.js` (`iconFont`) |
| OM5 | Large images with no `srcset`/`<picture>`, or only JPEG/PNG | Responsive images in modern formats (WebP, AVIF) | `outdated-measurable.js` (`imagesWithoutSrcset`, `modernImageFormats`); Lighthouse `modern-image-formats`, `uses-responsive-images` |
| OM6 | The main (LCP) image lazy-loaded or not prioritised; below-the-fold images loaded eagerly | `fetchpriority="high"` on the hero image, `loading="lazy"` below the fold | Lighthouse `prioritize-lcp-image`, `lcp-lazy-loaded`; `outdated-measurable.js` (`lazyImages`) |
| OM7 | Old JavaScript libraries (jQuery 1.x–2.x and similar) loaded for small effects | Native DOM APIs and CSS | `outdated-measurable.js` (`jquery`); Lighthouse `no-vulnerable-libraries` when present |
| OM8 | Third-party scripts or stylesheets with no integrity check | `integrity` + `crossorigin` | `outdated-measurable.js` (`thirdPartyWithoutSri`) |
| OM9 | Headings with no balanced wrapping | `text-wrap: balance` on headings | `outdated-measurable.js` (`balancedHeadings`) |
| OM10 | Animation with no reduced-motion handling | `@media (prefers-reduced-motion)` | Search the CSS; compare screenshots with reduced motion on and off |
| OM11 | Forms missing `autocomplete`, `type` and `inputmode` | Standard autocomplete tokens and input types | `outdated-measurable.js` (`inputsWithoutAutocomplete`) |
| OM12 | Custom JS modals and popovers on `<div>`s | `<dialog>` and the `popover` attribute | Look for `role="dialog"` on divs in the HTML |

Each field of `outdated-measurable.js` is named in the "How to check" column above; a non-empty list, `true` or a count above zero is a hit to confirm in the HTML.

Not every hit is a problem. A missing `text-wrap: balance` on a site with well-wrapped headings is a tip at most, and Google Fonts or analytics without SRI are common and low risk. Report the hits that affect the user (OM1–OM3, OM5–OM6, OM10) above the ones that are housekeeping.

## Attribution

Written in our own words. It draws on:

- [Modern Web Guidance](https://developer.chrome.com/docs/modern-web-guidance) by Chrome for Developers, for the direction of the "Outdated, measurable" section. Ideas only; the detection script is our own.

Full source list with licences: [docs/SOURCES.md](https://github.com/santiagodie/modern-design-pack/blob/main/docs/SOURCES.md). Licence notices: [THIRD_PARTY_NOTICES.md](https://github.com/santiagodie/modern-design-pack/blob/main/THIRD_PARTY_NOTICES.md).
