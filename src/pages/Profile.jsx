import React from "react";
import ceoImg from "../assets/images/goh.jpg";
import noshImg from "../assets/images/nosh.jpg";
import forthworthImg from "../assets/images/forthworth.png";

const team = [
  {
    name: "Gilbert O. H.",
    role: "Founder & Chief Executive Officer",
    image: ceoImg,
    bio: "Provides strategic leadership for ForthWorth, guiding partnerships, investment facilitation, and high-impact advisory services across public, private, and international development sectors.",
  },
  {
    name: "Noshie Iddisah",
    role: "Senior Consultant – Grants & Operations",
    image: noshImg,
    bio: "Grants management specialist with 25+ years of experience designing grant systems, strengthening compliance frameworks, managing fiduciary risks, and delivering donor-funded programmes.",
  },
  {
    name: "Albert Huges",
    role: "Consultant – Programme & Project Advisory",
    image: forthworthImg,
    bio: "Profile yet to be populated.",
  },
  {
    name: "Maame Krakue",
    role: "Consultant – Finance, Risk & Compliance",
    image: forthworthImg,
    bio: "Profile yet to be populated.",
  },
];

const Profile = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <section className="relative py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-100 via-blue-100 to-red-100 animate-gradient-x"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn">
            Leadership & Consultants
          </h1>
          <p className="text-gray-800 text-base md:text-lg leading-relaxed animate-fadeIn delay-200">
            Our team brings together experienced professionals in strategic advisory,
            programme delivery, financial governance, and institutional strengthening to
            support complex projects and cross-border initiatives.
          </p>
        </div>
      </section>

      {/* TEAM GRID */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {team.map((member, index) => (
            <div
              key={index}
              className={`rounded-xl flex flex-col overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl
                ${index % 3 === 0 ? "bg-yellow-50" : index % 3 === 1 ? "bg-blue-50" : "bg-red-50"}`}
            >
              {/* Image */}
              <div className="h-72 overflow-hidden rounded-t-xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 hover:brightness-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm font-medium text-blue-700 mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 py-16 text-center text-white px-6">
        <h2 className="text-3xl font-bold mb-4">Work With Our Experts</h2>
        <p className="max-w-2xl mx-auto text-blue-100 mb-6">
          Our consultants support governments, investors, and organizations in structuring opportunities
          and delivering high-impact results.
        </p>
        <a
          href="/contact"
          className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Contact Our Team
        </a>
      </section>

    </div>
  );
};

export default Profile;