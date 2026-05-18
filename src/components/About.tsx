import { Card } from "@/components/ui/card";
import {
  Code2,
  Palette,
  Rocket,
  Database,
  Globe,
  Sparkles,
} from "lucide-react";

const skills = [
  { icon: Code2, name: "HTML & CSS", color: "text-accent-coral" },
  { icon: Sparkles, name: "JavaScript", color: "text-accent-teal" },
  { icon: Globe, name: "React.js", color: "text-accent-purple" },
  { icon: Palette, name: "UI/UX Design", color: "text-accent-coral" },
  { icon: Database, name: "Backend Development", color: "text-accent-teal" },
  { icon: Rocket, name: "Performance Optimization", color: "text-accent-purple" },
];

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            About Me
          </h2>

          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full"></div>
        </div>

        <div className="space-y-16">

          {/* About Text */}
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              I’m a passionate Full Stack Web Developer and tech enthusiast
              with strong interest in building modern, responsive, and
              user-friendly web applications. I enjoy transforming ideas into
              real-world digital solutions using modern technologies and clean
              design principles.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-10">
              Technical Skills
            </h3>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

              {/* Programming Languages */}
              <Card className="p-6 shadow-soft hover:shadow-medium transition-smooth border-border/50 hover:scale-105">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Code2 className="w-6 h-6 text-accent-teal" />
                    <h4 className="font-bold text-lg">
                      Programming Languages
                    </h4>
                  </div>

                  <ul className="space-y-2 text-muted-foreground">
                    <li>• C</li>
                    <li>• Java</li>
                    <li>• JavaScript</li>
                    <li>• TypeScript</li>
                  </ul>
                </div>
              </Card>

              {/* Web Technologies */}
              <Card className="p-6 shadow-soft hover:shadow-medium transition-smooth border-border/50 hover:scale-105">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Globe className="w-6 h-6 text-accent-purple" />
                    <h4 className="font-bold text-lg">
                      Web Technologies
                    </h4>
                  </div>

                  <ul className="space-y-2 text-muted-foreground">
                    <li>• HTML5</li>
                    <li>• CSS3</li>
                    <li>• React.js</li>
                    <li>• Tailwind CSS</li>
                    <li>• Node.js</li>
                    <li>• Express.js</li>
                  </ul>
                </div>
              </Card>

              {/* Database */}
              <Card className="p-6 shadow-soft hover:shadow-medium transition-smooth border-border/50 hover:scale-105">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Database className="w-6 h-6 text-accent-coral" />
                    <h4 className="font-bold text-lg">Database</h4>
                  </div>

                  <ul className="space-y-2 text-muted-foreground">
                    <li>• MySQL</li>
                    <li>• MongoDB</li>
                    <li>• PostgreSQL</li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>

          {/* Additional Skills */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-10">
              Additional Skills
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {skills.map((skill, index) => {
                const Icon = skill.icon;

                return (
                  <Card
                    key={index}
                    className="p-6 flex items-center gap-4 shadow-soft hover:shadow-medium transition-smooth border-border/50 hover:scale-105"
                  >
                    <div className={`p-3 rounded-xl bg-muted ${skill.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <h4 className="font-semibold text-lg">
                      {skill.name}
                    </h4>
                  </Card>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};