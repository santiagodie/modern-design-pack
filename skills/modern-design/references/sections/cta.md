# Primary CTA (the button system)

Reference for `modern-design`, step 3. `design-review` may also read it to check this component.

## Job

Make the next step obvious, low-risk and easy to hit, wherever the visitor decides.

## When it applies

Every page with an action. The CTA is a system repeated down the page (hero, after proof, after pricing, final CTA), not a single section.

## Content

- Verb plus outcome, 2–5 words: "Get a quote", "Start free trial", "Book a visit". Never "Submit", "Click here" or "Learn more" as the primary.
- The label predicts the next screen. A button that says "Start free trial" and opens a sales form breaks trust.
- One line of microcopy next to it answers the main worry ("No card needed", or a fact the user supplied, such as "Free returns for 30 days"). Reassure without naming the fear: "Your data stays private" works better than "We never spam".
- **Destination still missing:** when the phone, map link, booking page or e-mail is a placeholder, the button either leads to the section where that placeholder is shown, with a label that stays true ("Get directions" to `#where`), or is shown as a placeholder itself: a non-link element with `data-placeholder` that doesn't look like a working button. Never a `tel:`, `mailto:`, `href="#"` or made-up URL (`../ethics.md`, section 7).
- First-person wording ("Start my trial") often helps; treat it as something to test, not a law.
- **Arrows:** add an arrow or chevron only to the primary CTA, and only when it leads forward to a next step. Secondary actions, inline links and every other button stay without arrows. Arrows on every link are template chrome.

## Layout per device

| | Phone | Tablet | Desktop |
|---|---|---|---|
| Size | 48–56 px tall; full width inside the side padding is fine | At least 48 px tall; natural width, not stretched past about 480 px | 44–56 px tall, 24–32 px side padding |
| Position | In thumb reach; a sticky bottom CTA can appear once the hero CTA scrolls out | As phone in portrait; inline in landscape | Inline; a sticky header CTA is enough |
| Spacing | At least 8 px from other targets; 12–16 px between primary and secondary | Same | 12–16 px between primary and secondary |

**Sticky mobile CTA (needs JavaScript):** appears after the hero CTA leaves the screen, hides when the final CTA or a form is visible, adds `env(safe-area-inset-bottom)` to its padding, and never covers the cookie banner, a submit button or the focused element. A short context line built from confirmed facts ("Free returns · 30 days") often helps more than the button alone.

**Without JavaScript:** skip the sticky bottom CTA, because it can't hide when the final CTA or a form appears. Repeat the CTA inline at the decision points instead (after the argument, the final CTA), and keep the header CTA visible. Make direct actions real links that work with no script: `tel:`, `https://wa.me/`, `mailto:`, a booking page, once their value is confirmed.

**Several channels, one action:** when the mechanism offers more than one channel (WhatsApp and phone, for example), keep the action's name and add the channel as a qualifier: "Book by WhatsApp", "Book by phone". The primary button is the channel most visitors will use; the other is the secondary.

## States and interaction

| State | Treatment |
|---|---|
| Default | Accent fill reserved for primary actions; label contrast at least 4.5:1 |
| Hover | Inside `(hover: hover) and (pointer: fine)` only: slightly darker or lighter fill, 120–200 ms |
| Active (pressed) | Immediate feedback on touch and mouse: darker fill or a slight press, 100–160 ms ease-out |
| Focus-visible | 2–3 px outline with offset, at least 3:1 against the background |
| Loading | Keep the label ("Sending…") with a spinner, and lock the width so nothing jumps |
| Disabled | Avoid. Keep it enabled and explain what's missing on click |

Add `touch-action: manipulation` so taps fire without delay.

## Accessibility

- A real text label; icons alone need an accessible name.
- Use `<button>` for actions and `<a>` for navigation.
- Targets at least 24×24 px (WCAG 2.2 AA), 44–48 px for touch.

## Critical errors

- The CTA color also used for headings, links and icons, so nothing stands out.
- A low-contrast outline ("ghost") button as the primary action.
- Several primary buttons with different destinations on one screen.
- Targets too small or too close together on touch screens.

## Common errors

- The same generic label on every button regardless of context.
- No loading state, so people click twice.
- Reassurance text louder than the button.
- Hover-only feedback, so touch users get none.

## Level-up

- Keep the action the same and vary the framing down the page (hero, after pricing, final CTA).
- Squint test: blur the screen; the primary button should be the first thing you see.

## Generic-pattern watch

CO3 (glowing buttons), CO4 (no clear accent or too many), LA6 (flat hierarchy), SF3 (silent actions), SF4 (small targets), SF5 (focus), MO2 and MO3 (gimmicky or slow feedback), MN3 (ungated hover).

## Style notes

The button follows the direction: rounded or square, filled or heavy-bordered. What doesn't change is contrast with everything around it, which matters more than any particular color.
