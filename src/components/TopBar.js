import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import carrotlogo from './carrotlogo.jpg'

export default function TopBar() {
  return (
    <>
      <Navbar bg="light" expand = "lg">
          <Navbar.Brand style = {{margin: "5px 0 0 20px"}} href="#home">
          <img src = {carrotlogo} alt = "Card Image" height = {50} width = {50}/>
            instacart
            </Navbar.Brand>
            
         <Navbar.Collapse className="justify-content-end">
        <Nav>
            <Nav.Link href="#LogIn">Log In</Nav.Link>
            <Button variant="success">Sign Up</Button>{' '}
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}


