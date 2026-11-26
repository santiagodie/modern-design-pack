/*
 * Inventory comparison: reads two outputs of inventory.js (before and after a change to the same page) and lists what was lost, what changed and what was added.
 * Lost: a link destination, a form, a form's action or method, a field, a button, a heading, a landmark, the title or the description that the page had before and no longer has.
 * Changed: the same item with different text (a link's text, a field's label or type, a heading's words, a button's label, the title).
 * Returns: JSON on stdout with lost, changed, added and counts; exit code 1 when lost is not empty.
 * Reads only the two files named on the command line; writes nothing.
 * Every item is first turned into a plain object { key, text, label }; one function then compares those lists, with strings only.
 * Used from: references/regression-check.md. Run with Node, outside the page: node inventory-diff.js before.json after.json
 */
const fs = require('fs');

const beforePath = process.argv[2];
const afterPath = process.argv[3];
if (!beforePath || !afterPath) {
  console.error('usage: node inventory-diff.js before.json after.json');
  process.exit(2);
}

// playwright-cli may print the inventory as a JSON string that holds the JSON object; unwrap it once.
function parseInventory(raw) {
  const value = JSON.parse(raw);
  return typeof value === 'string' ? JSON.parse(value) : value;
}
const before = parseInventory(fs.readFileSync(beforePath, 'utf8'));
const after = parseInventory(fs.readFileSync(afterPath, 'utf8'));

const out = { lost: [], changed: [], added: [] };

// 1. Normalise each kind to { key, text, label }.
function linkItems(list) {
  const items = [];
  for (const l of list || []) items.push({ key: l.href, text: l.text, label: `${l.href} ("${l.text}")` });
  return items;
}
function fieldKey(f) {
  if (f.name) return 'name=' + f.name;
  if (f.id) return 'id=' + f.id;
  return `${f.type} "${f.label || ''}"`;
}
function fieldItems(list, formKey) {
  const items = [];
  for (const f of list || []) items.push({ key: fieldKey(f), text: `${f.type}, label "${f.label || ''}"`, label: `${fieldKey(f)} in ${formKey}` });
  return items;
}
function buttonItems(list) {
  const items = [];
  for (const b of list || []) items.push({ key: `${b.form || 'page'} ${b.type}`, text: b.text, label: `${b.type} "${b.text}"${b.form ? ' in ' + b.form : ''}` });
  return items;
}
function headingItems(list) {
  const items = [];
  for (const h of list || []) items.push({ key: 'h' + h.level, text: h.text, label: `h${h.level} "${h.text}"` });
  return items;
}
function landmarkItems(list) {
  const items = [];
  for (const l of list || []) items.push({ key: l.role, text: l.label || '', label: `${l.role}${l.label ? ' "' + l.label + '"' : ''}` });
  return items;
}

// 2. Compare two normalised lists: exact matches first, then the same key with different text (changed), then leftovers (lost, added).
function indexOfExact(list, key, text) {
  for (let j = 0; j < list.length; j++) if (list[j].key === key && list[j].text === text) return j;
  return -1;
}
function indexOfKey(list, key) {
  for (let j = 0; j < list.length; j++) if (list[j].key === key) return j;
  return -1;
}
function compare(kind, beforeItems, afterItems) {
  const left = beforeItems.slice();
  const right = afterItems.slice();
  for (let i = left.length - 1; i >= 0; i--) {
    const j = indexOfExact(right, left[i].key, left[i].text);
    if (j >= 0) { left.splice(i, 1); right.splice(j, 1); }
  }
  for (let i = 0; i < left.length; i++) {
    const j = indexOfKey(right, left[i].key);
    if (j >= 0) {
      out.changed.push({ kind, item: left[i].label, before: left[i].text, after: right[j].text });
      left.splice(i, 1); i--;
      right.splice(j, 1);
    }
  }
  for (const x of left) out.lost.push({ kind, item: x.label });
  for (const x of right) out.added.push({ kind, item: x.label });
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
compare('link', linkItems(before.links), linkItems(after.links));

// Forms: matched by key, else by action and method; then their fields.
function indexOfForm(forms, fb) {
  for (let j = 0; j < forms.length; j++) if (forms[j].key === fb.key) return j;
  for (let j = 0; j < forms.length; j++) if (forms[j].action === fb.action && forms[j].method === fb.method) return j;
  return -1;
}
const formsAfter = (after.forms || []).slice();
for (const fb of before.forms || []) {
  const j = indexOfForm(formsAfter, fb);
  if (j < 0) {
    out.lost.push({ kind: 'form', item: `${fb.key} (${fb.method || ''} ${fb.action ?? 'no action'}, ${fb.fields.length} fields)` });
    continue;
  }
  const fa = formsAfter.splice(j, 1)[0];
  if (fa.action !== fb.action) out.lost.push({ kind: 'form action', item: `${fb.key}: ${fb.action ?? 'no action'} (now ${fa.action ?? 'no action'})` });
  if (fa.method !== fb.method) out.lost.push({ kind: 'form method', item: `${fb.key}: ${fb.method} (now ${fa.method})` });
  compare('field', fieldItems(fb.fields, fb.key), fieldItems(fa.fields, fb.key));
}
for (const fa of formsAfter) out.added.push({ kind: 'form', item: `${fa.key} (${fa.fields.length} fields)` });

// Buttons, headings, landmarks.
compare('button', buttonItems(before.buttons), buttonItems(after.buttons));
compare('heading', headingItems(before.headings), headingItems(after.headings));
compare('landmark', landmarkItems(before.landmarks), landmarkItems(after.landmarks));

out.counts = { lost: out.lost.length, changed: out.changed.length, added: out.added.length };
console.log(JSON.stringify(out, null, 1));
process.exit(out.lost.length ? 1 : 0);
