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
              At Climate Catalyst, we're committed to fostering a more sustainable future. In order to reduce carbon footprints and mitigate climate change impacts, our mission is to empower individuals and organizations. By educating, collaborating, and developing innovative solutions, we strive to build a world that is resilient, equitable, and thriving for future generations. We invite you to join us on our journey to a greener, brighter future!
              </Typography>
              <Typography variant="body1" style={{ marginTop: '2rem' }}>
                Etiam vitae tellus tellus. Sed commodo ipsum eget ex accumsan, in efficitur eros vestibulum. Vestibulum sit amet
                lobortis magna, id molestie nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames
                ac turpis egestas. Maecenas vel leo elit. Fusce vitae consequat sapien. Nulla ut dui ac dolor commodo
                consectetur. Aliquam ut tristique turpis, eu imperdiet nulla. Fusce bibendum fringilla nunc vel ultrices. Sed
                blandit turpis eget quam efficitur blandit.
              </Typography>
              <Typography variant="body1" style={{ marginTop: '2rem' }}>
                Sed a diam ex. Sed in lacus vel magna malesuada elementum ac ac tellus. Nulla facilisi. Maecenas aliquam purus
                eget vestibulum tristique. Fusce lobortis tellus vitae sagittis dignissim. Suspendisse vestibulum lectus eget
                elit dapibus, sit amet ullamcorper sapien sodales. Fusce pulvinar lorem sed velit molestie, sed rhoncus eros
                venenatis. Pellentesque semper neque euismod metus malesuada, ut eleifend augue suscipit. Vivamus facilisis
                neque sed tellus molestie, quis bibendum ante bibendum.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default AboutUs;