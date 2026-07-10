import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Moon, Sun, Download } from "lucide-react";
import { navSections, profile } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/useActiveSection";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 72;
  window.scrollTo({ top: y, behavior: "smooth" });
}

export function Navbar() {
  const active = useActiveSection(navSections.map((s) => s.id));
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    setLight(document.documentElement.classList.contains("light"));
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle("light", next);
    try { localStorage.setItem("theme", next ? "light" : "dark"); } catch {}
  };

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed inset-x-0 top-0 z-40 transition-all ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className={`glass gradient-border flex items-center justify-between rounded-full px-4 py-2 md:px-6 ${scrolled ? "shadow-[var(--shadow-soft)]" : ""}`}>
            <button
              onClick={() => scrollTo("home")}
              className="flex items-center gap-2 font-display text-sm font-semibold"
            >
              <span className="grid h-8 w-8 place-items-center rounded-lg gradient-border glass">
                <span className="text-gradient text-sm font-bold">S</span>
              </span>
              <span className="hidden sm:inline">Sai Ram Krishna</span>
            </button>

            <nav className="hidden items-center gap-1 md:flex">
              {navSections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className={`relative rounded-full px-3 py-1.5 text-sm transition-colors ${
                    active === s.id
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {active === s.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full"
                      style={{ background: "color-mix(in oklab, var(--brand-violet) 18%, transparent)" }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative">{s.label}</span>
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="grid h-9 w-9 place-items-center rounded-full glass gradient-border text-foreground/80 hover:text-foreground"
                aria-label="Toggle theme"
              >
                {light ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              </button>
              <a
                href={profile.resume}
                download
                className="hidden items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium text-primary-foreground sm:inline-flex"
                style={{ background: "var(--gradient-primary)" }}
              >
                <Download className="h-4 w-4" /> Resume
              </a>
              <button
                onClick={() => setOpen((v) => !v)}
                className="grid h-9 w-9 place-items-center rounded-full glass gradient-border md:hidden"
                aria-label="Menu"
              >
                {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-20 z-40 md:hidden"
          >
            <div className="glass gradient-border rounded-2xl p-3">
              {navSections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => { setOpen(false); scrollTo(s.id); }}
                  className={`block w-full rounded-lg px-3 py-2 text-left text-sm ${
                    active === s.id ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {s.label}
                </button>
              ))}
              <a
                href={profile.resume}
                download
                className="mt-2 flex items-center justify-center gap-2 rounded-lg py-2 text-sm font-medium text-primary-foreground"
                style={{ background: "var(--gradient-primary)" }}
              >
                <Download className="h-4 w-4" /> Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
