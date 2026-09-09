import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail, Home, User, Code2, FolderGit2, Mail as MailIcon, Sparkles } from "lucide-react";

interface NavLink {
  name: string;
  href: string;
  icon?: React.ReactNode;
}

const navLinks: NavLink[] = [
  // { name: "Home", href: "#", icon: <Home className="w-4 h-4" /> },
  { name: "About", href: "#about", icon: <User className="w-4 h-4" /> },
  { name: "Skills", href: "#skills", icon: <Code2 className="w-4 h-4" /> },
  { name: "Projects", href: "#projects", icon: <FolderGit2 className="w-4 h-4" /> },
  { name: "Contact", href: "#contact", icon: <MailIcon className="w-4 h-4" /> },
];

interface NavbarProps {
  githubUrl?: string;
  linkedinUrl?: string;
  email?: string;
  resumeUrl?: string;
  name?: string;
}

const Navbar: React.FC<NavbarProps> = ({
  name = "Pallavi Choudhary",
  email = "pallavich343@example.com",
  githubUrl = "https://github.com/pallavi-choudhry/",
  linkedinUrl = "https://www.linkedin.com/in/pallavi-choudhary-0690a1274",
  // resumeUrl = "https://drive.google.com/file/d/1QCPArh5elYc4jh_DyOacO4Qx6ekV2K8s/view?usp=drivesdk",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.replace('#', ''));
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Smooth scroll handler
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", damping: 20 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? "glass-card shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-white/10" 
            : "bg-transparent"
        }`}
        style={{
          backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        }}
      >
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.a 
            href="#home"
            onClick={(e) => handleSmoothScroll(e, '#home')}
            className="flex items-center gap-2 group relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Logo icon */}
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6c5ce7] to-[#a29bfe] flex items-center justify-center shadow-lg shadow-[#6c5ce7]/30 group-hover:shadow-[#6c5ce7]/50 transition-all duration-300">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <motion.div
                className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#6c5ce7] to-[#fd79a8] opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
            
            <div className="hidden sm:block">
              <span className="font-bold text-lg bg-gradient-to-r from-[#a29bfe] to-[#fd79a8] bg-clip-text text-transparent">
                {name}
              </span>
              <span className="block text-[10px] font-mono text-[#b2bec3]/60 tracking-wider">
                Full Stack MERN Developer <br/>
                {/* Building scalable, responsive, and user-centric web applications. */}
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className={`relative flex items-center gap-2 font-mono text-sm px-4 py-2.5 rounded-xl transition-all duration-300 group ${
                      isActive 
                        ? 'text-white bg-gradient-to-r from-[#6c5ce7]/20 to-[#a29bfe]/20 border border-[#6c5ce7]/30' 
                        : 'text-[#b2bec3] hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className={`${isActive ? 'text-[#a29bfe]' : 'text-[#b2bec3]/50 group-hover:text-[#a29bfe]'} transition-colors duration-300`}>
                      {link.icon}
                    </span>
                    {link.name}
                    
                    {/* Active indicator */}
                    {isActive && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#6c5ce7]/10 to-[#a29bfe]/10 -z-10"
                        transition={{ type: "spring", duration: 0.6 }}
                      />
                    )}
                    
                    {/* Hover underline effect */}
                    <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#6c5ce7] to-[#a29bfe] group-hover:w-1/2 transition-all duration-300 ${
                      isActive ? 'w-1/2' : ''
                    }`} />
                  </a>
                </motion.li>
              );
            })}
            
            {/* Resume Button */}
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              {/* <motion.a
                href={resumeUrl}
                target="_blank"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 font-mono text-sm px-5 py-2.5 bg-gradient-to-r from-[#6c5ce7] to-[#a29bfe] text-white font-semibold rounded-xl shadow-lg shadow-[#6c5ce7]/30 hover:shadow-[#6c5ce7]/50 transition-all duration-300 ml-2"
              >
                <Sparkles className="w-4 h-4" />
                Resume
              </motion.a> */}
            </motion.li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            {/* Social icons on mobile */}
            <div className="flex items-center gap-1">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={githubUrl}
                target="_blank"
                className="p-2 rounded-lg text-[#b2bec3] hover:text-[#a29bfe] hover:bg-white/5 transition-all duration-300"
              >
                <Github className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={linkedinUrl}
                target="_blank"
                className="p-2 rounded-lg text-[#b2bec3] hover:text-[#a29bfe] hover:bg-white/5 transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </motion.a>
            </div>
            
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`relative p-2.5 rounded-xl transition-all duration-300 ${
                isOpen 
                  ? 'bg-gradient-to-r from-[#6c5ce7]/20 to-[#a29bfe]/20 border border-[#6c5ce7]/30' 
                  : 'glass-hover border border-white/5'
              }`}
            >
              {isOpen ? (
                <X className="w-5 h-5 text-[#a29bfe]" />
              ) : (
                <Menu className="w-5 h-5 text-[#b2bec3]" />
              )}
            </motion.button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, scale: 0.95 }}
              animate={{ opacity: 1, height: "auto", scale: 1 }}
              exit={{ opacity: 0, height: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden glass-card border-t border-white/10 overflow-hidden"
              style={{
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              }}
            >
              <div className="px-6 py-6 space-y-6">
                {/* Profile section */}
                <div className="flex items-center gap-4 pb-4 border-b border-white/5">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6c5ce7] to-[#a29bfe] flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">P</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{name}</h3>
                    <p className="text-xs text-[#b2bec3]/60 font-mono">MERN Stack Developer</p>
                  </div>
                </div>

                {/* Navigation links */}
                <ul className="flex flex-col gap-2">
                  {navLinks.map((link, index) => {
                    const isActive = activeSection === link.href.replace('#', '');
                    return (
                      <motion.li 
                        key={link.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.08 }}
                      >
                        <a
                          href={link.href}
                          onClick={(e) => handleSmoothScroll(e, link.href)}
                          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                            isActive
                              ? 'bg-gradient-to-r from-[#6c5ce7]/20 to-[#a29bfe]/20 border border-[#6c5ce7]/30 text-white'
                              : 'text-[#b2bec3] hover:text-white hover:bg-white/5'
                          }`}
                        >
                          <span className={`${isActive ? 'text-[#a29bfe]' : 'text-[#b2bec3]/50'}`}>
                            {link.icon}
                          </span>
                          <span className="font-medium">{link.name}</span>
                          {isActive && (
                            <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#a29bfe] animate-pulse" />
                          )}
                        </a>
                      </motion.li>
                    );
                  })}
                </ul>

                {/* Action buttons */}
                <div className="flex flex-col gap-3 pt-4 border-t border-white/5">
                  {/* <motion.a
                    href={resumeUrl}
                    target="_blank"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#6c5ce7] to-[#a29bfe] text-white font-semibold rounded-xl shadow-lg shadow-[#6c5ce7]/30"
                  >
                    <Sparkles className="w-4 h-4" />
                    Download Resume
                  </motion.a>
                   */}
                  <div className="flex items-center justify-center gap-4">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={githubUrl}
                      target="_blank"
                      className="p-3 glass-hover rounded-xl text-[#b2bec3] hover:text-[#a29bfe] border border-white/5 hover:border-[#6c5ce7]/30 transition-all duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={linkedinUrl}
                      target="_blank"
                      className="p-3 glass-hover rounded-xl text-[#b2bec3] hover:text-[#a29bfe] border border-white/5 hover:border-[#6c5ce7]/30 transition-all duration-300"
                    >
                      <Linkedin className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={`mailto:${email}`}
                      className="p-3 glass-hover rounded-xl text-[#b2bec3] hover:text-[#a29bfe] border border-white/5 hover:border-[#6c5ce7]/30 transition-all duration-300"
                    >
                      <Mail className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer to prevent content hiding under navbar */}
      <div className="h-16 sm:h-20" />
    </>
  );
};

export default Navbar;