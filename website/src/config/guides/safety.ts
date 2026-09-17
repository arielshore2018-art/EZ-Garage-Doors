import type { Guide } from "./types";

const U = "2026-09-17";

export const SAFETY_GUIDES: Guide[] = [
  {
    slug: "garage-door-safety-basics",
    title: "Garage Door Safety Basics: The Parts Under Tension and the Rules That Follow",
    description: "Why springs, cables, and bottom brackets are dangerous, the three situations to stop and call, and the safety habits every household should have.",
    category: "safety",
    updated: U,
    intro: "A garage door is a few hundred pounds of steel balanced by springs storing enough energy to lift it. Most of the time that's invisible. The safety rules exist for the moments it isn't.",
    sections: [
      {
        h: "The parts under tension",
        p: [""],
        list: [
          "Torsion springs — wound tight on the shaft above the door. Winding and unwinding them is the most dangerous task on a door.",
          "Extension springs — stretched beside the tracks. Without safety cables, a broken one can fly.",
          "Lift cables — under the full spring load. Never unhook, cut, or re-wrap them.",
          "Bottom brackets — the cables anchor here. Never remove the bolts; that's the bracket that lets go under tension.",
        ],
      },
      {
        h: "Three situations to stop and call",
        p: [""],
        list: [
          "You heard a bang and the door is heavy — broken spring.",
          "The door is crooked, hanging, or off its track.",
          "A cable is loose, coiled, or off the drum.",
        ],
      },
      {
        h: "Household habits",
        p: [""],
        list: [
          "Keep hands out of the section joints when the door moves — they pinch.",
          "Never walk or drive under a moving door; wait for it to stop.",
          "Keep the wall button out of small children's reach; remotes too.",
          "Test the auto-reverse twice a year.",
          "Don't bypass the safety sensors to make a door close.",
          "Know where the emergency release is and how to use it — with the door closed.",
        ],
      },
      {
        h: "What's fine to DIY",
        p: ["Lubrication, the balance test, sensor alignment, replacing remote batteries, cleaning tracks, and re-pairing remotes. Everything involving springs, cables, or bottom brackets is technician work."],
      },
    ],
    related: [
      { label: "The Auto-Reverse Test", href: "/guides/garage-door-auto-reverse-test/" },
      { label: "Broken Spring Repair", href: "/broken-spring-repair/" },
      { label: "Emergency Repair", href: "/emergency-garage-door-repair/" },
    ],
  },
  {
    slug: "why-you-shouldnt-replace-garage-door-springs-yourself",
    title: "Why Garage Door Spring Replacement Is Not a DIY Job",
    description: "What actually goes wrong when homeowners wind torsion springs, the tools and knowledge involved, and the honest case for calling a technician.",
    category: "safety",
    updated: U,
    intro: "Spring replacement videos make it look like a wrench-and-patience job. The people who end up in emergency rooms from garage doors are disproportionately people who watched those videos. Here's the sober version.",
    sections: [
      {
        h: "What the springs hold",
        p: ["A torsion spring on a double door is wound several full turns under load — enough stored energy to lift 200-plus pounds through seven feet of travel. Winding it requires two solid steel winding bars of the correct diameter, inserted fully into the winding cone, with the technician's body positioned out of the bar's arc. A screwdriver or an undersized bar slips out under load and the bar comes around with the spring's full force."],
      },
      {
        h: "The mistakes that hurt people",
        p: [""],
        list: [
          "Using the wrong bars, or bars not fully seated.",
          "Loosening the set screws before the spring is unwound.",
          "Unbolting the bottom bracket while the cable is under tension.",
          "Winding the wrong direction, or winding a spring that's the wrong size for the door.",
          "Working from a ladder that shifts, with the body in the bar's path.",
        ],
      },
      {
        h: "The knowledge part",
        p: ["Beyond the danger, springs have to be measured and matched: wire size, inside diameter, length, and wind direction, chosen for the door's actual weight. A spring that's close but wrong leaves the door unbalanced and wears out the opener. Higher-cycle options, pairing, and drum and cable inspection are part of the job."],
      },
      {
        h: "The honest case",
        p: ["A technician does it in a single visit with the right springs on the van, balances the door, resets the opener, and hands you a written price before starting. The DIY savings are real but small; the downside is not."],
      },
    ],
    related: [
      { label: "Broken Spring Repair", href: "/broken-spring-repair/" },
      { label: "Garage Door Safety Basics", href: "/guides/garage-door-safety-basics/" },
      { label: "Spring Replacement Cost Factors", href: "/guides/garage-door-spring-replacement-cost-factors/" },
    ],
  },
  {
    slug: "garage-door-child-and-pet-safety",
    title: "Garage Door Safety for Kids and Pets",
    description: "Sensor height, pinch points, the reversal test, remote access, and the habits that keep a moving garage door away from small hands and paws.",
    category: "safety",
    updated: U,
    intro: "The safety sensors and the auto-reverse were introduced because garage doors injured children. They work — when they're maintained. Here's what to check and what to teach.",
    sections: [
      {
        h: "The two protections",
        p: ["The sensor beam runs a few inches above the floor and reverses the door if anything crosses it — a crawling toddler, a dog. The auto-reverse in the opener reverses the door if it meets resistance anywhere in its travel. Both need testing: wave a broom through the beam while closing; lay a board on the floor and confirm the door reverses when it touches."],
      },
      {
        h: "Pinch points",
        p: ["The joints between sections close as the door goes up and open as it comes down. Fingers in a joint get crushed. Teach children never to touch a moving door, and never to \"ride\" it. Pinch-resistant section designs exist on many newer doors."],
      },
      {
        h: "Controls",
        p: ["Mount the wall console at least five feet up, out of reach. Keep remotes off the counter. Lock mode on the console disables remotes when needed."],
      },
      {
        h: "The moving-door rule",
        p: ["Nobody walks or runs under a door in motion. Wait for it to stop. Pets included — a dog darting under a closing door is a common story."],
      },
      {
        h: "If a protection isn't working",
        p: ["A door that won't reverse on the board, or won't reverse for the beam, should not be used until it's fixed. It's a quick technician visit."],
      },
    ],
    related: [
      { label: "The Auto-Reverse Test", href: "/guides/garage-door-auto-reverse-test/" },
      { label: "Safety Sensor Repair", href: "/garage-door-safety-sensor-repair/" },
      { label: "Garage Door Safety Basics", href: "/guides/garage-door-safety-basics/" },
    ],
  },
  {
    slug: "car-trapped-in-garage-what-to-do",
    title: "Car Trapped Behind a Garage Door That Won't Open: What to Do",
    description: "The safe order of operations when the door won't lift and you need the car — including when lifting by hand is and isn't safe.",
    category: "safety",
    updated: U,
    intro: "It's 7 a.m., the door won't move, and the car is inside. This is the most common urgent garage door call. Here's how to handle the next ten minutes without hurting yourself or the door.",
    sections: [
      {
        h: "First: why won't it open?",
        p: ["Press the wall button. If the opener hums and the door doesn't move, or the door lifts an inch and stops — suspect a broken spring. If nothing happens at all — check power, the lock mode on the wall console, and whether the trolley is disconnected."],
      },
      {
        h: "If it's the opener, not the door",
        p: ["Pull the emergency release cord (door closed) and lift the door by hand. A balanced door lifts easily. Lift it fully, and if it wants to drift down, clamp the track below a roller before pulling the car out. Close it by hand afterward and lock it."],
      },
      {
        h: "If the door is heavy — broken spring",
        p: ["A broken-spring door is its full weight, and it can drop. The honest advice is to call and wait; spring replacement is a single-visit repair and EZ Garage Doors treats trapped-car calls as urgent. If you absolutely must get the car out: two adults, lift together, hold it at the top while a third person moves the car — never let go mid-travel, and never leave it propped."],
      },
      {
        h: "If the door is crooked or off track",
        p: ["Don't lift it at all. An off-track door can fall sideways. Call."],
      },
      {
        h: "Afterward",
        p: ["Whatever got the car out, the door still has the fault. Keep people clear of it and get it serviced; the price is in writing before work begins."],
      },
    ],
    related: [
      { label: "Door Won't Open", href: "/garage-door-wont-open/" },
      { label: "Emergency Repair", href: "/emergency-garage-door-repair/" },
      { label: "How to Open the Door Manually", href: "/guides/how-to-open-garage-door-manually/" },
    ],
  },
  {
    slug: "garage-door-emergency-release-cord",
    title: "The Garage Door Emergency Release Cord: What It Does and When to Use It",
    description: "How the red cord disconnects the opener, the right way to use it, the wrong time to pull it, and how to re-engage the trolley.",
    category: "safety",
    updated: U,
    intro: "Every opener has a red handle on a cord hanging from the trolley. Most people have never pulled it. Here's what it's for and the one situation where pulling it is dangerous.",
    sections: [
      {
        h: "What it does",
        p: ["The cord releases a latch on the trolley, disconnecting the door from the opener's carriage. The door can then be moved by hand. It's for power outages, opener failures, and getting the car out when the opener won't cooperate."],
      },
      {
        h: "The right way",
        p: ["With the door fully closed, pull the cord straight down (or down and toward the opener, depending on the model). You'll hear a click. Then lift the door by hand."],
      },
      {
        h: "The wrong time",
        p: ["Never pull it with the door open, and never pull it on a door you suspect has a broken spring. A released door with weak or broken springs is held by nothing — it can slam down. If the door is open when the opener fails, wait for a technician rather than releasing it."],
      },
      {
        h: "Re-engaging",
        p: ["On most units, pull the cord toward the door to set the latch, then run the opener; the carriage travels until it clicks into the trolley. Some units re-engage just by running. If the door then stops in the wrong place, the travel limits may need resetting."],
      },
      {
        h: "Security note",
        p: ["On some doors the cord can be hooked from outside through the top seal. A small shield or a zip tie through the lever's hole (breakable from inside) prevents it."],
      },
    ],
    related: [
      { label: "How to Open the Door Manually", href: "/guides/how-to-open-garage-door-manually/" },
      { label: "Garage Door Security", href: "/guides/garage-door-security-tips/" },
      { label: "Opener Repair", href: "/garage-door-opener-repair/" },
    ],
  },
  {
    slug: "garage-door-wind-rating-and-storms",
    title: "Garage Doors in Nor'easters and Hurricanes: Wind Ratings, Struts, and Bracing",
    description: "Why the garage door is a house's weakest wall in a storm, what wind-rated doors and reinforcement struts do, and who should consider them in Massachusetts.",
    category: "massachusetts",
    updated: U,
    intro: "The garage door is the largest opening in most houses and the one most likely to fail in high wind. When it fails, wind pressurizes the house from inside. On exposed coastal lots in Massachusetts, that's worth designing for.",
    sections: [
      {
        h: "How doors fail in wind",
        p: ["Wind pushes the door inward (or sucks it outward on the leeward side). A door without enough stiffness bows, the rollers pull out of the tracks, and the door collapses into the garage. The sudden pressure change inside can then lift the roof."],
      },
      {
        h: "Wind-rated doors",
        p: ["A wind-rated door is engineered — thicker sections, more or heavier struts across the inside, reinforced track and roller hardware, and more track brackets — to resist a specified design pressure. Ratings are stated as pressure values or as a design wind speed; the right rating depends on the lot's exposure."],
      },
      {
        h: "Retrofit bracing",
        p: ["For an existing door, horizontal struts across each section stiffen it substantially, and additional track brackets keep the track anchored. Removable vertical braces that pin the door to the floor and header for a storm exist for the highest exposures."],
      },
      {
        h: "Who should consider it",
        p: ["Exposed lots on the outer Cape, the Islands, the South Shore beaches, and the North Shore; wide double doors especially. Inland homes rarely need a full wind-rated door, but struts on a wide door that rattles in wind are a sensible upgrade anywhere."],
      },
      {
        h: "Getting it quoted",
        p: ["Tell the technician the lot's exposure; the estimate names the door's rating and the strut package. EZ Garage Doors puts it in writing before ordering."],
      },
    ],
    related: [
      { label: "Salt Air and Coastal Doors", href: "/guides/coastal-garage-doors-salt-air/" },
      { label: "Barnstable County", href: "/service-areas/barnstable-county/" },
      { label: "New Door Installation", href: "/garage-door-installation/" },
    ],
  },
];
