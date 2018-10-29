import React, { Component } from 'react';
import Header from '../components/Header.jsx'
import MyCover from '../components/PageContents/MyCover.jsx'
import BasicInfo from '../components/PageContents/BasicInfo.jsx'
import Footer from '../components/Footer.jsx'

class BasicInfoPage extends Component {
  render() {
    return pug`
      Header
      div(className="BasicInfoPage")
        .container
          .timeline
            MyCover
            BasicInfo
      Footer
    `;
  }
}

export default BasicInfoPage;