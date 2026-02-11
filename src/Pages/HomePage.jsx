import React from "react";
import Hero from "../Components/Hero.jsx";
import About from "../Components/About.jsx";
import Offer from "../Components/Offer.jsx";
import Blog from "../Components/Blog.jsx";
import Talk from "../Components/Talk.jsx";
import Testimonials from "../Components/Testimonials.jsx";
import Stats from "../Components/Stats.jsx";
import Pricing from "../Components/Pricing.jsx";
import FAQ from "../Components/FAQ.jsx";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Offer condition />
      <Pricing />
      <Blog />
      <Testimonials />
      <FAQ />
      <Talk />
    </>
  );
};

export default HomePage;
