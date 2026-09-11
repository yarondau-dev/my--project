import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import StoryBand from "@/components/StoryBand";
import { artworkImagePath, getArtworkBySlug } from "@/data/art";
import { fashionHighlights } from "@/data/fashion";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "The House",
  description:
    "The story of ZEHARIA — where art meets design. Wear the original. Founder Yair Zeharia, dual craft, and individuality within identity.",
};

const worlds = [
  {
    title: "Fine Art",
    body: "Original acrylic and charcoal works by Yair Zeharia. Each piece is a primary expression — gesture, presence, and narrative rendered by hand. The canvas is the source, not a mood board.",
    href: "/gallery",
    cta: "Visit the Gallery",
    label: "01 · Art",
  },
  {
    title: "Vision / Fashion",
    body: "From Canvas to Wear is a conceptual lookbook: fashion as art direction translated from the paintings. Design that honors its source — vision pending production, presented without retail pretence.",
    href: "/vision",
    cta: "See the Vision",
    label: "02 · Wear",
  },
  {
    title: "Partnership",
    body: "ZEHARIA seeks aligned partners, collectors, and collaborators across Paris and New York — those who understand a house built on dual craft and singular identity.",
    href: "/inquire",
    cta: "Begin an Inquiry",
    label: "03 · House",
  },
];

export default function TheHousePage() {
  const charcoal = getArtworkBySlug("into-you")!;
  const wear = fashionHighlights[1];

  return (
    <>
      <PageHero
        eyebrow="About the House"
        title="The House"
        subtitle={`ZEHARIA is not a shop. It is a brand house where art meets design — fine art and fashion vision as equal pillars. ${site.motto}`}
        surface="paper"
      />

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-12">
          <div className="border-b border-border px-5 py-14 sm:px-8 sm:py-16 lg:col-span-7 lg:border-r lg:border-b-0 lg:px-10 lg:py-24">
            <p className="eyebrow">Founder</p>
            <h2 className="display mt-3 text-4xl sm:text-5xl">{site.founder}</h2>
            <div className="brass-rule my-6 sm:my-7" />
            <div className="prose-house max-w-xl space-y-5">
              <p>
                Yair Zeharia works between the intimacy of the studio and the
                ambition of a house — painting and drawing as the source, then
                extending that language into a fashion vision that refuses to
                dilute the art.
              </p>
              <p>
                The canvases speak first: acrylic fields of motion and color,
                charcoal figures charged with presence. From those works arises
                a second chapter — garments imagined as wearable continuations
                of the same spirit.
              </p>
              <p>
                Anchored in {site.cities}, ZEHARIA addresses partners and
                collectors who seek substance over spectacle, and identity that
                does not erase the individual.
              </p>
            </div>
          </div>

          <div className="relative flex flex-col justify-between bg-charcoal px-5 py-14 sm:px-8 sm:py-16 lg:col-span-5 lg:px-10 lg:py-24">
            <div>
              <p className="eyebrow mb-5 sm:mb-6">Philosophy</p>
              <blockquote className="pull-quote text-[1.65rem] sm:text-3xl lg:text-4xl">
                “Individuality within identity — a shared stripe, never the same
                twice.”
              </blockquote>
            </div>
            <div className="mt-10 sm:mt-12">
              <div className="brass-rule mb-6" />
              <p className="leading-relaxed text-muted">
                The zebra is the emblem: belonging and distinction coexist. Art
                and fashion are not separate brands — they are two expressions
                of one signature. From Canvas to Wear is a path, not a slogan
                for commerce.
              </p>
              <Image
                src="/brand/logo-mono.png"
                alt=""
                width={120}
                height={124}
                className="mt-9 h-12 w-auto opacity-90 sm:mt-10 sm:h-14"
              />
            </div>
          </div>
        </div>
      </section>

      <StoryBand surface="paper" />

      {/* Visual dual craft */}
      <section className="border-b border-border bg-charcoal">
        <div className="shell section-pad !py-14 lg:!py-20">
          <div className="mb-10 text-center sm:mb-12">
            <p className="eyebrow">The Dual Craft</p>
            <h2 className="display mt-3 text-3xl sm:text-4xl">
              Source <span className="text-brass">→</span> Continuation
            </h2>
          </div>
          <div className="grid gap-5 sm:gap-6 lg:grid-cols-2 lg:gap-8">
            <Link href="/gallery" className="group">
              <div className="matte">
                <div className="frame relative aspect-[4/5] max-h-[520px]">
                  <Image
                    src={artworkImagePath(charcoal)}
                    alt={charcoal.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                </div>
              </div>
              <p className="mt-5 text-[0.6rem] tracking-[0.28em] text-brass uppercase">
                Fine Art · The Source
              </p>
              <h3 className="mt-2 font-serif text-2xl text-cream group-hover:text-brass">
                {charcoal.title}
              </h3>
            </Link>
            <Link href="/vision" className="group">
              <div className="matte">
                <div className="frame relative aspect-[4/5] max-h-[520px]">
                  <Image
                    src={wear.imagePath}
                    alt={wear.caption ?? wear.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                  <div className="absolute left-3 top-3 sm:left-4 sm:top-4">
                    <span className="badge-concept">
                      <span>Not for Sale</span>
                    </span>
                  </div>
                </div>
              </div>
              <p className="mt-5 text-[0.6rem] tracking-[0.28em] text-brass uppercase">
                Fashion Vision · The Continuation
              </p>
              <h3 className="mt-2 font-serif text-2xl text-cream group-hover:text-brass">
                From Canvas to Wear
              </h3>
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="shell section-pad !py-14 lg:!py-24">
          <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Structure</p>
              <h2 className="display mt-2 text-3xl sm:text-5xl">Three Worlds</h2>
            </div>
            <p className="max-w-xs text-sm text-muted">
              Equal weight. Clear intent. One house.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3 md:gap-5">
            {worlds.map((world) => (
              <article
                key={world.title}
                className="group relative flex flex-col border border-border bg-charcoal-soft p-7 sm:p-8 transition-colors hover:border-brass/40"
              >
                <p className="eyebrow">{world.label}</p>
                <h3 className="mt-4 font-serif text-2xl text-cream">
                  {world.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                  {world.body}
                </p>
                <Link href={world.href} className="link-arrow mt-8">
                  {world.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 lg:px-10 lg:py-24">
          <p className="pull-quote text-[1.45rem] sm:text-3xl lg:text-4xl">
            “Art that stands alone. Fashion that honors its source. A house for
            those who see both.”
          </p>
          <p className="mt-9 font-serif text-2xl italic text-brass-soft sm:mt-10 sm:text-3xl">
            {site.motto}
          </p>
          <p className="mt-7 text-[0.65rem] tracking-[0.3em] text-brass uppercase sm:mt-8">
            ZEHARIA · {site.cities}
          </p>
        </div>
      </section>
    </>
  );
}
