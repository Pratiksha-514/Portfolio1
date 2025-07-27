import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="bg-black text-gray-300 py-10 px-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-orange-400">Pratiksha Balaji Patil</h3>
          <p className="text-sm text-gray-400">Full Stack Web Developer</p>
        </div>

        <div className="flex space-x-6 text-xl text-orange-400">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-300">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/pratiksha-patil-12b5b032a/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-300">
            <FaLinkedin />
          </a>
          <a href="mailto:youremail@example.com" className="hover:text-orange-300">
            <FaEnvelope />
          </a>
        </div>
      </div>

      <p className="text-center text-sm text-gray-500 mt-6">
        © {new Date().getFullYear()} Pratiksha Patil. All rights reserved.
      </p>
    </motion.footer>
  );
};

export default Footer;
