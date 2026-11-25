# Footer

> **Covers:** The footer: job, when it applies, content, layout per device, states and interaction, accessibility, critical and common errors, level-up, generic-pattern watch and style notes.
> **Read when:** step 3 of `modern-design`, when building or restyling this section; `design-review` may read it to check it.
> **Not here:** which sections a page needs → references/ui/sections/index.md; token values → references/ui/tokens.md; the phone, tablet and desktop baseline → references/engineering/responsive.md; legal pages and the consent banner → references/ux/pages/legal.md; legal details that are missing → references/content-truth.md
> **Owner:** modern-design
> **Sources:** the author's landing field guide (docs/research/landing-field-guide/, MIT), written in our own words; full list in docs/SOURCES.md

Reference for `modern-design`, step 3. `design-review` may also read it to check this component.

## Job

Meet legal obligations, offer a last route to contact or act, and support navigation without distracting.

## When it applies

Every public page. App screens that operate usually need only a minimal footer or none.

## Content

**Legal minimum for businesses in the EU and Spain:**

- Legal notice (in Spain, required by the LSSI-CE: company name, tax ID, registered address, contact email, registry details).
- Privacy policy (GDPR).
- Cookie policy, plus a "Cookie settings" link that reopens consent, when the site sets cookies or similar storage that need consent (analytics, ads, embedded videos or maps). When it sets none, a short cookie or privacy note saying so is enough, with no settings link. Third-party requests that set no cookies (such as a web font) still belong in the privacy policy.
- Terms and conditions when you sell or offer a service.
- Accessibility statement: recommended, and increasingly expected under the European Accessibility Act.

**By page type:**

| Page | Footer |
|---|---|
| Paid campaign landing page | Minimal: legal links, copyright, contact email. No navigation. |
| Product homepage | A full footer: product, company, resources, legal, social, language, optionally a newsletter field. |
| Local business | Address, hours, phone, map link, legal links. A physical address is a strong trust signal. |

In builds without real data, use placeholders for legal details and contact information (`[COMPANY NAME]`, `[TAX ID]`, `[ADDRESS]`, `[PHONE]`, each in a `data-placeholder` element; see `../../content-truth.md`) and list them in `content-needed.md`. Never invent a tax ID, address or registry entry.

## Layout per device

| | Phone | Tablet | Desktop |
|---|---|---|---|
| Columns | Stacked lists; accordions only for large footers | 2–3 columns | 4–5 columns |
| Links | Each at least `--target-min` (MUST), or spaced as WCAG 2.5.8 allows; padding to reach `--target-touch` when a link is a main way out of the page (SHOULD) | Same | At least `--target-min`, with padding |
| Text | `--text-small`, contrast at least 4.5:1 | Same | Same |
| Padding | `--space-section` vertical (its phone size), plus `env(safe-area-inset-bottom)` when content touches the bottom edge | `--space-section` | `--space-section` |

## States and interaction

- Link hover behind the hover-capability query; `:active` feedback on touch.
- Generate the copyright year dynamically when the page has JavaScript or a build step. On a static page with neither, write the year at build time, or a range ("2024–2026"), and add a comment saying it needs updating.
- Social links point only to active profiles.

## Accessibility

- A `<footer>` landmark; link groups with headings or `aria-label`.
- Muted footer text still meets 4.5:1: it is one of the most common contrast failures.

## Critical errors

- No legal notice, privacy or cookie links.
- Footer links so light they fail contrast.

## Common errors

- An outdated copyright year.
- Social icons linking to dead profiles.
- A full mega-footer on a campaign page, which adds exits at the end of the funnel.
- Tiny tap targets packed together on phones.

## Level-up

- A compact final action or newsletter field on product homepages.
- Trust signals (payment methods, certifications) in the bottom row for shops.
- A status page link for software products.
- Different footer templates per page type: internal links help a product site's SEO, but on a campaign page each link is a leak.

## Generic-pattern watch

CO5 (low contrast), SF4 (small targets), ME1 (default favicon and missing meta), CY3 (placeholder legal data presented as real).

## Style notes

Quiet in almost every direction. Bold directions can end with a large wordmark or a strong color band, as long as the legal links stay readable.
