import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Project 1 */}
          <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-2">
              Rice Leaf Disease Prediction
            </h3>

            <p className="text-gray-400 mb-4">
              Built an ensemble deep learning model using VGG16, InceptionV3,
              and MobileNet to classify rice leaf diseases with 97% accuracy.
              Includes an image upload interface for real-time prediction.
            </p>

            <p className="text-sm text-gray-500 mb-4">
              Tech Stack: Python, TensorFlow, Keras, CNN, Transfer Learning
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/Loki0510/Rice-Leaf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-500 hover:underline"
              >
                <FaGithub /> GitHub
              </a>

        
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-2">
              Mess Management System
            </h3>

            <p className="text-gray-400 mb-4">
              Developed a full-stack web application to manage meal planning,
              attendance tracking, and billing for a college mess system.
            </p>

            <p className="text-sm text-gray-500 mb-4">
              Tech Stack: HTML, CSS, JavaScript, MySQL
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/Loki0510/Messmgmt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-500 hover:underline"
              >
                <FaGithub /> GitHub
              </a>

              <a
                href="#"
                className="flex items-center gap-2 text-blue-500 hover:underline"
              >
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
