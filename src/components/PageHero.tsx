import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  surface?: "ink" | "paper";
  meta?: string;
};

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  align = "left",
  surface = "ink",
  meta,
}: Props) {
  const centered = align === "center";
  const paper = surface === "paper";

  return (
    <section
      className={`relative overflow-hidden border-b ${
        paper
          ? "border-border-paper bg-paper text-paper-ink"
          : "border-border bg-charcoal"
      }`}
    >
      <div className="zebra-edge absolute inset-x-0 top-0 h-1 opacity-50" />
      <div
        className={`shell py-14 sm:py-16 lg:py-24 ${
          centered ? "text-center" : ""
        }`}
      >
        <p
          className={
            paper
              ? "text-[0.625rem] tracking-[0.32em] text-brass-dim uppercase"
              : "eyebrow"
          }
        >
          {eyebrow}
        </p>
        <h1
          className={`mt-4 font-serif leading-[0.95] tracking-tight sm:mt-5 ${
            paper ? "text-paper-ink" : "text-cream"
          } ${
            centered
              ? "mx-auto max-w-4xl text-[2.5rem] sm:text-5xl lg:text-6xl"
              : "max-w-3xl text-[2.5rem] sm:text-5xl lg:text-[4.5rem]"
          }`}
        >
          {title}
        </h1>
        <div
          className={`my-6 h-px w-14 sm:my-7 sm:w-16 ${
            paper ? "bg-brass-dim" : "bg-brass"
          } ${centered ? "mx-auto" : ""}`}
        />
        {subtitle && (
          <p
            className={`text-[0.98rem] leading-[1.75] sm:text-lg ${
              paper ? "text-muted-on-paper" : "text-muted"
            } ${centered ? "mx-auto max-w-2xl" : "max-w-xl"}`}
          >
            {subtitle}
          </p>
        )}
        {meta && (
          <p
            className={`mt-5 text-[0.6rem] tracking-[0.24em] uppercase sm:mt-6 ${
              paper ? "text-brass-dim" : "text-brass"
            }`}
          >
            {meta}
          </p>
        )}
      </div>
    </section>
  );
}
