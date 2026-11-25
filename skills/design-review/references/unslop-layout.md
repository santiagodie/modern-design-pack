# Unslop checklist: layout

> **Covers:** generic patterns and common mistakes in layout and spacing (LA1–LA19), each with when it is fine, how to check it and where it goes in the report.
> **Read when:** the review step of both modes, with the other unslop files and references/copy-states-checklist.md.
> **Not here:** how to review (severity, evidence, levels, waivers) → references/review-method.md; typography and color → references/unslop-type-color.md; components → references/unslop-components.md (planned); copy, states, motion and meta → references/copy-states-checklist.md; spacing tokens → modern-design references/ui/tokens-space.md; section layouts → modern-design references/ui/sections/index.md
> **Owner:** design-review
> **Sources:** unslop (CC BY 4.0), Impeccable (Apache-2.0), Taste Skill (MIT), Web Interface Guidelines (MIT), Hallmark (MIT, commit 04977e1), Instagram lists and screenshots (ideas only); full list in docs/SOURCES.md

Reference for `design-review`, used in both modes during the review step. It holds the Layout and spacing (LA) family. How to review (template test, severity, `measured` and `judgment`, levels, what the user decided) is in `review-method.md`.

## How to use it

- **Context decides.** Every pattern below is fine somewhere. Check the "Fine when" line before flagging anything; a recorded reason in the brief or in `site-decisions.md` waives it (`review-method.md` §7 and §8).
- **Report as** gives the default report section (`review-method.md` §4).
- **Evidence:** taste calls are `judgment`. Sizes, colors, attributes and states you can read in the code or with a tool are `measured`.

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

### LA11. Too many words on one screen
- **Look for:** a screen at 1440 that holds several paragraphs; a hero with more than a headline, one sentence and its actions; sections that explain in prose what a picture, a table or the product itself could show.
- **Reads as generic because:** with no material to show, generators fill the space with words, and a visitor takes in one idea per screen or leaves.
- **Fine when:** the page is meant to be read (an article, documentation, a legal page, a letter), or the words are the user's and recorded as verbatim in `site-decisions.md`.
- **Fix:** keep one idea per screen and move detail to where it is wanted (a page of its own, a disclosure). Never cut the user's facts to reach a count.
- **How to check:** count the words visible in one 1440 × 900 screen. The count is context, not a threshold: Hallmark's budget of about 80 words is a signal to look closer, not a rule here.
- **Report as:** minor (`judgment`, with the count as `measured` context).
- **Source:** Adapted from Hallmark (MIT, commit 04977e1), gate 58.

### LA12. Thin sections
- **Look for:** below the hero, sections that hold only a heading and a line, or a narrow column with half the container empty at 1440.
- **Fine when:** one band of a single line and an action, once on the page.
- **Fix:** give the section mass from its own material (a picture, a table, the list of real items, a statement set large), or merge it with its neighbour. Don't add words to fill it.
- **Report as:** minor (`judgment`).
- **Source:** Adapted from Hallmark (MIT, commit 04977e1), gate 77.

### LA13. An empty band under the hero
- **Look for:** at 1440 × 900, a tall strip of nothing between the hero's lowest content and the fold or the next section.
- **Fine when:** the space is the composition: a poster-like hero whose content is anchored to one edge on purpose, recorded in the brief.
- **Fix:** centre the hero's content in its screen, or let the visual or the headline grow. Never fill it with more copy.
- **How to check:** in the 1440 screenshot, the distance from the hero's lowest element to the fold.
- **Report as:** minor (`measured` for the gap; whether it is intended is `judgment`).
- **Source:** Adapted from Hallmark (MIT, commit 04977e1), gate 79.

### LA14. A container that keeps growing on wide screens
- **Look for:** at 1920 px, text and grids stretched edge to edge, a grid that gains columns until its items are small, or gutters that stay thin.
- **Fine when:** a full-bleed image, map or data view that uses the width.
- **Fix:** cap the content container with a `max-width` from the tokens and centre it; let the gutters grow, not the measure or the columns.
- **How to check:** one extra screenshot at 1920 × 1080 when the 1440 screenshot already shows long lines or full-width grids (`visual-qa.md`, 1440 px).
- **Report as:** minor (`measured`).
- **Source:** Adapted from Hallmark (MIT, commit 04977e1), gate 44d.

### LA15. Two sticky elements on the same edge
- **Look for:** two elements with `position: sticky` or `fixed` and `top: 0`, so one slides under the other while scrolling (a section heading passing under the site header).
- **Fix:** offset the second by the height of the first, as a token, and set their stacking order.
- **How to check:** the computed `position` and `top` of sticky and fixed elements; a screenshot taken mid-scroll. SF8 covers bars over content and the notch: flag the pattern once.
- **Report as:** minor; **critical** when it covers content or the focused element (`measured`).
- **Source:** Adapted from Hallmark (MIT, commit 04977e1), gate 56.

### LA16. Text painted under another element
- **Look for:** a line of text covered by an image, a box, a decoration or other text at some width. Sticky bars covering text while scrolling are SF8.
- **Fix:** give the text its own space, or put it on its own surface above whatever covers it.
- **How to check:** in each screenshot; `document.elementFromPoint` at the text's position returns a different element.
- **Report as:** **critical** when the covered text is needed to decide or act; minor otherwise (`measured`).
- **Source:** Adapted from Hallmark (MIT, commit 04977e1), gate 73.

### LA17. Header and footer by reflex
- **Look for:** the default header (wordmark left, a row of links, a button right, a hairline under it) and the default footer (four columns of links, a row of social icons, a copyright line) on a page whose destinations don't need that shape.
- **Reads as generic because:** the shape was chosen before anyone listed what the page links to.
- **Fine when:** the site really has that many destinations, or the brief chose the shape and says why.
- **Fix:** build the header and the footer from the page's real destinations and its main action (modern-design references/ui/sections/header.md and modern-design references/ui/sections/footer.md).
- **Report as:** outdated (`judgment`).
- **Source:** Adapted from Hallmark (MIT, commit 04977e1), gate 42.

### LA18. A wall of photographs
- **Look for:** below the hero, photographs one after another covering most of the page, or two photo-led sections in a row, so the page reads as a stock gallery.
- **Fine when:** a gallery or portfolio of the user's own work.
- **Fix:** keep the photographs that carry a fact and set them large; build the sections between them from type, figures, tables or the product.
- **Report as:** outdated (`judgment`). Hallmark's "about a third of the page" is a signal to look, not a threshold.
- **Source:** Adapted from Hallmark (MIT, commit 04977e1), gate 83.

### LA19. Ending on a sign-up the page doesn't need
- **Look for:** the last section before the footer, or the footer itself, is an email sign-up, on a page whose job is not subscribing (a shop, a booking, a service, a tool).
- **Reads as generic because:** it is the default closing band of generated pages, and it ends the page on an action nobody came for.
- **Fine when:** the page's job is to subscribe, join or attend, or the user asked for the sign-up.
- **Fix:** end on what the visitor came to do (the booking, the purchase, the next date and place) or on the last strong section (modern-design references/ui/sections/final-cta.md).
- **Report as:** outdated (`judgment`).
- **Source:** Adapted from Hallmark (MIT, commit 04977e1), gate 85.

## Attribution

Written in our own words. It draws on ideas from:

- [unslop](https://github.com/heydamir/unslop) by Damir Sokolovsky, CC BY 4.0. Ideas adapted and rewritten; not endorsed by the author.
- [Impeccable](https://github.com/pbakaus/impeccable) by Paul Bakaus, Apache-2.0, including ideas summarised from its [slop catalogue](https://impeccable.style/slop). Impeccable runs 60+ automated checks; this checklist doesn't reproduce them. Use Impeccable alongside this plugin for that depth.
- [Taste Skill](https://github.com/Leonxlnx/taste-skill) by Leon Lin and blueemi, MIT.
- [Web Interface Guidelines](https://github.com/vercel-labs/web-interface-guidelines) by Vercel, MIT.
- Instagram lists by @charles.unemployed ("20 Tips to Unslop AI Designs") and @millee.md ("20 ways to unslop your AI website designs"), and three shared screenshots whose authors are not yet identified (the third, a list of AI slop indicators, adds TY11, CO9, CP7–CP9 and CY6–CY8). Ideas only.
- [Laws of UX](https://lawsofux.com) by Jon Yablonski, for the names of Fitts's and Hick's laws.
- [Hallmark](https://github.com/Nutlope/hallmark), Copyright (c) 2026 Hallmark contributors, MIT, commit 04977e1: the entries marked "Adapted from Hallmark" (LA11–LA19). Its gates were rewritten as context rules with a "Fine when" line; its numeric thresholds and its photo-library stand-ins are not adopted.

Full source list with licences: [docs/SOURCES.md](https://github.com/santiagodie/modern-design-pack/blob/main/docs/SOURCES.md). Licence notices: [THIRD_PARTY_NOTICES.md](https://github.com/santiagodie/modern-design-pack/blob/main/THIRD_PARTY_NOTICES.md).
