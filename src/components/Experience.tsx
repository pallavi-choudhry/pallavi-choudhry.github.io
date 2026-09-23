import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

type ExperienceType = "work" | "education";

interface ExperienceItem {
  type: ExperienceType;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  tech: string[];
}

const experiences: ExperienceItem[] = [
  {
    type: "work",
    role: "Software Developer",
    company: "ANORG Technologies",
    location: "Gondia",
    period: "Sept 2024 — June 2026",
    description: [
    //   "Working as a Full Stack Developer on production web applications.",
      "Building responsive UIs with React.js, Next.js, TypeScript, and Tailwind CSS.",
      "Developing REST APIs, authentication flows, and database schemas using Node.js, Express.js, MongoDB, and MySQL.",
      "Collaborating with cross-functional teams to ship features, fix bugs.",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
  },
//   {
//     type: "education",
//     role: "B.Tech",
//     company: "Bachelor of Technology",
//     location: "Balaghat, MadhyaPradesh",
//     period: "Completed",
//   },
  
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="scroll-mt-24 py-14 px-6 md:px-12 lg:px-24 relative bg-[#0a0a0f]"
    >
      {/* Background decoration — matches About / Skills */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-white mb-8">
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Experience
            </span>
            <span className="h-px bg-gradient-to-r from-purple-500/50 to-transparent flex-1 max-w-xs" />
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-purple-500/50 via-indigo-500/30 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, i) => {
              const Icon = exp.type === "work" ? Briefcase : GraduationCap;
              return (
                <motion.div
                  key={`${exp.company}-${exp.role}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="relative pl-12 md:pl-16"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-2 top-1 flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded-full border border-purple-500/40 bg-[#0a0a0f]">
                    <Icon className="h-4 w-4 text-purple-400" />
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-purple-500/30 transition-colors">
                    {/* Role + period/location */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 mb-3">
                      <h3 className="text-lg md:text-xl font-semibold text-white">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" />
                          {exp.period}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-purple-400 font-semibold mb-4">
                      {exp.company}
                    </p>

                    {/* Bullets */}
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((line, idx) => (
                        <li
                          key={idx}
                          className="flex gap-3 text-gray-300 leading-relaxed"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;