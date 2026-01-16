import { useState, useEffect, useRef } from "react";

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
  const sliderRef = useRef(null);

  // Start auto slider
  const startAutoSlide = () => {
    clearInterval(sliderRef.current);
    sliderRef.current = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 12000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(sliderRef.current);
  }, []);

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        className="relative w-full h-[70vh] bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${slides[current].image})` }}
      >
        {/* Overlay (does NOT block clicks) */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

        {/* Text */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight drop-shadow-[2px_2px_6px_rgba(0,0,0,0.85)]">
            {slides[current].title}
          </h1>

          <h2 className="text-xl md:text-3xl font-semibold mt-3 drop-shadow-[1px_1px_4px_rgba(0,0,0,0.75)]">
            {slides[current].subtitle}
          </h2>

          <p className="mt-6 max-w-2xl text-sm md:text-lg drop-shadow-[1px_1px_3px_rgba(0,0,0,0.7)]">
            {slides[current].description}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="bg-blue-600 hover:bg-red-700 px-8 py-3 rounded text-sm font-semibold">
              Our Services
            </button>
            <button className="border border-blue-600 px-8 py-3 rounded text-blue-600 hover:text-white hover:bg-red-700 text-sm font-semibold">
              Contact Us
            </button>
          </div>
        </div>

        {/* PREV */}
        <button
          onClick={() => {
            clearInterval(sliderRef.current);
            setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
            startAutoSlide();
          }}
          className="absolute top-1/2 left-6 -translate-y-1/2 z-20
                     text-white text-3xl p-3 rounded-full
                     bg-black/40 hover:bg-black/60 transition"
        >
          &#8592;
        </button>

        {/* NEXT */}
        <button
          onClick={() => {
            clearInterval(sliderRef.current);
            setCurrent((prev) =>
              prev === slides.length - 1 ? 0 : prev + 1
            );
            startAutoSlide();
          }}
          className="absolute top-1/2 right-6 -translate-y-1/2 z-20
                     text-white text-3xl p-3 rounded-full
                     bg-black/40 hover:bg-black/60 transition"
        >
          &#8594;
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
