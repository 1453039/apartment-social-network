import React, { Component } from 'react';
import Header from '../components/Header.jsx'
import MyCover from '../components/PageContents/MyCover.jsx'
import MyTimeline from '../components/PageContents/MyTimeline.jsx'
import Footer from '../components/Footer.jsx'

class MyTimelinePage extends Component {
  render() {
    return pug`
      Header
      div(className="MyTimelinePage")
        .container
          .timeline
            MyCover
            MyTimeline
      Footer
    `;
  }
}

export default MyTimelinePage;