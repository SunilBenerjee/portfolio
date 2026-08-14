import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Stats } from "@/components/Stats";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { EngineeringHighlights } from "@/components/EngineeringHighlights";
import { ProblemSolving } from "@/components/ProblemSolving";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Stats />
        <Experience />
        <Projects />
        <EngineeringHighlights />
        <ProblemSolving />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
