import { experience } from "@/data/portfolio";
import { Reveal } from "@/components/fx/Reveal";
import { SectionHeader } from "./About";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeader eyebrow="Experience" title="Where I've been shipping." />
        <div className="mt-14 space-y-5">
          {experience.map((e, i) => (
            <Reveal key={e.role + e.company} delay={i * 0.05}>
              <div className="glass gradient-border rounded-2xl p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-xl glass" style={{ color: "var(--brand-violet)" }}>
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold">{e.role}</h3>
                      <p className="text-sm text-muted-foreground">{e.company} · {e.location}</p>
                    </div>
                  </div>
                  <span className="rounded-full glass px-3 py-1 text-xs text-foreground/80">{e.period}</span>
                </div>
                <ul className="mt-4 space-y-2 pl-1 text-sm text-muted-foreground">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "var(--gradient-primary)" }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
