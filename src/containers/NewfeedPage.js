import React, { Component } from 'react';
import Header from '../components/Header.jsx'
import PageContents from '../components/PageContents.jsx'
import Footer from '../components/Footer.jsx'

class NewfeedPage extends Component {
  render() {
    return pug`
      Header
      div(className="NewfeedPage")
        PageContents
      Footer
    `;
  }
}

export default NewfeedPage;