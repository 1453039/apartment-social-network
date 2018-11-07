import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import NewfeedPage from './containers/NewfeedPage';
import BasicInfoPage from './containers/BasicInfoPage';
import MyTimelinePage from './containers/MyTimelinePage';
import ResidentPage from './containers/ResidentPage';
import WelcomePage from './containers/WelcomePage';
import EditPassPage from './containers/EditPassPage';
//import AddNewUser from './containers/AddNewUser';
import MessagePage from './containers/MessagePage';
import ReportPage from './containers/ReportPage';
import AdminNotiPage from './containers/AdminNotiPage';
import MemsNotiPage from './containers/MemsNotiPage';

class Main extends Component {
  render() {
  return pug `
    Switch
      Route(path='/newfeeds', component=NewfeedPage)
      Route(path='/timeline', component=MyTimelinePage)
      Route(path='/info', component=BasicInfoPage)
      Route(path='/members', component=ResidentPage)
      Route(path='/change-password', component=EditPassPage)
      //Route(path='/add-user', component=AddNewUser)
      Route(path='/messages', component=MessagePage)
      Route(path='/admin-noti', component=AdminNotiPage)
      Route(path='/member-noti', component=MemsNotiPage)
      Route(path='/reports', component=ReportPage)
      Route(path='/', component=WelcomePage)
      Route(exact component=WelcomePage)
    `;
  }
}

export default Main;

