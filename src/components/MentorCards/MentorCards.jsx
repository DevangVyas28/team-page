import React from "react";
import avatar from "../../assets/avatarM.png";

const MentorCards = ({ mentorName, uniName }) => {
  return (
    <div className="w-[15vw] h-[25vh]  flex flex-col items-center justify-center rounded-2xl">
      <div className="my-4 w-[50%] h-[50%] rounded-full ">
        <img
          className="w-full h-full rounded-full bg-gradient-to-t from-[#9CBAF7] to-[#9010B0]"
          src={avatar}
          alt="avatar-male"
        />
      </div>
      <div className="w-full h-[20%] text-center  flex flex-col justify-between">
        <p>{mentorName}</p>
        <p>{uniName}</p>
      </div>
    </div>
  );
};

export default MentorCards;
