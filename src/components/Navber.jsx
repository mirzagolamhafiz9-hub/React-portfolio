import React from "react";

import { motion } from "framer-motion";


function Navber() {
  return (
    <nav className="bg-gray-800 text-white px-8 py-4 shadow-lg sticky top-0 z-50">
      <div className="flex items-center justify-between">
        
        {/* Logo */}
        <motion.img 
          src="mirza1jpg.png" 
          alt="My Logo" 
          className="w-45 h-15 animate-pulse " 
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
        />

        {/* Menu */}
        <ul className="flex gap-8 text-lg font-medium">
          <li>
            <a
              href="#home"
              className="hover:text-blue-400 transition duration-300"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-blue-100 transition duration-300"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#profile"
              className="hover:text-blue-400 transition duration-300"
            >
              Profile
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="hover:text-blue-400 transition duration-300"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-blue-400 transition duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="hover:text-blue-400 transition duration-300"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-blue-400 transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navber;