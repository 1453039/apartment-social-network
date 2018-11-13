import React, { Component } from 'react';
import Banner from '../components/Welcome/Banner.jsx';
import PassForm from '../components/Welcome/PassForm.jsx';
import '../../public/styles/Welcome.scss';

class LoginPage extends Component {
  render() {
    const {id} = this.props
    return pug`
      #welcome
        PassForm(id=id)
        Banner
    `;
  }
}

export default LoginPage;