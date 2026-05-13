function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      tech: "React + Tailwind",
    },
    {
      title: "Todo App",
      tech: "JavaScript",
    },
    {
      title: "E-commerce UI",
      tech: "Next.js",
    },
  ];

  return (
    <div id="projects" className="max-w-6xl mx-auto p-6 rounded-lg shadow-md ">
      <h1 className="text-4xl font-bold mb-8">
        Projects
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 text-white p-6 rounded-2xl border border-gray-700 hover:-translate-y-2 transition duration-300 hover:bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
          >
            <h2 className="text-2xl font-bold mb-3">
              {project.title}
            </h2>

            <p className="text-gray-400">
              {project.tech}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;