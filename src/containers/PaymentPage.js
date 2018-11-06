import React, { Component } from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import ReportForm from '../components/PageContents/MonthlyBill.jsx'
import '../styles/PageContents.scss'

class PaymentPage extends Component {
  render() {
    return pug`
      Header
      #page-contents
        .container
          MonthlyBill
      Footer
    `;
  }
}

export default PaymentPage;