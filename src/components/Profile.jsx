import { motion } from "framer-motion";

function Profile() {
  return (
    <motion.div
      id="profile"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9 }}
      className="shadow-2xl shadow-black/40 bg-gray-700 max-w-4xl mx-auto p-4 md:p-8 rounded-lg shadow-md mt-8"
    >
      {/* Title */}
      <h1 className="text-2xl md:text-4xl font-bold mb-6 py-3 px-4 md:px-8   text-center">
        Profile 
      </h1>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center gap-6 px-4 md:px-8 py-4">

        {/* Image */}
        <motion.img
          src="/azom.jpeg"
          alt="Profile Image"
          className="rounded-full w-40 h-40 md:w-80 md:h-80 object-cover border-4 border-blue-500"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.9 }}
        />

        {/* Text */}
        <p className="text-base md:text-lg text-gray-900 text-center md:text-left">
           I am a passionate Frontend Developer who enjoys building modern,
           responsive, and user-friendly websites using React, JavaScript,
           HTML, CSS, and Tailwind CSS. I love learning new technologies,
           improving my skills, and creating clean and interactive web
           experiences that work smoothly across all devices.
        </p>

      </div>
    </motion.div>
  );
}

export default Profile;