import React, { Component } from 'react';

class table extends Component {
	render(){
		return(
			<div>
				<table className="table table-hover table-bordered table-condensed table-responsive">
					
						<thead className="thead-dark">
							<tr>
								<th>
								</th>
								{this.props.entries.map((e,key) => 
									<th key={key}>
										$ {e.cost}
									</th>
								)}
							</tr>
						</thead>
					<tbody>	
						{this.props.entries.map((e,key) => 
							<tr key={key}>
								<td className="table-header">
									{e.MPG} mpg
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