import { useState, useEffect } from "react";
import { Menu, X, Download, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    const sections = ["hero", "about", "skills", "services", "projects", "faqs", "contact"];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <div className="flex items-center justify-between w-full max-w-sm md:max-w-3xl lg:max-w-5xl bg-secondary/80 backdrop-blur-xl rounded-full px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 glow-border navbar-no-glow">
        <a href="#" className="flex items-center gap-2.5 transition-transform hover:scale-105 active:scale-95 group">
          <img
            src="/logo/logo-dark-mode.png"
            alt="Aryan Labs Logo"
            className="h-12 sm:h-16 lg:h-20 w-auto"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative px-4 py-2 text-sm transition-all rounded-full ${isActive ? "text-primary font-bold" : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                <span className="relative z-10">{link.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-primary/10 rounded-full shadow-[0_0_15px_hsl(217_100%_50%_/_0.25)] border border-primary/20"
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={toggle}
            className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary/10 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href="/resume"
            className="flex items-center gap-2 btn-3d text-primary-foreground px-5 py-2 rounded-full text-sm font-medium"
          >
            Resume <Download size={14} />
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggle}
            className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-foreground"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-full mt-2 left-4 right-4 bg-secondary/95 backdrop-blur-xl rounded-2xl p-4 md:hidden glow-border">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 transition-all rounded-xl ${isActive
                  ? "text-primary font-bold bg-primary/10 shadow-[0_0_15px_hsl(217_100%_50%_/_0.1)] border border-primary/10"
                  : "text-muted-foreground"
                  }`}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="/resume"
            className="flex items-center justify-center gap-2 btn-3d text-primary-foreground px-5 py-3 rounded-full text-sm font-medium mt-2"
          >
            Resume <Download size={14} />
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
