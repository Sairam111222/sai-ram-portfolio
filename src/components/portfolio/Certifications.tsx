import { Award } from "lucide-react";
import { certifications } from "@/data/portfolio";
import { Reveal } from "@/components/fx/Reveal";
import { SectionHeader } from "./About";

export function Certifications() {
  return (
    <section id="certifications" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Certifications" title="Learning that stuck." />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.04}>
              <div className="glass gradient-border h-full rounded-2xl p-5 transition-transform hover:-translate-y-1">
                <div className="flex items-start gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl glass" style={{ color: "var(--brand-emerald)" }}>
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold leading-tight">{c.title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{c.issuer} · {c.year}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
