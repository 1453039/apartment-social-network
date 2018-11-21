import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class SideBarRight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newFriends: [
				{
					id: 0,
					name: 'Nguyễn Phạm Song Huy',
					linkImg: 'http://placehold.it/300x300'
				},
				{
					id: 1,
					name: 'Nguyễn Minh Chánh',
					linkImg: 'http://placehold.it/300x300'
				},
      ],
			info: [
        {
          id: 0,
          name: 'About us',
          link: 'https://translate.google.com/?hl=vi'
        },
        {
          id: 1,
          name: 'Contact us',
          link: 'https://translate.google.com/?hl=vi'
        },
        {
          id: 2,
          name: 'Privacy Policy',
          link: 'https://translate.google.com/?hl=vi'
        },
        {
          id: 3,
          name: 'Ads',
          link: 'https://translate.google.com/?hl=vi'
        },
        {
          id: 4,
          name: 'Terms',
          link: 'https://translate.google.com/?hl=vi'
        },
        {
          id: 5,
          name: 'Help',
          link: 'https://translate.google.com/?hl=vi'
        }
      ]
    }
  }

  render() {
    const {newFriends, info} = this.state;
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
                    Link(to='/timeline') #{item.name}
                Router
                  Link(to='/').text-green Chat now
        .footer.hidden-sm.hidden-xs
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