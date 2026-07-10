import { GraduationCap, MapPin, Sparkles } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal } from "@/components/fx/Reveal";

export function SectionHeader({
  eyebrow, title, description,
}: { eyebrow: string; title: string; description?: string }) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-medium uppercase tracking-[0.3em] text-gradient">{eyebrow}</p>
      <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">{title}</h2>
      {description && (
        <p className="mt-4 text-base text-muted-foreground">{description}</p>
      )}
    </Reveal>
  );
}

export function About() {
  return (
    <section id="about" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="About"
          title="Building things that ship."
          description="I'm a third-year CSE student focused on AI, full stack, and mobile. I love turning messy problems into fast, elegant products."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <Reveal delay={0.05} className="glass gradient-border rounded-2xl p-6 md:col-span-2">
            <div className="flex items-start gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl glass" style={{ color: "var(--brand-violet)" }}>
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold">Who I am</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  I ship across the stack — from React and React Native front-ends to Python
                  ML pipelines and REST APIs. Two internships in, six certifications deep,
                  and consistently curious. I care about clean architecture, fast interfaces,
                  and useful AI.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="glass gradient-border rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl glass" style={{ color: "var(--brand-cyan)" }}>
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold">Education</h3>
            </div>
            <p className="mt-3 text-sm font-medium">{profile.education.degree}</p>
            <p className="text-sm text-muted-foreground">{profile.education.school}</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              <span className="rounded-full glass px-2.5 py-1">CGPA {profile.education.cgpa}</span>
              <span className="rounded-full glass px-2.5 py-1">{profile.education.graduation}</span>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="glass gradient-border rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl glass" style={{ color: "var(--brand-emerald)" }}>
                <MapPin className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold">Based in</h3>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">India · Open to remote & relocation for internships worldwide.</p>
          </Reveal>

          <Reveal delay={0.2} className="glass gradient-border rounded-2xl p-6 md:col-span-2">
            <h3 className="font-display text-lg font-semibold">What I'm looking for</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Software Engineering, AI/ML, Full Stack, or Mobile internships where I can
              own real problems, learn from strong engineers, and ship product that users
              actually feel.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
