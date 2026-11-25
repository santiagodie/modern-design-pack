# Outdated checklist

Reference for `design-review`, used in both modes during the review step, for the measurable part of the "Outdated" section. `review-method.md` holds how to review: severity, `measured` and `judgment`, levels and how to report.

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
| OM13 | Fonts loaded from Google Fonts | Font files hosted on the site's own domain, with `@font-face` and `font-display` | `outdated-measurable.js` (`googleFonts`); `<link>` or `@import` to `fonts.googleapis.com` in the HTML or CSS |

Each field of `outdated-measurable.js` is named in the "How to check" column above; a non-empty list, `true` or a count above zero is a hit to confirm in the HTML.

Not every hit is a problem. A missing `text-wrap: balance` on a site with well-wrapped headings is a tip at most, and analytics without SRI are common and low risk. Report the hits that affect the user (OM1–OM3, OM5–OM6, OM10) above the ones that are housekeeping.

**OM13, fonts from Google Fonts.** When the fonts come from Google Fonts, recommend hosting the font files on the site's own domain, for three reasons: performance (no connection to two more origins before text can render), control (the stylesheet becomes the site's own, so it can be measured, cached and trimmed to the weights in use), and privacy (the visitor's IP address is not sent to a third party). On privacy, cite the case for what it is: in its judgment of 20 January 2022 (Az. 3 O 17493/20, [official text](https://www.gesetze-bayern.de/Content/Document/Y-300-Z-BECKRS-B-2022-N-612)), the Landgericht München I held that passing a visitor's IP address to Google through embedded Google Fonts, without consent, breached the GDPR, and awarded the visitor 100 € in damages. It is one concrete case in Germany, not a general ban, so present it as a risk to weigh, not as a rule. The Google Fonts stylesheet changes by browser, so it can't carry SRI; `outdated-measurable.js` leaves it out of `thirdPartyWithoutSri`, and the missing SRI is never a separate OM8 finding. Report OM13 as a tip, or as outdated when the page loads several families or many weights.

## Attribution

Written in our own words. It draws on:

- [Modern Web Guidance](https://developer.chrome.com/docs/modern-web-guidance) by Chrome for Developers, for the direction of the "Outdated, measurable" section. Ideas only; the detection script is our own.

Full source list with licences: [docs/SOURCES.md](https://github.com/santiagodie/modern-design-pack/blob/main/docs/SOURCES.md). Licence notices: [THIRD_PARTY_NOTICES.md](https://github.com/santiagodie/modern-design-pack/blob/main/THIRD_PARTY_NOTICES.md).
