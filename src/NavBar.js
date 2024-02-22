import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';


function NavBar() {
    const cartProduct=useSelector(state=>state.cart);
  return (
    <div>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Redux</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/" as={Link}>Products</Nav.Link>
          </Nav>
          {/* <NavBar.Toggle/> */}
          <Navbar.Collapse className='justify-content-end'>
            <Navbar.Text>
                <Nav.Link as={Link} to='/cart' >Cart {cartProduct.length}</Nav.Link>
            </Navbar.Text>
          </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar;