import React from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-modal';
import axios from 'axios';
import { Link } from 'react-router-dom';
var querystring = require('querystring');
import '../../../public/styles/AddUser.scss';

class AddUser extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      room: '',
      isAdmin: false,
      messageFromServer: '',
      modalIsOpen: false
    }
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.insertNewUser = this.insertNewUser.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.sendMail = this.sendMail.bind(this);
  }
  openModal() {
    this.setState({
      modalIsOpen: true
    });
  }
  closeModal() {
    this.setState({
      email: '',
      room: '',
      isAdmin: false,
      modalIsOpen: false,
      messageFromServer: ''
    });
  }
  onClick(e) {
    this.insertNewUser(this);
    this.sendMail(this);
  }
  insertNewUser(e) {
    axios.post('/members/insert',
      querystring.stringify({
        email: e.state.email,
        room: e.state.room,
        isAdmin: e.state.isAdmin,
        id: '5be40332a4aa5bc40cdbe0d9'
      }), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }).then(function (response) {
        e.setState({
          messageFromServer: response.data
        });
      })
      .catch(error => {
        console.log(error.response);
      });
  }
  sendMail(e) {
    axios.post('/members/send',{
      email: e.state.email
    }).then((response) => {
        if (response.data.msg === 'success') {
          alert("Message Sent.");
        } else if (response.data.msg === 'fail') {
          alert("Message failed to send.")
        }
      }).catch(err => {
        console.log(err);
      });
  }
  handleTextChange(e) {
    if (e.target.name == "email") {
      this.setState({
        email: e.target.value
      });
    }
    if (e.target.name == "room") {
      this.setState({
        room: e.target.value
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
          Modal(isOpen=this.state.modalIsOpen, onRequestClose=this.closeModal, contentLabel="Add User").Modal
            Link(to={ pathname: '/members', search: '' } style={ textDecoration: 'none' })
              Button(onClick=this.closeModal)
                span(className="closebtn glyphicon glyphicon-remove")
            fieldset#form
              label(for="email").full-screen Email:
                input(type="text", name="email", value=this.state.email, onChange=this.handleTextChange, required)#email.form-control.input-group-lg
              label(for="room").full-screen Room:
                input(type="text", name="room", value=this.state.room, onChange=this.handleTextChange, required)#room.form-control.input-group-lg
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
          Modal(isOpen=this.state.modalIsOpen, onAfterOpen=this.afterOpenModal, onRequestClose=this.closeModal, contentLabel="Add User").Modal
            div(className='button-center')
              h3 #{mess}
              Link(to={ pathname: '/members', search: '' }, style={ textDecoration: 'none' })
                Button(onClick=this.closeModal) Close the Dialog
      `;
    }
  }
}

Modal.setAppElement('#root');

export default AddUser;