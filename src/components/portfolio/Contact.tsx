import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal } from "@/components/fx/Reveal";
import { SectionHeader } from "./About";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Hi Sai Ram,%0D%0A%0D%0A${encodeURIComponent(form.message)}%0D%0A%0D%0A— ${encodeURIComponent(form.name)} (${encodeURIComponent(form.email)})`;
    window.location.href = `mailto:${profile.email}?subject=Hello from your portfolio&body=${body}`;
  };

  return (
    <section id="contact" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeader eyebrow="Contact" title="Let's build something." description="Best for internship offers, freelance projects, and interesting conversations." />
        <div className="mt-14 grid gap-6 md:grid-cols-5">
          <Reveal className="glass gradient-border rounded-3xl p-6 md:col-span-2">
            <div className="space-y-4 text-sm">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-3 rounded-xl glass p-3 hover:bg-white/5">
                <div className="grid h-9 w-9 place-items-center rounded-lg" style={{ background: "var(--gradient-soft)", color: "var(--brand-violet)" }}>
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Email</p>
                  <p className="font-medium">{profile.email}</p>
                </div>
              </a>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 rounded-xl glass p-3 hover:bg-white/5">
                <div className="grid h-9 w-9 place-items-center rounded-lg" style={{ background: "var(--gradient-soft)", color: "var(--brand-cyan)" }}>
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Phone</p>
                  <p className="font-medium">{profile.phone}</p>
                </div>
              </a>
              <div className="flex items-center gap-3 rounded-xl glass p-3">
                <div className="grid h-9 w-9 place-items-center rounded-lg" style={{ background: "var(--gradient-soft)", color: "var(--brand-emerald)" }}>
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Location</p>
                  <p className="font-medium">{profile.location}</p>
                </div>
              </div>
              <div className="flex gap-2 pt-2">
                <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="glass gradient-border grid h-10 w-10 place-items-center rounded-full hover:bg-white/5"><Github className="h-4 w-4" /></a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="glass gradient-border grid h-10 w-10 place-items-center rounded-full hover:bg-white/5"><Linkedin className="h-4 w-4" /></a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.05} className="glass gradient-border rounded-3xl p-6 md:col-span-3">
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">Name</span>
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-1 w-full rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm outline-none focus:border-white/30" />
                </label>
                <label className="block">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">Email</span>
                  <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-1 w-full rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm outline-none focus:border-white/30" />
                </label>
              </div>
              <label className="block">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Message</span>
                <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-1 w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm outline-none focus:border-white/30" />
              </label>
              <button type="submit" className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]" style={{ background: "var(--gradient-primary)" }}>
                <Send className="h-4 w-4" /> Send message
              </button>
              <p className="text-xs text-muted-foreground">Opens your mail app to send directly.</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
