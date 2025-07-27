// components/Achievements.jsx
import React from "react";

const Achievements = () => {
  const data = [
    {
      title: "Completed 10+ Fullstack Projects",
      desc: "Built scalable apps using React, Node.js, and Firebase.",
    },
    {
      title: "Top Performer in Portfolio Competition",
      desc: "Recognized for outstanding UI and clean code structure.",
    },
    {
      title: "Hackathon Finalist",
      desc: "Reached finals in 2 national-level coding hackathons.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-[#ff6600] mb-10 text-center">🏆 Achievements</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item, i) => (
          <div
            key={i}
            className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg hover:shadow-[#ff6600] transition duration-300"
          >
            <h3 className="text-xl font-semibold text-[#ff6600] mb-2">{item.title}</h3>
            <p className="text-gray-300">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
