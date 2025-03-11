import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";

function StarRating({ title, setValueName }) {
  const starNumber = [1, 2, 3, 4, 5];
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const handleRatingvalues = (val) => {
    setRating(val);
    setValueName(val);
  };
  return (
    <div className="flex items-center  py-3">
      <h1 className="flex-1  capitalize font-PoppinsMedium">{title}</h1>
      <div className="flex-1 flex ">
        {starNumber.map((star, index) => {
          const ratingValue = index + 1;
          return (
            <label key={index}>
              <input
                className=" hidden"
                type="radio"
                name={title}
                value={ratingValue}
                onChange={() => handleRatingvalues(ratingValue)}
              />
              <FaStar
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
                className={`${
                  ratingValue <= (hover || rating)
                    ? "text-sky-500"
                    : "text-neutral-400"
                } text-2xl`}
              />
            </label>
          );
        })}
      </div>
    </div>
  );
}

export default StarRating;
