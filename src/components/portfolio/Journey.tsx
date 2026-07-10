import { journey } from "@/data/portfolio";
import { Reveal } from "@/components/fx/Reveal";
import { SectionHeader } from "./About";

export function Journey() {
  return (
    <section id="journey" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeader eyebrow="Journey" title="A quick timeline." />
        <div className="relative mt-14">
          <div
            aria-hidden
            className="absolute left-4 top-0 bottom-0 w-px md:left-1/2"
            style={{ background: "linear-gradient(180deg, transparent, color-mix(in oklab, var(--brand-violet) 45%, transparent), transparent)" }}
          />
          <ol className="space-y-8">
            {journey.map((step, i) => {
              const left = i % 2 === 0;
              return (
                <Reveal
                  key={step.title}
                  delay={i * 0.05}
                  as="li"
                  className={`relative grid gap-4 md:grid-cols-2 md:gap-8 ${left ? "" : "md:[&>*:first-child]:col-start-2"}`}
                >
                  <div className={`${left ? "md:text-right md:pr-10" : "md:text-left md:pl-10 md:col-start-2"} pl-10 md:pl-0`}>
                    <div className="glass gradient-border rounded-2xl p-5">
                      <p className="text-xs font-semibold uppercase tracking-widest text-gradient">{step.year}</p>
                      <h3 className="mt-1 font-display text-lg font-semibold">{step.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                  <span
                    aria-hidden
                    className="absolute left-4 top-6 h-3 w-3 -translate-x-1/2 rounded-full md:left-1/2"
                    style={{ background: "var(--gradient-primary)", boxShadow: "0 0 0 4px color-mix(in oklab, var(--brand-violet) 20%, transparent)" }}
                  />
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
