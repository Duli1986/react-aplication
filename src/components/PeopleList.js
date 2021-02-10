import React, {Component} from 'react';

class PeopleList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			people: []

		}
	}

	render() {
		return (
				<div>
					<h2 className="text-center">Seznam lidí</h2>
					<div className="row">
						<table className="table table-striped table-bordered">
							<thead>
								<tr>
									<th>Jméno</th>
									<th>Příjmení</th>
									<th>Věk</th>
									<th>Pohlaví</th>
									<th>Email</th>
									<th>Akce</th>
								</tr>
							</thead>
							<tbody>

							</tbody>
						</table>
					</div>
				</div>
		);
	}
}

export default PeopleList;
