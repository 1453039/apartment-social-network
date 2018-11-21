import React, { Component } from 'react';
import '../../../public/styles/Info.scss';
import InfoMenu from './InfoMenu.jsx'
import { BrowserRouter as Router, Link } from 'react-router-dom';

class EditPass extends Component {
  render() {
    return pug`
			#page-contents
				.row
					.col-md-4
						InfoMenu
					.col-md-6
						.edit-profile-container
							.block-title
								h4.grey 
									i.icon.ion-ios-locked-outline
									| Edit password
							.edit-block
								form.form-inline#education(name='update-pass')
								.row
									.form-group.col-xs-12
										label(for='my-password') Old password
										input#my-password.form-control.input-group-lg(type='password', name='password', title='Enter password', placeholder='Old password', required)
								.row
									.form-group.col-xs-6
										label New password
										input#email.form-control.input-group-lg(type='password', name='password', title='Enter password', placeholder='New password', required)
									.form-group.col-xs-6
										label Confirm password
										input#email.form-control.input-group-lg(type='password', name='password', title='Enter password', placeholder='Confirm password', required)
								p
									Link(to='/') Forgot password?
								button.btn.btn-primary.info(method='post', type='submit') Update password
		`;
  }
}

export default EditPass;