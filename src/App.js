import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselItem from "./Carousel/CarouselItem";
import NavbarItem from "./Navbar/NavbarItem";
import CardItem from "./Card/CardItem";

function App() {
  return (
    <div className="App">
      <NavbarItem/>
      
      <CarouselItem/>

      <CardItem/>
    </div>
  );
}

export default App;
