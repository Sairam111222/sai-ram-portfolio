import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { profile, roles } from "@/data/portfolio";
import { useEffect, useState } from "react";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 72;
  window.scrollTo({ top: y, behavior: "smooth" });
}

function Typer() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = roles[i % roles.length];
    const speed = del ? 40 : 80;
    const t = setTimeout(() => {
      if (!del) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDel(true), 1200);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") { setDel(false); setI((v) => v + 1); }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i]);

  return (
    <span className="text-gradient">
      {text}
      <span className="ml-0.5 inline-block h-6 w-[2px] translate-y-1 animate-pulse" style={{ background: "var(--brand-cyan)" }} />
    </span>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center px-4 pt-28">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto inline-flex items-center gap-2 rounded-full glass gradient-border px-3 py-1 text-xs text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" style={{ background: "var(--brand-emerald)" }} />
            <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: "var(--brand-emerald)" }} />
          </span>
          {profile.status}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          Hi, I'm <span className="text-gradient">Sai Ram Krishna</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-5 text-lg text-muted-foreground sm:text-xl"
        >
          I build as a <Typer />
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <button
            onClick={() => scrollTo("projects")}
            className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
            style={{ background: "var(--gradient-primary)" }}
          >
            <Sparkles className="h-4 w-4" /> View my work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <a
            href={profile.resume}
            download
            className="glass gradient-border inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-foreground hover:bg-white/5"
          >
            <Download className="h-4 w-4" /> Download Résumé
          </a>
          <button
            onClick={() => scrollTo("contact")}
            className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-foreground hover:bg-white/5"
          >
            <Mail className="h-4 w-4" /> Contact me
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          {[
            { href: profile.github, icon: Github, label: "GitHub" },
            { href: profile.linkedin, icon: Linkedin, label: "LinkedIn" },
            { href: `mailto:${profile.email}`, icon: Mail, label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              aria-label={label}
              className="glass gradient-border grid h-10 w-10 place-items-center rounded-full text-foreground/80 transition-all hover:-translate-y-0.5 hover:text-foreground"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1, y: { repeat: Infinity, duration: 1.8 } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-muted-foreground"
      >
        Scroll ↓
      </motion.button>
    </section>
  );
}
