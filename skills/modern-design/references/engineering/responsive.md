# Responsive

Reference for `modern-design`, step 3. Load it together with `references/ui/sections/index.md` whenever you build or restyle UI. It covers phone, tablet and desktop, and the baseline that makes a web page behave well on touch screens.

## The principle: decide by capability, not by device

Screen width tells you how much room there is. It doesn't tell you how the person is pointing, whether they can hover, or where the notch is. Use the query that answers the real question:

| Question | Use | Not |
|---|---|---|
| Can the user hover with a precise pointer? | `@media (hover: hover) and (pointer: fine)` around every `:hover` style | Width breakpoints, user-agent sniffing |
| Is the main pointer a finger? | `@media (pointer: coarse)` for larger targets and spacing | "It's narrow, so it's a phone" |
| Is any pointer a finger (touch laptops, iPad with trackpad)? | `@media (any-pointer: coarse)` when a control must also suit touch | Assuming one input type |
| Where are the notch and the home indicator? | `env(safe-area-inset-*)`, with `viewport-fit=cover` in the viewport meta | Fixed pixel offsets |
| How tall is the visible screen? | `min-height: 100svh` for heroes and first screens; `100dvh` for app shells, drawers and full-screen tools | `100vh`, which is taller than the visible area on mobile |

Never detect devices from the user agent. Touch and mouse are not exclusive: tablets have trackpads, laptops have touch screens, and windows can be any width.

## Baseline

Ship this before the first component, and give each line a reason in the code when it isn't obvious:

- Viewport meta: `width=device-width, initial-scale=1, viewport-fit=cover`. Add `interactive-widget=resizes-content` when the page has inputs pinned to the bottom or app-like full-height layouts, so the layout shrinks when the keyboard opens on Android. Never add `user-scalable=no` or `maximum-scale=1`.
- Two `theme-color` metas, one per color scheme, matching the color at the top of the page (usually the header), plus `<meta name="color-scheme" content="light dark">` when both themes exist.
- On `html`: `-webkit-text-size-adjust: 100%` (no font inflation in landscape) and `-webkit-tap-highlight-color: transparent`, with an `:active` style on every tappable element to replace the grey flash.
- Inputs, selects and textareas at 16 px or more on touch screens, which stops iOS from zooming the page on focus.
- `touch-action: manipulation` on buttons, links and other controls, so taps don't wait for a double-tap check.
- `user-select: none` and `-webkit-touch-callout: none` on control-like elements only (buttons, tabs, chips, drag handles), never on `body`: addresses, prices and order numbers must stay copyable.
- `overscroll-behavior`: leave the page's default on normal documents, where pull-to-refresh is welcome. Use `none` on `html` for app-like pages with their own scroll areas, and `contain` on inner scrollables (sheets, side panels, chat lists) so scrolling doesn't chain to the page.

## Layout: fluid first, breakpoints where content breaks

- Start from the phone layout and widen it. The phone forces the priorities.
- Add a breakpoint where the layout breaks, not at device names. Check widths between the usual sizes (600, 900, 1100 px) because real windows land there.
- Use fluid type and spacing (`clamp()`) so most changes happen without breakpoints.
- Use container queries (`@container`) for components that appear in places of different widths, such as a card in a grid and in a sidebar. They respond to the space the component actually gets.
- Grids: 4 columns on phones, 8 on tablets, 12 on desktop is a sensible start. Side padding 16–24 px on phones.
- Keep a max content width (around 1120–1280 px) and a narrower measure for text (65–75 characters).

## Phone (up to about 600 px)

- Put primary actions where the thumb reaches easily: lower and centered, not in the top corners.
- Touch targets: MUST be at least 24 × 24 CSS px (WCAG 2.2, 2.5.8, AA). A smaller target passes only when a 24 px circle centred on it doesn't overlap another target or that target's circle, or when another exception of 2.5.8 applies (inline in text, an equivalent control, browser default, essential). SHOULD be 44 × 44 px for primary actions under `(pointer: coarse)`: that is the AAA level of 2.5.5 and Apple's default control size. The size and spacing come from the target tokens (`tokens-space.md`).
- Order content for reading: the headline and main action before the hero visual in most cases.
- Primary buttons can go full width inside the side padding.
- Add up all sticky chrome (header, announcement bar, cookie bar, chat bubble, sticky CTA). Together it should leave most of the screen for content; hide the header on scroll down when it doesn't.
- Nothing depends on hover. Menus, tooltips and reveals open on tap.
- Wide tables become horizontal scroll areas with a sticky first column and a visible hint that they scroll, or turn into stacked cards when each row stands alone.

### Phone in landscape

The screen is about 375 px tall. A sticky header plus a bottom bar can take half of it. Shrink or hide the header on scroll, check that dialogs and sheets fit and scroll inside, and size first screens with `svh`, not fixed heights.

## Tablet

Tablets need their own pass. They are touch-first like phones but often show desktop-like layouts, and that combination is where layouts break.

| Situation | Typical width | What to check |
|---|---|---|
| Portrait | 768–834 px | Two-column layouts get too narrow; navigation neither fits nor collapses |
| Landscape | 1024–1194 px | Desktop layouts appear, but the pointer is still a finger: hover effects and small targets fail |
| Keyboard and trackpad attached | any | Hover becomes possible; design must work with both finger and pointer |
| Split View, Stage Manager, resizable windows | arbitrary (from about 320 px up) | Device breakpoints don't match; fluid layouts and container queries do |

- **Keep touch sizes at tablet widths**, even in desktop-like layouts. Gate hover by capability so a trackpad gets hover and a finger doesn't get stuck hover states.
- **Navigation between 768 and 1024 px:** show the links inline only when they fit with 44 px targets and readable labels. Otherwise use a compact header with the logo, the primary action as a visible button and a menu button for the rest. Don't hide the primary action inside the menu, and don't show a desktop mega menu.
- **Tables and dense panels:** below the width a table needs, wrap it in a horizontal scroll area with a sticky first column, or reflow rows into cards with container queries. Side panels and rails move below the main content or into a drawer in portrait; keep at most two columns in portrait for work screens.
- **Boards and multi-column tools:** offer a way to jump between columns (tabs or a segmented control) when they don't all fit, rather than relying only on sideways scrolling.
- **Read-only displays** (wall screens, kiosks): nobody scrolls them, so everything important must fit in one screen at the target size.

## Desktop (from about 1100 px)

- Keep lines readable: cap text width even when the layout is wide.
- Use the extra width for hierarchy (larger visuals, two-column splits), not to stretch everything.
- Check very wide screens (1920 px and up) and zoomed-out views for content floating in empty space.

## What emulation can't reproduce

Browser emulation (`playwright-cli --device`) sets the viewport, touch support and pointer type, but it can't show everything. List these under "Needs a real device" in every review report when they matter for the page:

- Sticky hover after a tap on real touch screens.
- Tap delay and the feel of press feedback.
- Safe areas around notches, rounded corners and home indicators.
- The on-screen keyboard: what it covers, how the viewport resizes, input zoom in iOS Safari.
- Rubber-band scrolling, pull-to-refresh and scroll chaining.
- Real Safari behaviour: device presets change the viewport and user agent, not the browser engine.
- Performance on a mid-range phone over a real mobile connection.
- Installed web app (standalone) mode, where the viewport and status bar differ.

## Rules

- Gate every hover style behind `(hover: hover) and (pointer: fine)` when it changes appearance or reveals content.
- Use `svh` for marketing heroes and `dvh` for app shells; use `vh` only as a fallback when the project's browser support needs it.
- Respect safe areas on anything fixed to the top or bottom edge, and add `viewport-fit=cover` when you do.
- Add breakpoints where content breaks; reach for container queries when a component lives in places of different widths.
- Keep touch target sizes at every width a finger can reach, including tablet landscape.
- State what still needs a real device when you hand off to `design-review`.

## Sources

Written in our own words. Based on the "Mobile-first responsive" section of the author's research in `docs/research/landing-field-guide/04_CROSS_CUTTING.md`, and adapted from the `mobile-native` skill in [emilkowalski/skills](https://github.com/emilkowalski/skills) by Emil Kowalski (MIT). The tablet section is our own. See `THIRD_PARTY_NOTICES.md` in the repository.
