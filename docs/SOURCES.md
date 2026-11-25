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
| Taste Skill | https://tasteskill.dev (repo https://github.com/Leonxlnx/taste-skill) | Leon Lin and blueemi (GitHub: Leonxlnx) | skill | MIT (Copyright (c) 2026 Leonxlnx; no NOTICE) | modern-design (direction, tokens), design-review (unslop checklists) | adapt | Read `skills/taste-skill/SKILL.md` on 2026-11-23; used in the checklist and in `direction.md`. Ideas rewritten in our own words. Example photos in the repo carry their own licences; none used. On 2026-11-25 (commit `d1a2bb4`) its system, backgrounds, cards and layout references and `assets/system.css` were adapted in the tokens files; its palette and font-pairing libraries were rejected (`docs/research/tokens-sources.md`). |
| AI for UI skills | https://aiforui.dev/skills | TO VERIFY | skill | TO VERIFY | modern-design (direction) | summarise | |
| claude-webkit | TO VERIFY | TO VERIFY | skill | TO VERIFY | modern-design (direction) | adapt | Only the question flow used to gather project context. |
| What is web design (Figma) | https://www.figma.com/resource-library/what-is-web-design/ | Figma | article | Not audited; used only as rewritten ideas | modern-design (direction) | summarise | Read 2026-11-23 for `direction.md`. No date shown on the page. |
| Tendencias de diseño web (Figma) | https://www.figma.com/es-es/resource-library/tendencias-diseno-web/ | Figma | article | Not audited; used only as rewritten ideas | modern-design (direction) | summarise | Spanish edition, a 2026 trends article read on 2026-11-23 for `direction.md`. Only the principles behind the trends were used. |
| Awwwards | https://www.awwwards.com | Awwwards | inspiration | TO VERIFY | modern-design (direction) | link only | Live reference search target. |
| Curated | https://www.curated.design | TO VERIFY | inspiration | TO VERIFY | modern-design (direction) | link only | Live reference search target. |
| ui-ux-pro-max-skill | https://github.com/nextlevelbuilder/ui-ux-pro-max-skill | Next Level Builder; `design-system`, `ui-styling` and `brand` skills by claudekit | skill | MIT (Copyright (c) 2024 Next Level Builder; no NOTICE). `ui-styling/LICENSE.txt` is Apache-2.0 with no holder (canvas material, not used) | modern-design (tokens) | adapt | Licence checked on 2026-11-25 (commit `8db3633`). Adapted in the tokens files, with one sentence quoted (tabular figures); claudekit files paraphrased only. Rejected: per-sector palettes and font pairings, style presets, the Python workflow (`docs/research/tokens-sources.md`). Recommended in the README as an optional companion plugin. |
| Hallmark | https://github.com/Nutlope/hallmark | Hallmark contributors | skill | MIT (Copyright (c) 2026 Hallmark contributors; `LICENSE` at the root and in `skills/hallmark/`) | design-review (review-method, regression-check, unslop checklists, copy-states-checklist, scripts `inventory.js` and `inventory-diff.js`), modern-design (content-truth) | adapt | Commit `04977e15f3dfd6ee4b74c887dac3eb52665d6c92` (2026-11-11), cloned outside the repo; `git pull` on 2026-11-25 found no newer commit. Licence checked and read on 2026-11-25: `SKILL.md`, `references/gates.md`, `references/redesign.md` and the `--before` / `--kept` block of `scripts/sloplint.mjs`. Adapted in our own words: Floor/Reflex/Finish levels, clean-context review, the before/after inventory, and the signals selected in `docs/research/knowledge-audit/13-review-method.md` (H1, H2, H4, H6, H13). No text quoted, no code copied. Rejected: house rules as Floor, numeric thresholds as rules, photo-library stand-ins, the CSS stamp, themes, the edit-time hook. Listed in `THIRD_PARTY_NOTICES.md`. |
| Impeccable | https://impeccable.style (repo https://github.com/pbakaus/impeccable; catalogue https://impeccable.style/slop) | Paul Bakaus | skill | Repo: Apache-2.0 (Copyright 2025 Paul Bakaus; NOTICE.md covers `ios.md`, `android.md` (MIT, ehmo), fonts and autoconsent, none used). Site text (including /slop): none stated | modern-design (tokens), design-review (unslop checklists) | adapt (tokens), summarise (checklist) | On 2026-11-25 (commit `9e460a8`), ten `skill/reference/` files were adapted in the tokens files, with fifteen short sentences quoted and credited in place; files modified (`THIRD_PARTY_NOTICES.md`). Read `skill/SKILL.src.md`, `skill/reference/craft-floor.md` and /slop on 2026-11-23. Overlaps heavily with design-review: ideas summarised in our own words, its 60+ automated checks are not replicated. Recommended in the README as a companion. Its README says it started from Anthropic's frontend-design skill. |
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
| Modern Web Guidance (Chrome) | https://developer.chrome.com/docs/modern-web-guidance | Chrome for Developers (Google) | article | Source repo https://github.com/GoogleChrome/modern-web-guidance-src (checked 2026-11-25, commit `92686ac`): `guides/` CC BY 4.0, code Apache-2.0 (Copyright 2026 Google LLC), no NOTICE; parts of the guides derive from MDN (CC BY-SA 2.5 or later, per MDN's licence page) | modern-design (components, implementation, tokens), design-review (outdated-checklist, visual-qa) | summarise; adapt in tokens (facts only, own wording and order, "changes made") | Read the index, guide catalogue and modernization workflow on 2026-11-23 (catalogue published 2026-11-10). Basis for the "Outdated, measurable" section. Ideas only; detection script is our own. On 2026-11-24, linked from `implementation.md` §5 and recommended in both READMEs as a companion; its feature table and agent-mistakes list are not copied. Figures quoted: one agent ("Agent One"), 19 checks, 60.8% unguided, 76.5% installed, 94.0% named, as reported by Search Engine Journal (https://www.searchenginejournal.com/google-releases-modern-web-guidance-1-0-for-ai-coding-agents/596495/). |
| Web Interface Guidelines (Vercel) | https://vercel.com/design/guidelines (repo https://github.com/vercel-labs/web-interface-guidelines) | Vercel | article | MIT | modern-design (components), design-review (visual-qa, unslop checklists) | adapt | Read `AGENTS.md` on 2026-11-23. The "Vercel-specific" section is brand preference and is not used. |
| emilkowalski/skills (incl. apple-design) | https://github.com/emilkowalski/skills | Emil Kowalski | skill | MIT (Copyright (c) 2026 Emil Kowalski; no NOTICE) | modern-design (tokens, motion) | adapt | Found via ui-skills.com. Licence checked 2026-11-23. On 2026-11-25 (commit `64eb3de`), `apple-design`, `animate` (token names), `learn-taste`, `emil-design-eng` and `ui-cheatsheet.md` were adapted in the tokens files; motion values still to come. |
| UI Skills | https://ui-skills.com | TO VERIFY | skill | TO VERIFY | modern-design (motion) | link only | Directory where the Emil Kowalski skills were found. |
| GSAP | https://gsap.com | GreenSock / Webflow (TO VERIFY) | tool | TO VERIFY | modern-design (motion) | link only | Check the GSAP licence before recommending it in commercial projects. |
| Kawai text animation | https://kawai-text-animation.pages.dev | TO VERIFY | inspiration | TO VERIFY | modern-design (motion) | link only | |
| Kinetics (Colorion) | https://kinetics.colorion.co | TO VERIFY | inspiration | TO VERIFY | modern-design (motion) | link only | |
| Scrolltide | https://scrolltide.co | TO VERIFY | inspiration | TO VERIFY | modern-design (motion) | link only | |
| Layers | https://getlayers.ai | TO VERIFY | inspiration | TO VERIFY | modern-design (motion) | link only | |
| Motion Sites | https://motionsites.ai | TO VERIFY | inspiration | TO VERIFY | modern-design (motion) | link only | |
| Animation principles (working notes) | see below | Classic 12 principles of animation (Thomas & Johnston); notes by Santiago Die | article | TO VERIFY | modern-design (motion) | summarise | Working notes, to be rewritten. |
| UX laws (working notes) | see below | Santiago Die | article | TO VERIFY | modern-design (motion), design-review (unslop checklists) | summarise | Working notes, to be rewritten. |
| Motion durations (working notes) | TO VERIFY | TO IDENTIFY | social post | TO VERIFY | modern-design (motion) | summarise | Working notes below. Source not identified. |
| Continuity principle (working notes) | TO VERIFY | TO IDENTIFY | social post | TO VERIFY | modern-design (motion) | summarise | Working notes below. Source not identified. Type to confirm once found. |
| unslop | https://github.com/heydamir/unslop | Damir Sokolovsky (@heydamir) | skill | CC BY 4.0 | design-review (unslop checklists) | adapt | Read `skills/unslop/SKILL.md` on 2026-11-23. Adapted in our own words with attribution and a change notice (see THIRD_PARTY_NOTICES.md). |
| anti-slop | Not resolved: no mcpmarket.com listing found. Candidates: https://github.com/rand/cc-polymath (MIT), https://github.com/miqdadbadjuber/anti-slop, https://github.com/manavmishra/zeroslop | TO IDENTIFY | skill | TO VERIFY | design-review (unslop checklists) | link only | Not used until the original listing is confirmed. |
| 20 Tips to Unslop AI Designs | TO VERIFY (Instagram post URL) | @charles.unemployed | social post | None stated (all rights reserved by default) | design-review (unslop checklists) | summarise | Ideas only, rewritten in our own words and credited. No wording reused. |
| 20 ways to unslop your AI website designs | TO VERIFY (Instagram post URL) | @millee.md | social post | None stated (all rights reserved by default) | design-review (unslop checklists) | summarise | Ideas only, rewritten in our own words and credited. No wording reused. |
| 20 señales de web hecha con IA | TO VERIFY | Unknown (TO IDENTIFY) | social post | Unknown | design-review (unslop checklists) | summarise | Screenshot, author not identified. Ideas only, rewritten; credited as unidentified. Never quote. |
| 20 UI tips to send to Claude for better design | TO VERIFY | Unknown (TO IDENTIFY) | social post | Unknown | design-review (unslop checklists) | summarise | Screenshot, author not identified. Ideas only, rewritten; credited as unidentified. Never quote. |
| AI slop indicators (Instagram) | TO VERIFY | Unknown (TO IDENTIFY) | social post | Unknown | design-review (unslop checklists, copy-states-checklist) | summarise | Screenshot from Instagram, author not identified. Used on 2026-11-24 for TY11, CO9, CP7–CP9 and CY6–CY8, and to widen TY2 and CO6. Ideas only, rewritten; credited as unidentified. Never quote. |
| Laws of UX | https://lawsofux.com | Jon Yablonski (as credited in the card; not confirmed on the fetched page) | article | None stated (all rights reserved by default) | design-review (unslop checklists), modern-design (motion) | summarise | Law names are long-established general concepts. Only the names and one-line ideas are used, linked. Seen via @uxdannydesigns. |
| Playwright agent CLI | https://playwright.dev/agent-cli | Microsoft | tool | TO VERIFY | design-review (visual-qa) | link only | Browser automation for screenshots. |

## Author's research: Landing Page Field Guide

Six files in `docs/research/landing-field-guide/` (`00_README.md` to `05_DESIGN_STYLES.md`), written by the repository's author with Claude and released under this repository's MIT licence. They are the basis of `modern-design/references/ui/sections/` and of `responsive.md`. Checked on 2026-11-23: they paraphrase their sources and contain no long verbatim quotations. Figures from conversion studies are kept in the research with its warning, and the skills use only the direction of each effect.

| Source | URL | Author | Type | License | Used in | How | Notes |
|---|---|---|---|---|---|---|---|
| Landing Page Field Guide (2026 edition) | `docs/research/landing-field-guide/` | Santiago Die (written with Claude) | article | MIT (this repository) | modern-design (components, responsive) | adapt | Author's own research. |
| mobile-native (emilkowalski/skills) | https://github.com/emilkowalski/skills/tree/main/skills/mobile-native | Emil Kowalski | skill | MIT (Copyright (c) 2026 Emil Kowalski) | modern-design (responsive), design-review (visual-qa, mobile-checklist) | adapt | Read `SKILL.md` on 2026-11-23. Rewritten in our own words. |

Sources cited by the field guide. Not read or used directly by the skills; listed so the research can be traced.

| Source | URL | Author | Type | License | Used in | How | Notes |
|---|---|---|---|---|---|---|---|
| Scrolling and Attention | https://www.nngroup.com/articles/scrolling-and-attention/ | Nielsen Norman Group | article | Not audited | via the field guide | link only | |
| Neobrutalism | https://www.nngroup.com/articles/neobrutalism/ | Nielsen Norman Group | article | Not audited | via the field guide | link only | |
| Brutalism and antidesign | https://www.nngroup.com/articles/brutalism-antidesign/ | Nielsen Norman Group | article | Not audited | via the field guide | link only | |
| How the Core Web Vitals thresholds were defined | https://web.dev/defining-core-web-vitals-thresholds | Google (web.dev) | article | Not audited | via the field guide | link only | Standard thresholds used as numbers in the skills. |
| What's new in WCAG 2.2 | https://w3.org/WAI/standards-guidelines/wcag/new-in-22/ | W3C | article | Not audited | via the field guide | link only | Standard thresholds used as numbers in the skills. |
| WCAG 2.2 (W3C Recommendation, 12 December 2024) | https://www.w3.org/TR/WCAG22/ | W3C | standard | W3C Document License, 2023 version (https://www.w3.org/copyright/document-license/), linked as "document use rules" from the notice "Copyright © 2020-2024 World Wide Web Consortium. W3C® liability, trademark and document use rules apply." (checked 2026-11-25) | modern-design (tokens, implementation, responsive) | summarise | Checked 2026-11-25: 1.4.1, 1.4.3, 1.4.4, 1.4.6, 1.4.11, 2.4.7, 2.4.11, 2.4.13, 2.5.5 and 2.5.8, cited by number with their levels (`docs/research/tokens-sources.md`, table 2). |
| Apple Human Interface Guidelines, Accessibility | https://developer.apple.com/design/human-interface-guidelines/accessibility | Apple | standard | Apple terms; figures only | modern-design (tokens) | summarise | Checked 2026-11-25: default control size 44 × 44 pt, minimum 28 × 28 pt (iOS, iPadOS). |
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

## Reasoning layer documents

Written by the repository's author with Claude and released under this repository's MIT licence. Two batches:

- **Four documents** (2026-11-24), archived unchanged in `docs/research/web-reasoning/`: `00-core-reasoning`, `01-web-psychology-marketing-principles`, `02-page-type-matrix`, `03-ethical-legal-limits-and-evidence`. They became `modern-design/references/reasoning.md`, `principles.md`, `page-types.md` (later replaced by `pages/`) and `ethics.md`, and the DP family of `design-review/references/dark-patterns-checklist.md`.
- **A `web-design-reasoning` skill** written in another session (2026-11-24), integrated rather than shipped as a separate skill. Its eleven page files became `modern-design/references/ux/pages/` and `reasoning-examples.md` was copied as is. From its `SKILL.md`, the Baymard evidence, the list-mode signal about advice on what isn't visible, the persuasion dial, the novice-versus-expert collision, the reference table and "How to present design work" went into `reasoning.md` (the six questions and the reference table now live in `design-reasoning.md`); its review rules went into `design-review/SKILL.md`. Its copies of `principles.md` and `limits-and-evidence.md` were older versions of ours and were not used, and its `landing-field-guide/` copy was identical to `docs/research/landing-field-guide/` and was not copied.

Checked on 2026-11-24:

- They summarise their sources in their own words and link each one in place (NN/g, Baymard Institute, Stanford Web Credibility, web.dev, the FTC, the UK CMA, Which?, FIDO Alliance, company blogs and peer-reviewed papers). Facts and figures are attributed where they appear; no long passages are copied.
- The only verbatim text is short quotations used as examples: product headlines (Stripe, Linear), a few named notices, and paper and talk titles.
- Edits on import: the dependency on an external short-form writing skill was removed (the transfer table and the "(transferred)" labels in `principles.md`; the transfer notes in `page-types.md` and in `pages/blog-resources.md`); P05 rewritten so the order of sections comes from the brief; the Epic Games source corrected.
- `pages/` edits: the 3C weights per page and the group summary of the old `page-types.md` were moved into each file (its metrics were already covered by "Signal it's working"); "Real examples" renamed "Real examples (illustrate the mechanism, don't copy)"; links to the field guide replaced by `../sections/` files where one exists, or marked pending; "verify before citing" marks kept as written.
- The Baymard GPT-4 audit is described with its limits: GPT-4, October 2023, screenshots only and a generic prompt.
- The Epic Games row cited an unrelated article. Corrected to the FTC press release of 19 December 2022 ($520 M settlement: $275 M civil penalty under COPPA and $245 M in refunds over dark patterns), verified on ftc.gov on 2026-11-24.
- Regulatory status is dated November 2026 (the Digital Fairness Act is a proposal) and needs a check before release. Three claims are marked "verify before citing" and listed in the ROADMAP: CNIL and AEPD decisions on cookie-banner parity, NIST SP 800-63B Rev. 4 wording on SMS codes, and the EDPB 2026 coordinated enforcement action.

New sources cited by `pages/` and `reasoning.md`. Facts and figures are summarised in our own words with a link in place; no text is copied. Licences not audited because nothing is adapted.

| Source | URL | Author | Type | License | Used in | How | Notes |
|---|---|---|---|---|---|---|---|
| GPT-4 UX audit study | https://baymard.com/research-articles/gpt-ux-audit | Baymard Institute | article | Not audited | modern-design (reasoning) | summarise | October 2023; GPT-4 with screenshots and a generic prompt, compared with human experts. |
| Baymard research (cart abandonment, product lists, filtering, search, tracking, in-scale images, accounts) | https://baymard.com | Baymard Institute | article | Not audited | modern-design (pages) | summarise | Several articles, each linked in place. |
| NIST SP 800-63B Revision 4 | https://pages.nist.gov/800-63-4/sp800-63b.html | NIST | standard | Not audited (US government work) | modern-design (pages/authentication) | summarise | Password and authenticator guidance; SMS wording to verify. |
| GOV.UK Design System and Service Manual (validation, confirmation pages, form structure) | https://design-system.service.gov.uk | UK Government Digital Service | article | Not audited (OGL v3 expected; to confirm) | modern-design (pages) | summarise | |
| Nielsen Norman Group (error messages, empty states, confirmation dialogs, dashboards, onboarding tutorials, inverted pyramid) | https://www.nngroup.com | Nielsen Norman Group | article | Not audited | modern-design (pages) | summarise | Several articles, each linked in place. |
| FIDO Passkey Index 2026 | https://fidoalliance.org/passkey-index-2026/ | FIDO Alliance | article | Not audited | modern-design (pages, principles) | summarise | Interested source with deployment data. |
| Diátaxis | https://diataxis.fr/ | Daniele Procida | article | Not audited | modern-design (pages/blog-resources) | summarise | |
| Google Search Central: pausing an online business | https://developers.google.com/search/docs/crawling-indexing/pause-online-business | Google | article | Not audited | modern-design (pages/states-system) | summarise | |
| WP29 transparency guidelines (endorsed by the EDPB) and ICO guidance | https://www.edpb.europa.eu/system/files/2023-09/wp260rev01_en.pdf | EDPB / ICO | article | Not audited | modern-design (pages/legal, pages/user-account) | summarise | |
| Chrome permission prompts | https://developer.chrome.com/blog/permissions-chip | Google Chrome | article | Not audited | modern-design (pages/user-account) | summarise | |
| Introducing "You're All Caught Up" | https://about.instagram.com/blog/announcements/introducing-youre-all-caught-up-in-feed | Instagram | article | Not audited | modern-design (pages/interaction-creation) | summarise | |
| Amazon settlement coverage | https://www.pbs.org/newshour/economy/amazon-to-pay-2-5-billion-to-settle-ftc-allegations-it-duped-customers-into-enrolling-in-prime | PBS NewsHour | article | Not audited | modern-design (principles P14) | summarise | No longer cited in pages/user-account (replaced by the FTC release below). |
| FTC press release: Amazon Prime settlement | https://www.ftc.gov/news-events/news/press-releases/2025/09/ftc-secures-historic-25-billion-settlement-against-amazon | US Federal Trade Commission | article | US government work; facts only | modern-design (pages/user-account) | summarise | Replaces the PBS coverage in pages/user-account. Verified 2026-11-25: 25 Sept 2025, FTC Act and ROSCA, easy cancellation through the same method used to sign up. |
| Restore Online Shoppers' Confidence Act, 15 U.S.C. § 8403 | https://www.law.cornell.edu/uscode/text/15/8403 | US Congress (via Cornell LII) | standard | US statute; facts only | modern-design (pages/user-account) | summarise | Verified 2026-11-25: in force; "simple mechanisms" to stop recurring charges. |
| Custom Communications, Inc. v. FTC, No. 24-3137 (8th Cir.) | https://ecf.ca8.uscourts.gov/opndir/25/07/243137P.pdf | US Court of Appeals, Eighth Circuit | standard | US court opinion; facts only | modern-design (pages/user-account) | summarise | Verified 2026-11-25 in the opinion: filed 8 July 2025; petitions granted and the 2024 Negative Option Rule amendments vacated for a procedural failure (no preliminary regulatory analysis, FTC Act §22). Later FTC rulemaking not verified. |
| Digital Fairness Act proposal, COM(2026) 1100 | https://commission.europa.eu/law/law-topic/consumer-protection-law/digital-fairness-act_en | European Commission | standard | Not audited | modern-design (pages/user-account) | summarise | Verified 2026-11-25 in the proposal text: dated 11.11.2026, procedure 2026/0356 (COD); Art. 20 free-trial reminder and express agreement, Art. 21–22 renewal reminders, Art. 23 online contract termination function. |

## Implementation research

Four documents written by the repository's author with Claude (2026-11-24) and released under this repository's MIT licence, archived unchanged in `docs/research/implementation/`: `00_README_index.md` (conventions, glossary, source registry), `01_foundations_architecture.md` (rendering, static and app rules, state, reuse layers, platform features, performance, security, accessibility, agent mistakes), `02_page_type_matrix.md` (per page type: static viability, rendering, data and state, priorities, anti-patterns) and `03_real_world_case_studies.md` (case studies with sources).

How they were used:

- `01` became `modern-design/references/engineering/implementation.md`, rewritten in our own words. Rule IDs were not kept, and MUST is reserved for security, accessibility and legal rules. Backend security (data access layer, CSP, idempotency, specific CVEs, sync engines, CRDTs) became only a "Boundaries" section that points to OWASP and the framework's docs. The platform-features table (§4.2) and the agent-mistakes list (§8) were not copied: a short checklist links to Modern Web Guidance. The Next.js 16.4 and TanStack Start 1.0 claims are marked "verify before citing".
- `02` became the "Implementation" subsection of each entry in `modern-design/references/ux/pages/` and the summary table in `implementation.md`, rewritten.
- `03` is recorded below; no skill file quotes it.
- `00`: only its source registry is recorded below. Its conventions and glossary were not copied.

Licences not audited, because nothing is adapted: facts are summarised in our own words. Figures from the case studies are self-reported by the companies and are not used in the skills. The research also gives Modern Web Guidance pass rates of about 52% for unguided agents and 91% for guided ones (and 61% to 94% for one adopter): not verified, and not used; the skills quote only the Agent One figures above.

### Source registry from `00_README_index.md`

| Source | URL | Author | Type | License | Used in | How | Notes |
|---|---|---|---|---|---|---|---|
| Astro islands and server islands | https://docs.astro.build/en/concepts/islands · https://docs.astro.build/en/guides/server-islands/ | Astro | article | Not audited | modern-design (implementation) | summarise | |
| Next.js 16 release | https://nextjs.org/blog/next-16 | Vercel | article | Not audited | modern-design (implementation) | summarise | 2025-10-21: Cache Components, `proxy.ts`. |
| Next.js 16.4 | https://nextjs.org/blog/next-16-4 | Vercel | article | Not audited | modern-design (implementation) | summarise | Verify before citing. |
| Next.js `cacheComponents` config | https://nextjs.org/docs/app/api-reference/config/next-config-js/cacheComponents | Vercel | article | Not audited | via the research | link only | |
| Nuxt rendering and route rules | https://nuxtseo.com/learn-seo/nuxt/routes-and-rendering | Nuxt SEO | article | Not audited | via the research | link only | |
| TanStack Start 1.0 | https://tanstack.com/blog/tanstack-start-1-0 | TanStack | article | Not audited | modern-design (implementation) | summarise | Verify before citing. |
| React `<form>` and actions | https://react.dev/reference/react-dom/components/form | Meta | article | Not audited | via the research | link only | |
| Shopify speculation rules | https://shopify.dev/docs/storefronts/themes/best-practices/performance/use-speculation-rules | Shopify | article | Not audited | via the research | link only | |
| Cross-document view transitions | https://developer.chrome.com/docs/web-platform/view-transitions/cross-document | Chrome for Developers | article | Not audited | modern-design (implementation) | summarise | |
| content-visibility | https://web.dev/articles/content-visibility | web.dev | article | Not audited | modern-design (implementation) | summarise | |
| Fetch Priority | https://web.dev/articles/fetch-priority | web.dev | article | Not audited | modern-design (implementation) | summarise | |
| Invoker Commands API | https://developer.mozilla.org/docs/Web/API/Invoker_Commands_API | MDN | article | Not audited | via the research | link only | |
| New in web UI, I/O 2025 recap | https://developer.chrome.com/blog/new-in-web-ui-io-2025-recap | Chrome for Developers | article | Not audited | via the research | link only | |
| New in the web, I/O 2024 | https://web.dev/blog/new-in-the-web-io2024 | web.dev | article | Not audited | via the research | link only | |
| Modern Web Guidance 1.0 | https://developer.chrome.com/blog/modern-web-guidance-v1 | Chrome for Developers | article | Not audited | modern-design (implementation), READMEs | link only | |
| Top 10 things AI gets wrong in web dev | https://developer.chrome.com/blog/top-10-things-ai-gets-wrong-in-web-dev | Chrome for Developers | article | Not audited | via the research | link only | Not copied; see Modern Web Guidance. |
| Design Tokens Community Group format 2025.10 (Format, Resolver and Color Modules) | https://www.designtokens.org/TR/2025.10/ | Design Tokens Community Group | standard | Final Community Group Reports (28 October 2025), not W3C Standards; facts only | modern-design (implementation, tokens) | summarise | Checked 2026-11-25: `.tokens.json`, `application/design-tokens+json`, `$value` / `$type` / `$description`, `{group.token}` aliases; the Resolver Module's sets and modifiers for themes. |
| Tailwind CSS v4 | https://tailwindcss.com/blog/tailwindcss-v4 | Tailwind Labs | article | Not audited | via the research | link only | |
| shadcn/ui | https://ui.shadcn.com/docs | shadcn | article | Not audited | modern-design (implementation) | summarise | The "own the source" model. |
| bulletproof-react project structure | https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md | Alan Alickovic | article | Not audited | via the research | link only | |
| Next.js data security | https://nextjs.org/docs/app/guides/data-security · https://nextjs.org/blog/security-nextjs-server-components-actions | Vercel | article | Not audited | via the research | link only | Out of scope: "Boundaries". |
| OWASP Cheat Sheet Series (Next.js, Forgot Password) | https://cheatsheetseries.owasp.org/ | OWASP | article | Not audited | modern-design (implementation, Boundaries) | link only | |
| React Server Components vulnerability | https://react.dev/blog/2025/12/03/critical-security-vulnerability-in-react-server-components | Meta | article | Not audited | via the research | link only | Out of scope: "Boundaries". |
| NIST SP 800-63B-4 | https://csrc.nist.gov/pubs/sp/800/63/b/4/final | NIST | standard | Not audited | via the research | link only | Already listed under the reasoning layer. |
| Sign-in form best practices; passkey form autofill | https://web.dev/articles/sign-in-form-best-practices · https://web.dev/articles/passkey-form-autofill | web.dev | article | Not audited | modern-design (pages/authentication) | summarise | |
| Baymard checkout research | https://baymard.com/research-articles/checkout-flow-average-form-fields · https://baymard.com/research-articles/ecommerce-checkout-usability-report-and-benchmark | Baymard Institute | article | Not audited | modern-design (pages/commerce-purchase, pages/commerce-after-purchase) | summarise | |
| Stripe fulfillment | https://docs.stripe.com/checkout/fulfillment | Stripe | article | Not audited | modern-design (pages/commerce-purchase, pages/commerce-after-purchase) | summarise | |
| Shopify Hydrogen cart | https://shopify.dev/docs/storefronts/hydrogen/cart | Shopify | article | Not audited | modern-design (pages/commerce-purchase, pages/commerce-after-purchase) | summarise | |
| Slack real-time messaging | https://slack.engineering/real-time-messaging | Slack | article | Not audited | modern-design (pages/interaction-creation) | summarise | |
| Linear sync engine (reverse-engineered) | https://github.com/wzhudev/reverse-linear-sync-engine | wzhudev | article | Not audited | via the research | link only | |
| Notion and CRDTs | https://www.notion.com/blog/how-notion-handles-concurrent-editing-with-crdts | Notion | article | Not audited | via the research | link only | |
| llms.txt | https://github.com/AnswerDotAI/llms-txt | Answer.AI | standard | Not audited | modern-design (implementation, pages/blog-resources) | summarise | |
| Google: HTTP status codes and soft 404s | https://developers.google.com/search/docs/crawling-indexing/http-network-errors | Google | article | Not audited | modern-design (implementation, pages/states-system) | summarise | |
| Google Consent Mode | https://developers.google.com/tag-platform/security/concepts/consent-mode | Google | article | Not audited | modern-design (pages/legal) | summarise | |
| WebKit Declarative Web Push | https://webkit.org/blog/16574/ | WebKit | article | Not audited | via the research | link only | |

### Case studies from `03_real_world_case_studies.md`

Listed so the research can be traced. No skill file quotes them; outcomes are self-reported by the companies.

| Case | URL | Topic |
|---|---|---|
| QuintoAndar: INP | https://web.dev/case-studies/quintoandar-inp | Responsiveness of filters; canary releases |
| Fotocasa: INP | https://web.dev/case-studies/fotocasa-cwv | Real-user monitoring with attribution |
| Ray-Ban: speculation rules and back/forward cache | https://web.dev/case-studies/rayban-speculation-rules | Prerendering product pages from listings |
| Shopify: platform-wide speculation rules | https://shopify.dev/docs/storefronts/themes/best-practices/performance/use-speculation-rules | Prefetch on every storefront; clearing caches when the cart changes |
| Monrif: prerender and back/forward cache | https://web.dev/case-studies/monrif-cwv | News articles |
| Nuvemshop / Tiendanube: LCP and image priority | https://web.dev/case-studies/nuvemshop | Carousels as LCP; `fetchpriority` |
| Google Flights and Etsy: Fetch Priority | https://web.dev/articles/fetch-priority · https://www.etsy.com/codeascraft/priority-hints-what-your-browser-doesnt-know-yet | Hero image priority |
| The Guardian: islands | https://github.com/guardian/dotcom-rendering | Server rendering with isolated interactive islands |
| Astro server islands (documentation example) | https://docs.astro.build/en/guides/server-islands/ | Static product page with deferred personal parts |
| Next.js 16 Cache Components | https://nextjs.org/blog/next-16 · https://nextjs.org/blog/next-16-4 | Static shell with streamed holes |
| Linear: local-first sync engine | https://github.com/wzhudev/reverse-linear-sync-engine | Local replica, transactions, deltas over WebSocket |
| Notion: CRDTs for rich text | https://www.notion.com/blog/how-notion-handles-concurrent-editing-with-crdts | Concurrent editing |
| Slack: real-time messaging | https://slack.engineering/real-time-messaging · https://www.infoq.com/news/2023/04/real-time-messaging-slack/ | Persist first, then fan out |
| Shopify Hydrogen: optimistic cart | https://shopify.dev/docs/storefronts/hydrogen/cart · https://shopify.dev/docs/api/hydrogen/latest/hooks/useoptimisticcart | Forms that work without JavaScript, optimistic lines |
| Stripe Checkout: webhook fulfilment | https://docs.stripe.com/checkout/fulfillment | Fulfil from webhooks, idempotently |
| Baymard: checkout | https://baymard.com/research-articles/checkout-flow-average-form-fields · https://baymard.com/research-articles/ecommerce-checkout-usability-report-and-benchmark | Fields and guest checkout |
| React Server Components vulnerability (CVE-2025-55182) | https://react.dev/blog/2025/12/03/critical-security-vulnerability-in-react-server-components · https://nvd.nist.gov/vuln/detail/CVE-2025-55182 | Out of scope: "Boundaries" |
| Middleware-only authorisation bypass (CVE-2025-29927) | https://cheatsheetseries.owasp.org/cheatsheets/Nextjs_Security_Cheat_Sheet.html | Out of scope: "Boundaries" |
| NIST SP 800-63B-4 | https://csrc.nist.gov/pubs/sp/800/63/b/4/final · https://pages.nist.gov/800-63-4 | Passwords and authenticators |
| Hosted docs and llms.txt | https://github.com/AnswerDotAI/llms-txt · https://context7.com/llms-txt-documentation-platforms | Docs for agents |
| Chrome Modern Web Guidance 1.0 | https://developer.chrome.com/blog/modern-web-guidance-v1 · https://developer.chrome.com/blog/top-10-things-ai-gets-wrong-in-web-dev | Agent mistakes; recommended as a companion |

### Google Fonts and the GDPR

| Source | URL | Author | Type | License | Used in | How | Notes |
|---|---|---|---|---|---|---|---|
| LG München I, judgment of 20.01.2022, Az. 3 O 17493/20 (Google Fonts) | https://www.gesetze-bayern.de/Content/Document/Y-300-Z-BECKRS-B-2022-N-612 | Landgericht München I | legal decision | Public court decision | design-review (outdated-checklist, OM13) | summarise | Official text on gesetze-bayern.de. IP address passed to Google through embedded Google Fonts without consent; 100 € in damages. Cited as one concrete case in Germany, not as a general ban. |

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

### "AI slop indicators" (Instagram screenshot, author unknown — TO IDENTIFY)
arrows on every button · little dots between words · overusing eyebrows · cream backgrounds ·
one italic word in the headline · sparkle icons · everything in a card · the word "quiet" ·
numbered sections · pulsing green dots · blurry glows behind the hero · Instrument Serif ·
colored left borders · three icon cards in a row · pills above the headline · the word "real" ·
made-up stats · two-word sentences · sections fading on scroll · dithering

### Motion durations (source TO IDENTIFY)
Press 0.16s, reveal 0.7s, full scene 1.2s.

### Continuity principle (source TO IDENTIFY)
Navigation between states should carry the user instead of hard-cutting; the card becomes the page, back goes back, nothing appears from nowhere.

### Note for phase 3 (motion)
- Durations scale with frequency of use (UI feedback stays under ~300ms).
- Continuity applies to state and navigation transitions, not to decorative entrances on every section.
- Always respect `prefers-reduced-motion`.
