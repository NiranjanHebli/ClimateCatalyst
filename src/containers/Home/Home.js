import React from "react";
import Quote from "../../components/Quote/Quote";
import Hero from "../../components/Hero/Hero";
import FooterComp from "../../components/Footer/FooterComp";
// import { Button } from "@material-ui/core";
import ButtonComp from "../../components/Button/Button";
import Crisis from "../Crisis/Crisis";
import { Link } from "react-router-dom"
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  centre:{
    justifyContent:"center",
    alignItems:"center",
    display:"flex",
    flexDirection:"column",

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
}));
const Home = () => {
  const classes=useStyles();
  return (
    <div>
  <div className="my-1"></div>
      <Hero />
      <Quote/>
      <div className="p-3"></div>
      <Crisis/>
      <div className="p-3"></div>
      <div className={classes.centre}>
        <Typography  variant="h4" className={classes.title}>
          Want to know how much you contribute?
        </Typography>
 
        <Link to="/carbon">
      <ButtonComp >
      
        Check how much you contribute!
       
        </ButtonComp>
        </Link>



 </div>
<div className="p-4">
  </div>  
      <FooterComp />
    
    </div>
  );
};

export default Home;
