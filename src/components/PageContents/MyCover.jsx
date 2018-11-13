import React, { Component } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import '../../../public/styles/PageContents.scss';
import '../../../public/styles/ResidentList.scss';

class ResidentList extends Component {
  getLink(link){
    return  "/@"+this.props.id+"?"+link
  }
  render() {
    const {id} = this.props
    return pug`
      .timeline-cover
        .timeline-nav-bar.hidden-sm.hidden-xs
          .row
            .col-md-3
              .profile-info
                img(src='http://placehold.it/300x300', alt='').img-responsive.profile-photo
                h3 Trần Gia Bảo Thy
                p.text-muted Room: A1
            .col-md-9
              ul.list-inline.profile-menu
                li
                  Link(to=this.getLink("timeline")) My Timeline
                li
                  Link(to=this.getLink("info")) About
                li
                  Link(to=this.getLink("member")) Friends
        .navbar-mobile.hidden-lg.hidden-md
          .profile-info
            img(src='http://placehold.it/300x300', alt='').img-responsive.profile-photo
            h4 Trần Gia Bảo Thy
            p.text-muted Room: A1
          .mobile-menu
            ul.list-inline
              li
                Link(to=this.getLink("timeline")) My Timeline
              li
                Link(to=this.getLink("info")) About
              li
                Link(to=this.getLink("member")) Friend
    `;
  }
}

export default ResidentList;
