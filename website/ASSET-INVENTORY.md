# EZ Garage Doors — Asset Inventory

Audit date: 2026-07-03. Every photo in `Brand/photos/` was visually inspected for
wrong branding, garbled AI text, third-party logos, phone numbers, plates, and addresses.
Result: **33 pass / 3 reject**. No "GARGAE" misspelling, no "U1 Garage Doors",
no phone numbers, no readable plates or addresses found anywhere.

## Rejected — do NOT place on the site (left in Brand/photos, not copied)

| Source file | Reason |
|---|---|
| `models-technicians/ez-technician-commercial-door-service-01.jpg` | Prominent third-party "CLARK" forklift logo + garbled sticker text. A tight crop removing the forklift could salvage it later. |
| `models-technicians/ez-technician-install-crew-lead-01.jpg` | Garbled orange tagline on uniform, third-party "GENIE" logos on boxes, and physically impossible door geometry (obviously AI-fake — would hurt trust). |
| `models-technicians/ez-technician-opener-diagnostic-01.jpg` | Prominent "LiftMaster" logo on opener + garbled fine print + melted-looking opener housing. |

## Skipped (not rejected, but not used)

| Source file | Reason |
|---|---|
| `vehicles/ez-old-vs-new-spring-comparison-01.png` | "Before" panel shows no visible break — the graphic could read as misleading. |
| `finished-doors/ez-finished-door-with-windows-0.png` | Exact duplicate of `ez-finished-white-short-panel-door-01.png`. |

## Copied into `src/assets/photos/` (renamed to match actual content)

Several source filenames did not match image content (black/white pairs swapped,
"carriage-house" and "wood-look" pairs showing other styles). Names below describe
what is actually in the image. No personal names in any filename.

| New name | Source | Content |
|---|---|---|
| ez-garage-door-technician-homeowner-walkthrough.jpg | models-technicians/ez-homeowner-service-interaction-01.jpg | Tech adjusting hardware, homeowner watching |
| ez-garage-door-team-service-van.jpg | models-technicians/ez-team-service-van-portrait-01.jpg | Crew in front of branded van |
| ez-garage-door-written-quote-tablet.jpg | models-technicians/ez-technician-customer-explanation-01.jpg | Tech showing tablet quote to customer |
| ez-garage-door-stuck-door-repair.jpg | models-technicians/ez-technician-emergency-door-stuck-01.jpg | Tech lubricating stuck roller/track |
| ez-garage-door-installation-carrying-panel.jpg | models-technicians/ez-technician-install-assistant-01.jpg | Tech carrying door section |
| ez-garage-door-repair-technician-van.jpg | models-technicians/ez-technician-main-repair-portrait-01.jpg | Tech portrait with tool bag + van |
| ez-garage-door-spring-winding-repair.jpg | models-technicians/ez-technician-spring-repair-01.jpg | Tech winding torsion spring |
| ez-garage-door-broken-torsion-spring.png | vehicles/ez-broken-torsion-spring-closeup-01..png | Snapped torsion spring closeup |
| ez-garage-door-service-van-arrival.jpg | vehicles/ez-ford-transit-250-driveway-arrival-01.jpg | Tech walking to house, van in driveway |
| ez-garage-door-service-van-front.jpg | vehicles/ez-ford-transit-250-front-angle-01.jpg | Branded Transit 3/4 front |
| ez-garage-door-technician-arrival.jpg | vehicles/ez-ford-transit-250-technician-exit-01.jpg | Tech stepping out of van |
| ez-garage-door-new-torsion-springs.png | vehicles/ez-new-torsion-springs-installed.png | New torsion springs installed |
| ez-garage-door-spring-repair-safety.png | vehicles/ez-technician-spring-repair-01.png | Tech with safety glasses, winding bars |
| ez-garage-door-charcoal-recessed-panel.png | finished-doors/ez-finished-black-modern-door-01.png | Charcoal recessed-panel door |
| ez-garage-door-carriage-house-cream.png | finished-doors/ez-finished-carriage-house-door-01.png | Cream carriage house door |
| ez-garage-door-white-flush-steel.png | finished-doors/ez-finished-insulated-steel-door-01.png | White flush-panel steel door |
| ez-garage-door-black-flush-windows.png | finished-doors/ez-finished-white-long-panel-door-01.png | Black flush door w/ side windows |
| ez-garage-door-white-carriage-windows.png | finished-doors/ez-finished-white-short-panel-door-01.png | White carriage-style door w/ grille windows |
| ez-garage-door-wood-look-walnut.png | finished-doors/ez-finished-wood-look-door-01.png | Walnut wood-look door w/ windows |
| ez-before-old-white-wood-door.png / ez-after-white-long-panel-windows.png | before-after "black-modern" pair | Aged wood door → white long-panel w/ windows |
| ez-before-faded-beige-door.png / ez-after-black-long-panel-windows.png | before-after "white-short-panel" pair | Faded beige → black long-panel w/ windows |
| ez-before-worn-single-door.png / ez-after-white-raised-panel.png | before-after "carriage-house" pair | Worn single door → white raised panel |
| ez-before-dirty-beige-door.png / ez-after-dark-bronze-panel.png | before-after "wood-look" pair | Dirty beige → dark bronze panel |

Vehicle photos not copied (`side-logo`, `rear`, `team winter portrait`) remain available in Brand/photos if needed.

## Trust logos (audited 2026-07-03, source: owner-supplied `Brand/general/`)

No logos were downloaded from the internet — all 16 files were supplied by the owner in
`Brand/general/`. Each was visually inspected, then trimmed/resized/converted to WebP into
`website/src/assets/trust-logos/` (processed via sharp, displayed at 15–32px height).

| Processed file | Source file | Note |
|---|---|---|
| review-platforms/google-logo.webp | google.png | |
| review-platforms/yelp-logo.webp | yelp.png | |
| review-platforms/angi-logo.webp | angies.png | |
| review-platforms/thumbtack-logo.webp | thumbtack.png | |
| review-platforms/five-stars.webp | 5 star.jpg | decorative accent only (alt="") |
| opener-brands/liftmaster-logo.webp | **images.png** | full LiftMaster banner; extracted from a stock-preview file with baked-in checkerboard |
| opener-brands/chamberlain-logo.webp | chaimbrlane.png | |
| opener-brands/genie-logo.webp | genie.jpg | official lockup incl. Genie's own tagline |
| opener-brands/craftsman-logo.webp | craftsman.jpg | |
| door-brands/amarr-logo.webp | amarr.jpg | |
| door-brands/haas-logo.webp | haas.jpg | |
| door-brands/wayne-dalton-logo.webp | wayne dalton.png | |
| door-brands/chi-logo.webp | chi.png | |

**Added 2026-07-04 (owner-supplied, audited clean):** `clopay.png` → door-brands/clopay-logo.webp ·
`Hörmann.png` → door-brands/hormann-logo.webp · `Linear.png` → opener-brands/linear-logo.webp ·
`SOMMER.jpg` → opener-brands/sommer-logo.webp · `Chamberlain.png` (modern lockup) → replaces the
old chaimbrlane.png version. Manifest: `src/config/brand-logos.ts`.
Hero photo assets: `hero-problem-door-desktop.jpg` / `hero-problem-door-mobile.jpg` — crops of
`ez-before-dirty-beige-door.png` (real photo, worn/sagging door, full opening).

**Rejected logo files (not used):**

| Source file | Reason |
|---|---|
| `rynor.png` | Raynor logo has **"AUTHORIZED DEALER" baked into the artwork** — using it would visually claim unverified authorization. Raynor renders as a text badge instead. |
| `lifmaster.jpg` | Cropped/truncated wordmark ("ftMast"); superseded by images.png. |
| `safeway.png` | Right edge cropped mid-word; also not on the approved brand list. |

**Brands without a usable logo asset** (render as text badges in TrustLogoStrip):
Clopay, Raynor (door); Linear, Sommer, Marantec (opener). If the owner supplies official
assets later, drop them into the same folders and add them to TrustLogoStrip.astro.

## Usage rules applied site-wide

- Technician/team photos are AI-generated models. They are used as illustrative
  service imagery only — **no copy or alt text claims they are the actual EZ team
  or actual EZ job sites.**
- Before/after and finished-door photos are captioned by door style only — never
  attributed to a named town or presented as a specific customer's project.
- Opener page and commercial page have **no clean photo** (both candidates rejected).
  Structure uses text-led modules there until replacement images exist.
