const Experience = () => {
  return (
    <section className="py-24 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-10">Experience</h2>

        <div className="space-y-8 border-l border-gray-700 pl-6">
          <div>
            <h3 className="text-xl font-semibold">GenAI Intern – Ideabytes</h3>
            <p className="text-gray-400 text-sm mb-2">May 2025 – Aug 2025</p>
            <ul className="list-disc list-inside text-gray-300 text-sm">
              <li>Built RAG pipelines using FAISS and LLMs</li>
              <li>Deployed AI applications on AWS</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Data Science Intern – VFSTR</h3>
            <p className="text-gray-400 text-sm mb-2">Jan 2024 – Apr 2024</p>
            <ul className="list-disc list-inside text-gray-300 text-sm">
              <li>Mentored students in Python & ML</li>
              <li>Worked with TensorFlow & Keras</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
