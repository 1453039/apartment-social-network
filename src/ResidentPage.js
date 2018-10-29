import React, { Component } from 'react';
import Header from './components/Header.jsx'
import MyCover from './components/PageContents/MyCover.jsx'
import ResidentList from './components/PageContents/ResidentList.jsx'
import Footer from './components/Footer.jsx'
import './styles/Layout.scss';
import './styles/Typography.scss';
import './styles/Common.scss';

class Resident extends Component {
  render() {
    return pug`
      div(className="Resident")
      	Header
      	.container
      		.timeline
      			MyCover
      			ResidentList
      	Footer
    `;
  }
}

export default Resident;