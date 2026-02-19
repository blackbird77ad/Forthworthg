import ceoImg from "../assets/images/goh.jpg";

const About = () => {
  const bridges = [
    "Businesses to Government Opportunities",
    "Investors to Bankable Projects",
    "International Firms to African Markets",
    "Developers to Strategic Resources",
    "Institutions to Trusted Partners",
    "Opportunities to Structured Execution",
  ];

  const values = [
    {
      title: "Integrity in Every Deal",
      desc: "We operate with discretion, transparency, and accountability across all engagements.",
    },
    {
      title: "Excellence in Execution",
      desc: "Our work is structured, disciplined, and focused on measurable commercial outcomes.",
    },
    {
      title: "Strategic Partnership",
      desc: "We build long-term relationships that create sustained value for our clients.",
    },
    {
      title: "Cross-Border Impact",
      desc: "Connecting global opportunities with African market potential.",
    },
    {
      title: "Long-Term Value",
      desc: "We structure solutions designed for sustainability and growth.",
    },
  ];

  const approach = [
    "Discovery & Strategic Alignment",
    "Opportunity Identification",
    "Deal Structuring & Partner Matching",
    "Implementation Support",
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative bg-gradient-to-r from-gray-900 to-blue-900 text-white py-28 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About ForthWorth G.
          </h1>
          <p className="max-w-3xl mx-auto text-gray-200 text-lg leading-relaxed">
            ForthWorth G. is a global business facilitation and advisory firm
            based in Accra, Ghana — connecting the right people to the right
            opportunities and translating relationships into results.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              ForthWorth G. is a cross-sectoral business advisory firm helping
              clients unlock commercial value through strategic deal structuring,
              procurement facilitation, relationship management, and international
              trade linkages.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With over two decades of experience and a globally connected
              network, we support companies seeking market entry, expansion,
              partnerships, and investment opportunities across Africa and beyond.
            </p>
          </div>

          <div className="bg-gray-100 h-80 rounded-xl shadow-inner flex items-center justify-center text-gray-400">
            Corporate Image Placeholder
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center grid md:grid-cols-2 gap-10">
          <div className="bg-white p-10 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To bridge opportunity and execution by facilitating impactful
              business partnerships, transactions, and trade relationships.
            </p>
          </div>

          <div className="bg-white p-10 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be the preferred partner in Africa for businesses seeking
              strategic linkages, trade facilitation, and market success.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE CONNECT */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">
            Connecting Opportunity Across Markets
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-left">
            {bridges.map((item, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold text-lg mb-2">{item}</h3>
                <p className="text-gray-600 text-sm">
                  We align stakeholders, mitigate risk, and structure pathways
                  for successful execution.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <img
              src={ceoImg}
              alt="Gilbert Ossei Hyeamann"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">
              Gilbert Ossei Hyeamann
            </h2>
            <p className="text-blue-700 font-medium mb-4">
              Founder & CEO
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Gilbert Ossei Hyeamann is a respected business advisor and global
              facilitator with over 20 years of experience in deal structuring,
              procurement, and international trade.
            </p>
            <p className="text-gray-600 leading-relaxed">
              He has successfully advised and hosted high-level trade delegations
              and facilitated millions in investment partnerships across Ghana
              and international markets, with a reputation built on results,
              diplomacy, and discretion.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Our Core Values</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {values.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-lg transition"
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

      {/* APPROACH */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Our Approach</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {approach.map((step, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold">
                  {i + 1}
                </div>
                <h3 className="font-semibold">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CREDIBILITY STRIP */}
      <section className="bg-gray-900 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center text-white">
          <div>
            <h3 className="text-3xl font-bold">20+</h3>
            <p className="text-gray-300">Years Experience</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">30+</h3>
            <p className="text-gray-300">Trade Delegations</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">Global</h3>
            <p className="text-gray-300">Network Reach</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">Millions</h3>
            <p className="text-gray-300">Deals Facilitated</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 py-20 px-6 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Let’s Build Your Next Opportunity
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-blue-100">
          Speak with our team to explore trade, investment, procurement, or
          strategic partnership opportunities.
        </p>
        <button className="bg-white text-blue-700 px-10 py-3 rounded font-semibold hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </>
  );
};

export default About;
