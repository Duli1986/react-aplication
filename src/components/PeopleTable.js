import React, {Component} from 'react';
import ReactTable from "react-table";
import {Card, CardBody, CardHeader} from 'reactstrap';


class PeopleTable extends Component {
	constructor(props) {
		super(props);

		this.state = {
			people: []

		}
	}

	render() {

		const columnsPeople = [
			{
				Header: "Jméno",
				accessor: 'firstName',
				className: 'text-center',
				filterable: false,
				sortable: false
			},
			{
				Header: "Příjmení",
				accessor: 'secondName',
				className: 'text-center',
				filterable: false,
				sortable: false
			},
			{
				Header: "Věk",
				accessor: 'age',
				className: 'text-center',
				filterable: false,
				sortable: false
			},
			{
				Header: "Pohlaví",
				accessor: 'sex',
				className: 'text-center',
				filterable: false,
				sortable: false
			},
			{
				Header: "Email",
				accessor: 'email',
				className: 'text-center',
				filterable: false
			},
			{
				Header: "Akce",
				className: 'text-center',
				sortable: false,
				filterable: false
			}
		];

		return (

				<div>
					<div className="row">
					<Card className="m-3 animated fadeIn">
						<CardBody>
							<ReactTable
									style={{cursor: 'pointer'}}
									showPagination={true}
									data={this.state.people}
									columns={columnsPeople}
									previousText={"Zpět"}
									nextText={"Dále"}
									pageText={"Stránka"}
									noDataText={"Nebyly nalezeny žádné pohyby ... "}
									filterable={false}
									showPageSizeOptions={false}
									sortable
							/>
						</CardBody>
					</Card>
					</div>
				</div>
		)
	}
}

export default PeopleTable;

