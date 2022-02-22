import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselItem from "./components/Molecule/Carousel";
import Navbar from "./components/Molecule/NavBar";
import CardItem from "./components/Molecule/Card";
import arr from "./Service/Carousel/index.js";
import dataNavbar from "./Service/Navbar";
import dataCard from "./Service/Card";

function App() {
  return (
    <div className="App">
      <Navbar value={dataNavbar}/>
      
      <CarouselItem value={arr}/>

      <CardItem value={dataCard}/>
    </div>
  );
}

export default App;
