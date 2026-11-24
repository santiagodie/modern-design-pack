/*
 * Mobile, measurable (MN1-MN5): zoom disabled in the viewport meta, inputs under 16 px, :hover rules outside a hover media query, 100vh, safe-area insets without viewport-fit=cover.
 * Returns: an object with viewport, zoomDisabled, viewportFitCover, smallInputs, ungatedHover, vh100, usesSafeArea and skippedSheets (stylesheets from other domains that couldn't be read).
 * Used from: references/mobile-checklist.md ("Mobile, measurable"), once at a touch width.
 * Run it by passing this whole file to playwright-cli --raw eval (see the .md above).
 */
() => {
  const viewport = document.querySelector('meta[name="viewport"]')?.content ?? '';
  const out = { viewport, zoomDisabled: /user-scalable\s*=\s*(no|0)|maximum-scale\s*=\s*1(\.0+)?(\s*[,;]|$)/i.test(viewport),
    viewportFitCover: /viewport-fit\s*=\s*cover/i.test(viewport), smallInputs: [], ungatedHover: [], vh100: [],
    usesSafeArea: false, skippedSheets: 0 };
  document.querySelectorAll('input:not([type=hidden]):not([type=checkbox]):not([type=radio]), select, textarea').forEach(el => {
    const size = parseFloat(getComputedStyle(el).fontSize);
    if (size < 16 && out.smallInputs.length < 8) out.smallInputs.push((el.name || el.id || el.tagName.toLowerCase()) + ' ' + size + 'px');
  });
  const walk = (rules, inHover) => {
    for (const r of rules) {
      if (r.media) { walk(r.cssRules, inHover || /hover\s*:\s*hover/.test(r.media.mediaText)); continue; }
      if (r.cssRules && !r.selectorText) { walk(r.cssRules, inHover); continue; }
      const text = r.cssText || '';
      if (r.selectorText && /:hover/.test(r.selectorText) && !inHover && out.ungatedHover.length < 10) out.ungatedHover.push(r.selectorText);
      if (/(^|[^.\d])100vh/.test(text) && out.vh100.length < 8) out.vh100.push(r.selectorText || text.slice(0, 60));
      if (/safe-area-inset/.test(text)) out.usesSafeArea = true;
    }
  };
  for (const sheet of document.styleSheets) { try { walk(sheet.cssRules, false); } catch { out.skippedSheets++; } }
  return out;
}
