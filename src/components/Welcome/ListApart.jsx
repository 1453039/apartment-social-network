import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { withRouter} from "react-router-dom";

class ListApart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listApart: this.props
    }
    this.handleClickApart = this.handleClickApart.bind(this);
  }
  handleClickApart(e){
    axios.get('/members/')
  }

  render() {
    const isClick = this.state.isClick;
    const { listApart, listUsers } = this.props;
    return pug`
      .list-apart.col-md-5.col-sm-5
        #wrapper
          h2.text-white Please choose your Aparment
          .line-divider
          each item in listApart
            Link(key=item._id, to='/@'+item._id, onClick=this.handleClickApart)
              button
                i.fa.fa-building
                p #{item.name}
                  if (item.isAdmin)  
                    b Admin
                  else
                    b Resident
            button(key=item._id)
              i.fa.fa-building
              p #{item.name}
                b Resident
		`;
  }
}

export default withRouter(ListApart);