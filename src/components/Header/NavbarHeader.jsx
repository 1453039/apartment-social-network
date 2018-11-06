import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import logo from '../../../public/images/logo.png';

class NavbarHeader extends React.Component {
  render() {
    return pug`
      .navbar-header
        button(type="button", class="navbar-toggle collapsed", data-toggle="collapse", data-target="#bs-example-navbar-collapse-1", aria-expanded="false")
          span(class="sr-only") Toggle navigation
          span(class="icon-bar")
          span(class="icon-bar")
          span(class="icon-bar")
        Router
          Link(className="navbar-brand", to="/")
            img(src=logo, alt="logo")
    `;
  }
}

export default NavbarHeader;