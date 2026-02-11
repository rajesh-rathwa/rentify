import React from "react";

const Pricing = () => {
  const tiers = [
    {
      name: "Starter",
      price: 29,
      desc: "Great for quick city rides",
      features: ["Compact cars", "Basic insurance", "200 km/day"],
    },
    {
      name: "Business",
      price: 59,
      desc: "Best value for frequent travel",
      features: ["Sedan or SUV", "Premium insurance", "Unlimited km"],
      highlight: true,
    },
    {
      name: "Elite",
      price: 99,
      desc: "Luxury and performance",
      features: ["Luxury cars", "Full coverage", "Priority support"],
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-10">
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Pricing</h3>
        <p className="text-slate-600 mt-2">Simple plans with premium benefits.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`rounded-2xl border p-6 shadow-lg bg-white ${
              tier.highlight ? "border-blue-500 ring-2 ring-blue-200" : "border-slate-200"
            }`}
          >
            <h4 className="text-lg font-semibold text-slate-900">{tier.name}</h4>
            <p className="text-slate-600 text-sm mt-1">{tier.desc}</p>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-3xl font-bold text-slate-900">${tier.price}</span>
              <span className="text-slate-500 text-sm">/day</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {tier.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
            <button
              type="button"
              className={`mt-6 w-full py-2.5 rounded-lg font-semibold transition-colors ${
                tier.highlight
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-800"
              }`}
            >
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
