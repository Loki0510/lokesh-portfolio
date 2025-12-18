const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-4">
          About <span className="text-blue-500">Me</span>
        </h2>

        <p className="text-gray-400 max-w-3xl mb-8">
          Computer Science graduate student at the University of Cincinnati with
          hands-on experience in AI, Data Engineering, and Generative AI systems.
        </p>

        <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-12">
          <span>⚡ Python</span>
          <span>☁ Azure & AWS</span>
          <span>🤖 GenAI & RAG</span>
          <span>📊 Data Engineering</span>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="font-semibold mb-2">What I Do</h3>
            <p className="text-gray-400 text-sm">
              Build scalable AI, ML, and RAG-based applications deployed on cloud.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Experience</h3>
            <p className="text-gray-400 text-sm">
              Industry internships working with LLMs, FAISS, TensorFlow, and real datasets.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Career Goal</h3>
            <p className="text-gray-400 text-sm">
              Seeking AI / Data Engineering roles to build impactful solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
