import React, { Component } from 'react';

class Search extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchText: '',
			searchField: 'name'
		};
	}

	onInputChange(e) {
		this.setState({ searchText: e.target.value });
	}

	onSelectChange(e) {
		this.setState({ searchField: e.target.value });
	}

	render() {
		return (
			<div>
				<input type="text" value={this.state.searchText} onChange={(e) => this.onInputChange(e) } placeholder="Search..." />
				<div>
					<span>Search against: </span>
					<select defaultValue={this.state.searchField} onChange={(e) =>  this.onSelectChange(e) }>
						<option value="name">Name</option>
						<option value="director">Director</option>
					</select>
				</div>
				<table>
					<thead>
						<tr>
							<td>Name</td>
							<td>Director</td>
						</tr>
					</thead>
					<tbody>
						{ this.props.items.filter((item) => (item[this.state.searchField].toLowerCase()).includes((this.state.searchText).toLowerCase()))
							.map((item) => {
								return (
									<tr key={item.name}>
										<td>{item.name}</td>
										<td>{item.director}</td>
									</tr>
								);
							}) }
					</tbody>
				</table>
			</div>
		);
	}
}

Search.defaultProps = {
	items: [
		{ name: 'Anomalisa', director: 'Charlie Kaufman'},
		{ name: 'Children of Men', director: 'Alfonso Cuarón'},
		{ name: 'Spaceballs', director: 'Mel Brooks'},
		{ name: 'Inception', director: 'Christopher Nolan'},
		{ name: 'Y Tu Mamá También', director: 'Alfonso Cuarón'},
		{ name: 'The Big Lebowski', director: 'The Coen Brothers'}
	]
};

Search.defaultPropTypes = {
	items: React.PropTypes.array
};

export default Search;