import React, { useEffect, useState } from "react";
import EnterFlightData from "../components/chooseFlight/EnterFlightData";
import DisplayFlights from "../components/chooseFlight/DisplayFlights";
import SwiperSlider from "../components/swiper/SwiperSlider";

function ChooseFlight() {
  const [allFlights, setAllFlights] = useState([]);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="pt-32">
      <SwiperSlider />
      <div className="py-40 px-24 bg-linear-to-r from-30% from-white to-neutral-100 max-md:px-5">
        <h1 className="text-sky-500 font-PoppinsMedium p-2 uppercase">
          select flight date
        </h1>
        <EnterFlightData setAllFlights={setAllFlights} />
        <DisplayFlights allFlights={allFlights} />
      </div>
    </div>
  );
}

export default ChooseFlight;
