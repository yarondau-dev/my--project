"use client";

import { useMemo, useState } from "react";
import type { Artwork, ArtSeries } from "@/data/art";
import ArtworkCard from "./ArtworkCard";

type Filter = "All" | ArtSeries;

const filters: Filter[] = ["All", "Charcoal", "Acrylic"];

function pickFeatured(list: Artwork[]): { featured: Artwork | undefined; rest: Artwork[] } {
  if (list.length === 0) return { featured: undefined, rest: [] };
  const preferred =
    list.find((a) => a.slug === "breaking-point") ??
    list.find((a) => a.slug === "into-you") ??
    list.find((a) => a.series === "Charcoal") ??
    list[0];
  return {
    featured: preferred,
    rest: list.filter((a) => a.slug !== preferred.slug),
  };
}

export default function GalleryFilter({ artworks }: { artworks: Artwork[] }) {
  const [active, setActive] = useState<Filter>("All");

  const filtered = useMemo(() => {
    if (active === "All") return artworks;
    return artworks.filter((a) => a.series === active);
  }, [active, artworks]);

  const { featured, rest } = useMemo(() => pickFeatured(filtered), [filtered]);

  return (
    <div>
      <div className="mb-10 flex flex-wrap items-center gap-2.5 border-b border-border pb-7 sm:mb-12 sm:gap-3 sm:pb-8">
        <p className="mr-1 text-[0.6rem] tracking-[0.28em] text-muted uppercase sm:mr-2">
          Medium
        </p>
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActive(f)}
            className={`min-h-10 px-4 py-2 text-[0.65rem] tracking-[0.22em] uppercase transition-colors sm:px-5 ${
              active === f
                ? "border border-brass text-brass"
                : "border border-border text-muted hover:border-brass-dim hover:text-brass-soft"
            }`}
          >
            {f}
          </button>
        ))}
        <span className="ml-auto hidden text-[0.6rem] tracking-[0.2em] text-muted uppercase sm:inline">
          {filtered.length} {filtered.length === 1 ? "work" : "works"}
        </span>
      </div>

      {featured && (
        <div className="mb-10 sm:mb-12">
          <ArtworkCard artwork={featured} featured />
        </div>
      )}

      {rest.length > 0 && (
        <div className="grid gap-x-4 gap-y-10 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-7 lg:gap-y-14">
          {rest.map((artwork) => (
            <ArtworkCard key={artwork.slug} artwork={artwork} />
          ))}
        </div>
      )}

      {filtered.length === 0 && (
        <p className="py-16 text-center text-muted">No works in this series.</p>
      )}
    </div>
  );
}
