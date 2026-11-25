/*
 * Page inventory: what a page links to, submits and announces, so a change to an existing page can be checked for losses.
 * Returns: an object with url, title, description, links (href, text), forms (key, action, method, fields with name, type and label), buttons (type, text, form), headings (level, text) and landmarks (role, label).
 * Same-origin links and form actions are recorded as path, query and hash, so two servers on different ports compare equal.
 * Used from: references/regression-check.md, before and after the change, at 1440 px; compare the two outputs with scripts/inventory-diff.js.
 * Run it by passing this whole file to playwright-cli --raw eval (see visual-qa.md, "How to run the scripts").
 */
() => {
  const clean = t => (t || '').replace(/\s+/g, ' ').trim().slice(0, 120);
  const where = raw => {
    if (raw === null || raw === undefined) return null;
    try {
      const u = new URL(raw, location.href);
      return u.origin === location.origin ? u.pathname + u.search + u.hash : u.href;
    } catch { return raw; }
  };
  const byIds = ids => (ids || '').split(/\s+/).map(id => document.getElementById(id)?.textContent || '').join(' ');
  const name = el => clean(el.getAttribute('aria-label') || byIds(el.getAttribute('aria-labelledby')) || el.innerText || el.value || el.getAttribute('title') || el.querySelector('img[alt]')?.alt);
  const labelOf = el => clean(el.getAttribute('aria-label') || byIds(el.getAttribute('aria-labelledby')) ||
    [...(el.labels || [])].map(l => l.innerText).join(' ')) || null;
  const forms = [...document.forms].map((f, i) => {
    const action = f.getAttribute('action');
    return {
      key: f.id ? 'form#' + f.id : f.getAttribute('name') ? 'form[name=' + f.getAttribute('name') + ']' : 'form ' + (i + 1),
      action: action === null ? null : where(action),
      method: (f.getAttribute('method') || 'get').toLowerCase(),
      fields: [...f.elements].filter(e => /^(INPUT|SELECT|TEXTAREA)$/.test(e.tagName) && !/^(submit|button|reset|image)$/.test(e.type))
        .map(e => ({ name: e.name || null, id: e.id || null, type: e.tagName === 'INPUT' ? e.type : e.tagName.toLowerCase(), label: labelOf(e) }))
    };
  });
  const formKey = el => { const f = el.form || el.closest('form'); if (!f) return null; return forms[[...document.forms].indexOf(f)]?.key ?? null; };
  const loose = [...document.querySelectorAll('input, select, textarea')]
    .filter(e => !e.form && !/^(submit|button|reset|image|hidden)$/.test(e.type))
    .map(e => ({ name: e.name || null, id: e.id || null, type: e.tagName === 'INPUT' ? e.type : e.tagName.toLowerCase(), label: labelOf(e) }));
  if (loose.length) forms.push({ key: '(fields outside any form)', action: null, method: null, fields: loose });
  const implicit = { HEADER: 'banner', NAV: 'navigation', MAIN: 'main', ASIDE: 'complementary', FOOTER: 'contentinfo', SEARCH: 'search' };
  const landmarks = [...document.querySelectorAll('header, nav, main, aside, footer, search, section[aria-label], section[aria-labelledby], form[aria-label], form[aria-labelledby], [role="banner"], [role="navigation"], [role="main"], [role="complementary"], [role="contentinfo"], [role="search"], [role="region"], [role="form"]')]
    .filter(el => !((el.tagName === 'HEADER' || el.tagName === 'FOOTER') && !el.getAttribute('role') && el.parentElement?.closest('article, aside, main, nav, section')))
    .map(el => ({ role: el.getAttribute('role') || implicit[el.tagName] || (el.tagName === 'SECTION' ? 'region' : 'form'),
      label: clean(el.getAttribute('aria-label') || byIds(el.getAttribute('aria-labelledby'))) || null }));
  return {
    url: location.pathname + location.search,
    title: document.title || null,
    description: document.querySelector('meta[name="description"]')?.content ?? null,
    links: [...document.querySelectorAll('a[href], area[href]')].map(a => ({ href: where(a.getAttribute('href')), text: name(a) })),
    forms,
    buttons: [...document.querySelectorAll('button, input[type="submit"], input[type="button"], input[type="reset"], input[type="image"], [role="button"]')]
      .map(b => ({ type: b.tagName === 'BUTTON' || b.tagName === 'INPUT' ? b.type : 'role=button', text: name(b), form: formKey(b) })),
    headings: [...document.querySelectorAll('h1, h2, h3, h4, h5, h6, [role="heading"]')]
      .map(h => ({ level: Number(h.getAttribute('aria-level')) || Number(h.tagName[1]) || 2, text: clean(h.textContent) })),
    landmarks
  };
}
