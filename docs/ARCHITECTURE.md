# Architecture

> In progress (v0.1.0, unreleased). This describes the design; `docs/ROADMAP.md` says which parts have content.

## Skill flow

Two skills. `modern-design` builds, `design-review` checks. Each one keeps its detail in `references/` files that are loaded only for the step that needs them, so a request that touches only colors does not load the motion guidance.

```mermaid
flowchart LR
    A[modern-design] --> B[design-review]
    B -- issues found --> A
```

| Skill | Steps | Reference loaded per step |
|---|---|---|
| modern-design | Start of every run: the shared core, read whole | `references/ethics.md`, `references/content-truth.md`, `references/reasoning.md`, `references/evidence.md` (see "Shared core") |
| | 1. Direction: context, live references, central promise, design brief | `references/strategy/direction.md`, then `references/strategy/design-reasoning.md` before writing the brief |
| | After reasoning: only the file of each page type in the brief, then principles when needed | `references/ux/pages/<group>.md` (commerce is split in two: `commerce-purchase.md` and `commerce-after-purchase.md`), `references/strategy/principles.md` (`references/strategy/reasoning-examples.md` for worked examples) |
| | Pages with prices, consent, subscriptions, scarcity, urgency or reviews (hard limit) | `references/ethics.md` |
| | Every build: no invention, placeholders, `content-needed.md` (hard limit, same level as ethics) | `references/content-truth.md` |
| | 2. Tokens: tiers, method against convergence, mandatory tokens, format; then color, dark theme, type and space as needed | `references/ui/tokens.md`, then only the files needed: `references/ui/tokens-color.md`, `references/ui/tokens-color-dark.md`, `references/ui/tokens-type.md`, `references/ui/tokens-space.md` |
| | 3. Components: sections and components in the project's stack, for phone, tablet and desktop | `references/ui/sections/index.md`, one file per section built, `references/engineering/responsive.md` |
| | 4. Motion: purposeful animation and interaction | `references/ui/motion.md` |
| | 5. Hand off to design-review | none |
| | Steps 1 and 3: static or app, rendering per route, kinds of state, reuse layers, performance, accessibility, legal minimum | `references/engineering/implementation.md` (and the "Implementation" subsection of each `pages/` entry) |
| | Any step that needs an external resource | `references/resources.md` |
| design-review (both modes) | Start of every run: the shared method and evidence rules, read whole when they exist; then the review method, read whole | `../modern-design/references/reasoning.md`, `../modern-design/references/evidence.md`; `references/review-method.md` |
| design-review: own project | 1. Review code and design decisions for generic patterns and mistakes | `references/unslop-type-color.md`, `references/unslop-layout.md`, `references/unslop-components.md`, `references/copy-states-checklist.md`, `references/mobile-checklist.md`, `references/outdated-checklist.md`; `references/dark-patterns-checklist.md` when the page shows prices, offers, free trials, subscriptions, a sign-up, a payment, consent or cookies, stock or scarcity, urgency or deadlines, reviews or testimonials, or sponsored content |
| | 2. Browser check with screenshots, when the app is running | `references/visual-qa.md` |
| | 3. Before fixing markup: inventory of the page; fix, or send back to the modern-design step that owns the problem; after: inventory again and compare | `references/regression-check.md`, `scripts/inventory.js`, `scripts/inventory-diff.js` |
| design-review: URL audit | 1. Screenshots at 375, 768, 1024 and 1440 px, HTML read, Lighthouse if Chrome is available | `references/visual-qa.md` |
| | 2. Review against the checklists and browser criteria | `references/unslop-type-color.md`, `references/unslop-layout.md`, `references/unslop-components.md`, `references/copy-states-checklist.md`, `references/mobile-checklist.md`, `references/outdated-checklist.md`, `references/visual-qa.md`; `references/dark-patterns-checklist.md` when the page shows prices, offers, free trials, subscriptions, a sign-up, a payment, consent or cookies, stock or scarcity, urgency or deadlines, reviews or testimonials, or sponsored content |
| | 3. Write the report | `references/audit-report.md` |

Nothing outside the plugin: installed plugins are copied to a cache, and files outside the plugin are not available. Skills may read each other's files inside the plugin (`design-review` reads `modern-design`'s section references when they exist) and must keep working when they don't.

Order of authority, the same in both skills: ethics (`ethics.md` and `content-truth.md`, hard limits) > `site-decisions.md` (what exists and what the user decided) > `design-brief.md` > `reasoning.md` and `design-reasoning.md` (method for writing the brief) > the other references (`principles.md`, `pages/`, `sections/`, `implementation.md` and the rest, consulted afterwards). A user decision that breaks either hard limit is declined with the reason. `design-review` checks the hard limit through its DP family and reads `ethics.md` when it exists.

A skill is split into more skills only when its `SKILL.md` grows past ~500 lines or it triggers badly in tests.

## Agents and context routing

Three plugin subagents live in `agents/`, next to `skills/`: `design-explorer` (Haiku, read-only locator), `design-writer` (Sonnet, builds from a plan) and `design-reviewer` (Sonnet, measures and writes the report in a clean context). The main session runs `modern-design` as an orchestrator: it reasons, decides and asks the user; the subagents read their rule files from disk and do the work. Which file is read by whom and when is the table in `skills/modern-design/SKILL.md`, "Agent and context routing"; the delegation to the reviewer (SCOPE hero, BASELINE, REPORT PATH per mode) is the section of the same name in `skills/design-review/SKILL.md`. Neither is copied here.

```mermaid
flowchart TD
    M["Main session (modern-design as orchestrator)<br/>reads: Core tier (ethics, content-truth, reasoning, evidence, project files)<br/>and the Step tier of each step"]
    E["design-explorer (optional)<br/>reads: the user's existing code, references/resources.md"]
    W1["design-writer: hero of the main page<br/>reads: Build tier (Core, design-reasoning, implementation,<br/>responsive, tokens, sections/index and the sections and pages in the plan)"]
    R1["design-reviewer, SCOPE hero<br/>reads: design-review SKILL.md, review-method, visual-qa,<br/>audit-report, the checklists that apply, project files"]
    W2["design-writer: the rest<br/>reads: Build tier"]
    R2["design-reviewer, SCOPE full<br/>(BASELINE when the page existed: regression-check)<br/>reads: as above, plus regression-check"]
    M -. "locate terms" .-> E
    M --> W1 --> R1
    R1 -- "Floor fixed, user agrees with the direction" --> W2 --> R2
    R2 -- "findings; fixes in the main session" --> M
```

**Three guarantees.**

- **Fixed paths.** Rule files are opened at the paths in the routing table, never searched for; `design-explorer` is used only for the user's code and `resources.md`, and only reports where its terms are.
- **Read receipt.** `design-writer` and `design-reviewer` read every READ-LIST file whole before acting and reply with one line per file: its line count, first heading and last heading, copied exactly. The orchestrator checks the last heading against the file with a Grep and sends the writer back when one is missing or wrong.
- **BLOCKED when something is missing.** Each subagent checks the headings of its task message first and replies `BLOCKED: missing <section>` (or `BLOCKED: cannot read <path>`) instead of guessing.

**Limits of plugin subagents that shape the design** (checked on 2026-11-26 in the official Claude Code documentation, read through a summary of the page; re-check the wording before quoting it):

- They ignore the `hooks`, `mcpServers` and `permissionMode` frontmatter fields (also `initialPrompt`), so none of the three agents sets them. https://code.claude.com/docs/en/sub-agents#choose-the-subagent-scope and https://code.claude.com/docs/en/plugins-reference
- `AskUserQuestion` is among the tools removed from subagents even when listed, so the writer reports OPEN QUESTIONS and the main session asks the user. https://code.claude.com/docs/en/sub-agents#available-tools
- A subagent with `Agent` in its `tools` can start subagents of its own, up to three layers below the main conversation; without `Agent` it can't. None of the three lists it, so delegation stays one level deep and under the orchestrator's control. https://code.claude.com/docs/en/sub-agents#let-subagents-spawn-their-own-subagents
- `maxTurns` is a documented field; at the limit the subagent's output comes back marked as partial. https://code.claude.com/docs/en/sub-agents#frontmatter-reference
- When an `availableModels` allowlist in the settings blocks a subagent's model, Claude Code runs it on a replacement (the newest permitted version of the family, then `CLAUDE_CODE_SUBAGENT_MODEL`, then the main conversation's model). Behaviour set at organization level is not described in those words: unverified. https://code.claude.com/docs/en/sub-agents#when-an-allowlist-blocks-a-subagent-model

The CI scanner reads `skills/` only: the files in `agents/` are not scanned, and passing CI says nothing about them.

## Project files

`modern-design` writes three files in the root of the user's project, and `design-review` reads them when they exist:

| File | Holds | Rank |
|---|---|---|
| `site-decisions.md` | Current standards (pointing to the tokens in the code, never copying values), the inventory of pages, sections and components, and the user's own decisions with the guideline each overrides. Read at the start of every run and updated after every step. Never named `design.md`, which collides with Impeccable's `DESIGN.md` on case-insensitive file systems. | Above the brief, below `ethics.md` |
| `design-brief.md` | The direction the model proposed: context, central promise, design assumptions, references, structure, direction. | Below `site-decisions.md` |
| `content-needed.md` | Every placeholder: what is missing, where it goes, the placeholder used, the model's guess (only here, marked "assumption: confirm") and its status. | Not a rule; a list of what blocks publishing |

Templates for the first and third are in `modern-design/references/templates/`; the brief's template is in `direction.md`. The skills never write `PRODUCT.md` or `DESIGN.md`.

**No invention.** `content-truth.md` is a hard limit: the model never invents or assumes prices, figures, business texts, reviews, testimonials, hours, addresses, footer legal details or photos, and declines when the user asks. Missing content is built as a marked placeholder (`data-placeholder`, `[FIELD]`, lorem ipsum, labelled image boxes); a planned section without data keeps its placeholders until the user decides to drop it. `design-review` reports every placeholder as `measured` and blocking under "Before publishing".

## Levels

The design references are organised in four levels, from the smallest piece to the whole page:

| Level | What it decides | Where | Status |
|---|---|---|---|
| Tokens | Three tiers (base values → semantic roles → component tokens; components read roles, themes remap only the semantic tier); color, dark theme, type, spacing, radii, elevation, targets, focus; motion names reserved | `references/ui/tokens.md` (the step), `tokens-color.md`, `tokens-color-dark.md`, `tokens-type.md`, `tokens-space.md` | Written (3c); motion values pending in `motion.md` |
| Components | Reusable pieces shared by several sections: buttons, cards, inputs, badges | `references/ui/components/` | Pending (3b, batch D) |
| Sections | Whole page sections with phone, tablet and desktop layouts | `references/ui/sections/`, `references/engineering/responsive.md` | Batch A written |
| Pages | Per page type: the user's moment, what the page must prove, levers, specifics, when the usual advice flips, persuasion dial | `references/ux/pages/` | Reasoning written; "Layout & responsive" per page type pending |

Above the levels sits the reasoning layer (the shared core described below, plus `design-reasoning.md` and `principles.md`), which decides which pages and sections exist before any level is built. Beside them, `implementation.md` decides how each level is built: rendering per route, state, the same four levels as reuse layers, performance, accessibility and the legal minimum. Backend security is out of scope (its "Boundaries" section).

## Reference tree

`modern-design/references/` is ordered by branch of knowledge (the branches of `docs/research/knowledge-audit/`). The shared core stays in the root; everything else lives in a branch folder.

```text
skills/modern-design/references/
├── ethics.md, content-truth.md, reasoning.md, evidence.md   shared core (fixed paths)
├── templates/            site-decisions.md, content-needed.md (no header: copied to the user's project)
├── resources.md          curated links (no branch in the audit)
├── strategy/             direction.md, design-reasoning.md, reasoning-examples.md, principles.md
├── ux/pages/             one file per group of page types (12)
├── ui/                   tokens.md, tokens-color.md, tokens-color-dark.md, tokens-type.md, tokens-space.md, motion.md
│   └── sections/         index.md and one file per section (8)
└── engineering/          implementation.md, responsive.md
```

**The core stays in the root.** `ethics.md`, `content-truth.md`, `reasoning.md`, `evidence.md` and `templates/` never move: other skills read them as `${CLAUDE_SKILL_DIR}/../modern-design/references/<file>`, and that path must not change.

**Templates carry no header.** The files in `templates/` are copied to the user's project as they are, so they don't get the fixed header that every other reference has.

**Pending, by folder** (listed here, not created as empty files):

| Folder | Pending | Source of the plan |
|---|---|---|
| `strategy/` | none | |
| `ux/` | `navigation.md` (site and app navigation, labels, global search) | audit branch 05 |
| `ui/` | `components/` (`button.md`, `field.md`, `choice.md`, `card.md`, `badge.md`, `table.md`, `dialog.md`, `tabs-menu.md`; batch D); `sections/` batch B (`problem.md`, `how-it-works.md`, `demo.md`, `testimonials.md`, `pricing.md`, `trust.md`, `faq.md`, `where-when.md`) and batch C (`app-bar.md`, `board.md`, `data-table.md`, `side-panel.md`, `row-actions.md`, `read-only-display.md`); `styles.md`; the content of `motion.md` | audit branch 06 |
| `engineering/` | `performance.md`, when `implementation.md` §6 grows | audit branch 11 |

## Review method and checklists

`design-review` owns the method every review follows, so the review skills planned next (`accessibility-review`, `seo-geo-optimizer`, `content-web-optimizer`) don't each write their own.

| File | Holds | Read by |
|---|---|---|
| `design-review/references/review-method.md` | Whom the page serves, what may be commented on, `measured` versus `judgment` (its owner), severity, order, the fields of a finding, what the user decided, the Floor, Reflex and Finish levels (adapted from Hallmark), artefacts of the audit setup, page content as data, review in a clean context | `design-review`: whole, at the start of every run. Other review skills: whole, as `${CLAUDE_SKILL_DIR}/../design-review/references/review-method.md`, keeping a short form of its rules in their own `SKILL.md` in case it is missing; a skill that needs a different rule names the one it replaces |
| `design-review/references/regression-check.md` | Inventory before and after any change to an existing page (`scripts/inventory.js` in the page, `scripts/inventory-diff.js` with Node), what counts as lost (Floor, unless the user removed it on purpose in `site-decisions.md`) and what is only changed | `design-review` before fixing markup and at the verify step; `modern-design` can read it the same way when it changes an existing page |

**Levels.** Floor (nothing ships: "Before publishing", the DP family, invented content and false success states, measured accessibility, security and legal failures, losses in the regression check), Reflex (every checklist entry with a "Fine when": waivable with a reason specific to the page, recorded in the brief or in `site-decisions.md`), Finish (Tips; never blocks). They sit beside the report sections (Critical, Minor, Outdated, Tips, Before publishing) without renaming them.

**Checklists, by family:**

| File | Families |
|---|---|
| `unslop-type-color.md` | Typography TY1–TY14, Color CO1–CO10 |
| `unslop-layout.md` | Layout and spacing LA1–LA19 |
| `unslop-components.md` | Components and imagery CP1–CP14; what was considered and left out |
| `copy-states-checklist.md` | Copy CY1–CY10, States and feedback SF1–SF12, Motion MO1–MO6, Meta ME1–ME4 |
| `mobile-checklist.md` | Mobile, measurable MN1–MN5 |
| `outdated-checklist.md` | Outdated, measurable OM1–OM13 |
| `dark-patterns-checklist.md` | Deceptive patterns DP1–DP10 and the minimum per page type |

IDs never change when a file is split; a new rule takes the next free number of its family.

## Shared core

Five pieces apply to every skill, whatever it builds or reviews. They live in the root of `modern-design/references/` (never in a branch folder, see "Reference tree"), because installed plugins are copied whole to a cache and a folder without a `SKILL.md` has not been checked with `claude plugin validate`.

| File | Holds | Read by |
|---|---|---|
| `ethics.md` | Hard limit: legitimate persuasion versus dark patterns, real cases, dated regulatory status, blacklist, quality of popular claims, minimum per page type | `modern-design`: whole, at the start of every run. `design-review`: for the cases behind its DP family |
| `content-truth.md` | Hard limit: no invention, the three sources of every text, placeholders, `content-needed.md` | `modern-design`: whole, at the start of every run |
| `reasoning.md` | The shared method: think instead of filling in, the central promise, the four mechanisms, the persuasion dial scale, collisions between principles, when the usual advice flips | Both skills: whole, at the start of every run |
| `evidence.md` | Evidence grades A, B and C; what counts as verified (primary source, date checked, dated status, secondary sources as context, unverified claims marked); how to cite | Both skills: whole, at the start of every run |
| `templates/site-decisions.md`, `templates/content-needed.md` | Templates of the project files | Whichever skill creates the file first |

The page-design part of the method is not shared: `design-reasoning.md` (six questions per screen, worked examples, which reference to open, how to present design work) and `principles.md` belong to `modern-design`.

**How other skills read it.** A skill other than `modern-design` names each core file by `${CLAUDE_SKILL_DIR}/../modern-design/references/<file>`, the pattern `design-review` already uses, and keeps working when the file is missing: its own `SKILL.md` carries the rules it needs in short form. The skill scanner reports these paths as `reference_missing`, which doesn't block the scan.

**Standard form.** Core files carry the fixed header described below, with **Owner:** "shared core (lives in modern-design)", and write decision rules in the Rule / Why / When it flips / Source form. The order of authority is the same everywhere: ethics (`ethics.md` and `content-truth.md`) > `site-decisions.md` > `design-brief.md` > `reasoning.md` and `design-reasoning.md` > the other references.

## How new references are written

From the tokens files on, references use a fixed header and a fixed rule form, so the model can reason about each rule instead of ticking it.

**Header**, five lines in a quote at the top: **Covers** (what the file decides), **Read when** (step or situation), **Not here** (topic → the file that has it), **Owner** (the skill; when the audit names a future skill as owner, "(moves to <skill>)"), **Sources** (short list, with the full table in `docs/research/`). Every reference in `modern-design` and `design-review` carries it, except the files in `templates/`, which are copied to the user's project. "Not here" names files by their path relative to the `SKILL.md` (`references/ui/tokens.md`); a pending file is marked "(planned)".

**Rule form:**

- **Rule:** "do X when Y". MUST only for accessibility, security, legal requirements and the truth rule; everything else SHOULD.
- **Why:** the mechanism, tied to a concept of `reasoning.md` when there is one (central promise, attention, trust, deciding, memory, persuasion dial).
- **When it flips:** the context where the usual rule stops working, and what to do then.
- **Source:** a short credit ("adapted from <repo> (<licence>)"; "changes made" for CC BY).

Trivial rules may fit on one line; decision rules always carry Why and When it flips. Older references move to the rule form when they are next revised; the header is already on all of them.

## Context over rules

Design rules that hold everywhere are rare. A pill badge, a gradient or an italic serif word is a tired cliché in one product and the right choice in another. So:

- Rules are written as "do X when Y", never as absolute bans.
- The user's decisions in `site-decisions.md`, then the design brief from the direction step, are the tie-breakers. When a rule and either of them disagree, they win and the reason is stated.
- `ethics.md` and `content-truth.md` stay above both: a decision that deceives, or invents content, is declined. Measured failures (contrast, accessibility) are still reported when the user decided them, marked "decided by user".
- `design-review` flags patterns as likely generic in this context, not as forbidden.

## URL audit mode

`design-review` can also audit any public site, not only the user's own project. The audit is read-only (no forms, no logins, no changes), covers public pages only, and stops at three pages. It returns a report in the user's language, saved as `audits/<domain>-<YYYY-MM-DD>.md` with screenshots in a folder of the same name.

Each finding in the report is tagged `measured` (Lighthouse or code) or `judgment` (design criteria). "Outdated" findings are almost always judgment, and the report says so, so a reader can tell a measured problem from a matter of taste.

## How the direction step researches references

1. **Find** with WebSearch: look for live sites in the same category, audience and tone as the project, on galleries such as Awwwards and Curated and on real product sites.
2. **Read** with WebFetch: take text, structure and copy patterns from the pages found.
3. **See** with Playwright screenshots: capture what text cannot describe, such as layout, density, type scale, color and motion.
4. **Extract principles, never clone.** The brief records what makes each reference work (for example "large type, one accent color, dense product screenshots") and never its code, assets or copy.

The brief lists every reference URL so the user can see where the direction came from.
