import React from "react";
import './Navbar.css';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown} from "react-bootstrap";
import image from '../../images/whitelogo.png';

const Header = () => {
  return (
    <div className="navbar-main">
    <Navbar inverse>
      <NavItem className="link" eventKey={1} href="/">
        Home
      </NavItem>
      <NavItem className="link" eventKey={2} href="/about">
        About
      </NavItem>
      <NavItem eventKey={3} href="#">
        <img className="logo-img" src={image}></img>
      </NavItem>

      <NavItem className="link" eventKey={4} href="/gallery">
        Gallery
      </NavItem>

      <NavItem className="link" eventKey={5} href="/contact">
        Contact
      </NavItem>
    </Navbar>
    </div>
  );
};

export default Header;
