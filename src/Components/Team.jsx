import React from "react";

const Team = () => {
  const members = [
    { name: "Mark L.", role: "CEO", image: "/images/user1.jpg" },
    { name: "Emma G.", role: "Marketing Manager", image: "/images/user3.jpeg" },
    { name: "John R.", role: "Customer Service", image: "/images/user2.jpg" },
    { name: "Cassy S.", role: "Customer Service", image: "/images/user4.png" },
  ];

  return (
    <section className="bg-white/70 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Team</h3>
          <p className="text-slate-600 mt-2">
            We believe in building long-term relationships based on trust,
            transparency, and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 text-center"
            >
              <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-blue-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h5 className="mt-4 text-lg font-semibold text-slate-900">
                {member.name}
              </h5>
              <p className="text-sm text-slate-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
