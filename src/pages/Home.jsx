import { useState, useEffect, useRef } from "react";

import slide1 from "../assets/images/slide01.jpg";
import slide2 from "../assets/images/95727.jpg";
import slide3 from "../assets/images/cargo.jpg";
import slide4 from "../assets/images/view-male-engineer-work-engineers-day-celebration.jpg";
import slide5 from "../assets/images/business-meeting.jpg";

const slides = [
  {
    image: slide1,
    title: "Connecting Opportunity",
    subtitle: "Structuring Success. Delivering Results.",
    description:
      "Global business facilitation and advisory firm based in Accra, Ghana. Connecting the right people to the right opportunities across borders.",
  },
  {
    image: slide2,
    title: "Trusted Advisory",
    subtitle: "Across Borders",
    description:
      "Over two decades of experience supporting organizations navigating complex markets with confidence.",
  },
  {
    image: slide3,
    title: "Efficient Procurement",
    subtitle: "Secure & Reliable",
    description:
      "Simplifying cross-border sourcing, compliance, and logistics for seamless execution.",
  },
  {
    image: slide4,
    title: "Strategic Partnerships",
    subtitle: "Built for Impact",
    description:
      "We translate relationships into measurable commercial results.",
  },
  {
    image: slide5,
    title: "Global Reach",
    subtitle: "Local Expertise",
    description:
      "International standards combined with deep African market insight.",
  },
];

const Home = () => {
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef(null);

  const startAutoSlide = () => {
    clearInterval(sliderRef.current);
    sliderRef.current = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 7000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(sliderRef.current);
  }, []);

  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className="relative w-full min-h-screen bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${slides[current].image})` }}
      >
        {/* Navy overlay */}
        <div className="absolute inset-0 bg-[#0B1F3A]/70"></div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white min-h-screen px-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
            {slides[current].title}
          </h1>

          <h2 className="text-xl md:text-3xl mt-4 font-semibold text-[#C8A24A]">
            {slides[current].subtitle}
          </h2>

          <p className="mt-6 max-w-2xl text-sm md:text-lg text-gray-200">
            {slides[current].description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <button className="bg-[#0B1F3A] border border-[#C8A24A] hover:bg-[#C8A24A] hover:text-[#0B1F3A] px-8 py-3 rounded font-semibold transition">
              Our Services
            </button>
            <button className="bg-[#C8A24A] text-[#0B1F3A] hover:opacity-90 px-8 py-3 rounded font-semibold transition">
              Contact Us
            </button>
          </div>
        </div>

        {/* Slider dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                current === index ? "bg-[#C8A24A]" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ================= IMPACT ================= */}
      <section className="bg-[#F5F7FA] py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12 text-[#0B1F3A]">
            Our Impact
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <div>
              <h3 className="text-4xl font-bold text-[#0B1F3A]">20+</h3>
              <p className="text-gray-600 mt-2">Years of Experience</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-[#0B1F3A]">30+</h3>
              <p className="text-gray-600 mt-2">Trade Delegations Hosted</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-[#0B1F3A]">Global</h3>
              <p className="text-gray-600 mt-2">Reach</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-[#0B1F3A]">Millions</h3>
              <p className="text-gray-600 mt-2">Deals Facilitated</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <div className="w-12 h-1 bg-[#C8A24A] mb-6"></div>
            <h2 className="text-3xl font-bold text-[#0B1F3A] mb-6">
              About ForthWorth G.
            </h2>
            <p className="text-gray-600 leading-relaxed">
              ForthWorth G. is a global business facilitation and advisory firm
              based in Accra, Ghana. We specialize in deal structuring,
              procurement, business consulting, and trade delegation advisory —
              connecting the right people to the right opportunities across
              borders.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              With over two decades of experience and a globally connected
              network, we translate relationships into measurable business
              results.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={slide5}
              alt="Business meeting"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="bg-[#F5F7FA] py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#0B1F3A] mb-14">
            Our Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {[
              "Transaction & Deal Structuring Advisory",
              "Procurement & Purchasing Facilitation",
              "Business Linkages & Consulting",
              "Trade Delegation & Visit Advisory",
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-xl transition hover:-translate-y-1"
              >
                <div className="w-10 h-1 bg-[#C8A24A] mb-4"></div>
                <h3 className="font-semibold text-[#0B1F3A] mb-3">
                  {service}
                </h3>
                <p className="text-gray-600 text-sm">
                  Bespoke solutions aligned with your strategic objectives,
                  ensuring efficiency, compliance, and measurable value.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CEO ================= */}
      <section className="bg-[#0B1F3A] py-24 px-6 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={slide4}
              alt="CEO"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">
              Leadership
            </h2>
            <h3 className="text-xl text-[#C8A24A] font-semibold mb-4">
              Gilbert Ossei Hyeamann
            </h3>
            <p className="text-gray-200 leading-relaxed">
              Founder & CEO of ForthWorth G., Gilbert Ossei Hyeamann brings over
              20 years of experience in deal structuring, procurement, and
              international trade facilitation. He has successfully hosted
              high-level delegations and facilitated millions in investment
              partnerships across multiple sectors.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-[#C8A24A] py-20 text-center px-6">
        <h2 className="text-3xl font-bold text-[#0B1F3A] mb-4">
          Let’s Build Your Next Opportunity Together
        </h2>
        <p className="text-gray-800 mb-6 max-w-2xl mx-auto">
          Have a trade, procurement, or partnership interest in Africa? Speak
          to the ForthWorth G. team today.
        </p>
        <button className="bg-[#0B1F3A] text-white px-10 py-3 rounded font-semibold hover:opacity-90">
          Contact ForthWorth G.
        </button>
      </section>
    </>
  );
};

export default Home;
