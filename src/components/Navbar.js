import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';

function TopNavbar() {
  return (
    
    <Navbar sticky="top" collapseOnSelect expand="lg" variant="light">
    <Navbar.Brand href="#home">ASMTC</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
    </Navbar.Collapse>
    </Navbar>

  );
}

export default TopNavbar;