import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useState, useEffect } from "react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";

const projects = [
  {
    title: "Faculty Worklog Management System",
    duration: "May 2024 - September 2024",
    role: "Full Stack Developer",
    description:
      "System to efficiently track, manage, and report daily faculty work activities with comprehensive dashboard and reporting features.",
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Apache"],
    teamSize: "1",
    color: "bg-accent-teal/10 border-accent-teal/30",
  },
  {
    title: "Student Alumni Interaction Portal",
    duration: "November 2024 - December 2024",
    role: "Front End Developer",
    description:
      "Designed and developed a portal to foster communication and networking between students and alumni with intuitive UI and real-time features.",
    techStack: ["React", "Express.js", "Node.js", "MongoDB"],
    teamSize: "6",
    color: "bg-accent-purple/10 border-accent-purple/30",
  },
];

const portfolioItems = [
  { image: project1, title: "E-Commerce Website", category: "Web Design" },
  { image: project2, title: "Weather Application", category: "Mobile App" },
  { image: project3, title: "Task Management Dashboard", category: "Web Application" },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* Projects Section */}
        <div className="space-y-12">
          <div className="text-center space-y-4 mb-8">
            <h2 className="text-4xl md:text-5xl font-bold">My Projects</h2>
            <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for web development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className={`p-8 shadow-soft hover:shadow-medium transition-smooth hover:scale-105 cursor-pointer border ${project.color} group`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-smooth">
                      {project.title}
                    </h3>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-smooth">
                      <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-foreground cursor-pointer" />
                      <Github className="w-5 h-5 text-muted-foreground hover:text-foreground cursor-pointer" />
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">Duration:</span> {project.duration}
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">Role:</span> {project.role}
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">Team Size:</span> {project.teamSize}
                    </p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="font-medium">{tech}</Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Portfolio Section with Rotating Images */}
        <div className="space-y-12">
          <div className="text-center space-y-4 mb-8">
            <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of my recent work and creative projects
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative w-full max-w-3xl mx-auto h-56 overflow-hidden">
            <PortfolioCarousel items={portfolioItems} />
          </div>
        </div>

      </div>
    </section>
  );
};

// Carousel Component
const PortfolioCarousel = ({ items }: { items: typeof portfolioItems }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Rotate every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 3000); // 3 seconds
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="relative w-full h-full">
      {items.map((item, index) => (
        <div
          key={item.title}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative flex justify-center items-center h-full">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-contain transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-90 transition-smooth flex items-center justify-center">
              <div className="text-center text-white space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-smooth">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-white/80">{item.category}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
