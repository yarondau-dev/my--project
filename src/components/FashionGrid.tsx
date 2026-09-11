import Image from "next/image";
import type { FashionLook } from "@/data/fashion";

/**
 * Magazine mosaic for curated highlights.
 * Packs cleanly in a 3-col grid (no row-span → no dead black cells):
 *   [2span][1] · [1][1][1] · [2span][1] · …
 * Archive uses a denser uniform multi-column grid.
 */
function cellClass(index: number, highlight: boolean): string {
  if (!highlight) return "";
  if (index % 5 === 0) return "sm:col-span-2";
  return "";
}

function aspectClass(index: number, highlight: boolean): string {
  if (!highlight) return "aspect-[3/4]";
  if (index % 5 === 0) return "aspect-[4/5] sm:aspect-[5/4]";
  return "aspect-[3/4]";
}

export default function FashionGrid({
  looks,
  highlight = false,
}: {
  looks: FashionLook[];
  highlight?: boolean;
}) {
  return (
    <div
      className={`grid gap-2 sm:gap-3 ${
        highlight
          ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
      }`}
    >
      {looks.map((look, i) => (
        <figure key={look.slug} className={`group ${cellClass(i, highlight)}`}>
          <div className={`matte h-full ${highlight ? "matte-dense" : ""}`}>
            <div className={`frame relative h-full ${aspectClass(i, highlight)}`}>
              <Image
                src={look.imagePath}
                alt={
                  look.caption
                    ? `${look.title} — ${look.caption}`
                    : `${look.title} — ZEHARIA Vision Collection concept`
                }
                fill
                className="object-cover object-center"
                sizes={
                  highlight
                    ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    : "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                }
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent p-3 sm:p-3.5">
                <figcaption className="flex items-end justify-between gap-2">
                  <div className="min-w-0">
                    <span className="font-serif text-base text-cream sm:text-lg">
                      {look.title}
                    </span>
                    {look.caption && (
                      <p className="mt-0.5 max-w-sm text-[0.68rem] leading-snug text-muted line-clamp-2">
                        {look.caption}
                      </p>
                    )}
                  </div>
                  <span className="shrink-0 text-[0.55rem] tracking-[0.2em] text-brass uppercase">
                    Concept
                  </span>
                </figcaption>
              </div>
            </div>
          </div>
        </figure>
      ))}
    </div>
  );
}
