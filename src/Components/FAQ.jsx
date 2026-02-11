import React, { useState } from "react";

const items = [
  {
    q: "What documents do I need to rent a car?",
    a: "A valid driver's license, ID, and a credit card for the deposit.",
  },
  {
    q: "Can I modify or cancel my booking?",
    a: "Yes, bookings can be modified or canceled up to 24 hours before pickup.",
  },
  {
    q: "Is insurance included?",
    a: "Basic insurance is included. Premium coverage can be added at checkout.",
  },
  {
    q: "Do you offer airport pickup?",
    a: "Yes, select airport locations are available at no extra charge.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-10">
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">FAQ</h3>
        <p className="text-slate-600 mt-2">Quick answers to common questions.</p>
      </div>

      <div className="space-y-3">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={item.q}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="w-full flex items-center justify-between px-5 py-4 text-left"
              >
                <span className="font-semibold text-slate-900">{item.q}</span>
                <span className="text-blue-600 font-bold">{isOpen ? "-" : "+"}</span>
              </button>
              {isOpen && (
                <div className="px-5 pb-4 text-slate-600 text-sm">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
