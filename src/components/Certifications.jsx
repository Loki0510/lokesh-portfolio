import { FaMicrosoft } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";

const Certifications = () => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-10">
        Certifications
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {/* Microsoft Certification */}
        <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition">
          <div className="flex items-center gap-3 mb-3">
            <FaMicrosoft className="text-3xl text-blue-500" />
            <h3 className="text-xl font-semibold">
              Microsoft Certified: Designing and Implementing a Data Science Solution on Azure (DP-700)
            </h3>
          </div>

          <p className="text-gray-400 mb-4">
            Validates expertise in building, training, deploying, and
            operationalizing machine learning and data science solutions on Azure.
          </p>

          <a
            href="https://learn.microsoft.com/en-us/credentials/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View Certificate →
          </a>
        </div>

        {/* IIT & Other Certifications */}
        <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition">
          <div className="flex items-center gap-3 mb-3">
            <SiGoogleclassroom className="text-3xl text-green-500" />
            <h3 className="text-xl font-semibold">
              IIT Kharagpur & Professional Certifications
            </h3>
          </div>

          <ul className="text-gray-400 space-y-2 mb-4 list-disc list-inside">
            <li>Cloud Computing — IIT Kharagpur</li>
            <li>Programming, Data Structures & Algorithms using Python — IIT Kharagpur</li>
            <li>Problem Solving through Programming in C — IIT Kharagpur</li>
            <li>Artificial Intelligence Foundations — LinkedIn</li>
            <li>Software Project Management — IIT Kharagpur</li>
          </ul>

          <p className="text-sm text-gray-500">
            Certificates available upon request
          </p>
        </div>

      </div>
    </section>
  );
};

export default Certifications;
