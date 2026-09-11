import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/lib/site";
import { assetPath } from "@/lib/paths";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-charcoal">
      <div className="zebra-edge h-1 opacity-50" />
      <div className="shell grid gap-10 py-14 sm:gap-12 lg:grid-cols-12 lg:gap-8 lg:py-20">
        <div className="lg:col-span-5">
          <Link href="/" className="inline-flex items-center gap-3 sm:gap-3.5">
            <Image
              src={assetPath("/brand/logo-mono.png")}
              alt="ZEHARIA"
              width={158}
              height={163}
              className="h-12 w-auto sm:h-14"
            />
            <span className="font-serif text-xl tracking-[0.24em] text-cream uppercase sm:text-2xl sm:tracking-[0.28em]">
              {site.name}
            </span>
          </Link>
          <p className="mt-5 max-w-sm font-serif text-xl italic leading-snug text-cream sm:mt-6 sm:text-2xl">
            {site.motto}
          </p>
          <p className="mt-3 max-w-sm font-serif text-base italic leading-snug text-cream/80 sm:text-lg">
            {site.tagline}
          </p>
          <p className="mt-4 text-[0.65rem] tracking-[0.28em] text-brass uppercase">
            {site.meetingLine} · {site.philosophy}
          </p>
          <p className="mt-5 text-xs tracking-[0.2em] text-muted uppercase sm:mt-6">
            {site.cities}
          </p>
        </div>

        <div className="lg:col-span-3">
          <p className="eyebrow mb-5">Navigate</p>
          <ul className="space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted transition-colors hover:text-brass"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <p className="eyebrow mb-5">Private Contact</p>
          <p className="text-sm">
            <a
              href={`mailto:${site.email}`}
              className="break-all text-cream transition-colors hover:text-brass"
            >
              {site.email}
            </a>
          </p>
          <p className="mt-2 text-sm">
            <a
              href={site.phoneHref}
              className="text-muted transition-colors hover:text-brass"
            >
              {site.phone}
            </a>
          </p>
          <p className="mt-7 max-w-xs text-xs leading-relaxed text-muted/80 sm:mt-8">
            Fine art originals available by private inquiry. Fashion imagery is a
            conceptual vision lookbook — not a retail collection.
          </p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="shell flex flex-col gap-2 py-5 text-[0.7rem] text-muted/70 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} ZEHARIA. All rights reserved.</span>
          <span>Art &amp; vision by {site.founder}</span>
        </div>
      </div>
    </footer>
  );
}
