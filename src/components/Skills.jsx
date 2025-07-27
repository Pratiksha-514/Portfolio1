import React from "react";
import { motion } from "framer-motion";

const skillsData = [
  {
    title: "Frontend",
    color: "text-orange-300",
    tools: ["React.js", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    color: "text-orange-300",
    tools: ["Node.js", "Express.js", "Firebase"],
  },
  {
    title: "Tools & Others",
    color: "text-orange-300",
    tools: ["Git & GitHub", "VS Code"],
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const Skills = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-orange-400 mb-12 text-center">
        💻 Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-[#1a1a1a] p-6 rounded-2xl shadow-lg border border-orange-500 hover:shadow-orange-500 transition duration-300"
          >
            <h3 className={`text-2xl font-semibold mb-4 ${skill.color}`}>
              {skill.title}
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {skill.tools.map((tool, i) => (
                <li key={i}>{tool}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
