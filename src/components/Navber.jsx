import React, { useState } from "react";
import { motion } from "framer-motion";

function Navber() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white px-4 md:px-8 py-4 shadow-lg sticky top-0 z-50">
      
      <div className="flex items-center justify-between">

        {/* Logo */}
        <motion.img
          src="mirza1jpg.png"
          alt="My Logo"
          className="w-28 md:w-45 h-12 md:h-15 animate-pulse"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          <li><a href="#home" className="hover:text-blue-400">Home</a></li>
          <li><a href="#about" className="hover:text-blue-400">About</a></li>
          <li><a href="#profile" className="hover:text-blue-400">Profile</a></li>
          <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
          <li><a href="#services" className="hover:text-blue-400">Services</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden mt-4 flex flex-col gap-4 text-lg">
          <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
          <li><a href="#profile" onClick={() => setOpen(false)}>Profile</a></li>
          <li><a href="#skills" onClick={() => setOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
          <li><a href="#services" onClick={() => setOpen(false)}>Services</a></li>
          <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
        </ul>
      )}

    </nav>
  );
}

export default Navber;