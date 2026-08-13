import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone, Send, MapPin } from "lucide-react";

const contactLinks = [
  { icon: Github, href: "https://github.com/pallavi-choudhry/", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "pallavich343@gmail.com", label: "Email" },
  { icon: Phone, href: "tel:+8305171343", label: "Phone" },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden bg-[#0a0a0f]">
      {/* Background decoration - matching hero style */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block font-mono text-purple-400 text-sm mb-4 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/10 backdrop-blur-sm"
          >
            04. What's Next?
          </motion.span> */}
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          
          <p className="text-gray-300 text-lg mb-12 leading-relaxed max-w-xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question, want to collaborate,
            or just want to say hi, I'll try my best to get back to you!
          </p>

          {/* <motion.a
            href="mailto:your.email@example.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-purple-500/30 transition-all text-lg"
          >
            <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            Say Hello
          </motion.a> */}

          {/* Contact cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="relative p-6 rounded-2xl flex flex-col items-center gap-3 group border border-purple-500/20 hover:border-purple-500/40 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-indigo-500/10 flex items-center justify-center group-hover:from-purple-500 group-hover:to-indigo-600 transition-all duration-300">
                  <link.icon className="w-6 h-6 text-purple-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
                  {link.label}
                </span>
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10" />
              </motion.a>
            ))}
          </div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex items-center justify-center gap-2 text-gray-400"
          >
            <MapPin className="w-4 h-4 text-purple-400" />
            <span className="text-sm">India</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;