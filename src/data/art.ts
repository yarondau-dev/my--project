import catalog from "./catalog.json";
import { assetPath } from "@/lib/paths";

export type ArtSeries = "Acrylic" | "Charcoal";

export interface Artwork {
  slug: string;
  title: string;
  medium: string;
  dimensions: string;
  series: ArtSeries;
  file: string;
  note?: string;
}

export const artworks: Artwork[] = catalog as Artwork[];

/** Verified charcoal works — use for zebra-spirit / mono moments */
export const charcoalWorks = artworks.filter((a) => a.series === "Charcoal");

export function getArtworkBySlug(slug: string): Artwork | undefined {
  return artworks.find((a) => a.slug === slug);
}

export function getArtworksBySeries(series: ArtSeries | "All"): Artwork[] {
  if (series === "All") return artworks;
  return artworks.filter((a) => a.series === series);
}

export function artworkImagePath(artwork: Artwork): string {
  return assetPath(`/art/${artwork.file}`) + `?v=3`;
}
