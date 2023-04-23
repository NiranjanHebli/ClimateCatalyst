import React from 'react';
import {makeStyles, Typography, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

title:{
color:theme.palette.success.main,
fontWeight:"bold",
},

}));
const CarbonFootprintInfo = () => {
    const classes=useStyles();
  return (
    <Box p={2}>
      <Typography variant="h4" className={classes.title} gutterBottom>
        What is a Carbon Footprint?
      </Typography>
      <Typography variant="body1" gutterBottom>
        A carbon footprint is the <b>total amount of greenhouse gases </b>(including carbon dioxide, methane, and nitrous oxide) that are generated by human activities, such as driving a car, using electricity, and eating food. These greenhouse gases trap heat in the atmosphere and contribute to global warming and climate change.
      </Typography>
      <div className="my-3"></div>
      <Typography variant="body1" gutterBottom>
        By calculating your carbon footprint and taking steps to reduce it, you can help reduce your impact on the environment and slow down climate change.
      </Typography>
      <div className="p-4"></div>
    </Box>
  );
};

export default CarbonFootprintInfo;