import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-20 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          Get In <span className="text-blue-500">Touch</span>
        </h2>

        <p className="text-gray-400 text-lg mb-10">
          I’m open to internship and full-time opportunities in AI, Data Engineering,
          and Software Development. Feel free to reach out!
        </p>

        <div className="flex justify-center gap-8 text-3xl">
          <a
            href="mailto:lokeshvinnakota5@gmail.com"
            className="hover:text-blue-500 transition"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://www.linkedin.com/in/vinnakotalokesh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>

        <p className="text-gray-500 text-sm mt-10">
          © {new Date().getFullYear()} Lokesh Vinnakota. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
