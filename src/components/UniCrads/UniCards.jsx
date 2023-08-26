import React from "react";
import uniImage from "../../assets/cincinnati-campus.png";

export const UniCards = ({ uniName }) => {
  return (
    <div className="relative w-[15vw] h-[25vh] rounded-2xl">
      <img
        className="w-full h-full object-fill rounded-2xl"
        src={uniImage}
        alt="uni-campus"
      />
      <div className="absolute bottom-0 rounded-b-2xl  w-full h-[50%] flex items-center justify-center bg-gradient-to-t to-transparent from-[#234EB0]">
        <p className="text-white mt-16">{uniName}</p>
      </div>
    </div>
  );
};
