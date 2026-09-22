# EZ brand refresh — 2026-09-21

Implemented in the existing Astro website. No production deployment was made.
Existing work and all public route paths were preserved.

## What changed

- Outcome-led home hero: “Your door fixed. Your day back.” Local service scope and
  written-quote policy remain explicit, with one main request action.
- Three photographic service paths replace the initial twelve-card service list.
  Four symptom shortcuts remain available immediately below the hero.
- New editorial brand section explains diagnosis, price approval, and local service.
- Real before/after work, a three-step process, FAQs, coverage, and an on-page
  request form give visitors progressively more information before contacting EZ.
- Shared color tokens, spacing, headings, navigation, service heroes, service cards,
  sidebars, mobile controls, and forms apply across the site's page families.
- The optional photo and callback fields are collapsed to shorten the visible form.
- Phone labels match the actual destination when no phone is configured. Duplicate
  contact actions are suppressed, and the mobile menu closes on Escape/outside click.
- Form validation connects error messages to inputs, validates phone format, focuses
  the first invalid field, and guards repeated live submissions.
- Preview submissions do not navigate to a false confirmation or emit form_submit.
  The thank-you page does not claim receipt while the endpoint is unconfigured, and
  simply visiting it does not emit a conversion event.
- Fixed missing section-heading references in shared accessibility markup.
- Editorial gallery and door-style collection layouts emphasize large photography,
  readable captions, and clear paths from inspiration to service.
- About and homeowner-guide pages use clearer benefit-led introductions; the footer
  now carries the shared brand styling.
- A keyboard-accessible town finder on home and service areas links directly to all
  351 Massachusetts town pages, with clear empty and no-match states.
- Owner color correction: neutral charcoal, white, and orange replace the green
  tint in headings, dark sections, footer, borders, and muted text.
- Serviced-brand logos retain their original colors and move in two seamless rows,
  with opposite directions, a pause/resume control, and pause on hover. Reduced
  motion and no-JavaScript layouts show static wrapped logos; duplicate loop copies
  are hidden from assistive technology. Review-platform logos remain static.

## Validation

- Production build: **545 pages, passed**.
- Astro diagnostics: **0 errors, 0 warnings**; five existing inline-script hints.
- Image audit: **passed**; all content images have alt text and dimensions; no stock
  imagery in proof modules; 14 distinct county banners and 351 town inheritances.
- Full static crawl: **95,385 internal link occurrences** checked across 545 pages.
  One h1 per page, unique IDs, section-label references, local links, and anchors pass.
- Browser: home and repair pages inspected at desktop and phone widths.
- Narrow-screen checks at 320px: home, contact, installation, county, guide, gallery.
  No horizontal overflow after fixing installation hero button wrapping.
- Interaction checks: mobile menu open/Escape, primary contact navigation, empty
  fields, invalid phone, valid preview submission, and FAQ expansion passed.
- Second-pass checks: gallery, styles, and about have no horizontal overflow at
  320px; home and about pass at 768px, and styles at 1100px. Gallery desktop and
  styles phone layouts were visually inspected after images finished loading.
- Town finder: case-insensitive Boston search, Enter to focus its link, no-match
  message, Clear reset, and navigation to the Boston service page passed.
- Color/motion follow-up: build and full crawl passed again; browser confirmed
  neutral heading/footer colors, unfiltered loaded logos, changing transforms,
  pause/resume behavior, and no horizontal overflow at 1440px and 390px.
- No new third-party image or font downloads. Existing image provenance preserved.

Re-run from website/: npm run build, npm exec astro check, npm run qa:images,
and node scripts/qa-brand.mjs. The dev server is available at localhost:4321.

## Before accepting real leads

- Set the actual phone number and PHONE_READY in src/config/business.ts.
- Connect FORM_ENDPOINT and verify real delivery, attachment handling, error
  handling, and backend-confirmed conversion tracking against that provider.
- Reconfirm owner-supplied repair/review figures and add live review profile links;
  their pending status predates this refresh.
- Confirm the intended public domain before deployment.

The design uses reduced choice, clear outcomes, customer control, progressive
disclosure, and consistent calls to action. Conversion improvement has not been
measured. Compare delivered leads and qualified calls after launch; preview clicks
must not be treated as delivered leads.
