import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";
import project5 from "@/assets/project5.jpg";
import project6 from "@/assets/project6.jpg";

const projects = [
  {
    title: "AI-Driven Mental Monitoring and Support System",
    duration: "January 2026 - April 2026",
    role: "Backend Developer (AI/ML Integration)",
    repo: "https://github.com/rahulrajad22-max/mindful-companion",
    images: [project1, project2, project3, project4],
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
    repo: "https://sridharan-g-2881.github.io/frontend/",
    images: [project5, project6],
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
    images: [],
    description:
      "Developed a web-based system to track, manage, and report daily faculty work activities with a structured dashboard and automated reporting features for improved efficiency and transparency.",
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Apache"],
    teamSize: "1",
    color: "bg-accent-teal/10 border-accent-teal/30",
  },
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [imgIndex, setImgIndex] = useState(0);
  const [fullView, setFullView] = useState(false);

  const openProject = (project: any) => {
    setSelectedProject(project);
    setImgIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setFullView(false);
  };

  const nextImg = () => {
    setImgIndex((prev) =>
      selectedProject
        ? (prev + 1) % selectedProject.images.length
        : prev
    );
  };

  const prevImg = () => {
    setImgIndex((prev) =>
      selectedProject
        ? prev === 0
          ? selectedProject.images.length - 1
          : prev - 1
        : prev
    );
  };

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* TITLE */}
        <div className="text-center space-y-4 mb-8">
          <h2 className="text-4xl md:text-5xl font-bold">My Projects</h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for web development
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <Card
              key={project.title}
              onClick={() => openProject(project)}
              className={`p-8 shadow-soft hover:shadow-medium transition-smooth hover:scale-105 cursor-pointer border ${project.color} group`}
            >
              <div className="space-y-4">

                {/* TITLE + ICONS */}
                <div className="flex items-start justify-between">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>

                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-smooth">

                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-5 h-5 text-gray-500 hover:text-black" />
                    </a>

                    <a
                      href="https://github.com/gokulshanmugam2056"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-5 h-5 text-gray-500 hover:text-black" />
                    </a>

                  </div>
                </div>

                {/* DETAILS */}
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Duration:</span>{" "}
                    {project.duration}
                  </p>

                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Role:</span>{" "}
                    {project.role}
                  </p>

                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Team Size:</span>{" "}
                    {project.teamSize}
                  </p>
                </div>

                {/* DESCRIPTION */}
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* TECH */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>

              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* ================= MINI MODAL ================= */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={closeModal}   // 👈 CLICK OUTSIDE CLOSE
        >
          <div
            className="bg-white rounded-xl w-[85%] max-w-3xl p-4 relative"
            onClick={(e) => e.stopPropagation()} // 👈 prevent close when clicking inside
          >

            <h2 className="text-lg font-bold mb-4">
              {selectedProject.title}
            </h2>

            {/* FRAME */}
            <div className="relative flex items-center justify-center border rounded-xl p-3 bg-white">

              {/* LEFT ARROW */}
              {selectedProject.images.length > 1 && (
                <button
                  onClick={prevImg}
                  className="absolute left-2 text-gray-400 hover:text-gray-600 text-3xl"
                >
                  ‹
                </button>
              )}

              {/* IMAGE */}
              <div className="w-[550px] h-[240px] flex items-center justify-center bg-white overflow-hidden">
                {selectedProject.images.length > 0 ? (
                  <img
                    src={selectedProject.images[imgIndex]}
                    className="object-contain max-h-full max-w-full"
                  />
                ) : (
                  <div className="text-gray-400">No images</div>
                )}
              </div>

              {/* RIGHT ARROW */}
              {selectedProject.images.length > 1 && (
                <button
                  onClick={nextImg}
                  className="absolute right-2 text-gray-400 hover:text-gray-600 text-3xl"
                >
                  ›
                </button>
              )}
            </div>

          </div>
        </div>
      )}

      {/* ================= FULL VIEW ================= */}
      {fullView && selectedProject && (
        <div className="fixed inset-0 bg-black z-[60] flex items-center justify-center">

          {/* CLOSE */}
          <button
            onClick={() => setFullView(false)}
            className="absolute top-4 right-5 text-red-500 text-4xl font-bold"
          >
            ✕
          </button>

          {/* LEFT */}
          <button
            onClick={prevImg}
            className="absolute left-6 text-white text-5xl opacity-70 hover:opacity-100"
          >
            ‹
          </button>

          {/* IMAGE */}
          <img
            src={selectedProject.images[imgIndex]}
            className="max-w-[95%] max-h-[95%] object-contain"
          />

          {/* RIGHT */}
          <button
            onClick={nextImg}
            className="absolute right-6 text-white text-5xl opacity-70 hover:opacity-100"
          >
            ›
          </button>

        </div>
      )}
    </section>
  );
};