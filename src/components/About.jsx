import { motion } from "framer-motion";

function About() {
  return (
    <div
      id="about"
      className="max-w-4xl mx-auto p-4 md:p-8 bg-gray-700 rounded-lg shadow-md mt-8 shadow-2xl shadow-black/40"
    >
      {/* Title */}
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05, color: "#3b82f6" }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h1>

      {/* Content */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Text */}
        <p className="text-base md:text-lg text-center md:text-left">
          Hi! I'm a passionate web developer with a love for creating beautiful
          and functional websites. I have experience in HTML, CSS, JavaScript,
          and React. I enjoy learning new technologies and continuously
          improving my skills. If you'd like to know more about me or my work,
          feel free to reach out!
        </p>

        {/* Image */}
        <motion.img
          src="pic.jpg"
          alt="My Photo"
          className="rounded-full w-40 h-40 md:w-60 md:h-60 object-cover border-4 border-blue-500"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />
      </motion.div>
    </div>
  );
}

export default About;