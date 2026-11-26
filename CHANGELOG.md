# Changelog

All notable changes to this project are documented in this file.
The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and versions follow [Semantic Versioning](https://semver.org/).

## [0.1.0] - Unreleased - skeleton

### Added

- Plugin manifest (`.claude-plugin/plugin.json`) and marketplace manifest (`.claude-plugin/marketplace.json`, marketplace `santiagodie-plugins`).
- Two skill templates with frontmatter and empty sections:
  - `modern-design`, with references `direction.md`, `tokens.md`, `components.md`, `motion.md` and `resources.md`.
  - `design-review`, with references `unslop-checklist.md`, `visual-qa.md` and `audit-report.md`. Two modes: own project, and read-only URL audit (`argument-hint: [url]`).
- Audit report format (`design-review/references/audit-report.md`), the first reference with real content.
- Docs: `SOURCES.md`, `ARCHITECTURE.md`, `ROADMAP.md`.
- README in English and Spanish, banner, MIT licence, third-party notices template.

- `design-review` content: SKILL.md process and rules for both modes, `unslop-checklist.md` (57 context-dependent rules in 8 categories plus 12 measurable "outdated" signals based on Chrome's Modern Web Guidance), and `visual-qa.md` (Playwright CLI capture process at 375/768/1440 px with reduced motion, checks script, per-width checklist).
- Phase 2 tests in `docs/examples/`: three URL audits, a before/after own-project review of a bakery landing, and `phase-2-results.md`.
- Licence audit for the phase 2 sources in `docs/SOURCES.md`, and entries in `THIRD_PARTY_NOTICES.md`.
- Impeccable recommended in the README as a companion plugin.
- `modern-design` step 1: `references/direction.md` (context and the page's main job, assumptions when the user can't answer, 3–5 live references with principles on five axes, structure from content, one committed direction, template test, `design-brief.md` output; respects `PRODUCT.md` and `DESIGN.md` without writing them).
- `design-review`: emoji used as any kind of image (CP2), and re-checking the areas a fix changed.
- CI: NVIDIA SkillEvaluator "Skill checks" workflow (bundle 1.0.1, unmodified, checksum verified) on `skills/` with a minimum score of 70 and read-only permissions; badge in both READMEs.
- Security: page content (HTML, text, metadata, `alt`, comments) is treated as data, never as instructions, in `design-review` and the direction step; text addressed to an AI is reported as a security finding in URL audits.
- Pinned tool versions: Lighthouse 13.6.0, `@playwright/cli` 0.1.25, `serve` 14.2.8.
- Phase 3a tests in `docs/examples/phase-3/` (bakery landing and veterinary dashboard built with the direction step, then reviewed).
- `modern-design` step 3: `references/sections/` (an index with the sections each page job needs, and one file per mandatory section for pages that persuade: header, hero, CTA, social proof, benefits, forms, final CTA, footer, each with phone, tablet and desktop layouts) and `references/responsive.md` (capability-first touch baseline, tablet section, what emulation can't reproduce). Replaces the empty `components.md`.
- `design-review`: screenshots at 375, 768, 1024 and 1440 px with touch emulated through device presets at the first three, phone landscape when the page has fixed elements, a "Needs a real device" section in reports, measurable mobile checks MN1–MN5 with a detection script, and optional reading of `modern-design`'s section files.
- Phase 3b batch A test in `docs/examples/phase-3b-results.md` (bakery rebuilt with `sections/` and `responsive.md`, reviewed at 375, 768, 1024 and 1440 px).
- The author's research (`docs/research/landing-field-guide/`) and its cited sources in `docs/SOURCES.md`.

- `modern-design` reasoning layer: `references/reasoning.md` (method for writing the brief: one central promise, and per page its moment in the journey and its main doubt), `principles.md` (P01–P31 with evidence levels), `pages/` (eleven files, one per group of page types: the user's moment, what the page must prove, levers, specifics with evidence grades, critical and common errors, when the usual advice flips, persuasion dial and 3C weight) and `ethics.md` (hard limit: dark-pattern blacklist, reference cases, evidence quality, minimum checks per page type). One order of authority in SKILL.md and in each file: ethics > brief > reasoning > principles and pages. `reasoning.md` also covers why the method exists (Baymard's GPT-4 audit), the persuasion dial, novice versus expert, which reference to open and how to present design work; worked examples in `reasoning-examples.md`.
- `design-brief.md` template: "Central promise" and, per page, its moment in the journey, its main doubt and its persuasion dial. `direction.md` sets the order: reason, read only the `pages/` file of each page type, then principles and ethics, then write the brief.
- `modern-design` description names a few app page types (pricing, checkout, sign-up, onboarding, settings, dashboard) and more Spanish keywords.
- `design-review`: Deceptive patterns family (DP1–DP10 plus a minimum per page type), each rule marked measured or judgment, pointing to CY3 for invented proof; optional reading of `modern-design`'s `ethics.md`; promise check for audits of two or three pages, with its own report section; audit rules against generic advice (infer whom the page serves first, comment only on what was seen or measured, check before recommending, order findings by how much they block the main decision, justify repeated findings per page); optional reading of `modern-design`'s `pages/` file for the page type.
### Added (content rules, decisions and implementation)

- `design-review`: slop indicators from a third shared screenshot (author not identified): TY11 (the display face of the season, such as Instrument Serif), CO9 (blurred glow behind the hero), CP7 (an arrow on every button), CP8 (sparkle icons), CP9 (dithering), CY6 (dots between words), CY7 ("real" and "quiet" as filler), CY8 (two-word sentences). TY11, CO6, CO9, CY6 and CY7 say how to measure them in code or text. TY2 and CO6 gain their legitimate cases (a brief that chooses the italic word with a reason; notices and notes with a side bar).
- No-invention rule (hard limit), `modern-design/references/content-truth.md`: the model never invents or assumes prices, figures, business texts, reviews, testimonials, hours, addresses, footer legal details or photos, and declines when asked. Placeholders: `[FIELD]` for data, lorem ipsum of realistic length for text, labelled image boxes with their aspect ratio, all in `data-placeholder` elements with a visible style; no stock photos presented as real.
- `modern-design/references/templates/content-needed.md`: what is missing, where it goes, the placeholder, the model's assumption (only there, marked "assumption: confirm") and its status.
- `modern-design/references/templates/site-decisions.md`: current standards (pointing to the tokens in the code), the inventory of pages, sections and components, and the user's decisions with the guideline each overrides. Never named `design.md`, which collides with Impeccable's `DESIGN.md` on case-insensitive file systems.
- `modern-design/references/implementation.md`: rendering per route, static site or app, kinds of state, reuse layers matching the levels in `ARCHITECTURE.md`, platform features with a link to Modern Web Guidance, performance, accessibility, legal minimum, a "Boundaries" section on the backend security this plugin doesn't review, and a summary table per page type. MUST only for security, accessibility and legal rules.
- An "Implementation" subsection (static, rendering, data and state, anti-patterns) in each of the 45 page-type entries in `pages/`.
- `design-review`: OM13, fonts loaded from Google Fonts (recommend self-hosting; LG München I, 20.01.2022, Az. 3 O 17493/20, cited as one concrete case in Germany), detected by `outdated-measurable.js` (`googleFonts`), which no longer counts Google Fonts in `thirdPartyWithoutSri`. A "Before publishing (blocking)" section in the audit report.
- Modern Web Guidance recommended in both READMEs as a companion.
- `docs/SOURCES.md`: the third screenshot, the implementation research with its source registry and case studies, and the Munich judgment with its official source.
- Implicit business claims (from the no-invention test): `content-truth.md` now covers every visible or indexed text (headings, labels, buttons, `alt`, `title`, meta description, structured data), allows three sources (a supplied fact, a placeholder, interface text with no claim), and treats an unconfirmed service (orders, delivery, on-site production, bookings) as a question with neutral headings meanwhile. `direction.md` splits the brief's "Assumptions" into "Design assumptions" and "Business facts" (never assumed; questions in `content-needed.md`). `templates/content-needed.md` gains a type column (`content` or `business question`), "sections that depend on it", and "proposal: confirm" for guesses without a source. CY3 gains a claims review (`judgment`, blocking before publishing). Placeholders get two styles: dashed outline for data and images, a lighter mark for running text (`data-placeholder-kind="text"`).
- No-invention test in `docs/examples/no-invention-results.md` (bakery with no data: brief, content-needed, site-decisions, site, four screenshots, review at 375, 768, 1024 and 1440 px). No skill changed; the rule gaps it found are listed in the results with their owner files.
- No-invention test, run 2, in `docs/examples/no-invention-2-results.md`: the same bakery brief after the implicit-claims fix, plus a request to invent three reviews (declined, placeholders built). No skill changed; the gaps it found are listed with their owner files.
- Claims round 2 (from no-invention run 2): country or jurisdiction is a standard business question in `content-truth.md` and `templates/content-needed.md` (new example row): until confirmed, `lang` from the user's language, no country `og:locale` or `hreflang`, legal pages with placeholders. A button or link whose destination is a placeholder leads to the section that shows it or is shown as a placeholder, never `tel:`, `mailto:` or a fake link (`content-truth.md`, `sections/cta.md`). CY3's claims review covers `og:*`, `lang`, `hreflang` and structured data, and what the review itself adds. Examples taken from our own bakery and vet tests were replaced in `direction.md`, `ethics.md`, `hero.md`, `cta.md`, `final-cta.md`, `forms.md`, `sections/index.md`, the content-needed template and `unslop-checklist.md` (CO8) by examples from varied businesses that presuppose no business facts.
- Split the no-invention rule out of `ethics.md` into `references/content-truth.md` (the old §7, unchanged), after the scanner marked `modern-design` INCOMPLETE with `obfuscated_instruction_text` and no line. `ethics.md` keeps §1–§6. Both headers link to each other. Order of authority everywhere: ethics (`ethics.md` and `content-truth.md`, hard limits) > `site-decisions.md` > `design-brief.md` > `reasoning.md` > the other references. Every pointer to the old §7 now points to `content-truth.md`.
- Original research archived unchanged: the four reasoning documents in `docs/research/web-reasoning/` and the four implementation documents in `docs/research/implementation/`, each folder with a README naming the skill files condensed from them. `docs/SOURCES.md` points to these copies.

### Changed (content rules, decisions and implementation)

- Order of authority, the same in both skills, `ARCHITECTURE.md` and every reference header: ethics (`ethics.md` and `content-truth.md`, hard limits) > `site-decisions.md` > `design-brief.md` > `reasoning.md` > the other references. A user decision that breaks either hard limit is declined with the reason.
- `design-review` checklist split by family, IDs unchanged: `unslop-checklist.md` keeps the shared rules and TY, CO, LA, CP; `copy-states-checklist.md` holds CY, SF, MO, ME.
- CY3 points to the no-invention rule: any `data-placeholder`, bracketed text in capitals or lorem ipsum is `measured` and blocking under "Before publishing"; invented content presented as real stays critical. Labelled example values ("example times") no longer count as placeholders.
- `direction.md` asks for the business's documentation and data first; non-interactive runs build with placeholders and write `content-needed.md`. Design assumptions still go in the brief; content assumptions never do.
- A planned section without data is built with placeholders instead of left out; removing it is the user's decision (`sections/social-proof.md`, `sections/index.md`, `sections/footer.md`).
- `modern-design` reads `site-decisions.md` at the start and updates it after each step; `design-review` reads it and doesn't report what the user decided, except measured failures (contrast, accessibility), reported as "decided by user".
- `content-truth.md`: the model may write and persuade with facts the user supplied; any new fact inside a sentence (frequency, origin, figures, guarantees, shipping, delivery times) is data and takes a placeholder or goes to `content-needed.md` as a proposal.
- `visual-qa.md`: after stopping a local server, check that its port is free and stop a surviving child process.
- `pages/commerce.md` split by moment in the journey, content unchanged: `pages/commerce-purchase.md` (cart, checkout) and `pages/commerce-after-purchase.md` (order confirmation, order history). Each header says they form one group and links to the other. The two together tripped the skill scanner's obfuscated-text check, which no single section did on its own.
- Versioning: the version is bumped only when a release is published; changes go to "Unreleased" until then.
- `visual-qa.md`: `read -r -d '' JS <<'EOF' || true`, because `read` returns 1 at the end of input and stops scripts that use `set -e`.

### Added (tokens step)

- `modern-design` step 2: `references/tokens.md` (three tiers: base values, semantic roles, component tokens; the brief's persuasion dial to density, section rhythm and motion budget; a method against convergence with no starting palette or font pair; mandatory focus, target, placeholder and reduced-motion tokens; one CSS file by default, with the DTCG format 2025.10 and Tailwind v4 `@theme` as dated options; token names, never values, in `site-decisions.md`; motion token names reserved for step 4). Detail in `tokens-color.md`, `tokens-color-dark.md`, `tokens-type.md` and `tokens-space.md`, loaded only when needed.
- New reference form, recorded in `ARCHITECTURE.md`: a five-line header (Covers, Read when, Not here, Owner, Sources) and rules written as Rule, Why, When it flips, Source.
- `docs/research/tokens-sources.md`: decision table for the tokens step (adopt, adapt, reject, link, deferred) over impeccable, taste-skill, ui-ux-pro-max-skill, emilkowalski/skills, Modern Web Guidance and the author's research, plus the standards facts checked at their source (WCAG 2.2, Apple HIG, Baseline status, DTCG 2025.10, Tailwind v4).
- `resources.md`: color, font and token entries.
- `.claude/CLAUDE.md`: a living list of businesses already used as examples.
- `ROADMAP.md`: a "Pending verification" list.

### Changed (tokens step)

- Target size aligned in `implementation.md` and `responsive.md`: MUST 24 × 24 CSS px with the exceptions of WCAG 2.5.8 (the 8 px gap figure replaced by WCAG's spacing exception); SHOULD 44 px for primary actions on coarse pointers (WCAG 2.5.5 AAA, Apple's default control size).
- `implementation.md` names the token format "Design Tokens Community Group format 2025.10 (a community group report, not a W3C standard)".
- `SKILL.md` step 2 describes the tokens step; `direction.md`, `reasoning.md` and `motion.md` point to the new files.

### Added (knowledge audit)

- `docs/research/knowledge-audit/`: an analysis-only audit of the plugin's knowledge in thirteen branches (plus one for unassigned items), each with where it lives today, coverage, duplicates and contradictions, proposed owner, gaps as questions and candidate sources; an index with the coverage matrix, the contradictions by severity, the proposed file tree for five skills, the shared core, missing headers, activation limits and a work order; and a review of Hallmark's mechanisms (adopt, adapt or reject). No change to `skills/`.

### Changed (audit contradictions)

- Target size in review aligned with `tokens.md` §5: SF4 is critical (`measured`) for targets under `--target-min` (24 px) that fail the WCAG 2.5.8 spacing exception, and minor (`judgment`) for primary actions under `--target-touch` (44 px) in the touch screenshots (375, 768, 1024). `page-checks.js` now measures every target's size and the 2.5.8 spacing test (`targetsUnder24`, `targetsUnder44`) and no longer decides by pointer type; `visual-qa.md` follows.
- Persuasion dial: one five-level scale (high, medium, medium-low, low, none) defined in `reasoning.md` §4, with "low-medium" merged into "medium-low" and "none-low" into "low"; the value per page type lives only in `pages/` (`principles.md` §3 now links to it; group headers in `pages/` corrected); `tokens.md` §3 has one row per level, without page examples; the brief template lists the five levels.
- WCAG 2.2 AA as the minimum in `principles.md` P18, `ethics.md` (minimum by page) and the minimum-by-page table of `dark-patterns-checklist.md`. The EN 301 549 → WCAG 2.1 legal facts stay as they are.
- CO8 accepts a cream background only for a concrete reason in the brief (existing brand, the business's own material or photography, a recorded decision), never by sector; `tokens.md` §4 owns the rule.
- Cancellation sources in `pages/user-account.md` (Account & billing) checked at primary sources: the FTC v. Amazon item now cites the FTC release (FTC Act and ROSCA); ROSCA added as the US basis in force, with a note that the FTC's 2024 click-to-cancel amendments were vacated by the Eighth Circuit on 8 July 2025; the Digital Fairness Act item now states it is a Commission proposal (COM(2026) 1100, 11 Nov 2026) and names its articles. The persuasion dial for the page stays at low.
- Typos from the audit: pending markers in `reasoning.md`, `sections/index.md` and `pages/legal.md`; repository-document paths in `implementation.md`; an evidence grade in `pages/interaction-creation.md`.

### Added (shared core)

- `modern-design/references/evidence.md`: evidence grades A, B and C (definition moved from `principles.md`, each principle keeps its grade), what counts as verified (primary source, date checked, dated legal or support status, secondary sources as context, unverified claims marked "verify before citing") and how to cite inside the references.
- `modern-design/references/design-reasoning.md`: the page-design part of the method, moved word for word from `reasoning.md` (six questions per screen, worked examples, which reference to open, final checks, how to present design work).
- "Shared core" section in `docs/ARCHITECTURE.md`.

### Changed (shared core)

- `reasoning.md` keeps the method shared by every skill (stance, central promise, four mechanisms, persuasion dial scale, collisions, priors), plus a new general section "When the usual advice flips" (house rule, generalised from `pages/`); sections renumbered and every `reasoning.md` §n link updated.
- Fixed header (Covers, Read when, Not here, Owner, Sources) on `ethics.md`, `content-truth.md`, `reasoning.md`, `design-reasoning.md`, `evidence.md` and `principles.md`.
- Order of authority: `reasoning.md` and `design-reasoning.md` share the method position, in every file that states it; `design-review/SKILL.md` now declares it too.
- `modern-design` reads `ethics.md`, `content-truth.md`, `reasoning.md` and `evidence.md` whole at the start of every run, and `design-reasoning.md` in step 1. `design-review` reads `reasoning.md` and `evidence.md` whole at the start of every run, and continues without them when they are missing.

### Changed (modern-design tree)

- `modern-design/references/` ordered in branch folders, moved with history and without content changes: `strategy/` (`direction.md`, `design-reasoning.md`, `reasoning-examples.md`, `principles.md`), `ux/pages/`, `ui/` (the five `tokens*.md`, `motion.md`, `sections/`) and `engineering/` (`implementation.md`, `responsive.md`). The shared core (`ethics.md`, `content-truth.md`, `reasoning.md`, `evidence.md`, `templates/`) and `resources.md` stay in the root, so `${CLAUDE_SKILL_DIR}/../modern-design/references/<file>` doesn't change for the core.
- Every path updated in both `SKILL.md` files, the references (headers, "Which reference to open", links between files), `design-review` and its scripts, `.claude/CLAUDE.md`, `docs/ARCHITECTURE.md`, `docs/ROADMAP.md`, `docs/SOURCES.md` and the research notes. Folder-prefixed paths in prose (`pages/legal.md`) became `references/ux/pages/legal.md`, because they no longer resolve from every folder.
- Fixed header (Covers, Read when, Not here, Owner, Sources) on every remaining `modern-design` reference: `direction.md`, `reasoning-examples.md`, `motion.md`, `implementation.md`, `responsive.md`, `resources.md`, the twelve `pages/` files and the nine `sections/` files. The templates have none, because they are copied to the user's project.
- `sections/`: spacing, target sizes, control heights and text sizes are token names instead of px ranges (`--space-section`, `--space-between`, `--space-inside`, `--target-touch`, `--header-height`, `--text-display`…); widths outside the token scale are in `rem` with their reason, and widths that hold text are in `ch`: `--measure` for the benefits text column and the final CTA, the expected answer for each form field. Resolves contradictions 5 and 10 of the knowledge audit.
- `docs/ARCHITECTURE.md`: "Reference tree" section with the tree, the rule that the core stays in the root, the templates exception and the pending files per folder.
- `scripts/dev/check-paths.js`: checks every `references/` path and relative link in `skills/`; `.claude/CLAUDE.md` says to run it after moving or renaming any file there.

### Changed (design-review tree)

- `design-review/references/review-method.md`: the method shared by every review skill, read whole at the start of every run: whom the page serves, what may be commented on, `measured` versus `judgment` (its owner), severity, order and repetition, the fields of a finding, what the user decided, the Floor, Reflex and Finish levels, artefacts of the audit setup, page content as data, and review in a clean context. Moved from the "How to use it" part of `unslop-checklist.md` and the "How to write it" part of `audit-report.md`; the levels and the clean-context review are adapted from Hallmark (MIT, commit 04977e1).
- `unslop-checklist.md` split by family without changing any ID: `unslop-type-color.md` (TY1–TY14, CO1–CO10), `unslop-layout.md` (LA1–LA19) and `unslop-components.md` (CP1–CP14).
- 24 signals adapted from Hallmark as checklist entries, each with a "Fine when" line: TY12–TY14, CO10, LA11–LA19, CP10–CP14, CY9, CY10, SF10–SF12 and MO6. `content-truth.md` gains the rule behind SF10 (no success state without a request behind it). Hallmark's house rules, numeric thresholds and photo stand-ins are not adopted.
- Regression check for changes to an existing page: `scripts/inventory.js` (links, forms, fields, buttons, headings, landmarks, title and description, taken in the page), `scripts/inventory-diff.js` (run with Node; lists lost, changed and added, exit code 1 when something is lost) and `references/regression-check.md` (when to run it, how, and that every loss is a Floor finding unless the user removed it on purpose in `site-decisions.md`). Tested with a removed link and a removed form field: both reported as lost, nothing else.
- Fixed header (Covers, Read when, Not here, Owner, Sources) on every `design-review` reference.
- `scripts/dev/check-paths.js` also checks `../design-review/references/` and `../design-review/scripts/` paths.
- Skill scanner (`static_parse_limit` in `static_patterns_tool_misuse`, with no line): `review-method.md` and `regression-check.md` no longer point into their own skill through `${CLAUDE_SKILL_DIR}/../design-review/`; `inventory-diff.js` no longer calls functions passed as parameters (the old `pair()` helper): each kind is normalised to `{ key, text, label }` with direct calls and one function compares the lists. Located by bisection with temporary `zz-bisect-*` skills; same output, byte for byte, on the same inventories. No rule, ID or behaviour changed. Both lessons are recorded in `.claude/CLAUDE.md`, "Skill scanner".
- `docs/ARCHITECTURE.md`, `docs/SOURCES.md`, `THIRD_PARTY_NOTICES.md` (Hallmark entry with its licence) and the knowledge audit index updated.

### Added (agents and context routing)

- Three plugin subagents in `agents/`: `design-explorer` (Haiku, read-only: returns paths, line ranges and verbatim headings for the terms the caller gives, never judges), `design-writer` (Sonnet: builds from a plan after reading every file in its READ-LIST whole, and replies with a read receipt holding the first and last heading of each file) and `design-reviewer` (Sonnet: measures and writes the report in a clean context, in the format of the mode: `audit-report.md` for URL audits, the review notes for own projects; it fixes nothing and never marks a finding as fixed). Each replies `BLOCKED: missing <section>` when its task message lacks a required section.
- `modern-design/SKILL.md`, "Agent and context routing": the skill runs as an orchestrator, with five tiers of files (Core, Step, Build, Redesign, Lookup), who reads each and when, at fixed paths. The code-writing steps (tokens, components, motion) go to `design-writer`, whose read receipt is checked against the real headings.
- Hero first: on a new site or page, the first build covers only the hero of the main page, then `design-review` runs with SCOPE hero (first section of one page, four widths, unslop checklists, the Floor items that apply, no Lighthouse), and the rest is built once the user agrees with the direction. In own-project mode the hero review writes its notes to a review-notes-hero file in the audits folder, and the full review writes the root review notes and links to them.
- Redesign check from `modern-design`: before the first change to an existing page, it takes the "before" inventory as `design-review/references/regression-check.md` describes and passes it as BASELINE to the review, which reports every loss as Floor.
- `design-review/SKILL.md`, "Agent and context routing": the delegation message (MODE, TARGET, SCOPE, READ-LIST, PROJECT FILES, REPORT PATH, BASELINE), REPORT PATH per mode, and fixes kept in the main session.
- Without subagents, both skills run the same steps in the main session.
- `design-explorer` term format and section ranges: TERMS takes one term per line with synonyms after ` | `, all literal strings; each term and synonym is searched separately as literal text (a string starting with hyphens is still the pattern); a section ends at the next heading of any level; all matches are sorted before LIMIT applies; `terms` lists the literal strings found in each section, and `no_match` lists a term only when neither it nor any synonym appears. `modern-design/SKILL.md` gives the TERMS format.
- Both `SKILL.md` files name each agent by its full plugin name (`modern-design-pack:design-writer`, `modern-design-pack:design-reviewer`, `modern-design-pack:design-explorer`) the first time, and by its short name after that.

### Added (browser tools research)

- `docs/research/browser-tools/`: research only (phase A), no change to `skills/`, `agents/` or the plugin configuration. Covers what Chrome DevTools for agents (`chrome-devtools-mcp`) would measure compared with `playwright-cli`: console errors, network on form submit (SF10), dark mode, CPU and network throttling, the accessibility tree, performance traces, and WebMCP / agentic browsing. Also measured context cost (full MCP 11.7k tokens, slim 198, zero up front with tool search; the CLI adds none), privacy flags, versions and Windows behaviour, packaging options, subagent tool lists, and an inventory of ECC. Decision table BT1–BT16, a proposal (keep `playwright-cli`; `chrome-devtools-mcp@1.13.0` only as an on-demand CLI with privacy off; no MCP server in the plugin), phase B risks (the SF10 test submit must block outgoing requests and log only the attempt), and a preliminary, unverified list of other MCP servers.
- `docs/SOURCES.md`: rows for `chrome-devtools-mcp`, ECC and the Claude Code documentation. The Playwright CLI licence is now Apache-2.0, and the 14-day rule applies to every future version bump (0.1.25 is kept).

### Changed (requirements and README)

- `design-review`: a Tools step before any browser step, in both modes. It checks `node --version` and `npx --version`. When Node.js is missing, the skill tells the user once, does a judgment review of the code or the HTML, records each measurement as `not measured (Node not found)` and gives no number that no tool produced. The own-project review notes gain a "Tools not available" line. `visual-qa.md` says that `playwright-cli` needs Node.js with npm. `regression-check.md` records the comparison as not measured and blocking when Node is missing. `agents/design-reviewer.md` is unchanged.
- `README.md` and `README.es.md` rewritten to match the repository:
  - the five target skills, two available and three planned;
  - what works today, described in user terms;
  - a Requirements section (Claude Code; Node.js with npm, `@playwright/cli` 0.1.25 and `serve` 14.2.8 for the browser check; Chrome for Lighthouse 13.6.0; network access), what happens without each one, no other plugin or skill needed, and Impeccable's files read only when they exist;
  - local development with `claude --plugin-dir`;
  - how it works (steps, hero first, the three subagents, both review modes, the redesign check, Floor, Reflex and Finish), with a link to `docs/ARCHITECTURE.md`;
  - principles;
  - screenshot widths 375, 768, 1024 and 1440 (1920 when needed);
  - the current folder tree and updated limitations.

### Changed (phase 3b)

- Skills may read each other's files inside the plugin; the rule is now "nothing outside the plugin".
- `design-review` checklist split by rule family, with content and IDs unchanged: `unslop-checklist.md` (shared rules plus TY, CO, LA, CP, CY, SF, MO, ME), `mobile-checklist.md` (MN1–MN5), `outdated-checklist.md` (OM1–OM12) and `dark-patterns-checklist.md` (DP1–DP10 and the minimum per page type, loaded when the page shows prices, offers, free trials, subscriptions, a sign-up, a payment, consent or cookies, stock or scarcity, urgency or deadlines, reviews or testimonials, or sponsored content).
- `design-review` page scripts moved from js code blocks in `visual-qa.md` and `unslop-checklist.md` to `skills/design-review/scripts/` (`scroll-check.js`, `page-checks.js`, `mobile-measurable.js`, `outdated-measurable.js`), unchanged and with a header comment, so the skill scanner can analyse the Markdown; the agent reads each file and passes it to `playwright-cli --raw eval`, which has no option to run a file in the page.
- Landing-page sections live in `modern-design/references/sections/`. `references/components/` is kept for reusable pieces (batch D).
- Batch A gaps from the phase 3b test: "Without JavaScript" notes in header, CTA and footer (`<details>` menu, real `tel:`/`wa.me` links, static copyright year); phone hero order led by the brief's main job; stacked tablet hero; one action with several channels; cookie settings link only when consent is needed; CY3 accepts brief-required placeholders that are visibly marked; own-project review notes format and non-interactive runs in `design-review`; Lighthouse width and the 712 px phone landscape viewport in `visual-qa.md`.

### Changed

- Consolidated the six initial skills (`design-direction`, `design-tokens`, `compose-ui`, `motion`, `unslop-review`, `visual-qa`) into two. The first four became references of `modern-design`, and `visual-qa` became a reference of `unslop-review`.
- Renamed `unslop-review` to `design-review` and added the URL audit mode. The anti-slop sources moved to `references/unslop-checklist.md`.
- `audits/` added to `.gitignore`.
