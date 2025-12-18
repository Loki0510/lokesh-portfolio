import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition">
            <span className="text-xs bg-blue-600 px-3 py-1 rounded-full">
              Featured Project
            </span>

            <h3 className="text-2xl font-semibold mt-3">
              Rice Leaf Disease Prediction
            </h3>

            <p className="text-gray-400 mt-2">
              Ensemble deep learning model for crop disease detection.
            </p>

            <p className="text-green-400 text-sm mt-2">
              ✔ 97% accuracy on 16,000+ images
            </p>

            <a
              href="https://github.com/Loki0510"
              target="_blank"
              className="inline-flex items-center gap-2 text-blue-500 mt-4"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
