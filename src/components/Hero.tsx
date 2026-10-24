
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

import myPhoto from "@/assets/myphoto.jpg";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4 bg-white"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* Text */}
          <div className="flex-1 text-center md:text-left space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-black font-medium text-lg">
                Hi, I'm
              </p>

              <h1
                className="
                  text-5xl
                  md:text-7xl
                  font-bold
                  text-black
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
                className="text-xl md:text-2xl text-black"
              />
            </div>

            {/* Description */}
            <p className="text-lg text-gray-700 max-w-xl">
              Crafting beautiful, functional, and user-centric digital
              experiences with modern web technologies.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">

              {/* Projects */}
              <Button
                size="lg"
                variant="outline"
                className="
                  border-black
                  text-black
                  bg-white
                  hover:bg-gray-100
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
                  border-black
                  text-black
                  bg-white
                  hover:bg-gray-100
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
              {/* Background glow */}
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

              {/* Profile image */}
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
                  border-black
                  select-none
                "
              />
            </div>
          </div>
        </div>

        {/* Scroll */}
        <div className="flex justify-center mt-16 animate-bounce">
          <button
            type="button"
            aria-label="Go to About page"
            onClick={() => navigate("/about")}
            className="
              text-black
              hover:text-gray-600
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
