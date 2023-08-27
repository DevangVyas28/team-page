import React from "react";
import uniImage from "../../assets/cincinnati-campus.png";

export const UniCards = ({ uniName, img }) => {
  return (
    <div className="relative md:w-[15vw] md:h-[25vh] rounded-2xl shadow-[5px_2px_8px_0px_gray]">
      <img
        className="w-full h-full object-fill rounded-2xl"
        src={img}
        alt="uni-campus"
      />
      <div className="absolute bottom-0 rounded-b-2xl  w-full h-[50%] flex items-center justify-center bg-gradient-to-t to-transparent from-[#234EB0]">
        <p className="text-white mt-16 font-bold">{uniName}</p>
      </div>
    </div>
  );
};
