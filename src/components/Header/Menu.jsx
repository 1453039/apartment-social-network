import React, {Component} from 'react';
import Dropdown from '../Common/Dropdown.jsx';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class Menu extends React.Component {
  constructor () {
    super ();
    this.state = {
      home: {
        link: '/newfeeds'
      },
      notification: [
        {
          id: 0,
          title: 'From Admins',
          link: '/admin-noti'
        },
        {
          id: 1,
          title: 'From Members',
          link: '/member-noti'
        },
      ],
      payment: {
        link: '/payments'
      },
      trading: {
        link: '/tradings'
      },
    };
	}

  render () {
    return pug`
      ul.nav.navbar-nav.navbar-right.main-menu
        Dropdown(title='Home', link=this.state.home.link)
        Dropdown(title="Notification", list=this.state.notification)
        Dropdown(title="Payment", link=this.state.payment.link)
        Dropdown(title="Trading", link=this.state.trading.link)
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
