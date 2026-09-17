/**
 * Door style / material pages (A1's materials + styles taxonomy),
 * limited to styles we actually install and have real photos of.
 * Prices never appear; the cost guide explains factors.
 */
export interface DoorStyle {
  slug: string;
  name: string;
  imageId: string;
  tagline: string;
  intro: string[];
  bestFor: string[];
  considerations: string[];
  faqs: { question: string; answer: string }[];
}

export const DOOR_STYLES: DoorStyle[] = [
  {
    slug: "insulated-steel-garage-doors",
    name: "Insulated Steel Garage Doors",
    imageId: "door-steel",
    tagline: "The Massachusetts default: quieter, warmer, stiffer, and built for winter",
    intro: [
      "An insulated steel door is two steel skins bonded to a core of polystyrene or polyurethane foam — the \"sandwich panel\" construction. In Massachusetts, where attached garages share a wall with the house and a New England winter runs five months, it is the door we recommend most often.",
      "Insulation does more than hold heat. A sandwich panel is far stiffer than a single steel skin, so the door runs quieter, resists denting, and sags less over the years. Doors are rated by R-value; the higher the number, the more effective the insulation.",
    ],
    bestFor: [
      "Attached garages, especially with rooms above or beside them",
      "Garages used as workshops, gyms, or storage for anything that shouldn't freeze",
      "Homes near busy roads where a stiffer, quieter door matters",
      "Anyone replacing a rattling single-layer door",
    ],
    considerations: [
      "Insulated doors are heavier, so springs must be sized to the new door's weight — reusing old springs is not an option.",
      "Polyurethane cores insulate better per inch than polystyrene; both are available in most lines.",
      "A stiffer door highlights a badly balanced or worn track — we inspect the hardware before ordering.",
    ],
    faqs: [
      { question: "Is an insulated door worth it for a detached garage?", answer: "If the garage is unheated and just holds cars, the payback is mostly in quietness and durability rather than energy. For attached garages, insulation is almost always worth it in Massachusetts." },
      { question: "What R-value should I look for?", answer: "For an attached garage in Massachusetts, doors in the R-12 to R-18 range are the common choice; higher is available. We'll show two or three options in the written estimate." },
    ],
  },
  {
    slug: "carriage-house-garage-doors",
    name: "Carriage House Garage Doors",
    imageId: "door-carriage",
    tagline: "The look of swing-out barn doors, built as a modern sectional door",
    intro: [
      "Carriage-house doors mimic the swing-out doors of old carriage barns — vertical planking, cross-bucks or X-braces, decorative hinges and handles — but they are ordinary sectional doors underneath, rolling up on tracks with an opener like any other.",
      "They are the natural fit for Massachusetts colonials, capes, farmhouses, and any home in a historic district where a stamped raised-panel door would look out of place. Most are steel with an embossed or overlaid wood-grain pattern; wood-composite overlays are available for a deeper look.",
    ],
    bestFor: [
      "Colonials, capes, farmhouses, and shingle-style homes",
      "Historic districts and towns with exterior-appearance review",
      "Homeowners who want character without wood maintenance",
    ],
    considerations: [
      "Decorative hardware is decorative — the door still lifts on tracks, so headroom and side-room are measured as usual.",
      "Overlay boards add weight; springs are sized accordingly.",
      "Window options (arched, square, grille) change the look significantly — bring photos of what you like.",
    ],
    faqs: [
      { question: "Do carriage-house doors swing open like real barn doors?", answer: "No — they look like swing doors but operate as sectional roll-up doors with a standard opener. The decorative hinges and handles are fixed." },
      { question: "Will a carriage-house door pass historic review?", answer: "It's usually the style most likely to. Where a commission reviews exterior changes, we'll help you choose a style and color that fits the guidelines." },
    ],
  },
  {
    slug: "modern-garage-doors",
    name: "Modern & Contemporary Garage Doors",
    imageId: "door-black-windows",
    tagline: "Flush panels, dark finishes, and vertical or horizontal window stacks",
    intro: [
      "Modern garage doors drop the embossed panels and decorative hardware for clean flush or plank-style faces, dark or bold finishes, and window layouts — a vertical stack of glass, a horizontal row, or full-view panels.",
      "They suit contemporary homes and, increasingly, updated capes and ranches where a black or charcoal door becomes the strongest design element on the street-facing facade.",
    ],
    bestFor: [
      "Contemporary and mid-century homes",
      "Exterior refreshes where the door is the focal point",
      "Homes with dark trim, black windows, or metal accents",
    ],
    considerations: [
      "Dark doors in full sun get hot; insulated construction helps the panels stay flat.",
      "Glass adds weight and changes insulation — insulated glass is available.",
      "Flush faces show dents more than embossed panels; sandwich construction resists them.",
    ],
    faqs: [
      { question: "Are black garage doors a problem in summer?", answer: "Dark doors absorb more heat. An insulated sandwich panel stays flatter and cooler on the inside face than a single-layer dark door, so we recommend insulated construction for dark finishes." },
    ],
  },
  {
    slug: "wood-look-garage-doors",
    name: "Wood-Look Garage Doors",
    imageId: "door-wood",
    tagline: "Walnut, cedar, and oak finishes on steel or composite — without the upkeep",
    intro: [
      "Wood-look doors give the warmth of a stained wood door using steel or composite panels with a printed or embossed wood-grain finish. They hold their color for years without the sanding, staining, and sealing a real wood door needs in New England weather.",
      "Walnut, cedar, mahogany, and oak tones are common, in both traditional plank and modern flush layouts.",
    ],
    bestFor: [
      "Homes with natural wood siding, trim, or front doors",
      "Anyone who wants the wood look without annual maintenance",
      "Coastal and shaded lots where real wood weathers fastest",
    ],
    considerations: [
      "Printed finishes vary by manufacturer — see a sample in daylight before ordering.",
      "Composite overlays add weight; springs are sized to the finished door.",
    ],
    faqs: [
      { question: "Do wood-look doors fade?", answer: "Quality factory finishes hold color for many years. Like any exterior finish, full southern sun accelerates fading; we'll point you to lines with the best finish warranties from the manufacturer (terms are the manufacturer's, not ours)." },
    ],
  },
  {
    slug: "raised-panel-garage-doors",
    name: "Raised-Panel & Traditional Garage Doors",
    imageId: "after-white-raised",
    tagline: "The classic embossed-panel door in single-layer or insulated construction",
    intro: [
      "The raised-panel door is the most common garage door in Massachusetts: rows of embossed rectangular panels in white, almond, sandstone, or a darker color, with or without a top row of windows. It's available in every construction tier, from single-layer steel to full insulated sandwich panels.",
      "It matches most existing homes, comes in stock sizes with short lead times, and is usually the most economical replacement for a worn door of the same style.",
    ],
    bestFor: [
      "Direct replacements that should match the neighborhood",
      "Budget-conscious projects that still want insulation options",
      "Rental and multi-family properties",
    ],
    considerations: [
      "Short panels and long panels look different at a distance — match what the house has, or choose deliberately.",
      "Stock colors are fastest; custom colors add lead time.",
    ],
    faqs: [
      { question: "What's the difference between short-panel and long-panel doors?", answer: "Short panels are the narrow rectangles (usually four across on a single door); long panels are wider (two across). It's purely visual — most models offer both." },
    ],
  },
  {
    slug: "charcoal-and-dark-finish-garage-doors",
    name: "Charcoal & Dark-Finish Garage Doors",
    imageId: "door-charcoal",
    tagline: "Modern color on classic panel lines — the popular middle ground",
    intro: [
      "Charcoal, bronze, and black finishes on traditional recessed or raised panels are the most popular upgrade we install: the door keeps a familiar shape but reads as current, and it pairs with dark windows and trim without a full modern redesign.",
      "Most manufacturers offer these finishes across their insulated lines, so the color choice doesn't limit construction quality.",
    ],
    bestFor: [
      "Homes updating trim and windows to dark colors",
      "Colonials and capes that want a modern touch without a flush door",
      "Replacements where the neighborhood is mostly white doors and you want contrast",
    ],
    considerations: [
      "Dark doors show pollen and salt film sooner — an occasional rinse keeps them sharp.",
      "Insulated construction is recommended for dark finishes to keep panels flat in the sun.",
    ],
    faqs: [
      { question: "Will a dark door make my garage hotter?", answer: "The outside face gets warmer in the sun; an insulated door keeps that heat from reaching the inside face. For attached garages we pair dark finishes with insulated construction." },
    ],
  },
];

export const styleBySlug = (slug: string): DoorStyle | undefined => DOOR_STYLES.find((s) => s.slug === slug);
