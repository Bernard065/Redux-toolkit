import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavPanel = () => {
  const cartProducts = useSelector(state => state.cart);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Redux Toolkit</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse>
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }}>
            <Nav.Link to='/' as={Link}>Products</Nav.Link>
            <Nav.Link to='/dashboard' as={Link}>Dashboard</Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            <Nav.Link to='/cart' as={Link}>Cart {cartProducts.length}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavPanel;
