import React from "react";
import heroImg from "../assets/images/Africa-Investment.jpg"; // Hero image only

const Services = () => {
  const coreServices = [
    {
      title: "Transaction & Deal Structuring",
      desc: "End-to-end advisory for structuring viable partnerships, joint ventures, investment arrangements, and commercial transactions aligned with market realities.",
    },
    {
      title: "Procurement & Purchasing Facilitation",
      desc: "Trusted supplier sourcing, compliance navigation, logistics coordination, and cost optimization for cross-border procurement.",
    },
    {
      title: "Business Linkages & Strategic Partnerships",
      desc: "Data-driven partner identification and B2B matchmaking to unlock growth opportunities and long-term commercial relationships.",
    },
    {
      title: "Trade Delegation & Market Entry Advisory",
      desc: "Planning and managing high-value trade missions, stakeholder engagements, and market immersion programs across Africa.",
    },
    {
      title: "Government & Institutional Advisory",
      desc: "Support for public sector initiatives, investment promotion, and public-private partnership structuring.",
    },
    {
      title: "Investment & Opportunity Facilitation",
      desc: "Connecting viable projects with investors, financiers, technical partners, and execution resources.",
    },
  ];

  const steps = [
    "Opportunity Identification",
    "Commercial & Risk Assessment",
    "Deal Structuring & Partner Matching",
    "Implementation Support",
  ];

  const sectors = [
    "Infrastructure",
    "Construction",
    "Energy & Utilities",
    "Trade & Logistics",
    "Manufacturing",
    "Oil & Gas",
    "Government & Public Sector",
    "International Investors",
  ];

  return (
    <div className="bg-gray-50">

      {/* HERO IMAGE */}
      <section
        className="relative w-full h-[70vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-gray-800/50 to-gray-900/70"></div>
        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Advisory. Structuring. Execution.
          </h1>
          <p className="text-gray-200 text-lg">
            ForthWorth G. delivers strategic advisory and business facilitation
            services that transform opportunities into structured, executable,
            and bankable outcomes across Africa and global markets.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Connecting Strategy to Results</h2>
          <p className="text-gray-600 leading-relaxed">
            We operate at the intersection of advisory, facilitation, and execution.
            Our role goes beyond consulting — we structure deals, connect decision-makers,
            and support implementation to ensure measurable commercial outcomes.
          </p>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-14">Core Service Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {coreServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENT PROCESS */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-14">Our Engagement Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {steps.map((step, index) => (
              <div key={index}>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
                <h4 className="font-semibold text-gray-800">{step}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="bg-blue-900 text-white py-20 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Why Clients Choose ForthWorth G.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div>
              <h4 className="font-semibold mb-2">Strategic Network Access</h4>
              <p className="text-blue-100 text-sm">
                Direct engagement with government institutions, regulators,
                embassies, and industry leaders.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Local Insight, Global Standards</h4>
              <p className="text-blue-100 text-sm">
                Deep African market understanding delivered with international
                best practices.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Execution-Focused</h4>
              <p className="text-blue-100 text-sm">
                We move beyond advisory — supporting negotiations, facilitation,
                and implementation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Industries & Sectors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-gray-700">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="bg-white py-6 rounded-lg shadow-sm hover:shadow-md transition"
              >
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 py-20 text-white text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Let’s Structure Your Next Opportunity</h2>
        <p className="mb-8 text-blue-100">
          Engage our team to explore partnerships, investments, procurement, or market entry opportunities.
        </p>
        <a
          href="/contact"
          className="bg-white text-blue-700 px-10 py-3 rounded font-semibold hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default Services;