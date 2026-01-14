const Services = () => {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative bg-gray-900 text-white py-28 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight drop-shadow-lg">
            Our Services
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-gray-300 text-lg">
            Strategic consulting, brokerage, and facilitation services designed
            to connect organizations with the right projects, partners, and
            resources across borders.
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            What We Do at ForthWorth G.
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
            ForthWorth G. operates at the intersection of consulting, brokerage,
            and execution support. We help governments, corporations, and
            international businesses identify opportunities, structure viable
            projects, and connect with trusted partners for successful delivery.
          </p>
        </div>
      </section>

      {/* ================= CORE SERVICES ================= */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-14">
            Core Service Areas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Strategic Consulting & Advisory",
                desc: "High-level business, market entry, and growth advisory services for local and international organizations seeking structured expansion."
              },
              {
                title: "Project & Opportunity Brokerage",
                desc: "We identify, package, and connect viable projects with investors, contractors, financiers, and execution partners."
              },
              {
                title: "Government & Public Sector Projects",
                desc: "Advisory and facilitation support for government-led initiatives, infrastructure projects, and public-private partnerships."
              },
              {
                title: "Building & Construction Facilitation",
                desc: "Connecting developers, contractors, suppliers, and financiers for construction and infrastructure delivery."
              },
              {
                title: "International Trade & Business Facilitation",
                desc: "Supporting cross-border trade, procurement, sourcing, and partnership development across Africa and beyond."
              },
              {
                title: "Investment & Resource Linkages",
                desc: "Linking businesses to capital, materials, expertise, and strategic resources required for execution."
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW WE WORK ================= */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-14">
            How We Work
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              "Opportunity Identification",
              "Strategic Structuring",
              "Partner & Resource Matching",
              "Execution Support"
            ].map((step, index) => (
              <div key={index}>
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <h4 className="font-semibold">{step}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTORS ================= */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">
            Industries & Sectors We Serve
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-gray-700">
            <div className="bg-white py-6 rounded-lg">Infrastructure</div>
            <div className="bg-white py-6 rounded-lg">Construction</div>
            <div className="bg-white py-6 rounded-lg">Energy & Utilities</div>
            <div className="bg-white py-6 rounded-lg">Trade & Logistics</div>
            <div className="bg-white py-6 rounded-lg">Manufacturing</div>
            <div className="bg-white py-6 rounded-lg">Government</div>
            <div className="bg-white py-6 rounded-lg">SMEs & Corporates</div>
            <div className="bg-white py-6 rounded-lg">International Investors</div>
          </div>
        </div>
      </section>

      {/* ================= VISUAL PLACEHOLDER ================= */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            From Strategy to Execution
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-10">
            Our work goes beyond advice — we actively connect stakeholders,
            facilitate partnerships, and support execution.
          </p>

          {/* Placeholder for video / image */}
          <div className="bg-gray-300 h-80 rounded-xl flex items-center justify-center text-gray-600">
            Video / Project Visual Placeholder
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-blue-600 py-20 text-white text-center px-6">
        <h2 className="text-3xl font-bold mb-4">
          Let’s Structure the Right Opportunity
        </h2>
        <p className="mb-8 text-gray-100">
          Speak with our advisory team to explore how we can support your next project.
        </p>
        <button className="bg-white text-blue-600 px-10 py-3 rounded font-semibold hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </>
  );
};

export default Services;
