import React, { Component } from 'react';
import { Nav, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div>
        <Nav pills>
          <Link to="/about">About</Link>
          {/* <NavLink href="#">Link</NavLink> */}
          {/* <NavLink href="#">Link</NavLink> */}
        </Nav>
      </div>
    );
  }
}

export default NavBar;