import { motion } from "framer-motion";
import { Folder } from "lucide-react";

const otherProjects = [
  {
    title: "Gayatri Parivar Website",
    description:
      "A comprehensive spiritual and organizational platform for Gayatri Parivar, providing users with information about spiritual activities, education, social initiatives, events, and various services. The portal also integrates resources such as YouTube videos and Google Forms for registrations, applications, and other activities. I contributed to developing and improving the React.js-based UI, making the platform responsive, user-friendly, and accessible across different devices.",
    tech: ["React.js", "Tailwind CSS", "Javascript"],
    live: "https://gayatri-spiritual-portal.netlify.app/",
    github: "https://github.com/AnorgTechnlogies/Gayatri_Pariwar_ANORG_Frontend.git",
  },
  {
    title: "Document Management System",
    description:
      "Developed a secure, full-stack Document Management System with dedicated user and admin panels, JWT-based authentication, and role-based access control (RBAC). Implemented PDF access restrictions, allowing users to view the first three pages for free and unlock additional content through PayPal payments. Integrated Cloudinary for file storage and built RESTful APIs using Node.js, Express.js, and MongoDB to support secure document access and efficient data management.",
    tech: ["React.js", "Material UI", "Framer Motion", "Node.js", "Express.js","JWT token", "Rest APIs", "MongoDB"  ],
  //  live: "https://gayatri-spiritual-portal.netlify.app/",
    github: "https://github.com/pallavi-choudhry/Updated-DMS-project-.git",
  },
 
  {
    title: "Finance Dashboard",
    description:
      "Developed a full-stack Finance Dashboard using the MERN stack to manage financial records, track income and expenses, and visualize financial performance. Implemented secure JWT-based authentication and role-based access control (Admin, Analyst, and Viewer), along with transaction CRUD operations, filtering, and dashboard analytics. Integrated RESTful APIs with MongoDB for persistent data storage and deployed the frontend on Netlify and backend on Render.",
    tech: ["React.js", "Node.js", "JWT Token", "Rest APIs", "Express.js", "MongoDB"],
    live: "https://record-finance-dashboard.netlify.app/login",
    github: "https://github.com/pallavi-choudhry/Finance_Dashboard_Backend",
  },

  // {
  //   title: "Service Booking System",
  //   description:
  //     "Admin dashboard for managing products, orders, and customer data with real-time updates.",
  //   tech: ["React", "Node.js", "MongoDB"],
  //  live: "https://gayatri-spiritual-portal.netlify.app/",
  //   github: "https://github.com/AnorgTechnlogies/Gayatri_Pariwar_ANORG_Frontend.git",
  // },

  {
    title: "Dental Appointment",
    description:
      "Developed a full-stack Dental Appointment Management System to simplify appointment scheduling and improve patient-doctor coordination. Implemented secure user authentication, doctor listings, available time slots, appointment booking and cancellation, and appointment history. Built RESTful APIs using Node.js and Express.js, with MongoDB for data management and React.js for an interactive, responsive user interface. Included role-based access for patients and administrators to support efficient appointment management.",
    tech: ["React", "Express.js", "MongoDB"],
    // live: "https://gayatri-spiritual-portal.netlify.app/",
    // github: "https://github.com/AnorgTechnlogies/Gayatri_Pariwar_ANORG_Frontend.git",
  },

  // {
  //   title: "Psychology Online Test",
  //   description:
  //     "Full-stack task management application with user authentication and team collaboration.",
  //   tech: ["React", "Express.js", "MongoDB"],
  //   live: "https://gayatri-spiritual-portal.netlify.app/",
  //   github: "https://github.com/AnorgTechnlogies/Gayatri_Pariwar_ANORG_Frontend.git",
  // },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-14 px-6 md:px-12 lg:px-24 relative bg-[#0a0a0f]"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="flex items-center gap-2 text-2xl md:text-3xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Some Things I've Built
            </span>
            <span className="h-px bg-gradient-to-r from-purple-500/50 to-transparent flex-1 max-w-xs" />
          </h2>
          <p className="text-gray-300 mb-16 max-w-2xl">
            Here are some of my recent projects that showcase my skills and
            experience.
          </p>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, borderColor: "#8b5cf6" }}
                className="group border border-purple-500/20 hover:border-purple-500/40 p-6 rounded-2xl transition-all duration-300 bg-white/5 backdrop-blur-sm flex flex-col"
              >
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
                    <Folder className="w-6 h-6 text-white" />
                  </div>
                </div>

                <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h4>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 text-xs font-mono mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-purple-400 bg-purple-500/10 px-2 py-1 rounded-md border border-purple-500/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* 🔗 Links as text below tech */}
                <div className="flex flex-wrap gap-4 text-sm font-medium pt-3 border-t border-purple-500/10">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white-500 hover:text-purple-400 transition-colors underline-offset-4 hover:underline"
                    >
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white-500 hover:text-purple-400 transition-colors underline-offset-4 hover:underline"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;