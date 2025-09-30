import React, { useEffect, useState } from "react";
import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.png";

const slides = [
  {
    image: slide1,
    title: "WE MAKE STRONGEST",
    subtitle: "SERVICE ABOVE THE WORLD",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image: slide2,
    title: "TRUST OUR SERVICE",
    subtitle: "WORLDWIDE DELIVERY",
    description: "We deliver quality around the globe.",
  },
  {
    image: slide3,
    title: "FAST & SECURE",
    subtitle: "TRANSPORT SOLUTIONS",
    description: "Safe delivery for your goods and services.",
  },
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 12000); // 12 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url(${slides[current].image})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4">
        <h1 className="text-4xl md:text-6xl font-bold">{slides[current].title}</h1>
        <h2 className="text-2xl md:text-4xl font-semibold mt-2">{slides[current].subtitle}</h2>
        <p className="mt-4 max-w-xl text-sm md:text-lg">{slides[current].description}</p>
      </div>

      <section id="WhoWeAre" className="bg-white py-16 px-6 lg:px-20">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
    <p className="text-lg text-gray-600 leading-relaxed">
      ForthWorth G. is a global business facilitation and advisory firm based in Accra, Ghana. 
      We specialize in deal structuring, procurement, business consulting, and trade delegation advisory —
      connecting the right people to the right opportunities, across borders. With over two decades of experience 
      and a globally connected network, we are your trusted partner in translating relationships into results.
    </p>
  </div>
</section>

<section id="WhatWeDo" className="bg-gray-100 py-16 px-6 lg:px-20">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-10">What We Do</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
      <div>
        <div className="text-4xl mb-3 text-blue-600">🤝</div>
        <h3 className="text-xl font-semibold mb-2">Deal Structuring</h3>
        <p className="text-gray-600">Expertly negotiated structures to maximize value and minimize risk.</p>
      </div>
      <div>
        <div className="text-4xl mb-3 text-blue-600">🛒</div>
        <h3 className="text-xl font-semibold mb-2">Procurement Advisory</h3>
        <p className="text-gray-600">End-to-end support in sourcing, vendor selection, and negotiation.</p>
      </div>
      <div>
        <div className="text-4xl mb-3 text-blue-600">🌍</div>
        <h3 className="text-xl font-semibold mb-2">Cross-Border Facilitation</h3>
        <p className="text-gray-600">Helping clients navigate international markets with ease.</p>
      </div>
      <div>
        <div className="text-4xl mb-3 text-blue-600">📊</div>
        <h3 className="text-xl font-semibold mb-2">Business Consulting</h3>
        <p className="text-gray-600">Tailored insights and strategies for long-term growth.</p>
      </div>
      <div>
        <div className="text-4xl mb-3 text-blue-600">✈️</div>
        <h3 className="text-xl font-semibold mb-2">Trade Delegations</h3>
        <p className="text-gray-600">Hosting and organizing high-impact business missions.</p>
      </div>
    </div>
  </div>
</section>


<section id="DelegationHighlight " className="bg-gray-100 py-16 px-6 lg:px-20">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-6">Trade Delegations</h2>
    <p className="text-lg text-gray-600 mb-10">
      We’ve hosted over 30 successful trade delegations, connecting businesses from across the globe 
      to opportunities in West Africa. These missions have led to strategic partnerships, joint ventures, 
      and long-lasting impact.
    </p>

    {/* Image Grid Placeholder */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div className="bg-gray-300 h-48 rounded"> {/* Replace with image */} </div>
      <div className="bg-gray-300 h-48 rounded"> </div>
      <div className="bg-gray-300 h-48 rounded"> </div>
    </div>
  </div>
</section>





    </div>
  );
};

export default Home;
