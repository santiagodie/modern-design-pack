/*
 * Page checks: horizontal overflow and the widest offenders, the size and spacing of every pointer target, images without alt, and the basic meta tags.
 * Targets are measured against --target-min (24 px) and --target-touch (44 px), the tokens owned by modern-design/references/tokens.md §5. The script measures and lists; checklist SF4 decides which action is primary.
 * Returns: an object with width, coarsePointer, targetCount, targetsUnder24, targetsUnder44, horizontalOverflow, overflowing, imagesWithoutAlt, title, description, viewport, ogImage, lang, favicon and h1Count.
 * Used from: references/visual-qa.md (Process, step 4, at every width).
 * Run it by passing this whole file to playwright-cli --raw eval (see the .md above).
 */
() => {
  const vw = window.innerWidth;
  const sel = e => e.tagName.toLowerCase() + (e.id ? '#' + e.id : '') +
    (typeof e.className === 'string' && e.className.trim() ? '.' + e.className.trim().split(/\s+/).slice(0, 2).join('.') : '');
  const visible = e => { const r = e.getBoundingClientRect(); const s = getComputedStyle(e);
    return r.width > 0 && r.height > 0 && s.visibility !== 'hidden' && s.display !== 'none'; };
  const overflowing = [...document.querySelectorAll('body *')]
    .filter(e => visible(e) && e.getBoundingClientRect().right > vw + 1).slice(0, 8).map(sel);
  // Every target: its size, and for those under 24 px the spacing test of WCAG 2.5.8
  // (a 24 px circle centred on the target intersects no other target and no other undersized target's circle).
  const targets = [...document.querySelectorAll('a[href], button, input:not([type="hidden"]), select, textarea, [role="button"], [role="link"]')]
    .filter(visible).map(e => {
      const r = e.getBoundingClientRect();
      const inlineText = getComputedStyle(e).display === 'inline' &&
        [...(e.parentElement?.childNodes ?? [])].some(n => n.nodeType === 3 && n.textContent.trim());
      return { e, r, cx: r.left + r.width / 2, cy: r.top + r.height / 2, small: r.width < 24 || r.height < 24, inlineText };
    });
  const distToRect = (x, y, r) => Math.hypot(Math.max(r.left - x, 0, x - r.right), Math.max(r.top - y, 0, y - r.bottom));
  const spacingOk = t => targets.every(o => o === t || o.e.contains(t.e) || t.e.contains(o.e) ||
    (distToRect(t.cx, t.cy, o.r) >= 12 && (!o.small || Math.hypot(t.cx - o.cx, t.cy - o.cy) >= 24)));
  const size = t => Math.round(t.r.width) + 'x' + Math.round(t.r.height);
  const label = t => (t.e.innerText || t.e.getAttribute('aria-label') || t.e.getAttribute('name') || '').trim().slice(0, 40);
  const targetsUnder24 = targets.filter(t => t.small).slice(0, 20)
    .map(t => ({ target: sel(t.e), size: size(t), label: label(t), spacingOk: spacingOk(t), inlineText: t.inlineText }));
  const targetsUnder44 = targets.filter(t => !t.small && (t.r.width < 44 || t.r.height < 44)).slice(0, 20)
    .map(t => ({ target: sel(t.e), size: size(t), label: label(t) }));
  const meta = n => document.querySelector(`meta[name="${n}"], meta[property="${n}"]`)?.content ?? null;
  return {
    width: vw,
    coarsePointer: matchMedia('(pointer: coarse)').matches,
    targetCount: targets.length,
    targetsUnder24,
    targetsUnder44,
    horizontalOverflow: document.documentElement.scrollWidth > vw,
    overflowing,
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
