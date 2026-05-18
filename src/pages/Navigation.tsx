const navItems = [
  { name: "Home", href: "#home" },
  { name: "About Me", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact Me", href: "#contact" },
];

export const Navigation = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        <a href="#home" className="text-white font-bold text-xl">
          Gokul S
        </a>

        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white hover:text-pink-400 transition"
            >
              {item.name}
            </a>
          ))}
        </nav>

      </div>
    </header>
  );
};