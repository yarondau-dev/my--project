export interface FashionLook {
  id: number;
  slug: string;
  title: string;
  file: string;
  imagePath: string;
  /** Editorial caption for curated placements */
  caption?: string;
}

/** look-016 is a brand logo sheet — never a garment look. */
const EXCLUDED_LOOK_IDS = new Set([16]);

/**
 * Home / Vision highlights — quality over quantity.
 * Prefer looks that clearly echo paint / canvas → garment.
 * Order is narrative, not numeric.
 */
export const HIGHLIGHT_LOOK_IDS = [
  8, // canvas behind matching tee — clearest story
  35, // gallery pants matching painting
  10, // shirt beside source painting
  25, // living room with large canvas
  1, // painterly clutch — luxury object
  6, // red/gold kaftan interior
  19, // dramatic abstract skirt
  23, // Mediterranean brushstroke dress
  22, // copper evening skirt
  7, // architectural editorial
  29, // Mediterranean suit
  18, // art→swim concept board
] as const;

export const fashionLooks: FashionLook[] = Array.from({ length: 35 }, (_, i) => {
  const id = i + 1;
  const padded = String(id).padStart(3, "0");
  const file = `look-${padded}.jpg`;
  return {
    id,
    slug: `look-${padded}`,
    title: `Look ${padded}`,
    file,
    imagePath: `/fashion/${file}`,
  };
}).filter((look) => !EXCLUDED_LOOK_IDS.has(look.id));

const CAPTIONS: Record<number, string> = {
  8: "Paint worn — the canvas stands behind the body",
  35: "Gallery continuum — garment as extension of the wall",
  10: "Source beside silhouette",
  25: "Domestic museum — art in the room, art on the body",
  1: "Object as canvas — clutch as miniature field",
  6: "Evening volume in pigment",
  19: "Skirt as field of gesture",
  23: "Brushstroke in light — Mediterranean stillness",
  22: "Copper evening — texture of paint, cut of cloth",
  7: "Architecture and stripe",
  29: "Suit as walking painting",
  18: "Study board — from pigment to swim",
};

export const fashionHighlights: FashionLook[] = HIGHLIGHT_LOOK_IDS.map((id) => {
  const look = fashionLooks.find((l) => l.id === id)!;
  return { ...look, caption: CAPTIONS[id] };
});

export function getFashionLook(slug: string): FashionLook | undefined {
  return fashionLooks.find((l) => l.slug === slug);
}
