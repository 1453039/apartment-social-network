import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class SideBarLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
				{
					id: 0,
					name: 'Trần Phương Thanh',
					linkImg: 'http://placehold.it/300x300'
				},
				{
					id: 1,
					name: 'Phạm Thị Anh Thư',
					linkImg: 'http://placehold.it/300x300'
				},
			]
    }
  }

  render() {
    const {users} = this.state;
    return pug`
      .col-md-3.static
        .profile-card
          img(src="http://placehold.it/300x300", alt="user").profile-photo
          h5 
            Link(className="text-white", to="timeline.jsx") Trần Gia Bảo Thy
        ul.nav-news-feed
          li
            i.icon.ion-ios-paper 
            div
             Link(to="/newfeeds") My Newsfeed
          li
            i.icon.ion-ios-people-outline
            div
             Link(to="/members") Members
          li
            i.icon.ion-ios-chatboxes
            div
             Link(to="/messages") Messages
          li
            i.icon.ion-ios-body
            div
             Link(to="/events") Events
          li
            i.icon.ion-information-circled
            div
             Link(to="/reports") Report
        #chat-block
          .title Chat Online
          ul.online-users.list-inline
            each item in users
              li(key=item.id)
                Link(to="/messages", title=item.name)
                  img(src=item.linkImg, alt="user").img-responsive.profile-photo
                  span.online-dot
    `;
  }
}

export default SideBarLeft;