import React, { Component } from 'react';
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import ReportForm from '../components/PageContents/ReportForm.jsx'
import SideBarLeft from '../components/PageContents/SideBarLeft.jsx'
import SideBarRight from '../components/PageContents/SideBarRight.jsx'
import '../../public/styles/ReportForm.scss';


class ReportPage extends Component {
  render() {
    return pug`
      Header
      #page-contents
        .container
          .row
            SideBarLeft
            .col-md-7
              ReportForm  
            SideBarRight
      Footer
    `;
  }
}

export default ReportPage;