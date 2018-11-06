import React, { Component } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import '../../../public/styles/PageContents.scss';
import '../../../public/styles/ResidentList.scss';

class ResidentList extends Component {
  render() {
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
                  Router
                    Link(to='MyTimeline.jsx') My Timeline
                li
                  Router
                    Link(to='MyTimeline.jsx') About
                li
                  Router
                    Link(to='ResidentPage.js') Friends
        .navbar-mobile.hidden-lg.hidden-md
          .profile-info
            img(src='http://placehold.it/300x300', alt='').img-responsive.profile-photo
            h4 Trần Gia Bảo Thy
            p.text-muted Room: A1
          .mobile-menu
            ul.list-inline
              li
                Router
                  Link(to='MyTimeline.jsx') My Timeline
              li
                Router
                  Link(to='MyTimeline.jsx') About
              li
                Router
                  Link(to='ResidentPage.js') Friend
    `;
  }
}

export default ResidentList;
