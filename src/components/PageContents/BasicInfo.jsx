import React, { Component } from 'react';
import '../../../public/styles/PageContents.scss';
import '../../../public/styles/Info.scss';
import InfoMenu from './InfoMenu.jsx'
import { BrowserRouter as Router, Link } from 'react-router-dom';

class MyInfo extends Component {
	constructor(){
		super();
		this.state={
			name: '',
			email: '',
			birthday: '',
			room:'',
			sex:''
		}
	}
	onChangeName(e) {
		this.setState({name: e.target.value});
	}
	onChangeBirthday(e) {
		this.setState({birthday: e.target.value});
	}
  render() {
		//const {profile} = this.state;
    return pug`
			#page-contents
				.row
					.col-md-4
						InfoMenu
					.col-md-5
						.edit-profile-container
							.block-title
								h4.grey 
									i.icon.ion-android-checkmark-circle
									| Edit basic information
							.edit-block
								form.form-inline#basic.info(name='basic-info')
								.row
									.form-group.col-xs-12
										label(for='fullname') My full name
										input#fullname.form-control.input-group-lg(type='text', name='fullname', title='Enter full name', placeholder='Full name', onChange=this.onChangeName.bind(this), value=this.state.name, required)
								.row
									.form-group.col-xs-12
										label(for='email') My email
										input#email.form-control.input-group-lg(type='text', name='email', title='Enter email', placeholder='Email', value=this.state.email, disabled)
								.row
									.form-group.col-xs-12
										label(for='room') My room
										input#room.form-control.input-group-lg(type='text', name='room', title='Enter room', placeholder='Room', value=this.state.room, disabled)
								.row
									.form-group.col-xs-12
										label(for='birthday') Date of birth
										input#birthday.form-control.input-group-lg(type='date', name='birthday', title='Enter birthday', placeholder='birthday', value=this.state.birthday, onChange=this.onChangeBirthday.bind(this), required)
								.form-group.gender
									span.custom-label 
										strong I am a:
									label#female.radio-inline Female
										input(type='radio', name='optradio', value='female', checked)
									label#male.radio-inline Male
										input(type='radio', name='optradio', value='male')
								button.info.btn.btn-primary(method='post', type='submit') Save change
								
		`;
  }
}

export default MyInfo;