import React, { Component } from 'react';

class form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cost: '',
			MPG: '',
		}

	}
	
	onChange = (e) => {
		this.setState({
			[e.target.name]: [e.target.value]
		})
	}
	mySubmit = (e) => {
		e.preventDefault();
		this.props.createEntry(this.state);
		this.props.clicked();
	}

	render(){
		return (
			<div>
				<form onSubmit={(e) => this.mySubmit(e)}>
					<div>
						<label htmlFor="cost">Cost of Vehicle:</label>
						<input value={this.state.cost} onChange={this.onChange} name="cost" id="cost" type="text" placeholder="Cost" />
					</div>
					<div><label htmlFor="MPG">Fuel Mileage:</label>
						<input value={this.state.MPG} onChange={this.onChange} name="MPG" id="MPG" type="text" placeholder="MPG" />
					</div>
					<div className="btn-group btn-group-sm btn-form">
						<button className="btn btn-success" type="submit">Submit</button>
						<button className="btn btn-info" onClick={this.props.clicked}>Close</button>
					</div>
				</form>
				
			</div>
		)
	}

}
export default form;