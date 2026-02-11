import React from "react";

const Hero = () => {
  return (
    <section
      className="relative min-h-[90vh] w-full flex items-center"
      style={{ backgroundImage: "url('/images/car-rental-banner.png')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_45%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="max-w-xl">
            <p className="text-sm uppercase tracking-widest text-blue-700 font-semibold mb-3">
              Premium Car Rentals
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Discover the Freedom of Wheels
              <span className="block text-blue-700">Unleash Your Journey</span>
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              Flexible plans, well-maintained cars, and 24/7 support for every trip. Start your journey with Rentify today.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-lg font-semibold transition-colors"
              >
                Contact Us
              </button>
              <button
                type="button"
                className="bg-white/80 hover:bg-white text-slate-800 px-7 py-3 rounded-lg border border-slate-200 font-semibold transition-colors"
              >
                View Offers
              </button>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-xl border border-slate-200 rounded-3xl shadow-xl p-6">
            <h3 className="text-lg font-semibold text-slate-900">Book Your Ride</h3>
            <p className="text-sm text-slate-600 mt-1">
              Find the best car for your trip in minutes.
            </p>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-slate-600">Pick-up</label>
                <input
                  className="mt-1 w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="City or airport"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-600">Drop-off</label>
                <input
                  className="mt-1 w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Return location"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-600">Pick-up Date</label>
                <input
                  type="date"
                  className="mt-1 w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-600">Drop-off Date</label>
                <input
                  type="date"
                  className="mt-1 w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <button
              type="button"
              className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Search Cars
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
