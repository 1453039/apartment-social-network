import React, { Component } from 'react';
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import ReportForm from '../components/PageContents/ReportForm.jsx'
import SideBarLeft from '../components/PageContents/SideBarLeft.jsx'
import '../../public/styles/PageContents.scss';
import '../../public/styles/ReportForm.scss';


class ReportPage extends Component {
  render() {
    return pug`
      Header
      #page-contents
        .container
          .row
            SideBarLeft
            .col-md-9
              ReportForm  
         
      Footer
    `;
  }
}

export default ReportPage;