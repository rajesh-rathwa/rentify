import React from "react";

const Offer = ({ condition }) => {
  const offers = [
    {
      title: "City Compact",
      desc: "Perfect for quick errands and city trips with great mileage.",
      image: "/images/Car-Download-PNG.png",
    },
    {
      title: "Sport Edition",
      desc: "Performance-driven rentals for a thrilling drive experience.",
      image: "/images/sports-cars.png",
    },
    {
      title: "Family SUV",
      desc: "Spacious, comfortable, and ready for long journeys.",
      image: "/images/ford-edge-orange.png",
    },
  ];

  return (
    <section className="bg-white/70 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {condition && (
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Offers
            </h3>
            <p className="text-slate-600 mt-2">
              We believe in building long-term relationships based on trust,
              transparency, and reliability.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <div
              key={offer.title}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100"
            >
              <div className="h-52 bg-slate-50 flex items-center justify-center">
                <img
                  className="max-h-40 w-auto"
                  src={offer.image}
                  alt={offer.title}
                />
              </div>
              <div className="p-5">
                <h5 className="text-lg font-semibold text-slate-900">
                  {offer.title}
                </h5>
                <p className="text-slate-600 text-sm mt-2">
                  {offer.desc}
                </p>
              </div>
              <div className="p-5 pt-0">
                <button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-semibold transition-colors"
                  type="button"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;
