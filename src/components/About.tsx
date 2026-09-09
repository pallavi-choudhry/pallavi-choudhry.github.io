import { motion } from "framer-motion";
import { Code2, Palette, Server, Sparkles } from "lucide-react";

// const highlights = [
//   { icon: Code2, label: "Frontend Dev", desc: "React & JavaScript" },
//   { icon: Palette, label: "UI/UX", desc: "Modern Designs" },
//   { icon: Server, label: "Backend", desc: "Node.js & MongoDB" },
//   { icon: Sparkles, label: "Responsive", desc: "All Devices" },
// ];

const About = () => {
  return (
    <section id="about" className="py-14 px-6 md:px-12 lg:px-24 relative bg-[#0a0a0f]">
      {/* Background decoration - matching hero style */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-white mb-4">
            {/* <span className="font-mono text-purple-400 text-xl">01.</span> */}
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              About Me
            </span>
            <span className="h-px bg-gradient-to-r from-purple-500/50 to-transparent flex-1 max-w-xs" />
          </h2>

         <motion.p
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.1 }}
  className="text-gray-300 leading-relaxed text-lg"
>
  I'm a <span className="text-purple-400 font-semibold">Full Stack Developer</span>{" "}
  with practical experience building modern, scalable, and user-focused web applications.
  I enjoy turning real-world requirements into complete solutions, from designing
  responsive interfaces to developing APIs and managing databases.
</motion.p>

<motion.p
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.2 }}
  className="text-gray-300 leading-relaxed"
>
  My technical expertise includes{" "}
  <span className="text-purple-400 font-semibold">HTML5</span>,{" "}
  <span className="text-purple-400 font-semibold">CSS3</span>,{" "}
  <span className="text-purple-400 font-semibold">JavaScript</span>,{" "}
  <span className="text-purple-400 font-semibold">React.js</span>,{" "}
  <span className="text-purple-400 font-semibold">Next.js</span>,{" "}
  <span className="text-purple-400 font-semibold">TypeScript</span>,{" "}
  <span className="text-purple-400 font-semibold">Node.js</span>,{" "}
  <span className="text-purple-400 font-semibold">Express.js</span>,{" "}
  <span className="text-purple-400 font-semibold">MongoDB</span>, and{" "}
  <span className="text-purple-400 font-semibold">MySQL</span>.
  I have hands-on experience with REST APIs, authentication, database management,
  state management, and frontend-backend integration.
</motion.p>

<motion.p
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.3 }}
  className="text-gray-300 leading-relaxed"
>
  Currently, I'm contributing to the{" "}
  <span className="text-purple-400 font-semibold">
    Gayatri Parivar website
  </span>
  , where I work across the application to improve UI/UX, responsiveness,
  and backend-driven functionality. I've also integrated and worked on systems
  including <span className="text-purple-400 font-semibold">Pathology Services</span>,{" "}
  <span className="text-purple-400 font-semibold">Serve Now</span>, and{" "}
  <span className="text-purple-400 font-semibold">DMS</span>.
  My focus is on writing clean, maintainable code and delivering reliable solutions
  that solve real business problems.
</motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;