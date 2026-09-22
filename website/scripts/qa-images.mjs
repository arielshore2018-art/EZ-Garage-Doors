// Image acceptance checks over dist/ (run `npm run build` first, then `npm run qa:images`).
// Exits 1 on any failure. Rules come from docs/ez-image-implementation-brief.md §5
// and the imagery section of DESIGN.md.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const DIST = fileURLToPath(new URL("../dist", import.meta.url));
if (!fs.existsSync(DIST)) {
  console.error("dist/ not found — run `npm run build` first.");
  process.exit(1);
}

const walk = (dir, out = []) => {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name === "index.html") out.push(p);
  }
  return out;
};
const toUrl = (p) => {
  const rel = path.relative(DIST, path.dirname(p)).split(path.sep).join("/");
  return rel ? `/${rel}/` : "/";
};
/* "/_astro/name.HASH_variant.webp" -> "name" */
const base = (src) =>
  decodeURIComponent(src.split("/").pop())
    .replace(/\.[A-Za-z0-9_-]{8}_[A-Za-z0-9_-]+\.(webp|png|jpe?g|avif)$/, "")
    .replace(/\.[A-Za-z0-9_-]{8}\.(webp|png|jpe?g|svg)$/, "");

const pages = walk(DIST).map((p) => ({ url: toUrl(p), html: fs.readFileSync(p, "utf8") }));
const isLogo = (src) => /logo|five-stars|favicon/.test(src);

const report = { imageless: [], heroes: {}, stockInProof: [], missingAlt: [], noDims: [] };
for (const { url, html } of pages) {
  const imgs = [...html.matchAll(/<img\b[^>]*>/g)].map((m) => m[0]);
  const content = imgs.filter((t) => /src="\/_astro\//.test(t) && !isLogo(t.match(/src="([^"]+)"/)[1]));
  if (content.length === 0) report.imageless.push(url);
  for (const t of content) {
    if (!/\balt="[^"]+"/.test(t)) report.missingAlt.push(`${url} ${t.slice(0, 80)}`);
    if (!/\bwidth="\d+"/.test(t) || !/\bheight="\d+"/.test(t)) report.noDims.push(`${url} ${t.slice(0, 80)}`);
  }
  const hero = content.find((t) => /fetchpriority="high"/.test(t));
  if (hero) report.heroes[url] = base(hero.match(/src="([^"]+)"/)[1]);

  // proof modules must never contain stock imagery (the components also throw at build time)
  for (const re of [/<section class="wg[\s\S]*?<\/section>/g, /<figure class="ba-pair"[\s\S]*?<\/figure>/g, /<ul class="door-grid"[\s\S]*?<\/ul>/g]) {
    for (const m of html.matchAll(re)) if (/stock-/.test(m[0])) report.stockInProof.push(url);
  }
}

// ---- imageless pages: allowed by design ----
const ALLOWED_IMAGELESS = new Set(["/reviews/", "/privacy-policy/", "/terms/", "/thank-you/", "/brands/"]);
const imageless = report.imageless.filter((u) => !ALLOWED_IMAGELESS.has(u));

// ---- hero uniqueness per route family ----
const family = (u) => {
  if (/^\/ppc\//.test(u)) return null; // rotate over five heroes by design
  if (/^\/service-areas\/.+-ma\/$/.test(u)) return null; // towns inherit the county banner (lazy, not a priority hero)
  if (/^\/service-areas\/.+-county\/$/.test(u)) return "county";
  if (/^\/guides\/category\//.test(u)) return "guide-category";
  if (/^\/guides\/[^/]+\/$/.test(u)) return null; // articles default to the category image by design
  if (/^\/garage-door-styles\/[^/]+\/$/.test(u)) return "style";
  if (/^\/brands\//.test(u)) return null;
  return "site"; // home, hubs, core + data service pages, company pages
};
// Documented interim duplicates (docs/ez-missing-asset-shot-list.md items 6-7). Delete entries as photos arrive.
const INTERIM_DUP = {
  "opener-rail-detail": ["/garage-door-openers/", "/garage-door-opener-repair/", "/garage-door-safety-sensor-repair/"],
};
const byFamily = {};
for (const [u, h] of Object.entries(report.heroes)) {
  const f = family(u);
  if (!f) continue;
  ((byFamily[f] ??= {})[h] ??= []).push(u);
}
const dupes = [];
const interim = [];
for (const [f, map] of Object.entries(byFamily))
  for (const [h, urls] of Object.entries(map))
    if (urls.length > 1) {
      const allowed = INTERIM_DUP[h] && urls.every((u) => INTERIM_DUP[h].includes(u));
      (allowed ? interim : dupes).push(`[${f}] ${h}: ${urls.join(", ")}`);
    }

// ---- county hero photos: 14 distinct, every town inherits its county's ----
const banner = {};
for (const { url, html } of pages) {
  if (!/^\/service-areas\/.+-(county|ma)\/$/.test(url)) continue;
  const m = html.match(/<figure class="ahero__media[\s\S]*?<img[^>]*src="([^"]+)"/);
  banner[url] = m ? base(m[1]) : null;
}
const counties = Object.entries(banner).filter(([u]) => /-county\/$/.test(u));
const towns = Object.entries(banner).filter(([u]) => /-ma\/$/.test(u));
const distinctCounty = new Set(counties.map(([, b]) => b)).size;
const townsWithBanner = towns.filter(([, b]) => b).length;

// ---- PPC mobile hero weight (smallest srcset candidate) ----
const weights = {};
for (const { html } of pages.filter((p) => /^\/ppc\//.test(p.url))) {
  const tag = (html.match(/<img\b[^>]*fetchpriority="high"[^>]*>/) || [])[0] || "";
  const first = ((tag.match(/srcset="([^"]+)"/) || [])[1] || "").split(",")[0].trim();
  const [src, w] = first.split(" ");
  if (!src) continue;
  const f = path.join(DIST, decodeURIComponent(src));
  if (fs.existsSync(f)) weights[base(src)] = `${Math.round(fs.statSync(f).size / 1024)}KB @${w}`;
}

const failures = [];
if (imageless.length) failures.push(`imageless pages: ${imageless.join(", ")}`);
if (dupes.length) failures.push(`duplicate primary heroes:\n    ${dupes.join("\n    ")}`);
if (distinctCounty !== counties.length) failures.push(`county banners not distinct: ${distinctCounty}/${counties.length}`);
if (townsWithBanner !== towns.length) failures.push(`towns without a county banner: ${towns.length - townsWithBanner}`);
if (report.stockInProof.length) failures.push(`stock imagery inside proof modules: ${[...new Set(report.stockInProof)].join(", ")}`);
if (report.missingAlt.length) failures.push(`content images missing alt: ${report.missingAlt.length}`);
if (report.noDims.length) failures.push(`content images missing width/height: ${report.noDims.length}`);

console.log(`pages: ${pages.length}`);
console.log(`imageless by design: ${report.imageless.length - imageless.length} · not allowed: ${imageless.length}`);
console.log(`county banners: ${distinctCounty}/${counties.length} distinct · towns inheriting: ${townsWithBanner}/${towns.length}`);
console.log(`interim hero duplicates (documented): ${interim.length ? "\n  " + interim.join("\n  ") : "none"}`);
console.log(`stock in proof modules: ${report.stockInProof.length} · missing alt: ${report.missingAlt.length} · missing dimensions: ${report.noDims.length}`);
console.log("PPC smallest hero variant:", weights);
if (failures.length) {
  console.error(`\nFAIL\n  ${failures.join("\n  ")}`);
  process.exit(1);
}
console.log("\nPASS");
