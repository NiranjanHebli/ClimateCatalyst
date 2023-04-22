import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography,Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  infoItem: {
    marginBottom: theme.spacing(1),
  },
  section: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  fadeIn: {
    animation: `$fadeIn 1500ms ${theme.transitions.easing.easeInOut}`,
  },
  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
      transform: "translateY(50%)"
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)"
    }
  },

}));

const CarbonFootprint = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
  <div className={classes.root}>
      <Typography variant="h4" component="h1" className={classes.title}>
        Carbon Footprint Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <div className={classes.infoItem}>
            <Typography variant="h5" component="h2">
              What is carbon footprint?
            </Typography>
            <Typography variant="body1">
              Carbon footprint is the total amount of greenhouse gases
              (primarily carbon dioxide) that are emitted into the atmosphere as
              a result of human activities, such as driving a car, using
              electricity, or consuming goods and services.
            </Typography>
          </div>
          <div className={classes.infoItem}>
            <Typography variant="h5" component="h2">
              Why is carbon footprint important?
            </Typography>
            <Typography variant="body1">
              Carbon footprint is important because greenhouse gases contribute
              to climate change, which is causing a range of environmental and
              social impacts around the world. By reducing our carbon footprint,
              we can help mitigate the impacts of climate change and work towards
              a more sustainable future.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.infoItem}>
            <Typography variant="h5" component="h2">
              How can I reduce my carbon footprint?
            </Typography>
            <Typography variant="body1">
              There are many ways to reduce your carbon footprint, such as:
              <ul>
                <li>Driving less and using public transportation or carpooling</li>
                <li>Using energy-efficient appliances and light bulbs</li>
                <li>Reducing meat consumption and choosing plant-based foods</li>
                <li>Using renewable energy sources, such as solar or wind power</li>
                <li>Reducing waste by recycling and composting</li>
              </ul>
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
        <div className={classes.root}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <div className={`${classes.section} ${classes.fadeIn}`}>
                <Typography variant="h3" gutterBottom>
                  Reducing Your Carbon Footprint
                </Typography>
                <Typography variant="body1">
                  There are many ways to reduce your carbon footprint, such as using public transportation, biking or walking instead of driving, and using energy-efficient appliances and light bulbs.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className={`${classes.section} ${classes.fadeIn}`}>
                <Typography variant="h3" gutterBottom>
                  Offsetting Your Carbon Footprint
                </Typography>
                <Typography variant="body1">
                  Carbon offsetting involves investing in projects that reduce or remove greenhouse gas emissions, such as planting trees or supporting renewable energy projects.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      </React.Fragment>
  );
};

export default CarbonFootprint;
