import{motion} from "framer-motion";

function Profile() {
  return (
    <motion.div id="profile" 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9 }}
      className="bg-blue-300 max-w-4xl mx-20 p-4  rounded-lg shadow-md mt-8 "
    >
      <h1 className="text-4xl font-bold mb-6 py-4 px-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-white rounded-full border-4 border-blue-500">
        Profile Page
      </h1>
      <div className="flex items-center justify-between px-8 py-4 ">
        <motion.img
          src="/azom.jpeg"
          alt="Profile Image"
          className="rounded-full mx-auto h-80 w-80 object-cover border-4 border-blue-500 mt-8 mr-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.9 }}
        />

      <p className="text-lg  text-gray-900">
        Hi! I'm a passionate web developer with a love for creating
        beautiful and functional websites. I have experience in HTML,
        CSS, JavaScript, and React. I enjoy learning new technologies
        and continuously improving my skills. If you'd like to know
        more about me or my work, feel free to reach out!
      </p>

      </div>
      
      

    </motion.div>
  );
};

export default Profile;