# Template: content-needed.md

Template for `modern-design`. Copy it to the project root as `content-needed.md` the first time a build uses a placeholder or has an open question about the business (see `../content-truth.md`), write it in the user's language, and keep it up to date in every step. `design-review` reads it and adds the claims it finds.

## Rules

- One row per missing item. When the same item appears in several places (the phone in the header and the footer), use one row and list every place.
- **Type:** `content` for a missing value, text or image; `business question` for a fact about how the business works that the page would otherwise presuppose (do they take orders, deliver, make or repair on site, take bookings, which country's law applies). Never assume the answer in the brief or on the page: until it arrives, the dependent sections use neutral headings or placeholders (`../content-truth.md`).
- **Sections that depend on it:** for a business question, every section, heading, nav link, button and metadatum that changes or disappears with the answer. For content, "—".
- **Placeholder used:** the exact placeholder and its `data-placeholder` value, so a search finds every occurrence. For a business question, the neutral heading or placeholder used meanwhile.
- **Model's guess:** one of three, in the user's language:
  - `assumption: confirm`, with its basis (a public listing, a document the user gave);
  - `proposal: confirm`, a suggestion without a source (a line of copy, a likely answer), offered to save the user time;
  - `none`.
  A guess lives only in this file, never on the page, until the user confirms it.
- **Status:** `pending` (waiting for the user), `confirmed` (the real value is on the page and the placeholder is gone) or `discarded` (the user decided to drop the item or its section, or answered no to a business question).
- When a value is confirmed, replace every occurrence on the page, remove its `data-placeholder`, add it where it was held back (structured data, meta, `tel:` and map links), and change the status. When a business question is answered yes, write the real headings and labels in the dependent sections; when it is answered no, remove them.

## Template

```markdown
# Content needed: <project>

Updated: <YYYY-MM-DD>

Nothing below is on the page as a fact. Each item shows as a marked placeholder or a neutral heading until it is confirmed.

| # | Type | What is missing or what to ask | Where (page › section) | Sections that depend on it | Placeholder used | Model's guess | Status |
|---|---|---|---|---|---|---|---|
| 1 | content | <for example: Saturday opening hours> | <Home › Where and when; Footer> | — | <`[HOURS: Saturday]`, data-placeholder="hours-saturday"> | <assumption: confirm — 8:00–14:00, from the shop's public listing> or none | pending |
| 2 | content | <for example: photo of the shop front> | <Home › Hero> | — | <`[PHOTO: shop front]`, 4:3 box, data-placeholder="photo-shop-front"> | none | pending |
| 3 | business question | <for example: do you make home visits? If so, in which areas and how are they booked?> | <Home › Home visits> | <Home visits section and its heading; "Home visits" nav link; meta description> | <neutral heading `[HOME VISITS SECTION: heading]`, data-placeholder="home-visits-heading"> | <proposal: confirm — home visits within the town, booked by phone> or none | pending |
| 4 | business question | <for example: in which country is the business, and under which law do the legal pages go?> | <Legal notice; Privacy; Footer> | <legal pages and their required fields; footer legal line (tax ID label); cookie banner and its requirements; `og:locale` and `hreflang`> | <legal pages built with placeholders; `lang` from the user's language; no country `og:locale` meanwhile> | <assumption: confirm — Spain, from the user's address on the invoice they shared> or none | pending |
```
