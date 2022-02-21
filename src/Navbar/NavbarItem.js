import React from "react";
import {Navbar, Nav, Container }from "react-bootstrap";

function NavbarItem(){
    return(
        <Navbar sticky="top" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Hewan</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="https://katadata.co.id/sitinuraeni/berita/61b813a837f27/ulasan-tentang-hewan-mamalia-lengkap-dengan-contohnya">
                Mamalia
              </Nav.Link>
              <Nav.Link href="https://www.tokopedia.com/blog/jenis-hewan-reptil-hbl/">
                Reptil
              </Nav.Link>
              <Nav.Link href="https://www.infoikan.com/2017/01/mengenal-jenis-jenis-ikan-secara-umum.html">
                Ikan
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
    );
}
export default NavbarItem;