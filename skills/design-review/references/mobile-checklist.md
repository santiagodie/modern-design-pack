# Mobile checklist

> **Covers:** measurable mobile checks MN1–MN5 for pages used on touch screens.
> **Read when:** the review step of both modes, once at a touch width.
> **Not here:** how to review → references/review-method.md; screenshots and touch emulation → references/visual-qa.md; target sizes → references/copy-states-checklist.md (SF4)
> **Owner:** design-review
> **Sources:** mobile-native skill by Emil Kowalski (MIT); the detection script is our own

Reference for `design-review`, used in both modes during the review step, for pages used on touch screens. `review-method.md` holds how to review: severity, `measured` and `judgment`, levels and how to report.

## Mobile, measurable

Checks for pages used on touch screens. Each one can be read from the HTML or the CSS, so it is `measured`. Run `${CLAUDE_SKILL_DIR}/scripts/mobile-measurable.js` once, at a touch width (how to run it: "How to run the scripts" in `visual-qa.md`). It reads the page's stylesheets; stylesheets from other domains can't be read and are reported as skipped. Then confirm hits in the screenshots taken with a touch device preset.

| ID | Signal | Why it matters | Fix | Report as |
|---|---|---|---|---|
| MN1 | Viewport meta with `user-scalable=no` or `maximum-scale=1` (same as ME2) | People can't zoom to read | Remove both | critical |
| MN2 | Inputs, selects or textareas with a computed font size under 16 px at touch widths | iOS Safari zooms the page on focus and doesn't zoom back | 16 px or more on touch screens; smaller sizes only inside `(pointer: fine)` | minor |
| MN3 | `:hover` rules outside a `(hover: hover)` media query | On touch screens the hover style sticks after a tap, and hover-only content can't be reached | Wrap hover styles in `@media (hover: hover) and (pointer: fine)` and give touch users `:active` feedback | minor; critical when content or navigation only appears on hover |
| MN4 | `100vh` on heroes, full-height sections or fixed bars | On mobile `100vh` is taller than the visible screen, so content and bottom bars hide under the browser bar | `min-height: 100svh` for heroes; `100dvh` for app shells | minor |
| MN5 | `env(safe-area-inset-*)` used without `viewport-fit=cover`, or bars fixed to the bottom edge with no safe-area padding when `viewport-fit=cover` is set | Without the meta the insets are zero; without the padding, bars sit under the home indicator | Add `viewport-fit=cover` and pad fixed edges with `env(safe-area-inset-*, 0px)` | minor |

Each field of `mobile-measurable.js` maps to a row: `zoomDisabled` to MN1, `smallInputs` to MN2, `ungatedHover` to MN3, `vh100` to MN4, and `usesSafeArea` with `viewportFitCover: false` to MN5. When `skippedSheets` is above zero, an empty list doesn't clear those stylesheets.

Read the result with care: a `:hover` rule that only changes a cursor or underlines a text link is a tip at most, and `100vh` used as a fallback before an `svh` or `dvh` declaration is fine.

## Attribution

Written in our own words. The touch checks adapt ideas from the [mobile-native](https://github.com/emilkowalski/skills/tree/main/skills/mobile-native) skill by Emil Kowalski, MIT. The detection script is our own.

Full source list with licences: [docs/SOURCES.md](https://github.com/santiagodie/modern-design-pack/blob/main/docs/SOURCES.md). Licence notices: [THIRD_PARTY_NOTICES.md](https://github.com/santiagodie/modern-design-pack/blob/main/THIRD_PARTY_NOTICES.md).
