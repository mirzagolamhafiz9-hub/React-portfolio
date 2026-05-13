function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies."
    },
    {
      title: "UI/UX Design",
      description: "Beautiful and user-friendly interfaces designed to enhance the user experience."
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android."
    }
  ];

  return (
    <div id="services" className="max-w-6xl mx-auto p-6 rounded-lg shadow-md ">
      <h1 className="text-4xl font-bold mb-8">
        Services
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-900 text-white p-6 rounded-2xl border border-gray-700 hover:-translate-y-2 transition duration-300 hover:bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
          >
            <h2 className="text-2xl font-bold mb-3">
              {service.title}
            </h2>

            <p className="text-gray-400">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;