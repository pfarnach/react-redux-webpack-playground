import React, { Component } from 'react';

class Timer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			elapsedTime: 0
		};
	}

	componentDidMount() {
		this.timer = setInterval(this.incrementTime.bind(this), 100);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	incrementTime() {
		this.setState({ elapsedTime: new Date() - this.props.startTime });
	}

	render() {
		const seconds = (this.state.elapsedTime / 1000).toFixed(1);
		
		return (
			<div>
				<span>Time: {seconds}</span>
			</div>
		);
	}
}

export default Timer;