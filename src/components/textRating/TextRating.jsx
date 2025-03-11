import React from "react";

function TextRating({ messageRating, setMessageRating }) {
  return (
    <div>
      <div className="py-4">
        <p className="py-3 font-PoppinsBold">write your message</p>
        <textarea
          className="bg-white p-4 focus:outline-none min-h-32 max-h-72 min-w-full border-2 border-solid border-neutral-200 rounded"
          placeholder="write your message"
          onChange={(e) => setMessageRating(e.target.value)}
          value={messageRating}
        />
      </div>
    </div>
  );
}

export default TextRating;
