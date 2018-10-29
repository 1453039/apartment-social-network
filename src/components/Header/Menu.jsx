import React, {Component} from 'react';
import Dropdown from '../Dropdown.jsx';

class Menu extends React.Component {
  constructor () {
    super ();
    this.state = {
      home: [],
      notification: [
        {
          id: 0,
          title: 'From Admins',
        },
        {
          id: 1,
          title: 'From Members',
        },
      ],
      payment: [],
      trading: [],
    };
  }
  render () {
    return pug`
      ul.nav.navbar-nav.navbar-right.main-menu
        Dropdown(title = 'Home')
        Dropdown(title = "Notification", list =this.state.notification)
        Dropdown(title = "Payment", list =this.state.payment)
        Dropdown(title = "Trading", list =this.state.trading)
    `;
  }
}

export default Menu;
