import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import { Navbar, Nav } from 'react-bootstrap';

export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/contacts">All Contacts</Nav.Link>
          <Nav.Link href="/newcontact">Add New</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
