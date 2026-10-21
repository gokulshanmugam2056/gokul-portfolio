import { Github, Linkedin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-3">

        {/* Brand */}
        <div className="text-center md:text-left">
          <h3 className="text-xl md:text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 mb-1">
            Gokul Shanmugam
          </h3>
          <p className="text-muted-foreground text-xs md:text-sm">
            Building the future, one line of code at a time
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3">

          {/* GitHub */}
          <a
            href="https://github.com/gokulshanmugam2056"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/10 rounded-lg transition-all duration-300 text-muted-foreground hover:text-black hover:bg-white hover:scale-125"
          >
            <Github className="w-4 h-4" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/gokul-shanmugam-225414272/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/10 rounded-lg transition-all duration-300 text-muted-foreground hover:text-black hover:bg-white hover:scale-125"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/gokul_shanmugam_056/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/10 rounded-lg transition-all duration-300 text-muted-foreground hover:text-black hover:bg-white hover:scale-125"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.25-.88a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z" />
            </svg>
          </a>

        </div>

      </div>

      {/* Copyright */}
      <div className="text-center py-2 border-t border-border">
        <p className="text-xs md:text-sm text-muted-foreground">
          © {currentYear} <span className="font-bold">Gokul Shanmugam</span>
        </p>
      </div>
    </footer>
  );
};