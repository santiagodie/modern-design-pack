# Sources

Every external source that this plugin draws on, or plans to draw on, is listed here. A source's **License** column, and any author or URL marked `TO VERIFY`, is filled in when that source is about to be used, not before (see `ROADMAP.md`). Until its row is checked, nothing from a source is copied into the skills.

Column guide:

- **Used in**: the skill, with the reference file in parentheses when the source belongs to one step
- **Type**: skill / article / component library / inspiration / tool / social post
- **How**: `adapt` (rework ideas or code in our own words, with attribution), `summarise` (paraphrase the key points, with attribution), `link only` (point to it, take nothing)

## Source table

| Source | URL | Author | Type | License | Used in | How | Notes |
|---|---|---|---|---|---|---|---|
| frontend-design (anthropics/skills) | https://github.com/anthropics/skills/tree/main/skills/frontend-design | Anthropic | skill | Apache-2.0 (`LICENSE.txt` in the skill folder; the repo has no root licence) | modern-design (direction) | adapt | Official reference skill for distinctive frontend work. Read and adapted on 2026-11-23 in `direction.md`. Impeccable started from it. |
| Taste Skill | https://tasteskill.dev (repo https://github.com/Leonxlnx/taste-skill) | Leon Lin and blueemi (GitHub: Leonxlnx) | skill | MIT | modern-design (direction), design-review (unslop-checklist) | adapt | Read `skills/taste-skill/SKILL.md` on 2026-11-23; used in the checklist and in `direction.md`. Ideas rewritten in our own words. Example photos in the repo carry their own licences; none used. |
| AI for UI skills | https://aiforui.dev/skills | TO VERIFY | skill | TO VERIFY | modern-design (direction) | summarise | |
| claude-webkit | TO VERIFY | TO VERIFY | skill | TO VERIFY | modern-design (direction) | adapt | Only the question flow used to gather project context. |
| What is web design (Figma) | https://www.figma.com/resource-library/what-is-web-design/ | Figma | article | Not audited; used only as rewritten ideas | modern-design (direction) | summarise | Read 2026-11-23 for `direction.md`. No date shown on the page. |
| Tendencias de diseño web (Figma) | https://www.figma.com/es-es/resource-library/tendencias-diseno-web/ | Figma | article | Not audited; used only as rewritten ideas | modern-design (direction) | summarise | Spanish edition, a 2026 trends article read on 2026-11-23 for `direction.md`. Only the principles behind the trends were used. |
| Awwwards | https://www.awwwards.com | Awwwards | inspiration | TO VERIFY | modern-design (direction) | link only | Live reference search target. |
| Curated | https://www.curated.design | TO VERIFY | inspiration | TO VERIFY | modern-design (direction) | link only | Live reference search target. |
| ui-ux-pro-max-skill | https://github.com/nextlevelbuilder/ui-ux-pro-max-skill | nextlevelbuilder | skill | TO VERIFY | modern-design (tokens) | summarise | Ideas only, do not vendor. Recommended in the README as an optional companion plugin. The repo sidebar shows MIT; confirm in phase 2. |
| Impeccable | https://impeccable.style (repo https://github.com/pbakaus/impeccable; catalogue https://impeccable.style/slop) | Paul Bakaus | skill | Repo: Apache-2.0. Site text (including /slop): none stated | modern-design (tokens), design-review (unslop-checklist) | summarise | Read `skill/SKILL.src.md`, `skill/reference/craft-floor.md` and /slop on 2026-11-23. Overlaps heavily with design-review: ideas summarised in our own words, its 60+ automated checks are not replicated. Recommended in the README as a companion. Its README says it started from Anthropic's frontend-design skill. |
| Coolors | https://coolors.co | Coolors | tool | TO VERIFY | modern-design (tokens) | link only | Palette generator. |
| Fontshare | https://www.fontshare.com | Indian Type Foundry (TO VERIFY) | tool | TO VERIFY | modern-design (tokens) | link only | Free font catalogue. Each font has its own licence. |
| Fonts In Use | https://fontsinuse.com | TO VERIFY | inspiration | TO VERIFY | modern-design (tokens) | link only | Real-world type pairings. |
| Fontesk | https://fontesk.com | TO VERIFY | tool | TO VERIFY | modern-design (tokens) | link only | Free font catalogue. Each font has its own licence. |
| 21st.dev | https://21st.dev | TO VERIFY | component library | TO VERIFY | modern-design (components) | adapt | Each component may have its own licence. |
| OriginKit | https://originkit.dev | TO VERIFY | component library | TO VERIFY | modern-design (components) | adapt | |
| Spell | https://spell.sh | TO VERIFY | component library | TO VERIFY | modern-design (components) | adapt | |
| Magic UI | https://magicui.design | TO VERIFY | component library | TO VERIFY | modern-design (components) | adapt | |
| SmoothUI | https://smoothui.dev | TO VERIFY | component library | TO VERIFY | modern-design (components) | adapt | |
| Animate UI | https://animate-ui.com | TO VERIFY | component library | TO VERIFY | modern-design (components) | adapt | |
| Unsection | https://unsection.com | TO VERIFY | component library | TO VERIFY | modern-design (components) | adapt | |
| Details inspo | https://details.so/inspo | TO VERIFY | inspiration | TO VERIFY | modern-design (components) | link only | |
| Supahero | https://supahero.io | TO VERIFY | inspiration | TO VERIFY | modern-design (components) | link only | Hero section gallery. |
| Backgrounds Supply | https://backgrounds.supply | TO VERIFY | component library | TO VERIFY | modern-design (components) | adapt | |
| Gradient Labs | https://gradient-labs.ai | TO VERIFY | tool | TO VERIFY | modern-design (components) | link only | |
| Modern Web Guidance (Chrome) | https://developer.chrome.com/docs/modern-web-guidance | Chrome for Developers (Google) | article | None stated on the page (only Google Terms in the footer). Source repo https://github.com/GoogleChrome/modern-web-guidance-src not checked | modern-design (components), design-review (unslop-checklist, visual-qa) | summarise | Read the index, guide catalogue and modernization workflow on 2026-11-23 (catalogue published 2026-11-10). Basis for the "Outdated, measurable" section. Ideas only; detection script is our own. |
| Web Interface Guidelines (Vercel) | https://vercel.com/design/guidelines (repo https://github.com/vercel-labs/web-interface-guidelines) | Vercel | article | MIT | modern-design (components), design-review (visual-qa, unslop-checklist) | adapt | Read `AGENTS.md` on 2026-11-23. The "Vercel-specific" section is brand preference and is not used. |
| emilkowalski/skills (incl. apple-design) | https://github.com/emilkowalski/skills | Emil Kowalski | skill | MIT (Copyright (c) 2026 Emil Kowalski) | modern-design (motion) | adapt | Found via ui-skills.com. Licence checked 2026-11-23; not used yet (phase 3). |
| UI Skills | https://ui-skills.com | TO VERIFY | skill | TO VERIFY | modern-design (motion) | link only | Directory where the Emil Kowalski skills were found. |
| GSAP | https://gsap.com | GreenSock / Webflow (TO VERIFY) | tool | TO VERIFY | modern-design (motion) | link only | Check the GSAP licence before recommending it in commercial projects. |
| Kawai text animation | https://kawai-text-animation.pages.dev | TO VERIFY | inspiration | TO VERIFY | modern-design (motion) | link only | |
| Kinetics (Colorion) | https://kinetics.colorion.co | TO VERIFY | inspiration | TO VERIFY | modern-design (motion) | link only | |
| Scrolltide | https://scrolltide.co | TO VERIFY | inspiration | TO VERIFY | modern-design (motion) | link only | |
| Layers | https://getlayers.ai | TO VERIFY | inspiration | TO VERIFY | modern-design (motion) | link only | |
| Motion Sites | https://motionsites.ai | TO VERIFY | inspiration | TO VERIFY | modern-design (motion) | link only | |
| Animation principles (working notes) | see below | Classic 12 principles of animation (Thomas & Johnston); notes by Santiago Die | article | TO VERIFY | modern-design (motion) | summarise | Working notes, to be rewritten. |
| UX laws (working notes) | see below | Santiago Die | article | TO VERIFY | modern-design (motion), design-review (unslop-checklist) | summarise | Working notes, to be rewritten. |
| Motion durations (working notes) | TO VERIFY | TO IDENTIFY | social post | TO VERIFY | modern-design (motion) | summarise | Working notes below. Source not identified. |
| Continuity principle (working notes) | TO VERIFY | TO IDENTIFY | social post | TO VERIFY | modern-design (motion) | summarise | Working notes below. Source not identified. Type to confirm once found. |
| unslop | https://github.com/heydamir/unslop | Damir Sokolovsky (@heydamir) | skill | CC BY 4.0 | design-review (unslop-checklist) | adapt | Read `skills/unslop/SKILL.md` on 2026-11-23. Adapted in our own words with attribution and a change notice (see THIRD_PARTY_NOTICES.md). |
| anti-slop | Not resolved: no mcpmarket.com listing found. Candidates: https://github.com/rand/cc-polymath (MIT), https://github.com/miqdadbadjuber/anti-slop, https://github.com/manavmishra/zeroslop | TO IDENTIFY | skill | TO VERIFY | design-review (unslop-checklist) | link only | Not used until the original listing is confirmed. |
| 20 Tips to Unslop AI Designs | TO VERIFY (Instagram post URL) | @charles.unemployed | social post | None stated (all rights reserved by default) | design-review (unslop-checklist) | summarise | Ideas only, rewritten in our own words and credited. No wording reused. |
| 20 ways to unslop your AI website designs | TO VERIFY (Instagram post URL) | @millee.md | social post | None stated (all rights reserved by default) | design-review (unslop-checklist) | summarise | Ideas only, rewritten in our own words and credited. No wording reused. |
| 20 señales de web hecha con IA | TO VERIFY | Unknown (TO IDENTIFY) | social post | Unknown | design-review (unslop-checklist) | summarise | Screenshot, author not identified. Ideas only, rewritten; credited as unidentified. Never quote. |
| 20 UI tips to send to Claude for better design | TO VERIFY | Unknown (TO IDENTIFY) | social post | Unknown | design-review (unslop-checklist) | summarise | Screenshot, author not identified. Ideas only, rewritten; credited as unidentified. Never quote. |
| Laws of UX | https://lawsofux.com | Jon Yablonski (as credited in the card; not confirmed on the fetched page) | article | None stated (all rights reserved by default) | design-review (unslop-checklist), modern-design (motion) | summarise | Law names are long-established general concepts. Only the names and one-line ideas are used, linked. Seen via @uxdannydesigns. |
| Playwright agent CLI | https://playwright.dev/agent-cli | Microsoft | tool | TO VERIFY | design-review (visual-qa) | link only | Browser automation for screenshots. |

## Author's research: Landing Page Field Guide

Six files in `docs/research/landing-field-guide/` (`00_README.md` to `05_DESIGN_STYLES.md`), written by the repository's author with Claude and released under this repository's MIT licence. They are the basis of `modern-design/references/components/` and of `responsive.md`. Checked on 2026-11-23: they paraphrase their sources and contain no long verbatim quotations. Figures from conversion studies are kept in the research with its warning, and the skills use only the direction of each effect.

| Source | URL | Author | Type | License | Used in | How | Notes |
|---|---|---|---|---|---|---|---|
| Landing Page Field Guide (2026 edition) | `docs/research/landing-field-guide/` | Santiago Die (written with Claude) | article | MIT (this repository) | modern-design (components, responsive) | adapt | Author's own research. |
| mobile-native (emilkowalski/skills) | https://github.com/emilkowalski/skills/tree/main/skills/mobile-native | Emil Kowalski | skill | MIT (Copyright (c) 2026 Emil Kowalski) | modern-design (responsive), design-review (visual-qa, unslop-checklist) | adapt | Read `SKILL.md` on 2026-11-23. Rewritten in our own words. |

Sources cited by the field guide. Not read or used directly by the skills; listed so the research can be traced.

| Source | URL | Author | Type | License | Used in | How | Notes |
|---|---|---|---|---|---|---|---|
| Scrolling and Attention | https://www.nngroup.com/articles/scrolling-and-attention/ | Nielsen Norman Group | article | Not audited | via the field guide | link only | |
| Neobrutalism | https://www.nngroup.com/articles/neobrutalism/ | Nielsen Norman Group | article | Not audited | via the field guide | link only | |
| Brutalism and antidesign | https://www.nngroup.com/articles/brutalism-antidesign/ | Nielsen Norman Group | article | Not audited | via the field guide | link only | |
| How the Core Web Vitals thresholds were defined | https://web.dev/defining-core-web-vitals-thresholds | Google (web.dev) | article | Not audited | via the field guide | link only | Standard thresholds used as numbers in the skills. |
| What's new in WCAG 2.2 | https://w3.org/WAI/standards-guidelines/wcag/new-in-22/ | W3C | article | Not audited | via the field guide | link only | Standard thresholds used as numbers in the skills. |
| Technical web typography | https://smashingmagazine.com/2011/03/technical-web-typography-guidelines-and-techniques | Smashing Magazine | article | Not audited | via the field guide | link only | |
| Landing page navigation test | https://blog.hubspot.com/marketing/landing-page-navigation-ht | HubSpot | article | Not audited | via the field guide | link only | Figures not used in skills. |
| Form fields and conversion | https://blog.hubspot.com/blog/tabid/6307/bid/6746/Which-Types-of-Form-Fields-Lower-Landing-Page-Conversions.aspx | HubSpot | article | Not audited | via the field guide | link only | Figures not used in skills. |
| Landing page best practices | https://ventureharbour.com/landing-page-best-practices/ | Venture Harbour | article | Not audited | via the field guide | link only | |
| Landing page best practices | https://systeme.io/learn/landing-page-best-practices/ | systeme.io | article | Not audited | via the field guide | link only | Summarises Unbounce data. |
| SaaS website best practices | https://lovable.dev/guides/saas-website-best-practices | Lovable | article | Not audited | via the field guide | link only | |
| How to design a button | https://www.orbitmedia.com/blog/how-to-design-button/ | Orbit Media | article | Not audited | via the field guide | link only | |
| CTAs that convert | https://www.usertesting.com/blog/ctas-convert | UserTesting | article | Not audited | via the field guide | link only | |
| Heatmap mistakes and CTA placement | https://www.zoho.com/pagesense/conversion-playbook/heatmap-analysis-common-mistakes-user-insights.html | Zoho PageSense | article | Not audited | via the field guide | link only | |
| Hero section examples | https://www.omniconvert.com/blog/hero-section-examples | Omniconvert | article | Not audited | via the field guide | link only | |
| Trust signal placement | https://www.digitalapplied.com/blog/social-proof-trust-signals-2026-conversion-placement-framework | Digital Applied | article | Not audited | via the field guide | link only | |
| Pricing page psychology | https://digitalapplied.com/blog/subscription-pricing-page-psychology-decision-framework-2026 | Digital Applied | article | Not audited | via the field guide | link only | |
| Pricing psychology | https://kinde.com/learn/billing/pricing/leveraging-behavioral-economics-to-increase-conversions | Kinde | article | Not audited | via the field guide | link only | |
| Top web design trends for 2026 | https://www.figma.com/resource-library/web-design-trends/ | Figma | article | Not audited | via the field guide | link only | |
| Web design trends 2026 | https://www.designrush.com/agency/website-design-development/trends/web-design-trends | DesignRush | article | Not audited | via the field guide | link only | |
| Linear design | https://blog.logrocket.com/ux-design/linear-design | LogRocket | article | Not audited | via the field guide | link only | |
| SaaS landing page patterns 2026 | https://adminlte.io/?p=7077 | AdminLTE | article | Not audited | via the field guide | link only | |

## Working notes for phase 3

Pasted as is. These are raw notes, not plugin content. They will be rewritten in our own words before any of them reaches a SKILL.md or a `references/` file.

### Animation principles (working notes, to be rewritten)
- Squash & stretch: things squish on impact and stretch in motion, which gives them weight
- Anticipation wind-up: a small pull back before the big move, so people see it coming
- Staging the focus: direct the eye to one thing at a time
- Pose to pose: set the key poses and let the browser fill in the frames between
- Follow through: parts keep moving after the main body stops, then settle
- Slow in & slow out: speed up and slow down, never move at a constant speed
- Moving in arcs: move along curves, not straight lines
- Secondary action: a small flourish that backs up the main action
- Snappy timing: duration sets the feel, so keep UI animations under 300ms
- Exaggerated feedback: push it past real so the moment lands
- Solid drawing in 3D: give flat things depth and volume
- Overall appeal: the sum of every detail, done with care

### UX laws (working notes, to be rewritten)
- Fitts's law: bigger, closer targets are faster to hit
- Bigger hit areas: the clickable area can be bigger than it looks
- Hick's law: more choices mean slower decisions
- Miller's law: we hold about 7 things in mind at once, so chunk information
- Doherty threshold: respond within 400ms or it feels slow
- Postel's law: accept messy input, give back clean output
- Jakob's law: people expect your app to work like the apps they already use
- Frequency of use: the more often something is used, the less it should animate

### Laws of UX card (source: lawsofux.com by Jon Yablonski, shared by @uxdannydesigns)
Aesthetic-Usability Effect, Doherty Threshold, Fitts's Law, Postel's Law,
Goal-Gradient Effect, Hick's Law, Jakob's Law, Serial Position Effect,
Law of Common Region, Law of Proximity, Law of Prägnanz, Zeigarnik Effect,
Law of Similarity, Peak-End Rule, Miller's Law, Tesler's Law

### "20 Tips to Unslop AI Designs" (Instagram @charles.unemployed)
1 Delete filler badges · 2 Drop redundant labels · 3 Unitalicize random words ·
4 Mono only where needed · 5 Use a design system · 6 Show the actual product ·
7 Enlarge the main feature · 8 Group with spacing · 9 Make headlines specific ·
10 Emphasize the CTA · 11 Add an accent colour · 12 Keep icons consistent ·
13 Remove embellishments · 14 Inner radius = outer − padding · 15 Improve text contrast ·
16 Wrap headlines properly · 17 Align by eye, not pixels · 18 Use tabular nums ·
19 Add loading states · 20 Animate useful feedback

### "20 ways to unslop your AI website designs" (Instagram @millee.md)
1 Drop the purple gradient · 2 Consistent icons, no emojis · 3 Swap out Inter ·
4 No italic serif word · 5 Lose the headline badge · 6 Skip the 2-button hero ·
7 Match outer + inner radius · 8 Fix color contrast · 9 Cut the glowing shadows ·
10 No colored card borders · 11 Break up identical cards · 12 No glassmorphism ·
13 Ease up on all-caps labels · 14 Drop the stat banner · 15 Ditch the 1-2-3 steps ·
16 Fix text wrapping · 17 No gradient backgrounds · 18 Restyle default shadcn ·
19 No fade-in on every section · 20 Custom favicon + meta tags

### "20 señales de web hecha con IA" (screenshot, author unknown — TO IDENTIFY)
1 Etiquetas tipo píldora · 2 Cursivas excesivas · 3 Usar Instrument Serif ·
4 Letras muy juntas · 5 UI excesivamente detallado · 6 Divisores de más ·
7 Múltiples colores y opacidades · 8 Cajas con borde · 9 Diagramas sobredetallados ·
10 Texto redundante · 11 Rutas de código · 12 Secciones numeradas ·
13 Etiquetas sobre títulos · 14 Efecto de puntos · 15 Imágenes ASCII ·
16 Esquinas redondeadas · 17 Fuentes de código · 18 Subtítulos en mayúsculas ·
19 Fondos degradados · 20 Y punto en los títulos

### "20 UI tips to send to Claude for better design" (screenshot, author unknown — TO IDENTIFY)
1 Skeleton loaders · 2 Optimistic updates · 3 Command menu · 4 Shortcut hints ·
5 Undo toasts · 6 Stale-while-revalidate · 7 Pre-rendering · 8 BlurHash placeholders ·
9 View transitions · 10 Swipe-to-dismiss sheets · 11 Interruptible animations ·
12 Predictive back · 13 Hit slop · 14 Safe area insets · 15 One-time code autofill ·
16 Tabular numbers · 17 Balanced headlines · 18 Continuous corners ·
19 Idempotency keys · 20 Amazon safe triangle

### Motion durations (source TO IDENTIFY)
Press 0.16s, reveal 0.7s, full scene 1.2s.

### Continuity principle (source TO IDENTIFY)
Navigation between states should carry the user instead of hard-cutting; the card becomes the page, back goes back, nothing appears from nowhere.

### Note for phase 3 (motion)
- Durations scale with frequency of use (UI feedback stays under ~300ms).
- Continuity applies to state and navigation transitions, not to decorative entrances on every section.
- Always respect `prefers-reduced-motion`.
