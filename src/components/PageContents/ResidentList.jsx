import React, { Component } from 'react';
import axios from 'axios';
import '../../../public/styles/PageContents.scss';
import '../../../public/styles/ResidentList.scss';
import '../../../public/styles/AddUser.scss';
//import '../../../public/styles/Info.scss';
import Friends from './Friends.jsx';
import AddUser from './AddUser.jsx'

class ResidentList extends Component {
	constructor() {
		super();
		this.state = {
			data: [],
			role: 'admin',
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
		this.getData = this.getData.bind(this);
	}
	componentDidMount() {
    this.getData(this);
  }

  componentWillReceiveProps(nexProps) {
    this.getData(this);
  }

  getData(e) {
    axios.get('/members/getAll')
      .then(function (response) {
        e.setState({ data: response.data });
      })
      .catch(error => {
        console.log(error.response);
      });
  }

  render() {
		return pug`
			#page-contents
				.row
					.col-md-3
						if(this.state.role =='admin')
							AddUser
					.col-md-9
						.friend-list
							Friends(friends=this.state.friends)
		`;
  }
}

export default ResidentList;
