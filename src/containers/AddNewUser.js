import React from 'react';
import axios from 'axios';
import AddUser from '../components/AddUser';
import '../../public/styles/AddUser.scss';

class AddNewUser extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
    this.getData = this.getData.bind(this);
  }
  componentDidMount() {
    this.getData(this);
  }

  componentWillReceiveProps(nexProps) {
    this.getData(this);
  }

  getData(e) {
    axios.get('/adduser/getAll')
      .then(function (response) {
        e.setState({ data: response.data });
      })
      .catch(error => {
        console.log(error.response);
      });
  }

  render() {
    return pug`
      div
        AddUser
        table
          thead
            tr
              th
              th(className='email-col') Email
              th(className='password-col') Password
              th(className='name-col') Name
              th(className='birthday-col') Birthday
              th(className='sex-col') Gender
              th(className='room-col') Room
              th(className='admin-col') Admin
          tbody
            each user in this.state.data
              tr(key=user._id)
                td(className='counterCell')
                td(className='email-col') #{user.email}
                td(className='password-col') #{user.password}
                td(className='name-col') #{user.name}
                td(className='birthday-col') #{user.birthday}
                td(className='sex-col') #{user.sex}
                td(className='room-col') #{user.room}
                td(className='admin-col') #{user.isAdmin}
    `;
  }
}

export default AddNewUser;