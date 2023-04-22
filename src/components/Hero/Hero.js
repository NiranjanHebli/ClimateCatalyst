import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, Typography } from '@material-ui/core';
import heroImage from './image.jpg';
import { useAuth0 } from "@auth0/auth0-react";

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundImage: `url(${heroImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '500px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: theme.palette.common.white,
  },
  title: {
    fontSize: '48px',
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
  },
  subtitle: {
    fontSize: '24px',
    marginBottom: theme.spacing(4),
  },
  button: {
    fontSize: '18px',
    fontWeight: 'bold',
    borderRadius: '50px',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px`,
  },
}));

function Hero() {
  const classes = useStyles();

  const { loginWithRedirect } = useAuth0();

  return (
    <div className={classes.hero}>
      <Container maxWidth="md">
        <Typography className={classes.title} variant="h1">
          Join the Climate Catalyst! 
        </Typography>
        <Typography className={classes.subtitle} variant="h2">
          Help protect our planet and create a sustainable future!
        </Typography>
        <Button className={classes.button} variant="contained" color="secondary" onClick={() => loginWithRedirect()}>
          Get Involved
        </Button>
      </Container>
    </div>
  );
}

export default Hero;
