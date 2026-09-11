import type { Metadata } from "next";
import GalleryFilter from "@/components/GalleryFilter";
import PageHero from "@/components/PageHero";
import { artworks } from "@/data/art";

export const metadata: Metadata = {
  title: "Fine Art Gallery",
  description:
    "Browse original acrylic and charcoal works by Yair Zeharia — the ZEHARIA fine art gallery.",
};

export default function GalleryPage() {
  const charcoalCount = artworks.filter((a) => a.series === "Charcoal").length;
  const acrylicCount = artworks.filter((a) => a.series === "Acrylic").length;

  return (
    <>
      <PageHero
        eyebrow="World One · Fine Art"
        title={
          <>
            The
            <br />
            Gallery
          </>
        }
        subtitle={`${artworks.length} original works by Yair Zeharia — charcoal presence and acrylic fields. Filter by medium. Inquire to acquire.`}
        meta={`${charcoalCount} Charcoal · ${acrylicCount} Acrylic`}
      />
      <section className="shell section-pad !py-12 sm:!py-14 lg:!py-20">
        <GalleryFilter artworks={artworks} />
      </section>
    </>
  );
}
