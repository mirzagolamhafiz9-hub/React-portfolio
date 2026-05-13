function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies.",
    },
    {
      title: "UI/UX Design",
      description:
        "Beautiful and user-friendly interfaces designed to enhance the user experience.",
    },
    {
      title: "Mobile App Development",
      description:
        "Responsive and cross-platform mobile applications for modern devices.",
    },
  ];

  return (
    <div
      id="services"
      className="max-w-6xl mx-auto px-4 md:px-8 py-10 shadow-2xl shadow-black/40"
    >
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        Services
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-900 text-white p-6 rounded-2xl border border-gray-700 shadow-lg hover:-translate-y-2 transition duration-300 hover:bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
          >
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              {service.title}
            </h2>

            <p className="text-gray-300 text-sm md:text-base leading-7">
              {service.description}
            </p>

            <button className="mt-5 px-4 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;