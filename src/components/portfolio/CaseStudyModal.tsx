import { AnimatePresence, motion } from "framer-motion";
import { X, Github, ExternalLink } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { useEffect } from "react";

export function CaseStudyModal({
  project, onClose,
}: { project: Project | null; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] grid place-items-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 250, damping: 26 }}
            onClick={(e) => e.stopPropagation()}
            className="glass gradient-border relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-background/80 p-6 sm:p-8"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full glass hover:bg-white/10"
            >
              <X className="h-4 w-4" />
            </button>

            <p className="text-xs font-medium uppercase tracking-[0.3em] text-gradient">Case Study</p>
            <h3 className="mt-2 font-display text-2xl font-bold sm:text-3xl">{project.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{project.tagline}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs">
                  {t}
                </span>
              ))}
            </div>

            {project.caseStudy && (
              <div className="mt-6 space-y-6 text-sm leading-relaxed">
                <Section title="Problem" body={project.caseStudy.problem} />
                <Section title="Solution" body={project.caseStudy.solution} />
                <Section title="Architecture" body={project.caseStudy.architecture} />
                {project.caseStudy.features && (
                  <div>
                    <h4 className="font-display text-base font-semibold">Key Features</h4>
                    <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                      {project.caseStudy.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 rounded-xl glass p-3 text-sm text-foreground/85">
                          <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "var(--gradient-primary)" }} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="grid gap-4 sm:grid-cols-2">
                  {project.caseStudy.ml && <MiniCard title="Machine Learning" body={project.caseStudy.ml} />}
                  {project.caseStudy.dashboard && <MiniCard title="Dashboard" body={project.caseStudy.dashboard} />}
                  {project.caseStudy.optimization && <MiniCard title="Optimization" body={project.caseStudy.optimization} />}
                  {project.caseStudy.forecasting && <MiniCard title="Forecasting" body={project.caseStudy.forecasting} />}
                </div>
              </div>
            )}

            <div className="mt-8 flex flex-wrap gap-2">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="glass gradient-border inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm hover:bg-white/5">
                  <Github className="h-4 w-4" /> GitHub
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>
                  <ExternalLink className="h-4 w-4" /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Section({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h4 className="font-display text-base font-semibold">{title}</h4>
      <p className="mt-1 text-muted-foreground">{body}</p>
    </div>
  );
}

function MiniCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl glass p-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-gradient">{title}</p>
      <p className="mt-1 text-sm text-muted-foreground">{body}</p>
    </div>
  );
}
