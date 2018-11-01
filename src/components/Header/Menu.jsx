import React, {Component} from 'react';
import Dropdown from '../Common/Dropdown.jsx';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

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
function mapStateToProps(state) {
	return {
		home: state.header.home,
		newfeeds: state.header.newfeeds,
		timeline: state.header.timeline,
		allpage: state.header.allpage
	};
}

export default connect(mapStateToProps)(Menu);
