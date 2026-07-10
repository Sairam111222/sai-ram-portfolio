import { createFileRoute } from "@tanstack/react-router";
import { AnimatedBackground } from "@/components/fx/AnimatedBackground";
import { MouseGlow } from "@/components/fx/MouseGlow";
import { CustomCursor } from "@/components/fx/CustomCursor";
import { ScrollProgress } from "@/components/fx/ScrollProgress";
import { BackToTop } from "@/components/fx/BackToTop";
import { LoadingScreen } from "@/components/fx/LoadingScreen";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Journey } from "@/components/portfolio/Journey";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";
import { Stats } from "@/components/portfolio/Stats";
import { Resume } from "@/components/portfolio/Resume";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen">
      <LoadingScreen />
      <AnimatedBackground />
      <MouseGlow />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Journey />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Stats />
      <Resume />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
