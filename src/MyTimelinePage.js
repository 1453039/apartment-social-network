import React, { Component } from 'react';
import Header from './components/Header.jsx'
import MyCover from './components/PageContents/MyCover.jsx'
import MyTimeline from './components/PageContents/MyTimeline.jsx'
import Footer from './components/Footer.jsx'
import './styles/Layout.scss';
import './styles/Typography.scss';
import './styles/Common.scss';

class MyTimelinePage extends Component {
  render() {
    return pug`
    	div(className="MyTimelinePage")
    		Header
    		.container
    			.timeline
    				MyCover
    				MyTimeline
    		Footer
    `;
  }
}

export default MyTimelinePage;