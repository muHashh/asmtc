import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';

function TopNavbar() {
  return (
    <div className="pb-4">
      <Navbar className="py-3 mx-2 shadow rounded-bottom" fixed="top" collapseOnSelect expand="lg" variant="dark">
      <Navbar.Brand href="#home">ASM</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
      </Navbar.Collapse>
      </Navbar>
  </div>  
  );
}

export default TopNavbar;