/*
 * Inventory comparison: reads two outputs of inventory.js (before and after a change to the same page) and lists what was lost, what changed and what was added.
 * Returns: JSON on stdout with lost, changed, added and counts; exit code 1 when lost is not empty.
 * Bisection control: two small inventories written as constants; no file, no standard input, no process.
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

// Pair two lists: exact matches first, then the same key with different text (changed), then leftovers (lost, added).
function pair(kind, b, a, key, text, show) {
  const left = (b || []).slice();
  const right = (a || []).slice();
  for (let i = left.length - 1; i >= 0; i--) {
    const j = right.findIndex(r => key(r) === key(left[i]) && text(r) === text(left[i]));
    if (j >= 0) { left.splice(i, 1); right.splice(j, 1); }
  }
  for (let i = 0; i < left.length; i++) {
    const j = right.findIndex(r => key(r) === key(left[i]));
    if (j >= 0) {
      out.changed.push({ kind, item: show(left[i]), before: text(left[i]), after: text(right[j]) });
      left.splice(i, 1); i--;
      right.splice(j, 1);
    }
  }
  left.forEach(x => out.lost.push({ kind, item: show(x) }));
  right.forEach(x => out.added.push({ kind, item: show(x) }));
}

// Title and description: two fixed fields, compared one by one.
function single(kind, b, a) {
  if (b && !a) out.lost.push({ kind, item: b });
  else if (!b && a) out.added.push({ kind, item: a });
  else if (b !== a) out.changed.push({ kind, item: kind, before: b, after: a });
}
single('title', before.title, after.title);
single('description', before.description, after.description);

// Links.
pair('link', before.links, after.links, l => l.href, l => l.text, l => `${l.href} ("${l.text}")`);

// Forms: matched by key, else by action and method; then their fields.
const fieldKey = f => (f.name ? 'name=' + f.name : f.id ? 'id=' + f.id : `${f.type} "${f.label || ''}"`);
const fieldText = f => `${f.type}, label "${f.label || ''}"`;
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
  pair('field', fb.fields, fa.fields, fieldKey, fieldText, f => `${fieldKey(f)} in ${fb.key}`);
}
formsAfter.forEach(fa => out.added.push({ kind: 'form', item: `${fa.key} (${fa.fields.length} fields)` }));

// Buttons, headings, landmarks.
pair('button', before.buttons, after.buttons, b => `${b.form || 'page'} ${b.type}`, b => b.text, b => `${b.type} "${b.text}"${b.form ? ' in ' + b.form : ''}`);
pair('heading', before.headings, after.headings, h => 'h' + h.level, h => h.text, h => `h${h.level} "${h.text}"`);
pair('landmark', before.landmarks, after.landmarks, l => l.role, l => l.label || '', l => `${l.role}${l.label ? ' "' + l.label + '"' : ''}`);

out.counts = { lost: out.lost.length, changed: out.changed.length, added: out.added.length };
console.log(JSON.stringify(out, null, 1));
