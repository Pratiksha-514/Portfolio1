import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Learning Platform",
    description: "Built a fully responsive learning portal using React, Firebase, and Tailwind. Includes video lectures, quizzes, and user auth.",
    tech: ["HTML","CSS"],
   
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio to showcase projects, blogs, and skills with animated UI.",
    tech: ["React", "Framer Motion", "Vercel"],
   
  },
  {
    title: "E-Commerce App",
    description: "Full-stack e-commerce store with cart, auth, admin dashboard and real-time updates.",
    tech: ["React", "Node.js", "MongoDB"],

  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-orange-400 mb-12 text-center">
        🚀 Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-[#1a1a1a] p-6 rounded-2xl border border-orange-500 hover:shadow-lg hover:shadow-orange-400 transition"
          >
            <h3 className="text-2xl font-semibold text-orange-300 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-sm bg-orange-600 text-white px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:underline"
            >
           
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
