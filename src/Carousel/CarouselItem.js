import React, {useState} from "react"; 
import './Carousel.css'
import Images from "../components/Atom/Images";
import Carousel from 'react-bootstrap/Carousel';
import shark from '../Assets/Carousel/shark.jpg';
import capung from '../Assets/Carousel/capung.jpg';
import gajah from '../Assets/Carousel/gajah.jpg';

const data = [
  {
   image: shark, 
   caption:"HIU",
   description:"Ikan Hiu adalah sekelompok (superordo Selachimorpha) ikan dengan kerangka tulang rawan yang lengkap"
  },
  {
    image: capung, 
    caption:"CAPUNG",
    description:"Capung atau sibar-sibar dan Capung Jarum adalah kelompok serangga yang tergolong ke dalam bangsa Odonata"
   },
   {
    image: gajah, 
    caption:"GAJAH",
    description:"Gajah adalah mamalia besar dari famili Elephantidae dan ordo Proboscidea"
   } 
]

function CarouselItem() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className="Carousel" activeIndex={index} onSelect={handleSelect}>
       {data.map((slide, i) => {
        return (
          <Carousel.Item>        
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