import React, { useState } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { AiOutlineHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function MyNavbar() {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const handleNavbarToggle = () => {
    setExpanded(!expanded);
  };

  const handleNavLinkClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      bg="light"
      expand="lg"
      expanded={expanded}
      onToggle={handleNavbarToggle}
    >
      <Navbar.Brand className="ms-3" onClick={() => navigate("/")}>
        <AiOutlineHome size={30} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-3" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto fs-5 justify-content-center align-items-center">
          <NavItem onClick={handleNavLinkClick}>
            <Nav.Link
              onClick={() => {
                navigate("/dashboard");
              }}
            >
              Dashboard
            </Nav.Link>
          </NavItem>

          <NavItem onClick={handleNavLinkClick}>
            <Nav.Link
              onClick={() => {
                navigate("/contact-us");
              }}
            >
              Contact Us
            </Nav.Link>
          </NavItem>

          <NavItem onClick={handleNavLinkClick}>
            <Nav.Link
              onClick={() => {
                localStorage.removeItem("username");
                navigate("/sign-in");
              }}
            >
              Log out
            </Nav.Link>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
