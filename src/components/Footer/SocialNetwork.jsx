import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import footerLogo from '../../../public/images/logo-black.png';

class SocialNetwork extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {socialNetworks} = this.props;
    return pug`
      .col-md-4.col-sm-4
        Link(to="/")
          img(src=footerLogo, alt="logo-img").footer-logo
        ul.list-inline.social-icons
          each item in socialNetworks
            li(key=item.id)
              Link(to=item.link)
                i(className=item.className)
    `;
  }
}

export default SocialNetwork;