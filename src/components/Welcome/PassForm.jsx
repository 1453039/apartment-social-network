import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class PassForm extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			isClick: false
		}
		this.handleClickNext = this.handleClickNext.bind(this);
		this.handlePassChange = this.handlePassChange.bind(this);
	}
	handlePassChange (e) {
		this.setState ({
      password: e.target.value,
		});
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
						h2.text-white Welcome to Sagon Mahatan Apartment
						.line-divider
						h2.text-white Enter your password
						form(action="#")
							fieldset.form-group
								input.form-control#example-email(type="password", placeholder="Your password", onChange=this.handleEmailChange)
							button.btn-secondary(onClick=this.handleClickNext)
								span Next
		`;
  }
}

export default PassForm;