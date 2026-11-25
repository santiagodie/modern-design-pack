# Header and navigation

> **Covers:** The site header and its navigation, including how it works without JavaScript: job, when it applies, content, layout per device, states and interaction, accessibility, critical and common errors, level-up, generic-pattern watch and style notes.
> **Read when:** step 3 of `modern-design`, when building or restyling this section; `design-review` may read it to check it.
> **Not here:** which sections a page needs → references/ui/sections/index.md; token values → references/ui/tokens.md; the phone, tablet and desktop baseline → references/engineering/responsive.md; motion values → references/ui/motion.md
> **Owner:** modern-design
> **Sources:** the author's landing field guide (docs/research/landing-field-guide/, MIT), written in our own words; full list in docs/SOURCES.md

Reference for `modern-design`, step 3. `design-review` may also read it to check this component.

## Job

Identify the brand at a glance, keep the main action within reach, and avoid becoming an exit.

## When it applies

Every page. Decide what kind of page it is first:

| Page | Header |
|---|---|
| Paid campaign landing page | Logo only (unlinked or linked to the same page), optionally one CTA. No menu. |
| Product homepage working as a landing page | Logo, 3–5 links, one CTA, optionally a quiet "Log in" text link. |
| Long single page | Logo, 3–5 anchor links to sections, one CTA. |
| Local business site | Name, the few things people look for (menu or products, hours, location), and the action (call, order, book). |
| App screen ("operate") | App bar: product name, the current place, search, user menu. No marketing links. |

The more ready to act the visitor is, the fewer exits the header should offer.

## Content

- At most 5 links. Needing more means the page is a website, not a landing page.
- Use the visitor's words ("Pricing", "How it works", "Hours"), not internal jargon ("Solutions", "Platform").
- The header CTA is the **same action** as the hero CTA.
- "Log in" is a quiet text link, never a button competing with the main action.

## Layout per device

| | Phone | Tablet | Desktop |
|---|---|---|---|
| Height | 52–64 px | 56–64 px | 56–72 px |
| Content | Logo, primary action as a visible small button, menu button | Inline links only if they all fit with `--target-touch` (44 px) targets; otherwise the phone pattern with a visible CTA | Logo left, links, CTA right |
| Menu | Full-height sheet with rows at least `--target-touch` tall, the CTA repeated at the bottom | Same sheet, or inline links when they fit | Inline; dropdowns only when unavoidable, opening on click and focus, not hover alone |
| Sticky behaviour | Hide on scroll down, reveal on scroll up; pad with `env(safe-area-inset-top)` when fixed | Same as phone in portrait; shrink in landscape | Optional; shrink 8–16 px on scroll |

Keep horizontal padding equal to the page container, and 24–40 px between links. The logo should read at about the weight of the nav text, not dominate it.

## States and interaction

- Link hover styles only inside `@media (hover: hover) and (pointer: fine)`; `:active` feedback for touch.
- Show the current section or page (`aria-current`) on long single pages and multi-page sites.
- On scroll, move from transparent to a solid background with a hairline border rather than a heavy shadow.
- When the header CTA and the hero CTA share the first screen, hide the header one while the hero CTA is visible if the page has JavaScript. On a static page, keep both: two buttons for the **same** action are acceptable, so make the header one the small version. Two buttons for different actions are not.

## Accessibility

- A "Skip to content" link as the first focusable element.
- `<header>` and `<nav>` landmarks; the menu button has an accessible name, `aria-expanded` and `aria-controls`.
- With JavaScript, the open menu traps focus, closes with Esc and returns focus to the button.
- `scroll-padding-top` equal to the header height, so anchored headings and focused elements aren't hidden behind a sticky header (WCAG 2.2 Focus Not Obscured).

## Without JavaScript

When the brief or stack rules out JavaScript:

- Show the links inline on phones when they fit with `--target-touch` targets (a second row under the name works for 3–5 short links). When they don't fit, build the menu with `<details>` and `<summary>`: it opens and closes with the keyboard and announces its state without a script. Keep the primary action outside it.
- Use real anchor or page links, never `href="#"` with a handler.
- Skip hide-on-scroll and the transparent-to-solid change. Choose a header that works in one state: solid background, sticky with `position: sticky` only when the screen is tall enough (for example from about 560 px of height), or not sticky at all.

## Critical errors

- A full site menu on a paid campaign page.
- The header CTA leads somewhere different from the hero CTA.
- A sticky header covering anchored titles or the focused element.
- A menu button with no accessible name.

## Common errors

- A hamburger on desktop for four links.
- A transparent header that becomes unreadable over some images or when scrolling.
- The primary action hidden inside the mobile menu.
- No indicator of the current section on long pages.

## Level-up

- Update the URL hash when anchors are followed, so sections can be shared.
- A frosted (`backdrop-filter`) header needs a solid fallback and should respect `prefers-reduced-transparency`; it can also slow scrolling on low-end phones.
- When a stakeholder insists on full navigation on a campaign page, keep the logo, drop the menu and move secondary links to the footer.

## Generic-pattern watch

CP3 (unstyled kit defaults), CO7 (glass as decoration), SF4 (small targets), SF5 (focus), SF8 (fixed bars over content or notch), and MN3 (ungated hover).

## Style notes

Minimal: thin and quiet. Editorial: type-led, no boxes. Dark product sites: translucent bar with a hairline border. Bold or brutalist: thick border and a chunky button. Follow the brief's direction.
