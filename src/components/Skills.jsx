import { FaPython, FaAws, FaGitAlt, FaMicrosoft } from "react-icons/fa";
import { SiTensorflow, SiPytorch, SiKeras, SiMysql } from "react-icons/si";
import { TbBrain } from "react-icons/tb";

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gray-900 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <h2 className="text-4xl font-extrabold mb-4">
          Skills & <span className="text-blue-500">Technologies</span>
        </h2>
        <p className="text-gray-400 mb-12 max-w-3xl">
          Technologies and tools I use to design, build, and deploy scalable AI,
          data engineering, and cloud-based applications.
        </p>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Programming */}
          <div className="bg-gray-800 p-6 rounded-2xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-4">Programming</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm flex items-center gap-2">
                <FaPython /> Python
              </span>
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                C
              </span>
            </div>
          </div>

          {/* AI / ML */}
          <div className="bg-gray-800 p-6 rounded-2xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-4">AI / Machine Learning</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm flex items-center gap-2">
                <TbBrain /> Machine Learning
              </span>
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm flex items-center gap-2">
                <SiTensorflow /> TensorFlow
              </span>
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm flex items-center gap-2">
                <SiKeras /> Keras
              </span>
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm flex items-center gap-2">
                <SiPytorch /> PyTorch
              </span>
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                Deep Learning
              </span>
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                CNNs
              </span>
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                Transfer Learning
              </span>
            </div>
          </div>

          {/* Cloud & Tools */}
          <div className="bg-gray-800 p-6 rounded-2xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-4">Cloud & Tools</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm flex items-center gap-2">
                <FaAws /> AWS
              </span>
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm flex items-center gap-2">
                <FaMicrosoft /> Azure
              </span>
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm flex items-center gap-2">
                <SiMysql /> MySQL
              </span>
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm flex items-center gap-2">
                <FaGitAlt /> Git
              </span>
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                VS Code
              </span>
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                Jupyter Notebook
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
