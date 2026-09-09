import { motion } from "framer-motion";
import { ExternalLink, Github, Folder, ArrowUpRight } from "lucide-react";

// const featuredProject = {
//   title: "Gayatri Parivar Website",
//   description:
//     "A comprehensive organizational website featuring pathology services integration, Serve Now platform, and DMS backend system. Implemented complete UI redesign with responsive layouts, ensuring optimal user experience across all devices.",
//   tech: ["React.js", "Node.js", "MongoDB", "CSS3"],
//   features: ["Responsive Design", "Backend Integration", "DMS System", "Pathology Portal"],
// };

const otherProjects = [

  {
    title: "Gayatri Parivar Website",
  description:
    "A comprehensive organizational website featuring pathology services integration, Serve Now platform, and DMS backend system. Implemented complete UI redesign with responsive layouts, ensuring optimal user experience across all devices.",
  tech: ["React.js", "Node.js", "MongoDB", "CSS3"]
  },

  {
    title: "Document Management System",
    description: "Personal developer portfolio showcasing skills and projects with modern animations.",
    tech: ["React", "Material UI", "Framer Motion"],
  },

  {
    title: "Finanace Dashboard",
    description: "Full-stack task management application with user authentication and team collaboration.",
    tech: ["React", "Express.js", "MongoDB"],
  },
  {
    title: "Service Booking System",
    description: "Admin dashboard for managing products, orders, and customer data with real-time updates.",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Dental Appointment",
    description: "Full-stack task management application with user authentication and team collaboration.",
    tech: ["React", "Express.js", "MongoDB"],
  },

  {
    title: "Psycology Online Test",
    description: "Full-stack task management application with user authentication and team collaboration.",
    tech: ["React", "Express.js", "MongoDB"],
  },

  // {
  //   title: "Pathology Test Report System",
  //   description: "Full-stack task management application with user authentication and team collaboration.",
  //   tech: ["React", "Express.js", "MongoDB"],
  // },

  // {
  //   title: "CA Portal Home Page",
  //   description: "Full-stack task management application with user authentication and team collaboration.",
  //   tech: ["React", "Express.js", "MongoDB"],
  // },
];

const Projects = () => {
  return (
    <section id="projects" className="py-14 px-6 md:px-12 lg:px-24 relative bg-[#0a0a0f]">
      {/* Background decoration - matching hero style */}
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
            {/* <span className="font-mono text-purple-400 text-xl">03.</span> */}
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Some Things I've Built
            </span>
            <span className="h-px bg-gradient-to-r from-purple-500/50 to-transparent flex-1 max-w-xs" />
          </h2>
          <p className="text-gray-300 mb-16 max-w-2xl">
            Here are some of my recent projects that showcase my skills and experience.
          </p>

          {/* Featured Project */}
          {/* <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mb-24"
          >
            <div className="grid md:grid-cols-12 gap-4 items-center">
              <div className="md:col-span-7 relative group"> */}
                {/* <div className="relative rounded-2xl overflow-hidden border border-purple-500/20 aspect-video bg-gradient-to-br from-purple-900/30 via-indigo-900/30 to-purple-900/30 backdrop-blur-sm"> */}
                  {/* <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-500/10 group-hover:opacity-0 transition-opacity duration-500 z-10" />
                  <div className="w-full h-full flex items-center justify-center">
                    <motion.span 
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-7xl"
                    >
                      🏛️
                    </motion.span>
                  </div> */}
                  {/* Glow effect */}
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent" /> */}
                  {/* Hover overlay */}
                  {/* <div className="absolute inset-0 bg-purple-600/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 backdrop-blur-sm">
                    <div className="flex gap-4">
                      <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors border border-white/20">
                        <Github className="w-6 h-6 text-white" />
                      </a>
                      <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors border border-white/20">
                        <ExternalLink className="w-6 h-6 text-white" />
                      </a>
                    </div>
                  </div> */}
                {/* </div> */}
              {/* </div> */}

              {/* <div className="md:col-span-5 md:text-right md:-ml-16 relative z-10"> */}
                {/* <motion.span
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="inline-block font-mono text-purple-400 text-sm mb-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/10 backdrop-blur-sm"
                >
                  ⭐ Featured Project */}
                {/* </motion.span> */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 max-w-7xl mx-auto">
  
  {/* Card 1 */}
  {/* <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(108,92,231,0.2)]">
    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 text-left">
      {featuredProject.title}
    </h3>
    
    <div className="mb-4">
      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
        {featuredProject.description}
      </p>
    </div>
    
    <div className="flex flex-wrap justify-start gap-2 mb-4">
      {featuredProject.features.map((feature) => (
        <span 
          key={feature} 
          className="text-xs font-mono text-purple-400 bg-purple-500/10 px-3 py-1.5 rounded-full border border-purple-500/20"
        >
          {feature}
        </span>
      ))}
    </div>
    
    <div className="flex flex-wrap justify-start gap-3 text-xs font-mono text-gray-400">
      {featuredProject.tech.map((t) => (
        <span key={t} className="hover:text-purple-400 transition-colors">
          {t}
        </span>
      ))}
    </div>
  </div> */}

  {/* Card 2 */}
  {/* <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(108,92,231,0.2)]">
    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 text-left">
      Gayatri Parivar Website
    </h3>
    
    <div className="mb-4">
      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
        A comprehensive organizational website featuring pathology services integration, Serve Now platform, and DMS backend system. Implemented complete UI redesign with responsive layouts.
      </p>
    </div>
    
    <div className="flex flex-wrap justify-start gap-2 mb-4">
      <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-3 py-1.5 rounded-full border border-purple-500/20">
        Responsive Design
      </span>
      <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-3 py-1.5 rounded-full border border-purple-500/20">
        Backend Integration
      </span>
      <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-3 py-1.5 rounded-full border border-purple-500/20">
        DMS System
      </span>
      <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-3 py-1.5 rounded-full border border-purple-500/20">
        Pathology Portal
      </span>
    </div>
    
    <div className="flex flex-wrap justify-start gap-3 text-xs font-mono text-gray-400">
      <span className="hover:text-purple-400 transition-colors">React.js</span>
      <span className="hover:text-purple-400 transition-colors">Node.js</span>
      <span className="hover:text-purple-400 transition-colors">MongoDB</span>
      <span className="hover:text-purple-400 transition-colors">CSS3</span>
    </div>
  </div> */}

  {/* Card 3 - Other Noteworthy Projects */}
  {/* <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(108,92,231,0.2)]">
    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 text-left">
      Other Noteworthy Projects
    </h3>
    
    <div className="mb-4">
      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
        A collection of projects I've worked on
      </p>
    </div> */}
    
    {/* <div className="flex flex-wrap justify-start gap-2 mb-4">
      {/* Add features here */}
    </div>
     
    {/* <div className="flex flex-wrap justify-start gap-3 text-xs font-mono text-gray-400"> */}
      {/* Add tech here */}
    {/* </div> */}
  {/* </div> */}
{/* </div> */}
          {/* </motion.div> */}

          {/* Other Projects */}
          {/* <div className="text-center mb-12">
            <h3 className="text-xl font-semibold text-white mb-2">Other Noteworthy Projects</h3>
            <p className="text-gray-400 text-sm">A collection of projects I've worked on</p>
          </div> */}
          
          <div className="grid md:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, borderColor: '#8b5cf6' }}
                className="group border border-purple-500/20 hover:border-purple-500/40 p-6 rounded-2xl transition-all duration-300 bg-white/5 backdrop-blur-sm"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
                    <Folder className="w-6 h-6 text-white" />
                  </div>
                  {/* <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  </div> */}
                </div>
                <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h4>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  {project.tech.map((t) => (
                    <span key={t} className="text-purple-400 bg-purple-500/10 px-2 py-1 rounded-md border border-purple-500/20">
                      {t}
                    </span>
                  ))}
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