# Benefits and features

Reference for `modern-design`, step 3. `design-review` may also read it to check this component.

## Job

Turn interest into desire: show what changes for the visitor, and why they should believe it.

## When it applies

Pages that persuade, as the core argument. Experience pages may tell the same thing as a story. On local business sites this is often the offer itself (the menu, the services), presented as a list rather than as feature cards.

## Content

- 3–6 benefits. With many features, group them into 3–4 themes.
- Each block: a **benefit headline** (the outcome, 3–8 words), **one sentence of mechanism** (how a feature delivers it), and **proof** (a screenshot, a metric or a short quote).
- The "so that" test: "[feature] so that you [benefit]". If the sentence can't be finished, it isn't a benefit.
- Concrete beats vague: "Reports in 30 seconds" over "Fast reporting".
- Use the customer's own words (reviews, support questions, sales calls).
- Order by the visitor's questions ("will it work for me?", "is it easy?", "does it fit my tools?", "is it safe?"), not by your roadmap. Strongest first, a strong one last.

## Layout patterns

| Pattern | When to use |
|---|---|
| Alternating rows (text and image) | 3–5 key benefits that each deserve a real visual |
| Bento grid | 5–8 capabilities of different importance; tile size shows priority |
| Icon grid | Secondary features only, never the main argument |
| Tabs or pinned scroll story | Many features of a complex product, one visual that changes |
| Plain list | Offers, menus, services: name, short description, price |

## Layout per device

| | Phone | Tablet | Desktop |
|---|---|---|---|
| Alternating rows | One column: headline, text, then the visual | Portrait: stacked, or two columns only if the text column keeps about 320 px. Landscape: two columns | Two columns; text column 480–560 px; 64–120 px between rows |
| Bento | One column, largest tile first | Two columns | Three or four columns; one tile about twice the others |
| Tabs | Become an accordion or stacked blocks | Tabs if labels fit on one line; otherwise accordion | Tabs or pinned scroll story |
| Screenshots | Cropped so their text stays legible | Same | Same; never a whole dashboard shrunk |
| Section padding | 48–80 px | 64–96 px | 96–160 px |

Spacing inside a block (title to text) must be clearly smaller than spacing between blocks; a ratio of about 1:3 works. Section heading 26–32 px on phones, 36–48 px on desktop, with at most two lines of intro.

## States and interaction

- Tabs follow the tabs pattern: arrow keys move between tabs, the panel is labelled by its tab.
- Accordions use buttons with `aria-expanded`.
- Pinned scroll stories fall back to stacked blocks on small screens and under `prefers-reduced-motion`.
- Hover effects on tiles only behind the hover-capability query; tiles that aren't links don't lift on hover.

## Accessibility

- Headings in order: section `h2`, benefit `h3`.
- Screenshots that carry information have `alt` text that states what they prove.

## Critical errors

- Features with no benefit ("Advanced AI engine").
- Claims with no proof anywhere on the page.
- Screenshots so small their text is a blur.

## Common errors

- Three identical icon cards as the main argument.
- Icons that say nothing (a rocket for "fast", a shield for "secure").
- "We" statements instead of "you" statements.
- Everything at equal weight, so nothing stands out.

## Level-up

- Replace icons with cropped, annotated product views that show the exact thing delivering each benefit.
- Add one real metric per benefit, ideally from a named customer.
- Delete any block whose removal wouldn't change a reader's decision.
- A row of integration logos says "this fits your world" and works as quiet proof.

## Generic-pattern watch

LA1 (identical card grids), LA2 (everything boxed), LA7 (numbered steps without a real sequence), CP2 (emoji or mixed icons), CP4 (decoration instead of product), CP5 (ghost cards and icon tiles), MO1 (fade-in on every section).

## Style notes

Product-led directions: real UI everywhere. Editorial: text-led rows with generous measure. Bento suits products with many capabilities; it turns generic when every tile is the same size.
