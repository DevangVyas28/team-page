import React from "react";
import MentorCardsSection from "./components/MentorCards/MentorCardsSection";
import Navbar from "./components/Navbar/Navbar";
import UniCardsSection from "./components/UniCrads/UniCardsSection";

export const App = () => {
  return (
    <div className="font-poppins">
      <Navbar />
      <UniCardsSection />
      <MentorCardsSection />
    </div>
  );
};
