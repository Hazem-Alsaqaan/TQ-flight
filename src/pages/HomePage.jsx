import React, { useEffect } from "react";
import LandingContainer from "../components/landing/LandingContainer";
import AirlinesCompanies from "../components/airlinesCompanies/AirlinesCompanies";

function HomePage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <LandingContainer />
      <AirlinesCompanies />
    </div>
  );
}

export default HomePage;
