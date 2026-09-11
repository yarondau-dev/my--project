import Image from "next/image";
import Link from "next/link";
import StoryBand from "@/components/StoryBand";
import {
  artworks,
  artworkImagePath,
  charcoalWorks,
  getArtworkBySlug,
} from "@/data/art";
import { fashionHighlights, fashionLooks } from "@/data/fashion";
import { mailtoInquiry, site } from "@/lib/site";

export default function HomePage() {
  const charcoalHero =
    getArtworkBySlug("breaking-point") ?? charcoalWorks[0] ?? artworks[0];
  const acrylicHero =
    getArtworkBySlug("purple-stream") ??
    artworks.find((a) => a.series === "Acrylic") ??
    artworks[0];
  const figurative =
    getArtworkBySlug("im-free") ?? artworks.find((a) => a.slug === "im-free")!;
  const intoYou = getArtworkBySlug("into-you")!;
  const behindYou = getArtworkBySlug("behind-you")!;
  const manOfPeace = getArtworkBySlug("a-man-of-peace")!;

  const wearLead = fashionHighlights[0];
  const wearGallery = fashionHighlights[1];
  const wearBeside = fashionHighlights[2];

  const journey = [
    {
      art: intoYou,
      look: wearLead,
      artLabel: "Source",
      wearLabel: "Continuation",
      line: "Gesture on paper becomes pigment on cloth.",
    },
    {
      art: acrylicHero,
      look: wearGallery,
      artLabel: "Field",
      wearLabel: "Silhouette",
      line: "The wall and the body share one language of color.",
    },
    {
      art: figurative,
      look: wearBeside,
      artLabel: "Presence",
      wearLabel: "Form",
      line: "Figure first — then the cut that carries her spirit.",
    },
  ];

  const homeLooks = fashionHighlights.slice(0, 8);

  return (
    <>
      {/* ——— Opening manifesto ——— */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="zebra-edge absolute inset-x-0 top-0 h-1 opacity-60" />
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-12">
          <div className="relative z-10 flex flex-col justify-center px-5 py-14 sm:px-8 sm:py-16 lg:col-span-5 lg:px-12 lg:py-24 xl:px-14">
            <p className="eyebrow">{site.cities}</p>
            <h1 className="display mt-5 text-[clamp(2.5rem,8vw,4.75rem)] sm:mt-6">
              From Canvas
              <br />
              <span className="italic text-brass-soft">to Wear</span>
            </h1>
            <div className="brass-rule my-7 sm:my-8" />
            <p className="text-[0.625rem] tracking-[0.32em] text-brass uppercase">
              {site.meetingLine}
            </p>
            <p className="mt-3 font-serif text-[1.75rem] italic leading-tight text-cream sm:text-4xl">
              {site.motto}
            </p>
            <p className="mt-7 max-w-md font-serif text-[1.35rem] leading-snug text-cream sm:mt-8 sm:text-[1.65rem]">
              {site.manifestoLead}
            </p>
            <p className="mt-2 max-w-md font-serif text-[1.35rem] italic leading-snug text-brass-soft sm:mt-3 sm:text-[1.65rem]">
              {site.manifestoAnswer}
            </p>
            <p className="lede mt-7 max-w-md sm:mt-8">
              Two equal pillars under one signature. Fine art by {site.founder} —
              the source. Fashion vision — the continuation. Concept, not
              commerce. {site.philosophy}.
            </p>
            <div className="mt-9 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
              <Link href="/gallery" className="btn-primary">
                Enter Gallery
              </Link>
              <Link href="/vision" className="btn-ghost">
                Explore Vision
              </Link>
            </div>
          </div>

          {/* Cinematic diptych */}
          <div className="relative lg:col-span-7">
            <div className="grid h-full min-h-[380px] grid-cols-2 sm:min-h-[420px] lg:min-h-[640px]">
              <Link
                href={`/gallery/${charcoalHero.slug}`}
                className="frame group relative border-r border-border"
              >
                <Image
                  src={artworkImagePath(charcoalHero)}
                  alt={charcoalHero.title}
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 50vw, 35vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 sm:p-6 lg:p-7">
                  <p className="text-[0.55rem] tracking-[0.28em] text-brass uppercase">
                    01 · Fine Art
                  </p>
                  <p className="mt-1.5 font-serif text-lg text-cream sm:text-2xl">
                    {charcoalHero.title}
                  </p>
                  <p className="mt-1 hidden text-[0.65rem] tracking-[0.18em] text-muted uppercase sm:block">
                    {charcoalHero.series} · The Source
                  </p>
                </div>
              </Link>
              <Link href="/vision" className="frame group relative">
                <Image
                  src={wearLead.imagePath}
                  alt="From Canvas to Wear — concept look"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 50vw, 35vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 sm:p-6 lg:p-7">
                  <span className="badge-concept mb-2 hidden sm:inline-flex">
                    <span>Not for Sale</span>
                  </span>
                  <p className="mt-0 text-[0.55rem] tracking-[0.28em] text-brass uppercase sm:mt-2">
                    02 · Fashion Vision
                  </p>
                  <p className="mt-1.5 font-serif text-lg text-cream sm:text-2xl">
                    Canvas on the body
                  </p>
                  <p className="mt-1 hidden text-[0.65rem] tracking-[0.18em] text-muted uppercase sm:block">
                    Concept · The Continuation
                  </p>
                </div>
              </Link>
            </div>
            <div
              className="pointer-events-none absolute inset-y-0 left-1/2 z-10 hidden -translate-x-1/2 lg:flex"
              aria-hidden
            >
              <div className="stitch-v h-full" />
            </div>
          </div>
        </div>
      </section>

      {/* ——— Dual pillars ——— */}
      <section className="border-b border-border bg-charcoal">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
          <article className="border-b border-border px-5 py-14 sm:px-8 sm:py-16 lg:border-r lg:border-b-0 lg:px-14 lg:py-20">
            <div className="flex items-baseline justify-between gap-4">
              <p className="eyebrow">World One</p>
              <span className="font-serif text-sm tracking-[0.2em] text-muted">
                01
              </span>
            </div>
            <h2 className="display mt-4 text-5xl sm:text-6xl lg:text-7xl">
              Art
            </h2>
            <p className="mt-3 font-serif text-xl italic text-brass-soft sm:text-2xl">
              Originals by {site.founder}
            </p>
            <Link
              href={`/gallery/${behindYou.slug}`}
              className="matte group mt-9 block w-full max-w-md sm:mt-10"
            >
              <div className="frame relative aspect-[4/5] max-h-[440px] w-full">
                <Image
                  src={artworkImagePath(behindYou)}
                  alt={behindYou.title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 90vw, 28vw"
                />
              </div>
            </Link>
            <div className="stitch my-7 w-16 sm:my-8" />
            <div className="prose-house max-w-md space-y-4">
              <p>
                The canvas is the source. Charcoal figures charged with presence;
                acrylic fields of motion and color — each work a primary
                expression, not a sketch for something else.
              </p>
              <p>
                Fine art at ZEHARIA is not illustration of a brand. It is the
                brand&apos;s first language.
              </p>
            </div>
            <Link href="/gallery" className="link-arrow mt-8">
              Enter the Gallery
            </Link>
          </article>

          <article className="px-5 py-14 sm:px-8 sm:py-16 lg:px-14 lg:py-20">
            <div className="flex items-baseline justify-between gap-4">
              <p className="eyebrow">World Two</p>
              <span className="font-serif text-sm tracking-[0.2em] text-muted">
                02
              </span>
            </div>
            <h2 className="display mt-4 text-5xl sm:text-6xl lg:text-7xl">
              Wear
            </h2>
            <p className="mt-3 font-serif text-xl italic text-brass-soft sm:text-2xl">
              From Canvas to Wear
            </p>
            <Link
              href="/vision"
              className="matte group mt-9 ml-auto block w-full max-w-md sm:mt-10"
            >
              <div className="frame relative aspect-[4/5] max-h-[440px] w-full">
                <Image
                  src={wearGallery.imagePath}
                  alt="Vision concept look in gallery"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 90vw, 28vw"
                />
                <div className="absolute left-3 top-3 sm:left-4 sm:top-4">
                  <span className="badge-concept">
                    <span>Not for Sale</span>
                  </span>
                </div>
              </div>
            </Link>
            <div className="stitch my-7 ml-auto w-16 sm:my-8" />
            <div className="prose-house ml-auto max-w-md space-y-4 lg:text-right">
              <p>
                Design begins where the painting leaves a question: what if the
                gesture could be worn? Silhouette, cut, and surface answer —
                fashion as art direction, not product line.
              </p>
              <p>
                Vision pending production. Presented without retail pretence —
                equal to the art, never a substitute for it.
              </p>
            </div>
            <Link href="/vision" className="link-arrow-rev mt-8 ml-auto">
              Explore Vision
            </Link>
          </article>
        </div>
      </section>

      {/* ——— Where art meets design ——— */}
      <StoryBand />

      {/* ——— Paper manifesto band ——— */}
      <section className="border-b border-border bg-paper text-paper-ink">
        <div className="shell section-pad">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <p className="text-[0.625rem] tracking-[0.32em] text-brass-dim uppercase">
                The House Language
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-[1.05] tracking-tight text-paper-ink sm:text-5xl lg:text-[3.25rem]">
                One house.
                <br />
                Two crafts.
                <br />
                <span className="italic">Equal weight.</span>
              </h2>
            </div>
            <div className="flex flex-col justify-end space-y-5 lg:col-span-6 lg:col-start-7">
              <p className="text-base leading-relaxed text-muted-on-paper sm:text-lg">
                Like the zebra, ZEHARIA holds a shared language of stripe and form —
                yet every line is singular. The paintings do not advertise the
                clothes. The clothes do not diminish the paintings.
              </p>
              <p className="text-base leading-relaxed text-muted-on-paper sm:text-lg">
                Together they tell a story obvious in five seconds: the canvas is
                the source; the garment is the continuation. Wear the original —
                not a print of convenience, but the language of the work, carried.
              </p>
              <Link
                href="/the-house"
                className="mt-2 inline-flex w-fit items-center gap-3 text-[0.65rem] tracking-[0.28em] text-brass-dim uppercase hover:text-paper-ink"
              >
                Discover The House
                <span className="h-px w-10 bg-current" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Journey: Canvas → Wear ——— */}
      <section className="border-b border-border">
        <div className="shell section-pad !py-14 lg:!py-24">
          <div className="mb-12 flex flex-col gap-4 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Editorial Journey</p>
              <h2 className="display mt-3 text-4xl sm:text-5xl">
                Canvas <span className="text-brass">→</span> Garment
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              Three paired frames. Paint first. Then the body that carries the
              idea.
            </p>
          </div>

          <div className="space-y-16 sm:space-y-20 lg:space-y-28">
            {journey.map((pair, i) => {
              const reverse = i % 2 === 1;
              return (
                <div
                  key={`${pair.art.slug}-${pair.look.slug}`}
                  className="grid items-center gap-8 lg:grid-cols-12 lg:gap-6"
                >
                  <div
                    className={`lg:col-span-5 ${
                      reverse ? "lg:order-3 lg:col-start-8" : ""
                    }`}
                  >
                    <Link
                      href={`/gallery/${pair.art.slug}`}
                      className="matte group mx-auto block w-full max-w-md"
                    >
                      <div className="frame relative aspect-[4/5] max-h-[420px] w-full">
                        <Image
                          src={artworkImagePath(pair.art)}
                          alt={pair.art.title}
                          fill
                          className="object-cover object-center"
                          sizes="(max-width: 1024px) 90vw, 30vw"
                        />
                      </div>
                    </Link>
                    <div className={`mt-5 max-w-md ${reverse ? "lg:ml-auto lg:text-right" : ""}`}>
                      <p className="text-[0.6rem] tracking-[0.28em] text-brass uppercase">
                        {pair.artLabel} · Fine Art
                      </p>
                      <h3 className="mt-1 font-serif text-2xl text-cream">
                        {pair.art.title}
                      </h3>
                      <p className="mt-1 text-xs tracking-wider text-muted uppercase">
                        {pair.art.series}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`flex flex-col items-center justify-center lg:col-span-2 ${
                      reverse ? "lg:order-2 lg:col-start-6" : "lg:col-start-6"
                    }`}
                  >
                    <p className="mb-3 max-w-[14rem] text-center font-serif text-sm italic leading-snug text-muted lg:hidden">
                      {pair.line}
                    </p>
                    <div className="hidden flex-col items-center lg:flex">
                      <div className="stitch-v h-14" />
                      <p className="my-4 max-w-[9rem] text-center font-serif text-sm italic leading-snug text-muted">
                        {pair.line}
                      </p>
                      <div className="stitch-v h-14" />
                    </div>
                  </div>

                  <div
                    className={`lg:col-span-5 ${
                      reverse ? "lg:order-1 lg:col-start-1" : "lg:col-start-8"
                    }`}
                  >
                    <Link
                      href="/vision"
                      className={`matte group mx-auto block w-full max-w-md ${
                        reverse ? "" : "lg:ml-auto"
                      }`}
                    >
                      <div className="frame relative aspect-[4/5] max-h-[420px] w-full">
                        <Image
                          src={pair.look.imagePath}
                          alt={pair.look.title}
                          fill
                          className="object-cover object-center"
                          sizes="(max-width: 1024px) 90vw, 30vw"
                        />
                      </div>
                    </Link>
                    <div
                      className={`mt-5 max-w-md ${
                        reverse ? "" : "lg:ml-auto lg:text-right"
                      }`}
                    >
                      <p className="text-[0.6rem] tracking-[0.28em] text-brass uppercase">
                        {pair.wearLabel} · Concept
                      </p>
                      <h3 className="mt-1 font-serif text-2xl text-cream">
                        {pair.look.caption?.split("—")[0]?.trim() ?? pair.look.title}
                      </h3>
                      <p className="mt-1 text-xs tracking-wider text-muted uppercase">
                        Not for sale
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ——— Curated vision strip ——— */}
      <section className="border-b border-border bg-charcoal">
        <div className="shell section-pad !py-14 lg:!py-20">
          <div className="mb-9 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Vision Highlights</p>
              <h2 className="display mt-3 text-3xl sm:text-4xl">
                Eight looks. Chosen for the story.
              </h2>
            </div>
            <div className="flex flex-col items-start gap-3 sm:items-end">
              <span className="badge-concept">
                <span>Not for Sale</span>
              </span>
              <Link href="/vision" className="link-arrow">
                Full lookbook
              </Link>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-4">
            {homeLooks.map((look, i) => (
              <figure
                key={look.slug}
                className={`group ${i === 0 || i === 5 ? "sm:col-span-2" : ""}`}
              >
                <div className="matte">
                  <div
                    className={`frame relative ${
                      i === 0 || i === 5 ? "aspect-[16/11]" : "aspect-[3/4]"
                    }`}
                  >
                    <Image
                      src={look.imagePath}
                      alt={look.caption ?? look.title}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                </div>
                <figcaption className="mt-3 flex items-start justify-between gap-3 px-0.5">
                  <span className="font-serif text-lg text-cream">{look.title}</span>
                  <span className="shrink-0 text-[0.55rem] tracking-[0.2em] text-brass uppercase">
                    Concept
                  </span>
                </figcaption>
                {look.caption && (
                  <p className="mt-1 px-0.5 text-xs leading-relaxed text-muted">
                    {look.caption}
                  </p>
                )}
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Dual destinations ——— */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
          <Link
            href="/gallery"
            className="group relative overflow-hidden border-b border-border px-5 py-14 sm:px-8 sm:py-16 lg:border-r lg:border-b-0 lg:px-14 lg:py-20"
          >
            <p className="eyebrow">{artworks.length} Originals</p>
            <h2 className="display mt-4 text-4xl sm:text-5xl">The Gallery</h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              Acrylic fields and charcoal presence — inquire for acquisition. The
              source of every stripe that follows.
            </p>
            <span className="link-arrow mt-8">Browse Art</span>
            <div className="pointer-events-none absolute inset-y-8 right-6 hidden w-32 opacity-30 sm:block lg:right-12 lg:w-44">
              <div className="matte h-full">
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src={artworkImagePath(manOfPeace)}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="180px"
                  />
                </div>
              </div>
            </div>
          </Link>
          <Link
            href="/vision"
            className="group relative overflow-hidden px-5 py-14 text-right sm:px-8 sm:py-16 lg:px-14 lg:py-20"
          >
            <span className="badge-concept ml-auto">
              <span>Not for Sale</span>
            </span>
            <h2 className="display mt-4 text-4xl sm:text-5xl">Vision Lookbook</h2>
            <p className="ml-auto mt-5 max-w-sm text-sm leading-relaxed text-muted">
              {fashionLooks.length} concept looks curated for partners —
              fashion as art direction, never a storefront.
            </p>
            <span className="link-arrow-rev mt-8 ml-auto">See Vision</span>
          </Link>
        </div>
      </section>

      {/* ——— Inquire ——— */}
      <section className="relative overflow-hidden">
        <div className="brass-rule-long absolute inset-x-0 top-1/2 opacity-30" />
        <div className="relative mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 lg:px-10 lg:py-32">
          <Image
            src="/brand/logo-mono.png"
            alt=""
            width={158}
            height={163}
            className="mx-auto mb-7 h-14 w-auto opacity-90 sm:mb-8 sm:h-16"
          />
          <p className="eyebrow">Partners & Collectors</p>
          <h2 className="display mt-4 text-4xl sm:text-5xl">Private Inquiry</h2>
          <p className="mx-auto mt-6 max-w-xl lede">
            For partnership, acquisition, and collaboration — reach the house
            directly. {site.cities}.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3 sm:mt-10 sm:gap-4">
            <a
              href={mailtoInquiry("ZEHARIA — Partner / Private Inquiry")}
              className="btn-primary"
            >
              Email Inquiry
            </a>
            <Link href="/inquire" className="btn-ghost">
              Inquiry Form
            </Link>
          </div>
          <p className="mt-6 text-sm text-muted">
            <a href={site.phoneHref} className="hover:text-brass">
              {site.phone}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
