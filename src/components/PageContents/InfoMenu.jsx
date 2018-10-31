import React, { Component } from 'react';
import '../../styles/PageContents.scss';
import '../../styles/Info.scss';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class InfoMenu extends Component {
	constructor (){
		super();
	}
  render() {
    return pug`
      ul.edit-menu
        li
          i.icon.ion-ios-information-outline
          Router
            Link(to='/info') Basic Information
        li
          i.icon.ion-ios-settings
          Router
            Link(to='/accountsetting') Account Settings
        li
          i.icon.ion-ios-locked-outline
          Router
            Link(to='/changepassword') Change Password								
		`;
  }
}

export default InfoMenu;