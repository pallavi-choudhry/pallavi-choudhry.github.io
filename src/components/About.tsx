import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="pt-24 md:pt-28 pb-14 px-6 md:px-12 lg:px-24 relative bg-[#0a0a0f]">
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
            I'm a{" "}
            <span className="text-purple-400 font-semibold">Full Stack Developer</span>{" "}
            with nearly 2 years of experience building modern, responsive, and
            user-focused web applications, with a strong focus on{" "}
            <span className="text-purple-400 font-semibold">React.js</span> and frontend
            development. I enjoy creating clean, intuitive, and reusable user interfaces
            that provide a smooth experience across different devices and screen sizes.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 leading-relaxed"
          >
            My primary frontend expertise includes{" "}
            <span className="text-purple-400 font-semibold">React.js</span>,{" "}
            <span className="text-purple-400 font-semibold">JavaScript</span>,{" "}
            <span className="text-purple-400 font-semibold">TypeScript</span>,{" "}
            <span className="text-purple-400 font-semibold">Next.js</span>,{" "}
            <span className="text-purple-400 font-semibold">HTML5</span>,{" "}
            <span className="text-purple-400 font-semibold">CSS3</span>, and responsive UI
            development. I have experience working with component-based architecture,
            state management, API integration, form handling, authentication, and creating
            reusable UI components. I focus on writing maintainable code and building
            interfaces that are both functional and easy to use.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-300 leading-relaxed"
          >
            Along with my frontend expertise, I have hands-on experience with backend
            technologies such as{" "}
            <span className="text-purple-400 font-semibold">Node.js</span>,{" "}
            <span className="text-purple-400 font-semibold">Express.js</span>, and
            databases like{" "}
            <span className="text-purple-400 font-semibold">MongoDB</span> and{" "}
            {/* <span className="text-purple-400 font-semibold">PostgreSQL</span>. */}
             I'm
            comfortable designing RESTful APIs, handling server-side logic, and connecting
            frontend applications to backend services. This full stack perspective helps me
            collaborate effectively across the stack and build end-to-end features with a
            clear understanding of how data flows through an application.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-gray-300 leading-relaxed"
          >
            I'm passionate about continuous learning, clean architecture, and delivering
            products that solve real problems. I thrive in collaborative environments and
            enjoy turning ideas into polished, production-ready applications.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;