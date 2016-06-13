import React, { Component } from 'react';
import { setNav } from '../actions/index.js';
import { connect } from 'react-redux';

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.props = props;
	}

	onNavClick(item) {
		this.props.setNav(item);
	}

	render() {
		return (
			<nav>
				<ul>
					{ ['Search', 'Timer', '???'].map((item) => {
						return <li key={item} className={this.props.selectedNav === item ? 'selected' : ''} onClick={()=>this.onNavClick(item)}>{item}</li>;
					})}
				</ul>
			</nav>
		);
	}
}

function mapStateToProps(state) {
	return { selectedNav: state.selectedNav };
}

export default connect(mapStateToProps, { setNav })(Navbar);
