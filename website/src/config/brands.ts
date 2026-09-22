/**
 * Brand pages — "brands we service". Every page states non-affiliation.
 * Facts here are general product-line knowledge (drive types, product
 * families) — never dealer status, warranties, or prices.
 */

export interface BrandPage {
  slug: string;
  name: string;
  kind: "opener" | "door";
  /** Manifest id in brand-logos.ts, or null when no logo asset exists. */
  logoId: string | null;
  /** A door STYLE photo shown as context (door brands only). Captioned as a style,
   *  never as this brand's door; never with a logo on it. */
  contextImageId?: string;
  tagline: string;
  intro: string[];
  commonCalls: string[];
  notes: string[];
  faqs: { question: string; answer: string }[];
}

const DISCLAIMER =
  "We service this brand. EZ Garage Doors is an independent Massachusetts company — not an authorized dealer of, affiliated with, or endorsed by the manufacturer.";

export const OPENER_BRANDS: BrandPage[] = [
  {
    slug: "liftmaster",
    name: "LiftMaster",
    kind: "opener",
    logoId: "liftmaster",
    tagline: "Belt, chain, and wall-mount openers — the most common brand in Massachusetts garages",
    intro: [
      "LiftMaster openers are the professional-installed line from the Chamberlain Group, and they are the opener we see most often in Massachusetts garages — belt-drive units under bedrooms, chain drives in detached garages, and wall-mount jackshaft units in high-lift or low-headroom setups. Many current models have Wi-Fi (myQ) built in.",
      "We repair, service, and replace LiftMaster openers of every age: logic boards, gear kits, trolleys, travel and force settings, safety sensors, remotes, and keypads. When a unit is past economical repair, we quote a replacement in writing next to the repair price so you can choose.",
    ],
    commonCalls: [
      "Motor runs but the door doesn't move (stripped gear or broken trolley)",
      "Sensor LEDs blinking and the door reverses at the floor",
      "Remote works only up close, or not at all",
      "Opener light flashes a code after the door stops",
      "Wall-mount unit runs but the cable drum slips",
      "Upgrading an older unit to a quiet belt drive with app control",
    ],
    notes: [
      "Belt-drive models are the usual pick for garages under living space; chain drives are the durable budget choice.",
      "Wall-mount (jackshaft) LiftMaster units mount beside the torsion shaft and free the ceiling — useful for high-lift tracks and low headroom.",
      "Most current units include myQ Wi-Fi; older units can add app control with a hub.",
      DISCLAIMER,
    ],
    faqs: [
      { question: "Can you fix a LiftMaster opener you didn't install?", answer: "Yes. We service LiftMaster openers regardless of who installed them. Send a photo of the label on the motor housing and we'll usually know what parts to bring." },
      { question: "My LiftMaster light is blinking a code. What does it mean?", answer: "The blink pattern points to the fault — commonly a sensor obstruction or misalignment, a travel/force fault, or a logic-board issue. Note how many flashes you see and tell us when you call." },
      { question: "Is it worth repairing a 15-year-old LiftMaster?", answer: "Sometimes. Sensors, remotes, and gear kits are reasonable repairs. If the logic board or motor has failed on an older unit, a new opener with current safety features often costs less over time. We put both numbers in writing." },
    ],
  },
  {
    slug: "chamberlain",
    name: "Chamberlain",
    kind: "opener",
    logoId: "chamberlain",
    tagline: "Retail belt and chain openers with built-in Wi-Fi on most current models",
    intro: [
      "Chamberlain openers are the retail-channel siblings of LiftMaster — the units many homeowners buy at a home center and have installed. They share much of the same engineering: belt and chain drives, myQ Wi-Fi on most current models, and the same style of safety sensors and remotes.",
      "We service Chamberlain openers of every generation: drive gears, trolleys, logic boards, sensors, remotes, keypads, and force and travel settings. If a unit was installed without a properly balanced door, we check the door first — an opener straining against a heavy door fails early.",
    ],
    commonCalls: [
      "Opener hums and clicks but the door stays put",
      "Door goes up but won't come down (sensor issue)",
      "Remote and keypad lost their programming",
      "Loud grinding from the motor head",
      "Wi-Fi setup never worked or dropped offline",
    ],
    notes: [
      "Chamberlain and LiftMaster share many parts and the myQ app.",
      "Retail units are sometimes undersized for heavy insulated doors — we match the motor to the door's weight on replacement.",
      DISCLAIMER,
    ],
    faqs: [
      { question: "My Chamberlain opener reverses right before the door closes. Why?", answer: "Most often the safety sensors near the floor are blocked, dirty, or out of alignment; the opener's light usually blinks when this happens. If the sensors are fine, the close-force or travel limit needs adjustment, or something is binding in the track." },
      { question: "Do you replace Chamberlain gear kits?", answer: "Yes. A stripped main gear is a common failure on chain and belt units and is a normal repair when the rest of the opener is healthy. We quote the gear kit against a replacement so you can compare." },
    ],
  },
  {
    slug: "genie",
    name: "Genie",
    kind: "opener",
    logoId: "genie",
    tagline: "Screw-drive, belt, and chain openers — including the classic screw drives still running in older garages",
    intro: [
      "Genie openers come in belt, chain, and screw-drive designs. The screw drive — a rotating threaded rail — is the one many older Massachusetts garages still have; it's simple and durable but sensitive to cold-weather lubrication. Current Genie units are belt and chain drives with Aladdin Connect app control on many models.",
      "We repair and replace Genie openers: carriages, rails, drive lubrication, logic boards, Safe-T-Beam sensors, remotes, keypads, and travel/force settings.",
    ],
    commonCalls: [
      "Screw-drive opener slows down or stalls in winter",
      "Carriage cracked or slipping on the rail",
      "Safe-T-Beam LEDs off or blinking, door won't close",
      "Remote stopped pairing",
      "Older unit with no safety sensors at all",
    ],
    notes: [
      "Screw-drive rails need the right cold-weather lubricant; the wrong grease thickens in a New England January.",
      "Genie's Safe-T-Beam sensors use a red/green LED pair — the pattern helps diagnose alignment vs. wiring faults.",
      DISCLAIMER,
    ],
    faqs: [
      { question: "My Genie screw drive is slow in the cold. Is it dying?", answer: "Not necessarily. Screw drives slow when the rail lubricant thickens in the cold. A cleaning and the correct lubricant often restores it. If the carriage is worn, that's the repair — we'll tell you which in writing." },
      { question: "Can you replace just the Genie carriage?", answer: "Usually, yes — a cracked or stripped carriage is a normal repair when the motor and rail are healthy." },
    ],
  },
  {
    slug: "craftsman",
    name: "Craftsman",
    kind: "opener",
    logoId: "craftsman",
    tagline: "Chain and belt openers sold through Sears for decades — many still in service",
    intro: [
      "Craftsman garage door openers were sold through Sears for decades and were manufactured largely by the Chamberlain Group, so parts and behavior overlap heavily with Chamberlain and LiftMaster units. A large number of Massachusetts homes still run a Craftsman opener from the 1990s–2010s.",
      "We service and replace Craftsman openers: gear kits, trolleys, logic boards, sensors, remotes, and keypads. Where parts for a very old unit are no longer practical, we quote a replacement next to the repair so you can decide.",
    ],
    commonCalls: [
      "Stripped main gear (motor runs, door doesn't move)",
      "Remote or keypad won't program after a battery change",
      "Sensor wiring corroded at the floor brackets",
      "Chain hangs loose and slaps the rail",
      "Unit predates safety sensors",
    ],
    notes: [
      "Many Craftsman parts are interchangeable with Chamberlain/LiftMaster equivalents.",
      "Units without safety sensors are worth replacing on safety grounds alone.",
      DISCLAIMER,
    ],
    faqs: [
      { question: "Can you still get parts for a Craftsman opener?", answer: "For most units from the 1990s onward, yes — gear kits, sensors, remotes, and logic boards have Chamberlain-compatible equivalents. For very old units, replacement is usually the practical answer; we'll tell you which in writing." },
    ],
  },
  {
    slug: "linear",
    name: "Linear",
    kind: "opener",
    logoId: "linear",
    tagline: "Residential and light-commercial operators, often installed by builders",
    intro: [
      "Linear (a Nortek Control brand) makes residential chain and belt openers and light-commercial operators, and their units are common in builder-installed garages across Massachusetts subdivisions. Many Linear openers use a distinctive rail and trolley design with their own remote and sensor families.",
      "We repair and replace Linear openers: trolleys, drive components, logic boards, sensors, remotes, and keypads — and we can swap a Linear unit for another brand if parts or features make that the better value.",
    ],
    commonCalls: [
      "Opener runs but the trolley doesn't engage",
      "Remotes lost programming after a power outage",
      "Sensors misaligned after a bump",
      "Builder-installed unit undersized for a heavy replacement door",
    ],
    notes: [
      "Linear remotes and sensors are brand-specific — bring the model number when you call.",
      DISCLAIMER,
    ],
    faqs: [
      { question: "The builder installed a Linear opener and now it's failing — do I have to stay with Linear?", answer: "No. We can repair it, or replace it with any brand we service. We quote both in writing." },
    ],
  },
  {
    slug: "sommer",
    name: "SOMMER",
    kind: "opener",
    logoId: "sommer",
    tagline: "German-engineered direct-drive openers with a moving motor carriage",
    intro: [
      "SOMMER openers use a direct-drive design: instead of a chain or belt moving a trolley along a fixed rail, the motor itself travels along a stationary chain inside the rail. They are quiet, have few moving parts, and show up in Massachusetts garages where homeowners specifically wanted a low-noise opener.",
      "We service SOMMER openers — carriage, rail, logic, sensors, remotes — and replace them when needed.",
    ],
    commonCalls: [
      "Carriage stalls partway along the rail",
      "Remote pairing after a battery change",
      "Sensor faults after a garage cleanout",
    ],
    notes: [
      "The direct-drive design is very quiet and suits garages under bedrooms.",
      DISCLAIMER,
    ],
    faqs: [
      { question: "Is a SOMMER opener quieter than a belt drive?", answer: "Both are quiet; SOMMER's direct-drive design has fewer moving parts. The bigger noise factor is usually the door itself — rollers, hinges, and balance — which we check first." },
    ],
  },
  {
    slug: "marantec",
    name: "Marantec",
    kind: "opener",
    logoId: null,
    tagline: "European belt-drive openers known for quiet operation",
    intro: [
      "Marantec is a German manufacturer of belt-drive residential openers with a reputation for quiet, smooth operation. They are less common in Massachusetts than LiftMaster or Chamberlain, but we see them in newer construction and in garages where noise mattered.",
      "We repair and replace Marantec openers: drive belts and carriages, logic boards, sensors, remotes, and keypads.",
    ],
    commonCalls: [
      "Belt slipping or the carriage skipping",
      "Remotes out of sync",
      "Sensor or wiring faults",
    ],
    notes: [DISCLAIMER],
    faqs: [
      { question: "Can you get Marantec parts?", answer: "For most current and recent units, yes. Send the model number from the motor housing label and we'll confirm before the visit." },
    ],
  },
];

export const DOOR_BRANDS: BrandPage[] = [
  {
    slug: "clopay",
    name: "Clopay",
    kind: "door",
    logoId: "clopay",
    contextImageId: "door-carriage",
    tagline: "Residential steel, insulated, carriage-house, and modern doors",
    intro: [
      "Clopay is one of the largest residential garage door manufacturers in North America, with steel raised-panel doors, insulated sandwich-panel doors, carriage-house collections, and modern flush and glass designs. A large share of the doors we service in Massachusetts carry a Clopay label on the end stile.",
      "We repair Clopay doors — springs, cables, rollers, hinges, panels where a matching section is available — and install new Clopay doors when a replacement is the better value. Every option is priced in writing before anything is ordered.",
    ],
    commonCalls: [
      "Broken torsion spring on an insulated double door",
      "Single damaged section on a raised-panel door",
      "Worn rollers and hinges on a 15-year-old door",
      "Replacing a non-insulated door with an insulated Clopay model",
    ],
    notes: [
      "Clopay doors span every price tier — from single-layer steel to full sandwich-panel insulated doors.",
      "Panel matching depends on the model still being in production; we check before quoting a section replacement.",
      DISCLAIMER,
    ],
    faqs: [
      { question: "Can you replace one damaged panel on my Clopay door?", answer: "Often, if the model and color are still available. We check the label on the end stile, confirm availability, and quote the section against a full replacement so you can compare." },
    ],
  },
  {
    slug: "amarr",
    name: "Amarr",
    kind: "door",
    logoId: "amarr",
    contextImageId: "door-steel",
    tagline: "Steel and insulated residential doors plus a full commercial line",
    intro: [
      "Amarr manufactures residential steel and insulated garage doors — traditional raised-panel, carriage-house, and modern collections — and a broad commercial line of sectional and rolling doors. We see Amarr doors on Massachusetts homes and on commercial buildings alike.",
      "We service Amarr residential and commercial doors: springs, cables, rollers, tracks, sections, and operators, and we install new Amarr doors when replacement is the right call.",
    ],
    commonCalls: [
      "Spring replacement on residential and commercial Amarr doors",
      "Section replacement after impact damage",
      "Commercial door operator and high-cycle spring service",
    ],
    notes: [
      "Amarr's commercial line covers warehouse, loading dock, and rolling steel applications.",
      DISCLAIMER,
    ],
    faqs: [
      { question: "Do you service Amarr commercial doors?", answer: "Yes — sectional and rolling doors, operators, and high-cycle springs. Scope the door by phone (type, size, what failed) and we'll quote in writing." },
    ],
  },
  {
    slug: "haas-door",
    name: "Haas Door",
    kind: "door",
    logoId: "haas",
    contextImageId: "door-charcoal",
    tagline: "Ohio-built residential and commercial doors, including heavy insulated models",
    intro: [
      "Haas Door builds residential and commercial garage doors in Ohio, including well-regarded insulated steel and aluminum doors. Their residential lines cover traditional, carriage-house, and contemporary styles, and their commercial doors are common on service buildings and firehouses.",
      "We repair and install Haas doors — springs, cables, rollers, sections, and hardware — with every price in writing first.",
    ],
    commonCalls: [
      "Spring sizing on heavy insulated Haas doors",
      "Commercial door hardware and operator service",
      "New insulated Haas door for an attached garage",
    ],
    notes: [
      "Heavy insulated doors need springs matched precisely to the door's weight — never a generic spring.",
      DISCLAIMER,
    ],
    faqs: [
      { question: "Are Haas doors good for cold climates?", answer: "Their insulated steel doors are well suited to Massachusetts winters — thermal breaks and full sandwich-panel construction keep an attached garage warmer. We'll show insulated options side by side in the written estimate." },
    ],
  },
  {
    slug: "wayne-dalton",
    name: "Wayne Dalton",
    kind: "door",
    logoId: "wayne-dalton",
    contextImageId: "door-white-carriage",
    tagline: "Residential doors with a distinctive TorqueMaster spring system on many models",
    intro: [
      "Wayne Dalton makes residential steel, insulated, carriage-house, and modern garage doors. Many Wayne Dalton doors use the TorqueMaster spring system — springs enclosed inside the torsion tube — which behaves differently from standard exposed torsion springs and needs a technician who knows it.",
      "We service Wayne Dalton doors, including TorqueMaster spring replacement and conversion to a standard torsion system when that's the better long-term value, plus cables, rollers, sections, and hardware.",
    ],
    commonCalls: [
      "TorqueMaster spring failure — door suddenly very heavy, no visible broken spring",
      "Converting TorqueMaster to standard torsion springs",
      "Section and hardware replacement",
    ],
    notes: [
      "TorqueMaster springs are hidden inside the tube; a failed one doesn't show the classic gap you'd see on an exposed torsion spring.",
      DISCLAIMER,
    ],
    faqs: [
      { question: "My Wayne Dalton door got heavy but I don't see a broken spring. Why?", answer: "If the door has a TorqueMaster system, the springs are inside the torsion tube, so a break isn't visible. Stop using the door and call — the fix is a TorqueMaster spring replacement or a conversion to standard torsion springs, both quoted in writing." },
    ],
  },
  {
    slug: "raynor",
    name: "Raynor",
    kind: "door",
    logoId: "raynor",
    contextImageId: "after-white-raised",
    tagline: "Residential and commercial doors from an Illinois manufacturer with a dealer network",
    intro: [
      "Raynor manufactures residential steel and insulated doors and a full commercial line. Raynor doors in Massachusetts are typically installed through their dealer network; we are not a Raynor dealer, but we service Raynor doors like any other brand.",
      "We repair Raynor doors — springs, cables, rollers, hinges, sections, and operators — and quote replacements in writing when repair no longer makes sense.",
    ],
    commonCalls: [
      "Spring and cable replacement",
      "Roller and hinge wear on older doors",
      "Commercial door operator service",
    ],
    notes: [DISCLAIMER],
    faqs: [
      { question: "You're not a Raynor dealer — can you still fix my Raynor door?", answer: "Yes. Springs, cables, rollers, hinges, and operators are standard hardware we service on any brand. Brand-specific sections may need to come through a dealer; we'll tell you honestly." },
    ],
  },
  {
    slug: "chi-overhead-doors",
    name: "C.H.I. Overhead Doors",
    kind: "door",
    logoId: "chi",
    contextImageId: "door-wood",
    tagline: "Residential and commercial sectional doors with a wide range of finishes",
    intro: [
      "C.H.I. Overhead Doors makes residential steel, insulated, carriage-house, and modern doors — known for a wide finish range including wood-look — plus commercial sectional and rolling doors.",
      "We service and install C.H.I. doors across Massachusetts: springs, cables, rollers, sections, and hardware, and commercial operators.",
    ],
    commonCalls: [
      "Spring and cable replacement",
      "Wood-look door for a replacement project",
      "Commercial sectional door service",
    ],
    notes: [DISCLAIMER],
    faqs: [
      { question: "Do you install C.H.I. wood-look doors?", answer: "Yes. Wood-look steel doors give the warmth of wood without the maintenance. We measure, quote in writing, and order to your specification." },
    ],
  },
  {
    slug: "hormann",
    name: "Hörmann",
    kind: "door",
    logoId: "hormann",
    contextImageId: "door-black-windows",
    tagline: "German manufacturer with residential steel and insulated doors sold in North America",
    intro: [
      "Hörmann is a German door manufacturer with a North American residential line of steel and insulated garage doors, including contemporary and traditional designs.",
      "We service and install Hörmann doors — springs, cables, rollers, sections, and hardware — with every price in writing before work begins.",
    ],
    commonCalls: [
      "Spring and hardware service",
      "Section replacement",
      "New insulated door installation",
    ],
    notes: [DISCLAIMER],
    faqs: [
      { question: "Can you get Hörmann parts in Massachusetts?", answer: "Standard hardware — springs, cables, rollers, hinges — is universal. Brand-specific sections are ordered; we confirm availability before quoting." },
    ],
  },
];

export const ALL_BRANDS: BrandPage[] = [...OPENER_BRANDS, ...DOOR_BRANDS];
export const brandBySlug = (slug: string): BrandPage | undefined => ALL_BRANDS.find((b) => b.slug === slug);
