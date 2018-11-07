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
      modalIsOpen: false,
      messageFromServer: ''
    });
  }
  componentDidMount() {
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
        id: '5bdff073d91fab88e2fd01f0'
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
    axios.post('/send',
      querystring.stringify({
        email: e.state.email
      })).then((response) => {
        if (response.data.msg === 'success') {
          alert("Message Sent.");
          // this.resetForm()
        } else if (response.data.msg === 'fail') {
          alert("Message failed to send.")
        }
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
          Button(bsStyle="success", bsSize="small", onClick=this.openModal)
            span(className="glyphicon glyphicon-plus")
          Modal(isOpen=this.state.modalIsOpen, onRequestClose=this.closeModal, contentLabel="Add User", className="Modal")
            Link(to={ pathname: '/add-user', search: '' } style={ textDecoration: 'none' })
              Button(bsStyle="danger", bsSize="xs", onClick=this.closeModal)
                span(className="closebtn glyphicon glyphicon-remove")
            fieldset
              label(for="email").full-screen Email:
                input(type="text", id="email", name="email", value=this.state.email, onChange=this.handleTextChange)
              label(for="room").full-screen Room:
                input(type="text", id="room", name="room", value=this.state.room, onChange=this.handleTextChange)
              .form-group.isAdmin
                span.custom-label 
                  strong Admin:  
                label#female.radio-inline.gender Yes
                  input(type='radio', name='admin1', value='true', checked=this.state.isAdmin === true, onChange=this.handleOptionChange)
                label#male.radio-inline.gender No
                  input(type='radio', name='admin2', value='false', checked=this.state.isAdmin === false, onChange=this.handleOptionChange)
            div(className='button-center')
              Button(bsStyle="success", bsSize="small", onClick=this.onClick) Invite
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