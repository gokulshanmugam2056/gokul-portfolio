import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Achievements } from "@/components/Achievements";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        <Hero />
        <About />
        <Projects />
        <Achievements />
      </main>

      {/* ❌ NO FOOTER HERE */}
    </div>
  );
};

export default Index;