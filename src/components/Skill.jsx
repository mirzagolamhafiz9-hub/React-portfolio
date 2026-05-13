function Skill() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
    "Django",
    "MySQL",
    "React",
    "Next.js",
    "Bootstrap",
    "Tailwind CSS",
  ];

  return (
    <div
      id="skills"
      className="shadow-2xl shadow-black/40 max-w-6xl mx-auto px-4 md:px-8 py-10"
    >
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        Skills
      </h1>

      {/* Skill Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="relative p-[2px] rounded-2xl overflow-hidden group"
          >
            {/* Animated Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-pulse"></div>

            {/* Content */}
            <div className="relative bg-black text-white rounded-2xl p-6 flex items-center justify-center h-28 md:h-32 transition duration-300 group-hover:bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
              <h2 className="text-lg md:text-xl font-semibold text-center">
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