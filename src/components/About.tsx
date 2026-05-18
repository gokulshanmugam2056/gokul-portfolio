import { Card } from "@/components/ui/card";
import { Code2, Palette, Rocket, Database, Globe, Sparkles } from "lucide-react";

const skills = [
  { icon: Code2, name: "HTML & CSS", color: "text-accent-coral" },
  { icon: Sparkles, name: "JavaScript", color: "text-accent-teal" },
  { icon: Globe, name: "React", color: "text-accent-purple" },
  { icon: Palette, name: "UI/UX Design", color: "text-accent-coral" },
  { icon: Database, name: "Backend Dev", color: "text-accent-teal" },
  { icon: Rocket, name: "Performance", color: "text-accent-purple" },
];

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full"></div>
        </div>

        <div className="space-y-16">
          {/* About Text */}
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              I'm a passionate web developer with a keen eye for design and a love for creating seamless digital experiences. My journey in tech started with curiosity and evolved into a dedication to building innovative solutions that make a difference.
            </p>
          </div>
            

          {/* Technical Skills Section */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-8">Technical Skills</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="p-6 shadow-soft hover:shadow-medium transition-smooth border-border/50">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Code2 className="w-6 h-6 text-accent-teal" />
                    <h4 className="font-bold text-lg">Programming Languages</h4>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• C</li>
                    <li>• Java</li>
                  </ul>
                </div>
              </Card>
              <Card className="p-6 shadow-soft hover:shadow-medium transition-smooth border-border/50">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Globe className="w-6 h-6 text-accent-purple" />
                    <h4 className="font-bold text-lg">Web Technologies</h4>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• HTML</li>
                    <li>• CSS</li>
                  </ul>
                </div>
              </Card>
              <Card className="p-6 shadow-soft hover:shadow-medium transition-smooth border-border/50">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Database className="w-6 h-6 text-accent-coral" />
                    <h4 className="font-bold text-lg">Database</h4>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• MySQL</li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
