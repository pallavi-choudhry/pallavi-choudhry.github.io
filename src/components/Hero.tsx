import { motion, Variants } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ChevronDown, 
  Download,
  Sparkles,
  Briefcase,
  Code2,
  Database,
  Server,
  Palette,
  ExternalLink,
  User,
  FolderGit2,
  Award,
  Globe
} from "lucide-react";
import { useState, useEffect } from "react";
import profileImage from "./assets/Pallavi_Photo.jpeg";

// Types
interface HeroProps {
  name?: string;
  title?: string;
  subtitle?: string;
  email?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  resumeUrl?: string;
  availableForWork?: boolean;
}

interface TechStack {
  name: string;
  icon: string;
  color: string;
}

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 14,
      stiffness: 100,
    },
  },
};

const floatingIconVariants: Variants = {
  animate: (custom: { x: number; y: number; duration: number; delay?: number }) => ({
    y: [0, custom.y, 0],
    x: [0, custom.x, 0],
    rotate: [0, 6, 0, -6, 0],
    transition: {
      duration: custom.duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay: custom.delay || 0,
    },
  }),
};

const Hero: React.FC<HeroProps> = ({
  name = "Pallavi Choudhary",
  title = "MERN Stack Developer",
  subtitle = "Full Stack MERN Developer",
  email = "pallavich343@example.com",
  githubUrl = "https://github.com/pallavi-choudhry/",
  linkedinUrl = "https://www.linkedin.com/in/pallavi-choudhary-0690a1274",
  resumeUrl = "https://drive.google.com/file/d/1QCPArh5elYc4jh_DyOacO4Qx6ekV2K8s/view?usp=drivesdk",
  availableForWork = true,
}) => {
  const [typedText, setTypedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullGreeting = "Hi, I'm Pallavi Choudhry";

  // Typing effect
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullGreeting.length) {
        setTypedText(fullGreeting.slice(0, index));
        index++;
      } else {
        setIsTypingComplete(true);
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, []);

  // Tech stack data
  const techStack: TechStack[] = [
    { name: "React.js", icon: "⚛️", color: "#61dafb" },
    { name: "Node.js", icon: "🟢", color: "#68a063" },
    { name: "MongoDB", icon: "🍃", color: "#47a248" },
    { name: "Express.js", icon: "🚂", color: "#8cc84b" },
  ];

  // Floating tech icons
  const floatingIcons = [
    { icon: "⚛️", x: -100, y: -50, duration: 5.5, delay: 0 },
    { icon: "🚀", x: 120, y: 40, duration: 6.5, delay: 0.5 },
    { icon: "💻", x: -80, y: 70, duration: 5, delay: 1 },
    { icon: "🎨", x: 140, y: -70, duration: 5.8, delay: 0.3 },
    { icon: "📱", x: -140, y: -20, duration: 6.2, delay: 0.8 },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden bg-gradient-to-br from-[#0a0a1a] via-[#0f0f2a] to-[#16082a]">
      
      {/* Animated background - Blur orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.35 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="orb absolute top-[-100px] right-[-80px] w-[400px] h-[400px] bg-[#6c5ce7] rounded-full blur-[100px]"
        />
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.25 }}
          transition={{ duration: 1.8, delay: 0.3, ease: "easeOut" }}
          className="orb absolute bottom-[-80px] left-[-60px] w-[350px] h-[350px] bg-[#00b4d8] rounded-full blur-[100px]"
        />
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 1.8, delay: 0.6, ease: "easeOut" }}
          className="orb absolute top-1/3 left-1/4 w-[250px] h-[250px] bg-[#fd79a8] rounded-full blur-[100px]"
        />
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.15 }}
          transition={{ duration: 1.8, delay: 0.9, ease: "easeOut" }}
          className="orb absolute bottom-1/3 right-1/4 w-[200px] h-[200px] bg-[#fdcb6e] rounded-full blur-[100px]"
        />

        
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Radial gradient overlay for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.5)_100%)]" />
      </div>

      {/* Floating tech icons */}
      {floatingIcons.map((icon, index) => (
        <motion.div
          key={index}
          custom={{ x: icon.x, y: icon.y, duration: icon.duration, delay: icon.delay }}
          variants={floatingIconVariants}
          animate="animate"
          className="absolute hidden lg:block text-3xl md:text-4xl opacity-15 pointer-events-none select-none"
          style={{
            top: `${15 + index * 12}%`,
            right: `${5 + index * 10}%`,
          }}
        >
          {icon.icon}
        </motion.div>
      ))}

      {/* Main Glass Card */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-6xl"
      >
        <div className="glass-card p-2 sm:p-4 md:p-6 lg:p-8">
          
          {/* Top Bar - Status + Name */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            {/* Status Badge */}
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${availableForWork ? 'bg-[#00b894]' : 'bg-[#fd79a8]'} opacity-75`}></span>
                <span className={`relative inline-flex rounded-full h-3 w-3 ${availableForWork ? 'bg-[#00b894]' : 'bg-[#fd79a8]'}`}></span>
              </span>
              {/* <span className="text-[#b2bec3] text-sm font-mono tracking-wider">
                {availableForWork ? 'AVAILABLE FOR OPPORTUNITIES' : 'CURRENTLY UNAVAILABLE'}
              </span> */}
            </motion.div>
            

            {/* Name + Logo */}
            {/* <motion.div variants={itemVariants} className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#6c5ce7] to-[#a29bfe] flex items-center justify-center text-white font-bold text-lg">
                P
              </div>
              <span className="text-white/60 text-sm font-mono tracking-wider">
                {name.split(' ')[0]}
              </span>
            </motion.div> */}
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">

            {/* Greeting with typing effect */}
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-white/90">
                  {typedText}
                  {!isTypingComplete && (
                    <span className="inline-block w-[5px] h-[0.8em] bg-[#6c5ce7] ml-1 animate-pulse"></span>
                  )}
                </span>
               
                {/* <span className="text-gradient bg-gradient-to-r from-[#a29bfe] via-[#6c5ce7] to-[#fd79a8] bg-clip-text text-transparent">
                  Choudhary
                </span> */}
              </h1>
            </motion.div>

            {/* Title with badge */}
            {/* <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-[#a29bfe] text-sm font-medium border border-[#6c5ce7]/20">
                <Briefcase className="w-4 h-4" />
                {title}
              </span>
              <span className="text-[#b2bec3]/60 text-sm font-mono">|</span>
              <span className="text-[#b2bec3]/80 text-sm font-mono flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Remote · India
              </span>
            </motion.div> */}

            {/* Description */}
            <motion.p variants={itemVariants} className="text-[#dfe6e9] text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
              
              Full Stack MERN Developer with 1.8+ years of experience building responsive, scalable, and user-friendly web applications using{' '}
              <span className="text-[#a29bfe] font-semibold">React.js</span>,{' '}
              <span className="text-[#00b4d8] font-semibold">Node.js</span>,{' '}
              <span className="text-[#fd79a8] font-semibold">Express.js</span>, and{' '}
              <span className="text-[#00b894] font-semibold">MongoDB</span>.
            </motion.p>

            {/* Tech Stack Icons */}
            {/* <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-2xl">{tech.icon}</span>
                  <span className="text-[#b2bec3] text-sm font-medium hidden sm:inline">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div> */}

            {/* Action Buttons */}
            {/* <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
              {/* Primary CTA */}
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="group inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#6c5ce7] to-[#a29bfe] text-white font-semibold rounded-full shadow-[0_8px_30px_rgba(108,92,231,0.3)] hover:shadow-[0_12px_40px_rgba(108,92,231,0.5)] transition-all duration-300"
              >
                <span>View Projects</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              {/* Resume Button */}
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={resumeUrl}
                target="_blank"
                className="group inline-flex items-center gap-2 px-8 py-3.5 glass-hover rounded-full font-semibold text-[#dfe6e9] border border-white/10 hover:border-[#6c5ce7]/40 transition-all duration-300"
              >
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                Download Resume
              </motion.a>
              
              {/* Contact Button */}
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={`mailto:${email}`}
                className="group inline-flex items-center gap-2 px-8 py-3.5 glass-hover rounded-full font-semibold text-[#dfe6e9] border border-white/10 hover:border-[#fd79a8]/40 transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </motion.a>
            {/* </motion.div> */}

          

            {/* Social + Navigation Row */}
            {/* <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/5">
              {/* Social Icons */}
              <div className="flex items-center gap-3">
                <motion.a
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass-hover rounded-full text-[#b2bec3] hover:text-[#a29bfe] border border-white/5 hover:border-[#6c5ce7]/30 transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass-hover rounded-full text-[#b2bec3] hover:text-[#a29bfe] border border-white/5 hover:border-[#6c5ce7]/30 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  href={`mailto:${email}`}
                  className="p-3 glass-hover rounded-full text-[#b2bec3] hover:text-[#a29bfe] border border-white/5 hover:border-[#6c5ce7]/30 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
              </div>

            <motion.div
  variants={itemVariants}
  className="flex justify-center lg:justify-end"
>
  
</motion.div>
</div>
          
          {/* Profile Image Section - Moved inside the grid */}
           <div className="relative flex justify-center order-first lg:order-none 
  -mt-8 sm:-mt-12 md:-mt-16 lg:-mt-20 xl:-mt-24">
  
  {/* Glow - Responsive */}
  <div className="absolute inset-0 rounded-full 
    bg-gradient-to-r from-violet-500 via-pink-500 to-cyan-500 
    blur-2xl sm:blur-3xl opacity-30 sm:opacity-40 animate-pulse">
  </div>

  {/* Profile Image - Fully Responsive */}
  <motion.img
    src={profileImage}
    alt="Pallavi"
    initial={{ scale: 0.8 }}
    animate={{ scale: 1 }}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
    className="relative 
     w-56 h-56 
      xs:w-64 xs:h-64 
      sm:w-72 sm:h-72 
      md:w-80 md:h-80 
      xl:w-[340px] xl:h-[340px] 
      2xl:w-[400px] 2xl:h-[400px] 
      rounded-full object-cover 
      border-2 sm:border-4 border-white/50 
      shadow-[0_0_40px_rgba(108,92,231,0.3)] 
      sm:shadow-[0_0_60px_rgba(108,92,231,0.4)] 
      lg:shadow-[0_0_80px_rgba(108,92,231,0.5)] 
      hover:shadow-[0_0_100px_rgba(108,92,231,0.6)] 
      transition-all duration-300"
  />
</div>
        </div>
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;