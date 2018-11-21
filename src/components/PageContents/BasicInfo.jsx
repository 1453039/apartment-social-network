import React, { Component } from 'react';
import '../../../public/styles/Info.scss';
import InfoMenu from './InfoMenu.jsx'
import axios from 'axios';
import { Link } from 'react-router-dom';

class MyInfo extends Component {
	constructor(){
		super();
		this.state= {
      user:[]
    }
    this.getUserFromSession = this.getUserFromSession.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeBirthday = this.onChangeBirthday.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.updateInfo = this.updateInfo.bind(this)
    this.onClickSaveChange = this.onClickSaveChange.bind(this)
    this.formatInputDate = this.formatInputDate.bind(this)
  }

	onChangeName(e) {
    const user = this.state.user
    user.name = e.target.value
		this.setState({ user });
  }

  formatInputDate(){
    const date = new Date(this.state.user.birthday)
    const year = ("000" + date.getFullYear()).slice(-4)
    const day = ("0" + date.getDate()).slice(-2)
    const month = ("0" + (date.getMonth() + 1)).slice(-2)
    return (year + '-' + month + '-' + day)
  }
  
	onChangeBirthday(e) {
		const user = this.state.user
    user.birthday = e.target.value
		this.setState({ user });
  }
  onChangeGender(e) {
    const user = this.state.user
    if (e.target.name == "female") {
      user.sex = e.target.value
    }
    if (e.target.name == "male") {
      user.sex = e.target.value
    }
    this.setState({ user });
  }
  
  componentWillMount() {
    this.getUserFromSession(this);
  }

  async getUserFromSession(e) {
    await axios.get("/members/get_user_from_session").then(async (response) => {
      await e.setState({
        user: response.data
      })
    }).catch(err =>{
      console.log("err", err);
    })
  }

  async updateInfo(e) {
    await axios.put("/members/update-info", {
      id: e.state.user._id,
      name: e.state.user.name,
      birthday: e.state.user.birthday,
      sex: e.state.user.sex
    }).then((response) => {
      alert(response.data)
    }).catch(err => {
      console.log("err", err)
    })
  }

  async onClickSaveChange() {
    await this.updateInfo(this);
  }

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
										input#fullname.form-control.input-group-lg(type='text', name='fullname', title='Enter full name', placeholder='Full name', onChange=this.onChangeName, value=this.state.user.name)
								.row
									.form-group.col-xs-12
										label(for='email') My email
										input#email.form-control.input-group-lg(type='text', name='email', title='Enter email', placeholder='Email', value=this.state.user.email, disabled)
								.row
									.form-group.col-xs-12
										label(for='room') My flat
										input#room.form-control.input-group-lg(type='text', name='room', title='Enter flat', placeholder='Flat', value=this.state.user.flat, disabled)
								.row
									.form-group.col-xs-12
										label(for='birthday') Date of birth
										input#birthday.form-control.input-group-lg(type='date', name='birthday', title='Enter birthday', placeholder='birthday', value=this.formatInputDate(), onChange=this.onChangeBirthday)
								.form-group.gender
									span.custom-label 
										strong I am a:
									label#female.radio-inline Female
										input(type='radio', name='female', value='female', onChange=this.onChangeGender, checked=this.state.user.sex=='female')
									label#male.radio-inline Male
										input(type='radio', name='male', value='male',  onChange=this.onChangeGender, checked=this.state.user.sex=='male')
								button.info.btn.btn-primary(type='submit', onClick=this.onClickSaveChange) Save change
		`;
  }
}

export default MyInfo;