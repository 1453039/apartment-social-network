import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { SSL_OP_TLS_BLOCK_PADDING_BUG } from 'constants';
import CreatePopup from './CreatePopup.jsx'
import '../../../public/styles/CreatePopup.scss'

class PostCreateBox extends React.Component {
  constructor(){
    super();
    this.state={
      linkImg: 'http://placehold.it/300x300',    
      showPopup: false
    };
  }
  togglePopup(){
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  render() {
    return pug`
      .create-post
        .row
          .col-md-7.col-sm-7
            .form-group
              img.profile-photo-md(src=this.state.linkImg, alt="")
              textarea.form-control(name="texts", cols="30", rows="1", placeholder="Write what you want")
          .col-md-5.col-sm-5
            .tools
              ul.publishing-tools.list-inline
                li.active
                  i.ion-compose
                li(onClick=this.togglePopup.bind(this))#image-post
                  i.ion-images
                li(onClick=this.togglePopup.bind(this))#trading-post
                  i.ion-ios-cart
                li(onClick=this.togglePopup.bind(this))#event-post
                  i.ion-ios-body       
              button#publish.btn.btn-primary.pull-right(type='submit') Publish
        if (this.state.showPopup) 
          CreatePopup(closePopup=this.togglePopup.bind(this), user=this.state)
    `;
  }
}

export default PostCreateBox;