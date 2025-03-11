import React from "react";
import FlightCard from "../flightCard/FlightCard";

function DisplayFlights({ allFlights }) {
  return (
    <div className="py-40">
      {allFlights.length > 0 ? (
        <div className=" flex justify-center gap-10 flex-wrap">
          {allFlights.map((item) => (
            <FlightCard key={item.FlightNumber} item={item} />
          ))}
        </div>
      ) : (
        <div>
          <p>not found flights...</p>
        </div>
      )}
    </div>
  );
}

export default DisplayFlights;
