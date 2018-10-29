import React, { Component } from 'react';
import PostCreateBox from './PostCreateBox.jsx'
import PostContent from './PostContent.jsx'
import '../../styles/PageContents.scss';

class BasicInfo extends Component {
	constructor (){
		super();
		this.state = {
			
		}
	}
  render() {
    return pug`
      #page-contents
      	.row
					.col-md-3
						.edit-menu
      		.col-md-7

    `;
  }
}

export default BasicInfo;