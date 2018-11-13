import React, { Component } from 'react';
import Header from '../components/Header.jsx'
import MyCover from '../components/PageContents/MyCover.jsx'
import BasicInfo from '../components/PageContents/BasicInfo.jsx'
import Footer from '../components/Footer.jsx'

class BasicInfoPage extends Component {
  render() {
    const {id} = this.props
    return pug`
      Header(id=id)
      div(className="BasicInfoPage")
        .container
          .timeline
            MyCover(id=id)
            BasicInfo
      Footer
    `;
  }
}

export default BasicInfoPage;