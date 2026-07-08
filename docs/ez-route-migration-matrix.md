# EZ Garage Doors — Route Migration Matrix
**Policy:** Every existing URL is preserved exactly. **No renames, no deletions → no redirects required.** Sitemap/robots/canonical behavior unchanged (PPC noindex + sitemap-excluded; thank-you noindex + robots-disallowed).

Template families (new system): `HOME` · `REPAIR-HUB` · `REPAIR-SVC` (calm phone-first) · `URGENT` (minimal-nav call-primary) · `INSTALL` (editorial estimate-first) · `COMMERCIAL` (dense factual) · `AREA` · `PPC-URGENT` · `INFO` · `UTILITY`.

| URL | Purpose | Family | Conversion goal | Content status | SEO status | Redirect | QA |
|---|---|---|---|---|---|---|---|
| `/` | Homepage / router | HOME | Call (primary), estimate (secondary) | rewrite | keep title/desc intent, add H1 | none | pass |
| `/services/` | Service router | INFO | route to service pages | rewrite | keep | none | pass |
| `/garage-door-repair/` | Repair hub | REPAIR-HUB | Call | rewrite | keep | none | pass |
| `/broken-spring-repair/` | Spring repair | REPAIR-SVC | Call | rewrite | keep | none | pass |
| `/garage-door-opener-repair/` | Opener repair | REPAIR-SVC | Call | rewrite | keep | none | pass |
| `/garage-door-cable-repair/` | Cable/track repair | URGENT | Call | rewrite | keep | none | pass |
| `/garage-door-off-track-repair/` | Off-track | URGENT | Call | rewrite | keep | none | pass |
| `/emergency-garage-door-repair/` | Urgent service | URGENT | Call | rewrite | keep (no 24/7 claims) | none | pass |
| `/same-day-garage-door-service/` | Fast service | URGENT | Call | rewrite (keep "today's availability" hedge) | keep | none | pass |
| `/garage-door-installation/` | New door install | INSTALL | Estimate form | rewrite | keep | none | pass |
| `/garage-door-replacement/` | Replace decision | INSTALL | Estimate | rewrite | keep | none | pass |
| `/garage-door-replacement-cost/` | Cost guide | INSTALL | Estimate | rewrite (price table stays gated) | keep | none | pass |
| `/commercial-garage-door-repair/` | Commercial | COMMERCIAL | Call + form | rewrite | keep | none | pass |
| `/service-areas/` | Area hub | AREA | Call | rewrite | keep | none | pass |
| `/service-areas/[city]/` | City pages (template) | AREA | Call | template rebuilt; **still 0 published** until real local proof | n/a until published | none | pass |
| `/about/` | Company | INFO | Call/estimate | rewrite | keep | none | pass |
| `/reviews/` | Review hub | INFO | outbound to live profiles | rewrite (verified counts only) | keep | none | pass |
| `/gallery/` | Finished work | INFO | Estimate | rewrite | keep | none | pass |
| `/contact/` | Lead capture | INFO | Form | rewrite | keep | none | pass |
| `/thank-you/` | Success state | UTILITY | reassure + call | rewrite | noindex kept | none | pass |
| `/privacy-policy/` | Legal | UTILITY | n/a | restyle only (draft pending legal) | keep | none | pass |
| `/terms/` | Legal | UTILITY | n/a | restyle only (draft pending legal) | keep | none | pass |
| `/ppc/garage-door-repair/<city>/` ×16 | Paid repair intent | PPC-URGENT | Call primary, short form secondary | template rebuilt (config-driven) | noindex + sitemap-excluded kept | none | pass |

PPC slugs (16, unchanged): middletown-ct, cromwell-ct, rocky-hill-ct, glastonbury-ct, west-hartford-ct, farmington-ct, avon-ct, simsbury-ct, wethersfield-ct, newington-ct, berlin-ct, southington-ct, plainville-ct, south-windsor-ct, vernon-ct, tolland-ct.

**Intent-family coverage note (brief §14):** current campaigns are all general-repair city intent. Existing standalone pages cover emergency / same-day / cable / off-track intents. Installation/replacement paid intent lands on `/garage-door-installation/` and `/garage-door-replacement-cost/`. New PPC intent families beyond these require new campaigns (owner decision) — not fabricated now.
