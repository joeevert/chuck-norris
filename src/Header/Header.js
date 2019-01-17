import React, { Component } from 'react';
import { Nav, Alert, NavLink } from 'reactstrap';

class Header extends Component {
  render() {
    return (
      <div>
        <Nav pills>
          <NavLink href="#">Link</NavLink>
          <NavLink href="#">Link</NavLink>
          <NavLink href="#">Link</NavLink>
        </Nav>
        <Alert color="primary">
        This is a primary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
      </Alert>
      </div>
    );
  }
}

export default Header;