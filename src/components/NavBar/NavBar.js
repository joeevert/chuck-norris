import React, { Component } from 'react';
import { Nav, NavLink } from 'reactstrap';
import './NavBar.css';
import logo from './chuck-logo.svg';

class NavBar extends Component {
  render() {
    return (
      <nav className="sticky">
        {/* <Nav pills> */}
          <img className="logo" src={logo} alt="logo" />
          <NavLink href="#news">NEWS</NavLink>
          <NavLink href="#links">LINKS</NavLink>
          <NavLink href="#filmography">FILMOGRAPHY</NavLink>
          <NavLink href="#bio">BIO</NavLink>
          <NavLink href="#contact">CONTACT</NavLink>
        {/* </Nav> */}
      </nav>
    );
  }
}

export default NavBar;