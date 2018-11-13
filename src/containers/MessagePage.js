import React, { Component } from 'react';
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import SideBarLeft from '../components/PageContents/SideBarLeft.jsx'
import SideBarRight from '../components/PageContents/SideBarRight.jsx'
import MessageList from '../components/PageContents/MessageList.jsx'
import '../../public/styles/PageContents.scss';

class MessagePage extends Component {
  render() {
    return pug`
      Header
      #page-contents
        .container
          .row
            SideBarLeft
            .col-md-9
              MessageList
      Footer
    `;
  }
}

export default MessagePage;