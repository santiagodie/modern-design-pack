# Phase 3a results: the direction step

Date: 2026-11-23. Only `modern-design/references/direction.md` has content; tokens, components and motion ran on the model's default judgment, following the brief. Each project was built in one non-interactive session (`/modern-design-pack:modern-design`, no questions allowed) and then reviewed in a second one (`/modern-design-pack:design-review`, own-project mode).

| Test | Prompt | Brief | Review notes |
|---|---|---|---|
| Bakery landing (same prompt as phase 2) | "Create a landing page for a bakery in this folder, in static HTML and CSS." | [design-brief.md](bakery/design-brief.md) | [review-notes.md](bakery/review-notes.md) |
| Veterinary clinic internal dashboard | "Create an internal dashboard for a veterinary clinic in this folder, in static HTML, CSS and JavaScript." | [design-brief.md](vet/design-brief.md) | [review-notes.md](vet/review-notes.md) |

The briefs and notes are in Spanish because the prompts were. Screenshots are listed at the end.

## Bakery: does it still look like a template?

No. Compare [phase 2 after review](../screenshots/bakery-after-1440.jpg) with [phase 3a](screenshots/bakery-1440.jpg).

| | Phase 2 (no direction step, after review) | Phase 3a (with direction step, after review) |
|---|---|---|
| Structure | Split hero, dark band with three values, four product cards, story with stats, three testimonials, call to action | First screen with an "out of the oven today" board of baking times; the bread as a counter list with flour, fermentation and price; the bakehouse; ordering in three real steps with a deadline; where and when, with a weekly table |
| Default sections | All of them | None. No stats or testimonials, because there are no real figures or reviews; the brief says so |
| Direction | Cream, Fraunces serif and terracotta, decided by default | "Pizarra de hornadas" (the bakery's baking-times board): cool flour-white base, condensed Archivo at weight 800 for headlines and times, a blue "rubber stamp" accent used only for actions, and a circular stamp mark |
| Bold element | None | The baking-times board, which is also the most useful information |
| Placeholders | Invented phone, address and reviews, marked only after review | Every missing fact in visible brackets from the start (neighbourhood, prices, address, phone, hours); name marked as provisional |
| Template test | The page could belong to any bakery | The brief states why it couldn't: the page is built on this shop's baking times and ordering deadline |

The brief explicitly rejected the "cream + serif + terracotta" combination that phase 2 produced, which is the direction step working as intended.

## Veterinary dashboard: does it adapt to "operate"?

Yes. The brief set the main job to **operate**, and everything followed from that: no hero, no marketing copy, no KPI cards. The page is a patient-flow board in five columns (waiting room, consultation, tests, hospitalised, ready for discharge), with a right rail for treatments due, lab results and today's appointments, plus search with a `/` shortcut, a vet filter, a night theme for overnight staff and a TV mode for the corridor screen. Direction "pizarra de pasillo" (corridor whiteboard): marker colors used only for meaning (red overdue or safety, amber due now, green ready, blue interactive), Atkinson Hyperlegible for legibility at a distance, a mono face only for times and doses, and every color paired with a word. All data is labelled as demo data.

## References used and principles extracted

The browser was not available for third-party sites in these sessions, so references were read as text with WebFetch and the briefs say that the visual comparison was skipped. The cause is the non-interactive test setup, not the skill: the same sessions used the browser on their own pages. Type scale and color strategy could not be taken from the references.

| Project | References | Principles taken |
|---|---|---|
| Bakery | Dobleuve Obrador, Madreamiga, Cientotreinta Grados, Tartine (one more failed to load) | Practical information (hours, address) deserves its own visible section; two clear actions from the first screen; state ordering deadlines in figures; put the story after the practical parts; avoid hiding hours behind navigation, and avoid carousels |
| Vet dashboard | Shepherd, Instinct, ezyVet, IDEXX Neo (one more redirected) | Low-glare neutral base for tired eyes; status carries the color, with one status vocabulary everywhere; the corridor whiteboard as the main metaphor; put what needs action first, with no vanity metrics |

## What design-review found afterwards

- **Bakery:** no generic patterns to remove. It made the sample times and menu visibly marked (they were marked only in HTML comments), resolved contradictory opening hours, reshaped a photo slot that took almost a full empty screen at 375 px, and added share meta tags. Its re-check caught two problems its own fixes had created (a long label overflowing at 375 px, a new link too short to tap) and fixed them.
- **Vet dashboard:** one critical issue, fixed. In TV mode the "ready for discharge" column was cut off, on a read-only screen where nobody scrolls. It also fixed status text breaking mid-phrase, small tap targets in the summary line and a gap in the side rail at 768 px. Its re-check caught an overflow its own fix had introduced. It left three design decisions for `modern-design` (see below).

## What still fails, by the reference that owns it

This decides what to write next.

**components.md (4 issues, write it next)**
1. Bakery: the missing photo is a large panel filled with diagonal stripes. That is decorative filler (CP4), and neither the build nor the review flagged it. It needs a placeholder pattern in the page's style.
2. Vet: every card ends in a full-width outlined action button, so the board repeats the same heavy control 12 times. It needs a lighter pattern for per-item actions.
3. Vet: at 768 px the board needs sideways scrolling to reach "ready for discharge". The review proposed stage buttons, a navigation pattern for boards on narrow screens.
4. Vet: in TV mode the treatments and agenda panels drop below the board, out of view on a screen nobody scrolls. It needs a layout pattern for read-only displays.

**tokens.md (2 issues)**
1. Bakery: vertical spacing between sections is large and uneven, with very tall gaps around the bakehouse section (judgment, from the screenshots). It needs a spacing scale with section rhythm.
2. Vet: "ready to review" lab results use the blue reserved for interactive elements, which breaks the color roles in the brief (flagged by the review). It needs semantic color tokens kept separate from the interactive color.

**motion.md (nothing observed)**
Neither build relied on motion: 150 ms hover on the bakery, and a 200 ms card move on the dashboard that wasn't checked in screenshots. These two contexts didn't really exercise motion, so they give no signal yet.

**direction.md (test setup)**
References were never seen visually. Re-test the reference step in an interactive session, where browsing external sites can be approved, before drawing conclusions about type and color extraction.

**Next:** `components.md`.

## Screenshots

| | |
|---|---|
| Bakery, phase 3a, after review (1440 px) | [bakery-1440.jpg](screenshots/bakery-1440.jpg) |
| Bakery, phase 3a, first screen (375 px) | [bakery-375-fold.jpg](screenshots/bakery-375-fold.jpg) |
| Vet dashboard, after review (1440 px) | [vet-dashboard-1440.jpg](screenshots/vet-dashboard-1440.jpg) |
| Vet dashboard, after review (375 px) | [vet-dashboard-375.jpg](screenshots/vet-dashboard-375.jpg) |
| Vet dashboard, night theme (1440 px) | [vet-dashboard-night-1440.jpg](screenshots/vet-dashboard-night-1440.jpg) |
| Bakery, phase 2, for comparison | [../screenshots/bakery-after-1440.jpg](../screenshots/bakery-after-1440.jpg) |

## Environment problems found

- The sessions left local servers running (`npx serve` on ports 5173 and 4173, started both while building and while reviewing). They kept the project folders locked until they were stopped by hand. `visual-qa.md` now asks to stop any server the session started. The build step has no equivalent rule yet; it belongs in `components.md`, which will cover previewing the work.

## Limitations

- One run per project, non-interactive, one model. A different run may choose a different direction.
- The emoji rule (CP2) wasn't triggered, because neither build used emoji.
- Lighthouse wasn't run on the two builds.
