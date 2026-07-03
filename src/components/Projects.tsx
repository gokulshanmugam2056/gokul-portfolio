import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import ProjectViewer from "@/components/ProjectViewer";

import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";
import project5 from "@/assets/project5.jpg";
import project6 from "@/assets/project6.jpg";
import project7 from "@/assets/project7.jpg";
import project8 from "@/assets/project8.jpg";
import project9 from "@/assets/project9.jpg";

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
    title: "Intelligent Student-Alumni Networking Platform",
    duration: "November 2024 - December 2024",
    role: "Frontend Developer",
    repo: "https://sridharan-g-2881.github.io/frontend/",
    images: [project5, project6, project7, project8, project9],
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
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  const [imgIndex, setImgIndex] = useState(0);
  const [fullView, setFullView] = useState(false);

  const openProject = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
    setImgIndex(0);
    setFullView(false);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setImgIndex(0);
    setFullView(false);
  };

  const nextImg = () => {
    if (
      selectedProject &&
      imgIndex < selectedProject.images.length - 1
    ) {
      setImgIndex((prev) => prev + 1);
    }
  };

  const prevImg = () => {
    if (selectedProject && imgIndex > 0) {
      setImgIndex((prev) => prev - 1);
    }
  };

  return (
    <section
      id="projects"
      className="py-12 px-4 bg-muted/30"
    >
      <div className="max-w-7xl mx-auto space-y-12">

        {/* TITLE */}
        <div className="text-center space-y-3 mb-3">
          <h2 className="text-4xl md:text-5xl font-bold">
            My Projects
          </h2>

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

                <div className="flex items-start justify-between gap-4">

                  <h3 className="text-2xl font-bold group-hover:text-primary">
                    {project.title}
                  </h3>

                  <div className="flex gap-2 opacity-0 group-hover:opacity-100">

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

                <div className="space-y-2 text-sm">
                  <p><b>Duration:</b> {project.duration}</p>
                  <p><b>Role:</b> {project.role}</p>
                  <p><b>Team Size:</b> {project.teamSize}</p>
                </div>

                <p className="text-muted-foreground">
                  {project.description}
                </p>

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

      {/* MINI MODAL */}
      {selectedProject && !fullView && (

        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={closeModal}
        >
          <div
            className="
              relative
              max-h-[90vh]
              w-[93%]
              max-w-3xl
              overflow-y-auto
              rounded-xl
              bg-white
              p-4
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="mb-4 flex items-center justify-between gap-3">
              <h2 className="text-lg font-bold">
                {selectedProject.title}
              </h2>

          {selectedProject.images.length > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setFullView(true);
              }}
              className="shrink-0 rounded bg-black px-3 py-1 text-xs text-white hover:bg-gray-800"
            >
              View Full
            </button>
          )}
        </div>

        {/* Image and Navigation */}
        <div className="flex items-center justify-center gap-2 md:gap-7">
          {selectedProject.images.length > 1 && (
            <button
              onClick={prevImg}
              disabled={imgIndex === 0}
              aria-label="Previous image"
              className="shrink-0 text-3xl text-black disabled:opacity-20"
            >
              ‹
            </button>
          )}

          <div
            className="
              flex
              h-[330px]
              w-[850px]
              max-w-[72vw]
              items-center
              justify-center
              overflow-hidden
              rounded-xl
              border
              bg-white
              p-3

              max-md:h-[180px]
              max-md:w-[calc(100vw-70px)]
              max-md:max-w-none
            "
          >
            {selectedProject.images.length > 0 ? (
              <img
                src={selectedProject.images[imgIndex]}
                alt={selectedProject.title}
                className="max-h-full max-w-full object-contain"
              />
            ) : (
              <div>No images</div>
            )}
          </div>

          {selectedProject.images.length > 1 && (
            <button
              onClick={nextImg}
              disabled={imgIndex === selectedProject.images.length - 1}
              aria-label="Next image"
              className="shrink-0 text-3xl text-black disabled:opacity-20"
            >
              ›
            </button>
          )}
        </div>

        {/* Image Counter */}
        <div className="mt-3 text-center text-sm text-gray-500">
          {selectedProject.images.length === 0
            ? "0 / 0"
            : `${imgIndex + 1} / ${selectedProject.images.length}`}
        </div>
      </div>

        </div>
      )}

      {fullView && selectedProject && (
        <ProjectViewer
          images={selectedProject.images}
          initialIndex={imgIndex}
          onImageChange={setImgIndex}
          onClose={() => setFullView(false)}
        />
      )}
    </section>
  );
};

export default Projects;