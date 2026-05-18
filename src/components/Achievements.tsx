import { Card } from "@/components/ui/card";
import { Trophy, Heart, Award } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "SIH 2024 Finalist",
    description:
      "Developed intelligent platform for alumni-student interaction for Technical Education Department, Government of Rajasthan",
    color: "text-accent-teal",
  },
];

const extracurricular = [
  {
    icon: Award,
    category: "Sports",
    title: "Athletics Runner-up",
    description: "Runner-up in athletics match at Bannari Amman Institute of Technology",
    color: "text-accent-purple",
  },
  {
    icon: Heart,
    category: "Social Activities",
    title: "Swachhata Hi Seva 2023",
    description: "Certificate of Appreciation for contributing to Swachhata Hi Seva 2023 campaign",
    color: "text-accent-coral",
  },
  {
    icon: Heart,
    category: "LEO Club",
    title: "Community Service",
    description: "Active member of Lion's Club, contributing to community service and leadership events",
    color: "text-accent-teal",
  },
];

export const Achievements = () => {
  return (
    <section id="achievements" className="py-16 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-2 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">Achievements & Extracurricular</h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {/* Key Achievements */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-4">Key Achievements</h3>
            <div className="max-w-3xl mx-auto space-y-4">
              {achievements.map((achievement, index) => (
                <Card
                  key={achievement.title}
                  className="p-6 shadow-soft hover:shadow-medium transition-smooth hover:scale-105 cursor-pointer border-border/50"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex gap-4">
                    <div className={`${achievement.color} p-4 rounded-lg bg-muted flex-shrink-0`}>
                      <achievement.icon className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold">{achievement.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Extracurricular Activities */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-4">Extracurricular Activities</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {extracurricular.map((activity, index) => (
                <Card
                  key={activity.title}
                  className="p-6 shadow-soft hover:shadow-medium transition-smooth hover:scale-105 cursor-pointer border-border/50"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="space-y-4">
                    <div className={`${activity.color} p-3 rounded-lg bg-muted w-fit`}>
                      <activity.icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                        {activity.category}
                      </p>
                      <h4 className="text-lg font-bold">{activity.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {activity.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
 