import React, { Component } from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import SideBarLeft from '../components/PageContents/SideBarLeft.jsx'
import SideBarRight from '../components/PageContents/SideBarRight.jsx'
import BillDetail from '../components/PageContents/BillDetail.jsx'
import '../../public/styles/BillDetail.scss';

class PaymentPage extends Component {
  render() {
    return pug`
      Header
      #page-contents
        .container
          .row
            SideBarLeft
            .col-md-7
              BillDetail  
            SideBarRight
      Footer
    `;
  }
}

export default PaymentPage;