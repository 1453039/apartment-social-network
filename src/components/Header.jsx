import React, { Component } from 'react';
import NavbarHeader from './Header/NavbarHeader.jsx';
import '../../public/styles/Header.scss';

class Header extends Component {
  render() {
    return pug`
    header
      nav.navbar.navbar-default.navbar-fixed-top.menu
        .container
          NavbarHeader
    `;
  }
}

export default Header;
