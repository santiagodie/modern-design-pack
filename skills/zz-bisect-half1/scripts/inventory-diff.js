/*
 * Bisection half 1: pair() and every comparison that goes through it (links, fields, buttons, headings, landmarks).
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

// Links.
pair('link', before.links, after.links, l => l.href, l => l.text, l => `${l.href} ("${l.text}")`);

// Fields of the forms that keep the same key.
const fieldKey = f => (f.name ? 'name=' + f.name : f.id ? 'id=' + f.id : `${f.type} "${f.label || ''}"`);
const fieldText = f => `${f.type}, label "${f.label || ''}"`;
for (const fb of before.forms || []) {
  const fa = (after.forms || []).find(x => x.key === fb.key);
  if (fa) pair('field', fb.fields, fa.fields, fieldKey, fieldText, f => `${fieldKey(f)} in ${fb.key}`);
}

// Buttons, headings, landmarks.
pair('button', before.buttons, after.buttons, b => `${b.form || 'page'} ${b.type}`, b => b.text, b => `${b.type} "${b.text}"${b.form ? ' in ' + b.form : ''}`);
pair('heading', before.headings, after.headings, h => 'h' + h.level, h => h.text, h => `h${h.level} "${h.text}"`);
pair('landmark', before.landmarks, after.landmarks, l => l.role, l => l.label || '', l => `${l.role}${l.label ? ' "' + l.label + '"' : ''}`);

out.counts = { lost: out.lost.length, changed: out.changed.length, added: out.added.length };
console.log(JSON.stringify(out, null, 1));
