import React, { Component } from 'react';
import Banner from './Welcome/Banner.jsx';
import LoginForm from './Welcome/LoginForm.jsx';
import '../styles/Welcome.scss';

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