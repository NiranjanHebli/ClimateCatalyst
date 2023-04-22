import React from "react";
import Hero from "../../components/Hero/Hero";
import FooterComp from "../../components/Footer/FooterComp";

import Crisis from "../Crisis/Crisis";

const Home = () => {
  return (
    <div>
        <div className="my-4"></div>
      <Hero />
      <Crisis/>
      <FooterComp />
    
    </div>
  );
};

export default Home;
