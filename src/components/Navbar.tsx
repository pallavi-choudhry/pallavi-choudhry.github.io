import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  User,
  Code2,
  FolderGit2,
  Mail as MailIcon,
} from "lucide-react";

interface NavLink {
  name: string;
  href: string;
  icon?: React.ReactNode;
}

const navLinks: NavLink[] = [
  { name: "About", href: "#about", icon: <User className="w-4 h-4" /> },
  { name: "Skills", href: "#skills", icon: <Code2 className="w-4 h-4" /> },
  {
    name: "Projects",
    href: "#projects",
    icon: <FolderGit2 className="w-4 h-4" />,
  },
  { name: "Contact", href: "#contact", icon: <MailIcon className="w-4 h-4" /> },
];

interface NavbarProps {
  githubUrl?: string;
  linkedinUrl?: string;
  email?: string;
  resumeUrl?: string;
  name?: string;
  designation?: string;
}

const Navbar: React.FC<NavbarProps> = ({
  name = "Pallavi Choudhry",
  designation = "Software Developer",
  githubUrl = "https://github.com",
  linkedinUrl = "https://linkedin.com",
  email = "mailto:hello@example.com",
  resumeUrl = "#",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll-based background change
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = isOpen ? "hidden" : original;
    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-slate-900/85 backdrop-blur-lg border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between gap-10 ">
          {/* ---------- Brand: Name + Designation ---------- */}
          <a
            href="#"
            onClick={handleLinkClick}
            className="group flex min-w-0 flex-col leading-tight"
          >
            <span className="truncate text-base sm:text-lg md:text-xl font-semibold tracking-tight text-white transition-colors group-hover:text-cyan-400">
              {name}
            </span>
            <span className="truncate text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-cyan-400/80">
              {designation}
            </span>
          </a>

          {/* ---------- Desktop nav ---------- */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="group relative flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-cyan-400"
                >
                  {link.icon}
                  <span>{link.name}</span>
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* ---------- Desktop actions ---------- */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-full p-2 text-slate-300 transition-colors hover:bg-white/5 hover:text-cyan-400"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full p-2 text-slate-300 transition-colors hover:bg-white/5 hover:text-cyan-400"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={email}
              aria-label="Email"
              className="rounded-full p-2 text-slate-300 transition-colors hover:bg-white/5 hover:text-cyan-400"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href={resumeUrl}
              className="ml-1 rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-cyan-400"
            >
              Resume
            </a>
          </div>

          {/* ---------- Mobile toggle ---------- */}
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-200 transition-colors hover:bg-white/5 hover:text-cyan-400"
          >
            <AnimatePresence initial={false} mode="wait">
              {isOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="h-6 w-6" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* ---------- Mobile menu ---------- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-white/10 bg-slate-900/95 backdrop-blur-lg"
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4">
              {/* Nav links */}
              <ul className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.25 }}
                  >
                    <a
                      href={link.href}
                      onClick={handleLinkClick}
                      className="flex items-center gap-3 rounded-lg px-3 py-3 text-base font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-cyan-400"
                    >
                      {link.icon}
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* Divider */}
              <div className="my-4 h-px w-full bg-white/10" />

              {/* Socials + Resume */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="rounded-full p-2.5 text-slate-300 transition-colors hover:bg-white/5 hover:text-cyan-400"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="rounded-full p-2.5 text-slate-300 transition-colors hover:bg-white/5 hover:text-cyan-400"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={email}
                    aria-label="Email"
                    className="rounded-full p-2.5 text-slate-300 transition-colors hover:bg-white/5 hover:text-cyan-400"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
                <a
                  href={resumeUrl}
                  onClick={handleLinkClick}
                  className="rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-cyan-400"
                >
                  Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;