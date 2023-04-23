import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { Typography } from "@material-ui/core";
// import {makeStyles} from "@material-ui/core";
function CarbonFootprintCalculator() {
  const [electricity, setElectricity] = useState(0);
  const [gas, setGas] = useState(0);
  const [car, setCar] = useState(0);
  const [publicTransportation, setPublicTransportation] = useState(0);
  const [flight, setFlight] = useState(0);
  const [meat, setMeat] = useState(0);
  const [carbonFootprint, setCarbonFootprint] = useState(0);
const[message,setMessage]=useState("");

  const calculateCarbonFootprint = () => {

    const carbonFootprint = (electricity * 0.00043) + (gas * 0.00053) + (car * 0.00055*1.6) + (publicTransportation * 0.00018*1.6) + (flight * 0.00024*1.6) + (meat * 0.0000025);
    setCarbonFootprint(carbonFootprint);
      if (carbonFootprint < 1) {
        setMessage( "Your  carbonFootprint is very good. Keep up the sustainable lifestyle!");
      } else if (carbonFootprint >= 1 && carbonFootprint < 5) {
        setMessage( "Your  carbonFootprint is good. There is still room for improvement, but you're doing well!");
      } else if (carbonFootprint >= 5 && carbonFootprint < 10) {
        setMessage( "Your  carbonFootprint is average. Consider making changes to reduce your impact on the environment.");
      } else if (carbonFootprint >= 10 && carbonFootprint < 20) {
        setMessage( "Your carbonFootprint is bad. There are many ways you can reduce your impact on the environment.");
      } else if (carbonFootprint >= 20 && carbonFootprint < 30) {
        setMessage( "Your  carbonFootprint is worse. Your lifestyle is contributing to climate change. Consider making significant changes.");
      } else {
        setMessage( "Your carbonFootprint is horrible. You are contributing to climate change in a significant way. Please make changes to reduce your impact.");
      }
    
    

  };
// const classes=useStyles();
  return (
    
    <React.Fragment>
<div className="my-4"></div>
    <Card className={{justifyContent:"center",alignItems:"center",display:"flex"}} style={{ width: "500px", margin: "0 auto" }}>
      <div className="my-3"></div>
      <Typography variant="h5"  align="center" >Carbon Footprint Calculator</Typography >
      <Card.Body>
        <Form>
          <Form.Group>
            <Form.Label>Home Energy Use</Form.Label>
            <Form.Label htmlFor="electricity">Electricity usage (kWh/year): </Form.Label>
            <Form.Control type="number" id="electricity" name="electricity" value={electricity} onChange={(e) => setElectricity(e.target.value)} />

            <Form.Label htmlFor="gas">Natural gas usage (therms/year): </Form.Label>
            <Form.Control type="number" id="gas" name="gas" value={gas} onChange={(e) => setGas(e.target.value)} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Transportation</Form.Label>
            <Form.Label htmlFor="car">Car  driven per year (KM): </Form.Label>
            <Form.Control type="number" id="car" name="car" value={car} onChange={(e) => setCar(e.target.value)} />

            <Form.Label htmlFor="public-transportation">Public transportation per year (KM): </Form.Label>
            <Form.Control type="number" id="public-transportation" name="public-transportation" value={publicTransportation} onChange={(e) => setPublicTransportation(e.target.value)} />

            <Form.Label htmlFor="flight">Flight distanct per year (KM): </Form.Label>
            <Form.Control type="number" id="flight" name="flight" value={flight} onChange={(e) => setFlight(e.target.value)} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Diet</Form.Label>
            <Form.Label htmlFor="meat">Meat consumption per week (in KG): </Form.Label>
            <Form.Control type="number" id="meat" name="meat" value={meat} onChange={(e) => setMeat(e.target.value)} />
          </Form.Group>
<div className="my-5"></div>
          <Button variant="primary" type="button" onClick={calculateCarbonFootprint}>Calculate</Button>
        </Form>
<div className="my-3"></div>
        <div>
          <h2>Result</h2>
          <p>Your estimated carbon footprint is {carbonFootprint} tonnes of CO2e per year.</p>
          <p>{message}</p>
          </div>

          
</Card.Body>
</Card>

</React.Fragment>

  )};

  export default CarbonFootprintCalculator;
