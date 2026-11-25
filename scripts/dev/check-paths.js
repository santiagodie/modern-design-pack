// Usage: node scripts/dev/check-paths.js [repo-root]  (checks every references/ path and relative link in skills/; run after moving or renaming any file in skills/)
const fs = require('fs');
const path = require('path');

const root = path.resolve(process.argv[2] || '.');
const skillsDir = path.join(root, 'skills');

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : (/\.(md|js)$/.test(e.name) ? [p] : []);
  });
}

function clean(p) {
  return p.replace(/[#§].*$/, '').replace(/[.,;:)]+$/, '');
}

const files = walk(skillsDir);
let checked = 0;
const broken = [];
const kinds = {};

for (const file of files) {
  const rel = path.relative(root, file).split(path.sep).join('/');
  const skill = rel.split('/')[1];
  const lines = fs.readFileSync(file, 'utf8').split('\n');
  lines.forEach((line, i) => {
    const found = [];
    // A/B: ${CLAUDE_SKILL_DIR}/../modern-design/references/... or modern-design/references/...
    for (const m of line.matchAll(/(?:\$\{CLAUDE_SKILL_DIR\}\/\.\.\/|\.\.\/)?modern-design\/references\/[A-Za-z0-9_./-]*/g)) {
      found.push({ kind: 'modern-design/references', raw: m[0], target: path.join(skillsDir, m[0].replace(/^.*?modern-design\//, 'modern-design/')) });
    }
    // C: references/... not preceded by modern-design/ (optionally "design-review references/...")
    for (const m of line.matchAll(/(^|[^A-Za-z0-9_/-])((?:(design-review|modern-design) )?references\/[A-Za-z0-9_./-]*)/g)) {
      const raw = m[2];
      const owner = m[3] || skill;
      const p = raw.replace(/^(design-review|modern-design) /, '');
      found.push({ kind: 'references/', raw, target: path.join(skillsDir, owner, p) });
    }
    // D: markdown links with local targets
    for (const m of line.matchAll(/\]\(([^)\s]+)\)/g)) {
      const t = m[1];
      if (/^(https?:|mailto:|#)/.test(t)) continue;
      found.push({ kind: 'md-link', raw: t, target: path.resolve(path.dirname(file), t) });
    }
    // E: backticked relative paths ../x or ./x
    for (const m of line.matchAll(/`(\.{1,2}\/[^`\s]+)`/g)) {
      if (m[1].includes('modern-design/references')) continue;
      found.push({ kind: 'relative', raw: m[1], target: path.resolve(path.dirname(file), m[1]) });
    }
    for (const f of found) {
      if (line.slice(line.indexOf(f.raw) + f.raw.length).startsWith(" (planned)")) continue;
      if (/[<…*{]/.test(f.raw.replace('${CLAUDE_SKILL_DIR}', ''))) continue; // placeholders and globs
      const target = clean(f.target);
      checked++;
      kinds[f.kind] = (kinds[f.kind] || 0) + 1;
      if (!fs.existsSync(target)) broken.push(`${rel}:${i + 1}  [${f.kind}]  ${f.raw}`);
    }
  });
}

console.log(`Files scanned: ${files.length}`);
console.log(`Paths checked: ${checked} (${Object.entries(kinds).map(([k, v]) => `${k}: ${v}`).join(', ')})`);
console.log(`Broken: ${broken.length}`);
broken.forEach(b => console.log('  ' + b));
process.exit(broken.length ? 1 : 0);
