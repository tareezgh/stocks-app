import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { AiOutlineHome } from "react-icons/ai";

function MyNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <AiOutlineHome size={30} className="ml-3" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
