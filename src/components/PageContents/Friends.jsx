import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class Friends extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
  	const {friends} = this.props;
  	return pug`
  		.row
  			each item in friends
  				.col-md-6.col-sm-6(key=item.id)
  					.friends-card
  						img(src=item.linkCover, alt='profile-cover').img-responsive.cover
  						.card-info
  							img(src=item.linkImg, alt="user").profile-photo-lg
  							.friend-info
  								Router
  									Link(to='/').pull-right.text-green Inbox
  								h5 #{item.name}
  								p Room:
  									span #{item.room}
    `;
  }
}

export default Friends;