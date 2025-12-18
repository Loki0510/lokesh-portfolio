const Experience = () => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-10">
        Experience
      </h2>

      <div className="border-l border-gray-700 pl-6 space-y-12">

        {/* GenAI Intern */}
        <div className="relative">
          <span className="absolute -left-3 top-1 w-6 h-6 bg-blue-600 rounded-full"></span>

          <h3 className="text-2xl font-semibold">
            GenAI Intern
          </h3>
          <p className="text-gray-400">
            Ideabytes · Hyderabad, India | May 2025 – Aug 2025
          </p>

          <ul className="mt-4 list-disc list-inside text-gray-300 space-y-2">
            <li>Built a Streamlit-based application integrating OpenAI and Amazon Bedrock LLMs for multi-model comparison.</li>
            <li>Implemented Retrieval-Augmented Generation (RAG) using FAISS for question-answering over scraped web content.</li>
            <li>Enabled multimodal interaction with speech-to-text and text-to-speech pipelines.</li>
            <li>Developed multilingual translation and spelling correction workflows.</li>
            <li>Deployed the application on AWS with secure API and environment handling.</li>
          </ul>
        </div>

        {/* Data Science Intern */}
        <div className="relative">
          <span className="absolute -left-3 top-1 w-6 h-6 bg-blue-600 rounded-full"></span>

          <h3 className="text-2xl font-semibold">
            Data Science Intern
          </h3>
          <p className="text-gray-400">
            Vignan’s Foundation for Science Technology and Research · Guntur, India | Jan 2024 – Apr 2024
          </p>

          <ul className="mt-4 list-disc list-inside text-gray-300 space-y-2">
            <li>Mentored students in Python, machine learning concepts, and data structures.</li>
            <li>Conducted hands-on labs on TensorFlow, Keras, and data preprocessing techniques.</li>
            <li>Assisted faculty in lectures covering supervised and unsupervised learning, neural networks, and ensembles.</li>
            <li>Reviewed and graded ML assignments, providing detailed technical feedback.</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Experience;
