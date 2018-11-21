import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { withRouter} from "react-router-dom";
import axios from 'axios';

class ListApart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { listApart } = this.props
    return pug`
      .list-apart.col-md-5.col-sm-5
        #wrapper
          h2.text-white Please choose your Aparment
          .line-divider
          each item in listApart
            Link(key=item._id, to={pathname: '/@'+item._id, state: {id_user: item.id_user}})
              button
                i.fa.fa-building
                p #{item.name}
                  if (item.isAdmin)  
                    b Admin
                  else
                    b Resident
		`;
  }
}

export default withRouter(ListApart);