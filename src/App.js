import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselItem from "./Carousel/CarouselItem";
import Navbar from "./components/Molecule/NavBar";
import CardItem from "./components/Molecule/Card";

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <CarouselItem/>

      <CardItem/>
    </div>
  );
}

export default App;
