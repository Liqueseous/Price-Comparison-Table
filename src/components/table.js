import React, { Component } from 'react';

class table extends Component {
	render(){
		return(
			<div>
				<table>
					<tbody>
						<tr>
							<td>
							</td>
							{this.props.entries.map((e,key) => 
								<td key={key}>
									{e.cost}
								</td>
							)}
						</tr>
						{this.props.entries.map((e,key) => 
							<tr key={key}>
								<td>
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