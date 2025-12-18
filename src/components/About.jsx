const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-950 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-4">
          About <span className="text-blue-500">Me</span>
        </h2>

        <p className="text-gray-400 mb-12 max-w-3xl">
          AI-focused Computer Science graduate student passionate about building
          scalable, real-world data and GenAI systems.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Who I Am</h3>
            <p className="text-gray-400 text-sm">
              Computer Science graduate student at the University of Cincinnati.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="font-semibold mb-2">What I Do</h3>
            <p className="text-gray-400 text-sm">
              Build AI, GenAI, RAG systems, and cloud-deployed ML applications.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="font-semibold mb-2">What I’m Looking For</h3>
            <p className="text-gray-400 text-sm">
              Internship or entry-level roles in AI, Data Engineering, or Software.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
