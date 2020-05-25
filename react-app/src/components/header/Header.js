import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Menu from "../navbar/navbar";
import './Header.scss';
require('../../utils/Icons');

class Header extends Component {

	get homeLink() {
		let currLocation;
		currLocation = this.props.location.pathname;
		currLocation = currLocation.substr(0, currLocation.length - 5);

		if (this.props.navigationRoot && currLocation !== this.props.navigationRoot) {
			return (<Link className="Header-action" to={this.props.navigationRoot + ".html"}>
				<FontAwesomeIcon icon="chevron-left" />
			</Link>);
		}
		return null;
	}

	render() {
		return (
			<header className="Header">
				<Menu></Menu>
			</header>
		);
	}
}

export default withRouter(Header); 
