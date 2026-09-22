/**
 * Hand-written county content for the 14 Massachusetts county hubs.
 * Each entry is real geographic/housing context (public knowledge),
 * NOT invented job history. Town pages inherit the county's notes so
 * every town page carries genuine regional substance on top of its own
 * public data (population, area, incorporation, neighbors).
 *
 * Claims rule: no response-time promises, no "we've done X jobs here".
 * Island and hill-town logistics are stated honestly.
 */
import type { MaCounty } from "./ma-towns";

export interface CountyContent {
  county: MaCounty;
  /** Short display name used in headings ("Cape Cod", "the Berkshires"). */
  nickname: string;
  /** site-images id of the county's regional photo (stock, location-verified;
   *  Hampden uses a place-neutral garage scene until a real Hampden photo exists).
   *  Town pages inherit it — there are no per-town photos and none may be faked. */
  imageId: string;
  intro: string[];
  /** Facts about garage doors in this county's housing/climate context. */
  doorNotes: string[];
  /** Larger municipalities called out in copy (must exist in the dataset). */
  notable: string[];
  faqs: { question: string; answer: string }[];
}

export const COUNTY_CONTENT: Record<MaCounty, CountyContent> = {
  Barnstable: {
    county: "Barnstable",
    nickname: "Cape Cod",
    imageId: "county-barnstable-cape-cod-lighthouse",
    intro: [
      "Barnstable County is Cape Cod — all fifteen towns from Bourne and Sandwich at the canal out to Provincetown at the tip. It is the most seasonal county in the state: year-round households share streets with summer cottages that sit closed from October to May, and a garage door that hasn't moved in seven months is one of the most common spring service calls on the Cape.",
      "EZ Garage Doors serves every Cape town for repair, spring and opener work, and new door installation. The Cape's traffic is real — call with your address and we'll tell you honestly what scheduling looks like for your side of the bridges.",
    ],
    doorNotes: [
      "Salt air reaches well inland on the Cape. Bare-steel springs, cables, and hinges corrode faster here than anywhere off-Cape, so galvanized springs and stainless hardware are worth asking about at replacement time.",
      "Shingle-style and cottage architecture means many detached garages and outbuildings with non-standard openings. Measure before you order a stock door.",
      "Nor'easters and hurricane-season wind: wind-rated doors and reinforced struts are a sensible upgrade on exposed lots facing Nantucket Sound or the outer beach.",
      "Seasonal homes: a door that sits for months dries out, and rollers, seals, and opener batteries fail on the first cycle of spring. A pre-season tune-up is cheaper than an opening-weekend emergency.",
    ],
    notable: ["Barnstable", "Falmouth", "Yarmouth", "Sandwich", "Bourne", "Dennis", "Mashpee", "Harwich", "Chatham"],
    faqs: [
      { question: "Do you service the whole Cape, including the Outer Cape?", answer: "Yes — all fifteen Barnstable County towns, from Bourne to Provincetown. Outer Cape visits are scheduled with the drive in mind; call with your town and we'll give you a straight answer on timing." },
      { question: "My seasonal house's garage door won't open after the winter. Is that normal?", answer: "Very. Months without cycling let rollers seize, seals stick to the slab, and opener backup batteries die. Don't force it — a stuck-to-the-floor bottom seal can tear, and a spring that rusted over the winter can snap under load. Call and describe what it's doing." },
      { question: "Should I buy a wind-rated door on the Cape?", answer: "On exposed lots, yes — it's an option we'll price for you in the written estimate. Wind-rated doors use heavier struts and track hardware and are built to resist the pressure differences a coastal storm creates." },
    ],
  },

  Berkshire: {
    county: "Berkshire",
    nickname: "the Berkshires",
    imageId: "county-berkshire-autumn-house",
    intro: [
      "Berkshire County is the westernmost county in Massachusetts: 32 cities and towns anchored by Pittsfield, with North Adams and Williamstown to the north and Great Barrington, Lenox, and Lee to the south. It is hill country — long driveways, older housing stock, and a winter that starts earlier and lasts longer than anywhere else in the state.",
      "EZ Garage Doors serves all of Berkshire County. The distances here are real, so we scope calls carefully by phone — door size, what it's doing, and a photo if you can — so the visit fixes the door instead of discovering it.",
    ],
    doorNotes: [
      "Snow load and ice: doors that freeze to the slab, bottom seals torn loose by ice, and openers straining against a frozen door are the winter calls in the Berkshires. Never run the opener against a door that's iced down.",
      "Cold-weather springs: steel loses a little flexibility in deep cold, and a spring at the end of its cycle life is most likely to snap on a sub-zero morning. If the door has felt heavier lately, get it checked before January.",
      "Older homes and barns: converted carriage houses and pre-war garages often have low headroom and out-of-square openings that need low-headroom track or a custom-sized door.",
      "Insulated doors pay off here: an attached garage in the Berkshires loses real heat through a single-layer steel door.",
    ],
    notable: ["Pittsfield", "North Adams", "Great Barrington", "Williamstown", "Lenox", "Adams", "Dalton", "Lee"],
    faqs: [
      { question: "Do you come out to the hill towns, not just Pittsfield?", answer: "Yes — every Berkshire County municipality, from Clarksburg to Mount Washington. Call with the town and we'll confirm coverage and timing on the phone before anyone drives out." },
      { question: "My door freezes to the floor. What should I do?", answer: "Don't hit the opener. Clear ice at the bottom seal, and if the seal is torn or missing, that's the repair — a fresh bottom seal and a threshold, plus a look at why water is pooling there. Forcing a frozen door tears seals and strips opener gears." },
      { question: "Is an insulated door worth it in the Berkshires?", answer: "For an attached garage, almost always. Insulated sandwich-panel doors are stiffer, quieter, and keep the garage — and the rooms next to it — noticeably warmer. We'll show both options side by side in the written estimate." },
    ],
  },

  Bristol: {
    county: "Bristol",
    nickname: "Bristol County",
    imageId: "county-bristol-new-bedford-harbor",
    intro: [
      "Bristol County runs from Attleboro and Mansfield on the Rhode Island line down through Taunton (the county seat) to the old mill cities of New Bedford and Fall River and the coastal towns on Buzzards Bay — Westport, Dartmouth, and Fairhaven. Twenty municipalities in all, with some of the densest housing in the state alongside farm country and shoreline.",
      "EZ Garage Doors serves every Bristol County city and town. The three-deckers and post-war neighborhoods here mean a lot of older detached garages and single-car doors, and the coast adds salt air to the mix.",
    ],
    doorNotes: [
      "Mill-city housing (New Bedford, Fall River, Taunton): older detached garages with narrow single-car openings and wooden doors long past their service life — a common replacement job.",
      "Coastal towns on Buzzards Bay: salt corrosion on springs, cables, and bottom brackets. Galvanized or stainless hardware is worth the upgrade near the water.",
      "Attleboro, Mansfield, Norton, Easton: suburban attached garages with mid-life openers — sensor, remote, and gear failures are the everyday calls.",
    ],
    notable: ["New Bedford", "Fall River", "Taunton", "Attleboro", "Dartmouth", "Westport", "Mansfield", "Easton", "Somerset"],
    faqs: [
      { question: "Do you replace old wooden garage doors on detached garages?", answer: "Yes. Many Bristol County garages still carry original wood doors — heavy, warped, and hard to secure. We measure the opening (they're often non-standard), and quote a steel or insulated replacement in writing." },
      { question: "Do you cover the coastal towns like Westport and Fairhaven?", answer: "Yes — all twenty Bristol County municipalities, coast included. Tell us the town when you call." },
      { question: "My opener works but the door barely moves. Is it the opener?", answer: "Often not. A door that's too heavy from a failed spring makes a healthy opener look broken. We check spring balance before quoting opener work — you get the real cause in writing." },
    ],
  },

  Dukes: {
    county: "Dukes",
    nickname: "Martha's Vineyard",
    imageId: "county-dukes-edgartown-lighthouse",
    intro: [
      "Dukes County is Martha's Vineyard — Edgartown (the county seat), Oak Bluffs, Tisbury, West Tisbury, Chilmark, and Aquinnah — plus the town of Gosnold on the Elizabeth Islands. Everything arrives by ferry, including service vans and garage doors, and the island's mix of year-round homes and seasonal houses shapes the work.",
      "EZ Garage Doors serves the Vineyard. Island visits are scheduled around ferry logistics, so we scope the job thoroughly by phone and photo first — the goal is one trip with the right parts on the boat.",
    ],
    doorNotes: [
      "Ferry logistics: parts and doors ship with the van, so an accurate description of the door (size, spring type, opener brand) before the trip matters more here than anywhere else in the state.",
      "Salt air on all sides: corrosion-resistant springs and stainless hardware are the sensible default for any replacement on the island.",
      "Seasonal homes: doors that sit closed all winter need a spring check before the house opens — rollers, seals, and opener batteries fail on the first cycle.",
      "Gosnold and the Elizabeth Islands are reached separately; call to discuss.",
    ],
    notable: ["Edgartown", "Oak Bluffs", "Tisbury", "West Tisbury", "Chilmark", "Aquinnah"],
    faqs: [
      { question: "Do you really come to Martha's Vineyard?", answer: "Yes. Service is scheduled around the ferry, and we scope the job by phone and photo first so the visit is a single trip with the right parts. Call and we'll talk through timing honestly." },
      { question: "Can you install a new door on the island?", answer: "Yes. The door is ordered to your measurements and travels with the crew. Lead time includes the ferry booking, and the written estimate spells out the schedule before anything is ordered." },
      { question: "What hardware lasts on the Vineyard?", answer: "Galvanized springs, stainless bottom brackets and hinges, and nylon rollers. Standard bare-steel hardware corrodes fast in island air." },
    ],
  },

  Essex: {
    county: "Essex",
    nickname: "the North Shore & Merrimack Valley",
    imageId: "county-essex-gloucester-harbor",
    intro: [
      "Essex County covers the North Shore and the Merrimack Valley — 34 municipalities from Lynn, Salem (the county seat), Beverly, and Gloucester on the coast to Lawrence, Haverhill, Andover, and Methuen along the Merrimack River, with Newburyport and the Ipswich marshes to the north. It's one of the most varied counties in the state: dense old cities, Route 128 suburbs, and fishing harbors.",
      "EZ Garage Doors serves all of Essex County for repairs, springs, openers, and new doors.",
    ],
    doorNotes: [
      "Coastal towns (Gloucester, Rockport, Marblehead, Newburyport): salt air corrosion — the same hardware advice as the Cape applies.",
      "Merrimack Valley cities (Lawrence, Haverhill, Lowell's neighbors): dense older housing with detached garages and tight driveways; single-car steel replacement doors are the workhorse here.",
      "Andover, North Andover, Boxford, Topsfield: larger suburban homes with double doors and heavier insulated panels — spring sizing matters, and both springs get replaced together.",
    ],
    notable: ["Lynn", "Lawrence", "Haverhill", "Peabody", "Salem", "Gloucester", "Beverly", "Andover", "Newburyport", "Methuen"],
    faqs: [
      { question: "Do you serve both the coast and the Merrimack Valley?", answer: "Yes — every Essex County city and town. Tell us the town when you call and we'll confirm coverage and timing on the spot." },
      { question: "My two-car door has one broken spring. Do both need replacing?", answer: "Almost always. Both springs have the same cycle count; the surviving one is at the end of its life too. Replacing the pair keeps the door balanced and saves a second visit — it's in the written quote either way." },
      { question: "Can you match a historic district's look on a new door?", answer: "Carriage-house style steel doors give the look of period wood doors with modern hardware. If your town's historic commission reviews exterior changes, we'll help you pick a style that fits." },
    ],
  },

  Franklin: {
    county: "Franklin",
    nickname: "Franklin County",
    imageId: "county-franklin-shelburne-falls",
    intro: [
      "Franklin County is the most rural county in Massachusetts: 26 towns across the upper Pioneer Valley and the hill country on both sides of it, with Greenfield as the county seat and Montague, Orange, Deerfield, and Shelburne among the larger towns. Farms, barns, and long private roads are the norm.",
      "EZ Garage Doors serves every Franklin County town. We scope rural calls by phone and photo so the van arrives with the right parts for the door — one trip is the goal.",
    ],
    doorNotes: [
      "Barns and outbuildings: oversized and non-standard openings are common. We measure and quote custom-sized doors and heavy-duty track for agricultural buildings.",
      "Winter: hill-town snow load, ice at the threshold, and springs failing in the cold — the same pattern as the Berkshires.",
      "Older homes along the river towns: low-headroom garages under porches or in converted sheds often need low-headroom track hardware.",
    ],
    notable: ["Greenfield", "Montague", "Orange", "Deerfield", "Shelburne", "Northfield", "Bernardston", "Sunderland"],
    faqs: [
      { question: "Do you come out to the hill towns?", answer: "Yes — all 26 Franklin County towns, from Monroe and Rowe to Warwick and Orange. Call with your town and we'll confirm timing honestly." },
      { question: "Can you put a garage door on a barn?", answer: "Usually. Barn openings are often wider or taller than residential stock sizes, and the framing needs checking. We measure, quote a door and track rated for the opening, and put the price in writing first." },
      { question: "Do you carry parts for older doors?", answer: "Vans are stocked for the common failures — springs, cables, rollers, hinges, and opener parts. For unusual or discontinued hardware we'll tell you on the phone what we need to order." },
    ],
  },

  Hampden: {
    county: "Hampden",
    nickname: "the Pioneer Valley",
    imageId: "red-barn-garage-doors",
    intro: [
      "Hampden County is the population center of Western Massachusetts: Springfield (the county seat), Chicopee, Holyoke, Westfield, West Springfield, Agawam, Ludlow, Longmeadow, East Longmeadow, and Wilbraham, out to Palmer and the hill towns of the Wilbraham range and the Westfield River valley. Twenty-three municipalities in all.",
      "EZ Garage Doors serves every Hampden County city and town for repairs, spring and opener work, and new door installation.",
    ],
    doorNotes: [
      "Post-war suburbs (Longmeadow, East Longmeadow, Wilbraham, Agawam): ranches and capes with attached single- and double-car garages — the classic spring, cable, and opener service territory.",
      "City neighborhoods (Springfield, Chicopee, Holyoke): detached garages behind two- and three-family homes, often with older single-car doors due for replacement.",
      "Westfield River and Pioneer Valley river towns: seasonal flooding and humidity in low-lying garages accelerate rust at the bottom brackets and seals.",
    ],
    notable: ["Springfield", "Chicopee", "Holyoke", "Westfield", "West Springfield", "Agawam", "Ludlow", "Longmeadow", "East Longmeadow", "Wilbraham"],
    faqs: [
      { question: "Do you cover all of Hampden County?", answer: "Yes — every city and town, from Springfield and Chicopee to Chester, Blandford, and Tolland in the hills. Call with your town and what the door is doing." },
      { question: "Do you repair doors on older detached city garages?", answer: "Yes. Many older detached garages have single-car doors with worn hardware, and some still have original wooden doors. We'll quote the repair and — if it makes sense — the replacement, both in writing." },
      { question: "My garage floods in spring and the door's bottom is rusting. What now?", answer: "Rust at the bottom brackets is a safety issue — those brackets are under cable tension. We inspect the bottom section, brackets, and seal, and quote the fix in writing before work begins." },
    ],
  },

  Hampshire: {
    county: "Hampshire",
    nickname: "Hampshire County",
    imageId: "county-hampshire-northampton-aerial",
    intro: [
      "Hampshire County sits in the heart of the Pioneer Valley: Northampton (the county seat), Amherst, Easthampton, South Hadley, Hadley, and Belchertown in the valley, with hill towns like Williamsburg, Chesterfield, Cummington, and Plainfield to the west and the Quabbin towns to the east. Twenty municipalities, the Five Colleges, and a housing mix that runs from 18th-century farmhouses to 1990s subdivisions.",
      "EZ Garage Doors serves all of Hampshire County.",
    ],
    doorNotes: [
      "Valley towns (Northampton, Amherst, Easthampton, Hadley): a lot of mid-century homes with attached garages and openers in their second decade — sensor, remote, and gear problems are routine.",
      "Hill towns: snow, ice, cold-weather spring failures, and long driveways — scope by phone first.",
      "Historic farmhouses: converted barns and carriage sheds with non-standard openings that need custom-sized doors.",
    ],
    notable: ["Northampton", "Amherst", "Easthampton", "South Hadley", "Belchertown", "Hadley", "Granby", "Ware"],
    faqs: [
      { question: "Do you serve the hill towns west of Northampton?", answer: "Yes — every Hampshire County town, including Chesterfield, Cummington, Plainfield, Worthington, and Middlefield. Call with your town for an honest answer on timing." },
      { question: "My opener is 15 years old and the remote stopped working. Repair or replace?", answer: "If the drive is healthy, a remote is a quick fix. If the logic board or motor is failing on an opener that old, replacement usually costs less over time and adds current safety features. We put both numbers in writing." },
      { question: "Can you install a door on a converted barn or carriage house?", answer: "Yes — we measure the opening, check the framing, and quote a custom-sized door with the right track. The price is in writing before anything is ordered." },
    ],
  },

  Middlesex: {
    county: "Middlesex",
    nickname: "Middlesex County",
    imageId: "county-middlesex-cambridge-houses",
    intro: [
      "Middlesex County is the most populous county in New England: 54 cities and towns from Cambridge, Somerville, Newton, Medford, and Malden inside Route 128 through Waltham, Lexington, Concord, and Woburn to Framingham, Marlborough, Lowell (the county seat), and the Route 495 towns. Housing runs from Victorian streets with alley garages to 1960s split-levels and new construction.",
      "EZ Garage Doors serves every Middlesex County municipality for repairs, springs, openers, and new doors.",
    ],
    doorNotes: [
      "Inner cities (Cambridge, Somerville, Medford, Malden): tight lots, under-house and detached garages with low headroom and narrow openings — low-headroom track and single-car doors are the norm.",
      "Route 128 suburbs (Newton, Lexington, Wellesley's neighbors, Winchester): larger homes with two- and three-car doors, insulated panels, and heavier spring systems that must be sized correctly.",
      "Route 495 corridor (Framingham, Marlborough, Chelmsford, Billerica): subdivisions with mid-life openers and doors — sensor, roller, and spring service is the daily work.",
    ],
    notable: ["Lowell", "Cambridge", "Newton", "Somerville", "Framingham", "Waltham", "Malden", "Medford", "Lexington", "Marlborough", "Woburn", "Arlington"],
    faqs: [
      { question: "Do you serve both the inner suburbs and the 495 towns?", answer: "Yes — all 54 Middlesex County cities and towns. Tell us the town and the door's symptoms when you call." },
      { question: "My garage is under the house with very little headroom. Can you replace the door?", answer: "Yes. Low-headroom track kits and properly sized torsion systems handle tight garages. We measure headroom, side room, and the opening, and put the door and hardware in a written estimate." },
      { question: "Can you work in a historic district?", answer: "Yes. Where a town historic commission reviews exterior changes, carriage-house or flush-panel steel doors in approved colors usually fit. We'll help you choose a style that passes review." },
    ],
  },

  Nantucket: {
    county: "Nantucket",
    nickname: "Nantucket",
    imageId: "county-nantucket-harbor",
    intro: [
      "Nantucket County is a single town on a single island, thirty miles out to sea. Everything — vans, parts, and doors — arrives by ferry, and the island's historic district review covers exterior changes island-wide, which shapes what a new garage door can look like.",
      "EZ Garage Doors serves Nantucket. Visits are planned around the ferry and scoped thoroughly by phone and photo first so one trip does the job.",
    ],
    doorNotes: [
      "Historic district review: door style, color, and window pattern on a new door should be chosen with the island's exterior-appearance review in mind — carriage-house and traditional panel styles are the safe direction.",
      "Salt air everywhere: galvanized springs, stainless bottom brackets and hinges, and nylon rollers are the sensible hardware for the island.",
      "Seasonal houses: pre-season tune-ups prevent opening-weekend failures on doors that sat closed all winter.",
    ],
    notable: ["Nantucket"],
    faqs: [
      { question: "Do you come out to Nantucket?", answer: "Yes. Island service is scheduled around the ferry. We'll ask for photos and details up front so the van carries the right parts, and we'll be honest with you about timing." },
      { question: "Will my new door pass historic review?", answer: "We'll help you choose a style, color, and window layout that fits the island's exterior-appearance guidelines. Traditional and carriage-house steel doors are usually the right direction; the written estimate documents the exact door before anything is ordered." },
      { question: "What hardware lasts in island air?", answer: "Galvanized springs, stainless brackets and hinges, and nylon rollers. Standard bare-steel hardware corrodes quickly on Nantucket." },
    ],
  },

  Norfolk: {
    county: "Norfolk",
    nickname: "Norfolk County",
    imageId: "county-norfolk-quincy-pier",
    intro: [
      "Norfolk County wraps around Boston's south and west: Quincy, Braintree, Weymouth, and Milton on the South Shore side; Dedham (the county seat), Needham, Wellesley, and Brookline to the west; and Franklin, Bellingham, and Foxborough out toward Route 495. Twenty-eight municipalities, including the exclaves of Brookline and Cohasset.",
      "EZ Garage Doors serves every Norfolk County city and town.",
    ],
    doorNotes: [
      "Quincy, Braintree, Weymouth: dense post-war neighborhoods with single-car attached and detached garages — spring, cable, and opener service territory.",
      "Wellesley, Needham, Dover, Westwood: larger homes, double and triple doors, insulated panels, and heavier spring systems.",
      "Coastal Cohasset and the Quincy shore: salt-air hardware advice applies.",
    ],
    notable: ["Quincy", "Brookline", "Weymouth", "Franklin", "Braintree", "Milton", "Needham", "Wellesley", "Randolph", "Dedham"],
    faqs: [
      { question: "Do you cover Brookline and Cohasset even though they're separated from the rest of the county?", answer: "Yes — every Norfolk County municipality, exclaves included. Call with your town." },
      { question: "My three-car door setup has one door that won't open. Do you service just that door?", answer: "Yes. Each door has its own springs, cables, and usually its own opener. We diagnose the one that failed and quote that repair in writing." },
      { question: "Is a quieter door possible? Mine wakes the house.", answer: "Usually — nylon rollers, a belt-drive opener, and a properly balanced insulated door make a big difference. We'll tell you which of those your door actually needs." },
    ],
  },

  Plymouth: {
    county: "Plymouth",
    nickname: "the South Shore",
    imageId: "county-plymouth-mayflower",
    intro: [
      "Plymouth County runs down the South Shore from Hingham, Hull, and Scituate through Marshfield and Duxbury to Plymouth (the county seat), then inland to Brockton — the county's largest city — Bridgewater, Middleborough, and the cranberry country around Wareham and Carver. Twenty-seven municipalities, coast and inland.",
      "EZ Garage Doors serves all of Plymouth County for repairs, springs, openers, and new doors.",
    ],
    doorNotes: [
      "Coastal towns (Hull, Scituate, Marshfield, Duxbury, Plymouth): salt air and nor'easters — corrosion-resistant hardware and wind-rated doors on exposed lots.",
      "Brockton and the Bridgewaters: dense older neighborhoods with detached garages and single-car doors, plus newer subdivisions with mid-life openers.",
      "Cranberry country (Carver, Wareham, Middleborough): rural lots, outbuildings, and long driveways — scope by phone first.",
    ],
    notable: ["Brockton", "Plymouth", "Marshfield", "Hingham", "Scituate", "Bridgewater", "Middleborough", "Wareham", "Abington", "Rockland"],
    faqs: [
      { question: "Do you serve the whole South Shore?", answer: "Yes — every Plymouth County city and town, from Hull to Wareham. Tell us the town when you call." },
      { question: "Our door faces the ocean and rattles in storms. Can that be fixed?", answer: "Often, yes. Reinforcing struts, correct track fastening, and a wind-rated door on replacement all help. We'll inspect what you have and put the options in writing." },
      { question: "Do you replace doors on older Brockton garages?", answer: "Yes. Detached garages with worn or wooden single-car doors are a common replacement job — we measure the opening and quote the door and hardware in writing." },
    ],
  },

  Suffolk: {
    county: "Suffolk",
    nickname: "Boston",
    imageId: "county-suffolk-boston-skyline",
    intro: [
      "Suffolk County is Boston plus Chelsea, Revere, and Winthrop — the densest housing in the state. Garages here are tucked under townhouses, behind three-deckers off alleys in Dorchester and East Boston, in the parking levels of condo buildings, and behind historic facades where architectural commissions review exterior changes.",
      "EZ Garage Doors serves all four Suffolk County municipalities. City work is scoped by phone and photo — access, headroom, and parking matter as much as the door itself.",
    ],
    doorNotes: [
      "Low headroom and narrow openings under townhouses and in alley garages: low-headroom track and single-car doors sized to the opening.",
      "Historic districts (Beacon Hill, Back Bay, the South End, Charlestown): exterior door changes may need commission review — style and color choices should account for it.",
      "Multi-unit and condo garages: commercial-grade operators and high-cycle springs on shared doors that open dozens of times a day.",
      "Revere and Winthrop shorelines: salt-air hardware advice applies.",
    ],
    notable: ["Boston", "Revere", "Chelsea", "Winthrop"],
    faqs: [
      { question: "Do you work in Boston neighborhoods with alley garages and no driveway?", answer: "Yes. Tell us the neighborhood, how the garage is accessed, and the headroom, and send a photo — we plan parking and access before the visit." },
      { question: "Do you service shared garage doors in condo buildings?", answer: "Yes. Shared doors are high-cycle doors; they need commercial-grade operators and springs rated for the traffic. We scope the door by phone and quote in writing to the association or manager." },
      { question: "Can you replace a door in a historic district?", answer: "Yes. Where a commission reviews exterior changes, we'll help you choose a style and color that fits the guidelines, and the written estimate documents the exact door before it's ordered." },
    ],
  },

  Worcester: {
    county: "Worcester",
    nickname: "Central Massachusetts",
    imageId: "county-worcester-downtown-brick",
    intro: [
      "Worcester County is the largest county in Massachusetts by land area and has the most municipalities — 60 — from Worcester (the county seat) and its ring of suburbs (Shrewsbury, Auburn, Holden, Westborough) north to Fitchburg, Leominster, and Gardner, south to Milford, Southbridge, and Webster, and out to the hill towns around Wachusett and the Quabbin.",
      "EZ Garage Doors serves every Worcester County city and town for repairs, springs, openers, and new door installation.",
    ],
    doorNotes: [
      "Snow belt: central Massachusetts hill towns get some of the heaviest snow in the state — frozen doors, torn bottom seals, and cold-weather spring failures are the winter pattern.",
      "Worcester's three-decker neighborhoods: detached garages with older single-car doors, often original wood, due for replacement.",
      "Route 9 and 495 suburbs (Shrewsbury, Westborough, Northborough, Milford): subdivisions with double doors, insulated panels, and mid-life openers.",
      "Fitchburg, Leominster, Gardner: older mill-city housing plus post-war neighborhoods — the full range of repair calls.",
    ],
    notable: ["Worcester", "Fitchburg", "Leominster", "Shrewsbury", "Milford", "Westborough", "Gardner", "Auburn", "Holden", "Southbridge", "Webster"],
    faqs: [
      { question: "Do you serve all 60 Worcester County towns?", answer: "Yes — from Ashburnham to Webster and Athol to Milford. Call with your town and what the door is doing; we'll confirm timing on the phone." },
      { question: "My door is heavy with snow on the driveway apron and the opener stopped. What's wrong?", answer: "Probably nothing with the opener — most openers stop when the door meets resistance. Clear the apron and the bottom seal, then try again. If it still won't move, don't force it; a spring may have failed in the cold." },
      { question: "Do you replace wooden garage doors on three-decker garages in Worcester?", answer: "Yes. Those openings are often non-standard, so we measure first and quote a steel or insulated door with the right hardware in writing." },
    ],
  },
};
