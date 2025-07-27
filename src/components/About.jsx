import React from "react";
import { motion } from "framer-motion";



const About = () => {
  return (
    <motion.div
      className="max-w-4xl mx-auto text-gray-300"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-orange-400 mb-6 text-center">👩‍💻 About Me</h2>

      <div className="max-w-4xl mx-auto">

        <div className="max-w-4xl mx-auto">

         <section className="px-6 py-12 md:px-12 max-w-4xl mx-auto">
  <p className="text-lg md:text-l leading-relaxed md:leading-loose mb-6 text-gray-800 dark:text-gray-200">
    Hello! I'm <span className="text-orange-500 font-semibold">Pratiksha Patil</span>, a passionate <span className="text-orange-500">3rd-year Computer Engineering student</span> at <span className="text-orange-500">Bhivarabai Sawant Institute of Technology, Pune</span>. My academic journey began at <span className="text-orange-500">Sundarbai Marathe Vidyalaya</span>, where I completed my 10th standard, followed by my HSC from <span className="text-orange-500">Nutan Marathe Vidyalaya College, Pune</span>.
    <br /><br />
    Over time, I’ve grown into a committed <span className="text-orange-500">Full Stack Web Developer</span> with hands-on experience in building dynamic, responsive, and user-friendly web applications. I specialize in technologies like <span className="text-orange-500">React.js, Node.js, Firebase</span>, and more — always eager to learn, build, and innovate.
    <br /><br />
    Apart from my technical skills, I take pride in my <span className="text-orange-500">problem-solving attitude</span>, which drives me to approach every challenge as an opportunity to grow. Whether it's debugging a tricky issue, designing a user-centric interface, or learning a new framework — I'm always up for it.
    <br /><br />
    I'm on a mission to build impactful digital solutions while constantly learning and evolving.
  </p>
</section>

        </div>
      </div>
    </motion.div>
  );
};

export default About;
