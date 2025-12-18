const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-950 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-4xl font-extrabold mb-4">
          About <span className="text-blue-500">Me</span>
        </h2>

        <p className="text-gray-400 mb-12 max-w-3xl">
          I’m a Computer Science graduate student at the University of Cincinnati
          with a strong focus on Artificial Intelligence, Data Engineering, and
          Cloud technologies. I enjoy building scalable, real-world systems that
          transform data into meaningful insights.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          
          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="font-semibold mb-2">What I Do</h3>
            <p className="text-gray-400 text-sm">
              Design and build AI, Machine Learning, and GenAI applications,
              including RAG systems, data pipelines, and cloud-deployed solutions
              using Python, Azure, and AWS.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Hands-On Experience</h3>
            <p className="text-gray-400 text-sm">
              Gained industry experience through internships working with LLMs,
              FAISS, TensorFlow, and real-world datasets, focusing on performance,
              scalability, and usability.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="font-semibold mb-2">What I’m Looking For</h3>
            <p className="text-gray-400 text-sm">
              Actively seeking internship or entry-level roles in AI Engineering,
              Data Engineering, or Software Development where I can contribute,
              learn, and grow with innovative teams.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
