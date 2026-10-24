
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Me", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Achievements", path: "/achievements" },
  { name: "Contact Me", path: "/contact" },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Scroll to top when the page changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent background scrolling while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  // Detect page scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Header background
  const headerClass = isHomePage
    ? isScrolled
      ? "bg-white/95 backdrop-blur-md shadow-md"
      : "bg-white"
    : "bg-white/95 backdrop-blur-md shadow-md";

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClass}`}
      >
        <div className="w-full pl-6 pr-4 sm:pl-8 sm:pr-6 lg:pl-10 lg:pr-8">
          <div className="flex items-center justify-between h-16">

            {/* LOGO */}
            <Link
              to="/"
              className="text-2xl md:text-3xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-500"
            >
              Gokul S | Portfolio
            </Link>

            {/* DESKTOP MENU */}
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;

                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`relative px-4 py-2 font-medium transition-all
                      before:absolute before:bottom-0 before:left-0 before:h-[2px]
                      before:bg-gradient-to-r before:from-purple-500
                      before:via-pink-500 before:to-red-500 before:transition-all
                      ${
                        isActive
                          ? "text-black before:w-full"
                          : "text-black hover:text-indigo-600 hover:before:w-full"
                      }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* MOBILE BUTTON */}
            <button
              type="button"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              className="md:hidden text-black focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* BACKDROP */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* MOBILE MENU */}
      <div
        className={`md:hidden fixed top-16 left-0 right-0 z-50 bg-white shadow-lg transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-screen" : "max-h-0"
        } overflow-hidden`}
      >
        <div className="flex flex-col px-4 py-6 space-y-4">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white"
                    : "text-black hover:bg-gray-100 hover:text-indigo-600"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};
