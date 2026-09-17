import type { Guide } from "./types";

const U = "2026-09-17";

export const COST_GUIDES: Guide[] = [
  {
    slug: "how-garage-door-repair-pricing-works",
    title: "How Garage Door Repair Pricing Works (and Why We Put It in Writing First)",
    description: "The components of a repair quote — diagnosis, parts, labor, and what's found on site — and the written-quote policy that keeps the number honest.",
    category: "cost",
    updated: U,
    intro: "Garage door repair has a reputation problem: a low number on the phone, a different one at the door. Here's how a legitimate repair price is built, so you can tell a real quote from a hook.",
    sections: [
      {
        h: "What a repair quote is made of",
        p: [""],
        list: [
          "The part that failed — spring, cable, roller set, hinge, sensor, gear kit, opener — and its grade (standard vs. higher-cycle springs, nylon vs. steel rollers).",
          "The labor to replace it, including the safe unwinding and rewinding of springs where involved.",
          "What the diagnosis found alongside it — a spring job usually finds a frayed cable; a roller job often finds a cracked hinge. These are quoted, not sprung.",
          "Rebalancing the door and resetting the opener, which should be included in any repair that touches springs or cables.",
        ],
      },
      {
        h: "What changes the price",
        p: ["Door weight and size (heavier doors need bigger parts), the spring system (torsion, extension, enclosed), how many parts share the failure, and access — a low-headroom garage or a door blocked by a car takes longer."],
      },
      {
        h: "Why no price list",
        p: ["Because the number depends on the door in front of the technician. A published \"spring replacement from $X\" is a teaser that describes the cheapest possible door and gets adjusted for yours at the door. EZ Garage Doors doesn't publish prices for that reason; we publish the policy instead: the technician diagnoses, writes the full price down, and you approve it before any work starts. The quote you approve is the price you pay."],
      },
      {
        h: "How to protect yourself with any company",
        p: ["Ask for the price in writing before work begins. Ask what's included. Ask whether both springs are in the number. A company that won't put it in writing is telling you something."],
      },
    ],
    related: [
      { label: "Garage Door Repair", href: "/garage-door-repair/" },
      { label: "Spring Replacement Cost Factors", href: "/guides/garage-door-spring-replacement-cost-factors/" },
      { label: "How to Compare Quotes", href: "/guides/how-to-compare-garage-door-quotes/" },
    ],
  },
  {
    slug: "garage-door-opener-cost-factors",
    title: "What Sets the Price of a New Garage Door Opener",
    description: "Drive type, motor rating, features like Wi-Fi and battery backup, installation, and the door work an opener install sometimes needs — explained without teaser numbers.",
    category: "cost",
    updated: U,
    intro: "Opener pricing has two halves: the unit and the installation. The unit's price is set by drive, power, and features; the installation's by what the door needs to be ready for it.",
    sections: [
      {
        h: "The unit",
        p: [""],
        list: [
          "Drive type — chain is the lowest tier, belt the mid, wall-mount the top.",
          "Motor rating — matched to the door's weight; heavier doors need more.",
          "Features — Wi-Fi/app control, battery backup, camera, lighting, DC motor with soft start and stop.",
          "Accessories — extra remotes, keypad, secondary wall console.",
        ],
      },
      {
        h: "The installation",
        p: [""],
        list: [
          "Removing the old opener.",
          "Mounting rail, header bracket, and hangers to framing.",
          "Wiring sensors and the wall console.",
          "Programming remotes, keypad, and the app.",
          "Setting travel and force limits and testing the auto-reverse.",
        ],
      },
      {
        h: "Door work that sometimes comes with it",
        p: ["An opener should only be installed on a balanced door. If the springs are weak or a roller set is shot, that gets quoted alongside the opener rather than left to burn out the new unit. It's the one place an honest opener quote can be higher than a dishonest one."],
      },
      {
        h: "The written estimate",
        p: ["Unit model, accessories, installation, and any door work as separate lines, in writing, before the unit is ordered. That's how EZ Garage Doors quotes every opener."],
      },
    ],
    related: [
      { label: "Opener Installation", href: "/garage-door-opener-installation/" },
      { label: "Belt vs. Chain vs. Wall-Mount", href: "/guides/belt-drive-vs-chain-drive-garage-door-opener/" },
      { label: "Opener Repair or Replace", href: "/guides/garage-door-opener-repair-or-replace/" },
    ],
  },
  {
    slug: "garage-door-replacement-cost-factors-explained",
    title: "Garage Door Replacement: The Seven Things That Set the Price",
    description: "Size, insulation, windows, design, hardware, removal, and opener compatibility — a deeper look at each factor and how it moves the number.",
    category: "cost",
    updated: U,
    intro: "Our cost page lists the seven factors. This guide explains each one in enough depth to predict roughly where a given door lands — and why two doors that look alike from the street can be priced very differently.",
    sections: [
      {
        h: "1. Size",
        p: ["Width is the biggest lever: a double door is roughly twice the material of a single, plus heavier hardware. Height adds sections. Non-standard sizes are built to order."],
      },
      {
        h: "2. Insulation",
        p: ["Single-layer is the floor. Vinyl-backed adds a modest amount. Full sandwich panels — the tier that makes sense for attached garages in Massachusetts — add the most, and within that tier, polyurethane cores and higher R-values cost more than polystyrene."],
      },
      {
        h: "3. Windows",
        p: ["Each window section costs more than a solid one; insulated glass, obscure glass, and decorative inserts each step up."],
      },
      {
        h: "4. Design and finish",
        p: ["Standard raised-panel in a stock color is the baseline. Carriage-house detailing, flush modern faces, wood-look finishes, composite overlays, and custom colors move up from there."],
      },
      {
        h: "5. Hardware",
        p: ["Springs sized to the door (higher-cycle optional), nylon rollers, new tracks where needed, seals, and decorative handles and hinges on carriage styles. Low-headroom or high-lift track is a separate line."],
      },
      {
        h: "6. Removal and disposal",
        p: ["Taking out and disposing of the old door, tracks, and springs. Some quotes leave it off to look cheaper; ours includes it."],
      },
      {
        h: "7. Opener",
        p: ["Reused with adjustment, or replaced. A heavier new door on an undersized opener is a replacement."],
      },
      {
        h: "The honest summary",
        p: ["The cheapest legitimate door is a stock-size single-layer raised-panel in white with no windows, reusing a healthy opener. Every step toward insulated, styled, windowed, or custom moves the number. The estimate shows each step so you can choose where to spend."],
      },
    ],
    related: [
      { label: "What a New Door Costs", href: "/garage-door-replacement-cost/" },
      { label: "Insulated vs. Non-Insulated", href: "/guides/insulated-vs-non-insulated-garage-door/" },
      { label: "How to Compare Quotes", href: "/guides/how-to-compare-garage-door-quotes/" },
    ],
  },
  {
    slug: "is-it-cheaper-to-repair-or-replace-a-garage-door",
    title: "Is It Cheaper to Repair or Replace a Garage Door? A Decision Framework",
    description: "The rule of thumb, the exceptions, and the four questions that decide between another repair and a new door.",
    category: "cost",
    updated: U,
    intro: "Repair is almost always cheaper today. The question is whether it's cheaper over the next five years. Here's how to think about it without a sales pitch.",
    sections: [
      {
        h: "The four questions",
        p: [""],
        list: [
          "What failed? A spring, cable, roller, or sensor on a healthy door is a repair. Multiple rusted sections, a folded panel, or a discontinued model tips toward replacement.",
          "What's the door's condition otherwise? Straight sections, solid bottom, sound hardware — repair. Rust at several edges, bowed panels, repairs every year — replace.",
          "How old is the door and what is it? A 25-year-old single-layer door on an attached garage is a candidate for replacement on comfort alone. A 10-year-old insulated door with one broken spring is a repair.",
          "What would you want anyway? If you were already thinking about insulation, a quieter door, or a new look, a big repair on the old door is money you'd rather put toward the new one.",
        ],
      },
      {
        h: "The rule of thumb",
        p: ["When a single repair approaches a third to half the cost of a replacement on a door that's showing its age, replacement usually wins over five years. When a repair is a small fraction, repair wins — even on an older door."],
      },
      {
        h: "The one thing that isn't a judgment call",
        p: ["A broken spring on an otherwise healthy door is a repair. Anyone using a spring failure to sell you a new door is selling, not diagnosing."],
      },
      {
        h: "How we handle it",
        p: ["When it's close, EZ Garage Doors puts both numbers in writing and tells you what each buys. You decide; nothing happens until you approve one."],
      },
    ],
    related: [
      { label: "Garage Door Replacement", href: "/garage-door-replacement/" },
      { label: "Signs You Need a New Door", href: "/guides/signs-you-need-a-new-garage-door/" },
      { label: "Garage Door Repair", href: "/garage-door-repair/" },
    ],
  },
  {
    slug: "garage-door-service-call-what-to-expect",
    title: "What to Expect on a Garage Door Service Call",
    description: "From the phone call to the written quote to the finished repair — the sequence, what the technician needs from you, and what you should get from them.",
    category: "cost",
    updated: U,
    intro: "If you've never had a garage door serviced, here's the whole sequence as it works at EZ Garage Doors — and the parts that should be true of any company you call.",
    sections: [
      {
        h: "The call",
        p: ["You describe what the door is doing — a bang, a hum, a crooked lift, a door that won't close — and your town. A photo of the door, spring, or opener label helps the van arrive with the right parts. You get an honest answer about timing; not a promise we can't keep."],
      },
      {
        h: "The visit: diagnosis",
        p: ["The technician checks the whole system — springs, cables, drums, rollers, hinges, tracks, opener, sensors — not just the loud symptom, because the loud symptom is often the result of something else. You see what failed and why, in plain language."],
      },
      {
        h: "The written quote",
        p: ["The full price — parts, labor, total — on paper before any work. If you say no, the door stays exactly as found and you owe only whatever the service-visit policy states, which you were told on the phone."],
      },
      {
        h: "The repair",
        p: ["Work starts only after you approve. Vans are stocked for the common failures, so most repairs finish in one trip. The door is tested through full travel, the opener's safety reverse is checked, and the workspace is left as found."],
      },
      {
        h: "What you should get from any company",
        p: ["A written price before work. A clear explanation. A door that's tested before they leave. No pressure to replace what can be repaired. If any of those are missing, it's fair to pause."],
      },
    ],
    related: [
      { label: "Garage Door Repair", href: "/garage-door-repair/" },
      { label: "How Repair Pricing Works", href: "/guides/how-garage-door-repair-pricing-works/" },
      { label: "Contact EZ Garage Doors", href: "/contact/" },
    ],
  },
  {
    slug: "garage-door-tune-up-worth-it",
    title: "Is a Garage Door Tune-Up Worth the Money?",
    description: "What a tune-up prevents, the failures it catches early, and the honest cases where it isn't necessary.",
    category: "cost",
    updated: U,
    intro: "A tune-up costs something; a spring that snaps on a January morning with the car inside costs more — in money and in the morning. Here's the honest math, including when to skip it.",
    sections: [
      {
        h: "What it prevents",
        p: [""],
        list: [
          "A spring failure at the worst time — the balance test predicts it months ahead.",
          "An off-track door from a roller or hinge that was visibly failing.",
          "An opener burned out dragging an unbalanced door.",
          "A torn bottom seal and a garage that freezes shut.",
          "A door with a disabled safety reverse nobody knew about.",
        ],
      },
      {
        h: "When it's clearly worth it",
        p: ["A door more than five years old that's never been serviced; a heavy insulated door; a household that uses the garage as its front door; a seasonal home before opening weekend; any door that's started making a new noise or feeling heavier."],
      },
      {
        h: "When you can skip it",
        p: ["A door that's a year or two old, lightly used, lubricated twice a year by the homeowner, and passing the balance and reversal tests. Do the homeowner checks and revisit next year."],
      },
      {
        h: "What it should cost you in pressure",
        p: ["Nothing. A tune-up ends with a written summary and quoted recommendations, not a decision you have to make on the spot. If a company's tune-up always ends in a big repair, that's a sales call with a different name."],
      },
    ],
    related: [
      { label: "Tune-Up & Inspection", href: "/garage-door-tune-up/" },
      { label: "What a Tune-Up Includes", href: "/guides/what-a-garage-door-tune-up-includes/" },
      { label: "How Often to Service", href: "/guides/how-often-should-a-garage-door-be-serviced/" },
    ],
  },
  {
    slug: "does-a-new-garage-door-add-home-value",
    title: "Does a New Garage Door Add Value to a Massachusetts Home?",
    description: "Why garage door replacement consistently ranks among the exterior projects with the strongest resale return, and how to choose a door with resale in mind.",
    category: "cost",
    updated: U,
    intro: "National remodeling-cost surveys have for years placed garage door replacement at or near the top of exterior projects for the share of cost recovered at resale. The reasons apply directly to Massachusetts housing.",
    sections: [
      {
        h: "Why it returns so well",
        p: [""],
        list: [
          "It's a huge share of the street-facing facade — the first thing a buyer or a listing photo shows.",
          "It's a moderate cost relative to a kitchen or roof, so the ratio works.",
          "It signals maintenance: a new door reads as a cared-for house.",
          "An insulated door is a comfort upgrade buyers notice in an attached garage.",
        ],
      },
      {
        h: "Choosing with resale in mind",
        p: ["Insulated construction; a style that fits the house's architecture (carriage house on a colonial, raised-panel on a ranch, flush modern on a contemporary); a color that matches the trim or a considered dark contrast; windows for daylight. Avoid the very cheapest single-layer door on an attached garage — buyers' inspectors notice."],
      },
      {
        h: "Timing",
        p: ["Before listing photos, obviously — but also years before, since you get the comfort and quiet in the meantime. Lead times for custom doors are worth building into a listing schedule."],
      },
      {
        h: "The number",
        p: ["We don't quote resale figures — surveys vary by year and region. We do quote the door, itemized and in writing, so you can weigh it against your own listing plan."],
      },
    ],
    related: [
      { label: "New Door Installation", href: "/garage-door-installation/" },
      { label: "Garage Door Colors", href: "/guides/garage-door-colors-and-curb-appeal/" },
      { label: "What a New Door Costs", href: "/garage-door-replacement-cost/" },
    ],
  },
  {
    slug: "why-we-dont-publish-garage-door-prices",
    title: "Why EZ Garage Doors Doesn't Publish Prices Online",
    description: "The honest reason a price list would mislead you, what we publish instead, and how to get your actual number.",
    category: "cost",
    updated: U,
    intro: "It would be easy to put \"spring replacement from $X\" on this site. We don't, and the reason is the same one behind everything else we do: the number would be a hook, not a price.",
    sections: [
      {
        h: "What a published price describes",
        p: ["The cheapest possible version of the job: the lightest door, one standard spring, no cable, no drum, no rebalance, no opener reset. Your door is almost never that door. So the published number becomes the number that gets adjusted at your house — which is the bait-and-switch the industry is known for."],
      },
      {
        h: "What we publish instead",
        p: ["The factors — what moves a spring, opener, or new-door price and why — and the policy: diagnosis, then the full price in writing, then your approval, then the work. The quote you approve is the price you pay. Every page on this site says it because it's the one promise we can make before we've seen your door."],
      },
      {
        h: "Getting your actual number",
        p: ["Call or send a photo with your town. For repairs, the technician quotes at the door before starting. For new doors and openers, the estimate is measured, itemized, and written — free, and yours to compare against anyone else's written estimate."],
      },
      {
        h: "If you want a ballpark on the phone",
        p: ["We'll give you the honest range for what you're describing and tell you what would move it — and we'll say plainly that the written quote at the door is the real number. Anyone who gives you a firm price without seeing the door is guessing, or hooking."],
      },
    ],
    related: [
      { label: "How Repair Pricing Works", href: "/guides/how-garage-door-repair-pricing-works/" },
      { label: "How to Compare Quotes", href: "/guides/how-to-compare-garage-door-quotes/" },
      { label: "Contact EZ Garage Doors", href: "/contact/" },
    ],
  },
];
