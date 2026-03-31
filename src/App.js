function App() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#020617] text-white font-sans">
      {/* NAVBAR */}
      <div className="fixed top-0 w-full bg-[#020617]/90 backdrop-blur border-b border-gray-800 flex justify-center gap-8 py-4 z-50">
        {["home", "about", "skills", "projects", "contact"].map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item)}
            className="text-gray-400 hover:text-blue-500 transition"
          >
            {item.toUpperCase()}
          </button>
        ))}
      </div>

      {/* HERO */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center text-center px-5 pt-20 bg-gradient-to-r from-[#020617] via-[#0f172a] to-[#020617]"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-3">
          Anandakumara K R
        </h1>

        <h2 className="text-xl text-gray-400">Senior Mobile App Developer</h2>

        <p className="text-gray-500 mt-2">Flutter (Android & iOS)</p>

        <button
          onClick={() => scrollToSection("projects")}
          className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
        >
          View My Work
        </button>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 text-center bg-[#0f172a] px-5">
        <h2 className="text-3xl font-semibold mb-5">About Me</h2>

        <p className="max-w-3xl mx-auto text-gray-400 leading-7">
          I am a Senior Mobile App Developer with 8+ years of experience in
          building high-quality Android and Flutter applications. I specialize
          in scalable, high-performance apps with modern UI/UX.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-20 text-center px-5">
        <h2 className="text-3xl font-semibold mb-8">Skills</h2>

        <div className="flex flex-wrap justify-center gap-4">
          {["Flutter", "Dart", "Android", "Firebase", "REST API", "Git"].map(
            (skill, index) => (
              <div
                key={index}
                className="bg-gray-900 px-5 py-2 rounded-lg border border-gray-800 hover:scale-105 transition"
              >
                {skill}
              </div>
            ),
          )}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 text-center bg-[#0f172a] px-5">
        <h2 className="text-3xl font-semibold mb-10">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-gray-900 p-5 rounded-xl border border-gray-800 hover:scale-105 transition">
            <h3 className="text-xl mb-2">Fleet Tracking App</h3>
            <p className="text-gray-400 text-sm">
              Real-time GPS tracking system with analytics dashboard.
            </p>
          </div>

          <div className="bg-gray-900 p-5 rounded-xl border border-gray-800 hover:scale-105 transition">
            <h3 className="text-xl mb-2">Hyper Park / Valet</h3>
            <p className="text-gray-400 text-sm">
              Smart parking and valet booking system.
            </p>
          </div>

          <div className="bg-gray-900 p-5 rounded-xl border border-gray-800 hover:scale-105 transition">
            <h3 className="text-xl mb-2">ERP Integration App</h3>
            <p className="text-gray-400 text-sm">
              ERP-integrated mobile application for operations.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 text-center px-5">
        <h2 className="text-3xl font-semibold mb-5">Contact</h2>

        <p className="text-gray-400">📧 anandkumarcrpatna@gmail.com</p>
        <p className="text-gray-400 mt-2">🔗 LinkedIn | GitHub</p>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-5 border-t border-gray-800 text-gray-500">
        © 2026 Anandakumara K R
      </footer>
    </div>
  );
}

export default App;
