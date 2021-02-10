import React, {Component} from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css'
import {Card, CardBody, CardHeader} from 'reactstrap';
import PeopleService from "../service/PeopleService";
import {getPeople} from "../actions/peopleService";


class PeopleTable extends Component {
	constructor(props) {
		super(props);

		this.state = {
			people: []

		}
	}

	componentDidMount() {
		getPeople().then((res) => {
			this.setState({people: res.data})
		})
	}

	render() {

		const columnsPeople = [
			{
				Header: "Jméno",
				accessor: 'celkemKg',
				className: 'text-center',
				filterable: false,
				sortable: false
			},
			{
				Header: "Příjmení",
				accessor: 'celkemKc',
				className: 'text-center',
				filterable: false,
				sortable: false
			},
			{
				Header: "Věk",
				accessor: 'celkemSkutecneKg',
				className: 'text-center',
				filterable: false,
				sortable: false
			},
			{
				Header: "Pohlaví",
				accessor: 'celkemSkutecneKc',
				className: 'text-center',
				filterable: false,
				sortable: false
			},
			{
				Header: "Email",
				accessor: 'datum',
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
						<CardHeader>
							<h1 className="text-center">Seznam lidí</h1>
						</CardHeader>
						<CardBody>
							<ReactTable
									style={{cursor: 'pointer'}}
									showPagination={true}
									data={[]}
									columns={columnsPeople}
									defaultPageSize={[]}
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

