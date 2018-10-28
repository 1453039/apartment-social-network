import React, {Component} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import ListApart from './ListApart.jsx';

class LoginForm extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      isClick: false,
			isFill: false,
      listApart: [
        {
          id: 0,
          name: 'The Grand Manhattan Apartment',
          position: 'Admin',
        },
        {
          id: 1,
          name: 'The Nexus Tower Apartment',
          position: 'Resident',
        },
        {
          id: 2,
          name: 'The Saigon Manhattan Apartment',
          position: 'Admin',
        },
      ],
    };
		this.handleClickNext = this.handleClickNext.bind (this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
  }
  handleEmailChange (e) {
		this.setState ({
      email: e.target.value,
		});
	}

  handleClickNext () {
    this.setState ({
      isClick: true,
		});
  }

  render () {
    const isClick = this.state.isClick;
    return pug`
			if !isClick
				.login-form.col-md-5.col-sm-5
					#wrapper
						h2.text-white Enter your email
						form(action="#")
							fieldset.form-group
								input.form-control#example-email(type="text", name="email", placeholder="name@examle.com", onChange=this.handleEmailChange)
							button.btn-secondary(onClick=this.handleClickNext)
								span Next
			else
				ListApart(listApart=this.state.listApart)
		`;
  }
}

export default LoginForm;
