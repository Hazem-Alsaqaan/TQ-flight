import React from "react";
import { Link } from "react-router-dom";

function FlightCard({ item }) {
  return (
    <div className="bg-white w-[320px] h-[250px] p-4 rounded-md border-[1px] shadow-2xl border-solid border-neutral-300 overflow-auto">
      <h2 className="text-xl font-PoppinsBold text-red-500 text-center ">
        {item.Airline}
      </h2>
      <div className="py-7">
        <p className="text-neutral-600">
          Arrival Time:{" "}
          <span className="text-black font-PoppinsSemiBold">
            {item.ArrivalTime}
          </span>
        </p>
        <p className="text-neutral-600">
          Departure Time:{" "}
          <span className="text-black font-PoppinsSemiBold">
            {item.DepartureTime}
          </span>
        </p>
      </div>
      <div className="flex justify-between items-end">
        <h2 className="font-PoppinsBlack">
          Flight Number <br /> {item.FlightNumber}
        </h2>
        <Link
          to={`${item.FlightNumber}`}
          className="text-white bg-blue-500 p-2 text-sm rounded capitalize text-nowrap cursor-pointer"
        >
          rate flight
        </Link>
      </div>
    </div>
  );
}

export default FlightCard;
