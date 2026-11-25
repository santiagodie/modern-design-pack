# Copy, states, motion and meta checklist

Reference for `design-review`, used in both modes during the review step, together with the three unslop files. This file holds the Copy (CY), States and feedback (SF), Motion (MO) and Meta (ME) families; `unslop-type-color.md`, `unslop-layout.md` and `unslop-components.md` hold Typography, Color, Layout and Components; `review-method.md` holds how to review: severity, `measured` and `judgment`, levels and how to report.

## Copy

### CY1. Headlines that fit any product
- **Look for:** "Supercharge your workflow", "The future of X", "Build faster": headlines that pass the template test.
- **Fix:** say what it is, who it's for and one concrete proof, using facts from the page.
- **Report as:** minor.

### CY2. Redundant labels and text
- **Look for:** a label that repeats the heading, "Features" above the features, a subtitle that restates the title.
- **Fix:** cut the repeat.
- **Report as:** tip.

### CY3. Invented content and unverifiable claims
- **Look for:** content a visitor would believe that nobody supplied (a review, a figure, an address, opening hours, a price, a legal detail, a photo presented as the business's own); round fake numbers; "Trusted by thousands" with no names; testimonials with no person behind them; placeholder text without the marking.
- **Placeholders** follow the no-invention rule in `modern-design/references/content-truth.md` (read it when it exists): any `data-placeholder` element, any bracketed text in capitals (`[PRICE]`) and any lorem ipsum is `measured` and blocking. List each one under "Before publishing" with its file and line or selector, never as a finding to fix by writing content. Search the code for `data-placeholder`, `\[[A-Z][A-Z0-9 _:-]*\]` and "lorem ipsum", and compare with `content-needed.md` when it exists. Two marking levels are valid (dashed outline for data and images, a lighter tint or side line for running text marked `data-placeholder-kind="text"`); both count as visible.
- **Claims review:** list every sentence, heading, label, button or link text, image label, `alt`, `title`, meta description, `og:*` value, `lang`, `hreflang` and structured-data value that states or presupposes something about the business (what it sells, how it works, a service such as orders, delivery or on-site production, a frequency, an origin, the country or the law that applies) and doesn't come from a fact in the project's files or a placeholder. The three allowed sources are in `content-truth.md`; apply them from there. Read the `<head>` in the HTML, not only the visible page. The review's own fixes go through the same check: anything this review adds or rewrites (a label, metadata such as `og:locale`, a line of copy) is listed and judged like the rest before the notes are written. Each item is `judgment` and blocking: list it under "Before publishing" with file and line, quoting the text and the fact it presupposes.
- **Fix:** ask the user for the real facts. Until they arrive, replace invented content with a marked placeholder, rewrite a presupposing heading or label as neutral text, and add a row to `content-needed.md` (a business question, with the sections that depend on it, when the text presupposes a service). Never replace a placeholder with invented content.
- **Report as:** **critical** when invented content is presented as real, or when a placeholder is visible but not marked (no `data-placeholder`, no visible style; marks that exist only in HTML comments don't count); minor for vague claims. Marked placeholders and claims-review items go under "Before publishing", where they block publication.

### CY4. Hype tone
- **Look for:** exclamation marks, "revolutionary", "seamless", "AI-powered" on every line.
- **Fix:** use plain, specific statements.
- **Report as:** minor.

### CY5. Formula phrasing
- **Look for:** "Not X. Y." contrasts ("Not a tool. A platform."), em dashes in every sentence, triplets of adjectives, the same sentence shape in every section.
- **Fix:** vary the sentences and say the thing directly.
- **Report as:** minor.

### CY6. Dots between words
- **Look for:** middle dots ("·") or bullets between single words or short phrases in taglines, subtitles or eyebrows ("Fast · Private · Local").
- **Reads as generic because:** it turns a sentence into a row of adjectives that makes no claim.
- **Fine when:** the dots separate real metadata (date, reading time, author), breadcrumbs, or items in a footer line.
- **Fix:** write one sentence that makes a claim, or turn real items into a list.
- **How to check:** search the visible text for "·" or "•" between words, outside metadata lines.
- **Report as:** outdated (`measured`).

### CY7. "Real" and "quiet" as filler
- **Look for:** "real" ("real results", "built for real teams") and "quiet" ("quiet confidence", "quietly powerful"), and their adverbs, repeated across headlines and body.
- **Reads as generic because:** generators lean on these words to sound authentic and restrained; they claim a quality instead of showing it.
- **Fine when:** the literal meaning is the point: real estate, real time, real versus simulated, a quiet appliance, a quiet room.
- **Fix:** replace the word with the fact it stands for (a named customer, a measured noise level), taken from the project's own material.
- **How to check:** count the words in the visible text. More than one or two per page outside literal uses is the signal.
- **Report as:** minor (`measured`).

### CY8. Two-word sentences
- **Look for:** runs of fragment sentences ("Fast. Simple. Yours.", "No setup. No fuss.") in headlines and body copy.
- **Reads as generic because:** the rhythm sounds confident but makes no claim; it is a cousin of CY5.
- **Fine when:** used once, in a terse brand voice, where the words carry a specific claim.
- **Fix:** write full sentences that say what the product does and for whom.
- **Report as:** minor.

### CY9. The same fact everywhere
- **Look for:** one fact (a price, a date, an opening time, a count) printed in four or more sections, or a section whose last line repeats its heading.
- **Reads as generic because:** with few facts to work with, a generator says them again, and each repetition reads as filler.
- **Fine when:** a table or a list repeats a value by nature, or the fact belongs to the action (a price next to each buy button).
- **Fix:** say each fact once, where it does work.
- **How to check:** search the visible text for the fact and count the sections it appears in.
- **Report as:** tip (`measured` for the count).
- **Source:** Adapted from Hallmark (MIT, commit 04977e1), gate 69.

### CY10. Decoration text
- **Look for:** text that looks designed and carries no fact: "scroll" cues, a version or `BETA` pill in the hero, rotated vertical labels, a city, weather or local-time strip, counters such as "01 / 4" on tiles, credit lines under stand-in pictures.
- **Fine when:** the text is a fact the visitor needs (a product that really is in beta, the local time of a venue for a live event).
- **Fix:** remove it; a fact that would be lost becomes a caption or a footer line.
- **Report as:** outdated (`judgment`). TY4 covers labels above headings and CP1 badges above the headline: flag the pattern once.
- **Source:** Adapted from Hallmark (MIT, commit 04977e1), gate 66.

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
- **Look for:** the thresholds are the tokens `--target-min` (24 px, MUST) and `--target-touch` (44 px, SHOULD), owned by `modern-design/references/ui/tokens.md` §5. (1) Any target under 24 × 24 CSS px that fails the WCAG 2.5.8 spacing exception (`spacingOk: false` in `page-checks.js`) and no other exception (inline in text, an equivalent control, browser default, essential). (2) A primary action under 44 px in the screenshots with emulated touch (375, 768, 1024). The script lists every target's size; deciding which are primary is this check's call: the main call to action, the menu button, a form's submit, and every control when `site-decisions.md` records a touch-first product.
- **Fix:** enlarge the hit area with padding even when the visual stays small.
- **Report as:** **critical** (`measured`) for (1); minor (`judgment`) for (2).

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

### SF10. A form that says sent when nothing was sent
- **Look for:** a form or control that shows success ("Sent", "Booked", "You're on the list", "Thanks") with no request behind it: the submit handler only changes the screen, the form's `action` is empty or `#`, or no endpoint exists in the project. Also a confirmation of something the business never offered.
- **Why it matters:** the visitor leaves believing the message, the booking or the order went through. A success state with nothing behind it is invented content (CY3; modern-design references/content-truth.md), and it breaks the truth MUST in modern-design references/engineering/implementation.md: never show as done what may not be.
- **Fine when:** never as success. Until the endpoint exists, the form validates and says plainly that nothing was sent, and the missing endpoint is a row in `content-needed.md`.
- **How to check:** read the submit handler and the form's `action` in the code. In URL audits, don't submit anything (read-only): judge from the code the page ships, and say that the flow wasn't tested.
- **Report as:** **critical**, Floor (`measured` in code; `judgment` when only the shipped script can be read). In own-project mode, also list it under "Before publishing".
- **Source:** Adapted from Hallmark (MIT, commit 04977e1), gate 70.

### SF11. Field states that shift the layout
- **Look for:** input borders that change width on focus or on error, so the layout jumps; a focus ring drawn with `border` instead of `outline`; an input taller or shorter than the button beside it; disabled fields shown by lower opacity alone.
- **Fix:** keep the border width constant across states; draw focus with `outline` and an offset; share one control height (a token) between inputs and buttons; mark disabled fields with the native attribute and a visible style besides opacity.
- **How to check:** the computed `border-width` in the default, `:focus` and `[aria-invalid="true"]` states; the heights of an input and its neighbouring button.
- **Report as:** minor (`measured`).
- **Source:** Adapted from Hallmark (MIT, commit 04977e1), gate 39a.

### SF12. Tooltips that wait for keyboard focus
- **Look for:** a tooltip with the same delay on focus as on hover, so a keyboard user tabs past before it appears; a tooltip that only opens on hover; one that can't be dismissed without moving focus.
- **Fix:** a short delay on hover and none on focus; the same content reachable from the keyboard; dismissable with Escape (WCAG 2.2, 1.4.13).
- **How to check:** the tooltip's CSS or script for `:focus` and `:focus-visible` handling and its delays; the focus pass in `visual-qa.md`.
- **Report as:** minor (`measured`).
- **Source:** Adapted from Hallmark (MIT, commit 04977e1), gate 17.

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

### MO6. `transition: all` and animated layout
- **Look for:** `transition: all`, or transitions and keyframes on `width`, `height`, `top`, `left`, `margin` or `padding`.
- **Reads as generic because:** `all` is the shortcut a generator writes; it animates properties nobody chose, and layout properties make the browser recompute the page on every frame.
- **Fine when:** one rare size change that `transform` can't express (an accordion opening), with reduced motion handled.
- **Fix:** list the properties that should move, and animate `transform` and `opacity`.
- **How to check:** search the CSS for `transition: all`, `transition-property: all` and transitions naming layout properties.
- **Report as:** minor (`measured`).
- **Source:** Adapted from Hallmark (MIT, commit 04977e1), gate 10a.

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

## Attribution

Written in our own words, from the same sources as `unslop-type-color.md` (see its Attribution section). CY6–CY8 summarise ideas from a shared Instagram screenshot whose author is not yet identified ("AI slop indicators"); ideas only. CY9, CY10, SF10–SF12 and MO6 are adapted from [Hallmark](https://github.com/Nutlope/hallmark), Copyright (c) 2026 Hallmark contributors, MIT, commit 04977e1: its gates rewritten as context rules, without its numeric thresholds.

Full source list with licences: [docs/SOURCES.md](https://github.com/santiagodie/modern-design-pack/blob/main/docs/SOURCES.md). Licence notices: [THIRD_PARTY_NOTICES.md](https://github.com/santiagodie/modern-design-pack/blob/main/THIRD_PARTY_NOTICES.md).
