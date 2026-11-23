# Visual QA

Reference for `design-review`: the browser check. Used in both modes. Load it when a page can be opened in a browser: the user's running app (own project) or a public URL (URL audit).

## Tools

Use the Playwright agent CLI (`playwright-cli`). When it isn't installed, install it with `npm install -g @playwright/cli@latest` after asking the user. It downloads a browser on first use. When it can't run, say so in the report and review the HTML and code only.

Useful commands:

```bash
playwright-cli open <url>                       # headless by default, mouse and fine pointer
playwright-cli open --device "iPad Mini" <url>  # device preset: viewport, touch, coarse pointer
playwright-cli set-reduced-motion reduce        # before any screenshot
playwright-cli resize <width> <height>
playwright-cli screenshot --full-page --filename=<file>.png
playwright-cli screenshot --filename=<file>.png # viewport only
playwright-cli --raw eval "<js function>"       # returns the value only
playwright-cli press Tab
playwright-cli goto <url>
playwright-cli close
```

## Process

1. **Serve over HTTP.** `playwright-cli` renders `file://` URLs as blank pages. When the project is static files with no dev server, serve the folder locally first (the project's own dev server, `npx --yes serve`, or any static server) and open the `http://127.0.0.1` URL. Don't assume Python is installed.
2. **Prepare.** Create the screenshot folder (`audits/<domain>-<YYYY-MM-DD>/` for URL audits, or a temporary folder in own-project mode). Open the page and run `set-reduced-motion reduce` first, so scroll reveals and entrance animations don't hide content in the screenshots.
3. **Load everything.** Scroll to the bottom and back to trigger lazy images and reveals (script below).
4. **Capture each width** with the input it is used with. Touch widths use a device preset, which `open` applies to the whole session, so open the page again for each one and set reduced motion again:

   | Width | How to open | Input emulated |
   |---|---|---|
   | 375 (phone portrait) | `playwright-cli open --device "iPhone 13 Mini" <url>` | Touch, coarse pointer, no hover |
   | 768 (tablet portrait) | `playwright-cli open --device "iPad Mini" <url>` | Touch, coarse pointer, no hover |
   | 1024 (tablet landscape) | `playwright-cli open --device "iPad Mini landscape" <url>` | Touch, coarse pointer, no hover |
   | 1440 (desktop) | `playwright-cli open <url>`, then `resize 1440 900` | Mouse, fine pointer, hover |
   | Phone landscape, only when the page has fixed or sticky elements | `playwright-cli open --device "iPhone 13 Mini landscape" <url>` | Touch |

   For each one, scroll through again, run the checks script, and take a full-page screenshot named `<page>-<width>.png` (`<page>-375-landscape.png` for the landscape one). Confirm the emulation with `--raw eval "() => matchMedia('(pointer: coarse)').matches"` when a finding depends on it.
5. **Check focus** at 1440: press Tab about eight times and take a viewport screenshot (`<page>-focus-1440.png`). When no focus indicator is visible on any of those stops, that is a finding.
6. **Look at every screenshot**, not only the script output. Use the per-width list below.
7. **Record findings** with the screenshot file and a selector, tagging script results as `measured` and visual calls as `judgment`.
8. **Close** the browser when done.

When a screenshot shows a blank band where content should be, scroll through once more and recapture. When content stays hidden with reduced motion on, that is a finding (see MO4 in `unslop-checklist.md`).

### Scroll-through script

```js
async () => {
  for (let y = 0; y < document.documentElement.scrollHeight; y += 600) {
    window.scrollTo(0, y);
    await new Promise(r => setTimeout(r, 120));
  }
  window.scrollTo(0, 0);
  return document.documentElement.scrollHeight;
}
```

### Checks script

Run it at each width. It returns JSON with horizontal overflow, the widest offenders, small tap targets, images without `alt`, and the basic meta tags.

```js
() => {
  const vw = window.innerWidth;
  const sel = e => e.tagName.toLowerCase() + (e.id ? '#' + e.id : '') +
    (typeof e.className === 'string' && e.className.trim() ? '.' + e.className.trim().split(/\s+/).slice(0, 2).join('.') : '');
  const visible = e => { const r = e.getBoundingClientRect(); const s = getComputedStyle(e);
    return r.width > 0 && r.height > 0 && s.visibility !== 'hidden' && s.display !== 'none'; };
  const minTarget = matchMedia('(pointer: coarse)').matches ? 44 : 24;
  const overflowing = [...document.querySelectorAll('body *')]
    .filter(e => visible(e) && e.getBoundingClientRect().right > vw + 1).slice(0, 8).map(sel);
  const smallTargets = [...document.querySelectorAll('a, button, input, select, textarea, [role="button"]')]
    .filter(visible).filter(e => { const r = e.getBoundingClientRect(); return r.width < minTarget || r.height < minTarget; })
    .slice(0, 12).map(e => { const r = e.getBoundingClientRect(); return sel(e) + ' ' + Math.round(r.width) + 'x' + Math.round(r.height); });
  const meta = n => document.querySelector(`meta[name="${n}"], meta[property="${n}"]`)?.content ?? null;
  return {
    width: vw,
    coarsePointer: matchMedia('(pointer: coarse)').matches,
    horizontalOverflow: document.documentElement.scrollWidth > vw,
    overflowing,
    smallTargets,
    imagesWithoutAlt: [...document.images].filter(i => !i.hasAttribute('alt')).length,
    title: document.title || null,
    description: meta('description'),
    viewport: meta('viewport'),
    ogImage: meta('og:image'),
    lang: document.documentElement.lang || null,
    favicon: document.querySelector('link[rel~="icon"]')?.href ?? null,
    h1Count: document.querySelectorAll('h1').length
  };
}
```

The small-target list includes inline text links, which are fine inside a paragraph. Flag only targets that stand alone: navigation, icons, buttons, form controls.

## What to look at per width

**375 px (phone)**
- Horizontal scroll or content cut off at the right edge.
- Headlines wrapping badly: one word on the last line, words split, text clipped.
- Tap targets under about 44 px, or targets packed so tightly they're hard to hit.
- Fixed headers or bottom bars covering content, or taking more than about a fifth of the screen.
- The main call to action visible without much scrolling.
- Images cropped so the subject is lost.

**375 px in landscape (only with fixed or sticky elements)**
- How much of the roughly 375 px of height the header, bars and banners leave for content.
- Dialogs and sheets that don't fit and can't scroll.

**768 px (tablet portrait, touch)**
- Layouts stuck between mobile and desktop: two columns too narrow, cards with one word per line.
- Navigation that neither collapses nor fits; the primary action hidden inside a menu.
- Large empty gaps where a grid didn't reflow; tall empty bands in heroes sized for desktop.
- Tables and side panels overflowing instead of scrolling inside a container or reflowing.

**1024 px (tablet landscape, touch)**
- Desktop layouts shown to a finger: menus or content that only open on hover, tap targets under 44 px.
- Hover styles that stay "stuck" after a tap (check the CSS: `:hover` outside a hover-capability query; see MN3).
- Boards, tables and multi-column tools that need sideways scrolling to reach a column.

**1440 px (desktop)**
- Lines of body text running much wider than about 75 characters.
- Content floating in the middle of very wide empty margins, or stretched edge to edge.
- Hierarchy: is the most important thing the most visible?
- Focus indicators, from the focus screenshot.

**At every width**
- Text contrast. When Lighthouse ran, use its contrast audit as `measured`. Otherwise read the computed colors of suspect text with `eval` and calculate the ratio, or mark the finding as `judgment`.
- Loading, empty and error states that are visible. In URL audits you only see what the page shows; don't invent states you couldn't trigger. In own-project mode, render empty and error states directly when the stack makes that easy (empty data, a failing request).
- Anything that looks broken: overlapping elements, missing images, unstyled flashes.

## Rules

- Capture with reduced motion on, so screenshots show the content, not the middle of an animation.
- When a screenshot looks wrong, recapture before reporting. Lazy loading and slow fonts cause false alarms.
- Report a layout problem at the width where it first appears, and mention the other widths where it repeats.
- Record what emulation couldn't verify under "Needs a real device" in the report or review notes: sticky hover after a tap, tap delay and press feel, safe areas around notches and home indicators, the on-screen keyboard (what it covers, input zoom), rubber-band and pull-to-refresh behaviour, real Safari (device presets change the viewport and touch, not the browser engine), and performance on a mid-range phone. List only the items that matter for this page.
- You may read this plugin's component references (`${CLAUDE_SKILL_DIR}/../modern-design/references/components/`) for the critical and common errors of a component under review. When that folder doesn't exist, continue without it.
- After fixing, capture again and look only at the areas you changed, at all four widths. Check them for gaps, empty panels, orphaned spacing or leftover styles that the fix itself created (for example, a decorative block that becomes an empty box once its decoration is removed). Fix those before calling the review done.
- In URL audits, stay read-only: no clicking through forms, no logins, no accepting purchases. Accepting a cookie banner to see the page is fine; say so in the report.
- Keep screenshots out of version control unless the user wants them committed.
- Keep helper scripts you write (capture loops, check scripts) inside the screenshot folder or a temp folder, never loose in the project, and remove them when the user doesn't need them.
- Stop any local server you started (for example `npx serve`) and close the browser when you finish. Servers left running keep the project folder locked and its port busy.
- `playwright-cli` writes a `.playwright-cli/` folder (snapshots, console logs) in the directory it runs from. Run it from the screenshot folder, or delete that folder when you finish.

## Hand-off

Own project: send problems back to `modern-design`, to the step that owns them (layout and components to step 3, colors and type to step 2, motion to step 4), then run this check again. URL audit: the findings go into the report.

## Sources

Written in our own words. The width-by-width checks, tap target sizes, focus and reduced-motion guidance draw on the [Web Interface Guidelines](https://github.com/vercel-labs/web-interface-guidelines) by Vercel (MIT). The touch checks and the list of what emulation can't reproduce adapt the `mobile-native` skill in [emilkowalski/skills](https://github.com/emilkowalski/skills) by Emil Kowalski (MIT). Commands follow the [Playwright agent CLI documentation](https://playwright.dev/agent-cli/installation).
