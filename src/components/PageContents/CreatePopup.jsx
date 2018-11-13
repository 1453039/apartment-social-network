import React, { Component } from 'react';
import ImageLoader from './ImageLoader.jsx'

class CreatePopup extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {user} = this.props;
    return pug`
      .popup
        .popup-inner 
          button(onClick=this.props.closePopup)#close-popup.btn.btn-default.close-btn
            span.closebtn.glyphicon.glyphicon-remove
          .form-group
            img.profile-photo-md(src=user.linkImg, alt="")
            textarea.form-control(name="texts", cols="30", rows="1", placeholder="Write what you want")
          button#publish.btn.btn-primary.pull-right Publish
          ImageLoader   
    `;
  }
}

export default CreatePopup;