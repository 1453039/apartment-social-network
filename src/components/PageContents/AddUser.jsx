import React from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-modal';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import '../../../public/styles/AddUser.scss';
import DEFAULT_AVATAR from '../../../public/images/avatar-default.png'
import DEFAULT_COVER from '../../../public/images/default-cover.jpg'

class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      flat: '',
      isAdmin: false,
      messageFromServer: '',
      modalIsOpen: false,
      id: this.props.match.params.id
    }
    this.getLink = this.getLink.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.insertNewUser = this.insertNewUser.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.sendMail = this.sendMail.bind(this);
  }

  getLink(link) {
    return "/@" + this.state.id + "?" + link
  }

  openModal() {
    this.setState({
      modalIsOpen: true
    });
  }
  closeModal() {
    this.setState({
      email: '',
      flat: '',
      isAdmin: false,
      modalIsOpen: false,
      messageFromServer: ''
    });
  }
  onClick(e) {
    this.insertNewUser(this);
    // this.sendMail(this);
  }
  async insertNewUser(e) {
    try {
      await axios.post('/members/insert', {
        email: e.state.email,
        flat: e.state.flat,
        isAdmin: e.state.isAdmin,
        id: e.state.id,
        avatar: DEFAULT_AVATAR,
        cover: DEFAULT_COVERs
      }).then(async function (response) {
        await e.setState({
          messageFromServer: response.data
        });
      })
    }
    catch (error) {
      console.log("error", error);
    }
  }
  async sendMail(e) {
    try {
      await axios.post('/members/send', {
        email: e.state.email,
        id: e.state.id
      }).then((response) => {
        if (response.data.msg === 'success') {
          alert("Message Sent.");
        } else if (response.data.msg === 'fail') {
          alert("Message failed to send.")
        }
      })
    }
    catch (err) {
      console.log("err", err);
    }
  }
  handleTextChange(e) {
    if (e.target.name == "email") {
      this.setState({
        email: e.target.value
      });
    }
    if (e.target.name == "flat") {
      this.setState({
        flat: e.target.value
      });
    }
  }

  str2bool(value) {
    if (value && typeof value === 'string') {
      if (value === "true") return true;
      if (value === "false") return false;
    }
    return value;
  }

  handleOptionChange(e) {
    if (e.target.name == "admin1") {
      this.setState({
        isAdmin: this.str2bool(e.target.value)
      });
    }
    if (e.target.name == "admin2") {
      this.setState({
        isAdmin: this.str2bool(e.target.value)
      });
    }
  }
  render() {
    const mess = this.state.messageFromServer;
    if (mess == '') {
      return pug`
        div
          Button(onClick=this.openModal)#add-member.btn.btn-primary Add member
          if(this.state.modalIsOpen)
            .overlay
              .Modal(isOpen=this.state.modalIsOpen, onRequestClose=this.closeModal, contentLabel="Add User")
                Link(to=this.getLink("members") style={ textDecoration: 'none' })
                  Button.close-btn(onClick=this.closeModal)
                    span(className="closebtn glyphicon glyphicon-remove")
                fieldset#form
                  label(for="email").full-screen Email:
                    input(type="text", name="email", value=this.state.email, onChange=this.handleTextChange, required)#email.form-control.input-group-lg
                  label(for="flat").full-screen Flat:
                    input(type="text", name="flat", value=this.state.isAdmin ? '' : this.state.flat, onChange=this.handleTextChange, disabled=this.state.isAdmin)#room.form-control.input-group-lg
                  .form-group.isAdmin
                    span.custom-label 
                      strong Admin:  
                    label#female.radio-inline.gender Yes
                      input(type='radio', name='admin1', value='true', checked=this.state.isAdmin === true, onChange=this.handleOptionChange).gender
                    label#male.radio-inline.gender No
                      input(type='radio', name='admin2', value='false', checked=this.state.isAdmin === false, onChange=this.handleOptionChange).gender
                div(className='button-center')
                  Button(onClick=this.onClick, type='submit')#invite.btn.btn-primary Invite
      `;
    }
    else {
      return pug`
      div
        Button(onClick=this.openModal)#add-member.btn.btn-primary Add member
        .overlay
          .Modal(isOpen=this.state.modalIsOpen, onAfterOpen=this.afterOpenModal, onRequestClose=this.closeModal, contentLabel="Add User")
            div(className='button-center')
              h3 #{mess}
              Link(to={ pathname: this.getLink("members"), search: '' }, style={ textDecoration: 'none' })
                Button(onClick=this.closeModal) Close the Dialog
      `;
    }
  }
}

Modal.setAppElement('#root');

export default withRouter(AddUser);