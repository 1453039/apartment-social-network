import React, { Component } from 'react';
import PostCreateBox from './PostCreateBox.jsx'
import PostContent from './PostContent.jsx'

class MyTimeline extends Component {
	constructor (){
		super();
		this.state = {
			post1: {
				user: 'Trần Gia Bảo Thy',
				time: '3 mins ago',
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
			page: 'timeline'
		}
	}
  render() {
    return pug`
      #page-contents
      	.row
      		.col-md-3
      		.col-md-7
      			PostCreateBox
      			PostContent(post=this.state.post1, page=this.state.page)
    `;
  }
}

export default MyTimeline;