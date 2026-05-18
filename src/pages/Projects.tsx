import { Navigation } from "@/components/Navigation";
import { Projects as ProjectsSection } from "@/components/Projects";


const Projects = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-16">
        <ProjectsSection />
      </main>

    </div>
  );
};

export default Projects;