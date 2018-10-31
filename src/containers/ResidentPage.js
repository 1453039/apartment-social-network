import React, { Component } from 'react';
import Header from '../components/Header.jsx'
import MyCover from '../components/PageContents/MyCover.jsx'
import ResidentList from '../components/PageContents/ResidentList.jsx'
import Footer from '../components/Footer.jsx'

class Resident extends Component {
  constructor() {
    super();
    this.state = {
      position: 'member'
    }
  }
  render() {
    return pug`
      Header
      div(className="Resident")
        .container
          .timeline
            MyCover
            if(this.state.position == 'Admin')
              button.btn.btn-primary(method='post') Add member
            ResidentList
      Footer
    `;
  }
}

export default Resident;