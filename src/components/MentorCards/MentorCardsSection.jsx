import React from "react";
import MentorCards from "./MentorCards";
import ava1 from "../../assets/ava1.jpg";
import ava2 from "../../assets/ava2.jpg";
import ava3 from "../../assets/ava3.jpg";
import ava4 from "../../assets/ava4.jpg";
import ava5 from "../../assets/ava5.jpg";
import ava6 from "../../assets/ava6.jpg";

import { IoIosSend } from "react-icons/io";

const mentorData = [
  {
    name: "Rachael Diaz",
    uni: "Cambridge University",
    img: ava1,
  },
  {
    name: "Raina Meyers",
    uni: "Cambridge University",
    img: ava2,
  },
  {
    name: "Jessica Moore",
    uni: "Cambridge University",
    img: ava3,
  },
  {
    name: "John Doe",
    uni: "Cambridge University",
    img: ava4,
  },
  {
    name: "Faith Haas",
    uni: "Cambridge University",
    img: ava5,
  },
  {
    name: "Jacob Wells",
    uni: "Cambridge University",
    img: ava6,
  },
  {
    name: "Joey Burns",
    uni: "Cambridge University",
    img: ava4,
  },
  {
    name: "Kale Willis",
    uni: "Cambridge University",
    img: ava6,
  },
];

const MentorCardsSection = () => {
  return (
    <div>
      <div className="my-32 px-4 md:px-32">
        <div className="my-4">
          <p className="text-center md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#234EB0] to-[#9010B0]">
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
      </div>
      <div className="my-16 w-full flex justify-evenly ">
        <div className="flex flex-col items-center justify-center">
          <MentorCards mentorName="Vivek Dwivedi" uniName="NISER" img={ava6} />
          {/* embed icon here. */}
          <button className="h-8 w-[70%] bg-gradient-to-r from-[#9CBAF7] to-[#9010B0] rounded-2xl">
            <div className=" bg-white rounded-2xl text-sm flex items-center justify-center">
              Message him now!
              <IoIosSend size={18} />
            </div>
          </button>
        </div>
        <div className="flex flex-col items-center justify-center">
          <MentorCards mentorName="Akhil Tripathi" uniName="NISER" img={ava4} />
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
