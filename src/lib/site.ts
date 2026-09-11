export const site = {
  name: "ZEHARIA",
  tagline: "From Canvas to Wear",
  philosophy: "Individuality Within Identity",
  /**
   * Interim primary motto.
   * Swap this ONE string when the client supplies the final motto —
   * it flows to header, footer, home, vision, the house, and metadata.
   */
  motto: "Wear the original.",
  meetingLine: "Where art meets design",
  cities: "Paris · New York",
  email: "yair.zeharia@gmail.com",
  phone: "+1 (917) 480-6724",
  phoneHref: "tel:+19174806724",
  founder: "Yair Zeharia",
  description:
    "ZEHARIA is a luxury brand house where art meets design — fine art by Yair Zeharia and a conceptual fashion vision. Wear the original. From Canvas to Wear. Paris · New York.",
  manifestoLead: "Most fashion brands begin with a garment.",
  manifestoAnswer: "ZEHARIA begins with a work of art.",
  /** Sharpened brand story — canvas = source language → body = continuation */
  story: {
    lead: "The canvas is the source language.",
    source:
      "Color, stroke, and the tension of light and shadow are not mood. They are grammar — autonomous works that stand alone in the gallery.",
    continuation:
      "Fashion does not decorate that grammar. It continues it onto the body as limited, conceptual direction — presence worn, never retail.",
    body: "Color, stroke, and the tension of light and shadow are not decoration. They are a language carried onto the body. Fine art stands alone in the gallery. Fashion continues that same language as limited, conceptual direction — never a substitute for the work.",
    close:
      "Where art meets design is not a print on a tee. It is the original, carried in a person’s movement.",
  },
} as const;

export const nav = [
  { href: "/gallery", label: "Gallery", pillar: "Art" as const },
  { href: "/vision", label: "Vision", pillar: "Wear" as const },
  { href: "/the-house", label: "The House", pillar: null },
  { href: "/inquire", label: "Inquire", pillar: null },
] as const;

export function mailtoInquiry(subject?: string, body?: string): string {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const q = params.toString();
  return `mailto:${site.email}${q ? `?${q}` : ""}`;
}
