import React, {Component} from 'react';
import Dropdown from '../Common/Dropdown.jsx';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Menu extends React.Component {
  constructor () {
    super ();
	}

  render () {
    return pug`
      ul.nav.navbar-nav.navbar-right.main-menu
        Dropdown(title = "Home", list =this.props.home)
        Dropdown(title = "Newfeeds", list =this.props.newfeeds)
        Dropdown(title = "Timeline", list =this.props.timeline)
        Dropdown(title = "All Pages", list =this.props.allpage)
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
