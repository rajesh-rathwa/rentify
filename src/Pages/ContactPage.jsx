import React from "react";
import HeroSection from "../Components/HeroSection.jsx";
import ContactUs from "../Components/ContactUs.jsx";
import Talk from "../Components/Talk.jsx";

const ContactPage = () => {
  return (
    <div>
      <HeroSection title="Contact Us" />
      <ContactUs />
      <Talk />
    </div>
  );
};

export default ContactPage;
