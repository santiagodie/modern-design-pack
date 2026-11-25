# Regression check

> **Covers:** checking that a change to an existing page keeps everything the page had: an inventory before, an inventory after, the comparison, and what counts as a finding.
> **Read when:** before any change to a page that already exists (a redesign, a restyle, a new section, a fix during review), whether the change comes from `modern-design` or from this skill; when reviewing a redesign; when the user gives two URLs of the same page (live and preview).
> **Not here:** how to review and the levels → references/review-method.md; screenshots, widths and how to run the scripts → references/visual-qa.md; claims in changed text → references/copy-states-checklist.md (CY3)
> **Owner:** design-review
> **Sources:** adapted from Hallmark sloplint --before / --kept and `redesign.md` (MIT, commit 04977e1); the scripts are our own

> **Order of authority:** ethics (`ethics.md` and `content-truth.md`, hard limits) > `site-decisions.md` (what exists and what the user decided) > `design-brief.md` > `reasoning.md` and `design-reasoning.md` (method for writing the brief) > the other references (`principles.md`, `pages/`, `sections/`, `implementation.md` and the rest, consulted afterwards). When two disagree, the higher one wins; a user decision that breaks either hard limit is declined with the reason.

Screenshots show how a page looks. They don't show that a link, a field or a heading went missing while it was being rebuilt, and those losses are what visitors and search engines notice first. This check records the page's wiring before the change and compares it afterwards.

## 1. When to use it

**Rule:** run it for any change to a page that already exists, before touching the code: a redesign or restyle in `modern-design`, a section added or rebuilt, a fix that edits markup during a review, and a review of someone else's redesign. In a URL audit, run it only when the user gives two URLs of the same page (the live page and a preview); both runs stay read-only.

**Why:** a rebuild changes markup in many places at once. The losses it causes (a footer link, a hidden field a payment provider needs, an `h1`) don't show in a screenshot and break things outside the page: bookmarks, forms that post somewhere, search results.

**When it flips:** a new page with no earlier version has nothing to compare. A change to CSS alone can't remove an element, so it needs only the screenshots.

**Source:** adapted from Hallmark sloplint --before / --kept (MIT, commit 04977e1).

## 2. How to run it

**Rule:**

1. **Before.** Serve the page as it is (`visual-qa.md`, "Serve over HTTP"), open it, set reduced motion, resize to 1440 × 900 and run `scroll-check.js`. Open any menu, tab or disclosure whose links should be counted. Then pass `scripts/inventory.js` to `playwright-cli --raw eval` (`visual-qa.md`, "How to run the scripts") and save the output as `inventory-<page>-before.json` in the screenshot folder. Take the before screenshots at the same time.
2. **Change** the page.
3. **After.** Open the same path at the same width, repeat the same steps and save `inventory-<page>-after.json`.
4. **Compare** with `scripts/inventory-diff.js`, run with Node outside the page, with the before file first and the after file second. From another skill, the script is at `${CLAUDE_SKILL_DIR}/../design-review/scripts/inventory-diff.js`. It prints `lost`, `changed` and `added`, and exits with 1 when `lost` is not empty.
5. **Several pages:** one pair of inventories per page, compared page by page.

**Why:** the same width, the same path and the same open menus make the two inventories comparable; a difference then means the page changed, not the setup.

**When it flips:** when the page renders different navigation on phones (a menu that only exists at 375 px), take a second pair at 375 px. When the before page can't be served any more, say so: the check can't run, and the review notes record it.

**Source:** our own procedure; the inventory and the comparison are our scripts.

## 3. What is a finding

**Rule:** everything in `lost` is a Floor finding (`review-method.md` §8): blocking, `measured`, reported under Critical issues in the review notes with the item and the inventory files as evidence. The fix is to restore it. The one exception is an item the user removed on purpose, recorded in section 3 of `site-decisions.md` with the date, the item and the reason: list it under "Removed on purpose", not as a finding. The model never records a removal on its own: when a loss looks intended, ask the user; when nobody can answer, restore it and list it as a proposal.

What `lost` covers: a link destination (a link whose `href` changed shows as the old one lost and the new one added), a form, a form's `action` or `method`, a field (by `name`, else `id`, else type and label), a button, a heading, a landmark, the `title` and the meta description.

**Why:** each of these is a promise the page made to someone else: a bookmark, a form handler, a test, a search snippet, a screen-reader user's way around the page.

**When it flips:** a heading or a link that only existed to hold a placeholder (`data-placeholder`) and was replaced by the real content shows as changed, not lost; when it shows as lost, check the replacement before reporting.

**Source:** adapted from Hallmark sloplint --kept and `redesign.md` "After" (MIT, commit 04977e1); the "removed on purpose" record in `site-decisions.md` replaces Hallmark's stamp in the CSS.

## 4. What is not a finding

**Rule:** report `changed` as changes, not losses: the item, the text before and the text after (a link's words, a field's label, a heading reworded, a new title). Report `added` as additions. Neither is a finding by itself, with two exceptions that the usual checks catch: changed or added text that states something about the business goes through the claims review (CY3), and a new form needs a real endpoint (SF10).

**Why:** a redesign is expected to change words; calling every new heading a loss would bury the one real loss under noise.

**When it flips:** a change of meaning in a legal or consent text (terms, a disclaimer, a consent label) is reported as a finding for the user to confirm, since those words carry obligations.

**Source:** our own rule.

## 5. Limits and reporting

**Rule:** the inventory reads the page as rendered at one width. It doesn't see script handlers, test hooks (`data-testid`) or selectors that scripts query; in own-project mode, also search the code diff for removed `id`, `name`, `data-testid` and event handlers, and run the project's own build and tests. Report the check in the review notes as one block: kept per kind (for example "links 26 of 26, fields 4 of 5"), then lost, removed on purpose, changed and added, with the paths of the two inventory files.

**Why:** a clear count tells the owner at a glance whether the change kept the page's wiring.

**When it flips:** in a URL comparison of live and preview, there is no code diff: say which parts couldn't be checked.

**Source:** adapted from Hallmark `redesign.md` "After" (MIT, commit 04977e1).
