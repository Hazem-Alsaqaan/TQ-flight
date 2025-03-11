import React from "react";

function ListOfRating({ ratingList }) {
  return (
    <div className="py-5">
      <h2 className="text-center font-PoppinsBlack">Rating List</h2>
      <div>
        {ratingList.length === 0
          ? ""
          : ratingList.map((rating) => (
              <div key={rating.id} className="bg-white p-4 rounded mb-5 shadow">
                <h6 className="font-PoppinsBold text-stone-500 py-2">
                  counter employee:
                  <span className="px-5 text-black">
                    {rating.counterEmployee}
                  </span>
                </h6>
                <h6 className="font-PoppinsBold text-stone-500 py-2">
                  hostess:
                  <span className="px-5 text-black">{rating.hostess}</span>
                </h6>
                <h6 className="font-PoppinsBold text-stone-500 py-2">
                  captain:
                  <span className="px-5 text-black">{rating.captain}</span>
                </h6>
                <h6 className="font-PoppinsBold text-stone-500 py-2">
                  cleanliness:
                  <span className="px-5 text-black">{rating.cleanliness}</span>
                </h6>
                <h6 className="font-PoppinsBold text-stone-500 py-2">
                  take off:
                  <span className="px-5 text-black">{rating.takeOff}</span>
                </h6>
                <h6 className="font-PoppinsBold text-stone-500 py-2">
                  landing:
                  <span className="px-5 text-black">{rating.landing}</span>
                </h6>
                <h6 className="font-PoppinsBold text-stone-500 py-2">
                  food quality:
                  <span className="px-5 text-black">{rating.foodQuality}</span>
                </h6>
                <h6 className="font-PoppinsBold text-stone-500 py-2">
                  message:
                  <span className="px-5 text-black">
                    {rating.messageRating}
                  </span>
                </h6>
              </div>
            ))}
      </div>
    </div>
  );
}

export default ListOfRating;
