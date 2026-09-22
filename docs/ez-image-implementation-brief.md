# EZ Garage Doors — Image Implementation Brief (for Claude Code)

**Date:** 2026-09-17 · **Repo:** `EZ Garage Doors/website` (Astro 7, static) · **Owner request:** the site has almost no imagery outside a handful of service pages; add photography site-wide.

Read `CLAUDE.md`, `PRODUCT.md`, `DESIGN.md` and `docs/ez-verified-claims.md` first. Everything below operates inside those rules. Nothing here authorizes a deploy.

---

## 0. What this brief delivers

1. **Audit** of where the site currently has no image, or reuses the same image (§1).
2. **New stock photography** already downloaded to `Brand/photos/stock/` with a manifest (`Brand/photos/stock/manifest.csv`) (§2).
3. **Page-by-page assignment** of images to pages, sections, and components (§3).
4. **Items that still need AI generation or real photography** (hardware close-ups, real team) with prompts (§4).
5. **Implementation steps** in the codebase, in order, with acceptance criteria (§5).

---

## 1. Audit — current state of imagery

Source of truth: `src/config/site-images.ts` (28 approved images) and grep of `img(` / `imageId` across `src/`.

### 1.1 Pages and templates with NO image at all

| Route / template | Notes |
|---|---|
| `/contact/` (`pages/contact.astro`) | Form + county grid only. |
| `/reviews/` | Platform logos only. |
| `/services/` hub | Service grid, no hero visual. |
| `/garage-door-replacement-cost/` | Cost factors list, no hero. |
| `/same-day-garage-door-service/` | Text only. |
| `/service-areas/` index | 351-town link list, no visual. |
| `/service-areas/<county>-county/` (14 pages) | Hand-written county copy, no visual. |
| `/service-areas/<town>-ma/` (351 pages) | Data-driven, no visual. |
| `/guides/` index, `/guides/category/<cat>/` (9), `/guides/<slug>/` (87) | Pure prose. |
| `/brands/` index + 14 brand pages | Brand logo only (fine), no photo. |
| `/thank-you/`, `/privacy-policy/`, `/terms/` | Leave as is (thank-you may get the van image; legal pages none). |

### 1.2 Pages reusing the same hero (violates the "own primary visual" rule in `site-images.ts`)

| Image id | Used on |
|---|---|
| `opener-rail` | `/garage-door-openers/`, `/garage-door-opener-repair/`, `garage-door-safety-sensor-repair`, `smart-garage-door-opener` (4×) |
| `hero-active-repair` | `garage-door-wont-close`, `noisy-garage-door-repair`, PPC rotation (3×) |
| `van-front` | Home hero, `/commercial-garage-door-repair/` hero, `commercial-garage-door-maintenance` hero, repair WorkGallery (4×) — a residential van is the wrong visual for the two commercial pages |
| `spring-winding` / `spring-safety` / `broken-spring` / `new-springs` | Spread across spring, emergency, hinge, drum, tune-up pages — hinges and drums have no matching hardware photo |

### 1.3 Gaps by subject (what simply does not exist in the asset set)

- **Openers:** no ceiling opener unit, no remote, no keypad, no wall button, no photo-eye sensors, no smart-app shot, no battery backup, no jackshaft/wall-mount unit. Only `opener-rail`.
- **Repair hardware:** no cable drum, frayed cable, roller (nylon vs steel), hinge, bent track, off-track door, dented panel, bottom seal/weatherstripping, lubrication, extension springs, emergency release cord.
- **Commercial:** zero photos (docs note the page "stays text-led").
- **Local / Massachusetts:** zero county or region visuals, no New England housing stock, no winter.
- **Guides:** zero images for 87 articles / 9 categories.
- **Process / trust:** no phone-call, no written-quote-in-hand (except AI `quote-tablet`), no handshake.
- **og:image:** `public/og-default.png` exists; per-page OG images do not (optional, §5.8).

---

## 2. New assets delivered

Folder: `Brand/photos/stock/` — 50 JPGs at 1800px on the long edge (one at 2400px), re-encoded from the originals; the `source_url` column in the manifest links to the full-resolution original if a larger crop is ever needed, plus `manifest.csv` (filename, source, source id/URL, photographer, dimensions, license, intended use, alt text).

**License:** all are Unsplash **free** license (commercial use allowed, no attribution required; attribution is still good manners). Unsplash+ / Getty premium results were explicitly excluded. If a `credits` line is ever wanted, the manifest has the photographer names.

**Honesty policy for stock:** these are *illustrative*. They never go in proof modules (`WorkGallery` "Real work", `BeforeAfterGallery`, `FinishedDoorGallery`, reviews), are never captioned as EZ's team, EZ's van, or EZ's jobs, and alt text describes the scene, not the company. Copy nearby must not imply the photo is a Massachusetts job. Use the manifest's `category: "stock"` (new, see §5.1) to enforce this at the component level.

### 2.1 Asset list

**Commercial (7)**
- `stock-commercial-loading-docks-blue.jpg` — row of loading docks on a commercial building
- `stock-commercial-loading-docks-red.jpg` — numbered dock doors, red/white
- `stock-commercial-rolling-steel-black.jpg` — black rolling steel service door
- `stock-commercial-rolling-steel-gray.jpg` — gray roll-up door, closed
- `stock-commercial-roller-shutters-numbered.jpg` — blue numbered roller shutters (7/8/9)
- `stock-commercial-sectional-door-bw.jpg` — commercial sectional door, monochrome
- `stock-condo-parking-garage-gate.jpg` — multi-family parking garage entrance gate

**County / region heroes (14 + extras)**
- `stock-county-barnstable-cape-cod-lighthouse.jpg` — Nauset-style red/white lighthouse (Barnstable)
- `stock-county-berkshire-autumn-house-hills.jpg` — white house, autumn trees, hills (Berkshire)
- `stock-county-bristol-new-bedford-harbor.jpg` — working harbor, fishing fleet (Bristol)
- `stock-county-dukes-edgartown-lighthouse.jpg` — Edgartown lighthouse (Dukes / Martha's Vineyard)
- `stock-county-essex-rockport-harbor.jpg` — Rockport harbor with red fishing shack (Essex)
- `stock-county-franklin-autumn-lake.jpg` — foliage over a quiet lake (Franklin)
- `stock-county-hampden-river-mill-falls.jpg` — river falls with red mill, autumn (Hampden / Pioneer Valley)
- `stock-county-hampshire-valley-aerial.jpg` — aerial of a river winding through the valley (Hampshire)
- `stock-county-middlesex-cambridge-houses.jpg` — row of colorful Cambridge triple-deckers (Middlesex)
- `stock-county-nantucket-harbor.jpg` — gray-shingle harbor houses (Nantucket)
- `stock-county-norfolk-quincy-pier.jpg` — pier over the bay (Norfolk / South Shore)
- `stock-county-plymouth-mayflower.jpg` — tall ship at the pier (Plymouth)
- `stock-county-suffolk-boston-skyline.jpg` — Charles River skyline, daytime (Suffolk)
- `stock-county-worcester-downtown-brick.jpg` — red-brick downtown (Worcester)
- `stock-ma-boston-common-skyline.jpg`, `stock-ma-oak-bluffs-houses.jpg`, `stock-ma-river-town-houses.jpg` — alternates

**Massachusetts housing / seasons (10)**
- `stock-ma-aerial-autumn-neighborhood.jpg` — aerial of a leafy suburb in fall (statewide hero)
- `stock-ma-colonial-white-house.jpg` — white colonial with black shutters
- `stock-ma-colonial-garage-autumn.jpg` — white colonial with attached garage, fall
- `stock-ma-historic-street-houses.jpg` — historic clapboard houses on a street
- `stock-ma-cape-cottage-green-garage.jpg` — shingled cottage with a green garage door
- `stock-ma-coastal-shingle-house.jpg` — gray-shingle house with hydrangeas
- `stock-ma-autumn-street.jpg` — row of houses on a tree-lined street
- `stock-ma-red-barn-garage-doors.jpg` — red barn converted with double garage doors
- `stock-winter-garage-door-snowfall.jpg` — garage door during snowfall
- `stock-winter-house-snow.jpg`, `stock-winter-aerial-suburb-snow.jpg`, `stock-winter-snowy-park.jpg` — winter set

**Residential doors & garages (10)**
- `stock-door-modern-house-two-windows.jpg` — white modern house, two dark doors with windows
- `stock-door-modern-wood-planks.jpg` — horizontal wood-plank modern door
- `stock-door-black-windows-facade.jpg` — black door with full window row
- `stock-door-white-carriage-windows-brick.jpg` — white carriage door with windows, brick
- `stock-door-white-double-carriage.jpg` — two white carriage doors
- `stock-door-beige-double-house.jpg` — beige 16-ft door, brick house
- `stock-door-house-two-cars-inside.jpg` — open garage with cars, stone facade
- `stock-door-detached-garage-driveway.jpg` — detached garage with driveway
- `stock-door-rusty-old.jpg` — rusted old door
- `stock-cable-coiled-closeup.jpg` — coiled steel cable on a drum, close-up

**Process / trust (4)**
- `stock-contact-woman-phone.jpg` — homeowner on the phone at home
- `stock-about-handshake-homeowner.jpg` — contractor and homeowner shaking hands indoors
- `stock-quote-clipboard-writing.jpg` — hand writing on a clipboard
- `stock-smart-phone-app.jpg` — phone controlling a smart door lock (smart-opener stand-in)

---

## 3. Page-by-page assignment

Rule: every page gets **one** primary visual that is unique to it. Manifest ids below are proposed `site-images.ts` ids (kebab-case, same as the filename without `stock-` prefix where unambiguous).

### 3.1 Core service pages (`ServiceHero imageId`)

| Page | Current | New primary | Secondary / gallery |
|---|---|---|---|
| `/` home | `van-front` | keep | keep |
| `/garage-door-repair/` | `hero-problem-door` | keep | WorkGallery: replace `van-front` with `new-springs`/`broken-spring`/`stuck-repair` only (real hardware) |
| `/broken-spring-repair/` | `spring-winding` | keep | keep `broken-spring` |
| `/garage-door-cable-repair/` | `stuck-repair` | `cable-coiled-closeup` (stock) | WorkGallery stays hardware-only |
| `/garage-door-off-track-repair/` | `before-old-wood` | keep until AI off-track shot exists (§4) | — |
| `/emergency-garage-door-repair/` | `spring-safety` | keep | add `winter-garage-door-snowfall` as section image in "Common emergencies" |
| `/same-day-garage-door-service/` | none | `tech-arrival` (existing, AI) | — |
| `/garage-door-openers/` hub | `opener-rail` | **AI: opener-unit-belt-drive** (§4) — until then `garage-interior`… none; use `opener-rail` | RepairIssueGrid unchanged |
| `/garage-door-opener-repair/` | `opener-rail` | keep `opener-rail` (hub gets the new unit shot) | — |
| `/garage-door-installation/` | `door-black-windows` | keep | keep `carry-panel` |
| `/garage-door-replacement/` | `after-white-raised` | `door-modern-house-two-windows` (stock) | BeforeAfterGallery stays real pairs |
| `/garage-door-replacement-cost/` | none | `quote-clipboard-writing` (stock) as hero | cost-factor cards: `door-beige-double-house` (size), `door-black-windows-facade` (windows), `door-modern-wood-planks` (design) |
| `/commercial-garage-door-repair/` | `van-front` | `commercial-loading-docks-blue` | door-type cards: sectional → `commercial-sectional-door-bw`; rolling steel → `commercial-rolling-steel-black`; operators → `commercial-roller-shutters-numbered` |
| `/services/` hub | none | `ma-aerial-autumn-neighborhood` as a slim banner under H1 | — |
| `/about/` | `team-van` | keep | add `about-handshake-homeowner` next to the written-quote paragraph (illustrative caption: none) |
| `/contact/` | none | `contact-woman-phone` beside the form (desktop 2-col, mobile above form) | — |
| `/reviews/` | none | none — do **not** add stock people here (proof module). Leave logos. | — |
| `/gallery/` | FinishedDoorGallery | keep real only | — |

### 3.2 Data services (`service-pages.ts` → `imageId`)

| Slug | Current | New |
|---|---|---|
| garage-door-roller-replacement | stuck-repair | **AI: roller-closeup** (§4); interim keep |
| garage-door-track-repair | hero-problem-door | keep |
| garage-door-panel-replacement | before-worn-single | keep |
| garage-door-drum-replacement | new-springs | `cable-coiled-closeup` |
| garage-door-hinge-replacement | broken-spring | **AI: hinge-closeup**; interim keep |
| garage-door-wont-close | hero-active-repair | `door-house-two-cars-inside` |
| garage-door-wont-open | spring-safety | `winter-garage-door-snowfall` |
| garage-door-safety-sensor-repair | opener-rail | **AI: photo-eye-sensor**; interim keep |
| garage-door-opener-installation | walkthrough | keep |
| garage-door-remote-programming | quote-tablet | **AI: remote-and-keypad**; interim `smart-phone-app` |
| smart-garage-door-opener | opener-rail | `smart-phone-app` |
| garage-door-tune-up | spring-winding | `door-detached-garage-driveway` |
| garage-door-weatherstripping | after-white-raised | `winter-house-snow` |
| noisy-garage-door-repair | hero-active-repair | `door-rusty-old` |
| commercial-garage-door-maintenance | van-front | `commercial-loading-docks-red` |

### 3.3 Door styles (`door-styles.ts` → `imageId`) — keep real photos; add a second "in context" image per style page (new optional field `contextImageId`)

| Style | Real (keep) | Context (stock) |
|---|---|---|
| insulated-steel | door-steel | door-beige-double-house |
| carriage-house | door-carriage | door-white-double-carriage |
| modern | door-black-windows | door-modern-house-two-windows |
| wood-look | door-wood | door-modern-wood-planks |
| raised-panel | after-white-raised | door-white-carriage-windows-brick |
| charcoal-dark | door-charcoal | door-black-windows-facade |

### 3.4 Service areas

- `/service-areas/` index hero: `ma-aerial-autumn-neighborhood`.
- County pages: new field `imageId` on `COUNTY_CONTENT` (`ma-counties.ts`):
  Barnstable → `county-barnstable-cape-cod-lighthouse` · Berkshire → `county-berkshire-autumn-house-hills` · Bristol → `county-bristol-new-bedford-harbor` · Dukes → `county-dukes-edgartown-lighthouse` · Essex → `county-essex-rockport-harbor` · Franklin → `county-franklin-autumn-lake` · Hampden → `county-hampden-river-mill-falls` · Hampshire → `county-hampshire-valley-aerial` · Middlesex → `county-middlesex-cambridge-houses` · Nantucket → `county-nantucket-harbor` · Norfolk → `county-norfolk-quincy-pier` · Plymouth → `county-plymouth-mayflower` · Suffolk → `county-suffolk-boston-skyline` · Worcester → `county-worcester-downtown-brick`.
- Town pages (351): inherit the **county** image (no per-town photos exist; do not fake them). Render it as a compact banner (16:6, `loading="lazy"`), alt = "<County nickname> — <scene description>" from the manifest; never "garage door repair in <Town>".
- Alt text and captions must not say the photo *is* the town.

### 3.5 Guides

- `/guides/` index: `ma-colonial-garage-autumn` hero.
- Category pages (`guides/category/[cat]`) — new `imageId` on `GUIDE_CATEGORIES`:
  troubleshooting → `door-house-two-cars-inside` · springs → `broken-spring` (real) · openers → `opener-rail` (real; swap to AI opener unit later) · safety → `spring-safety` · maintenance → `door-detached-garage-driveway` · buying → `door-modern-house-two-windows` · cost → `quote-clipboard-writing` · commercial → `commercial-rolling-steel-gray` · massachusetts → `ma-autumn-street`.
- Article pages: add optional `imageId` to the `Guide` type; default = category image. Override for these slugs:
  `garage-door-frozen-shut`, `garage-door-springs-in-winter`, `garage-door-snow-load-and-ice` → `winter-garage-door-snowfall` / `winter-aerial-suburb-snow` / `winter-house-snow`
  `coastal-garage-doors-salt-air` → `ma-coastal-shingle-house`
  `garage-doors-in-massachusetts-historic-districts` → `ma-historic-street-houses`
  `garage-doors-on-older-massachusetts-homes` → `ma-colonial-white-house`
  `garage-doors-in-boston-tight-garages` → `county-middlesex-cambridge-houses`
  `garage-door-service-on-marthas-vineyard-and-nantucket` → `ma-oak-bluffs-houses`
  `why-a-statewide-massachusetts-garage-door-company` → `ma-aerial-autumn-neighborhood`
  `condo-and-apartment-garage-door-service` → `condo-parking-garage-gate`
  `rolling-steel-doors-explained` → `commercial-rolling-steel-black`
  `loading-dock-door-maintenance` → `commercial-loading-docks-red`
  `garage-door-rust-prevention`, `signs-you-need-a-new-garage-door` → `door-rusty-old`
  `garage-door-cable-came-off` → `cable-coiled-closeup`
  `garage-door-colors-and-curb-appeal` → `door-black-windows-facade`
  `carriage-house-garage-doors-explained` → `door-white-double-carriage`
  `smart-garage-door-opener-guide` → `smart-phone-app`
  `how-to-compare-garage-door-quotes`, `why-we-dont-publish-garage-door-prices`, `how-garage-door-repair-pricing-works` → `quote-clipboard-writing`
- Render the guide image below the H1 as a 16:9 figure, `loading="eager"` + `fetchpriority="high"` only on the article page (it's the LCP element there), 880px wide, `widths=[480, 880, 1320]`.

### 3.6 Brands

Brand index: no photo needed. Brand pages: add a small "Opener/door in context" image — opener brands → AI opener unit (§4) once available; door brands → the door-style photo that best matches the brand's typical line (Clopay/Amarr/Wayne Dalton → `door-carriage`/`door-steel`; Haas → `door-charcoal`; Raynor/CHI → `after-white-raised`; Hörmann → `door-black-windows`). Never place a brand logo on a photo.

### 3.7 PPC pages

Keep the current 3-hero rotation but add `door-house-two-cars-inside` and `winter-garage-door-snowfall` to the `HEROES` array in `ppc.ts` (5-way rotation). PPC LCP target ≤2.0s: mobile variant ≤120KB.

---

## 4. Still missing — generate with AI (same pipeline as `Brand/photos/`) or shoot for real

Free stock has essentially no usable close-ups of garage-door hardware (verified across Unsplash, Pexels and Openverse — results are low-res amateur shots). Generate these with the existing image pipeline (`.claude/skills/impeccable/scripts/generate-image.mjs` or the owner's Gemini workflow), then run them through the manifest with `approved: true`. Style: natural light, photographic, no text, no logos, no people unless stated. Landscape 3:2 at ≥2400px.

| id | Prompt |
|---|---|
| `opener-unit-belt-drive` | Ceiling-mounted belt-drive garage door opener motor head in a clean residential garage, rail running toward the door, soft daylight, no brand text |
| `opener-wall-mount-jackshaft` | Wall-mounted jackshaft garage door opener beside the torsion shaft, cable drum visible, clean garage, no logos |
| `remote-and-keypad` | Garage door remote control and a wireless exterior keypad on a wood table, shallow depth of field, neutral background, no logos |
| `wall-button-console` | Wired garage door wall control button on a garage wall next to the entry door, close-up |
| `photo-eye-sensor` | Garage door safety photo-eye sensor mounted on the track near the floor, small LED lit, close-up |
| `emergency-release-cord` | Red emergency release handle hanging from the opener trolley on a garage door rail, close-up |
| `roller-closeup` | New nylon garage door roller in hand next to an old worn steel roller, workshop table, macro |
| `hinge-closeup` | Numbered galvanized garage door hinge on a white door section, close-up |
| `cable-drum-frayed-cable` | Frayed garage door lift cable on a cable drum at the end of a torsion shaft, close-up |
| `bent-track-off-track` | Residential garage door hanging crooked off its track, bent vertical track, garage interior, no people |
| `dented-panel` | Dented lower panel of a white steel garage door, exterior, driveway |
| `bottom-seal-weatherstripping` | Bottom rubber seal being fitted into the retainer of a garage door, close-up, gloved hands |
| `extension-springs-safety-cable` | Extension springs with safety cables along the horizontal track of a garage door |
| `lubricating-rollers` | Gloved hand applying silicone spray to garage door rollers and hinges |
| `door-gap-bottom` | Daylight showing through a gap under a closed garage door, interior view |
| `commercial-jackshaft-operator` | Commercial trolley/jackshaft door operator on a warehouse sectional door, industrial interior |

Real photography still required (unchanged from `docs/ez-missing-asset-shot-list.md`): real technicians, real van at a job, real crew. Stock never substitutes for those; the AI technician models stay in illustrative positions only.

---

## 5. Implementation steps

Work on a feature branch (`feat/site-imagery`). Do **not** commit, push or deploy without being asked.

1. **Ingest assets.** Copy `Brand/photos/stock/*.jpg` → `website/src/assets/photos/stock/`. Convert to WebP via Astro `<Image>` at build (no manual conversion). Strip EXIF (sharp does this). Keep the source JPGs in `Brand/`.
2. **Manifest.** In `site-images.ts` add `"stock"` and `"county"` to `ImageCategory`, add a `provenance: "real" | "ai-model" | "stock"` field, and register every file from `manifest.csv` with the alt text given there. Enforce: `WorkGallery`, `BeforeAfterGallery`, `FinishedDoorGallery`, `ReviewProof` throw at build time if passed an image whose `provenance !== "real"`.
3. **Config wiring.** Add `imageId` to `CountyContent`, `GuideCategory`, optional `imageId` on `Guide`, optional `contextImageId` on `DoorStyle`, and update `service-pages.ts` / `ppc.ts` per §3.
4. **Templates.** `service-areas/[slug].astro` (county + town banner), `guides/index.astro`, `guides/category/[cat].astro`, `guides/[slug].astro`, `contact.astro`, `garage-door-replacement-cost.astro`, `services.astro`, `commercial-garage-door-repair.astro` (door-type cards), `garage-door-styles/[style].astro` (context image), `about.astro`. Use one new `SectionImage.astro` component (figure, rounded card, explicit width/height, lazy by default, `fetchpriority="high"` prop for LCP cases) rather than inline `<Image>` everywhere.
5. **Responsive sizes.** Heroes: `widths=[640, 960, 1280, 1600]`, `sizes="(max-width: 62rem) 92vw, 560px"`. Banners: `widths=[720, 1200, 1600]`. Mobile hero crop via `focalPointMobile` on the manifest entry (set values for the 14 county images: mostly `50% 50%`; lighthouse images `60% 40%`).
6. **Alt & schema.** Alt from manifest. Do not add `image` to LocalBusiness schema for stock; add `image` to `Article` schema on guides (allowed — it's the article's illustration).
7. **QA (CLAUDE.md rules J–N).** `npm run build` + `npx astro check` at 0 errors; page count stays 545; check `/service-areas/barnstable-county/`, `/service-areas/boston-ma/`, `/guides/garage-door-frozen-shut/`, `/commercial-garage-door-repair/`, `/contact/` at 390/768/1440; Lighthouse LCP ≤2.5s on a county page and ≤2.0s on a PPC page; no console errors; sitemap unchanged.
8. **Optional:** per-section OG images (county + guide category) generated at build with `satori` are out of scope unless asked.

**Acceptance:** no page in §1.1 is imageless (except reviews/legal by design); no image id is used as primary hero on two pages (run a script over `dist/` to assert unique hero `src` per route family); every stock image renders with `provenance="stock"` and appears in no proof module.
