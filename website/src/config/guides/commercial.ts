import type { Guide } from "./types";

const U = "2026-09-17";

export const COMMERCIAL_GUIDES: Guide[] = [
  {
    slug: "commercial-vs-residential-garage-doors",
    title: "Commercial vs. Residential Garage Doors: What's Actually Different",
    description: "Cycle ratings, gauge, operators, safety devices, and service intervals — why a commercial door is engineered differently and why it needs different service.",
    category: "commercial",
    updated: U,
    intro: "A commercial overhead door looks like a bigger residential door. Underneath, nearly everything is specified differently, because it does in a month what a home door does in years.",
    sections: [
      {
        h: "Cycles",
        p: ["A home door might see 1,500 cycles a year. A loading dock door can see that in a month. Commercial springs are specified by cycle rating — 25,000, 50,000, 100,000 — and replaced on schedule, not on failure."],
      },
      {
        h: "Construction",
        p: ["Heavier steel gauge, more struts, heavier track (two- or three-inch), commercial rollers and hinges, and options like full-view aluminum sections, insulated sandwich panels for conditioned spaces, and rolling steel curtains where headroom or security demands it."],
      },
      {
        h: "Operators",
        p: ["Commercial operators are rated by duty cycle and door size: trolley operators for standard-lift doors, jackshaft operators for high-lift and vertical-lift, and hoist operators with chain backup. Controls include three-button stations, key switches, loop detectors, and radio controls."],
      },
      {
        h: "Safety devices",
        p: ["Photo eyes, safety edges on the bottom section, and monitored entrapment protection on operators — required for momentary-contact close on commercial operators."],
      },
      {
        h: "Service",
        p: ["Planned maintenance on a cycle-based schedule, with documentation per door, replaces the residential model of \"call when it breaks.\" A dock door down on a Monday costs more than a year of inspections."],
      },
    ],
    related: [
      { label: "Commercial Garage Door Repair", href: "/commercial-garage-door-repair/" },
      { label: "Commercial Door Maintenance", href: "/commercial-garage-door-maintenance/" },
      { label: "High-Cycle Springs", href: "/guides/high-cycle-garage-door-springs-commercial/" },
    ],
  },
  {
    slug: "high-cycle-garage-door-springs-commercial",
    title: "High-Cycle Springs for Commercial Doors: Why Rating Matters More Than Anything",
    description: "How commercial spring ratings work, how to estimate a door's cycle count, and why planned replacement beats waiting for the break.",
    category: "commercial",
    updated: U,
    intro: "On a busy commercial door, the spring is the part with a known lifespan. Managed well, it's replaced on a schedule during a quiet hour. Managed badly, it fails at the loading dock at 8 a.m.",
    sections: [
      {
        h: "Cycle ratings",
        p: ["Commercial torsion springs are specified for a rated cycle life — commonly 25,000, 50,000, or 100,000 cycles — by using larger wire and longer springs to carry the same load with less stress per cycle. The rating is a design choice, not a grade of quality; it should match the door's actual traffic."],
      },
      {
        h: "Estimating a door's cycles",
        p: ["Count openings per hour on a typical day, multiply by operating hours and days per year. A dock door opening 20 times an hour for 10 hours, 250 days a year, is 50,000 cycles annually. A standard 10,000-cycle spring on that door lasts about ten weeks. A 100,000-cycle spring lasts about two years."],
      },
      {
        h: "Planned replacement",
        p: ["With the cycle estimate and the spring's rating, replacement is scheduled before the rated life is reached — during a maintenance visit, off-hours, with the door out of service for an hour rather than a day. Documentation per door tracks the count."],
      },
      {
        h: "When a spring breaks anyway",
        p: ["Stop the operator, keep the door in place, keep people and equipment clear, and call. EZ Garage Doors scopes commercial calls by phone — door size, spring configuration, operator — so the visit fixes the door instead of discovering it."],
      },
    ],
    related: [
      { label: "Commercial Door Maintenance", href: "/commercial-garage-door-maintenance/" },
      { label: "Commercial Garage Door Repair", href: "/commercial-garage-door-repair/" },
      { label: "Spring Cycle Life", href: "/guides/garage-door-spring-cycle-life/" },
    ],
  },
  {
    slug: "rolling-steel-doors-explained",
    title: "Rolling Steel Doors: How They Work, Where They're Used, and What Fails",
    description: "Coiling service doors and counter shutters — the curtain, guides, barrel, and operator, and the common failures on high-cycle rolling doors.",
    category: "commercial",
    updated: U,
    intro: "Rolling steel doors coil up into a barrel above the opening instead of tracking back along the ceiling. They're the door for tight headroom, security, and heavy commercial use — and they have their own failure modes.",
    sections: [
      {
        h: "The parts",
        p: ["A curtain of interlocking steel slats; vertical guides on each side of the opening; a barrel above the opening containing the counterbalance springs; a hood covering the barrel; and an operator — manual chain hoist, or a motor with a chain-hoist backup."],
      },
      {
        h: "Where they're used",
        p: ["Warehouses and distribution, self-storage, fire stations, parking garages, retail storefronts (as security grilles and counter shutters), and any opening where backroom or headroom is limited."],
      },
      {
        h: "What fails",
        p: [""],
        list: [
          "Slats damaged by forklifts or vehicles — individual slats can be replaced.",
          "Guides bent or worn, letting the curtain bind or come out.",
          "Barrel springs at end of cycle life — the door gets heavy on the hoist or the operator strains.",
          "Operator brake, clutch, or limit issues.",
          "Bottom bar and its astragal seal worn.",
          "Wind locks damaged on exterior doors.",
        ],
      },
      {
        h: "Service",
        p: ["Rolling doors need the same cycle-based maintenance as sectional commercial doors, with attention to guide lubrication, slat condition, and spring tension in the barrel. EZ Garage Doors services rolling steel doors and operators and quotes in writing after scoping the door by phone."],
      },
    ],
    related: [
      { label: "Commercial Garage Door Repair", href: "/commercial-garage-door-repair/" },
      { label: "Commercial Door Maintenance", href: "/commercial-garage-door-maintenance/" },
      { label: "Commercial vs. Residential Doors", href: "/guides/commercial-vs-residential-garage-doors/" },
    ],
  },
  {
    slug: "loading-dock-door-maintenance",
    title: "Loading Dock Door Maintenance: A Facilities Checklist",
    description: "What to inspect on dock doors and how often, the failures that stop trucks, and how a maintenance program is structured.",
    category: "commercial",
    updated: U,
    intro: "A loading dock door is a production asset. When it's down, trucks wait, staff reroute, and the schedule slips. Here's what keeps it up, organized the way a facilities manager would.",
    sections: [
      {
        h: "Monthly (staff)",
        p: [""],
        list: [
          "Run each door through a full cycle and listen for new noise.",
          "Check photo eyes and safety edges reverse the door.",
          "Look for damaged sections, bent track, and loose hardware from forklift contact.",
          "Confirm seals and dock shelters are intact.",
        ],
      },
      {
        h: "Quarterly (technician)",
        p: [""],
        list: [
          "Spring inspection against rated cycle life; tension check.",
          "Cables, drums, bearings.",
          "Rollers, hinges, track alignment, and anchor bolts.",
          "Operator: duty cycle, brake, clutch, limits, chain-hoist backup.",
          "Entrapment protection tests.",
          "Lubrication and hardware tightening.",
          "Written report per door with recommendations and budget items.",
        ],
      },
      {
        h: "The failures that stop trucks",
        p: ["Spring failure (predictable — schedule replacement), forklift damage to sections and track (train drivers, install bollards), operator failures on undersized units, and photo-eye faults that leave a door refusing to close at shift end."],
      },
      {
        h: "Program structure",
        p: ["Frequency by cycle count, scope per door, off-hours visits where needed, documentation for your CMMS, and a single written quote for the program. Vendor onboarding documentation available on request. EZ Garage Doors serves commercial properties across Massachusetts."],
      },
    ],
    related: [
      { label: "Commercial Door Maintenance", href: "/commercial-garage-door-maintenance/" },
      { label: "Commercial Garage Door Repair", href: "/commercial-garage-door-repair/" },
      { label: "High-Cycle Springs", href: "/guides/high-cycle-garage-door-springs-commercial/" },
    ],
  },
  {
    slug: "condo-and-apartment-garage-door-service",
    title: "Shared Garage Doors in Condos and Apartments: What Associations Should Know",
    description: "Why a shared residential garage door is a commercial door, what fails on them, and how associations and managers should plan service.",
    category: "commercial",
    updated: U,
    intro: "A garage door serving thirty units opens more times a day than a loading dock. Associations that treat it like a house door end up with residents locked in — or out — and emergency invoices. Here's the right frame.",
    sections: [
      {
        h: "It's a commercial door",
        p: ["Cycle counts on a shared garage door routinely run 50–200 a day. That means commercial-grade operators rated for continuous duty, high-cycle springs, heavy track, and commercial safety devices — monitored photo eyes, safety edges, and often loop detectors for vehicles."],
      },
      {
        h: "What fails",
        p: [""],
        list: [
          "Springs at end of cycle life — the most common lockout cause.",
          "Operators undersized for the traffic, burning out in a year or two.",
          "Photo eyes knocked by vehicles, leaving the door stuck open (security) or refusing to close.",
          "Vehicle impact to sections and track.",
          "Access controls — transmitters, keypads, card readers — out of sync with the operator.",
        ],
      },
      {
        h: "Planning service",
        p: ["A quarterly maintenance program with documentation per door; scheduled spring replacement; a spare-transmitter and access-control process; and a clear emergency contact for the manager. Budget the operator as a capital item with a known life."],
      },
      {
        h: "Working with EZ Garage Doors",
        p: ["We scope shared doors by phone — door type, size, operator, traffic — and quote a maintenance program or repair in writing to the association or manager. Documentation for vendor onboarding is available on request; we serve Boston, the inner suburbs, and every municipality in the state."],
      },
    ],
    related: [
      { label: "Commercial Door Maintenance", href: "/commercial-garage-door-maintenance/" },
      { label: "Suffolk County", href: "/service-areas/suffolk-county/" },
      { label: "Commercial vs. Residential Doors", href: "/guides/commercial-vs-residential-garage-doors/" },
    ],
  },
];
