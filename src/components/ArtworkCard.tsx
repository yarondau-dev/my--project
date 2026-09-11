import Image from "next/image";
import Link from "next/link";
import type { Artwork } from "@/data/art";
import { artworkImagePath } from "@/data/art";

type Props = {
  artwork: Artwork;
  featured?: boolean;
};

export default function ArtworkCard({ artwork, featured = false }: Props) {
  return (
    <Link href={`/gallery/${artwork.slug}`} className="group block">
      <div className="matte">
        <div
          className={`frame relative ${
            featured ? "aspect-[16/10] sm:aspect-[5/3]" : "aspect-[4/5]"
          }`}
        >
          <Image
            src={artworkImagePath(artwork)}
            alt={artwork.title}
            fill
            className="object-cover object-top"
            sizes={
              featured
                ? "(max-width: 1024px) 100vw, 70vw"
                : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            }
            priority={featured}
          />
        </div>
      </div>
      <div
        className={`mt-4 px-0.5 ${
          featured ? "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-6" : ""
        }`}
      >
        <div>
          <p className="text-[0.6rem] tracking-[0.28em] text-brass uppercase">
            {artwork.series}
            {featured ? " · Featured" : ""}
          </p>
          <h3
            className={`mt-1.5 font-serif text-cream transition-colors group-hover:text-brass ${
              featured ? "text-2xl sm:text-3xl" : "text-xl"
            }`}
          >
            {artwork.title}
          </h3>
          <p className="mt-1.5 text-xs tracking-[0.12em] text-muted uppercase">
            {artwork.medium} · {artwork.dimensions}
          </p>
        </div>
        {featured && (
          <span className="hidden shrink-0 items-center gap-2 text-[0.65rem] tracking-[0.22em] text-brass uppercase sm:inline-flex">
            View work
            <span className="h-px w-8 bg-brass" />
          </span>
        )}
      </div>
    </Link>
  );
}
