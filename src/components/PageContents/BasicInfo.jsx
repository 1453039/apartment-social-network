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
									p.custom-label
										strong Date of birth
									.form-group.col-sm-3.col-xs-6  
										label.sr-only(for='day')
										input#day.form-control(type='text', name='day', title='Enter day', placeholder='Day', value='21')
									.form-group.col-sm-3.col-xs-6  
										label.sr-only(for='month')
										input#month.form-control(type='text', name='month', title='Enter month', placeholder='Month', value='04')
									.form-group.col-sm-3.col-xs-6  
										label.sr-only(for='year')
										input#year.form-control(type='text', name='year', title='Enter year', placeholder='Year', value='1996')
								.form-group.gender
									span.custom-label 
										strong I am a:
									label#female.radio-inline Female
										input(type='radio', name='optradio', value='female')
									label#male.radio-inline Male
										input(type='radio', name='optradio', value='male')
								button.btn.btn-primary(method='post') Save change
								
		`;
  }
}

export default MyInfo;