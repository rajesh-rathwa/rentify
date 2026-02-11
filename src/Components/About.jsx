import React from "react";

const About = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-10">
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">About Us</h3>
        <p className="text-slate-600 mt-2">
          Simple, reliable car rentals tailored to your journey.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-slate-600 leading-relaxed">
            At Rentify, we are passionate about providing exceptional car rental
            services that cater to the diverse needs of our valued customers.
          </p>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Our mission is to make car rental hassle-free, convenient, and
            affordable for everyone. Whether you are a frequent traveler, a road
            trip enthusiast, or simply in need of temporary transportation, we
            have you covered.
          </p>
          <button
            type="button"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 mt-5 rounded-lg transition-colors"
          >
            Discover More
          </button>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/images/car-about.jpg"
            alt="About Rentify"
            className="w-full h-72 sm:h-80 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
