import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class SideBarRight extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {newFriends, info} = this.props;
    return pug`
      .col-md-2.static
        .suggestions#sticky-sidebar
          h4.grey Who to Chat
          each item in newFriends
            .follow-user(key=item.id)
              img(src=item.linkImg).profile-photo-sm.pull-left
              div
                h5
                  Router
                    Link(to='timeline.jsx') #{item.name}
                Router
                  Link(to='/').text-green Chat now
        .footer
          ul
            each item in info
              li(key=item.id) 
                Router
                  Link(to=item.link) #{item.name}
          .copyright
            p Team 039-049 © 2018. All rights reserved
    `;
  }
}

export default SideBarRight;