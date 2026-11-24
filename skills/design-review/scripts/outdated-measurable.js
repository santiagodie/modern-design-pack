/*
 * Outdated, measurable (OM3-OM9, OM11, OM13): render-blocking scripts, icon fonts, images without srcset or modern formats, lazy images, jQuery, third-party files without SRI (Google Fonts excluded, see OM13), balanced headings, inputs without autocomplete, fonts loaded from Google Fonts.
 * Returns: an object with blockingScripts, iconFont, imagesWithoutSrcset, modernImageFormats, lazyImages, jquery, thirdPartyWithoutSri, balancedHeadings, inputsWithoutAutocomplete and googleFonts.
 * Used from: references/outdated-checklist.md ("Outdated, measurable"), at 1440 px.
 * Run it by passing this whole file to playwright-cli --raw eval (see the .md above).
 */
() => {
  const scripts = [...document.scripts];
  const imgs = [...document.images].filter(i => i.naturalWidth > 400);
  const host = location.hostname;
  const fontHosts = /(^|\.)fonts\.(googleapis|gstatic)\.com$/;
  const hostOf = u => { try { return new URL(u, location.href).hostname; } catch { return ''; } };
  const importedFonts = [];
  for (const sheet of document.styleSheets) {
    let rules = [];
    try { rules = [...sheet.cssRules]; } catch { continue; }
    for (const r of rules) if (r.href && fontHosts.test(hostOf(r.href))) importedFonts.push(r.href);
  }
  return {
    blockingScripts: [...document.head.querySelectorAll('script[src]')]
      .filter(s => !s.defer && !s.async && s.type !== 'module').map(s => s.src).slice(0, 8),
    iconFont: [...document.styleSheets].some(s => /font-?awesome|icomoon|glyphicons|material-icons/i.test(s.href || '')) ||
      !!document.querySelector('i[class*="fa-"], .glyphicon'),
    imagesWithoutSrcset: imgs.filter(i => !i.srcset && !i.closest('picture')).length,
    modernImageFormats: imgs.filter(i => /\.(webp|avif)(\?|$)/i.test(i.currentSrc)).length + ' of ' + imgs.length,
    lazyImages: [...document.images].filter(i => i.loading === 'lazy').length + ' of ' + document.images.length,
    jquery: window.jQuery ? window.jQuery.fn.jquery : null,
    thirdPartyWithoutSri: [...document.querySelectorAll('script[src], link[rel="stylesheet"]')]
      .filter(e => { const h = hostOf(e.src || e.href); return h && h !== host && !fontHosts.test(h) && !e.integrity; })
      .length,
    balancedHeadings: [...document.querySelectorAll('h1, h2')].filter(h => getComputedStyle(h).textWrap?.includes('balance')).length +
      ' of ' + document.querySelectorAll('h1, h2').length,
    inputsWithoutAutocomplete: [...document.querySelectorAll('input:not([type=hidden]):not([type=submit]):not([type=checkbox]):not([type=radio])')]
      .filter(i => !i.autocomplete).length,
    googleFonts: [...document.querySelectorAll('link[rel~="stylesheet"][href]')]
      .map(l => l.href).filter(u => fontHosts.test(hostOf(u)))
      .concat(importedFonts).slice(0, 8)
  };
}
