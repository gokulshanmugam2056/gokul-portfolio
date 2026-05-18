import { Navigation } from "@/components/Navigation";
import { Achievements as AchievementsSection } from "@/components/Achievements";


const Achievements = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-16">
        <AchievementsSection />
      </main>

    </div>
  );
};

export default Achievements;