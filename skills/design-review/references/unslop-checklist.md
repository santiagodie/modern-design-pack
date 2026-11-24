# Unslop checklist

Reference for `design-review`, used in both modes during the review step. Load it when reviewing; you don't need it while taking screenshots.

## How to use it

- **Context decides.** Every pattern below is fine somewhere. Check the "Fine when" line before flagging anything, and when the project has a design brief, the brief wins. The exception is the Deceptive patterns family: ethics ranks above the brief.
- **Run the template test first.** Swap the product's name for a competitor's. If the page still makes sense, it is generic. Report the result in plain words ("the page could belong to any competitor" or "the page is specific to this product"), never as "passes" or "fails", which readers take in opposite ways.
- **Flag a pattern once.** Name the first clear case and say "also in X, Y" instead of repeating the finding.
- **Report as** gives the default report section. Raise or lower it when the impact on this page is clearly different, and say why.
- **Evidence:** typography, color and layout taste calls are `judgment`. Contrast ratios, sizes, missing states and meta tags you can check in code or with a tool are `measured`.

Severity in short: **critical** stops people from reading, using, trusting or reaching the page; **minor** is a real problem with limited impact; **outdated** makes the page look generic or dated (measured legacy techniques first, then judgment); **tip** is a small, cheap improvement.

Before reporting, rule out artefacts of the audit setup:

- **Lab performance numbers** (Lighthouse's simulated slow mobile) are a worst case. Report them as lab data. Mark performance critical only when content stays hidden, broken or unusable, not from a lab timing alone.
- **Locale.** The audit browser may run in the user's language. When a finding depends on language, number or currency formatting, compare it with `navigator.language` and the page's `lang`. Report it only when it also happens in the site's own language, or label it as locale-dependent.
- **Well-executed intent.** On a page that is clearly specific and well made, a checklist pattern used with intent goes in "What to keep", not in Outdated. When you would call a finding "borderline" or "a limit case", it belongs in Tips with the reason, never in Outdated.
- **Format negotiation.** CDNs often serve WebP or AVIF from URLs without a file extension (`f=auto`, `format=auto`). Confirm OM5 with Lighthouse or the response content type before reporting it.

## Typography

### TY1. The default font as the only voice
- **Look for:** Inter, Roboto, Arial or the system sans used for every role, including the hero headline.
- **Reads as generic because:** it is what every template and generator ships with, so the page has no typographic identity.
- **Fine when:** it is a product UI, dashboard or tool where a neutral sans is the right call, or the brand already uses that face.
- **Fix:** keep the neutral face for interface text when it works, and pick a display face that matches the brand's tone for headlines.
- **Report as:** outdated.

### TY2. A serif headline with one italic word
- **Look for:** a display serif (Instrument Serif is the usual one) with a single word in italic or a different color for emphasis.
- **Reads as generic because:** it became the signature move of AI-generated landings in 2025–26.
- **Fine when:** the brand is editorial and the italic word carries meaning the reader would otherwise miss.
- **Fix:** set the headline in one style. Get emphasis from the words themselves or from size.
- **Report as:** outdated.

### TY3. Monospace as costume
- **Look for:** monospace for labels, eyebrows, stats or body copy; file paths or code snippets used as decoration.
- **Reads as generic because:** it borrows a "technical" look without showing anything technical.
- **Fine when:** the text is code, data, an ID, a keyboard shortcut, or the audience is developers and the content is real.
- **Fix:** use mono only where the content is code or tabular data.
- **Report as:** minor.

### TY4. Uppercase tracked labels above headings
- **Look for:** small uppercase, widely tracked labels (eyebrows or kickers) above every heading, and all-caps subtitles.
- **Reads as generic because:** the label usually repeats the heading, and the pattern appears on every section.
- **Fine when:** used once for navigation or category context that the heading doesn't give, or in data table headers.
- **Fix:** delete the label when the heading says the same thing. Otherwise use sentence case.
- **Report as:** outdated.

### TY5. Tight tracking on small text
- **Look for:** negative letter-spacing below about 24px, letters that touch at body size.
- **Reads as generic because:** display tracking copied onto every size.
- **Fine when:** large display sizes, where slight negative tracking improves fit.
- **Fix:** keep tracking at 0 for body and UI text, and use negative tracking only on display sizes.
- **Report as:** minor. It is `measured` when you read the computed style.

### TY6. Badly wrapped headlines
- **Look for:** a single word on the last line, awkward breaks, or headlines that overflow or get cut off at 375 px.
- **Reads as generic because:** nobody checked the copy at real widths.
- **Fine when:** never ideal, but a minor issue when the text is still readable.
- **Fix:** add `text-wrap: balance` to headings, adjust max-width, or rewrite the line. Check at 375, 768 and 1440.
- **Report as:** minor; **critical** when the text is clipped or hidden.

### TY7. Full stops at the end of headlines
- **Look for:** every heading ends with a period.
- **Reads as generic because:** it is a fashion carried over from AI-generated landings.
- **Fine when:** the brand voice uses short, declarative statements and applies them consistently.
- **Fix:** drop the periods, or keep them only where the voice calls for them.
- **Report as:** tip.

### TY8. Hard-to-read body text
- **Look for:** body lines much longer than about 75 characters, body text under about 16 px, justified text with rivers of space, very tight or very loose line height, all-caps paragraphs.
- **Fix:** set a max-width around 65–75ch, body at 16 px or more, line height around 1.5, left-aligned text, and keep capitals for short labels.
- **Report as:** minor (`measured` when read from computed styles).

### TY9. A headline that fills the first screen
- **Look for:** a hero headline so large that nothing else (what it is, the action, the product) fits in the first screen.
- **Fine when:** the brand is the message and the next screen answers the questions right away.
- **Fix:** scale the headline down until the first screen also shows what the product is and the main action.
- **Report as:** outdated.

### TY10. Proportional figures in changing or compared numbers
- **Look for:** prices, counters, stats, tables or timers whose digits shift width.
- **Fine when:** numbers sit in running prose.
- **Fix:** set `font-variant-numeric: tabular-nums` on numbers that change or line up.
- **Report as:** tip.

## Color

### CO1. The purple-to-blue gradient brand
- **Look for:** violet, indigo or purple-to-blue gradients as the main brand color, on buttons, backgrounds or text.
- **Reads as generic because:** it is the default palette of AI-generated SaaS pages.
- **Fine when:** the brand really is purple and uses it as a flat, deliberate accent.
- **Fix:** take the accent from the brand, build a neutral ramp around it, and use gradients only as a slight tone shift within one hue.
- **Report as:** outdated.

### CO2. Gradient text and gradient section backgrounds
- **Look for:** headline text filled with a gradient; sections on gradient or mesh backgrounds.
- **Fine when:** used once, as a deliberate brand moment.
- **Fix:** use flat colors. Let one accent do the work.
- **Report as:** outdated.

### CO3. Glows, colored shadows and neon borders
- **Look for:** colored halos with no offset, glowing buttons or cards, neon outlines.
- **Reads as generic because:** the glow is used as decoration, not to show depth or state.
- **Fine when:** a dark interface uses a single glow to show focus or a live state.
- **Fix:** use neutral shadows with offset and blur, or a plain border.
- **Report as:** outdated.

### CO4. No clear accent, or too many
- **Look for:** several competing accent colors and many opacity steps of each, or no accent at all, so the primary action doesn't stand out.
- **Fine when:** the page is deliberately monochrome and hierarchy comes from size and weight.
- **Fix:** use a neutral ramp plus one accent, reserved for the primary action and key highlights.
- **Report as:** minor.

### CO5. Low text contrast
- **Look for:** light gray text on white, gray text on colored surfaces, text over images with no overlay.
- **Fine when:** the text is disabled or purely decorative.
- **Fix:** aim for at least 4.5:1 on body text and 3:1 on large text. On colored surfaces, tint secondary text from the surface hue instead of using gray.
- **Report as:** **critical** when body text or the main call to action is below 4.5:1 (`measured`); minor for secondary text.

### CO6. Colored card borders and side accent bars
- **Look for:** cards with colored borders, or a colored bar down one side of a rounded box.
- **Fine when:** the color carries status (error, warning, success) and is used consistently.
- **Fix:** use a neutral border, a subtle tint, or a leading icon or label.
- **Report as:** outdated.

### CO7. Glassmorphism as decoration
- **Look for:** frosted, blurred, translucent panels over plain or gradient backgrounds.
- **Fine when:** a panel sits over real content or imagery where seeing through it helps, and the text still meets contrast.
- **Fix:** use solid surfaces.
- **Report as:** outdated.

### CO8. Warm cream as the automatic background
- **Look for:** an off-white, cream or beige page background chosen by default, with brown or terracotta accents, on a product that has no reason for warmth.
- **Reads as generic because:** generators reach for it as the "tasteful" alternative to white, so it now signals a template too.
- **Fine when:** the product is warm, crafted or food-related (a bakery, a ceramics studio) and the palette comes from the brand.
- **Fix:** derive the background from the brand and the use scene, not from a default.
- **Report as:** outdated.

## Layout and spacing

### LA1. Identical card grids
- **Look for:** three or more same-size cards, each with icon, title and two lines of text.
- **Reads as generic because:** it is the default feature section, and it gives every item the same weight.
- **Fine when:** the items really are parallel (pricing tiers, plans, team members).
- **Fix:** size items by importance, turn minor ones into a list, or replace icons with real product views.
- **Report as:** outdated.

### LA2. Everything boxed
- **Look for:** borders or cards around every group; cards nested inside cards.
- **Fine when:** the box marks an interactive unit (a selectable plan, a clickable item).
- **Fix:** group with spacing instead, keeping space inside a group smaller than space between groups.
- **Report as:** minor.

### LA3. Inconsistent spacing
- **Look for:** one-off gaps, uneven padding between similar sections, related items as far apart as unrelated ones.
- **Fix:** use one spacing scale (for example multiples of 4 px), and give the same things the same spacing.
- **Report as:** minor.

### LA4. Radii that don't add up
- **Look for:** an inner element with the same radius as its container, which makes the corners look uneven; or large radii on everything, including pills on every control.
- **Fine when:** soft radii are part of a deliberate brand system.
- **Fix:** set inner radius = outer radius − padding between them. Keep pills for small controls and use one radius scale.
- **Report as:** tip; minor when it happens everywhere.

### LA5. The template hero
- **Look for:** a centered stack of badge, headline, subtitle and two side-by-side buttons, over a gradient or dot background.
- **Reads as generic because:** it is the most common generated hero, and the two buttons split attention.
- **Fine when:** there really are two equal actions (for example "Download" and "Docs" for a developer tool).
- **Fix:** keep one primary action, show the product, and consider an asymmetric layout.
- **Report as:** outdated.

### LA6. Flat hierarchy
- **Look for:** the main feature the same size as the rest; a call to action that doesn't stand out; too many competing actions (Hick's law: more options, slower decisions).
- **Fix:** enlarge the main feature, give the primary action the accent, and cut or demote secondary actions.
- **Report as:** minor.

### LA7. Numbered sections and 1-2-3 steps
- **Look for:** "01 / 02 / 03" section labels, or a three-step "how it works" that isn't a real process.
- **Fine when:** the order matters (onboarding, a real process the user follows).
- **Fix:** remove the numbers, or show the real process.
- **Report as:** outdated.

### LA8. The stat banner
- **Look for:** a row of big numbers ("10k+ users", "99.9% uptime") with no source.
- **Fine when:** the numbers are real, specific and matter to the buyer.
- **Fix:** remove it, or attach the source and period.
- **Report as:** outdated; **critical** when the figures are obvious placeholders.

### LA9. Extra dividers
- **Look for:** horizontal rules between every section or list item.
- **Fix:** separate with spacing, and keep dividers only where groups would otherwise merge.
- **Report as:** tip.

### LA10. Aligned by the numbers, off to the eye
- **Look for:** icons in buttons, play triangles or quotation marks that sit off-center even though the boxes are centered.
- **Fix:** nudge the element optically by a pixel or two.
- **Report as:** tip.

## Components

### CP1. Filler badges and pills
- **Look for:** pill badges above the headline ("New", "AI-powered", sparkles), and tags on items that don't need them.
- **Fine when:** the badge announces real news and links to it.
- **Fix:** remove it, or turn it into a plain text link.
- **Report as:** outdated.

### CP2. Mixed icons, and emoji standing in for icons or images
- **Look for:** icons from several sets, mixed stroke widths and sizes, and emoji used anywhere an icon or image belongs: feature icons, product photos, avatars, illustrations, empty states.
- **Reads as generic because:** emoji render differently on every system and signal a prototype that never got real assets.
- **Fine when:** emoji appear in user content, or in a playful brand that uses them consistently on purpose.
- **Fix:** use one icon set, at one size and stroke. Where a photo or illustration is missing, put a neutral placeholder in the page's own style (a flat tone with a short label, or a simple shape that matches the page's illustrations) and mark it for the real asset. Never invent photos or stock imagery.
- **Report as:** minor; outdated when emoji stand in for product images.

### CP3. Unstyled component library defaults
- **Look for:** the default look of a popular kit (shadcn/ui is the common one): same radius, gray borders, default focus rings.
- **Fine when:** internal tools, where speed matters more than identity.
- **Fix:** apply the project's tokens (type, color, radius, shadow) to the components.
- **Report as:** outdated.

### CP4. Decoration in place of the product
- **Look for:** dot or grid backgrounds, blobs, orbs, floating 3D shapes, ASCII art, over-detailed diagrams or fake UI mockups.
- **Fine when:** the visual explains something real, such as an accurate diagram of how the product works.
- **Fix:** show the actual product: real screenshots, real photos, real data.
- **Report as:** outdated; minor when there is no product view on the page at all.

### CP5. Ghost cards and icon tiles
- **Look for:** cards drawn with both a hairline border and a wide soft shadow; a rounded colored square holding an icon above every heading.
- **Reads as generic because:** both are default component-kit moves that add chrome without adding meaning.
- **Fine when:** one elevation method is used consistently, and the icon helps people scan a long list.
- **Fix:** use one elevation method (a border or a shadow, not both), and put icons inline with the heading or drop them.
- **Report as:** outdated.

### CP6. Dead-end hover menus
- **Look for:** nested dropdowns that close when the pointer moves diagonally toward the submenu.
- **Fix:** add a hover safe area (the "safe triangle") or a short close delay.
- **Report as:** tip.

## Copy

### CY1. Headlines that fit any product
- **Look for:** "Supercharge your workflow", "The future of X", "Build faster": headlines that pass the template test.
- **Fix:** say what it is, who it's for and one concrete proof, using facts from the page.
- **Report as:** minor.

### CY2. Redundant labels and text
- **Look for:** a label that repeats the heading, "Features" above the features, a subtitle that restates the title.
- **Fix:** cut the repeat.
- **Report as:** tip.

### CY3. Placeholders and unverifiable claims
- **Look for:** lorem ipsum, "[Company]", round fake numbers, "Trusted by thousands" with no names, testimonials with no person behind them.
- **Fix:** replace with real content or remove. In own-project mode, ask the user for the real facts.
- **Report as:** **critical** when placeholders are visible; minor for vague claims.

### CY4. Hype tone
- **Look for:** exclamation marks, "revolutionary", "seamless", "AI-powered" on every line.
- **Fix:** use plain, specific statements.
- **Report as:** minor.

### CY5. Formula phrasing
- **Look for:** "Not X. Y." contrasts ("Not a tool. A platform."), em dashes in every sentence, triplets of adjectives, the same sentence shape in every section.
- **Fix:** vary the sentences and say the thing directly.
- **Report as:** minor.

## States and feedback

### SF1. No loading state
- **Look for:** blank areas while data loads, spinners with no delay that flicker, content that jumps in.
- **Fix:** use skeletons that mirror the final layout. Show a spinner only after about 150–300 ms, and keep it visible long enough not to flicker.
- **Report as:** minor; **critical** when the page stays blank for long.

### SF2. No empty or error state
- **Look for:** an empty list with no message, a form error with no explanation, a dead end with no next step.
- **Fix:** design the empty, sparse and error states. Errors say what went wrong and how to recover.
- **Report as:** minor.

### SF3. Silent actions
- **Look for:** buttons that give no feedback, destructive actions with no undo, a confirm dialog where an undo toast would do.
- **Fix:** give immediate feedback, use optimistic updates when the action rarely fails, and offer undo instead of a confirmation dialog when the action can be reversed.
- **Report as:** tip.

### SF4. Small touch targets
- **Look for:** links, icons or buttons smaller than about 44 × 44 px at 375 px wide, or tightly packed together (Fitts's law: small, distant targets are slower to hit).
- **Fix:** enlarge the hit area with padding even when the visual stays small.
- **Report as:** minor; **critical** when the main navigation or call to action is hard to tap.

### SF5. Missing focus states
- **Look for:** `outline: none` with no replacement; tabbing through the page shows no visible focus.
- **Fix:** add a visible `:focus-visible` style that matches the palette.
- **Report as:** **critical** (`measured`) when keyboard users can't see where they are.

### SF6. Layout shift from media
- **Look for:** images or embeds without dimensions that push content down as they load.
- **Fix:** set width and height or aspect-ratio, and use a placeholder (blurred preview or flat color).
- **Report as:** minor.

### SF7. Mobile form friction
- **Look for:** inputs under 16 px that make iOS zoom on focus, missing `autocomplete` or `inputmode`, one-time-code fields that don't autofill.
- **Fix:** use 16 px inputs, the right `type`, `inputmode` and `autocomplete` (including `one-time-code`).
- **Report as:** tip.

### SF8. Fixed bars over the notch or content
- **Look for:** sticky headers or bottom bars covering content, the notch or the home indicator, or covering the focused element.
- **Fix:** respect safe-area insets and add `scroll-margin-top` to anchored headings.
- **Report as:** minor.

### SF9. Broken on load
- **Look for:** images that don't load, content stuck invisible because a reveal script failed, errors in the browser console on load.
- **Fix:** fix the source, and make reveal effects start from visible content so a failed script doesn't hide anything.
- **Report as:** **critical** when content or the main image is missing (`measured`).

## Motion

### MO1. Fade-in on every section
- **Look for:** each section fading or sliding in on scroll.
- **Reads as generic because:** it is the default "make it feel premium" move, and it delays content on every scroll.
- **Fine when:** there is one authored entrance (the hero), or a reveal that explains something.
- **Fix:** remove the scroll reveals. Keep motion for state changes and one entrance at most.
- **Report as:** outdated.

### MO2. Decorative loops and hover gimmicks
- **Look for:** pulsing, shimmering or pinging elements that aren't live (status dots, blinking cursors), auto-scrolling logo marquees, cards that scale or tilt on hover, bounce or elastic easing on UI controls.
- **Fix:** keep loops for genuinely live states, and use a subtle color or shadow change on hover.
- **Report as:** minor.

### MO3. Slow or linear UI feedback
- **Look for:** hover, press or toggle transitions over about 300 ms, or linear easing on UI motion. The more often an element is used, the faster and quieter its motion should be.
- **Fix:** keep UI feedback under about 300 ms with ease-out curves, and save longer durations for rare, one-off moments.
- **Report as:** minor (`measured` when read from CSS).

### MO4. Motion that ignores the user
- **Look for:** no `prefers-reduced-motion` handling; content that stays hidden when motion is reduced; autoplay or carousels running longer than 5 s with no pause.
- **Fix:** honor reduced motion by replacing movement with a simple fade or nothing, never hiding content, and add pause controls.
- **Report as:** minor; **critical** when content is hidden under reduced motion.

### MO5. Hard cuts between states
- **Look for:** modals and panels that appear from nowhere, navigation that jumps with no sense of where things went.
- **Fine when:** the change is frequent and speed matters more than orientation.
- **Fix:** carry the user between states: the card grows into the page, back reverses the move. View transitions help here.
- **Report as:** tip.

## Meta

### ME1. Default favicon and missing meta
- **Look for:** the framework's default favicon, a missing or generic `<title>`, no meta description, no Open Graph image.
- **Fix:** add a custom favicon, a specific title and description, and a share image.
- **Report as:** minor; **critical** when there is no `<title>` or no viewport meta.

### ME2. Zoom disabled
- **Look for:** `user-scalable=no` or `maximum-scale=1` in the viewport meta.
- **Fix:** remove them.
- **Report as:** **critical** (`measured`).

### ME3. Missing language attribute
- **Look for:** `<html>` with no `lang`, or the wrong one.
- **Fix:** set `lang` to the page language.
- **Report as:** minor (`measured`).

### ME4. Skipped heading levels
- **Look for:** headings that jump levels (h1 to h3), several h1s, or headings chosen for their size rather than their place in the outline.
- **Fix:** keep one h1 and a continuous outline, and style headings by class when the size has to differ.
- **Report as:** minor (`measured`).

## Deceptive patterns

Built from sections 4 (never propose) and 6 (minimum by page type) of `modern-design/references/ethics.md`. Read that file (`${CLAUDE_SKILL_DIR}/../modern-design/references/ethics.md`) for the cases behind each rule when it exists; these rules work without it.

- **Ethics ranks above the brief.** Unlike the rest of this checklist, a brief can't make these fine. Each rule's "Fine when" describes the honest version of the same thing.
- **Invented testimonials, logos and customer figures** are CY3; don't report them twice.
- **Describe, don't rule.** Say what the page does and what it does to the visitor, and name the rule it may conflict with. It is not legal advice, and the report shouldn't call anything illegal.
- **Read-only in URL audits.** Don't add to cart, start trials or open accounts to test a flow. Reloading a page is fine. Judge what public pages show, and say what couldn't be checked.

### DP1. Pre-ticked extras and consents
- **Look for:** checkboxes or toggles on by default for paid extras, insurance, donations, newsletters, marketing or data-sharing consent; a paid option preselected in a group.
- **Fine when:** the preselected option is free, protects the user (the most private setting, no marketing) and is easy to change.
- **Fix:** leave them off and let the user opt in.
- **Evidence:** measured (the `checked` attribute, or the initial state in a screenshot).
- **Report as:** critical.

### DP2. Urgency that isn't real
- **Look for:** countdowns, "offer ends today", "last chance", end dates.
- **Fine when:** the deadline is real and persistent, and the page says what happens after it.
- **Fix:** state the real deadline as a date, or remove the timer.
- **Evidence:** measured when reloading the page or opening it in a fresh session restarts the timer or moves the date; judgment otherwise.
- **Report as:** critical when measured; a tip asking the owner to confirm when it can't be checked.

### DP3. Scarcity and popularity without data or context
- **Look for:** "only 2 left", "12 people are viewing this", "booked 30 times today", "selling fast".
- **Fine when:** it comes from real stock or activity and says what it refers to ("only 1 left at this price", "others are looking at these dates").
- **Fix:** show it only from real data and with its scope; remove it otherwise.
- **Evidence:** measured when the code makes the number up (random, hard-coded, or identical on every product); judgment otherwise.
- **Report as:** critical when measured; minor when the message lacks context and the data can't be checked.

### DP4. Prices without known compulsory charges
- **Look for:** "from" or base prices in listings, cards, map pins or pricing tables that leave out charges every buyer pays (booking or service fees, compulsory cleaning, the per-user total behind a per-seat price), or a total that appears only at the last step. A monthly price shown only as an annual price divided by twelve.
- **Fine when:** the charge really varies per buyer (shipping to an address not yet known, optional extras) and the page says how it is worked out.
- **Fix:** put the total, with compulsory charges, in the headline price, and say whether taxes are included.
- **Evidence:** measured when two visible pages show different totals for the same item; judgment when the checkout can't be reached.
- **Report as:** critical.

### DP5. Exit harder than entry
- **Look for:** cancelling, unsubscribing or deleting an account with more steps, channels or confirmations than signing up (phone-only cancellation for an online sign-up, repeated "are you sure?" screens, looping retention offers), or "cancel anytime" with no visible way to do it.
- **Fine when:** one confirmation guards against an irreversible loss, and one optional retention offer appears once.
- **Fix:** cancel in as many steps as it took to join, from the account page, with data export where relevant.
- **Evidence:** measured in own-project mode (count the steps both ways); judgment in URL audits, from public help pages and terms, saying the flow wasn't tested.
- **Report as:** critical.

### DP6. Confirmshaming
- **Look for:** decline options that shame or guilt the visitor ("No thanks, I prefer paying full price", "I don't care about my security").
- **Fix:** neutral wording for both choices ("No thanks").
- **Evidence:** measured (the label is on the page).
- **Report as:** critical on cancellation, consent or payment screens; minor elsewhere (a newsletter pop-up).

### DP7. Consent easier to give than to refuse
- **Look for:** cookie or tracking banners with "Accept" on the first layer and "Reject" hidden, greyed out, styled as a link or one layer deeper; consents on by default; "legitimate interest" toggles switched on.
- **Fine when:** accept and reject sit on the same layer with equal weight, and settings are a third option.
- **Fix:** put "Reject all" next to "Accept all", in the same style and size.
- **Evidence:** measured (screenshot of the first layer; the clicks each choice takes).
- **Report as:** critical.

### DP8. Trials and renewals without notice
- **Look for:** free trials that take a card without saying when the first charge happens and how much it is; no mention of a reminder before the trial converts; renewal date and amount missing from pricing or billing.
- **Fine when:** the date and amount of the first charge sit next to the trial button, and the page says a reminder will be sent.
- **Fix:** "Free for 14 days, then €12/month from 8 December. We'll remind you 3 days before", next to the button; the next charge's date and amount always visible in billing.
- **Evidence:** measured when the price or the renewal terms are missing from the visible flow; judgment for reminders, which a page can't prove.
- **Report as:** critical when price or renewal is missing; minor when only the reminder isn't mentioned.

### DP9. Invented progress and loss mechanics
- **Look for:** progress bars or checklists that start part-done with steps the user didn't take; streaks or "you'll lose everything" messages with no pause or way out, or used to discourage cancelling; any of these in products minors may use.
- **Fine when:** the progress reflects something the user really did ("Account created ✓"), and loss mechanics are true and offer a pause or freeze.
- **Fix:** count only real steps; add a pause; say truthfully what happens to data after cancelling.
- **Evidence:** judgment; measured when the code sets fake progress.
- **Report as:** critical when used against cancelling or aimed at minors; minor otherwise.

### DP10. Advertising in disguise
- **Look for:** ads styled as notifications, system messages, organic results or editorial content; sponsored items in listings or results without a label; a "recommended" order that is paid for without saying so.
- **Fine when:** paid placements carry a visible label ("Sponsored", "Ad") and the default order is explained.
- **Fix:** label every paid placement where it appears.
- **Evidence:** measured when the code or URLs mark items as paid but the screen doesn't; judgment otherwise.
- **Report as:** critical.

### Minimum by page type

| Page | Check at least |
|---|---|
| Pricing, billing, sign-up with a trial | DP4 (total price), DP8 (renewal date and amount, notice before the trial ends), DP5 (cancellation) |
| Product page, listing, map, cart, checkout | DP4, DP3, DP10, DP1 |
| Checkout, login, sign-up, forms | Accessibility at WCAG 2.1 AA or better: SF5 (focus), labels, errors not shown by color alone, SF4 (targets), CO5 (contrast) |
| Cookie banner, privacy | DP7 |
| Feed, onboarding with streaks or progress | DP9, with extra care when minors may use the product |

## Outdated, measurable

Use these first when filling the "Outdated" section of a report. Each one can be checked on a live page, so it is `measured`, not taste. They follow the direction of Chrome's Modern Web Guidance, which steers sites toward Baseline web features instead of older workarounds. Run the script below at 1440 px and confirm each hit in the HTML before reporting it.

| ID | Legacy signal | Modern approach | How to check |
|---|---|---|---|
| OM1 | No viewport meta, or a fixed-width layout that scrolls sideways at 375 px | Responsive layout with `width=device-width` | Checks script in `visual-qa.md` (`viewport`, `horizontalOverflow`) |
| OM2 | Zoom disabled in the viewport meta | Let people zoom and scale text | `viewport` contains `user-scalable=no` or `maximum-scale=1` (also ME2) |
| OM3 | Render-blocking scripts in `<head>` | `defer`, `async` or `type="module"` | Script below (`blockingScripts`); Lighthouse `render-blocking-resources` |
| OM4 | Icon fonts (Font Awesome-style stylesheets, `<i class="fa …">`) | Inline or sprite SVG icons | Script below (`iconFont`) |
| OM5 | Large images with no `srcset`/`<picture>`, or only JPEG/PNG | Responsive images in modern formats (WebP, AVIF) | Script below (`imagesWithoutSrcset`, `modernImageFormats`); Lighthouse `modern-image-formats`, `uses-responsive-images` |
| OM6 | The main (LCP) image lazy-loaded or not prioritised; below-the-fold images loaded eagerly | `fetchpriority="high"` on the hero image, `loading="lazy"` below the fold | Lighthouse `prioritize-lcp-image`, `lcp-lazy-loaded`; script below (`lazyImages`) |
| OM7 | Old JavaScript libraries (jQuery 1.x–2.x and similar) loaded for small effects | Native DOM APIs and CSS | Script below (`jquery`); Lighthouse `no-vulnerable-libraries` when present |
| OM8 | Third-party scripts or stylesheets with no integrity check | `integrity` + `crossorigin` | Script below (`thirdPartyWithoutSri`) |
| OM9 | Headings with no balanced wrapping | `text-wrap: balance` on headings | Script below (`balancedHeadings`) |
| OM10 | Animation with no reduced-motion handling | `@media (prefers-reduced-motion)` | Search the CSS; compare screenshots with reduced motion on and off |
| OM11 | Forms missing `autocomplete`, `type` and `inputmode` | Standard autocomplete tokens and input types | Script below (`inputsWithoutAutocomplete`) |
| OM12 | Custom JS modals and popovers on `<div>`s | `<dialog>` and the `popover` attribute | Look for `role="dialog"` on divs in the HTML |

```js
() => {
  const scripts = [...document.scripts];
  const imgs = [...document.images].filter(i => i.naturalWidth > 400);
  const host = location.hostname;
  return {
    blockingScripts: [...document.head.querySelectorAll('script[src]')]
      .filter(s => !s.defer && !s.async && s.type !== 'module').map(s => s.src).slice(0, 8),
    iconFont: [...document.styleSheets].some(s => /font-?awesome|icomoon|glyphicons|material-icons/i.test(s.href || '')) ||
      !!document.querySelector('i[class*="fa-"], .glyphicon'),
    imagesWithoutSrcset: imgs.filter(i => !i.srcset && !i.closest('picture')).length,
    modernImageFormats: imgs.filter(i => /\.(webp|avif)(\?|$)/i.test(i.currentSrc)).length + ' of ' + imgs.length,
    lazyImages: [...document.images].filter(i => i.loading === 'lazy').length + ' of ' + document.images.length,
    jquery: window.jQuery ? window.jQuery.fn.jquery : null,
    thirdPartyWithoutSri: [...document.querySelectorAll('script[src], link[rel="stylesheet"]')]
      .filter(e => { try { return new URL(e.src || e.href).hostname !== host && !e.integrity; } catch { return false; } })
      .length,
    balancedHeadings: [...document.querySelectorAll('h1, h2')].filter(h => getComputedStyle(h).textWrap?.includes('balance')).length +
      ' of ' + document.querySelectorAll('h1, h2').length,
    inputsWithoutAutocomplete: [...document.querySelectorAll('input:not([type=hidden]):not([type=submit]):not([type=checkbox]):not([type=radio])')]
      .filter(i => !i.autocomplete).length
  };
}
```

Not every hit is a problem. A missing `text-wrap: balance` on a site with well-wrapped headings is a tip at most, and Google Fonts or analytics without SRI are common and low risk. Report the hits that affect the user (OM1–OM3, OM5–OM6, OM10) above the ones that are housekeeping.

## Considered and left out

These came up in the source lists but don't belong in a visual review of web pages: idempotency keys and stale-while-revalidate (backend and data concerns), pre-rendering (Lighthouse covers the effect), predictive back and swipe-to-dismiss sheets (native app patterns; check them only for app-like PWAs), command menus and shortcut hints (useful for apps, not for marketing pages; mention them as tips when reviewing a web app).

## Attribution

This checklist is written in our own words. It draws on ideas from:

- [unslop](https://github.com/heydamir/unslop) by Damir Sokolovsky, CC BY 4.0. Ideas adapted and rewritten; not endorsed by the author.
- [Impeccable](https://github.com/pbakaus/impeccable) by Paul Bakaus, Apache-2.0, including ideas summarised from its [slop catalogue](https://impeccable.style/slop). Impeccable runs 60+ automated checks; this checklist doesn't reproduce them. Use Impeccable alongside this plugin for that depth.
- [Modern Web Guidance](https://developer.chrome.com/docs/modern-web-guidance) by Chrome for Developers, for the direction of the "Outdated, measurable" section. Ideas only; the detection script is our own.
- [Taste Skill](https://github.com/Leonxlnx/taste-skill) by Leon Lin and blueemi, MIT.
- [Web Interface Guidelines](https://github.com/vercel-labs/web-interface-guidelines) by Vercel, MIT.
- Instagram lists by @charles.unemployed ("20 Tips to Unslop AI Designs") and @millee.md ("20 ways to unslop your AI website designs"), and two shared screenshots whose authors are not yet identified. Ideas only.
- [Laws of UX](https://lawsofux.com) by Jon Yablonski, for the names of Fitts's and Hick's laws.

Full source list with licences: [docs/SOURCES.md](https://github.com/santiagodie/modern-design-pack/blob/main/docs/SOURCES.md). Licence notices: [THIRD_PARTY_NOTICES.md](https://github.com/santiagodie/modern-design-pack/blob/main/THIRD_PARTY_NOTICES.md).
