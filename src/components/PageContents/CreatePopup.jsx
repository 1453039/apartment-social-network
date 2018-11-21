import React, { Component } from 'react';
import ImageLoader from './ImageLoader.jsx'

class CreatePopup extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      page: 'popup-create-post',
      type: 'event'
    }
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
          ImageLoader(page=this.state.page) 
          if(this.state.type=='event')
            .form-group
              label(for='celebration-day') Date:
              input#celebration-day.input-event-info.form-control(type='date')
            .form-group
              label(for='cost') Cost:
              input#cost.input-event-info.form-control(type='number', min='0', placeholder='Cost')
          button#publish.btn.btn-primary.pull-right Publish
    `;
  }
}

export default CreatePopup;