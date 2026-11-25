# Authentication pages

Sign-up · Login · Password recovery · Verification (email / 2FA) · Onboarding

Entry format and evidence grades: see the header of `entry-marketing.md`. P-IDs → `../principles.md`.

Persuasion dial for this group: none for login, recovery and verification; medium for sign-up and onboarding. Authentication is a toll booth the user wants to pass, not a destination. Security matters, but security that users work around is not security.

Group summary: dominant phase conversion + activation; principles that weigh most P30, P21, P19, P17; main risk: sign-up before value, passwords.

> **Order of authority:** ethics (`ethics.md` and `content-truth.md`, hard limits) > `site-decisions.md` (what exists and what the user decided) > `design-brief.md` > `reasoning.md` and `design-reasoning.md` (method for writing the brief) > the other references (`principles.md`, `pages/`, `sections/`, `implementation.md` and the rest, consulted afterwards). When two disagree, the higher one wins; a user decision that breaks either hard limit is declined with the reason.

Current standards worth knowing: NIST SP 800-63B Revision 4 (final July 2025) changed password guidance substantially; passkeys reached mainstream use in 2025–2026.

---

## Sign-up / Registration

**Persuasion dial:** medium.
**3C weight:** Conf 2 / Conv 3 / Act 2.

### The moment
The user has decided to try, but sign-up is the first real cost: data, a password to invent, a commitment. Doubts: "what will they do with my data?", "will I get spammed?", "is it worth it before I've even seen it?".

### Must prove or protect
That joining is as light as the promise implied, and that the value is close.

### Levers
- Value before the ask (P21, P15): let them use the product first where possible.
- Minimal fields (P19); explain why sensitive data is needed.
- Passwordless options (P30).
- Specific reassurance (P14): "no card", "cancel anytime" only if literally true.

### Specifics
- [B] Duolingo attributed ~20% more daily active users to moving the sign-up screen back a few steps, after a first lesson.
- [B] Since April 2024 ChatGPT can be used without an account; Shopify builds a store before account creation.
- [A] NIST SP 800-63B-4: no composition rules (no forced symbols/uppercase/numbers); minimum 15 characters if the password is the only factor, 8 if used with MFA; accept at least 64 characters and all printable characters including spaces; check new passwords against breached/common lists; no periodic forced changes; no security questions; password managers and paste must be allowed. https://pages.nist.gov/800-63-4/sp800-63b.html
- [C] Show password rules before typing, not after failure; offer "show password".

### 🔴 Critical errors
- Asking for phone, company, job title or birth date without a reason the user would accept.
- Blocking paste into password fields (contradicts NIST and breaks password managers).
- Pre-ticked marketing consent.

### 🟠 Common errors
- "Confirm password" and "confirm email" fields (show/hide toggles are better).
- Complexity rules revealed only after an error.

### ↔ When the usual advice flips
- **Regulated products** (banking, health): identity checks are legitimately required early; make them feel purposeful and show progress.
- **Products whose value is the network** (team tools): sign-up and inviting colleagues may *be* the first value, not a barrier.
- **High-intent B2B buyers** may accept longer qualification if it visibly personalises what they get.

### Signal it's working
Sign-up completion, and more importantly activation of those who signed up (not just account count).

### Implementation
- **Static:** app; partial with a hosted auth service.
- **Rendering:** server-rendered, or a static form posting to the auth service; never cached; no third-party scripts.
- **Data and state:** a native form with labels, `autocomplete="username"` and `"new-password"`; a show-password toggle; one shared password policy (length, a blocklist of breached passwords, no composition rules); passkey creation offered after sign-up; email verification with single-use, expiring tokens.
- **Anti-patterns:** a submit button disabled until the form is valid; placeholder text as labels; asking twice for email or password.

---

## Login / Sign-in

**Persuasion dial:** none.
**3C weight:** Conv 2 / Act 3.

### The moment
A returning user wants to get back to what they were doing. Many have forgotten which method they used (Google? email? which email?). Any friction here is pure cost.

### Must prove or protect
That their account and data are still there and safe, without making them prove it repeatedly.

### Levers
- Passkeys and autofill (P30), "remember me" default where appropriate (P23).
- Conventions (P09): standard fields, autocomplete attributes, recovery link next to the password field.
- Errors that help without leaking information (P17).

### Specifics
- [A] FIDO Passkey Index 2026: 36% of successful sign-ins already use passkeys (26% in 2025); 93% success with passkeys vs 78% with passwords + traditional MFA; 2.8× faster (~27 s saved per sign-in). https://fidoalliance.org/passkey-index-2026/
- [B] Microsoft reports 95% success with passkeys vs 30% with passwords.
- [A] Baymard (Accounts research, 2026): many users see sign-in purely as a hurdle before their real task (tracking an order, checking out).
- [A] NIST: rate-limit failed attempts rather than locking accounts early; allow paste.

### 🔴 Critical errors
- CAPTCHAs shown to every user by default.
- Identifier-first flows that never tell the user which method their account uses.

### 🟠 Common errors
- "Invalid username or password" with no path to recovery beside it.
- Separate pages for email and password without reason, breaking password-manager autofill.

### ↔ When the usual advice flips
- **High-risk actions inside a logged-in session** (changing payout account, deleting data): re-authentication is legitimate friction; explain it.
- **Shared or public devices** (kiosks, family tablets): "remember me" should default off.

### Signal it's working
Sign-in success rate, time to sign in, account-access support tickets.

### Implementation
- **Static:** app; partial with a hosted auth service.
- **Rendering:** server-rendered or a static form posting to the auth service; signed-in users redirected on the server.
- **Data and state:** `autocomplete="username webauthn"` and `"current-password"` so passkeys and passwords share autofill; navigate after success so password managers save it; one generic error; rate limits rather than hard lockout.
- **Anti-patterns:** a separate "log in with passkey" page as the only passkey route; errors that reveal whether the account exists.

---

## Password recovery / Reset

**Persuasion dial:** none.
**3C weight:** Conf 3 / Mem 2.

### The moment
The user is locked out, often in the middle of something urgent, frustrated and slightly anxious ("did I lose my account?").

### Must prove or protect
That access can be restored quickly and that their account is safe.

### Levers
- Error recovery done kindly (P17).
- A good ending (P28): restore access and return them to their task.
- Prevent the next lockout (P30): offer a passkey at the end.

### Specifics
- [C/security] Show the same message whether or not the email exists ("If an account exists for this email, we've sent a link") to avoid revealing accounts.
- [A] NIST SP 800-63B-4 prohibits knowledge-based security questions.
- [C] State the link's expiry time and allow resending with a visible timer.
- [C] After reset, sign the user in and send them back to where they were heading, not to a generic home.

### 🔴 Critical errors
- Security questions; sending the existing password by email.
- Links that silently expire, leaving users at an unexplained error.

### 🟠 Common errors
- Forcing a new password to differ from the last N without explaining why.

### ↔ When the usual advice flips
- **Accounts with money or sensitive data:** add a step-up check and notify the user by another channel that the password changed.

### Signal it's working
Recovery completion rate; time to regain access; repeated recoveries per user (a sign passkeys should be offered).

### Implementation
- **Static:** app; partial with a hosted auth service.
- **Rendering:** server-rendered, never cached.
- **Data and state:** the same message and timing whether or not the account exists; single-use, short-lived tokens stored hashed; after a reset, notify the user and end other sessions.
- **Anti-patterns:** a message that confirms the account exists; reset links built from the request's host.

---

## Verification (email / SMS / 2FA)

**Persuasion dial:** none.
**3C weight:** Conf 2 / Conv 2.

### The moment
A security step the user didn't ask for, often while switching between apps to fetch a code. Doubts: "where is the code?", "did it send?", "why do I need this?".

### Must prove or protect
That security is there to protect them, at the lowest possible effort.

### Levers
- Friction minimisation (P19): autofill and paste of codes.
- Clear status and recovery (P17): resend with timer, change destination.
- Progress (P26): "step 2 of 3" when part of a longer flow.

### Specifics
- [C/standard] Use `autocomplete="one-time-code"` and `inputmode="numeric"` so mobile keyboards offer the code automatically; accept paste of the whole code into split boxes.
- [C/standard] NIST has classed SMS/phone-delivered codes as a "restricted" authenticator since SP 800-63B Revision 3 (verify current wording in Rev. 4 before citing); passkeys and authenticator apps are stronger options.
- [C] Explain in one line why verification is needed ("so only you can sign in to your account").

### 🔴 Critical errors
- Split code fields that break paste or autofill.
- No way to change the email/phone if it was mistyped.

### 🟠 Common errors
- No resend timer, so users click repeatedly and receive several codes.

### ↔ When the usual advice flips
- **Low-risk products:** deferring email verification until it's needed (e.g. before sending or publishing) removes a drop-off point at sign-up.

### Signal it's working
Verification completion rate and time; codes requested per success.

### Implementation
- **Static:** app; partial with a hosted auth service.
- **Rendering:** server-rendered, never cached.
- **Data and state:** code fields with `autocomplete="one-time-code"` and `inputmode="numeric"`; resend with a cooldown; recovery codes treated as strongly as login.
- **Anti-patterns:** one input per digit that breaks paste; SMS as the only factor on high-risk accounts.

---

## Onboarding

**Persuasion dial:** medium.
**3C weight:** Act 3 / Conv 2.

### The moment
The user has just signed up and wants to *use* the product, not learn about it. Their motivation is highest now and decays fast. Question: "is this going to be worth it for me?".

### Must prove or protect
The central promise, as quickly as possible, through a first real result (the "aha" moment).

### Levers
- Design toward the activation moment (P27).
- Contextual, interactive help over tours (P20): help appears when relevant.
- Endowed progress with real steps (P26).
- Empty states that teach (P29).
- Loss aversion only with escape valves (P25).

### Specifics
- [A] NN/g quantitative study (70 users, 4 apps): users who read deck-of-cards tutorials did not perform better than those who skipped them, and perceived tasks as *more* difficult. NN/g recommends avoiding onboarding where possible and using contextual "pull revelations" instead. https://www.nngroup.com/articles/mobile-tutorials/ · https://www.nngroup.com/articles/onboarding-tutorials/
- [B] Slack: teams that exchanged ~2,000 messages had ~93% retention; onboarding was oriented to reaching that threshold.
- [B] Duolingo asks the learner's motivation and daily goal before the first lesson; learners who reach a 7-day streak are 3.6× more likely to complete their course.
- [A] Endowed progress: 34% vs 19% completion when progress started at 2/10 instead of 0/8 (Nunes & Drèze 2006).

### 🔴 Critical errors
- Long, unskippable tours before the product is usable.
- Permission requests (notifications, location) before the user understands why.

### 🟠 Common errors
- Onboarding that asks questions whose answers visibly change nothing.
- Checklists that reward cosmetic tasks ("upload a profile photo") instead of the activation action.

### ↔ When the usual advice flips
- **Products that require configuration before any value** (accounting, integrations): a guided setup is the product's first value; make it short, resumable and progress-visible.
- **Complex expert tools:** short optional training paths and templates help; a forced tutorial does not.
- **Games and education:** structured, learn-by-doing onboarding works because doing is the content.

### Signal it's working
Time to first value; share of new users reaching the activation action; D1/D7 retention.

### Implementation
- **Static:** app.
- **Rendering:** server-rendered, one URL per step so reload and back work; progress saved on the server.
- **Data and state:** step order and skip rules on the server; ask only what is needed now; sample data or templates so the first screen isn't empty; focus moved to each new step.
- **Anti-patterns:** a wizard whose state lives only in the browser and is lost on reload.
