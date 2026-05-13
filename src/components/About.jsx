import { motion } from "framer-motion";


function About() {
  return (
    
    <div id="about" className="max-w-4xl mx-auto p-4 bg-gray-700 rounded-lg shadow-md rounded-full border-2 border-blue-500  mt-8">
       
    < motion.h1
      className="text-4xl font-bold px-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, color: "#3b82f6" }}
      transition={{ duration: 0.6 }}>About Me</motion.h1>
        
    <motion.div className="flex items-center justify-between px-8 py-4 w-260" transition={{ duration: 0.4 }}>
     
        
        <p className="text-lg mb-2">
            Hi! I'm a passionate web developer with a love for creating beautiful and functional websites. I have experience in HTML, CSS, JavaScript, and React. I enjoy learning new technologies and continuously improving my skills.If you'd like to know more about me or my work, feel free to reach out!
        </p>
        
        <motion.img 
          src="pic.jpg" 
          alt="My Photo" 
          className="rounded-full mx-auto h-100 w-100 object-cover border-4 border-blue-500 mt-4" 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />
    </motion.div>
    </div>
  );
}

export default About;