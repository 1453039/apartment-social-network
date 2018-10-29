import React, { Component } from 'react';
import Header from './components/Header.jsx'
import PageContents from './components/PageContents.jsx'
import Footer from './components/Footer.jsx'
import './styles/Layout.scss';
import './styles/Typography.scss';
import './styles/Common.scss';

class App extends Component {
  render() {
    return pug`
      div(className="App")
        Header
        PageContents
        Footer
    `;
  }
}

export default App;