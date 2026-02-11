import React, { useMemo, useState } from "react";
import HeroSection from "../Components/HeroSection.jsx";

const carsData = [
  {
    name: "Aero Compact",
    type: "Compact",
    price: 35,
    seats: 4,
    image: "/images/Car-Download-PNG.png",
    transmission: "Auto",
  },
  {
    name: "Sport X",
    type: "Sport",
    price: 85,
    seats: 2,
    image: "/images/sports-cars.png",
    transmission: "Auto",
  },
  {
    name: "Family SUV",
    type: "SUV",
    price: 65,
    seats: 6,
    image: "/images/ford-edge-orange.png",
    transmission: "Auto",
  },
  {
    name: "City Hatch",
    type: "Compact",
    price: 30,
    seats: 4,
    image: "/images/Car-Download-PNG.png",
    transmission: "Manual",
  },
  {
    name: "Roadster Pro",
    type: "Sport",
    price: 95,
    seats: 2,
    image: "/images/sports-cars.png",
    transmission: "Auto",
  },
  {
    name: "Explorer XL",
    type: "SUV",
    price: 75,
    seats: 7,
    image: "/images/ford-edge-orange.png",
    transmission: "Auto",
  },
];

const CarsPage = () => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");
  const [maxPrice, setMaxPrice] = useState(100);
  const [seats, setSeats] = useState("Any");

  const filteredCars = useMemo(() => {
    return carsData.filter((car) => {
      const matchesSearch = car.name.toLowerCase().includes(search.toLowerCase());
      const matchesType = type === "All" || car.type === type;
      const matchesPrice = car.price <= maxPrice;
      const matchesSeats = seats === "Any" || car.seats === Number(seats);
      return matchesSearch && matchesType && matchesPrice && matchesSeats;
    });
  }, [search, type, maxPrice, seats]);

  return (
    <div>
      <HeroSection title="Car Listings" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search cars"
              className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full px-4 py-2.5 border border-slate-200 rounded-lg bg-white"
            >
              <option>All</option>
              <option>Compact</option>
              <option>SUV</option>
              <option>Sport</option>
            </select>
            <select
              value={seats}
              onChange={(e) => setSeats(e.target.value)}
              className="w-full px-4 py-2.5 border border-slate-200 rounded-lg bg-white"
            >
              <option>Any</option>
              <option value="2">2 Seats</option>
              <option value="4">4 Seats</option>
              <option value="6">6 Seats</option>
              <option value="7">7 Seats</option>
            </select>
            <div>
              <label className="text-xs font-semibold text-slate-600">
                Max Price: ${maxPrice}/day
              </label>
              <input
                type="range"
                min="20"
                max="100"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredCars.map((car) => (
            <div
              key={car.name}
              className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden"
            >
              <div className="h-48 bg-slate-50 flex items-center justify-center">
                <img src={car.image} alt={car.name} className="max-h-40 w-auto" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">{car.name}</h3>
                  <span className="text-blue-700 font-bold">${car.price}/day</span>
                </div>
                <p className="text-sm text-slate-600 mt-1">
                  {car.type} - {car.seats} seats - {car.transmission}
                </p>
                <button
                  type="button"
                  className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-semibold transition-colors"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CarsPage;
