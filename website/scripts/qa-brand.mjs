// Crawl the complete static site after building. No external services are contacted.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const dist = fileURLToPath(new URL('../dist/', import.meta.url));
function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : p.endsWith('.html') ? [p] : [];
  });
}
const pages = walk(dist);
const errors = [];
let links = 0;
for (const file of pages) {
  const relative = path.relative(dist, file).replaceAll(path.sep, '/');
  const url = '/' + relative.replace(/index\.html$/, '');
  const html = fs.readFileSync(file, 'utf8');
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(m => m[1]);
  if (new Set(ids).size !== ids.length) errors.push(`${url}: duplicate IDs`);
  if ((html.match(/<h1[\s>]/g) ?? []).length !== 1) errors.push(`${url}: expected one h1`);
  for (const match of html.matchAll(/\saria-labelledby="([^"]+)"/g)) {
    for (const id of match[1].split(' ')) if (!ids.includes(id)) errors.push(`${url}: missing label #${id}`);
  }
  for (const match of html.matchAll(/<a\b[^>]*\shref="([^"]+)"/g)) {
    const href = match[1].replaceAll('&amp;', '&');
    if (!href.startsWith('/') && !href.startsWith('#')) continue;
    links++;
    const target = new URL(href, 'http://localhost' + url);
    const pathname = decodeURIComponent(target.pathname);
    const dest = path.join(dist, pathname, pathname.endsWith('/') ? 'index.html' : '');
    if (!fs.existsSync(dest)) { errors.push(`${url}: missing ${href}`); continue; }
    if (target.hash && dest.endsWith('.html')) {
      const content = dest === file ? html : fs.readFileSync(dest, 'utf8');
      if (!content.includes(`id="${decodeURIComponent(target.hash.slice(1))}"`)) errors.push(`${url}: missing anchor ${href}`);
    }
  }
}
console.log(`${pages.length} pages; ${links} internal links checked.`);
console.log(errors.length ? errors.slice(0, 40).join('\n') : 'PASS: headings, IDs, section labels, internal links, and anchors.');
if (errors.length) { console.log(`${errors.length} issues total`); process.exitCode = 1; }
