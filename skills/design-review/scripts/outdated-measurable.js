/*
 * Outdated, measurable (OM3-OM9, OM11): render-blocking scripts, icon fonts, images without srcset or modern formats, lazy images, jQuery, third-party files without SRI, balanced headings, inputs without autocomplete.
 * Returns: an object with blockingScripts, iconFont, imagesWithoutSrcset, modernImageFormats, lazyImages, jquery, thirdPartyWithoutSri, balancedHeadings and inputsWithoutAutocomplete.
 * Used from: references/unslop-checklist.md ("Outdated, measurable"), at 1440 px.
 * Run it by passing this whole file to playwright-cli --raw eval (see the .md above).
 */
() => {
  const scripts = [...document.scripts];
  const imgs = [...document.images].filter(i => i.naturalWidth > 400);
  const host = location.hostname;
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
      .filter(e => { try { return new URL(e.src || e.href).hostname !== host && !e.integrity; } catch { return false; } })
      .length,
    balancedHeadings: [...document.querySelectorAll('h1, h2')].filter(h => getComputedStyle(h).textWrap?.includes('balance')).length +
      ' of ' + document.querySelectorAll('h1, h2').length,
    inputsWithoutAutocomplete: [...document.querySelectorAll('input:not([type=hidden]):not([type=submit]):not([type=checkbox]):not([type=radio])')]
      .filter(i => !i.autocomplete).length
  };
}
