# Blog & resources pages

Article list · Article / Post · Documentation

Entry format and evidence grades: see the header of `entry-marketing.md`. P-IDs → `../principles.md`.

Persuasion dial for this group: medium for blog content, none for documentation. This is where writing principles (one specific reader, value/time ratio, each paragraph earns the next, honest curiosity, specificity, cutting the fluff) apply most directly.

Group summary: dominant phase capture; principles that weigh most P01, P05, P06, P07; main risk: clickbait, filler.

> **Order of authority:** ethics (`ethics.md` and `content-truth.md`, hard limits) > `site-decisions.md` (what exists and what the user decided) > `design-brief.md` > `reasoning.md` and `design-reasoning.md` (method for writing the brief) > the other references (`principles.md`, `pages/`, `sections/`, `implementation.md` and the rest, consulted afterwards). When two disagree, the higher one wins; a user decision that breaks either hard limit is declined with the reason.

---

## Article list / Blog index

**Persuasion dial:** medium.
**3C weight:** Cap 3.

### The moment
The reader is choosing what to read, scanning titles in seconds. Question: "which of these is worth my time, and will it actually answer what I want?".

### Must prove or protect
That each title is an honest promise the article keeps. Clickbait that doesn't pay off breaks trust in every future title.

### Levers
- Specific titles (P07); honest curiosity (P06).
- Capped cost (P04): reading time.
- Grouping and filtering by topic or problem (P10).

### Specifics
- [C] Titles that name a specific object, number or outcome outperform category labels ("Our thoughts on pricing").
- [C] Show date and reading time; show "updated on" when content has been revised.
- [A] NN/g eye-tracking: users scan rather than read; the first words of each title carry most weight (see F-pattern research).

### 🔴 Critical errors
- Titles promising what the article doesn't deliver.

### 🟠 Common errors
- Lists ordered only by date when readers come with problems; offer topic entry points.
- Decorative thumbnails that say nothing about the content.

### ↔ When the usual advice flips
- **Newsrooms and changelogs:** chronology *is* the value; date-first is right.

### Signal it's working
Click-through from the list; full reads; returning readers.

### Implementation
- **Static:** yes.
- **Rendering:** static, regenerated when a CMS publishes.
- **Data and state:** posts as a typed collection; static pagination pages; tag archives and RSS generated at build; the same card system as other listings.
- **Anti-patterns:** client-side pagination with no URLs.

---

## Article / Post

**Persuasion dial:** medium (a contextual CTA after delivering value).
**3C weight:** Cap 3 / Conf 2 / Conv 1.

### The moment
The reader arrived with a question, often from search or a link. They decide within seconds whether this page will answer it, then read line by line, ready to leave at any boring sentence.

### Must prove or protect
The title's promise, as early as possible.

### Levers
- Answer first (P01): inverted pyramid; the main point in the first paragraph.
- Each paragraph earns the next (P05).
- Specificity (P07); credibility through author, date and sources (P12).
- Reciprocity (P15): give value before any ask.

### Specifics
- [A] NN/g: web users mostly scan; front-load headings and paragraphs with the information-carrying words; use the inverted pyramid. https://www.nngroup.com/articles/inverted-pyramid/
- [C] Short paragraphs, descriptive subheadings that stand alone, examples instead of abstractions.
- [C] Author with real credentials and publication/update dates matter most in health, finance and legal topics.

### 🔴 Critical errors
- Pop-ups or email walls before the reader has received any value.
- Outdated advice presented without a date.

### 🟠 Common errors
- Introductions that restate the title or explain why the article was written.
- "Interesting but irrelevant" sections (the hardest fluff to cut).

### ↔ When the usual advice flips
- **Narrative or opinion pieces:** a story-led opening is fine, but a concrete, surprising fact must appear early.
- **Reference-style evergreen articles:** a table of contents and jump links serve returning readers better than narrative flow.

### Signal it's working
Scroll depth; time on page relative to length; contextual CTA conversion; search refinements after reading (a sign it didn't answer).

### Implementation
- **Static:** yes.
- **Rendering:** static; interactive embeds and comments as islands loaded later.
- **Data and state:** Article structured data, canonical URL and share image generated at build; a table of contents from stable heading anchors; code highlighted at build time; prerender the next article.
- **Anti-patterns:** rendering Markdown in the browser; a runtime syntax highlighter.

---

## Documentation

**Persuasion dial:** none.
**3C weight:** Act 3 / Conf 3.

### The moment
A developer or user is trying to do something specific, often blocked and under time pressure. They're not reading for pleasure; they're scanning for the answer, the example, or the exact parameter.

### Must prove or protect
That the product is usable as promised: the shortest path from question to working result.

### Levers
- Task orientation (P01).
- Conventions (P09): search, left navigation, copyable code.
- Speed (P03), especially search.
- Specificity (P07): runnable examples, exact versions.
- Credibility (P12): version, last updated.

### Specifics
- [A/C] Diátaxis framework: four types of documentation for four user needs — tutorials (learning), how-to guides (doing a task), reference (looking up facts), explanation (understanding). Mixing them in one page is the most common cause of confusing docs. Adopted by Canonical/Ubuntu and discussed for adoption by Python's documentation community. https://diataxis.fr/
- [B] Stripe's documentation front page carries almost no marketing: guides and examples to integrate.
- [C] Every code sample should be copyable and runnable as shown; state prerequisites at the top.

### 🔴 Critical errors
- Examples that don't run, or that use outdated API versions without saying so.
- Marketing language inside how-to guides.

### 🟠 Common errors
- Tutorials that digress into exhaustive reference.
- Search that doesn't cover API reference or error messages.

### ↔ When the usual advice flips
- **Non-technical help centres:** task-oriented articles with screenshots and plain language beat a Diátaxis split; see `support-contact.md`.

### Signal it's working
Searches with no results; time to first successful integration; support tickets that the docs should have answered.

### Implementation
- **Static:** yes.
- **Rendering:** static (a docs generator or a hosted docs platform).
- **Data and state:** versioned content; a static or hosted search index; `llms.txt` and a Markdown version of each page for agents; pages that stand on their own; stable anchors and redirects on renames; API reference generated from types or OpenAPI; last-updated from version control.
- **Anti-patterns:** renamed pages with no redirect; content that only renders with JavaScript.
