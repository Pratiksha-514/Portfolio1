import React from "react";
import { Link } from "react-scroll";


const Navbar = () => {
    return (
        <header className="fixed top-0 left-0 w-full bg-black bg-opacity-80 shadow-md z-50">
            <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
               <div className="text-center ">
  <h2 className="text-3xl font-semibold tracking-wide text-orange-400 font-[Poppins] uppercase border-b-2 border-orange-500 inline-block pb-1">
    Portfolio
  </h2>
</div>

                <ul className="hidden md:flex space-x-8 text-white text-lg">
                    <li>
                        <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-orange-400 transition">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-orange-400 transition">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="skills" smooth={true} duration={500} className="cursor-pointer hover:text-orange-400 transition">
                            Skills
                        </Link>
                    </li>
                    <Link
                        to="achievements"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer text-white hover:text-[#ff6600] transition"
                    >
                        Achievements
                    </Link>

                    <li>
                        <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-orange-400 transition">
                            Projects
                        </Link>
                    </li>
               
                    <li>
                        <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-orange-400 transition">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
