import React from "react";
import LandingPicture from "./LandingPicture";

function LandingContainer() {
  return (
    <div className="relative pt-40 px-24 bg-linear-to-r from-30% from-white to-neutral-100 min-h-screen max-sm:px-5 overflow-hidden">
      <h6 className="text-6xl text-center capitalize font-PoppinsBold pb-10 max-lg:5xl max-md:text-4xl max-sm:text-2xl">
        find and book a great <br />
        experince
      </h6>
      <LandingPicture />
    </div>
  );
}

export default LandingContainer;
