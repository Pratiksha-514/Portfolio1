// import React from "react";
// import { motion } from "framer-motion";

// const blogs = [
//   {
//     title: "How I Built an E-Learning Website",
//     description:
//       "From idea to deployment, I built an interactive E-learning platform using React, Firebase, and Tailwind CSS.",
//     link: "#blog1",
//   },
//   {
//     title: "Understanding React Hooks",
//     description: "An in-depth look at React Hooks and how to use them effectively.",
//     link: "#blog2",
//   },
//   {
//     title: "CSS Grid vs Flexbox",
//     description: "Comparison and practical uses of CSS Grid and Flexbox.",
//     link: "#blog3",
//   },
//   {
//     title: "Optimizing Web Performance",
//     description: "Tips and tricks to make your web apps faster.",
//     link: "#blog4",
//   },
// ];

// const fadeIn = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.2, duration: 0.6 },
//   }),
// };

// const Blog = () => {
//   return (
//     <div className="max-w-6xl mx-auto px-4">
//       <h2 className="text-4xl font-bold text-orange-400 mb-12 text-center">📚 Blog Posts</h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
//         {blogs.map((blog, index) => (
//           <motion.div
//             key={index}
//             custom={index}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeIn}
//             className="bg-[#1a1a1a] p-6 rounded-xl border border-orange-500 hover:shadow-lg hover:shadow-orange-400 transition"
//           >
//             <h3 className="text-2xl font-semibold text-orange-300 mb-2">{blog.title}</h3>
//             <p className="text-gray-300 mb-4">{blog.description}</p>
//             <a
//   href={`data:text/html,${encodeURIComponent(`
//     <html>
//       <head>
//         <title>How I Built an E-Learning Website</title>
//         <style>
//           body { font-family: sans-serif; padding: 2rem; line-height: 1.6; background-color: #1c1f2b; color: #f4f4f4; }
//           h1 { color: #FFA500; }
//           a { color: #FFA500; text-decoration: none; }
//         </style>
//       </head>
//       <body>
//         <h1>🚀 How I Built an E-Learning Website for Engineering Students</h1>
//         <p>As an engineering student, I wanted to create a platform to help others access structured, skill-focused content throughout all 4 years of their degree.</p>
//         <h2>💡 Step 1: Idea & Planning</h2>
//         <p>I identified the problem that many students lack easy access to organized, clear, and job-focused resources. My goal was to fix that.</p>
//         <h2>🧱 Step 2: Learning HTML, CSS & JS</h2>
//         <p>I started with HTML to structure pages, CSS for styling, and JS to add interactivity.</p>
//         <h2>⚛️ Step 3: React.js</h2>
//         <p>I moved to React to handle dynamic content and routing.</p>
//         <h2>🔥 Step 4: Firebase Integration</h2>
//         <p>I used Firebase to store videos, user data, and manage authentication.</p>
//         <h2>🎨 Step 5: UI/UX with Tailwind & Framer Motion</h2>
//         <p>I designed an elegant and responsive interface with smooth animations and mobile support.</p>
//         <h2>🧠 What I Learned</h2>
//         <p>Through this project, I learned how to plan full-stack applications, write clean code, and deliver value to users.</p>
//         <p>Thank you for reading!</p>
//       </body>
//     </html>
//   `)}`}
//   className="text-orange-400 hover:text-orange-200 transition"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Read More &rarr;
// </a>

//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Blog;
