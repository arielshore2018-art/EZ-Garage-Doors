import type { Guide } from "./types";

const U = "2026-09-17";

export const TROUBLESHOOTING_GUIDES: Guide[] = [
  {
    slug: "garage-door-wont-close-all-the-way",
    title: "Garage Door Won't Close All the Way: 7 Causes, in Order of Likelihood",
    description: "From blocked sensors to a bent track, the reasons a door stops short or reverses before the floor — and which ones you can check yourself.",
    category: "troubleshooting",
    updated: U,
    intro: "A door that stops a foot off the floor, or reverses just before it lands, is the opener protecting the door from something. Here are the causes in the order a technician checks them.",
    sections: [
      {
        h: "1. Safety sensors",
        p: ["The most common by far. If one sensor LED is off or blinking, something is in the beam, the lenses are dirty, or the brackets are out of alignment. Clear, wipe, nudge. Fixed nine times out of ten."],
      },
      {
        h: "2. Close-force limit",
        p: ["If the door meets more resistance than the opener's force setting allows, it reverses. Cold weather thickening the lubricant is the classic trigger. The correct fix is to make the door move freely — lubrication, balance — not to crank the force up."],
      },
      {
        h: "3. Travel limit",
        p: ["The opener thinks it has reached the floor before it has. If the door stops in the same spot without reversing and the sensors are fine, the down-travel limit needs adjusting. Common after a new bottom seal or a new opener."],
      },
      {
        h: "4. Something in the track",
        p: ["Ice, a stone, a bent section, or a roller that's jumped out. The door stops at the same height each time. Look with a flashlight; don't reach in with the opener connected."],
      },
      {
        h: "5. Spring balance",
        p: ["A door with weak springs closes fast and slams, or trips the force limit on the way down. Do the balance test with the opener released."],
      },
      {
        h: "6. A bind in the hardware",
        p: ["Cracked hinge, seized roller, or a slipped cable cocking the door in the track. Usually comes with noise."],
      },
      {
        h: "7. Opener logic",
        p: ["If everything above checks out and the door still refuses, the logic board is suspect — often with other symptoms like remotes failing. Repair or replace, quoted in writing."],
      },
    ],
    related: [
      { label: "Door Won't Close", href: "/garage-door-wont-close/" },
      { label: "Safety Sensor Repair", href: "/garage-door-safety-sensor-repair/" },
      { label: "Track Repair", href: "/garage-door-track-repair/" },
    ],
  },
  {
    slug: "garage-door-goes-up-but-not-down",
    title: "Garage Door Goes Up But Won't Come Down",
    description: "Why a door that opens fine but refuses to close almost always means the safety sensors — and the one case where it doesn't.",
    category: "troubleshooting",
    updated: U,
    intro: "This specific pattern — opens fine, won't close — is the easiest garage door problem to diagnose, because only one system is involved on the way down that isn't involved on the way up.",
    sections: [
      {
        h: "It's the sensors",
        p: ["The infrared safety sensors only matter while the door is closing. If the opener won't close the door (or starts and immediately reverses, often with its light blinking), the beam is broken or the sensors aren't talking to the opener. Check for something on the floor between them, wipe the lenses, and confirm both LEDs are steady. Sunlight hitting the receiving eye at certain hours causes an intermittent version of this."],
      },
      {
        h: "The hold-to-close test",
        p: ["If the door closes when you hold the wall button down continuously, that confirms it: hold-to-close bypasses the sensors. Use it only to secure the garage in an emergency — it also disables the protection that keeps the door from closing on a person."],
      },
      {
        h: "The one other cause",
        p: ["If the sensors check out and the door still won't start down, the close-force or down-travel setting may have drifted, or a wiring fault between sensors and opener (a staple through the wire, corrosion at the floor) is breaking the circuit. Both are quick technician fixes."],
      },
      {
        h: "Don't leave it open",
        p: ["A garage that can't be closed is a security problem. If the sensor check doesn't fix it, call — it's a same-visit repair in nearly every case, priced in writing."],
      },
    ],
    related: [
      { label: "Safety Sensor Repair", href: "/garage-door-safety-sensor-repair/" },
      { label: "Door Won't Close", href: "/garage-door-wont-close/" },
      { label: "Safety Sensors Explained", href: "/guides/garage-door-safety-sensors-explained/" },
    ],
  },
  {
    slug: "garage-door-off-track-what-to-do",
    title: "Garage Door Off Track: What to Do in the First Five Minutes",
    description: "A crooked, jammed, or hanging door is a falling hazard. The immediate steps, what not to touch, and what the repair involves.",
    category: "troubleshooting",
    updated: U,
    intro: "An off-track door is the one garage door failure that can hurt someone just by being looked at wrong. The door is held by whatever hardware hasn't failed yet. Here's the order of operations.",
    sections: [
      {
        h: "Immediately",
        p: [""],
        list: [
          "Don't press the opener button again. Every cycle bends the track further and can drop the door.",
          "Keep people, pets, and cars away from the opening — including the car parked inside, if it's near the door.",
          "Don't try to push rollers back into the track. The door's weight and spring tension make that dangerous, and it doesn't fix why it came off.",
          "If the door is partly open and hanging, leave it. Don't try to close it by hand.",
        ],
      },
      {
        h: "What pulled it off",
        p: ["A door leaves its track for a reason: a cable snapped or slipped and loaded one side, a roller wore out and popped, a track section bent from a bump, a hinge cracked and let a panel fold, or the opener drove the door against something frozen or jammed. The repair has to fix that cause or the door comes off again."],
      },
      {
        h: "What the repair involves",
        p: ["The technician secures the door so it can't fall, releases the tension safely, corrects the cause (new cable, new rollers, trued or replaced track, new hinge), sets the door back in the track, re-tensions the system, and tests full travel. EZ Garage Doors quotes the whole thing in writing before starting."],
      },
      {
        h: "Prevention",
        p: ["Most off-track doors gave warnings: a grinding roller, a crooked lift, a frayed cable. A yearly tune-up catches them."],
      },
    ],
    related: [
      { label: "Off-Track Door Repair", href: "/garage-door-off-track-repair/" },
      { label: "Track Repair", href: "/garage-door-track-repair/" },
      { label: "Roller Replacement", href: "/garage-door-roller-replacement/" },
    ],
  },
  {
    slug: "garage-door-makes-loud-noise",
    title: "What Your Garage Door's Noise Is Telling You",
    description: "Grinding, squealing, rattling, popping, banging, humming — a sound-by-sound guide to which part is failing and how urgent it is.",
    category: "troubleshooting",
    updated: U,
    intro: "Garage doors are honest about their problems: each part has its own sound. Here's the translation, and which sounds mean stop using the door.",
    sections: [
      {
        h: "Grinding or scraping",
        p: ["Worn or seized rollers dragging in the track, or a roller that's flattened. Not an emergency, but rollers that fail let the door jump the track. Roller replacement is inexpensive and transforms the door."],
      },
      {
        h: "Squealing or chirping",
        p: ["Dry metal on metal — hinges, springs, or the end bearings on the torsion shaft. Lubricate with a garage-door silicone or lithium product (never the tracks). If it persists, a bearing is worn."],
      },
      {
        h: "Rattling or vibrating",
        p: ["Loose nuts and bolts on hinges and brackets, or a chain drive's chain slapping the rail. A tune-up tightens hardware and tensions the chain."],
      },
      {
        h: "Popping",
        p: ["A cracked hinge or roller stem shifting under load, or a section that's separating at a hinge. Have it looked at before a panel folds."],
      },
      {
        h: "Banging at the bottom",
        p: ["The door slamming the last foot because the springs aren't holding it — weak springs. Do the balance test; this one leads to a snapped spring or a stripped opener gear."],
      },
      {
        h: "A single loud bang, then a heavy door",
        p: ["A torsion spring snapped. Stop using the door and call."],
      },
      {
        h: "Humming from the opener with no movement",
        p: ["Stripped drive gear, failed capacitor — or a broken spring the opener can't lift. Check the door's weight by hand first."],
      },
    ],
    related: [
      { label: "Noisy Garage Door Repair", href: "/noisy-garage-door-repair/" },
      { label: "Roller Replacement", href: "/garage-door-roller-replacement/" },
      { label: "How to Lubricate a Garage Door", href: "/guides/how-to-lubricate-a-garage-door/" },
    ],
  },
  {
    slug: "garage-door-stuck-open",
    title: "Garage Door Stuck Open? How to Secure the Garage Tonight",
    description: "When the door won't close and it's getting dark: the sensor check, the emergency close, how to lock a released door, and when to call.",
    category: "troubleshooting",
    updated: U,
    intro: "A door stuck open is a security problem before it's a repair problem. Work through this in order; most people can secure the garage in a few minutes even if the underlying fault waits until morning.",
    sections: [
      {
        h: "1. The sensor check",
        p: ["Look at the two sensors near the floor. Clear anything between them, wipe the lenses, and nudge the brackets until both LEDs are steady. Try the button. This fixes most stuck-open doors."],
      },
      {
        h: "2. Hold-to-close",
        p: ["If the sensors won't cooperate, press and hold the wall button (not the remote) until the door is fully closed. This bypasses the sensors, so make absolutely sure nothing and no one is in the opening while you hold it."],
      },
      {
        h: "3. Close it by hand",
        p: ["If the opener won't move the door at all: pull the red release cord and lower the door by hand, evenly, hands clear of the section joints. If the door is heavy — a sign of a broken spring — get help and don't let go mid-travel. Once closed, slide the manual lock or put a padlock through a track hole above a roller so the door can't be lifted from outside."],
      },
      {
        h: "4. If it won't move at all",
        p: ["A door that's jammed open — off track, a cable wrapped around the shaft, a panel folded — shouldn't be forced. Park a car close against the opening if you can, and call. EZ Garage Doors treats a garage that can't be secured as an urgent call."],
      },
      {
        h: "Tomorrow",
        p: ["Whatever got the door closed tonight, the fault is still there. A hold-to-close door has no safety protection, and a released door has no opener. Get it looked at."],
      },
    ],
    related: [
      { label: "Emergency Repair", href: "/emergency-garage-door-repair/" },
      { label: "Door Won't Close", href: "/garage-door-wont-close/" },
      { label: "How to Open the Door Manually", href: "/guides/how-to-open-garage-door-manually/" },
    ],
  },
  {
    slug: "garage-door-closes-then-reopens",
    title: "Garage Door Closes, Then Opens Again by Itself",
    description: "Why a door that reaches the floor and immediately reverses is usually a travel-limit or force setting — and the two mechanical causes to rule out.",
    category: "troubleshooting",
    updated: U,
    intro: "The door goes all the way down, touches the floor, and rises right back up. This one is a settings problem more often than a parts problem — but the settings are protecting the door from something, so check the something.",
    sections: [
      {
        h: "Down-travel limit set too far",
        p: ["If the opener is told the floor is an inch lower than it really is, the door hits the slab, the opener feels resistance, and it reverses — exactly as it would for an obstruction. Common after a new bottom seal or threshold raised the closed position, or after an opener install. Adjusting the down limit is the fix."],
      },
      {
        h: "Close-force set too low",
        p: ["A door that's a little stiff — cold lubricant, a slightly rough track — needs more force than the limit allows on the last few inches, where the seal compresses. Before raising the force, make the door move freely: lubricate and check for binding. Force should be the minimum that closes the door reliably."],
      },
      {
        h: "Something under the door",
        p: ["A stone, ice, or a raised threshold edge. Look along the bottom seal."],
      },
      {
        h: "Spring balance",
        p: ["A door with strong-side springs (over-tensioned) can bounce slightly at the floor and trigger reversal. Rarer, but the balance test finds it."],
      },
      {
        h: "Getting it right",
        p: ["Travel and force are set together on a door that's balanced and lubricated, then the auto-reverse is tested with a board on the floor. EZ Garage Doors does exactly that on every opener visit."],
      },
    ],
    related: [
      { label: "Door Won't Close", href: "/garage-door-wont-close/" },
      { label: "Opener Repair", href: "/garage-door-opener-repair/" },
      { label: "The Auto-Reverse Test", href: "/guides/garage-door-auto-reverse-test/" },
    ],
  },
  {
    slug: "garage-door-crooked-one-side-higher",
    title: "Garage Door Crooked or One Side Higher? Stop the Opener",
    description: "A door that lifts unevenly means one side has lost its cable, spring, or roller support. Why it's urgent and what the repair fixes.",
    category: "troubleshooting",
    updated: U,
    intro: "A door that hangs crooked — one side higher, a gap widening at one edge — is a door whose two sides are no longer being lifted equally. That's a cable or spring problem on one side, and it gets worse with every cycle.",
    sections: [
      {
        h: "Why it happens",
        p: ["Both sides of the door are lifted by cables wound on drums at the ends of the torsion shaft (or by an extension spring on each side). If one cable snaps, slips off its drum, or one extension spring fails, that side stops lifting. The other side keeps going, the door racks in the track, and rollers bind or pop out."],
      },
      {
        h: "What to do",
        p: ["Stop using the opener. Don't try to level the door by hand. Look for a loose or coiled cable, a cable wound off its drum, or a broken extension spring — but don't touch any of it; the cables are under spring tension. Call."],
      },
      {
        h: "The repair",
        p: ["The technician releases the tension safely, replaces the failed cable (both, usually — same age), re-seats the cables on the drums, checks the drums and springs, levels the door, re-tensions the system, and checks the track and rollers for damage from the racking. Quoted in writing first."],
      },
      {
        h: "If it's mild and intermittent",
        p: ["A door that lifts slightly crooked but corrects itself may have a cable starting to fray, a drum with a worn groove, or uneven spring tension. It's the warning before the full failure — a good reason for a tune-up."],
      },
    ],
    related: [
      { label: "Cable Repair", href: "/garage-door-cable-repair/" },
      { label: "Cable Drum Replacement", href: "/garage-door-drum-replacement/" },
      { label: "Off-Track Door Repair", href: "/garage-door-off-track-repair/" },
    ],
  },
  {
    slug: "garage-door-cable-came-off",
    title: "Garage Door Cable Came Off the Drum: Causes and the Right Fix",
    description: "Why a lift cable jumps its drum, why re-wrapping it isn't a DIY job, and what a proper cable repair includes.",
    category: "troubleshooting",
    updated: U,
    intro: "A cable that's come off its drum is coiled loose beside the door, hanging from the top, or wrapped around the torsion shaft. The door is now lifting from one side only. Here's what happened and why the fix is more than winding it back on.",
    sections: [
      {
        h: "Why cables come off",
        p: [""],
        list: [
          "The door was driven down onto something — a car, a bin, ice — and the cable went slack, then re-wound off the drum.",
          "A spring broke, releasing cable tension.",
          "The drum's set screws slipped, or the drum cracked.",
          "The cable frayed at the bottom bracket and stretched.",
          "The door was opened by hand with the opener disconnected and dropped a few inches.",
        ],
      },
      {
        h: "Why not just wrap it back on",
        p: ["Re-seating a cable means unwinding the springs to remove tension, wrapping the cable correctly in the drum grooves, and re-tensioning both sides evenly so the door hangs level. Winding torsion springs is the most dangerous task on a garage door. And a cable that came off has a reason — a proper repair finds it."],
      },
      {
        h: "What the repair includes",
        p: ["Cable inspection (both — same age, same wear), drum inspection, spring check, re-seating and re-tensioning, leveling the door, and a full-travel test. If the cable is frayed or the drum is cracked, those parts are replaced. EZ Garage Doors puts all of it in writing before starting."],
      },
    ],
    related: [
      { label: "Cable Repair", href: "/garage-door-cable-repair/" },
      { label: "Cable Drum Replacement", href: "/garage-door-drum-replacement/" },
      { label: "Door Crooked", href: "/guides/garage-door-crooked-one-side-higher/" },
    ],
  },
  {
    slug: "garage-door-frozen-shut",
    title: "Garage Door Frozen Shut? How to Free It Without Breaking Anything",
    description: "The safe way to release a door frozen to the slab, why running the opener makes it worse, and how to keep it from happening again.",
    category: "massachusetts",
    updated: U,
    intro: "Meltwater runs under the door during the day, freezes overnight, and glues the rubber bottom seal to the concrete. It's the most common winter garage door call in Massachusetts, and the most common way homeowners turn a five-minute problem into a repair.",
    sections: [
      {
        h: "Don't run the opener",
        p: ["An opener pulling against a frozen door either strips its drive gear, or breaks the seal free suddenly and slams the system. If you pressed the button and the door didn't move, stop."],
      },
      {
        h: "Freeing it",
        p: [""],
        list: [
          "Pull the emergency release cord so the opener isn't involved.",
          "Break the ice along the bottom seal from outside with a plastic scraper or a hard broom edge — not a metal shovel, which cuts the seal.",
          "Pour warm (not boiling) water along the seal if needed, then lift the door by hand a few inches to break the bond.",
          "Once free, clear the ice from the slab under the door before closing it again.",
        ],
      },
      {
        h: "If the seal tore",
        p: ["A torn bottom seal lets more water in, freezes faster, and won't stop drafts. Bottom seal replacement is an inexpensive job; a threshold on the floor keeps water from pooling under the door in the first place."],
      },
      {
        h: "Preventing it",
        p: ["Keep the apron clear of snow so meltwater doesn't run under the door, wipe the seal with a silicone spray before a cold snap so ice doesn't bond to it, and check the seal and threshold at the fall tune-up."],
      },
    ],
    related: [
      { label: "Weatherstripping & Seals", href: "/garage-door-weatherstripping/" },
      { label: "Springs in Winter", href: "/guides/garage-door-springs-in-winter/" },
      { label: "Tune-Up & Inspection", href: "/garage-door-tune-up/" },
    ],
  },
  {
    slug: "garage-door-shakes-or-jerks-when-opening",
    title: "Garage Door Shakes or Jerks When Opening",
    description: "A door that shudders on the way up: worn rollers, dry hardware, a chain-drive drive tension issue, or a weak spring — and how to tell which.",
    category: "troubleshooting",
    updated: U,
    intro: "A smooth door glides; a door that shudders, jerks, or hesitates partway is fighting something. It's rarely dangerous today, but it's how rollers, tracks, and openers get destroyed over months.",
    sections: [
      {
        h: "Worn rollers",
        p: ["The most common cause. Flat spots, cracked wheels, or seized bearings make the door stutter in the track, usually with a grinding sound. A full set of sealed nylon rollers fixes it."],
      },
      {
        h: "Dry hinges and bearings",
        p: ["Hinges that haven't been lubricated bind as the sections fold through the track curve; the door jerks at the same spot each time. Lubricate and retest."],
      },
      {
        h: "Chain drive tension",
        p: ["A loose chain on a chain-drive opener slaps and jerks the trolley, especially on startup. Tensioning is part of a tune-up."],
      },
      {
        h: "Weak or uneven springs",
        p: ["If one spring on a pair is weaker, the door lifts unevenly and shudders. The balance test with the opener released tells you — a door that drifts or feels heavy on one side needs spring service."],
      },
      {
        h: "A bent track or loose bracket",
        p: ["If the shudder is always in one spot and rollers and hinges are fine, look at the track at that height for a bend, a loose bracket, or a gap in the track splice."],
      },
    ],
    related: [
      { label: "Roller Replacement", href: "/garage-door-roller-replacement/" },
      { label: "Noisy Garage Door Repair", href: "/noisy-garage-door-repair/" },
      { label: "Tune-Up & Inspection", href: "/garage-door-tune-up/" },
    ],
  },
  {
    slug: "garage-door-opens-by-itself",
    title: "Garage Door Opens by Itself: Causes and How to Stop It",
    description: "Phantom openings from a stuck button, a neighbor's remote, a wiring short, or a failing logic board — how to track down which, and secure the garage meanwhile.",
    category: "troubleshooting",
    updated: U,
    intro: "A door that opens on its own is unsettling and a real security gap. The causes are almost always electrical — and most are easy to isolate by elimination.",
    sections: [
      {
        h: "Start by eliminating the accessories",
        p: ["Remove the batteries from every remote and unplug the wireless keypad. If the phantom openings stop, a remote had a stuck or shorted button (a remote crushed in a car seat is a classic). Replace the remote."],
      },
      {
        h: "Erase and re-pair",
        p: ["If a neighbor's remote or a previous owner's remote is paired to your opener, it can trigger it. Clear the opener's memory (hold the learn button until its LED goes out) and re-pair only your own remotes and keypad."],
      },
      {
        h: "The wall button and its wiring",
        p: ["A wall console with a stuck button, or its low-voltage wire pinched or shorted where it runs along the ceiling, can send a constant \"open\" signal. Disconnect the wall-button wires at the opener; if the problem stops, it's the console or the wire."],
      },
      {
        h: "The logic board",
        p: ["If the door opens with nothing connected but power, the opener's board is faulty — sometimes after a surge. On an old unit this usually tips the decision to replacement; on a newer one the board is a repair."],
      },
      {
        h: "Securing the garage meanwhile",
        p: ["Unplug the opener and lock the door manually (slide lock or a padlock through the track) until it's resolved. EZ Garage Doors diagnoses this by elimination on site and quotes the fix in writing."],
      },
    ],
    related: [
      { label: "Opener Repair", href: "/garage-door-opener-repair/" },
      { label: "Remotes & Keypads", href: "/garage-door-remote-programming/" },
      { label: "Garage Door Security", href: "/guides/garage-door-security-tips/" },
    ],
  },
  {
    slug: "garage-door-slams-shut",
    title: "Garage Door Slams Shut: Why It's a Spring Warning",
    description: "A door that drops the last foot or closes too fast has lost its counterbalance. What's failing, why it's urgent, and what the fix involves.",
    category: "troubleshooting",
    updated: U,
    intro: "A door should settle onto the floor. One that slams — drops the last foot, closes faster than it opens, or bounces — has springs that no longer hold its weight. It's the stage before a spring snaps or an opener strips.",
    sections: [
      {
        h: "What's happening",
        p: ["The springs are a counterbalance: they should carry nearly all the door's weight through its whole travel. As they lose tension with age, the bottom of the travel — where the springs are least wound — is where the door gets ahead of them. The opener's chain or belt goes slack on the way down, and the door drops."],
      },
      {
        h: "Confirm it",
        p: ["Release the opener with the door closed and lift the door to waist height. Let go carefully. If it drifts down on its own, the springs are weak. If it's heavy to lift, one may already be broken."],
      },
      {
        h: "Why it's urgent",
        p: ["A slamming door stresses cables, drums, the bottom section, and the opener's drive, and a weak spring is a spring about to break — typically on the coldest morning. It's also a pinch hazard for anyone closing the door by hand."],
      },
      {
        h: "The fix",
        p: ["Spring adjustment if the springs have life left, or replacement if they're at the end of their cycles — both on a two-spring door. The door is then balanced and the opener's force and travel are reset. Technician work; quoted in writing by EZ Garage Doors before starting."],
      },
    ],
    related: [
      { label: "Broken Spring Repair", href: "/broken-spring-repair/" },
      { label: "The Balance Test", href: "/guides/garage-door-balance-test/" },
      { label: "Spring Cycle Life", href: "/guides/garage-door-spring-cycle-life/" },
    ],
  },
  {
    slug: "garage-door-panel-dented-what-are-my-options",
    title: "Dented Garage Door Panel: Repair, Replace the Section, or Replace the Door?",
    description: "How to judge a dent, when a single section can be swapped, when a strut fixes a bowed panel, and when the whole door is the honest answer.",
    category: "troubleshooting",
    updated: U,
    intro: "A bumper, a basketball, a snowblower — garage door dents happen. The question is whether it's cosmetic, structural, or a sign the door's done. Here's how a technician judges it.",
    sections: [
      {
        h: "Cosmetic dents",
        p: ["A shallow dent in the middle of a section that hasn't creased the steel or bent the section's edges is cosmetic. Some can be improved with careful work from the back on single-layer doors; on insulated doors, the foam core usually holds the dent. Most homeowners live with them."],
      },
      {
        h: "Bowed or creased sections",
        p: ["A section that's bowed across its width (common on wide doors after a strong wind or a bump) can often be straightened and reinforced with a horizontal strut on the inside. A creased section — a sharp fold in the steel — has lost its stiffness and should be replaced."],
      },
      {
        h: "Replacing one section",
        p: ["If the door's model and color are still made, a single section can be ordered and swapped. It's worth it on a door whose other sections, hardware, and springs are healthy. The manufacturer label on the end stile tells the technician what's available."],
      },
      {
        h: "When it's the whole door",
        p: ["Faded color that won't match, rust at multiple edges, a history of repairs, or a discontinued model all push toward replacement — one new bright section on a tired door looks worse, not better. An honest quote shows both numbers. Also check the track and hinges near the dent; the impact that dented the panel often bent something else."],
      },
    ],
    related: [
      { label: "Panel Replacement", href: "/garage-door-panel-replacement/" },
      { label: "Garage Door Replacement", href: "/garage-door-replacement/" },
      { label: "What a New Door Costs", href: "/garage-door-replacement-cost/" },
    ],
  },
  {
    slug: "garage-door-hard-to-open-manually",
    title: "Garage Door Hard to Open by Hand? Here's What That Means",
    description: "A door that's heavy or stiff with the opener released has a balance, spring, roller, or track problem — and it's also the reason the opener is straining.",
    category: "troubleshooting",
    updated: U,
    intro: "A balanced garage door lifts with one hand. If yours takes real effort with the opener disconnected, something is wrong — and the opener has been quietly compensating for it.",
    sections: [
      {
        h: "Heavy the whole way up: springs",
        p: ["If the door is dead weight from the floor to the top, a spring is broken or both springs have lost most of their tension. Stop — don't keep lifting a broken-spring door — and call for spring service."],
      },
      {
        h: "Heavy at the bottom, easier higher: weak springs",
        p: ["Springs are least wound at the bottom of travel; weak springs show there first. The door drifts down when released partway. Spring adjustment or replacement."],
      },
      {
        h: "Stiff or jerky rather than heavy: hardware",
        p: ["Seized rollers, dry hinges, or a bent track make a balanced door hard to move even though its weight is carried. Grinding or a catch at one spot points here. Rollers and lubrication are the usual fix."],
      },
      {
        h: "Harder in winter: lubricant and seals",
        p: ["Cold thickens grease and stiffens rubber seals; a door that was fine in October fights back in January. Cold-rated lubricant and a check of the bottom seal for freezing."],
      },
      {
        h: "Why it matters even if the opener still works",
        p: ["An opener dragging a stiff or heavy door strips gears, burns out motors, and trips its force limit. Fixing the door is cheaper than replacing the opener it wears out."],
      },
    ],
    related: [
      { label: "Broken Spring Repair", href: "/broken-spring-repair/" },
      { label: "Roller Replacement", href: "/garage-door-roller-replacement/" },
      { label: "The Balance Test", href: "/guides/garage-door-balance-test/" },
    ],
  },
  {
    slug: "garage-door-wont-stay-open",
    title: "Garage Door Won't Stay Open (Drifts Down)",
    description: "A door that sinks after you lift it by hand, or that the opener holds but drops when released, has lost spring tension. What that means and what to do.",
    category: "troubleshooting",
    updated: U,
    intro: "Lift the door, let go, and watch it sink: that's the balance test failing in front of you. The springs are no longer carrying the door's weight, and the only thing holding it up has been the opener.",
    sections: [
      {
        h: "What's failing",
        p: ["Torsion and extension springs lose a little tension over their cycle life. A door that drifts down at waist height has springs well past the point where they should be adjusted; a door that drops fast has springs at the end of their life or one already broken."],
      },
      {
        h: "Why not just let the opener hold it",
        p: ["Because the opener is now lifting weight it wasn't designed for on every cycle. Drive gears strip, belts wear, and the force limit gets cranked up to compensate — which disables the door's ability to reverse on an obstruction. And the springs will still snap, usually at the worst time."],
      },
      {
        h: "The fix",
        p: ["If the springs have cycles left, a technician can add turns to restore tension. If they're near the end, replacement (both on a two-spring door) is the right call. Either way the door is rebalanced and the opener's force and travel are reset to a balanced door. Quoted in writing first."],
      },
      {
        h: "Meanwhile",
        p: ["Don't leave a released door partly open; it can drift closed on someone. Keep it closed and reconnect the opener until it's serviced."],
      },
    ],
    related: [
      { label: "Broken Spring Repair", href: "/broken-spring-repair/" },
      { label: "The Balance Test", href: "/guides/garage-door-balance-test/" },
      { label: "Door Slams Shut", href: "/guides/garage-door-slams-shut/" },
    ],
  },
  {
    slug: "garage-door-gap-at-bottom-or-sides",
    title: "Gap Under or Beside the Garage Door? Causes and Fixes",
    description: "Daylight under the door, a gap at one side, or a crooked bottom edge — seals, an uneven slab, a bent bottom section, or a door out of level.",
    category: "troubleshooting",
    updated: U,
    intro: "Gaps let in cold, water, salt, and mice. Some are a ten-minute seal fix; some are the door telling you it's not hanging level. Here's how to tell.",
    sections: [
      {
        h: "An even gap along the bottom",
        p: ["If the gap is the same across the whole width, the bottom seal is worn, hardened, or missing, or the down-travel limit on the opener is stopping the door short. New seal, or a limit adjustment."],
      },
      {
        h: "A gap at one end of the bottom",
        p: ["Either the slab is uneven (common on older garages that have settled) or the door isn't level. A door that used to sit flat and now doesn't may have a cable issue. An uneven slab can be handled with a larger bottom seal or a threshold that follows the floor."],
      },
      {
        h: "Gaps at the sides or top",
        p: ["The perimeter weatherstripping on the jambs and header has cracked, curled, or pulled away. Replacement is straightforward and makes a noticeable difference in an attached garage."],
      },
      {
        h: "A wavy or bent bottom edge",
        p: ["If the bottom section is bowed or rusted, no seal will close the gap. The section is replaced (or, on a tired door, the door is)."],
      },
      {
        h: "Water coming in",
        p: ["Gaps plus a sloped apron mean water under the door and ice in winter. A threshold on the floor plus a fresh seal solves most of it."],
      },
    ],
    related: [
      { label: "Weatherstripping & Seals", href: "/garage-door-weatherstripping/" },
      { label: "Panel Replacement", href: "/garage-door-panel-replacement/" },
      { label: "Door Frozen Shut", href: "/guides/garage-door-frozen-shut/" },
    ],
  },
];
