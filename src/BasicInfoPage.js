import React, { Component } from 'react';
import Header from './components/Header.jsx'
import MyCover from './components/PageContents/MyCover.jsx'
import BasicInfo from './components/PageContents/BasicInfo.jsx'
import Footer from './components/Footer.jsx'
import './styles/Layout.scss';
import './styles/Typography.scss';
import './styles/Common.scss';

class BasicInfoPage extends Component {
  render() {
    return pug`
    	div(className="BasicInfoPage")
    		Header
    		.container
    			.timeline
    				MyCover
    				BasicInfo
    		Footer
    `;
  }
}

export default BasicInfoPage;