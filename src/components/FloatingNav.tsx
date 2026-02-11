import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const FloatingNav = () => {
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);

      const sections = navItems.map((item) => item.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}

          /* ✅ FIXED POSITIONING */
          className="
            fixed
            bottom-4 sm:top-6 sm:bottom-auto
            left-0 right-0 sm:left-1/2
            sm:-translate-x-1/2
            z-50
            glass-card
            px-3 py-2
            mx-auto
            max-w-[95vw] sm:max-w-fit
            overflow-x-auto
          "
        >
          {/* ✅ FIX: proper alignment on mobile */}
          <ul className="flex gap-1 whitespace-nowrap justify-start sm:justify-center">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`
                    relative
                    px-3 sm:px-4
                    py-2
                    text-[10px] sm:text-xs
                    font-heading
                    font-medium
                    tracking-wider
                    uppercase
                    rounded-lg
                    transition-colors
                    duration-300
                    block
                    ${
                      activeSection === item.href.slice(1)
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }
                  `}
                >
                  {activeSection === item.href.slice(1) && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-lg bg-primary/10"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default FloatingNav;
