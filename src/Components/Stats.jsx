import React, { useEffect, useState } from "react";

const Stats = () => {
  const stats = [
    { label: "Cities Covered", value: 120, suffix: "+" },
    { label: "Happy Customers", value: 45, suffix: "K+" },
    { label: "Premium Cars", value: 350, suffix: "+" },
    { label: "Avg. Rating", value: 4.9, suffix: "/5" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    let frame = 0;
    const totalFrames = 50;

    const tick = () => {
      frame += 1;
      setCounts(
        stats.map((item) => {
          const progress = Math.min(frame / totalFrames, 1);
          const value = item.value * progress;
          return item.value % 1 === 0 ? Math.round(value) : Number(value.toFixed(1));
        })
      );
      if (frame < totalFrames) requestAnimationFrame(tick);
    };

    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((item, index) => (
            <div
              key={item.label}
              className="bg-white/80 border border-slate-200 rounded-2xl p-5 text-center shadow-sm"
            >
              <p className="text-2xl sm:text-3xl font-bold text-slate-900">
                {counts[index]}
                {item.suffix}
              </p>
              <p className="text-sm text-slate-600 mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
