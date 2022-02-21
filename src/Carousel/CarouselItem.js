
import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';

const data = [
  {
   image: require('./images/1.jpg'), 
   caption:"HIU",
   description:"Ikan Hiu adalah sekelompok (superordo Selachimorpha) ikan dengan kerangka tulang rawan yang lengkap"
  },
  {
    image:require('./images/2.jpg'), 
    caption:"CAPUNG",
    description:"Capung atau sibar-sibar dan Capung Jarum adalah kelompok serangga yang tergolong ke dalam bangsa Odonata"
   },
   {
    image:require('./images/3.jpg'), 
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
    <Carousel activeIndex={index} onSelect={handleSelect}>
       {data.map((slide, i) => {
        return (
          <Carousel.Item>        
        <img
          className="d-block w-100"
          src={slide.image}
          alt="slider image"
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