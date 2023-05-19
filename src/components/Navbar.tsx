import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { AiOutlineHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function MyNavbar() {
  const navigate = useNavigate();
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home" className="ms-5">
        <AiOutlineHome size={30} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            Dashboard
          </Nav.Link>

          <Nav.Link
            onClick={() => {
              navigate("/contact-us");
            }}
          >
            Contact Us
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              localStorage.removeItem("username");
              navigate("/sign-in");
            }}
            className="justify-content-end"
          >
            Log out
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
