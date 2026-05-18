import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import myPhoto from "@/assets/myphoto.jpg";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 bg-gradient-to-br from-purple-700 to-indigo-900">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-accent-teal font-medium text-lg">Hi, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold text-white">
                Gokul S
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-gray-200">
              Web Developer | Designer | Tech Enthusiast
            </p>

            <p className="text-lg text-gray-300 max-w-xl">
              Crafting beautiful, functional, and user-centric digital experiences with modern web technologies.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-teal-400 to-cyan-400 text-white shadow-lg hover:scale-105 transition-transform"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 gradient-accent rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <img
                src={myPhoto}
                alt="Gokul S"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg border-4 border-white"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16 animate-bounce">
          <a href="#about" className="text-gray-200 hover:text-white transition-colors">
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};
