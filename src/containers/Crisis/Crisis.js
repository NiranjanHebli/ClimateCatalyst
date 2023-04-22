import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

import CardComp from "../../components/Card/CardComp";
import image1 from "./image1.jpg"
import image2 from "./image2.jpg"
import image3 from "./image3.jpg"
import image4 from "./image4.jpg"
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),

  },
  title: {
    marginBottom: theme.spacing(2),
    color: theme.palette.success.main,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    textAlign: "center",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
  },
}));

const Crisis = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography
        variant="h3"
        fontWeight="bold"
        component="h1"
        className={classes.title}
      >
  Crisis Caused by Climate Change
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div className={classes.cardContainer}>
            <div className="my-3">
              {" "}
              <CardComp image={image1} title={"Natural Disasters"} text={"Hurricanes, floods, wildfires, and droughts are among the natural catastrophes that are becoming more common and severe as a result of climate change. These occurrences have the potential to destroy large portions of the infrastructure, as well as homes, companies, and communities."} />
            </div>
            <div className="my-3">
              {" "}
              <CardComp image={image2} title={"Economical Crisis"} text={"Economic effects brought on by climate change include lost output, decreased tourism, and property loss. The local and global economies is impacted by this."} />
            </div>
            <div className="my-3">
              {" "}
              <CardComp image={image3} title={"Impact on Health"} text={" Global warming, air pollution, and the proliferation of disease-carrying insects are all having an impact on people's health. Air pollution can worsen cardiovascular and respiratory conditions, while heatwaves can cause heat exhaustion, dehydration, and other heat-related ailments."}/>
            </div>
            <div className="my-3">
              <CardComp image={image4} title={"Food and Water Insecurity"} text={"Food shortages and price increases are being brought on by climate change's impact on agricultural productivity in some areas. Water availability is also being impacted by changes in precipitation patterns, melting glaciers, and snowpacks, especially in areas that depend on snow and ice melt for water supply."} />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Crisis;
