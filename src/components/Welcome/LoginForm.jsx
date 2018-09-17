import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import ListDepart from './ListDepart.jsx';

class LoginForm extends React.Component {
	constructor () {
		super();
		this.state = {
			isClick: false,
			isFill: false
		}
		this.handleClickNext = this.handleClickNext.bind(this);
	}
	handleClickNext() {
		this.setState ({
			isClick: True,
		});
	}
  render() {
		const isClick = this.state.isClick;
    return pug`
			.login-form.col-md-5.col-sm-5
				#wrapper
					h2.text-white Enter your email
					form(action="#")
						fieldset.form-group
							input.form-control#example-email(type="email", placeholder="Enter email")
					if !isClick
						button.btn-secondary(onClick=this.handleClickNext)
							span Next
					else
						ListDepart
		`;
  }
}

export default LoginForm;