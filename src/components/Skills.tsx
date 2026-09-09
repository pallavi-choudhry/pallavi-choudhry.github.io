import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", level: 90, category: "Frontend", icon: "🌐" },
  { name: "CSS3", level: 85, category: "Frontend", icon: "🎨" },
  { name: "JavaScript", level: 85, category: "Frontend", icon: "⚡" },
  { name: "React.js", level: 80, category: "Frontend", icon: "⚛️" },
  { name: "Next.js", level: 50, category: "Frontend", icon: "▲" },
  { name: "Typescript", level: 80, category: "Frontend", icon: "🔷" },
  { name: "Tailwind CSS", level: 75, category: "Frontend", icon: "💨" },
  { name: "Git", level: 75, category: "Tools", icon: "📦" },
  { name: "Github", level: 75, category: "Tools", icon: "📦" },
  { name: "Node.js", level: 60, category: "Backend", icon: "🟢" },
  { name: "MongoDB", level: 55, category: "Database", icon: "🍃" },
  { name: "MYSQL", level: 55, category: "Database", icon: "🐬" },
  { name: "Express.js", level: 55, category: "Backend", icon: "🚂" },
];

const SkillBar = ({ skill, index }: { skill: typeof skills[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group"
  >
    <div className="border border-purple-500/20 hover:border-purple-500/40 p-4 rounded-xl transition-all duration-300 bg-white/5 backdrop-blur-sm">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-3">
          <span className="text-xl">{skill.icon}</span>
          <span className="font-mono text-sm text-white font-medium">{skill.name}</span>
        </div>
        <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-2 py-1 rounded-full border border-purple-500/20">
          {skill.level}%
        </span>
      </div>
      <div className="h-2 bg-purple-500/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full relative shadow-lg shadow-purple-500/20"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-gradient" />
        </motion.div>
      </div>
    </div>
  </motion.div>
);

const Skills = () => {
  const frontend = skills.filter((s) => s.category === "Frontend");
  const backend = skills.filter((s) => s.category === "Backend");
  const Database = skills.filter((s) => s.category === "Database");
  const tools = skills.filter((s) => s.category === "Tools");

  return (
    <section id="skills" className="py-14 px-6 md:px-12 lg:px-24 relative bg-[#0a0a0f]">
      {/* Background decoration - matching hero style */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="flex items-center gap-2 text-2xl md:text-3xl font-bold text-white mb-4">
            {/* <span className="font-mono text-purple-400 text-xl">02.</span> */}
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
            <span className="h-px bg-gradient-to-r from-purple-500/50 to-transparent flex-1 max-w-xs" />
          </h2>
          <p className="text-gray-300 mb-12 max-w-2xl">
            Technologies I've been working with recently to build modern web applications.
          </p>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Frontend */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg shadow-purple-500/20">
                  F
                </div>
                <h3 className="text-lg font-semibold text-white">Frontend</h3>
              </div>
              <div className="space-y-3">
                {frontend.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>

            {/* Backend */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg shadow-purple-500/20">
                  B
                </div>
                <h3 className="text-lg font-semibold text-white">Backend</h3>
              </div>
              <div className="space-y-3">
                {backend.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index + frontend.length} />
                ))}
              </div>
            </motion.div>

             <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg shadow-purple-500/20">
                  D
                </div>
                <h3 className="text-lg font-semibold text-white">Database</h3>
              </div>
              <div className="space-y-3">
                {Database.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index + frontend.length} />
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg shadow-purple-500/20">
                  T
                </div>
                <h3 className="text-lg font-semibold text-white">Tools</h3>
              </div>
              <div className="space-y-3">
                {tools.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index + frontend.length + backend.length} />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;