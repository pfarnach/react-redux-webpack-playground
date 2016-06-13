import React, { Component } from 'react';
import Timer from '../components/timer';
import Search from '../components/search';
import Navbar from '../components/navbar';

import { connect } from 'react-redux';

const paneMap = {
	Search: <Search />,
	Timer: <Timer startTime={ Date.now() } />,
	'???': <h1>???</h1>
};

class App extends Component {
	render() {
		return (
			<div>
				<Navbar />
				{ paneMap[this.props.selectedNav]}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { selectedNav: state.selectedNav };
}

export default connect(mapStateToProps)(App);