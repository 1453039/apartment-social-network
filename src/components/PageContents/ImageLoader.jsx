import React from 'react';
import axios from 'axios';
import { Form } from 'semantic-ui-react';
 
class ImageLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      selectedFile: this.props.imgDefault
    }
    this.onImageChange = this.onImageChange.bind(this);
  }

  onImageChange(event) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
          this.setState({selectedFile: e.target.result});
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  render() {
    return pug`
    if(this.props.page == 'popup-create-post')
      input#input-img.input-type-file(type='file', onChange=this.onImageChange)
      label(for='input-img')
        .btn-choose
          i.ion-images
          span Upload file
      img.selectedFile(src=this.state.selectedFile)
    else 
      if(this.props.page == 'info' && this.props.id == 'avt')
        input#ava-img.input-type-file(type='file', onChange=this.onImageChange)
        label(for='ava-img')
          img(src=this.state.selectedFile, alt='Your Image').img-responsive.profile-photo
      else
        if(this.props.page == 'info' && this.props.id == 'cover')
          input#cover-img.input-type-file(type='file', onChange=this.onImageChange)
          label(for='cover-img')
            img(src=this.state.selectedFile, alt='Your Cover')
    `;
  }
}

export default ImageLoader;