import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NewfeedPage from './containers/NewfeedPage';
import BasicInfoPage from './containers/BasicInfoPage';
import MyTimelinePage from './containers/MyTimelinePage';
import ResidentPage from './containers/ResidentPage';
import EditPassPage from './containers/EditPassPage';
import MessagePage from './containers/MessagePage';
import ReportPage from './containers/ReportPage';
import AdminNotiPage from './containers/AdminNotiPage';
import MemsNotiPage from './containers/MemsNotiPage';
import LoginPage from './containers/LoginPage';
import PaymentPage from './containers/PaymentPage';
import EventPage from './containers/EventPage';
class Root extends React.Component {
  componentWillMount() {
    let patch = window.location.search
    let id = this.props.match.params.id
    this.setState({ patch, id })
  }
  componentWillReceiveProps(nextProps) {
    let patch = window.location.search
    let id = nextProps.match.params.id
    this.setState({ patch, id })
  }
  render() {
    switch (this.state.patch) {
      case "?info":
        return pug`
          BasicInfoPage
        `
      case "?timeline":
        return pug`
          MyTimelinePage
        `
      case "?members":
        return pug`
          ResidentPage
        `
      case "?change-password":
        return pug`
          EditPassPage
        `
      case "?messages":
        return pug`
          MessagePage
        `
      case "?admin-noti":
        return pug`
          AdminNotiPage
        `
      case "?member-noti":
        return pug`
          MemsNotiPage
        `
      case "?reports":
        return pug`
          ReportPage
        `
      case "?newfeeds":
        return pug`
          NewfeedPage
        `
      case "?payments":
        return pug `
          PaymentPage
        `
      case "?events":
        return pug `
          EventPage
        `
      default:
        return pug`
          LoginPage
        `
    }
  }
}
export default (Root)

