import React, { Component } from 'react';
import Header from '../components/Header.jsx'
import PageContents from '../components/PageContents.jsx'
import Footer from '../components/Footer.jsx'

class NewfeedPage extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return pug`
      Header
      div(className="newfeed")
        PageContents
      Footer
    `;
  }
}

export default NewfeedPage;