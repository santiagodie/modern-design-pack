/*
 * Inventory comparison: reads two outputs of inventory.js (before and after a change to the same page) and lists what was lost, what changed and what was added.
 * Lost: a link destination, a form, a form's action or method, a field, a button, a heading, a landmark, the title or the description that the page had before and no longer has.
 * Changed: the same item with different text (a link's text, a field's label or type, a heading's words, a button's label, the title).
 * Returns: JSON on stdout with lost, changed, added and counts; exit code 1 when lost is not empty.
 * Used from: references/regression-check.md. Run with Node, outside the page: node inventory-diff.js before.json after.json
 */
const fs = require('fs');
const [beforePath, afterPath] = process.argv.slice(2);
if (!beforePath || !afterPath) { console.error('usage: node inventory-diff.js before.json after.json'); process.exit(2); }
const read = p => { const j = JSON.parse(fs.readFileSync(p, 'utf8')); return typeof j === 'string' ? JSON.parse(j) : j; };
const before = read(beforePath), after = read(afterPath);
const out = { lost: [], changed: [], added: [] };

// Pair two lists: exact matches first, then the same key with different text (changed), then leftovers (lost, added).
function pair(kind, b, a, key, text, show) {
  const left = [...(b || [])], right = [...(a || [])];
  for (let i = left.length - 1; i >= 0; i--) {
    const j = right.findIndex(r => key(r) === key(left[i]) && text(r) === text(left[i]));
    if (j >= 0) { left.splice(i, 1); right.splice(j, 1); }
  }
  for (let i = 0; i < left.length; i++) {
    const j = right.findIndex(r => key(r) === key(left[i]));
    if (j >= 0) { out.changed.push({ kind, item: show(left[i]), before: text(left[i]), after: text(right[j]) }); left.splice(i--, 1); right.splice(j, 1); }
  }
  left.forEach(x => out.lost.push({ kind, item: show(x) }));
  right.forEach(x => out.added.push({ kind, item: show(x) }));
}

for (const f of ['title', 'description']) {
  if (before[f] && !after[f]) out.lost.push({ kind: f, item: before[f] });
  else if (!before[f] && after[f]) out.added.push({ kind: f, item: after[f] });
  else if (before[f] !== after[f]) out.changed.push({ kind: f, item: f, before: before[f], after: after[f] });
}

pair('link', before.links, after.links, l => l.href, l => l.text, l => `${l.href} ("${l.text}")`);

const fieldKey = f => f.name ? 'name=' + f.name : f.id ? 'id=' + f.id : `${f.type} "${f.label || ''}"`;
const formsAfter = [...(after.forms || [])];
for (const fb of before.forms || []) {
  let j = formsAfter.findIndex(fa => fa.key === fb.key);
  if (j < 0) j = formsAfter.findIndex(fa => fa.action === fb.action && fa.method === fb.method);
  if (j < 0) { out.lost.push({ kind: 'form', item: `${fb.key} (${fb.method || ''} ${fb.action ?? 'no action'}, ${fb.fields.length} fields)` }); continue; }
  const fa = formsAfter.splice(j, 1)[0];
  if (fa.action !== fb.action) out.lost.push({ kind: 'form action', item: `${fb.key}: ${fb.action ?? 'no action'} (now ${fa.action ?? 'no action'})` });
  if (fa.method !== fb.method) out.lost.push({ kind: 'form method', item: `${fb.key}: ${fb.method} (now ${fa.method})` });
  pair('field', fb.fields, fa.fields, fieldKey, f => `${f.type}, label "${f.label || ''}"`, f => `${fieldKey(f)} in ${fb.key}`);
}
formsAfter.forEach(fa => out.added.push({ kind: 'form', item: `${fa.key} (${fa.fields.length} fields)` }));

pair('button', before.buttons, after.buttons, b => `${b.form || 'page'} ${b.type}`, b => b.text, b => `${b.type} "${b.text}"${b.form ? ' in ' + b.form : ''}`);
pair('heading', before.headings, after.headings, h => 'h' + h.level, h => h.text, h => `h${h.level} "${h.text}"`);
pair('landmark', before.landmarks, after.landmarks, l => l.role, l => l.label || '', l => `${l.role}${l.label ? ' "' + l.label + '"' : ''}`);

out.counts = { lost: out.lost.length, changed: out.changed.length, added: out.added.length };
console.log(JSON.stringify(out, null, 1));
process.exit(out.lost.length ? 1 : 0);
