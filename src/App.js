import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselItem from "./components/Molecule/Carousel";
import CardItem from "./components/Molecule/Card";
import arr from "./Service/Carousel/index.js";
import dataCard from "./Service/Card";
import Api from "./Service/API";


function App() {
  return (
    <div className="App">

      <Api/>

      <CarouselItem value={arr}/>

      <CardItem value={dataCard}/>
    </div>
  );
}

export default App;
