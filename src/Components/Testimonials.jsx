import React from "react";

const Testimonials = () => {
  const testimonials = [
    { name: "John Doe", text: "Amazing service and clean cars.", image: "/images/team-1-1.jpg" },
    { name: "Priya S.", text: "Smooth booking and great support.", image: "/images/team-1-2.jpg" },
    { name: "David R.", text: "Affordable and reliable rentals.", image: "/images/team-1-3.jpg" },
    { name: "Sara P.", text: "Loved the car options and delivery.", image: "/images/team-1-6.jpg" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-10">
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Testimonials</h3>
        <p className="text-slate-600 mt-2">What our customers say about Rentify.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((item) => (
          <div
            key={item.name}
            className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden"
          >
            <div className="h-48">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <h4 className="text-base font-semibold text-slate-900">{item.name}</h4>
              <p className="text-sm text-slate-600 mt-1">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
