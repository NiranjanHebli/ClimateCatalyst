import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';
import backgroundImage from './image.jpg';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: `linear-gradient(to right bottom, rgba(10, 30, 64, 0.9), rgba(24, 60, 102, 0.9)), url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    paddingBottom: theme.spacing(25),
    paddingTop:theme.spacing(10),
  },
  textContainer: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
}));

function Description() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <div className={classes.textContainer}>
              <Typography variant="h2" component="h2">
                How can you make an Impact?
              </Typography>
              <Typography variant="body1">

              <Typography variant="body1" style={{ marginTop: '2rem' }}>
              Making small changes in your daily life can have a big impact on reducing your carbon footprint. You can start by using public transportation, reducing meat consumption, and turning off lights and electronics when not in use.             
               </Typography>
               <Typography variant="body1" style={{ marginTop: '2rem' }}>
               By supporting clean energy initiatives such as wind, solar, and hydro power, you can help reduce our reliance on fossil fuels and decrease greenhouse gas emissions.               </Typography>
              <Typography variant="body1" style={{ marginTop: '2rem' }}>

              Join local organizations that focus on environmental issues, attend community events, and participate in activities such as planting trees, cleaning up beaches, and promoting sustainable practices.               </Typography>
              <Typography variant="body1" style={{marginTop:'2rem'}}>
               Contributing financially to environmental organizations and causes can help fund important research, education, and advocacy efforts.
               </Typography>
              <Typography variant="body1" style={{ marginTop: '2rem' }}>
              Help spread the word about climate change and the importance of taking action to protect our planet. Share information with friends and family, post on social media, and engage in conversations about environmental issues.             
               </Typography>

              </Typography>
              
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Description;