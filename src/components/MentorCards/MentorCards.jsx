import React from "react";
import avatar from "../../assets/avatarM.png";

const MentorCards = ({ mentorName, uniName, img }) => {
  return (
    <div className="w-[15vw] h-[25vh]  flex flex-col items-center justify-center rounded-2xl">
      <div className="my-4 w-[50%] h-[50%]">
        <img className="w-full h-full" src={img} alt="avatar-male" />
      </div>
      <div className="w-full h-[20%] text-center  flex flex-col justify-between">
        <p className="text-lg">{mentorName}</p>
        <p className="text-gray-600">{uniName}</p>
      </div>
    </div>
  );
};

export default MentorCards;
