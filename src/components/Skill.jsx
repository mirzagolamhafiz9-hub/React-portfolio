function Skill() {
  const skills = ["HTML", "CSS", "JavaScript","Python", "Django","MySQL","React","Next.js","Bootstrap","Tailwind CSS",""];

  return (
    <div id="skills" className=" max-w-6xl mx-auto p-6 rounded-lg shadow-md ">
      <h1 className="text-4xl font-bold mb-8">
        Skills
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="relative p-[2px] rounded-2xl overflow-hidden ">
            
            {/* Rotating Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-spin"></div>

            {/* Content */}
            <div className="relative bg-black text-white rounded-2xl p-6 flex items-center justify-center h-32 hover:bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 transition-colors duration-300">
              <h2 className="text-xl font-semibold">
                {skill}
              </h2>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Skill;