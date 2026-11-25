# Unslop checklist: typography and color

> **Covers:** generic patterns and common mistakes in typography (TY1–TY14) and color (CO1–CO10), each with when it is fine, how to check it and where it goes in the report.
> **Read when:** the review step of both modes, with the other unslop files and references/copy-states-checklist.md.
> **Not here:** how to review (severity, evidence, levels, waivers) → references/review-method.md; layout → references/unslop-layout.md (planned); components → references/unslop-components.md (planned); copy, states, motion and meta → references/copy-states-checklist.md; type and color tokens → modern-design references/ui/tokens-type.md, modern-design references/ui/tokens-color.md
> **Owner:** design-review
> **Sources:** unslop (CC BY 4.0), Impeccable (Apache-2.0), Taste Skill (MIT), Web Interface Guidelines (MIT), Hallmark (MIT, commit 04977e1), Instagram lists and screenshots (ideas only); full list in docs/SOURCES.md

Reference for `design-review`, used in both modes during the review step. It holds the Typography (TY) and Color (CO) families. How to review (template test, severity, `measured` and `judgment`, levels, what the user decided) is in `review-method.md`.

## How to use it

- **Context decides.** Every pattern below is fine somewhere. Check the "Fine when" line before flagging anything; a recorded reason in the brief or in `site-decisions.md` waives it (`review-method.md` §7 and §8).
- **Report as** gives the default report section (`review-method.md` §4).
- **Evidence:** taste calls are `judgment`. Sizes, colors, attributes and states you can read in the code or with a tool are `measured`.

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
- **Fine when:** the brand is editorial and the italic word carries meaning the reader would otherwise miss, or the brief chooses it and says why.
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

### TY11. The display face of the season
- **Look for:** Instrument Serif, or another face that generated pages currently share, set for headlines with no link to the brand.
- **Reads as generic because:** generators converge on a handful of display faces at a time, so the face alone now signals a generated page.
- **Fine when:** the brief picks the face and states why it fits this brand, for example because it is already the brand's face.
- **Fix:** choose the display face from the brand's tone and world when the brief gives no reason for the current one, and write the reason in the brief.
- **How to check:** read the computed `font-family` of `h1` and `h2`, or the `@font-face` and font links in the CSS.
- **Report as:** outdated (`measured` for the face; whether it fits the brand is `judgment`).

### TY12. Section headings that shrink after the hero
- **Look for:** below the hero, section headings (`h2`) so close to body size that they read as labels next to a very large hero headline, so the page loses its outline after the first screen.
- **Reads as generic because:** generators spend the scale on the hero and set every later heading at one modest size.
- **Fine when:** the page is a long document, a letter or an index, where headings are meant to be quiet, and the type scale says so.
- **Fix:** give section headings their own step of the scale (`--text-headline` or `--text-title`, modern-design references/ui/tokens-type.md §4), clearly between the hero and item titles.
- **How to check:** compare the computed `font-size` of `h1` with the median `h2` at 1440. A fixed pixel threshold is not the rule; judge against the page's own scale.
- **Report as:** minor (`measured` for the sizes; whether the step is too small is `judgment`).
- **Source:** Adapted from Hallmark (MIT, commit 04977e1), gate 78.

### TY13. Button labels that wrap
- **Look for:** a button label or a primary navigation link that breaks onto two lines at any width from 375 to 1440 px.
- **Fine when:** a footer link or a breadcrumb that is a real phrase and can't be shortened, on two lines at most.
- **Fix:** shorten the label, or let the button take the full width of the line on phones. Use `white-space: nowrap` only when the label still fits at 375 px.
- **How to check:** in each screenshot, a button about twice as tall as its siblings, or a nav link on two lines.
- **Report as:** minor; **critical** when the wrapped label is clipped or overlaps other content (`measured`).
- **Source:** Adapted from Hallmark (MIT, commit 04977e1), gates 49a and 49b.

### TY14. Straight quotes and three full stops
- **Look for:** straight quotes (`"` and `'`) in running text and headings, and three full stops (`...`) where an ellipsis belongs.
- **Fine when:** the text is code, or the language uses another mark consistently (« » or „ “).
- **Fix:** use the typographic quotes of the page's language and the ellipsis character (…).
- **How to check:** search the visible text for `"`, for `'` between letters, and for `...`.
- **Report as:** tip (`measured`).
- **Source:** Adapted from Hallmark (MIT, commit 04977e1), finish checks F1 and F2.

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
- **Fine when:** the color carries status (error, warning, success) and is used consistently, or the box is a notice, a note or a quotation, where a side bar is the convention.
- **Fix:** use a neutral border, a subtle tint, or a leading icon or label.
- **How to check:** a box with a `border-left` (or `border-inline-start`) in a non-neutral color, in the CSS or the computed style. Whether the box is a notice is `judgment`.
- **Report as:** outdated (`measured`).

### CO7. Glassmorphism as decoration
- **Look for:** frosted, blurred, translucent panels over plain or gradient backgrounds.
- **Fine when:** a panel sits over real content or imagery where seeing through it helps, and the text still meets contrast.
- **Fix:** use solid surfaces.
- **Report as:** outdated.

### CO8. Warm cream as the automatic background
- **Look for:** an off-white, cream or beige page background chosen by default, with brown or terracotta accents, when nothing in the brief asks for it.
- **Reads as generic because:** generators reach for it as the "tasteful" alternative to white, so it now signals a template too.
- **Fine when:** the brief gives a concrete reason: an existing brand, the business's own material or photography, or a decision recorded in `site-decisions.md`. A category or sector is never the reason (`modern-design/references/ui/tokens.md` §4 owns this rule).
- **Fix:** derive the background from the brand and the use scene, not from a default.
- **Report as:** outdated.

### CO9. A blurred glow behind the hero
- **Look for:** a large colored shape or radial gradient, blurred, sitting behind the hero headline or the product image.
- **Reads as generic because:** it is the default "premium" backdrop of generated landings and says nothing about the product.
- **Fine when:** the brief chooses it as part of the brand's visual language and says why, or the light is part of a real product photograph.
- **Fix:** remove it and let the product, a photograph or a flat surface carry the hero.
- **How to check:** inside the hero, a decorative element (absolutely positioned, behind the content, often `aria-hidden`) with `filter: blur()` at a large radius, or a blurred `radial-gradient` layer. CO3 covers glows on elements and CP4 blobs as decoration: flag the pattern once.
- **Report as:** outdated (`measured`).

### CO10. The framework's stock palette
- **Look for:** colors taken straight from a CSS framework's default palette (Tailwind's `indigo-500`, `violet-600`, `slate-900` and their neighbours) as the accent or the main surfaces.
- **Reads as generic because:** the stock swatch is what a generator types when nobody chose a color.
- **Fine when:** the project used those values before this build (an existing brand or design system), recorded in `site-decisions.md`.
- **Fix:** derive the accent and the neutrals from the brand and the use scene (modern-design references/ui/tokens-color.md), and name them as tokens.
- **How to check:** utility classes such as `bg-indigo-500` in the markup, or the framework's palette variables used directly instead of the project's own tokens.
- **Report as:** outdated (`measured` for the values; that no brand reason exists is `judgment`).
- **Source:** Adapted from Hallmark (MIT, commit 04977e1), gate 74.

## Attribution

Written in our own words. It draws on ideas from:

- [unslop](https://github.com/heydamir/unslop) by Damir Sokolovsky, CC BY 4.0. Ideas adapted and rewritten; not endorsed by the author.
- [Impeccable](https://github.com/pbakaus/impeccable) by Paul Bakaus, Apache-2.0, including ideas summarised from its [slop catalogue](https://impeccable.style/slop). Impeccable runs 60+ automated checks; this checklist doesn't reproduce them. Use Impeccable alongside this plugin for that depth.
- [Taste Skill](https://github.com/Leonxlnx/taste-skill) by Leon Lin and blueemi, MIT.
- [Web Interface Guidelines](https://github.com/vercel-labs/web-interface-guidelines) by Vercel, MIT.
- Instagram lists by @charles.unemployed ("20 Tips to Unslop AI Designs") and @millee.md ("20 ways to unslop your AI website designs"), and three shared screenshots whose authors are not yet identified (the third, a list of AI slop indicators, adds TY11, CO9, CP7–CP9 and CY6–CY8). Ideas only.
- [Laws of UX](https://lawsofux.com) by Jon Yablonski, for the names of Fitts's and Hick's laws.
- [Hallmark](https://github.com/Nutlope/hallmark), Copyright (c) 2026 Hallmark contributors, MIT, commit 04977e1: the entries marked "Adapted from Hallmark" (TY12–TY14, CO10). Its gates were rewritten as context rules with a "Fine when" line; its numeric thresholds and its photo-library stand-ins are not adopted.

Full source list with licences: [docs/SOURCES.md](https://github.com/santiagodie/modern-design-pack/blob/main/docs/SOURCES.md). Licence notices: [THIRD_PARTY_NOTICES.md](https://github.com/santiagodie/modern-design-pack/blob/main/THIRD_PARTY_NOTICES.md).
