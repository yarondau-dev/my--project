import type { Metadata } from "next";
import Image from "next/image";
import InquiryForm from "@/components/InquiryForm";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Private Inquiry",
  description:
    "Contact ZEHARIA for partnership, private art acquisition, and vision collaboration. Email and phone available.",
};

export default function InquirePage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Private Inquiry"
        subtitle="Partnership, acquisition, and collaboration — reach the house directly. Submissions open your email client; nothing is stored on this site."
      />

      <section className="shell section-pad !py-14 lg:!py-20">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <aside className="space-y-5 sm:space-y-6">
            <div className="relative overflow-hidden border border-border bg-charcoal p-7 sm:p-10">
              <div className="zebra-edge absolute inset-x-0 top-0 h-1 opacity-50" />
              <div className="mb-7 flex items-center gap-3 sm:mb-8">
                <Image
                  src="/brand/logo-mono.png"
                  alt=""
                  width={100}
                  height={103}
                  className="h-11 w-auto sm:h-12"
                />
                <span className="font-serif text-lg tracking-[0.22em] text-cream uppercase sm:text-xl">
                  {site.name}
                </span>
              </div>
              <p className="eyebrow">Direct</p>
              <p className="mt-5 font-serif text-2xl text-cream">Email</p>
              <a
                href={`mailto:${site.email}`}
                className="mt-2 block break-all text-sm text-muted transition-colors hover:text-brass"
              >
                {site.email}
              </a>
              <p className="mt-8 font-serif text-2xl text-cream">Telephone</p>
              <a
                href={site.phoneHref}
                className="mt-2 block text-sm text-muted transition-colors hover:text-brass"
              >
                {site.phone}
              </a>
              <div className="brass-rule my-7 sm:my-8" />
              <p className="text-xs tracking-[0.2em] text-brass uppercase">
                {site.cities}
              </p>
              <p className="mt-4 font-serif text-lg italic text-cream/85">
                {site.motto}
              </p>
            </div>
            <div className="border border-border p-7 sm:p-8">
              <p className="eyebrow">What we discuss</p>
              <ul className="mt-5 space-y-3 text-sm text-muted">
                <li className="flex gap-3">
                  <span className="text-brass">—</span>
                  Brand and production partnerships
                </li>
                <li className="flex gap-3">
                  <span className="text-brass">—</span>
                  Private acquisition of original art
                </li>
                <li className="flex gap-3">
                  <span className="text-brass">—</span>
                  Vision / fashion collaboration
                </li>
                <li className="flex gap-3">
                  <span className="text-brass">—</span>
                  Press and cultural programming
                </li>
              </ul>
            </div>
          </aside>

          <div className="border border-border bg-charcoal-soft/50 p-7 sm:p-10">
            <h2 className="font-serif text-2xl text-cream sm:text-3xl">
              Send an Inquiry
            </h2>
            <p className="mt-3 mb-7 max-w-md text-sm leading-relaxed text-muted sm:mb-8">
              Complete the fields below. Your mail client will open with a
              pre-filled message to {site.email}.
            </p>
            <InquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
