import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import NewfeedPage from './containers/NewfeedPage';
import BasicInfoPage from './containers/BasicInfoPage';
import MyTimelinePage from './containers/MyTimelinePage';
import ResidentPage from './containers/ResidentPage';
import WelcomePage from './containers/WelcomePage';
import EditPassPage from './containers/EditPassPage';
import MessagePage from './containers/MessagePage';
import ReportPage from './containers/ReportPage';
import AdminNotiPage from './containers/AdminNotiPage';
import MemsNotiPage from './containers/MemsNotiPage';
import ROOT from "./root"
class Main extends Component {
  render() {
  return pug `
    Switch
      // Route(path='/@:id/timeline', component=MyTimelinePage)
      // Route(path='/@:id/info', component=BasicInfoPage)
      // Route(path='/@:id/members', component=ResidentPage)
      // Route(path='/@:id/change-password', component=EditPassPage)
      // Route(path='/@:id/messages', component=MessagePage)
      // Route(path='/@:id/admin-noti', component=AdminNotiPage)
      // Route(path='/@:id/member-noti', component=MemsNotiPage)
      // Route(path='/@:id/reports', component=ReportPage)
      Route(exact path='/@:id', component=ROOT)
      Route(path='/', component=WelcomePage)
      Route(exact component=WelcomePage)
    `;
  }
}

export default Main;

