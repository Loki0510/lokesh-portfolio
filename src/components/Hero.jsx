const Hero = () => {
  return (
    <section className="min-h-screen pt-32 flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-gray-950 to-gray-900">
      <h1 className="text-5xl md:text-6xl font-extrabold">
        Lokesh <span className="text-blue-500">Vinnakota</span>
      </h1>

      <p className="mt-4 text-xl text-gray-400 max-w-3xl">
        AI & Data Engineer · Azure Certified · GenAI · Python · RAG · Cloud
      </p>

      <p className="mt-2 text-gray-500 max-w-3xl">
        I build AI-powered and data-driven applications that transform raw data
        into actionable insights using modern ML and cloud technologies.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-600 rounded-xl hover:bg-blue-700 transition"
        >
          View Projects
        </a>

        <a
          href="/Lokesh_Vinnakota_Resume.pdf"
          target="_blank"
          className="px-6 py-3 border border-gray-600 rounded-xl hover:bg-gray-800 transition"
        >
          View Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
