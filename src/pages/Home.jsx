import React from "react";
import HeroBanner from "../components/HeroBanner";
import SearchExcercise from "../components/SearchExcercise";
import Excercise from "../components/Excercise";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <SearchExcercise />
      <Excercise />
    </>
  );
};

export default Home;
