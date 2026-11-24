# Quick social proof

Reference for `modern-design`, step 3. `design-review` may also read it to check this component.

## Job

Answer "is this real, and do people like me use it?" before the visitor reads the argument.

## When it applies

Pages that persuade. When real proof doesn't exist yet, build the section with placeholders. Proof works best next to the doubt it answers: near the hero (is this legitimate?) and near the action (will I regret this?).

## Content

**Figures, logos and ratings: show them only when they are real, verifiable and you can say where they come from.** When the project has none:

- prefer one specific, attributable proof when the user can supply it: a named review with its source, a real count of something (orders, years open, members), a credential;
- otherwise build the slot with placeholders (`../ethics.md`, section 7): `[RATING]`, `[REVIEW COUNT]`, a lorem ipsum quote with `[CUSTOMER NAME]`, a labelled box for each logo, each inside a `data-placeholder` element with a visible style (the dashed outline for the data and logos, the lighter running-text mark for the quote), and list them in `content-needed.md`;
- removing the slot is the user's decision, recorded in `content-needed.md` as "discarded".

Never invent counts, logos, ratings or testimonials, even as examples (checklist LA8, CY3). Fake reviews and unauthorised logos are also illegal in the EU and the US.

| Type | Best for | Format |
|---|---|---|
| Customer logos | B2B | 5–8 logos, one color |
| Usage count | Consumer products, self-serve software | "Used by 4,127 designers", with the number real |
| Aggregate rating | Anything with reviews | Rating, review count and platform ("4.8 on Google, 312 reviews") |
| Press | Consumer brands | 3–5 outlets, only if they really covered it |
| One micro-testimonial | New products, local businesses | Short quote with name, role or neighbourhood, and photo if permitted |

Precise numbers read as more credible than round ones for small counts; round numbers suit very large scales. A perfect 5.0 rating tends to raise suspicion; show the real figure.

## Layout per device

| | Phone | Tablet | Desktop |
|---|---|---|---|
| Logos | 2–3 per row in a wrapped grid, or a horizontally scrollable row with a visible edge | One row of 4–6 | One row of 5–8 |
| Rating or count | One line, under the CTA or right below the hero | Same | Same, or beside the CTA |
| Position | Right below the hero so it peeks into the first screen | Same | Same |
| Spacing | 24–32 px between logos | 32–40 px | 32–48 px; 32–64 px from the hero CTA |

Logo container about 24–40 px tall. Equalise **visual weight**, not width: a wide wordmark and a square mark need different sizes to look equal. Label ("Trusted by teams at") 12–14 px in a muted color that still meets contrast.

## States and interaction

- Avoid auto-scrolling logo marquees. When one is unavoidable: slow, paused on hover and focus, stopped under `prefers-reduced-motion`, with a pause control if it moves for more than 5 seconds.
- Links to review platforms open the real source.

## Accessibility

- Logos are images with the company name as `alt` text, or a list with visually hidden names.
- A rating says its scale and source in text, not only stars.

## Critical errors

- Fake or unauthorised logos, invented counts, stock photos presented as customers.
- Logos of companies that only tried a free plan, presented as clients.

## Common errors

- Vague claims ("thousands of happy customers") instead of a number with a source.
- A fast marquee that ignores reduced motion.
- Mixing colored and single-color logos.

## Level-up

- Match logos to the audience: show logos from the visitor's own sector when traffic is segmented.
- Prefer third-party ratings (Google, Trustpilot, app stores) over self-hosted quotes; visitors discount claims made on the page itself.
- The proof row is also a layout tool: it creates the peek below the hero that invites scrolling.

## Generic-pattern watch

LA8 (stat banner), CY3 (placeholders and unverifiable claims), CP4 (decoration instead of proof), MO2 and MO4 (marquees, reduced motion).

## Style notes

Quiet and small in most directions. Editorial pages can set one strong pull quote instead of logos. Bold directions may enlarge a single number, as long as it is real.
