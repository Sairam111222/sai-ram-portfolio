import { Github, Linkedin, Mail } from "lucide-react";
import { profile, navSections } from "@/data/portfolio";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 72;
  window.scrollTo({ top: y, behavior: "smooth" });
}

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="glass gradient-border grid gap-6 rounded-3xl p-6 sm:grid-cols-3 sm:p-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-lg gradient-border glass"><span className="text-gradient font-bold">S</span></span>
              <span className="font-display font-semibold">Sai Ram Krishna</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">AI & Full Stack Developer building useful, delightful software.</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Quick links</p>
            <div className="mt-3 grid grid-cols-2 gap-y-1 text-sm">
              {navSections.map((s) => (
                <button key={s.id} onClick={() => scrollTo(s.id)} className="text-left text-muted-foreground hover:text-foreground">
                  {s.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Elsewhere</p>
            <div className="mt-3 flex gap-2">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="glass grid h-9 w-9 place-items-center rounded-full hover:bg-white/5"><Github className="h-4 w-4" /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="glass grid h-9 w-9 place-items-center rounded-full hover:bg-white/5"><Linkedin className="h-4 w-4" /></a>
              <a href={`mailto:${profile.email}`} aria-label="Email" className="glass grid h-9 w-9 place-items-center rounded-full hover:bg-white/5"><Mail className="h-4 w-4" /></a>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">{profile.email}</p>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Chundru Sai Ram Krishna · Built with React, TanStack Start & Framer Motion.</p>
      </div>
    </footer>
  );
}
