# Roadmap

## Phase 1: Skeleton (current)

- [x] Plugin and marketplace manifests
- [x] Six empty skill templates with frontmatter
- [x] Docs, READMEs, licence files, banner
- [x] `claude plugin validate .` passes

## Phase 2: Licence audit

- [ ] Fill the License column of every row in `SOURCES.md`
- [ ] Resolve every `TO VERIFY` author and URL, and identify the two anonymous screenshots
- [ ] Decide `adapt` / `summarise` / `link only` for each source based on its licence
- [ ] Prepare entries in `THIRD_PARTY_NOTICES.md` for anything that will be adapted

## Phase 3: Skills, one at a time

Order:

1. [ ] unslop-review
2. [ ] design-direction
3. [ ] design-tokens
4. [ ] compose-ui
5. [ ] motion
6. [ ] visual-qa

For each skill: write `SKILL.md` (under ~500 lines), move detail to `references/`, remove the "Sources to merge" section, record what was used in `SOURCES.md` and `THIRD_PARTY_NOTICES.md`, and run `claude plugin validate .`.

## Phase 4: Tests with real briefs

- [ ] Run the full flow on several real projects with different contexts (for example a SaaS landing page, a local business site, a dashboard)
- [ ] Check that the skills trigger on English and Spanish requests
- [ ] Record results and fix what fails

## Phase 5: Publish v0.1.0

- [ ] Add a square PNG icon (512 to 2048 px) for the plugin directory
- [ ] Update the README status and Known Limitations
- [ ] Move CHANGELOG 0.1.0 out of Unreleased
- [ ] Tag `v0.1.0` and publish
