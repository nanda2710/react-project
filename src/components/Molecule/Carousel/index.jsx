import React, {useState, useEffect} from "react"; 
import './index.css'
import Images from "../../Atom/Images/index.jsx";
import Carousel from 'react-bootstrap/Carousel';


function CarouselItem(props) {
  const [index, setIndex] = useState(0);
   
  const [data, setData] = useState([{}]);

  useEffect(() =>{
      setData(props.value);
  },[])

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);

  };

  return (
    <Carousel className="Carousel" activeIndex={index} onSelect={handleSelect}>
       {data.map((slide, i) => {
        return (
          <Carousel.Item key={i}>        
            <Images  
              typeclass="d-block gambar1" 
              slideimage={slide.image} 
              alternativetext="silder image" 
            />
            <Carousel.Caption>
              <h3>{slide.caption}</h3>
              <p>{slide.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        )
      })}
      
    </Carousel>
  );
}
export default CarouselItem;