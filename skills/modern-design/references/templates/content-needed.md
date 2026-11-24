# Template: content-needed.md

Template for `modern-design`. Copy it to the project root as `content-needed.md` the first time a build uses a placeholder (see `../ethics.md`, section 7), write it in the user's language, and keep it up to date in every step. `design-review` reads it when it exists.

## Rules

- One row per missing item. When the same item appears in several places (the phone in the header and the footer), use one row and list every place.
- **Placeholder used:** the exact placeholder and its `data-placeholder` value, so a search finds every occurrence.
- **Model's assumption:** a guess only when there is a basis for it (a public listing, a document the user gave), with that basis, marked "assumption: confirm" in the user's language. Otherwise "none". Assumptions live only in this file, never on the page.
- **Status:** `pending` (waiting for the user), `confirmed` (the real value is on the page and the placeholder is gone) or `discarded` (the user decided to drop the item or its section).
- When a value is confirmed, replace every occurrence on the page, remove its `data-placeholder`, add it where it was held back (structured data, meta, `tel:` and map links), and change the status.

## Template

```markdown
# Content needed: <project>

Updated: <YYYY-MM-DD>

Nothing below is on the page as a fact. Each item shows as a marked placeholder until it is confirmed.

| # | What is missing | Where (page › section) | Placeholder used | Model's assumption | Status |
|---|---|---|---|---|---|
| 1 | <for example: Saturday opening hours> | <Home › Where and when; Footer> | <`[HOURS: Saturday]`, data-placeholder="hours-saturday"> | <assumption: confirm — 8:00–14:00, from the shop's public listing> or none | pending |
| 2 | <for example: photo of the shop front> | <Home › Hero> | <`[PHOTO: shop front]`, 4:3 box, data-placeholder="photo-shop-front"> | none | pending |
```
