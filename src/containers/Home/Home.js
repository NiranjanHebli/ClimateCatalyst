import React from "react";
import Hero from "../../components/Hero/Hero";
import FooterComp from "../../components/Footer/FooterComp";
import CardComp from "../../components/Card/CardComp";

const Home = () => {
  return (
    <div>
        <div className="my-4"></div>
      <Hero />
      <CardComp/>
      <FooterComp />
    
    </div>
  );
};

export default Home;
