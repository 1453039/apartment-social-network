import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class SideBarLeft extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {users} = this.props;
    return pug`
      .col-md-3.static
        .profile-card
          img(src="http://placehold.it/300x300", alt="user").profile-photo
          h5 
            Router
              Link(className="text-white", to="timeline.jsx") Trần Gia Bảo Thy
        ul.nav-news-feed
          li
            i.icon.ion-ios-paper 
            div
              Router
                Link(to="newsfeed.jsx") My Newsfeed
          li
            i.icon.ion-ios-people-outline
            div
              Router
                Link(to="newsfeed-friends.jsx") Members
          li
            i.icon.ion-ios-chatboxes
            div
              Router
                Link(to="newsfeed-messages.jsx") Messages
          li
            i.icon.ion-ios-body
            div
              Router
                Link(to="newsfeed-images.jsx") Events
          li
            i.icon.ion-information-circled
            div
              Router
                Link(to="newsfeed-images.jsx") Report
        #chat-block
          .title Chat Online
          ul.online-users.list-inline
            each item in users
              li(key=item.id)
                Router
                  Link(to="newsfeed-messages.jsx", title=item.name)
                    img(src=item.linkImg, alt="user").img-responsive.profile-photo
                    span.online-dot
    `;
  }
}

export default SideBarLeft;