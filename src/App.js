import React from "react";
import MentorCardsSection from "./components/MentorCards/MentorCardsSection";
import Navbar from "./components/Navbar/Navbar";
import UniCardsSection from "./components/UniCrads/UniCardsSection";

export const App = () => {
  return (
    <div>
      <Navbar />
      <UniCardsSection />
      <MentorCardsSection />
    </div>
  );
};
