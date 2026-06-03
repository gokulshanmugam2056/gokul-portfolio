import { Card } from "@/components/ui/card";
import {
  Code2,
  Globe,
  Database,
} from "lucide-react";

const programmingSkills = [
  { name: "C", level: 85 },
  { name: "Java", level: 80 },
  { name: "JavaScript", level: 70 },
  { name: "TypeScript", level: 70 },
];

const webSkills = [
  { name: "HTML5", level: 90 },
  { name: "CSS3", level: 90 },
  { name: "React.js", level: 85 },
  { name: "Tailwind CSS", level: 80 },
  { name: "Node.js", level: 70 },
  { name: "Express.js", level: 70 },
  { name: "PHP", level: 70 },
  { name: "Apache", level: 70 },
  { name: "Supabase", level: 70 },
];

const dbSkills = [
  { name: "MySQL", level: 85 },
  { name: "MongoDB", level: 80 },
  { name: "PostgreSQL", level: 70 },
];

// Skill UI
const SkillItem = ({ name, level }: { name: string; level: number }) => {
  const getLevelText = (level: number) => {
    if (level >= 90) return "Expert";
    if (level >= 75) return "Advanced";
    if (level >= 60) return "Intermediate";
    return "Beginner";
  };

  return (
    <div className="space-y-1">
      <div className="flex justify-between text-foreground font-medium text-sm">
        <span>{name}</span>
        <span className="text-muted-foreground">
          {getLevelText(level)}
        </span>
      </div>

      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gray-400 rounded-full"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
};

export const About = () => {
  return (
    <section id="about" className="py-12 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <div className="text-center space-y-3 mb-3">
          <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full"></div>
        </div>

        {/* OVERVIEW */}
        <div className="max-w-4xl mx-auto mb-14 text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I am a passionate Full Stack Developer focused on building modern,
            scalable and responsive web applications with clean UI, strong backend logic,
            and efficient database management.
          </p>
        </div>

        {/* SKILLS */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">

          {/* Programming */}
          <Card className="p-6 shadow-soft">
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="w-6 h-6 text-accent-teal" />
              <h4 className="font-bold text-lg">Programming Languages</h4>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {programmingSkills.map((s) => (
                <SkillItem key={s.name} name={s.name} level={s.level} />
              ))}
            </div>
          </Card>

          {/* Web */}
          <Card className="p-6 shadow-soft">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-6 h-6 text-accent-purple" />
              <h4 className="font-bold text-lg">Web & Backend Technologies</h4>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {webSkills.map((s) => (
                <SkillItem key={s.name} name={s.name} level={s.level} />
              ))}
            </div>
          </Card>

          {/* Database */}
          <Card className="p-6 shadow-soft md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Database className="w-6 h-6 text-accent-coral" />
              <h4 className="font-bold text-lg">Database</h4>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {dbSkills.map((s) => (
                <SkillItem key={s.name} name={s.name} level={s.level} />
              ))}
            </div>
          </Card>

        </div>
      </div>
    </section>
  );
};