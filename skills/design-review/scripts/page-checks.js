/*
 * Page checks: horizontal overflow and the widest offenders, tap targets under 44 px (coarse pointer) or 24 px (fine pointer), images without alt, and the basic meta tags.
 * Returns: an object with width, coarsePointer, horizontalOverflow, overflowing, smallTargets, imagesWithoutAlt, title, description, viewport, ogImage, lang, favicon and h1Count.
 * Used from: references/visual-qa.md (Process, step 4, at every width).
 * Run it by passing this whole file to playwright-cli --raw eval (see the .md above).
 */
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
