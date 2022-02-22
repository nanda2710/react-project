import React from "react";
import {Navbar, Nav, Container }from "react-bootstrap";
import {useState, useEffect} from "react";

function NavBar(props){
  
  const [data, setData] = useState([{}]);

  useEffect(() =>{
      setData(props.value);
  },[])

    return(
        <Navbar sticky="top" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Hewan</Navbar.Brand>
            <Nav className="me-auto">

                {data.map((looping, i) => (
                <Nav.Link key ={i} href={looping.url}>
                {looping.nameNavbar}
                </Nav.Link>
                
                ))}
            </Nav>
          </Container>
        </Navbar>
    );
}
export default NavBar;