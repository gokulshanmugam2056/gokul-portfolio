import { Navigation } from "@/components/Navigation";
import { Hero as HeroSection } from "@/components/Hero";


const Hero = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        <HeroSection />
      </main>

    </div>
  );
};

export default Hero;