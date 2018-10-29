import React, { Component } from 'react';
import SocialNetwork from './Footer/SocialNetwork.jsx';
import AboutUs from './Footer/AboutUs.jsx';
import '../styles/Footer.scss';

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      socialNetworks : [
        {
          id: 0,
          link: 'https://translate.google.com/?hl=vi',
          className: 'icon ion-social-facebook'
        },
        {
          id: 1,
          link: 'https://translate.google.com/?hl=vi',
          className: 'icon ion-social-twitter'
        },
        {
          id: 2,
          link: 'https://translate.google.com/?hl=vi',
          className: 'icon ion-social-googleplus'
        },
        {
          id: 3,
          link: 'https://translate.google.com/?hl=vi',
          className: 'icon ion-social-pinterest'
        },
        {
          id: 4,
          link: 'https://translate.google.com/?hl=vi',
          className: 'icon ion-social-linkedin'
        }
      ],
      info1: [
        {
          id: 0,
          name: 'About us',
          link: 'https://translate.google.com/?hl=vi'
        },
        {
          id: 1,
          name: 'Contact us',
          link: 'https://translate.google.com/?hl=vi'
        },
        {
          id: 2,
          name: 'Privacy Policy',
          link: 'https://translate.google.com/?hl=vi'
        },
      ],
      info2: [
        {
          id: 0,
          name: 'Terms',
          link: 'https://translate.google.com/?hl=vi'
        },
        {
          id: 1,
          name: 'Help',
          link: 'https://translate.google.com/?hl=vi'
        }
      ]
    }
  }

  render() {
    return pug`
    footer
      .container
        .row
          .footer-wrapper
            SocialNetwork(socialNetworks=this.state.socialNetworks)
            AboutUs(info=this.state.info1)
            AboutUs(info=this.state.info2)
      .copy-right
        p Team 039-049 © 2018. All rights reserved
    `;
  }
}

export default Footer;