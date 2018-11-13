import React, { Component } from 'react';
import Main from './router.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return pug`
      Main
    `;
  }
}

export default App;