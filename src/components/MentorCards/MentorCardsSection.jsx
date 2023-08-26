import React from "react";
import MentorCards from "./MentorCards";

const mentorData = [
  {
    name: "Tom Cruise",
    uni: "Cambridge University",
  },
  {
    name: "Tom Cruise",
    uni: "Cambridge University",
  },
  {
    name: "Tom Cruise",
    uni: "Cambridge University",
  },
  {
    name: "Tom Cruise",
    uni: "Cambridge University",
  },
  {
    name: "Tom Cruise",
    uni: "Cambridge University",
  },
  {
    name: "Tom Cruise",
    uni: "Cambridge University",
  },
  {
    name: "Tom Cruise",
    uni: "Cambridge University",
  },
  {
    name: "Tom Cruise",
    uni: "Cambridge University",
  },
  {
    name: "Tom Cruise",
    uni: "Cambridge University",
  },
  {
    name: "Tom Cruise",
    uni: "Cambridge University",
  },
  {
    name: "Tom Cruise",
    uni: "Cambridge University",
  },
];

const MentorCardsSection = () => {
  return (
    <div className="px-16">
      <div className="my-8">
        <p className="text-2xl text-transparent bg-clip-text bg-gradient-to-t from-[#234EB0] to-[#9010B0]">
          Meet your Mentors
        </p>
      </div>
      <div className="grid grid-cols-4">
        {mentorData.map((mentor) => {
          return (
            <div className="my-4">
              <MentorCards mentorName={mentor.name} uniName={mentor.uni} />
            </div>
          );
        })}
      </div>
      <div className="m-16 w-full flex justify-evenly ">
        <div className="flex flex-col items-center justify-center">
          <MentorCards mentorName="Vivek Dwivedi" uniName="NISER" />
          {/* embed icon here. */}
          <button className="h-8 w-[70%] bg-gradient-to-r from-[#9CBAF7] to-[#9010B0] rounded-2xl">
            <div className=" bg-white rounded-2xl">Message him now!</div>
          </button>
        </div>
        <div className="flex flex-col items-center justify-center">
          <MentorCards mentorName="Akhil Tripathi" uniName="NISER" />
          {/* embed icon here. */}
          <button className="h-8 w-[70%] bg-gradient-to-r from-[#9CBAF7] to-[#9010B0] rounded-2xl">
            <div className=" bg-white rounded-2xl">Message him now!</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MentorCardsSection;
