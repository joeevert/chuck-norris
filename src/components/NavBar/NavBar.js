import React, { Component } from 'react';
import { Nav, NavLink } from 'reactstrap';
import './NavBar.css'

class NavBar extends Component {
  render() {
    return (
      <div className="nav-container">
        {/* <Nav pills> */}
          <NavLink href="#news">NEWS</NavLink>
          <NavLink href="#links">LINKS</NavLink>
          <NavLink href="#filmography">FILMOGRAPHY</NavLink>
          <NavLink href="#bio">BIO</NavLink>
          <NavLink href="#contact">CONTACT</NavLink>
        {/* </Nav> */}
      </div>
    );
  }
}

export default NavBar;