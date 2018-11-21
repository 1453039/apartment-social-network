import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import '../../../public/styles/ResidentList.scss';
import axios from 'axios';
import ImageLoader from './ImageLoader.jsx'

class MyCover extends Component {
  constructor() {
    super();
    this.state={
      user:[],
      name: 'Trần Gia Bảo Thy',
      imgLink: 'http://placehold.it/300x300',
      coverLink: 'http://placehold.it/1300x360',
      flat: 'A19.08',
      page: 'info'
    }
    this.getLink=this.getLink.bind(this);
    this.getUserFromSession = this.getUserFromSession.bind(this);
  }

  getLink(link){
    return  "/@"+this.props.match.params.id+"?"+link
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

  render() {
    const {user} = this.state
    return pug`
    .timeline-cover
      ImageLoader(page=this.state.page, id='cover', imgDefault=this.state.coverLink)
      .timeline-nav-bar.hidden-sm.hidden-xs
        .row
          .col-md-3
            .profile-info
              ImageLoader(page=this.state.page, id='avt', imgDefault=this.state.imgLink)
              h3 #{user.name}
              p.text-muted Flat: #{user.flat}
          .col-md-9
            ul.list-inline.profile-menu
              li
                Link(to=this.getLink("timeline")) My Timeline
              li
                Link(to=this.getLink("info")) My Account
              li
                Link(to=this.getLink("members")) Members
      .navbar-mobile.hidden-lg.hidden-md
        .profile-info
          ImageLoader(page=this.state.page, id='avt', imgDefault=this.state.imgLink)
          h4 #{this.state.name}
          p.text-muted Flat: #{this.state.flat}
        .mobile-menu
          ul.list-inline
            li
              Link(to=this.getLink("timeline")) My Timeline
            li
              Link(to=this.getLink("info")) My Account
            li
              Link(to=this.getLink("members")) Members
    `;
  }
}

export default withRouter(MyCover);
