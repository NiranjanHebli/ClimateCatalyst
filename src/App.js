import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AboutUs from './components/AboutUs/AboutUs';
import About from "./containers/About/About";
import Home from "./containers/Home/Home";
import CarbonMain from "./containers/CarbonFootprint/CarbonMain";
// import FooterComp from './components/Footer/FooterComp';
import Navbar from "./components/Navbar/Navbar";
import News from "./containers/News/News";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path ="/" element={<Home/>}/>
        <Route  path="/about" element={<About />} />
        <Route  path="/carbon" element={<CarbonMain/>}/>
        <Route path ="/news" element={<News/>}/>
      </Routes>
    </Router>
  );
}

export default App;
