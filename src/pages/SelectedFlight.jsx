import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { allflightSchema } from "../../staticData";
import FlightCard from "../components/flightCard/FlightCard";
import StarRating from "../components/starRating/StarRating";
import TextRating from "../components/textRating/TextRating";
import ListOfRating from "../components/listOfRating/ListOfRating";

function SelectedFlight() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [flight, setFlight] = useState({});
  const flights = allflightSchema;
  const [counterEmployee, setCounterEmployee] = useState(0);
  const [hostess, setHostess] = useState(0);
  const [captain, setCaptain] = useState(0);
  const [cleanliness, setCleanliness] = useState(0);
  const [takeOff, setTakeOff] = useState(0);
  const [landing, setLanding] = useState(0);
  const [foodQuality, setFoodQuality] = useState(0);
  const [messageRating, setMessageRating] = useState("");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setLoading(true);
    const findFlight = flights.find((flight) => flight.FlightNumber === id);
    setFlight(findFlight);
    setLoading(false);
  }, [flights, id]);
  const [ratingList, setRatingList] = useState([]);

  const handleSubmitRating = () => {
    setRatingList([
      ...ratingList,
      {
        id: Math.random(),
        counterEmployee,
        hostess,
        captain,
        cleanliness,
        takeOff,
        landing,
        foodQuality,
        messageRating,
      },
    ]);
  };
  return (
    <div className="min-h-screen py-32 px-24 bg-linear-to-r from-30% from-white to-neutral-100 max-sm:px-10">
      <p className="flex items-center justify-center gap-2 py-5 text-2xl font-PoppinsBold max-[285px]:text-base">
        Flight Number<span className="text-red-600"> {id}</span>
      </p>
      <div className="flex items-center justify-center">
        {loading ? (
          <p className="text-mainColor">loading...</p>
        ) : (
          <div>
            <p className="text-neutral-600">
              Arrival Time:{" "}
              <span className="text-black font-PoppinsSemiBold">
                {flight.ArrivalTime}
              </span>
            </p>
            <p className="text-neutral-600">
              Departure Time:{" "}
              <span className="text-black font-PoppinsSemiBold">
                {flight.DepartureTime}
              </span>
            </p>
          </div>
        )}
      </div>
      <div className="pt-20 ">
        <h1 className="text-xl font-light py-5  text-sky-500">
          rate your flight please
        </h1>
        <StarRating
          title={"counter employee"}
          setValueName={setCounterEmployee}
        />
        <StarRating title={"hostess"} setValueName={setHostess} />
        <StarRating title={"Captain"} setValueName={setCaptain} />
        <StarRating title={"cleanliness"} setValueName={setCleanliness} />
        <StarRating title={"Take off"} setValueName={setTakeOff} />
        <StarRating title={"Landing"} setValueName={setLanding} />
        <StarRating title={"Food quality"} setValueName={setFoodQuality} />
        <TextRating
          messageRating={messageRating}
          setMessageRating={setMessageRating}
        />
        <button
          className="bg-mainColor px-5 py-2 rounded capitalize text-white hover:bg-sky-600 duration-100 cursor-pointer"
          onClick={handleSubmitRating}
        >
          Send
        </button>
      </div>
      <ListOfRating ratingList={ratingList} />
    </div>
  );
}

export default SelectedFlight;
