import React, { Component } from 'react';
import { Nav, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div>
        <Nav pills>
          {/* <Link to="/about">About</Link> */}
          {/* <Link to="/movies">Movies</Link> */}
          <NavLink href="#about">About</NavLink>
          <NavLink href="#movies">Movies</NavLink>
        </Nav>
      </div>
    );
  }
}

export default NavBar;