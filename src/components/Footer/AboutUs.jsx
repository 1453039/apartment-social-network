import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {info} = this.props;
    return pug`
      .col-md-4.col-sm-4
        ul.footer-links
          each item in info
            li(key=item.id)
              Link(to=item.link) #{item.name}
    `;
  }
}

export default AboutUs;