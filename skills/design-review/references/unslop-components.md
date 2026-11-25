# Unslop checklist: components

> **Covers:** generic patterns and common mistakes in components and imagery (CP1–CP14), each with when it is fine, how to check it and where it goes in the report; what was considered and left out.
> **Read when:** the review step of both modes, with the other unslop files and references/copy-states-checklist.md.
> **Not here:** how to review (severity, evidence, levels, waivers) → references/review-method.md; typography and color → references/unslop-type-color.md; layout → references/unslop-layout.md; copy, states, motion and meta → references/copy-states-checklist.md; placeholders and the no-invention rule → modern-design references/content-truth.md
> **Owner:** design-review
> **Sources:** unslop (CC BY 4.0), Impeccable (Apache-2.0), Taste Skill (MIT), Web Interface Guidelines (MIT), Hallmark (MIT, commit 04977e1), Instagram lists and screenshots (ideas only); full list in docs/SOURCES.md

Reference for `design-review`, used in both modes during the review step. It holds the Components (CP) family. How to review (template test, severity, `measured` and `judgment`, levels, what the user decided) is in `review-method.md`.

## How to use it

- **Context decides.** Every pattern below is fine somewhere. Check the "Fine when" line before flagging anything; a recorded reason in the brief or in `site-decisions.md` waives it (`review-method.md` §7 and §8).
- **Report as** gives the default report section (`review-method.md` §4).
- **Evidence:** taste calls are `judgment`. Sizes, colors, attributes and states you can read in the code or with a tool are `measured`.

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

### CP10. A drawing of a real object
- **Look for:** an inline SVG or CSS drawing of a product, a plant, an animal, a person, a building or a scene, larger than an icon, standing where a photograph would go.
- **Reads as generic because:** when no picture is supplied, generators draw one, and a drawing of the thing tells the visitor nothing about this business.
- **Fine when:** it is a chart, map or diagram of real data or a real system and is named as one; it is the user's logo or the user's own illustration; or the brand's illustration style is recorded in the brief.
- **Fix:** use the user's photograph. Until it arrives, a marked image placeholder with its aspect ratio and label (modern-design references/content-truth.md), listed in `content-needed.md`.
- **How to check:** an inline `<svg>` over about 120 px with several paths and no text is a `measured` hint; what it depicts is `judgment`.
- **Report as:** outdated (`judgment`).
- **Source:** Adapted from Hallmark (MIT, commit 04977e1), gate 80. Hallmark fills these slots from a photo library; we keep marked placeholders instead (content-truth).

### CP11. A page of empty frames
- **Look for:** colored or gradient boxes where pictures go, with nothing inside and no label; or a row of image placeholders (a team of blank portraits, a range of blank products), so the page reads as a wireframe.
- **Fine when:** the build is waiting for the user's material and every box is a marked placeholder listed in `content-needed.md`. Those are "Before publishing" items (CY3), not a design finding; still, when a set of people or products can be said in type (names, roles, facts), suggest it, and keep boxes for the pictures that matter.
- **Fix:** an unlabelled box becomes a marked placeholder (label, aspect ratio, `data-placeholder`); a row of blank frames becomes a list or a table until the pictures arrive.
- **How to check:** elements of about 300 × 200 px or more whose only content is a background; the number of `data-placeholder` image boxes in one row.
- **Report as:** minor (`measured`); **critical** when an unlabelled box passes for a real picture (CY3).
- **Source:** Adapted from Hallmark (MIT, commit 04977e1), gates 81 and 68.

### CP12. Marks that count
- **Look for:** rows of identical marks (dots, ticks, bars, small icons) standing for a quantity: one per customer, per bottle, per day.
- **Fine when:** a chart whose marks differ in value, or a status grid where each mark is a real item with its own state.
- **Fix:** set the number in type, with its source (CY3).
- **Report as:** outdated (`judgment`).
- **Source:** Adapted from Hallmark (MIT, commit 04977e1), gate 82.

### CP13. Drawn browser and device frames
- **Look for:** a browser bar drawn in CSS (three colored dots, an address pill) or an operating-system title bar around a picture; phone, laptop or terminal frames around content.
- **Reads as generic because:** the frame is chrome around a picture of nothing, and around a real screenshot it adds a window the visitor already has.
- **Fine when:** one device frame holds a real screenshot of the product, and the device matters (an app sold for phones).
- **Fix:** show the real screenshot in a `<figure>` with a caption, with no frame.
- **Report as:** outdated (`judgment`; drawn window dots in the markup are `measured`).
- **Source:** Adapted from Hallmark (MIT, commit 04977e1), gates 47a and 47b.

### CP14. A built mock where the real product exists
- **Look for:** a dashboard or app screen built from styled boxes with sample figures, standing in for a product that already runs (it has a URL or a dev server, or its code is in the project).
- **Fine when:** the product isn't built yet, or a capture would show private data; the mock is then labelled as an illustration and its sample values aren't presented as results.
- **Fix:** capture the real product in a telling state and use the screenshots. When they can't be taken now, list the screens to capture in `content-needed.md`.
- **Report as:** minor (`judgment`); **critical** when the mock's figures read as real results (CY3).
- **Source:** Adapted from Hallmark (MIT, commit 04977e1), gate 84.

## Considered and left out

These came up in the source lists but don't belong in a visual review of web pages: idempotency keys and stale-while-revalidate (backend and data concerns), pre-rendering (Lighthouse covers the effect), predictive back and swipe-to-dismiss sheets (native app patterns; check them only for app-like PWAs), command menus and shortcut hints (useful for apps, not for marketing pages; mention them as tips when reviewing a web app).

## Attribution

Written in our own words. It draws on ideas from:

- [unslop](https://github.com/heydamir/unslop) by Damir Sokolovsky, CC BY 4.0. Ideas adapted and rewritten; not endorsed by the author.
- [Impeccable](https://github.com/pbakaus/impeccable) by Paul Bakaus, Apache-2.0, including ideas summarised from its [slop catalogue](https://impeccable.style/slop). Impeccable runs 60+ automated checks; this checklist doesn't reproduce them. Use Impeccable alongside this plugin for that depth.
- [Taste Skill](https://github.com/Leonxlnx/taste-skill) by Leon Lin and blueemi, MIT.
- [Web Interface Guidelines](https://github.com/vercel-labs/web-interface-guidelines) by Vercel, MIT.
- Instagram lists by @charles.unemployed ("20 Tips to Unslop AI Designs") and @millee.md ("20 ways to unslop your AI website designs"), and three shared screenshots whose authors are not yet identified (the third, a list of AI slop indicators, adds TY11, CO9, CP7–CP9 and CY6–CY8). Ideas only.
- [Laws of UX](https://lawsofux.com) by Jon Yablonski, for the names of Fitts's and Hick's laws.
- [Hallmark](https://github.com/Nutlope/hallmark), Copyright (c) 2026 Hallmark contributors, MIT, commit 04977e1: the entries marked "Adapted from Hallmark" (CP10–CP14). Its gates were rewritten as context rules with a "Fine when" line; its numeric thresholds and its photo-library stand-ins are not adopted.

Full source list with licences: [docs/SOURCES.md](https://github.com/santiagodie/modern-design-pack/blob/main/docs/SOURCES.md). Licence notices: [THIRD_PARTY_NOTICES.md](https://github.com/santiagodie/modern-design-pack/blob/main/THIRD_PARTY_NOTICES.md).
