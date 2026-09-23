import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#080812] border-t border-purple-500/20 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* Top */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Left */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Pallavi <span className="text-purple-400">Choudhary</span>
            </h2>

            <p className="text-purple-300 mt-2 font-medium">
              Full Stack MERN Developer
            </p>

            <p className="text-gray-400 mt-4 leading-7">
              Passionate about building scalable,
              responsive and modern web applications
              using React.js, Node.js, Express.js and MongoDB.
            </p>
          </div>

          {/* Center */}
          <div className="flex flex-col gap-4 md:items-center">

            <h3 className="text-white font-semibold">
              Quick Links
            </h3>

            <Link to="/about" className="text-gray-400 hover:text-purple-400 transition">
              About
            </Link>

            <Link to="/skills" className="text-gray-400 hover:text-purple-400 transition">
              Skills
            </Link>

            <Link to="/projects" className="text-gray-400 hover:text-purple-400 transition">
              Projects
            </Link>

            <Link to="/contact" className="text-gray-400 hover:text-purple-400 transition">
              Contact
            </Link>

          </div>

          {/* Right */}
          <div className="md:text-right">

            <h3 className="text-white font-semibold">
              Connect
            </h3>

            <div className="flex md:justify-end gap-4 mt-5">

              <motion.a
                whileHover={{ scale: 1.15 }}
                href="https://github.com/your-github"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-purple-500/30 flex items-center justify-center text-gray-300 hover:bg-purple-600 hover:text-white transition"
              >
                <Github size={20} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.15 }}
                href="https://linkedin.com/in/your-linkedin"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-purple-500/30 flex items-center justify-center text-gray-300 hover:bg-purple-600 hover:text-white transition"
              >
                <Linkedin size={20} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.15 }}
                href="mailto:your@email.com"
                className="w-11 h-11 rounded-full border border-purple-500/30 flex items-center justify-center text-gray-300 hover:bg-purple-600 hover:text-white transition"
              >
                <Mail size={20} />
              </motion.a>

            </div>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-2 mt-8 text-purple-400 hover:text-purple-300 transition"
            >
              Back to Top
              <ArrowUp size={18} />
            </button>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Pallavi Choudhary. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Built with React • TypeScript • Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;