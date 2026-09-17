# EZ Garage Doors — AI Operating Contract

This file is the permanent operating contract for AI work in this repository. `website/CLAUDE.md` (dev-server usage, Astro doc links) still applies for work inside `website/`. Product truth lives in `PRODUCT.md`; the design system in `DESIGN.md` (+ `.impeccable/design.json` sidecar). None of these may be contradicted silently.

## What this repository is

Lead-generation website for **EZ Garage Doors** (exact spelling; never "GARGAE", "U1", or "EZ Overhead Doors"; no owner personal name anywhere), a Massachusetts garage-door repair/installation company serving all 351 cities and towns in every county (owner decision 2026-09-17 — Connecticut removed entirely; the Springfield/Western-MA home base is never published). Repair is the business priority; installation is secondary; PPC pages feed Google Ads campaigns.

## Architecture & stack

- **Astro 7** (`website/`), fully static output (`output: static`), zero JS frameworks, vanilla CSS. TypeScript strict (`astro/tsconfigs/strict`), no path aliases.
- Fonts self-hosted via `@fontsource` (Barlow Condensed 600/700 latin, Source Sans 3 variable).
- **No database. No Supabase. No backend.** The lead form posts to `BUSINESS.FORM_ENDPOINT` (currently empty → demo-mode redirect to `/thank-you/`; leads are NOT delivered — launch blocker).
- Directory map: `website/src/pages/` (core hand-built pages plus dynamic routes: `[service]` (data services), `service-areas/[slug]` (14 counties + 351 towns), `brands/[brand]`, `garage-door-styles/[style]`, `guides/[slug]` + `guides/category/[cat]`, `ppc/garage-door-repair/[city]`), `src/components/` (+ `home/`), `src/layouts/` (BaseLayout → SiteLayout | LandingLayout), `src/styles/` (`tokens.css`, `base.css` — normative design tokens), `src/config/` (**single source of truth**: `business.ts`, `services.ts`, `service-pages.ts`, `ma-towns.ts` (generated public dataset — regenerate, don't hand-edit), `ma-counties.ts`, `brands.ts`, `door-styles.ts`, `guides/`, `ppc.ts`, `reviews.ts`, `site-images.ts`, `brand-logos.ts`), `public/`, root `Brand/` (source assets), root `docs/` (audit, claims register, QA, shot list). Build = 545 pages (520 indexable).

## Commands (run in `website/`)

- Dev server: `astro dev --background` (see `website/CLAUDE.md`; port 4321; also available via `.claude/launch.json` → `ez-website`).
- Build: `npm run build` · Typecheck: `npx astro check` (must stay at 0 errors) · Preview built site: `npm run preview`.
- No lint config and no test suite exist. Static QA: crawl the built `dist/` for metadata/H1/link/claims regressions (pattern in `docs/ez-final-qa-report.md`).

## Deployment architecture & production boundaries

- Production: Vercel, project `ez-garage-doors`, **CLI deploys only** (`npx vercel deploy --prod` from `website/`). Pushing to GitHub does **NOT** auto-deploy. Final custom domain pending; `SITE_URL` set in `astro.config.mjs` **and** `src/config/business.ts` (change both together, plus `public/robots.txt`).
- Git workflow: feature branches off `main`; `main` is the deployed state. Never commit or push without being asked. Rollback ladder: `v2026.08-projected-light` (film world, production as of 2026-08-19), `v2026.07-orange-editorial`, `082b8a8` (original). Any URL change requires a documented 301: the 16 retired Connecticut PPC URLs 301 to `/garage-door-repair/` in `website/vercel.json` (see `docs/ez-route-migration-matrix.md`); no other URL has ever changed.

## Permanent rules

A. Never deploy merely because a code change is complete.
B. Never push to production without explicit user authorization for that task.
C. No production DB exists; if any datastore is ever added, schema/data changes require explicit approval — and adding one is itself an architecture decision the user must approve.
D. Never remove SEO content, schema markup, metadata, canonicals, internal links, tracking attributes, analytics hooks, or conversion elements merely for visual cleanup.
E. Preserve existing production behavior unless the requested change requires otherwise.
F. Use current primary documentation (Context7) before implementing unfamiliar or version-sensitive APIs.
G. For UI work: load the `impeccable` skill and follow `DESIGN.md` — the incumbent "ORANGE STANDARD" world (A1-style national-brand canon in EZ orange, owner-selected 2026-09-17) is authoritative; don't invent a competing one.
H. For any React/Next.js work (none exists today): apply the `vercel-react-best-practices` and `vercel-composition-patterns` skills.
I. No Supabase in this repo; the Supabase plugin is deliberately not installed. If Supabase is ever adopted, install it and treat RLS/security review as mandatory.
J. For browser-facing changes: actually run the site and inspect it (dev server + browser tooling), don't judge from source.
K. After meaningful changes: `npm run build` + `npx astro check`, then verify behavior (`/verify` flow where available).
L. Test responsive behavior at 390/430/768/1024/1440 and the core flows: call-CTA fallback, lead-form validation → thank-you, mobile sticky bar.
M. Check browser console and network failures for relevant changes.
N. Never claim something works without having verified it.
O. Before destructive or irreversible operations (deletes, force-pushes, deploys, config resets): stop and request approval.

## Content & claims (the hard constraints)

- Every factual claim must exist in `APPROVED_CLAIMS`/`STATS`/`COVERAGE` (`src/config/business.ts`). STATS are flagged for owner correction (2026-09-17) — do not deploy until corrected figures arrive. Full allowed/banned register: `docs/ez-verified-claims.md`. Banned until owner proof: licensed/insured, 24/7, same-day guarantees, response times, authorized dealer, prices, warranties, financing, family-owned, team bios, awards.
- **No invented reviews** — `featuredReviews` in `reviews.ts` are placeholders and must never render; review proof = platform ratings/counts + outbound links only.
- **No fake phone numbers** — all call CTAs go through `CallButton`, which renders `tel:` only when `PHONE_READY`. Phone number, form endpoint, review URLs, license info are owner-supplied launch blockers.
- Images only via the `site-images.ts` manifest (`img(id)`, `approved` gate). AI technician-model photos: illustrative positions only, never proof modules, never captioned as the actual team. Every image: explicit dimensions, meaningful alt, lazy below the fold; hero images use `fetchpriority="high"`.
- Banned copy: "trusted partner", "one-stop shop", "Learn More", "Get Started", "Submit", and the rest of the list in `DESIGN.md` Do's and Don'ts.

## SEO-sensitive areas (do not regress)

- URLs are stable; sitemap excludes `/ppc/` and `/thank-you/` (filter in `astro.config.mjs`); robots.txt disallows `/thank-you/`; noindex on thank-you + all PPC pages and nowhere else.
- Schema via `src/components/Schema.astro`: LocalBusiness with State + 14-county areaServed (every page), Service + FAQPage + BreadcrumbList (service/brand/style/area pages via the `breadcrumbs` prop), Article (guides). **Deliberately absent until verified: telephone, aggregateRating, license numbers.** Do not add them.
- One H1 per page; unique title + meta description per page; canonicals derive from `Astro.site`.
- Town pages (`service-areas/[slug]`) generate for all 351 municipalities from REAL public data (`ma-towns.ts`) plus hand-written county context (`ma-counties.ts`). The anti-doorway policy applies to content: no town×service matrix, no invented per-town job history, no arrival-time promises, no home-base mention. Never add a page that carries nothing but a swapped town name.

## Tracking & conversion integrity

- `BaseLayout` inline script owns `window.dataLayer`: UTM capture (sessionStorage → hidden `data-utm` fields), `cta_click` on `[data-track]`, `form_submit` on `form[data-lead-form]`, `lead_thank_you` on `/thank-you/`. No GA4/GTM container yet — don't add one without the user's IDs.
- `LeadForm` contract: field names (`name`, `phone`, `town`, `issue`, `callback_time`, `photo`), hidden `form_context` + `landing_page` + UTMs, honeypot `company`, TCPA consent line, specific submit labels. Don't rename fields — future CRM mapping depends on them.
- PPC pages carry per-campaign ids (`ppc-gdr-<city>-ma`) used in `data-track` and `form_context`. Google Ads campaigns must be re-pointed from the retired CT slugs by the owner.

## Design system & quality bars

- Tokens: `src/styles/tokens.css` (normative) mirrored in `DESIGN.md` frontmatter. Contrast law (measured): brand orange on white is 3.05:1 → large text only (buttons pinned at 1.175rem/700); small orange type uses `--ez-orange-text` (6.6:1); never orange on the gray alt ground; small text on orange is ink; never orange-on-orange CTAs; body text ≥16px.
- No signature device by design (conventional canon). Motion budget is closed: feedback transitions only; `prefers-reduced-motion` support is mandatory.
- Accessibility: WCAG 2.2 AA; 48px tap targets; keyboard-operable everything; `aria-live` form errors.
- Performance: static output, no client frameworks, no icon fonts, no animation libraries; LCP ≤2.5s (≤2.0s on PPC) targets.

## Documentation lookup (Context7)

Use the Context7 MCP (`resolve-library-id` → `query-docs`, per `.claude/rules/context7.md`) whenever current external docs matter: Astro APIs, `@astrojs/sitemap`, Vercel platform/CLI behavior, @fontsource, sharp, and any new npm dependency — especially version-sensitive ones. Do **not** use it when this repository's own code/config is the source of truth (tokens, components, claims register, configs); read the repo instead.

## Browser tooling division of labor

- **Playwright MCP**: deterministic user-flow testing (form fill → validation → thank-you; navigation; sticky-bar behavior).
- **Chrome DevTools MCP/plugin**: console errors, network, performance traces, LCP/memory debugging.
- Don't run both for the same simple check. The in-app preview (`.claude/launch.json` → `ez-website`) is fine for quick inspection.

## Async/background conventions

Dev server runs backgrounded (`astro dev --background`). Long builds/installs: background them rather than blocking. No CI pipelines or scheduled jobs exist in this repo.
