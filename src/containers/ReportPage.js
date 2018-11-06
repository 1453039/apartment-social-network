import React, { Component } from 'react';
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import ReportForm from '../components/PageContents/ReportForm.jsx'
import '../../public/styles/PageContents.scss';
import '../../publicstyles/ReportForm.scss';

class ReportPage extends Component {
  render() {
    return pug`
      Header
      #page-contents
        .container
          ReportForm
      Footer
    `;
  }
}

export default ReportPage;