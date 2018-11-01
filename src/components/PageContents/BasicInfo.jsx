import React, { Component } from 'react';
import '../../styles/PageContents.scss';
import '../../styles/Info.scss';
import InfoMenu from './InfoMenu.jsx'
import { BrowserRouter as Router, Link } from 'react-router-dom';

class MyInfo extends Component {
  render() {
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
										input#fullname.form-control.input-group-lg(type='text', name='fullname', title='Enter full name', placeholder='Full name', value='Tran Gia Bao Thy')
								.row
									.form-group.col-xs-12
										label(for='email') My email
										input#email.form-control.input-group-lg(type='text', name='email', title='Enter email', placeholder='Email', value='trangiabaothy.96@gmail.com', disabled)
								.row
									.form-group.col-xs-12
										label(for='room') My room
										input#room.form-control.input-group-lg(type='text', name='room', title='Enter room', placeholder='Room', value='A1', disabled)
								.row
									.form-group.col-xs-12
										label(for='birthday') Date of birth
										input#birthday.form-control.input-group-lg(type='date', name='birthday', title='Enter birthday', placeholder='birthday', value='1996-04-21')
								.form-group.gender
									span.custom-label 
										strong I am a:
									label#female.radio-inline Female
										input(type='radio', name='optradio', value='female', checked)
									label#male.radio-inline Male
										input(type='radio', name='optradio', value='male')
								button.info.btn.btn-primary(method='post') Save change
								
		`;
  }
}

export default MyInfo;