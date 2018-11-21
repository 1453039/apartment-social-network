import React, { Component } from 'react';
import { Link, withRouter  } from 'react-router-dom';
import axios from 'axios';

class SideBarLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
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
			id: this.props.match.params.id    }
    this.getLink = this.getLink.bind(this)
    this.getUserFromSession = this.getUserFromSession.bind(this);
  }

  componentWillMount() {
    this.getUserFromSession(this);
  }

  async getUserFromSession(e) {
    await axios.get("/members/get_user_from_session").then((response) => {
      e.setState({
        user: response.data
      })
    }).catch(err =>{
      console.log("err", err);
    })
  }

  getLink(link){
    return  "/@"+this.state.id+"?"+link
  }
  render() {
    const {users} = this.state;
    const user = this.state.user
    let name = user.name? user.name : "User Name"    
    return pug`
      .col-md-3.static
        .profile-card
          img(src=user.avatar, alt="user").profile-photo
          h5 
            Link(className="text-white", to=this.getLink("info")) #{name}
        ul.nav-news-feed
          li
            i.icon.ion-ios-home
            div
             Link(to=this.getLink("newfeeds")) My Newsfeed
          li
            i.icon.ion-ios-paper 
            div
              Link(to=this.getLink("timeline")) My Timeline
          li
            i.icon.ion-ios-contact 
            div
              Link(to=this.getLink("info")) My Account
          li
            i.icon.ion-ios-people-outline
            div
             Link(to=this.getLink("members")) Members
          li
            i.icon.ion-ios-chatboxes
            div
              Link(to=this.getLink("messages")) Messages
          li
            i.icon.ion-ios-body
            div
             Link(to=this.getLink("events")) Events
          li
            i.icon.ion-information-circled
            div
             Link(to=this.getLink("reports")) Report
        #chat-block
          .title Chat Online
          ul.online-users.list-inline
            each item in users
              li(key=item.id)
                Link(to=this.getLink("messages"), title=item.name)
                  img(src=item.linkImg, alt="user").img-responsive.profile-photo
                  span.online-dot
    `;
  }
}

export default withRouter(SideBarLeft);