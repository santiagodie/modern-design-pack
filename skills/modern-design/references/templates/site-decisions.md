# Template: site-decisions.md

Template for `modern-design`. Copy it to the project root as `site-decisions.md` at the start of the first run, write it in the user's language, and keep it up to date. `design-review` reads it when it exists.

Never name the file `design.md`: on Windows and macOS file names ignore case, so it would collide with the `DESIGN.md` that Impeccable writes.

## Where it sits

Order of authority: ethics (`ethics.md` and `content-truth.md`, hard limits) > `site-decisions.md` > `design-brief.md` > `reasoning.md` > the other references. The brief holds the direction the model proposed; this file holds what exists in the code and what the user decided. When the user asks for something that breaks `ethics.md` (an invented review, a reject button hidden behind a second layer), decline it, explain why in one or two sentences, and don't record it.

## When to read and write it

- **Start of every run:** read it before `design-brief.md`. When it doesn't exist, create it from this template, filling sections 1 and 2 from the code.
- **End of every step:** update it. Step 1 (direction): new user decisions. Step 2 (tokens): section 1. Step 3 (components): section 2, with every page, section and component built or changed. Step 4 (motion): the motion row of section 1. Any step: section 3, when the user decides something.
- **Before building anything new** (a section, a component, a page), check section 2 for something to reuse or extend, and say which one you used or why none fitted.

## Rules per section

1. **Current standards.** One row per area: palette, typography, spacing, radii, motion. Each row points to the tokens in the code (file and token names) and never copies their values, so the file can't drift from the code. When what this file says and what the code does disagree, ask the user which one is right before changing either; in a non-interactive run, follow the code and add the mismatch to the brief's Assumptions.
2. **Inventory.** Every page, section and reusable component that exists, with its path and a few words on what it does. One line each.
3. **User decisions.** Only decisions the user made, never the model's own choices (those go in the brief). Each entry has the date, the decision, the user's reason, and the guideline it overrides (file and rule ID when there is one, for example `unslop-checklist.md` TY2). When the user revokes a decision, delete the entry (git keeps the history) and generate the affected part again from the references.

## Template

```markdown
# Site decisions: <project>

Updated: <YYYY-MM-DD>

Order of authority: ethics (ethics.md and content-truth.md, hard limits) > this file > design-brief.md > reasoning > references.

## 1. Current standards

| Area | Tokens in code | Notes |
|---|---|---|
| Palette | <for example: `src/styles/tokens.css`, `--color-*`> | <roles, light and dark> |
| Typography | <file, `--font-*`, `--text-*`> | |
| Spacing | <file, `--space-*`> | |
| Radii | <file, `--radius-*`> | |
| Motion | <file, `--duration-*`, `--ease-*`; reduced-motion handling> | |

## 2. Inventory

### Pages
- <path>: <what it is>

### Sections
- <path>: <what it does; pages that use it>

### Components
- <path>: <what it does; variants>

## 3. User decisions

| Date | Decision | Reason | Overrides |
|---|---|---|---|
| <YYYY-MM-DD> | <for example: keep the italic word in the hero headline> | <the user's reason> | <`unslop-checklist.md` TY2> |
```
