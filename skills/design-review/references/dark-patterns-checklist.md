# Dark patterns checklist

Reference for `design-review`, used in both modes during the review step. Load it when the page shows prices, offers, free trials, subscriptions, a sign-up, a payment, consent or cookies, stock or scarcity, urgency or deadlines, reviews or testimonials, or sponsored content. When in doubt, load it; it is a small file. `unslop-checklist.md` holds the shared rules: how to use the checklists, severity, `measured` and `judgment`, and how to report.

## Deceptive patterns

Built from sections 4 (never propose) and 6 (minimum by page type) of `modern-design/references/ethics.md`. Read that file (`${CLAUDE_SKILL_DIR}/../modern-design/references/ethics.md`) for the cases behind each rule when it exists; these rules work without it.

- **Ethics ranks above the brief.** Unlike the rest of this checklist, a brief can't make these fine. Each rule's "Fine when" describes the honest version of the same thing.
- **Invented testimonials, logos and customer figures** are CY3; don't report them twice.
- **Describe, don't rule.** Say what the page does and what it does to the visitor, and name the rule it may conflict with. It is not legal advice, and the report shouldn't call anything illegal.
- **Read-only in URL audits.** Don't add to cart, start trials or open accounts to test a flow. Reloading a page is fine. Judge what public pages show, and say what couldn't be checked.

### DP1. Pre-ticked extras and consents
- **Look for:** checkboxes or toggles on by default for paid extras, insurance, donations, newsletters, marketing or data-sharing consent; a paid option preselected in a group.
- **Fine when:** the preselected option is free, protects the user (the most private setting, no marketing) and is easy to change.
- **Fix:** leave them off and let the user opt in.
- **Evidence:** measured (the `checked` attribute, or the initial state in a screenshot).
- **Report as:** critical.

### DP2. Urgency that isn't real
- **Look for:** countdowns, "offer ends today", "last chance", end dates.
- **Fine when:** the deadline is real and persistent, and the page says what happens after it.
- **Fix:** state the real deadline as a date, or remove the timer.
- **Evidence:** measured when reloading the page or opening it in a fresh session restarts the timer or moves the date; judgment otherwise.
- **Report as:** critical when measured; a tip asking the owner to confirm when it can't be checked.

### DP3. Scarcity and popularity without data or context
- **Look for:** "only 2 left", "12 people are viewing this", "booked 30 times today", "selling fast".
- **Fine when:** it comes from real stock or activity and says what it refers to ("only 1 left at this price", "others are looking at these dates").
- **Fix:** show it only from real data and with its scope; remove it otherwise.
- **Evidence:** measured when the code makes the number up (random, hard-coded, or identical on every product); judgment otherwise.
- **Report as:** critical when measured; minor when the message lacks context and the data can't be checked.

### DP4. Prices without known compulsory charges
- **Look for:** "from" or base prices in listings, cards, map pins or pricing tables that leave out charges every buyer pays (booking or service fees, compulsory cleaning, the per-user total behind a per-seat price), or a total that appears only at the last step. A monthly price shown only as an annual price divided by twelve.
- **Fine when:** the charge really varies per buyer (shipping to an address not yet known, optional extras) and the page says how it is worked out.
- **Fix:** put the total, with compulsory charges, in the headline price, and say whether taxes are included.
- **Evidence:** measured when two visible pages show different totals for the same item; judgment when the checkout can't be reached.
- **Report as:** critical.

### DP5. Exit harder than entry
- **Look for:** cancelling, unsubscribing or deleting an account with more steps, channels or confirmations than signing up (phone-only cancellation for an online sign-up, repeated "are you sure?" screens, looping retention offers), or "cancel anytime" with no visible way to do it.
- **Fine when:** one confirmation guards against an irreversible loss, and one optional retention offer appears once.
- **Fix:** cancel in as many steps as it took to join, from the account page, with data export where relevant.
- **Evidence:** measured in own-project mode (count the steps both ways); judgment in URL audits, from public help pages and terms, saying the flow wasn't tested.
- **Report as:** critical.

### DP6. Confirmshaming
- **Look for:** decline options that shame or guilt the visitor ("No thanks, I prefer paying full price", "I don't care about my security").
- **Fix:** neutral wording for both choices ("No thanks").
- **Evidence:** measured (the label is on the page).
- **Report as:** critical on cancellation, consent or payment screens; minor elsewhere (a newsletter pop-up).

### DP7. Consent easier to give than to refuse
- **Look for:** cookie or tracking banners with "Accept" on the first layer and "Reject" hidden, greyed out, styled as a link or one layer deeper; consents on by default; "legitimate interest" toggles switched on.
- **Fine when:** accept and reject sit on the same layer with equal weight, and settings are a third option.
- **Fix:** put "Reject all" next to "Accept all", in the same style and size.
- **Evidence:** measured (screenshot of the first layer; the clicks each choice takes).
- **Report as:** critical.

### DP8. Trials and renewals with no advance notice
- **Look for:** free trials that take a card without saying when the first charge happens and how much it is; no mention of a reminder before the trial converts; renewal date and amount missing from pricing or billing.
- **Fine when:** the date and amount of the first charge sit next to the trial button, and the page says a reminder will be sent.
- **Fix:** "Free for 14 days, then €12/month from 8 December. We'll remind you 3 days before", next to the button; the next charge's date and amount always visible in billing.
- **Evidence:** measured when the price or the renewal terms are missing from the visible flow; judgment for reminders, which a page can't prove.
- **Report as:** critical when price or renewal is missing; minor when only the reminder isn't mentioned.

### DP9. Invented progress and loss mechanics
- **Look for:** progress bars or checklists that start part-done with steps the user didn't take; streaks or "you'll lose everything" messages with no pause or way out, or used to discourage cancelling; any of these in products minors may use.
- **Fine when:** the progress reflects something the user really did ("Account created ✓"), and loss mechanics are true and offer a pause or freeze.
- **Fix:** count only real steps; add a pause; say truthfully what happens to data after cancelling.
- **Evidence:** judgment; measured when the code sets fake progress.
- **Report as:** critical when used against cancelling or aimed at minors; minor otherwise.

### DP10. Advertising in disguise
- **Look for:** ads styled as notifications, system messages, organic results or editorial content; sponsored items in listings or results without a label; a "recommended" order that is paid for without saying so.
- **Fine when:** paid placements carry a visible label ("Sponsored", "Ad") and the default order is explained.
- **Fix:** label every paid placement where it appears.
- **Evidence:** measured when the code or URLs mark items as paid but the screen doesn't; judgment otherwise.
- **Report as:** critical.

### Minimum by page type

| Page | Check at least |
|---|---|
| Pricing, billing, sign-up with a trial | DP4 (total price), DP8 (renewal date and amount, notice before the trial ends), DP5 (cancellation) |
| Product page, listing, map, cart, checkout | DP4, DP3, DP10, DP1 |
| Checkout, login, sign-up, forms | Accessibility at WCAG 2.2 AA: SF5 (focus), labels, errors not shown by color alone, SF4 (targets), CO5 (contrast) |
| Cookie banner, privacy | DP7 |
| Feed, onboarding with streaks or progress | DP9, with extra care when minors may use the product |
