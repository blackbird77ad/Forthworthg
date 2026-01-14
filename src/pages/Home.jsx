import { useState, useEffect } from "react";

import slide1 from "../assets/images/slide01.jpg";
import slide2 from "../assets/images/95727.jpg";
import slide3 from "../assets/images/cargo.jpg";
import slide4 from "../assets/images/view-male-engineer-work-engineers-day-celebration.jpg";
import slide5 from "../assets/images/business-meeting.jpg";

const slides = [
  {
    image: slide1,
    title: "CONNECTING OPPORTUNITY",
    subtitle: "STRUCTURING SUCCESS",
    description:
      "Global business facilitation and advisory services connecting the right people to the right opportunities.",
  },
  {
    image: slide2,
    title: "TRUSTED ADVISORY",
    subtitle: "ACROSS BORDERS",
    description:
      "We support organizations navigating complex markets with confidence and clarity.",
  },
  {
    image: slide3,
    title: "FAST & SECURE",
    subtitle: "TRADE FACILITATION",
    description:
      "Delivering seamless procurement and trade execution worldwide.",
  },
  {
    image: slide4,
    title: "STRATEGIC PARTNERSHIPS",
    subtitle: "BUILT TO LAST",
    description:
      "Transforming relationships into high-impact business outcomes.",
  },
  {
    image: slide5,
    title: "GLOBAL REACH",
    subtitle: "LOCAL EXPERTISE",
    description:
      "International standards grounded in deep African market insight.",
  },
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 12000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* ================= HERO SLIDER ================= */}
      <section className="relative w-full h-screen bg-cover bg-center transition-all duration-1000"
  style={{ backgroundImage: `url(${slides[current].image})` }}
>
  {/* Semi-transparent overlay to dim the image */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Text content */}
  <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">
    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white
  drop-shadow-[1px_1px_0_rgba(0,0,0,1)]
  drop-shadow-[-1px_-1px_0_rgba(0,0,0,1)]
  drop-shadow-[1px_-1px_0_rgba(0,0,0,1)]
  drop-shadow-[-1px_1px_0_rgba(0,0,0,1)]
  drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)]">
  {slides[current].title}
</h1>

    <h2 className="text-xl md:text-3xl font-semibold mt-3 text-white
  drop-shadow-[0_2px_5px_rgba(0,0,0,0.9)]
  drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]">
  {slides[current].subtitle}
</h2>

<p className="mt-6 max-w-2xl text-sm md:text-lg text-white
  drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)]">
  {slides[current].description}
</p>


    <div className="mt-8 flex flex-wrap justify-center gap-4">
      <button className="bg-blue-600 border border-white hover:bg-red-700 px-8 py-3 rounded text-sm font-semibold">
        Our Services
      </button>
      <button className="border border-blue-100 px-8 py-3 rounded text-blue-600 hover:text-white hover:bg-red-700  text-sm font-semibold">
        Contact Us
      </button>
    </div>
  </div>

  {/* Prev / Next arrows */}
  <button
    onClick={() =>
      setCurrent(current === 0 ? slides.length - 1 : current - 1)
    }
    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 p-3 rounded-full hover:bg-black/70 text-white text-2xl"
  >
    ‹
  </button>
  <button
    onClick={() =>
      setCurrent(current === slides.length - 1 ? 0 : current + 1)
    }
    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 p-3 rounded-full hover:bg-black/70 text-white text-2xl"
  >
    ›
  </button>
</section>




      {/* ================= QUICK STATS ================= */}
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          <div>
            <h3 className="text-3xl font-bold text-blue-600">20+</h3>
            <p className="text-gray-600 mt-1">Years Experience</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">30+</h3>
            <p className="text-gray-600 mt-1">Trade Delegations</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">Global</h3>
            <p className="text-gray-600 mt-1">Market Reach</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">Millions</h3>
            <p className="text-gray-600 mt-1">Deals Facilitated</p>
          </div>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="bg-gray-50 py-20 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed">
              ForthWorth G. is a global business facilitation and advisory firm
              based in Accra, Ghana. We specialize in deal structuring,
              procurement, business consulting, and trade delegation advisory —
              connecting the right people to the right opportunities across
              borders.
            </p>
          </div>
          <div className="bg-gray-300 h-64 rounded-lg" />
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="bg-white py-20 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">What We Do</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
            {[
              "Deal Structuring Advisory",
              "Procurement & Purchasing Facilitation",
              "Business Consulting & Linkages",
              "Cross-Border Trade Facilitation",
              "Trade Delegation Advisory",
              "Strategic Partnership Development",
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold mb-3">{service}</h3>
                <p className="text-gray-600 text-sm">
                  Tailored solutions designed to deliver measurable commercial
                  impact and long-term value.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TRADE DELEGATIONS ================= */}
      <section className="bg-gray-100 py-20 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Trade Delegations & Impact
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-10">
            We’ve hosted over 30 high-impact trade delegations, facilitating
            strategic partnerships, joint ventures, and cross-border
            investments across Africa.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-gray-300 h-48 rounded-lg" />
            <div className="bg-gray-300 h-48 rounded-lg" />
            <div className="bg-gray-300 h-48 rounded-lg" />
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-blue-600 py-16 text-white text-center px-6">
        <h2 className="text-3xl font-bold mb-4">
          Let’s Build Your Next Opportunity
        </h2>
        <p className="mb-6 text-gray-100">
          Speak with our advisory team today.
        </p>
        <button className="bg-white text-blue-600 px-10 py-3 rounded font-semibold">
          Contact Us
        </button>
      </section>
    </>
  );
};

export default Home;
