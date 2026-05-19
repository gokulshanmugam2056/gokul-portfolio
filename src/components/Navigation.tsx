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

  // ✅ FIX: always scroll to top when page changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto", // change to "smooth" if you want animation
    });
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // HEADER STYLE LOGIC
  const headerClass =
    isHomePage
      ? isScrolled
        ? "bg-white/10 backdrop-blur-md shadow-md"
        : "bg-transparent"
      : "bg-white/20 backdrop-blur-md shadow-md";

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClass}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* LOGO */}
            <Link
              to="/"
              className="text-2xl md:text-3xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
            >
              Gokul S
            </Link>

            {/* DESKTOP MENU */}
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-4 py-2 font-medium transition-all before:absolute before:bottom-0 before:left-0 before:h-[2px] before:bg-gradient-to-r before:from-purple-500 before:via-pink-500 before:to-red-500 before:transition-all ${
                    location.pathname === item.path
                      ? isHomePage
                        ? "text-white before:w-full"
                        : "text-black before:w-full"
                      : isHomePage
                      ? "text-gray-200 hover:text-white hover:before:w-full"
                      : "text-gray-700 hover:text-black hover:before:w-full"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* MOBILE BUTTON */}
            <button
              className={`md:hidden focus:outline-none ${
                isHomePage ? "text-white" : "text-black"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* BACKDROP */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xl z-40"></div>
      )}

      {/* MOBILE MENU */}
      <div
        className={`md:hidden fixed top-16 left-0 right-0 z-50 bg-white/10 backdrop-blur-lg shadow-lg transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-screen" : "max-h-0"
        } overflow-hidden`}
      >
        <div className="flex flex-col px-4 py-6 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                location.pathname === item.path
                  ? "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white"
                  : isHomePage
                  ? "text-white hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500"
                  : "text-black hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};