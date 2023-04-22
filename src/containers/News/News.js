
import React from "react";
import NewsCard from "../../components/NewsCard/NewsCard";
import FooterComp from "../../components/Footer/FooterComp";


const News = () => {
  return (
    <div>
   
    
      <NewsCard
        title="Breaking news: Earthquake strikes California"
        description="A 6.0 magnitude earthquake struck California early this morning, causing damage to homes and businesses. There have been no reports of casualties at this time."
        imageUrl="https://cdn.pixabay.com/photo/2019/06/25/12/08/earthquake-4295451_960_720.jpg"
      />
      <NewsCard
        title="Record heatwave hits Europe"
        description="Temperatures across Europe have reached record highs, causing power outages and health concerns. Experts warn that climate change is contributing to more frequent and severe heatwaves."
        imageUrl="https://cdn.pixabay.com/photo/2019/06/30/12/32/heat-wave-4305617_960_720.jpg"
      />

{/* <Newsletter/> */}
    <FooterComp/>
    </div>
  );
};

export default News;