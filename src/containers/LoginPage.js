import React, { Component } from 'react';
import Banner from '../components/Welcome/Banner.jsx';
import PassForm from '../components/Welcome/PassForm.jsx';
import '../../public/styles/Welcome.scss';

class LoginPage extends Component {
  render() {
    return pug`
      #welcome
        PassForm
        Banner
		`;
  }
}

export default LoginPage;