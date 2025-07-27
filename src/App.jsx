import React, { Suspense, useState } from "react";


import Achievements from "./components/Achievements";



import Footer from "./components/Footer";

import { motion } from "framer-motion";
import {
  FiSend,
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";

import profilePic from "./assets/me3.jpg";
import bgImage from "./assets/port13.jpg";
import cert1 from "./assets/top.jpg";
import cert2 from "./assets/top2.jpg";
import cert3 from "./assets/100M.jpg"
import cert4 from "./assets/12th.jpg"
import cert5 from "./assets/11th1.jpg"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 

const About = React.lazy(() => import('./components/About')) ;
const Skills = React.lazy(() => import('./components/Skills')) ;
const Projects = React.lazy(() => import('./components/Projects')) ;
const Contact = React.lazy(() => import('./components/Contact')) ;
const Navbar = React.lazy(() => import('./components/Navbar')) ;



const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
      type: "spring",
      stiffness: 100,
    },
  }),
};


;

const certificates = [
  {
    title: "First Year Result",
    image: cert1,
  },
  {
    title: "First Year - 1st Rank",
    image: cert2,
  },
  {
    title: "First Year - 100 Out Of 100 In Mathetamtics",
    image: cert3,
  },
  {
    title: "12th - 2nd Ranker",
    image: cert4,
  },
  {
    title: "11th - Ranks in Different Subjects",
    image: cert5,
  },

];


const App = () => {
  const [visibleCert, setVisibleCert] = useState(null);
const handleViewCertificate = (imagePath) => {
  const imageURL = imagePath.startsWith("./")
    ? `${window.location.origin}/${imagePath.replace("./", "")}`
    : imagePath;
  window.open(imageURL, "_blank");
};

  return (
    
    <div className="bg-[#0d0d0d] text-white font-sans">
   <Suspense> <Navbar/></Suspense>

      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 bg-cover bg-center relative overflow-hidden mb-12"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundAttachment: "scroll",
          backgroundRepeat: "no-repeat",
        }}
      >
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-20"
          initial="hidden"
          animate="visible"
          variants={sectionVariant}
        >
          <div className="text-left text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#ff6600] leading-tight mb-4">
              Pratiksha Balaji Patil
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-200 mb-6">
              Full Stack Web Developer 🚀
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed text-sm sm:text-base">
              Passionate about crafting beautiful, scalable and high-performing
              websites using modern technologies like React, Node.js, and
              Firebase.
            </p>
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-[#ff6600] text-white rounded-full text-base font-medium hover:bg-orange-600 transition"
            >
              Contact Me
            </a>
          </div>

          <motion.div
            className="flex justify-center md:justify-end"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={profilePic}
              alt="Pratiksha Balaji Patil"
              className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-[#ff6600] shadow-lg"
            />
          </motion.div>
        </motion.div>
      </section>

      <motion.section id="about" className="scroll-mt-20 px-4 sm:px-6 py-20 mb-12" initial="hidden" whileInView="visible" variants={sectionVariant} viewport={{ once: true }}><Suspense><About /></Suspense></motion.section>
      <motion.section id="skills" className="px-4 sm:px-6 py-20 mb-12" initial="hidden" whileInView="visible" variants={sectionVariant} viewport={{ once: true }}> <Suspense> <Skills/></Suspense></motion.section>
      <motion.section id="achievements" className="px-4 sm:px-6 py-20 mb-12" initial="hidden" whileInView="visible" variants={sectionVariant} viewport={{ once: true }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-orange-400 mb-8 text-center">Achievements</h2>
          <motion.div className="space-y-4" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {["🏆 Secured 1st rank with a CGPA of 9.95 in the 1st year of Engineering at BSIOTR College.",
              "🧠 Scored a perfect 100/100 in Mathematics during the 1st year, showcasing a strong problem-solving mindset.",
              "🏅 Awarded a cash prize of ₹20,000 for securing 1st rank at BSIOTR College.",
              "🥈 Ranked 2nd in the HSC Board Exams at Nutan Marathi Vidyalaya College, Pune.",
              "🎨 Headed the Decoration & Cultural Committee in the Computer Department at BSIOTR.",
              "🌟 Served as the Hobby Club In-charge on the College Level Committee at BSIOTR."
            ].map((text, i) => (
              <motion.div
                key={i}
                className="border border-orange-500 p-6 rounded-xl bg-white/10 shadow-md hover:scale-[1.02] hover:shadow-orange-300/20 transition-transform text-base sm:text-lg"
                custom={i}
                variants={item}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {text}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Certificates Section */}
      <motion.section id="certificates" className="px-4 sm:px-6 py-20 mb-12" initial="hidden" whileInView="visible" variants={sectionVariant} viewport={{ once: true }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-orange-400 mb-8 text-center">Certificates</h2>
          <motion.div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6" variants={sectionVariant}>
            {certificates.map((cert, index) => (
              <motion.div key={index} className="border border-orange-500 p-4 sm:p-6 rounded-xl bg-white/10 shadow-md hover:shadow-orange-300/10 transition-all min-h-[120px] flex flex-col justify-between" variants={item} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <h3 className="text-sm sm:text-base font-semibold text-orange-300 mb-4">📜 {cert.title}</h3>
                <button
                  onClick={() => handleViewCertificate(cert.image)}
                  className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded"
                >
                  View Certificate
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section id="projects" className="scroll-mt-20 px-4 sm:px-6 py-20 mb-12" initial="hidden" whileInView="visible" variants={sectionVariant} viewport={{ once: true }}><Suspense> <Projects/></Suspense></motion.section>

      <motion.section id="contact" className="relative scroll-mt-20 px-4 sm:px-6 py-24 text-white overflow-hidden mb-12" initial="hidden" whileInView="visible" variants={sectionVariant} viewport={{ once: true }}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-[#ff6600]/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.h2 variants={item} className="text-4xl font-extrabold mb-3">
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent">Let’s Get in Touch</span>
          </motion.h2>
          <motion.p variants={item} className="text-gray-300 mb-10">
            "Have a project or idea? Let’s build something great together."
          </motion.p>
        </div>
        <motion.div variants={item} className="relative z-10 max-w-3xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-orange-400 mb-6 flex items-center gap-2">
            <FiSend /> Send a Message
          </h3>
      <Suspense> <Contact/></Suspense>
        </motion.div>
      </motion.section>
<Suspense><Footer/></Suspense>
    </div>
  );
};

export default App;
