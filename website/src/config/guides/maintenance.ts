import type { Guide } from "./types";

const U = "2026-09-17";

export const MAINTENANCE_GUIDES: Guide[] = [
  {
    slug: "how-to-lubricate-a-garage-door",
    title: "How to Lubricate a Garage Door (and What Never to Lubricate)",
    description: "The right product, the parts that need it, the parts that don't, and how often — a ten-minute job that prevents most noise and wear.",
    category: "maintenance",
    updated: U,
    intro: "Lubrication is the one maintenance task every homeowner can do, and most do it wrong — the wrong product on the wrong parts. Here's the short version.",
    sections: [
      {
        h: "The product",
        p: ["A silicone spray or white lithium grease sold for garage doors. Not WD-40 — it's a solvent and water displacer that strips lubricant and attracts dust. Cold-rated products matter in Massachusetts; ordinary grease thickens in January."],
      },
      {
        h: "What to lubricate",
        p: [""],
        list: [
          "Torsion springs — a light coat along the coils to slow rust and quiet them.",
          "Hinges — at each pivot point.",
          "Roller bearings — the bearing at the wheel, not the wheel's surface (skip nylon rollers' surfaces entirely).",
          "End bearings and center bearing on the torsion shaft.",
          "The opener's rail where the trolley rides (chain and screw drives; a belt drive's belt gets nothing).",
          "Lock mechanisms and the arm bar's pivot.",
        ],
      },
      {
        h: "What not to lubricate",
        p: ["The tracks. Rollers should roll on clean, dry track; grease in the track collects grit and makes rollers slide instead of roll. Wipe the tracks with a rag instead. Also skip the belt on a belt-drive opener and the bottom rubber seal (a silicone wipe to prevent freezing is fine; grease is not)."],
      },
      {
        h: "How often",
        p: ["Twice a year — spring and fall — and always before winter. Run the door a few times afterward to spread the product. If a noise persists after lubrication, it's a worn part, not a dry one."],
      },
    ],
    related: [
      { label: "Tune-Up & Inspection", href: "/garage-door-tune-up/" },
      { label: "Noisy Garage Door Repair", href: "/noisy-garage-door-repair/" },
      { label: "Seasonal Checklist", href: "/guides/garage-door-seasonal-maintenance-checklist/" },
    ],
  },
  {
    slug: "garage-door-seasonal-maintenance-checklist",
    title: "Garage Door Maintenance Checklist for Massachusetts: Fall and Spring",
    description: "A twice-a-year checklist — what to look at, test, lubricate, and leave to a technician — timed to the two seasons that matter here.",
    category: "maintenance",
    updated: U,
    intro: "Two checks a year prevent most garage door emergencies: one before winter, one after it. Here's what each includes, split into what you can do and what a technician should.",
    sections: [
      {
        h: "Fall (October–November): before the cold",
        p: ["You:"],
        list: [
          "Lubricate springs, hinges, roller bearings, and the opener rail with a cold-rated product.",
          "Do the balance test with the opener released.",
          "Inspect the bottom seal for tears and hardening; wipe it with silicone so it won't freeze to the slab.",
          "Check side and top weatherstripping for gaps.",
          "Test the auto-reverse with a board on the floor and the sensor beam with a broom.",
          "Look at the cables at the bottom brackets for fraying.",
          "Clear the apron so meltwater doesn't run under the door.",
        ],
      },
      {
        h: "Fall: technician",
        p: ["A tune-up if the door is more than a few years old or hasn't had one: spring inspection and tension, hardware tightening, cable and drum check, opener force and travel settings. A door that felt heavier this year is a door to have checked before January."],
      },
      {
        h: "Spring (April–May): after the cold",
        p: ["You:"],
        list: [
          "Run the door and listen — new grinding or popping since fall means a roller or hinge went over the winter.",
          "Inspect the bottom section and bottom brackets for rust from salt and meltwater.",
          "Check the bottom seal for ice damage.",
          "Wipe the tracks clean of grit and salt.",
          "Re-test the balance and the auto-reverse.",
          "Wash the door — salt film on dark finishes especially.",
        ],
      },
      {
        h: "Anytime",
        p: ["A new noise, a door that's heavier, a crooked lift, or a slam at the bottom is a call, not a wait for the next checklist."],
      },
    ],
    related: [
      { label: "Tune-Up & Inspection", href: "/garage-door-tune-up/" },
      { label: "How to Lubricate a Garage Door", href: "/guides/how-to-lubricate-a-garage-door/" },
      { label: "The Balance Test", href: "/guides/garage-door-balance-test/" },
    ],
  },
  {
    slug: "how-often-should-a-garage-door-be-serviced",
    title: "How Often Should a Garage Door Be Serviced?",
    description: "Once a year for most homes, more for heavy use — and the signs that a door needs service before the calendar says so.",
    category: "maintenance",
    updated: U,
    intro: "A garage door cycles more than any other moving part of a house and gets less attention than the furnace. Here's a realistic service schedule and what it prevents.",
    sections: [
      {
        h: "The baseline",
        p: ["A professional tune-up once a year for a typical household, ideally in fall. Homeowner lubrication and a balance test twice a year. That's enough for most doors to reach their springs' full cycle life without a surprise."],
      },
      {
        h: "More often when",
        p: [""],
        list: [
          "The garage is the main entrance — six or more cycles a day wears springs and rollers in a few years, so semi-annual professional checks make sense.",
          "The door is a heavy insulated or wood door.",
          "The house is near the coast, where salt corrodes hardware faster.",
          "The door is a shared or commercial door with dozens of cycles a day — quarterly.",
        ],
      },
      {
        h: "Before the calendar",
        p: ["Service now, not at the next scheduled visit, if the door gets heavy or drifts down when released, if it starts grinding or popping, if it lifts crooked, if a cable looks frayed, or if the opener starts straining or reversing. Each of those is the early stage of a failure that costs more later."],
      },
      {
        h: "What a tune-up buys",
        p: ["Springs replaced at end of life on a schedule instead of on the coldest morning; rollers and hinges replaced before they take the door off track; an opener that isn't burning out against a heavy door. EZ Garage Doors' tune-up ends with a written summary of what's wearing and what to plan for — recommendations are quoted, never pushed."],
      },
    ],
    related: [
      { label: "Tune-Up & Inspection", href: "/garage-door-tune-up/" },
      { label: "Seasonal Checklist", href: "/guides/garage-door-seasonal-maintenance-checklist/" },
      { label: "Spring Cycle Life", href: "/guides/garage-door-spring-cycle-life/" },
    ],
  },
  {
    slug: "garage-door-weatherstripping-types",
    title: "Garage Door Weatherstripping: The Four Seals and When to Replace Each",
    description: "Bottom seal, perimeter seals, threshold, and section seals — what each does, how they fail in New England, and matching the right bottom seal profile.",
    category: "maintenance",
    updated: U,
    intro: "Four separate seals keep weather out of a garage. They fail in different ways and at different rates, and replacing the right one is inexpensive. Here's the map.",
    sections: [
      {
        h: "Bottom seal",
        p: ["A rubber or vinyl astragal that slides into an aluminum retainer along the door's bottom edge. It takes the most abuse: ice tears it, salt hardens it, and it wears where the slab is rough. Profiles vary — T-end, bead, bulb, and the shape has to match the retainer. A torn or hard bottom seal is the most common cause of daylight under the door."],
      },
      {
        h: "Perimeter (side and top) seals",
        p: ["Vinyl or rubber flaps nailed or screwed to the jambs and header that the door closes against. UV cracks them and they curl away from the jamb over the years. Replacement is a straightforward job and makes an attached garage noticeably less drafty."],
      },
      {
        h: "Threshold",
        p: ["A rubber strip glued to the floor under the door, raised slightly so water and meltwater don't run in. Useful on any apron that slopes toward the garage, and the fix for the freeze-to-the-slab problem."],
      },
      {
        h: "Section seals",
        p: ["On insulated doors, the joints between sections have tongue-and-groove or gasket seals built in. They rarely need attention unless a section is damaged."],
      },
      {
        h: "When to replace",
        p: ["Daylight, drafts, water, mice, or a seal that's visibly torn, curled, or rock-hard. Check all four at the fall tune-up. Sealing a door that isn't hanging level won't work — a crooked door is a hardware problem first."],
      },
    ],
    related: [
      { label: "Weatherstripping & Seals", href: "/garage-door-weatherstripping/" },
      { label: "Gaps Under or Beside the Door", href: "/guides/garage-door-gap-at-bottom-or-sides/" },
      { label: "Door Frozen Shut", href: "/guides/garage-door-frozen-shut/" },
    ],
  },
  {
    slug: "garage-door-rollers-nylon-vs-steel",
    title: "Garage Door Rollers: Nylon vs. Steel, Sealed vs. Open, and When to Replace",
    description: "The roller choices that decide how quiet and smooth a door runs, why builder-grade rollers fail early, and what a full replacement involves.",
    category: "maintenance",
    updated: U,
    intro: "Rollers are small, cheap, and carry the whole door. The ones that came with most doors were chosen by price. Upgrading them is the single most noticeable improvement most doors can get.",
    sections: [
      {
        h: "Builder-grade rollers",
        p: ["Plastic wheels with no bearings, or thin steel wheels with open bearings, rated for a few thousand cycles. They crack, flatten, and seize — and they're loud."],
      },
      {
        h: "Nylon with sealed ball bearings",
        p: ["The standard upgrade: a nylon wheel over a sealed ball-bearing hub. Quiet in the track, no lubrication needed on the wheel, rated for tens of thousands of cycles. The choice for nearly all residential doors."],
      },
      {
        h: "Steel with bearings",
        p: ["Heavier duty, louder, and needing periodic lubrication. Appropriate for very heavy doors and commercial doors."],
      },
      {
        h: "Stem length and wheel size",
        p: ["Rollers come in different wheel diameters (commonly 2 inches for residential) and stem lengths; the stem must match the hinge and the wheel must match the track. A technician matches them to the door."],
      },
      {
        h: "Replacement",
        p: ["All rollers at once — they share age and wear. The bottom rollers sit in the bottom brackets, which are under cable tension; that's the part not to do yourself. Roller replacement is a normal part of a tune-up recommendation when the door grinds or shudders."],
      },
    ],
    related: [
      { label: "Roller Replacement", href: "/garage-door-roller-replacement/" },
      { label: "Noisy Garage Door Repair", href: "/noisy-garage-door-repair/" },
      { label: "What Your Door's Noise Means", href: "/guides/garage-door-makes-loud-noise/" },
    ],
  },
  {
    slug: "garage-door-hinges-numbered-explained",
    title: "Why Garage Door Hinges Are Numbered (and Why It Matters)",
    description: "The #1, #2, #3 stamped on hinges isn't a size — it's a position. Using the wrong number binds the door. Here's how the system works.",
    category: "maintenance",
    updated: U,
    intro: "Look at the hinges on the inside of a sectional door and you'll see numbers stamped on them, increasing from the bottom joint up. It's not a quality grade. It's geometry.",
    sections: [
      {
        h: "What the number means",
        p: ["As the door travels through the curved section of track, each row of rollers needs to sit at a slightly different distance from the door's face so the sections fold without binding. Hinges are made with different roller-stem offsets to achieve that: #1 hinges at the bottom joint hold the roller closest to the door; #2 a little further out; #3 further still; and so on. The end hinges carry rollers; the center hinges on wide doors just join the sections."],
      },
      {
        h: "Why the wrong hinge binds the door",
        p: ["Put a #1 hinge where a #3 belongs and that roller sits too close to the door — the section binds in the track curve, the door shudders, and the hinge cracks under the strain. It's a common DIY mistake."],
      },
      {
        h: "Gauge",
        p: ["Hinges also come in different steel thicknesses. Builder-grade hinges are thin and crack at the knuckle on heavy doors; a replacement should be at least the same gauge and often heavier."],
      },
      {
        h: "Replacement",
        p: ["A cracked hinge is replaced with the same number in a proper gauge, and its neighbors are checked — they're the same age. The bottom brackets are not hinges and are under cable tension; leave those to a technician."],
      },
    ],
    related: [
      { label: "Hinge Replacement", href: "/garage-door-hinge-replacement/" },
      { label: "Roller Replacement", href: "/garage-door-roller-replacement/" },
      { label: "Tune-Up & Inspection", href: "/garage-door-tune-up/" },
    ],
  },
  {
    slug: "garage-door-rust-prevention",
    title: "Garage Door Rust: Where It Starts, How to Slow It, and When It's Structural",
    description: "The bottom section, the bottom brackets, springs, and tracks — where rust attacks a Massachusetts garage door, and what to do at each stage.",
    category: "maintenance",
    updated: U,
    intro: "Salt on the roads, salt in the air, meltwater under the door: rust is the slow failure mode of garage doors here. It's manageable if you know where to look.",
    sections: [
      {
        h: "Where it starts",
        p: [""],
        list: [
          "The bottom section's lower edge and the bottom brackets, sitting in salty meltwater all winter.",
          "The bottom of the vertical tracks, for the same reason.",
          "Springs and cables — pitted wire fails sooner.",
          "Scratches on the door face where the factory finish is broken, especially near the coast.",
          "Hinges and roller stems on older doors.",
        ],
      },
      {
        h: "Slowing it",
        p: [""],
        list: [
          "Keep meltwater out: a threshold and a good bottom seal.",
          "Rinse the bottom of the door and the tracks in spring to remove salt.",
          "Lubricate springs and hinges — the film slows corrosion.",
          "Touch up scratches on the door face with the manufacturer's touch-up paint.",
          "Near the coast, specify galvanized springs and stainless bottom brackets and hinges at replacement time.",
        ],
      },
      {
        h: "When it's structural",
        p: ["Rust on the bottom brackets is a safety issue: those brackets hold the lift cables under full spring tension, and a bracket that lets go releases the cable. Rust that's flaking or holed the bottom section, or eaten through the bottom of a track, is replacement territory for that part. Surface rust on a spring is cosmetic until it pits — a technician can tell."],
      },
    ],
    related: [
      { label: "Salt Air and Coastal Garage Doors", href: "/guides/coastal-garage-doors-salt-air/" },
      { label: "Track Repair", href: "/garage-door-track-repair/" },
      { label: "Panel Replacement", href: "/garage-door-panel-replacement/" },
    ],
  },
  {
    slug: "what-a-garage-door-tune-up-includes",
    title: "What a Garage Door Tune-Up Actually Includes",
    description: "The point-by-point list of what a professional tune-up checks, adjusts, and lubricates — and what it should never turn into.",
    category: "maintenance",
    updated: U,
    intro: "\"Tune-up\" means different things at different companies. Here's what EZ Garage Doors means by it, item by item, so you can judge any tune-up you're offered.",
    sections: [
      {
        h: "Inspection",
        p: [""],
        list: [
          "Balance test with the opener released",
          "Springs: wear, gaps, rust, correct sizing for the door",
          "Cables: fraying at the bottom brackets, seating on the drums",
          "Drums, end bearings, center bearing",
          "Rollers and hinges: wear, cracks, correct hinge numbers",
          "Tracks: alignment, bends, bracket tightness, rust at the bottom",
          "Bottom brackets: rust and security",
          "Weatherstripping and bottom seal",
          "Door sections: rust, delamination, bowing, struts",
        ],
      },
      {
        h: "Adjustment and lubrication",
        p: [""],
        list: [
          "Hardware tightened",
          "Springs, hinges, roller bearings, shaft bearings, and opener rail lubricated with a cold-rated product",
          "Tracks wiped clean (never greased)",
          "Spring tension adjusted if the door is slightly out of balance and the springs have life left",
        ],
      },
      {
        h: "Opener",
        p: [""],
        list: [
          "Chain or belt tension",
          "Travel and force limits checked against a balanced door",
          "Safety sensor alignment",
          "Auto-reverse test with a board; beam test",
          "Remotes, keypad, and wall console function",
        ],
      },
      {
        h: "What it should never become",
        p: ["A sales visit. Anything found is described in a written summary with a quote; nothing is replaced without your approval, and nothing that doesn't need replacing is recommended."],
      },
    ],
    related: [
      { label: "Tune-Up & Inspection", href: "/garage-door-tune-up/" },
      { label: "How Often to Service", href: "/guides/how-often-should-a-garage-door-be-serviced/" },
      { label: "The Auto-Reverse Test", href: "/guides/garage-door-auto-reverse-test/" },
    ],
  },
  {
    slug: "garage-door-maintenance-for-seasonal-homes",
    title: "Garage Door Maintenance for Seasonal Homes on the Cape and Islands",
    description: "Closing up in fall, opening in spring, and the failures that wait for a door that sat still all winter — a checklist for second homes.",
    category: "massachusetts",
    updated: U,
    intro: "A garage door that doesn't move for six months doesn't rest — it seizes. Cape Cod, Martha's Vineyard, and Nantucket seasonal homes generate a predictable set of spring service calls. Most are avoidable.",
    sections: [
      {
        h: "What happens over a closed winter",
        p: [""],
        list: [
          "Rollers seize in their bearings and grind on the first cycle.",
          "The bottom seal bonds to the slab and tears when the door is finally lifted.",
          "Opener backup batteries and remote batteries die.",
          "Salt air pits springs and cables that were already near the end.",
          "Mice move in through a gap and nest near the opener.",
        ],
      },
      {
        h: "Closing up (fall)",
        p: [""],
        list: [
          "Lubricate springs, hinges, and roller bearings with a cold-rated product.",
          "Wipe the bottom seal with silicone so it won't bond to the slab.",
          "Replace any worn seal now, not in May.",
          "Lock the door manually and unplug the opener if the house is de-energized.",
          "Note any noise or heaviness — a door that was marginal in October will be a problem in May.",
        ],
      },
      {
        h: "Opening up (spring)",
        p: [""],
        list: [
          "Free the bottom seal by hand before running the opener.",
          "Run the door by hand first (opener released) to feel for seized rollers or a heavy door.",
          "Replace batteries; re-pair remotes if the opener was unplugged.",
          "Rinse salt film from the door and tracks.",
        ],
      },
      {
        h: "The pre-season tune-up",
        p: ["A technician visit in April or May, before opening weekend, catches the seized rollers and end-of-life springs before the family arrives to a door that won't open. EZ Garage Doors schedules island and Cape visits with the ferry and the traffic in mind — call early."],
      },
    ],
    related: [
      { label: "Barnstable County", href: "/service-areas/barnstable-county/" },
      { label: "Tune-Up & Inspection", href: "/garage-door-tune-up/" },
      { label: "Salt Air and Coastal Doors", href: "/guides/coastal-garage-doors-salt-air/" },
    ],
  },
  {
    slug: "garage-door-security-tips",
    title: "Garage Door Security: 8 Ways to Keep the Garage from Being the Weak Point",
    description: "Erase old remotes, secure the emergency release, lock a released door, and other practical steps — plus what a smart opener adds.",
    category: "safety",
    updated: U,
    intro: "The garage door is often the largest and least-secured entrance to a house. Most of the fixes are free or cheap.",
    sections: [
      {
        h: "The list",
        p: [""],
        list: [
          "Erase old remotes. Clear the opener's memory and re-pair only yours — especially after moving in or losing a remote.",
          "Don't leave the remote in the car in the driveway. A stolen car remote is a house key.",
          "Secure the emergency release. The red cord can be fished from outside on some doors with a coat hanger through the top seal; a small zip tie through the release lever's hole (still breakable by hand from inside) or a shield stops it.",
          "Cover or obscure windows. Frosted glass or high placement keeps contents out of view.",
          "Lock the door when away for long periods. Slide lock, or a padlock through a track hole above a roller — and unplug the opener.",
          "Keep the house door from the garage locked. The garage isn't the last line.",
          "Use the wall console's lock mode when on vacation; it disables remotes.",
          "Consider a smart opener for alerts when the door opens and confirmation that it's closed.",
        ],
      },
      {
        h: "What a smart opener adds",
        p: ["Open/closed status from anywhere, alerts on every opening, scheduled auto-close, and activity history. It doesn't replace the basics above, but it ends the \"did I close it\" question."],
      },
      {
        h: "A note on old openers",
        p: ["Very old openers used fixed dip-switch codes that can be copied. Modern openers use rolling codes. If yours is old enough to have dip switches, replacement is a security upgrade as well as a mechanical one."],
      },
    ],
    related: [
      { label: "Smart Openers", href: "/smart-garage-door-opener/" },
      { label: "Remotes & Keypads", href: "/garage-door-remote-programming/" },
      { label: "Door Opens by Itself", href: "/guides/garage-door-opens-by-itself/" },
    ],
  },
];
