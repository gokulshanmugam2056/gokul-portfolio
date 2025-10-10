import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About Me", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact Me", href: "#contact" },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  // Disable scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  // Scrollspy effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      navItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(item.name);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || activeSection !== "Home"
            ? "bg-white/10 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#home"
              className={`text-2xl md:text-3xl font-extrabold tracking-wider drop-shadow-lg ${
                activeSection === "Home"
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
                  : "text-gray-900"
              }`}
            >
              Gokul S
            </a>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 font-medium transition-all before:absolute before:bottom-0 before:left-0 before:h-[2px] before:bg-gradient-to-r before:from-purple-500 before:via-pink-500 before:to-red-500 before:transition-all ${
                    activeSection === item.name
                      ? activeSection === "Home"
                        ? "text-white before:w-full"
                        : "text-gray-900 before:w-full"
                      : activeSection === "Home"
                      ? "text-gray-200 hover:text-white hover:before:w-full"
                      : "text-gray-700 hover:text-gray-900 hover:before:w-full"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden focus:outline-none ${
                activeSection === "Home" ? "text-white" : "text-gray-900"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* FULL SCREEN BLUR BACKGROUND FOR MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xl z-40 transition-all duration-500"></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 left-0 right-0 z-50 bg-white/10 backdrop-blur-lg shadow-lg transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-screen" : "max-h-0"
        } overflow-hidden`}
      >
        <div className="flex flex-col px-4 py-6 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                activeSection === item.name
                  ? "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white"
                  : "text-gray-900 hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-red-500 hover:text-white"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
