import React, { Component } from 'react';
import { Nav, NavLink } from 'reactstrap';

class Header extends Component {
  render() {
    return (
      <div>
        <Nav pills>
          <NavLink href="#">About</NavLink>
          <NavLink href="#">Link</NavLink>
          <NavLink href="#">Link</NavLink>
        </Nav>
      </div>
    );
  }
}

export default Header;