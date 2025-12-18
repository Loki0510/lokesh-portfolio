const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-900 text-center">
      <h2 className="text-4xl font-extrabold mb-4">
        Get In <span className="text-blue-500">Touch</span>
      </h2>

      <p className="text-gray-400 text-lg">
        Interested in collaborating or discussing opportunities?
      </p>

      <a
        href="mailto:lokeshvinnakota5@gmail.com"
        className="inline-block mt-6 px-6 py-3 bg-blue-600 rounded-xl hover:bg-blue-700 transition"
      >
        Contact Me
      </a>

      <p className="text-gray-500 text-sm mt-10">
        © {new Date().getFullYear()} Lokesh Vinnakota
      </p>
    </section>
  );
};

export default Contact;
