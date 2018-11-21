import React, {Component} from 'react';
import Dropdown from '../Common/Dropdown.jsx';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link, withRouter } from 'react-router-dom';

class Menu extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      notification: [
        {
          id: 0,
          title: 'From Admins',
          link: 'admin-noti'
        },
        {
          id: 1,
          title: 'From Members',
          link: 'member-noti'
        },
      ],
      id: this.props.match.params.id
    };
    this.getLink = this.getLink.bind(this);
	}
  getLink(link){
    return  "/@"+this.state.id+"?"+link
  }
  render () {
    return pug`
      ul.nav.navbar-nav.navbar-right.main-menu
        Dropdown(title="Home", link=this.getLink("newfeeds"))
        Dropdown(title="Notification", list=this.state.notification) 
        Dropdown(title="Payment", link=this.getLink("payments"))
        Dropdown(title="Trading", link=this.getLink("tradings"))
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

export default connect(mapStateToProps)(withRouter(Menu));
