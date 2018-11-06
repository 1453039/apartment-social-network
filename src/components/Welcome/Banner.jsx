import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import logo from '../../../public/images/logo.png';

class Banner extends React.Component {
  render() {
    return pug`
			.banner.col-md-7.col-sm-7
				#wrapper
					div 
						img(src=logo, alt="logo")
					h2#name APSOCIAL
					h3#slogan
						| BEST WAY TO CONNECT 
						| YOUR APARTMENT
		`;
  }
}

export default Banner;