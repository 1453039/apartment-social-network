import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
//import logo from '../../images/logo.png';

class SideBarLeft extends React.Component {
  render() {
    return pug`
      .col-md-3.static
        .profile-card
          img(src="http://placehold.it/300x300", alt="user").profile-photo
          h5 
            Router
              Link(className="text-white", to="timeline.jsx") Sarah Cruiz
          Router
            Link(className="text-white", to="/")
              i.ion.ion-android-person-add 1,299 followers
        ul.nav-news-feed
          li
            i.icon.ion-ios-paper
            div
              Router
                Link(to="newsfeed.jsx") My Newsfeed
          li
            i.icon.ion-ios-people
            div
              Router
                Link(to="newsfeed-people-nearby.jsx") People Nearby
          li
            i.icon.ion-ios-people-outline
            div
              Router
                Link(to="newsfeed-friends.jsx") Friends
          li
            i.icon.ion-ios-chatboxes
            div
              Router
                Link(to="newsfeed-messages.jsx") Messages
          li
            i.icon.ion-images
            div
              Router
                Link(to="newsfeed-images.jsx") Images
          li
            i.icon.ion-ios-videocam
            div
              Router
                Link(to="newsfeed-videos.jsx") Videos
    `;
  }
}

export default SideBarLeft;