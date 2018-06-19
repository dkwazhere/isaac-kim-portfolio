import React from "react";
import './Navbar.css';
import { Navbar, Nav,NavItem,MenuItem,NavDropdown} from "react-bootstrap";
import image from '../../images/whitelogo.png';
const Header = () => {
  return (
    <Navbar inverse>
      <NavItem className="link" eventKey={1} href="#">
        Home
      </NavItem>
      <NavItem className="link" eventKey={2} href="#">
        About
      </NavItem>
      <NavItem eventKey={3} href="#">
        <img className="logo-img" src={image}></img>
      </NavItem>

      <NavItem className="link" eventKey={4} href="#">
        Gallery
      </NavItem>

      <NavItem className="link" eventKey={5} href="#">
        Contact
      </NavItem>
    </Navbar>
  );
};

export default Header;
