import { Navigation } from "@/components/Navigation";
import { About as AboutSection } from "@/components/About";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-16">
        <AboutSection />
      </main>

    </div>
  );
};

export default About;