# Legal pages

Terms & conditions · Privacy policy · Cookie policy (and consent banner)

Entry format and evidence grades: see the header of `entry-marketing.md`. P-IDs → `../principles.md`.

Persuasion dial for this group: none. Not legal advice: these entries cover how to design and present legal content, not what it must say. Content must be validated by a lawyer for each jurisdiction.

Group summary: dominant phase confidence; principles that weigh most P01, P12, P18, P23; main risk: opacity, forced consent.

> **Order of authority:** `ethics.md` (hard limit, including the no-invention rule) > `site-decisions.md` (what exists and what the user decided) > `design-brief.md` > `reasoning.md` (method for writing the brief) > the other references (`principles.md`, `pages/`, `sections/`, `implementation.md` and the rest, consulted afterwards). When two disagree, the higher one wins; a user decision that breaks `ethics.md` is declined with the reason.

The moment is similar on all three pages: most visitors skim or never come; the few who do are checking something specific ("can I cancel?", "do they sell my data?", "how do I refuse tracking?") and are often already suspicious. Clarity here is itself a trust signal.

---

## Terms & conditions

**Persuasion dial:** none.

### The moment
The user wants to check one specific commitment (cancellation, refunds, ownership of their content, liability) without reading 20 pages.

### Must prove or protect
That nothing important to the user is hidden here that wasn't said elsewhere.

### Levers
- Plain-language summary first (P01), full text below.
- Credibility (P12): effective date, change history.
- Accessibility (P18).

### Specifics
- [C] Layered structure: short summary of key points in plain language, then the binding text with a table of contents and anchors.
- [C] Key terms that affect money or rights (renewal, cancellation, refunds) must also appear at the point of decision (pricing, checkout), not only here — and must be consistent.
- [B/legal] Regulators treat hiding material terms as deception (FTC v. Amazon, 2025; proposed EU Digital Fairness Act).

### 🔴 Critical errors
- Material terms that contradict what the pricing or checkout pages say.
- Changes to terms with no advance notice to existing users.

### 🟠 Common errors
- Walls of capitalised text; no anchors; no date.

### ↔ When the usual advice flips
- **B2B master agreements:** clients' legal teams want the full text, downloadable and versioned, more than summaries.

### Signal it's working
Support questions about terms; disputes caused by misunderstood terms.

### Implementation
- **Static:** yes.
- **Rendering:** static.
- **Data and state:** versioned documents with an effective date and an archive of earlier versions; stable section anchors; the accepted version recorded per user (app); print-friendly styles.
- **Anti-patterns:** editing the live terms in place with no record of earlier versions.

---

## Privacy policy

**Persuasion dial:** none.

### The moment
The user wants to know what you collect, why, who you share it with, how long you keep it, and how to exercise their rights — usually one of those, fast.

### Must prove or protect
That their data is handled as they'd expect, and that their rights are easy to exercise.

### Levers
- Clarity and layering (P01, P05).
- Credibility (P12) through specificity (P07): named categories, named processors, concrete retention periods.
- Just-in-time notices at the point of collection.

### Specifics
- [A/legal] GDPR Art. 12 requires information to be concise, transparent, intelligible and easily accessible, in clear and plain language. The WP29 transparency guidelines (endorsed by the EDPB) recommend layered notices and "just-in-time" notices at the point of collection to avoid information fatigue. https://www.edpb.europa.eu/system/files/2023-09/wp260rev01_en.pdf · https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/the-right-to-be-informed/what-methods-can-we-use-to-provide-privacy-information/
- [B] Industry reporting indicates the EDPB's 2026 coordinated enforcement action focuses on transparency obligations (Arts. 12–14); monolithic notices without layering or just-in-time disclosures are a common gap. Verify current status before citing.
- [C] Layer 1: who you are, what you collect, why, with whom, how long, rights, contact. Layer 2: full detail. Links that let users exercise rights directly (access, delete, export).

### 🔴 Critical errors
- Vague purposes ("to improve our services") with no specifics.
- Rights that can only be exercised by post or by contacting support repeatedly.

### 🟠 Common errors
- A single monolithic document with no summary.
- No just-in-time explanation where data is collected (forms, permissions).

### ↔ When the usual advice flips
- **Products for children** require especially simple language and stricter defaults.

### Signal it's working
Privacy-related tickets; rights requests completed within legal timeframes.

### Implementation
- **Static:** yes.
- **Rendering:** static.
- **Data and state:** versioned like the terms; the list of processors and cookies generated from the same source as the consent manager.
- **Anti-patterns:** a policy that lists different cookies from the ones the site sets.

---

## Cookie policy and consent banner

**Persuasion dial:** none. Any persuasion here is a legal risk.

### The moment
The banner appears before the user has seen anything else and blocks their task. They want it gone. The page itself is visited by the few who want to change their choice or check what is tracked.

### Must prove or protect
That choosing privacy is as easy as accepting tracking, and that the choice is respected.

### Levers
- Defaults that protect (P23): nothing non-essential on by default.
- Symmetry: rejecting costs no more than accepting.
- Credibility (P12): a clear list of what's used and why.

### Specifics
- [Legal] Consent must be freely given, specific, informed and unambiguous; pre-ticked boxes are not valid consent (GDPR/ePrivacy; CJEU *Planet49*, 2019).
- [Not verified by search in this research; confirm before citing] European data protection authorities (e.g. the French CNIL in 2022) have fined sites where refusing cookies was harder than accepting, and the Spanish AEPD's cookie guidance reflects the same parity principle. Treat "Reject all" on the first layer, with equal prominence to "Accept all", as a design requirement.
- [C] Provide a persistent way to change consent later (footer link or icon).
- Implementation detail (consent mode, tag loading): (pending: tokens.md / styles.md).

### 🔴 Critical errors
- Tracking scripts that load before consent.
- "Reject" hidden in a second layer, greyed out, or worded ambiguously.

### 🟠 Common errors
- Banners covering the primary CTA or form submit button on mobile.
- Stacking cookie banner + chat bubble + announcement bar until the content disappears.

### ↔ When the usual advice flips
- **Sites using only strictly necessary cookies** may not need a consent banner at all; a clear notice in the policy is enough (verify for your jurisdiction).

### Signal it's working
Consent choice distribution (an unusually high acceptance rate can indicate a manipulative design); complaints; layout shift caused by the banner.

### Implementation
- **Static:** yes for the policy; the banner is an island.
- **Rendering:** static policy page; the banner as a small island.
- **Data and state:** one registry of cookies and trackers that generates the policy table and drives the consent manager; no non-essential tags before consent (with Google tags, set consent to denied by default first); the banner never the largest first-screen element and never shifting layout; an accessible dialog with equal-weight accept and reject; consent re-openable from the footer and stored with its version.
- **Anti-patterns:** loading analytics and then asking; a banner injected late that shifts the page.
