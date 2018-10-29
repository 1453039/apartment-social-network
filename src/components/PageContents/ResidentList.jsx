import React, { Component } from 'react';
import '../../styles/PageContents.scss';
import '../../styles/ResidentList.scss';
import Friends from './Friends.jsx'

class ResidentList extends Component {
	constructor() {
		super();
		this.state = {
			friends: [
				{
					id: 0,
					name: 'aaa',
					room: '1',
					linkImg: 'http://placehold.it/300x300',
					linkCover: 'http://placehold.it/1030x360'
				},
				{
					id: 1,
					name: 'bbb',
					room: '2',
					linkImg: 'http://placehold.it/300x300',
					linkCover: 'http://placehold.it/1030x360'
				}
			]
		}
	}

  render() {
    return pug`
      #page-contents
        .row
          .col-md-3
          .col-md-9
            .friend-list
              Friends(friends=this.state.friends)
    `;
  }
}

export default ResidentList;
