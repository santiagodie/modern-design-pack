# Evidence and verification

> **Covers:** evidence grades A, B and C; what counts as verified (primary source, date checked, dated status, secondary sources as context, marking what is unverified); how to cite inside the references.
> **Read when:** at the start of any skill run, whole; when writing or revising a reference; when a report or a page states a claim with a source.
> **Not here:** popular claims that don't hold up → references/ethics.md §5; when a statistic may appear on a page → references/ui/sections/index.md; `measured` versus `judgment` in reviews → design-review references/review-method.md
> **Owner:** shared core (lives in modern-design)
> **Sources:** house rules, written from the practice in docs/SOURCES.md, docs/research/tokens-sources.md, docs/ROADMAP.md and .claude/CLAUDE.md

> **Order of authority:** ethics (`ethics.md` and `content-truth.md`, hard limits) > `site-decisions.md` (what exists and what the user decided) > `design-brief.md` > `reasoning.md` and `design-reasoning.md` (method for writing the brief) > the other references (`principles.md`, `pages/`, `sections/`, `implementation.md` and the rest, consulted afterwards). When two disagree, the higher one wins; a user decision that breaks either hard limit is declined with the reason.

## How the rules are written

Decision rules have four parts: **Rule** ("do X when Y"), **Why** (the mechanism), **When it flips** (the context where the usual rule stops working) and **Source**. Definitions are plain text.

## 1. Evidence grades

The principles in `principles.md` carry a grade, and any reference or report may use the same scale when it states a claim about how people behave. Evidence: **A** = experiment, meta-analysis or large-scale primary data; **B** = company primary data or documented case; **C** = professional consensus or heuristic without a public experiment.

A claim that rests on two kinds of evidence shows both, strongest first ("A/B"). A grade may carry a short qualifier when the evidence is strong in kind but weak in fit ("A, with caution"), followed by the reason in the same entry.

**Rule:** give the grade of the evidence that actually supports the claim as it is stated here, not the grade of the strongest study on the topic. When a claim adds a number, a context or a population the study did not cover, grade that part separately or drop it.

**Why:** a grade is a promise to the next reader about how far to trust the sentence. A famous experiment cited for a claim it never tested borrows trust it hasn't earned, and the model repeats the claim with that confidence in every build and every report (`reasoning.md`, "Why this method exists").

**When it flips:** a heuristic (C) can outweigh an experiment (A) for a decision when the experiment's setting is far from this page (students in a hypothetical scenario, one market, one year) and the heuristic matches the page's context. Say so in the decision, and keep both grades visible.

**Source:** grades as defined in `principles.md` since its first version; the rule is our own.

## 2. What counts as verified

**Rule:** write a fact about a standard, a law, a court or regulator decision, browser support or a study as verified only when all of these hold:

1. **Primary source.** It was read at the original: the text of the standard or law, the decision or judgment itself, the specification, or the original study or dataset.
2. **Date checked.** The day it was read is recorded (YYYY-MM-DD), next to the claim or in its row in `docs/SOURCES.md` or the research table it comes from.
3. **Dated status.** Legal claims carry their status and its date: in force or applicable since when, proposal and at what stage, amended, or annulled. Support claims carry their Baseline status (newly or widely available) and since when, or the browsers and versions that ship it.
4. **Secondary sources as context only.** Press articles, law-firm summaries, blog posts, books that report a study, and other skills may point to a primary source, explain it or date an event. They don't make a claim verified, and figures found only in them are attributed to them ("press coverage mentions…").
5. **Unverified claims are marked.** A claim that fails any of the points above is either left out or written with the mark "verify before citing", and added to "Pending verification" in `docs/ROADMAP.md`. It is not written as a plain fact.

**Why:** references are read as true by every later step. A secondary summary that misstates a deadline, or a support claim that was right last year, reaches every page built with the plugin, and the user can't tell it apart from a checked fact. A date and a status let the reader judge whether the fact may have changed since.

**When it flips:**

- When no primary source is public (company figures shared in an interview or a blog), cite the company's own publication as the best available source, grade it B and say it is company data.
- When a legal text is a proposal under negotiation, the primary source is the proposal itself; state that the final text may change.
- When a support status moves fast, re-check it before it decides a build, even if a dated check exists.

**Source:** house rule, our own wording, written from the practice already in the repository: the licence and verification columns of `docs/SOURCES.md`, the "checked at the original source" table and the unverified parts left out in `docs/research/tokens-sources.md`, the "Pending verification" list in `docs/ROADMAP.md`, and the rule in `.claude/CLAUDE.md` to date framework facts and mark unverified ones "verify before citing".

### What to record, by kind of claim

| Claim | Primary source | Record with it |
|---|---|---|
| Accessibility criterion | The W3C Recommendation (for example WCAG 2.2) and its success criterion | Version, criterion number and level, date checked |
| Law or regulation | The official journal or the regulator's published text | Status (in force, applicable since, proposal, annulled) with its date |
| Court or regulator decision | The decision, order or settlement as published by the court or regulator | Date of the decision and what it requires |
| Browser support | The specification plus Baseline or the browsers' release notes | Baseline status and since when, or versions; date checked |
| Behavioural study | The paper or the original dataset | Year, sample, setting, grade (§1) |
| Company figure | The company's own publication or interview | That it is company data, grade B |

## 3. How to cite inside the references

**Rule:** in the text of a reference, give a short attribution next to the claim: the author or body, the year or date, and the link when the reader may need to check it ("Baymard (2023)", "WCAG 2.2, 2.5.8"). Keep the full row (author, licence, date read, how it was used) in `docs/SOURCES.md`, or in the research table that file points to. For a rule adapted from another skill or guide, the rule's **Source** line credits it ("adapted from <repo> (<licence>)", plus "changes made" for CC BY), and the adapted piece is listed in `THIRD_PARTY_NOTICES.md`.

**Why:** the reference stays short enough to reason with, while the licence check and the audit trail live in one place that can be updated without touching the skills.

**When it flips:** a number that decides what gets built (a threshold, a contrast ratio, a target size) carries its link in place, so it can be checked without leaving the file.

**Source:** house rule, from the practice in `docs/SOURCES.md`, `THIRD_PARTY_NOTICES.md` and the Source lines of the tokens references.
