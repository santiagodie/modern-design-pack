# Resources

> **Covers:** a curated catalogue of external resources (galleries, palettes, fonts, token data, component libraries, backgrounds, motion), each added only after its licence is checked. Mostly a skeleton.
> **Read when:** any step of `modern-design` that needs a specific external resource.
> **Not here:** how to choose colors and type → references/ui/tokens-color.md and references/ui/tokens-type.md; motion → references/ui/motion.md
> **Owner:** modern-design
> **Sources:** none yet; each entry's licence is recorded in docs/SOURCES.md

> Reference for `modern-design`. Curated link catalogue. Skeleton: entries are added in phase 3, only after each source's licence is checked. Load only when a step needs a specific external resource.

## How to use this catalogue

TODO

## Inspiration galleries

TODO

## Color and palettes

Palettes come from the brief and the user's material (`tokens.md` §4), not from a generator. These tools check what you derived.

- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/): checks a text and background pair against WCAG contrast; use it for every pair in `tokens-color.md` §7.
- [Coolors contrast checker](https://coolors.co/contrast-checker): another pair checker, handy while adjusting a brand color for a role (`tokens-color.md` §5). Its random palette generator gives starter palettes, which this plugin doesn't use.

## Fonts

Check the licence of each face before using it, and host the files on the site (`tokens-type.md` §2).

- [Fonts In Use](https://fontsinuse.com): faces in real use across many kinds of work; use it to find cited references from other sectors (`tokens.md` §4).
- [Fontshare](https://www.fontshare.com): free faces from a type foundry; read each face's licence for web use and self-hosting.
- [Fontesk](https://fontesk.com): an aggregator of free faces with mixed licences; verify each one at its source.
- [google/fonts](https://github.com/google/fonts): the files and licence metadata of the Google Fonts library; download and self-host, don't link the service by default (OM13).

## Tokens and support data

- [Design Tokens Community Group reports 2025.10](https://www.designtokens.org/TR/2025.10/): the JSON format for tokens shared across platforms (`tokens.md` §6).
- [Tailwind CSS theme variables](https://tailwindcss.com/docs/theme): the `@theme` directive and its namespaces.
- [shadcn/ui theming](https://ui.shadcn.com/docs/theming): how a component library maps roles to CSS variables.
- [webstatus.dev](https://webstatus.dev) and [Modern Web Guidance](https://developer.chrome.com/docs/modern-web-guidance): current Baseline status of CSS features; check here before citing support.
- [next-themes](https://github.com/pacocoursey/next-themes) and [cva](https://cva.style): theme switching without a flash on load, and typed component variants, for React projects.
- [taste-skill](https://github.com/Leonxlnx/taste-skill): its `consistency.mjs` script checks contrast, focus, tap size and type scale in a browser; optional, needs Node and Chrome.
- [Impeccable](https://impeccable.style): a companion plugin for design work and audits.

## Component libraries

TODO

## Backgrounds and gradients

TODO

## Motion and animation

TODO

## Entry format

One line per resource:

```markdown
- [Name](https://example.com): what it is good for, and when to reach for it.
```
