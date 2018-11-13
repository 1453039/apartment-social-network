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
    const { patch, id } = this.state
    console.log("patch", patch)
    switch (patch) {
      case "?info":
        return pug`
          BasicInfoPage(id=id)
        `
      case "?timeline":
        return pug`
          MyTimelinePage(id=id)
        `
      case "?members":
        return pug`
          ResidentPage(id=id)
        `
      case "?change-password":
        return pug`
          EditPassPage(id=id)
        `
      case "?messages":
        return pug`
          MessagePage(id=id)
        `
      case "?admin-noti":
        return pug`
          AdminNotiPage(id=id)
        `
      case "?member-noti":
        return pug`
          MemsNotiPage(id=id)
        `
      case "?reports":
        return pug`
          ReportPage(id=id)
        `
      case "?newfeeds":
        return pug`
          NewfeedPage(id=id)
        `
      default:
        return pug`
          LoginPage(id=id)
        `
    }
  }
}
export default (Root)

