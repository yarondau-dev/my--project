import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FashionGrid from "@/components/FashionGrid";
import PageHero from "@/components/PageHero";
import StoryBand from "@/components/StoryBand";
import { getArtworkBySlug, artworkImagePath } from "@/data/art";
import { fashionHighlights, fashionLooks } from "@/data/fashion";
import { mailtoInquiry, site } from "@/lib/site";
import { assetPath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Vision Collection",
  description:
    "ZEHARIA Vision Collection — Wear the original. From Canvas to Wear. A conceptual fashion lookbook (not for sale) where art meets design.",
};

export default function VisionPage() {
  const sourceArt =
    getArtworkBySlug("purple-stream") ?? getArtworkBySlug("phosphorus")!;
  const lead = fashionHighlights[0];
  const archive = fashionLooks.filter(
    (l) => !fashionHighlights.some((h) => h.id === l.id)
  );

  return (
    <>
      <PageHero
        eyebrow="World Two · Concept"
        title={
          <>
            Vision
            <br />
            Collection
          </>
        }
        subtitle={`${site.motto} ${site.tagline} — directional looks that translate the language of the canvas into wearable presence. Vision pending production. Presented for partners, not retail.`}
        meta={`${fashionHighlights.length} curated highlights · ${fashionLooks.length} total concept looks`}
      />

      <StoryBand surface="ink" />

      {/* Story: source → garment */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-12">
          <div className="frame relative min-h-[300px] border-b border-border sm:min-h-[360px] lg:col-span-5 lg:min-h-[520px] lg:border-r lg:border-b-0">
            <Image
              src={artworkImagePath(sourceArt)}
              alt={sourceArt.title}
              fill
              className="object-cover object-center opacity-95"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/35 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 sm:p-8 lg:p-10">
              <p className="eyebrow">The Source</p>
              <h2 className="mt-2 font-serif text-2xl text-cream sm:text-3xl">
                {sourceArt.title}
              </h2>
              <p className="mt-1 text-xs tracking-wider text-muted uppercase">
                {sourceArt.series}
              </p>
            </div>
          </div>
          <div className="frame relative min-h-[300px] sm:min-h-[360px] lg:col-span-7 lg:min-h-[520px]">
            <Image
              src={lead.imagePath}
              alt={lead.caption ?? lead.title}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 flex w-full flex-col gap-3 p-6 sm:p-8 lg:flex-row lg:items-end lg:justify-between lg:p-10">
              <div>
                <p className="eyebrow">The Continuation</p>
                <h2 className="mt-2 font-serif text-2xl text-cream sm:text-3xl">
                  Paint on the body
                </h2>
                <p className="mt-2 max-w-md text-sm text-muted">{lead.caption}</p>
              </div>
              <span className="badge-concept">
                <span>Not for Sale</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-paper text-paper-ink">
        <div className="mx-auto max-w-[900px] px-5 py-14 text-center sm:px-8 lg:py-20">
          <p className="text-[0.625rem] tracking-[0.32em] text-brass-dim uppercase">
            Honest Stage
          </p>
          <p className="mt-5 font-serif text-2xl leading-snug text-paper-ink sm:mt-6 sm:text-3xl">
            Each frame is art direction, not a product listing. There is no cart,
            no checkout, and no claim of current production.
          </p>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-muted-on-paper sm:mt-6">
            ZEHARIA shares this lookbook to invite partnership toward realizing
            the vision with integrity — fashion that honors its source.
          </p>
        </div>
      </section>

      <section className="shell section-pad !py-12 lg:!py-16">
        <div className="mb-7 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Curated Highlights</p>
            <h2 className="display mt-2 text-3xl sm:text-4xl">
              Looks that echo the canvas
            </h2>
          </div>
          <div className="flex flex-col items-start gap-3 sm:items-end">
            <span className="badge-concept">
              <span>Not for Sale</span>
            </span>
            <p className="max-w-xs text-sm text-muted sm:text-right">
              Twelve frames chosen for the paint-to-garment relationship —
              quality over quantity.
            </p>
          </div>
        </div>
        <FashionGrid looks={fashionHighlights} highlight />
      </section>

      <section className="border-t border-border bg-charcoal">
        <div className="shell section-pad !py-12 lg:!py-16">
          <div className="mb-7 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Full Concept Archive</p>
              <h2 className="display mt-2 text-3xl">Remaining looks</h2>
            </div>
            <p className="text-[0.6rem] tracking-[0.22em] text-muted uppercase">
              {archive.length} additional · look-016 excluded · Concept
            </p>
          </div>
          <FashionGrid looks={archive} />
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 lg:px-10 lg:py-20">
          <Image
            src={assetPath("/brand/logo-mono.png")}
            alt=""
            width={120}
            height={124}
            className="mx-auto mb-6 h-12 w-auto opacity-90"
          />
          <h2 className="display text-3xl sm:text-4xl">
            Realize the Vision Together
          </h2>
          <div className="brass-rule mx-auto my-7" />
          <p className="lede mx-auto max-w-lg">
            For production partners, stylists, and investors interested in
            bringing From Canvas to Wear into the world.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
            <a
              href={mailtoInquiry("ZEHARIA — Vision / Fashion Collaboration")}
              className="btn-primary"
            >
              Partner Inquiry
            </a>
            <Link href="/inquire" className="btn-ghost">
              Full Inquiry Form
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
