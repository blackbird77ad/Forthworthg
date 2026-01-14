const team = [
  {
    name: "Executive Director",
    role: "Strategy & Global Partnerships",
    bio: "Leads the firm’s strategic direction, international partnerships, and high-level advisory engagements across public and private sectors."
  },
  {
    name: "Head of Consulting",
    role: "Business & Government Advisory",
    bio: "Provides structured consulting support for governments, corporations, and investors navigating complex projects and markets."
  },
  {
    name: "Director of Projects",
    role: "Infrastructure & Construction",
    bio: "Oversees project facilitation across building, construction, and infrastructure developments."
  },
  {
    name: "Trade & Investment Lead",
    role: "International Business",
    bio: "Supports cross-border trade, investment sourcing, and strategic business linkages."
  },
  {
    name: "Procurement Advisor",
    role: "Sourcing & Supply Chain",
    bio: "Facilitates procurement strategy, supplier engagement, and purchasing advisory services."
  },
  {
    name: "Legal & Compliance Advisor",
    role: "Governance & Risk",
    bio: "Ensures regulatory alignment, governance structures, and compliance across engagements."
  },
  {
    name: "Operations Manager",
    role: "Execution & Delivery",
    bio: "Coordinates internal operations, stakeholder communication, and project execution support."
  }
];

const Profile = () => {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="bg-gray-900 text-white py-28 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight drop-shadow-lg">
            Our Leadership & Team
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-gray-300 text-lg">
            A multidisciplinary team of professionals bringing experience,
            integrity, and strategic insight to every engagement.
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Built on Expertise & Trust
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
            ForthWorth G. is driven by a team of experienced professionals with
            backgrounds spanning consulting, government projects, construction,
            international trade, and strategic partnerships. Our collective
            expertise enables us to deliver clarity, structure, and results.
          </p>
        </div>
      </section>

      {/* ================= TEAM GRID ================= */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-14">
            Meet the Team
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition flex flex-col"
              >
                {/* Avatar */}
                <div className="w-24 h-24 rounded-full bg-gray-300 mb-6 self-center flex items-center justify-center text-gray-600 text-sm">
                  Avatar
                </div>

                <h3 className="text-xl font-semibold text-center">
                  {member.name}
                </h3>
                <p className="text-blue-600 text-sm text-center mt-1">
                  {member.role}
                </p>

                <p className="text-gray-600 text-sm mt-4 text-center leading-relaxed flex-grow">
                  {member.bio}
                </p>

                <button className="mt-6 border border-blue-600 text-blue-600 py-2 rounded font-medium hover:bg-blue-600 hover:text-white transition">
                  Read More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CREDIBILITY SECTION ================= */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">
            Why Clients Trust ForthWorth G.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
            <div>
              <h4 className="font-semibold mb-2">Multidisciplinary Expertise</h4>
              <p className="text-gray-600 text-sm">
                Our team combines consulting, technical, commercial, and public-sector experience.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Global Perspective</h4>
              <p className="text-gray-600 text-sm">
                We operate across borders, aligning international standards with local realities.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Integrity & Structure</h4>
              <p className="text-gray-600 text-sm">
                Every engagement is guided by governance, transparency, and long-term value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-blue-600 py-20 text-white text-center px-6">
        <h2 className="text-3xl font-bold mb-4">
          Partner with a Team You Can Trust
        </h2>
        <p className="mb-8 text-gray-100">
          Speak with our leadership team to explore collaboration opportunities.
        </p>
        <button className="bg-white text-blue-600 px-10 py-3 rounded font-semibold hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </>
  );
};

export default Profile;
