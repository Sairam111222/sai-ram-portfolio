# Portfolio for Chundru Sai Ram Krishna

A single-page dark premium portfolio with glassmorphism, gradient accents, and Framer Motion animations. Built on the project's TanStack Start + Tailwind v4 stack (not Vite+CRA, but same React + Tailwind + Framer Motion feel you asked for).

## Visual Direction

- **Theme:** Dark premium. Near-black base (`oklch(0.12 0.02 270)`), elevated glass surfaces with `backdrop-blur`, subtle 1px gradient borders.
- **Accents:** Violet → cyan → emerald gradient (`#8b5cf6 → #22d3ee → #10b981`) used sparingly for headings, buttons, and animated borders.
- **Background FX:** 2–3 slow-drifting animated blobs (blurred radial gradients), faint noise texture, subtle particle dots.
- **Typography:** Space Grotesk (headings) + Inter (body), tight tracking on display, generous line-height on body.
- **Motion:** Framer Motion fade+rise on scroll, tilt on project cards (via `whileHover` + rotateX/Y), typing animation in hero, mouse-glow radial spotlight following cursor (desktop only), scroll progress bar, back-to-top FAB.
- **Nav:** Sticky top glass navbar with active-section highlight via IntersectionObserver, mobile hamburger sheet.

## Sections (single route `/`)

1. **Hero** — Name, role ("AI & Full Stack Developer"), typing subtitle rotating through "AI Engineer / Full Stack Developer / Mobile Developer / ML Enthusiast", CTA buttons (View Work, Download Resume, Contact), social row (GitHub, LinkedIn, Email), scroll cue.
2. **About** — Short bio, current status (final year B.Tech CSE — Data Science & AI, Dr. M.G.R. Educational and Research Institute, CGPA 8.3, expected 2027), open-to-internships badge.
3. **Journey Timeline** — Intermediate (Sri Chaitanya, 86%, 2023) → B.Tech (2023–2027) → Internships → Now.
4. **Skills** — Grouped glass cards: Languages, Frontend, Mobile, AI/ML, Backend/DB, Cloud, Tools, Core CS. Animated badge chips with Lucide icons.
5. **Experience Timeline** — AllCloud (Mobile Dev Intern, Mar–Apr 2026) and Elevate Lab (Web Dev Intern, Sep–Nov 2025) with bullet impact points.
6. **Featured Project — AI-Driven Logistics Automation Platform** — Full case study card that opens a modal with Problem / Solution / Architecture / Tech Stack / Key Features / ML / Dashboard / Optimization / Forecasting.
7. **Projects Grid** — Expense Tracker (React Native), Bank Management System (Java + MySQL), AI Disease Risk Predictor. Tilt-on-hover cards, tech badges, GitHub + Live Demo buttons, "Case Study" opens modal.
8. **Certifications** — Oracle Generative AI, SIH Finalist, IBM Python & Java, TCS iON Career Edge, plus internship certificates. Glass cards with issuer + year.
9. **Statistics** — Animated counters: 4+ Projects, 2 Internships, 5+ Certifications, 8.3 CGPA.
10. **Resume** — Preview thumbnail + Download button (serves the uploaded PDF from `public/`).
11. **Contact** — Email (chundruram41@gmail.com), Phone (+91 7842732355), LinkedIn, GitHub, plus a simple mailto contact form.
12. **Footer** — Name, quick links, socials, built-with note.

## Extra Features

Scroll progress bar, back-to-top button, mouse-glow spotlight (desktop), custom cursor (desktop only via pointer media query), animated loading screen on first paint, responsive mobile menu, SEO + Open Graph metadata via route `head()`, favicon updated to a monogram "S".

Theme toggle: dark is the primary experience; toggle switches to a clean light variant using the same token system.

## Technical Details

- **Stack:** TanStack Start (already scaffolded) + Tailwind v4 + Framer Motion + Lucide React.
- **Install:** `bun add framer-motion` (Lucide is likely present; add if missing).
- **Fonts:** Loaded via `<link>` in `src/routes/__root.tsx` head (Google Fonts). Registered in `src/styles.css` via `@theme` `--font-display` / `--font-sans`.
- **Design tokens:** Extend `src/styles.css` `:root` and `.dark` with brand colors, gradient tokens (`--gradient-primary`, `--gradient-accent`), glass surface tokens, and elegant shadow tokens. All components use semantic tokens — no hardcoded hex in JSX.
- **Files:**
  - `src/routes/__root.tsx` — SEO meta (title "Sai Ram Krishna — AI & Full Stack Developer"), OG tags, font `<link>`, favicon.
  - `src/routes/index.tsx` — Composes all section components.
  - `src/components/portfolio/` — `Navbar.tsx`, `Hero.tsx`, `About.tsx`, `Journey.tsx`, `Skills.tsx`, `Experience.tsx`, `FeaturedProject.tsx`, `Projects.tsx`, `CaseStudyModal.tsx`, `Certifications.tsx`, `Stats.tsx`, `Resume.tsx`, `Contact.tsx`, `Footer.tsx`.
  - `src/components/fx/` — `AnimatedBackground.tsx` (blobs+particles), `MouseGlow.tsx`, `CustomCursor.tsx`, `ScrollProgress.tsx`, `BackToTop.tsx`, `LoadingScreen.tsx`, `SectionReveal.tsx` (reusable Framer wrapper).
  - `src/hooks/useActiveSection.ts`, `src/hooks/useHydrated.ts`.
  - `public/Sai_Ram_Krishna_Resume.pdf` — copied from upload for download.
  - `public/favicon.svg` — new monogram favicon; delete default `favicon.ico`.
- **Data:** Central `src/data/portfolio.ts` for projects, experience, skills, certifications so content is easy to edit.
- **Content sourced from resume:** phone, email, LinkedIn `sai-ram-krishna-ch-a212b6326`, GitHub `Sairam111222`, CGPA 8.3, dates as in resume.
- **Accessibility:** Semantic landmarks, one H1, focus-visible rings, `prefers-reduced-motion` respected for blobs/typing/cursor.
- **Performance:** Lazy-mount case study modals; particle canvas capped at low count; blobs are CSS-only.

## Out of Scope

- No backend / Lovable Cloud (contact form uses `mailto:`).
- No blog / CMS.
- No real "Live Demo" URLs unless you provide them — buttons will link to GitHub with a "Demo coming soon" tooltip where no URL exists.
