# Unslop checklist

Reference for `design-review`, used in both modes during the review step. Load it when reviewing; you don't need it while taking screenshots. It holds the Typography (TY), Color (CO), Layout (LA) and Components (CP) families; `copy-states-checklist.md` holds Copy (CY), States and feedback (SF), Motion (MO) and Meta (ME). Load both.

How to review, for this file and every other checklist (`mobile-checklist.md`, `outdated-checklist.md`, `dark-patterns-checklist.md`): `review-method.md`. It owns the template test, `measured` and `judgment`, severity, the order of findings, what the user decided, the levels and the artefacts of the audit setup.

## How to use it

- **Context decides.** Every pattern below is fine somewhere. Check the "Fine when" line before flagging anything; a recorded reason in the brief or in `site-decisions.md` waives it (`review-method.md` §7 and §8).
- **Report as** gives the default report section (`review-method.md` §4).
- **Evidence:** typography, color and layout taste calls are `judgment`. Contrast ratios, sizes, missing states and meta tags you can check in code or with a tool are `measured`.

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
- **Fix:** use one icon set, at one size and stroke. Where a photo or illustration is missing, put a box with the final aspect ratio and a label naming the picture, inside a `data-placeholder` element (the no-invention rule in `modern-design/references/content-truth.md`), and list it in `content-needed.md`. Never invent photos or use stock imagery presented as real.
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

### CP7. An arrow on every button
- **Look for:** an arrow or chevron after the label of every button and link, including actions that don't move the user anywhere.
- **Reads as generic because:** the arrow is added by default, and when every action has one it no longer tells which one moves the user forward.
- **Fine when:** the arrow means something: the primary action that leads to the next step, a "next" control in a sequence, or a link that leaves the site (with an external-link icon).
- **Fix:** keep the arrow where moving forward is the point of the action, and remove it from the rest.
- **Report as:** outdated.

### CP8. Sparkle icons
- **Look for:** the four-pointed sparkle (as an emoji or an icon) marking AI features, buttons, headings or list items. CP1 covers sparkles inside a pill above the headline; this rule covers the icon anywhere else.
- **Reads as generic because:** it became the universal "AI" mark, so it says nothing about what the feature does.
- **Fine when:** the product's own brand uses it, or the app's users already know it as the mark of one specific action.
- **Fix:** name what the feature does in words, and use an icon that shows that action.
- **Report as:** outdated.

### CP9. Dithering as texture
- **Look for:** dithered images, gradients or backgrounds (dot or pixel patterns from 1-bit or retro shaders) used as decoration.
- **Reads as generic because:** it is a passing fashion borrowed from other brands rather than chosen for this one.
- **Fine when:** the brief chooses it and says why, for example for a print, retro or image-processing product.
- **Fix:** remove it when the brief gives no reason, or tie it to the brand's world and write the reason in the brief.
- **Report as:** outdated.

## Considered and left out

These came up in the source lists but don't belong in a visual review of web pages: idempotency keys and stale-while-revalidate (backend and data concerns), pre-rendering (Lighthouse covers the effect), predictive back and swipe-to-dismiss sheets (native app patterns; check them only for app-like PWAs), command menus and shortcut hints (useful for apps, not for marketing pages; mention them as tips when reviewing a web app).

## Attribution

This checklist is written in our own words. It draws on ideas from:

- [unslop](https://github.com/heydamir/unslop) by Damir Sokolovsky, CC BY 4.0. Ideas adapted and rewritten; not endorsed by the author.
- [Impeccable](https://github.com/pbakaus/impeccable) by Paul Bakaus, Apache-2.0, including ideas summarised from its [slop catalogue](https://impeccable.style/slop). Impeccable runs 60+ automated checks; this checklist doesn't reproduce them. Use Impeccable alongside this plugin for that depth.
- [Taste Skill](https://github.com/Leonxlnx/taste-skill) by Leon Lin and blueemi, MIT.
- [Web Interface Guidelines](https://github.com/vercel-labs/web-interface-guidelines) by Vercel, MIT.
- Instagram lists by @charles.unemployed ("20 Tips to Unslop AI Designs") and @millee.md ("20 ways to unslop your AI website designs"), and three shared screenshots whose authors are not yet identified (the third, a list of AI slop indicators, adds TY11, CO9, CP7–CP9 and CY6–CY8). Ideas only.
- [Laws of UX](https://lawsofux.com) by Jon Yablonski, for the names of Fitts's and Hick's laws.

Full source list with licences: [docs/SOURCES.md](https://github.com/santiagodie/modern-design-pack/blob/main/docs/SOURCES.md). Licence notices: [THIRD_PARTY_NOTICES.md](https://github.com/santiagodie/modern-design-pack/blob/main/THIRD_PARTY_NOTICES.md).
