const About = () => {
  return (
    <>
      {/* ================= HERO ================= */}
<section className="relative bg-gray-900 text-white">
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 text-center">
    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
      About ForthWorth G.
    </h1>
    <p className="max-w-3xl mx-auto text-gray-200 text-base md:text-lg leading-relaxed">
      A multidisciplinary consulting and business facilitation firm connecting
      governments, investors, and enterprises to structured opportunities
      across borders.
    </p>
  </div>
</section>


     <section className="bg-white py-20 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
    <div>
      <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        ForthWorth G. is a consulting, brokerage, and business facilitation firm
        headquartered in Accra, Ghana, with a global operational outlook.
      </p>
      <p className="text-gray-600 leading-relaxed">
        We operate at the intersection of strategy, infrastructure, trade,
        government engagement, and international business — helping
        organizations identify, structure, and execute high-value projects and
        partnerships.
      </p>
    </div>

    <div className="bg-gray-100 h-80 rounded-xl"></div>
  </div>
</section>

<section className="bg-gray-50 py-20 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-12">
      Connecting Opportunity Across Sectors
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-left">
      {[
        "Businesses to Government Projects",
        "Investors to Viable Opportunities",
        "International Firms to Local Markets",
        "Developers to Strategic Resources",
        "Private Enterprises to Public Initiatives",
        "Ideas to Executable Structures",
      ].map((item, i) => (
        <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="font-semibold text-lg mb-2">{item}</h3>
          <p className="text-gray-600 text-sm">
            We act as the strategic bridge that aligns interests, mitigates
            risk, and ensures execution.
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="bg-white py-20 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
    <div>
      <h2 className="text-3xl font-bold mb-6">
        Global Reach, Local Intelligence
      </h2>
      <p className="text-gray-600 leading-relaxed">
        We combine international best practices with deep African market
        knowledge, enabling clients to operate confidently in diverse and
        emerging environments.
      </p>
    </div>

    <div className="bg-gray-100 h-80 rounded-xl"></div>
  </div>
</section>



      {/* ================= VALUES ================= */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">What We Stand For</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                title: "Integrity",
                desc: "We operate with transparency, accountability, and ethical rigor in every engagement.",
              },
              {
                title: "Strategic Excellence",
                desc: "Our solutions are data-driven, carefully structured, and built for long-term impact.",
              },
              {
                title: "Global Perspective",
                desc: "We combine international best practices with deep local market intelligence.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
    <div className="bg-gray-100 h-80 rounded-xl"></div>

    <div>
      <h2 className="text-3xl font-bold mb-6">Our Areas of Operation</h2>
      <ul className="space-y-3 text-gray-600">
        <li>• Consulting & Strategic Advisory</li>
        <li>• Brokerage & Deal Structuring</li>
        <li>• Building & Construction Projects</li>
        <li>• Government & Public Sector Projects</li>
        <li>• International Trade & Procurement</li>
        <li>• Infrastructure & Development Initiatives</li>
      </ul>
    </div>
  </div>
</section>

<section className="bg-gray-50 py-20 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-12">Our Approach</h2>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {[
        "Discovery & Alignment",
        "Opportunity Identification",
        "Structuring & Advisory",
        "Execution & Oversight",
      ].map((step, i) => (
        <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="font-semibold mb-2">{step}</h3>
          <p className="text-gray-600 text-sm">
            A disciplined, transparent approach designed for long-term value.
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-100 h-72 rounded-xl shadow-inner"></div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
            <ul className="space-y-4 text-gray-600">
              <li>• Proven experience facilitating high-value transactions</li>
              <li>• Trusted advisory across multiple industries</li>
              <li>• Deep understanding of African and global markets</li>
              <li>• Strong international networks and partnerships</li>
              <li>• Results-focused, execution-driven approach</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 py-20 px-6 text-center text-white">
  <h2 className="text-3xl font-bold mb-4">
    Let’s Structure the Right Opportunity
  </h2>
  <p className="max-w-2xl mx-auto mb-8 text-gray-100">
    Whether you are seeking projects, partners, resources, or strategic
    guidance, ForthWorth G. is ready to support your vision.
  </p>
  <button className="bg-white text-blue-600 px-10 py-3 rounded font-semibold hover:bg-gray-100 transition">
    Contact Our Team
  </button>
</section>


      {/* ================= CREDIBILITY STRIP ================= */}
      <section className="bg-gray-900 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center text-white">
          <div>
            <h3 className="text-3xl font-bold">20+</h3>
            <p className="text-gray-300 mt-1">Years Experience</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">30+</h3>
            <p className="text-gray-300 mt-1">Trade Delegations</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">Global</h3>
            <p className="text-gray-300 mt-1">Market Reach</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">Multi-Sector</h3>
            <p className="text-gray-300 mt-1">Expertise</p>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default About;
