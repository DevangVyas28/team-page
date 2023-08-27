import React from "react";
import MentorCards from "./MentorCards";
import avatarM from "../../assets/avatarM.png";
import avatarF from "../../assets/avatarF.png";
import { IoIosSend } from "react-icons/io";

const mentorData = [
  {
    name: "John Doe",
    uni: "Cambridge University",
    img: avatarM,
  },
  {
    name: "John Doe",
    uni: "Cambridge University",
    img: avatarF,
  },
  {
    name: "John Doe",
    uni: "Cambridge University",
    img: avatarM,
  },
  {
    name: "John Doe",
    uni: "Cambridge University",
    img: avatarF,
  },
  {
    name: "John Doe",
    uni: "Cambridge University",
    img: avatarF,
  },
  {
    name: "John Doe",
    uni: "Cambridge University",
    img: avatarM,
  },
  {
    name: "John Doe",
    uni: "Cambridge University",
    img: avatarF,
  },
  {
    name: "John Doe",
    uni: "Cambridge University",
    img: avatarM,
  },
  {
    name: "John Doe",
    uni: "Cambridge University",
    img: avatarM,
  },
  {
    name: "John Doe",
    uni: "Cambridge University",
    img: avatarM,
  },
  {
    name: "John Doe",
    uni: "Cambridge University",
    img: avatarF,
  },
];

const MentorCardsSection = () => {
  return (
    <div className="my-32 px-4 md:px-32">
      <div className="my-4">
        <p className="md:text-2xl text-transparent bg-clip-text bg-gradient-to-t from-[#234EB0] to-[#9010B0]">
          Meet your Mentors
        </p>
      </div>
      <div className="grid md:grid-cols-4">
        {mentorData.map((mentor) => {
          return (
            <div className="my-4 flex items-center justify-center">
              <MentorCards
                mentorName={mentor.name}
                uniName={mentor.uni}
                img={mentor.img}
              />
            </div>
          );
        })}
      </div>
      <div className="m-16 w-full flex justify-evenly ">
        <div className="flex flex-col items-center justify-center">
          <MentorCards
            mentorName="Vivek Dwivedi"
            uniName="NISER"
            img={avatarM}
          />
          {/* embed icon here. */}
          <button className="h-8 w-[70%] bg-gradient-to-r from-[#9CBAF7] to-[#9010B0] rounded-2xl">
            <div className=" bg-white rounded-2xl text-sm flex items-center justify-center">
              Message him now!
              <IoIosSend size={18} />
            </div>
          </button>
        </div>
        <div className="flex flex-col items-center justify-center">
          <MentorCards
            mentorName="Akhil Tripathi"
            uniName="NISER"
            img={avatarM}
          />
          {/* embed icon here. */}
          <button className="h-8 w-[70%] bg-gradient-to-r from-[#9CBAF7] to-[#9010B0] rounded-2xl">
            <div className=" bg-white rounded-2xl text-sm flex items-center justify-center">
              Message him now!
              <IoIosSend size={18} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MentorCardsSection;
