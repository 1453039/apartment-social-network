import React, {Component} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import ListApart from './ListApart.jsx';
import _ from "lodash"

class LoginForm extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      account:{},
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
    let {account} = this.state
    account.email = e.target.value,
		this.setState ({
      account
		});
	}

  handleClickNext () {
    let arrAccout = [{email:"fuck",stt:"mhabskc"},{email:"you",stt:"mhabskc"}]
    const {account} = this.state
    let index = _.findIndex(arrAccout,{"email":account.email})
    console.log("here",index);
    
    if(index!==-1){
      this.setState ({
        isClick: true,
      });
    } else {
      
    }
  }

  render () {
    const {isClick} = this.state;
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
