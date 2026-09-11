"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background,border-color] duration-300 ${
        scrolled
          ? "border-border/90 bg-background/92 backdrop-blur-md"
          : "border-border/50 bg-background/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-3 sm:gap-6 sm:px-5 sm:py-3.5 lg:px-10">
        {/* Brand lockup: mono zebra mark + wordmark only */}
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-2.5 sm:gap-3.5"
          aria-label="ZEHARIA home"
        >
          <Image
            src="/brand/logo-mono.png"
            alt=""
            width={158}
            height={163}
            className="h-10 w-auto shrink-0 sm:h-12"
            priority
          />
          <div className="flex min-w-0 flex-col leading-none">
            <span className="font-serif text-[1.15rem] tracking-[0.22em] text-cream uppercase sm:text-[1.45rem] sm:tracking-[0.28em]">
              {site.name}
            </span>
            <span className="mt-1.5 hidden text-[0.55rem] tracking-[0.28em] text-muted uppercase sm:block">
              {site.cities}
            </span>
            <span className="mt-1 hidden text-[0.55rem] tracking-[0.22em] text-brass/80 italic sm:block">
              {site.motto}
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:gap-9 md:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-[0.68rem] tracking-[0.26em] uppercase transition-colors ${
                  active ? "text-brass" : "text-muted hover:text-cream"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute -bottom-2 left-0 right-0 h-px bg-brass" />
                )}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-11 w-11 shrink-0 items-center justify-center border border-border text-brass md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <div className="flex w-4 flex-col gap-1.5">
            <span
              className={`h-px w-full bg-current transition-transform ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span className={`h-px w-full bg-current ${open ? "opacity-0" : ""}`} />
            <span
              className={`h-px w-full bg-current transition-transform ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {open && (
        <nav
          className="fixed inset-x-0 bottom-0 top-[57px] z-40 overflow-y-auto border-t border-border bg-charcoal px-6 py-10 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-7">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-serif text-3xl tracking-[0.08em] text-cream"
                >
                  {item.label}
                </Link>
                {item.pillar && (
                  <p className="mt-1 text-[0.6rem] tracking-[0.22em] text-muted uppercase">
                    {item.pillar === "Art" ? "Fine Art" : "Fashion Vision"}
                  </p>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-12 border-t border-border pt-8">
            <p className="font-serif text-lg italic text-cream">{site.motto}</p>
            <p className="mt-3 text-[0.6rem] tracking-[0.28em] text-brass uppercase">
              {site.philosophy}
            </p>
            <p className="mt-2 text-[0.6rem] tracking-[0.22em] text-muted uppercase">
              {site.cities}
            </p>
          </div>
        </nav>
      )}
    </header>
  );
}
