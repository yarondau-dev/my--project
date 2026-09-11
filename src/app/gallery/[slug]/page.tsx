import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  artworks,
  artworkImagePath,
  getArtworkBySlug,
} from "@/data/art";
import { mailtoInquiry, site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return artworks.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const artwork = getArtworkBySlug(slug);
  if (!artwork) return { title: "Artwork" };
  return {
    title: artwork.title,
    description: `${artwork.title} — ${artwork.medium}, ${artwork.dimensions}. Original work by Yair Zeharia.`,
  };
}

export default async function ArtworkDetailPage({ params }: Props) {
  const { slug } = await params;
  const artwork = getArtworkBySlug(slug);
  if (!artwork) notFound();

  const index = artworks.findIndex((a) => a.slug === slug);
  const prev = artworks[(index - 1 + artworks.length) % artworks.length];
  const next = artworks[(index + 1) % artworks.length];

  return (
    <section className="shell py-8 sm:py-10 lg:py-16">
      <Link
        href="/gallery"
        className="inline-flex items-center gap-3 text-[0.65rem] tracking-[0.22em] text-muted uppercase hover:text-brass"
      >
        <span className="h-px w-6 bg-current" />
        Gallery
      </Link>

      <div className="mt-6 grid gap-8 sm:mt-8 lg:grid-cols-12 lg:items-start lg:gap-14">
        <div className="lg:col-span-8">
          <div className="matte">
            <div className="frame relative bg-charcoal">
              <Image
                src={artworkImagePath(artwork)}
                alt={artwork.title}
                width={1400}
                height={1750}
                className="h-auto w-full object-cover object-top"
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
            </div>
          </div>
        </div>

        <aside className="flex flex-col lg:sticky lg:top-28 lg:col-span-4">
          <p className="eyebrow">{artwork.series} Series</p>
          <h1 className="display mt-3 text-3xl sm:mt-4 sm:text-5xl">
            {artwork.title}
          </h1>
          <div className="brass-rule my-6 sm:my-7" />
          <dl className="space-y-5 text-sm">
            <div>
              <dt className="text-[0.6rem] tracking-[0.2em] text-muted uppercase">
                Medium
              </dt>
              <dd className="mt-1.5 text-foreground">{artwork.medium}</dd>
            </div>
            <div>
              <dt className="text-[0.6rem] tracking-[0.2em] text-muted uppercase">
                Dimensions
              </dt>
              <dd className="mt-1.5 text-foreground">{artwork.dimensions}</dd>
            </div>
            <div>
              <dt className="text-[0.6rem] tracking-[0.2em] text-muted uppercase">
                Artist
              </dt>
              <dd className="mt-1.5 text-foreground">{site.founder}</dd>
            </div>
          </dl>
          <p className="mt-7 text-sm leading-relaxed text-muted sm:mt-8">
            Original work from the ZEHARIA archive. For private acquisition,
            contact the house.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:mt-8">
            <a
              href={mailtoInquiry(
                `ZEHARIA Art Inquiry — ${artwork.title}`,
                `I am interested in learning more about "${artwork.title}" (${artwork.medium}, ${artwork.dimensions}).`
              )}
              className="btn-primary"
            >
              Inquire About This Work
            </a>
            <Link href="/gallery" className="btn-ghost">
              All Works
            </Link>
          </div>
        </aside>
      </div>

      <div className="mt-12 flex items-start justify-between gap-4 border-t border-border pt-7 sm:mt-16 sm:items-center sm:pt-8">
        <Link
          href={`/gallery/${prev.slug}`}
          className="group min-w-0 flex-1 text-sm text-muted hover:text-brass"
        >
          <span className="block text-[0.55rem] tracking-[0.22em] uppercase opacity-70">
            Previous
          </span>
          <span className="mt-1 block truncate font-serif text-base text-cream group-hover:text-brass sm:text-lg">
            ← {prev.title}
          </span>
        </Link>
        <Link
          href={`/gallery/${next.slug}`}
          className="group min-w-0 flex-1 text-right text-sm text-muted hover:text-brass"
        >
          <span className="block text-[0.55rem] tracking-[0.22em] uppercase opacity-70">
            Next
          </span>
          <span className="mt-1 block truncate font-serif text-base text-cream group-hover:text-brass sm:text-lg">
            {next.title} →
          </span>
        </Link>
      </div>
    </section>
  );
}
