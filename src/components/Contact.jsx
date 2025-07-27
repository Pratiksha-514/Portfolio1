// src/components/Contact.jsx
import React, { useState } from "react";

import { saveContactedUser } from "../services/firebase.service"; // Adjust path

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await saveContactedUser(formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 max-w-md mx-auto bg-gray-900 rounded-lg shadow-md">
      <input
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
        required
        className="w-full p-2 rounded bg-gray-800 text-white"
      />
      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your Email"
        required
        className="w-full p-2 rounded bg-gray-800 text-white"
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your Message"
        required
        className="w-full p-2 rounded bg-gray-800 text-white"
      />
    <button
  type="submit"
  className="w-full bg-[#ff6600] hover:bg-orange-600 transition transform hover:scale-105 text-white px-4 py-3 rounded-lg font-semibold"
>
  Send Message 🚀
</button>

    </form>
  );
};

export default Contact;
