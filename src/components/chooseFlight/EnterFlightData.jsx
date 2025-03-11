import React, { useState } from "react";
import { FcPlanner } from "react-icons/fc";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { CgAirplane } from "react-icons/cg";
// import axios from "axios";
import { allflightSchema } from "../../../staticData";

function EnterFlightData({ setAllFlights }) {
  const [flightDate, setFlightDate] = useState("");
  const allFlights = allflightSchema;

  const handleSubmite = async (e) => {
    e.preventDefault();
    // const flightDateSelected = flightDate.split("-").join("");
    // const response = await axios.get(
    //   `https://api.flightapi.io/trackbyroute/67ceb6ded8fa5ab514772c02?date=${flightDateSelected}&airport1=AMS&airport2=LIS`
    // );
    // setAllFlights(response.data);
    setAllFlights(allFlights);
  };
  return (
    <div className="p-10 rounded-3xl bg-white shadow-2xl max-sm:px-5">
      <form action="" onSubmit={handleSubmite}>
        <div className="flex items-center justify-between flex-wrap gap-5">
          <div className="flex flex-col ">
            <label
              className="text-sm text-neutral-500 px-4 flex items-center gap-1"
              htmlFor="date"
            >
              <FcPlanner size={35} />
              flight date
            </label>
            <input
              className=" bg-neutral-100 px-4 py-2 rounded-full focus:outline-none"
              type="date"
              id="date"
              required
              value={flightDate}
              onChange={(e) => setFlightDate(e.target.value)}
            />
          </div>
          <div className="flex flex-col ">
            <label
              className="text-sm text-neutral-500 px-4 flex items-center gap-1"
              htmlFor="departure-airport"
            >
              <BiSolidPlaneAlt size={35} className="text-green-400" />
              departure airpor
            </label>
            <input
              className=" bg-neutral-100 px-4 py-2 rounded-full focus:outline-none"
              placeholder="AMS"
              type="text"
              name="departure-airport"
              id="departure-airport"
              value={"AMS"}
              disabled
            />
          </div>
          <div className="flex flex-col ">
            <label
              className="text-sm text-neutral-500 px-4 flex items-center gap-1"
              htmlFor="arrival-airport"
            >
              <CgAirplane size={35} className="text-sky-500" />
              arrival airpor
            </label>
            <input
              className=" bg-neutral-100 px-4 py-2 rounded-full focus:outline-none"
              placeholder="LIS"
              type="text"
              name="arrival-airport"
              id="arrival-airport"
              value={"LIS"}
              disabled
            />
          </div>
        </div>
        <div className="flex justify-center items-end pt-10">
          <button
            type="submit"
            className=" cursor-pointer outline-none px-8 py-4 rounded-md flex items-center justify-center bg-mainColor hover:bg-sky-600 duration-150 text-white capitalize text-2xl shadow max-sm:text-sm"
          >
            find details
          </button>
        </div>
      </form>
    </div>
  );
}

export default EnterFlightData;

// Airline:
// "Aeromexico"
// ArrivalTime
// :
// "11:10 PM, Mar 18"
// DepartureTime
// :
// "9:10 PM, Mar 18"
// FlightNumber
// :
// "6329"
// Operated By
// :
// "KLM-Royal Dutch Airlines1587"
// Status
// :
// "Scheduled"
