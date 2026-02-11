import React from "react";

const HeroSection = ({ title }) => {
  return (
    <section className="relative h-56 sm:h-64 flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-blue-100" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_45%)]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">{title}</h1>
        <p className="text-slate-600 mt-2">Home / {title}</p>
      </div>
    </section>
  );
};

export default HeroSection;
