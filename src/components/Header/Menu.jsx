import React, {Component} from 'react';
import Dropdown from '../Common/Dropdown.jsx';

class Menu extends React.Component {
  constructor () {
    super ();
    this.state = {
      home: [
        {
          id: 0,
          title: 'landing page 1',
        },
        {
          id: 1,
          title: 'landing page 2',
        },
      ],
      newfeeds: [
        {
          id: 0,
          title: 'Newfeeds',
        },
        {
          id: 1,
          title: 'People Nearly',
        },
        {
          id: 2,
          title: 'My friends',
        },
        {
          id: 3,
          title: 'Chatroom',
        },
        {
          id: 4,
          title: 'Images',
        },
        {
          id: 5,
          title: 'Videos',
        },
      ],
      timeline: [
        {
          id: 0,
          title: 'Timeline',
        },
        {
          id: 1,
          title: 'Timeline About',
        },
        {
          id: 2,
          title: 'Timeline Album',
        },
        {
          id: 3,
          title: 'Timeline Friends',
        },
        {
          id: 4,
          title: 'Edit: Basic Info',
        },
        {
          id: 5,
          title: 'Edit: Work',
        },
        {
          id: 6,
          title: 'Edit: Interests',
        },
        {
          id: 7,
          title: 'Account Settings',
        },
        {
          id: 8,
          title: 'Change Password',
        },
      ],
      allpage: [
        {
          id: 0,
          title: 'landing page 1',
        },
        {
          id: 1,
          title: 'landing page 2',
        },
        {
          id: 2,
          title: 'Newfeeds',
        },
        {
          id: 3,
          title: 'People Nearly',
        },
        {
          id: 4,
          title: 'My Friends',
        },
        {
          id: 5,
          title: 'Chatroom',
        },
      ],
    };
  }
  render () {
    return pug`
      ul.nav.navbar-nav.navbar-right.main-menu
        Dropdown(title = "Home", list =this.state.home)
        Dropdown(title = "Newfeeds", list =this.state.newfeeds)
        Dropdown(title = "Timeline", list =this.state.timeline)
        Dropdown(title = "All Pages", list =this.state.allpage)
    `;
  }
}

export default Menu;
