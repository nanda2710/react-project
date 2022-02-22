import React from "react";
import {useState, useEffect} from "react";
import {CardGroup, Card} from "react-bootstrap";
import './index.css'

function CardItem(props){
  const [data, setData] = useState([{}]);

  useEffect(() =>{
      setData(props.value);
  },[])   
  return(

<CardGroup>
      {data.map((looping, i) => (
        <Card className="card" key ={i}>
        <Card.Img variant="top" src={looping.image} />
        <Card.Body>
          <Card.Title>{looping.cardTitle}</Card.Title>
          <Card.Text>{looping.cardText}</Card.Text>
        </Card.Body>
      </Card>        
        ))}
</CardGroup>

    );
}

export default CardItem;