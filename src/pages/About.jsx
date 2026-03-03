import React from "react";
import { Link } from "react-router-dom"; // or "next/link" if using Next.js

// Images
import heroImg from "../assets/images/final-about-hero-image.avif";
import whoWeAreImg from "../assets/images/who-we-are.jpg";
import opportunityImg from "../assets/images/deal-structuring-money-house-human-img.jpg";
import dealStructuringImg from "../assets/images/Implementation-Support.jpg";
import implementationImg from "../assets/images/handshake.jpg"; // updated

const About = () => {
  return (
    <>
      {/* HERO */}
      <section
        className="relative w-full h-[90vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F3A]/80 to-[#0B1F3A]/30"></div>
        <div className="relative z-10 px-6 max-w-3xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            About ForthWorth G.
          </h1>
          <p className="text-gray-200 text-lg md:text-xl leading-relaxed">
            Connecting businesses, investors, and institutions with structured
            opportunities across Africa and beyond. Our journey is defined by
            impact, integrity, and results.
          </p>

          {/* Hero CTAs */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/services"
              className="bg-yellow-400 text-[#0B1F3A] px-8 py-3 rounded font-semibold hover:opacity-90 transition"
            >
              Our Services
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border border-yellow-400 text-yellow-400 px-8 py-3 rounded font-semibold hover:bg-yellow-400 hover:text-[#0B1F3A] transition"
            >
              Contact Us
            </Link>
            <Link
              to="/contact" // changed to Contact page
              className="bg-white text-[#0B1F3A] px-8 py-3 rounded font-semibold hover:bg-gray-200 transition"
            >
              Explore Opportunities
            </Link>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#0B1F3A] mb-6">
              Who We Are
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              ForthWorth G. is a global business facilitation and advisory
              firm based in Accra, Ghana. We specialize in connecting the right
              people to the right opportunities, structuring deals, and
              facilitating cross-border partnerships.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With over two decades of experience, our network spans local and
              international markets, ensuring measurable results and
              sustainable value for our clients.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={whoWeAreImg}
              alt="Who We Are"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0B1F3A] mb-4">Our Approach</h2>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            From discovering strategic opportunities to structuring high-value
            deals and supporting implementation, our approach ensures measurable
            results for our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Step 1 */}
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img
              src={opportunityImg}
              alt="Opportunity Discovery"
              className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10 flex items-end p-6">
              <div>
                <span className="text-yellow-400 font-bold text-2xl">1</span>
                <h3 className="text-white font-semibold text-xl mt-2">
                  Opportunity Discovery
                </h3>
                <p className="text-gray-200 text-sm mt-1">
                  Identify strategic business opportunities aligned with client
                  goals and market realities.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img
              src={dealStructuringImg}
              alt="Deal Structuring"
              className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10 flex items-end p-6">
              <div>
                <span className="text-yellow-400 font-bold text-2xl">2</span>
                <h3 className="text-white font-semibold text-xl mt-2">
                  Deal Structuring & Partner Matching
                </h3>
                <p className="text-gray-200 text-sm mt-1">
                  Structure transactions and align partners for secure, scalable
                  outcomes with compliance, transparency, and measurable impact.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img
              src={implementationImg}
              alt="Implementation Support"
              className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10 flex items-end p-6">
              <div>
                <span className="text-yellow-400 font-bold text-2xl">3</span>
                <h3 className="text-white font-semibold text-xl mt-2">
                  Implementation Support
                </h3>
                <p className="text-gray-200 text-sm mt-1">
                  Hands-on execution support to ensure strategies and deals are
                  successfully implemented for measurable impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#0B1F3A] py-24 px-6 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Explore Your Next Opportunity?
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-gray-300 leading-relaxed">
          Connect with ForthWorth G. today to discover trade, investment,
          procurement, or strategic partnership opportunities.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/services"
            className="bg-yellow-400 text-[#0B1F3A] px-8 py-3 rounded font-semibold hover:opacity-90 transition"
          >
            Our Services
          </Link>
          <Link
            to="/contact"
            className="bg-transparent border border-yellow-400 text-yellow-400 px-8 py-3 rounded font-semibold hover:bg-yellow-400 hover:text-[#0B1F3A] transition"
          >
            Contact Us
          </Link>
          <Link
            to="/contact" // changed to Contact page
            className="bg-white text-[#0B1F3A] px-8 py-3 rounded font-semibold hover:bg-gray-200 transition"
          >
            Explore Opportunities
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;