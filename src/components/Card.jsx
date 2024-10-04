import React from "react";

const Card = ({ index, item, title, onClick }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full p-2">
      <div className="relative h-48 w-full rounded-lg overflow-hidden" onClick={onClick}>
        <img
          src={item.image}
          alt={`Image ${index + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mt-2 text-center">
        <h1 className="text-black text-xl font-bold">{title}</h1>
        <h6 className="text-black text-xs font-medium">{item.date}</h6>
      </div>
    </div>
  );
};

export default Card;
