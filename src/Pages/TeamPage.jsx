import React from "react";
import HeroSection from "../Components/HeroSection.jsx";
import Team from "../Components/Team.jsx";
import Talk from "../Components/Talk.jsx";

const TeamPage = () => {
  return (
    <div>
      <HeroSection title="Team" />
      <Team />
      <Talk />
    </div>
  );
};

export default TeamPage;
