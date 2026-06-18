import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  Download,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

import resumeFile from "@/assets/GOKUL S.pdf";
import myPhoto from "@/assets/myphoto.jpg";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4 bg-gradient-to-br from-purple-700 to-indigo-900"
    >
      <div className="max-w-7xl mx-auto w-full">

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* Text */}
          <div className="flex-1 text-center md:text-left space-y-6 animate-fade-in">

            <div className="space-y-2">

              <p className="text-accent-teal font-medium text-lg">
                Hi, I'm
              </p>

              <h1
                className="
                  text-5xl
                  md:text-7xl
                  font-bold
                  text-white
                  tracking-tight
                  md:-ml-2
                "
              >
                Gokul S
              </h1>

            </div>

            {/* Typing */}
            <div className="h-[40px]">

              <TypeAnimation
                sequence={[
                  "Web Developer",
                  1500,
                  "Tech Enthusiast",
                  1500,
                ]}
                wrapper="p"
                speed={50}
                repeat={Infinity}
                className="text-xl md:text-2xl text-gray-200"
              />

            </div>

            <p className="text-lg text-gray-300 max-w-xl">
              Crafting beautiful, functional, and user-centric digital
              experiences with modern web technologies.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">

              {/* Resume */}
              <Button
                size="lg"
                variant="outline"
                className="
                  border-purple-300
                  text-white
                  bg-purple-500/20
                  hover:bg-purple-500/40
                  hover:scale-105
                  transition-all
                  duration-300
                "
                asChild
              >
                <a
                  href={resumeFile}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </Button>

              {/* Projects */}
              <Button
                size="lg"
                variant="outline"
                className="
                  border-purple-300
                  text-white
                  bg-purple-500/20
                  hover:bg-purple-500/40
                  hover:scale-105
                  transition-all
                  duration-300
                "
                onClick={() => navigate("/projects")}
              >
                View My Work
              </Button>

              {/* Contact */}
              <Button
                size="lg"
                variant="outline"
                className="
                  border-purple-300
                  text-white
                  bg-purple-500/20
                  hover:bg-purple-500/40
                  hover:scale-105
                  transition-all
                  duration-300
                "
                onClick={() => navigate("/contact")}
              >
                Get in Touch
              </Button>

            </div>

          </div>

          {/* Profile */}
          <div className="flex-1 flex justify-center animate-fade-in">

            <div
              className="relative"
              onContextMenu={(e) => e.preventDefault()}
            >

              <div
                className="
                  absolute
                  inset-0
                  gradient-accent
                  rounded-full
                  blur-3xl
                  opacity-20
                "
              />

              <img
                src={myPhoto}
                alt="Gokul S"
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                className="
                  protect-image
                  relative
                  w-70
                  h-70
                  md:w-80
                  md:h-80
                  rounded-full
                  object-cover
                  shadow-lg
                  border-4
                  border-white
                  select-none
                "
              />

            </div>

          </div>

        </div>

        {/* Scroll */}
        <div className="flex justify-center mt-16 animate-bounce">

          <button
            onClick={() => navigate("/about")}
            className="
              text-gray-200
              hover:text-white
              hover:scale-125
              transition-all
              duration-300
            "
          >
            <ArrowDown className="w-6 h-6" />
          </button>

        </div>

      </div>
    </section>
  );
};