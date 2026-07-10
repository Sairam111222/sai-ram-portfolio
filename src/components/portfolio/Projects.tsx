import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Github, Sparkles } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import { Reveal } from "@/components/fx/Reveal";
import { SectionHeader } from "./About";
import { CaseStudyModal } from "./CaseStudyModal";

function TiltCard({ project, onOpen }: { project: Project; onOpen: (p: Project) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useTransform(my, [0, 1], [6, -6]);
  const ry = useTransform(mx, [0, 1], [-6, 6]);
  const rxs = useSpring(rx, { stiffness: 200, damping: 20 });
  const rys = useSpring(ry, { stiffness: 200, damping: 20 });

  const onMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };
  const onLeave = () => { mx.set(0.5); my.set(0.5); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rxs, rotateY: rys, transformPerspective: 1000 }}
      className="group relative h-full"
    >
      <div className="glass gradient-border relative h-full overflow-hidden rounded-2xl p-6 transition-shadow hover:shadow-[var(--shadow-glow)]">
        {project.featured && (
          <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full glass px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest" style={{ color: "var(--brand-cyan)" }}>
            <Sparkles className="h-3 w-3" /> Featured
          </span>
        )}
        <div className="flex items-start gap-3">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl" style={{ background: "var(--gradient-soft)", color: "var(--brand-violet)" }}>
            <ArrowUpRight className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold leading-tight">{project.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{project.tagline}</p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[11px] text-foreground/80">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          {project.caseStudy && (
            <button
              onClick={() => onOpen(project)}
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-primary-foreground"
              style={{ background: "var(--gradient-primary)" }}
            >
              Case study <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="glass inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs hover:bg-white/10">
              <Github className="h-3.5 w-3.5" /> Code
            </a>
          )}
          {project.demo ? (
            <a href={project.demo} target="_blank" rel="noreferrer" className="glass inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs hover:bg-white/10">
              <ArrowUpRight className="h-3.5 w-3.5" /> Live
            </a>
          ) : (
            <span className="glass inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs text-muted-foreground" title="Coming soon">
              Live demo soon
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function FeaturedProject({ onOpen }: { onOpen: (p: Project) => void }) {
  const featured = projects.find((p) => p.featured);
  if (!featured) return null;
  return (
    <section id="featured" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Featured Project" title="AI-Driven Logistics Automation" description="Machine learning + real-time dashboards + optimization — one platform." />
        <Reveal className="mt-14">
          <div className="grid gap-6 md:grid-cols-5">
            <div className="md:col-span-3">
              <TiltCard project={featured} onOpen={onOpen} />
            </div>
            <div className="glass gradient-border rounded-2xl p-6 md:col-span-2">
              <h3 className="font-display text-lg font-semibold">Why it matters</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Real logistics ops still juggle spreadsheets. This platform combines ML forecasting,
                route optimization, and live dashboards to give operators a single, decisive view.
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {[
                  { k: "Forecast horizon", v: "30 days" },
                  { k: "KPI tiles", v: "12+" },
                  { k: "Data stores", v: "MySQL" },
                  { k: "Interface", v: "React" },
                ].map((s) => (
                  <div key={s.k} className="rounded-xl glass p-3">
                    <p className="text-[11px] uppercase tracking-widest text-muted-foreground">{s.k}</p>
                    <p className="mt-1 font-display font-semibold">{s.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Projects() {
  const [open, setOpen] = useState<Project | null>(null);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <FeaturedProject onOpen={setOpen} />
        <div className="mx-auto mt-8 max-w-6xl">
          <SectionHeader eyebrow="More Projects" title="A few other things I've built." />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {others.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <TiltCard project={p} onOpen={setOpen} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
      <CaseStudyModal project={open} onClose={() => setOpen(null)} />
    </section>
  );
}
