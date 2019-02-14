import React, { Component } from 'react';
import './NavBar.css';
import logo from './chuck-logo.svg';

class NavBar extends Component {

  scrollToElement = (id) => {
    let element = document.getElementById(id);
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
  }

  render() {
    return (
      <nav className="sticky">
        <img className="logo" src={logo} alt="logo" />
        <p className="nav-link" onClick={() => this.scrollToElement('news')}>NEWS</p>
        <p className="nav-link" onClick={() => this.scrollToElement('links')}>LINKS</p>
        <p className="nav-link" onClick={() => this.scrollToElement('filmography')}>FILMOGRAPHY</p>
        <p className="nav-link" onClick={() => this.scrollToElement('bio')}>BIO</p>
        <p className="nav-link" onClick={() => this.scrollToElement('contact')}>CONTACT</p>
      </nav>
    );
  }
}

export default NavBar;