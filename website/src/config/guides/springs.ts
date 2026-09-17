import type { Guide } from "./types";

const U = "2026-09-17";

export const SPRING_GUIDES: Guide[] = [
  {
    slug: "how-to-tell-if-your-garage-door-spring-is-broken",
    title: "How to Tell If Your Garage Door Spring Is Broken",
    description: "The six signs of a broken garage door spring — the bang, the heavy door, the gap in the coil — and what to do (and not do) next.",
    category: "springs",
    updated: U,
    intro: "A garage door spring almost never fails quietly. Most homeowners hear it — a bang from the garage like something heavy dropped — and then discover the door won't lift. Here's how to confirm it's the spring, and why you should stop using the door the moment you suspect it.",
    sections: [
      {
        h: "The six signs",
        p: ["Any one of these points strongly at a spring; two or more makes it nearly certain."],
        list: [
          "A loud bang from the garage, often when nobody was using the door — the sound of a torsion spring releasing its tension.",
          "The door feels extremely heavy, or the opener lifts it a few inches and gives up.",
          "A visible gap in the spring coil above the door. A healthy torsion spring is one continuous coil; a broken one shows a clean two-inch break.",
          "The lift cables hang loose or have come off the drums — the spring was holding them tight.",
          "The door closes crooked, or slams the last foot instead of settling.",
          "On a door with TorqueMaster (enclosed) springs, no visible break — just a door that suddenly got heavy.",
        ],
      },
      {
        h: "Why the door gets heavy",
        p: [
          "A typical double garage door weighs 150–300 pounds, and an insulated one more. The springs are counterbalances: they store enough energy that the door effectively weighs a few pounds at the hand. When a spring breaks, the whole weight comes back at once. The opener was never designed to lift that — it's designed to guide a balanced door — so it strains, strips its gear, or simply stops.",
        ],
      },
      {
        h: "What to do right now",
        p: ["Three things, in this order."],
        list: [
          "Stop pressing the opener button. Every attempt stresses the opener's gear and can pull the door off track.",
          "Don't lift the door by hand unless you have to. A broken-spring door can drop on the way down and cause serious injury. If a car is trapped and you must lift it, use two people and never let go of it mid-travel.",
          "Keep people, pets, and cars clear of the door until it's serviced.",
        ],
      },
      {
        h: "What the repair involves",
        p: [
          "The technician confirms the spring type (torsion or extension), measures the old spring to match wire size, inside diameter, and length, and replaces it — both springs on a two-spring door, since they share the same cycle life. The door is then balanced, the cables and drums are checked, and the opener's force settings are re-tested. With EZ Garage Doors the price is in writing before any of that starts.",
        ],
      },
    ],
    faqs: [
      { question: "Can I still open the door manually with a broken spring?", answer: "Physically, sometimes — but it's the door's full weight and it can fall. Avoid it unless a car must come out, and then only with help." },
      { question: "Is it always both springs?", answer: "On a two-spring door, the technician will recommend replacing both: the surviving spring has the same cycle count and will fail soon, usually within months." },
    ],
    related: [
      { label: "Broken Spring Repair", href: "/broken-spring-repair/" },
      { label: "Door Won't Open", href: "/garage-door-wont-open/" },
      { label: "Torsion vs. Extension Springs", href: "/guides/torsion-vs-extension-garage-door-springs/" },
    ],
  },
  {
    slug: "torsion-vs-extension-garage-door-springs",
    title: "Torsion vs. Extension Garage Door Springs: What's the Difference?",
    description: "How torsion and extension springs work, how to tell which your door has, and why torsion systems have become the standard.",
    category: "springs",
    updated: U,
    intro: "Every sectional garage door is counterbalanced by springs, and there are two ways to do it. Knowing which system your door has tells you what a repair involves, what the safety risks are, and whether an upgrade is worth considering.",
    sections: [
      {
        h: "Torsion springs",
        p: [
          "Torsion springs are mounted on a steel shaft above the door opening. As the door closes, cables wound around drums at each end of the shaft twist the springs tighter; as it opens, the springs unwind and lift. Most doors use one or two, sized to the door's weight. They fail with the classic bang and a visible gap in the coil.",
          "Torsion systems lift the door evenly from both sides, wear more predictably, and keep the spring energy contained on the shaft. That's why nearly every new door uses them.",
        ],
      },
      {
        h: "Extension springs",
        p: [
          "Extension springs run parallel to the horizontal tracks, one on each side, and stretch as the door closes. They're common on older and lighter doors and on garages with very low headroom. Each spring should have a safety cable threaded through it so a broken spring can't whip across the garage — a real hazard on doors that lack them.",
          "Extension systems are more prone to uneven lifting (one side wears faster) and show wear as gaps between the coils or a door that pulls to one side.",
        ],
      },
      {
        h: "Which one do I have?",
        p: ["Look above the door with it closed. A horizontal shaft with a tight coil (or two) mounted on it means torsion. Long springs running alongside the tracks toward the back of the garage mean extension. A round tube with no visible spring may be an enclosed TorqueMaster system — a torsion variant with the springs inside the tube."],
      },
      {
        h: "Should I convert extension to torsion?",
        p: ["Often yes, at the point where the extension springs need replacing anyway. Conversion needs enough headroom above the door for the shaft and brackets — most garages have it, some low-headroom garages don't. A technician can tell you in a minute and put both options in a written quote."],
      },
    ],
    faqs: [
      { question: "Are torsion springs safer?", answer: "When installed and serviced by a technician, yes — the energy stays on the shaft. Extension springs without safety cables are the least safe configuration on any door." },
      { question: "Do both types wear out at the same rate?", answer: "Both are rated in cycles. Standard springs are commonly rated around 10,000 cycles; higher-cycle springs are available for busy doors." },
    ],
    related: [
      { label: "Broken Spring Repair", href: "/broken-spring-repair/" },
      { label: "Spring Cycle Life", href: "/guides/garage-door-spring-cycle-life/" },
      { label: "Safety Cables on Extension Springs", href: "/guides/extension-spring-safety-cables/" },
    ],
  },
  {
    slug: "garage-door-spring-cycle-life",
    title: "Garage Door Spring Cycle Life: Why Springs Are Rated in Cycles, Not Years",
    description: "What a 10,000-cycle rating actually means for a Massachusetts household, and when a higher-cycle spring is worth it.",
    category: "springs",
    updated: U,
    intro: "Ask how long a garage door spring lasts and the honest answer is \"it depends how often you use the door.\" Springs are rated in cycles — one cycle is one open and one close — and the rating, not the calendar, decides when they fail.",
    sections: [
      {
        h: "What the numbers mean",
        p: [
          "A standard residential torsion spring is commonly rated around 10,000 cycles. A household that uses the garage as the main entrance — two cars in and out twice a day — can run six to eight cycles a day, which puts a standard spring near the end of its life in four to five years. A door used twice a day lasts three times as long on the same spring.",
          "Higher-cycle springs (often rated 20,000–30,000+ cycles) use a larger wire size and longer length to carry the same load with less stress per cycle. They cost more up front and last proportionally longer.",
        ],
      },
      {
        h: "What shortens spring life",
        p: ["Besides cycle count, a few things wear springs early."],
        list: [
          "A spring that's the wrong size for the door's weight — common after a door replacement where the old springs were reused.",
          "Rust. Salt air on the coast and de-icer in the garage pit the wire; pitted wire fails sooner. Lubrication slows it.",
          "Deep cold. Steel is less forgiving in sub-zero temperatures, so a spring near its limit tends to snap on the coldest morning.",
          "An unbalanced door — if one spring on a pair is weaker, the other works harder.",
        ],
      },
      {
        h: "When to choose higher-cycle springs",
        p: ["If the garage is your front door, if you have a home business with traffic through the garage, or if you simply don't want to think about springs for a long time, higher-cycle springs are a sensible upgrade at replacement time. Ask for both options in the written quote and compare."],
      },
      {
        h: "The balance test as an early warning",
        p: ["With the opener released (pull the red cord with the door closed), lift the door to waist height and let go. A balanced door stays put. A door that drifts down has springs losing tension — the warning that a snap is coming. It's the first thing a tune-up checks."],
      },
    ],
    related: [
      { label: "Broken Spring Repair", href: "/broken-spring-repair/" },
      { label: "Tune-Up & Inspection", href: "/garage-door-tune-up/" },
      { label: "The Balance Test", href: "/guides/garage-door-balance-test/" },
    ],
  },
  {
    slug: "why-you-should-replace-both-garage-door-springs",
    title: "Why Replace Both Garage Door Springs When Only One Broke",
    description: "The cycle-life logic behind replacing torsion springs in pairs, and when a single-spring replacement actually makes sense.",
    category: "springs",
    updated: U,
    intro: "It's the most common question at the door: one spring snapped, the other looks fine — why replace both? Because \"looks fine\" and \"is fine\" are different things when the part in question is rated by cycles.",
    sections: [
      {
        h: "Two springs, one cycle count",
        p: ["On a two-spring door, both springs were installed on the same day and have opened and closed the door the same number of times. When one reaches the end of its rated life and breaks, the other is at the same point. It may hold for a few weeks or a few months, but it's a countdown — and its failure means a second service visit, a second trip charge, and another day with a door that won't lift."],
      },
      {
        h: "Balance",
        p: ["Springs lose a little tension over their life. A brand-new spring paired with a worn one lifts unevenly: the new side carries more load, the door cocks slightly in the track, and rollers, hinges, and the opener all see the strain. Matched springs keep the door lifting level."],
      },
      {
        h: "When one spring is enough",
        p: ["A single-spring door obviously gets one spring. And if one spring on a pair is recent — replaced within the last year after an unrelated failure — replacing only the broken one is reasonable. A good technician will tell you the age and condition of the survivor rather than assume."],
      },
      {
        h: "The written-quote check",
        p: ["Whatever is recommended, it should be on paper before work starts: which springs, what size, and the total. That's the standard EZ Garage Doors works to on every spring call."],
      },
    ],
    related: [
      { label: "Broken Spring Repair", href: "/broken-spring-repair/" },
      { label: "Spring Cycle Life", href: "/guides/garage-door-spring-cycle-life/" },
      { label: "What a Spring Replacement Costs (Factors)", href: "/guides/garage-door-spring-replacement-cost-factors/" },
    ],
  },
  {
    slug: "extension-spring-safety-cables",
    title: "Safety Cables on Extension Springs: The Small Part That Prevents a Big Injury",
    description: "What extension-spring safety cables do, how to check whether your door has them, and why every extension-spring door needs them.",
    category: "springs",
    updated: U,
    intro: "If your garage door uses extension springs — the long springs that run beside the horizontal tracks — there is one inexpensive part that matters more than any other: the safety cable that runs through the middle of each spring.",
    sections: [
      {
        h: "What happens when an extension spring breaks",
        p: ["An extension spring under load is a stretched steel coil storing a lot of energy. When it snaps, the two halves recoil violently. Without a restraint, a broken spring — or a piece of it — can fly across the garage, through drywall, into a car, or into a person. Safety cables are simply steel cables threaded through the spring and anchored at both ends, so a broken spring stays on the cable instead of leaving."],
      },
      {
        h: "How to check your door",
        p: ["With the door closed, look along the horizontal track on each side. Each extension spring should have a thin cable running through its center from the back hanger to the front track bracket. If you see bare springs with nothing through them, the door is missing its safety cables."],
      },
      {
        h: "Adding them",
        p: ["Safety cables are a quick addition for a technician, and any spring service on an extension-spring door should include them if they're missing. EZ Garage Doors adds them in the same visit as a spring replacement."],
      },
      {
        h: "Or convert to torsion",
        p: ["If the extension springs are due for replacement anyway and the garage has headroom, converting to a torsion system removes the flying-spring hazard entirely and lifts the door more evenly. Ask for both options in writing."],
      },
    ],
    related: [
      { label: "Torsion vs. Extension Springs", href: "/guides/torsion-vs-extension-garage-door-springs/" },
      { label: "Broken Spring Repair", href: "/broken-spring-repair/" },
      { label: "Garage Door Safety Basics", href: "/guides/garage-door-safety-basics/" },
    ],
  },
  {
    slug: "garage-door-spring-replacement-cost-factors",
    title: "What Sets the Price of a Garage Door Spring Replacement",
    description: "The factors behind a spring replacement quote — spring type, size, pairs, cycle rating, and what else the visit finds — explained without teaser numbers.",
    category: "cost",
    updated: U,
    intro: "Spring replacement is the most-quoted garage door repair and the one most abused by bait pricing: a low number by phone, then \"surprises\" at the door. Here's what actually determines the price, so you can judge a quote before you approve it.",
    sections: [
      {
        h: "The factors",
        p: ["A legitimate spring quote is built from these."],
        list: [
          "Spring system — torsion, extension, or enclosed TorqueMaster. They're different parts and different labor.",
          "Spring size — wire gauge, inside diameter, and length are matched to the door's weight. Heavy insulated or wood doors need larger springs.",
          "One or two — two-spring doors get both replaced (same cycle life); single-spring doors get one.",
          "Cycle rating — standard vs. higher-cycle springs. Higher-cycle costs more up front and lasts proportionally longer.",
          "What else failed — a snapped spring often takes a cable with it, and worn drums or end bearings are found while the system is apart.",
          "Access — a very low-headroom garage or a door blocked by a car can add time.",
        ],
      },
      {
        h: "What should be included",
        p: ["A complete spring replacement includes the springs themselves, unwinding and rewinding, rebalancing the door, checking cables and drums, and resetting the opener's force and travel limits. If a quote is suspiciously low, ask which of those it leaves out."],
      },
      {
        h: "Why we don't publish a price",
        p: ["Because the number depends on the door in front of the technician. Publishing one teaser figure and raising it at the door is exactly what we refuse to do. EZ Garage Doors quotes the actual spring system your door has, in writing, before any work — and that number is the price."],
      },
      {
        h: "How to compare quotes",
        p: ["Ask each company the same three questions: Is that for both springs? What cycle rating? Does it include rebalancing and the opener reset? Written answers make the comparison honest."],
      },
    ],
    related: [
      { label: "Broken Spring Repair", href: "/broken-spring-repair/" },
      { label: "How Garage Door Repair Pricing Works", href: "/guides/how-garage-door-repair-pricing-works/" },
      { label: "Spring Cycle Life", href: "/guides/garage-door-spring-cycle-life/" },
    ],
  },
  {
    slug: "garage-door-springs-in-winter",
    title: "Why Garage Door Springs Break in Winter — and How to Get Ahead of It",
    description: "Cold steel, thick lubricant, and frozen doors: why January is spring-failure season in Massachusetts, and the fall check that prevents most of it.",
    category: "massachusetts",
    updated: U,
    intro: "Ask any Massachusetts garage door technician when the phone rings most and the answer is the first sub-zero week of the year. Springs don't break because of the cold alone — they break because the cold finds every spring that was already near the end.",
    sections: [
      {
        h: "What cold does to a spring",
        p: ["Steel gets slightly less ductile as temperature drops, so a spring that's been flexing a hairline crack for weeks reaches its limit on the coldest morning. At the same time, the lubricant on the spring, rollers, and hinges thickens, the door resists more, and the springs work harder on every cycle. A spring at 9,500 of its 10,000 rated cycles in October is a January failure waiting to happen."],
      },
      {
        h: "The frozen-door trap",
        p: ["A bottom seal frozen to the slab is a separate winter problem that causes spring and opener failures: the opener pulls against a door that won't release, and either the opener strips a gear or the sudden release slams the system. Never run the opener against a door that's iced down — free the seal first."],
      },
      {
        h: "The fall check that prevents it",
        p: ["A tune-up in October or November catches most winter failures before they happen."],
        list: [
          "The balance test — a door that drifts down when released has springs losing tension.",
          "Visual inspection for rust, gaps, and stretched coils.",
          "Lubrication with a cold-rated silicone or lithium product so the door runs freely in January.",
          "Bottom seal check so the door doesn't freeze to the floor.",
          "Opener force settings verified so the opener doesn't strain against a stiff door.",
        ],
      },
      {
        h: "If it breaks anyway",
        p: ["Stop using the door, keep it closed, and call. Spring replacement is a single-visit repair for most doors, and EZ Garage Doors quotes it in writing before work — in January the same as in June."],
      },
    ],
    related: [
      { label: "Tune-Up & Inspection", href: "/garage-door-tune-up/" },
      { label: "Broken Spring Repair", href: "/broken-spring-repair/" },
      { label: "Garage Door Frozen Shut", href: "/guides/garage-door-frozen-shut/" },
    ],
  },
  {
    slug: "torquemaster-springs-explained",
    title: "TorqueMaster Springs Explained: The Hidden Spring System on Wayne Dalton Doors",
    description: "How enclosed TorqueMaster springs work, why a failure isn't visible, and the repair or conversion options when one breaks.",
    category: "springs",
    updated: U,
    intro: "Some garage doors — many Wayne Dalton models in particular — have no visible spring at all. Above the door is a plain steel tube. The springs are inside it. That's the TorqueMaster system, and it changes how a failure looks and how it's repaired.",
    sections: [
      {
        h: "How it works",
        p: ["Instead of springs wound around the outside of a shaft, TorqueMaster springs sit inside a hollow tube and are wound with a drill or wrench at the end plates. The cable drums are at the ends of the tube. Functionally it's a torsion system; visually it's a clean tube with no exposed coils."],
      },
      {
        h: "How a failure shows up",
        p: ["There's no gap to see. The tell is a door that suddenly became very heavy, an opener that strains or stops, or one side that lifts before the other. Sometimes there's a muffled bang from inside the tube. If a TorqueMaster door goes heavy, treat it as a broken spring: stop using it and keep clear."],
      },
      {
        h: "Repair options",
        p: ["Two paths, both quoted in writing by EZ Garage Doors."],
        list: [
          "Replace the TorqueMaster springs with the correct factory-type springs — keeps the system as designed.",
          "Convert to a standard exposed torsion system — common parts, easier future service, and the option of higher-cycle springs. Needs a technician who does the conversion properly with the right shaft, drums, and bearings.",
        ],
      },
      {
        h: "Which to choose",
        p: ["If the door is in good condition and you want the original look, replacing in kind is fine. If you'd rather have a system any technician can service with stock parts, conversion is the long-term answer. Both are single-visit jobs on most doors."],
      },
    ],
    related: [
      { label: "Wayne Dalton Doors", href: "/brands/wayne-dalton/" },
      { label: "Broken Spring Repair", href: "/broken-spring-repair/" },
      { label: "Torsion vs. Extension Springs", href: "/guides/torsion-vs-extension-garage-door-springs/" },
    ],
  },
  {
    slug: "garage-door-balance-test",
    title: "The Garage Door Balance Test: A 60-Second Check That Predicts Spring Failure",
    description: "How to safely test your garage door's balance, what the result means, and when the test itself is unsafe to do.",
    category: "maintenance",
    updated: U,
    intro: "The balance test is the single most useful thing a homeowner can do to check a garage door. It takes a minute, needs no tools, and tells you whether the springs are doing their job — before they fail.",
    sections: [
      {
        h: "When not to do it",
        p: ["Skip the test and call a technician if you've heard a bang, the door already feels heavy, a cable is loose, or the door is off track. A broken-spring door can drop during the test."],
      },
      {
        h: "How to do it",
        p: ["With the door fully closed:"],
        list: [
          "Pull the red emergency release cord to disconnect the opener.",
          "Lift the door by hand to about waist height. It should lift with light effort — if it's heavy, stop; the springs are weak or broken.",
          "Let go carefully, keeping your hands ready. A balanced door stays where you left it, or drifts an inch or two at most.",
          "Try again at chest height. Same result expected.",
          "Close the door and reconnect the opener by pulling the cord toward the door (or running the opener until the trolley re-engages).",
        ],
      },
      {
        h: "What the result means",
        p: ["A door that stays put is balanced. A door that drifts down has springs losing tension — the early warning before a snap, and a load the opener shouldn't be carrying. A door that rises on its own is over-tensioned, which wears cables and drums. Either way, spring adjustment or replacement is the fix, and it's a technician job: winding torsion springs is the most dangerous task on a garage door."],
      },
      {
        h: "How often",
        p: ["Twice a year, and always before winter. It's also the first thing an EZ Garage Doors tune-up checks."],
      },
    ],
    related: [
      { label: "Tune-Up & Inspection", href: "/garage-door-tune-up/" },
      { label: "Spring Cycle Life", href: "/guides/garage-door-spring-cycle-life/" },
      { label: "Broken Spring Repair", href: "/broken-spring-repair/" },
    ],
  },
  {
    slug: "garage-door-opens-a-few-inches-and-stops",
    title: "Garage Door Opens a Few Inches and Stops? Here's Why",
    description: "The common causes of a door that starts to lift and quits — broken spring, opener force limit, obstruction, or a cable off its drum — and how to tell them apart.",
    category: "troubleshooting",
    updated: U,
    intro: "A door that lifts a few inches and stops is the opener telling you it met more resistance than it's set to overcome. Sometimes the resistance is a real obstruction. More often it's a door that got heavy.",
    sections: [
      {
        h: "Cause 1: a broken or weak spring",
        p: ["This is the most common. Without spring help the door weighs hundreds of pounds; the opener lifts until its force limit trips, then stops or reverses. Clue: you heard a bang recently, or the door feels heavy when you release the opener and lift by hand. Stop using the door and call."],
      },
      {
        h: "Cause 2: something in the track",
        p: ["A roller that's jumped out, a bent track section, or ice and debris at the bottom of the vertical track all stop the door at the same spot each time. Look along both tracks with a flashlight for anything that shouldn't be there — but don't reach into the track with the opener connected."],
      },
      {
        h: "Cause 3: a cable off the drum",
        p: ["If one cable has slipped or snapped, one side of the door lifts and the other doesn't; the door cocks in the track and binds. Clue: a loose or coiled cable, or the door visibly crooked. Don't run the opener again."],
      },
      {
        h: "Cause 4: opener force or travel settings",
        p: ["On a door that's balanced and moves freely by hand, an opener that still quits early may have its force limit set too low — often after a cold snap thickened the lubricant. Adjusting force is a small fix, but it should only be done on a door that's proven balanced; raising the force on a heavy door masks a spring problem and burns out the opener."],
      },
      {
        h: "The quick sort",
        p: ["Release the opener (door closed) and lift by hand. Heavy? Spring. Light but stops at one spot? Track or roller. Crooked? Cable. Light and smooth by hand? Opener settings. EZ Garage Doors runs this same test first and puts the actual repair in writing before starting."],
      },
    ],
    related: [
      { label: "Door Won't Open", href: "/garage-door-wont-open/" },
      { label: "Broken Spring Repair", href: "/broken-spring-repair/" },
      { label: "Cable Repair", href: "/garage-door-cable-repair/" },
    ],
  },
];
