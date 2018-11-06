import React, { Component } from 'react';
import Banner from '../components/Welcome/Banner.jsx';
import LoginForm from '../components/Welcome/LoginForm.jsx';
import '../../public/styles/Welcome.scss';

class Welcome extends Component {
  render() {
    return pug`
			#welcome
				LoginForm
				Banner
		`;
  }
}

export default Welcome;