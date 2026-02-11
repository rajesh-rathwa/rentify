import React from "react";

const Talk = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-blue-600 text-white text-center py-12 px-6 shadow-lg">
          <h4 className="text-sm uppercase tracking-widest text-white/80">Contact Us</h4>
          <h2 className="text-2xl sm:text-3xl font-bold mt-2">
            Ready to plan your next trip?
          </h2>
          <button
            type="button"
            className="mt-5 bg-white text-blue-700 px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Talk to Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Talk;
