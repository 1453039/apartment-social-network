import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import NewfeedPage from './containers/NewfeedPage';
import BasicInfoPage from './containers/BasicInfoPage';
import MyTimelinePage from './containers/MyTimelinePage';
import ResidentPage from './containers/ResidentPage';
import WelcomePage from './containers/WelcomePage';

class Main extends Component {
  render() {
  return pug `
    Switch
      Route(path='/newfeed', component=NewfeedPage)
      Route(path='/info', component=BasicInfoPage)
      Route(path='/timeline', component=MyTimelinePage)
      Route(path='/member', component=ResidentPage)
      Route(path='/', component=WelcomePage)
      Route(exact component=WelcomePage)
    `;
  }
}

export default Main;

