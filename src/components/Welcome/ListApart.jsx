import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import PassForm from './PassForm.jsx';

class ListApart extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			isClick: false
		}
		this.handleClickApart = this.handleClickApart.bind(this);
	}
	handleClickApart() {
		this.setState ({
			isClick: true,
		});
	}
  render() {
		const isClick = this.state.isClick;
		const {listApart} = this.props;
		return pug`
		if !isClick
			.list-apart.col-md-5.col-sm-5
				#wrapper
					h2.text-white Please choose your Aparment
					.line-divider
					each item in listApart
						button(key=item.id, onClick=this.handleClickApart) 
							i.fa.fa-building
							p #{item.name}
								b #{item.position}
		else
			PassForm
		`;
  }
}

export default ListApart;