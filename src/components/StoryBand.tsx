import { site } from "@/lib/site";

type Props = {
  surface?: "ink" | "paper";
  showMotto?: boolean;
};

/**
 * Strong “where art meets design” band —
 * Source language (canvas) → Continuation (body).
 */
export default function StoryBand({
  surface = "ink",
  showMotto = true,
}: Props) {
  const paper = surface === "paper";

  return (
    <section
      className={`border-b ${
        paper
          ? "border-border-paper bg-paper text-paper-ink"
          : "border-border bg-background"
      }`}
    >
      <div className="shell section-pad">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10 lg:items-start">
          <div className="lg:col-span-4">
            <p
              className={
                paper
                  ? "text-[0.625rem] tracking-[0.32em] text-brass-dim uppercase"
                  : "eyebrow"
              }
            >
              {site.meetingLine}
            </p>
            {showMotto && (
              <h2
                className={`mt-5 font-serif leading-[1.05] tracking-tight ${
                  paper ? "text-paper-ink" : "text-cream"
                } text-4xl sm:text-5xl lg:text-[3.25rem]`}
              >
                {site.motto}
              </h2>
            )}
            <div
              className={`my-7 h-px w-14 ${
                paper ? "bg-brass-dim/70" : "bg-brass"
              }`}
            />
            <p
              className={`font-serif text-xl italic leading-snug sm:text-2xl ${
                paper ? "text-brass-dim" : "text-brass-soft"
              }`}
            >
              {site.tagline}
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7 lg:col-start-6 lg:gap-12">
            <div>
              <p className="story-label">
                {paper ? (
                  <span className="text-brass-dim">01 · Source language</span>
                ) : (
                  "01 · Source language"
                )}
              </p>
              <p
                className={`mt-4 font-serif text-2xl leading-snug sm:text-[1.55rem] ${
                  paper ? "text-paper-ink" : "text-cream"
                }`}
              >
                {site.story.lead}
              </p>
              <p
                className={`mt-4 text-[0.98rem] leading-[1.8] ${
                  paper ? "text-muted-on-paper" : "text-muted"
                }`}
              >
                {site.story.source}
              </p>
            </div>
            <div>
              <p className="story-label">
                {paper ? (
                  <span className="text-brass-dim">02 · Continuation</span>
                ) : (
                  "02 · Continuation"
                )}
              </p>
              <p
                className={`mt-4 text-[0.98rem] leading-[1.8] ${
                  paper ? "text-muted-on-paper" : "text-muted"
                }`}
              >
                {site.story.continuation}
              </p>
              <p
                className={`mt-5 font-serif text-xl italic leading-snug sm:text-[1.35rem] ${
                  paper ? "text-paper-ink/90" : "text-cream/90"
                }`}
              >
                {site.story.close}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
