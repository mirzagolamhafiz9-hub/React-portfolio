function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      tech: "React + Tailwind CSS",
      live: "https://mirza-portfolio-tau-amber-83.vercel.app/"
    },
    {
      title: "Todo App",
      tech: "JavaScript",
      live: "#"
    },
    {
      title: "E-commerce UI",
      tech: "Next.js",
      live: "#"
    },
  ];

  return (
    <div
      id="projects"
      className="max-w-6xl mx-auto px-4 md:px-8 py-10 shadow-2xl shadow-black/40"
    >
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        Projects
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 text-white p-6 rounded-2xl border border-gray-700 hover:-translate-y-2 transition duration-300 hover:bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-lg"
          >
            <h2 className="text-xl md:text-2xl font-bold mb-3">
              {project.title}
            </h2>

            <p className="text-gray-300 text-sm md:text-base">
              {project.tech}
            </p>

            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 px-4 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;