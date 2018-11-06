import React from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-modal';
import axios from 'axios';
import { Link } from 'react-router-dom';
var querystring = require('querystring');

class AddUser extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      name: '',
      birthday: '',
      sex: '',
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
  }
  insertNewUser(e) {
    axios.post('/adduser/insert',
      querystring.stringify({
        email: e.state.email,
        password: e.state.password,
        name: e.state.name,
        birthday: e.state.birthday,
        sex: e.state.sex,
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
  handleTextChange(e) {
    if (e.target.name == "email") {
      this.setState({
        email: e.target.value
      });
    }
    if (e.target.name == "password") {
      this.setState({
        password: e.target.value
      });
    }
    if (e.target.name == "name") {
      this.setState({
        name: e.target.value
      });
    }
    if (e.target.name == "room") {
      this.setState({
        room: e.target.value
      });
    }
    if (e.target.name == "birthday") {
      this.setState({
        birthday: e.target.value
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
    if (e.target.name == "gender1") {
      this.setState({
        sex: e.target.value
      });
    }
    if (e.target.name == "gender2") {
      this.setState({
        sex: e.target.value
      });
    }
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
            Link(to={ pathname: '/adduser', search: '' } style={ textDecoration: 'none' })
              Button(bsStyle="danger", bsSize="xs", onClick=this.closeModal)
                span(className="closebtn glyphicon glyphicon-remove")
            fieldset
              label(for="email") Email:
                input(type="text", id="email", name="email", value=this.state.email, onChange=this.handleTextChange)
              label(for="password") Password:
                input(type="password", id="password", name="password", value=this.state.password, onChange=this.handleTextChange)
              label(for="name") Name:
                input(type="text", id="name", name="name", value=this.state.name, onChange=this.handleTextChange)
              label(for='birthday') Date of birth
                input#birthday.form-control.input-group-lg(type='date', name='birthday', title='Enter birthday', placeholder='birthday', value=this.state.birthday, onChange=this.handleTextChange)
              .form-group.gender
                span.custom-label 
                  strong Gender:  
                label#female.radio-inline Female
                  input(type='radio', name='gender1', value='female', checked=this.state.sex === 'female', onChange=this.handleOptionChange)
                label#male.radio-inline Male
                  input(type='radio', name='gender2', value='male', checked=this.state.sex === 'male', onChange=this.handleOptionChange)
              label(for="room") Room:
                input(type="text", id="room", name="room", value=this.state.room, onChange=this.handleTextChange)
              .form-group.gender
                span.custom-label 
                  strong Admin:  
                label#female.radio-inline Yes
                  input(type='radio', name='admin1', value='true', checked=this.state.isAdmin === true, onChange=this.handleOptionChange)
                label#male.radio-inline No
                  input(type='radio', name='admin2', value='false', checked=this.state.isAdmin === false, onChange=this.handleOptionChange)
            div(className='button-center')
              Button(bsStyle="success", bsSize="small", onClick=this.onClick) Add New User
      `;
    }
    else {
      return pug`
        div
          Button(bsStyle="success", bsSize="small", onClick=this.openModal)
            span(className="glyphicon glyphicon-plus")
          Modal(isOpen=this.state.modalIsOpen, onAfterOpen=this.afterOpenModal, onRequestClose=this.closeModal, contentLabel="Add User", className="Modal")
            div(className='button-center')
              h3 #{mess}
              Link(to={ pathname: '/adduser', search: '' }, style={ textDecoration: 'none' })
                Button(bsStyle="success", bsSize="xs", onClick=this.closeModal) Close the Dialog
      `;
    }
  }
}

Modal.setAppElement('#root');

export default AddUser;