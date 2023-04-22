import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';
import backgroundImage from './image.jpg';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: `linear-gradient(to right bottom, rgba(10, 30, 64, 0.9), rgba(24, 60, 102, 0.9)), url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
  textContainer: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
}));

function AboutUs() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <div className={classes.textContainer}>
              <Typography variant="h2" component="h2">
            About Us
              </Typography>
              <Typography variant="body1">
              Climate Catalyst is a non-profit organization that is committed to promoting sustainable practices for a better future. Our organization believes that climate change is one of the most pressing issues of our time and that everyone has a role to play in addressing it.              </Typography>
              <Typography variant="body1" style={{ marginTop: '2rem' }}>
              We offer education, training, and resources to help individuals and organizations better understand the impacts of climate change and how they can make a difference. Through these efforts, we aim to empower individuals and organizations to take meaningful action towards reducing their carbon footprint.

At Climate Catalyst, we understand that sustainable solutions require innovation and collaboration. That's why we bring together experts from various fields, including science, engineering, and policy, to create innovative solutions to the challenges posed by climate change.
              </Typography>
              <Typography variant="body1" style={{ marginTop: '2rem' }}>
              We believe that sustainability is not only an environmental issue but also a social and economic one. Our work is centered around creating solutions that promote social equity and economic prosperity while also benefiting the environment.

Through our efforts, we have seen firsthand the positive impact that collaboration and innovation can have on driving change. We work with individuals and organizations from around the world to create sustainable solutions that make a real impact on the environment and the communities we serve.

We invite you to join us in our mission to promote sustainability and create a more resilient future for our planet. Together, we can make a difference and create a world that is more equitable, prosperous, and sustainable for generations to come.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default AboutUs;