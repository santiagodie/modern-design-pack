# Conversion mechanism (forms, sign-up, checkout)

> **Covers:** Forms inside a page: fields, labels, errors and submission: job, when it applies, content, layout per device, states and interaction, accessibility, critical and common errors, level-up, generic-pattern watch and style notes.
> **Read when:** step 3 of `modern-design`, when building or restyling this section; `design-review` may read it to check it.
> **Not here:** which sections a page needs → references/ui/sections/index.md; token values → references/ui/tokens.md; the phone, tablet and desktop baseline → references/engineering/responsive.md; forms as a page type → references/ux/pages/interaction-creation.md
> **Owner:** modern-design
> **Sources:** the author's landing field guide (docs/research/landing-field-guide/, MIT), written in our own words; full list in docs/SOURCES.md

Reference for `modern-design`, step 3. `design-review` may also read it to check this component.

## Job

Turn intent into action with the least friction, collecting only what's needed.

## When it applies

Every page that persuades needs a mechanism: a form, a sign-up, a checkout, or a direct action (call, message, book). A direct action is a real link (`tel:`, `https://wa.me/`, `mailto:`, a booking page) that works without JavaScript. When there are several channels, name them as in `cta.md` ("Book by WhatsApp", "Book by phone"). Pages that operate use the same rules for data entry.

## Content

- Ask for the minimum now; collect the rest later. Fewer fields usually raise completion, and the type of field matters more than the count: long text areas and dropdowns cost the most.
- Ask of every field: what would we do differently with this answer? If nothing, remove it.
- One column. Labels **above** the fields; placeholders are never labels.
- Mark the minority: usually "optional" on the few optional fields.
- The submit label states the outcome ("Get my quote", "Send order"), never "Submit".
- Under the button: privacy or consent wording, and what happens next ("We'll confirm by message within the day").
- Multi-step forms: show progress ("Step 1 of 3"), keep each step to 1–3 fields, easiest question first.
- For high-value sales leads, a longer qualifying form can be right; make it feel shorter with steps rather than dropping the questions.

## Layout per device

| | Phone | Tablet | Desktop |
|---|---|---|---|
| Width | Full width inside the side padding | Max about 480–560 px | 320–480 px; never stretched across the page |
| Fields | `--control-height-touch`, at least `--target-touch` (44 px) tall; font 16 px or more | Same; two short related fields side by side (postcode and city) only when both stay readable | `--control-height` with a fine pointer, never under `--target-min` (24 px) |
| Keyboard | Right `type`, `inputmode`, `autocomplete` and `enterkeyhint`; the submit button stays reachable when the keyboard is open | Same; hardware keyboards are common | Logical tab order |
| Position | Inline for small offers; a separate step or screen for big ones | Same | Beside the reassurance or proof |
| Spacing | Label to field 6–8 px; field to field 16–24 px; last field to button 24–32 px | Same | Same |

## States and interaction

| State | Treatment |
|---|---|
| Focus | Visible ring, at least 3:1 contrast |
| Error | Shown on blur or submit, not on every keystroke; next to the field; text plus icon, never color alone; says how to fix it ("Enter an email like name@example.com") |
| Submitting | Button keeps its label with a spinner, width locked, double submits prevented |
| Success | A clear end state with the next step: this is the last impression |
| After an error or refresh | Data is kept |

Hover styles only behind the hover-capability query; `:active` feedback on the submit button.

## Accessibility

- Each input has a `<label>` linked by `for` and `id`; errors are linked with `aria-describedby` and fields marked `aria-invalid`.
- Long forms show an error summary at the top that links to each field.
- `autocomplete` on personal data, and no re-typing of information already given (WCAG 2.2 Redundant Entry).
- Password fields allow paste and password managers; no cognitive puzzles (WCAG 2.2 Accessible Authentication).

## Critical errors

- Asking for a phone number with no reason to call.
- Puzzle CAPTCHAs on a lead form; use honeypots, timing checks or invisible challenges.
- Pre-ticked marketing consent (illegal under GDPR).
- Losing everything after a validation error or a refresh.
- Requiring an account before buying.

## Common errors

- Separate first and last name when one "Full name" works.
- Dropdowns for 2–4 options; use radio buttons or a segmented control.
- "Confirm email" fields.
- Password rules shown only after failure.
- Inputs under 16 px, so iOS zooms the page on focus.

## Level-up

- "Continue with Google" or similar as the first option for software sign-ups.
- Two-step opt-in: a button opens a one-field form; the click is a small first commitment.
- Wallet payments (Apple Pay, Google Pay) at checkout.
- A small proof or reassurance element next to the form (a quote, response time, security note).
- Track starts and completions per field; the field with the most abandonment is the next fix.

## Generic-pattern watch

SF2 (no empty or error state), SF3 (silent actions), SF4 (small targets), SF5 (focus), SF7 (mobile form friction), MN2 (inputs under 16 px).

## Style notes

Forms are where style yields to clarity. Even in bold directions, keep labels visible, borders at 3:1 contrast and errors in plain text.
