# Content truth: no invention (hard limit)

> **Covers:** the no-invention rule, the three possible sources of every visible or indexed text, business questions, placeholders and how to mark them, and the content-needed file.
> **Read when:** every build, every page, every step and mode; before writing any text a visitor or a search engine reads.
> **Not here:** persuasion and legal limits → references/ethics.md; evidence for claims inside the references → references/evidence.md; the content-needed template → references/templates/content-needed.md
> **Owner:** shared core (lives in modern-design)
> **Sources:** our own, from the no-invention tests (docs/examples/no-invention-results.md, docs/examples/no-invention-2-results.md)

Reference for `modern-design` and `design-review`. This is a hard limit at the same level as [`ethics.md`](ethics.md): nothing on the page may present as a fact about the business something nobody supplied, and it applies to every build, page, step and mode.

> **Order of authority:** ethics (`ethics.md` and `content-truth.md`, hard limits) > `site-decisions.md` (what exists and what the user decided) > `design-brief.md` > `reasoning.md` (method for writing the brief) > the other references (`principles.md`, `pages/`, `sections/`, `implementation.md` and the rest, consulted afterwards). When two disagree, the higher one wins; a user decision that breaks either hard limit is declined with the reason.

## The rule

The model never invents or assumes content that a visitor would take as a fact about the business: prices, figures and statistics, texts that describe the business (its story, its products, its team) or how it works (the services it offers, such as orders or delivery), reviews and testimonials, client names and logos, opening hours, addresses and phone numbers, legal details in the footer (company name, tax ID, registry entry), and photographs. This holds in every page, every step and every mode, and nothing ranks above it.

- **When the user asks for invented content** ("make up some reviews", "put a plausible price", "write a history for the shop"), decline that part and say why in one or two sentences: the page would present as true something nobody has checked, which misleads visitors and, for reviews and prices, is illegal in the EU and the US. Then offer what helps: placeholders, a list of what to collect, or copy written from facts the user supplies.
- **Content is every text a visitor or a search engine reads:** sentences, headings, labels, button and link text, image labels and `alt` text, the `title`, the meta description and structured data. A claim about the business can sit in any of them, stated or only implied.
- **Each visible or indexed text has one of three sources:** a fact the user or the project supplied, which copy may phrase and order (persuasive copy included); a placeholder; or interface text that claims nothing about the business (navigation, buttons such as "Call" or "Get directions", form hints, error messages, neutral section labels such as "Hours", "Products" or "Where we are"). A text with none of the three is invented: rewrite it as neutral text, or turn the fact inside it into a placeholder.
- **A new fact inside a sentence is data, not copy,** also when the sentence only presupposes it. Frequency, origin, figures, guarantees, shipping, delivery times, ingredients, awards: when the user didn't supply it, the sentence carries a placeholder for it ("fish delivered [FREQUENCY]"), or it goes to `content-needed.md` as a proposal, never onto the page. On a fishmonger's page, "Fresh from the port every morning" states a claim; on a florist's, "Ask what's still available this afternoon" presupposes that stock runs out daily; on a café's, "Meet the roasters" over a photo labelled "roasting room" presupposes they roast their own coffee. Write each only when the user said so.
- **An unconfirmed service is a question, not an assumption.** Orders, delivery or shipping, an on-site workshop, bookings, pickup, a loyalty card: when the user hasn't confirmed it, the section the brief plans for it may be designed and built, but its heading, its labels and the navigation and buttons that lead to it are neutral or placeholders (`[ORDERS SECTION: heading]`, not "Order by phone"), and the service stays out of the `title`, the meta description and structured data. The question goes to `content-needed.md` as a business-question row listing the sections that depend on it. When the answer is no, those sections are removed, with status "discarded".
- **Country and jurisdiction are a standard business question.** The legal pages and their required fields, the cookie requirements, `og:locale` and `hreflang` depend on where the business is and which law applies, and the user's language doesn't settle it (Spanish or English is spoken in many countries). Until the user confirms it, set `lang` from the user's language, leave out any country-specific `og:locale` and `hreflang`, build the legal pages and the footer's legal line with placeholders, and add the question to `content-needed.md` with those dependent parts.
- **What the model may write besides that:** design decisions and design assumptions (audience, devices, where traffic comes from) in `design-brief.md`. Facts about how the business works are never assumed in the brief; they are questions in `content-needed.md`.

## Placeholders

Use a placeholder wherever real content is missing, so the layout is built and tested at its real size:

| Missing | Placeholder | Example |
|---|---|---|
| A datum (price, phone, address, hours, figure, name, tax ID) | The field's name in capitals between brackets, in the page's language | `[PRICE]`, `[PHONE]`, `[HOURS: Saturday]` |
| Running text (description, story, testimonial body) | Lorem ipsum of the length the real text should have | A three-line product description gets three lines of lorem ipsum |
| An image | A box with the final aspect ratio and a label naming the picture | `[PHOTO: shop front]`, in a 4:3 box |

- Wrap every placeholder in an element with `data-placeholder="<field>"` and give it a visible style, so nobody can mistake it for real content in a screenshot. Use two levels, so a page full of placeholders still reads as a design:
  - **Data and images** (bracketed fields, image boxes): a dashed outline, for example `[data-placeholder] { outline: 2px dashed currentColor; outline-offset: 2px; }`.
  - **Running text** (lorem ipsum blocks): a lighter mark, a faint background tint or a line down the side, on elements that also carry `data-placeholder-kind="text"`, for example `[data-placeholder-kind="text"] { outline: none; box-shadow: inset 3px 0 0 currentColor; padding-inline-start: 0.75em; }`.
  - Both levels keep the `data-placeholder` attribute, so a search for it still finds every one.
- Never use stock photos or generated images presented as the business's own. A labelled box is the placeholder.
- Keep machine-read places clean: no placeholder and no unconfirmed claim in the `title`, the meta description, structured data, `tel:`, `mailto:` or map links. A meta description or `title` written before the facts arrive says only what is confirmed (for example the kind of business). Add the rest when the real values arrive, and list them in `content-needed.md`.
- A button or link whose destination is a placeholder (a phone number, a map link, a booking page, an e-mail address) never promises an action that doesn't work. Either it leads to the section where that placeholder is shown (an anchor such as `#where`, with a label that stays true, such as "Get directions"), or it is shown as a placeholder itself: a non-link element with `data-placeholder`, styled so it doesn't pass for a working button. No `tel:`, `mailto:`, `href="#"` or made-up URL meanwhile. When the value arrives, it becomes the real link (`sections/cta.md`).
- A section the brief plans but has no data for is designed and built with placeholders, never dropped. Removing it is the user's decision; record it in `content-needed.md` with status "discarded".

## content-needed.md

Every build that uses a placeholder writes `content-needed.md` in the project root, from `templates/content-needed.md` in this folder, and keeps it up to date: what is missing, where it goes (page and section), the placeholder used, and its status. It has two kinds of row: missing content, and questions about how the business works, each with the sections that depend on it. The model's guesses live only in this file, never on the page, in the user's language:

- **"assumption: confirm"** ("suposición: confirmar"): a guess with a basis, such as a public listing or a document the user gave, named next to it.
- **"proposal: confirm"** ("propuesta: confirmar"): a suggestion without a source, such as a line of copy or a likely answer to a business question, offered so the user can accept it quickly. It reaches the page only after the user confirms it.
