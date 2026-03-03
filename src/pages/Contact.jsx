import React from "react";
import contactHeroImg from "../assets/images/contact-us.png";

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <section
        className="relative w-full h-[80vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `url(${contactHeroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-800/60 to-gray-900/80"></div>
        <div className="relative z-10 px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Let’s Build Your Next Opportunity Together
          </h1>
          <p className="text-gray-200 text-lg">
            Reach out to discuss partnerships, projects, investments, or strategic advisory.
          </p>
          <a
            href="#contact-form"
            className="mt-6 inline-block bg-[#C8A24A] text-gray-900 font-semibold px-8 py-3 rounded hover:bg-yellow-600 transition"
          >
            Contact Us Now
          </a>
        </div>
      </section>

      {/* CONTACT FORM + IMAGE SIDE BY SIDE */}
      <section
        id="contact-form"
        className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12"
      >
        {/* FORM */}
        <div className="flex-1 bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">Send Us a Message</h2>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Organization (Optional)
              </label>
              <input
                type="text"
                placeholder="Company / Institution"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Tell us about your project or inquiry..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* IMAGE */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src={contactHeroImg}
            alt="Contact Visual"
            className="rounded-xl shadow-lg object-cover w-full h-[500px] md:h-auto"
          />
        </div>
      </section>

      {/* SEPARATE CONTACT INFO SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-stretch gap-12">
          <div className="flex-1 bg-gray-100 p-12 rounded-xl flex flex-col justify-center shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Contact Information</h2>

            <p className="mb-4">
              <strong>Office Address:</strong><br />
              14 Mission Street<br />
              Kuku Hill, Osu R.E<br />
              Accra, Ghana
            </p>

            <p className="mb-4">
              <strong>Phone:</strong><br />
              +233 244643965
            </p>

            <p className="mb-4">
              <strong>Email:</strong><br />
              support@forthworthg.com
            </p>

            <p className="text-sm text-gray-500 mt-4">
              Our team typically responds within 24–48 business hours.
            </p>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="bg-[#0B1F3A] py-16 text-center text-white px-6">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Take the Next Step?
        </h2>
        <p className="max-w-2xl mx-auto text-gray-300 mb-6">
          Submit your project details or inquiry and our team will respond promptly.
        </p>
        <a
          href="#contact-form"
          className="inline-block bg-[#C8A24A] text-gray-900 font-semibold px-8 py-3 rounded hover:bg-yellow-600 transition"
        >
          Contact Us Now
        </a>
      </section>

    </div>
  );
};

export default Contact;