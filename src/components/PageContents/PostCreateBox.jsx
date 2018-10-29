import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class PostCreateBox extends React.Component {
  render() {
    return pug`
      .create-post
        .row
          .col-md-7.col-sm-7
            .form-group
              img.profile-photo-md(src="http://placehold.it/300x300", alt="")
              textarea.form-control(name="texts", cols="30", rows="1", placeholder="Write what you want")
          .col-md-5.col-sm-5
            .tools
              ul.publishing-tools.list-inline
                li
                  Router
                    Link(to="#")
                      i.ion-compose
                li
                  Router
                    Link(to="#")
                      i.ion-images
                li
                  Router
                    Link(to="#")
                      i.ion-ios-videocam
                li
                  Router
                    Link(to="#")
                      i.ion-map       
              button.btn.btn-primary.pull-right Publish
    `;
  }
}

export default PostCreateBox;