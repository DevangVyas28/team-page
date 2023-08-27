import React from "react";
import { UniCards } from "./UniCards";
import uniImageOne from "../../assets/cincinnati-campus.png";
import uniImageTwo from "../../assets/gonzaga-campus.png";
import uniImageThree from "../../assets/notre-dame-campus.png";
import uniImageFour from "../../assets/samford-campus.png";

const uniData = [
  {
    name: "Cambridge University",
    img: uniImageOne,
  },
  {
    name: "Havard University",
    img: uniImageTwo,
  },
  {
    name: "University of california",
    img: uniImageThree,
  },
  {
    name: "University of Edinberg",
    img: uniImageFour,
  },
  {
    name: "University of Illinois",
    img: uniImageTwo,
  },
  {
    name: "Stanford University",
    img: uniImageFour,
  },
  {
    name: "ETH Zürich",
    img: uniImageTwo,
  },
  {
    name: "Cambridge University",
    img: uniImageOne,
  },
];

const UniCardsSection = () => {
  return (
    <div className="my-16 px-4 md:px-32">
      <div className="my-8">
        <p className="text-center md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#234EB0] to-[#9010B0]">
          Learn from Scientists, researchs and scholors from the top institutes
          in the world
        </p>
      </div>
      <div className="grid md:grid-cols-4 flex items-center justify-center">
        {uniData.map((uni) => {
          return (
            <div className="my-4 flex items-center justify-center">
              <UniCards uniName={uni.name} img={uni.img} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UniCardsSection;
