const Hero = () => {
  return (
    <section className="min-h-screen pt-32 flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-gray-950 to-gray-900">
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
        Lokesh <span className="text-blue-500">Vinnakota</span>
      </h1>

      <p className="mt-4 text-xl text-gray-400 max-w-3xl">
        AI & Data Engineer · Azure Certified · GenAI · Python · RAG · Cloud
      </p>

      <div className="mt-8 flex gap-4 flex-wrap justify-center">
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-600 rounded-xl hover:bg-blue-700 transition font-medium"
        >
          View Projects
        </a>

        <a
          href="/Lokesh_Vinnakota_Resume.pdf"
          download
          className="px-6 py-3 border border-gray-600 rounded-xl hover:bg-gray-800 transition font-medium"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
