import React from "react";
import CarbonFootprintCalculator from "../../components/CarbonFootprint/CarbonFootprint";
import FooterComp from "../../components/Footer/FooterComp";

const CarbonMain = () => {
  return (
    <React.Fragment>
      <CarbonFootprintCalculator />
      <FooterComp />
    </React.Fragment>
  );
};

export default CarbonMain;
