# 05 — Design Styles: How Each Component Changes

> The conversion logic of a landing page (one offer, clear hierarchy, proof near doubt, low friction) **does not change with style**. What changes is *how* each component expresses that logic. A style is a set of decisions about type, color, space, shape, depth and motion — applied consistently.

Styles covered:

1. [Minimalism](#1-minimalism)
2. [Apple-style (premium product storytelling)](#2-apple-style-premium-product-storytelling)
3. [Brutalism (raw / anti-design)](#3-brutalism-raw--anti-design)
4. [Neo-brutalism](#4-neo-brutalism)
5. [Linear-style / dark SaaS](#5-linear-style--dark-saas)
6. [Swiss / editorial typographic](#6-swiss--editorial-typographic)
7. [Maximalism & "dopamine" color](#7-maximalism--dopamine-color)
8. [Retrofuturism / Y2K](#8-retrofuturism--y2k)
9. [Glassmorphism & Neumorphism](#9-glassmorphism--neumorphism)
10. [Collage / scrapbook](#10-collage--scrapbook)
11. [3D & immersive](#11-3d--immersive)
12. [Bento layout (a pattern that fits many styles)](#12-bento-layout)

Then: [Master comparison table](#master-comparison-table) · [Choosing a style](#choosing-a-style) · [Mixing styles without chaos](#mixing-styles-without-chaos)

---

## Quick context: the 2026 trend landscape

Figma's overview of 2026 web design trends lists 13 directions: 3D and immersive elements, experimental navigation, vibrant color palettes, bold typography, dark mode, motion design, gamified design, neumorphism, retrofuturism, maximalism, collage, neo-brutalism/anti-design, and sustainable web design. It notes that once-novel features like dark mode, gradients and playful motion have become baseline expectations. DesignRush's 2026 analysis frames the big shift as "polished is the new generic": with so many sites built from the same templates (and increasingly by AI), distinctive and visibly *human* design has become a competitive advantage.

---

## 1. Minimalism

**Philosophy:** remove everything that doesn't serve the message. Every element must earn its place.

**Tokens**
- Type: one neutral sans (or a refined serif for luxury), 2–3 weights, generous sizes, tight display tracking.
- Color: monochrome + **one** accent (the CTA). Off-white backgrounds, near-black text.
- Space: very generous (section padding 128–200 px desktop).
- Shape: small or zero radii; hairline borders (1 px) instead of shadows.
- Motion: minimal, short fades.

**Component by component**
| Component | Minimalist treatment |
|---|---|
| Header | Logo, 3–4 text links, a small text or outline CTA; no background until scroll |
| Hero | Centered or left-aligned headline, short subhead, single button; one product image or none; lots of air |
| CTA | The only saturated color on the page — maximum isolation effect |
| Social proof | Small grayscale logo row, widely spaced |
| Features | Zig-zag with large product images, or a sparse 3-column text grid without icons |
| Testimonials | One large quote at a time, big typography, small attribution |
| Pricing | Clean cards with borders, no backgrounds; highlight via accent border only |
| FAQ | Plain accordion with hairline dividers |
| Footer | One or two lines of small text |

**Pitfalls**
- **False floor:** NN/g warns that minimalist designs with lots of negative space create an "illusion of completeness" that stops scrolling. Always let the next section peek.
- "Minimal" becoming "empty": not enough information to decide. Minimalism removes decoration, not content.
- Low-contrast grey-on-white text in the name of elegance (accessibility failure).

**References:** Vercel (radical minimalism, two-word headline), Stripe's documentation pages, many Scandinavian brand sites.

---

## 2. Apple-style (premium product storytelling)

**Philosophy:** the product is the hero; the page is paced like a film. One idea per screen, revealed as you scroll. Whitespace signals quality and calm.

**Tokens**
- Type: a neo-grotesque sans (SF Pro–like), huge display sizes (80–120+ px), very tight leading and tracking, strong weight contrast (bold headlines, regular body).
- Color: white or black backgrounds alternating by "chapter"; a single link/CTA blue; product colors provide the only color.
- Space: full-viewport chapters; extreme whitespace around the product.
- Depth: almost none — photography and the product's own form provide it.
- Motion: scroll-driven: pinned (sticky) product with changing text, image-sequence "scrubbing", fades and scale-ins. Smooth on old hardware.

**Component by component**
| Component | Apple-style treatment |
|---|---|
| Header | Thin, translucent frosted bar, tiny type; a secondary sticky "product nav" with product name + "Buy" button |
| Hero | Product name as headline (or 3–6 word tagline), a giant product render, two small CTAs ("Learn more", "Buy") |
| CTA | Small pill buttons or text links with chevrons — the confidence of not shouting. Works because brand demand is already high (be careful copying this) |
| Social proof | Rarely present; replaced by brand authority, awards, and press quotes on specific pages |
| Features | Chapters: one feature per screen, huge headline with a short "smallest true claim", product macro shot; bento grids of specs ("tiles") |
| How it works / specs | Large numbers ("Up to 22 hrs battery") as typographic heroes |
| Testimonials | Generally absent on product pages |
| Pricing | Configurator-style or a simple "From €X" with comparisons between models |
| FAQ | Moved to separate support pages |
| Footer | Dense fat footer with very small type, legal fine print |

**Insider notes**
- The most copyable element of Apple pages isn't the animation — it's the **headline discipline**: short, concrete, modest claims the page can back up.
- Apple can use weak CTAs ("Learn more") because demand already exists. A new brand copying that restraint loses conversions; keep a strong primary CTA.
- Long cinematic scroll pages need serious engineering (image sequences, preloading, 60 fps). A poorly resourced copy performs worse than a well-built medium-density page.

**Pitfalls:** heavy pages, scroll-jacking, content hidden inside animations (not indexable, not accessible), reduced-motion users left with a broken page.

**References:** apple.com product pages (iPhone, MacBook, AirPods); premium hardware and automotive sites.

---

## 3. Brutalism (raw / anti-design)

**Philosophy:** expose the structure of the web: default fonts, visible grids, raw HTML aesthetics, deliberate "ugliness" as honesty or provocation.

**Tokens**
- Type: system fonts, monospace, Times; oversized or deliberately awkward sizing; underlined blue links.
- Color: black/white, or harsh primaries; no gradients.
- Space: either cramped or arbitrarily huge; visible borders and table structures.
- Shape: rectangles, no radius, no shadows.
- Motion: none, or jarring (marquees, blinking) as an ironic statement.

**Component by component**
| Component | Brutalist treatment |
|---|---|
| Header | Plain text links, maybe in a bordered box or a single line of underlined words |
| Hero | Huge text filling the viewport, often all caps or monospace; little or no imagery |
| CTA | Plain bordered rectangle or an underlined link in caps ("BUY →") |
| Social proof | Text lists ("Clients: …") instead of logos |
| Features | Raw lists or tables |
| Testimonials | Plain quoted text |
| Pricing | A table |
| FAQ | Text Q/A, no accordion |
| Footer | Text dump |

**When it works:** fashion, art, music, design studios, culture brands, portfolios — audiences who read the rawness as authenticity and taste. Figma cites Balenciaga and Diesel among brands that used anti-design principles.

**Pitfalls:** NN/g notes brutalism and antidesign often prioritise aesthetics over usability. On a conversion page, chaos destroys hierarchy. If you go brutalist, keep **one** clear CTA and readable body text.

---

## 4. Neo-brutalism

**Philosophy:** brutalism's honesty made friendly and usable. NN/g defines neobrutalism by high contrast, blocky layouts, bold colors, thick borders and "unpolished" elements — while recommending clear buttons, readable type and whitespace to keep it usable.

**Tokens**
- Type: bold grotesques or quirky display fonts, very large headlines; readable body sans.
- Color: flat, saturated fills (yellow, pink, lime, cyan, lilac) clashing intentionally; black for text and strokes.
- Borders: **2–4 px solid black** on almost everything.
- Shadows: **hard offset shadows with zero blur** (e.g. `box-shadow: 4px 4px 0 #000`).
- Shape: rectangles or slightly rounded corners; stickers, badges, hand-drawn doodles.
- Motion: snappy; elements "press into" their shadow on click (`transform: translate(4px,4px); box-shadow: none`).

**Component by component**
| Component | Neo-brutalist treatment |
|---|---|
| Header | White or colored bar with a thick bottom border; chunky CTA with hard shadow |
| Hero | Massive bold headline, a colored block background, playful illustration or sticker-like badges ("NEW!") |
| CTA | Bright fill, thick border, hard shadow, press animation — extremely clickable affordance |
| Social proof | Logos inside bordered boxes, or quotes on colored "sticky note" cards |
| Features | Bordered cards each in a different flat color; bento grids work very well |
| How it works | Big numbers in circles/boxes, connected by thick lines |
| Testimonials | Tweet-like cards with borders and offset shadows, slightly rotated |
| Pricing | Cards with thick borders; recommended plan with a different color and a sticker badge |
| FAQ | Accordion rows with thick borders and big +/− icons |
| Footer | Colored block with bold links |

**Insider notes**
- Neo-brutalism has a usability *advantage*: thick borders and hard shadows make affordances (what's clickable) unmistakable.
- Discipline is the difference between "fun" and "chaos": a strict grid, consistent border width, a limited palette (3–4 fills), and one hierarchy.
- Contrast: black text on saturated yellow/lime is excellent; black on dark pink/blue may fail — check.

**References:** Gumroad (pink and yellow sections, thick black borders), Figma marketing pages, many indie-maker and creator tools. Figma notes Mailchimp also used anti-design elements.

---

## 5. Linear-style / dark SaaS

**Philosophy:** precise, technical, calm. LogRocket describes "linear design" (named after the Linear tool) as straightforward and sequential, combining dark mode, bold typography, complex gradients, glassmorphism, monochrome palettes and high contrast. It has become so widespread that "every SaaS site looks the same" is now a common complaint — the evolution is toward the same structure with more individuality.

**Tokens**
- Type: geometric/neo-grotesque sans (Inter, Geist, SF-like), medium weights, tight tracking; monospace accents for technical details.
- Color: near-black backgrounds (#0A–#12 range), off-white text, grey hierarchy, **one** accent (often subtly glowing). Subtle radial gradients and "light leaks".
- Borders: 1 px hairlines at low opacity (white at 8–12%).
- Depth: glows, inner highlights on cards (a 1 px lighter top edge), occasional glass.
- Motion: refined, subtle — gradient shifts, beam/border animations, product UI reveals.

**Component by component**
| Component | Linear-style treatment |
|---|---|
| Header | Translucent dark bar, hairline border, small grey links, a light or accent pill CTA |
| Hero | Two-line value proposition centered, small grey subhead, the **product UI shown directly beneath** with a glow (product-as-hero) |
| CTA | High-contrast light button on dark (white/near-white) or the accent; secondary as a ghost with hairline border |
| Social proof | Monochrome logo row at low opacity |
| Features | Bento grid of dark cards with hairline borders, micro-animations of product parts, short punchy titles |
| How it works | Sequential sections with keyboard-shortcut motifs, code snippets, changelog-like entries |
| Testimonials | Small cards; often founder/engineer quotes; tweets |
| Pricing | Dark cards; recommended plan with a subtle accent border/glow |
| FAQ | Minimal hairline accordion |
| Footer | Multi-column grey links, small logo, status indicator |

**Insider notes**
- The audience matters: this style signals "built by engineers for professionals". It fits devtools, productivity, AI and fintech infrastructure; it can feel cold for consumer or small-business audiences.
- Common tell of a cheap copy: purple-to-blue gradient blob behind a centered hero, generic glass cards, Inter + slate-900, three identical feature cards. Add a signature element (a distinctive typeface, a unique illustration system, a strong color) to escape the template.
- Dark UIs need extra care with contrast for grey text levels and with screenshots that were designed for light mode.

**References:** Linear, Raycast, Resend (serif display headline on near-black — a typographic twist on the genre), Vercel (light variant), many AI startups.

---

## 6. Swiss / Editorial Typographic

**Philosophy:** typography *is* the design. Rooted in the International Typographic Style and magazine layout: strict grids, asymmetry, hierarchy through scale and weight, sparing imagery.

**Tokens**
- Type: a strong grotesque (Swiss) or a high-contrast serif (editorial) for display, paired with a clean text face; extreme size contrast (120 px headline next to 14 px captions).
- Color: mostly black/white/one spot color (red is classic Swiss).
- Grid: visible discipline — 12-column, asymmetric placements, generous margins, captions and numbering.
- Motion: little; maybe kinetic type.

**Component by component**
| Component | Swiss/editorial treatment |
|---|---|
| Header | Text-only, aligned to the grid, maybe with issue-style metadata |
| Hero | Oversized headline as the main visual, possibly broken across lines intentionally; a single striking photo |
| CTA | Text-style button or a solid black rectangle with white label |
| Social proof | Pull-quotes in large serif type, like a magazine |
| Features | Numbered sections (01, 02, 03) with asymmetric text/image layouts |
| Testimonials | Large editorial pull-quotes |
| Pricing | Typeset table with fine rules |
| FAQ | Two-column Q&A like a magazine sidebar |
| Footer | Colophon-style |

**When it works:** agencies, consultancies, publications, premium services, content-led brands, B2B wanting to look "considered" rather than "techy". Figma's 2026 trends highlight bold typography moving "beyond legibility into storytelling", with oversized headlines and variable fonts.

**Pitfalls:** headlines that are beautiful but unclear; tiny captions that fail contrast; over-reliance on one big word.

---

## 7. Maximalism & "Dopamine" Color

**Philosophy:** more is more — rich color, layered visuals, energy and personality. Figma describes saturated palettes returning in 2026, fueled by Y2K nostalgia and "dopamine design", replacing muted tones especially for lifestyle, beauty and youth brands (citing Lush, Headspace and Starface), and maximalism using rich colors, overlapping visuals and dense compositions (citing Spotify and Liquid Death).

**Tokens**
- Type: expressive display fonts, mixed styles, outlined and filled text, variable font animations.
- Color: multiple saturated hues, gradients, color-blocked sections.
- Layout: overlapping elements, rotated images, patterns, textures.
- Motion: playful, bouncy easing; stickers that wobble; marquee text.

**Component by component**
| Component | Maximalist treatment |
|---|---|
| Header | Colored bar, playful logo, bold CTA |
| Hero | Big colorful composition: product + characters + type layered; strong personality line |
| CTA | Must still be the most distinct element — use a color/shape that appears *nowhere else* (hard in a colorful page; often solved with black or white buttons with borders) |
| Social proof | Ratings in starbursts, UGC photos, influencer faces |
| Features | Each feature in its own colored block with illustrations |
| Testimonials | Wall of colorful cards, UGC images, emojis |
| Pricing | Bold, colored cards with playful plan names |
| FAQ | Colorful accordion with personality-filled answers |
| Footer | Big brand wordmark, colorful |

**Pitfalls:** the CTA disappearing in the noise (the isolation effect needs contrast with *everything*); performance (lots of images/animations); accessibility (text on saturated colors, motion overload).

---

## 8. Retrofuturism / Y2K

**Philosophy:** nostalgia for past visions of the future. Figma describes neon accents, chrome textures, pixel art and sci-fi or arcade-inspired gradients, suited to lifestyle, music, entertainment and portfolio sites.

**Tokens:** chrome/metallic type, neon on dark, pixel or futuristic fonts, scanlines, grain, iridescent gradients, early-web UI motifs (windows, cursors, pixel icons).

**Component by component**
| Component | Retrofuturist treatment |
|---|---|
| Hero | Chrome 3D wordmark, neon glow, starfield or grid horizon |
| CTA | Glowing neon button or a "retro OS" window-style button |
| Features | Cards styled as old OS windows or arcade cabinets |
| Testimonials | "Guestbook" or chat-window style |
| Pricing | Game-like "level" tiers |

**Pitfalls:** readability of novelty fonts (keep them for display only), glow effects reducing contrast, kitsch overwhelming the message.

---

## 9. Glassmorphism & Neumorphism

### Glassmorphism
**What it is:** translucent "frosted glass" layers (`backdrop-filter: blur()`), subtle borders and highlights, over colorful backgrounds.
**Where it fits:** headers, floating cards, overlays in Linear-style and Apple-style designs.
**Rules:** provide a solid fallback; respect `prefers-reduced-transparency`; ensure text contrast over the *most colorful* part of the background; limit blur layers (expensive on mobile GPUs).
**Pitfall:** LogRocket notes that glassmorphism is very hard to make original — overused, it makes a design look generic.

### Neumorphism
**What it is:** "soft UI" — elements extruded from or pressed into the background with paired light and dark soft shadows. Figma describes it as combining skeuomorphic realism with simplicity, appearing in fintech and productivity interfaces.
**Where it fits:** small doses — toggles, controls, product UI illustrations, calculators.
**Critical problem:** low contrast. Buttons and inputs often fail WCAG 3:1 for UI components and are hard to distinguish from non-interactive surfaces. **Never** make the primary CTA neumorphic without a strong contrasting fill.

---

## 10. Collage / Scrapbook

**Philosophy:** handmade, tactile, personal. Figma describes sticker graphics, torn textures, cutout photos and hand-drawn fonts — "messy on purpose" — popular with lifestyle brands and personal portfolios.

**Component by component**
| Component | Collage treatment |
|---|---|
| Hero | Cutout product photos, tape, stickers, handwritten annotations around a clear headline |
| CTA | Sticker-like or "torn paper" button — still with a solid, high-contrast label |
| Social proof | Polaroid-style customer photos, handwritten notes |
| Features | Scrapbook pages with annotated photos |
| Testimonials | Notes "pinned" to the page |

**Rules:** keep the **text layer clean** (collage is the background and decoration; copy must stay readable); compress textures heavily; ensure decorative images have empty `alt`.

---

## 11. 3D & Immersive

**Philosophy:** depth and interaction — WebGL models, scroll-triggered 3D, AR previews. Figma cites spinning 3D products and virtual tours, with Nike and IKEA as examples of letting users try or visualise products before buying.

**Component by component**
| Component | Immersive treatment |
|---|---|
| Hero | An interactive 3D product the visitor can rotate, or a 3D scene reacting to the cursor/scroll |
| Features | Scroll-driven camera moves that "explode" the product to show parts |
| Demo | AR "view in your room" for physical products |

**Rules**
- Always provide a **static image fallback** that loads first (it can be the LCP element).
- Lazy-load 3D libraries and models after the first paint; compress models (Draco/Meshopt, KTX2 textures).
- Keep the headline and CTA in normal HTML, visible immediately, never inside the canvas.
- Offer a reduced-motion version.

**Pitfall:** huge payloads on mobile; immersive pages that are impressive but don't say what the product does.

---

## 12. Bento Layout

**Not a style but a pattern** — a grid of tiles of different sizes (popularised by Apple's spec tiles and widely adopted by SaaS). Figma's AI website examples note that most SaaS sites now share bento grids, dark mode and feature blocks.

**Rules**
- **Size = importance:** one large "hero tile", a few medium, several small. Equal tiles defeat the purpose.
- One idea per tile: a short title, one line, one visual.
- Consistent gap (12–24 px) and radius.
- On mobile, re-order tiles by importance — don't just stack them in desktop order.

**How bento changes by style**
| Style | Bento expression |
|---|---|
| Apple | White/black tiles, huge numbers, product macro photos |
| Linear | Dark tiles, hairline borders, glowing micro-animations of UI |
| Neo-brutalist | Flat colored tiles, thick black borders, hard shadows |
| Minimal | Borderless tiles separated only by space and subtle background tints |
| Maximalist | Every tile a different color/texture, overlapping stickers |

---

## Master comparison table

| Component | Minimal | Apple | Neo-brutalist | Linear/dark | Editorial | Maximalist |
|---|---|---|---|---|---|---|
| **Background** | Off-white | Alternating white/black chapters | Flat bright blocks | Near-black + glows | White/paper | Multi-color |
| **Headline** | Clean sans, large | Huge, tight, few words | Massive, bold, quirky | Two lines, medium weight | Oversized serif/grotesque | Expressive mixed type |
| **CTA** | Only accent color | Small pill/link | Thick border + hard shadow | White/accent pill | Black rectangle | Unique color + border |
| **Proof** | Grey logo row | Brand authority | Bordered cards/stickers | Low-opacity logos | Pull-quotes | UGC + ratings |
| **Features** | Zig-zag, airy | One per screen | Colored bordered bento | Dark bento, micro-animations | Numbered asymmetric | Colored blocks |
| **Depth** | Hairlines | Photography | Hard shadows | Glow + glass | None | Layering |
| **Motion** | Subtle fades | Scroll-driven cinema | Snappy press | Refined, subtle | Minimal | Bouncy, playful |
| **Radius** | 0–8 px | 12–24 px | 0–12 px | 8–16 px | 0 px | Mixed |
| **Best for** | Premium, B2B, services | Hardware, premium consumer | Creators, indie SaaS, Gen Z | Devtools, AI, fintech | Agencies, media, consultancy | Lifestyle, beauty, youth |

---

## Choosing a style

Ask, in this order:

1. **Who is the audience and what do they trust?** Developers trust precision (Linear); creatives trust personality (neo-brutalism, collage); executives in regulated industries trust calm clarity (minimal, editorial); consumers buying premium hardware trust product focus (Apple-style).
2. **What's the price and risk?** Higher price/risk → calmer, more restrained styles. Impulse/low price → energy and playfulness are fine.
3. **What do competitors look like?** DesignRush's "polished is the new generic" point: in a category where every site looks like Linear, a well-executed different style is itself a differentiator — as long as usability holds.
4. **Can you execute it?** Apple-style and 3D need engineering and assets. A well-executed minimal page beats a half-executed cinematic one.

## Mixing styles without chaos

- Pick **one base style** (type, color, spacing, radius) and borrow **one** element from another (e.g. a minimal page with neo-brutalist CTA buttons; a Linear-style page with an editorial serif headline, like Resend).
- Keep the **conversion system constant** across styles: CTA isolation, readable body text, proof near doubt, visible focus, contrast compliance.
- Write down your choices as **design tokens** (colors, type scale, spacing, radius, shadow, motion durations). A style is consistent only if it's systematised.
