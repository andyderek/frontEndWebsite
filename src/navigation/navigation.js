import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Navigation() {
  
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" fixed="top">
      <Navbar.Brand><a href="/" className="brandHomeLink">Andy Nixon | Front-End Developer</a></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav" className='navItems'>
       <Nav>
            <Nav.Link className="nav-item nav-link" href="/About">About Me</Nav.Link>
            <Nav.Link className="nav-item nav-link" href="/Projects">Projects</Nav.Link>
            <Nav.Link className="nav-item nav-link" href="/Skills">Skills/Education</Nav.Link>
            <Nav.Link className="nav-item nav-link" href="/Employment">Employment History</Nav.Link>
            <Nav.Link className="nav-item nav-link" href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;