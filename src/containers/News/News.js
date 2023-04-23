
import React from "react";
import NewsCard from "../../components/NewsCard/NewsCard";
import FooterComp from "../../components/Footer/FooterComp";


const News = () => {
  return (
    <div className="p-4">
   
    
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
            <NewsCard
        title="Greenland Ice Sheet Melting at Record Pace
        "
        description="A new report from NASA has found that the Greenland ice sheet is melting at a record pace, losing an average of 279 billion metric tons of ice per year between 2012 and 2021. The loss is equivalent to 0.75 millimeters of global sea level rise per year, and the pace of melting is accelerating. The melting of the Greenland ice sheet is one of the key drivers of global sea level rise, and the findings underscore the urgent need to reduce greenhouse gas emissions and mitigate the impacts of climate change."
        imageUrl="https://cdn.pixabay.com/photo/2019/06/30/12/32/heat-wave-4305617_960_720.jpg"
      />
            <NewsCard
        title="California Wildfire Season Begins Earlier Than Ever Before"
        description="The wildfire season in California has started earlier than ever before, with a series of devastating fires burning across the state. Experts attribute the early start to a combination of factors, including drought, high temperatures, and climate change. The fires have forced thousands of people to evacuate their homes and have caused millions of dollars in damage. The early start to the wildfire season is a stark reminder of the urgent need to address the climate crisis and reduce greenhouse gas emissions."
        imageUrl="https://cdn.pixabay.com/photo/2019/06/30/12/32/heat-wave-4305617_960_720.jpg"
      />
            <NewsCard
        title="Global Temperature Record Broken for Fourth Consecutive Year"
        description="The world experienced its fourth consecutive year of record high temperatures in 2022, according to a report released by the World Meteorological Organization. The global average temperature was 1.28 degrees Celsius above pre-industrial levels, exceeding the Paris Agreement target of limiting warming to 1.5 degrees Celsius. The report also warns of increased extreme weather events and rising sea levels, highlighting the urgent need for action to address the climate crisis."
        imageUrl="https://cdn.pixabay.com/photo/2019/06/30/12/32/heat-wave-4305617_960_720.jpg"
      />
            <NewsCard
        title="New Study Finds Arctic Sea Ice Decline Accelerating"
        description="A new study published in the journal Nature Climate Change has found that the decline of Arctic sea ice is accelerating, with an annual decline rate of 13.1% over the past decade. The study warns that this could lead to devastating consequences for the Arctic ecosystem and global climate. The findings underscore the urgent need for action to reduce greenhouse gas emissions and mitigate the impacts of climate change."
        imageUrl="https://cdn.pixabay.com/photo/2019/06/30/12/32/heat-wave-4305617_960_720.jpg"
      />

{/* <Newsletter/> */}
    <FooterComp/>
    </div>
  );
};

export default News;