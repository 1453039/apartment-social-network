import React from 'react';
import axios from 'axios';
import { Form } from 'semantic-ui-react';
 
class ImageLoader extends React.Component {
  constructor() {
    super();
    this.state= {
      selectedFile: '',
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
      input#file(type='file', onChange=this.onImageChange)
      label(for='file')
        .btn-choose
          i.ion-images
          span Upload file
      img.selectedFile(src=this.state.selectedFile)
    `;
  }
}

export default ImageLoader;