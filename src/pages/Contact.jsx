import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Let’s Build Your Next Opportunity Together
          </h1>
          <p className="text-gray-300">
            Reach out to discuss partnerships, projects, investments, or strategic advisory.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">

        {/* CONTACT FORM */}
        <div className="bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">
            Send Us a Message
          </h2>

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

        {/* CONTACT INFO */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">
            Contact Information
          </h2>

          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              <strong>Office Address:</strong><br />
              14 Mission Street<br />
              Kuku Hill, Osu R.E<br />
              Accra, Ghana
            </p>

            <p>
              <strong>Phone:</strong><br />
              +233 XXX XXX XXX
            </p>

            <p>
              <strong>Email:</strong><br />
              admin@forthworthg.com
            </p>

            <p className="text-sm text-gray-500 mt-6">
              Our team typically responds within 24–48 business hours.
            </p>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="bg-blue-700 py-16 text-center text-white px-6">
        <h2 className="text-3xl font-bold mb-4">
          Strategic Partnerships Start Here
        </h2>
        <p className="max-w-2xl mx-auto text-blue-100">
          Whether you are seeking advisory, investment opportunities, or project
          facilitation, ForthWorth G. is ready to support your vision.
        </p>
      </section>

    </div>
  );
};

export default Contact;
