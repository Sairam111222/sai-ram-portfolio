import { skillGroups } from "@/data/portfolio";
import { Reveal } from "@/components/fx/Reveal";
import { SectionHeader } from "./About";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";

export function Skills() {
  return (
    <section id="skills" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Skills"
          title="The stack I ship with."
          description="Comfortable across languages, frameworks, and the AI toolchain."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((g, i) => {
            const Icon = (Icons as unknown as Record<string, LucideIcon>)[g.icon] ?? Icons.Code2;
            return (
              <Reveal key={g.title} delay={i * 0.04} className="group glass gradient-border rounded-2xl p-5 transition-transform hover:-translate-y-1">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl glass" style={{ color: "var(--brand-cyan)" }}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-base font-semibold">{g.title}</h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-foreground/85 transition-colors group-hover:border-white/20"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
