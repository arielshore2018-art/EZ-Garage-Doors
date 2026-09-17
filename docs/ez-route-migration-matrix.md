# EZ Garage Doors — Route Migration Matrix

## 2026-09-17 — Massachusetts A1-style architecture (branch `rebuild/massachusetts-a1-architecture`)

**Policy:** every indexable URL that existed before this rebuild is preserved exactly. The only URLs retired are the 16 Connecticut PPC landers (noindex, never in the sitemap); each has a permanent 301 in `website/vercel.json`. No other redirect exists.

### Redirects (301, `website/vercel.json`)
| Old URL (noindex CT PPC) | New destination | Reason |
|---|---|---|
| `/ppc/garage-door-repair/{middletown,cromwell,rocky-hill,glastonbury,west-hartford,farmington,avon,simsbury,wethersfield,newington,berlin,southington,plainville,south-windsor,vernon,tolland}-ct/` | `/garage-door-repair/` | Connecticut removed entirely (owner decision). Residual ad clicks land on the repair hub. **Google Ads campaigns must be re-pointed by the owner to the MA slugs below.** |

### Page inventory (545 built, 520 indexable)
| Family | URLs | Template / data | Indexed |
|---|---|---|---|
| Home | `/` | `index.astro` | yes |
| Core services (unchanged URLs) | `/garage-door-repair/`, `/broken-spring-repair/`, `/garage-door-opener-repair/`, `/garage-door-cable-repair/`, `/garage-door-off-track-repair/`, `/emergency-garage-door-repair/`, `/same-day-garage-door-service/`, `/garage-door-installation/`, `/garage-door-replacement/`, `/garage-door-replacement-cost/`, `/commercial-garage-door-repair/`, `/services/` | hand-built | yes |
| Data services (new) | `/garage-door-roller-replacement/`, `/garage-door-track-repair/`, `/garage-door-panel-replacement/`, `/garage-door-drum-replacement/`, `/garage-door-hinge-replacement/`, `/garage-door-wont-close/`, `/garage-door-wont-open/`, `/garage-door-safety-sensor-repair/`, `/garage-door-opener-installation/`, `/garage-door-remote-programming/`, `/smart-garage-door-opener/`, `/garage-door-tune-up/`, `/garage-door-weatherstripping/`, `/noisy-garage-door-repair/`, `/commercial-garage-door-maintenance/` | `[service].astro` ← `service-pages.ts` | yes |
| Openers hub (new) | `/garage-door-openers/` | hand-built | yes |
| Brands (new) | `/brands/` + 13 `/brands/<slug>/` | `brands/[brand].astro` ← `brands.ts` | yes |
| Styles (new) | `/garage-door-styles/` + 6 `/garage-door-styles/<slug>/` | `garage-door-styles/[style].astro` ← `door-styles.ts` | yes |
| Guides (new) | `/guides/`, 9 `/guides/category/<cat>/`, 87 `/guides/<slug>/` | `guides/*` ← `config/guides/*.ts` | yes |
| Service areas | `/service-areas/` (unchanged URL, rebuilt), 14 `/service-areas/<county>-county/`, 351 `/service-areas/<town>-ma/` | `service-areas/[slug].astro` ← `ma-towns.ts` + `ma-counties.ts` | yes |
| Company (unchanged) | `/about/`, `/reviews/`, `/gallery/`, `/contact/`, `/privacy-policy/`, `/terms/` | hand-built | yes |
| Thank-you | `/thank-you/` | hand-built | noindex + robots-disallowed |
| PPC (new MA set) | 24 `/ppc/garage-door-repair/<city>-ma/` (springfield, chicopee, holyoke, westfield, northampton, amherst, pittsfield, greenfield, worcester, leominster, framingham, boston, cambridge, newton, quincy, lowell, lawrence, lynn, brockton, plymouth, taunton, new-bedford, fall-river, barnstable) | `ppc/garage-door-repair/[city].astro` ← `ppc.ts` | noindex, out of sitemap |

### Removed source (no URL impact)
`src/config/cities.ts` (CT list, 0 published pages), `service-areas/[city].astro` (never generated a page), film-world components (`TrackHero`, `RouteJunction`, `SymptomNavigator`, `WorkOrder`, `RealWorkFeature`, `ContinuousBrandRail`, `CityGrid`).

### Campaign ids
`ppc-gdr-<city>-ma` in `data-track` and `form_context` (was `ppc-gdr-<city>-ct`). CRM/Ads mappings that keyed on the CT ids need updating by the owner.

---

## 2026-08 (historical) — URL-preserving redesigns
Every URL preserved; no redirects. Template families then: `HOME` · `REPAIR-HUB` · `REPAIR-SVC` · `URGENT` · `INSTALL` · `COMMERCIAL` · `AREA` · `PPC-URGENT` · `INFO` · `UTILITY`. City pages were a template with 0 published cities; the 16 CT PPC slugs listed above were the only campaign pages.
