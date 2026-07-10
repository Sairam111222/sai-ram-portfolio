import { Download, FileText, Eye } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal } from "@/components/fx/Reveal";
import { SectionHeader } from "./About";

export function Resume() {
  return (
    <section id="resume" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeader eyebrow="Résumé" title="Grab the full story." description="One page, everything a recruiter needs." />
        <Reveal className="mt-14">
          <div className="glass gradient-border flex flex-col items-center gap-6 rounded-3xl p-8 sm:flex-row sm:items-stretch sm:p-10">
            <div className="grid aspect-[3/4] w-40 shrink-0 place-items-center rounded-2xl border border-white/10" style={{ background: "var(--gradient-soft)" }}>
              <FileText className="h-14 w-14 text-foreground/80" />
            </div>
            <div className="flex flex-1 flex-col justify-center text-center sm:text-left">
              <h3 className="font-display text-xl font-semibold">Chundru Sai Ram Krishna — Résumé</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Latest version with internships at AllCloud & Elevate Lab, six certifications, and shipped projects.
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-2 sm:justify-start">
                <a href={profile.resume} download className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]" style={{ background: "var(--gradient-primary)" }}>
                  <Download className="h-4 w-4" /> Download PDF
                </a>
                <a href={profile.resume} target="_blank" rel="noreferrer" className="glass gradient-border inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm hover:bg-white/5">
                  <Eye className="h-4 w-4" /> Open in new tab
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
