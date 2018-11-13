import React, { Component } from 'react';
import '../../../public/styles/PageContents.scss';
import '../../../public/styles/Info.scss';
import BasicInfoPage from '../../containers/BasicInfoPage';
import { BrowserRouter as Router, Route, Link,withRouter } from 'react-router-dom';

class InfoMenu extends Component {
	constructor (){
    super();
  }
  render() {
    return pug`
      ul.edit-menu
        li
          i.icon.ion-ios-information-outline
          Link(to='/:id?info') Basic Information
        li
          i.icon.ion-ios-settings
          Link(to='/account-setting') Account Settings
        li
          i.icon.ion-ios-locked-outline
          Link(to='/:id?change-password') Change Password								
		`;
  }
}

export default withRouter(InfoMenu);