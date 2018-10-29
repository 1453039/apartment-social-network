import React, { Component } from 'react';
import NavbarHeader from './Header/NavbarHeader.jsx';
import Menu from './Header/Menu.jsx';
import Search from './Header/Search.jsx';
import '../styles/Header.scss';

class Header extends Component {
  render() {
    return pug`
    header
      nav.navbar.navbar-default.navbar-fixed-top.menu
        .container
          NavbarHeader
          Menu
          Search
    `;
  }
}

export default Header;
