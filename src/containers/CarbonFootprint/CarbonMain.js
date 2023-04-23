import React from "react";
import CarbonFootprintCalculator from "../../components/CarbonFootprint/CarbonFootprint";
import FooterComp from "../../components/Footer/FooterComp";
import CarbonFootprintInfo from "../../components/CarbonFootprint/CarbonFootprintInfo";

const CarbonMain = () => {
  return (
    <React.Fragment>
      <CarbonFootprintCalculator />
      <div className="my-4"></div>
      <CarbonFootprintInfo/>
      <FooterComp />
    </React.Fragment>
  );
};

export default CarbonMain;
