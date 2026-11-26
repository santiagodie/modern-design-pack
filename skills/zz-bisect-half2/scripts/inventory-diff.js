/*
 * Bisection half 2: single() for title and description, and the form matching (by key, else by action and method; lost action or method; added forms). No pair().
 * Two small inventories written as constants; no file, no standard input, no process.
 */
const before = {
  title: 'Shop', description: 'A shop',
  links: [{ href: '/', text: 'Home' }, { href: '/cookies', text: 'Cookies' }],
  forms: [{ key: 'form#order', action: '/order', method: 'post', fields: [{ name: 'name', id: 'name', type: 'text', label: 'Name' }, { name: 'phone', id: 'phone', type: 'tel', label: 'Phone' }] }],
  buttons: [{ type: 'submit', text: 'Send', form: 'form#order' }],
  headings: [{ level: 1, text: 'Shop' }],
  landmarks: [{ role: 'main', label: null }]
};
const after = {
  title: 'Shop', description: 'A shop',
  links: [{ href: '/', text: 'Home' }],
  forms: [{ key: 'form#order', action: '/order', method: 'post', fields: [{ name: 'name', id: 'name', type: 'text', label: 'Name' }] }],
  buttons: [{ type: 'submit', text: 'Send', form: 'form#order' }],
  headings: [{ level: 1, text: 'Shop' }],
  landmarks: [{ role: 'main', label: null }]
};

const out = { lost: [], changed: [], added: [] };

// Title and description: two fixed fields, compared one by one.
function single(kind, b, a) {
  if (b && !a) out.lost.push({ kind, item: b });
  else if (!b && a) out.added.push({ kind, item: a });
  else if (b !== a) out.changed.push({ kind, item: kind, before: b, after: a });
}
single('title', before.title, after.title);
single('description', before.description, after.description);

// Forms: matched by key, else by action and method.
const formsAfter = (after.forms || []).slice();
for (const fb of before.forms || []) {
  let j = formsAfter.findIndex(fa => fa.key === fb.key);
  if (j < 0) j = formsAfter.findIndex(fa => fa.action === fb.action && fa.method === fb.method);
  if (j < 0) {
    out.lost.push({ kind: 'form', item: `${fb.key} (${fb.method || ''} ${fb.action ?? 'no action'}, ${fb.fields.length} fields)` });
    continue;
  }
  const fa = formsAfter.splice(j, 1)[0];
  if (fa.action !== fb.action) out.lost.push({ kind: 'form action', item: `${fb.key}: ${fb.action ?? 'no action'} (now ${fa.action ?? 'no action'})` });
  if (fa.method !== fb.method) out.lost.push({ kind: 'form method', item: `${fb.key}: ${fb.method} (now ${fa.method})` });
}
formsAfter.forEach(fa => out.added.push({ kind: 'form', item: `${fa.key} (${fa.fields.length} fields)` }));

out.counts = { lost: out.lost.length, changed: out.changed.length, added: out.added.length };
console.log(JSON.stringify(out, null, 1));
