# Unslop checklist

Reference for `design-review`, used in both modes during the review step. Load it when reviewing; you don't need it while taking screenshots. It holds the Components (CP) family; `unslop-type-color.md` holds Typography (TY) and Color (CO), `unslop-layout.md` holds Layout (LA), and `copy-states-checklist.md` holds Copy (CY), States and feedback (SF), Motion (MO) and Meta (ME). Load all four.

How to review, for this file and every other checklist (`mobile-checklist.md`, `outdated-checklist.md`, `dark-patterns-checklist.md`): `review-method.md`. It owns the template test, `measured` and `judgment`, severity, the order of findings, what the user decided, the levels and the artefacts of the audit setup.

## How to use it

- **Context decides.** Every pattern below is fine somewhere. Check the "Fine when" line before flagging anything; a recorded reason in the brief or in `site-decisions.md` waives it (`review-method.md` §7 and §8).
- **Report as** gives the default report section (`review-method.md` §4).
- **Evidence:** typography, color and layout taste calls are `judgment`. Contrast ratios, sizes, missing states and meta tags you can check in code or with a tool are `measured`.

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
