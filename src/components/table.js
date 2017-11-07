import React, { Component } from 'react';

class table extends Component {
	render(){
		return(
			<div>
				<table className="table table-hover table-bordered table-condensed">
					<tbody>
						<tr>
							<td className="table-header">
							MPG ↓ - Cost →
							</td>
							{this.props.entries.map((e,key) => 
								<td key={key} className="table-header">
									{e.cost}
								</td>
							)}
						</tr>
						{this.props.entries.map((e,key) => 
							<tr key={key}>
								<td className="table-header">
									{e.MPG}
								</td>
							</tr>
							)}
					</tbody>
				</table>
			</div>
		)
	}

}
export default table;