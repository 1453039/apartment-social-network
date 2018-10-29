import React, { Component } from 'react';
import SideBarLeft from './PageContents/SideBarLeft.jsx';
import SideBarRight from './PageContents/SideBarRight.jsx';
import PostCreateBox from './PageContents/PostCreateBox.jsx';
import PostContent from './PageContents/PostContent.jsx';
import '../styles/PageContents.scss';

class PageContents extends Component {
	constructor() {
		super();
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
			],

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
			page: 'content',

			post1: {
				user: 'Trần Nguyễn Ái Nhân',
				time: 'Published a photo about 3 mins ago',
				linkImg: 'http://placehold.it/300x300',
				linkVideo: '',
				postDetail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				like: '13',
				dislike: '0',
				comments: [
					{
						id: 0,
						user: 'Võ Trân Châu',
						commentDetail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'
					},
					{
						id: 1,
						user: 'Nguyễn Ngô Phú Vinh',
						commentDetail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'
					}
				]
			},
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
    return pug`
    #page-contents
      .container
        .row
          SideBarLeft(users=this.state.users)
          .col-md-7
            PostCreateBox
            PostContent(post=this.state.post1, page=this.state.page)
          SideBarRight(newFriends=this.state.newFriends, info=this.state.info)
    `;
  }
}

export default PageContents;
