import React, { Component } from 'react';
import '../../../public/styles/Info.scss';
import BasicInfoPage from '../../containers/BasicInfoPage';
import { Link, withRouter } from 'react-router-dom';

class InfoMenu extends Component {
	constructor (){
    super();
    this.getLink = this.getLink.bind(this)
  }
  getLink(link){
    return  "/@"+this.props.match.params.id+"?"+link
  }
  render() {
    return pug`
      ul.edit-menu
        li
          i.icon.ion-ios-information-outline
          Link(to=this.getLink('info')) Basic Information
        li
          i.icon.ion-ios-settings
          Link(to=this.getLink('/account-setting')) Account Settings
        li
          i.icon.ion-ios-cog-outline
          Link(to=this.getLink("change-password")) Change Password								
        li 
          i.icon.ion-ios-locked-outline
          Link(to='/') Log Out
		`;
  }
}

export default withRouter(InfoMenu);