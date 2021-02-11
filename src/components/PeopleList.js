import React, {useMemo} from 'react';
import {columnsPeople} from "./columns";
import '../table.css';
import {useTable} from "react-table";

export const PeopleList = () => {
	const columns = useMemo(() => columnsPeople, [])

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = useTable({
		columns: columns,
		data: [],
	})

	return (
			<table {...getTableProps()}>
				<thead>
				{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
									<th {...column.getHeaderProps()}>{column.render(
											'Header')}</th>
							))}
						</tr>
				))}
				</thead>
				<tbody {...getTableBodyProps()}>
				{rows.map((row) => {
					prepareRow(row)
					return (
							<tr {...row.getRowProps()}>
								{row.cell.map((cell) => {
									return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
								})}
							</tr>
					)
				})
				}
				</tbody>
			</table>
	);
}

export default PeopleList;
