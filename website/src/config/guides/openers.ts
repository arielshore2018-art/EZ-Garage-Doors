import type { Guide } from "./types";

const U = "2026-09-17";

export const OPENER_GUIDES: Guide[] = [
  {
    slug: "belt-drive-vs-chain-drive-garage-door-opener",
    title: "Belt Drive vs. Chain Drive vs. Wall-Mount: Which Garage Door Opener Should You Buy?",
    description: "An honest comparison of the three opener drive types — noise, durability, cost tier, and which garages each one suits.",
    category: "openers",
    updated: U,
    intro: "Opener shopping comes down to one question first: how is the motor going to move the door? There are three answers, and the right one depends on where the garage is, how the door is built, and how much noise you'll tolerate.",
    sections: [
      {
        h: "Chain drive",
        p: ["A metal chain pulls a trolley along a rail. It's the oldest design, the most durable, and usually the lowest cost tier. It's also the loudest — a metallic rattle you'll hear through a floor. Best for detached garages and anywhere noise doesn't matter."],
      },
      {
        h: "Belt drive",
        p: ["A reinforced rubber belt does the chain's job with a fraction of the noise. It's the standard recommendation for attached garages, especially under bedrooms. Belts on current models are rated for heavy doors; the old worry about belts not handling weight is largely history."],
      },
      {
        h: "Wall-mount (jackshaft)",
        p: ["Instead of a rail down the ceiling, a wall-mount opener bolts beside the torsion shaft and turns it directly. It frees the ceiling for storage or a lift, suits high-lift and low-headroom tracks, and is very quiet. It requires a torsion spring system and a bit more installation work; many models include a separate light and a deadbolt-style lock."],
      },
      {
        h: "Motor rating",
        p: ["Openers are rated by horsepower or by newtons of lift. The rating should match the door's weight and size — a heavy insulated double door needs more than a light single. Undersized openers wear out early; oversized ones don't fix a badly balanced door. A technician sizes it to the actual door."],
      },
      {
        h: "What matters more than the drive",
        p: ["Whatever the drive, three things matter more for reliability: the door is balanced so the opener only guides it, the safety sensors are aligned, and the force and travel limits are set correctly. That's the installation, not the box."],
      },
    ],
    faqs: [
      { question: "Is a belt drive strong enough for a double insulated door?", answer: "Current belt-drive openers are rated for heavy doors. Size the motor to the door and it's not an issue." },
      { question: "Can I put a wall-mount opener on any door?", answer: "It needs a torsion spring system and a bit of side room by the shaft. Most torsion doors qualify; extension-spring doors don't without conversion." },
    ],
    related: [
      { label: "Opener Installation", href: "/garage-door-opener-installation/" },
      { label: "Garage Door Openers", href: "/garage-door-openers/" },
      { label: "Opener Repair vs. Replace", href: "/guides/garage-door-opener-repair-or-replace/" },
    ],
  },
  {
    slug: "garage-door-opener-repair-or-replace",
    title: "Garage Door Opener: Repair or Replace? The Honest Math",
    description: "A decision framework for a failing opener — age, the part that failed, safety features, and the point where replacement costs less over time.",
    category: "openers",
    updated: U,
    intro: "An opener with a problem isn't automatically an opener that needs replacing — and a fifteen-year-old opener that works isn't automatically fine. Here's how a technician actually decides, and how to make the call yourself.",
    sections: [
      {
        h: "Usually a repair",
        p: ["These failures are cheap to fix relative to a new unit, and fixing them doesn't leave you with an opener that's about to fail again."],
        list: [
          "Safety sensors misaligned, dirty, or failed",
          "Remote, keypad, or wall console dead or unpaired",
          "Chain or belt loose",
          "Travel or force limits drifted",
          "A stripped drive gear on an otherwise healthy unit under about ten years old",
          "A worn trolley or carriage",
        ],
      },
      {
        h: "Usually a replacement",
        p: ["These point to a unit at the end of its life, or one that shouldn't be in service."],
        list: [
          "Motor failed, or the logic board failed on a unit 12–15+ years old",
          "No safety sensors at all (pre-1993) — modern safety standards alone justify replacement",
          "Repairs stacking up: a gear kit last year, a capacitor this year",
          "Parts no longer available",
          "You want features the old unit can't add — quiet belt drive, app control, battery backup",
        ],
      },
      {
        h: "The math",
        p: ["Compare the repair cost against a new opener installed, then ask how much life the repair buys. A gear kit on a five-year-old unit buys years. The same gear kit on a seventeen-year-old unit buys until the next part fails. When the repair approaches half the cost of replacement on an old unit, replacement usually wins."],
      },
      {
        h: "The one thing to check first",
        p: ["Before blaming the opener, test the door's balance. An opener straining against a heavy door — broken or weak springs — looks exactly like a failing opener. Replacing the opener without fixing the springs just burns out the new one. EZ Garage Doors tests balance before quoting any opener work, and puts repair and replacement side by side in writing."],
      },
    ],
    related: [
      { label: "Opener Repair & Replacement", href: "/garage-door-opener-repair/" },
      { label: "Opener Installation", href: "/garage-door-opener-installation/" },
      { label: "Belt vs. Chain vs. Wall-Mount", href: "/guides/belt-drive-vs-chain-drive-garage-door-opener/" },
    ],
  },
  {
    slug: "garage-door-safety-sensors-explained",
    title: "Garage Door Safety Sensors Explained: How Photo Eyes Work and Why They Fail",
    description: "What the two sensors near the floor do, how to read their LEDs, the common failures, and why bypassing them is never the answer.",
    category: "openers",
    updated: U,
    intro: "Every opener made since 1993 has a pair of small sensors mounted a few inches above the floor on either side of the opening. They're the reason a modern door won't crush what's under it — and the reason a lot of doors refuse to close.",
    sections: [
      {
        h: "How they work",
        p: ["One sensor emits an infrared beam, the other receives it. While the door is closing, the opener checks that the beam is unbroken; if anything interrupts it, the door stops and reverses. The sensors don't affect opening — only closing — which is why a door that opens fine but won't close points straight at them."],
      },
      {
        h: "Reading the LEDs",
        p: ["Each sensor has a small LED. Exact colors vary by brand, but the pattern is consistent: the sending sensor's light stays steady whenever it has power; the receiving sensor's light is steady only when it sees the beam. A receiving LED that's off, dim, or flickering means the beam is blocked or the sensors are out of alignment. The opener's own light usually blinks a code when it refuses to close for sensor reasons."],
      },
      {
        h: "Why they fail",
        p: [""],
        list: [
          "Knocked out of alignment by a broom, a bike, or a trash can",
          "Lenses dirty, fogged, or webbed over",
          "Wires stapled through, corroded at the floor, or pinched",
          "Direct sunlight overwhelming the receiving eye at certain times of day",
          "A failed sensor — they do wear out",
        ],
      },
      {
        h: "What you can do",
        p: ["Wipe both lenses, clear anything near the floor, and gently nudge the brackets until both LEDs are steady. If that doesn't hold, or the wiring looks damaged, it's a quick technician fix. What you should never do is bypass them — holding the wall button to force a close disables the only thing stopping the door from closing on a child, a pet, or a bumper."],
      },
    ],
    related: [
      { label: "Safety Sensor Repair", href: "/garage-door-safety-sensor-repair/" },
      { label: "Door Won't Close", href: "/garage-door-wont-close/" },
      { label: "The Auto-Reverse Test", href: "/guides/garage-door-auto-reverse-test/" },
    ],
  },
  {
    slug: "garage-door-remote-not-working",
    title: "Garage Door Remote Not Working? Try These Before You Call",
    description: "The five-minute checklist for a dead garage door remote — battery, range, lock mode, re-pairing — and the signs it's actually the opener.",
    category: "troubleshooting",
    updated: U,
    intro: "A remote that stops working is almost always a small problem. Run through this list before assuming the worst; most people are back in business at step two.",
    sections: [
      {
        h: "The checklist",
        p: [""],
        list: [
          "Battery. Replace it even if the LED still lights — a weak battery cuts range to a few feet before it dies completely.",
          "The wall console's lock (vacation) mode. If the wall button works but no remote does, lock mode is probably on. Hold the lock button on the console for a few seconds to clear it.",
          "Range. If the remote works only right under the opener, the opener's antenna wire may be tucked up into the housing or broken. It should hang straight down.",
          "Re-pair the remote. Press the learn button on the opener, then the remote button within thirty seconds. A power surge or outage can clear the opener's memory.",
          "Interference. New LED bulbs in the opener light socket can interfere with the receiver — swap for a bulb marked garage-door compatible.",
        ],
      },
      {
        h: "When it's the opener",
        p: ["If the wall button also does nothing, the remote isn't the problem — check that the opener has power (unplug and re-plug), then suspect the logic board. If remotes and keypad all fail after a lightning storm, the receiver on the board may have taken a surge."],
      },
      {
        h: "When it's time for a new remote",
        p: ["Buttons wear out, cases crack, and very old remotes with dip-switch codes may not have compatible replacements without an external receiver. A technician can pair a compatible replacement or add a receiver that works with modern remotes — a small job."],
      },
      {
        h: "Security note",
        p: ["If you've lost a remote or moved into a new house, clear the opener's memory (usually by holding the learn button until its LED goes out) and re-pair only your remotes. Anyone holding an old remote can otherwise open your garage."],
      },
    ],
    related: [
      { label: "Remotes & Keypads", href: "/garage-door-remote-programming/" },
      { label: "Opener Repair", href: "/garage-door-opener-repair/" },
      { label: "Door Won't Open", href: "/garage-door-wont-open/" },
    ],
  },
  {
    slug: "garage-door-opener-hums-but-doesnt-move",
    title: "Garage Door Opener Hums But the Door Doesn't Move",
    description: "Why an opener that hums or clicks without moving the door is usually a stripped gear, a failed capacitor — or a broken spring the opener can't lift.",
    category: "troubleshooting",
    updated: U,
    intro: "You press the button, the opener hums or buzzes, maybe the light comes on — and the door doesn't budge. There are three usual causes, and the first thing to check isn't the opener at all.",
    sections: [
      {
        h: "First: is the door too heavy?",
        p: ["Pull the emergency release (door closed) and lift the door by hand. If it's dead weight, a spring has broken and the opener is simply unable to lift it — it hums because the motor is trying. This is the most common cause and no opener repair will fix it. Stop, keep clear, and call for spring service."],
      },
      {
        h: "Stripped drive gear",
        p: ["If the door lifts easily by hand, the problem is inside the opener. On chain and belt units, the motor turns a nylon drive gear; when it strips, the motor spins and hums but nothing moves the trolley. Clue: white or beige plastic shavings inside or under the motor housing. It's a normal repair on a unit under about ten years old."],
      },
      {
        h: "Failed capacitor",
        p: ["The start capacitor gives the motor its initial kick. When it fails, the motor hums for a few seconds and gives up, sometimes with a click. On older units this is a modest repair; on very old ones it's often the point where replacement makes more sense."],
      },
      {
        h: "Trolley disconnected",
        p: ["If the opener runs and the trolley travels along the rail but the door stays put, someone pulled the emergency release. Pull the cord toward the door (or run the opener) to re-engage. Not a repair."],
      },
      {
        h: "What we do",
        p: ["EZ Garage Doors tests the balance first, then the drive. You get the actual cause and both numbers — repair and, if the unit is old, replacement — in writing before anything is done."],
      },
    ],
    related: [
      { label: "Door Won't Open", href: "/garage-door-wont-open/" },
      { label: "Opener Repair", href: "/garage-door-opener-repair/" },
      { label: "Broken Spring Repair", href: "/broken-spring-repair/" },
    ],
  },
  {
    slug: "smart-garage-door-opener-guide",
    title: "Smart Garage Door Openers: What They Do, What They Don't, and How to Add One",
    description: "App control, alerts, schedules, and guest access — what a Wi-Fi opener actually gives you, which existing openers can be upgraded, and the setup pitfalls.",
    category: "openers",
    updated: U,
    intro: "\"Did I close the garage?\" is the question a smart opener answers from anywhere. Here's what the feature set really is, how it's added to an existing opener, and the two things that make or break the setup.",
    sections: [
      {
        h: "What you get",
        p: [""],
        list: [
          "Open and close from the app, and see the current state",
          "Alerts when the door opens, closes, or is left open past a set time",
          "Scheduled auto-close at night",
          "Guest access and one-time codes for contractors or deliveries",
          "Activity history — who opened it and when",
          "On some models: a built-in camera and battery backup",
        ],
      },
      {
        h: "Built in vs. added on",
        p: ["Most current LiftMaster and Chamberlain openers (myQ) and many Genie models (Aladdin Connect) have Wi-Fi built in. For an existing opener without it, an add-on hub connects to the opener's wall-button terminals or works through the sensors, with a small tilt sensor on the door to report open/closed. Most openers made after the mid-1990s with safety sensors are compatible; very old units aren't."],
      },
      {
        h: "The two things that break it",
        p: ["Wi-Fi signal — garages are often dead zones, especially under concrete or at the far end of the house; a mesh node or extender near the garage fixes it. And compatibility — some openers with newer security protocols need the manufacturer's own hub. Both are worth checking before buying anything."],
      },
      {
        h: "Security",
        p: ["Modern openers use encrypted rolling-code signals and the app is tied to your account. The realistic risk is old remotes still paired from a previous owner — clearing the opener's memory is part of a proper setup."],
      },
    ],
    related: [
      { label: "Smart Openers", href: "/smart-garage-door-opener/" },
      { label: "Opener Installation", href: "/garage-door-opener-installation/" },
      { label: "LiftMaster Openers", href: "/brands/liftmaster/" },
    ],
  },
  {
    slug: "garage-door-keypad-not-working",
    title: "Garage Door Keypad Not Working? Causes and Fixes",
    description: "Dead battery, lost pairing, worn buttons, cold weather, and a changed PIN — the usual reasons a wireless keypad stops opening the door.",
    category: "troubleshooting",
    updated: U,
    intro: "The wireless keypad on the door frame is the most weather-exposed accessory on the system, and the first to act up when winter arrives. Most fixes are simple.",
    sections: [
      {
        h: "Battery first",
        p: ["Keypad batteries (usually a 9-volt or AA pair) die faster in the cold. If the keypad lights up dimly or not at all, replace the battery before anything else."],
      },
      {
        h: "Pairing lost",
        p: ["If the keypad lights up, accepts the code, and nothing happens, it has lost its pairing with the opener — common after a power outage. Re-pair it: press the opener's learn button, then enter your PIN on the keypad and press Enter within thirty seconds."],
      },
      {
        h: "Wrong PIN or a changed one",
        p: ["If someone reprogrammed the keypad, the old PIN won't work. Reprogramming from the opener's learn button sets a new one."],
      },
      {
        h: "Worn buttons and weather",
        p: ["After years of use, individual buttons stop registering; after years outside, the rubber overlay cracks and moisture gets in. At that point a replacement keypad — compatible with your opener's generation — is the fix, and it's a quick one."],
      },
      {
        h: "Everything failed at once",
        p: ["If the keypad, remotes, and wall button all stopped, the problem is the opener — power, lock mode, or the logic board — not the accessories."],
      },
    ],
    related: [
      { label: "Remotes & Keypads", href: "/garage-door-remote-programming/" },
      { label: "Remote Not Working", href: "/guides/garage-door-remote-not-working/" },
      { label: "Opener Repair", href: "/garage-door-opener-repair/" },
    ],
  },
  {
    slug: "garage-door-opener-light-blinking-codes",
    title: "Garage Door Opener Light Blinking? What the Codes Usually Mean",
    description: "Why the opener light blinks instead of closing the door, and how to read the most common patterns — sensors, force, travel, and logic-board faults.",
    category: "troubleshooting",
    updated: U,
    intro: "When an opener refuses to close and its light blinks, it's reporting a fault code. Exact patterns differ by brand and model, but the categories are consistent — and the most common one is fixable in a minute.",
    sections: [
      {
        h: "The most common: sensor fault",
        p: ["On many LiftMaster, Chamberlain, and Craftsman units, ten blinks after a failed close means the safety sensors are blocked, misaligned, or not communicating. Check both sensor LEDs, wipe the lenses, and nudge the brackets until both lights are steady."],
      },
      {
        h: "Force or travel faults",
        p: ["Other patterns indicate the door met resistance (force limit), didn't reach its expected position (travel limit), or the opener detected a problem with the drive. These often follow a change in the door — a cold snap, a new roller, a spring losing tension — rather than a change in the opener."],
      },
      {
        h: "Logic-board and wiring faults",
        p: ["A pattern that persists after the sensors check out, or that appears alongside remotes and keypad failing, points to the logic board, a wiring short, or a failed component on the board — the point where a technician's diagnosis pays for itself."],
      },
      {
        h: "Where to find your model's codes",
        p: ["The pattern table is printed in the owner's manual and usually on a label inside the light lens cover. Count the blinks, note whether the light stays on afterward, and tell the technician — it shortens the diagnosis."],
      },
      {
        h: "The fix",
        p: ["Sensor codes are usually a homeowner fix. Force and travel codes need the door checked for balance and binding before anything is adjusted. Board faults are a repair-or-replace decision — EZ Garage Doors puts both in writing."],
      },
    ],
    related: [
      { label: "Safety Sensor Repair", href: "/garage-door-safety-sensor-repair/" },
      { label: "Door Won't Close", href: "/garage-door-wont-close/" },
      { label: "Opener Repair", href: "/garage-door-opener-repair/" },
    ],
  },
  {
    slug: "garage-door-opener-battery-backup",
    title: "Garage Door Opener Battery Backup: Do You Need One?",
    description: "How opener battery backup works, who benefits from it in Massachusetts, and what to expect from the battery over time.",
    category: "openers",
    updated: U,
    intro: "A power outage with the car inside the garage is the moment most people wish they'd thought about battery backup. It's an option on many current openers — here's what it does and who actually needs it.",
    sections: [
      {
        h: "What it does",
        p: ["A rechargeable battery in or beside the motor head keeps the opener working during an outage — typically a limited number of full cycles, enough to get the cars out and the door closed. When power returns, the battery recharges. Without it, you open the door by pulling the emergency release and lifting by hand."],
      },
      {
        h: "Who benefits",
        p: [""],
        list: [
          "Households where the garage is the main entrance and the house door is rarely used",
          "Anyone who can't easily lift a door by hand — a heavy insulated double door is real weight even when balanced",
          "Homes in areas with frequent storm outages — common along the Massachusetts coast and in the hill towns",
          "Garages with no other exit",
        ],
      },
      {
        h: "What to expect",
        p: ["Backup batteries are consumables; most last a few years before capacity drops, and the opener usually signals when the battery needs replacing. Replacement is a simple swap. It's worth noting the model's battery status indicator when you have the opener installed."],
      },
      {
        h: "Adding it",
        p: ["Some openers accept a plug-in battery module after the fact; others need the battery-equipped model from the start. If it matters to you, say so before the opener is chosen — it's listed as its own line in an EZ Garage Doors written estimate."],
      },
    ],
    related: [
      { label: "Opener Installation", href: "/garage-door-opener-installation/" },
      { label: "How to Open the Door Without Power", href: "/guides/how-to-open-garage-door-manually/" },
      { label: "Garage Door Openers", href: "/garage-door-openers/" },
    ],
  },
  {
    slug: "how-to-open-garage-door-manually",
    title: "How to Open a Garage Door Manually (Power Outage or Dead Opener)",
    description: "The safe way to use the emergency release cord, lift the door by hand, secure it open, and re-engage the opener afterward.",
    category: "safety",
    updated: U,
    intro: "Every opener has a red cord hanging from the trolley. Pulling it disconnects the door from the opener so you can move the door by hand. It's simple, but the order matters — and there's one situation where you shouldn't do it at all.",
    sections: [
      {
        h: "When not to",
        p: ["If you heard a bang, the door feels heavy, or a cable is loose, don't release the opener and lift. A broken-spring door is the door's full weight and can drop. Call instead; if a car must come out, use two people and never let go of the door mid-travel."],
      },
      {
        h: "The steps",
        p: [""],
        list: [
          "Make sure the door is fully closed. Releasing the trolley with the door open can let it slam down.",
          "Pull the red cord straight down (or down and back, toward the opener). The trolley clicks free.",
          "Lift the door by the handle or bottom edge, evenly, with both hands. A balanced door lifts easily.",
          "If you need it to stay open, don't trust it — a balanced door usually holds, but a clamp on the track below a roller (or a locking pliers) secures it.",
          "Close the door by hand the same way, keeping hands clear of the section joints.",
        ],
      },
      {
        h: "Re-engaging the opener",
        p: ["When power returns, pull the cord toward the door (on most units) so the trolley's latch is ready, then run the opener; the carriage travels until it clicks back into the trolley. Some units re-engage just by running. If the door then behaves oddly, the travel limits may need resetting."],
      },
      {
        h: "Locking it",
        p: ["A released door can be lifted from outside. If you'll be without power for a while, slide the manual lock bar if the door has one, or put a padlock through a track hole above a roller."],
      },
    ],
    related: [
      { label: "Battery Backup", href: "/guides/garage-door-opener-battery-backup/" },
      { label: "Door Won't Open", href: "/garage-door-wont-open/" },
      { label: "Garage Door Safety Basics", href: "/guides/garage-door-safety-basics/" },
    ],
  },
  {
    slug: "garage-door-auto-reverse-test",
    title: "The Garage Door Auto-Reverse Test: How to Check the Safety System in Two Minutes",
    description: "The two tests every opener should pass — the obstruction reversal and the sensor beam — and what to do if either fails.",
    category: "safety",
    updated: U,
    intro: "An opener has two independent ways to avoid closing on something: the force-sensing reversal in the motor, and the infrared sensor beam near the floor. Both should be tested a couple of times a year. It takes two minutes.",
    sections: [
      {
        h: "Test 1: obstruction reversal",
        p: ["Lay a 2×4 board flat on the floor in the door's path, centered. Close the door with the remote. When the door touches the board it should reverse within about two seconds. If it stops without reversing, or pushes on the board, the force setting is too high or the reversal isn't working — stop using the opener until it's adjusted."],
      },
      {
        h: "Test 2: the sensor beam",
        p: ["Start the door closing, then wave a broom or your hand through the beam between the two floor sensors. The door should reverse immediately. If it keeps closing, the sensors are miswired, bypassed, or failed."],
      },
      {
        h: "If either test fails",
        p: ["Don't adjust the force limit upward to \"fix\" a door that won't close — that's the setting that decides how hard the door pushes on whatever's under it. The right fix is a balanced door, aligned sensors, and force set to the minimum that closes the door reliably. EZ Garage Doors runs both tests at the end of every opener job and every tune-up."],
      },
      {
        h: "Why both",
        p: ["The sensors catch things in the beam's path — a few inches off the floor. The force reversal catches everything else: a bike leaning in the opening above beam height, a car bumper, a person. Both need to work."],
      },
    ],
    related: [
      { label: "Safety Sensor Repair", href: "/garage-door-safety-sensor-repair/" },
      { label: "Tune-Up & Inspection", href: "/garage-door-tune-up/" },
      { label: "Safety Sensors Explained", href: "/guides/garage-door-safety-sensors-explained/" },
    ],
  },
  {
    slug: "garage-door-opener-horsepower-explained",
    title: "Garage Door Opener Horsepower: How Much Do You Actually Need?",
    description: "What 1/2, 3/4, and 1-plus horsepower ratings mean, why door weight matters more than door width, and why a bigger motor doesn't fix a heavy door.",
    category: "openers",
    updated: U,
    intro: "Opener boxes advertise horsepower like it's the whole story. It isn't — but the rating does need to match the door, and getting it wrong shortens the opener's life.",
    sections: [
      {
        h: "What the ratings mean",
        p: ["Residential openers are sold in roughly three tiers: around 1/2 HP for light single doors, 3/4 HP for most double doors and insulated singles, and 1 HP or more (sometimes stated in newtons or as \"1¼ HP equivalent\") for heavy insulated doubles, wood doors, and oversized doors. DC motors on newer units are often rated by lift force rather than horsepower."],
      },
      {
        h: "Weight, not width",
        p: ["A 16-foot single-layer steel door can weigh less than a 9-foot insulated wood-look door. The opener needs to be sized to the door's actual weight and the friction of its hardware, which a technician measures rather than guesses."],
      },
      {
        h: "The mistake a bigger motor doesn't fix",
        p: ["An opener only guides a balanced door — the springs do the lifting. If a door feels heavy, the answer is spring service, not more horsepower. Upsizing the motor on an unbalanced door just lets the opener drag the door around longer before something breaks."],
      },
      {
        h: "Other specs that matter",
        p: ["Drive type (belt for quiet), speed, DC motor with soft start and stop (gentler on the door), battery backup, Wi-Fi, and lighting. Horsepower is one line on the spec sheet, not the headline."],
      },
    ],
    related: [
      { label: "Opener Installation", href: "/garage-door-opener-installation/" },
      { label: "Belt vs. Chain vs. Wall-Mount", href: "/guides/belt-drive-vs-chain-drive-garage-door-opener/" },
      { label: "The Balance Test", href: "/guides/garage-door-balance-test/" },
    ],
  },
];
