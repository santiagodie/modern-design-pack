# Architecture

> Skeleton (v0.1.0). This describes the intended design. The skills are still empty.

## Skill flow

Two skills. `modern-design` builds, `unslop-review` checks. Each one keeps its detail in `references/` files that are loaded only for the step that needs them, so a request that touches only colors does not load the motion guidance.

```mermaid
flowchart LR
    A[modern-design] --> B[unslop-review]
    B -- issues found --> A
```

| Skill | Steps | Reference loaded per step |
|---|---|---|
| modern-design | 1. Direction: context, live references, design brief | `references/direction.md` |
| | 2. Tokens: color, type, spacing, radii, shadows, themes | `references/tokens.md` |
| | 3. Components: sections and components in the project's stack | `references/components.md` |
| | 4. Motion: purposeful animation and interaction | `references/motion.md` |
| | 5. Hand off to unslop-review | none |
| | Any step that needs an external resource | `references/resources.md` |
| unslop-review | 1. Review code and design decisions for generic patterns | none yet |
| | 2. Browser check with screenshots, when the app is running | `references/visual-qa.md` |

Each skill is self-contained. It reads only its own `SKILL.md` and `references/` folder, and never paths outside its folder, because installed plugins are copied to a cache and files outside the plugin are not available.

A skill is split into more skills only when its `SKILL.md` grows past ~500 lines or it triggers badly in tests.

## Context over rules

Design rules that hold everywhere are rare. A pill badge, a gradient or an italic serif word is a tired cliché in one product and the right choice in another. So:

- Rules are written as "do X when Y", never as absolute bans.
- The design brief from the direction step is the tie-breaker. When a rule and the brief disagree, the brief wins and the reason is stated.
- `unslop-review` flags patterns as likely generic in this context, not as forbidden.

## How the direction step researches references

1. **Find** with WebSearch: look for live sites in the same category, audience and tone as the project, on galleries such as Awwwards and Curated and on real product sites.
2. **Read** with WebFetch: take text, structure and copy patterns from the pages found.
3. **See** with Playwright screenshots: capture what text cannot describe, such as layout, density, type scale, color and motion.
4. **Extract principles, never clone.** The brief records what makes each reference work (for example "large type, one accent color, dense product screenshots") and never its code, assets or copy.

The brief lists every reference URL so the user can see where the direction came from.
