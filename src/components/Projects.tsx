import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useState, useEffect } from "react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";

const projects = [
  {
    title: "AI-Driven Mental Monitoring and Support System",
    duration: "January 2026 - April 2026",
    role: "Backend Developer (AI/ML Integration)",
    repo: "https://github.com/gokulshanmugam2056/ai-mental-monitoring-system", //replace with actual repo URL
    description:
      "Developed an AI-powered mental health monitoring system that analyzes user emotions using NLP and machine learning. Integrated a chatbot for real-time support and backend APIs for secure data handling and prediction-based responses.",
    techStack: [
      "React.js",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "JWT Authentication",
      "Machine Learning",
      "NLP",
      "Gemini 2.5 Flash",
    ],
    teamSize: "3",
    color: "bg-accent-coral/10 border-accent-coral/30",
  },
  {
    title: "Intelligent Student–Alumni Networking Platform",
    duration: "November 2024 - December 2024",
    role: "Frontend Developer",
    repo: "https://github.com/gokulshanmugam2056/alumni-networking-platform",
    description:
      "Developed an intelligent web platform to connect students and alumni of the Technical Education Department, Government of Rajasthan. The system enables seamless networking, communication, and knowledge sharing to support career guidance and professional growth.",
    techStack: ["React", "Express.js", "Node.js", "MongoDB"],
    teamSize: "6",
    color: "bg-accent-purple/10 border-accent-purple/30",
  },
  {
    title: "Faculty Worklog Management System",
    duration: "May 2024 - September 2024",
    role: "Full Stack Developer",
    repo: "https://github.com/gokulshanmugam2056/faculty_worklog",
    description:
      "Developed a web-based system to track, manage, and report daily faculty work activities with a structured dashboard and automated reporting features for improved efficiency and transparency.",
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Apache"],
    teamSize: "1",
    color: "bg-accent-teal/10 border-accent-teal/30",
  },
];

const portfolioItems = [
  { image: project1, title: "E-Commerce Website", category: "Web Design" },
  { image: project2, title: "Weather Application", category: "Mobile App" },
  {
    image: project3,
    title: "Task Management Dashboard",
    category: "Web Application",
  },
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
            {projects.map((project) => (
              <Card
                key={project.title}
                className={`p-8 shadow-soft hover:shadow-medium transition-smooth hover:scale-105 cursor-pointer border ${project.color} group`}
              >
                <div className="space-y-4">

                  {/* Title + Icons */}
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-smooth">
                      {project.title}
                    </h3>

                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-smooth">

                      {/* GitHub Repo (EACH PROJECT NOW HAS OWN LINK) */}
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-foreground hover:scale-110 transition-all cursor-pointer" />
                      </a>

                      {/* GitHub Profile */}
                      <a
                        href="https://github.com/gokulshanmugam2056"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-5 h-5 text-muted-foreground hover:text-black hover:scale-110 transition-all cursor-pointer" />
                      </a>

                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-2 text-sm">
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        Duration:
                      </span>{" "}
                      {project.duration}
                    </p>

                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        Role:
                      </span>{" "}
                      {project.role}
                    </p>

                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        Team Size:
                      </span>{" "}
                      {project.teamSize}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="font-medium">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Portfolio Section */}
        <div className="space-y-12">
          <div className="text-center space-y-4 mb-8">
            <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of my recent work and creative projects
            </p>
          </div>

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 3000);

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
          <div className="relative flex justify-center items-center h-full group">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-contain transition-transform group-hover:scale-105"
            />
          </div>
        </div>
      ))}
    </div>
  );
};