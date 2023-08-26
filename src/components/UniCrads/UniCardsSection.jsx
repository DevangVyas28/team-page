import React from "react";
import { UniCards } from "./UniCards";

const uniData = [
  {
    name: "Cambridge University",
  },
  {
    name: "Cambridge University",
  },
  {
    name: "Cambridge University",
  },
  {
    name: "Cambridge University",
  },
  {
    name: "Cambridge University",
  },
  {
    name: "Cambridge University",
  },
  {
    name: "Cambridge University",
  },
  {
    name: "Cambridge University",
  },
];

const UniCardsSection = () => {
  return (
    <div className="px-32">
      <div className="m-8">
        <p className="text-2xl text-transparent bg-clip-text bg-gradient-to-t from-[#234EB0] to-[#9010B0]">
          Learn from Scientists, researchs and scholors from the top institutes
          in the world
        </p>
      </div>
      <div className="grid grid-cols-4">
        {uniData.map((uni) => {
          return (
            <div className="my-4">
              <UniCards uniName={uni.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UniCardsSection;
