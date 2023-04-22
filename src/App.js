
import './App.css';
// import AboutUs from './components/AboutUs/AboutUs';
import About from './containers/About/About';
import Home from './containers/Home/Home';
import CarbonMain from './containers/CarbonFootprint/CarbonMain';
// import FooterComp from './components/Footer/FooterComp';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      {/* <Home/> */}
      {/* <AboutUs/> */}
      {/* <CarbonMain/> */}
    </div>
  );
}

export default App;
