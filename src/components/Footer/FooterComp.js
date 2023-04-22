import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import {Instagram,Facebook,Twitter,LinkedIn} from '@material-ui/icons';

import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#fff8e1',
    padding: theme.spacing(3),
    marginTop: theme.spacing(8),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(12),
    },
    '& h6': {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      marginBottom: theme.spacing(2),
      color:'white',
    },
  },
  woodTexture: {
    backgroundColor: '#823800',
    backgroundImage: 'url("https://www.transparenttextures.com/patterns/tileable-wood.png")',
    backgroundRepeat: 'repeat',
    backgroundSize: 'auto',
  },
  link: {
    marginRight: theme.spacing(2),
    color: '#ffffff',
    '&:hover': {
      color: '#cccccc',
    },
},
}));

export default function FooterComp() {
  const classes = useStyles();
  return (
    <footer className={`${classes.footer} ${classes.woodTexture}`} >
      <Typography variant="subtitle1" align="center" gutterBottom style={{color:"ffffff"}}>
        Join the fight against climate change!
       
      </Typography>
      <Typography variant="subtitle1" align="center" style={{color:"ffffff"}}>
      ©{new Date().getFullYear()} Climate Catalyst
      
      </Typography>
      <Typography variant="subtitle1" align="center" style={{color:"ffffff"}}>
        Made With ♥ by Niranjan Hebli      
      </Typography>

      <Typography variant="body2"  align="center">
        <Link className={classes.link} to="/about">About</Link>
        <a className={classes.link} href="#">Contact Us</a>


        <a className={classes.link} href="#">Privacy Policy</a>
        <a className={classes.link} href="#">Terms of Use</a>
        {/* <div style={{style:"ffffff"}}>
        <Instagram/>
        <Twitter/>
        <LinkedIn/>
        <Facebook/>
        </div> */}
      </Typography>
    </footer>
  );
}

